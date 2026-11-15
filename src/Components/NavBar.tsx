import logo from "../assets/images/logo.png";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="Thrift Happens Logo" width="100" />
      <h1>Thrift Happens</h1>
    </nav>
  );
}

export default NavBar;
