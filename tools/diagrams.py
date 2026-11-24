"""인포그래픽 「한눈에 보기」용 작은 도식 (정적 SVG, 320×240). 색은 lab.css 토큰과 같다."""
import math
import random

K, MU, RULE, G, M, R, A, B, ACC = '#16212b', '#5b6874', '#d5dbe2', '#13733a', '#9b3fb5', '#c9302c', '#a35c00', '#1e55c8', '#2f6f8f'
LT = 'rgba(47,111,143,.35)'


def T(x, y, s, c=K, size=13, w=400, anchor='start'):
    return f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{c}" font-weight="{w}" text-anchor="{anchor}">{s}</text>'


def wrap(body, label):
    return f'<svg viewBox="0 0 320 240" width="100%" role="img" aria-label="{label}" style="max-width:420px;font-family:inherit">{body}</svg>'


def path(pts, col=ACC, w=1.4, dash=''):
    d = ' '.join(('M' if i == 0 else 'L') + f'{x:.1f} {y:.1f}' for i, (x, y) in enumerate(pts))
    return f'<path d="{d}" fill="none" stroke="{col}" stroke-width="{w}"' + (f' stroke-dasharray="{dash}"' if dash else '') + '/>'


def walks(n, steps, x0, y0, w, sx, seed, drift=0.0, scale=1.0):
    rnd = random.Random(seed)
    out = []
    for j in range(n):
        y = y0
        pts = [(x0, y)]
        for i in range(1, steps + 1):
            y += -drift * w / steps + scale * rnd.gauss(0, sx)
            pts.append((x0 + w * i / steps, y))
        out.append(pts)
    return out


def axes(x0, y0, w, h):
    return f'<line x1="{x0}" y1="{y0}" x2="{x0}" y2="{y0 + h}" stroke="{K}" stroke-width="1.5"/><line x1="{x0}" y1="{y0 + h}" x2="{x0 + w}" y2="{y0 + h}" stroke="{K}" stroke-width="1.5"/>'


def bell(cx, base, sd, hmax, col, horiz=False, fill=True):
    pts = []
    for i in range(-40, 41):
        x = i / 10 * sd
        y = hmax * math.exp(-x * x / (2 * sd * sd))
        pts.append((base + y, cx + x * 10) if horiz else (cx + x * 10, base - y))
    d = ' '.join(('M' if i == 0 else 'L') + f'{a:.1f} {b:.1f}' for i, (a, b) in enumerate(pts))
    f = f' fill="{col}" fill-opacity=".14"' if fill else ' fill="none"'
    return f'<path d="{d}"{f} stroke="{col}" stroke-width="2"/>'


def dice():
    o = [axes(30, 20, 130, 170)]
    for i in range(6):
        o.append(f'<rect x="{38 + i * 20}" y="70" width="14" height="120" fill="{ACC}" opacity=".7"/>' + T(45 + i * 20, 206, str(i + 1), MU, 11, 400, 'middle'))
    o.append(T(95, 226, '눈마다 1/6', MU, 12, 700, 'middle'))
    o.append(axes(190, 20, 110, 170))
    rnd = random.Random(3)
    s, pts = 0, []
    for n in range(1, 61):
        s += rnd.randint(1, 6)
        pts.append((190 + n * 110 / 60, 190 - (s / n - 1) / 5 * 170))
    o.append(f'<line x1="190" y1="{190 - 2.5 / 5 * 170:.1f}" x2="300" y2="{190 - 2.5 / 5 * 170:.1f}" stroke="{G}" stroke-dasharray="5 4" stroke-width="2"/>')
    o.append(path(pts, R, 1.8) + T(245, 226, '평균 → 3.5', G, 12, 700, 'middle'))
    return wrap(''.join(o), '주사위 눈 막대와 평균이 3.5로 모이는 그래프')


def slice_():
    o = [axes(20, 20, 200, 180)]
    ws = walks(9, 40, 20, 110, 200, 6, 7)
    for j, p in enumerate(ws):
        o.append(path(p, R if j == 0 else LT, 2.2 if j == 0 else 1.2))
    o.append(f'<line x1="150" y1="20" x2="150" y2="200" stroke="{K}" stroke-dasharray="4 3"/>')
    for p in ws:
        x, y = p[26]
        o.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="3.2" fill="{B}"/>')
    o.append(bell(110, 240, 3.2, 60, B, horiz=True))
    o.append(T(60, 226, 'ω 고정 → 경로', R, 12, 700, 'middle') + T(270, 226, 't 고정 → 분포', B, 12, 700, 'middle'))
    return wrap(''.join(o), '경로 묶음과 한 시각의 분포')


