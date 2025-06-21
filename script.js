const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = { x: 200, y: 550, width: 40, height: 40 };
let items = [];
let score = 0;

function drawPlayer() {
  ctx.fillStyle = "lime";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function spawnItem() {
  let x = Math.random() * (canvas.width - 30);
  items.push({ x, y: 0, size: 30, good: Math.random() > 0.3 });
}

function drawItems() {
  items.forEach((item) => {
    ctx.fillStyle = item.good ? "gold" : "red";
    ctx.fillRect(item.x, item.y, item.size, item.size);
  });
}

function updateItems() {
  items.forEach((item) => item.y += 4);
  items = items.filter(item => {
    if (
      item.x < player.x + player.width &&
      item.x + item.size > player.x &&
      item.y < player.y + player.height &&
      item.y + item.size > player.y
    ) {
      if (item.good) score += 10;
      else score -= 10;
      return false;
    }
    return item.y < canvas.height;
  });
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Pontos: " + score, 10, 30);
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawItems();
  updateItems();
  drawScore();
  requestAnimationFrame(gameLoop);
}

setInterval(spawnItem, 1000);
gameLoop();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && player.x > 0) player.x -= 20;
  if (e.key === "ArrowRight" && player.x + player.width < canvas.width) player.x += 20;
});
