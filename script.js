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
    }, 1000);
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

const startPromises = async () => {
  const outputDiv = document.getElementById("output");
  let inputValue = document.getElementById("ip")?.value;
  if (inputValue !== "") {
    let res = await displayNumber(Number(inputValue));
    outputDiv.innerText = "Result: "+res;
    res=await multiplyTwo(res);
    outputDiv.innerText = "Result: "+res;
    res=await subTractThree(res);
    outputDiv.innerText = "Result: "+res;
    res=await divideTwo(res);
    outputDiv.innerText = "Result: "+res;
    res=await addTen(res);
    outputDiv.innerText = "Final Result: "+res;
  }
};

