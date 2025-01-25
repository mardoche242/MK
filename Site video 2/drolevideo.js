// Liste des vidéos (peut être étendue)
const videos = [
    { id: 1, title: "Film 1: Introduction au monde", thumbnail: "https://via.placeholder.com/400x250", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 2, title: "Film 2: Aventure fantastique", thumbnail: "https://via.placeholder.com/400x250", url: "https://www.w3schools.com/html/movie.mp4" },
    { id: 3, title: "Film 3: Le mystère de l'univers", thumbnail: "https://via.placeholder.com/400x250", url: "https://www.w3schools.com/html/movie.mp4" }
];

// Sélectionner les éléments du DOM
const videoListContainer = document.querySelector(".video-list");
const videoPlayer = document.getElementById("videoPlayer");
const videoSource = document.getElementById("videoSource");

// Fonction pour afficher les vidéos recommandées
function displayRecommendedVideos() {
    videos.forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
        `;
        videoItem.addEventListener("click", () => loadVideo(video.url));
        videoListContainer.appendChild(videoItem);
    });
}

// Fonction pour charger une vidéo dans le lecteur
function loadVideo(url) {
    videoSource.src = url;
    videoPlayer.load();
    videoPlayer.play();
}

// Charger les vidéos recommandées au démarrage
displayRecommendedVideos();





// Exemple de tri des vidéos par popularité (attribut data-popularity)
const container = document.querySelector('.video-container');
const videos = Array.from(container.querySelectorAll('.video'));

videos.sort((a, b) => {
    return b.getAttribute('data-popularity') - a.getAttribute('data-popularity');
});

videos.forEach(video => container.appendChild(video));





