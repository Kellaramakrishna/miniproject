import {useState} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {AiFillCloseCircle} from 'react-icons/ai'
import AddCartContext from '../../context/AddCartContext'

import './index.css'

const Header = props => {
  const [isHamburgerClicked, setHamburger] = useState(false)

  const hamburgerIsClicked = () => {
    setHamburger(true)
  }

  const closeNavCard = () => {
    setHamburger(false)
  }
  const logoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <AddCartContext.Consumer>
      {value => {
        const {cartList} = value

        const getHamburgerEle = () => (
          <div className="flex-nav-top">
            <ul className="link-card-list">
              <Link to="/" className="link-nav">
                <button type="button" className="btn-links-mobile">
                  <li className="link-list-mobile">Home</li>
                </button>
              </Link>
              <Link to="/cart" className="link-nav">
                <button type="button" className="btn-links-mobile">
                  <li className="link-list-mobile">
                    Cart
                    {cartList.length > 0 ? (
                      <span className="cart-count"> {cartList.length}</span>
                    ) : null}
                  </li>
                </button>
              </Link>
              <Link to="/profile" className="link-nav">
                <button type="button" className="btn-links-mobile">
                  <li className="link-list-mobile">
                    <CgProfile className="profile-icon" />
                  </li>
                </button>
              </Link>

              <Popup
                modal
                trigger={
                  <button
                    className="button-logout"
                    type="button"
                    style={{height: '30px', width: '80px'}}
                  >
                    Logout
                  </button>
                }
              >
                {close => (
                  <>
                    <div className="card-popup-mobile">
                      <p className="msg-text">
                        Are you sure you want to logout?
                      </p>
                      <div>
                        <button
                          type="button"
                          className="cancel-btn"
                          onClick={() => close()}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="conform-btn"
                          onClick={logoutBtn}
                        >
                          Conform
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </Popup>
            </ul>
            <div className="flex-close-btn">
              <button type="button" className="close-cross-btn">
                <AiFillCloseCircle
                  className="close-nav"
                  onClick={closeNavCard}
                />
              </button>
            </div>
          </div>
        )

        return (
          <>
            <nav className="mobile-nav-bar">
              <div className="card-logo">
                <Link to="/" className="link-nav-img">
                  <img
                    src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1692709685/tastyKitchen/Group_7420_fxulpm.png"
                    alt="website logo mobile"
                    className="website-logo-header"
                  />
                </Link>
                <p className="company-name-header">Tasty Kitchens</p>
              </div>

              <div className="hamburger-card">
                <button
                  className="hamburger-btn"
                  type="button"
                  onClick={hamburgerIsClicked}
                >
                  <GiHamburgerMenu className="hamburgerMenu" />
                </button>
              </div>
            </nav>
            {isHamburgerClicked ? getHamburgerEle() : null}

            <nav className="large-device-nave">
              <div className="card-logo">
                <Link to="/" className="link-nav-img">
                  <img
                    src="https://res.cloudinary.com/dpcgriaf4/image/upload/v1692709685/tastyKitchen/Group_7420_fxulpm.png"
                    alt="website logo"
                    className="website-logo-header"
                  />
                </Link>
                <p className="company-name-header">Tasty Kitchens</p>
              </div>
              <ul className="link-card-list-large">
                <Link to="/" className="link-nav">
                  <li className="link-list">Home</li>
                </Link>
                <Link to="/cart" className="link-nav">
                  <li className="link-list">
                    Cart
                    {cartList.length > 0 ? (
                      <span className="cart-count"> {cartList.length}</span>
                    ) : null}
                  </li>
                </Link>
                <li className="button-list">
                  <Popup
                    modal
                    trigger={
                      <button className="button-logout" type="button">
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <div className="card-popup">
                          <p className="msg-text">
                            Are you sure you want to logout?
                          </p>
                          <div>
                            <button
                              type="button"
                              className="cancel-btn"
                              onClick={() => close()}
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="conform-btn"
                              onClick={logoutBtn}
                            >
                              Conform
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </Popup>
                </li>
              </ul>
            </nav>
          </>
        )
      }}
    </AddCartContext.Consumer>
  )
}

export default withRouter(Header)
