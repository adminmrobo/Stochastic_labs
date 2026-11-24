/* 위젯 모음 1: 공용 도우미 + 01~04장 (확률변수 · 확률과정 · 정보 · 브라운 운동) */
var W={},DUELS={};
(function(){
'use strict';
var NS='http://www.w3.org/2000/svg';
function E(tag,at,par){var e=document.createElementNS(NS,tag);for(var k in at)e.setAttribute(k,at[k]);if(par)par.appendChild(e);return e;}
function H(tag,cls,html,par){var e=document.createElement(tag);if(cls)e.className=cls;if(html!=null)e.innerHTML=html;if(par)par.appendChild(e);return e;}
function svg(el,w,h,label){var s=E('svg',{viewBox:'0 0 '+w+' '+h,width:'100%',role:'img','aria-label':label||'설명 그림'});s.style.maxWidth=w+'px';el.appendChild(s);return s;}
function clear(s){while(s.firstChild)s.removeChild(s.firstChild);}
function ctrl(el){return H('div','ctrl',null,el);}
function btn(par,label,on,pressed){var b=H('button','bt',label,par);b.type='button';if(pressed!=null)b.setAttribute('aria-pressed',pressed?'true':'false');b.onclick=function(){on(b);};return b;}
function radio(par,label,opts,cur,on){H('span','glabel',label,par);var bs=opts.map(function(o){return btn(par,o[1],function(b){bs.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});on(o[0]);},o[0]===cur);});return bs;}
function slider(par,label,min,max,step,val,on){H('span','glabel',label,par);var r=H('input',null,null,par);r.type='range';r.min=min;r.max=max;r.step=step;r.value=val;r.setAttribute('aria-label',label);var v=H('span','val','',par);function u(){v.textContent=on(+r.value)||'';}r.oninput=u;Promise.resolve().then(u);return r;}
function out(el){var o=H('div','insight',null,el);o.setAttribute('aria-live','polite');return o;}
function tx(s,x,y,t,at){var e=E('text',Object.assign({x:x,y:y,'font-size':13,fill:'#16212b','font-family':'inherit'},at||{}),s);e.textContent=t;return e;}
/* 난수: 씨앗이 같으면 같은 결과 (설명이 매번 같게) */
function rng(seed){var s=(seed>>>0)||1;return function(){s^=s<<13;s>>>=0;s^=s>>17;s^=s<<5;s>>>=0;return s/4294967296;};}
function gauss(R){var u=R()||1e-9,v=R();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
/* 브라운 운동 한 경로: n걸음, 끝 시각 T */
function bm(R,n,T){var dt=T/n,w=[0],sd=Math.sqrt(dt);for(var i=0;i<n;i++)w.push(w[i]+sd*gauss(R));return w;}
function walk(R,n){var w=[0];for(var i=0;i<n;i++)w.push(w[i]+(R()<0.5?-1:1));return w;}
function mean(a){var s=0;for(var i=0;i<a.length;i++)s+=a[i];return s/a.length;}
function vari(a){var m=mean(a),s=0;for(var i=0;i<a.length;i++)s+=(a[i]-m)*(a[i]-m);return s/a.length;}
function npdf(x,m,v){return Math.exp(-(x-m)*(x-m)/(2*v))/Math.sqrt(2*Math.PI*v);}
function Phi(z){var t=1/(1+0.2316419*Math.abs(z)),d=0.3989423*Math.exp(-z*z/2),p=d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));return z>0?1-p:p;}
function f2(x,d){return (+x).toFixed(d==null?2:d);}
/* 좌표판: (x0,y0) 왼쪽 위, w×h, 범위 xr·yr */
function plot(s,x0,y0,w,h,xr,yr,o){o=o||{};var X=function(x){return x0+(x-xr[0])/(xr[1]-xr[0])*w;},Y=function(y){return y0+h-(y-yr[0])/(yr[1]-yr[0])*h;};
  E('rect',{x:x0,y:y0,width:w,height:h,fill:'#fff',stroke:C.rule},s);
  if(yr[0]<0&&yr[1]>0)E('line',{x1:x0,x2:x0+w,y1:Y(0),y2:Y(0),stroke:C.rule,'stroke-dasharray':'3 3'},s);
  if(o.xl)tx(s,x0+w-2,y0+h+16,o.xl,{'text-anchor':'end','font-size':12,fill:C.mu});
  if(o.yl)tx(s,x0+4,y0+14,o.yl,{'font-size':12,fill:C.mu});
  if(o.xt)o.xt.forEach(function(v){tx(s,X(v),y0+h+16,String(v),{'text-anchor':'middle','font-size':11,fill:C.mu});});
  if(o.yt)o.yt.forEach(function(v){tx(s,x0-4,Y(v)+4,String(v),{'text-anchor':'end','font-size':11,fill:C.mu});});
  return {X:X,Y:Y};}
