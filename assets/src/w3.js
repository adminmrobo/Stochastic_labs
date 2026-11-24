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
