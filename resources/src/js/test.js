
//target要素を指定
const $key = Array.from(document.querySelectorAll(".key"));

console.log($key);
//特定のkeyがホバーされたら作動させる
//マウスが要素上に入った時
for(let i = 0; i < $key.length; i++) {
    // $key[i].addEventListener('click', );
    $key[i].addEventListener('mouseover', () => {
        // $key.style.background = '#000';
        console.log('aaaa');
      }, false);
}
isHover = () => {

}
// $key.addEventListener('mouseover', () => {
//   $key.style.background = '#000';
// }, false);

//マウスが要素上から離れた時
// $key.addEventListener('mouseleave', () => {
//   $key.style.background = '#0091EA';
// }, false);