$(function () {
    // window読み込みと共にaimation呼び出し
    // ページ内に該当クラスが存在したら activeクラスを付与
    $(document).ready(function(){
      setTimeout(function(){
                 $(".photo1").addClass("active");
            },0);
            setTimeout(function(){
                 $(".catch1").addClass("active");
            },1000);
            setTimeout(function(){
                 $(".catch2").addClass("active");
            },2000);
            setTimeout(function(){
                 $(".photo1").removeClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch1").removeClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch2").removeClass("active");
            },3000);
        });
           //photo2
           setTimeout(function(){
                 $(".photo2").addClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch3").addClass("active");
            },4000);
            setTimeout(function(){
                 $(".catch4").addClass("active");
            },5000);
                  setTimeout(function(){
                 $(".photo2").removeClass("active");
            },6000);   
            setTimeout(function(){
                 $(".catch3").removeClass("active");
            },6000);
            setTimeout(function(){
                 $(".catch4").removeClass("active");
            },6000);
               //photo3
               setTimeout(function(){
                 $(".photo3").addClass("active");
            },7000);
            setTimeout(function(){
                 $(".catch5").addClass("active");
            },8000);
            setTimeout(function(){
                 $(".catch6").addClass("active");
            },9000);
            //photo3
              setTimeout(function(){
                 $(".photo3").removeClass("active");
            },10000);   
            setTimeout(function(){
                 $(".catch5").removeClass("active");
            },10000);
            setTimeout(function(){
                 $(".catch6").removeClass("active");
            },10000);
  });
  
//setInterval 2回目以降のアニメはこちらを繰り返す。

setInterval(function(){
  //photo1
           setTimeout(function(){
                 $(".photo1").addClass("active");
            },0);
            setTimeout(function(){
                 $(".catch1").addClass("active");
            },1000);
            setTimeout(function(){
                 $(".catch2").addClass("active");
            },2000);
   //photo2
            setTimeout(function(){
                 $(".photo2").addClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch3").addClass("active");
            },4000);
            setTimeout(function(){
                 $(".catch4").addClass("active");
            },5000);
   //photo3
            setTimeout(function(){
                 $(".photo3").addClass("active");
            },7000);
            setTimeout(function(){
                 $(".catch5").addClass("active");
            },8000);
            setTimeout(function(){
                 $(".catch6").addClass("active");
            },9000);
  //クラスを剥奪する
            setTimeout(function(){
                 $(".photo1").removeClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch1").removeClass("active");
            },3000);
            setTimeout(function(){
                 $(".catch2").removeClass("active");
            },3000);
      //photo2
            setTimeout(function(){
                 $(".photo2").removeClass("active");
            },6000);   
            setTimeout(function(){
                 $(".catch3").removeClass("active");
            },6000);
            setTimeout(function(){
                 $(".catch4").removeClass("active");
            },6000);
      //photo3
            setTimeout(function(){
                 $(".photo3").removeClass("active");
            },10000);   
            setTimeout(function(){
                 $(".catch5").removeClass("active");
            },10000);
            setTimeout(function(){
                 $(".catch6").removeClass("active");
            },10000);
    },10000);  