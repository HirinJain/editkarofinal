function filterVideos(category) {
    const cards = document.querySelectorAll('.video-card');
    cards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  document.querySelectorAll('.video-card video').forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play(); 
    });
  
    video.addEventListener('mouseout', () => {
      video.pause(); 
    });
  });