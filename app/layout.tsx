import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SkyLog — Your personal flight diary",
  description:
    "Log every mile you've flown. Map your routes, earn milestones, and sync your travel story across devices.",
  openGraph: {
    title: "SkyLog — Your sky, your story",
    description:
      "The most beautiful way to track every mile you've ever flown.",
    url: "https://myskylog.com",
    siteName: "SkyLog",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <script
          {...({
            nowprocket: "",
            "data-noptimize": "1",
            "data-cfasync": "false",
            "data-wpfc-render": "false",
            "seraph-accel-crit": "1",
            "data-no-defer": "1",
          } as React.ScriptHTMLAttributes<HTMLScriptElement>)}
          dangerouslySetInnerHTML={{
            __html: `(function () {
      var script = document.createElement("script");
      script.async = 1;
      script.src = 'https://tpembars.com/NTQ2MzI2.js?t=546326';
      document.head.appendChild(script);
  })();`,
          }}
        />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
