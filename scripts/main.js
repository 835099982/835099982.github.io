// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/6.jpg') {
      myImage.setAttribute('src', 'images/9.png');
    } else {
      myImage.setAttribute('src', 'images/6.jpg');
    }
}

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
/*function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'AMD YES！' + myName;
}*/

// 初始化代码：在页面初次读取时进行构造工作：
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'AMD YES！' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
}

//检查用户名是否null,可以更新在个性化欢迎信息设置函数位置：
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'AMD YES!' + myName;
  }
}