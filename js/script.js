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
// добавление ингридиентов
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