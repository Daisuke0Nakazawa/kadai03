// 村上宗隆のスライドショー

const img_src = [
    'img/murakami.jpg',
    'img/murakami2.jpg',
    'img/murakami3.jpg',
    'img/murakami4.jpg'
  ];

  let num = 0;
 
  function slide_time() {
    if (num === 3) {
      num = 0;
     
    } else {
      num++;
    }
    document.getElementById("mune").src = img_src[num];

    
  }

  setInterval(slide_time, 3000);

//   山本由伸のスライドショー

  const img_srcs = [
    'img/yamamoto.jpg',
    'img/yamamoto2.jpg',
    'img/yamamoto3.jpg',
    'img/yamamoto4.webp'
  ];

  let nums = 0;
 
  function slide_times() {
    if (nums === 3) {
      nums = 0;
     
    } else {
      nums++;
    }
    document.getElementById("yama").src = img_srcs[nums];
  }

  setInterval(slide_times, 3000);

//   山田哲人のスライドショー

const img_srca = [
    'img/yamada.jfif',
    'img/yamada2.jfif',
    'img/yamada3.jpg',
    'img/yamada4.jfif'
  ];

  let numa = 0;
 
  function slide_timea() {
    if (numa === 3) {
      numa = 0;
     
    } else {
      numa++;
    }
    document.getElementById("tetsu").src = img_srca[numa];
  }

  setInterval(slide_timea, 3000);
