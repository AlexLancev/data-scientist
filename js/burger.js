const burger = function () {

    const btnLink = document.querySelectorAll('.burger-nav__link');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.burger-nav');
    const body = document.querySelector('body');

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('lock');

        btnLink.forEach(function (item) {
            item.addEventListener('click', function () {
                nav.classList.remove('active');
                body.classList.remove('lock');
            })
        })
    })
}

burger();