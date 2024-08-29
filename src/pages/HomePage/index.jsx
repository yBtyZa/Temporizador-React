import { useAuth } from '../../context/AuthContext'

function HomePage () {
    const { logout } = useAuth()
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default HomePage