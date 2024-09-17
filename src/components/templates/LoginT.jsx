import { useAuth } from "../../context/AuthContext"

import Form from "../organisms/Form";

function LoginT(){

    const { login } = useAuth()

    const onSubmit = async (userData) => {
        await login(userData);
    }
    return(
        <>
        <h1>Login</h1>
        <Form onSubmit={onSubmit} />
        </>
    )
}

export default LoginT