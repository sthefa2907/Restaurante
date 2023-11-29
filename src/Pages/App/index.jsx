// Importamos las funciones necesarias de la biblioteca 'react-router-dom'
import { useRoutes, BrowserRouter } from 'react-router-dom';

// Importamos los componentes que vamos a utilizar en las rutas
import Home from '../Home';
import Food from '../Food';
import Navbar from '../../Components/Navbar';
import Biography from '../Biography';

// Importamos el archivo de estilos para este componente
import './index.css';

// Definimos el componente que maneja las rutas de la aplicación
const AppRoutes = () => {

    // Configuramos las rutas con la función useRoutes
    let routes = useRoutes([
        { path: '/', element: <Home /> },            // Ruta para la página principal
        { path: '/food', element: <Food /> },        // Ruta para la página de platos
        { path: '/Biography', element: <Biography /> },  // Ruta para la página de biografía
    ]);

    // Retornamos el resultado de las rutas configuradas
    return routes;
}

// Definimos el componente principal de la aplicación
const App = () => {

    // Retornamos la estructura de la aplicación, que incluye el navegador y las rutas
    return (
        <BrowserRouter>
            <Navbar />        {/* Renderizamos el componente de la barra de navegación */}
            <AppRoutes />      {/* Renderizamos las rutas de la aplicación */}
        </BrowserRouter>
    )
}

// Exportamos el componente principal de la aplicación
export default App;
