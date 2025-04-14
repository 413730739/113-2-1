let btnTamkang, btnTamkangET, btnTamkangET2, btnQuiz; // 按鈕變數
let buttons = []; // 儲存所有按鈕的陣列
let spriteTamkang, spriteTamkangET, spriteTamkangET2, spriteQuiz; // 新增 spriteQuiz
let spriteIndexTamkang = 0; // 第一個精靈動畫索引
let spriteIndexTamkangET = 0; // 第二個精靈動畫索引
let spriteIndexTamkangET2 = 0; // 第三個精靈動畫索引
let spriteIndexQuiz = 0; // 第四個精靈動畫索引
let spriteTimerTamkang = 0; // 第一個精靈動畫計時器
let spriteTimerTamkangET = 0; // 第二個精靈動畫計時器
let spriteTimerTamkangET2 = 0; // 第三個精靈動畫計時器
let spriteTimerQuiz = 0; // 第四個精靈動畫計時器
let iframeContainer; // 用於顯示網站內容的框
let isHoverTamkang = false; // 是否滑鼠在第一個按鈕上
let isHoverTamkangET = false; // 是否滑鼠在第二個按鈕上
let isHoverTamkangET2 = false; // 是否滑鼠在第三個按鈕上
let isHoverQuiz = false; // 是否滑鼠在第四個按鈕上
let bubbles = []; // 儲存所有泡泡的陣列

let spriteHome, spriteTutorial; // 新增精靈圖片變數
let spriteIndexHome = 0, spriteIndexTutorial = 0; // 精靈動畫索引
let spriteTimerHome = 0, spriteTimerTutorial = 0; // 精靈動畫計時器
let isHoverHome = false, isHoverTutorial = false; // 滑鼠是否在按鈕上

let menuTamkangET; // 用於存放 "作品簡介" 的選單

