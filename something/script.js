// ===============================
// PASSWORD
// ===============================

const correctPassword = "kabadan";

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

const glass = document.querySelector(".glass");

const loadingScreen = document.getElementById("loadingScreen");
const transition = document.getElementById("transition");

const progressBar = document.getElementById("progressBar");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

const beginJourney = document.getElementById("beginJourney");

// ===============================
// ENTER KEY SUPPORT
// ===============================

passwordInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        unlockBtn.click();
    }

});

// ===============================
// UNLOCK
// ===============================

unlockBtn.addEventListener("click", () => {

    const value = passwordInput.value.trim().toLowerCase();

    if (value === correctPassword) {

        // localStorage.setItem("universeUnlocked", "true");

        error.style.display = "none";

        glass.classList.add("unlockGlow");

        document.querySelector(".lock").textContent = "🔓";

        setTimeout(() => {

            document.querySelector(".container").style.display = "none";

            loadingScreen.style.display = "flex";

            startLoading();

        }, 1200);

    }

    else {

        error.style.display = "block";

        glass.classList.add("shake");

        passwordInput.value = "";

        setTimeout(() => {

            glass.classList.remove("shake");

        }, 500);

    }

});

// ===============================
// LOADING
// ===============================

function startLoading() {

    let progress = 0;

    const interval = setInterval(() => {

        progress++;

        progressBar.style.width = progress + "%";

        if (progress >= 20) {

            step1.innerHTML = "✅ Collecting our memories...";

        }

        if (progress >= 45) {

            step2.innerHTML = "✅ Loading our favorite moments...";

        }

        if (progress >= 70) {

            step3.innerHTML = "✅ Adding a little magic...";

        }

        if (progress >= 95) {

            step4.innerHTML = "✅ Almost Ready...";

        }

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(showTransition, 700);

        }

    }, 40);

}

// ===============================
// TRANSITION
// ===============================

function showTransition() {

    loadingScreen.style.display = "none";

    transition.style.display = "flex";

}

// ===============================
// BEGIN JOURNEY
// ===============================

beginJourney.addEventListener("click", () => {

    window.location.href = "home.html";

});
