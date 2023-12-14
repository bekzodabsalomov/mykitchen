import React from "react";
import { useFetch } from "../hooks/useFetch";
import RecipeList from "../components/RecipeList";
import recipeUrl from "../../data/data";
function Home() {
  const {
    data: recipies,
    isPending,
    error,
  } = useFetch(recipeUrl);
  if (recipies === null) {
    return (
      <div>
        <h1 className="text-center text-3xl">Kutib Turing...</h1>
      </div>
    );
  }
  return <>{recipies && <RecipeList recipies={recipies} />}</>;
}

export default Home;
