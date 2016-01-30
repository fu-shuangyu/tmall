
window.onload=function  () {

//选项卡字与内容的匹配,选项卡上换一批的刷新
        var onearr=[];//声明一个数组保存一个选项卡里的所有图片
        var twoarr=[];
        var threearr=[];
        var fourarr=[];
        var remencenter=$(".remencenter");
        var titlexxk=$(".titlexxk");
        

        //将每个图片地址加载进对应的数组
        for (var i = 0; i < 37; i++) {
            onearr.push("./img/tu-"+i+".jpg");
            twoarr.push("./img/tu-"+i+".jpg");
            threearr.push("./img/tu-"+i+".jpg");
            fourarr.push("./img/tu-"+i+".jpg");
        };

        //利用math.random，循环取出24个，
        function randomImg(arr){
            var newarr=[];
            for (var i = 0; i <35; i++) {
                newarr.push(arr[parseInt(Math.random()*35)]);
            };
        return newarr;
        }
        randomImg(onearr);
        //显示24张图片
        var arr=[onearr,twoarr,threearr,fourarr];
        function show (num) {
        var imgarr=randomImg(arr[num]);
           for (var i = 0; i < 24; i++) {
            var divs=document.createElement("div");
            divs.style.cssText="width:132px;height:80px;background:#fff;margin-right:2px;margin-bottom:2px;float:left;position:relative";
            var boxes=document.createAttribute("class");
            boxes.nodeValue="box";
            divs.setAttributeNode(boxes);
            remencenter[num].appendChild(divs);
            var as=document.createElement("a");
            as.href="#";
            divs.appendChild(as);
            var imgs=document.createElement("img");
            imgs.src=imgarr[i];
            imgs.style.cssText="width:90px;height:45px;position:absolute;left:21px;top:17px";
            var imgx=document.createElement("img");
            imgx.src="./img/xin1.png";
            imgx.style.cssText="position:absolute;right:10px;top:10px;display:none";
            var classes=document.createAttribute("class");
            classes.nodeValue="xin";
            imgx.setAttributeNode(classes);
            as.appendChild(imgx);
            as.appendChild(imgs);
           };
        }
        /*show(0);*/
        //遍历所有图片盒子，均追加24个div盒子
        for (var j = 0; j < remencenter.length; j++) {
            show(j);
        };
        //遍历titlexxk
        var flag;
        var now=0;//声明now为0，既从第一个选项卡开始
        for (var i = 0; i < titlexxk.length; i++) {
            titlexxk[i].index=i;
            titlexxk[i].flag=true;
            titlexxk[0].flag=false;
            titlexxk[i].onclick=function(){
                now=this.index;//将点击的选项卡是第几个的数保存在now中
                for (var j = 0; j < remencenter.length; j++) {
                    remencenter[j].style.display="none";
                    titlexxk[j].style.fontWeight="normal";
                    titlexxk[j].style.textDecoration="none";

                }
            remencenter[this.index].style.display="block";
            this.style.fontWeight="bold";
            this.style.textDecoration="underline";
             if(this.flag){//如果当前选项卡的flag为true则显示当前选项卡内容
                show[this.index];
                this.flag=false;
            }
            }
        }


        var btnhuan=$(".btnhuan")[0];
        btnhuan.onclick=function(){
            remencenter[now].innerHTML="";//清空当前所在的选项卡的内容
            show(now);//再次取随机数展示到当前页面
        }
        


//选项卡上♥的显示与隐藏
	var box=getClass("box");
	var xin=getClass("xin");
	for(var i =0;i<box.length;i++){
		box[i].index=i;
		box[i].onmouseover=function(){
			xin[this.index].style.display="block";
		}
		box[i].onmouseout=function(){
			xin[this.index].style.display="none";
		}
	}





//BANNER的轮播
 var imgs=$(".imgs");
 var btn=$(".btn");
 var banbacbox=$(".banbacbox");
 var num=1;
 // var bacoarr=["#B90AF9","#DBDBDB","#FFF701","#DDDDDD","#68D2AE","#FFF701"];
 function move(){
    if(num==6){
        num=0;
    }
 for(var i=0;i<imgs.length;i++){
    imgs[i].style.zIndex=2;
    btn[i].style.background="#333";
    banbacbox[i].style.zIndex=1;
  }
    imgs[num].style.zIndex=3;
    btn[num].style.background="#ff6700";
    banbacbox[num].style.zIndex=3;
    num++;
 }
 var t=setInterval(move,2000);
 for(var j=0;j<btn.length;j++){
     		btn[j].index=j;
     		btn[j].onmouseover=function(){
     			for(var k=0;k<imgs.length;k++){
     				clearInterval(t);
     		    btn[k].style.background="#333";
     				imgs[k].style.zIndex=2;
            banbacbox[k].style.zIndex=1;
     			}
     		imgs[this.index].style.zIndex=3;
     		btn[this.index].style.background="#ff6700";
        banbacbox[this.index].style.zIndex=3;
     		}

     		btn[j].onmouseout=function(){
     			t=setInterval(move,2000);
     			num=this.index+1;
     		}
     	}



//楼层左侧下方轮播

    function aa(a){
        var lc1centerbox=$(".lc1centerbox")[a];
        function moveleft1(){
        animate(lc1centerbox,{left:-90},600,Tween.Linear,function(){
            lc1centerbox.style.left=0;
            var last=getLast(lc1centerbox);
            var first=getFirst(lc1centerbox);
            lc1centerbox.appendChild(first,last);
            });
        }
        function moveright1(){
            var last=getLast(lc1centerbox);
            lc1centerbox.style.left=-90+"px";
            var first=getFirst(lc1centerbox);
            lc1centerbox.insertBefore(last,first);
            animate(lc1centerbox,{left:0},600,Tween.Linear)
        }
        var s1=setInterval(moveleft1,2000);
 
        var left1=$(".lc1jiantou1")[a];
        var right1=$(".lc1jiantou2")[a];
        left1.onmouseover=right1.onmouseover=function(){
            clearInterval(s1);
        }
        left1.onmouseout=right1.onmouseout=function(){
            s1=setInterval(moveleft1,2000);
        }
        left1.onclick=function(){
            moveleft1();
        }
        right1.onclick=function(){
            moveright1();
        }
    }
var lc1centerbox=$(".lc1centerbox");
for (var i = 0; i < lc1centerbox.length; i++) {
        aa(i);
};
    


//搜索框下拉
    var searchpfbox=$(".searchpfbox")[0];
    var flagdown=true;
    var flagup=true;
    var flo=$(".aa");
    var jump=$(".jump")[0];
    var btnnus=$("li",jump);
    //按钮控制滚动条
    for(var k=0;k<btnnus.length;k++){
            btnnus[k].index=k;
            var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
            btnnus[k].onclick=function(){
                animate(obj,{scrollTop:flo[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
            for (var s = 0; s < btnnus.length; s++) {
                btnnus[s].style.background="black";
            };
                btnnus[this.index].style.background="#C40000";
            }
            
            
        }
    
   var f=$(".anxujz");
    window.onscroll=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
     //document.title=obj.scrollTop;

     var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
     //document.title=scrollT;
     //var scrollTo=getScrollT();
     //document.title=scrollTo;
      var scrollT=getScrollT();//获取滚动条距离上面的
      if(scrollT>=400){
        if(flagdown){
            animate(searchpfbox,{top:0},500);
            flagdown=false;
            flagup=true;
            }
        }else{
            if(flagup){
                animate(searchpfbox,{top:-80},500);
                flagup=false;
                flagdown=true;

        }
      }


       //楼层跳转
            if(scrollT>=400){
                jump.style.display="block";
            }else{
                jump.style.display="none";
            }
       //滚动条控制按钮
            for(var i=0;i<flo.length;i++){
                flo[i].t=flo[i].offsetTop;//
                if(flo[i].t<(scrollT+ch/2)){//如果scrollTop大于当前楼层的top
                    for(var j=0;j<btnnus.length;j++){
                        btnnus[j].style.background="black";
                    }
                    btnnus[i].style.background="#C40000";
                }
            }

            
   //按需加载
    var ch=document.documentElement.clientHeight;
    var scrollT=getScrollT();
            for(var i=0;i<f.length;i++){
              if(f[i].offsetTop<scrollT+ch){
                var imgsa=$("img",f[i]);
                for(var j=0;j<imgsa.length;j++){
                    imgsa[j].src=imgsa[j].getAttribute("cc");
                }
            }
        }

  }

//下拉搜索框的文本框
    var tex=$(".pfssin")[0];
     tex.onfocus=function(){
      if(tex.value=="铃儿响 鹿儿跑 圣诞礼物提前购"){
        tex.value="";
      }
     }
     tex.onblur=function(){
     if(tex.value){

     }else{
        tex.value="铃儿响 鹿儿跑 圣诞礼物提前购";
     }
     }


//banner上的文本框
    var htext=$(".htext")[0];
     htext.onfocus=function(){
      if(htext.value=="猫猫狗狗购物狂欢，给它最好的"){
        htext.value="";
      }
     }
     htext.onblur=function(){
     if(htext.value){

     }else{
        htext.value="猫猫狗狗购物狂欢，给它最好的";
     }
     }



//右侧漂浮窗
 var ch=document.documentElement.clientHeight;
 var rightpfkbox=$(".rightpfkbox")[0];
 var oh=rightpfkbox.offsetHeight;
 oh=ch;
 var rightpfk=$("img",rightpfkbox);
 for (var l = 0; l < rightpfk.length;l++) {
    rightpfk[l].index=l;
    rightpfk[l].onmouseover=function(){
         rightpfk[this.index].src=rightpfk[this.index].getAttribute("aa");
       }
    rightpfk[l].onmouseout=function(){
        rightpfk[this.index].src=rightpfk[this.index].getAttribute("bb");
        
       }
 }

 var fdsmall=$(".fdsmall");
 //alert(fdsmall.length);
 var rrbox=$(".rrbox");
 //alert(rrbox.length);
 for (var n = 0; n < rrbox.length; n++) {
        rrbox[n].index=n;
     for (var m = 0; m < fdsmall.length; m++) {
         rrbox[n].onmouseover=function(){
           fdsmall[this.index].style.display="block";
           animate(fdsmall[this.index],{right:28},200,Tween.Linear);
         }
         rrbox[n].onmouseout=function(){
           fdsmall[this.index].style.display="none";
         animate(fdsmall[this.index],{right:45},200,Tween.Linear);
         }
     };
 };
 
//图片的移动
function bb (b) {
var movel=$(".movel")[b];
var imgsm=$("img",movel);
for (var i = 0; i < imgsm.length; i++) {
    imgsm[i].index=i;
    imgsm[i].onmouseover=function(){
        imgsm[this.index].style.cssText="position:relative;left:-3px";
    }
    imgsm[i].onmouseout=function(){
        imgsm[this.index].style.cssText="position:relative;left:0";
    }
}
}

var movel=$(".movel");
for (var i = 0; i < movel.length; i++) {
    bb(i);
}


var wodtbxlbox=$(".wodtbxlbox");
var wdtb=$(".wdtb");
//alert(wdtb.length)
for (var q = 0; q < wdtb.length; q++) {
    wdtb[q].index=q;
    wdtb[q].onmouseover=function(){
        wodtbxlbox[this.index].style.height=70+"px";
        wdtb[this.index].style.background="#fff";
    }
    wdtb[q].onmouseout=function(){
        wodtbxlbox[this.index].style.height=0+"px";
        wdtb[this.index].style.background="";
    }
};


var shoujiban=$("#shoujiban");
shoujiban.onmouseover=function(){
        sjberbox.style.height=105+"px";
        shoujiban.style.background="#fff";
}
shoujiban.onmouseout=function(){
        sjberbox.style.height=0+"px";
        shoujiban.style.background="";
}

var shangjia=$(".shangjia")[0];
var sjzc=$(".sjzc")[0];
shangjia.onmouseover=function(){
        sjzc.style.height=170+"px";
        sjzc.style.width=130+"px";
        shangjia.style.background="#fff";
}
shangjia.onmouseout=function(){
        sjzc.style.width=0+"px";
        sjzc.style.height=0+"px";
        shangjia.style.background="";
}

//banner上的漂浮框
var banpf=$(".banpf");
var bff=$(".bff");
  for (var i = 0; i < bff.length; i++) {
    bff[i].index=i;
    hover(bff[i],function(){
      if(i==0){
        banpf[this.index].style.display="block";
      }
      else{
      clearInterval(t);
      banpf[this.index].style.display="block";
      }
    },function(){
      t=setInterval(move,2000);
      banpf[this.index].style.display="none";
    })
}
for (var m = 0; m < banpf.length; m++) {
  banpf[m].index=m;
  banpf[m].onmouseover=function(){
          banpf[this.index].style.display="block";
        }
  banpf[m].onmouseout=function(){
          banpf[this.index].style.display="none";
        }
}





}