function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  
  button.onclick = function() {
    text.toggleAttribute('hidden');
  }
  return text;
}
