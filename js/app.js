var password = document.getElementById('pwd');

var eye = document.getElementById('eye');

eye.addEventListener('mouseenter', addActivePasswordField);
eye.addEventListener('mouseleave', removeActivePasswordField);

function addActivePasswordField() {
    eye.classList.add('active');
    password.type = 'text';

}

function removeActivePasswordField(){
    eye.classList.remove('active');
    password.type = 'password';
}

