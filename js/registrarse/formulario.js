//Función autoinvocada
(function () {
    var formulario = document.formulario_registro,
        elementos = formulario.elements;

    //Funciones
    var enviar = function (e) {
        if (!validarInputs()) {
            console.log('Falto validar los Imput');
            e.preventDefault();//Prevenir comportamiento
        }
        else if (!validarRadios()) {
            console.log('Falto validar los Radio');
            e.preventDefault();
        }
        else if (!validarCheckbox()) {
            console.log('Falto validar los Checkbox');
            e.preventDefault();
        }
        else {
            console.log('Envia correctamente');
            e.preventDefault();
        }
    }

    //Funciones Blur y Focus
    var focusInput = function () {
        this.parentElement.children[1].className = 'label active';
        //this.parentElement.children[0].className = this.parentElement.children[0].
    }

    var blurInput = function () {
        if (this.value <= 0) {
            this.parentElement.children[1].className = 'label';
        }
    }

    //Eventos
    formulario.addEventListener("submit", enviar);

    for (var i = 0; i < elementos.lenght; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
        }
    }

}())

