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

// For this problem we will apply Gauss elimination algorithm

for (let i = 0; i < nQueues; i++) {
  const n = Number(this.readline());
  const minutes = this.readline()
    .split(" ")
    .map((e) => Number(e));

  const matrix = [];
  /* generate matrix with the coefficient of the repertoire for each singer
   * For 6 cities, it'll look like this:
      1   6   5   4   3   2   81  
      2   1   6   5   4   3   75  
      3   2   1   6   5   4   75  
      4   3   2   1   6   5   93  
      5   4   3   2   1   6   93  
      6   5   4   3   2   1   87  
   */
  for (let city = 0; city < n; city++) {
    matrix[city] = [];
    for (let singer = 0; singer < n; singer++) {
      matrix[city][singer] = 1 + ((city + (n - singer)) % n);
    }
    matrix[city].push(minutes[city]);
  }

  /* Now, we will get the matrix to echelon form, that is, something like this
    1   6                     5                    4                     3                      2                   81  
    0   1   0.36363636363636365   0.2727272727272727   0.18181818181818182    0.09090909090909091    7.909090909090909  
    0   0                     1                  0.2    0.1333333333333333    0.06666666666666671   5.0666666666666655  
    0   0                     0                    1    0.1111111111111111   0.055555555555555476   1.7222222222222239  
    0   0                     0                    0                     1    0.05000000000000005    4.249999999999998  
    0   0                     0                    0                     0                      1   5.0000000000000036 

    which will help us isolate each variable
  */
  for (let a = 0; a < n; a++) {
    const factor1 = matrix[a][a];
    for (let col = a; col <= n; col++) {
      matrix[a][col] = matrix[a][col] / factor1;
    }
    for (let lin = a + 1; lin < n; lin++) {
      const factor2 = matrix[lin][a];
      for (let col = a; col <= n; col++) {
        matrix[lin][col] = matrix[lin][col] / factor2 - matrix[a][col];
      }
    }
  }

  /* Now we start from the bottom and subtract for each equation the free variables, which will give us something like this
    (rounding is actually done later, but I've done here just for clarity)
      1   0   0   0   0   0   5  
      0   1   0   0   0   0   5  
      0   0   1   0   0   0   4  
      0   0   0   1   0   0   1  
      0   0   0   0   1   0   4  
      0   0   0   0   0   1   5

      Which makes it trivial to find the values of each variable
  */
  for (let a = n - 1; a >= 0; a--) {
    for (let lin = a - 1; lin >= 0; lin--) {
      const factor = matrix[lin][a];
      for (let col = n; col >= a; col--) {
        matrix[lin][col] = matrix[lin][col] - factor * matrix[a][col];
      }
    }
  }

  const vars = [];
  for (let a = 0; a < n; a++) {
    if (matrix[a][n] <= 0) {
      // repertoires must have positive duration
      this.print("NO");
      break;
    }
    if (Math.abs(matrix[a][n] - Math.round(matrix[a][n])) > 0.0000001) {
      // not an integer
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
