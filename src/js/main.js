document.addEventListener("DOMContentLoaded", function () {

    // projects-main
    var sliderProject = new Swiper('.projects-main__container', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        freeMode: true,
        // autoplay: {
        //   delay: 5000,
        // },
        pagination: {
            el: '.projects-main .slider-frac__current',
            type: 'bullets',
            bulletClass: 'slider-frac__item',
            bulletActiveClass: 'active',
            clickable: true,
            renderBullet: function (index, className) {
                index = index + 1;
                if (index < 10) {
                    return '<span class="' + className + '">0' + (index) + '</span>';
                }
                return '<span class="' + className + '">' + (index) + '</span>';
            },
        },
        navigation: {
          nextEl: '.slider-nav__btn--next',
          prevEl: '.slider-nav__btn--prev',
          disabledClass: 'disabled',
        },
    });
    let totalPag = document.querySelector('.projects-main .slider-frac__total')
    if (totalPag && sliderProject.slides.length - 2 < 10) {
        totalPag.textContent = '/ 0' + (sliderProject.slides.length - 2)
    } else if (totalPag) {
        totalPag.textContent = '/ ' + (sliderProject.slides.length - 2)
    }

    // team
    var team = new Swiper('.team__container', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        freeMode: true,
        // autoplay: {
        //   delay: 5000,
        // },
        pagination: {
            el: '.team .slider-frac__current',
            type: 'bullets',
            bulletClass: 'slider-frac__item',
            bulletActiveClass: 'active',
            clickable: true,
            renderBullet: function (index, className) {
                index = index + 1;
                if (index < 10) {
                    return '<span class="' + className + '">0' + (index) + '</span>';
                }
                return '<span class="' + className + '">' + (index) + '</span>';
            },
        },
        navigation: {
          nextEl: '.slider-nav__btn--next',
          prevEl: '.slider-nav__btn--prev',
          disabledClass: 'disabled',
        },
    });
    let totalPag1 = document.querySelector('.team .slider-frac__total')
    if (totalPag1 && team.slides.length - 2 < 10) {
        totalPag1.textContent = '/ 0' + (team.slides.length - 2)
    } else if (totalPag) {
        totalPag1.textContent = '/ ' + (team.slides.length - 2)
    }

    // плейсхолдер элементов формы
    let inputs = document.querySelectorAll('.form__item input, .form__item textarea');

    inputs.forEach(element => {
        element.addEventListener('input', function () {
            if (element.value == '') {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        })
    })

    // nav
    let nav = document.querySelector('.nav')
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            contentDropList.forEach(item => item.classList.remove('active'))
            drops.forEach(item => item.classList.remove('active'))
        }
        this.classList.toggle('active')
        nav.classList.toggle('active')
    })
    
   // выпадающий список в меню
   let navLi = document.querySelectorAll('.nav__item');
   let drops = document.querySelectorAll('.nav-drop');
   let contentDrops = document.querySelectorAll('.nav-drop__content');
   let contentDropList = document.querySelectorAll('.nav-drop__list');
   if (window.matchMedia("(max-width: 48em)").matches) {
       navLi.forEach(element => {
           let drop = element.querySelector('.nav-drop');
           let arrow = element.querySelector('.nav__arrow');
           if (drop && arrow) {
                arrow.addEventListener('click', function(){
                    drop.classList.add('active')
               });
           }
       });
       contentDrops.forEach(element => {
        let contentDrop = element.querySelector('.nav-drop__list');
        let contenArrow = element.querySelector('.nav__arrow');
        if (contentDrop && contenArrow) {
            contenArrow.addEventListener('click', function(){
                contentDrop.classList.add('active')
            });
        }
       });

   } else {
       navLi.forEach(element => {
           if (element.querySelector('.nav-drop')) {
               let drop = element.querySelector('.nav-drop');
               element.addEventListener('mouseenter', function(){
                   navLi.forEach(item => item.classList.remove('active'))
                   drops.forEach(item => item.classList.remove('active'))
                   this.classList.add('active')
                   drop.classList.add('active')
               });
               element.addEventListener('mouseleave', function(){
                   navLi.forEach(item => item.classList.remove('active'))
                   drops.forEach(item => item.classList.remove('active'))
               });
           }
       });
   }
})