import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import CreateCustomer from "./components/CreateCustomer";
import CustomerList from "./components/CustomerList";
import Nav from "./components/Nav";
import EditCustomer from "./components/EditCustomer";
import Home from "./components/Home";

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateCustomer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/customer-list" element={<CustomerList />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
