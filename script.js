'use strict' 

let text = document.querySelector('.pal-text');
let btnCheck = document.querySelector('.checker button');
let infoP = document.querySelector('.info-p');
let newStr;

// PALINDROME

btnCheck.addEventListener('click', () => {
  newStr = text.value.replace(/\W+|_/g, '').toLowerCase();
  let reverseStr = newStr.split('').reverse().join('');
  infoP.style.display = 'block';
  
  if (newStr !== reverseStr) {
    return infoP.innerHTML = `'${text.value}' is not a palindrome`;
  }
  return infoP.innerHTML = `'${text.value}' is a palindrome`;
  
})


text.addEventListener('keyup', () => {
  newStr = text.value.replace(/\W+|_/g, '').toLowerCase();
  infoP.style.display = 'none';
  if(newStr) {
    return btnCheck.classList.add('active')
  }
  return btnCheck.classList.remove('active');
})


// FAQ

let faqBtn = document.querySelectorAll('.faq-div button');
let faqInfo = document.querySelectorAll('.faq-div p');

faqBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    //want to close the other accordion while clicking another
    faqInfo.forEach(accInfo => {
      if(
        e.target.nextElementSibling !== accInfo && accInfo.classList.contains('active')) {
        accInfo.classList.remove('active');
        faqBtn.forEach(btn => btn.classList.remove('active'))
      }
    })
    
    let info = btn.nextElementSibling;
    info.classList.toggle('active')
    btn.classList.toggle('active')
  })
})

//remove active class when you click on the screen
window.onclick = (e) => {
  if(!e.target.matches('.faq-div button')) {
    faqBtn.forEach(btn => btn.classList.remove('active'));
    faqInfo.forEach(btn => btn.classList.remove('active'));
  }
}



// MODAL
let closeModal = document.querySelector('.modal i');
let modal = document.querySelector('.modal-bg')

//set timeout to 10secs
setTimeout(() => {
  modal.classList.add('active')
}, 10000)

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
})