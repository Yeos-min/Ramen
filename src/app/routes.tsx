import { createBrowserRouter } from "react-router";
import Root from "./Root";
import PreferenceSelectionPage from "./pages/PreferenceSelectionPage";
import ResultsPage from "./pages/ResultsPage";
import ShopDetailPage from "./pages/ShopDetailPage";
import MapPage from "./pages/MapPage";
import NotebookPage from "./pages/NotebookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: PreferenceSelectionPage },
      { path: "results", Component: ResultsPage },
      { path: "shop/:id", Component: ShopDetailPage },
      { path: "map", Component: MapPage },
      { path: "notebook", Component: NotebookPage },
    ],
  },
]);