def ovals():
    o = []
    for i, (cx, rx) in enumerate([(160, 140), (140, 100), (115, 60)]):
        col = ['rgba(47,111,143,.08)', 'rgba(47,111,143,.14)', 'rgba(47,111,143,.24)'][i]
        o.append(f'<ellipse cx="{cx}" cy="100" rx="{rx}" ry="{70 - i * 18}" fill="{col}" stroke="{ACC}" stroke-width="2"/>')
    o.append(T(95, 104, '𝓕ₜ₁', K, 15, 700, 'middle') + T(196, 104, '𝓕ₜ₂', K, 15, 700, 'middle') + T(275, 104, '𝓕ₜ₃', K, 15, 700, 'middle'))
    o.append(T(160, 196, '𝓕ₛ ⊆ 𝓕ₜ — 정보는 쌓이기만', K, 13, 700, 'middle'))
    o.append(f'<rect x="40" y="206" width="240" height="26" rx="6" fill="rgba(201,48,44,.08)" stroke="{R}"/>' + T(160, 224, '적합: 미래 정보 금지', R, 12, 700, 'middle'))
    return wrap(''.join(o), '커지는 정보 타원 세 개')


def band():
    o = [axes(20, 15, 280, 190)]
    pts_u = [(20 + 280 * i / 40, 110 - 85 * math.sqrt(i / 40)) for i in range(41)]
    pts_d = [(x, 220 - y) for x, y in pts_u]
    d = 'M' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in pts_u) + ' L' + ' L'.join(f'{x:.1f} {y:.1f}' for x, y in reversed(pts_d)) + 'Z'
    o.append(f'<path d="{d}" fill="rgba(19,115,58,.10)"/>')
    for j, p in enumerate(walks(6, 60, 20, 110, 280, 9.5, 11)):
        o.append(path(p, R if j == 0 else LT, 1.8 if j == 0 else 1.2))
    o.append(path(pts_u, G, 1.6, '5 4') + path(pts_d, G, 1.6, '5 4'))
    o.append(T(292, 30, '+√t', G, 13, 700, 'end') + T(292, 198, '−√t', G, 13, 700, 'end'))
    o.append(T(160, 232, '±√t 안에 약 68% (울타리 아님)', K, 12, 700, 'middle'))
    return wrap(''.join(o), '브라운 운동 경로와 ±√t 띠')


def qv():
    o = [axes(20, 20, 130, 150), axes(180, 20, 130, 150)]
    rnd = random.Random(5)
    y, pts = 95, []
    for i in range(61):
        pts.append((20 + 130 * i / 60, y))
        y += rnd.gauss(0, 5)
    o.append(path(pts, R, 1.4))
    o.append(path([(180 + 130 * i / 60, 95 - 40 * math.sin(i / 60 * math.pi)) for i in range(61)], B, 2))
    o.append(T(85, 192, 'Σ(ΔW)² → t', R, 13, 700, 'middle') + T(245, 192, 'Σ(Δy)² → 0', B, 13, 700, 'middle'))
    o.append(T(160, 222, '(dW)² = dt — 이토 공식의 재료', K, 12, 700, 'middle'))
    return wrap(''.join(o), '브라운 운동과 매끄러운 곡선의 이차변동 비교')


def fan():
    o = [axes(20, 20, 280, 180)]
    rnd = random.Random(2)
    y, pts = 140, []
    for i in range(31):
        pts.append((20 + 110 * i / 30, y))
        y += rnd.gauss(0, 4) - 0.6
    o.append(path(pts, K, 2.2))
    sx, sy = pts[-1]
    for p in walks(7, 40, sx, sy, 170, 5, 9):
        o.append(path(p, LT, 1.2))
    o.append(f'<line x1="{sx:.1f}" y1="{sy:.1f}" x2="300" y2="{sy:.1f}" stroke="{R}" stroke-dasharray="6 4" stroke-width="2"/>')
    o.append(f'<circle cx="{sx:.1f}" cy="{sy:.1f}" r="5" fill="{K}"/>' + T(sx, sy - 12, 'Mₛ', K, 13, 700, 'middle'))
    o.append(T(250, sy - 8, 'E[Mₜ | 𝓕ₛ] = Mₛ', R, 12, 700, 'middle') + T(160, 226, '미래 평균 = 지금 (공정한 게임)', K, 12, 700, 'middle'))
    return wrap(''.join(o), '현재 값에서 퍼지는 미래 경로와 수평 평균선')


