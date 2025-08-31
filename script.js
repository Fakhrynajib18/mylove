document.addEventListener('DOMContentLoaded', function() {
    // First question elements
    const firstQuestion = document.getElementById('firstQuestion');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Second question elements
    const secondQuestion = document.getElementById('secondQuestion');
    const yesBtn2 = document.getElementById('yesBtn2');
    const noBtn2 = document.getElementById('noBtn2');
    
    // Toast setup
    const toastEl = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastEl, {autohide: false});
    
    let clickCount = 0;
    let yesBtn2Size = 1;
    
    // Always start with size 1 on page load
    let yesBtnSize = 1;
    yesBtn.style.transform = 'scale(1)';
    // Clear any previously saved size
    localStorage.removeItem('yesBtnSize');

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show the toast notification
        toast.show();
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.hide();
        }, 3000);
        
        // Permanently increase the size of the Yes button
        clickCount++;
        yesBtnSize += 0.2;
        yesBtn.style.transform = `scale(${yesBtnSize})`;
        // No need to save to localStorage anymore
        
        // Add pulse effect
        yesBtn.classList.add('pulse');
        setTimeout(() => {
            yesBtn.classList.remove('pulse');
        }, 500);
        
        // Move the No button to a random position
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });
    
    // First question handlers
    yesBtn.addEventListener('click', function() {
        // Hide first question, show second question
        firstQuestion.style.display = 'none';
        secondQuestion.style.display = 'block';
    });
    
    // Second question handlers
    yesBtn2.addEventListener('click', function() {
        // Show success message
        const message = document.createElement('div');
        message.className = 'alert alert-success mt-3';
        message.textContent = 'Finally Sayanggg kita berhasil merubah status kita ❤️';
        secondQuestion.appendChild(message);
        
        // Hide both buttons
        yesBtn2.style.display = 'none';
        noBtn2.style.display = 'none';
    });
    
    noBtn2.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Show the toast notification
        toast.show();
        
        // Hide the toast after 3 seconds
        setTimeout(() => {
            toast.hide();
        }, 3000);
        
        // Increase the size of the Yes button
        yesBtn2Size += 0.2;
        yesBtn2.style.transform = `scale(${yesBtn2Size})`;
        
        // Add pulse effect
        yesBtn2.classList.add('pulse');
        setTimeout(() => {
            yesBtn2.classList.remove('pulse');
        }, 500);
        
        // Move the No button to a random position
        const maxX = window.innerWidth - noBtn2.offsetWidth;
        const maxY = window.innerHeight - noBtn2.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn2.style.position = 'fixed';
        noBtn2.style.left = `${randomX}px`;
        noBtn2.style.top = `${randomY}px`;
    });
    
    // Prevent right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u'))) {
            e.preventDefault();
        }
    });
});
