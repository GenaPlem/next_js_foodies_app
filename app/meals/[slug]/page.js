const Meal = ({ params }) => {
  return (
    <>
      <h1>Meal Page</h1>
      <p>{params.slug}</p>
    </>
  );
};

export default Meal;
