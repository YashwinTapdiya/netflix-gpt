import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartedPage from "./StartedPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <StartedPage/>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
