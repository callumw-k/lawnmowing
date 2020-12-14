import React from "react"
import {Link } from 'gatsby';
import navstyle from '../styles/components/navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"


class Navbar extends React.Component {

  state = {
    menuHidden: false
  }


  responsiveMenu = () => {
    let current_state = this.state.menuHidden;
    this.setState({menuHidden: !current_state});


  }

  render() {
        return(
            <header className={navstyle.navbar}>
                <nav className={navstyle.inner}>

                  <div className={navstyle.content}>
                    <img src="" alt="This is where the" />
                    <FontAwesomeIcon onClick={this.responsiveMenu} className={ navstyle.menuIcon } icon={faEllipsisH} />
                  </div>

                  <ul className={navstyle.links + ` ${this.state.menuHidden ? navstyle.linksVisisble : ''}`}>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to = '/about' >About Us</Link>
                    </li>
                  </ul>

                </nav>
            </header>
        )
  }
}

export default Navbar;
