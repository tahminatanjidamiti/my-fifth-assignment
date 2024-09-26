function goBlog(){
    window.location.href ='blog.html'
}

// const historyTab = document.getElementById('show-active-history');
// const donationTab = document.getElementById('show-active-donation');
//  historyTab.addEventListener('click', function(){
//     historyTab.classList.add('text-black', 'bg-[#B4F461]', 'font-semibold', 'text-xl');
//     history.

//  });

let activeButton = document.getElementById('show-active-donation');

document.getElementById('show-active-donation')
.addEventListener('click', function(){
    activeButtonById('show-active-donation');
});
document.getElementById('show-active-history')
.addEventListener('click', function(){
    activeButtonById('show-active-history');
});