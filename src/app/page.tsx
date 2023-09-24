import Header from "./components/Header";
import NavbarComponent from "./components/NavbarComponent";
import { AboutSection } from "./components/AboutSection";

export default function Home() {
  return (
    <main>
      <div>
        <NavbarComponent />
        <Header />
        <AboutSection />
      </div>
    </main>
  );
}
