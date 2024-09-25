// donation part
function getDonationInputField(id){
const inputValue = document.getElementById(id).value;
const inputNumber = parseFloat(inputValue);
return inputNumber;
}


function getDonationTextField(id){
 const textField = document.getElementById(id).innerText;
 const textNumber = parseFloat(textField);
 return textNumber;
 
}


function getModalField(id){
const closeModal = document.getElementById(id).classList.add('hidden');
    
    return closeModal;
}