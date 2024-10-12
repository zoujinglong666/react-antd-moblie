import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
const router = createBrowserRouter([
    {
        path: "/", //主页路径
        element: <Layout />,
    },
    {
        path: "/about", //主页路径
        element: <div>About</div>,
    },
]);

export default router;