function pline(s,P,xs,ys,at){var d='';for(var i=0;i<ys.length;i++)d+=(i?'L':'M')+P.X(xs(i)).toFixed(1)+' '+P.Y(ys[i]).toFixed(1);return E('path',Object.assign({d:d,fill:'none',stroke:C.acc,'stroke-width':1.2},at||{}),s);}
function hist(a,lo,hi,k){var c=[];for(var i=0;i<k;i++)c.push(0);a.forEach(function(v){var j=Math.floor((v-lo)/(hi-lo)*k);if(j>=0&&j<k)c[j]++;});return c;}
var C={g:'#13733a',m:'#9b3fb5',r:'#c9302c',a:'#a35c00',b:'#1e55c8',k:'#16212b',mu:'#5b6874',rule:'#d5dbe2',acc:'#2f6f8f',lt:'rgba(47,111,143,.28)'};
window.WC=C;
window.WU={E:E,H:H,svg:svg,clear:clear,ctrl:ctrl,btn:btn,radio:radio,slider:slider,out:out,tx:tx,rng:rng,gauss:gauss,bm:bm,walk:walk,mean:mean,vari:vari,npdf:npdf,Phi:Phi,f2:f2,plot:plot,pline:pline,hist:hist};

/* ── 01장 ── */
/* 주사위: 던질수록 평균이 3.5 근처로 */
W.dice=function(el,o){
  var R=rng(11),cnt=[0,0,0,0,0,0],n=0,sum=0,hist1=[],s=svg(el,640,230,'주사위 눈별 횟수 막대와 평균의 변화');
  var c=ctrl(el);[1,10,100,1000].forEach(function(k){btn(c,k+'번 던지기',function(){for(var i=0;i<k;i++){var v=1+Math.floor(R()*6);cnt[v-1]++;n++;sum+=v;if(n<=2000)hist1.push(sum/n);}draw();});});
  btn(c,'처음부터',function(){cnt=[0,0,0,0,0,0];n=0;sum=0;hist1=[];draw();});
  var ot=out(el);
  function draw(){clear(s);var mx=Math.max(1,Math.max.apply(null,cnt));
    tx(s,20,18,'눈별 나온 횟수',{'font-size':12,fill:C.mu});
    for(var i=0;i<6;i++){var h=150*cnt[i]/mx;E('rect',{x:30+i*44,y:190-h,width:34,height:h,fill:C.acc,rx:3},s);tx(s,47+i*44,208,String(i+1),{'text-anchor':'middle'});tx(s,47+i*44,186-h,String(cnt[i]),{'text-anchor':'middle','font-size':11,fill:C.mu});}
    var P=plot(s,330,24,290,166,[0,Math.max(10,hist1.length)],[1,6],{xl:'던진 횟수',yl:'지금까지 평균',yt:[1,3.5,6]});
    E('line',{x1:330,x2:620,y1:P.Y(3.5),y2:P.Y(3.5),stroke:C.g,'stroke-dasharray':'5 4'},s);
    if(hist1.length)pline(s,P,function(i){return i+1;},hist1,{stroke:C.r,'stroke-width':1.6});
    ot.innerHTML=n?('던진 횟수 <b>'+n+'</b>번 · 지금까지 평균 <b>'+f2(sum/n)+'</b> · 이론 평균(기댓값) <b>3.5</b>'+(n>=100?' — 많이 던질수록 3.5에 가까워져요.':' — 아직 적게 던져서 들쭉날쭉해요.')):'단추를 눌러 주사위를 던져 보세요. 오른쪽 그래프는 「지금까지의 평균」이에요.';}
  draw();};

