console.log('главный слайдер');

let mainSliderPosition = 0;
const mainSlidesToShow = 1;
const mainSlidesToScroll = 1;
const mainSlidercontainer = document.querySelector('.main-slider__container');
const mainSlidertrack = document.querySelector('.main-slider__track');
const mainSliderBtnPrev = document.querySelector('.button-prev');
const mainSliderBtnNext = document.querySelector('.button-next');
const mainSliderItems = document.querySelectorAll('.main-slider__item');
const mainSliderItemsCount = mainSliderItems.length;
const mainSliderItemWidth = mainSlidercontainer.clientWidth / mainSlidesToShow;
const mainSliderMovePosition = mainSlidesToScroll * mainSliderItemWidth;

mainSliderItems.forEach((item) => {
    item.style.minWidth = `${mainSliderItemWidth}px`;
});


mainSliderBtnNext.addEventListener('click', () => {
    const itemsMoveLeft = mainSliderItemsCount - (Math.abs(mainSliderPosition) + mainSlidesToShow * mainSliderItemWidth) / mainSliderItemWidth;

    mainSliderPosition -= itemsMoveLeft >= mainSlidesToScroll ? mainSliderMovePosition : itemsMoveLeft * mainSliderItemWidth;

    setMainSliderPosition();
    checkMainSliderBtns();
});

mainSliderBtnPrev.addEventListener('click', () => {
    const itemsMoveLeft = Math.abs(mainSliderPosition) / mainSliderItemWidth;

    mainSliderPosition += itemsMoveLeft >= mainSlidesToScroll ? mainSliderMovePosition : itemsMoveLeft * mainSliderItemWidth;

    setMainSliderPosition();
    checkMainSliderBtns();
});

const setMainSliderPosition = () => {
    mainSlidertrack.style.transform = `translateX(${mainSliderPosition}px)`;
};

const checkMainSliderBtns = () => {
    mainSliderBtnPrev.disabled = mainSliderPosition === 0;
    mainSliderBtnNext.disabled = mainSliderPosition <= -(mainSliderItemsCount - mainSlidesToShow) * mainSliderItemWidth;
};

checkMainSliderBtns();