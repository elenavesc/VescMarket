import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CatalogBaby from "../pages/CatalogBaby";
import CatalogChildren from "../pages/CatalogChildren";
import CatalogFlamenca from "../pages/CatalogFlamenca";
import CatalogInvitada from "../pages/CatalogInvitada";
import CatalogOtherEvents from "../pages/CatalogOtherEvents";
import ContactForm from "../pages/ContactForm";
import AboutUs from "../pages/AboutUs";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogChildren" element={<CatalogChildren />} />
        <Route path="/catalogBaby" element={<CatalogBaby/>}/>
        <Route path="/catalogFlamenca" element={<CatalogFlamenca/>}/>
        <Route path="/catalogInvitada" element={<CatalogInvitada/>}/>
        <Route path="/catalogOtherEvents" element={<CatalogOtherEvents/>}/>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;