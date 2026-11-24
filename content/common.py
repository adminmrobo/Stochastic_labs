# 시리즈 공용 데이터
SERIES = '확률해석 교실 — 불확실한 세상의 미적분'
SITE = 'https://adminmrobo.github.io/stochastic_labs/'
AUTHOR = {'name': '안상선', 'en': 'Ahn Sangsun', 'site': 'https://adminmrobo.github.io/who_am_i/who_am_i.html', 'org': '(주)M-Robo 대표'}

# who: (이름, 이 시리즈의 자리, 기본 표정, 한 줄 소개)
PEOPLE = {
    'doc': ('박사', '선생님', 'front', '목소리는 크지만 판단은 계산대로. 막히는 곳에서 꼭 멈춰 줍니다.'),
    'fly': ('초파리 연구원', '조교 (의심 담당)', 'magnify', '작지만 날카롭다. "정말 그래?" 하고 모의실험부터 돌려 봅니다.'),
    'robo': ('주판봇', '조교 (확신 담당)', 'calc', '빠른 계산이 자랑. 가끔 보통 미적분 습관대로 너무 빨리 확신합니다.'),
    'sia': ('인턴 시아', '수강생 · 1조', 'e13', '조용하고 꼼꼼한 정리 담당. 표로 정리하면 마음이 놓인다.'),
    'moa': ('인턴 모아', '수강생 · 2조', 'e13', '상냥하고 잘 웃는다. 발표와 응원 목소리가 제일 크다.'),
    'asst': ('조수 하루', '수강생 · 1조', 'e13', '수식이 나오면 손을 번쩍 드는 질문 담당. 처음 오신 분의 눈높이.'),
    'x1': ('미공개 X1', '수강생 · 1조', 'e13', '정체는 비밀. 짧고 엉뚱한 질문을 던진다.'),
    'x2': ('미공개 X2', '수강생 · 2조', 'e13', '정체는 비밀. 조용히 그래프를 그려 온다.'),
    'x3': ('미공개 X3', '수강생 · 2조', 'e13', '정체는 비밀. 동전 던지기와 숫자 세기를 좋아한다.'),
}

CHAPTERS = [('ch%02d' % i, None) for i in range(1, 14)]

_V = {'title': True, 'author': True, 'year': True, 'doi': False, 'pages': False}
REFS = {
    'src_infographics': {'type': 'graphic', 'title': 'Stochastic Analysis — Calculus under uncertainty (인포그래픽 10장)', 'author': [{'literal': '@eeanimation (사용자 제공 자료)'}],
                         'year': 2026, 'role': 'primary', 'verified': {'title': True, 'author': False, 'year': False},
                         'short': '원자료 인포그래픽 10장 (@eeanimation, 사용자 제공 — 작성자·연도 확인 필요)', 'use': '9개 주제의 목록과 그림 구성의 출발점'},
    'oksendal2003': {'type': 'book', 'title': 'Stochastic Differential Equations: An Introduction with Applications (6th ed.)', 'author': [{'family': 'Øksendal', 'given': 'Bernt'}], 'year': 2003,
                     'publisher': 'Springer', 'role': 'background', 'verified': dict(_V), 'short': 'Øksendal (2003) Stochastic Differential Equations',
                     'use': '이토 적분·이토 등거리·이토 공식·확률미분방정식의 표준 정의'},
    'shreve2004': {'type': 'book', 'title': 'Stochastic Calculus for Finance II: Continuous-Time Models', 'author': [{'family': 'Shreve', 'given': 'Steven E.'}], 'year': 2004,
                   'publisher': 'Springer', 'role': 'background', 'verified': dict(_V), 'short': 'Shreve (2004) Stochastic Calculus for Finance II',
                   'use': '필트레이션·마팅게일·이차변동·주가 모형(기하 브라운 운동)'},
    'karatzas1991': {'type': 'book', 'title': 'Brownian Motion and Stochastic Calculus (2nd ed.)', 'author': [{'family': 'Karatzas', 'given': 'Ioannis'}, {'family': 'Shreve', 'given': 'Steven E.'}], 'year': 1991,
                     'publisher': 'Springer', 'role': 'background', 'verified': dict(_V), 'short': 'Karatzas & Shreve (1991) Brownian Motion and Stochastic Calculus',
                     'use': '정지시간·선택적 정지 정리의 조건·반사 원리'},
    'williams1991': {'type': 'book', 'title': 'Probability with Martingales', 'author': [{'family': 'Williams', 'given': 'David'}], 'year': 1991, 'publisher': 'Cambridge University Press',
                     'role': 'background', 'verified': dict(_V), 'short': 'Williams (1991) Probability with Martingales', 'use': '조건부 기댓값·이산 마팅게일·도박사의 파산'},
    'risken1989': {'type': 'book', 'title': 'The Fokker-Planck Equation: Methods of Solution and Applications (2nd ed.)', 'author': [{'family': 'Risken', 'given': 'Hannes'}], 'year': 1989,
                   'publisher': 'Springer', 'role': 'background', 'verified': dict(_V), 'short': 'Risken (1989) The Fokker-Planck Equation', 'use': '포커-플랑크 방정식과 평형 분포'},
    'kloeden1992': {'type': 'book', 'title': 'Numerical Solution of Stochastic Differential Equations', 'author': [{'family': 'Kloeden', 'given': 'Peter E.'}, {'family': 'Platen', 'given': 'Eckhard'}], 'year': 1992,
                    'publisher': 'Springer', 'role': 'background', 'verified': dict(_V), 'short': 'Kloeden & Platen (1992) Numerical Solution of SDEs', 'use': '오일러-마루야마 근사'},
    'einstein1905': {'type': 'article-journal', 'title': 'Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen', 'author': [{'family': 'Einstein', 'given': 'Albert'}],
                     'year': 1905, 'container': 'Annalen der Physik', 'volume': '17', 'pages': '549-560', 'role': 'background', 'verified': dict(_V),
                     'short': 'Einstein (1905) 브라운 운동 논문', 'use': '입자의 퍼짐이 √t로 커진다는 관찰의 역사적 배경'},
}