/* 같은 평균, 다른 퍼짐 */
W.spread=function(el,o){
  var G={A:{n:'게임 A (상금 4·5·6)',v:[4,5,6]},B:{n:'게임 B (상금 0·5·10)',v:[0,5,10]}},cur=o.g||'B',s=svg(el,640,190,'상금 점과 평균에서 떨어진 거리');
  var c=ctrl(el);radio(c,'게임:',[['A',G.A.n],['B',G.B.n]],cur,function(v){cur=v;draw();});var ot=out(el);
  function draw(){clear(s);var v=G[cur].v,m=mean(v),P=plot(s,30,40,580,60,[0,10],[0,1],{xt:[0,2,4,5,6,8,10]});
    E('line',{x1:P.X(m),x2:P.X(m),y1:30,y2:110,stroke:C.g,'stroke-width':2,'stroke-dasharray':'5 4'},s);tx(s,P.X(m),26,'평균 '+m,{'text-anchor':'middle',fill:C.g,'font-weight':700});
    var rows=[];v.forEach(function(x,i){E('circle',{cx:P.X(x),cy:70,r:9,fill:C.b},s);var d=x-m;
      E('line',{x1:P.X(m),x2:P.X(x),y1:130+i*18,y2:130+i*18,stroke:C.r,'stroke-width':4},s);tx(s,620,134+i*18,'('+x+'−'+m+')² = '+d*d,{'text-anchor':'end','font-size':12});rows.push(d*d);});
    var va=mean(rows);ot.innerHTML=G[cur].n+': 평균 <b>'+m+'</b> · 거리 제곱의 평균(분산) = ('+rows.join(' + ')+') ÷ 3 = <b>'+f2(va)+'</b> · 표준편차 √분산 = <b>'+f2(Math.sqrt(va))+'</b>. '+(cur==='A'?'평균은 같지만 덜 퍼져 있어요.':'평균은 같지만 훨씬 많이 퍼져 있어요.');}
  draw();};

/* 동전 걸음 한 경로 */
W.walk1=function(el,o){
  var R=rng(5),w=[0],s=svg(el,640,230,'동전 걸음 위치 그래프');var c=ctrl(el);
  btn(c,'동전 1번',function(){add(1);});btn(c,'10번',function(){add(10);});btn(c,'새 경로',function(){w=[0];R=rng(Math.floor(Math.random()*1e9));draw();});
  var ot=out(el),N=o.n||40;
  function add(k){for(var i=0;i<k&&w.length<=N;i++)w.push(w[w.length-1]+(R()<0.5?-1:1));draw();}
  function draw(){clear(s);var P=plot(s,40,14,580,180,[0,N],[-12,12],{xl:'동전 던진 횟수 (시간)',yl:'위치',yt:[-10,0,10],xt:[0,10,20,30,40]});
    pline(s,P,function(i){return i;},w,{stroke:C.r,'stroke-width':2});
    E('circle',{cx:P.X(w.length-1),cy:P.Y(w[w.length-1]),r:5,fill:C.r},s);var n=w.length-1;
    ot.innerHTML=n?('지금까지 <b>'+n+'</b>번 던짐 · 현재 위치 <b>'+w[n]+'</b> · 갈 수 있었던 범위 '+(-n)+' ~ '+n+'. 앞면이면 +1, 뒷면이면 −1이에요.'):'「동전 1번」을 눌러 걸음을 시작하세요. 앞면 +1(위로), 뒷면 −1(아래로).';}
  draw();};

