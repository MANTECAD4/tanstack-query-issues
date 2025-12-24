import { createBrowserRouter, Navigate } from "react-router-dom";
import { GitApp } from "../GitApp";

import { ListView, IssueView, ListViewInfiniteScroll } from "../issues/views";

export const router = createBrowserRouter([
  {
    path: "/issues",
    element: <GitApp />,
    children: [
      { index: true, element: <Navigate to="list-infinite" /> },
      { path: "list", element: <ListView /> },
      { path: "list-infinite", element: <ListViewInfiniteScroll /> },
      { path: "issue/:id", element: <IssueView /> },
      { path: "*", element: <Navigate to="list-infinite" /> },
    ],
  },
  {
    path: "/",
    element: <Navigate to="issues/list" />,
  },
  {
    path: "*",
    element: <h1>Not found</h1>,
  },
]);
