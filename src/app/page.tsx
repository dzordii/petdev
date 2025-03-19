import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Services } from "./_components/Services";
import { Testmonials } from "./_components/Testmonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testmonials />
    </main>
  );
}
