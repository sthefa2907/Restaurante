// Importa el componente NavLink de la biblioteca react-router-dom
import { NavLink } from "react-router-dom";
// Importa el archivo de estilos index.css
import './index.css';

// Define el componente funcional Navbar
const Navbar = () => {

    // Define una constante para el estilo activo de los elementos de navegación
    const activeStyle = ' underline underline-offset-4';

    // Devuelve el JSX que representa la barra de navegación
    return (
        // Contenedor de la barra de navegación con clases de estilo de Tailwind CSS
        <nav className="flex justify-between items-center z-12 w-full py-3 px-11 text-sm font-light bg-orange-300 top-0">

            {/* Imagen del logotipo con la clase 'logo' */}
            <img className="logo" src="https://th.bing.com/th/id/OIP.lYWm5tIDVtEOSxgyBKnzSgHaHa?pid=ImgDet&rs=1" alt="" />

            {/* Lista de elementos de navegación */}
            <ul className="flex items-center gap-3">
                {/* Elemento de navegación para la página principal */}
                <li className="font-semibold text-lg gap-3">
                    <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        RESTAURANT
                    </NavLink>
                </li>
                {/* Elemento de navegación para la página de alimentos */}
                <li>
                    <NavLink to='/food' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        FOOD
                    </NavLink>
                </li>
                {/* Elemento de navegación para la página de biografía */}
                <li>
                    <NavLink to='/Biography' className={({ isActive }) => isActive ? activeStyle : undefined}>
                        BIOGRAPHY
                    </NavLink>
                </li>
                {/* Barra de búsqueda con un campo de entrada y un botón */}
                <a className="search-bar font-medium text-sm hover:text-black">
                    <input className="buscar text-center" type="text" placeholder="Buscar..." /> 
                    <button className="h-7 w-20 bg-slate-50">&nbsp;&nbsp;Buscar</button>
                </a>
            </ul>
        </nav>
    );
}

// Exporta el componente Navbar 
export default Navbar;
