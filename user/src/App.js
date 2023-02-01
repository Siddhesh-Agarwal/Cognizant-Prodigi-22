import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import MyOrders from "./MyOrders"
import Feedback from "./Feedback"


// import Register from "./Register"//Register
// import Alpha from "./Alpha"//User Homepage
// import Service from "./Service"//Searching
// import Beta from "./Beta"//Payment
// import Delta from "./Delta"//Task Creation
// import Star from "./Star"// Magalir , physically challenged
// import Grievance from "./Grievance"//Grievance
// import Community from "./Community"//Community

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/orders' element={< Orders />}></Route>
                <Route exact path='/track' element={< MyOrders />}></Route>
                <Route exact path='/feedback' element={< Feedback />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
