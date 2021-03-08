/******** SHOW MENU ********/

const showMenu=(toggledId,navId)=>{
    const toggle=document.getElementById(toggledId)
    const nav=document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu')
            // console.log('show menu work correctly:) ');
        })
    }
}

showMenu('nav-toggle','nav-menu')

/******** REMOVE MENU MOBILE ********/

const navLink=document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
    console.log('remove show-menu class');
}
 navLink.forEach(el=>el.addEventListener('click',linkAction))


/******** SCROLL SECTIONS ACTIVE LINK ********/

const sections =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight =current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId =current.getAttribute('id')
            
        if(scrollY >sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active-link')
        }
    })

    window.addEventListener('click',scrollActive)
}


/******** CHANGE BACKGROUN HEADER ********/

function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY >= 200){
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('click',scrollHeader)

/******** SHOW SCROLL TOP ********/

function scrollTop(){
    const scrollTop=document.getElementById('scroll-top')
    if(this.scrollY >= 560){
        scrollTop.classList.add('show-scroll')
    }else{
        scrollTop.classList.remove('show-scroll')
    }
}

window.addEventListener('click',scrollHeader)


/******** MIXITUP FILTER PORTFOLIO ********/


/******** Link active protfolio********/ 


/******** SWIPER CAROUSEL ********/