const focusInput = () => {
    const inputs = document.querySelectorAll(".input input");

    for (const inputsElem of inputs) {
        inputsElem.addEventListener("click", () => {
            inputsElem.focus();
            inputsElem.parentNode.classList.add("active");
            inputsElem.parentNode.classList.remove("valid");
        });

        inputsElem.addEventListener("blur", () => {
            if (inputsElem.value == "") {
                inputsElem.parentNode.classList.remove("active");
            } else {
                inputsElem.parentNode.classList.replace("active", "valid");
            }
        });
    }
};

/// EMAIL

const valMail = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        var regEx =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validNumbre = regEx.test(nameInput.value);
        if (!validNumbre) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Verifica el formato de email ";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// TEXTO

const valText = (nameInput) => {
    var regEx =
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var validText = regEx.test(nameInput.value);

    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.remove("show");

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Solo se permiten letras";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// NUMEROS

const valNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        var regEx = /^[0-9]+$/;
        var validEmail = regEx.test(nameInput.value);

        if (!validEmail) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "Solo se permiten números";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// TEXTO Y NUMERO

const valTextNum = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        // nameInput.siblings(".error-input").remove();
        var regEx = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
        var validText = regEx.test(nameInput.value);

        if (!validText) {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.add("show");
            nameInput.parentNode.querySelector(".error-input").innerText =
                "No se permiten caracteres especiales";
        } else {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    }
};

/// FECHA

const valFecha = (nameInput) => {
    if (nameInput.value.length < 1) {
        nameInput
            .closest(".input")
            .querySelector(".error-input")
            .classList.add("show");
    } else {
        nameInput
            .closest(".input")
            .querySelector(".error-input")
            .classList.remove("show");
    }
};

/// COMBOS

const valCombos = (nameInput) => {
    if (nameInput.value == "") {
        nameInput.parentNode
            .querySelector(".error-input")
            .classList.add("show");
    }

    nameInput.onchange = () => {
        if (!nameInput.value == "") {
            nameInput.parentNode
                .querySelector(".error-input")
                .classList.remove("show");
        }
    };

    // var combosContacto = $(nameInput);

    // combosContacto.each(function () {
    //     $(this).change(function () {
    //         if ($(this).val() != null) {
    //             $(this).siblings(".error-input").remove();

    //         }
    //     });

    //     if ($(this).val() == null) {
    //         $(this).siblings(".error-input").remove();
    //         $(this).after('<.error-input class="error-input"> Campo requerido </.error-input>');
    //     }

    // });
};

const validarForm = () => {
    const form = document.querySelector("#form-contacto"),
        btnContacto = document.querySelector("#btn-connect"),
        inputNombre = document.querySelector("#input-name"),
        inputApellido = document.querySelector("#input-email"),
        inputEmpresa = document.querySelector("#input-phone"),
        inputCorreo = document.querySelector("#input-country"),
        inputNumero = document.querySelector("#input-purpose"),
        inputAsunto = document.querySelector("#input-why"),
        inputMsj = document.querySelector("#msj-contacto");

    btnContacto.onclick = () => {
        valText(inputNombre);
        valText(inputApellido);
        valText(inputEmpresa);
        valMail(inputCorreo);
        valNum(inputNumero);
        valText(inputAsunto);
        valText(inputLugar);
        valCombos(inputTipoEvento);

        let msjsError = document.querySelectorAll(".error-input.show");

        if (msjsError.length == 0) {
            // form.submit();
            console.log("si");
            return true;
        } else {
            console.log("no");
            return false;
        }
    };
};

validarForm();
