
//target要素を指定
const $key = Array.from(document.querySelectorAll(".key"));
const $whiteKey = Array.from(document.querySelectorAll(".white_inner"));


console.log($whiteKey);
//特定のkeyがホバーされたら作動させる
//マウスが要素上に入った時
for(let i = 0; i < $whiteKey.length; i++) {
    // $whiteKey[i].addEventListener('click', );
    $whiteKey[i].addEventListener('mouseover', () => {
        // $whiteKey[i].style.background = '#000';
        console.log('aaaa');
        anime({
            targets: $whiteKey[i],
            height: '255px',
            easing: 'easeOutQuint',
            direction: 'alternate',
            background: '#417dde',
            duration: 2000,
          })
      }, false);

      $whiteKey[i].addEventListener('mouseleave', () => {
        // $whiteKey[i].style.background = 'none';
        console.log('bbbb');
        anime({
            targets: $whiteKey[i],
            height: '0px',
            easing: 'easeOutQuint',
            duration: 2000,
            // direction: 'nomal',
            background: 'none'
          })
      }, false);
}

//色を工夫する
//アニメーションを工夫する
//音をつける
