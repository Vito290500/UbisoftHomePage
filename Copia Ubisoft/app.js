const NavBarItems = document.querySelector('.nav-bar__items');
const NavBarP = NavBarItems.querySelectorAll('p');
const AllModal = document.querySelectorAll('div[status="none"]');


const ListCardItem = document.querySelectorAll('.main-carousel__card-item');


/* Nav Bar Effect */
function showModal(btn) {
    const currentModalId = btn.getAttribute('modalrefere');
    const ModalToShow = document.getElementById(currentModalId);

    ModalToShow.style.display = 'flex';
    btn.classList.add('hover');

    ModalToShow.addEventListener('mouseenter', () => {
        ModalToShow.style.display = 'flex';
        btn.classList.add('hover');
    });
    ModalToShow.addEventListener('mouseleave', () => {
        ModalToShow.style.display = 'none';
        btn.classList.remove('hover');
    });
}
NavBarP.forEach(btn => {
    btn.addEventListener('mouseenter', () => {

        AllModal.forEach(modal => {
            modal.style.display = 'none';
        });

        NavBarP.forEach(navBtn => navBtn.classList.remove('hover'));

        showModal(btn);
    });
});










/* Carousel Scroll Effect */
const LeftBtn = document.querySelector('.left-btn');
const RightBtn = document.querySelector('.right-btn');
const containerScroll = document.querySelector('.containerScroll');

const itemWidth = 20;
let currentIndex = 0;

LeftBtn.addEventListener('click', () => {

    if (currentIndex > 0) {
        currentIndex--;
        const scrollAmount = currentIndex * itemWidth;
        containerScroll.scrollTo({
            left: scrollAmount * containerScroll.scrollWidth / 300,
            behavior: 'smooth'
        });
    }
});



// Event listener for right button
RightBtn.addEventListener('click', () => {
    if (currentIndex < 15) {
        currentIndex++;

        const scrollAmount = currentIndex * itemWidth;
        containerScroll.scrollTo({
            left: scrollAmount * containerScroll.scrollWidth / 300, 
            behavior: 'smooth'
        });

        // Modify The Center Item Style
        const centerItem = document.querySelector('.center');
        const nextId = parseInt(centerItem.id) + 1;
        const nextCenterItem = document.getElementById(nextId);

        centerItem.classList.remove('center');
        nextCenterItem.classList.add('center');

        const ActiveItem = document.querySelector('.main-carousel__card-item.active');
        const currentIdItem = ActiveItem.getAttribute('idCard');
        const nextIdItem = parseInt(currentIdItem) + 1;

        if (nextIdItem == 16) {
            ActiveItem.classList.remove('active');
            const NexItem = document.querySelector('[idCard="1"]');
            NexItem.classList.add('active');
        } else {
            ActiveItem.classList.remove('active');
            const NexItem = document.querySelector(`[idCard="${nextIdItem}"]`);
            NexItem.classList.add('active');
        }


        /* const listItem = document.querySelector('.containerScroll');
        const extremeLeft = document.querySelector('.extremeleft');
        extremeLeft.classList.remove('extremeleft'); 
        listItem.removeChild(extremeLeft);
        listItem.appendChild(extremeLeft);

        if (currentIndex == 1){
            const newExtremLeft = document.getElementById(15)
            newExtremLeft.classList.add('extremeLeft');
        }else{
            const newExtremLeft = document.getElementById(parseInt(currentIndex) - 2);
            newExtremLeft.classList.add('extremeLeft');
        } */
    }
});






























/* setTimeout(() => {
    rightSlide();

    setInterval(() => {
        rightSlide();
    }, 5000);
}, 5000);
 */





