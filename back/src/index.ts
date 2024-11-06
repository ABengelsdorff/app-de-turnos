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

