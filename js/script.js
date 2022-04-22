const contents = document.querySelectorAll(".program-line__content");

contents.forEach((item) => {
   let title = item.querySelector('.program-line__title');
//    title.onclick = () => {
//        console.log(title);
//   item.querySelector('.program-line__descr').classList.toggle('active');    
//    } 

    title.addEventListener('click', () => {
        item.querySelector('.program-line__descr').classList.toggle('active');

    })


})