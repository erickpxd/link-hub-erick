import Hero from "./components/Hero";
import TechnicalStack from "./components/TechnicalStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Hero />
      <TechnicalStack />
      <Footer />
    </main>
  );
}
