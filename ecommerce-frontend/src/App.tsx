import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Products = lazy(()=> import("./pages/Products"))
const Transaction = lazy(()=> import("./pages/Transaction"))
const Customer = lazy(()=> import("./pages/Customer"))
const NewProduct = lazy(()=> import("./pages/management/NewProduct"))
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"))
const TransactionMangement = lazy(()=> import("./pages/management/TransactionMangement"))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path="/admin/dashboard" element={<Dashboard/>}/>
              <Route path="/admin/product" element={<Products/>}/>
              <Route path="/admin/transaction" element={<Transaction/>}/>
              <Route path="/admin/customer" element={<Customer/>}/>

              {/* Charts */}

              {/* Apps  */}

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