import server from "./server";
import { PORT } from "./config/envs";
import { conectDataBase } from "./config/data-source";


try {
    conectDataBase();
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
} catch (error) {
    console.log(error)
}









/*let suma:number = 0
const sumar = (a: number, b: number):void => {
    suma = a + b
}
sumar (2,22)
console.log(suma)*/
