import styles from "../../pages/HomePage/styles.module.css";
import FormTemp from "../organisms/FormTemp";
import Button from "../atoms/Button";

import { useTemp } from "../../context/TempContext";
import { useAuth } from "../../context/AuthContext";

function HomePageT() {
  const { logout } = useAuth();
  const { tempoHora, tempoMinuto, tempoSegundo, timerInterval, onSubmit } =
    useTemp();

  return (
    <>
      <FormTemp onSubmit={onSubmit} timerInterval={timerInterval} />
      <div className={styles.temporizador}>
        <p>{tempoHora}</p>
        <p>:</p>
        <p>{tempoMinuto}</p>
        <p>:</p>
        <p>{tempoSegundo}</p>
      </div>
      <Button onClick={logout}>Logout</Button>
    </>
  );
}

export default HomePageT;
