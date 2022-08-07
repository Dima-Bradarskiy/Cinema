const time = document.querySelector('.header__hour');
const modalWindow = document.querySelector('.modal');
const buttonsPlay = document.querySelectorAll('.button-play');

buttonsPlay.forEach((item, i) =>{
    item.addEventListener('click', ()=>{
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () =>{
    modalWindow.classList.remove('active');
})




let date =  new Date();
time.innerText = date.getHours() + ':' + date.getMinutes();



