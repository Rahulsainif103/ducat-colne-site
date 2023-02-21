// Check btn
let chk_btn = document.querySelector('#checkbox');
chk_btn.addEventListener('click',function(){
    if(chk_btn.checked){
        document.querySelector('.fa-solid').classList.remove('fa-bars');
        document.querySelector('.fa-solid').classList.add('fa-close');
    }
    else{
        document.querySelector('.fa-solid').classList.remove('fa-close');
        document.querySelector('.fa-solid').classList.add('fa-bars');
    }
});