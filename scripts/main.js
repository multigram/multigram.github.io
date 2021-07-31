let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute('src', 'images/shortcut.png');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
}