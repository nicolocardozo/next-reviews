import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            className="text-orange-800 hover:underline font-orbitron font-bold"
            href="/"
          >
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link className="text-orange-800 hover:underline" href="/reviews">
            Reviews
          </Link>
        </li>

        <li>
          <Link className="text-orange-800 hover:underline" href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
