// Game state
const gameState = {
    mode: null,
    targetCountry: null,
    guessedCountry: null,
    score: 0,
    time: 0,
    timerInterval: null,
    countries: [], // Will be populated with country data
    isDragging: false,
    startX: 0,
    startY: 0,
    rotationX: 0,
    rotationY: 0
};

// DOM elements
const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');
const normalModeBtn = document.getElementById('normal-mode');
const hardModeBtn = document.getElementById('hard-mode');
const targetCountryEl = document.getElementById('target-country');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const distanceEl = document.getElementById('distance');
const toggleFactsBtn = document.getElementById('toggle-facts');
const factsContent = document.getElementById('facts-content');
const countryFactsEl = document.getElementById('country-facts');
const globeSvg = document.getElementById('globe');

// Event listeners
normalModeBtn.addEventListener('click', () => startGame('normal'));
hardModeBtn.addEventListener('click', () => startGame('hard'));
toggleFactsBtn.addEventListener('click', toggleFacts);

// Game functions
function startGame(mode) {
    gameState.mode = mode;
    startScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    
    // Start timer
    startTimer();
    
    // Load country data and initialize globe
    loadCountryData().then(() => {
        selectRandomCountry();
        renderGlobe();
    });
}

function startTimer() {
    gameState.time = 0;
    gameState.timerInterval = setInterval(() => {
        gameState.time++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.time / 60);
    const seconds = gameState.time % 60;
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function selectRandomCountry() {
    const randomIndex = Math.floor(Math.random() * gameState.countries.length);
    gameState.targetCountry = gameState.countries[randomIndex];
    targetCountryEl.textContent = gameState.targetCountry.name;
    displayCountryFacts();
}

function displayCountryFacts() {
    // This will be implemented with actual country facts
    countryFactsEl.innerHTML = `
        <p>Capital: ${gameState.targetCountry.capital || 'Unknown'}</p>
        <p>Population: ${gameState.targetCountry.population || 'Unknown'}</p>
        <p>Area: ${gameState.targetCountry.area || 'Unknown'} km²</p>
    `;
}

function toggleFacts() {
    factsContent.classList.toggle('show');
}

function renderGlobe() {
    // This will be implemented
}
