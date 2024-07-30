import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            
            <ul>
                <li className="first"><NavLink to="/">Acceuil</NavLink></li>
                <li><NavLink to="/coup de coeur">Coup de coeur</NavLink></li>
            </ul>
            <h2>React Movies</h2>
        </div>
    );
}

export default Header;