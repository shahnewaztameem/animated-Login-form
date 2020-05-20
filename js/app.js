var password = document.getElementById('pwd');
var eye = document.getElementById('eye');

var darkThemeBtn = document.getElementById('change-theme-btn');

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


// dark theme toggler
darkThemeBtn.addEventListener('click', function () {
    let darkThemeEnabled = document.body.classList.toggle('dark-theme');
    darkThemeBtn.textContent === 'Dark' ? darkThemeBtn.textContent = 'Light' : darkThemeBtn.textContent = 'Dark';
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
    
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
}
