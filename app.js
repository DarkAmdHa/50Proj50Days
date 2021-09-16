const container = document.querySelector('.container');
const open = document.getElementById('open');
const close = document.getElementById('close');


open.addEventListener('click', (e)=>{
    container.classList.toggle('show-nav');
    e.preventDefault();
});

close.addEventListener('click', (e)=>{
    container.classList.toggle('show-nav');
    e.preventDefault();
});