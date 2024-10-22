const MealPage = ({ params }) => {
  return (
    <>
      <h1>Meal Page</h1>
      <p>{params.mealSlug}</p>
    </>
  );
};

export default MealPage;
