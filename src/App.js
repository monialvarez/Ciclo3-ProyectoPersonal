import logo from "./media/icons8-pájaro-100.png";
import './styles/App.css';   //Permite usar los estilos css
import gavilanC from './media/RoadsideHawk_ML115941471_RichardGarrigues.jpg';
import colirrufo from './media/Rufous-tailedHummingbird_F_and_M-1024x873.jpg';

function App() { 
  return (
    <div classNameName="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="imagen" className="logo"/>
            </li>
            <li>
                <button className="mainButton button">Crear nuevo post</button>
            </li>
            <li>
                <div className="buscar">
                  <input placeholder="Buscar ave" type="text"/>
                  <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li><button className="secondaryButton button">Iniciar sesión</button></li>
            <li><button className="mainButton button">Registro</button></li>
            
        </ul>
    </header>
    <main>
        <section></section>
        <h1>Especies de aves</h1>
        <ul className="breedCardcontainer">
            <li className="breedCard">
                <div className="contenedorImagen">
                    <img src={gavilanC} alt="gavilán caminero"/>
                </div>
                <span className="breedTitle">Gavilán caminero</span>
            </li>
            <li className="breedCard">
                <div className="contenedorImagen">
                    <img src={colirrufo} alt="Colibrí colirrufo"/>
                </div>
                <span className="breedTitle">Colibrí colirrufo</span>
            </li>
        </ul>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
