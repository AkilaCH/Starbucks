function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

const changeCircleColor = (color) => {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const toggleMenu = () => {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
