import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <nav>
        <Link href="/meals">Meals Here</Link>
        <Link href="/community">Meals Here</Link>
      </nav>
    </main>
  );
}
