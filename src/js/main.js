let trandingProducts = [
    {
        id: '2871',
        url: '#',
        label: 'Sale',
        color: '#C08D74',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
    {
        id: '2872',
        url: '#',
        label: 'Акция! 1+1=3',
        color: '#EA976F',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
    {
        id: '2873',
        url: '#',
        label: 'Sale',
        color: '#C07474',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
    {
        id: '2874',
        url: '#',
        label: 'Бесплатная доставка',
        color: '#EA976F',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
    {
        id: '2875',
        url: '#',
        label: 'Sale',
        color: '#C08D74',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
    {
        id: '2876',
        url: '#',
        label: 'Акция! 1+1=3',
        color: '#EA976F',
        imgSrc: './img/product-ex.png',
        title: 'Brown to Blonde',
        descr: 'Пигмент для бровей',
        volume: '12 ml.',
        currentPrice: '1 500 ₽',
        oldPrice: '3 000 ₽'
    },
]

function saveCurrentData(array) {
    localStorage.setItem("userData", JSON.stringify(array));
}

function getCurrentData() {
    const data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : [];
}

function saveFavorites(items) {
    localStorage.setItem("favoritesSet", JSON.stringify(items));
}

function getFavorites() {
    const favsList = localStorage.getItem("favoritesSet");
    return favsList ? JSON.parse(favsList) : [];
}

function removeFavoriteItem(item) {
    const items = getFavorites();
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
        saveFavorites(items);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Burger
    let burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__menu'),
        headerContacts = document.querySelector('.header__contact'),
        headerActions = document.querySelector('.header__actions');
    burger.onclick = () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        headerContacts.classList.toggle('hidden');
        headerActions.classList.toggle('hidden');
    }
    // Fixed menu
    let startPosition;
    let headerScroll = function () {
        var header = document.querySelector('.header'),
            main = document.querySelector('.main');
        startPosition = header.offsetHeight;
        main.style.paddingTop = `${startPosition}px`
    }
    $(window).on('load resize', headerScroll);
    headerScroll();


    // Swiper Render
    var swiperWrapper = document.querySelector('.swiper-wrapper');
    for (let trandingProduct of trandingProducts) {
        swiperWrapper.insertAdjacentHTML('beforeend', `
            <li class="swiper__slide slide swiper-slide" data-id="${trandingProduct.id}">
                <a class="slide__link" href="${trandingProduct.url}">
                    <div class="slide__top">
                        <p class="slide__label text-14">${trandingProduct.label}</p>
                        <button class="slide__fav btn-reset">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.8398 3C15.093 3 13.5616 3.77893 12.4113 5.25262C12.2579 5.44917 12.1212 5.64579 12 5.83623C11.8788 5.64575 11.7421 5.44917 11.5887 5.25262C10.4384 3.77893 8.90701 3 7.16016 3C3.8602 3 1.5 5.7631 1.5 9.07868C1.5 12.8699 4.60722 16.4429 11.575 20.664C11.7056 20.7431 11.8528 20.7827 12 20.7827C12.1472 20.7827 12.2944 20.7431 12.425 20.664C19.3928 16.443 22.5 12.8699 22.5 9.07872C22.5 5.76486 20.1417 3 16.8398 3Z"
                                    fill="#E4E4E4"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="slide__color" style="background-color: ${trandingProduct.color};"></div>
                    <img class="slide__img" src="${trandingProduct.imgSrc}" alt="product image">
                    <p class="slide__title">${trandingProduct.title}</p>
                    <p class="slide__descr text-14">${trandingProduct.descr}</p>
                    <p class="slide__vol text-14">${trandingProduct.volume}</p>
                    <div class="slide__price">
                        <p class="slide__actual-price">${trandingProduct.currentPrice}</p>
                        <p class="slide__old-price">${trandingProduct.oldPrice}</p>
                    </div>
                </a>
            </li>
        `)
    }

    // Swiper Init
    var productSwiper = new Swiper(".trands__swiper", {
        slidesPerScroll: 1,
        slidesPerView: 3.9,
        spaceBetween: 32,
        loop: true,
        breakpoints: {
            991: {
                spaceBetween: 32
            },
            769: {
                spaceBetween: 16
            },
            320: {
                spaceBetween: 8
            }
        }
    });
    

    // Form - get user data if filled
    var form = document.querySelector('form');
    var inputs = form.querySelectorAll('.form__input');
    var formSendBtn = document.querySelector('.profile__btn');
    let userData = []
    formSendBtn.onclick = () => {
        inputs.forEach(input => {
            let attr = input.getAttribute('id');
            let value = input.value;
            let userDataItem = {
                attr: attr,
                val: value
            }
            userData.push(userDataItem)
        })
        saveCurrentData(userData)
    }

    // При загрузке страницы проверяем, были ли сохранены данные при прошлом посещении
    let currentData = getCurrentData();
    if (currentData) {
        for (let i=0; i < currentData.length; i++) {
            for (let input of inputs) {
                if (input.getAttribute('id') === currentData[i].attr) {
                    input.value = currentData[i].val;
                }
            }
        }
    }


    // Favs
    var favoritesSet = new Set(getFavorites());
    var productSlides  = document.querySelectorAll('.swiper__slide');
    var favHeaderLabel = document.querySelector('.actions__btn--fav .actions__label');
    if (favoritesSet) {
        for (let item of favoritesSet) {
            for (let productSlide of productSlides) {
                if (productSlide.getAttribute('data-id') === item) {
                    productSlide.classList.add('saved')
                }
            }
        }
        handleHeaderFavs()
    }

    function handleFavs() {
        var favBtns = document.querySelectorAll('.slide__fav');
        favBtns.forEach(favBtn => {
            favBtn.onclick = (e) => {
                e.preventDefault();
                let currentSlide = e.target.closest('.swiper__slide');
                let currentSlideId = currentSlide.getAttribute('data-id');

                if (!currentSlide.classList.contains('saved')) {
                    currentSlide.classList.add('saved');
                    favoritesSet.add(currentSlideId);
                    saveFavorites([...favoritesSet]);
                } else {
                    currentSlide.classList.remove('saved');
                    removeFavoriteItem(currentSlideId)
                    favoritesSet = new Set(getFavorites());
                }
                handleHeaderFavs()
            }
        })
    }
    function handleHeaderFavs() {
        favHeaderLabel.textContent = favoritesSet.size;
    }
    handleFavs()
})