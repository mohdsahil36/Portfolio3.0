import Navbar from "@/components/Navbar/Navbar";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function Home() {
  return (
    <div className="max-w-2xl min-h-[100vh] mx-auto p-8">
        <header>
          <Navbar/>
        </header>
        <main>
            The content will be entered here
        </main>
        <footer>
          
        </footer>
    </div>
  );
}
