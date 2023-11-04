import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainlayout";
import HomePages from "../Pages/homepages/home";
import Blog from "../Pages/blogpages/blog";
import OnlineCourse from "../Pages/online-coursepages/online-course";
import Devlab from "../Pages/devlabpages/devlab"
import Business from "../Pages/borntodev-for-businesspages/borntodev-for-business"
import MyAccount from "../Pages/my-accountpages/my-account";
import Cart from "../Pages/cartpages/cart"

const router = createBrowserRouter([
  {
    path: "/Borntodev-client/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomePages />,
      },
      {
        path: "online-course",
        element: <OnlineCourse />,
      },
      {
        path: "devlab",
        element: <Devlab />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "borntodev-for-business",
        element: <Business />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
],{basename:"/Borntodev-client/"});

export default router;
