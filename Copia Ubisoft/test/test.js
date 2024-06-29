const containerScroll = document.querySelector('.containerScroll');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const itemWidth = 20; 
let currentIndex = 0;

// Event listener for left button
leftBtn.addEventListener('click', () => {

    if (currentIndex > 0) {
        currentIndex--;
        const scrollAmount = currentIndex * itemWidth;
        containerScroll.scrollTo({
            left: scrollAmount * containerScroll.scrollWidth / 200,
            behavior: 'smooth'
        });
    }
});



function updateListItem(){
    var container = document.querySelector('.containerScroll');
    var primoElemento = container.firstElementChild;

    container.append(primoElemento);
}


// Event listener for right button
rightBtn.addEventListener('click', () => {
    currentIndex++;

    if(currentIndex == 11){
        currentIndex = 1;
    }

    const scrollAmount = currentIndex * itemWidth;
    containerScroll.scrollTo({
            left: scrollAmount , 
            behavior: 'smooth'
    })

    const centerItem = document.querySelector('.center');
    centerItem.classList.remove('center');

    var nextId = currentIndex + 1;
    if(nextId > 10){
        const nexCenterItem = document.getElementById(1);
        nexCenterItem.classList.add('center');
    }else{
        const nexCenterItem = document.getElementById(currentIndex + 1);
        nexCenterItem.classList.add('center');
    }
    console.log(nextId)

    updateListItem()
});
    