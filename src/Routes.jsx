import React from "react";
import { useRoutes } from "react-router-dom";
import AllBlog from "pages/AllBlog";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <AllBlog />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
