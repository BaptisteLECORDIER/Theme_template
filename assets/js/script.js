let scrollY = window.scrollY;
let oldScrollY = window.scrollY;
let controlScroll = false;
let changeover = 300;
let selectNavMove = document.querySelector('.retract_navbar');

function headerUp () {
    selectNavMove.classList.remove('header-down');
    selectNavMove.classList.add('header-up');
};

function headerDown () {
    selectNavMove.classList.remove('header-up');
    selectNavMove.classList.add('header-down');
};

function headerMove () {
    scrollY = window.scrollY;

    if (scrollY > changeover) {
        controlScroll = true;
    }

    if (controlScroll) {
        if (scrollY > changeover) {
            if (scrollY > oldScrollY) {
                headerUp ();
            } 
            else {
                headerDown ();
            }
        }
        else {
            headerDown ();
        }
    }
    
    oldScrollY = window.scrollY;
}

headerMove ();

document.addEventListener("scroll", (event) => {
    headerMove ();
});

let hor_nav_control = false

document.querySelector('.horizontal_navbar').querySelector('.burger_menu').addEventListener('click',function() {
    

    hor_nav_control = !hor_nav_control
    console.log(hor_nav_control)

    document.querySelector('.horizontal_navbar').querySelector('.in_menu').classList.remove('close_at_start')

    if (hor_nav_control) {
        document.querySelector('.horizontal_navbar').querySelector('.in_menu').classList.remove('closing_nav')
        document.querySelector('.horizontal_navbar').querySelector('.in_menu').classList.add('opening_nav')
    }

    else {
        document.querySelector('.horizontal_navbar').querySelector('.in_menu').classList.remove('opening_nav')
        document.querySelector('.horizontal_navbar').querySelector('.in_menu').classList.add('closing_nav')
    }
    
})