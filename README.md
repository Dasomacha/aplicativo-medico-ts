# API REST Gestión de Citas

Este proyecto es una API REST básica construida con Node.js, Express.js, MySQL, Sequelize y TypeScript para gestionar citas médicas. La API proporciona funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) para citas médicas entre doctores y pacientes. Utiliza MySQL como base de datos relacional y Sequelize como un ORM para interactuar con la base de datos.

## Tecnologías Utilizadas 🌟

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com)
- [Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Sequelize](https://sequelize.org)

## Modelo relacional

![model](https://github.com/Dasomacha/imagenes/blob/main/database.png?raw=true)   

## Uso ⚙️

1. String → cadenas de texto.
   
    ```bash
    let nombre = "Danna";
    ```

2. Number → números enteros o decimales.

    ```bash
    let edad = 23;
    let precio = 19.99;
    ```
3. Boolean → valores lógicos (true/false).

    ```bash
    let activo = true;
    ```
4. Undefined → variable declarada pero no inicializada.

    ```bash
    let x;
   console.log(x);

    ```
5. Null → ausencia intencional de valor.

    ```bash
    let dato = null;
    ```

6. Symbol → identificadores únicos e inmutables.

    ```bash
    let id = Symbol("id");
    ```
7. **Instala las dependencias**

    ```bash
    BigInt → números enteros muy grandes.
    ```
3. **Configura las variables de entorno**

    Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias, como la conexión a la base de datos.

4. **Inicia la aplicación en modo de desarrollo**

    ```bash
    npm run dev
    ```

6. **Accede a la documentación Swagger**

    Usa la url [http://127.0.0.1:3000/api-docs](http://localhost:3000/api-docs) para obtener información sobre los endpoints y cómo interactuar con la API.
   
   ![Swagger](https://github.com/Dasomacha/imagenes/blob/main/imagen%201.png?raw=true)   

## Pruebas en Postman

A continuación se encuentran capturas de algunas de las pruebas realizadas en Postman. Para conocer más a fondo las operaciones CRUD de la API y cómo funciona la misma, revisar la documentación Swagger que se indica en el punto anterior.

- Agregar paciente
![paciente](https://github.com/Dasomacha/imagenes/blob/main/crearpacientes.png?raw=true)

- Agregar doctor
![doctor](https://github.com/Dasomacha/imagenes/blob/main/creardoctor.png?raw=true)   

- Agregar cita
![cita](https://github.com/Dasomacha/imagenes/blob/main/crearcitas.png?raw=true)

- Listado de pacientes
![listapaciente](https://github.com/Dasomacha/imagenes/blob/main/obtienepacientes.png?raw=true)

- Listado de doctores
![listadoctores](https://github.com/Dasomacha/imagenes/blob/main/obtienedoctores.png?raw=true)

- Listado de citas
![listacitas](https://github.com/Dasomacha/imagenes/blob/main/obtienecitas.png?raw=true)
