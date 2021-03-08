/******** SHOW MENU ********/

const showMenu=(toggledId,navId)=>{
    const toggle=document.getElementById(toggledId)
    const nav=document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
            console.log('hello wold');
        })
    }
}

showMenu('nav-toggle','nav-menu')
/******** REMOVE MENU MOBILE ********/


/******** SCROLL SECTIONS ACTIVE LINK ********/


/******** CHANGE BACKGROUN HEADER ********/


/******** MIXITUP FILTER PORTFOLIO ********/


/******** Link active protfolio********/ 


/******** SWIPER CAROUSEL ********/