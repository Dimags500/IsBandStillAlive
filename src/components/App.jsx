import { Admin } from "../pages/admin/Admin";
import { NavBar } from "./navbar/NavBar";
import { BrowserRouter, Route, Link } from "react-router-dom";




export default function App (){


    return (

        <>
        <BrowserRouter>
        <NavBar />
        </BrowserRouter>
        
        </>
    );
}