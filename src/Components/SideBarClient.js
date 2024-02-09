import { Link } from "react-router-dom";
import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBarClient()
{
    return(
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <Link className="nav-link " to="/">
              <i className="bi bi-grid"></i>
              <span>Accueil</span>
            </Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Simulations">
              <i className="bi bi-menu-button-wide"></i><span>Simulations</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Historiques">
              <i className="bi bi-menu-button-wide"></i><span>Historiques</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Login">
              <i className="bi bi-menu-button-wide"></i><span>Se connecter</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Discussions">
              <i className="bi bi-menu-button-wide"></i><span>Discusssions</span>
            </Link>
          </li>
    
        
        </ul>
    
      </aside>
    );
}

export default SideBarClient;