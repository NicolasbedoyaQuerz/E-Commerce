const MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = '0px';

function menutoggle(){
    if(MenuItems.style.maxHeight === '0px'){
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}


const LoginForm = document.getElementById('LoginForm');
const RegForm = document.getElementById('RegForm');
const Indicator = document.getElementById('Indicator');

    function register(){
        RegForm.style.transform = 'transLateX(0px)';
        LoginForm.style.transform = 'transLateX(0px)';
        Indicator.style.transform = 'transLateX(100px)';
    }
    function login(){
        RegForm.style.transform = 'transLateX(300px)';
        LoginForm.style.transform = 'transLateX(300px)';
        Indicator.style.transform = 'transLateX(0px)';
    }



const ProductImg = document.getElementById('ProductImg');
const smallimg = document.getElementsByClassName('small-img');

    smallimg[0].onclick = function(){
        ProductImg.src = smallimg[0].src;
    }
    smallimg[1].onclick = function(){
        ProductImg.src = smallimg[1].src;
    }
    smallimg[2].onclick = function(){
        ProductImg.src = smallimg[2].src;
    }
    smallimg[3].onclick = function(){
        ProductImg.src = smallimg[3].src;
    }


