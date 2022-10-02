const formularios = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');/* devuelve un arreglo con todos los inputs */

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const validarFormulario = (e) => {
    switch (e.target.name){/* para identificar el input por su atributo "name" */
    case 'usuario':
        if(expresiones.usuario.test(e.target.value)){/*la expresion usuarios lo testeamos con ell valor del input(con target hace referencia al input) */
        }
    break;
    case 'nombre':
        console.log('Funciona')
    break;
    case 'password':
        console.log('Funciona')
    break;
    case 'password2':
        console.log('Funciona')
    break;
    case 'correo':
        console.log('Funciona')
    break;
    case 'telefono':
        console.log('Funciona')
    break;
}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);/* evento al levantar la tecla se genera una funcion */
    input.addEventListener('blur', validarFormulario);/* al oprimir fuera del input se genera una funcion */
})

formularios.addEventListener('submit', (evento) => {
    evento.preventDefault();
})