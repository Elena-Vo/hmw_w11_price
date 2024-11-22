"use strict"


const price1 = document.querySelector('.price');
const price2 = document.querySelector('.price');
const price3 = document.querySelector('.price');
const price4 = document.querySelector('.price');
const totalPriceElement = document.getElementById('total-price');
const applyCouponButton = document.getElementById('apply-coupon');

// Флаг, чтобы скидка применялась только один раз
let couponApplied = false;


function applyCoupon() {
  if (couponApplied) {
    alert('Скидка уже применена!');
    return;
  }

  // текущие цены
  let price1Value = price1.textContent.replace(' ₽', '');
  let price2Value = price2.textContent.replace(' ₽', '');
  let price3Value = price3.textContent.replace(' ₽', '');
  let price4Value = price4.textContent.replace(' ₽', '');

  
  price1Value = (price1Value * 0.8).toFixed(2);
  price2Value = (price2Value * 0.8).toFixed(2);
  price3Value = (price3Value * 0.8).toFixed(2);
  price4Value = (price4Value * 0.8).toFixed(2);

  // Обновление цен 
  price1.textContent = `${price1Value} ₽`;
  price2.textContent = `${price2Value} ₽`;
  price3.textContent = `${price3Value} ₽`;
  price4.textContent = `${price4Value} ₽`;

  // итоговая стоимость
  const totalPrice = (+price1Value + +price2Value + +price3Value + +price4Value).toFixed(2);
  totalPriceElement.textContent = totalPrice;

  // флаг, чтобы скидка больше не применялась
  couponApplied = true;
}


applyCouponButton.addEventListener('click', applyCoupon)


/* const price1 = document.querySelector('.cart-item:nth-child(2) .price');
const price2 = document.querySelector('.cart-item:nth-child(3) .price');
const price3 = document.querySelector('.cart-item:nth-child(4) .price');
const price4 = document.querySelector('.cart-item:nth-child(5) .price'); */