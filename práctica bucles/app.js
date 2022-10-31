// DIBJAR CUADRADO

var square = (n, char) => {
  console.log("************* Pintando Cuadrados *************");
  let widht = "";
  for (let i = 0; i < n; i++) widht += char;
  for (let x = 0; x < n; x++) console.log(x, widht);
};

square(10, "x");

// DIBUJAR CUADRADO CON BORDE

var squareWithBorder = (n, charBorder, charInner) => {
  console.log("");
  console.log("****** Pintando Cuadrados con Bordes ******");
  let border = "",
    inner = "";
  for (let i = 1; i <= n; i++) border += charBorder;
  if (n <= 2) {
    for (let i = 1; i <= n; i++) console.log(i, border);
  } else {
    for (let i = 1; i < n - 1; i++) inner += charInner;
    for (let i = 1; i <= n; i++) {
      i == 1
        ? console.log(i, border)
        : i > 1 && i < n
        ? console.log(i, charBorder + inner + charBorder)
        : console.log(i, border);
    }
  }
};

squareWithBorder(10, "B", "x");

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
  console.log("");
  console.log("****** Pintando Cuadrado Diagonal Left-Right ******");
  let up = "",
    down = "";
  for (i = 1; i <= n; i++) {
    for (x = 1; x < n - (n - i); x++) down += charDown;
    for (x = 1; x <= n - i; x++) up += charUp;
    console.log(down + charDiagonal + up);
    (up = ""), (down = "");
  }
};

squareDiagonalLR(10, "\\", "A", "B");

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
  console.log("");
  console.log("****** Pintando Cuadrado Diagonal RL ******");
  let up = "",
    down = "";
  for (let i = 1; i <= n; i++) {
    for (x = 1; x < n - (n - i); x++) up += charUp;
    for (x = 1; x <= n - i; x++) down += charDown;
    console.log(down + charDiagonal + up);
    (up = ""), (down = "");
  }
};

squareDiagonalRL(10, "/", "A", "B");

var halfDiamond = (n, char) => {
  console.log("");
  console.log("****** Pintando Cuadrado Diagonal RL ******");
  let diamond = "";
  for (let i = 1; i < n * 2; i++) {
    if (i <= n) {
      for (x = 0; x < n - (n - i); x++) diamond += char;
      console.log(diamond);
      diamond = "";
    } else if (i > n) {
      for (x = 0; x < n * 2 - i; x++) diamond += char;
      console.log(diamond);
      diamond = "";
    }
  }
};

halfDiamond(10, "*");
