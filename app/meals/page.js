import Link from "next/link";

const Meals = () => {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/burger">Burger</Link>
      </p>
      <p>
        <Link href="/meals/pizza">Pizza</Link>
      </p>
    </>
  );
};

export default Meals;
