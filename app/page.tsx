import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { ProSection } from "@/components/landing/pro-section";
import { Stories } from "@/components/landing/stories";
import { LoadingOverlayTestButton } from "@/components/loading-overlay-test-button";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stories />
        <ProSection />
      </main>
      <Footer />
      <LoadingOverlayTestButton />
    </>
  );
}
