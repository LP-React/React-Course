import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPage = () => {

    const { login, user } = useContext(AuthContext)
    const navigate = useNavigate();

    const onLogin = () => {

        login('Laysson')

    }




    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </div>
    )
}
