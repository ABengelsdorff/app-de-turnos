import server from "./server";
import { PORT } from "./config/envs";


server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


















/*const num1: number = 5 
const num2: number = 15
const resultado: number = num1 + num2
console.log(resultado)

const elementos:(string | number)[] = ["Angie", 123, "hola"];
const masElementos:[string, number] = ["hola" , 123]


let suma:number = 0
const sumar = (a: number, b: number):void => {
    suma = a + b
}
sumar (2,4)
console.log(suma)*/
