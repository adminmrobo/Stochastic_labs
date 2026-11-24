"""설명용 숫자 검산 (작업 메모의 「검산한 숫자」 근거)"""
import math, random
from math import comb, exp, sqrt, erf
Phi=lambda z:0.5*(1+erf(z/sqrt(2)))
print('주사위 평균', sum(range(1,7))/6, '분산', sum((k-3.5)**2 for k in range(1,7))/6)
print('동전 100번 정확히 50', comb(100,50)/2**100)
print('10걸음 끝 0', comb(10,5)/1024, ' 4걸음 끝 분포', [comb(4,k)/16 for k in range(5)])
print('±1SD 안 비율', Phi(1)-Phi(-1), '±2SD', Phi(2)-Phi(-2))
random.seed(1)
# ∫W dW 왼쪽 vs 가운데(오른쪽 평균) 합
def bm(n,T=1):
    dt=T/n;w=[0]
    for _ in range(n):w.append(w[-1]+random.gauss(0,sqrt(dt)))
    return w
L=[];M=[];Q=[]
for _ in range(4000):
    w=bm(400);l=sum(w[i]*(w[i+1]-w[i]) for i in range(400));m=sum((w[i]+w[i+1])/2*(w[i+1]-w[i]) for i in range(400))
    L.append(l);M.append(m);Q.append(sum((w[i+1]-w[i])**2 for i in range(400)))
avg=lambda a:sum(a)/len(a)
print('왼쪽 합 평균', avg(L), ' 가운데 합 평균', avg(M), ' 이차변동 평균', avg(Q))
print('등거리: E[(∫W dW)^2]', avg([x*x for x in L]), ' vs T^2/2 =', 0.5)
print('E[e^W1]', exp(0.5))
print('도박사 파산 k=3,N=10', 3/10)
p,q=0.47,0.53;r=q/p
print('불공정 0.47 k=5,N=10', (r**5-1)/(r**10-1))
print('GBM 평균 100e^0.05', 100*exp(0.05), ' 중앙값 mu=.05 s=.2', 100*exp(0.05-0.02))
print('dX=1dt+2dW t=4 평균 4 SD', 2*sqrt(4))
print('반사 원리 P(τ_1<=1)', 2*(1-Phi(1)))
print('OU 정상 SD sigma=1 theta=2', 1/sqrt(4))
# 배가 전략: 최대 3번(1,2,4) 걸기 기대값
ev=0.5*1+0.25*1+0.125*1+0.125*(-7);print('배가 전략 3번 한도 기대값', ev)
# 퍼짐 쪼개기
print('걸음 1/10, 크기 1/10이면 t=1 SD', sqrt(10)*0.1, ' 크기 1/sqrt10이면', sqrt(10)*(1/sqrt(10)))
