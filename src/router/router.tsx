import { createHashRouter } from "react-router-dom"
import MainLayout from "../layout/main"

export const router = createHashRouter([{
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <h1 className="text-3xl font-bold underline">Hello world!</h1>
        },
        {
            path: '/shop',
            element: <h1 className="text-3xl font-bold underline">shop</h1>
        }
    ]
}])