import Hero from "./components/Hero";
import TechnicalStack from "./components/TechnicalStack";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center w-full">
      <div className="w-full max-w-xl">
        <Hero />
        <TechnicalStack />
      </div>
      <Footer />
    </main>
  );
}
