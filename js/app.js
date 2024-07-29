"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var trandingProducts = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
function saveCurrentData(array) {
  localStorage.setItem("userData", JSON.stringify(array));
}
function getCurrentData() {
  var data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : [];
}
function saveFavorites(items) {
  localStorage.setItem("favoritesSet", JSON.stringify(items));
}
function getFavorites() {
  var favsList = localStorage.getItem("favoritesSet");
  return favsList ? JSON.parse(favsList) : [];
}
function removeFavoriteItem(item) {
  var items = getFavorites();
  var index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    saveFavorites(items);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // Burger
  var burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu'),
    headerContacts = document.querySelector('.header__contact'),
    headerActions = document.querySelector('.header__actions');
  burger.onclick = function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    headerContacts.classList.toggle('hidden');
    headerActions.classList.toggle('hidden');
  };
  // Fixed menu
  var startPosition;
  var headerScroll = function headerScroll() {
    var header = document.querySelector('.header'),
      main = document.querySelector('.main');
    startPosition = header.offsetHeight;
    main.style.paddingTop = "".concat(startPosition, "px");
  };
  $(window).on('load resize', headerScroll);
  headerScroll();

  // Swiper Render
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  for (var _i = 0, _trandingProducts = trandingProducts; _i < _trandingProducts.length; _i++) {
    var trandingProduct = _trandingProducts[_i];
    swiperWrapper.insertAdjacentHTML('beforeend', "\n            <li class=\"swiper__slide slide swiper-slide\" data-id=\"".concat(trandingProduct.id, "\">\n                <a class=\"slide__link\" href=\"").concat(trandingProduct.url, "\">\n                    <div class=\"slide__top\">\n                        <p class=\"slide__label text-14\">").concat(trandingProduct.label, "</p>\n                        <button class=\"slide__fav btn-reset\">\n                            <svg width=\"24\" height=\"24\" viewbox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path\n                                    d=\"M16.8398 3C15.093 3 13.5616 3.77893 12.4113 5.25262C12.2579 5.44917 12.1212 5.64579 12 5.83623C11.8788 5.64575 11.7421 5.44917 11.5887 5.25262C10.4384 3.77893 8.90701 3 7.16016 3C3.8602 3 1.5 5.7631 1.5 9.07868C1.5 12.8699 4.60722 16.4429 11.575 20.664C11.7056 20.7431 11.8528 20.7827 12 20.7827C12.1472 20.7827 12.2944 20.7431 12.425 20.664C19.3928 16.443 22.5 12.8699 22.5 9.07872C22.5 5.76486 20.1417 3 16.8398 3Z\"\n                                    fill=\"#E4E4E4\"></path>\n                            </svg>\n                        </button>\n                    </div>\n                    <div class=\"slide__color\" style=\"background-color: ").concat(trandingProduct.color, ";\"></div>\n                    <img class=\"slide__img\" src=\"").concat(trandingProduct.imgSrc, "\" alt=\"product image\">\n                    <p class=\"slide__title\">").concat(trandingProduct.title, "</p>\n                    <p class=\"slide__descr text-14\">").concat(trandingProduct.descr, "</p>\n                    <p class=\"slide__vol text-14\">").concat(trandingProduct.volume, "</p>\n                    <div class=\"slide__price\">\n                        <p class=\"slide__actual-price\">").concat(trandingProduct.currentPrice, "</p>\n                        <p class=\"slide__old-price\">").concat(trandingProduct.oldPrice, "</p>\n                    </div>\n                </a>\n            </li>\n        "));
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
  var userData = [];
  formSendBtn.onclick = function () {
    inputs.forEach(function (input) {
      var attr = input.getAttribute('id');
      var value = input.value;
      var userDataItem = {
        attr: attr,
        val: value
      };
      userData.push(userDataItem);
    });
    saveCurrentData(userData);
  };

  // При загрузке страницы проверяем, были ли сохранены данные при прошлом посещении
  var currentData = getCurrentData();
  if (currentData) {
    for (var i = 0; i < currentData.length; i++) {
      var _iterator = _createForOfIteratorHelper(inputs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          if (input.getAttribute('id') === currentData[i].attr) {
            input.value = currentData[i].val;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  // Favs
  var favoritesSet = new Set(getFavorites());
  var productSlides = document.querySelectorAll('.swiper__slide');
  var favHeaderLabel = document.querySelector('.actions__btn--fav .actions__label');
  if (favoritesSet) {
    var _iterator2 = _createForOfIteratorHelper(favoritesSet),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        var _iterator3 = _createForOfIteratorHelper(productSlides),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var productSlide = _step3.value;
            if (productSlide.getAttribute('data-id') === item) {
              productSlide.classList.add('saved');
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    handleHeaderFavs();
  }
  function handleFavs() {
    var favBtns = document.querySelectorAll('.slide__fav');
    favBtns.forEach(function (favBtn) {
      favBtn.onclick = function (e) {
        e.preventDefault();
        var currentSlide = e.target.closest('.swiper__slide');
        var currentSlideId = currentSlide.getAttribute('data-id');
        if (!currentSlide.classList.contains('saved')) {
          currentSlide.classList.add('saved');
          favoritesSet.add(currentSlideId);
          saveFavorites(_toConsumableArray(favoritesSet));
        } else {
          currentSlide.classList.remove('saved');
          removeFavoriteItem(currentSlideId);
          favoritesSet = new Set(getFavorites());
        }
        handleHeaderFavs();
      };
    });
  }
  function handleHeaderFavs() {
    favHeaderLabel.textContent = favoritesSet.size;
  }
  handleFavs();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidHJhbmRpbmdQcm9kdWN0cyIsImlkIiwidXJsIiwibGFiZWwiLCJjb2xvciIsImltZ1NyYyIsInRpdGxlIiwiZGVzY3IiLCJ2b2x1bWUiLCJjdXJyZW50UHJpY2UiLCJvbGRQcmljZSIsInNhdmVDdXJyZW50RGF0YSIsImFycmF5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRDdXJyZW50RGF0YSIsImRhdGEiLCJnZXRJdGVtIiwicGFyc2UiLCJzYXZlRmF2b3JpdGVzIiwiaXRlbXMiLCJnZXRGYXZvcml0ZXMiLCJmYXZzTGlzdCIsInJlbW92ZUZhdm9yaXRlSXRlbSIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImhlYWRlckNvbnRhY3RzIiwiaGVhZGVyQWN0aW9ucyIsIm9uY2xpY2siLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzdGFydFBvc2l0aW9uIiwiaGVhZGVyU2Nyb2xsIiwiaGVhZGVyIiwibWFpbiIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwicGFkZGluZ1RvcCIsIiQiLCJ3aW5kb3ciLCJvbiIsInN3aXBlcldyYXBwZXIiLCJ0cmFuZGluZ1Byb2R1Y3QiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwcm9kdWN0U3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyU2Nyb2xsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJicmVha3BvaW50cyIsImZvcm0iLCJpbnB1dHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9ybVNlbmRCdG4iLCJ1c2VyRGF0YSIsImZvckVhY2giLCJpbnB1dCIsImF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInVzZXJEYXRhSXRlbSIsInZhbCIsInB1c2giLCJjdXJyZW50RGF0YSIsImkiLCJsZW5ndGgiLCJmYXZvcml0ZXNTZXQiLCJTZXQiLCJwcm9kdWN0U2xpZGVzIiwiZmF2SGVhZGVyTGFiZWwiLCJwcm9kdWN0U2xpZGUiLCJhZGQiLCJoYW5kbGVIZWFkZXJGYXZzIiwiaGFuZGxlRmF2cyIsImZhdkJ0bnMiLCJmYXZCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50U2xpZGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY3VycmVudFNsaWRlSWQiLCJjb250YWlucyIsInJlbW92ZSIsInRleHRDb250ZW50Iiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUcsQ0FDbkI7RUFDSUMsRUFBRSxFQUFFLE1BQU07RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsS0FBSyxFQUFFLE1BQU07RUFDYkMsS0FBSyxFQUFFLFNBQVM7RUFDaEJDLE1BQU0sRUFBRSxzQkFBc0I7RUFDOUJDLEtBQUssRUFBRSxpQkFBaUI7RUFDeEJDLEtBQUssRUFBRSxvQkFBb0I7RUFDM0JDLE1BQU0sRUFBRSxRQUFRO0VBQ2hCQyxZQUFZLEVBQUUsU0FBUztFQUN2QkMsUUFBUSxFQUFFO0FBQ2QsQ0FBQyxFQUNEO0VBQ0lULEVBQUUsRUFBRSxNQUFNO0VBQ1ZDLEdBQUcsRUFBRSxHQUFHO0VBQ1JDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxLQUFLLEVBQUUsU0FBUztFQUNoQkMsTUFBTSxFQUFFLHNCQUFzQjtFQUM5QkMsS0FBSyxFQUFFLGlCQUFpQjtFQUN4QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLFlBQVksRUFBRSxTQUFTO0VBQ3ZCQyxRQUFRLEVBQUU7QUFDZCxDQUFDLEVBQ0Q7RUFDSVQsRUFBRSxFQUFFLE1BQU07RUFDVkMsR0FBRyxFQUFFLEdBQUc7RUFDUkMsS0FBSyxFQUFFLE1BQU07RUFDYkMsS0FBSyxFQUFFLFNBQVM7RUFDaEJDLE1BQU0sRUFBRSxzQkFBc0I7RUFDOUJDLEtBQUssRUFBRSxpQkFBaUI7RUFDeEJD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LCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdHJhbmRpbmdQcm9kdWN0cyA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnMjg3MScsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICBsYWJlbDogJ1NhbGUnLFxuICAgICAgICBjb2xvcjogJyNDMDhENzQnLFxuICAgICAgICBpbWdTcmM6ICcuL2ltZy9wcm9kdWN0LWV4LnBuZycsXG4gICAgICAgIHRpdGxlOiAnQnJvd24gdG8gQmxvbmRlJyxcbiAgICAgICAgZGVzY3I6ICfQn9C40LPQvNC10L3RgiDQtNC70Y8g0LHRgNC+0LLQtdC5JyxcbiAgICAgICAgdm9sdW1lOiAnMTIgbWwuJyxcbiAgICAgICAgY3VycmVudFByaWNlOiAnMSA1MDAg4oK9JyxcbiAgICAgICAgb2xkUHJpY2U6ICczIDAwMCDigr0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMjg3MicsXG4gICAgICAgIHVybDogJyMnLFxuICAgICAgICBsYWJlbDogJ9CQ0LrRhtC40Y8hIDErMT0zJyxcbiAgICAgICAgY29sb3I6ICcjRUE5NzZGJyxcbiAgICAgICAgaW1nU3JjOiAnLi9pbWcvcHJvZHVjdC1leC5wbmcnLFxuICAgICAgICB0aXRsZTogJ0Jyb3duIHRvIEJsb25kZScsXG4gICAgICAgIGRlc2NyOiAn0J/QuNCz0LzQtdC90YIg0LTQu9GPINCx0YDQvtCy0LXQuScsXG4gICAgICAgIHZvbHVtZTogJzEyIG1sLicsXG4gICAgICAgIGN1cnJlbnRQcmljZTogJzEgNTAwIOKCvScsXG4gICAgICAgIG9sZFByaWNlOiAnMyAwMDAg4oK9J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJzI4NzMnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgbGFiZWw6ICdTYWxlJyxcbiAgICAgICAgY29sb3I6ICcjQzA3NDc0JyxcbiAgICAgICAgaW1nU3JjOiAnLi9pbWcvcHJvZHVjdC1leC5wbmcnLFxuICAgICAgICB0aXRsZTogJ0Jyb3duIHRvIEJsb25kZScsXG4gICAgICAgIGRlc2NyOiAn0J/QuNCz0LzQtdC90YIg0LTQu9GPINCx0YDQvtCy0LXQuScsXG4gICAgICAgIHZvbHVtZTogJzEyIG1sLicsXG4gICAgICAgIGN1cnJlbnRQcmljZTogJzEgNTAwIOKCvScsXG4gICAgICAgIG9sZFByaWNlOiAnMyAwMDAg4oK9J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJzI4NzQnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgbGFiZWw6ICfQkdC10YHQv9C70LDRgtC90LDRjyDQtNC+0YHRgtCw0LLQutCwJyxcbiAgICAgICAgY29sb3I6ICcjRUE5NzZGJyxcbiAgICAgICAgaW1nU3JjOiAnLi9pbWcvcHJvZHVjdC1leC5wbmcnLFxuICAgICAgICB0aXRsZTogJ0Jyb3duIHRvIEJsb25kZScsXG4gICAgICAgIGRlc2NyOiAn0J/QuNCz0LzQtdC90YIg0LTQu9GPINCx0YDQvtCy0LXQuScsXG4gICAgICAgIHZvbHVtZTogJzEyIG1sLicsXG4gICAgICAgIGN1cnJlbnRQcmljZTogJzEgNTAwIOKCvScsXG4gICAgICAgIG9sZFByaWNlOiAnMyAwMDAg4oK9J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJzI4NzUnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgbGFiZWw6ICdTYWxlJyxcbiAgICAgICAgY29sb3I6ICcjQzA4RDc0JyxcbiAgICAgICAgaW1nU3JjOiAnLi9pbWcvcHJvZHVjdC1leC5wbmcnLFxuICAgICAgICB0aXRsZTogJ0Jyb3duIHRvIEJsb25kZScsXG4gICAgICAgIGRlc2NyOiAn0J/QuNCz0LzQtdC90YIg0LTQu9GPINCx0YDQvtCy0LXQuScsXG4gICAgICAgIHZvbHVtZTogJzEyIG1sLicsXG4gICAgICAgIGN1cnJlbnRQcmljZTogJzEgNTAwIOKCvScsXG4gICAgICAgIG9sZFByaWNlOiAnMyAwMDAg4oK9J1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJzI4NzYnLFxuICAgICAgICB1cmw6ICcjJyxcbiAgICAgICAgbGFiZWw6ICfQkNC60YbQuNGPISAxKzE9MycsXG4gICAgICAgIGNvbG9yOiAnI0VBOTc2RicsXG4gICAgICAgIGltZ1NyYzogJy4vaW1nL3Byb2R1Y3QtZXgucG5nJyxcbiAgICAgICAgdGl0bGU6ICdCcm93biB0byBCbG9uZGUnLFxuICAgICAgICBkZXNjcjogJ9Cf0LjQs9C80LXQvdGCINC00LvRjyDQsdGA0L7QstC10LknLFxuICAgICAgICB2b2x1bWU6ICcxMiBtbC4nLFxuICAgICAgICBjdXJyZW50UHJpY2U6ICcxIDUwMCDigr0nLFxuICAgICAgICBvbGRQcmljZTogJzMgMDAwIOKCvSdcbiAgICB9LFxuXVxuXG5mdW5jdGlvbiBzYXZlQ3VycmVudERhdGEoYXJyYXkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRhKCkge1xuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJEYXRhXCIpO1xuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xufVxuXG5mdW5jdGlvbiBzYXZlRmF2b3JpdGVzKGl0ZW1zKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmYXZvcml0ZXNTZXRcIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RmF2b3JpdGVzKCkge1xuICAgIGNvbnN0IGZhdnNMaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNTZXRcIik7XG4gICAgcmV0dXJuIGZhdnNMaXN0ID8gSlNPTi5wYXJzZShmYXZzTGlzdCkgOiBbXTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRmF2b3JpdGVJdGVtKGl0ZW0pIHtcbiAgICBjb25zdCBpdGVtcyA9IGdldEZhdm9yaXRlcygpO1xuICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBzYXZlRmF2b3JpdGVzKGl0ZW1zKTtcbiAgICB9XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQnVyZ2VyXG4gICAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKSxcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX21lbnUnKSxcbiAgICAgICAgaGVhZGVyQ29udGFjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jb250YWN0JyksXG4gICAgICAgIGhlYWRlckFjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hY3Rpb25zJyk7XG4gICAgYnVyZ2VyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgaGVhZGVyQ29udGFjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGhlYWRlckFjdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfVxuICAgIC8vIEZpeGVkIG1lbnVcbiAgICBsZXQgc3RhcnRQb3NpdGlvbjtcbiAgICBsZXQgaGVhZGVyU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLFxuICAgICAgICAgICAgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgIHN0YXJ0UG9zaXRpb24gPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBtYWluLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtzdGFydFBvc2l0aW9ufXB4YFxuICAgIH1cbiAgICAkKHdpbmRvdykub24oJ2xvYWQgcmVzaXplJywgaGVhZGVyU2Nyb2xsKTtcbiAgICBoZWFkZXJTY3JvbGwoKTtcblxuXG4gICAgLy8gU3dpcGVyIFJlbmRlclxuICAgIHZhciBzd2lwZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlci13cmFwcGVyJyk7XG4gICAgZm9yIChsZXQgdHJhbmRpbmdQcm9kdWN0IG9mIHRyYW5kaW5nUHJvZHVjdHMpIHtcbiAgICAgICAgc3dpcGVyV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInN3aXBlcl9fc2xpZGUgc2xpZGUgc3dpcGVyLXNsaWRlXCIgZGF0YS1pZD1cIiR7dHJhbmRpbmdQcm9kdWN0LmlkfVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwic2xpZGVfX2xpbmtcIiBocmVmPVwiJHt0cmFuZGluZ1Byb2R1Y3QudXJsfVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVfX3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbGlkZV9fbGFiZWwgdGV4dC0xNFwiPiR7dHJhbmRpbmdQcm9kdWN0LmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzbGlkZV9fZmF2IGJ0bi1yZXNldFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld2JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNi44Mzk4IDNDMTUuMDkzIDMgMTMuNTYxNiAzLjc3ODkzIDEyLjQxMTMgNS4yNTI2MkMxMi4yNTc5IDUuNDQ5MTcgMTIuMTIxMiA1LjY0NTc5IDEyIDUuODM2MjNDMTEuODc4OCA1LjY0NTc1IDExLjc0MjEgNS40NDkxNyAxMS41ODg3IDUuMjUyNjJDMTAuNDM4NCAzLjc3ODkzIDguOTA3MDEgMyA3LjE2MDE2IDNDMy44NjAyIDMgMS41IDUuNzYzMSAxLjUgOS4wNzg2OEMxLjUgMTIuODY5OSA0LjYwNzIyIDE2LjQ0MjkgMTEuNTc1IDIwLjY2NEMxMS43MDU2IDIwLjc0MzEgMTEuODUyOCAyMC43ODI3IDEyIDIwLjc4MjdDMTIuMTQ3MiAyMC43ODI3IDEyLjI5NDQgMjAuNzQzMSAxMi40MjUgMjAuNjY0QzE5LjM5MjggMTYuNDQzIDIyLjUgMTIuODY5OSAyMi41IDkuMDc4NzJDMjIuNSA1Ljc2NDg2IDIwLjE0MTcgMyAxNi44Mzk4IDNaXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRTRFNEU0XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVfX2NvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke3RyYW5kaW5nUHJvZHVjdC5jb2xvcn07XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzbGlkZV9faW1nXCIgc3JjPVwiJHt0cmFuZGluZ1Byb2R1Y3QuaW1nU3JjfVwiIGFsdD1cInByb2R1Y3QgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbGlkZV9fdGl0bGVcIj4ke3RyYW5kaW5nUHJvZHVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2xpZGVfX2Rlc2NyIHRleHQtMTRcIj4ke3RyYW5kaW5nUHJvZHVjdC5kZXNjcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2xpZGVfX3ZvbCB0ZXh0LTE0XCI+JHt0cmFuZGluZ1Byb2R1Y3Qudm9sdW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlX19wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzbGlkZV9fYWN0dWFsLXByaWNlXCI+JHt0cmFuZGluZ1Byb2R1Y3QuY3VycmVudFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2xpZGVfX29sZC1wcmljZVwiPiR7dHJhbmRpbmdQcm9kdWN0Lm9sZFByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgYClcbiAgICB9XG5cbiAgICAvLyBTd2lwZXIgSW5pdFxuICAgIHZhciBwcm9kdWN0U3dpcGVyID0gbmV3IFN3aXBlcihcIi50cmFuZHNfX3N3aXBlclwiLCB7XG4gICAgICAgIHNsaWRlc1BlclNjcm9sbDogMSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMy45LFxuICAgICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgOTkxOiB7XG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2OToge1xuICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAzMjA6IHtcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuXG4gICAgLy8gRm9ybSAtIGdldCB1c2VyIGRhdGEgaWYgZmlsbGVkXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgdmFyIGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Jyk7XG4gICAgdmFyIGZvcm1TZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2J0bicpO1xuICAgIGxldCB1c2VyRGF0YSA9IFtdXG4gICAgZm9ybVNlbmRCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgbGV0IGF0dHIgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGxldCB1c2VyRGF0YUl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgYXR0cjogYXR0cixcbiAgICAgICAgICAgICAgICB2YWw6IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1c2VyRGF0YS5wdXNoKHVzZXJEYXRhSXRlbSlcbiAgICAgICAgfSlcbiAgICAgICAgc2F2ZUN1cnJlbnREYXRhKHVzZXJEYXRhKVxuICAgIH1cblxuICAgIC8vINCf0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC+0LLQtdGA0Y/QtdC8LCDQsdGL0LvQuCDQu9C4INGB0L7RhdGA0LDQvdC10L3RiyDQtNCw0L3QvdGL0LUg0L/RgNC4INC/0YDQvtGI0LvQvtC8INC/0L7RgdC10YnQtdC90LjQuFxuICAgIGxldCBjdXJyZW50RGF0YSA9IGdldEN1cnJlbnREYXRhKCk7XG4gICAgaWYgKGN1cnJlbnREYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IGN1cnJlbnREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiBpbnB1dHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpID09PSBjdXJyZW50RGF0YVtpXS5hdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY3VycmVudERhdGFbaV0udmFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gRmF2c1xuICAgIHZhciBmYXZvcml0ZXNTZXQgPSBuZXcgU2V0KGdldEZhdm9yaXRlcygpKTtcbiAgICB2YXIgcHJvZHVjdFNsaWRlcyAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX19zbGlkZScpO1xuICAgIHZhciBmYXZIZWFkZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3Rpb25zX19idG4tLWZhdiAuYWN0aW9uc19fbGFiZWwnKTtcbiAgICBpZiAoZmF2b3JpdGVzU2V0KSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgZmF2b3JpdGVzU2V0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9kdWN0U2xpZGUgb2YgcHJvZHVjdFNsaWRlcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0U2xpZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ3NhdmVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlSGVhZGVyRmF2cygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRmF2cygpIHtcbiAgICAgICAgdmFyIGZhdkJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVfX2ZhdicpO1xuICAgICAgICBmYXZCdG5zLmZvckVhY2goZmF2QnRuID0+IHtcbiAgICAgICAgICAgIGZhdkJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zd2lwZXJfX3NsaWRlJyk7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRTbGlkZUlkID0gY3VycmVudFNsaWRlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50U2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzYXZlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QuYWRkKCdzYXZlZCcpO1xuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXNTZXQuYWRkKGN1cnJlbnRTbGlkZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUZhdm9yaXRlcyhbLi4uZmF2b3JpdGVzU2V0XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ3NhdmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZhdm9yaXRlSXRlbShjdXJyZW50U2xpZGVJZClcbiAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzU2V0ID0gbmV3IFNldChnZXRGYXZvcml0ZXMoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZUhlYWRlckZhdnMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVIZWFkZXJGYXZzKCkge1xuICAgICAgICBmYXZIZWFkZXJMYWJlbC50ZXh0Q29udGVudCA9IGZhdm9yaXRlc1NldC5zaXplO1xuICAgIH1cbiAgICBoYW5kbGVGYXZzKClcbn0pIl19
