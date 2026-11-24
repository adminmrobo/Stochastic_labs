/* 실전 연습장: 확률해석 사업장 시뮬레이터 (외부 라이브러리 없음, 기록은 현재 탭에만) */
(function(){
'use strict';
var U=window.WU,C=window.WC,E=U.E,H=U.H,svg=U.svg,tx=U.tx,plot=U.plot,pline=U.pline,Phi=U.Phi,npdf=U.npdf,f2=U.f2,rng=U.rng,gauss=U.gauss;
var root=document.getElementById('sim');if(!root)return;
var SC={};
function kpi(cls,val,label){return '<div class="kpi '+cls+'"><b>'+val+'</b><span>'+label+'</span></div>';}
function sayH(who,mood,text){return '<div class="say" data-who="'+who+'"><img class="who" data-who="'+who+'" data-mood="'+mood+'" alt="" aria-hidden="true"><div><b class="name">'+Cast.names[who]+'</b><p>'+text+'</p></div></div>';}
function grp(title,cls,inner){return '<div class="cgrp '+cls+'"><div class="ct">'+title+'</div>'+inner+'</div>';}
function btns(id,opts,cur){return '<div class="ctrl" data-k="'+id+'">'+opts.map(function(o){return '<button type="button" class="bt" data-v="'+o[0]+'" aria-pressed="'+(String(o[0])===String(cur))+'">'+o[1]+'</button>';}).join('')+'</div>';}
function rngi(id,label,min,max,step,val){return '<div class="ctrl"><span class="glabel">'+label+'</span><input type="range" data-k="'+id+'" min="'+min+'" max="'+max+'" step="'+step+'" value="'+val+'" aria-label="'+label+'"><span class="val" data-v="'+id+'"></span></div>';}
function pct(x){return f2(100*x,1)+'%';}

/* ① 동전 게임장 — 11~12장 정지시간·선택적 정지 */
function ruinP(p,k,N){if(Math.abs(p-0.5)<1e-9)return k/N;var r=(1-p)/p;return (Math.pow(r,k)-1)/(Math.pow(r,N)-1);}
function ruinD(p,k,N){if(Math.abs(p-0.5)<1e-9)return k*(N-k);var q=1-p,P=ruinP(p,k,N);return (k-N*P)/(q-p);}
SC.coin={title:'동전 게임장',ch:'12_optional_stopping.html',chn:'12장 선택적 정지',
  st:{p:'0.5',k:10,N:30},
  intro:'손님이 <b>시작 돈 k</b>를 들고 와 한 판 ±1원 동전 게임을 해요. <b>목표 N원</b>이 되거나 0원이 되면 멈춰요(정지시간). 동전의 공정성(초록)은 게임장 규칙이 정하고, 시작 돈과 목표(파랑)는 여러분이 손님에게 추천해요.',
  controls:function(st){return grp('시장 환경 · 동전 앞면 확률','env',btns('p',[['0.5','공정 0.50'],['0.48','수수료 0.48'],['0.45','수수료 큼 0.45']],st.p))+grp('내 결정 · 시작 돈과 목표','dec',rngi('k','시작 돈 k(원):',1,19,1,st.k)+rngi('N','목표 N(원):',2,40,1,st.N));},
  calc:function(st){var p=+st.p,k=Math.min(st.k,st.N-1),P=ruinP(p,k,st.N);return {p:p,k:k,N:st.N,P:P,fin:st.N*P,gain:st.N*P-k,dur:ruinD(p,k,st.N),fair:Math.abs(p-0.5)<1e-9};},
  track:function(st,r,h){if(r.fair){h.Ns=h.Ns||{};h.Ns[r.k+'_'+r.N]=1;}},
  scores:function(r){return kpi(r.P>=0.5?'g':'a',pct(r.P),'목표 도달 확률')+kpi(Math.abs(r.fin-r.k)<0.01?'g':'r',f2(r.fin,2)+'원','끝날 때 평균 돈 (시작 '+r.k+'원)')+kpi(r.gain>-0.01?'g':'r',(r.gain>=0?'+':'')+f2(r.gain,2)+'원','평균 손익')+kpi('a',f2(r.dur,0)+'판','평균 게임 길이');},
  graphs:function(r,st,g1,g2){var s=svg(g1,320,210,'목표에 따른 도달 확률');var P=plot(s,36,14,270,160,[2,40],[0,1],{xl:'목표 N',yl:'도달 확률',xt:[10,20,30],yt:[0,0.5,1]}),xs=[],ys=[],y2=[];
    for(var N=r.k+1;N<=40;N++){xs.push(N);ys.push(ruinP(r.p,r.k,N));y2.push(r.k/N);}
    pline(s,P,function(i){return xs[i];},y2,{stroke:C.g,'stroke-dasharray':'5 4'});pline(s,P,function(i){return xs[i];},ys,{stroke:C.b,'stroke-width':2.2});E('circle',{cx:P.X(r.N),cy:P.Y(r.P),r:6,fill:C.r},s);
    tx(s,300,32,r.fair?'공정한 동전: 파랑과 초록 점선(k/N)이 겹침':'파랑 = 이 동전 · 초록 점선 = k/N',{'font-size':11,fill:C.mu,'text-anchor':'end'});
    var s2=svg(g2,320,210,'게임 경로 예시'),Q=plot(s2,36,14,270,160,[0,150],[0,r.N],{xl:'판 수',yl:'돈',yt:[0,r.N]}),R=rng(7);
    for(var j=0;j<8;j++){var x=r.k,w=[x],t=0;while(x>0&&x<r.N&&t<150){x+=R()<r.p?1:-1;t++;w.push(x);}pline(s2,Q,function(i){return i;},w,{stroke:x>=r.N?C.g:x<=0?C.r:C.lt,'stroke-width':1.4});}},
  talk:function(r,st){return [['doc',r.fair?'judge':'think',r.fair?'공정한 동전이에요. 목표를 어떻게 잡든 끝날 때 평균 돈은 시작 돈 그대로예요(선택적 정지).':'수수료가 있는 동전이에요. 판이 길어질수록(목표가 클수록) 손해가 쌓여요.'],
    ['asst','report','목표 '+r.N+'원 도달 확률 '+pct(r.P)+', 평균 손익 '+f2(r.gain,2)+'원이에요.'],
    ['fly','magnify',r.fair?'성공 확률이 낮아도 평균은 공정해. 드문 큰 성공이 잦은 파산을 메우거든.':'k/N(초록 점선)보다 파란 선이 얼마나 낮은지 봐. 목표가 클수록 더 벌어져.'],
    ['robo','calc',r.P<0.3?'목표를 높이면 크게 벌 수 있어요! …확률이 '+pct(r.P)+'뿐이지만요.':'성공 확률 '+pct(r.P)+'! 이 정도면 해 볼 만하죠?']];},
  missions:[{t:'최적 찾기: 공정한 동전, 시작 돈 10원에서 성공 확률 50% 이상인 가장 큰 목표 N 찾기',chk:function(st,r){return r.fair&&r.k===10&&r.N===20;}},
    {t:'함정 관찰: 수수료 동전에서 성공 확률이 공정할 때의 k/N보다 5%p 넘게 낮아지는 목표 보기',chk:function(st,r){return !r.fair&&r.P<r.k/r.N-0.05;}},
    {t:'조건 바꾸기: 공정한 동전에서 시작 돈·목표 조합을 3가지 이상 바꿔도 「끝날 때 평균 돈 = 시작 돈」이 유지되는지 확인',chk:function(st,r,h){return r.fair&&Object.keys(h.Ns||{}).length>=3;}}]};

/* ② 주식 거래소 — 08~09장 이토 공식·기하 브라운 운동 */
function stockCalc(mu,sg,T){var g=mu-sg*sg/2;return {mean:100*Math.exp(mu*T),med:100*Math.exp(g*T),loss:Phi(-g*Math.sqrt(T)/sg),var5:100*Math.exp(g*T-1.645*sg*Math.sqrt(T)),g:g};}
SC.stock={title:'주식 거래소',ch:'09_sde.html',chn:'09장 확률미분방정식',
  st:{mu:'0.08',s:0.2,T:5},
  intro:'고객이 100만 원을 주식에 넣고 <b>보유 기간</b>을 정하려 해요. 주가는 dS = μS dt + σS dW (기하 브라운 운동)를 따른다고 봐요. 기대 수익률 μ(초록)는 시장이 정하고, 변동성 σ(종목 선택)와 보유 기간 T(파랑)는 여러분이 정해요.',
  controls:function(st){return grp('시장 환경 · 연 기대 수익률 μ','env',btns('mu',[['0.02','2%'],['0.08','8%']],st.mu))+grp('내 결정 · 종목 변동성과 보유 기간','dec',rngi('s','변동성 σ:',0.05,0.6,0.05,st.s)+rngi('T','보유 기간 T(년):',1,20,1,st.T));},
  calc:function(st){var mu=+st.mu,r=stockCalc(mu,st.s,st.T);r.mu=mu;r.s=st.s;r.T=st.T;return r;},
  track:function(st,r,h){var k=r.mu+'_'+r.T;h.sg=h.sg||{};h.sg[k]=h.sg[k]||{};h.sg[k][f2(r.s)]=1;},
  scores:function(r){return kpi('g',f2(r.mean,1)+'만','평균 결과 100e^(μT)')+kpi(r.med>=100?'g':'r',f2(r.med,1)+'만','가운데 값 100e^((μ − σ²/2)T)')+kpi(r.loss<0.2?'g':'r',pct(r.loss),'원금 손실 확률')+kpi('a',f2(r.var5,1)+'만','나쁜 쪽 5% 경계');},
  graphs:function(r,st,g1,g2){var s=svg(g1,320,210,'보유 기간 끝의 결과 분포');var hi=Math.max(250,r.mean*1.8),P=plot(s,36,14,270,160,[0,hi],[0,1],{xl:'결과(만 원)',xt:[0,100,Math.round(hi/2/50)*50]}),xs=[],ys=[],m=Math.log(100)+r.g*r.T,v=r.s*r.s*r.T,mx=0;
    for(var x=1;x<=hi;x+=hi/200){var d=Math.exp(-(Math.log(x)-m)*(Math.log(x)-m)/(2*v))/(x*Math.sqrt(2*Math.PI*v));xs.push(x);ys.push(d);if(d>mx)mx=d;}
    pline(s,P,function(i){return xs[i];},ys.map(function(d){return d/mx*0.95;}),{stroke:C.acc,'stroke-width':2});
    [[100,C.k,'원금'],[r.med,C.b,'가운데'],[r.mean,C.g,'평균']].forEach(function(a,i){if(a[0]>hi)return;E('line',{x1:P.X(a[0]),x2:P.X(a[0]),y1:14,y2:174,stroke:a[1],'stroke-dasharray':i?'5 4':'2 2','stroke-width':1.6},s);tx(s,P.X(a[0])+3,26+i*14,a[2],{'font-size':11,fill:a[1]});});
    var s2=svg(g2,320,210,'보유 기간에 따른 손실 확률'),Q=plot(s2,36,14,270,160,[1,20],[0,0.6],{xl:'보유 기간(년)',yl:'손실 확률',xt:[1,5,10,15,20],yt:[0,0.2,0.4]}),X=[],Y=[];
    for(var T=1;T<=20;T++){X.push(T);Y.push(stockCalc(r.mu,r.s,T).loss);}
    E('line',{x1:Q.X(1),x2:Q.X(20),y1:Q.Y(0.2),y2:Q.Y(0.2),stroke:C.g,'stroke-dasharray':'5 4'},s2);pline(s2,Q,function(i){return X[i];},Y,{stroke:C.r,'stroke-width':2.2});E('circle',{cx:Q.X(r.T),cy:Q.Y(Math.min(r.loss,0.6)),r:6,fill:C.b},s2);},
  talk:function(r){return [['doc',r.g>0?'judge':'think',r.g>0?'가운데 값의 성장률 μ − σ²/2 = '+f2(r.g,3)+' > 0이라, 오래 들수록 손실 확률이 줄어요.':'μ − σ²/2 = '+f2(r.g,3)+' < 0이에요. 평균은 올라도 대부분의 고객은 손해를 봐요(08장의 덤).'],
    ['asst','report','평균 '+f2(r.mean,1)+'만, 가운데 '+f2(r.med,1)+'만, 손실 확률 '+pct(r.loss)+'이에요.'],
    ['fly','magnify','평균과 가운데 값의 차이가 이토 공식의 덤 σ²/2 때문이야. 변동성을 키우면 벌어지지.'],
    ['robo','coin',r.mean>130?'평균 '+f2(r.mean,0)+'만이면 대박이죠! 다들 이렇게 벌어요!':'평균이 원금보다 크니 무조건 이득이에요!']];},
  missions:[{t:'최적 찾기: μ = 8%, σ = 0.2에서 원금 손실 확률이 20% 아래가 되는 가장 짧은 보유 기간 찾기',chk:function(st,r){return Math.abs(r.mu-0.08)<1e-9&&Math.abs(r.s-0.2)<1e-9&&r.T===8;}},
    {t:'함정 관찰: 평균 결과는 원금보다 큰데 가운데 값은 원금보다 작은 경우 만들기 (μ < σ²/2)',chk:function(st,r){return r.mean>100&&r.med<100;}},
    {t:'조건 바꾸기: μ와 보유 기간을 그대로 두고 변동성을 3가지 이상 바꿔도 평균 결과는 그대로인지 확인',chk:function(st,r,h){var k=r.mu+'_'+r.T;return h.sg&&h.sg[k]&&Object.keys(h.sg[k]).length>=3;}}]};

/* ③ 잉크 공장 — 10장 포커-플랑크 */
function sensor(b,s,t){return npdf(5,b*t,s*s*t);}
function bestT(b,s){var bt=0.5,bv=-1;for(var t=0.5;t<=10.0001;t+=0.05){var v=sensor(b,s,t);if(v>bv){bv=v;bt=t;}}return bt;}
SC.ink={title:'잉크 공장',ch:'10_fokker_planck.html',chn:'10장 포커-플랑크 방정식',
  st:{b:'0.5',s:1,t:3},
  intro:'수로의 0m 지점에 잉크 한 방울을 떨어뜨리고, <b>5m 지점의 센서</b>로 농도를 재요. 물 흐름 b(초록)는 수로가 정하고, 휘젓기 세기 σ와 측정 시각 t(파랑)는 여러분이 정해요. 잉크 구름은 N(b·t, σ²·t)로 퍼져요.',
  controls:function(st){return grp('시장 환경 · 물 흐름 b (m/분)','env',btns('b',[['0','멈춤 0'],['0.5','0.5'],['1','1.0']],st.b))+grp('내 결정 · 휘젓기와 측정 시각','dec',rngi('s','휘젓기 σ:',0.2,2,0.1,st.s)+rngi('t','측정 시각 t(분):',0.5,10,0.5,st.t));},
  calc:function(st){var b=+st.b,s=st.s,t=st.t;return {b:b,s:s,t:t,c:sensor(b,s,t),peak:npdf(b*t,b*t,s*s*t),peak0:npdf(0,0,s*s*0.5),mid:b*t,best:bestT(b,s)};},
  track:function(st,r,h){var k=r.b+'_'+r.t;h.ss=h.ss||{};h.ss[k]=h.ss[k]||{};h.ss[k][f2(r.s,1)]=1;},
  scores:function(r){return kpi(Math.abs(r.t-r.best)<=0.5?'g':'a',f2(r.c,3),'센서(5m) 농도 밀도')+kpi('b',f2(r.mid,1)+'m','구름 가운데 b × t')+kpi('a',f2(r.peak,3),'봉우리 높이')+kpi('g','1.00','곡선 아래 넓이(전체 잉크)');},
  graphs:function(r,st,g1,g2){var s=svg(g1,320,210,'잉크 농도 곡선과 센서'),P=plot(s,36,14,270,160,[-6,14],[0,1.2],{xl:'위치(m)',xt:[-5,0,5,10]}),X=[],Y=[];
    for(var x=-6;x<=14;x+=0.05){X.push(x);Y.push(Math.min(npdf(x,r.mid,r.s*r.s*r.t),1.2));}pline(s,P,function(i){return X[i];},Y,{stroke:C.acc,'stroke-width':2.2});
    E('line',{x1:P.X(5),x2:P.X(5),y1:14,y2:174,stroke:C.r,'stroke-width':2,'stroke-dasharray':'5 4'},s);tx(s,P.X(5)+4,28,'센서',{'font-size':11,fill:C.r});
    var s2=svg(g2,320,210,'측정 시각에 따른 센서 농도'),Q=plot(s2,36,14,270,160,[0.5,10],[0,0.45],{xl:'측정 시각(분)',xt:[1,5,10]}),T=[],V=[];
    for(var t=0.5;t<=10.0001;t+=0.1){T.push(t);V.push(Math.min(sensor(r.b,r.s,t),0.45));}pline(s2,Q,function(i){return T[i];},V,{stroke:C.b,'stroke-width':2.2});
    E('circle',{cx:Q.X(r.best),cy:Q.Y(Math.min(sensor(r.b,r.s,r.best),0.45)),r:5,fill:C.g},s2);E('circle',{cx:Q.X(r.t),cy:Q.Y(Math.min(r.c,0.45)),r:6,fill:C.r},s2);},
  talk:function(r){return [['doc',Math.abs(r.t-r.best)<=0.5?'judge':'think',Math.abs(r.t-r.best)<=0.5?'센서 농도가 가장 높은 때에 맞췄어요. 구름이 센서를 지나는 순간이에요.':'구름이 아직 안 왔거나 이미 지나갔어요. 초록 점(가장 진한 때)을 찾아보세요.'],
    ['asst','report','구름 가운데 '+f2(r.mid,1)+'m, 봉우리 높이 '+f2(r.peak,3)+', 센서 농도 '+f2(r.c,3)+'이에요.'],
    ['fly','point','봉우리가 낮아져도 넓이는 1이야. 잉크가 사라진 게 아니라 퍼졌을 뿐.'],
    ['robo','chart',r.b===0?'흐름이 없으면 잉크가 센서까지 영영 안 가요!':'더 세게 저으면 더 빨리 도착하겠죠!']];},
  missions:[{t:'최적 찾기: 물 흐름 0.5, 휘젓기 σ = 1에서 센서 농도가 가장 높은 측정 시각 찾기 (±0.5분)',chk:function(st,r){return r.b===0.5&&Math.abs(r.s-1)<1e-9&&Math.abs(r.t-r.best)<=0.5;}},
    {t:'함정 관찰: 물 흐름 0에서 측정 시각을 8분 이상으로 두고, 봉우리가 처음(0.5분)의 1/4 아래로 낮아져도 넓이는 1인 것 보기',chk:function(st,r){return r.b===0&&r.t>=8&&r.peak<r.peak0/4;}},
    {t:'조건 바꾸기: 물 흐름과 측정 시각을 그대로 두고 휘젓기를 3가지 이상 바꿔도 구름 가운데(b × t)는 그대로인지 확인',chk:function(st,r,h){var k=r.b+'_'+r.t;return h.ss&&h.ss[k]&&Object.keys(h.ss[k]).length>=3;}}]};

/* ④ 정수기 관리소 — 09~10장 평균 회귀와 정상 분포 */
function waterCalc(s,th){var sd=s/Math.sqrt(2*th),p=2*(1-Phi(1/sd)),pump=10*th,loss=100*p;return {sd:sd,p:p,pump:pump,loss:loss,cost:pump+loss};}
function bestTh(s){var bt=0.1,bc=1e9;for(var th=0.1;th<=5.0001;th+=0.05){var c=waterCalc(s,th).cost;if(c<bc){bc=c;bt=th;}}return bt;}
SC.water={title:'정수기 관리소',ch:'10_fokker_planck.html',chn:'10장 포커-플랑크 (평형 분포)',
  st:{s:'1',th:1},
  intro:'정수기 물통 수위는 목표에서 벗어나면 펌프가 θ 세기로 되돌려요: dX = −θX dt + σ dW. 오래 지나면 수위는 N(0, σ²/(2θ))로 출렁여요(평형). 수위가 ±1을 넘으면 넘침·부족 손실(확률 × 100), 펌프 비용은 10 × θ예요. 사용량 흔들림 σ(초록)는 손님이, 펌프 세기 θ(파랑)는 여러분이 정해요.',
  controls:function(st){return grp('시장 환경 · 사용량 흔들림 σ','env',btns('s',[['0.5','적음 0.5'],['1','보통 1.0'],['1.5','많음 1.5']],st.s))+grp('내 결정 · 펌프 세기','dec',rngi('th','펌프 세기 θ:',0.1,5,0.05,st.th));},
  calc:function(st){var s=+st.s,r=waterCalc(s,st.th);r.s=s;r.th=st.th;r.best=bestTh(s);r.bestc=waterCalc(s,r.best).cost;return r;},
  track:function(st,r,h){if(Math.abs(r.th-r.best)<=0.2){h.opt=h.opt||{};h.opt[r.s]=1;}},
  scores:function(r){return kpi('b',f2(r.sd,2),'평형 표준편차 σ/√(2θ)')+kpi(r.p<0.1?'g':'r',pct(r.p),'넘침·부족 확률')+kpi('a',f2(r.pump,1),'펌프 비용 10θ')+kpi(Math.abs(r.th-r.best)<=0.2?'g':'a',f2(r.cost,1),'총비용 (최소 '+f2(r.bestc,1)+')');},
  graphs:function(r,st,g1,g2){var s=svg(g1,320,210,'평형 수위 분포와 허용 범위'),P=plot(s,36,14,270,160,[-4,4],[0,1.3],{xl:'수위 (목표 0)',xt:[-3,-1,0,1,3]}),X=[],Y=[];
    E('rect',{x:P.X(-1),y:14,width:P.X(1)-P.X(-1),height:160,fill:'rgba(19,115,58,.08)'},s);
    for(var x=-4;x<=4;x+=0.04){X.push(x);Y.push(Math.min(npdf(x,0,r.sd*r.sd),1.3));}pline(s,P,function(i){return X[i];},Y,{stroke:C.acc,'stroke-width':2.2});
    tx(s,P.X(0),30,'허용 범위 ±1',{'font-size':11,fill:C.g,'text-anchor':'middle'});
    var s2=svg(g2,320,210,'펌프 세기에 따른 총비용'),Q=plot(s2,36,14,270,160,[0.1,5],[0,80],{xl:'펌프 세기 θ',xt:[1,2,3,4,5],yt:[0,40,80]}),T=[],V=[];
    for(var th=0.1;th<=5.0001;th+=0.05){T.push(th);V.push(Math.min(waterCalc(r.s,th).cost,80));}pline(s2,Q,function(i){return T[i];},V,{stroke:C.b,'stroke-width':2.2});
    E('circle',{cx:Q.X(r.best),cy:Q.Y(Math.min(r.bestc,80)),r:5,fill:C.g},s2);E('circle',{cx:Q.X(r.th),cy:Q.Y(Math.min(r.cost,80)),r:6,fill:C.r},s2);},
  talk:function(r){return [['doc',Math.abs(r.th-r.best)<=0.2?'judge':'think',Math.abs(r.th-r.best)<=0.2?'펌프 비용과 넘침 손실이 맞서는 곳을 찾았어요.':'너무 약하면 넘침이, 너무 세면 펌프 비용이 커져요. 초록 점을 찾아보세요.'],
    ['asst','report','평형 표준편차 '+f2(r.sd,2)+', 넘침·부족 확률 '+pct(r.p)+', 총비용 '+f2(r.cost,1)+'이에요.'],
    ['fly','magnify','흔들림 σ가 바뀌면 최적 펌프 세기도 바뀌어. 한 번 맞춘 값을 그대로 믿지 마.'],
    ['robo','calc',r.th>3?'펌프를 최대로 돌리면 절대 안 넘쳐요! 완벽하죠!':'펌프는 약하게 돌려 전기를 아끼죠!']];},
  missions:[{t:'최적 찾기: 흔들림 보통(σ = 1)에서 총비용이 가장 적은 펌프 세기 찾기 (±0.2)',chk:function(st,r){return r.s===1&&Math.abs(r.th-r.best)<=0.2;}},
    {t:'함정 관찰: 펌프 세기를 0.2 이하로 두고 넘침·부족 확률이 50%를 넘는 것 보기',chk:function(st,r){return r.th<=0.2001&&r.p>0.5;}},
    {t:'조건 바꾸기: 흔들림 σ를 2가지 이상 바꿔 가며 각각의 최적 펌프 세기(±0.2)를 찾아, 최적값이 달라지는 것 확인',chk:function(st,r,h){return h.opt&&Object.keys(h.opt).length>=2;}}]};

var ORDER=['coin','stock','ink','water'],cur=null,touched={},done={},hist={};
var tabs=H('div','ctrl',null,root);tabs.setAttribute('role','tablist');
ORDER.forEach(function(k){var b=H('button','bt',SC[k].title,tabs);b.type='button';b.setAttribute('role','tab');b.dataset.t=k;b.onclick=function(){open(k);};});
var body=H('div',null,null,root);
function open(k){cur=k;[].forEach.call(tabs.children,function(b){b.setAttribute('aria-pressed',b.dataset.t===k);b.setAttribute('aria-selected',b.dataset.t===k);});
  try{history.replaceState(null,'','#'+k);}catch(e){}
  var S=SC[k];body.innerHTML='<h2>'+S.title+'</h2><div class="sitbox">'+S.intro+'</div><div class="simgrid"><div class="simctl">'+S.controls(S.st)+'</div><div class="simout"><div class="kpis"></div><div class="graphs"><div class="g1"></div><div class="g2"></div></div></div></div><div class="talkbox"></div><h3>미션</h3><ol class="missions"></ol><p class="note">배운 곳 다시 보기 → <a href="../'+S.ch+'">'+S.chn+'</a></p>';
  [].forEach.call(body.querySelectorAll('[data-k] button'),function(b){b.onclick=function(){var key=b.parentNode.dataset.k;S.st[key]=b.dataset.v;[].forEach.call(b.parentNode.children,function(x){x.setAttribute('aria-pressed',x===b);});touched[k]=1;update();};});
  [].forEach.call(body.querySelectorAll('input[data-k]'),function(r){r.oninput=function(){S.st[r.dataset.k]=+r.value;touched[k]=1;update();};});
  update();}
function update(){var S=SC[cur],st=S.st,r=S.calc(st);hist[cur]=hist[cur]||{};if(touched[cur]&&S.track)S.track(st,r,hist[cur]);
  [].forEach.call(body.querySelectorAll('.val[data-v]'),function(v){v.textContent=st[v.dataset.v];});
  body.querySelector('.kpis').innerHTML=S.scores(r,st);var g1=body.querySelector('.g1'),g2=body.querySelector('.g2');g1.innerHTML='';g2.innerHTML='';S.graphs(r,st,g1,g2);
  body.querySelector('.talkbox').innerHTML=S.talk(r,st).map(function(t){return sayH(t[0],t[1],t[2]);}).join('');Cast.fill(body);
  done[cur]=done[cur]||{};var ml=body.querySelector('.missions');ml.innerHTML='';
  S.missions.forEach(function(m,i){var ok=touched[cur]&&m.chk(st,r,hist[cur]);if(ok)done[cur][i]=1;var li=document.createElement('li');li.innerHTML=(done[cur][i]?'<b style="color:var(--gfp)">통과 ✓</b> ':'<span class="note">도전 중</span> ')+m.t;ml.appendChild(li);});}
window.PRACTICE={open:open,set:function(k,st){if(cur!==k)open(k);Object.assign(SC[k].st,st);touched[k]=1;update();return SC[k].missions.map(function(m,i){return !!done[k][i];});},status:function(k){return SC[k].missions.map(function(m,i){return !!(done[k]||{})[i];});},calc:function(k){return SC[k].calc(SC[k].st);}};
var h=(location.hash||'').slice(1);open(SC[h]?h:'coin');
})();
