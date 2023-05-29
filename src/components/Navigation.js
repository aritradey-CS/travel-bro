import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const Navigation = () =>  {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Travel-Bro!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;










































































// ------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize, showButton");

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">


//           <Link to="/" className="navbar-logo">
//             Travel-Bro! <i className="fab fa-typo3" />
//           </Link>

          
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>



//           <ul className={click ? "nav-menu active" : "nav-menu"}>

//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>


//             <li className="nav-item">
//               <Link
//                 to="/services"
//                 className="nav-links"
//                 onClick={closeMobileMenu}>
//                 Services
//               </Link>
//             </li>


//             <li className="nav-item">
//               <Link
//                 to="/product"
//                 className="nav-links"
//                 onClick={closeMobileMenu}>
//                 Product
//               </Link>
//             </li>
            
            
//             <li className="nav-item">
//               <Link
//                 to="/sign-up"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}>
//                 Sign Up
//               </Link>
//             </li>
//           </ul>


//           {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
// --------------------------------------------------------------------------------------------------

