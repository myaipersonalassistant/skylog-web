import { readFile, writeFile } from "node:fs/promises";

// The pen animation now lives in terms.json after the legal animation filenames were swapped.
const fileUrl = new URL("../public/terms.json", import.meta.url);
const animation = JSON.parse(await readFile(fileUrl, "utf8"));

const penComposition = animation.assets.find((asset) => asset.id === "comp_0");
const signatureLayer = penComposition?.layers.find((layer) => layer.nm === "SIG");
const penLayer = penComposition?.layers.find((layer) => layer.nm === "pen");

if (!signatureLayer || !penLayer) {
  throw new Error("The Terms animation pen or signature layer could not be found.");
}

function cubic(start, controlOne, controlTwo, end, steps = 10) {
  return Array.from({ length: steps + 1 }, (_, index) => {
    const t = index / steps;
    const inverse = 1 - t;
    return [0, 1].map(
      (axis) =>
        inverse ** 3 * start[axis] +
        3 * inverse ** 2 * t * controlOne[axis] +
        3 * inverse * t ** 2 * controlTwo[axis] +
        t ** 3 * end[axis],
    );
  });
}

function join(...segments) {
  return segments.flatMap((segment, index) => (index === 0 ? segment : segment.slice(1)));
}

function line(start, end, steps = 6) {
  return Array.from({ length: steps + 1 }, (_, index) => {
    const progress = index / steps;
    return [
      start[0] + (end[0] - start[0]) * progress,
      start[1] + (end[1] - start[1]) * progress,
    ];
  });
}

// Clean monoline lettering. Separate strokes allow natural pen lifts and avoid
// the distracting connector lines created by the previous single-path version.
const sourceStrokes = [
  join(
    cubic([96, 141], [88, 136], [78, 138], [77, 146]),
    cubic([77, 146], [76, 153], [92, 151], [95, 157]),
    cubic([95, 157], [98, 164], [86, 169], [77, 162]),
  ),
  line([104, 137], [104, 166], 10),
  join(line([116, 146], [104, 156], 6), line([108, 152], [117, 166], 7)),
  cubic([121, 147], [121, 156], [122, 164], [128, 161]),
  join(
    cubic([136, 147], [134, 158], [132, 168], [127, 173]),
    cubic([127, 173], [123, 177], [118, 175], [117, 172], 6),
  ),
  join(
    line([145, 138], [145, 162], 10),
    cubic([145, 162], [149, 166], [156, 167], [161, 163], 8),
  ),
  join(
    cubic([170, 148], [161, 148], [160, 163], [169, 164]),
    cubic([169, 164], [178, 165], [179, 149], [170, 148]),
  ),
  join(
    cubic([191, 148], [181, 147], [180, 162], [189, 163]),
    cubic([189, 163], [198, 165], [200, 149], [191, 148]),
  ),
  join(
    cubic([200, 149], [199, 160], [199, 169], [196, 173]),
    cubic([196, 173], [192, 178], [184, 176], [182, 171], 8),
  ),
];

// Fit the complete word inside the document's green writing boundary.
const strokes = sourceStrokes.map((stroke) =>
  stroke.map(([x, y]) => [76 + (x - 76) * 0.76, y]),
);

const layerPosition = signatureLayer.ks.p.k;
const templateGroup = structuredClone(signatureLayer.shapes.find((item) => item.ty === "gr"));
const totalLength = strokes.reduce((sum, stroke) => sum + stroke.length, 0);
const firstFrame = 57;
const drawingFrames = 70;
let currentFrame = firstFrame;
const penKeyframes = [];

signatureLayer.shapes = strokes.map((stroke, strokeIndex) => {
  const group = structuredClone(templateGroup);
  const path = group.it.find((item) => item.ty === "sh");
  const outline = group.it.find((item) => item.ty === "st");
  const transform = group.it.find((item) => item.ty === "tr");
  const strokeDuration = drawingFrames * (stroke.length / totalLength);
  const strokeStart = currentFrame;
  const strokeEnd = strokeStart + strokeDuration;
  const vertices = stroke.map(([x, y]) => [x - layerPosition[0], y - layerPosition[1]]);
  const zeroTangents = vertices.map(() => [0, 0]);

  path.ks.k = { i: zeroTangents, o: zeroTangents, v: vertices, c: false };
  path.nm = `SkyLog stroke ${strokeIndex + 1}`;
  outline.w.k = 2.6;
  outline.lc = 2;
  outline.lj = 2;

  const trim = {
    ty: "tm",
    s: { a: 0, k: 0, ix: 1 },
    e: {
      a: 1,
      k: [
        { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: strokeStart, s: [0] },
        { t: strokeEnd, s: [100] },
      ],
      ix: 2,
    },
    o: { a: 0, k: 0, ix: 3 },
    m: 1,
    ix: 2,
    nm: `Draw SkyLog stroke ${strokeIndex + 1}`,
    mn: "ADBE Vector Filter - Trim",
    hd: false,
  };

  stroke.forEach(([x, y], pointIndex) => {
    penKeyframes.push({
      i: { x: 0.667, y: 1 },
      o: { x: 0.333, y: 0 },
      t: strokeStart + strokeDuration * (pointIndex / (stroke.length - 1)),
      s: [x, y, 0],
      to: [0, 0, 0],
      ti: [0, 0, 0],
    });
  });

  currentFrame = strokeEnd + 0.8;
  group.it = [path, trim, outline, transform];
  group.nm = `SkyLog lettering ${strokeIndex + 1}`;
  return group;
});

penLayer.ks.p.k = penKeyframes;
penLayer.ks.p.k.push(
  {
    i: { x: 0.667, y: 1 },
    o: { x: 0.333, y: 0 },
    t: 137,
    s: [strokes.at(-1).at(-1)[0], strokes.at(-1).at(-1)[1], 0],
    to: [0, 0, 0],
    ti: [0, 0, 0],
  },
  { t: 163, s: [strokes[0][0][0], strokes[0][0][1], 0] },
);

await writeFile(fileUrl, `${JSON.stringify(animation)}\n`);
