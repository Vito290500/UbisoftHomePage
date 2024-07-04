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


const itemPagination = document.querySelectorAll('.title-card h3');
const itemsPerViewportPagination = 5;

const itemsPerViewport = 5; 
const itemWidth = 20;
let currentIndex = 1;




// Carousel Click Item 

// Pagination Click
function updateCarousel(idItem) {

    if (idItem == 13 || idItem == 12) {
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 16;
        item15.style.gridColumn = 17;
        item1.style.gridColumn = 18;
        item2.style.gridColumn = 19;
    }
    if (idItem == 1 || idItem == 2) {
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 1;
        item15.style.gridColumn = 2;
        item1.style.gridColumn = 3;
        item2.style.gridColumn = 4;
    }
    if (idItem == 15 || idItem == 14) {
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 16;
        item15.style.gridColumn = 17;
        item1.style.gridColumn = 18;
        item2.style.gridColumn = 19;
    }

    // Change the center
    const centerItem = document.querySelector('.title-card.center');
    centerItem.classList.remove('center');

    const nexCenterItem = document.getElementById(parseInt(idItem));
    nexCenterItem.classList.add('center'); 

    // Change the active 
    const activeItem = document.querySelector('.main-carousel__card-item.active');
    activeItem.classList.remove('active');

    const nextActiveItem = document.querySelector(`[idCard='${idItem}']`);
    nextActiveItem.classList.add('active');
}
function scrollToCenter(idItem) {
    const containerScroll = document.querySelector('.containerScroll');
    const itemWidth = containerScroll.clientWidth / itemsPerViewportPagination; // Width of each item
    const scrollAmount = (parseInt(idItem) - 1) * itemWidth;

    containerScroll.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
updateCarousel(1);
for (const item of itemPagination) {
    item.addEventListener('click', function() {
        var idItem = this.getAttribute('id-refere');
        
        updateCarousel(idItem);
        scrollToCenter(idItem);

    }.bind(item)); 
}


// Carousel Right Btn CLick
let interval = 5000;
let intervalId;

function updateCarouselRight(idItem) {
    let nextId = parseInt(idItem) + 1;

    // Change the center
    const centerItem = document.querySelector('.center');
    centerItem.classList.remove('center');

    if (nextId == 12) {
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 16;
        item15.style.gridColumn = 17;
        item1.style.gridColumn = 18;
        item2.style.gridColumn = 19;
    }

    if (nextId > 15) {
        nextId = 1;
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 1;
        item15.style.gridColumn = 2;
        item1.style.gridColumn = 3;
        item2.style.gridColumn = 4;
    }

    const nextCenterItem = document.getElementById(nextId);
    nextCenterItem.classList.add('center');

    // Change the active
    const activeItem = document.querySelector('.main-carousel__card-item.active');
    activeItem.classList.remove('active');

    const nextActiveItem = document.querySelector(`[idCard='${nextId}']`);
    nextActiveItem.classList.add('active');

    return nextId;
}
function scrollToCenterRightAnimation(idItem) {
    const containerScroll = document.querySelector('.containerScroll');
    const itemWidth = containerScroll.clientWidth / 5;
    const scrollAmount = (parseInt(idItem) - 0.8) * itemWidth;

    containerScroll.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
function rightClickScrollHandling() {
    const centerItem = document.querySelector('.title-card.center');
    const idItem = centerItem.id;

    const nextId = updateCarouselRight(idItem);
    scrollToCenterRightAnimation(nextId);
    console.log(interval);
}
function startInterval() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(rightClickScrollHandling, interval);
}
RightBtn.addEventListener('click', () => {
    interval = 10000;
    rightClickScrollHandling();
    startInterval(); 
});

// Left Click Scroll Effect 
function updateCarouselLeft(idItem) {
    let prevId = parseInt(idItem) - 1;

    // Change the center
    const centerItem = document.querySelector('.center');
    centerItem.classList.remove('center');

    if (prevId == 5) {
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 1;
        item15.style.gridColumn = 2;
        item1.style.gridColumn = 3;
        item2.style.gridColumn = 4;
    }

    if (prevId < 1) {
        prevId = 15;
        const item14 = document.getElementById(14);
        const item15 = document.getElementById(15);
        const item1 = document.getElementById(1);
        const item2 = document.getElementById(2);

        item14.style.gridColumn = 16;
        item15.style.gridColumn = 17;
        item1.style.gridColumn = 18;
        item2.style.gridColumn = 19;
    }

    const prevCenterItem = document.getElementById(prevId);
    prevCenterItem.classList.add('center');

    // Change the active
    const activeItem = document.querySelector('.main-carousel__card-item.active');
    activeItem.classList.remove('active');

    const prevActiveItem = document.querySelector(`[idCard='${prevId}']`);
    prevActiveItem.classList.add('active');

    return prevId;
}
function scrollToCenterLeftAnimation(idItem) {
    const containerScroll = document.querySelector('.containerScroll');
    const itemWidth = containerScroll.clientWidth / 5;
    const scrollAmount = (parseInt(idItem) - 0.8) * itemWidth;

    containerScroll.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}
function leftClickScrollHangling(){
    const centerItem = document.querySelector('.title-card.center');
    const idItem = centerItem.id;

    const prevId = updateCarouselLeft(idItem);

    scrollToCenterLeftAnimation(prevId);
};
LeftBtn.addEventListener('click', () => {
    interval = 10000;
    leftClickScrollHangling();
    startInterval(); 
});

startInterval();



// Drag Click Scroll
let isDragging = false;
let startX;
let scrollLeft;
const containerScroll = document.querySelector('.containerScroll');
const items = document.querySelectorAll('.title-card');

containerScroll.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - containerScroll.offsetLeft;
    scrollLeft = containerScroll.scrollLeft;
    clearInterval(intervalId); 
});
containerScroll.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        handleCentering();
    }
});
containerScroll.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        handleCentering();
        startInterval(); 
    }
});
containerScroll.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerScroll.offsetLeft;
    const walk = (x - startX) * 3; 
    containerScroll.scrollLeft = scrollLeft - walk;
});
function handleCentering() {
    const containerRect = containerScroll.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    
    let closestItem = null;
    let closestDistance = Infinity;
    
    items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(containerCenterX - itemCenterX);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }
    });

    items.forEach(item => item.classList.remove('center'));

    if (closestItem) {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        const next = closestItem.id;
        const nextActive = document.querySelector(`[idCard='${next}']`);
        nextActive.classList.add('active')


        closestItem.classList.add('center');
    }
}
startInterval();





