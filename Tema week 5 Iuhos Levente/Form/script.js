function validate(){
var btn = document.querySelector('#button');
btn.addEventListener('click', clicked);

function clicked() {
    var firstName = document.querySelector('#fName')
    if (firstName.value === '') {
        firstName.style.border = 'solid 2px red'
    } else {
        firstName.style.border = 'solid 2px green'
        
    } 
    var lastName = document.querySelector('#lName')
    if (lastName.value === '') {
        lastName.style.border = 'solid 2px red'
    } else {
        lastName.style.border = 'solid 2px green'
        
    }  
    var genderMale = document.querySelector('#genderM')
    var label = document.querySelector('#gender')
    if (genderMale.checked == false) {
        label.style.border = 'solid 2px red'
    } else {
        label.style.border = 'solid 2px green'
        
    } 
    var genderFemale = document.querySelector('#genderF')
    var label = document.querySelector('#gender')
    if (genderFemale.checked == false) {
        label.style.border = 'solid 2px red'
    } else {
        label.style.border = 'solid 2px green'
        
    }  
    var textArea = document.querySelector('#message')
    if (textArea.value === '') {
        textArea.style.border = 'solid 2px red'
    } else {
        textArea.style.border = 'solid 2px green'
        
    } 
}
}
validate()

