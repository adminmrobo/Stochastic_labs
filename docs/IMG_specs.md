# 그림 지시문 — 확률해석 교실 (픽셀아트)

> 모든 그림 공통: 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
> Characters (attach the four base sheets from the character pack adminmrobo/fruitfly-lab-expressions as reference): 박사 = cheerful scientist with spiky white-and-black hair, round glasses, white lab coat; 초파리 연구원 = small fruit fly researcher with big red eyes holding a magnifying glass; 주판봇 = boxy green-screen robot holding an abacus; 조수 하루 = girl with pink-and-navy twin hair buns in a white hoodie; 인턴 시아 = calm girl with long black hair; 인턴 모아 = smiling girl with long light-brown hair and a red bow; X1·X2·X3 = black silhouette students (identity hidden).

## 만드는 순서
1. 목차 표지(cover_00)를 먼저 받아 그림체를 확인한다.
2. 확인한 cover_00을 참고 그림으로 함께 올려 나머지 표지 → 장면 순서로 3~5장씩 요청한다(같은 비율끼리).
3. 받은 PNG의 4배 격자를 확인한 뒤 무손실 WebP로 바꿔 `img/cover/`, `img/scene/`에 넣고 `python3 tools/build.py`.

## 표지 (16:9, 1920×1080 — 원래 격자 480×270) · 15장
표지 공통: 인물은 화면 왼쪽 절반, 오른쪽 46%는 제목이 올라갈 흰 여백으로 비운다. 오른쪽 아래에 옅은 색 무작위 경로 줄 몇 가닥(장식)만 둔다.

