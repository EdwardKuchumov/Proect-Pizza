// --------------------------------------выбор ингридиентов
const ingriButton = document.querySelectorAll('.main__pizza-ingridients');
const ingriBlock = document.querySelectorAll('.main__pizza-ingridients-item');
const ingriComponents = document.querySelectorAll('.main__pizza-ingridients-link')

ingriButton.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('none')
        this.nextElementSibling.classList.toggle('none')
        ingriComponents.forEach(function(item) {
          item.addEventListener('click', function() {
            this.classList.add('focus')
            console.log(this);
            if (item.classList.contains('focus')) {
              console.log('it`s Ok')
            }
          })
        })
        const setTime = setTimeout(function() {
          console.log(setTime);
          item.classList.remove('none');
          item.nextElementSibling.classList.add('none')
        }, 5000)
    })
})
// log in
const modalWindow = document.querySelector('.main__modal-block');
const modalFon = document.querySelector('.main__modal')

const logIn = document.querySelector('.header__log-in').addEventListener('click', function(){
  modalWindow.classList.remove('none')
})
const buttonClose = document.querySelector('.main__modal-button-link-close').addEventListener('click', function(){
  modalWindow.classList.add('none');
})
modalWindow.addEventListener('click', function(){
  modalWindow.classList.add('none');
})
modalWindow.querySelector('.main__modal').addEventListener('click', function(e){
  e.stopPropagation()
})
// выбор размера пиццы
const sizeBlock = document.querySelectorAll('.main__pizza-select-size')
sizeBlock.forEach(function(item) {
  const sizeItem = item.querySelectorAll('.main__select-size');
  sizeItem.forEach(function(item){
    item.addEventListener('click', function(){
      this.classList.toggle('color_button')
    })
  })
})
// -------------------------------------------------кол-во пиц
let i = 1
let r = 0
const buttonPlusAndMinusBlock = document.querySelectorAll('.main__number-block');
const mainNumberBlock = document.querySelectorAll('.main__number');

buttonPlusAndMinusBlock.forEach(function(item) {
  const thisItem = item.querySelectorAll('.main__number-plus');
  thisItem.forEach(function(newitem){
    newitem.addEventListener('click', function() {
      this.previousElementSibling.innerHTML = i++;
      if (i > 20) {
        i = 0
      }
    })
  })
})
buttonPlusAndMinusBlock.forEach(function(itemminus) {
  const thisItemMinus = itemminus.querySelectorAll('.main__number-minus');
  thisItemMinus.forEach(function(newitemminus){
  newitemminus.addEventListener('click', function() {
    this.nextElementSibling.innerHTML = i--;
    if (i < 0) {
      i = 20
    }
  })
})
})

// ---------------------------------------------------переключение на меню
const btnMenu = document.querySelector('.main__toggle-block');
btnMenu.addEventListener('click', function() {
  btnMenu.classList.toggle('main__toggle-menu-hover')
})

// ----------------------------------------------------------фильтр пицы
const allSelectPizza = document.querySelectorAll('.main__pizza-item')
const meatFilterButton = document.getElementById('#meat-filter')
const vegiterianFilterButton = document.getElementById('#vegitarian-filter')
const seaFilterButton = document.getElementById('#sea-filter')
const mushroomFilterButton = document.getElementById('#mushroom-filter')
const allFilterButton = document.getElementById('#showall')
const mainItemMenu = document.querySelectorAll('.main__menu-item')
const popularPizza = document.querySelector('.main__pizza-popular')

for (const elem of mainItemMenu) {
  elem.addEventListener('click', function() {
    elem.classList.remove('color-back-filter')
    this.classList.add('color-back-filter')
  })
}

function filterPizzaMeat() {
  allSelectPizza.forEach(function(item) {
    // item.classList.remove('none')
    item.classList.add('opas')
    if (item.id == '#meat') {
      item.classList.remove('opas')
    }
    if (item.classList.contains('opas')) {
      // item.classList.add('none')
    }
  })
}
function filterPizzaVegiterian() {
  allSelectPizza.forEach(function(item) {
    // item.classList.remove('none')
    item.classList.add('opas')
    if (item.id == '#vegetarian') {
      item.classList.remove('opas')
    }
    if (item.classList.contains('opas')) {
      // item.classList.add('none')
    }
  })
}
function filterPizzaSea() {
  allSelectPizza.forEach(function(item) {
    // item.classList.remove('none')
    item.classList.add('opas')
    if (item.id == '#sea') {
      item.classList.remove('opas')
    }
    if (item.classList.contains('opas')) {
      // item.classList.add('none')
    }
  })
}
function filterPizzaMushroom() {
  allSelectPizza.forEach(function(item) {
    // item.classList.remove('none')
    item.classList.add('opas')
    if (item.id == '#mushroom') {
      item.classList.remove('opas')
    }
    if (item.classList.contains('opas')) {
      // item.classList.add('none')
    }
  })
}
function showAllFilter() {
  allSelectPizza.forEach(function(item) {
    // item.classList.remove('none')
    item.classList.remove('opas')
  })
}
meatFilterButton.addEventListener('click', function() {
  filterPizzaMeat()
  meatFilterButton.classList.add('color-back-filter')
  vegiterianFilterButton.classList.remove('color-back-filter')
  seaFilterButton.classList.remove('color-back-filter')
  mushroomFilterButton.classList.remove('color-back-filter')
  allFilterButton.classList.remove('color-back-filter')
  popularPizza.style.order = '1'
})
vegiterianFilterButton.addEventListener('click', function() {
  filterPizzaVegiterian()
  meatFilterButton.classList.remove('color-back-filter')
  vegiterianFilterButton.classList.add('color-back-filter')
  seaFilterButton.classList.remove('color-back-filter')
  mushroomFilterButton.classList.remove('color-back-filter')
  allFilterButton.classList.remove('color-back-filter')
  popularPizza.style.order = '1'
})
seaFilterButton.addEventListener('click', function() {
  filterPizzaSea()
  meatFilterButton.classList.remove('color-back-filter')
  vegiterianFilterButton.classList.remove('color-back-filter')
  seaFilterButton.classList.add('color-back-filter')
  mushroomFilterButton.classList.remove('color-back-filter')
  allFilterButton.classList.remove('color-back-filter')
  popularPizza.style.order = '1'
})
mushroomFilterButton.addEventListener('click', function() {
  filterPizzaMushroom()
  meatFilterButton.classList.remove('color-back-filter')
  vegiterianFilterButton.classList.remove('color-back-filter')
  seaFilterButton.classList.remove('color-back-filter')
  mushroomFilterButton.classList.add('color-back-filter')
  allFilterButton.classList.remove('color-back-filter')
  popularPizza.style.order = '1'
})
allFilterButton.addEventListener('click', function() {
  showAllFilter()
  meatFilterButton.classList.remove('color-back-filter')
  vegiterianFilterButton.classList.remove('color-back-filter')
  seaFilterButton.classList.remove('color-back-filter')
  mushroomFilterButton.classList.remove('color-back-filter')
  allFilterButton.classList.add('color-back-filter')
  popularPizza.style.order = '0'
})
/*   -------------------------------------------бургер меню------------------------------------------------ */

const blockBurger = document.querySelector('.header__nav-burger');
const buttonBurger = document.querySelector('.header__burger');
const headerItem = document.querySelectorAll('.header__name');

buttonBurger.addEventListener('click', function() {
  blockBurger.classList.add('top');
})

headerItem.forEach(function(item) {
  item.addEventListener('click', function() {
    blockBurger.classList.remove('top')
  })
})