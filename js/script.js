

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
  localStorage.setItem('viewCount', viewCount); // 將新的觀看人數存儲到LocalStorage中
  cpuCapacity -= 5; // 假設每次訪問消耗5%的CPU容量
  if (cpuCapacity < 0) {
    cpuCapacity = 0; // 確保CPU容量不會小於0
  }
  updateStats(); // 更新顯示
}

// 初次載入頁面時觸發
window.onload = function() {
  updateStats(); // 更新顯示
};
