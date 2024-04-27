// 初始觀看人數為0
let viewCount = 0;

// 模擬CPU容量，假設初始為100%
let cpuCapacity = 100;

// 更新觀看人數和CPU容量的顯示
function updateStats() {
  document.getElementById('viewCount').textContent = viewCount;
  document.getElementById('cpuCapacity').textContent = cpuCapacity + '%';
}

// 每次有人訪問頁面時觸發的函數
function onPageVisit() {
  viewCount++; // 增加觀看人數
  cpuCapacity -= 5; // 假設每次訪問消耗5%的CPU容量
  if (cpuCapacity < 0) {
    cpuCapacity = 0; // 確保CPU容量不會小於0
  }
  updateStats(); // 更新顯示
}

// 每秒更新一次觀看人數和CPU容量
setInterval(onPageVisit, 1000); // 1000毫秒 = 1秒
