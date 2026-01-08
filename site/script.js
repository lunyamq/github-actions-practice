function updateTime() {
  const now = new Date();
  
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
  };
  
  const timeString = now.toLocaleDateString('en-US', options);
  
  document.getElementById('deploy-time').textContent = timeString;
  document.getElementById('footer-time').textContent = timeString;
}

function addAnimations() {
  const items = document.querySelectorAll('.status-item');
  
  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.5s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 200);
  });
  
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateTime();
  addAnimations();
    
  console.log('CI/CD Demo - Deployed via GitHub Actions');
});