### cover_00 — 오리엔테이션
```
The whole class (박사, two assistants, six students) gathered in a bright white lecture room in front of a big chalkboard showing many wiggly random paths spreading from one point; 모아 waving, 하루 holding a coin. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_01 — 확률변수와 퍼짐 — 주사위 하나에서 시작
```
Lab classroom scene: a big six-sided die and a coin floating, 하루 surprised, 박사 pointing at a bar chart. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_02 — 확률과정 — 시간 위에 늘어선 확률변수
```
Lab classroom scene: a bundle of tangled wiggly paths like threads; 시아 tracing one red thread, 모아 holding a bell-shaped curve card. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_03 — 필트레이션 — 정보는 시간과 함께 쌓인다
```
Lab classroom scene: 모아 revealing coins one by one from behind a screen, other students raising hands; a growing set of nested soap bubbles. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_04 — 브라운 운동 — 동전 걸음을 끝없이 잘게
```
Lab classroom scene: pollen grains jiggling on water under a giant microscope; X1 chopping a staircase path into tiny steps. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_05 — √t 법칙과 이차변동 — 브라운 운동의 두 계산
```
Lab classroom scene: an ink drop spreading in water with rings; 주판봇 and 초파리 facing off over a scoreboard. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_06 — 마팅게일 — 공정한 게임의 수학
```
Lab classroom scene: a balance scale with two coin stacks perfectly level; two teams debating at desks. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_07 — 이토 적분 — 왼쪽 끝으로만 더하는 규칙
```
Lab classroom scene: 하루 presenting at a whiteboard with thin rectangles under a jagged line, red dots at the left edge of each rectangle. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_08 — 이토 공식 — 연쇄법칙에 붙는 덤
```
Lab classroom scene: 하루 and X1 debating; a smooth road on one side and a bumpy gravel road on the other. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_09 — 확률미분방정식 — 표류와 확산이 함께 미는 세계
```
Lab classroom scene: a paper boat drifting down a river with small waves; students holding control dials. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_10 — 포커-플랑크 방정식 — 확률 구름은 이렇게 움직인다
```
Lab classroom scene: a cloud of glowing particles spreading and drifting with the wind; 모아 presenting. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_11 — 정지시간 — 지금까지의 정보로 멈추기
```
Lab classroom scene: a finish-line ribbon (no text) that random paths reach at different moments; students sorting rule cards. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_12 — 선택적 정지 — 공정한 게임은 멈춰도 공정할까
```
Lab classroom scene: a coin-game table with a small stack and a tall stack of chips; 초파리 arms crossed confidently. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_13 — 종합 — 기말 쪽지시험과 졸업 발표
```
Lab classroom scene: graduation scene: the six students in caps in front of a board showing paths flowing into a bell-shaped cloud. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### cover_practice — 실전 연습장
```
Four tiny shop fronts in a row (coin game hall, stock exchange booth, ink factory, water purifier station) with 박사 and students standing in front, no signs or text. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

## 장면 그림 (3:2, 1200×800 — 원래 격자 300×200) · 26장
각 장 1·2단계 「일상으로 치면」 카드에 들어간다. 사람은 연구실 캐릭터 팩 인물로, 비유 장면을 그대로 그린다.

### scene_01_lv1 — 뽑기 가게 비유
- 장면: 놀이공원 뽑기에서 한 번은 꽝, 한 번은 대박이어도, 하루 종일 지켜보면 손님 한 명이 받는 평균 상금은 거의 일정해요. 가게 주인은 그 평균으로 가격을 정해요.
```
Pixel art scene illustrating: 놀이공원 뽑기에서 한 번은 꽝, 한 번은 대박이어도, 하루 종일 지켜보면 손님 한 명이 받는 평균 상금은 거의 일정해요. 가게 주인은 그 평균으로 가격을 정해요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_01_lv2 — 버스 배차 비유
- 장면: 버스 두 대가 평균 10분마다 와요. 한 대는 늘 9~11분, 다른 한 대는 2분 만에 오기도 하고 18분이 걸리기도 해요. 평균은 같아도 기다리는 사람 마음은 전혀 달라요.
```
Pixel art scene illustrating: 버스 두 대가 평균 10분마다 와요. 한 대는 늘 9~11분, 다른 한 대는 2분 만에 오기도 하고 18분이 걸리기도 해요. 평균은 같아도 기다리는 사람 마음은 전혀 달라요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_02_lv1 — 한 사람의 하루 비유
- 장면: 반 친구 한 명의 하루 기분 기록을 보면, 아침엔 좋았다가 점심에 떨어지고 저녁에 회복하는 「그 친구만의 이야기」가 보여요.
```
Pixel art scene illustrating: 반 친구 한 명의 하루 기분 기록을 보면, 아침엔 좋았다가 점심에 떨어지고 저녁에 회복하는 「그 친구만의 이야기」가 보여요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_02_lv2 — 운동회 사진 비유
- 장면: 운동회 달리기에서 출발 10초 뒤 사진을 찍으면, 누가 어디 있는지 한눈에 보여요. 「선수의 몇 %가 결승선 근처에 있나」는 이 사진 한 장으로 알 수 있어요.
```
Pixel art scene illustrating: 운동회 달리기에서 출발 10초 뒤 사진을 찍으면, 누가 어디 있는지 한눈에 보여요. 「선수의 몇 %가 결승선 근처에 있나」는 이 사진 한 장으로 알 수 있어요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_03_lv1 — 스무고개 비유
- 장면: 스무고개에서 「동물인가요?」 「네」를 들은 순간, 식물 후보는 모두 지워져요. 다음 질문을 해도 식물이 다시 후보로 돌아오지는 않아요.
```
Pixel art scene illustrating: 스무고개에서 「동물인가요?」 「네」를 들은 순간, 식물 후보는 모두 지워져요. 다음 질문을 해도 식물이 다시 후보로 돌아오지는 않아요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_03_lv2 — 시험 엿보기 비유
- 장면: 시험 중에 옆 사람 답안을 보고 쓴 100점은 실력이 아니에요. 「시험지를 받은 뒤 내가 본 것」만으로 쓴 답이어야 진짜 점수예요.
```
Pixel art scene illustrating: 시험 중에 옆 사람 답안을 보고 쓴 100점은 실력이 아니에요. 「시험지를 받은 뒤 내가 본 것」만으로 쓴 답이어야 진짜 점수예요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_04_lv1 — 프레임 늘리기 비유
- 장면: 동영상을 1초 10장에서 1초 100장으로 바꿔도 공이 1초에 움직이는 거리는 같아야 해요. 프레임이 많아지면 한 장당 움직임을 줄여야 하죠. 다만 무작위 움직임은 「거리」가 아니라 「분산」을 맞춰야 해서 1/√n만큼 줄여요.
```
Pixel art scene illustrating: 동영상을 1초 10장에서 1초 100장으로 바꿔도 공이 1초에 움직이는 거리는 같아야 해요. 프레임이 많아지면 한 장당 움직임을 줄여야 하죠. 다만 무작위 움직임은 「거리」가 아니라 「분산」을 맞춰야 해서 1/√n만큼 줄여요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_04_lv2 — 구간별 강수량 비유
- 장면: 월요일 비가 많이 왔다고 화요일 강수량을 맞힐 수 없는 동네가 있다고 해 봐요. 그 동네의 「하루 강수량」은 날마다 새로 뽑는 제비뽑기이고, 이틀 치를 합치면 퍼짐도 이틀 치예요.
```
Pixel art scene illustrating: 월요일 비가 많이 왔다고 화요일 강수량을 맞힐 수 없는 동네가 있다고 해 봐요. 그 동네의 「하루 강수량」은 날마다 새로 뽑는 제비뽑기이고, 이틀 치를 합치면 퍼짐도 이틀 치예요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_05_lv1 — 잉크 번짐 비유
- 장면: 물에 떨어뜨린 잉크 방울은 처음엔 빨리 번지다가 점점 느리게 번져요. 번진 반지름이 시간에 비례하지 않고 제곱근에 비례해서 그래요(아인슈타인, 1905).
```
Pixel art scene illustrating: 물에 떨어뜨린 잉크 방울은 처음엔 빨리 번지다가 점점 느리게 번져요. 번진 반지름이 시간에 비례하지 않고 제곱근에 비례해서 그래요(아인슈타인, 1905). Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_05_lv2 — 도로 흔들림 비유
- 장면: 고속도로에서는 핸들을 아주 조금씩만 움직여 「흔들림 제곱 총량」이 거의 0이에요. 자갈길에서는 짧게 잘라 봐도 매번 흔들려서 총량이 운전 시간에 비례해 쌓여요.
```
Pixel art scene illustrating: 고속도로에서는 핸들을 아주 조금씩만 움직여 「흔들림 제곱 총량」이 거의 0이에요. 자갈길에서는 짧게 잘라 봐도 매번 흔들려서 총량이 운전 시간에 비례해 쌓여요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_06_lv1 — 반쯤 끝난 경기 비유
- 장면: 전반 2 : 0이 된 뒤의 「최종 점수 예상」은 2 : 0에 후반 예상 득점을 더한 값이에요. 이미 들어간 골은 확정, 후반만 평균을 내요.
```
Pixel art scene illustrating: 전반 2 : 0이 된 뒤의 「최종 점수 예상」은 2 : 0에 후반 예상 득점을 더한 값이에요. 이미 들어간 골은 확정, 후반만 평균을 내요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_06_lv2 — 공정한 동전 게임 비유
- 장면: 수수료 없는 공정한 동전 게임에서는 지금까지 얼마를 땄든 잃었든, 「앞으로의 평균 이득」은 늘 0이에요. 원자료가 저울 그림(Fair-game)으로 그린 뜻이에요.
```
Pixel art scene illustrating: 수수료 없는 공정한 동전 게임에서는 지금까지 얼마를 땄든 잃었든, 「앞으로의 평균 이득」은 늘 0이에요. 원자료가 저울 그림(Fair-game)으로 그린 뜻이에요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_07_lv1 — 판자로 넓이 재기 비유
- 장면: 언덕 넓이를 판자로 잴 때, 판자를 손가락 굵기로 얇게 하면 높이를 판자 왼쪽에서 재든 가운데에서 재든 차이가 거의 없어요.
```
Pixel art scene illustrating: 언덕 넓이를 판자로 잴 때, 판자를 손가락 굵기로 얇게 하면 높이를 판자 왼쪽에서 재든 가운데에서 재든 차이가 거의 없어요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_07_lv2 — 주식 거래 비유
- 장면: 주식 거래에서 「내일 가격이 오를 만큼 오늘 많이 사 두기」는 불가능해요. 오늘 정한 주식 수 × 내일 가격 변화가 실제 손익이에요. 이토 적분은 이 현실 규칙을 그대로 적분으로 만든 것이에요.
```
Pixel art scene illustrating: 주식 거래에서 「내일 가격이 오를 만큼 오늘 많이 사 두기」는 불가능해요. 오늘 정한 주식 수 × 내일 가격 변화가 실제 손익이에요. 이토 적분은 이 현실 규칙을 그대로 적분으로 만든 것이에요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_08_lv1 — 땅 넓히기 비유
- 장면: 한 변 1m 땅을 1cm 늘리면, 늘어난 넓이는 긴 띠 두 개(2 × 1m × 1cm)와 모서리의 작은 정사각형(1cm × 1cm)이에요. 작은 정사각형은 띠보다 100배 작아 무시해요.
```
Pixel art scene illustrating: 한 변 1m 땅을 1cm 늘리면, 늘어난 넓이는 긴 띠 두 개(2 × 1m × 1cm)와 모서리의 작은 정사각형(1cm × 1cm)이에요. 작은 정사각형은 띠보다 100배 작아 무시해요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_08_lv2 — 자갈길 연비 비유
- 장면: 자갈길에서는 작은 흔들림이 끊임없이 쌓여 「달린 시간에 비례하는」 추가 연료가 들어요. 흔들림의 방향(위·아래)은 상쇄돼도, 흔들림의 제곱은 상쇄되지 않아요.
```
Pixel art scene illustrating: 자갈길에서는 작은 흔들림이 끊임없이 쌓여 「달린 시간에 비례하는」 추가 연료가 들어요. 흔들림의 방향(위·아래)은 상쇄돼도, 흔들림의 제곱은 상쇄되지 않아요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_09_lv1 — 종이배 비유
- 장면: 강물이 1분에 30m씩 하류로 흐르면 종이배의 평균 위치는 1분 뒤 30m 하류예요. 잔물결은 배를 그 둘레로 흩어 놓을 뿐, 평균 위치를 바꾸지는 않아요.
```
Pixel art scene illustrating: 강물이 1분에 30m씩 하류로 흐르면 종이배의 평균 위치는 1분 뒤 30m 하류예요. 잔물결은 배를 그 둘레로 흩어 놓을 뿐, 평균 위치를 바꾸지는 않아요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_09_lv2 — 내비게이션 비유
- 장면: 내비게이션은 「지금 위치 + 속도 × 1초」로 다음 위치를 계산하고, 오차가 생기면 다시 고쳐요. 오일러-마루야마는 거기에 「무작위 흔들림 한 번」을 더한 계산이에요.
```
Pixel art scene illustrating: 내비게이션은 「지금 위치 + 속도 × 1초」로 다음 위치를 계산하고, 오차가 생기면 다시 고쳐요. 오일러-마루야마는 거기에 「무작위 흔들림 한 번」을 더한 계산이에요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_10_lv1 — 운동장 비유
- 장면: 운동장 학생들을 위에서 찍으면 처음엔 가운데 몰려 있다가 점점 넓게 퍼져요. 사람 수는 그대로인데 「한 곳에 몰린 정도(밀도)」만 낮아져요.
```
Pixel art scene illustrating: 운동장 학생들을 위에서 찍으면 처음엔 가운데 몰려 있다가 점점 넓게 퍼져요. 사람 수는 그대로인데 「한 곳에 몰린 정도(밀도)」만 낮아져요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_10_lv2 — 연기 비유
- 장면: 굴뚝 연기는 바람(표류)이 통째로 옮기고, 공기의 떨림(확산)이 넓게 번지게 해요. 바람이 없으면 제자리에서 번지기만, 떨림이 없으면 모양 그대로 떠밀려 가기만 해요.
```
Pixel art scene illustrating: 굴뚝 연기는 바람(표류)이 통째로 옮기고, 공기의 떨림(확산)이 넓게 번지게 해요. 바람이 없으면 제자리에서 번지기만, 떨림이 없으면 모양 그대로 떠밀려 가기만 해요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_11_lv1 — 목표 체중 비유
- 장면: 다이어트 중 「처음으로 60kg이 되는 날」은 미리 날짜를 모르지만, 그날 아침 체중계에 오르면 「바로 오늘이다」를 알 수 있어요.
```
Pixel art scene illustrating: 다이어트 중 「처음으로 60kg이 되는 날」은 미리 날짜를 모르지만, 그날 아침 체중계에 오르면 「바로 오늘이다」를 알 수 있어요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_11_lv2 — 바닥에서 사기 비유
- 장면: 「바닥에서 사서 꼭대기에서 판다」는 말은 쉽지만, 바닥은 지나고 나서야 바닥인 줄 알아요. 그날 당일에는 「지금까지 중 최저」인지만 알 뿐이에요.
```
Pixel art scene illustrating: 「바닥에서 사서 꼭대기에서 판다」는 말은 쉽지만, 바닥은 지나고 나서야 바닥인 줄 알아요. 그날 당일에는 「지금까지 중 최저」인지만 알 뿐이에요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_12_lv1 — 게임 머니 비유
- 장면: 게임 머니 3000원으로 1만 원을 노리면, 0원이 되기 전에 1만 원을 만들 확률은 30%뿐이에요. 출발점이 0에 더 가까우니까요. 그래도 평균 결과는 3000원으로 공정해요.
```
Pixel art scene illustrating: 게임 머니 3000원으로 1만 원을 노리면, 0원이 되기 전에 1만 원을 만들 확률은 30%뿐이에요. 출발점이 0에 더 가까우니까요. 그래도 평균 결과는 3000원으로 공정해요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_12_lv2 — 필승법 광고 비유
- 장면: 「질 때마다 두 배」는 31번 중 30번은 1000원을 벌지만, 1번은 3만 1000원을 잃어요. 손님은 자주 이긴 기억만 남지만 평균은 정확히 0이고, 카지노는 판돈 한도로 이 전략을 막아요.
```
Pixel art scene illustrating: 「질 때마다 두 배」는 31번 중 30번은 1000원을 벌지만, 1번은 3만 1000원을 잃어요. 손님은 자주 이긴 기억만 남지만 평균은 정확히 0이고, 카지노는 판돈 한도로 이 전략을 막아요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_13_lv1 — 일기 예보 비유
- 장면: 태풍 예상 경로 30줄을 겹쳐 그린 화면(경로)과, 「내일 이 지역에 비 올 확률 70%」 지도(분포)는 같은 계산에서 나와요. 경로를 많이 모아 세로로 자르면 확률 지도가 돼요.
```
Pixel art scene illustrating: 태풍 예상 경로 30줄을 겹쳐 그린 화면(경로)과, 「내일 이 지역에 비 올 확률 70%」 지도(분포)는 같은 계산에서 나와요. 경로를 많이 모아 세로로 자르면 확률 지도가 돼요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

