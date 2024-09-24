// document.getElementById('btn-donation').addEventListener('click', function(){

// })
// ---------------------
// donation section1
document.getElementById('flood-btn')
    .addEventListener('click', function () {
        const floodInputField = getDonationInputField('flood-input-field');
        if(isNaN(floodInputField) || floodInputField < 1){
          alert('Invalid Donation Amount');
        
        }
        else{
            const floodAmount = getDonationTextField('flood-donate-amount');
            document.getElementById('flood-donate-amount').innerText = floodInputField;
            const totalBalance = getDonationTextField('total-amount');
            const remainingAmount = totalBalance - floodInputField;
            document.getElementById('total-amount').innerText = remainingAmount;
            document.getElementById('modal').classList.remove('hidden');
        }
        
        
    })
    // donation section2
    document.getElementById('flood-relief-btn')
        .addEventListener('click', function(){
        const floodReliefInputField = getDonationInputField('relief-input-field');
        if(isNaN(floodReliefInputField) || floodReliefInputField < 1){
            alert('Invalid Donation Amount');
        }
        else{
            const reliefAmount = getDonationTextField('relief-donate-amount');
            document.getElementById('relief-donate-amount').innerText = floodReliefInputField;
            const totalBalance = getDonationTextField('total-amount');
            const remainingAmount = totalBalance - floodReliefInputField;
            document.getElementById('total-amount').innerText = remainingAmount;
            document.getElementById('modal-2').classList.remove('hidden');
        }

 })

//    donation section3
 document.getElementById('quota-btn')
    .addEventListener('click', function(){
 const quotaInputField = getDonationInputField('quota-input-field');
 if(isNaN(quotaInputField) || quotaInputField < 1){
    alert('Invalid Donation Amount');
 }
 else{
    const quotaAmount = getDonationTextField('quota-donate-amount');
 document.getElementById('quota-donate-amount').innerText = quotaInputField;
 const totalBalance = getDonationTextField('total-amount');
 const remainingAmount = totalBalance - quotaInputField;
 document.getElementById('total-amount').innerText = remainingAmount;
 document.getElementById('modal-3').classList.remove('hidden');
 }
 
 })

// modal section
 document.getElementById('close-modal')
    .addEventListener('click', function(){
    const modal = getModalField('modal');
 })
 document.getElementById('close-modal-2')
    .addEventListener('click', function(){
   const modal2 = getModalField('modal-2');
 })
 document.getElementById('close-modal-3')
    .addEventListener('click', function(){
   const modal3 = getModalField('modal-3');
 })

//  blog btn----->

document.getElementById('blog-btn')
    .addEventListener('click', function(){
  window.location.href = 'blog.html'
  
})
// home btn
// document.getElementById('home-btn')
//     .addEventListener('click', function(){
//   window.location.href = '';
// })