const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

//form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    nameValidate();
//    emailValidate();
//    assuntoValidate();
//    mensagemValidate();
//})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
        // Se todos os campos forem válidos, você pode enviar a mensagem aqui
        alert('Formulário enviado com sucesso!');
        // Aqui você pode adicionar o código para enviar a mensagem para onde desejar
    }
});

function setError(index) {
    campos[index].style.background = '#b32b81';
    spans[index].style.display = 'block';

}

function removeError(index) {
    campos[index].style.background = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length > 50) {
        removeError(0);
    } else {
        setError(0);
    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) {
        removeError(1);
    } else {
        setError(1);
    }
}

function assuntoValidate() {
    if (campos[2].value.length > 50) {
        setError(2);
    } else {
        removeError(2);
    }
}

function mensagemValidate() {
    if (campos[3].value.length > 300) {
       setError(3) ;
    } else {
        removeError(3);
    }
}



   function validateForm() {
    let isValid = true;
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value.trim() === '') {
            spans[i].style.display = 'block';
            setError(i); // Adicionar a classe de erro ao campo
            isValid = false;
        } else {
            spans[i].style.display = 'none';
            removeError(i); // Remover a classe de erro do campo
        }
    }
    return isValid;
}


function clearDefaultText() {
    var mensagemInput = document.getElementById('mensagem');
    if (mensagemInput.value === 'Mensagem') {
        mensagemInput.value = '';
    }
}




