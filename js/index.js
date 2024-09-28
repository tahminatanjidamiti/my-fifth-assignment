function goBlog(){
    window.location.href ='blog.html'
}
function goIndex(){
    window.location.href ='index.html'
}


document.getElementById('show-active-donation')
.addEventListener('click', function(){
    activeButtonById('show-active-donation');
});
document.getElementById('show-active-history')
.addEventListener('click', function(){
    activeButtonById('show-active-history');
});

document.getElementById('show-active-donation').addEventListener('click', function () {
    showSectionById('show-donation-section');
});

document.getElementById('show-active-history').addEventListener('click', function () {
    showSectionById('show-history-section');
});


document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('my_modal_5').close();
});



