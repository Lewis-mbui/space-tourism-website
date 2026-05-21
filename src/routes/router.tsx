import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import DestinationsPage from "../pages/DestinationsPage";
import CrewPage from "../pages/CrewPage";
import TechnologyPage from "../pages/TechnologyPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "destination", element: <DestinationsPage /> },
      { path: "crew", element: <CrewPage /> },
      { path: "technology", element: <TechnologyPage /> },
    ],
  },
]);

export default router;
