export const validateRegisterForm = (newUserData) => {
    const errors = {}

    if(!newUserData.name){
        errors.name = "Campo obligatorio"
    }else if ( newUserData.name.length < 3){
        errors.name = "Tiene que tener al menos 3 digitos"
    }

    if (!newUserData.email) {
        errors.email = "Campo obligatorio";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newUserData.email)) {
        errors.email = "Formato de email inválido";
    }

    if(!newUserData.birthdate){
        errors.birthdate = "Campo obligatorio"
    }

    if(!newUserData.nDni){
        errors.nDni = "Campo obligatorio"
    }else if (String(newUserData.nDni).length < 8){
        errors.nDni = "Tiene que tener al menos 8 digitos"
    }

    if(!newUserData.username){
        errors.username = "Campo obligatorio"
    }else if (newUserData.username.length < 3){
        errors.username = "El nombre debe tener al menos 3 digitos"
    }

    if(!newUserData.password){
        errors.password = "Campo obligatorio"
    }else if (newUserData.password.length < 5){
        errors.password = "Tiene que tener al menos 5 digitos"
    }

    if(newUserData.password !== newUserData.repeatPassword){
        errors.repeatPassword = "Las contraseñas no coinciden"
    }

return errors
}
