
import Layout from '../../Components/Layout'
import './index.css'

function Biography() {
    return(
        
            <Layout>
                <div className="flex items-center justify-between p-8 ">
                  <img
                    src="https://i.pinimg.com/originals/36/bb/de/36bbde96654544dfd2f22027e39b12b9.jpg"
                    alt="Sthefanny Ibarra"
                    className="w-70 h-70 rounded-full mb-4"
                  />
                  </div>
                  <div>
                            <h1 className="text-5xl font-bold mb-8 pl-10">Sthefanny Ibarra</h1>
                          <p className="text-gray-600 mb-4 pl-10 text-2xl">Software Development Apprentice
                    </p>
                          <p className="text-black text-justify mb-8 text-2xl pl-10">
                            ¡Hola! Soy Sthefa. Me apasiona leer, ver documentales, programar y seguir aprendiendo todo lo relacionado con la programación.
                            <br />
                            <br />
                            Mis sitios web: <br />


                            <a href="mailto:tu_correo@gmail.com" className="text-blue-500">
                              rodriguezsthefanny29@gmail.com
                            </a>.
                            <br />
                            <a href="https://www.instagram.com/" className="text-blue-500">Sthefa_2907</a>
                            <br />
                            <br />
                            ¡Espero que disfrutes explorando mi página!
                          </p>
                </div>
                
            </Layout>
        
    )
}
export default Biography



