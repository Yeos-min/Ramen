import { createBrowserRouter } from "react-router";
import Root from "./Root";
import PreferenceSelectionPage from "./pages/PreferenceSelectionPage";
import ResultsPage from "./pages/ResultsPage";
import ShopDetailPage from "./pages/ShopDetailPage";
import MapPage from "./pages/MapPage";
import NotebookPage from "./pages/NotebookPage";
import EventsPage from "./pages/EventsPage";

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
      { path: "events", Component: EventsPage },
    ],
  },
], { basename: '/Ramen/' }); // <--- 끝부분에 쉼표와 basename이 추가되었습니다.