/*
function rightSlide(){

 const assassinCreed = document.querySelector('[img-refere="1"]');
 const title = assassinCreed.querySelector('h3');
 const img = assassinCreed.querySelector('img');
 
 title.style.display = 'flex';
 img.style.display = 'none'

 // Show the correct item to background
 const ActiveItem = document.querySelector('.main-carousel__card-item.active');
 const currentIdItem = ActiveItem.getAttribute('idCard');
 const nextIdItem = parseInt(currentIdItem) + 1;

 if (nextIdItem == 16) {
     ActiveItem.classList.remove('active');
     const NexItem = document.querySelector('[idCard="1"]');
     NexItem.classList.add('active');
     title.style.display = 'none';
     img.style.display = 'flex';

 } else {
     ActiveItem.classList.remove('active');
     const NexItem = document.querySelector(`[idCard="${nextIdItem}"]`);
     NexItem.classList.add('active');
 }

 // Show the corresponding item title
 let nextExtremeRightId = parseInt(nextIdItem) + 2;

 const CurrentCenterItem = document.querySelector('.center');
 const CurrentLeftItem = document.querySelector('.left');
 const CurrentRightItem = document.querySelector('.right');

 const CurrentExtremeRightItem = document.querySelector('.right1');
 const CurrentExtremeLeftItem = document.querySelector('.left1');

 if (nextExtremeRightId > 15) {
     nextExtremeRightId = (parseInt(nextIdItem) - 15) + 2;
 }
 const NextExtremeRightItem = document.querySelector(`div[img-refere="${nextExtremeRightId}"]`);


 CurrentExtremeLeftItem.classList.remove('left1');
 CurrentLeftItem.classList.remove('left');
 CurrentLeftItem.classList.add('left1');
 
 CurrentCenterItem.classList.remove('center');
 CurrentCenterItem.classList.add('left');

 CurrentRightItem.classList.remove('right');
 CurrentRightItem.classList.add('center');

 CurrentExtremeRightItem.classList.remove('right1');
 CurrentExtremeRightItem.classList.add('right');
 NextExtremeRightItem.classList.add('right1');
}
*/


/* LeftBtn.addEventListener('click', ()=>{
    const assassinCreed = document.querySelector('[img-refere="1"]');
    const title = assassinCreed.querySelector('h3');
    const img = assassinCreed.querySelector('img');
    
    title.style.display = 'flex';
    img.style.display = 'none'

    // Show the correct item to background
    const ActiveItem = document.querySelector('.main-carousel__card-item.active');
    const currentIdItem = ActiveItem.getAttribute('idCard');
    const nextIdItem = parseInt(currentIdItem) -1;

    if(nextIdItem == 0){
        ActiveItem.classList.remove('active');
        const NexItem = document.querySelector('[idCard="15"]');
        NexItem.classList.add('active');
    } 
    else{
        ActiveItem.classList.remove('active');
        const NexItem = document.querySelector(`[idCard="${nextIdItem}"]` );
        NexItem.classList.add('active');

        if(nextIdItem == 1){
            title.style.display = 'none';
            img.style.display = 'flex';
        }
    }
 
    // Show the corresponding item title
    const CurrentCenterItem = document.querySelector('.center');
    const CurrentLeftItem = document.querySelector('.left');
    const CurrentRightItem = document.querySelector('.right');

    let nextExtremeLeftId = parseInt(CurrentLeftItem.getAttribute('img-refere')) - 2;
 
    const CurrentExtremeRightItem = document.querySelector('.right1');
    const CurrentExtremeLeftItem = document.querySelector('.left1');
 
    if (nextExtremeLeftId <= 0) {
        nextExtremeLeftId = (parseInt(nextIdItem) + 15) - 2;
    }
    const NextExtremeLeftItem = document.querySelector(`div[img-refere="${nextExtremeLeftId}"]`);

    console.log(nextExtremeLeftId)
    console.log(NextExtremeLeftItem)
 
    CurrentExtremeRightItem.classList.remove('right1');
    CurrentRightItem.classList.remove('right');
    CurrentRightItem.classList.add('right1');
     
    CurrentCenterItem.classList.remove('center');
    CurrentCenterItem.classList.add('right');
 
    CurrentLeftItem.classList.remove('left');
    CurrentLeftItem.classList.add('center');
 
    CurrentExtremeLeftItem.classList.remove('left1');
    CurrentExtremeLeftItem.classList.add('left');
    NextExtremeLeftItem.classList.add('left1'); 
  
})

 */



