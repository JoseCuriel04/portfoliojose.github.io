window.addEventListener('load', () => {
    createBubble();
    closeBubble();
    createBubbleContapp();
    closeBubbleContapp();
});




function createBubble(){
    const bubbleSpoti = document.querySelector('#bubbleBtnSpoti');
    bubbleSpoti.addEventListener('click', (e) => {
        e.preventDefault();
        const openBubble = document.querySelector('#bubbleSpoti');
        openBubble.style.display = 'block';
    });
}

function closeBubble() {
   const closeBubbleBtn = document.querySelector('#closeBubbleSpoti');
   closeBubbleBtn.addEventListener('click', () => {
        const openBubble = document.querySelector('#bubbleSpoti');
        openBubble.style.display = 'none'
   }); 
   
   const closeBubbleBtn2 = document.querySelector('#goToSpoti');
   closeBubbleBtn2.addEventListener('click', () => {
    const openBubble = document.querySelector('#bubbleSpoti');
    openBubble.style.display = 'none'
})
}

function createBubbleContapp(){
    const bubbleSpoti = document.querySelector('#bubbleBtnContapp');
    bubbleSpoti.addEventListener('click', (e) => {
        e.preventDefault();
        const openBubble = document.querySelector('#bubbleContapp');
        openBubble.style.display = 'block';
    });
}

function closeBubbleContapp() {
   const closeBubbleBtn = document.querySelector('#closeBubbleContapp');
   closeBubbleBtn.addEventListener('click', () => {
        const openBubble = document.querySelector('#bubbleContapp');
        openBubble.style.display = 'none'
   }); 
   
   const closeBubbleBtn2 = document.querySelector('#goTo');
   closeBubbleBtn2.addEventListener('click', () => {
    const openBubble = document.querySelector('#bubbleContapp');
    openBubble.style.display = 'none'
})
}