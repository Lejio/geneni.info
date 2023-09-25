import Header from "./components/Header";
import NavbarComponent from "./components/NavbarComponent";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <Header />
      <AboutSection />
      <TimelineSection />
      <Footer />
    </main>
  );
}
