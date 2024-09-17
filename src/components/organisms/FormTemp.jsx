import { useForm } from "react-hook-form";
import EstruturaFormTemp from "../molecules/EstruturaFormTemp";

function FormTemp({ onSubmit, timerInterval }) {
    const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EstruturaFormTemp register={register} timerInterval={timerInterval} />
    </form>
  );
}

export default FormTemp;
