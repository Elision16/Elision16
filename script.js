/* IFy i warunki

function checkamount(amount) {
    if (amount >= 4) {
        return true;
    } else {
        return confirm('You are not speaking the truth, right? You planted more than ' + amount + ' sunflowers?');
    }
}


var amount = prompt('How many sunflowers have you planted?', 4);

if (checkamount(amount)) {
   alert('Welcome mate');
} else {
    alert('What a pity');
}
*/

/* Pętle

let text = '';

for (let i = 0; i <= 10; i++) {
    text = text + i + ', '
}

console.log(text);
*/

/* Składnia 
.addEventListener( 'click', function() {})
Element.innerHTML
Element.style.backgroundColor
Element.classList.toggle('nazwaKlasy')
*/

var mobileMenuIcon = document.getElementById("mobile-menu-icon");
var menu = document.getElementById("main-menu");

if(mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', function(){
        mobileMenuIcon.classList.toggle("opened");
        menu.classList.toggle("opened");
    })
}