### scene_13_lv2 — 졸업 앨범 비유
- 장면: 졸업 앨범의 한 줄 소개는 그 친구의 가장 중요한 특징만 담아요. 한 줄로 쓸 수 있다면 그 친구를 잘 아는 거예요.
```
Pixel art scene illustrating: 졸업 앨범의 한 줄 소개는 그 친구의 가장 중요한 특징만 담아요. 한 줄로 쓸 수 있다면 그 친구를 잘 아는 거예요. Use the lab characters as the people in the scene. 16-bit RPG pixel art, crisp pixel grid drawn at 480×270 then upscaled 4× with nearest neighbor, limited palette, pure white background (#FFFFFF), soft teal accent (#2F6F8F), no text, no letters, no numbers, no logos in the image.
```

## 저장 이름 체크리스트
- [ ] img/cover/cover_00.webp
- [ ] img/cover/cover_01.webp
- [ ] img/cover/cover_02.webp
- [ ] img/cover/cover_03.webp
- [ ] img/cover/cover_04.webp
- [ ] img/cover/cover_05.webp
- [ ] img/cover/cover_06.webp
- [ ] img/cover/cover_07.webp
- [ ] img/cover/cover_08.webp
- [ ] img/cover/cover_09.webp
- [ ] img/cover/cover_10.webp
- [ ] img/cover/cover_11.webp
- [ ] img/cover/cover_12.webp
- [ ] img/cover/cover_13.webp
- [ ] img/cover/cover_practice.webp
- [ ] img/scene/scene_01_lv1.webp
- [ ] img/scene/scene_01_lv2.webp
- [ ] img/scene/scene_02_lv1.webp
- [ ] img/scene/scene_02_lv2.webp
- [ ] img/scene/scene_03_lv1.webp
- [ ] img/scene/scene_03_lv2.webp
- [ ] img/scene/scene_04_lv1.webp
- [ ] img/scene/scene_04_lv2.webp
- [ ] img/scene/scene_05_lv1.webp
- [ ] img/scene/scene_05_lv2.webp
- [ ] img/scene/scene_06_lv1.webp
- [ ] img/scene/scene_06_lv2.webp
- [ ] img/scene/scene_07_lv1.webp
- [ ] img/scene/scene_07_lv2.webp
- [ ] img/scene/scene_08_lv1.webp
- [ ] img/scene/scene_08_lv2.webp
- [ ] img/scene/scene_09_lv1.webp
- [ ] img/scene/scene_09_lv2.webp
- [ ] img/scene/scene_10_lv1.webp
- [ ] img/scene/scene_10_lv2.webp
- [ ] img/scene/scene_11_lv1.webp
- [ ] img/scene/scene_11_lv2.webp
- [ ] img/scene/scene_12_lv1.webp
- [ ] img/scene/scene_12_lv2.webp
- [ ] img/scene/scene_13_lv1.webp
- [ ] img/scene/scene_13_lv2.webp
