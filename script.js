document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible to run animation only once
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Stat Number Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out quart
                    const ease = 1 - Math.pow(1 - progress, 4);

                    const current = Math.floor(start + (target - start) * ease);
                    entry.target.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                requestAnimationFrame(animate);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(number => {
        statObserver.observe(number);
    });

    console.log('Ideatech Report: Animations initialized');
});

// === Snake Mini Game Logic ===
const canvas = document.getElementById('gameCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const highScoreElement = document.getElementById('highScore');
    const startBtn = document.getElementById('startBtn');
    const overlay = document.getElementById('gameOverlay');
    const overlayTitle = document.getElementById('overlayTitle');

    // Game constants
    const GRID_SIZE = 20;
    const TILE_COUNT_X = canvas.width / GRID_SIZE;
    const TILE_COUNT_Y = canvas.height / GRID_SIZE;
    const GAME_SPEED = 100; // ms

    // Game state
    let score = 0;
    let highScore = localStorage.getItem('snakeHighScore') || 0;
    let snake = [];
    let food = { x: 0, y: 0 };
    let dx = 0;
    let dy = 0;
    let gameInterval;
    let isGameRunning = false;

    // Initialize game
    function initGame() {
        snake = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];
        score = 0;
        dx = 1;
        dy = 0;
        dy = 0;
        if (scoreElement) scoreElement.textContent = score;
        if (highScoreElement) highScoreElement.textContent = highScore;
        spawnFood();
        isGameRunning = true;
        if (overlay) overlay.style.display = 'none';

        if (gameInterval) clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, GAME_SPEED);
    }

    // Main game loop
    function gameLoop() {
        if (!isGameRunning) return;

        moveSnake();
        if (checkCollision()) {
            gameOver();
            return;
        }

        checkFood();
        draw();
    }

    // Move snake
    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        snake.unshift(head);
        snake.pop();
    }

    // Check for collisions
    function checkCollision() {
        const head = snake[0];

        // Wall collision
        if (head.x < 0 || head.x >= TILE_COUNT_X || head.y < 0 || head.y >= TILE_COUNT_Y) {
            return true;
        }

        // Self collision
        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }

        return false;
    }

    // Check if food is eaten
    function checkFood() {
        const head = snake[0];
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            if (scoreElement) scoreElement.textContent = score;

            // Check High Score
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('snakeHighScore', highScore);
                if (highScoreElement) highScoreElement.textContent = highScore;
            }

            // Grow snake
            snake.push({ ...snake[snake.length - 1] });
            spawnFood();
        }
    }

    // Spawn food in random position
    function spawnFood() {
        food = {
            x: Math.floor(Math.random() * TILE_COUNT_X),
            y: Math.floor(Math.random() * TILE_COUNT_Y)
        };
        // Ensure food doesn't spawn on snake
        for (let part of snake) {
            if (part.x === food.x && part.y === food.y) {
                spawnFood();
                break;
            }
        }
    }

    // Draw everything
    function draw() {
        // Clear canvas
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Snake
        ctx.fillStyle = '#4ADE80'; // var(--primary-green) equivalent
        for (let part of snake) {
            ctx.fillRect(part.x * GRID_SIZE, part.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);
        }

        // Draw Head specific color/style?
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(snake[0].x * GRID_SIZE, snake[0].y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2);

        // Draw Food
        ctx.fillStyle = '#ff6b9d'; // Pink accent food
        ctx.beginPath();
        ctx.arc(
            food.x * GRID_SIZE + GRID_SIZE / 2,
            food.y * GRID_SIZE + GRID_SIZE / 2,
            GRID_SIZE / 2 - 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }

    // checking game over
    function gameOver() {
        isGameRunning = false;
        clearInterval(gameInterval);
        if (overlayTitle) overlayTitle.textContent = 'Game Over';
        if (startBtn) startBtn.textContent = 'Play Again';
        if (overlay) overlay.style.display = 'flex';
    }

    // Input handling
    document.addEventListener('keydown', (e) => {
        // Prevent default scrolling for arrow keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }

        if (!isGameRunning) return;

        switch (e.key) {
            case 'ArrowUp':
                if (dy === 0) { dx = 0; dy = -1; }
                break;
            case 'ArrowDown':
                if (dy === 0) { dx = 0; dy = 1; }
                break;
            case 'ArrowLeft':
                if (dx === 0) { dx = -1; dy = 0; }
                break;
            case 'ArrowRight':
                if (dx === 0) { dx = 1; dy = 0; }
                break;
        }
    });

    // Event listeners
    if (startBtn) startBtn.addEventListener('click', initGame);

    // Initial draw (empty grid)
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
