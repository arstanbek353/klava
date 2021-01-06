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
            nextEl: '.projects-main__container .slider-nav__btn--next',
            prevEl: '.projects-main__container .slider-nav__btn--prev',
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
            nextEl: '.team .slider-nav__btn--next',
            prevEl: '.team .slider-nav__btn--prev',
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
                element.nextElementSibling.classList.add('active')
            } else {
                element.nextElementSibling.classList.add('active')
            }
        })
    })

    // nav
    let nav = document.querySelector('.nav')
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function () {
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
                arrow.addEventListener('click', function () {
                    drop.classList.add('active')
                });
            }
        });
        contentDrops.forEach(element => {
            let contentDrop = element.querySelector('.nav-drop__list');
            let contenArrow = element.querySelector('.nav__arrow');
            if (contentDrop && contenArrow) {
                contenArrow.addEventListener('click', function () {
                    contentDrop.classList.add('active')
                });
            }
        });

    } else {
        navLi.forEach(element => {
            if (element.querySelector('.nav-drop')) {
                let drop = element.querySelector('.nav-drop');
                element.addEventListener('mouseenter', function () {
                    navLi.forEach(item => item.classList.remove('active'))
                    drops.forEach(item => item.classList.remove('active'))
                    this.classList.add('active')
                    drop.classList.add('active')
                });
                element.addEventListener('mouseleave', function () {
                    navLi.forEach(item => item.classList.remove('active'))
                    drops.forEach(item => item.classList.remove('active'))
                });
            }
        });
    }

    // следить за тем, что элемент попадает в поле зрения
    function doInWindow(block, className, startX) {
        let header = document.querySelector('header');
        let headerHeight = header.getBoundingClientRect().height;
        let blocks = document.querySelectorAll(block);
        blocks.forEach(element => {
            let coord = getCoords(element);
            if (-coord.height < coord.y && coord.y < headerHeight + startX) {
                element.classList.add(className);
            } else {
                element.classList.remove(className)
            }
        })
    }
    function helpF() {
        doInWindow('.main-category__item', 'active', 200)
    }
    helpF()
    window.addEventListener('scroll', helpF)
    // получить координаты
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
            y: box.y,
            x: box.x,
            height: box.height,
            width: box.width,
        };
    }

    // закрыть уведомление

    let formAlert = document.querySelectorAll('.form__msg')
    let formClose = document.querySelectorAll('.form__close')
    formClose.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            formAlert.forEach(msg => {
                msg.classList.remove('active')
            });
        })
    });

    // прокрутка до элемента
    function toScroll(link) {
        let links = document.querySelectorAll(link)
        links.forEach(element => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                let href = this.getAttribute('href')
                let block = document.querySelector(`#${href}`)
                let sizeScroll = block.getBoundingClientRect().top + pageYOffset - 50
                window.scrollTo({
                    top: sizeScroll,
                    behavior: "smooth",
                })
            })
        });
    }

    toScroll('a[href="request"')

    // формы

    $('.request__form').submit(function(e){
        var that = $(this);
        console.log(that[0].querySelector('input[name="TEL"]'));
        if (validateTel(that[0].querySelector('input[name="TEL"]'))) {
            return false;
        }
        if (validateEmail(that[0].querySelector('input[name="EMAIL"]'))) {
            return false;
        } 
        var data = that.serialize();
		
		var msg = $(this).find('.form__msg');
        $.ajax({
            type: 'post',
            url: '/ajax/form.php',
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log(data);
				alertMessage(msg, 'active');
            },
            error: function(data){
                console.log(false);
				alertMessage(msg, 'my-error');
            }
        });
        resetForm($(this)[0])
        return false;
    })

    // Сообщение об отправке формы klava.info@mail.ru
	function alertMessage(msg, className) {
		$(msg).addClass(className);
	}
})

function resetForm(form) {
    let input = form.querySelectorAll('input[type="text"], textarea');
    let checkbox = form.querySelectorAll('input[type="checkbox"]');
    let radio = form.querySelectorAll('input[type="radio"]');
    let select = form.querySelectorAll('select');
    let placeholder = form.querySelectorAll('.form__placeholder');

    input.forEach(element => {
        element.classList.remove('hide')
        element.value = ''
        element.removeAttribute('value')
    })
    checkbox.forEach(element => {
        if (element.hasAttribute('checked')) {
            element.checked = true;
        } else {
            element.checked = false;
        }
    })
    radio.forEach(element => {
        if (element.hasAttribute('checked')) {
            element.checked = true;
        } else {
            element.checked = false;
        }
    })

    select.forEach(element => {
        element.selectedIndex = 0
    })

    placeholder.forEach(element => {
        element.classList.remove('active')
    })
}


function validateEmailRxp(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateEmail(el) {
    let htmlEl = '<div class="form__input-msg">Невалидный email</div>'
    let email = el.value;
    if (el.nextElementSibling.classList.contains('form__input-msg')) {
        el.nextElementSibling.remove()
    }
    if (validateEmailRxp(email)) {
        return false;
    } else {
        el.insertAdjacentHTML('afterend', htmlEl)
        return true;
    }
}

function validateTelRxp(tel) {
    let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return re.test(tel);
}

function validateTel(el) {
    let htmlEl = '<div class="form__input-msg">Невалидный номер</div>'
    let tel = el.value;
    if (el.nextElementSibling.classList.contains('form__input-msg')) {
        el.nextElementSibling.remove()
    }
    if (validateTelRxp(tel)) {
        return false;
    } else {
        el.insertAdjacentHTML('afterend', htmlEl)
        return true;
    }
}