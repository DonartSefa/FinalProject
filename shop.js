document.querySelector('.btn').addEventListener('click', () => {
    const notification = document.getElementById('notification');
    
    // Show the notification
    notification.classList.add('show');
    
    // Hide the notification after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show');
    }, 5000);
  });