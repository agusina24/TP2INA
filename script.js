let username = prompt("Por favor, ingrese su nombre y apellido.");
console.log("El nombre y apellido ingresado es: " + username);

let comidafav = prompt("¿Tu comida favorita es...?");

let edad = prompt("¿Cuántos años tenes?");

let presentacion = `
¡Hola, ${username}, de ${edad} años!
Bienvenido a 3L Gourmet, tu comida favorita es ${comidafav}, pronto trabajaremos para traerla aquí.
¡Esperamos que disfrutes nuestra web!
`;

console.log(presentacion);

alert(`¡Bienvenido a nuestra web ${username}!`);