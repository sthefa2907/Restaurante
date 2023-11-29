// Definición de un componente funcional llamado Layout que recibe 'children' como propiedad
const Layout = ({ children }) => {
    // Devuelve un elemento div con clases de Tailwind CSS para diseño flex, alineación de elementos y fondo de color naranja claro
    return (
        <div className="flex flex-col items-center mt-20 bg-orange-200">
            {/* Renderiza el contenido que se pasa como hijo al componente */}
            {children}
        </div>
    )
}

// Exporta el componente Layout para pode rutilizarlo en los otros archivos
export default Layout
