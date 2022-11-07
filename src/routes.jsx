import {
    BrowserRouter,
    Navigate,
    Route,
    Routes as RouteRoutes,
} from 'react-router-dom';
import Login from './componentes/Login';
import SignUp from './componentes/SignUp';

export default function Routes(){
    return(
        <BrowserRouter>
        <RouteRoutes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<Navigate to="/" replace />}/>
        </RouteRoutes>
        </BrowserRouter>
    )
}