import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>High Maintenance</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/booking">Book</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}
