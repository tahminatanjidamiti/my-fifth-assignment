function goBlog(){
    window.location.href ='blog.html'
}
function goIndex(){
    window.location.href ='index.html'
}


let activeButton = document.getElementById('show-active-donation');

document.getElementById('show-active-donation')
.addEventListener('click', function(){
    activeButtonById('show-active-donation');
});
document.getElementById('show-active-history')
.addEventListener('click', function(){
    activeButtonById('show-active-history');
});