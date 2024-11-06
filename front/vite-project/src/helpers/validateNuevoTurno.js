export const validateNuevoTurno = (appointmentData) => {
    const errors = {};
    const required = "Campo obligatorio";
    
    // Función para verificar si la fecha es un día de semana (lunes a viernes)
    const isWeekDay = (dateString) => {
        const date = new Date(dateString);
        const dayOfWeek = date.getDay();
        return dayOfWeek !== 5 && dayOfWeek !== 6; // Excluye domingo (6) y sábado (5)
    };

    // Función para verificar si la hora está en el rango de 08:00 a 20:00
    const isValidTime = (timeString) => {
        const [hour, minutes] = timeString.split(":").map(Number);
        return hour >= 8 && (hour < 20 || (hour === 20 && minutes === 0));
    };

    // Validación de la fecha
    if (!appointmentData.date) {
        errors.date = required;
    } else {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate()); 
        const tomorrow = currentDate.toISOString().split("T")[0]; // Fecha de mañana
        if (appointmentData.date < tomorrow) {
            errors.date = "La fecha debe ser a partir de mañana.";
        } else if (!isWeekDay(appointmentData.date)) {
            errors.date = "La fecha no puede ser un sábado o domingo.";
        }
    }

    // Validación de la hora usando isValidTime
    if (!appointmentData.time) {
        errors.time = required;
    } else if (!isValidTime(appointmentData.time)) {
        errors.time = "La hora debe estar entre las 08:00 AM y las 20:00 PM";
    }

    return errors; // Asegúrate de que siempre se devuelva el objeto de errores
};
