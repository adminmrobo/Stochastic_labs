"""오리엔테이션(목차) 페이지 조립"""
import os, json

FORMAT_NOTE = {
    '첫 강의 + 쪽지시험': '박사의 짧은 강의 뒤 퀴즈로 점검',
    '1:1 토론': '두 수강생이 서로 다른 편을 맡아 맞붙고, 조교가 근거를 점검',
    '역할극 수업': '수강생이 「동전 공개 담당」, 「질문 받는 사람」이 되어 몸으로 겪어 보기',
    '조별 과제': '1조·2조가 같은 대상을 다른 방법으로 조사해 발표',
    '계산배틀': '조교 둘이 숫자로 승부, 수강생은 손계산으로 검산',
    '찬반 토론': '조마다 찬성·반대 편을 맡아 토론하고 모의실험으로 판정',
    '발표수업': '한 조가 발표하고 다른 조가 질문',
    '조별 토론': '조마다 몇 가지 주장을 나눠 맡아 토론 후 결론 정리',
    '쪽지시험 + 졸업 발표': '수강생이 한 줄씩 발표하고 종합 퀴즈로 마무리',
}

TOPICS = {1: '무작위를 기록하는 법', 2: '기본 재료 브라운 운동', 3: '무작위의 미적분', 4: '분포와 멈춤'}


