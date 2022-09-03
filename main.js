console.log(window);

//Single element
const form = (document.getElementById('my-form'));
console.log(form);

console.log(document.querySelector('.container'));

console.log(document.querySelector('h1')); //Grabs the first h1

//Multiple element
console.log(document.querySelectorAll('.item')); //Returns Node List like an Array (Use this one)

console.log(document.getElementsByClassName('item')); //Returns HTML Collection

//Looping Through

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

//Change Style

//const btn = document.querySelector('.bnt');
//btn.style.background = 'red';

//Events

//const btn = document.querySelector('.btn');

/*btn.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.targets.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nameInput.value + emailInput.value))

        userList.appendChild(li);

        //Clear Fields

        nameInput.value = '';
        emailInput.value = '';
    }
}