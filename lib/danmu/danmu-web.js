// JavaScript Document
var barrageBox = document.querySelector('.barrage-box');
var wWidth = window.innerWidth > 640 ? 640 : window.innerWidth;
var during = parseInt(wWidth / 640 * 20000);
var positionX = parseInt(3.5 * (wWidth / 640) * 100);
var index = 0;
        var text = ['Alix','南吕壹拾柒','Maykike','Peter',
            'koi','z','CC',
            'WHXY',
            'sss','Jacksoneaton'
        ];
        var query=function(elem){
    var elem = elem,
        f=j=0,callback,_this={},
        tween=function(t,b,c,d){return -c*(t/=d)*(t-2) + b}


    _this.execution=function(key,val,t){
        var s=(new Date()).getTime(),d=t || 500,
            b=parseInt(elem.style[key]) || 0,
            c=val-b;
        (function(){
            var t=(new Date()).getTime()-s;
            if(t>d){
                t=d;
                if(key == 'zIndex'){
                    elem.style[key]=tween(t,b,c,d);
                }else{
                    elem.style[key]=tween(t,b,c,d)+'px';
                }
                ++f==j&&callback&&callback.apply(elem);
                return _this;
            }


            if(key == 'zIndex'){
                elem.style[key]=tween(t,b,c,d);
            }else{
                elem.style[key]=tween(t,b,c,d)+'px';
            }
            setTimeout(arguments.callee,10);
        })();


    }
    _this.animate=function(sty,t,fn){
        callback=fn;
        for(var i in sty){
            j++;
            _this.execution(i,parseInt(sty[i]),t);
        }
    }
    return _this;
};
        function getRandomColor(){
            var colorArr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
            var color = "";
            for(var i = 0; i < 6; i++){
                color += colorArr[Math.floor(Math.random()*15)];
            }
            return "#"+color;
        }
        function getTop(){
            var top = Math.floor(Math.random()* barrageBox.clientHeight);
            var distance = parseInt(40 * wWidth / 640)
            return top -distance < 0 ? 0 : top - distance;
        }
        function showText(){
            var oneSpan = document.createElement("span");
            oneSpan.innerHTML = text[index];
            oneSpan.style.position = "absolute";
            oneSpan.style.left = wWidth + "px";
            oneSpan.style.top = getTop() + "px";
            oneSpan.style.color = getRandomColor();
            document.querySelector(".barrage-box").appendChild(oneSpan);
            query(oneSpan).animate({'left':-positionX},during);
            index++;
            if(index >= text.length){
                index = 0
            }
            var timer = setTimeout(showText,800)
        }
        showText();