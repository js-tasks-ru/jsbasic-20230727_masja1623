function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const textDiv = document.getElementById('text');

  if (button && textDiv) {
    button.addEventListener('click', () => {
      textDiv.hidden = !textDiv.hidden;
    });
  }
}

