// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let yoso =0;

let  b = document.querySelector('#print');
b.addEventListener("click", updateName);
b.addEventListener("click", hantei);

/*
const button = document.querySelector("button");
function updateName() {
  const name = prompt("予想の数字を入力して下さい");
  button.textContent = ` :${name}`;
  yoso = name;
  let ys = document.querySelector('span#yoso');
  ys.textContent = yoso;
}*/
function updateName(){
  let i = document.querySelector('input[name="shimei"]');
  yoso = i.value;
  let ys = document.querySelector('span#yoso');
  ys.textContent = yoso;
}

function hantei() {
  kaisu++;
  let ks = document.querySelector('span#kaisu');
  ks.textContent = kaisu;
  console.log(kaisu + '回目の予想: ' + yoso);

    if (yoso == kotae && kaisu<4) {
      let as  = document.querySelector('p#result');
      as.textContent= '正解です。おめでとう！';
    }
    else if (kaisu >= 4) {
      let as  = document.querySelector('p#result');
      as.textContent= '答えは ' + kotae + ' でした。すでにゲームは終わっています。';
    } 
    else if (yoso < kotae && kaisu<4) {
          let as  = document.querySelector('p#result');
          as.textContent= 'まちがい．答えはもっと大きいですよ．';
        } 
    else if (yoso > kotae && kaisu<4) {
          
          let as  = document.querySelector('p#result');
          as.textContent= 'まちがい．答えはもっと小さいですよ';
        }
      }
  
  