/* ── 02장 ── */
/* 경로 묶음: ω 고정(경로) / t 고정(단면 분포) */
W.paths=function(el,o){
  var M=o.m||40,N=o.n||60,R=rng(o.seed||21),P_=[];for(var j=0;j<M;j++)P_.push(walk(R,N));
  var st={w:0,t:o.t||40},mode=o.mode||'both',s=svg(el,640,250,'여러 경로와 고른 시각의 분포');var c=ctrl(el);
  if(mode!=='slice')slider(c,'경로 고르기(ω):',0,M-1,1,0,function(v){st.w=v;draw();return '경로 #'+(v+1);});
  if(mode!=='path')slider(c,'시각 고르기(t):',1,N,1,st.t,function(v){st.t=v;draw();return 't = '+v;});
  var ot=out(el);
  function draw(){clear(s);var P=plot(s,36,14,440,200,[0,N],[-22,22],{xl:'시간 t',yl:'위치 X',yt:[-20,0,20]});
    P_.forEach(function(w,j){if(mode==='slice'||j!==st.w)pline(s,P,function(i){return i;},w,{stroke:C.lt,'stroke-width':1});});
    if(mode!=='slice')pline(s,P,function(i){return i;},P_[st.w],{stroke:C.r,'stroke-width':2.4});
    var vals=P_.map(function(w){return w[st.t];});
    if(mode!=='path'){E('line',{x1:P.X(st.t),x2:P.X(st.t),y1:14,y2:214,stroke:C.k,'stroke-dasharray':'4 3'},s);
      vals.forEach(function(v){E('circle',{cx:P.X(st.t),cy:P.Y(v),r:3,fill:C.b},s);});
      var hs=hist(vals,-22,22,22),mx=Math.max.apply(null,hs);tx(s,500,12,'t = '+st.t+'에서의 위치 분포',{'font-size':12,fill:C.mu});
      hs.forEach(function(h,i){var y=P.Y(-22+(i+1)*2);E('rect',{x:500,y:y,width:120*h/mx,height:P.Y(-22+i*2)-y-1,fill:C.b,opacity:.7},s);});}
    var m=mean(vals);
    if(mode==='path')ot.innerHTML='경로 #'+(st.w+1)+'을 골랐어요(ω 고정). 이 경로는 시간마다 값이 정해진 <b>그래프 한 줄</b>이에요. 끝 위치 = <b>'+P_[st.w][N]+'</b>.';
    else ot.innerHTML='t = '+st.t+'에서 경로 '+M+'개의 값을 모으면 <b>분포 하나</b>가 돼요(t 고정 = 확률변수). 평균 <b>'+f2(m,1)+'</b>, 표준편차 <b>'+f2(Math.sqrt(vari(vals)),1)+'</b> (이론 √'+st.t+' ≈ '+f2(Math.sqrt(st.t),1)+')'+(mode==='both'?' · 빨간 선은 고른 경로 #'+(st.w+1):'')+'.';}
  draw();};

/* X(t, ω) 표: 줄 = 경로, 열 = 확률변수 */
W.xtable=function(el,o){
  var seqs=['앞앞앞','앞뒤앞','뒤앞뒤','뒤뒤뒤','앞앞뒤','뒤뒤앞','앞뒤뒤','뒤앞앞'],rows=seqs.map(function(q){var w=[0];for(var i=0;i<3;i++)w.push(w[i]+(q[i]==='앞'?1:-1));return w;});
  var sel={r:-1,c:-1},box=H('div','tw',null,el),ot=out(el);
  function draw(){var h='<table class="tb"><thead><tr><th>ω (동전 결과)</th>';for(var t=0;t<=3;t++)h+='<th><button type="button" class="bt" data-c="'+t+'" aria-pressed="'+(sel.c===t)+'">t = '+t+'</button></th>';h+='</tr></thead><tbody>';
    rows.forEach(function(w,r){h+='<tr'+(sel.r===r?' style="background:rgba(201,48,44,.08)"':'')+'><td><button type="button" class="bt" data-r="'+r+'" aria-pressed="'+(sel.r===r)+'">'+seqs[r]+'</button></td>';
      w.forEach(function(v,t){h+='<td style="text-align:center;'+(sel.c===t?'background:rgba(30,85,200,.10);font-weight:700':'')+'">'+v+'</td>';});h+='</tr>';});
    box.innerHTML=h+'</tbody></table>';
    [].forEach.call(box.querySelectorAll('[data-r]'),function(b){b.onclick=function(){sel.r=+b.dataset.r;sel.c=-1;draw();};});
    [].forEach.call(box.querySelectorAll('[data-c]'),function(b){b.onclick=function(){sel.c=+b.dataset.c;sel.r=-1;draw();};});
    if(sel.r>=0)ot.innerHTML='줄을 골랐어요(ω = '+seqs[sel.r]+' 고정) → 0, 1, 2, 3 시각의 위치 <b>'+rows[sel.r].join(' → ')+'</b>. 이것이 <b>경로</b>예요.';
    else if(sel.c>=0){var cnt={};rows.forEach(function(w){cnt[w[sel.c]]=(cnt[w[sel.c]]||0)+1;});var ks=Object.keys(cnt).map(Number).sort(function(a,b){return a-b;});
      ot.innerHTML='열을 골랐어요(t = '+sel.c+' 고정) → 8가지 결과 중 '+ks.map(function(k){return '<b>'+k+'</b>이(가) '+cnt[k]+'/8';}).join(', ')+'. 이것이 <b>확률변수</b> X<sub>'+sel.c+'</sub>의 분포예요.';}
    else ot.innerHTML='줄(경로)의 단추나 열(시각)의 단추를 눌러 보세요. 같은 표를 가로로 읽으면 경로, 세로로 읽으면 확률변수예요.';}
  draw();};

