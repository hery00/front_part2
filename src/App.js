// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import SideBarClient from './Components/SideBarClient';
import SideBarAdmin from './Components/SideBarAdmin';
import Form_Login from './Components/Form_Login';
import List_Parcelle_Terrain from './Components/List_Parcelle_Terrain';
import Recherche from './Components/Recherche';
import List_Terrain from './Components/List_Terrain';
import Form_Inscription from './Components/Form_Inscription';
import List_Parcelle from './Components/List_Parcelle';
import ListCategorie from './Components/ListCategorie';
import ListType from './Components/ListType';
import StatParcelle from './Components/StatParcelle';

const router=createBrowserRouter([

  {
    path:'/Login',
    element:<Form_Login/>
  },
  {
    path:'/Form_Inscription',
    element:
    <Form_Inscription/>
  },

  {
    path:'/',
    element:
    <div>
       <Header />
        <SideBarClient/>
        <Recherche/>
        <List_Parcelle_Terrain/>
        <List_Terrain/>
      </div>

  },
 
  {
    path:'/AccueilAdmin',
    element:
    <div>
        <Header />
        <SideBarClient />
        <Recherche/>
        <List_Parcelle_Terrain/>
        <List_Terrain/>
      </div>

  },
 
  {
    path:'/Categorie',
    element: 
    <div>
       <Header />
        <SideBarAdmin />
        <ListCategorie/>

    </div>
   
  },
  {
    path:'/Types',
    element: 
    <div>
       <Header />
        <SideBarAdmin />
        <ListType/>

    </div>
   
  },
  {
    path:'/Statistiques',
    element:<div>
       <Header />
        <SideBarAdmin />
        <StatParcelle/>
    </div>
  },
  {
    path:'/Historiques',
    element:<div></div>
  },
  {
    path:'/Parcelle',
    element: 
    <div>
        <Header />
        <SideBarAdmin />
        <List_Parcelle/>

    </div>
  },
  {
    path:'/Terrain',
    element: 
    <div>
      <Header />
        <SideBarAdmin />
        <List_Terrain/>

    </div>
  }
])

function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
