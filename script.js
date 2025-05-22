//your JS code here. If required.
const displayNumber = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  });
};

const multiplyTwo = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
};

const subTractThree = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num - 3);
    }, 1000);
  });
};

const divideTwo = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num / 2);
    }, 1000);
  });
};

const addTen = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 10);
    }, 1000);
  });
};

const startPromises = () => {
  const outputDiv = document.getElementById("output");
  let inputValue = document.getElementById("ip")?.value;
  if (inputValue!=="") {
    displayNumber(Number(inputValue))
      .then((res) => {
        outputDiv.innerText = res;
        return multiplyTwo(res);
      })
      .then((res) => {
        outputDiv.innerText = res;
        return subTractThree(res);
      })
      .then((res) => {
        outputDiv.innerText = res;
        return divideTwo(res);
      })
      .then((res) => {
        outputDiv.innerText = res;
        return addTen(res);
      })
      .then((res) => {
        outputDiv.innerText = res;
      });
  }
};
