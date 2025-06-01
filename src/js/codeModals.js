window.addEventListener('load', () => {
    createModalCode();
    closeModalCode();
});

function createModalCode() {
    const codeButtons = document.querySelectorAll('.modalCodeMiau, .modalCodePaws, .modalCodeHs');

    codeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let modal;

            if (button.classList.contains('modalCodeMiau')) {
                modal = document.querySelector('#MIAU');
            } else if (button.classList.contains('modalCodePaws')) {
                modal = document.querySelector('#PAWS');
            } else if (button.classList.contains('modalCodeHs')) {
                modal = document.querySelector('#HYDROSTOP');
            }

            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
}

function closeModalCode() {
    const closeButtons = document.querySelectorAll('.closeBtn');

    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let modal;

            if (button.classList.contains('closeMIAU')) {
                modal = document.querySelector('#MIAU');
            } else if (button.classList.contains('closePAWS')) {
                modal = document.querySelector('#PAWS');
            } else if (button.classList.contains('closeHYDROSTOP')) {
                modal = document.querySelector('#HYDROSTOP');
            }

            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
}
