function toggleText() {
  element = document.querySelector('.toggle-text-button');
  element1 = document.getElementById('text');
  element.onclick = function () {
    if(element1.hasAttribute('hidden')){
    element1.hidden = false;
    } else {
      element1.hidden = true;
    }
  }
}