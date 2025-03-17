import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalogChildren">Peques</Link>
      <Link to="/catalogBaby">Bebés</Link>
      <Link to="/catalogFlamenca">Flamenca</Link>
      <Link to="/catalogInvitada">Invitada</Link>
      <Link to="/catalogOtherEvents">Eventos</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/aboutUs">Sobre nosotros</Link>
    </nav>
  );
}

export default Navbar;