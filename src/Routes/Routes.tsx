import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import App from "../App";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignGuide/DesignGuide";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "company/:ticker", 
                element: <CompanyPage/>,
            children:[
            {path: "company-profile", element: <CompanyProfile/>},
            {path: "income-statement", element: <IncomeStatement/>},
            ]},
            {path: "design-guide", element: <DesignPage/>}
        ]
    }
])