/* ── 03장 ── */
/* 정보가 쌓이는 모습: 동전 4개를 하나씩 공개 */
W.info=function(el,o){
  var truth=['앞','뒤','앞','앞'],t=0,s=H('div',null,null,el),c=ctrl(el);
  slider(c,'지금 시각 t (공개된 동전 수):',0,4,1,0,function(v){t=v;draw();return 't = '+v;});var ot=out(el);
  var Q=[['첫 동전이 앞면인가?',1,function(q){return q[0]==='앞';}],['앞면이 2개 이상 나왔나?',0,function(q){return q.filter(function(x){return x==='앞';}).length>=2;}],
    ['마지막(4번째) 동전이 앞면인가?',4,function(q){return q[3]==='앞';}],['처음 두 동전이 같은가?',2,function(q){return q[0]===q[1];}]];
  function all(){var a=[];for(var m=0;m<16;m++)a.push([0,1,2,3].map(function(i){return m>>(3-i)&1?'뒤':'앞';}));return a;}
  function draw(){var A=all().filter(function(q){for(var i=0;i<t;i++)if(q[i]!==truth[i])return false;return true;});
    var h='<div class="ctrl">';truth.forEach(function(v,i){h+='<span class="tag '+(i<t?'nn':'fly')+'" style="font-size:16px;min-width:56px;text-align:center">'+(i<t?v:'?')+'</span>';});h+='</div>';
    h+='<div class="tw"><table class="tb"><thead><tr><th>질문</th><th>지금 답할 수 있나</th></tr></thead><tbody>';
    Q.forEach(function(q){var vals=A.map(q[2]),known=vals.every(function(x){return x===vals[0];});h+='<tr><td>'+q[0]+'</td><td>'+(known?'<b style="color:var(--gfp)">예 — '+(vals[0]?'그렇다':'아니다')+'</b>':'<span style="color:var(--eye)">아직 모름</span>')+'</td></tr>';});
    s.innerHTML=h+'</tbody></table></div>';
    ot.innerHTML='지금까지 공개된 정보와 맞는 결과는 <b>'+A.length+'가지</b>(처음 16가지). 시간이 갈수록 후보가 16 → 8 → 4 → 2 → 1로 줄어요. 한 번 답할 수 있게 된 질문은 다시 「모름」이 되지 않아요 — 정보는 쌓이기만 합니다.';}
  draw();};

/* 미래 엿보기 금지: 세 전략의 누적 수익 */
W.adapted=function(el,o){
  var seed=7,rule=o.rule||'past',s=svg(el,640,230,'세 전략의 누적 수익');var c=ctrl(el);
  radio(c,'전략:',[['peek','내일 오르면 오늘 산다'],['past','어제 올랐으면 오늘 산다'],['always','매일 산다']],rule,function(v){rule=v;draw();});
  var c2=ctrl(el);btn(c2,'다른 날씨(새 시뮬레이션)',function(){seed++;draw();});var ot=out(el);
  function run(rl,R){var up=[];for(var i=0;i<201;i++)up.push(R()<0.5?1:-1);var p=[0];for(var d=1;d<200;d++){var buy=rl==='always'?1:rl==='past'?(up[d-1]>0?1:0):(up[d]>0?1:0);p.push(p[d-1]+buy*up[d]);}return p;}
  function draw(){clear(s);var P=plot(s,40,14,580,180,[0,200],[-40,110],{xl:'날짜',yl:'누적 수익(원)',yt:[-40,0,50,100]}),res={};
    ['peek','past','always'].forEach(function(r){var p=run(r,rng(seed));res[r]=p[p.length-1];pline(s,P,function(i){return i;},p,{stroke:r===rule?C.r:C.lt,'stroke-width':r===rule?2.4:1.2});});
    var nm={peek:'내일 오르면 오늘 산다',past:'어제 올랐으면 오늘 산다',always:'매일 산다'};
    ot.innerHTML='「'+nm[rule]+'」 200일 누적 수익 <b>'+res[rule]+'원</b>. '+(rule==='peek'?'<b style="color:var(--eye)">적합하지 않은 전략</b> — 오늘 결정에 내일 정보를 썼어요. 현실에서는 불가능하니 이 수익은 가짜예요.':'<b style="color:var(--gfp)">적합한 전략</b> — 오늘까지의 정보만 썼어요. 공정한 동전이면 길게 보면 0 근처예요.');}
  draw();};