def build(B, chs):
    esc, img, says, rich = B.esc, B.img, B.says, B.rich
    B.GLOSS = {'확률해석': '결과가 우연에 달린 값이 시간에 따라 변하는 모습을 미적분으로 다루는 수학. 확률미적분이라고도 한다.',
               '브라운 운동': '0에서 출발해 구간마다 서로 무관한 정규분포만큼 움직이며 끊김 없이 이어진 무작위 움직임.'}
    o = [B.head(B.SERIES + ' · 오리엔테이션', '중학생도 따라오는 확률해석 13장 + 실전 연습장. 박사 선생님과 두 조교, 수강생 6명이 함께하는 연구실 해설 시리즈.')]
    o.append('<nav class="top" aria-label="목차"><a class="logo" href="index.html">확률해석 교실</a><a href="#three">3줄 요약</a><a href="#cast">등장인물</a><a href="#pillars">네 기둥</a><a href="#tracks">과정</a><a href="#toc">목차</a><a href="#how">수업 방식</a><a href="practice/index.html">실전 연습장</a></nav><div id="prog"></div>')
    o.append(B.cover_html('cover_00', '확률해석 교실', '오리엔테이션 · 00', '불확실한 세상의 미적분 — 13장 + 실전 연습장', '확률해석 교실 표지 — 박사, 조교 둘, 수강생이 무작위 경로 그림 앞에 모인 강의실',
                          chars=[('doc', 'front'), ('fly', 'magnify'), ('robo', 'calc'), ('moa', 'cheer')], seed=3))
    o.append(rich('''<header class="hero"><div class="wrap"><div class="kicker">연구실 해설 시리즈 · 확률해석 입문</div><h1>확률해석 교실 — 불확실한 세상의 미적분</h1>
<p class="q">핵심 질문 — 매 순간 우연히 흔들리는 값도 미적분으로 다룰 수 있을까?</p>
<p>주가, 꽃가루의 떨림, 잉크의 번짐처럼 매 순간 흔들리는 것을 다루는 수학이 [[확률해석]]이에요. 이 시리즈는 인포그래픽 10장에 담긴 아홉 주제를 13장으로 나눠, 동전과 주사위에서 출발해 그림을 직접 움직이며 배우게 만든 수업입니다.</p>
<div class="kpis"><div class="kpi g"><b>13장</b><span>한 장에 개념 2~3단계</span></div><div class="kpi m"><b>4기둥</b><span>기록 · 재료 · 계산 · 분포와 멈춤</span></div><div class="kpi a"><b>9가지</b><span>수업 형식 (토론·배틀·발표·역할극…)</span></div><div class="kpi r"><b>4곳</b><span>마지막 장 실전 연습장의 사업장</span></div></div>''') + says([('doc', 'front', '안녕하세요, 이 교실의 선생님 박사입니다. 행렬이나 벡터는 한 번도 안 나와요. 우리가 쓰는 건 「동전」, 「평균」, 「퍼짐」 세 가지로 시작해요.'),
                                                                                                                                                    ('moa', 'cheer', '저희 수강생 6명이 먼저 헤매 볼게요. 같이 가요!')]) + '</div></header>')
    o.append('''<div class="wrap"><div class="three" id="three"><h2>처음 오신 분께 — 이 시리즈를 3줄로</h2><ol>
<li><b>무엇을:</b> 시간에 따라 우연히 흔들리는 값을 기록하고(확률과정·필트레이션), 기본 재료(브라운 운동·마팅게일)로 계산하고(이토 적분·이토 공식·확률미분방정식), 분포와 멈춤(포커-플랑크·정지시간)으로 답하는 법을 배웁니다.</li>
<li><b>왜 중요한가:</b> 주가와 옵션 가격, 날씨·오염 확산 예측, 확산 모델 AI(노이즈로 그림을 만드는 AI), 보험 위험 계산이 모두 이 개념들 위에 서 있어요.</li>
<li><b>생활·현장에서는:</b> 「1년 뒤 가격 범위는?」, 「목표에 먼저 닿을 확률은?」, 「이 필승법은 진짜일까?」 같은 질문에 숫자로 답하는 도구가 됩니다.</li></ol>
<p class="note">각 장은 독립적으로 읽을 수 있지만 순서대로 읽으면 가장 편해요. 장마다 20~25분이면 충분합니다. 행렬·벡터를 몰라도 됩니다.</p></div></div>''')
    castl = ''.join('<div>%s<div><span class="role">%s</span><b>%s</b><span>%s</span></div></div>' % (img(w, B.PEOPLE[w][2], cls=''), esc(B.PEOPLE[w][1]), esc(B.PEOPLE[w][0]), esc(B.PEOPLE[w][3]))
                    for w in ['doc', 'fly', 'robo', 'sia', 'moa', 'asst', 'x1', 'x2', 'x3'])
    g1 = ''.join(img(w, 'e13', cls='') for w in ['sia', 'asst', 'x1'])
    g2 = ''.join(img(w, 'e13', cls='') for w in ['moa', 'x2', 'x3'])
    o.append(f'''<section class="level" id="cast"><div class="wrap"><h2>등장인물 — 선생님 1명, 조교 2명, 수강생 6명</h2><div class="cast">{castl}</div>
<div class="groups"><div>{g1} <b>1조 「동전조」</b> 시아 · 하루 · X1</div><div>{g2} <b>2조 「주사위조」</b> 모아 · X2 · X3</div></div>
<p class="note">조 이름은 확률해석의 두 출발점에서 왔어요. 동전 걸음은 브라운 운동이 되고(04장), 주사위의 평균은 기댓값이 돼요(01장).</p></div></section>''')
    pill = []
    for p in (1, 2, 3, 4):
        items = ''.join('<li><a href="%s.html">%02d %s</a></li>' % (c['slug'], c['no'], esc(c['title'])) for c in chs if c.get('pillar') == p)
        pill.append('<div><b>기둥 %d · %s</b><ul>%s</ul></div>' % (p, TOPICS[p], items))
    o.append('''<section class="level" id="pillars"><div class="wrap"><h2>네 기둥 — 이 시리즈의 큰 그림</h2>
<p>원자료 표지는 「무작위 경로 묶음 → dX = μdt + σdW → 퍼지는 확률밀도」 한 장의 그림으로 과목 전체를 보여 줘요. 이 시리즈는 그 그림을 네 기둥으로 나눠 차례로 올라가요. 마지막 13장에서 다시 표지 그림으로 돌아와요.</p>
<div class="steps">''' + ''.join(pill) + '''</div>
<details><summary>원자료 표지 인포그래픽 보기 (영어 그림)</summary><img loading="lazy" src="img/source/src01.webp" width="1000" height="1000" alt="Stochastic Analysis 표지 인포그래픽 — 무작위 경로, SDE, 퍼지는 밀도와 아홉 주제"></details>
<div class="panel"><div class="ptitle">네 기둥 카드 — 눌러서 한 줄 요약 보기</div><div data-w="cards" data-o="''' + esc(json.dumps({'cards': [
        ['기둥 1 · 무작위를 기록하는 법', '<p>주사위와 동전으로 확률변수·평균·퍼짐을 잡고(01), 경로 묶음을 두 방향으로 읽는 확률과정(02), 쌓이는 정보와 미래 엿보기 금지(03)를 배워요.</p>'],
        ['기둥 2 · 기본 재료 브라운 운동', '<p>동전 걸음을 잘게 쪼갠 브라운 운동(04), √t 법칙과 이차변동(05), 공정한 게임 마팅게일(06)을 배워요.</p>'],
        ['기둥 3 · 무작위의 미적분', '<p>왼쪽 끝으로만 더하는 이토 적분(07), 연쇄법칙에 덤이 붙는 이토 공식(08), 표류와 확산의 확률미분방정식(09)을 배워요.</p>'],
        ['기둥 4 · 분포와 멈춤', '<p>확률 구름이 옮겨 가고 퍼지는 포커-플랑크 방정식(10), 반칙 없는 멈춤 정지시간(11), 공정한 게임은 멈춰도 공정한가(12)를 배우고, 13장에서 종합 쪽지시험과 졸업 발표를 해요.</p>']]}, ensure_ascii=False)) + '''"></div></div>
</div></section>''')
    def stars(c):
        return B.STARS[B.LEVEL[c['no']]].split(' ')[0]
    cards = ''.join('<a href="%s.html"><span class="n">%02d · %s</span><b>%s</b><span>%s</span><span class="fmt">%s</span></a>' % (
        c['slug'], c['no'], (('기둥 %d' % c['pillar']) if c.get('pillar') else '종합') + ' · ' + stars(c) + ' · 약 %d분' % B.MINUTES[c['no']] + (' <span class="track basic">기본</span>' if c['no'] in B.BASIC else ' <span class="track adv">심화</span>'), esc(c['title']), esc(c['q']), esc(c['format'][0])) for c in chs)
    cards += '<a href="practice/index.html"><span class="n">마지막 장</span><b>실전 연습장 — 확률해석 사업장 시뮬레이터</b><span>동전 게임장, 주식 거래소, 잉크 공장, 정수기 관리소를 직접 운영해 보며 배운 것을 써 봐요.</span><span class="fmt">시뮬레이터</span></a>'
    bas = ' → '.join('<a href="%s.html">%02d</a>' % (c['slug'], c['no']) for c in chs if c['no'] in B.BASIC) + ' → <a href="practice/index.html">실전 연습장</a>'
    adv = ', '.join('<a href="%s.html">%02d %s</a>' % (c['slug'], c['no'], esc(c['title'].split(' — ')[0])) for c in chs if c['no'] not in B.BASIC)
    o.append(f'''<section class="level" id="tracks"><div class="wrap"><h2>두 갈래 과정 — 어디까지 읽을까</h2>
<div class="steps"><div><b class="n">1</b><b>기본 과정 <span class="track basic">기본</span></b><p>처음 오신 분은 이 순서만 따라가도 실전 연습장까지 갈 수 있어요. 이토 적분·이토 공식 없이도 확률미분방정식을 그림과 모의실험으로 이해할 수 있게 짰어요.</p><p>{bas}</p></div>
<div><b class="n">2</b><b>심화 과정 <span class="track adv">심화</span></b><p>기본 과정을 마친 뒤 도전하세요. 대학 이상에서 배우는 계산 규칙을 그림과 손계산으로 맛보는 장이에요.</p><p>{adv}</p></div>
<div><b class="n">3</b><b>심화 단계 접기</b><p>어려운 장의 마지막 단계는 「심화」로 접어 두었어요. 펼치지 않아도 다음 장을 읽을 수 있어요. 장마다 「용어 별명 카드」로 어려운 이름을 먼저 익히세요.</p></div></div></div></section>''')
    o.append(f'<section class="level" id="toc"><div class="wrap"><h2>목차 — 13장 + 실전 연습장</h2><div class="toc">{cards}</div></div></section>')
    rows = ''.join('<tr><td>%s</td><td>%s</td><td>%s</td></tr>' % (esc(k), esc(v), ', '.join('%02d' % c['no'] for c in chs if c['format'][0].startswith(k))) for k, v in FORMAT_NOTE.items())
    o.append(f'''<section class="level" id="how"><div class="wrap"><h2>수업 방식 — 장마다 다른 수업</h2>
<div class="tw"><table class="tb"><thead><tr><th>형식</th><th>어떻게 하나</th><th>나오는 장</th></tr></thead><tbody>{rows}</tbody></table></div>
<h3>한 장의 흐름</h3><div class="steps"><div><b class="n">1</b><b>3줄 요약과 수업 소개</b><p>무엇을·왜·어디에 쓰는지 먼저 봐요.</p></div><div><b class="n">2</b><b>단계 2~3개</b><p>박사의 상황 질문 → 왜 이 방법 / 하루의 수식 질문 → 그림 실험 → 풀이 → 퀴즈.</p></div><div><b class="n">3</b><b>AI 판단 · 조교 대결 · 정리</b><p>AI 답의 오류 찾기, 계산으로 가리는 조교 대결, 한눈에 보는 정리표.</p></div></div>
{says([('fly', 'magnify', '원자료 그림에서 고칠 곳을 찾으면 「바꾼다」 상자로 표시해 뒀어. 원자료도 의심하면서 읽자고.'), ('robo', 'coin', '계산은 저한테 맡기세요! …물론 조교 대결에서 보통 미적분 습관 때문에 자주 틀리지만요.')])}</div></section>''')
    o.append(B.footer_html(None, (chs[0]['slug'] + '.html', '01 ' + chs[0]['title']) if chs else None,
                           '<p class="note">원자료: 사용자가 제공한 확률해석 인포그래픽 10장(@eeanimation 표기, 작성자·연도 확인 필요). 이 시리즈의 숫자 예시는 모두 설명용 예시값입니다.</p>'))
    o.append(B.foot_scripts(kg=False))
    open(os.path.join(B.ROOT, 'index.html'), 'w', encoding='utf-8').write('\n'.join(o))
    print('built index')
