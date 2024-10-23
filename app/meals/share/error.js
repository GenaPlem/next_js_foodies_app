"use client";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to create meal.</p>
      <p>{error.message}</p>
    </main>
  );
};

export default Error;
