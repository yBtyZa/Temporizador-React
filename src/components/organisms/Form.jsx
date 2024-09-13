import { useForm } from "react-hook-form";
import EstruturaForm from "../molecules/EstruturaForm";

function Form({ onSubmit }) {
    const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <EstruturaForm register={register} />
    </form>
  );
}

export default Form;