function preload() {
  // 載入圖片精靈
  spriteTamkang = loadImage('all.png', () => {
    console.log('all.png 載入成功');
  }, () => {
    console.error('無法載入 all.png，請檢查檔案路徑');
  });

  spriteTamkangET = loadImage('all-2.png', () => {
    console.log('all-2.png 載入成功');
  }, () => {
    console.error('無法載入 all-2.png，請檢查檔案路徑');
  });

  spriteTamkangET2 = loadImage('3.png', () => {
    console.log('3.png 載入成功');
  }, () => {
    console.error('無法載入 3.png，請檢查檔案路徑');
  });

  spriteQuiz = loadImage('4.png', () => {
    console.log('4.png 載入成功');
  }, () => {
    console.error('無法載入 4.png，請檢查檔案路徑');
  });

  spriteHome = loadImage('5.png', () => {
    console.log('5.png 載入成功');
  }, () => {
    console.error('無法載入 5.png，請檢查檔案路徑');
  });

  spriteTutorial = loadImage('6.png', () => {
    console.log('6.png 載入成功');
  }, () => {
    console.error('無法載入 6.png，請檢查檔案路徑');
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background("#b5e2fa"); // 淡藍色背景 (RGB)

  // 初始化泡泡
  for (let i = 0; i < 80; i++) { // 產生 50 個泡泡
    let bubble = {
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(20, 100), // 隨機大小
      color: color(random(200, 255), random(200, 255), random(200, 255), 150), // 淡色系顏色
      speedX: random(-2, 2), // 隨機水平移動速度
      speedY: random(-2, 2) // 隨機垂直移動速度
    };
    bubbles.push(bubble);
  }

  // 建立 "首頁" 按鈕
  let btnHome = createButton('首頁');
  btnHome.position(20, 50); // 按鈕位置
  styleButton(btnHome); // 設定按鈕樣式
  btnHome.mousePressed(() => {
    resetToHome(); // 呼叫重置畫面的函式
  });
  btnHome.mouseOver(() => isHoverHome = true); // 滑鼠移入
  btnHome.mouseOut(() => isHoverHome = false); // 滑鼠移出
  buttons.push({ button: btnHome, x: 20, y: 50 }); // 加入到按鈕陣列

  // 建立按鈕
  btnTamkang = createButton('自我介紹');
  btnTamkang.position(20, 120);
  styleButton(btnTamkang);
  buttons.push({ button: btnTamkang, x: 20, y: 120 });

  btnTamkangET = createButton('作品簡介');
  btnTamkangET.position(20, 190);
  styleButton(btnTamkangET);
  buttons.push({ button: btnTamkangET, x: 20, y: 190 });

  btnTamkangET2 = createButton('淡江教科');
  btnTamkangET2.position(20, 260);
  styleButton(btnTamkangET2);
  buttons.push({ button: btnTamkangET2, x: 20, y: 260 });

  btnQuiz = createButton('測驗題');
  btnQuiz.position(20, 330);
  styleButton(btnQuiz);
  buttons.push({ button: btnQuiz, x: 20, y: 330 });

  // 建立 "自我介紹" 按鈕
  btnTamkang.mousePressed(() => {
    showIframe('./自我介紹.pdf'); // 使用相對路徑顯示 PDF
  });


  btnTamkang.mouseOver(() => isHoverTamkang = true); // 滑鼠移入
  btnTamkang.mouseOut(() => isHoverTamkang = false); // 滑鼠移出

  // 建立 "作品簡介" 按鈕
  btnTamkangET.mousePressed(() => {
    showIframe('https://413730739.github.io/1140303/');
  });
  btnTamkangET.mouseOver(() => {
    isHoverTamkangET = true;
    menuTamkangET.style('display', 'block'); // 顯示選單
  });
  btnTamkangET.mouseOut(() => {
    // 檢查滑鼠是否在選單範圍內
    setTimeout(() => {
      if (!isMouseInMenu(menuTamkangET)) {
        isHoverTamkangET = false;
        menuTamkangET.style('display', 'none'); // 隱藏選單
      }
    }, 100); // 延遲檢查，避免滑鼠快速移動導致選單消失
  });

  // 建立 "作品簡介" 的選單
  menuTamkangET = createDiv('');
  menuTamkangET.position(150, 190); // 選單位置（相對於按鈕）
  menuTamkangET.style('display', 'none'); // 預設隱藏
  menuTamkangET.style('background-color', '#ffc2d1'); // 選單背景顏色
  menuTamkangET.style('border', '1px solid #ef476f'); // 選單邊框
  menuTamkangET.style('padding', '10px'); // 選單內邊距
  menuTamkangET.style('box-shadow', '0px 4px 8px #ef476f'); // 選單陰影

  // 在選單中加入選項
  let note1 = createButton('第一周筆記');
  note1.parent(menuTamkangET);
  note1.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note1.style('color', '#ef476f'); // 按鈕文字顏色
  note1.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note1.style('padding', '5px 10px'); // 按鈕內邊距
  note1.style('border-radius', '5px'); // 按鈕圓角
  note1.style('cursor', 'pointer'); // 滑鼠指標樣式
  note1.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/ryJiRXg5ye'); // 替換為第一周筆記的網址
  });

  let note2 = createButton('第二周筆記');
  note2.parent(menuTamkangET);
  note2.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note2.style('color', '#ef476f'); // 按鈕文字顏色
  note2.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note2.style('padding', '5px 10px'); // 按鈕內邊距
  note2.style('border-radius', '5px'); // 按鈕圓角
  note2.style('cursor', 'pointer'); // 滑鼠指標樣式
  note2.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/ry2HewK9Jl'); // 替換為第二周筆記的網址
  });

  let note3 = createButton('第三周筆記');
  note3.parent(menuTamkangET);
  note3.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note3.style('color', '#ef476f'); // 按鈕文字顏色
  note3.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note3.style('padding', '5px 10px'); // 按鈕內邊距
  note3.style('border-radius', '5px'); // 按鈕圓角
  note3.style('cursor', 'pointer'); // 滑鼠指標樣式
  note3.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/HJzrJjzjyx'); // 替換為第三周筆記的網址
  });

  let note4 = createButton('第四周筆記');
  note4.parent(menuTamkangET);
  note4.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note4.style('color', '#ef476f'); // 按鈕文字顏色
  note4.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note4.style('padding', '5px 10px'); // 按鈕內邊距
  note4.style('border-radius', '5px'); // 按鈕圓角
  note4.style('cursor', 'pointer'); // 滑鼠指標樣式
  note4.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/S14fRRjjJl'); // 替換為第四周筆記的網址
  });
  let note5 = createButton('第五周筆記');
  note5.parent(menuTamkangET);
  note5.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note5.style('color', '#ef476f'); // 按鈕文字顏色
  note5.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note5.style('padding', '5px 10px'); // 按鈕內邊距
  note5.style('border-radius', '5px'); // 按鈕圓角
  note5.style('cursor', 'pointer'); // 滑鼠指標樣式
  note5.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/SJuIsMBnkx'); // 替換為第五周筆記的網址
  });
  let note6 = createButton('第六周筆記');
  note6.parent(menuTamkangET);
  note6.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note6.style('color', '#ef476f'); // 按鈕文字顏色
  note6.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note6.style('padding', '5px 10px'); // 按鈕內邊距
  note6.style('border-radius', '5px'); // 按鈕圓角
  note6.style('cursor', 'pointer'); // 滑鼠指標樣式
  note6.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/HkCm0S03kg'); // 替換為第六周筆記的網址
  });
   let note７ = createButton('期中筆記');
  note７.parent(menuTamkangET);
  note７.style('background-color', '#ffc2d1'); // 按鈕背景顏色
  note７.style('color',  '#ef476f'); // 按鈕文字顏色
  note７.style('border', '1px solid #ef476f'); // 按鈕邊框顏色
  note７.style('padding', '5px 10px'); // 按鈕內邊距
  note７.style('border-radius', '5px'); // 按鈕圓角
  note７.style('cursor', 'pointer'); // 滑鼠指標樣式
  note７.mousePressed(() => {
    showIframe('https://hackmd.io/@k_uQPxPmRdKuweqHQekgQw/SJ9RDx50Je'); // 替換為期中筆記的網址
  });
  // 建立 "淡江教科" 按鈕
  btnTamkangET2.mousePressed(() => {
    showIframe('https://413730739.github.io/0317/');
  });
  btnTamkangET2.mouseOver(() => isHoverTamkangET2 = true); // 滑鼠移入
  btnTamkangET2.mouseOut(() => isHoverTamkangET2 = false); // 滑鼠移出

  // 建立 "測驗題" 按鈕
  btnQuiz.mousePressed(() => {
    showIframe('https://413730739.github.io/0310/');
  });
  btnQuiz.mouseOver(() => isHoverQuiz = true); // 滑鼠移入
  btnQuiz.mouseOut(() => isHoverQuiz = false); // 滑鼠移出

  // 建立 "教學影片" 按鈕
  let btnTutorial = createButton('教學影片');
  btnTutorial.position(20, 400); // 按鈕位置（與上一個按鈕相隔 70）
  styleButton(btnTutorial); // 設定按鈕樣式
  btnTutorial.mousePressed(() => {
    showIframe('./20250324_105216.mp4'); // 顯示本地影片檔案
  });
  btnTutorial.mouseOver(() => isHoverTutorial = true); // 滑鼠移入
  btnTutorial.mouseOut(() => isHoverTutorial = false); // 滑鼠移出
  buttons.push({ button: btnTutorial, x: 20, y: 400 }); // 加入到按鈕陣列

  // 建立 iframe 容器
  iframeContainer = createDiv('');
  iframeContainer.style('display', 'none'); // 預設隱藏
  iframeContainer.style('position', 'absolute');
  iframeContainer.style('top', '50%');
  iframeContainer.style('left', '50%');
  iframeContainer.style('width', `${windowWidth * 0.75}px`); // 寬度為視窗的四分之三
  iframeContainer.style('height', `${windowHeight * 0.75}px`); // 高度為視窗的四分之三
  iframeContainer.style('transform', 'translate(-50%, -50%)'); // 置中
  iframeContainer.style('background-color', 'white');
  iframeContainer.style('border', '2px solid black');
  iframeContainer.style('box-shadow', '0px 4px 8px rgba(0, 0, 0, 0.2)');

  // 當視窗大小改變時，更新 iframe 容器的大小
  window.addEventListener('resize', () => {
    iframeContainer.style('width', `${windowWidth * 0.75}px`);
    iframeContainer.style('height', `${windowHeight * 0.75}px`);
  });

  // 加入關閉按鈕
  let closeButton = createButton('關閉');
  closeButton.parent(iframeContainer);
  closeButton.style('position', 'absolute');
  closeButton.style('top', '10px');
  closeButton.style('right', '10px');
  closeButton.mousePressed(() => {
    iframeContainer.style('display', 'none'); // 隱藏框
    iframeContainer.html(''); // 清空內容
  });

  // 為選單中的按鈕加入事件
  menuTamkangET.mouseOver(() => {
    isHoverTamkangET = true; // 滑鼠移入選單時保持選單顯示
  });

  menuTamkangET.mouseOut(() => {
    setTimeout(() => {
      if (!isMouseInMenu(menuTamkangET)) {
        isHoverTamkangET = false;
        menuTamkangET.style('display', 'none'); // 隱藏選單
      }
    }, 100); // 延遲檢查，避免滑鼠快速移動導致選單消失
  });

  // 設定選單的 z-index
  menuTamkangET.style('z-index', '10'); // 設定選單的層級較高

  // 設定 iframe 容器的 z-index
  iframeContainer.style('z-index', '5'); // 設定 iframe 容器的層級較低
}

