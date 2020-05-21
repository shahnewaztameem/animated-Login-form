var password = document.getElementById('pwd');
// var eye = document.getElementById('eye');
var logo = document.getElementById('logo');
var darkThemeBtn = document.getElementById('change-theme-btn');
// eye.addEventListener('mouseenter', addActivePasswordField);
// eye.addEventListener('mouseleave', removeActivePasswordField);

// function addActivePasswordField() {
//     eye.classList.add('active');
//     password.type = 'text';
// }

// function removeActivePasswordField() {
//     eye.classList.remove('active');
//     password.type = 'password';
// }

// dark theme toggler
darkThemeBtn.addEventListener('click', function () {
    let darkThemeEnabled = document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('dark-theme-bg');

    // change text content
    darkThemeBtn.textContent === 'Dark'
        ? (darkThemeBtn.textContent = 'Light')
        : (darkThemeBtn.textContent = 'Dark');
    if (darkThemeEnabled) {
        logo.src = 'img/logo/Ant-App-silver.svg';
    } else {
        logo.src = 'img/logo/Ant-App-logo.svg';
    }

    // localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

// if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
//     document.body.classList.add('dark-theme');
// }

// toggle image
img = document.getElementById('openEye');
img.addEventListener('click', function () {
    if (img.src.match('close-eye')) {
        img.src = '/img/Open-eye.svg';
        password.type = 'text';
        img.style.opacity = '1';
    } else {
        img.src = '/img/close-eye.svg';
        password.type = 'password';
    }
});
