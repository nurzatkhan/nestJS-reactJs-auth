import {useLocation, Navigate} from "react-router-dom"

function ReqAuth({children}) {
    const location = useLocation();
    localStorage.getItem('token')
    const auth = localStorage.getItem('token')
    if (!localStorage.getItem('token')){
        return  <Navigate to = '/login' state={{from: location}}/>
    }


    return children;
}
export default ReqAuth;