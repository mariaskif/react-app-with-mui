

import { useState } from 'react';
import {

  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import NotFound from './pages/NotFound';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="Create" element={<Create />} />
      <Route path="*" element={<NotFound />} />

      {/* ... etc. */}
    </Route>
  )
);



function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
