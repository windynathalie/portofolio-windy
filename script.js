function one(n) {
  let pola = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

one(9);

function three(n) {
  let pola = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j || i === n - j) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

three(8);

function five(n) {
  let pola = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j || i === n - j || i === 0 || i === n || j === 0 || j === n) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

five(8);

function seven(n) {
  let pola = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= n - i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

seven(8);

function nine(n) {
  let pola = "";
  for (let i = 0; i <= n / 2; i++) {
    for (let j = 0; j <= n; j++) {
      if (j <= i || j >= n - i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }

  for (let i = n / 2 + 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j <= n - i || j >= i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

nine(8);

//

function two(n) {
  let pola = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === n - i - 1) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

two(9);

function four(n) {
  let pola = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j === n - i || i === j) {
        pola += "*";
      } else if (i === 4) {
        pola += "*";
      } else if (j === 4) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

four(8);

function six(n) {
  let pola = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j <= i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

six(8);

function eight(n) {
  let pola = "";
  for (let i = 0; i <= n / 2; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= i && j <= n - i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  for (let i = n / 2 + 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j <= i && j >= n - i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

eight(8);

function ten(n) {
  let pola = "";
  for (let i = 0; i <= n / 2; i++) {
    for (let j = 0; j <= n; j++) {
      if (j <= i) {
        pola += "*";
      } else if (i === n / 2) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  for (let i = n / 2 + 1; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= i) {
        pola += "*";
      } else {
        pola += " ";
      }
    }
    pola += "\n";
  }
  console.log(pola);
}

ten(8);
