// Importamos el componente Layout desde la ruta relativa '../../Components/Layout'
import Layout from '../../Components/Layout';

// Importamos el archivo de estilos './index.css'
import './index.css';

// Definimos una función llamada Biography, que representa la sección de biografía
function Biography() {
    return (
        // Renderizamos el componente Layout para estructurar la página
        <Layout>
            {/* Sección que contiene la imagen y otros elementos */}
            <div className="flex items-center justify-between p-8 ">
                {/* Imagen de perfil */}
                <img
                    src="https://i.pinimg.com/originals/36/bb/de/36bbde96654544dfd2f22027e39b12b9.jpg"
                    alt="Sthefanny Ibarra"
                    className="w-70 h-70 rounded-full mb-4"
                />
            </div>

            {/* Sección que contiene el nombre y la información personal */}
            <div>
                {/* Título del nombre con estilos específicos */}
                <h1 className="text-5xl font-bold mb-8 pl-10">Sthefanny Ibarra</h1>

                {/* Puesto y descripción de trabajo con estilos específicos */}
                <p className="text-gray-600 mb-4 pl-10 text-2xl">Software Development Apprentice</p>

                {/* Descripción personal con estilos específicos */}
                <p className="text-black text-justify mb-8 text-2xl pl-10">
                    {/* Información personal */}
                    ¡Hola! Soy Sthefa. Me apasiona leer, ver documentales, programar y seguir aprendiendo todo lo relacionado con la programación.
                    <br />
                    <br />

                    {/* Enlaces a sitios web personales */}
                    Mis sitios web: <br />
                    <a href="mailto:tu_correo@gmail.com" className="text-blue-500">
                        rodriguezsthefanny29@gmail.com
                    </a>.
                    <br />
                    <a href="https://www.instagram.com/" className="text-blue-500">Sthefa_2907</a>
                    <br />
                    <br />

                    {/* Mensaje final */}
                    ¡Espero que disfrutes explorando mi página!
                </p>
            </div>
        </Layout>
    );
}

// Exportamos la función Biography como componente por defecto para ser utilizado en otras partes de la aplicación
export default Biography;