function draw() {
  background("#b5e2fa"); // 確保背景保持淡藍色

  // 繪製並更新所有泡泡
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let bubble = bubbles[i];

    // 繪製泡泡
    noStroke();
    fill(bubble.color);
    ellipse(bubble.x, bubble.y, bubble.size);

    // 更新泡泡位置
    bubble.x += bubble.speedX;
    bubble.y += bubble.speedY;

    // 讓泡泡在邊界反彈
    if (bubble.x < 0 || bubble.x > width) bubble.speedX *= -1;
    if (bubble.y < 0 || bubble.y > height) bubble.speedY *= -1;
  }

  // 在右上角顯示學號
  fill(0); // 設定文字顏色為黑色
  textSize(20); // 設定文字大小
  textAlign(RIGHT, TOP); // 將文字對齊到右上角
  text("學號：OOOOO0739", width -20, 20); // 在右上角繪製文字，距離邊緣 20px

// 顯示第一個按鈕的精靈動畫
if (isHoverTamkang) {
  displaySprite(spriteTamkang, 18, 1867, 84, 200, 30, spriteIndexTamkang, (index) => spriteIndexTamkang = index, spriteTimerTamkang, (timer) => spriteTimerTamkang = timer);
}

// 顯示第二個按鈕的精靈動畫
if (isHoverTamkangET) {
  displaySprite(spriteTamkangET, 14, 1003, 71, 200, 30, spriteIndexTamkangET, (index) => spriteIndexTamkangET = index, spriteTimerTamkangET, (timer) => spriteTimerTamkangET = timer);
}

