import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Services } from "./_components/Services";
import { Testimonials } from "./_components/Testimonials";
import { Footer } from "./_components/Footer";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
