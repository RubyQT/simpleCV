let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `
    /*
    你好，我是刘阳鹏
    是一名前端新人
    接下来我想向您展示一下我的前端小案例
    首先我要准备一个小方框
    */
    #div1 {
        border : 1px solid red;
        width : 200px;
        height :200px;
    }
    /*
    接下来我把方框变成一个圆
    */
   #div1{
        border-radius: 50% ;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        border : none;
   }

   /*
   太极有阴阳，左白右黑
   */
   #div1{
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0% , rgba(255, 255, 255, 1) 50% , rgba(0, 0, 0, 1) 50% , rgba(0, 0, 0, 1) 100% );
   }

   /*加两个太极眼*/

   #div1::before {
       width: 100px;
       height: 100px;
       top: 0;
       left: 50% ;
       transform: translate(-50%);
       //border: 1px solid red;
       background: #000 radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
       border-radius: 50%;
   }

   #div1::after {
           width: 100px;
           height: 100px;
           bottom: 0;
           left: 50% ;
           transform: translate(-50% );
           //border: 1px solid red;
           background: #fff radial-gradient(circle, rgba(0, 0, 0, 1) 0% , rgba(0, 0, 0, 1) 25% , rgba(255, 255, 255, 1) 25% , rgba(255, 255, 255, 1) 100% );
           border-radius: 50%;
   }
`;

let string2 = "";
let n = 0

let step = () => {
    setTimeout(() => {
        //是回车，加br
        //否则复制文字
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        // 让最下行自动滚动出来
        window.scrollTo(0, 999999)
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50)
}

step()