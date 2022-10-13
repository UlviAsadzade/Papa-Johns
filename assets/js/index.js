// js for dropdowns start

const optionMenus = document.querySelectorAll(".select-menu"),
  selectBtns = document.querySelectorAll(".select-btn"),
  options = document.querySelectorAll(".option");

selectBtns.forEach(selectBtn => {
  selectBtn.addEventListener("click", () =>
    selectBtn.parentElement.classList.toggle("active")
  );
})


options.forEach((option) => {
  option.addEventListener("click", () => {
    option.parentElement.parentElement.classList.remove("active");
  });
});

// js for dropdowns finish

//////////////////////////////////////////////

// fs for basket start

let minus = document.querySelectorAll('.minus');
let plus = document.querySelectorAll('.plus');
let prdPrices = Array.from(document.querySelectorAll('.prd-price'));
let totalPrice = document.querySelector('.total-price');
let removePrds = document.querySelectorAll('.remove-prd');
let countValues = Array.from(document.querySelectorAll('.count-value'));
let basketCount = document.querySelector('.basket-count');
let modalBasketCount = document.querySelector('.modal-basket-count')
let basketPrice = document.querySelector('.basket-price').firstElementChild;
let goCheckout = document.querySelector('.go-checkout');
let goShop = document.querySelector('.go-shop');
let count = 0;
let prdTotalAmount = 0;
let totalCountValue = 0;

function sumOfTotalPrice(arr) {
  for (let i = 0; i < arr.length; i++) {
    prdTotalAmount += +arr[i].innerText;
  }

}

function sumOfCountValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    totalCountValue += +arr[i].innerText

  }
}
sumOfCountValues(countValues);
modalBasketCount.firstElementChild.innerText = totalCountValue;
basketCount.innerText = totalCountValue;
totalCountValue = 0;

sumOfTotalPrice(prdPrices);
totalPrice.innerText = prdTotalAmount.toFixed(2);
basketPrice.innerText = prdTotalAmount.toFixed(2);
prdTotalAmount = 0;


minus.forEach(min => {
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
    sumOfTotalPrice(prdPrices);
    totalPrice.innerText = prdTotalAmount.toFixed(2);
    basketPrice.innerText = prdTotalAmount.toFixed(2);
    prdTotalAmount = 0;
    sumOfCountValues(countValues);
    modalBasketCount.firstElementChild.innerText = totalCountValue;
    basketCount.innerText = totalCountValue;

    totalCountValue = 0;
  }
})

plus.forEach(pl => {
  let prdPrice = pl.parentElement.nextElementSibling.children[0].innerText;
  pl.onclick = function () {
    count = pl.previousElementSibling.innerText;
    count++;
    pl.previousElementSibling.innerText = count
    prdTotalPrice = (prdPrice * count).toFixed(2);
    pl.parentElement.nextElementSibling.children[0].innerText = prdTotalPrice;
    sumOfTotalPrice(prdPrices);
    totalPrice.innerText = prdTotalAmount.toFixed(2);
    basketPrice.innerText = prdTotalAmount.toFixed(2);
    prdTotalAmount = 0;
    sumOfCountValues(countValues);
    modalBasketCount.firstElementChild.innerText = totalCountValue;
    basketCount.innerText = totalCountValue;

    totalCountValue = 0;
  }
})

removePrds.forEach(remove => {
  remove.onclick = function () {
    remove.parentElement.parentElement.parentElement.remove();
    prdPrices = Array.from(document.querySelectorAll('.prd-price'));
    sumOfTotalPrice(prdPrices);
    totalPrice.innerText = prdTotalAmount.toFixed(2);
    basketPrice.innerText = prdTotalAmount.toFixed(2);
    prdTotalAmount = 0;
    countValues = Array.from(document.querySelectorAll('.count-value'));
    sumOfCountValues(countValues);
    modalBasketCount.firstElementChild.innerText = totalCountValue;
    basketCount.innerText = totalCountValue;
    if(totalCountValue==0){
      goCheckout.classList.add('noactive');
      goShop.classList.add('active')
    }
    else{
      goCheckout.classList.remove('noactive');
      goShop.classList.remove('active')
    }
    totalCountValue = 0;
  }
})


// fs for basket finish


