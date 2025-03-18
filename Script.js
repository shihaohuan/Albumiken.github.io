function changeVideo(videoPath) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    
    videoSource.src = videoPath;
    videoPlayer.load();
    videoPlayer.play();
}

const style = document.createElement('style');
style.innerHTML = `
    #videoPlayer {
        max-width: 70%;
        height: auto;
        object-fit: contain;
    }
`;
document.head.appendChild(style);

// script.js
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    const moveX = (e.clientX / window.innerWidth) * 50;
    const moveY = (e.clientY / window.innerHeight) * 50;
    
    stars.style.transform = `translate(${moveX}px, ${moveY}px)`;
    twinkling.style.transform = `translate(${moveX}px, ${moveY}px)`;
});