def leftsum():
    o = [axes(20, 20, 280, 170)]
    rnd = random.Random(4)
    y, pts = 150, []
    for i in range(81):
        pts.append((20 + 280 * i / 80, y))
        y += rnd.gauss(0, 3.4) - 0.9
    o.append(path(pts, ACC, 1.6))
    for k in range(0, 80, 16):
        x, yy = pts[k]
        o.append(f'<line x1="{x:.1f}" y1="{yy:.1f}" x2="{x:.1f}" y2="190" stroke="{RULE}" stroke-dasharray="3 3"/><circle cx="{x:.1f}" cy="{yy:.1f}" r="4.5" fill="{R}"/>')
    x1, x2 = pts[48][0], pts[64][0]
    o.append(f'<rect x="{x1:.1f}" y="20" width="{x2 - x1:.1f}" height="170" fill="rgba(201,48,44,.08)"/>')
    o.append(T(160, 212, 'Σ H(tᵢ)(W(tᵢ₊₁) − W(tᵢ))', K, 13, 700, 'middle') + T(160, 232, '빨간 점 = 구간 왼쪽 끝(지금 아는 값)', R, 12, 700, 'middle'))
    return wrap(''.join(o), '이토 적분의 왼쪽 끝 합')


def chain():
    o = [f'<rect x="10" y="20" width="140" height="160" rx="10" fill="rgba(30,85,200,.06)" stroke="{B}"/>',
         f'<rect x="170" y="20" width="140" height="160" rx="10" fill="rgba(201,48,44,.06)" stroke="{R}"/>']
    o.append(path([(25 + i * 2, 150 - 60 * (i / 55) ** 1.4) for i in range(56)], B, 2.2))
    rnd = random.Random(8)
    y, pts = 150, []
    for i in range(56):
        pts.append((185 + i * 2, y))
        y += rnd.gauss(0, 3.2) - 1.0
    o.append(path(pts, R, 1.6))
    o.append(T(80, 44, '매끄러운 길', B, 13, 700, 'middle') + T(240, 44, '브라운 운동', R, 13, 700, 'middle'))
    o.append(T(80, 205, 'df = f′ dx', B, 14, 700, 'middle') + T(240, 205, 'df = f′ dW + ½f″ dt', R, 13, 700, 'middle'))
    o.append(T(160, 230, '덤 ½f″ dt는 (dW)² = dt에서', K, 12, 700, 'middle'))
    return wrap(''.join(o), '보통 연쇄법칙과 이토 공식 비교')


def sde():
    o = [axes(20, 15, 280, 185)]
    for j, p in enumerate(walks(14, 60, 20, 170, 280, 5.5, 13, drift=0.35)):
        o.append(path(p, LT, 1.1))
    o.append(path([(20, 170), (300, 170 - 0.35 * 280)], R, 2.4, '8 5'))
    o.append(path([(20 + 280 * i / 30, 170 - 0.35 * 280 * i / 30 - 70 * math.sqrt(i / 30)) for i in range(31)], G, 1.6, '5 4'))
    o.append(path([(20 + 280 * i / 30, 170 - 0.35 * 280 * i / 30 + 70 * math.sqrt(i / 30)) for i in range(31)], G, 1.6, '5 4'))
    o.append(T(120, 210, '표류 b → 평균 길', R, 12, 700, 'middle') + T(250, 210, '확산 σ → 퍼짐', G, 12, 700, 'middle'))
    o.append(T(160, 232, 'dX = b dt + σ dW, X₀ = x₀', K, 13, 700, 'middle'))
    return wrap(''.join(o), '확률미분방정식의 표류와 확산')


def fp():
    o = [f'<line x1="10" y1="190" x2="310" y2="190" stroke="{K}" stroke-width="1.5"/>']
    for i, (cx, sd, h, col) in enumerate([(70, 1.0, 140, B), (150, 1.7, 85, ACC), (230, 2.6, 56, R)]):
        o.append(bell(cx, 190, sd, h, col))
        o.append(T(cx, 190 - h - 8, ['t₁', 't₂', 't₃'][i], col, 13, 700, 'middle'))
    o.append(T(160, 212, '표류 = 옮김 · 확산 = 퍼뜨림', K, 13, 700, 'middle') + T(160, 232, '곡선 아래 넓이는 늘 1', G, 12, 700, 'middle'))
    return wrap(''.join(o), '시간에 따라 옮겨 가며 퍼지는 밀도 곡선 세 개')