// 顯示第三個按鈕的精靈動畫
if (isHoverTamkangET2) {
  displaySprite(spriteTamkangET2, 6, 373, 73, 200, 30, spriteIndexTamkangET2, (index) => spriteIndexTamkangET2 = index, spriteTimerTamkangET2, (timer) => spriteTimerTamkangET2 = timer);
}

// 顯示第四個按鈕的精靈動畫
if (isHoverQuiz) {
  displaySprite(spriteQuiz, 8, 555, 83,200, 30, spriteIndexQuiz, (index) => spriteIndexQuiz = index, spriteTimerQuiz, (timer) => spriteTimerQuiz = timer);
}

// 顯示首頁按鈕的精靈動畫
if (isHoverHome) {
  displaySprite(spriteHome, 10, 1245, 125,30, 470, spriteIndexHome, (index) => spriteIndexHome = index, spriteTimerHome, (timer) => spriteTimerHome = timer);
}

// 顯示教學影片按鈕的精靈動畫
if (isHoverTutorial) {
  displaySprite(spriteTutorial, 7, 1210, 187, 20, 460, spriteIndexTutorial, (index) => spriteIndexTutorial = index, spriteTimerTutorial, (timer) => spriteTimerTutorial = timer);
}
}

// 顯示精靈動畫的函式
function displaySprite(sprite, frameCount, spriteWidth, spriteHeight, x, y, spriteIndex, updateIndex, spriteTimer, updateTimer) {
  let frameWidth = spriteWidth / frameCount; // 計算每張小圖片的寬度
  if (millis() - spriteTimer > 100) { // 每 100 毫秒切換一張圖片
    spriteIndex = (spriteIndex + 1) % frameCount;
    updateIndex(spriteIndex); // 更新動畫索引
    updateTimer(millis()); // 更新計時器
  }
  image(sprite, x, y, frameWidth, spriteHeight, spriteIndex * frameWidth, 0, frameWidth, spriteHeight);
}

