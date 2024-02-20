import Layout from "../Layout";
import Suboutlet from "../component/Suboutlet/";

export const ROUTES = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Suboutlet />,
      },
    ],
  },
];
