window.onload=function (ev) {
    let startX,//触摸时的坐标
        startY,
        x, //滑动的距离
        y,
        aboveY=0, //设一个全局变量记录上一次内部块滑动的位置
        aboveX=0;

    let height=document.body.clientHeight;
    // console.log(width);
    let box=document.getElementById('myApp');
    let boxheight=box.offsetHeight;
    console.log(boxheight);
    function touchSatrt(e){//触摸

        e.preventDefault();   // 取消原本的事件
        let touch = e.touches[0];  // 当前位于屏幕上的所有手指的一个列表
        // console.log(e.touches[0]);
        startY = touch.pageY;   //刚触摸时的坐标
        startX = touch.pageX;   //刚触摸时的坐标
        // console.log(startX,startY)
    }
    function touchMove(e){//滑动
        e.preventDefault();      // 取消原本的事件
        let  touch = e.touches[0];
        // console.log(e.touches[0]);
        y = touch.pageY - startY;//滑动的距离
        x = touch.pageX - startX;//滑动的距离
        // box.style.webkitTransform = 'translate(' + 0+ 'px, ' + y + 'px)';  //也可以用css3的方式
        // box.style.top= aboveY +y+"px"; //这一句中的aboveY是inner上次滑动后的位置
        box.style.top=aboveY +y+'px';
    }
    function touchEnd(e){//手指离开屏幕
        e.preventDefault();
        if((aboveY=parseInt(box.style.top))>height-boxheight){
            // console.log(13)
            box.style.top=height-boxheight+'px';
            aboveY=box.style.top;
            // console.log(aboveY);
        }else {
            aboveY=parseInt(box.style.top);
        }
        console.log(aboveY);
        // aboveY=parseInt(box.style.top);//touch结束后记录内部滑块滑动的位置 在全局变量中体现 一定要用parseInt()将其转化为整数字;

    }//

    document.getElementById('myApp').addEventListener('touchstart',touchSatrt,false);
    document.getElementById('myApp').addEventListener('touchmove',touchMove,false);
    document.getElementById('myApp').addEventListener('touchend',touchEnd,false);
};