
const buyButtons = document.querySelectorAll('.btn');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const notification = document.getElementById('notification');
    
 
    notification.classList.add('show');
    

    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  });
});