document.getElementById('btn-history')
    .addEventListener('click', function(){
document.getElementById('btn-donation').classList.remove('bg-primary');
document.getElementById('btn-history').classList.add('bg-primary');
document.getElementById('history-section').classList.remove('hidden');
document.getElementById('main-container').classList.add('hidden');
document.getElementById('header').classList.remove('sticky');
});

