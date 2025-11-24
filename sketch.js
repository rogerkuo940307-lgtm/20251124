let sheet;
let sheet2;
let sheet3;
const FRAMES = 11;
const FRAMES2 = 11;
const FRAMES3 = 11;
let frameW, frameH;
let frameW2, frameH2;
let frameW3, frameH3;
const FPS = 12; // 動畫每秒幀數

function preload() {
  // 請確保檔案位於資料夾 "1/all_1.png"、"2/all_2.png" 和 "3/all_3.png"
  sheet = loadImage('1/all_1.png');
  sheet2 = loadImage('2/all_2.png');
  sheet3 = loadImage('3/all_3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  imageMode(CENTER);
  frameW = sheet.width / FRAMES;
  frameH = sheet.height;
  frameW2 = sheet2.width / FRAMES2;
  frameH2 = sheet2.height;
  frameW3 = sheet3.width / FRAMES3;
  frameH3 = sheet3.height;
  frameRate(60);
}

function draw() {
  background('#03045e'); // 背景顏色 03045e

  // 計算三個 Sprite 的當前幀
  const idx1 = floor((millis() / (1000 / FPS)) % FRAMES);
  const sx1 = idx1 * frameW;
  const idx2 = floor((millis() / (1000 / FPS)) % FRAMES2);
  const sx2 = idx2 * frameW2;
  const idx3 = floor((millis() / (1000 / FPS)) % FRAMES3);
  const sx3 = idx3 * frameW3;

  // 以視窗高度的 40% 作為目標顯示高度，三個動畫顯示高度相同
  const targetH = height * 0.4;
  const scale1 = targetH / frameH;
  const scale2 = targetH / frameH2;
  const scale3 = targetH / frameH3;

  const dw1 = frameW * scale1;
  const dh1 = frameH * scale1;
  const dw2 = frameW2 * scale2;
  const dh2 = frameH2 * scale2;
  const dw3 = frameW3 * scale3;
  const dh3 = frameH3 * scale3;

  // 計算三張動畫的位置，置於視窗中間並有 spacing 間距
  const spacing = 20;
  const totalW = dw1 + spacing + dw2 + spacing + dw3;
  const x1 = width / 2 - totalW / 2 + dw1 / 2;
  const x2 = x1 + dw1 / 2 + spacing + dw2 / 2;
  const x3 = x2 + dw2 / 2 + spacing + dw3 / 2;
  const y = height / 2;

  // 繪製三張精靈動畫（all_1.png, all_2.png, all_3.png）
  image(sheet, x1, y, dw1, dh1, sx1, 0, frameW, frameH);
  image(sheet2, x2, y, dw2, dh2, sx2, 0, frameW2, frameH2);
  image(sheet3, x3, y, dw3, dh3, sx3, 0, frameW3, frameH3);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