def hit():
    o = [axes(20, 15, 280, 185), f'<line x1="20" y1="70" x2="300" y2="70" stroke="{R}" stroke-dasharray="6 4" stroke-width="2"/>', T(296, 62, 'a', R, 14, 700, 'end')]
    for j, p in enumerate(walks(3, 60, 20, 175, 280, 8.5, 21, drift=0.45)):
        k = next((i for i, (x, y) in enumerate(p) if y <= 70), None)
        q = p[:k + 1] if k is not None else p
        o.append(path(q, [K, G, B][j], 1.8))
        if k is not None:
            x, y = p[k]
            o.append(f'<circle cx="{x:.1f}" cy="70" r="5" fill="{R}"/><line x1="{x:.1f}" y1="70" x2="{x:.1f}" y2="200" stroke="{R}" stroke-dasharray="3 3"/>' + T(x, 214, 'τₐ', R, 13, 700, 'middle'))
    o.append(T(160, 234, '{τ ≤ t} ∈ 𝓕ₜ — 그 순간 알 수 있는 멈춤', K, 12, 700, 'middle'))
    return wrap(''.join(o), '목표선에 처음 닿는 시각')


def ruin():
    o = [axes(20, 15, 280, 170), f'<line x1="20" y1="35" x2="300" y2="35" stroke="{G}" stroke-width="2"/>', f'<line x1="20" y1="185" x2="300" y2="185" stroke="{R}" stroke-width="2"/>',
         T(296, 30, '목표 N', G, 12, 700, 'end'), T(296, 180, '파산 0', R, 12, 700, 'end')]
    rnd = random.Random(31)
    for j in range(6):
        y, pts = 140, [(20, 140)]
        for i in range(1, 70):
            y += 15 if rnd.random() < 0.5 else -15
            pts.append((20 + 4 * i, y))
            if y <= 35 or y >= 185:
                break
        o.append(path(pts, G if y <= 35 else R if y >= 185 else LT, 1.4))
    o.append(T(160, 208, '목표 도달 확률 = k / N', K, 13, 700, 'middle') + T(160, 230, '멈춘 뒤 평균 = 시작 돈 (조건이 있을 때)', MU, 12, 700, 'middle'))
    return wrap(''.join(o), '도박사의 파산 경로')


def overview():
    o = [axes(10, 30, 110, 120)]
    for j, p in enumerate(walks(7, 40, 10, 100, 110, 4.5, 41, drift=0.18)):
        o.append(path(p, R if j == 0 else LT, 1.6 if j == 0 else 1))
    o.append(f'<rect x="128" y="70" width="70" height="40" rx="8" fill="rgba(47,111,143,.1)" stroke="{ACC}"/>' + T(163, 95, 'dX = μdt + σdW', K, 9, 700, 'middle'))
    o.append(T(124, 94, '→', ACC, 14, 700, 'middle') + T(204, 94, '→', ACC, 14, 700, 'middle'))
    o.append(f'<line x1="212" y1="150" x2="312" y2="150" stroke="{K}" stroke-width="1.5"/>')
    for cx, sd, h, col in [(235, 0.7, 90, B), (260, 1.1, 60, ACC), (285, 1.6, 42, R)]:
        o.append(bell(cx, 150, sd, h, col))
    o.append(T(65, 172, '경로 (01~05장)', R, 11, 700, 'middle') + T(163, 132, 'SDE (06~09장)', ACC, 11, 700, 'middle') + T(262, 172, '밀도 (10장)', B, 11, 700, 'middle'))
    o.append(T(160, 210, '+ 언제 멈출까 (11~12장)', K, 13, 700, 'middle'))
    return wrap(''.join(o), '경로에서 방정식을 거쳐 밀도로 이어지는 전체 그림')


DIA = {'dice': dice, 'slice': slice_, 'ovals': ovals, 'band': band, 'qv': qv, 'fan': fan, 'leftsum': leftsum, 'chain': chain, 'sde': sde, 'fp': fp, 'hit': hit, 'ruin': ruin, 'overview': overview}
