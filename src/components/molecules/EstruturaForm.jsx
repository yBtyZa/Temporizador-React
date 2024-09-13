import Button from "../atoms/button";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function EstruturaForm({ register }) {
    return(
        <>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" {...register("email", {
            required: true
        })}/>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" {...register("password", {
            required: true,
            minLength: 6
        })}/>
        <Button type="submit">Login</Button>
        </>
    )
}

export default EstruturaForm