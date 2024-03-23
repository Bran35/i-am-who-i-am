alert('IamWho,Iam')
const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

ul.addEventListener('click', (e) => {
  // Has to be with a for loop, for of/in loop gives undefined.
  for(let i=0; i < listItems.length; i++) {
    console.log(listItems[i]);
    listItems[i].style.color = 'black';
  }
  
  e.target.style.color = 'blue';
 
})

    
