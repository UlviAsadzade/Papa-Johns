
/////////////////////////////////////////////////////////

let originalCrust = document.querySelector('.original-crust');
let thinCrust = document.querySelector('.thin-crust');

originalCrust.onclick=function(){
    if(!this.classList.contains('active')){
      this.classList.add('active');
      thinCrust.classList.remove('active')

    }
}

thinCrust.onclick=function(){
  if(!this.classList.contains('active')){
    this.classList.add('active');
    originalCrust.classList.remove('active')

  }
}

////////////////////////////////////////////////////////////


$(".modal-pizza-dropdown").click(function(){
  $(".modal-pizza-dropdown-body").slideToggle("slow");
  $(".modal-pizza-dropdown .fa-caret-down").toggleClass('active')

});

const pizzaDropdownItems = document.querySelectorAll('.modal-pizza-dropdown-item');
const pizzaDropdownHeader = document.querySelector('.choose-pizza-heahder');
const pizzaModalPrice = document.querySelector('.pizza-modal-price');
let pizzaMinus = document.querySelectorAll('.pizza-minus');
let pizzaPlus = document.querySelectorAll('.pizza-plus');
let modalCountValue = document.querySelector('.modal-count-value');

pizzaDropdownItems.forEach(item=>{
    item.onclick=function(){
      let text = item.innerHTML;
      pizzaDropdownHeader.innerHTML=text;
      let price = item.children[2].innerText;
      pizzaModalPrice.innerText=price;
      modalCountValue.innerText=1;
      $(".modal-pizza-dropdown-body").slideToggle("slow");
      $(".modal-pizza-dropdown .fa-caret-down").toggleClass('active');
      pizzaPlus.forEach(pl => {
        let prdPrice = pl.parentElement.nextElementSibling.children[0].innerText;
        pl.onclick = function () {
          count = pl.previousElementSibling.innerText;
          count++;
          pl.previousElementSibling.innerText = count
          prdTotalPrice = (prdPrice * count).toFixed(2);
          pl.parentElement.nextElementSibling.children[0].innerText = prdTotalPrice;
          
        }
      });
      pizzaMinus.forEach(min => {
        let prdPrice = min.parentElement.nextElementSibling.children[0].innerText;
        min.onclick = function () {
          count = min.nextElementSibling.innerText;
          if (count == 1) {
            min.nextElementSibling.innerText = count;
          } else {
            count--;
            min.nextElementSibling.innerText = count;
          }
          prdTotalPrice = (prdPrice * count).toFixed(2);
          min.parentElement.nextElementSibling.children[0].innerText = prdTotalPrice;
          
        }
      });
    }
})