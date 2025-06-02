
const navBar = () => {
    const manuBtn = document.querySelector(".navigation_show_btn");
    const crossBtn = document.querySelector(".cross_btn");
    var navigation = document.querySelector(".right_nav");

    manuBtn.addEventListener('click', () => {
        navigation.classList.remove('hidden_navigation');
        crossBtn.classList.remove('hidden');
    })

    crossBtn.addEventListener("click", () => {
        navigation.classList.add('hidden_navigation')
    })
}

navBar()


const fixesNavbar = () => {
    var nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            nav.classList.add('fixed_nav');
        } else {
            nav.classList.remove('fixed_nav');
        }
    });
}

fixesNavbar();
