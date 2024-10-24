import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import { supabase } from "@/supabase";

const db = sql("meals.db");

export const getMeals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const bufferedImage = await meal.image.arrayBuffer();
  const byteArray = new Uint8Array(bufferedImage);

  try {
    const { data, error } = await supabase.storage
      .from("FoodiesApp")
      .upload(fileName, byteArray, {
        contentType: meal.image.type,
      });

    if (error) {
      console.log("Error during upload: ", error);
      throw new Error("Saving image in Supabase failed!");
    }
  } catch (uploadError) {
    throw new Error(`Image upload failed: ${uploadError}`);
  }

  meal.image = fileName;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `
  ).run(meal);
};
