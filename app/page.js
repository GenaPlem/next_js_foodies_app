import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <nav>
        <p>
          <Link href="/meals">Meals Here</Link>
        </p>
        <p>
          <Link href="/community">Community</Link>
        </p>
      </nav>
    </main>
  );
}
