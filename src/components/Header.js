import { LOGO_URL } from "../utils/constant";
const Header = () => {
    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo"
                    src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </div>

        </div>


    )

}

export default Header;