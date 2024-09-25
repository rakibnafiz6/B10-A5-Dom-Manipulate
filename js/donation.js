document.getElementById('btn-donation')
    .addEventListener('click', function () {
        document.getElementById('btn-history').classList.remove('bg-primary');
        document.getElementById('btn-donation').classList.add('bg-primary');
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('main-container').classList.remove('hidden');
        document.getElementById('header').classList.add('sticky');
    })



document.getElementById('flood-btn')
    .addEventListener('click', function () {
        const totalAmount = document.getElementById('total-amount').innerText;
        const floodInputField = getDonationInputField('flood-input-field');
        if (isNaN(floodInputField) || floodInputField <= 0 || totalAmount < floodInputField) {
            alert('Invalid Donation Amount');
        
        }

        else {
            const floodAmount = getDonationTextField('flood-donate-amount');
            document.getElementById('flood-donate-amount').innerText = floodInputField;
            const totalBalance = getDonationTextField('total-amount');
            const remainingAmount = totalBalance - floodInputField;
            document.getElementById('total-amount').innerText = remainingAmount;
            document.getElementById('modal').classList.remove('hidden');
        }
       if(floodInputField <= 0 || isNaN(floodInputField)){
            // alert('Invalid Donation Amount');
            document.getElementById('history-container').classList.add('hidden');
       }
       else{
        const floodTitle = document.getElementById("flood-title").innerText;
        const div = document.createElement("div");
        div.className = "shadow-md py-10 px-10";
        div.innerHTML = `
   <h4 class="font-bold text-xl">${floodInputField} Taka is ${floodTitle}</h4>
   <p class="font-medium text-gray-500 text-base">Date:${new Date().toLocaleDateString()}</p>

`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(div, historyContainer.firstChild);
       }
        

    });




document.getElementById('flood-relief-btn')
    .addEventListener('click', function () {
        const totalAmount = document.getElementById('total-amount').innerText;
        const floodReliefInputField = getDonationInputField('relief-input-field');
        if (isNaN(floodReliefInputField) || floodReliefInputField <= 0 || totalAmount < floodReliefInputField ) {
            alert('Invalid Donation Amount');
        }
        else {
            const reliefAmount = getDonationTextField('relief-donate-amount');
            document.getElementById('relief-donate-amount').innerText = floodReliefInputField;
            const totalBalance = getDonationTextField('total-amount');
            const remainingAmount = totalBalance - floodReliefInputField;
            document.getElementById('total-amount').innerText = remainingAmount;
            document.getElementById('modal-2').classList.remove('hidden');
        }

        const reliefTitle = document.getElementById("relief-title").innerText;
        const div = document.createElement("div");
        div.className = "shadow-md py-10 px-10";
        div.innerHTML = `
 <h4 class="font-bold text-xl">${floodReliefInputField} Taka is ${reliefTitle}</h4>
 <p class="font-medium text-gray-500 text-base">Date:${new Date().toLocaleDateString()}</p>

`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(div, historyContainer.firstChild);

    });




document.getElementById('quota-btn')
    .addEventListener('click', function () {
        const totalAmount = document.getElementById('total-amount').innerText;
        const quotaInputField = getDonationInputField('quota-input-field');
        if (isNaN(quotaInputField) || quotaInputField <= 0 || totalAmount < quotaInputField) {
            alert('Invalid Donation Amount');
        }
        else {
            const quotaAmount = getDonationTextField('quota-donate-amount');
            document.getElementById('quota-donate-amount').innerText = quotaInputField;
            const totalBalance = getDonationTextField('total-amount');
            const remainingAmount = totalBalance - quotaInputField;
            document.getElementById('total-amount').innerText = remainingAmount;
            document.getElementById('modal-3').classList.remove('hidden');
        }

        const quotaTitle = document.getElementById("quota-title").innerText;
        const div = document.createElement("div");
        div.className = "shadow-md py-10 px-10";
        div.innerHTML = `
<h4 class="font-bold text-xl">${quotaInputField} Taka is ${quotaTitle}</h4>
<p class="font-medium text-gray-500 text-base">Date:${new Date().toLocaleDateString()}</p>

`;
        const historyContainer = document.getElementById("history-container");
        historyContainer.insertBefore(div, historyContainer.firstChild);

    });





document.getElementById('close-modal')
    .addEventListener('click', function () {
        const modal = getModalField('modal');
    });
document.getElementById('close-modal-2')
    .addEventListener('click', function () {
        const modal2 = getModalField('modal-2');
    });
document.getElementById('close-modal-3')
    .addEventListener('click', function () {
        const modal3 = getModalField('modal-3');
    });




document.getElementById('blog-btn')
    .addEventListener('click', function () {
        window.location.href = 'blog.html'

    });
