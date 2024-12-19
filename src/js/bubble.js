window.addEventListener('load', () => {
    createBubble();
    closeBubble();
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
   const closeBubbleBtn = document.querySelector('#closeBubble');
   closeBubbleBtn.addEventListener('click', () => {
        const openBubble = document.querySelector('#bubbleSpoti');
        openBubble.style.display = 'none'
   }); 
   
   const closeBubbleBtn2 = document.querySelector('#goTo');
   closeBubbleBtn2.addEventListener('click', () => {
    const openBubble = document.querySelector('#bubbleSpoti');
    openBubble.style.display = 'none'
})
}