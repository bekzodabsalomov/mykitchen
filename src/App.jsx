import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
      ],
    },
  ]);
  return (
    <div className="font-inter">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
