import "./App.css";
import { BsCart4 } from "react-icons/bs";
import {LiaCartPlusSolid} from "react-icons/lia";
import {MdOutlineAccountCircle} from "react-icons/md";
import {BiSearchAlt2} from "react-icons/bi";
import mobile from "./images/mobile.jpg";

function App() {
  return (
    <div className="main-div">
      <div className="header-div">
        <p className="p-mobile">+001234567890</p>
        <p className="p-title">Get 50% Off on Selected Item | Shop Now</p>

        <select name="language" id="language">
          <option value="volvo">Eng</option>
          <option value="saab">Mar</option>
          <option value="mercedes">Hin</option>
          <option value="audi">Guj</option>
        </select>

        <select name="location" id="location">
          <option value="volvo">Location</option>
          <option value="saab">India</option>
          <option value="mercedes">US</option>
          <option value="audi">Spain</option>
        </select>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <BsCart4 className="nav-icon"/>
          <a className="navbar-brand" href="/">
            ShopCart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:40}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Samsung
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Vivo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Redmi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Realmi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Oppo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item" style={{marginLeft:20}}>
                <a className="nav-link active" aria-current="page" href="/">
                  Deals
                </a>
              </li>
              <li className="nav-item" style={{marginLeft:20}}>
                <a className="nav-link" href="/">
                  What's New
                </a>
              </li>
              <li className="nav-item" style={{marginLeft:20}}>
                <a className="nav-link" href="/">
                  Delivery
                </a>
              </li>
              
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{width:300}}
              />
              <BiSearchAlt2 className="search"/>
              
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <MdOutlineAccountCircle className="cart"/>
            <li className="nav-item" style={{marginLeft:0 , marginTop:-6}}>
                <a className="nav-link" href="/">
                  Account
                </a>
              </li>
              <LiaCartPlusSolid className="cart"/>
              <li className="nav-item" style={{marginLeft:0 , marginTop:-6}}>
                <a className="nav-link" href="/">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="card" style={{backgroundColor:'#FFF5EE' , display:'flex' , flexDirection:'row' }}>

        <div className="card-text">
        <h1 className="card-h2">Grab Upto 50% Off on Selected Mobile Phones  </h1>
        <button type="button" class="btn btn-dark" style={{width:120 , marginTop:40 , backgroundColor:'#004225' , borderRadius:100 , marginBottom:20}}>Buy Now</button>
        </div>
        <img src={mobile} alt="mobile phone" className="mobile-img"></img>

      </div>

    </div>
  );
}

export default App;
