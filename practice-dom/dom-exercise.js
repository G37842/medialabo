//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム


// 練習4-3 写真表作成プログラム


// 練習4-4 箇条書き削除プログラム


// 練習4-5 箇条書き追加プログラム

let p = document.createElement('p');

p.textContent = '写真表と都市の緯度経度のページです';
"写真表と都市の緯度経度のページです"
p.style.textEmphasis='sesame green';
"sesame green"
let h2 = document.querySelector('h2#ex42'); 
h2 = document.querySelector('h2#ex42');


h2.insertAdjacentElement('afterend', p);


let div = document.querySelector('div#phototable');
undefined
let x = document.createElement('p');
undefined
div.insertAdjacentElement('afterend', x);


let img = document.createElement('img');

img.setAttribute('src', 'taro.png');

div.insertAdjacentElement('beforeend', img); 

x.insertAdjacentElement('beforeend', img);


let x2 = document.createElement('p');

x.insertAdjacentElement('afterend', x2);


let img2 = document.createElement('img');

img2.setAttribute('src', 'jiro.png');

x2.insertAdjacentElement('beforeend', img2); 


let x3 = document.createElement('p');

x2.insertAdjacentElement('afterend', x3);


let img3 = document.createElement('img');

img3.setAttribute('src', 'hanako.png');

x3.insertAdjacentElement('beforeend', img3); 
// 練習4-4 箇条書き削除プログラム
let re = document.querySelectorAll('ul#location > li');
for (var li of listItems) {
    
    li.remove();
}
