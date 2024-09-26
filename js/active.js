document.querySelectorAll('.box .buttonpass .button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.box .buttonpass .button').forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
        
        document.querySelector('.box .cardlist').classList.add('active');
    });
});
