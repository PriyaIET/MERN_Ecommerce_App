import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Products = lazy(()=> import("./pages/Products"))
const Transaction = lazy(()=> import("./pages/Transaction"))
const Customer = lazy(()=> import("./pages/Customer"))
const NewProduct = lazy(()=> import("./pages/management/NewProduct"))
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"))
const TransactionMangement = lazy(()=> import("./pages/management/TransactionMangement"));
const BarCharts = lazy(()=> import("./pages/charts/BarCharts"))
const PieCharts = lazy(()=> import("./pages/charts/PieCharts"))
const LineCharts = lazy(()=> import("./pages/charts/LineCharts"))
const Stopwatch = lazy(()=>import("./pages/apps/Stopwatch"))
const Coupon = lazy(()=>import("./pages/apps/Coupon"))
const Toss = lazy(()=>import("./pages/apps/Toss"))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path="/" element={<Link to="/admin/dashboard"><button style={{
                padding:"2rem",
                position:"absolute",
                top:"50%",
                left:"50%",
                transform: "translate(-50%, -50%)",
                borderRadius:"10rem",
                backgroundColor:"rgba(120, 120, 250)",
                color:"white"
              }}>Visit admin dashboard</button></Link>}/>
              <Route path="/admin/dashboard" element={<Dashboard/>}/>
              <Route path="/admin/product" element={<Products/>}/>
              <Route path="/admin/transaction" element={<Transaction/>}/>
              <Route path="/admin/customer" element={<Customer/>}/>

              {/* Charts */}
              <Route path="/admin/chart/bar" element ={<BarCharts/>}/>
              <Route path="/admin/chart/pie" element ={<PieCharts/>}/>
              <Route path="/admin/chart/line" element ={<LineCharts/>}/>
              {/* Apps  */}
              <Route path="/admin/app/stopwatch" element={<Stopwatch/>}/>
              <Route path="/admin/app/coupon" element={<Coupon/>}/>
              <Route path="/admin/app/toss" element={<Toss/>}/>
              {/* Management  */}
              <Route path="/admin/product/new" element={<NewProduct/>}/>
              <Route path="/admin/product/:id" element={<ProductManagement/>}/>
              <Route path="/admin/transactions/:id" element={<TransactionMangement/>}/>
          </Routes>
        </Suspense>
    </Router>
  )
}

export default App