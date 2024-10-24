import Link from "next/link";
import Image from "next/image";

import styles from "./meal-item.module.css";

const MealItem = ({ title, slug, image, summary, creator }) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/FoodiesApp/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
