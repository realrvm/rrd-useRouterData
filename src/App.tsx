import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home, About } from "@/components";
import { LoaderFunction as HomeLoader } from "@/api/loader";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route
        index
        element={<Home />}
        loader={HomeLoader}
        errorElement={<h1>An Error occured</h1>}
      />
      <Route path="/about" element={<About />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
