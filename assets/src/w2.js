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
