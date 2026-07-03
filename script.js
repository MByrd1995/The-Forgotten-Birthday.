const clickSound = new Audio("click.mp3");
const questSound = new Audio("quest.mp3");

function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function questAccepted(nextPage) {
    questSound.currentTime = 0;
    questSound.play();

    const overlay = document.getElementById("questOverlay");
    overlay.style.display = "flex";

    setTimeout(() => {
        window.location.href = nextPage;
    }, 1800);
}
