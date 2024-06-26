// 答え
let kotae = Math.floor(Math.random()*4) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("予想の数字を入力して下さい");
  button.textContent = `予想したのは : ${name}`;
}

  

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  function hantei() {
    let yoso = 4;
    kaisu++; 
    console.log(kaisu + '回目の予想: ' + yoso);

    if (yoso === kotae && kaisu==1) {
      console.log('正解です。おめでとう！');
    }
      else if(yoso === kotae ){
        console.log('答えは ' + kotae + ' でした。すでにゲームは終わっています。');
      }
    else if (kaisu >= 4) {
      console.log('答えは ' + kotae + ' でした。すでにゲームは終わっています。');
    } else {
      if (kaisu === 3) {
        console.log('まちがい．残念でした。答えは ' + kotae + ' です．');
      } else if (kaisu <= 2) {
        if (yoso < kotae) {
          console.log('まちがい．答えはもっと大きいですよ．');
        } else if (yoso > kotae) {
          console.log('まちがい．答えはもっと小さいですよ．');
        }
      }
    }
  }
  