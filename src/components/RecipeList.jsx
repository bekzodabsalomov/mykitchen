import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipies }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recipies &&
        recipies.map((recipe) => {
          const { id, title, method, img } = recipe;
          return (
            <li key={id}>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={img} alt={title} className="h-[240px]" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-3xl">{title}</h2>
                  <p>{method.substring(0, 100)} ...</p>
                  <Link
                    to={`/recipe/${id}`}
                    className="btn btn-secondary btn-outline "
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default RecipeList;
