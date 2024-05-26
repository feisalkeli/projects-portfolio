import Hero from "./components/Hero";
import { FloatingNav as Navbar } from "./components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Navbar navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
