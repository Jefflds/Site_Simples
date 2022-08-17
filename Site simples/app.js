'use script';

const switcher = document.querySelector('.btn');

switcher.addEventListener ('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.doctype.className;
    if (className=="light-theme"){
        this.textContent="dark";
        console.log('current class name:' + className)
    }
    else {
        this.textContent="light";
    }

});