/* ── 04장 ── */
/* 걸음 쪼개기: 시간 간격을 잘게 하고 걸음 크기를 1/√n으로 */
W.zoom=function(el,o){
  var st={n:o.n||4,k:o.k||'sqrt'},s=svg(el,640,230,'잘게 쪼갠 무작위 걸음 경로들');var c=ctrl(el);
  var ns=[1,4,16,64,256];slider(c,'1초를 몇 걸음으로 쪼갤까 n:',0,4,1,ns.indexOf(st.n),function(v){st.n=ns[v];draw();return 'n = '+st.n;});
  var c2=ctrl(el);radio(c2,'한 걸음 크기:',[['sqrt','1/√n'],['lin','1/n']],st.k,function(v){st.k=v;draw();});var ot=out(el);
  function draw(){clear(s);var T=4,n=st.n,step=st.k==='sqrt'?1/Math.sqrt(n):1/n,R=rng(3),P=plot(s,40,14,580,180,[0,T],[-5,5],{xl:'시간(초)',yl:'위치',yt:[-4,0,4],xt:[0,1,2,3,4]}),ends=[];
    for(var j=0;j<400;j++){var w=[0];for(var i=0;i<n*T;i++)w.push(w[i]+(R()<0.5?-step:step));ends.push(w[n]);if(j<6)pline(s,P,function(i){return i/n;},w,{stroke:j?C.lt:C.r,'stroke-width':j?1.2:2});}
    var sd=Math.sqrt(vari(ends));ot.innerHTML='n = '+n+', 걸음 크기 '+(st.k==='sqrt'?'1/√'+n:'1/'+n)+' = '+f2(step,3)+' → 1초 뒤 위치의 표준편차 <b>'+f2(sd)+'</b> (경로 400개). '+(st.k==='sqrt'?'n을 바꿔도 퍼짐이 약 1로 그대로예요. 그래서 n을 끝없이 키운 모습이 브라운 운동이에요.':'n을 키울수록 퍼짐이 0으로 줄어 움직임이 사라져요. 걸음 크기는 1/√n이어야 해요.');}
  draw();};

/* 독립 증분: W_t − W_s 의 분포 */
W.incr=function(el,o){
  var st={s:1,g:1},s=svg(el,640,230,'증분 분포 막대와 정규분포 곡선');var c=ctrl(el);
  slider(c,'시작 s:',0,3,0.5,1,function(v){st.s=v;draw();return 's = '+v;});slider(c,'간격 t − s:',0.25,4,0.25,1,function(v){st.g=v;draw();return 't − s = '+v;});var ot=out(el);
  function draw(){clear(s);var R=rng(17),a=[],b=[],n=64;for(var j=0;j<1500;j++){var T=st.s+st.g,w=bm(R,Math.round(T*n),T),i1=Math.round(st.s*n);a.push(w[w.length-1]-w[i1]);b.push(w[i1]);}
    var lim=6,k=40,hs=hist(a,-lim,lim,k),bw=2*lim/k,P=plot(s,40,14,580,180,[-lim,lim],[0,0.85],{xl:'증분 W(t) − W(s)',xt:[-6,-3,0,3,6]});
    hs.forEach(function(h,i){var d=h/a.length/bw;E('rect',{x:P.X(-lim+i*bw),y:P.Y(d),width:P.X(bw-lim)-P.X(-lim)-1,height:P.Y(0)-P.Y(d),fill:C.acc,opacity:.55},s);});
    var xs=[],ys=[];for(var x=-lim;x<=lim;x+=0.1){xs.push(x);ys.push(npdf(x,0,st.g));}pline(s,P,function(i){return xs[i];},ys,{stroke:C.r,'stroke-width':2});
    var ma=mean(a),mb=mean(b),cov=mean(a.map(function(v,i){return (v-ma)*(b[i]-mb);}))/Math.sqrt(vari(a)*vari(b));
    ot.innerHTML='증분 1500개: 평균 <b>'+f2(ma)+'</b>(이론 0), 분산 <b>'+f2(vari(a))+'</b>(이론 t − s = '+st.g+'). 빨간 곡선이 정규분포 N(0, '+st.g+'). 앞 구간 W(s)와의 상관 <b>'+f2(cov)+'</b> → 거의 0, 서로 영향을 안 줘요(독립). 시작 s를 바꿔도 모양은 간격에만 달려 있어요.';}
  draw();};

