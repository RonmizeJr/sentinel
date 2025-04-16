export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Sentinel. All rights reserved.</p>
    </footer>
  );
}
