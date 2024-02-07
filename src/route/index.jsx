import Layout from "../Layout";

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: "",
            },
        ]

    },

]