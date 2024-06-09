import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FirstLesson } from "./labs/1/first";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstLesson />,
  },
]);

export const App = () => {
  return (
    <>
      <Toaster></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
