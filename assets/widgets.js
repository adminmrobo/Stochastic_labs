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

/* 위젯 모음 2: 05~09장 (√t 법칙 · 이차변동 · 마팅게일 · 이토 적분 · 이토 공식 · 확률미분방정식) */
(function(){
'use strict';
var U=window.WU,C=window.WC,E=U.E,H=U.H,svg=U.svg,clear=U.clear,ctrl=U.ctrl,btn=U.btn,radio=U.radio,slider=U.slider,out=U.out,tx=U.tx,rng=U.rng,gauss=U.gauss,bm=U.bm,mean=U.mean,vari=U.vari,f2=U.f2,plot=U.plot,pline=U.pline,Phi=U.Phi;

/* ── 05장 ── */
/* √t 띠: 경로 200개 중 띠 안 비율 */
W.sqrtband=function(el,o){
  var R=rng(41),T=9,n=180,ws=[];for(var j=0;j<200;j++)ws.push(bm(R,n,T));var st={t:4,k:1},s=svg(el,640,250,'브라운 운동 경로와 ±√t 띠');var c=ctrl(el);
  slider(c,'시각 t:',1,9,1,4,function(v){st.t=v;draw();return 't = '+v;});var c2=ctrl(el);radio(c2,'띠 너비:',[[1,'±1×√t'],[2,'±2×√t']],1,function(v){st.k=v;draw();});var ot=out(el);
  function draw(){clear(s);var P=plot(s,40,14,580,200,[0,T],[-8,8],{xl:'시간 t',yl:'W(t)',xt:[0,1,4,9],yt:[-6,-3,0,3,6]});
    var up=[],dn=[],xs=[];for(var i=0;i<=90;i++){var t=i/10;xs.push(t);up.push(st.k*Math.sqrt(t));dn.push(-st.k*Math.sqrt(t));}
    var d='M'+P.X(0)+' '+P.Y(0);xs.forEach(function(t,i){d+='L'+P.X(t)+' '+P.Y(up[i]);});for(var i=xs.length-1;i>=0;i--)d+='L'+P.X(xs[i])+' '+P.Y(dn[i]);E('path',{d:d+'Z',fill:'rgba(19,115,58,.10)',stroke:'none'},s);
    ws.slice(0,40).forEach(function(w,j){pline(s,P,function(i){return i*T/n;},w,{stroke:j===0?C.r:C.lt,'stroke-width':j===0?2:1});});
    pline(s,P,function(i){return xs[i];},up,{stroke:C.g,'stroke-dasharray':'5 4','stroke-width':1.6});pline(s,P,function(i){return xs[i];},dn,{stroke:C.g,'stroke-dasharray':'5 4','stroke-width':1.6});
    var idx=Math.round(st.t/T*n),vals=ws.map(function(w){return w[idx];}),inside=vals.filter(function(v){return Math.abs(v)<=st.k*Math.sqrt(st.t);}).length;
    E('line',{x1:P.X(st.t),x2:P.X(st.t),y1:14,y2:214,stroke:C.k,'stroke-dasharray':'3 3'},s);
    ot.innerHTML='t = '+st.t+': √t = <b>'+f2(Math.sqrt(st.t))+'</b>, 경로 200개의 표준편차 <b>'+f2(Math.sqrt(vari(vals)))+'</b>. 띠(±'+st.k+'×√t) 안에 있는 경로 <b>'+inside+'/200 = '+f2(inside/2,1)+'%</b> (이론 '+(st.k===1?'68.3':'95.4')+'%). 띠는 울타리가 아니라 「대부분이 있는 곳」이에요.';}
  draw();};

/* 이차변동: 조각 제곱의 합 */
W.qv=function(el,o){
  var st={c:o.c||'bm',n:16},R=rng(53),w=bm(R,4096,1),s=svg(el,640,240,'경로와 조각 나누기, 제곱합');var c=ctrl(el);
  radio(c,'선의 종류:',[['bm','브라운 운동 경로'],['smooth','매끄러운 곡선']],st.c,function(v){st.c=v;draw();});
  var ns=[4,16,64,256,1024,4096];slider(c,'조각 수 n:',0,5,1,1,function(v){st.n=ns[v];draw();return 'n = '+st.n;});var ot=out(el);
  function f(i){return st.c==='bm'?w[i]:0.8*Math.sin(2*Math.PI*i/4096)+0.5*(i/4096);}
  function draw(){clear(s);var P=plot(s,40,14,360,190,[0,1],[-2,2],{xl:'시간 0 ~ 1',yt:[-2,0,2]}),xs=[],ys=[];for(var i=0;i<=4096;i+=8){xs.push(i/4096);ys.push(f(i));}
    pline(s,P,function(i){return xs[i];},ys,{stroke:C.lt,'stroke-width':1.2});var sq=0,ab=0,pts=[];for(var k=0;k<=st.n;k++)pts.push(f(k*4096/st.n));
    for(var k=0;k<st.n;k++){var d=pts[k+1]-pts[k];sq+=d*d;ab+=Math.abs(d);}
    pline(s,P,function(i){return i/st.n;},pts,{stroke:C.r,'stroke-width':1.6});
    var P2=plot(s,440,14,180,190,[0,6],[0,1.4],{xl:'n = 4 … 4096',yl:'제곱합',yt:[0,1]});var all=[];[4,16,64,256,1024,4096].forEach(function(n,j){var q=0,prev=f(0);for(var k=1;k<=n;k++){var v=f(k*4096/n);q+=(v-prev)*(v-prev);prev=v;}all.push(q);});
    pline(s,P2,function(i){return i+0.5;},all,{stroke:C.b,'stroke-width':2});all.forEach(function(q,i){E('circle',{cx:P2.X(i+0.5),cy:P2.Y(Math.min(q,1.4)),r:ns_(i)===st.n?6:3,fill:ns_(i)===st.n?C.r:C.b},s);});
    ot.innerHTML='조각 '+st.n+'개: 높이 차이의 <b>제곱의 합 = '+f2(sq,3)+'</b>, 절댓값의 합 = '+f2(ab,1)+'. '+(st.c==='bm'?'조각을 잘게 할수록 제곱합이 <b>1(= 시간 길이 t)</b>에 모여요. 이것이 이차변동 [W]ₜ = t예요.':'매끄러운 곡선은 잘게 쪼갤수록 제곱합이 <b>0</b>으로 사라져요. 이차변동이 0이라서 보통 미적분이 통해요.');}
  function ns_(i){return [4,16,64,256,1024,4096][i];}
  draw();};

/* ── 06장 ── */
/* 조건부 기댓값: 동전 3번, 앞에서 몇 개를 알 때 */
W.condexp=function(el,o){
  var known=['앞','뒤','앞'],k=1,s=H('div',null,null,el),c=ctrl(el);
  slider(c,'알고 있는 동전 수 s:',0,3,1,1,function(v){k=v;draw();return v+'개';});var c2=ctrl(el);
  [0,1,2].forEach(function(i){btn(c2,(i+1)+'번째 바꾸기',function(){known[i]=known[i]==='앞'?'뒤':'앞';draw();});});var ot=out(el);
  function draw(){var rest=[],m=0;for(var i=0;i<k;i++)m+=known[i]==='앞'?1:-1;var n=3-k;
    for(var q=0;q<(1<<n);q++){var x=m,seq=known.slice(0,k);for(var j=0;j<n;j++){var h=q>>(n-1-j)&1;x+=h?-1:1;seq.push(h?'뒤':'앞');}rest.push([seq.join(''),x]);}
    var h='<p class="note">앞면 +1원, 뒷면 −1원. 지금까지 알고 있는 동전: <b>'+(k?known.slice(0,k).join(' '):'없음')+'</b> → 지금 잔액 M<sub>s</sub> = <b>'+m+'</b>원</p><div class="tw"><table class="tb"><thead><tr><th>남은 가능성 (똑같이 그럴듯함)</th><th>3번 뒤 잔액</th></tr></thead><tbody>';
    rest.forEach(function(r){h+='<tr><td>'+r[0]+'</td><td style="text-align:center">'+r[1]+'</td></tr>';});s.innerHTML=h+'</tbody></table></div>';
    var av=mean(rest.map(function(r){return r[1];}));ot.innerHTML='남은 '+rest.length+'가지의 평균 = <b>'+f2(av,1)+'</b>원 = 지금 잔액 '+m+'원. 「지금까지 아는 것」으로 낸 미래의 평균(조건부 기댓값)이 현재 값과 같아요 — 공정한 게임의 표시예요.';}
  draw();};

/* 마팅게일 부채꼴: 지금부터의 미래 평균 */
W.mart=function(el,o){
  var g=o.g||'fair',s=svg(el,640,240,'현재 이후의 미래 경로와 평균');var c=ctrl(el);
  radio(c,'게임:',[['fair','공정한 동전 (+1/−1)'],['bias','앞면 60% 동전'],['fee','공정 + 판마다 수수료 0.1']],g,function(v){g=v;draw();});var ot=out(el);
  function draw(){clear(s);var R=rng(61),sN=15,T=45,base=[0];for(var i=0;i<sN;i++)base.push(base[i]+(R()<0.5?1:-1));
    var p=g==='bias'?0.6:0.5,fee=g==='fee'?0.1:0,P=plot(s,40,14,580,190,[0,T],[-25,25],{xl:'판 수',yl:'잔액',yt:[-20,0,20]}),ends=[],avgs=[];for(var i=0;i<=T-sN;i++)avgs.push(0);
    for(var j=0;j<300;j++){var w=[base[sN]];for(var i=0;i<T-sN;i++)w.push(w[i]+(R()<p?1:-1)-fee);ends.push(w[w.length-1]);w.forEach(function(v,i){avgs[i]+=v/300;});if(j<30)pline(s,P,function(i){return sN+i;},w,{stroke:C.lt,'stroke-width':1});}
    pline(s,P,function(i){return i;},base,{stroke:C.k,'stroke-width':2.4});E('line',{x1:P.X(sN),x2:P.X(T),y1:P.Y(base[sN]),y2:P.Y(base[sN]),stroke:C.r,'stroke-dasharray':'6 4','stroke-width':1.6},s);
    pline(s,P,function(i){return sN+i;},avgs,{stroke:C.b,'stroke-width':2.4});
    var gap=mean(ends)-base[sN];ot.innerHTML='지금(s = '+sN+') 잔액 <b>'+base[sN]+'</b>, 미래 300갈래의 '+(T)+'판 평균 <b>'+f2(mean(ends),1)+'</b> (차이 '+f2(gap,1)+'). '+(g==='fair'?'파란 평균선이 빨간 점선(지금 값)을 따라가요 → <b>마팅게일</b>.':g==='bias'?'평균이 위로 올라가요 → 예측 가능한 오름세가 있어 마팅게일이 아니에요(평균이 오르는 게임: 서브마팅게일).':'평균이 아래로 내려가요 → 판마다 조금씩 손해 보는 게임(슈퍼마팅게일)이에요.');}
  draw();};

/* W, W², W² − t 의 평균 */
W.wsq=function(el,o){
  var k=o.k||'w2t',s=svg(el,640,230,'세 과정의 평균 변화');var c=ctrl(el);radio(c,'과정:',[['w','W(t)'],['w2','W(t)²'],['w2t','W(t)² − t']],k,function(v){k=v;draw();});var ot=out(el);
  var R=rng(71),T=4,n=80,ws=[];for(var j=0;j<600;j++)ws.push(bm(R,n,T));
  function draw(){clear(s);var P=plot(s,40,14,580,180,[0,T],[-3,5],{xl:'시간 t',yl:'평균',xt:[0,1,2,3,4],yt:[-2,0,2,4]}),av=[];
    for(var i=0;i<=n;i++){var t=i*T/n,sm=0;ws.forEach(function(w){var v=k==='w'?w[i]:k==='w2'?w[i]*w[i]:w[i]*w[i]-t;sm+=v;});av.push(sm/ws.length);}
    ws.slice(0,12).forEach(function(w){pline(s,P,function(i){return i*T/n;},w.map(function(v,i){return k==='w'?v:k==='w2'?v*v:v*v-i*T/n;}),{stroke:C.lt,'stroke-width':1});});
    pline(s,P,function(i){return i*T/n;},av,{stroke:C.b,'stroke-width':2.6});E('line',{x1:P.X(0),x2:P.X(T),y1:P.Y(0),y2:P.Y(0),stroke:C.r,'stroke-dasharray':'6 4'},s);
    ot.innerHTML='경로 600개 평균: t = 4에서 <b>'+f2(av[n])+'</b>. '+(k==='w2'?'W² 는 평균이 t만큼 계속 올라가요(4 근처) → 마팅게일이 아니에요.':'평균이 0 근처에 머물러요 → 마팅게일이에요.'+(k==='w2t'?' W² 에서 「올라가는 몫」 t를 빼 주면 공정한 게임이 돼요.':''));}
  draw();};

/* ── 07장 ── */
/* 보통 적분: 왼쪽 끝 · 가운데 넓이 합 */
W.riemann=function(el,o){
  var st={n:4,r:'left'},s=svg(el,640,230,'y = x 아래 넓이를 직사각형으로 근사');var c=ctrl(el);
  slider(c,'직사각형 수 n:',1,40,1,4,function(v){st.n=v;draw();return 'n = '+v;});var c2=ctrl(el);radio(c2,'높이를 재는 곳:',[['left','왼쪽 끝'],['mid','가운데']],'left',function(v){st.r=v;draw();});var ot=out(el);
  function draw(){clear(s);var P=plot(s,40,14,580,180,[0,1],[0,1],{xt:[0,0.5,1],yt:[0,0.5,1]}),sum=0,dx=1/st.n;
    for(var i=0;i<st.n;i++){var x=i*dx,h=st.r==='left'?x:x+dx/2;sum+=h*dx;E('rect',{x:P.X(x),y:P.Y(h),width:P.X(dx)-P.X(0),height:P.Y(0)-P.Y(h),fill:'rgba(30,85,200,.18)',stroke:C.b},s);}
    E('line',{x1:P.X(0),y1:P.Y(0),x2:P.X(1),y2:P.Y(1),stroke:C.r,'stroke-width':2.4},s);
    ot.innerHTML='직사각형 '+st.n+'개, '+(st.r==='left'?'왼쪽 끝':'가운데')+' 높이: 넓이 합 <b>'+f2(sum,4)+'</b> (정답 0.5, 차이 '+f2(Math.abs(sum-0.5),4)+'). 매끄러운 선에서는 n을 키우면 어느 쪽 높이를 쓰든 같은 답에 모여요.';}
  draw();};

/* 이토 합: 왼쪽 · 가운데 · 오른쪽 */
W.itosum=function(el,o){
  var st={n:o.n||64,r:'left',seed:1},s=svg(el,640,230,'브라운 운동 경로와 조각 끝점');var c=ctrl(el);
  var ns=[8,32,128,512,2048];slider(c,'조각 수 n:',0,4,1,1,function(v){st.n=ns[v];draw();return 'n = '+st.n;});
  var c2=ctrl(el);radio(c2,'H를 재는 곳:',[['left','왼쪽 끝 (이토)'],['mid','가운데 평균'],['right','오른쪽 끝']],'left',function(v){st.r=v;draw();});
  var c3=ctrl(el);btn(c3,'새 경로',function(){st.seed++;draw();});var b1=btn(c3,'경로 1000개 평균 내기',function(){avg();});var ot=out(el),o2=out(el);
  function S(w,n,r){var m=w.length-1,step=m/n,sm=0;for(var i=0;i<n;i++){var a=w[i*step],b=w[(i+1)*step],h=r==='left'?a:r==='right'?b:(a+b)/2;sm+=h*(b-a);}return sm;}
  function draw(){clear(s);var w=bm(rng(100+st.seed),2048,1),P=plot(s,40,14,580,180,[0,1],[-2.5,2.5],{xl:'시간 0 ~ 1',yt:[-2,0,2]});
    pline(s,P,function(i){return i/2048;},w.filter(function(v,i){return i%4===0;}).concat([w[2048]]),{stroke:C.acc,'stroke-width':1.2});
    if(st.n<=128){var step=2048/st.n;for(var i=0;i<st.n;i++){var k=st.r==='left'?i*step:st.r==='right'?(i+1)*step:(i+0.5)*step;E('circle',{cx:P.X(k/2048),cy:P.Y(w[Math.round(k)]),r:2.6,fill:C.r},s);}}
    var v=S(w,st.n,st.r),wt=w[2048];ot.innerHTML='이 경로 하나: 합 = <b>'+f2(v,3)+'</b>. 끝 값 W(1) = '+f2(wt,3)+' → W(1)²/2 = '+f2(wt*wt/2,3)+', (W(1)² − 1)/2 = '+f2((wt*wt-1)/2,3)+'. '+(st.r==='left'?'왼쪽 끝 합은 (W² − t)/2 쪽에 가까워요.':st.r==='mid'?'가운데 평균 합은 W²/2 에 가까워요(보통 미적분의 답).':'오른쪽 끝은 미래 값을 써서 더 커져요.');}
  function avg(){var R=rng(5),a={left:0,mid:0,right:0};for(var j=0;j<1000;j++){var w=bm(R,256,1);a.left+=S(w,256,'left');a.mid+=S(w,256,'mid');a.right+=S(w,256,'right');}
    o2.innerHTML='경로 1000개 평균 — 왼쪽 끝 <b>'+f2(a.left/1000)+'</b> (이론 0), 가운데 <b>'+f2(a.mid/1000)+'</b> (이론 0.5), 오른쪽 끝 <b>'+f2(a.right/1000)+'</b> (이론 1). 어디서 재느냐에 따라 평균이 정확히 ½씩 달라져요.';}
  draw();};

/* 이토 등거리 (심화) */
W.iso=function(el,o){
  var k='w',s=H('div',null,null,el),c=ctrl(el);radio(c,'H(t):',[['one','H = 1'],['w','H = W(t)'],['t','H = t']],k,function(v){k=v;run();});var ot=out(el);
  function run(){var R=rng(81),n=200,lhs=0,rhs=0,N=2000;for(var j=0;j<N;j++){var w=bm(R,n,1),I=0,q=0;for(var i=0;i<n;i++){var h=k==='one'?1:k==='w'?w[i]:i/n;I+=h*(w[i+1]-w[i]);q+=h*h/n;}lhs+=I*I;rhs+=q;}
    var th={one:1,w:0.5,t:1/3}[k];s.innerHTML='<div class="kpis"><div class="kpi b"><b>'+f2(lhs/N,3)+'</b><span>E[(∫H dW)²] (모의실험 '+N+'번)</span></div><div class="kpi g"><b>'+f2(rhs/N,3)+'</b><span>E[∫H² dt]</span></div><div class="kpi a"><b>'+f2(th,3)+'</b><span>이론값</span></div></div>';
    ot.innerHTML='두 값이 거의 같아요. 「무작위 적분의 제곱 평균」을 「보통 적분 하나」로 계산할 수 있다는 뜻이에요.';}
  run();};

/* ── 08장 ── */
/* 보통 연쇄법칙: f(x)=x², 남는 조각 (Δx)² */
W.chain=function(el,o){
  var st={d:0.5},s=H('div',null,null,el),c=ctrl(el);slider(c,'시간 간격 Δt:',0,5,1,0,function(v){st.d=[0.5,0.2,0.1,0.05,0.01,0.001][v];draw();return 'Δt = '+st.d;});var ot=out(el);
  function draw(){var x=1,dx=st.d,real=(x+dx)*(x+dx)-x*x,lin=2*x*dx,rest=dx*dx;
    s.innerHTML='<div class="tw"><table class="tb"><thead><tr><th>매끄러운 길 x(t) = t, 지금 x = 1</th><th>값</th></tr></thead><tbody><tr><td>실제 변화 Δf = (1 + Δx)² − 1²</td><td>'+f2(real,6)+'</td></tr><tr><td>1차 조각 2x·Δx</td><td>'+f2(lin,6)+'</td></tr><tr><td>남는 조각 (Δx)²</td><td><b>'+f2(rest,6)+'</b></td></tr><tr><td>남는 조각 ÷ Δt</td><td><b>'+f2(rest/dx,4)+'</b></td></tr></tbody></table></div>';
    ot.innerHTML='Δt를 줄이면 「남는 조각 ÷ Δt」가 '+f2(rest/dx,4)+' → 0으로 사라져요. 매끄러운 길에서는 2차 조각을 버려도 돼요 — 이것이 보통 연쇄법칙이에요.';}
  draw();};

/* W² 의 변화 = Σ2WΔW + Σ(ΔW)² */
W.ito2=function(el,o){
  var st={n:64,seed:1},s=svg(el,640,200,'W² 변화의 두 조각 막대');var c=ctrl(el);var ns=[8,64,512,4096];slider(c,'조각 수 n:',0,3,1,1,function(v){st.n=ns[v];draw();return 'n = '+st.n;});
  btn(c,'새 경로',function(){st.seed++;draw();});var ot=out(el);
  function draw(){clear(s);var w=bm(rng(300+st.seed),4096,1),step=4096/st.n,a=0,b=0;for(var i=0;i<st.n;i++){var x=w[i*step],y=w[(i+1)*step];a+=2*x*(y-x);b+=(y-x)*(y-x);}
    var tot=w[4096]*w[4096],mx=Math.max(Math.abs(a),Math.abs(b),tot,1.2),Xs=function(v){return 320+v/mx*260;};
    [['실제 W(1)²',tot,C.k],['Σ 2W·ΔW (1차 조각)',a,C.b],['Σ (ΔW)² (2차 조각)',b,C.r]].forEach(function(r,i){var y=30+i*52;E('rect',{x:Math.min(Xs(0),Xs(r[1])),y:y,width:Math.abs(Xs(r[1])-Xs(0)),height:30,fill:r[2],opacity:.75},s);tx(s,14,y+20,r[0],{'font-size':12});tx(s,Xs(r[1])+(r[1]>=0?6:-6),y+20,f2(r[1],3),{'font-size':12,'text-anchor':r[1]>=0?'start':'end','font-weight':700});});
    E('line',{x1:Xs(0),x2:Xs(0),y1:20,y2:180,stroke:C.mu},s);
    ot.innerHTML='W(1)² = '+f2(tot,3)+' = 1차 조각 '+f2(a,3)+' + 2차 조각 <b>'+f2(b,3)+'</b>. 2차 조각이 사라지지 않고 <b>1(= t)</b> 근처에 남아요. 그래서 d(W²) = 2W dW + <b>dt</b> — 이토 공식이 붙이는 「덤」이에요.';}
  draw();};

/* E[e^W] (심화) */
W.expw=function(el,o){
  var t=1,s=H('div',null,null,el),c=ctrl(el);slider(c,'시각 t:',0.5,3,0.5,1,function(v){t=v;run();return 't = '+v;});var ot=out(el);
  function run(){var R=rng(91),sm=0,N=20000;for(var j=0;j<N;j++)sm+=Math.exp(Math.sqrt(t)*gauss(R));
    s.innerHTML='<div class="kpis"><div class="kpi r"><b>1</b><span>「평균 W는 0이니 e⁰ = 1」 (보통 미적분식 짐작)</span></div><div class="kpi b"><b>'+f2(sm/N,3)+'</b><span>모의실험 평균 E[e^W(t)]</span></div><div class="kpi g"><b>'+f2(Math.exp(t/2),3)+'</b><span>이토 공식이 주는 답 e^(t/2)</span></div></div>';
    ot.innerHTML='이토 공식: d(e^W) = e^W dW + <b>½e^W dt</b>. 덤 ½ e^W dt 때문에 평균이 해마다 저절로 불어나 e^(t/2)가 돼요.';}
  run();};

/* ── 09장 ── */
/* 표류와 확산 조절판 */
W.sde=function(el,o){
  var st={b:o.b!=null?o.b:0.5,s:o.s!=null?o.s:1,seed:1},s=svg(el,640,240,'확률미분방정식 경로 묶음과 평균선');var c=ctrl(el);
  if(o.lock!=='b')slider(c,'표류 b (매초 미는 힘):',-1,1,0.25,st.b,function(v){st.b=v;draw();return 'b = '+v;});
  if(o.lock!=='s')slider(c,'확산 σ (흔들림 크기):',0,2,0.25,st.s,function(v){st.s=v;draw();return 'σ = '+v;});
  var c2=ctrl(el);btn(c2,'새 경로',function(){st.seed++;draw();});var ot=out(el);
  function draw(){clear(s);var T=4,n=160,dt=T/n,R=rng(400+st.seed),P=plot(s,40,14,580,190,[0,T],[-8,8],{xl:'시간 t',yl:'X(t)',xt:[0,1,2,3,4],yt:[-6,0,6]}),ends=[];
    for(var j=0;j<300;j++){var x=[0];for(var i=0;i<n;i++)x.push(x[i]+st.b*dt+st.s*Math.sqrt(dt)*gauss(R));ends.push(x[n]);if(j<30)pline(s,P,function(i){return i*dt;},x,{stroke:C.lt,'stroke-width':1});}
    var xs=[],m=[],u=[],d=[];for(var i=0;i<=40;i++){var t=i/10;xs.push(t);m.push(st.b*t);u.push(st.b*t+st.s*Math.sqrt(t));d.push(st.b*t-st.s*Math.sqrt(t));}
    pline(s,P,function(i){return xs[i];},u,{stroke:C.g,'stroke-dasharray':'5 4'});pline(s,P,function(i){return xs[i];},d,{stroke:C.g,'stroke-dasharray':'5 4'});pline(s,P,function(i){return xs[i];},m,{stroke:C.r,'stroke-width':2.4,'stroke-dasharray':'8 4'});
    ot.innerHTML='dX = '+st.b+'·dt + '+st.s+'·dW, X(0) = 0 → t = 4에서 평균 <b>'+f2(mean(ends))+'</b> (이론 b×t = '+f2(st.b*4)+'), 표준편차 <b>'+f2(Math.sqrt(vari(ends)))+'</b> (이론 σ×√t = '+f2(st.s*2)+'). 빨간 점선 = 표류가 만든 평균 길, 초록 점선 = 확산이 만든 퍼짐(±σ√t).';}
  draw();};

/* 오일러-마루야마 한 걸음씩 */
W.euler=function(el,o){
  var b=0.5,sg=1,dt=0.25,R=rng(7),x=[0],lines=[],s=svg(el,640,200,'한 걸음씩 계산한 경로');var c=ctrl(el);
  btn(c,'한 걸음 계산',function(){if(x.length>16)return;var z=gauss(R),xi=x[x.length-1],nx=xi+b*dt+sg*Math.sqrt(dt)*z;x.push(nx);lines.unshift('X = '+f2(xi)+' + 0.5×0.25 + 1×√0.25×('+f2(z)+') = <b>'+f2(nx)+'</b>');draw();});
  btn(c,'처음부터',function(){x=[0];lines=[];R=rng(Math.floor(Math.random()*1e9));draw();});var ot=out(el);
  function draw(){clear(s);var P=plot(s,40,14,580,160,[0,4],[-4,5],{xl:'시간 (한 걸음 Δt = 0.25)',xt:[0,1,2,3,4],yt:[-3,0,3]});pline(s,P,function(i){return i*dt;},x,{stroke:C.r,'stroke-width':2});
    x.forEach(function(v,i){E('circle',{cx:P.X(i*dt),cy:P.Y(v),r:3.5,fill:C.r},s);});
    ot.innerHTML=lines.length?('방금 계산: '+lines[0]+'<br><span class="note">새 값 = 지금 값 + 표류 b×Δt + 확산 σ×√Δt×(주사위 Z). Z는 평균 0, 표준편차 1인 무작위 수예요. ('+(x.length-1)+'/16걸음)</span>'):'「한 걸음 계산」을 눌러 보세요. dX = 0.5 dt + 1 dW 를 Δt = 0.25씩 손계산하는 방법(오일러-마루야마)이에요.';}
  draw();};

/* 세 가지 대표 모형 */
W.models=function(el,o){
  var m=o.m||'gbm',s=svg(el,640,240,'대표 모형의 경로');var c=ctrl(el);
  radio(c,'모형:',[['add','단순 (dX = b dt + σ dW)'],['gbm','주가 (dS = μS dt + σS dW)'],['ou','수위 (dX = θ(m − X)dt + σ dW)']],m,function(v){m=v;draw();});var ot=out(el);
  function draw(){clear(s);var T=4,n=200,dt=T/n,R=rng(501),P,yr=m==='gbm'?[0,400]:[-6,6],x0=m==='gbm'?100:m==='ou'?-4:0;
    P=plot(s,40,14,580,190,[0,T],yr,{xl:'시간(년)',xt:[0,1,2,3,4],yt:m==='gbm'?[0,100,200,300]:[-4,0,4]});var ends=[];
    for(var j=0;j<200;j++){var x=[x0];for(var i=0;i<n;i++){var X=x[i],z=gauss(R)*Math.sqrt(dt),d=m==='add'?0.5*dt+1*z:m==='gbm'?0.1*X*dt+0.3*X*z:2*(0-X)*dt+1*z;x.push(X+d);}ends.push(x[n]);if(j<25)pline(s,P,function(i){return i*dt;},x,{stroke:j?C.lt:C.r,'stroke-width':j?1:2});}
    if(m==='ou')E('line',{x1:P.X(0),x2:P.X(T),y1:P.Y(0),y2:P.Y(0),stroke:C.g,'stroke-width':2,'stroke-dasharray':'6 4'},s);
    var srt=ends.slice().sort(function(a,b){return a-b;}),med=srt[100];
    ot.innerHTML=m==='add'?'표류와 확산이 늘 같은 크기. 평균은 직선으로, 퍼짐은 √t로 커져요.':m==='gbm'?'주가 모형(μ = 0.1, σ = 0.3, 시작 100): 흔들림이 가격에 비례해 위로 길게 늘어져요. 4년 뒤 평균 <b>'+f2(mean(ends),0)+'</b>(이론 100e^0.4 ≈ 149), 가운데 값 <b>'+f2(med,0)+'</b>(이론 100e^((0.1 − 0.045)×4) ≈ 125). 평균과 가운데 값이 달라요.':'수위 모형(θ = 2, 목표 m = 0, σ = 1, 시작 −4): 목표에서 멀수록 세게 끌려와요. 결국 목표 둘레에서 표준편차 σ/√(2θ) = <b>0.5</b> 정도로 출렁여요(측정 '+f2(Math.sqrt(vari(ends)))+').';}
  draw();};

/* ── 대결 판정 (05~09장) ── */
DUELS.sqrt4=function(){var R=rng(13),a=[],b=[];for(var j=0;j<4000;j++){var w=bm(R,64,4);a.push(w[16]);b.push(w[64]);}var r=Math.sqrt(vari(b))/Math.sqrt(vari(a));
  return {fly:true,robo:false,report:'경로 4000개: t = 1의 표준편차 '+f2(Math.sqrt(vari(a)))+', t = 4의 표준편차 '+f2(Math.sqrt(vari(b)))+' → <b>'+f2(r)+'배</b>. 시간이 4배면 퍼짐은 √4 = 2배예요.'};};
DUELS.martdouble=function(){var R=rng(17),tot=0,N=20000;for(var j=0;j<N;j++){var m=0,bet=1,lose=0;for(var i=0;i<20;i++){var win=R()<0.5;m+=win?bet:-bet;if(win){lose=0;bet=1;}else{lose++;if(lose===3)bet*=2;}}tot+=m;}
  return {fly:true,robo:false,report:'「3번 연속 지면 판돈 2배」로 20판, 2만 번 모의실험: 평균 수익 <b>'+f2(tot/N,2)+'원</b>. 판돈을 어떻게 바꿔도 매 판이 공정하면 평균은 0이에요.'};};
DUELS.itoint=function(){var R=rng(23),a=0,N=2000;for(var j=0;j<N;j++){var w=bm(R,256,1),s=0;for(var i=0;i<256;i++)s+=w[i]*(w[i+1]-w[i]);a+=s;}
  return {fly:true,robo:false,report:'왼쪽 끝 합 ∫W dW 의 2000번 평균 = <b>'+f2(a/N,3)+'</b> (이론 0). 「W(1)²/2」라면 평균이 0.5여야 해요. 이토 적분 = (W(1)² − 1)/2 이므로 평균 0이 맞아요.'};};
DUELS.expw=function(){var R=rng(29),s=0,N=40000;for(var j=0;j<N;j++)s+=Math.exp(gauss(R));
  return {fly:true,robo:false,report:'e^W(1) 4만 번 평균 = <b>'+f2(s/N,3)+'</b>. e^(1/2) = '+f2(Math.exp(0.5),3)+'. 「e^평균 = e⁰ = 1」은 틀려요. 이토 공식의 덤 ½ dt가 평균을 키워요.'};};
DUELS.sigmamean=function(){var res=[];[1,2].forEach(function(sg){var R=rng(31),e=[];for(var j=0;j<4000;j++){var x=0;for(var i=0;i<100;i++)x+=0.5*0.04+sg*0.2*gauss(R);e.push(x);}res.push(mean(e));});
  return {fly:true,robo:false,report:'dX = 0.5 dt + σ dW, t = 4: σ = 1일 때 평균 <b>'+f2(res[0])+'</b>, σ = 2일 때 평균 <b>'+f2(res[1])+'</b> (이론 둘 다 2). 확산은 퍼짐만 키우고 평균 길은 표류가 정해요.'};};
})();