/* 확대해도 삐죽삐죽: 기울기가 정해지지 않음 */
W.jag=function(el,o){
  var R=rng(29),w=bm(R,8192,1),z=1,s=svg(el,640,230,'브라운 운동 경로 확대');var c=ctrl(el);
  slider(c,'확대 배율:',0,5,1,0,function(v){z=Math.pow(4,v);draw();return z+'배';});var ot=out(el);
  function draw(){clear(s);var half=0.5/z,a=Math.round((0.5-half)*8192),b=Math.round((0.5+half)*8192),seg=w.slice(a,b+1),step=Math.max(1,Math.floor(seg.length/600)),pts=[];
    for(var i=0;i<seg.length;i+=step)pts.push(seg[i]);var lo=Math.min.apply(null,pts),hi=Math.max.apply(null,pts),pad=(hi-lo)*0.1+1e-6;
    var P=plot(s,40,14,580,180,[0,pts.length-1],[lo-pad,hi+pad],{xl:'시간 구간 폭 '+f2(1/z,4)+'초',yl:'위치 (확대)'});pline(s,P,function(i){return i;},pts,{stroke:C.r,'stroke-width':1.4});
    var dt=1/z,dw=Math.abs(seg[seg.length-1]-seg[0]);
    ot.innerHTML=z+'배 확대(구간 '+f2(dt,4)+'초): 여전히 삐죽삐죽해요. 높이 차이 ÷ 시간 = <b>'+f2(dw/dt,1)+'</b>. 확대할수록 이 「기울기」가 들쭉날쭉 커져서 하나의 값으로 정해지지 않아요(이론상 크기 약 1/√구간폭 = '+f2(1/Math.sqrt(dt),1)+'). 연결은 되어 있지만 매끄럽지 않은 선이에요.';}
  draw();};

/* ── 대결 판정 (01~04장) ── */
function comb(n,k){var r=1;for(var i=1;i<=k;i++)r=r*(n-k+i)/i;return r;}
DUELS.coin50=function(){var p=comb(100,50)/Math.pow(2,100);return {fly:true,robo:false,report:'100번 중 앞면이 정확히 50번일 확률 = (100개 중 50개 고르는 경우의 수) ÷ 2¹⁰⁰ = <b>'+f2(100*p,1)+'%</b>. 가장 흔한 결과이긴 하지만 「정확히 50」은 열 번에 한 번도 안 돼요.'};};
DUELS.walk10=function(){var p=comb(10,5)/1024,R=rng(3),hit=0;for(var j=0;j<20000;j++){var x=0;for(var i=0;i<10;i++)x+=R()<0.5?-1:1;if(x===0)hit++;}
  return {fly:false,robo:true,report:'10걸음 뒤 위치가 0일 확률 = 252 ÷ 1024 = <b>'+f2(100*p,1)+'%</b> (모의실험 2만 번: '+f2(100*hit/20000,1)+'%). 0이 가장 흔한 값이지만 절반에는 한참 못 미쳐요.'};};
DUELS.peek=function(){var R=rng(9),a=0,b=0;for(var k=0;k<200;k++){var up=[];for(var i=0;i<201;i++)up.push(R()<0.5?1:-1);for(var d=1;d<200;d++){a+=(up[d]>0?1:0)*up[d];b+=(up[d-1]>0?1:0)*up[d];}}
  return {fly:true,robo:false,report:'200번 시뮬레이션 평균 수익: 내일을 엿본 전략 <b>'+f2(a/200,1)+'원</b>, 어제만 본 전략 <b>'+f2(b/200,1)+'원</b>. 엿본 전략의 수익은 오늘 알 수 없는 정보를 쓴 결과라 실제로는 쓸 수 없어요.'};};
DUELS.scale=function(){var r1=Math.sqrt(10)*0.1,r2=1;return {fly:false,robo:true,report:'1초에 10걸음, 걸음 크기 1/10이면 1초 뒤 표준편차 = √10 × 0.1 = <b>'+f2(r1,3)+'</b> (퍼짐이 줄어듦). 걸음 크기 1/√10이면 √10 × 1/√10 = <b>'+r2+'</b>로 그대로예요.'};};
})();
