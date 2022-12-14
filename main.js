const formularios = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');/* devuelve un arreglo con todos los inputs */

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false
}

const validarFormulario = (e) => {
  console.log(e.target.name)
  switch (e.target.name) {/* para identificar el input por su atributo "name" */

    case 'usuario':

      validarCampo(expresiones.usuario, e.target, 'usuario');

      break;

    case 'nombre':

      validarCampo(expresiones.nombre, e.target, 'nombre');

      break;

    case 'password':

      validarCampo(expresiones.password, e.target, 'password');

      validarPassword2();

      break;

    case 'password2':

      validarPassword2();

      break;

    case 'correo':

      validarCampo(expresiones.correo, e.target, 'correo');

      break;

    case 'telefono':

      validarCampo(expresiones.telefono, e.target, 'telefono');

      break;
  }
}

/* funcion validar campo  */
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {/*la expresion usuarios lo testeamos con el valor del input(con target hace referencia al input) */
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');

    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

    campos[campo] = true;

  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto')
    document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark')
    document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');

    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

    campos[campo] = false;
  }
}

/* funcion validar passwor2 */
const validarPassword2 = () => {
  const inputPassword1 = document.getElementById('password')
  const inputPassword2 = document.getElementById('password2')

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto')
    document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark')
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');

    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');

    campos['password'] = false;
  } else {
    document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto')
    document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto')
    document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark')
    document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');

    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');

    campos['password'] = true;
  }

}


/* recorrer los input y agregar eventos */
inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);/* evento al levantar la tecla se genera una funcion */
  input.addEventListener('blur', validarFormulario);/* al oprimir fuera del input se genera una funcion */
})

/* evento al boton*/
formularios.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const terminos = document.getElementById('terminos')

  if (campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked) {
    formularios.reset(); /* reseteamos todos los campos del formulario */
    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

    setTimeout(() => {/* despues de 5 segundo desaparece el mensaje */
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
  } else {/* si no se validaron todos los campos */
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }, 5000)
  }
})