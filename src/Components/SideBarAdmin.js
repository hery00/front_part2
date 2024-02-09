import { Link } from "react-router-dom";
import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBarAdmin()
{
    return(
        <aside id="sidebar" className="sidebar">

        <ul className="sidebar-nav" id="sidebar-nav">
    
          <li className="nav-item">
            <Link className="nav-link " to="/AccueilAdmin">
              <i className="bi bi-grid"></i>
              <span>Accueil</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Terrain">
              <i className="bi bi-menu-button-wide"></i><span>Terrain</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Parcelle">
              <i className="bi bi-menu-button-wide"></i><span>Parcelle</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Categorie">
              <i className="bi bi-menu-button-wide"></i><span>Categorie cultures</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Types">
              <i className="bi bi-menu-button-wide"></i><span>Types cultures </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Login">
              <i className="bi bi-menu-button-wide"></i><span>Se connecter</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target=" components-nav" data-bs-toggle="collapse" to="/Statistiques">
              <i className="bi bi-menu-button-wide"></i><span>Statistiques</span>
            </Link>
          </li>
    
        
        </ul>
    
      </aside>
    );
}

export default SideBarAdmin;