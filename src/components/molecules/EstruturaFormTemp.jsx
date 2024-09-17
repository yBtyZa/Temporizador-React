import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function EstruturaFormTemp({ register, timerInterval }) {
  return (
    <>
      <Label>Digite o tempo que deseja (minutos)</Label>
      <Input
        type="number"
        placeholder="60"
        {...register("tempo", { required: true, min: 1 })}
      />
      <Button type="submit">{timerInterval ? "Parar" : "Iniciar"}</Button>
    </>
  );
}

export default EstruturaFormTemp;
