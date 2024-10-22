//!En este módulo crear un arreglo de turnos.
//!Estos turnos nos servirán para trabajar en nuestras aplicación
//!antes de realizar las peticiones al Backend. 
//!Ten en cuenta al momento de crear los objetos, que es   
//!MUY IMPORTANTE 
//!que tengan las mismas propiedades que envía tu aplicación de backend.


const myAppointments = [
  {
    "id": 1,
    "date": "2024-12-01",
    "time": "14:00",
    "status": "active",
    "user": {
      "id": 1,
      "name": "Angie Bengelsdorff",
      "email": "Angie@gmail.com",
      "birthdate": "1998-06-11",
      "nDni": 12345678
    }
  },
  {
    "id": 2,
    "date": "2024-12-01",
    "time": "15:00",
    "status": "active",
    "user": {
      "id": 2,
      "name": "Carlos Gómez",
      "email": "carlos.gomez@gmail.com",
      "birthdate": "1992-04-15",
      "nDni": 23456789
    }
  },
  {
    "id": 3,
    "date": "2024-12-02",
    "time": "09:00",
    "status": "active",
    "user": {
      "id": 3,
      "name": "Lucía Martínez",
      "email": "lucia.martinez@gmail.com",
      "birthdate": "1995-08-22",
      "nDni": 34567890
    }
  },
  {
    "id": 4,
    "date": "2024-12-02",
    "time": "10:00",
    "status": "active",
    "user": {
      "id": 4,
      "name": "Miguel Torres",
      "email": "miguel.torres@gmail.com",
      "birthdate": "1988-03-03",
      "nDni": 45678901
    }
  },
  {
    "id": 5,
    "date": "2024-12-03",
    "time": "11:00",
    "status": "canceled",
    "user": {
      "id": 5,
      "name": "Sofía Ramírez",
      "email": "sofia.ramirez@gmail.com",
      "birthdate": "2000-12-10",
      "nDni": 56789012
    }
  },
  {
    "id": 6,
    "date": "2024-12-03",
    "time": "12:00",
    "status": "active",
    "user": {
      "id": 6,
      "name": "Andrés López",
      "email": "andres.lopez@gmail.com",
      "birthdate": "1997-05-25",
      "nDni": 67890123
    }
  },
  {
    "id": 7,
    "date": "2024-12-04",
    "time": "13:00",
    "status": "active",
    "user": {
      "id": 7,
      "name": "Valeria Fernández",
      "email": "valeria.fernandez@gmail.com",
      "birthdate": "1994-07-30",
      "nDni": 78901234
    }
  },
  {
    "id": 8,
    "date": "2024-12-04",
    "time": "14:00",
    "status": "canceled",
    "user": {
      "id": 8,
      "name": "Juan Pérez",
      "email": "juan.perez@gmail.com",
      "birthdate": "1991-09-18",
      "nDni": 89012345
    }
  },
  {
    "id": 9,
    "date": "2024-12-05",
    "time": "10:00",
    "status": "active",
    "user": {
      "id": 9,
      "name": "María Gutiérrez",
      "email": "maria.gutierrez@gmail.com",
      "birthdate": "1985-11-27",
      "nDni": 90123456
    }
  },
  {
    "id": 10,
    "date": "2024-12-05",
    "time": "11:00",
    "status": "active",
    "user": {
      "id": 10,
      "name": "Pedro Rodríguez",
      "email": "pedro.rodriguez@gmail.com",
      "birthdate": "1990-02-14",
      "nDni": 12345098
    }
  }
]


export default myAppointments