// 顯示 iframe 的函式
function showIframe(url) {
  iframeContainer.html(`<iframe src="${url}" width="100%" height="100%" frameborder="0"></iframe>`);
  iframeContainer.style('display', 'block'); // 顯示框
}

// 設定按鈕樣式的函式
function styleButton(button) {
  button.style('background-color', '#e7c6ff'); // 按鈕背景顏色
  button.style('border', '2px solid #9d4edd'); // 按鈕邊框顏色
  button.style('color', '#240046'); // 按鈕文字顏色
  button.style('font-size', '20px'); // 按鈕文字大小
  button.style('padding', '10px 20px'); // 按鈕內邊距
  button.style('border-radius', '5px'); // 按鈕圓角
  button.style('cursor', 'pointer'); // 滑鼠指標樣式
}

// 重置畫面的函式
function resetToHome() {
  bubbles = []; // 清空泡泡陣列
  for (let i = 0; i < 80; i++) { // 重新產生 50 個泡泡
    let bubble = {
      x: random(width),
      y: random(height),
      size: random(20, 100),
      color: color(random(200, 255), random(200, 255), random(200, 255), 150),
      speedX: random(-2, 2),
      speedY: random(-2, 2)
    };
    bubbles.push(bubble);
  }
  background("#b5e2fa"); // 重置背景顏色

  // 隱藏 iframe 容器
  iframeContainer.style('display', 'none'); // 隱藏框
  iframeContainer.html(''); // 清空內容
}

function mousePressed() {
  // 檢查滑鼠是否點擊到泡泡
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let bubble = bubbles[i];
    let d = dist(mouseX, mouseY, bubble.x, bubble.y); // 計算滑鼠與泡泡的距離
    if (d < bubble.size / 2) { // 如果距離小於泡泡半徑
      bubbles.splice(i, 1); // 從陣列中移除該泡泡

      // 新增更多泡泡
      for (let j = 0; j < 3; j++) { // 每次新增 3 個泡泡
        let edge = floor(random(4)); // 隨機選擇從哪個邊界進入（0: 上, 1: 下, 2: 左, 3: 右）
        let newBubble = {
          x: edge === 2 ? -random(20, 80) : edge === 3 ? width + random(20, 80) : random(width),
          y: edge === 0 ? -random(20, 80) : edge === 1 ? height + random(20, 80) : random(height),
          size: random(20, 80),
          color: color(random(200, 255), random(200, 255), random(200, 255), 150),
          speedX: edge === 2 ? random(1, 3) : edge === 3 ? random(-3, -1) : random(-2, 2),
          speedY: edge === 0 ? random(1, 3) : edge === 1 ? random(-3, -1) : random(-2, 2)
        };
        bubbles.push(newBubble);
      }

      break; // 停止檢查，避免一次點擊移除多個泡泡
    }
  }
}

function mouseMoved() {
  // 如果滑鼠在選單範圍內，直接返回，不執行按鈕移動邏輯
  if (isMouseInMenu(menuTamkangET)) {
    return;
  }

  buttons.forEach(({ button, x, y }) => {
    let distance = mouseX; // 以畫布最左側為中心，直接使用 mouseX 作為距離
    let targetX = distance > 500 ? x - 200 : x; // 當滑鼠距離大於 500 時，按鈕移向左側，否則回到原位
    let currentX = button.position().x; // 取得按鈕目前的 x 座標
    let newX = lerp(currentX, targetX, 0.1); // 使用 lerp 平滑移動按鈕
    button.position(newX, y); // 更新按鈕位置
  });
}

// 檢查滑鼠是否在選單範圍內
function isMouseInMenu(menu) {
  let menuX = menu.position().x;
  let menuY = menu.position().y;
  let menuWidth = menu.size().width;
  let menuHeight = menu.size().height;

  return mouseX > menuX && mouseX < menuX + menuWidth && mouseY > menuY && mouseY < menuY + menuHeight;
}
