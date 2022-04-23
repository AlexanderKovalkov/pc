const modalBtn = document.querySelector('.modal__button');
const modal = document.querySelector('.modal');
const modalInner = document.querySelector('.modal__inner');
const closeBtn = document.createElement('span');
closeBtn.innerHTML = 'X';
modalInner.prepend(closeBtn);


// Стили для кнопки закрытия
closeBtn.style.cssText = `
font-size:18px; 
display: block;
text-align: right;
cursor:pointer;
`; 


modalBtn.addEventListener('click', () =>{
    modal.style.display = 'flex';
})

modal.addEventListener('click', (event) =>{   
    const modalContent = event.target.closest('.modal__inner');
   if(!modalContent) {
       modal.style.display = '';
   }
})

// Событие закрытие модального окна по клику на крестик
closeBtn.addEventListener('click', () =>{
    modal.style.display = '';
})