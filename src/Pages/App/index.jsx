import  {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import Food from '../Food'

import Navbar from '../../Components/Navbar'
import Biography from '../Biography'
import './index.css'

const AppRoutes = () => {

    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/food', element: <Food/>},
        {path: '/Biography', element: <Biography/>},
    ])

    return routes
}

const App = () => {

    return (

        
        <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
        </BrowserRouter>
        
        
    )
}

export default App

