import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="bg-background py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-foreground text-2xl font-bold">
          Sentinel
        </Link>
        <nav>
          <Link href="/login" className="text-foreground">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/signup" className="text-foreground">
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
