let html=document.querySelector("#html"),style=document.querySelector("#style"),string="\n    /*\n    你好，我是刘阳鹏\n    是一名前端新人\n    接下来我想向您展示一下我的前端小案例\n    首先我要准备一个小方框\n    */\n    #div1 {\n        border : 1px solid red;\n        width : 200px;\n        height :200px;\n    }\n    /*\n    接下来我把方框变成一个圆\n    */\n   #div1{\n        border-radius: 50% ;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n        border : none;\n   }\n\n   /*\n   太极有阴阳，左白右黑\n   */\n   #div1{\n    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0% , rgba(255, 255, 255, 1) 50% , rgba(0, 0, 0, 1) 50% , rgba(0, 0, 0, 1) 100% );\n   }\n\n   /*加两个太极眼*/\n\n   #div1::before {\n       width: 100px;\n       height: 100px;\n       top: 0;\n       left: 50% ;\n       transform: translate(-50%);\n       //border: 1px solid red;\n       background: #000 radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n       border-radius: 50%;\n   }\n\n   #div1::after {\n           width: 100px;\n           height: 100px;\n           bottom: 0;\n           left: 50% ;\n           transform: translate(-50% );\n           //border: 1px solid red;\n           background: #fff radial-gradient(circle, rgba(0, 0, 0, 1) 0% , rgba(0, 0, 0, 1) 25% , rgba(255, 255, 255, 1) 25% , rgba(255, 255, 255, 1) 100% );\n           border-radius: 50%;\n   }\n",string2="",n=0,step=()=>{setTimeout((()=>{"\n"===string[n]?string2+="<br>":" "===string[n]?string2+="&nbsp":string2+=string[n],html.innerHTML=string2,style.innerHTML=string.substring(0,n),window.scrollTo(0,999999),n<string.length-1&&(n+=1,step())}),50)};step();
//# sourceMappingURL=index.ea4a3ad3.js.map