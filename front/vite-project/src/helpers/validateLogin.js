export const validateLogin = (userData)  => {

    const errors = {}

    const required = "Campo obligatorio"


    if(!userData.username){
        errors.username = required
    }else if (userData.username.length < 3){
        errors.username = "El nombre debe tener al menos 3 digitos"
    }

    if(!userData.password){
        errors.password = required
    }else if (userData.password.length < 5){
        errors.password = "La contraseña debe tener como mimino 5 caracteres"
    }

    return errors

}