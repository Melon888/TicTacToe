const wholeTable = document.getElementById("allButtons");
const keys = wholeTable.querySelectorAll(".box");
const squares = wholeTable.querySelectorAll("div");
// console.log(keys);
// console.log(squares);

let flag = 0;
const spaces = [null, null, null, null, null, null, null, null, null];
const cross = "X";
const zero = "O";
let currentPlayer = cross;
const redClass = "red";
const blackClass = "black";
let currentColor = redClass;

wholeTable.addEventListener("click", change);

function change(e) {
  const id = e.target.id;
  const targetTag = e.target;
  // console.log(targetTag.style);..

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    // targetTag.classList.add(currentClass);
    // console.log(targetTag.classList);
    targetTag.style.backgroundColor = currentColor;
    //   const para = targetTag.querySelector("P");
    if (playerHasWon()) {
      setTimeout(() => {
        // if (flag === 9) {
        //   alert(`Cats game!!!!!`);
        // }
        if (flag === 5) {
          alert(`${currentPlayer} has WON!!`);
        } else {
          alert(`Cats game!!!!!`);
        }
        restart();
        // targetTag.classList.remove(currentClass);
      }, 2000);

      return;
    }

    currentPlayer = currentPlayer === cross ? zero : cross;
    currentColor = currentColor === redClass ? blackClass : redClass;
    // console.log(e.type);
  }
}

const playerHasWon = () => {
  for (let p = 0; p < 9; ++p) {
    if (spaces[p]) {
      ++flag;
    } else {
      break;
    }
    // console.log(spaces[p].innerText);
  }
  if (flag === 9) {
    return true;
  } else {
    flag = 0;
  }

  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      flag = 5;
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      flag = 5;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      flag = 5;
      return true;
    }
  } else if (spaces[3] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
      flag = 5;
      return true;
    }
  } else if (spaces[6] === currentPlayer) {
    if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
      flag = 5;
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[2] === currentPlayer) {
      flag = 5;
      return true;
    }
  } else if (spaces[1] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
      flag = 5;
      return true;
    }
  } else if (spaces[2] === currentPlayer) {
    if (spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
      flag = 5;
      return true;
    }
  }
  //  else {
  // isFull();
  //   console.log("in full func");
  //   for (let p = 0; p < 9; ++p) {
  //     console.log("in here");
  //     if (spaces[p]) {
  //       ++flag;
  //     } else {
  //       break;
  //     }
  //     // console.log(spaces[p].innerText);
  //   }
  //   if (flag === 9) {
  //     console.log("flag is 9!!");
  //     return true;
  //   } else {
  //     flag = 0;
  //   }
  //   console.log("hey!!!!");
  //   return false;
  // }
};

// function isFull() {
//   console.log("in full func");
//   for (let p = 0; p < 9; ++p) {
//     console.log("in here");
//     if (spaces[p]) {
//       ++flag;
//     } else {
//       break;
//     }
//     // console.log(spaces[p].innerText);
//   }
//   if (flag === 9) {
//     console.log("flag is 9!!");
//     return true;
//   } else {
//     flag = 0;
//   }
//   console.log("hey!!!!");
//   return false;
// }

const restart = () => {
  for (let j = 0; j < 9; ++j) {
    spaces[j] = null;
  }
  keys.forEach((key) => {
    key.innerText = "";
  });

  for (let i = 0; i < 9; ++i) {
    const newNode = document.getElementById(i);
    newNode.style.backgroundColor = "grey";
  }

  currentPlayer = cross;
  currentColor = redClass;
  flag = 0;
};
