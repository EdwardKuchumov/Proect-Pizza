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
// кол-во пиц
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

// переключение на меню
const buttonMenu = document.querySelector('.main__toggle-block')
const orderBlock = document.querySelector('.main__toggle-order')
const menuBlock = document.querySelector('.main__toggle-menu')

function toggleButton() {
  orderBlock.classList.toggle('color_button')
  menuBlock.classList.toggle('color_button')
  if (menuBlock.classList.contains('color_button')) {
    menuBlock.style = 'color:#fff'
  } else {
    menuBlock.style = 'color:#FF5D29'
  }
}
buttonMenu.addEventListener('click', function() {
  toggleButton()
})

// фильтр пицы
const allSelectPizza = document.querySelectorAll('.main__pizza-item')
const meatFilterButton = document.getElementById('#meat-filter')
const vegiterianFilterButton = document.getElementById('#vegitarian-filter')
const seaFilterButton = document.getElementById('#sea-filter')
const mushroomFilterButton = document.getElementById('#mushroom-filter')
const allFilterButton = document.getElementById('#showall')

function filterPizzaMeat() {
  allSelectPizza.forEach(function(item) {
    item.classList.add('opas')
    if (item.id == '#meat') {
      item.classList.remove('opas')
    }
  })
}
function filterPizzaVegiterian() {
  allSelectPizza.forEach(function(item) {
    item.classList.add('opas')
    if (item.id == '#vegetarian') {
      item.classList.remove('opas')
    }
  })
}
function filterPizzaSea() {
  allSelectPizza.forEach(function(item) {
    item.classList.add('opas')
    if (item.id == '#sea') {
      item.classList.remove('opas')
    }
  })
}
function filterPizzaMushroom() {
  allSelectPizza.forEach(function(item) {
    item.classList.add('opas')
    if (item.id == '#mushroom') {
      item.classList.remove('opas')
    }
  })
}
function showAllFilter() {
  allSelectPizza.forEach(function(item) {
    item.classList.remove('opas')
  })
}
meatFilterButton.addEventListener('click', function() {
  filterPizzaMeat()
})
vegiterianFilterButton.addEventListener('click', function() {
  filterPizzaVegiterian()
})
seaFilterButton.addEventListener('click', function() {
  filterPizzaSea()
})
mushroomFilterButton.addEventListener('click', function() {
  filterPizzaMushroom()
})
allFilterButton.addEventListener('click', function() {
  showAllFilter()
})