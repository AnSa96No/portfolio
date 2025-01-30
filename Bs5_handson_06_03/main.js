console.log("main.js!!");

document.querySelector('#toggle-btn').onclick = function(){
    bootstrap.Button.getOrCreateInstance(this).toggle();
    this.innerHTML = '押したね';
}