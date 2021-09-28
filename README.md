# MV_slider_animation
MV slider animation with jQuery

Sample is here.
https://wakasato.github.io/MV_slider_animation/

This is my jQuery codes for MV slider animation which has moving child elements inside photo.
There are many simple slider liberary that can slide each images.
Those aren't enough for my project.
I wanted to move also child elements inside images.

It's need SetInterval method for looping animations.
In addition, It also need documentReady method.
Because setIntarval method doesn't start when window open.
It starts after a lapse time which function has.

So, I made DocumentReady method executed once before setInterval method start.

It's readly simple function. 
But If you would make from scratch, It could be tiring.
That's why I shared this code.


Japanese translation-------
写真の中の子要素が動く、MVスライダーアニメーションのjQueryコードです。
サンプルは以下です。
https://wakasato.github.io/MV_slider_animation/

各画像をスライドさせるだけのシンプルなスライダーライブラリはたくさんあります。
自分の案件で、それでは不十分なものがありました。
画像の中の子要素も動かす必要があったのです。

アニメーションをループさせるにはSetIntervalメソッドが必要です。
加えて、documentReadyメソッドも必要でした。
なぜなら、setIntarvalメソッドは、ウィンドウが開いたときには開始されないからです。
setIntarvalメソッドは、ウィンドウが開いたときに開始するのではなく、関数が持っている遅延時間後に開始されます。

そこで、setIntarvalメソッドが始まる前に、DocumentReadyメソッドを一度実行するようにしました。

極めてシンプルな関数です。
しかし、いちから書くとなると面倒です。
そこで、公開することにしました。
