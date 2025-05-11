window.addEventListener('load', () => {
    createBubbleContapp();
    closeBubbleContapp();
    createBubbleMe();
    closeBubbleMe();
    createBubbleMIAU();
    closeBubbleMIAU();
    createBubblePAWS();
    closeBubblePAWS();
    createBubbleHydrostop();
    closeBubbleHydrostop();
    createBubbleCrowpi();
    closeBubbleCrowpi();
});

function createBubbleContapp() {
    const bubbleBtn = document.querySelector('#bubbleBtnContapp');
    if (bubbleBtn) {
        bubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bubble = document.querySelector('#bubbleContapp');
            if (bubble) bubble.style.display = 'block';
        });
    }
}

function closeBubbleContapp() {
    const closeBtn = document.querySelector('#closeBubbleContapp');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleContapp');
            if (bubble) bubble.style.display = 'none';
        });
    }

    const goToBtn = document.querySelector('#goToSpoti');
    if (goToBtn) {
        goToBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleContapp');
            if (bubble) bubble.style.display = 'none';
        });
    }
}

function createBubbleMe() {
    const bubbleBtns = document.querySelectorAll('.bubbleBtnMe');
    if (bubbleBtns) {
        bubbleBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const bubble = document.querySelector('#bubbleMe');
                if (bubble) bubble.style.display = 'block';
            });
        });
    }
}

function closeBubbleMe() {
    const closeBtn = document.querySelector('#closeBubbleMe');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleMe');
            if (bubble) bubble.style.display = 'none';
        });
    }
}

function createBubbleMIAU() {
    const bubbleBtn = document.querySelector('#bubbleBtnMIAU');
    if (bubbleBtn) {
        bubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bubble = document.querySelector('#bubbleMIAU');
            if (bubble) bubble.style.display = 'block';
        });
    }
}

function closeBubbleMIAU() {
    const closeBtn = document.querySelector('#closeBubbleMIAU');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleMIAU');
            if (bubble) bubble.style.display = 'none';
        });
    }

    const goToBtn = document.querySelector('#goTo');
    if (goToBtn) {
        goToBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleMIAU');
            if (bubble) bubble.style.display = 'none';
        });
    }
}

function createBubblePAWS() {
    const bubbleBtn = document.querySelector('#bubbleBtnPAWS');
    if (bubbleBtn) {
        bubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bubble = document.querySelector('#bubblePAWS');
            if (bubble) bubble.style.display = 'block';
        });
    }
}

function closeBubblePAWS() {
    const closeBtn = document.querySelector('#closeBubblePAWS');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubblePAWS');
            if (bubble) bubble.style.display = 'none';
        });
    }

    const goToBtn = document.querySelector('#goTo');
    if (goToBtn) {
        goToBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubblePAWS');
            if (bubble) bubble.style.display = 'none';
        });
    }
}

function createBubbleHydrostop() {
    const bubbleBtn = document.querySelector('#bubbleBtnHydrostop');
    if (bubbleBtn) {
        bubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bubble = document.querySelector('#bubbleHydrostop');
            if (bubble) bubble.style.display = 'block';
        });
    }
}

function closeBubbleHydrostop() {
    const closeBtn = document.querySelector('#closeBubbleHydrostop');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleHydrostop');
            if (bubble) bubble.style.display = 'none';
        });
    }
}

function createBubbleCrowpi() {
    const bubbleBtn = document.querySelector('#bubbleBtnCrowpi');
    if (bubbleBtn) {
        bubbleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const bubble = document.querySelector('#bubbleCrowpi');
            if (bubble) bubble.style.display = 'block';
        });
    }
}

function closeBubbleCrowpi() {
    const closeBtn = document.querySelector('#closeBubbleCrowpi');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const bubble = document.querySelector('#bubbleCrowpi');
            if (bubble) bubble.style.display = 'none';
        });
    }
}