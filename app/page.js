import Hero from "./components/hero/Hero";
import Masalah from "./components/Masalah";
import Anatomi from "./components/Anatomi";
import Layanan from "./components/Layanan";
import LeadForm from "./components/leadform/LeadForm";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Masalah />
      <Anatomi />
      <Layanan />
      <LeadForm />
      <FAQ />
    </main>
  );
}
