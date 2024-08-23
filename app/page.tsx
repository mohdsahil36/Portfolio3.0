import Navbar from "@/components/Navbar/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Data } from "./data/Data";

export default function Home() {
  return (
    <div className="max-w-2xl min-h-[100vh] mx-auto p-8">
      <header>
        <Navbar />
      </header>
      <main>
        The content will be entered here
      </main>
      <footer className="w-full fixed bottom-1 md:bottom-4 lg:bottom-8 flex items-center justify-center inset-x-0">
        <FloatingDock items={Data.icons} />
      </footer>
    </div>
  );
}
