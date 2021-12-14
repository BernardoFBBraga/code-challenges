"use strict";

function matprint(mat) {
  let shape = [mat.length, mat[0].length];
  function col(mat, i) {
    return mat.map((row) => row[i]);
  }
  let colMaxes = [];
  for (let i = 0; i < shape[1]; i++) {
    colMaxes.push(
      Math.max.apply(
        null,
        col(mat, i).map((n) => n.toString().length)
      )
    );
  }

  mat.forEach((row) => {
    console.log.apply(
      null,
      row.map((val, j) => {
        return new Array(colMaxes[j] - val.toString().length + 1).join(" ") + val.toString() + "  ";
      })
    );
  });
}

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const n = Number(this.readline());
  const minutes = this.readline()
    .split(" ")
    .map((e) => Number(e));

  const matrix = [];
  for (let city = 0; city < n; city++) {
    matrix[city] = [];
    for (let singer = 0; singer < n; singer++) {
      matrix[city][singer] = 1 + ((city + (n - singer)) % n);
    }
    matrix[city].push(minutes[city]);
  }

  for (let a = 0; a < n; a++) {
    const f1 = matrix[a][a];
    for (let col = a; col <= n; col++) {
      matrix[a][col] = matrix[a][col] / f1;
    }
    for (let lin = a + 1; lin < n; lin++) {
      const f2 = matrix[lin][a];
      for (let col = a; col <= n; col++) {
        matrix[lin][col] = matrix[lin][col] - f2 * matrix[a][col];
      }
    }
  }

  for (let a = n - 1; a >= 0; a--) {
    for (let lin = a - 1; lin >= 0; lin--) {
      const fator = matrix[lin][a];
      for (let col = n; col >= a; col--) {
        matrix[lin][col] = matrix[lin][col] - fator * matrix[a][col];
      }
    }
  }

  const vars = [];
  for (let a = 0; a < n; a++) {
    if (matrix[a][n] <= 0) {
      this.print("NO");
      break;
    }
    vars.push(Math.round(matrix[a][n]));
  }
  if (vars.length === n) {
    this.print("YES");
    this.print(vars.join(" "));
  }
}
