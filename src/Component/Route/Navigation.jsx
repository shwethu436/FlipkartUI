
import Register from "../Public/Register"
import Login from "../Public/Login"
import Home from "../Public/Home"
import Search from "../Public/Search"
import VerifyOtp from "../Public/VerifyOtp"
import Cart from "../Private/Customer/Cart"
import Orders from "../Private/Customer/Orders"
import SellerDashboard from "../Private/Seller/SellerDashboard"
import Account from "../Private/Common/Account"
import EditProfile from "../Private/Common/EditProfile"
import SellerOrder from "../Private/Seller/SellerOrder"
import WantList from "../Private/Customer/WantList"





const navs =[
    // ----------------------- BEFORE AUTH --------------------------- 
  {
    path: "/seller/register",
    element: <Register role={"SELLER"} />,
    role:"ALL",
    requireAuth: false,
    isVisibleAfterAuth: false,
    
  },
  {
    path: "/customer/register",
    element: <Register role={"CUSTOMER"} />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/login",
    element: <Login />,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp/>,
    requireAuth: false,
    isVisibleAfterAuth: false,
    role: "ALL",
  },
    // -------------------------- BEFORE AND AFTER AUTH ----------------
  {
    path: "/",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // ---------------------- COMMON AND AFTER AUTH ----------------------
  {
    path: "/account",
    element: <Account/>,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/edit-profile",
    element: <EditProfile/>,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  // --------------------------- CUSTOMER --------------------------
  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/orders",
    element: <Orders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/wantList",
    element: <WantList/>,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  // ------------------------- SELLER ----------------------------
  {
    path: "/seller-dashboard",
    element: <SellerDashboard />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/seller-orders",
    element: <SellerOrder/>,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
];
export default navs;