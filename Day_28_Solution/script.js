const addButton = document.getElementById("btn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const countryNameInput = document.getElementById("countryName");
const scoreInput = document.getElementById("score");
const leaderboardList = document.getElementById("leaderboard");

const leaderboardEntries = [];

function updateLeaderboard() {
    leaderboardList.innerHTML = "";

    leaderboardEntries.sort((a, b) => b.score - a.score);

    leaderboardEntries.forEach((entry, index) => {
        const listItem = document.createElement("div");
        listItem.classList.add("leaderboard-entry");
        listItem.innerHTML = `
      <span>${entry.firstName} </span>
      <span>${entry.lastName}</span>
      <span> ${entry.country} </span>
      <span> ${entry.score}</span>
      <button class="increase-btn" data-index="${index}">+5</button>
      <button class="decrease-btn" data-index="${index}">-5</button>
      <button class="remove-btn" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
    `;
        leaderboardList.appendChild(listItem);
    });

    attachButtonsListeners();
}

function attachButtonsListeners() {
    const increaseButtons = document.querySelectorAll(".increase-btn");
    const decreaseButtons = document.querySelectorAll(".decrease-btn");
    const removeButtons = document.querySelectorAll(".remove-btn");

    increaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            leaderboardEntries[index].score += 5;
            updateLeaderboard();
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            if (leaderboardEntries[index].score >= 0) {
                leaderboardEntries[index].score -= 5;
                updateLeaderboard();
            }
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute("data-index");
            leaderboardEntries.splice(index, 1);
            updateLeaderboard();
        });
    });
}


addButton.addEventListener("click", () => {
    const firstName = firstNameInput.value.toUpperCase(); 
    const lastName = lastNameInput.value.toUpperCase(); 
    const country = countryNameInput.value.toUpperCase();
    const score = parseInt(scoreInput.value);

    if (firstName && lastName && country && !isNaN(score)) {
        leaderboardEntries.push({ firstName, lastName, country, score });
        firstNameInput.value = "";
        lastNameInput.value = "";
        countryNameInput.value = "";
        scoreInput.value = "";
        updateLeaderboard();
    }
});

