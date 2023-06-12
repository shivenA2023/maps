// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables
let row, column; // Row & Column of Mouse on the Map
let outputEl = document.getElementById("currentTile");

// Solution Functions...
function level1Solution() {
  // USE BINARY IF STATEMENT
  if (column <= 4) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level2Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 2) {
    outputEl.innerHTML = "Hills";
  } else if (column <= 7) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level3Solution() {
  // USE BINARY IF STATEMENT
  if (column >= 3 && column <= 7) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Hills";
  }
}
function level4Solution() {
  // USE BINARY IF STATEMENT
  if (row > 2) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Hills";
  }
}
function level5Solution() {
  // USE CHAINED IF STATEMENT
  if (row > 2 && row < 6) {
    outputEl.innerHTML = "Sand";
  } else if (row < 3) {
    outputEl.innerHTML = "Hills";
  } else {
    outputEl.innerHTML = "Water";
  }
}
function level6Solution() {
  // USE BINARY IF STATEMENT
  if (row > 1 && row < 6) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level7Solution() {
  // USE BINARY IF STATEMENT
  if (row === 4 && column === 7) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level8Solution() {
  // USE BINARY IF STATEMENT
  if (row === 5 || column === 2) {
    outputEl.innerHTML = "Tree";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level9Solution() {
  // USE BINARY IF STATEMENT
  if (row <= 5 && column <= 5) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level10Solution() {
  // USE CHAINED IF STATEMENT
  if (column <= 1) {
    outputEl.innerHTML = "Hills";
  } else if (column > 1 && column < 4) {
    outputEl.innerHTML = "Tree";
  } else if (column > 3 && column < 8) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level11Solution() {
  // USE CHAINED IF STATEMENT
  if (column >= 6 && row < 4) {
    outputEl.innerHTML = "Hills";
  } else if (column >= 6 && row > 3) {
    outputEl.innerHTML = "Tree";
  } else if (column < 6 && row > 3) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Water";
  }
}

function level12Solution() {
  // USE BINARY IF STATEMENT
  if ((row < 5 && column <= 5) || (row >= 5 && column >= 6)) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}

function level13Solution() {
  // USE BINARY IF STATEMENT
  if (row < 6 && row > 1 && column >= 4 && column <= 9) {
    outputEl.innerHTML = "Sand";
  } else {
    outputEl.innerHTML = "Tree";
  }
}

function level14Solution() {
  // USE CHAINED IF STATEMENT
  if (row < 6 && row > 0 && column >= 2 && column <= 4) {
    outputEl.innerHTML = "Tree";
  } else if (row < 6 && row > 2 && column >= 7 && column <= 10) {
    outputEl.innerHTML = "Water";
  } else {
    outputEl.innerHTML = "Sand";
  }
}
