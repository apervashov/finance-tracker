import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "company/:ticker", element: <CompanyPage/>},
        ]
    }
])