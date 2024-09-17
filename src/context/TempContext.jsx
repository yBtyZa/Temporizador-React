import { createContext, useState, useContext } from "react";

export const TempContext = createContext();

export const TempProvider = ({ children }) => {
  const [tempoHora, setTempoHora] = useState("00");
  const [tempoMinuto, setTempoMinuto] = useState("00");
  const [tempoSegundo, setTempoSegundo] = useState("00");
  const [timerInterval, setTimerInterval] = useState(null);

  const onSubmit = (data) => {
    let tempo = data.tempo * 60;

    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
      reset();
      return;
    }

    setTempoHora(
      Math.floor(tempo / 60 / 60)
        .toString()
        .padStart(2, "0")
    );
    setTempoMinuto(
      Math.floor((tempo / 60) % 60)
        .toString()
        .padStart(2, "0")
    );
    setTempoSegundo(
      Math.floor(tempo % 60)
        .toString()
        .padStart(2, "0")
    );

    const timer = setInterval(() => {
      if (tempo > 0) {
        tempo -= 1;
        setTempoHora(
          Math.floor(tempo / 60 / 60)
            .toString()
            .padStart(2, "0")
        );
        setTempoMinuto(
          Math.floor((tempo / 60) % 60)
            .toString()
            .padStart(2, "0")
        );
        setTempoSegundo(
          Math.floor(tempo % 60)
            .toString()
            .padStart(2, "0")
        );
      } else {
        clearInterval(timer);
        setTimerInterval(null);
      }
    }, 1000);

    setTimerInterval(timer);
  };

  const reset = () => {
    setTempoHora("00");
    setTempoMinuto("00");
    setTempoSegundo("00");
  };

  return (
    <TempContext.Provider
      value={{
        tempoHora,
        tempoMinuto,
        tempoSegundo,
        timerInterval,
        onSubmit,
        reset,
      }}
    >
      {children}
    </TempContext.Provider>
  );
};

export function useTemp() {
  const contexto = useContext(TempContext);
  return contexto;
}
