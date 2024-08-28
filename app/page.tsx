import { FloatingDock } from "@/components/ui/floating-dock";
import { ModeToggle } from "@/components/theme-toggler";
import Navbar from "@/components/Navbar/Navbar";
import Body from "@/components/Body/Body";
import { Data } from "./data/Data";

export default function Home() {
  return (
    <div className="max-w-2xl min-h-[100vh] mx-auto p-6">
      <header>
        <Navbar />
      </header>
      <main>
        <Body/>
      </main>
      <footer className="w-full fixed bottom-4 lg:bottom-8 flex items-center justify-center inset-x-0">
        <div className="flex justify-center">
          <FloatingDock items={Data.icons} themeToggler={<ModeToggle/>}/>
        </div>
      </footer>
    </div>
  );
}