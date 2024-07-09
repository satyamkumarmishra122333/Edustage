
document.querySelector('.fa-bars').addEventListener('click', () => {
    let a = document.querySelector('.nav-option');
    let bar = document.querySelector('.fa-bars');

  

   
    // Toggle bar rotation and scale
    if (!bar.classList.contains('rotated')) {
        bar.style.transform = 'rotate(90deg) scale(1.8)';
        bar.classList.add('rotated');
        a.style.left = '0';
    } else {
        bar.style.transform = 'rotate(0deg) scale(1)';
        bar.classList.remove('rotated');
        a.style.left = '-100%'
    }
});