/* 위젯 모음 3: 10~13장 (포커-플랑크 · 정지시간 · 선택적 정지 · 종합) */
(function(){
'use strict';
var U=window.WU,C=window.WC,E=U.E,H=U.H,svg=U.svg,clear=U.clear,ctrl=U.ctrl,btn=U.btn,radio=U.radio,slider=U.slider,out=U.out,tx=U.tx,rng=U.rng,gauss=U.gauss,bm=U.bm,mean=U.mean,vari=U.vari,npdf=U.npdf,f2=U.f2,plot=U.plot,pline=U.pline,Phi=U.Phi,hist=U.hist;

/* ── 10장 ── */
/* 입자 2000개의 막대그래프 → 밀도 */
W.particles=function(el,o){
  var st={t:0.5,b:0},N=2000,s=svg(el,640,240,'입자 위치 막대그래프와 밀도 곡선');var c=ctrl(el);
  slider(c,'시각 t:',0.25,4,0.25,0.5,function(v){st.t=v;draw();return 't = '+v;});if(o.drift)slider(c,'표류 b:',-1,1,0.5,0,function(v){st.b=v;draw();return 'b = '+v;});var ot=out(el);
  function draw(){clear(s);var R=rng(77),xs=[];for(var j=0;j<N;j++)xs.push(st.b*st.t+Math.sqrt(st.t)*gauss(R));
    var lo=-6,hi=6,k=48,bw=(hi-lo)/k,hs=hist(xs,lo,hi,k),P=plot(s,40,14,580,190,[lo,hi],[0,0.85],{xl:'위치 x',xt:[-6,-3,0,3,6]});
    hs.forEach(function(h,i){var d=h/N/bw;E('rect',{x:P.X(lo+i*bw),y:P.Y(d),width:P.X(lo+bw)-P.X(lo)-1,height:P.Y(0)-P.Y(d),fill:C.acc,opacity:.5},s);});
    var X=[],Y=[];for(var x=lo;x<=hi;x+=0.05){X.push(x);Y.push(npdf(x,st.b*st.t,st.t));}pline(s,P,function(i){return X[i];},Y,{stroke:C.r,'stroke-width':2.2});
    ot.innerHTML='먼지 입자 '+N+'개를 0에서 출발시켜 t = '+st.t+'까지 흔들었어요. 막대(실제 입자 비율)와 빨간 곡선(확률밀도 p(x, t))이 겹쳐요. 봉우리 높이 <b>'+f2(npdf(st.b*st.t,st.b*st.t,st.t),3)+'</b> — 시간이 갈수록 낮고 넓어져요.';}
  draw();};

/* 표류는 옮기고 확산은 퍼뜨린다 */
W.fp=function(el,o){
  var st={b:o.b!=null?o.b:0.5,s:o.s!=null?o.s:1},s=svg(el,640,240,'세 시각의 확률밀도 곡선');var c=ctrl(el);
  slider(c,'표류 b:',-1,1,0.25,st.b,function(v){st.b=v;draw();return 'b = '+v;});slider(c,'확산 σ:',0.25,2,0.25,st.s,function(v){st.s=v;draw();return 'σ = '+v;});var ot=out(el);
  function draw(){clear(s);var P=plot(s,40,14,580,190,[-6,8],[0,1.2],{xl:'위치 x',xt:[-6,-3,0,3,6]}),ts=[0.3,1.5,4],cols=[C.b,C.acc,C.r],areas=[];
    ts.forEach(function(t,j){var v=0.05+st.s*st.s*t,m=st.b*t,X=[],Y=[],a=0;for(var x=-6;x<=8;x+=0.05){var y=npdf(x,m,v);X.push(x);Y.push(y);a+=y*0.05;}areas.push(a);
      var d='M'+P.X(-6)+' '+P.Y(0);X.forEach(function(x,i){d+='L'+P.X(x).toFixed(1)+' '+P.Y(Math.min(Y[i],1.2)).toFixed(1);});E('path',{d:d+'L'+P.X(8)+' '+P.Y(0)+'Z',fill:cols[j],opacity:.12,stroke:cols[j],'stroke-width':2},s);
      E('line',{x1:P.X(m),x2:P.X(m),y1:P.Y(0),y2:P.Y(Math.min(npdf(m,m,v),1.2)),stroke:cols[j],'stroke-dasharray':'3 3'},s);tx(s,P.X(m)+4,P.Y(Math.min(npdf(m,m,v),1.15))-4,'t = '+t,{'font-size':12,fill:cols[j]});});
    ot.innerHTML='봉우리 위치(가운데) = b × t → '+ts.map(function(t){return f2(st.b*t,1);}).join(', ')+' (<b>표류가 옮김</b>). 퍼짐(분산) = σ² × t만큼 늘어남 (<b>확산이 퍼뜨림</b>). 곡선 아래 넓이는 '+areas.map(function(a){return f2(a,2);}).join(', ')+' → 늘 1이에요.';}
  draw();};

/* 평균 회귀: 퍼짐과 끌어당김이 맞서 평형 (심화) */
W.ou=function(el,o){
  var st={th:1,t:4},s=svg(el,640,230,'평균 회귀 과정의 밀도 변화');var c=ctrl(el);
  slider(c,'끌어당김 θ:',0.25,3,0.25,1,function(v){st.th=v;draw();return 'θ = '+v;});slider(c,'시각 t:',0.25,6,0.25,4,function(v){st.t=v;draw();return 't = '+v;});var ot=out(el);
  function draw(){clear(s);var x0=-3,sg=1,m=x0*Math.exp(-st.th*st.t),v=sg*sg/(2*st.th)*(1-Math.exp(-2*st.th*st.t))+1e-3,vs=sg*sg/(2*st.th),P=plot(s,40,14,580,180,[-6,4],[0,1.4],{xl:'수위 x (목표 0)',xt:[-6,-3,0,3]});
    function cur(mm,vv,col,dash){var X=[],Y=[];for(var x=-6;x<=4;x+=0.04){X.push(x);Y.push(Math.min(npdf(x,mm,vv),1.4));}pline(s,P,function(i){return X[i];},Y,{stroke:col,'stroke-width':2.2,'stroke-dasharray':dash||''});}
    cur(0,vs,C.g,'6 4');cur(m,v,C.r);E('line',{x1:P.X(x0),x2:P.X(x0),y1:14,y2:194,stroke:C.mu,'stroke-dasharray':'2 3'},s);tx(s,P.X(x0)+4,30,'출발 −3',{'font-size':11,fill:C.mu});
    ot.innerHTML='t = '+st.t+': 가운데 <b>'+f2(m)+'</b>, 표준편차 <b>'+f2(Math.sqrt(v))+'</b>. 초록 점선은 평형 상태(가운데 0, 표준편차 1/√(2θ) = '+f2(Math.sqrt(vs))+'). 확산은 퍼뜨리고 끌어당김은 모으는데, 둘이 맞서는 곳에서 모양이 더는 안 변해요.';}
  draw();};

/* ── 11장 ── */
/* 처음 닿는 시각 */
W.hit=function(el,o){
  var st={a:1.5},T=4,n=200,R=rng(121),ws=[];for(var j=0;j<300;j++)ws.push(bm(R,n,T));var s=svg(el,640,240,'경로와 처음 닿는 시각');var c=ctrl(el);
  slider(c,'목표선 a:',0.5,3,0.25,1.5,function(v){st.a=v;draw();return 'a = '+v;});var ot=out(el);
  function draw(){clear(s);var P=plot(s,40,14,580,190,[0,T],[-4,4.5],{xl:'시간 t',xt:[0,1,2,3,4],yt:[-3,0,3]}),hit=0,taus=[];
    E('line',{x1:P.X(0),x2:P.X(T),y1:P.Y(st.a),y2:P.Y(st.a),stroke:C.r,'stroke-dasharray':'6 4','stroke-width':1.6},s);tx(s,P.X(T)-4,P.Y(st.a)-6,'a = '+st.a,{'text-anchor':'end',fill:C.r,'font-size':12});
    ws.forEach(function(w,j){var k=-1;for(var i=0;i<=n;i++)if(w[i]>=st.a){k=i;break;}if(k>=0){hit++;taus.push(k*T/n);}
      if(j<14){pline(s,P,function(i){return i*T/n;},k>=0?w.slice(0,k+1):w,{stroke:k>=0?C.acc:C.lt,'stroke-width':1.4});if(k>=0)E('circle',{cx:P.X(k*T/n),cy:P.Y(w[k]),r:4,fill:C.r},s);}});
    var th=2*(1-Phi(st.a/Math.sqrt(T)));ot.innerHTML='경로 300개 중 t = 4까지 a에 닿은 경로 <b>'+hit+'개 ('+f2(hit/3,1)+'%)</b>, 닿은 경로의 평균 도착 시각 '+(taus.length?f2(mean(taus)):'—')+'. 이론 확률 2 × P(W(4) ≥ a) = '+f2(100*th,1)+'%. 각 경로는 「지금까지의 길」만 보고 멈출지 정해요 — 그래서 정지시간이에요.';}
  draw();};

/* 이 규칙은 정지시간일까? */
W.isstop=function(el,o){
  var rules=[['처음으로 잔액이 3원이 되는 순간 멈춘다',1,'지금까지의 잔액만 보면 「지금 처음 3원인가」를 알 수 있어요.'],['세 번째 앞면이 나온 직후 멈춘다',1,'지금까지 나온 앞면 수만 세면 돼요.'],['이번 주 최고가인 날 판다',0,'금요일까지 다 봐야 어느 날이 최고였는지 알아요. 그날 당일엔 몰라요.'],
    ['내일 떨어지기 바로 전날 판다',0,'내일 일을 오늘 알아야 해요 — 미래 엿보기예요.'],['무조건 10시 정각에 멈춘다',1,'정해진 시각은 정보가 전혀 필요 없으니 늘 정지시간이에요.'],['마지막으로 0을 지난 순간 멈춘다',0,'그 뒤에 0을 다시 지날지 끝까지 봐야 알아요.']];
  var box=H('div','tw',null,el),ot=out(el),ans={};
  function draw(){var h='<table class="tb"><thead><tr><th>멈추는 규칙</th><th>판정해 보기</th></tr></thead><tbody>';
    rules.forEach(function(r,i){h+='<tr><td>'+r[0]+(ans[i]!=null?'<br><span class="note">'+(ans[i]===r[1]?'<b style="color:var(--gfp)">맞았어요.</b> ':'<b style="color:var(--eye)">다시 볼까요?</b> ')+r[2]+'</span>':'')+'</td><td><button type="button" class="bt" data-i="'+i+'" data-v="1" aria-pressed="'+(ans[i]===1)+'">정지시간</button> <button type="button" class="bt" data-i="'+i+'" data-v="0" aria-pressed="'+(ans[i]===0)+'">아님</button></td></tr>';});
    box.innerHTML=h+'</tbody></table>';[].forEach.call(box.querySelectorAll('button'),function(b){b.onclick=function(){ans[+b.dataset.i]=+b.dataset.v;draw();};});
    var done=Object.keys(ans).length,ok=Object.keys(ans).filter(function(i){return ans[i]===rules[i][1];}).length;
    ot.innerHTML=done?('판정 '+done+'/6개, 맞힌 것 <b>'+ok+'개</b>. 기준은 하나: 「그 순간까지의 정보만으로 지금 멈출지 말지 정할 수 있나?」'):'규칙마다 「정지시간」인지 「아님」인지 골라 보세요. 기준은 「지금까지의 정보만으로 지금 멈출지 정할 수 있나?」예요.';}
  draw();};

/* 처음 닿는 시각의 분포 (심화) */
W.reflect=function(el,o){
  var a=1,s=svg(el,640,230,'처음 닿는 시각의 누적 확률');var c=ctrl(el);slider(c,'목표선 a:',0.5,2,0.25,1,function(v){a=v;draw();return 'a = '+v;});var ot=out(el);
  function draw(){clear(s);var R=rng(131),T=4,n=400,taus=[];for(var j=0;j<1500;j++){var w=0,k=-1,sd=Math.sqrt(T/n);for(var i=1;i<=n;i++){w+=sd*gauss(R);if(w>=a){k=i;break;}}taus.push(k<0?99:k*T/n);}
    var P=plot(s,40,14,580,180,[0,T],[0,1],{xl:'시간 t',yl:'t까지 닿았을 확률',xt:[0,1,2,3,4],yt:[0,0.5,1]}),X=[],Y=[],Z=[];
    for(var t=0.02;t<=T;t+=0.04){X.push(t);Y.push(taus.filter(function(v){return v<=t;}).length/1500);Z.push(2*(1-Phi(a/Math.sqrt(t))));}
    pline(s,P,function(i){return X[i];},Y,{stroke:C.b,'stroke-width':2.4});pline(s,P,function(i){return X[i];},Z,{stroke:C.r,'stroke-width':2,'stroke-dasharray':'6 4'});
    ot.innerHTML='파란 선 = 모의실험 1500번, 빨간 점선 = 반사 원리 공식 2 × P(W(t) ≥ a). t = 1에서 '+f2(Y[24])+' vs '+f2(Z[24])+'. (모의실험은 계산하는 시각 사이에 잠깐 넘었다 돌아온 경우를 놓쳐 조금 작게 나와요.)';}
  draw();};

/* ── 12장 ── */
/* 도박사의 파산: 목표 N 또는 0까지 */
W.ruin=function(el,o){
  var st={k:o.k||3,N:o.N||10,p:0.5},s=svg(el,640,230,'게임 경로와 성공 확률');var c=ctrl(el);
  slider(c,'시작 돈 k:',1,19,1,st.k,function(v){st.k=Math.min(v,st.N-1);draw();return 'k = '+st.k;});slider(c,'목표 N:',4,20,1,st.N,function(v){st.N=v;if(st.k>=v)st.k=v-1;draw();return 'N = '+v;});
  if(o.bias)slider(c,'이길 확률 p:',0.4,0.6,0.01,0.5,function(v){st.p=v;draw();return 'p = '+f2(v);});var ot=out(el);
  function draw(){clear(s);var R=rng(141),win=0,fin=0,len=0,G=3000,P=plot(s,40,14,580,180,[0,120],[0,st.N],{xl:'판 수',yl:'돈',yt:[0,st.N]});
    for(var j=0;j<G;j++){var x=st.k,t=0,w=[x];while(x>0&&x<st.N&&t<5000){x+=R()<st.p?1:-1;t++;if(j<12&&t<=120)w.push(x);}if(x>=st.N)win++;fin+=x;len+=t;if(j<12)pline(s,P,function(i){return i;},w,{stroke:x>=st.N?C.g:C.r,'stroke-width':1.3,opacity:.7});}
    var th=st.p===0.5?st.k/st.N:(Math.pow((1-st.p)/st.p,st.k)-1)/(Math.pow((1-st.p)/st.p,st.N)-1);
    ot.innerHTML=G+'판 모의실험: 목표 '+st.N+'원 도달 <b>'+f2(100*win/G,1)+'%</b> (공식 '+(st.p===0.5?'k/N = ':'')+f2(100*th,1)+'%), 끝날 때 평균 돈 <b>'+f2(fin/G,2)+'원</b> (시작 '+st.k+'원), 평균 '+f2(len/G,0)+'판. '+(Math.abs(st.p-0.5)<1e-9?'공정한 게임은 멈춘 뒤에도 평균이 시작 돈과 같아요(선택적 정지).':'불공정하면 평균이 시작 돈과 달라져요.');}
  draw();};

/* 배가 전략: 대개 +1, 드물게 큰 손실 */
W.double=function(el,o){
  var m=5,s=svg(el,640,230,'배가 전략 결과 분포');var c=ctrl(el);slider(c,'최대 몇 번까지 두 배로 걸까 m:',1,10,1,5,function(v){m=v;draw();return 'm = '+v+'번 (필요한 돈 '+(Math.pow(2,v)-1)+'원)';});var ot=out(el);
  function draw(){clear(s);var R=rng(151),G=20000,res={},sum=0;for(var j=0;j<G;j++){var bet=1,tot=0,k=0;while(k<m){var w=R()<0.5;tot+=w?bet:-bet;k++;if(w)break;bet*=2;}res[tot]=(res[tot]||0)+1;sum+=tot;}
    var ks=Object.keys(res).map(Number).sort(function(a,b){return a-b;}),P=plot(s,40,14,580,180,[0,ks.length],[0,1],{yl:'비율',yt:[0,0.5,1]});
    ks.forEach(function(k,i){var p=res[k]/G;E('rect',{x:P.X(i+0.15),y:P.Y(p),width:P.X(0.7)-P.X(0),height:P.Y(0)-P.Y(p),fill:k>0?C.g:C.r},s);tx(s,P.X(i+0.5),210,(k>0?'+':'')+k+'원',{'text-anchor':'middle','font-size':12});tx(s,P.X(i+0.5),P.Y(p)-4,f2(100*p,1)+'%',{'text-anchor':'middle','font-size':11});});
    ot.innerHTML='지면 두 배로 다시 걸고, 이기면 그만. 최대 '+m+'번: +1원으로 끝날 확률 <b>'+f2(100*(1-Math.pow(0.5,m)),1)+'%</b>, '+(Math.pow(2,m)-1)+'원을 잃을 확률 <b>'+f2(100*Math.pow(0.5,m),1)+'%</b>. 평균 <b>'+f2(sum/G,3)+'원</b> (이론 0). 돈과 시간에 끝이 있으면 공짜 수익은 없어요.';}
  draw();};

/* ── 13장 ── */
/* 표지 그림을 움직이기: 경로 → 방정식 → 밀도 */
W.big=function(el,o){
  var st={b:0.5,s:1},s=svg(el,640,250,'경로 묶음과 세 시각의 밀도');var c=ctrl(el);
  slider(c,'표류 μ:',-1,1,0.25,0.5,function(v){st.b=v;draw();return 'μ = '+v;});slider(c,'확산 σ:',0.25,2,0.25,1,function(v){st.s=v;draw();return 'σ = '+v;});var ot=out(el);
  function draw(){clear(s);var T=3,n=120,dt=T/n,R=rng(161),P=plot(s,30,14,300,200,[0,T],[-6,7],{xl:'시간 t',xt:[0,1,2,3]});
    for(var j=0;j<24;j++){var x=[0];for(var i=0;i<n;i++)x.push(x[i]+st.b*dt+st.s*Math.sqrt(dt)*gauss(R));pline(s,P,function(i){return i*dt;},x,{stroke:j?C.lt:C.r,'stroke-width':j?1:2});}
    [1,2,3].forEach(function(t){E('line',{x1:P.X(t),x2:P.X(t),y1:14,y2:214,stroke:C.rule,'stroke-dasharray':'3 3'},s);});
    tx(s,345,120,'→',{'font-size':22,fill:C.acc});
    var Q=plot(s,375,14,250,200,[0,0.45],[-6,7],{yl:'',xl:'밀도 p(x, t)'}),cols=[C.b,C.acc,C.r];
    [1,2,3].forEach(function(t,j){var X=[],Y=[];for(var y=-6;y<=7;y+=0.1){Y.push(y);X.push(npdf(y,st.b*t,st.s*st.s*t));}var d='';Y.forEach(function(y,i){d+=(i?'L':'M')+Q.X(Math.min(X[i],0.45)).toFixed(1)+' '+Q.Y(y).toFixed(1);});E('path',{d:d,fill:'none',stroke:cols[j],'stroke-width':2},s);tx(s,Q.X(Math.min(npdf(st.b*t,st.b*t,st.s*st.s*t),0.45))+4,Q.Y(st.b*t),'t = '+t,{'font-size':11,fill:cols[j]});});
    ot.innerHTML='dX = '+st.b+' dt + '+st.s+' dW: 왼쪽은 경로 하나하나(확률과정), 오른쪽은 같은 경로를 많이 모은 밀도(포커-플랑크). t = 3에서 가운데 '+f2(st.b*3,1)+', 표준편차 '+f2(st.s*Math.sqrt(3))+'.';}
  draw();};

/* 펼치는 카드 */
W.cards=function(el,o){var box=H('div','steps',null,el);(o.cards||[]).forEach(function(c,i){var d=H('div',null,'<b class="n">'+(i+1)+'</b><b>'+c[0]+'</b>',box);var b=H('button','bt','펼치기',d);b.type='button';var body=H('div',null,c[1],d);body.hidden=true;b.onclick=function(){body.hidden=!body.hidden;b.textContent=body.hidden?'펼치기':'접기';};});};

/* ── 대결 판정 (10~13장) ── */
DUELS.area=function(){var a=[];[0.5,2,8].forEach(function(t){var s=0;for(var x=-30;x<=30;x+=0.01)s+=U.npdf(x,0,t)*0.01;a.push(s);});
  return {fly:false,robo:true,report:'t = 0.5, 2, 8에서 곡선 아래 넓이를 직접 더하면 <b>'+a.map(function(v){return f2(v,3);}).join(', ')+'</b>. 봉우리는 낮아지지만 옆으로 넓어져 넓이(전체 확률)는 늘 1이에요.'};};
DUELS.maxday=function(){var R=rng(177),early=0,N=5000;for(var j=0;j<N;j++){var p=[100];for(var d=1;d<5;d++)p.push(p[d-1]+(R()<0.5?1:-1));var day=p.indexOf(Math.max.apply(null,p));if(day<4)early++;}
  return {fly:true,robo:false,report:'5일 가격 5000번 모의실험: 주간 최고가 날이 금요일 전에 온 경우 <b>'+f2(100*early/N,1)+'%</b>. 그날 당일에는 「지금까지 최고」인지만 알 뿐, 뒤에 더 오를지는 몰라요. 「주간 최고가 날」은 금요일이 지나야 정해지므로 정지시간이 아니에요.'};};
DUELS.ruin310=function(){var R=rng(181),w=0,N=20000;for(var j=0;j<N;j++){var x=3;while(x>0&&x<10)x+=R()<0.5?1:-1;if(x===10)w++;}
  return {fly:true,robo:false,report:'시작 3원, 목표 10원, 2만 번 모의실험: 목표 도달 <b>'+f2(100*w/N,1)+'%</b>. 공식 k/N = 3/10 = 30%. 동전이 공정해도 출발점이 0에 더 가까우면 0에 먼저 닿기 쉬워요.'};};
DUELS.final=function(){var R=rng(191),e=[];for(var j=0;j<6000;j++){var x=0;for(var i=0;i<100;i++)x+=1*0.04+2*0.2*gauss(R);e.push(x);}
  return {fly:true,robo:false,report:'dX = 1 dt + 2 dW, t = 4, 6000번 모의실험: 평균 <b>'+f2(mean(e))+'</b>, 표준편차 <b>'+f2(Math.sqrt(vari(e)))+'</b>. 이론: 평균 b × t = 4, 표준편차 σ × √t = 2 × 2 = 4. 「σ × t = 8」이 아니에요.'};};
})();

