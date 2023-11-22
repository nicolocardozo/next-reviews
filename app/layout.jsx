import Link from "next/link";
import "./global.css";
import Navbar from "../components/Navbar";
import { orbitron, exo2 } from "./fonts";

export const metadata = {
  title: { default: "Indie Gamer", template: "Indie Gamer | %s" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="flex flex-col min-h-screen px-4 py-2 bg-orange-50">
        <header className="px-3">
          <Navbar />
        </header>
        <main className="grow p-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs text-slate-500">
          Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank" className="text-orange-800 hover:underline">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
