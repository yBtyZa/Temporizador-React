import styles from "./styles.module.css";
import { useAuth } from '../../context/AuthContext'
import { useForm } from 'react-hook-form'

function Login() {
    const { login } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (userData) => {
        await login(userData);
    }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", {
            required: true
        })}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password", {
            required: true,
            minLength: 6
        })}/>
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
