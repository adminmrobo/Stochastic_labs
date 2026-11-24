# Genspark 이미지 프롬프트 — 확률해석 교실

표지 15장(16:9)과 장면 26장(3:2)을 Genspark에서 만들기 위한 프롬프트예요. 프롬프트는 영어로 썼어요(그림 생성기가 더 정확히 따라요). 그림 안에는 글자를 넣지 않고, 제목은 페이지에서 따로 얹어요.

## 쓰는 법
1. **대화 하나 = 묶음 하나.** 아래 묶음 순서대로 새 대화를 열고, 묶음 안 프롬프트를 하나씩 보내요(같은 비율끼리만 한 대화에서).
2. **첨부 그림 (모든 묶음 공통):** 캐릭터 팩 `adminmrobo/fruitfly-lab-expressions`의 `images/_sheets/lab6_lineup.png`(박사·하루·시아·모아·주판봇·초파리)와 `images/_sheets/spares_sheet.png`(X1~X3)를 올려요.
3. **묶음 A(cover_00)를 먼저** 받아 그림체를 확인해요. 마음에 들면 그 결과를 묶음 B부터 「참고 그림」으로 함께 올리고 첫 줄에 `Match the art style of the attached cover_00 exactly.`를 붙여요.
4. 받은 PNG는 저장 이름대로 보내 주시면, 4배 픽셀 격자를 확인해 무손실 WebP로 바꿔 `img/cover/`, `img/scene/`에 넣고 페이지를 다시 만들게요.

## 표정·인물이 틀렸을 때 (고치기 문장)
```
Edit only the face of <character> to match the attached expression image. Keep everything else in the picture exactly the same, same pixel grid and colors. No text.
```
표정 그림은 캐릭터 팩의 `images/<doctor|haru|sia|moa|jupanbot|fruitfly|x1|x2|x3>/E01_joy.png` 같은 파일을 첨부해요.

---

## 표지 (16:9) — 15장

### 묶음 A — 그림체 확인용 (1장)

### cover_00 — 오리엔테이션
저장 이름: `cover_00.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). The whole class in a bright lecture room in front of a big chalkboard covered with many wiggly random-walk lines spreading out from one point like a fan. The Professor points at the board, Moa waves cheerfully, Haru holds up a coin, the others stand in a row. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 B — 표지 01~04

### cover_01 — 확률변수와 퍼짐
저장 이름: `cover_01.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). A giant pixel six-sided die and a spinning coin float above a desk with a small bar chart of six equal bars. Haru looks surprised at the die, the Professor points at the bar chart, Jupanbot counts on his abacus. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_02 — 확률과정
저장 이름: `cover_02.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow). A bundle of tangled wiggly threads stretched across a board from left to right; Sia traces one thread highlighted in red with her finger, Moa holds up a card with a bell-shaped curve. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_03 — 필트레이션
저장 이름: `cover_03.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). Moa stands behind a small folding screen and reveals coins one by one; Haru and X3 raise their hands. Above them three nested soap bubbles, each larger than the last, glow softly. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_04 — 브라운 운동
저장 이름: `cover_04.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat). A giant brass microscope looking at tiny pollen grains jiggling on a water dish; X1 uses a little knife to chop a big zig-zag step line into many tiny steps. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 C — 표지 05~08

### cover_05 — √t 법칙과 이차변동
저장 이름: `cover_05.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). A glass of water with a drop of teal ink spreading in widening rings; Jupanbot and the Fruit-fly researcher face off across a small table like a calculation duel, the Professor referees with a stopwatch. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_06 — 마팅게일
저장 이름: `cover_06.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow). A large balance scale with two equal stacks of coins, perfectly level; Sia and Moa sit at two debate desks facing each other. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_07 — 이토 적분
저장 이름: `cover_07.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). Haru presents at a whiteboard showing a jagged line with thin vertical rectangles under it, a red dot on the LEFT edge of each rectangle. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_08 — 이토 공식
저장 이름: `cover_08.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat). Haru and X1 debate; behind Haru a smooth curved road, behind X1 a bumpy gravel road with small rocks. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 D — 표지 09~12

### cover_09 — 확률미분방정식
저장 이름: `cover_09.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow). A paper boat drifting down a small river with gentle ripples; Sia holds a control box with two dials, one marked by a straight arrow icon and one by a wavy icon. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_10 — 포커-플랑크 방정식
저장 이름: `cover_10.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat). A soft glowing cloud of tiny teal particles drifting to the right and spreading wider; Moa presents with a pointer, X2 sketches a bell curve on a clipboard. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_11 — 정지시간
저장 이름: `cover_11.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). Several wiggly paths climb toward a horizontal ribbon line; each path stops with a small red flag at the moment it first touches the ribbon. X3 sorts six blank rule cards into two piles. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_12 — 선택적 정지
저장 이름: `cover_12.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). A coin-game table with one short stack and one very tall stack of chips; the Fruit-fly researcher stands confidently with arms crossed, Jupanbot looks nervous. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 E — 표지 13 · 실전 연습장

### cover_13 — 종합
저장 이름: `cover_13.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). Graduation day: the six students in graduation caps in front of a board where many wiggly paths flow through an arrow into a bell-shaped cloud; the Professor claps. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### cover_practice — 실전 연습장
저장 이름: `cover_practice.png`
```
Composition 16:9 landscape (1920x1080, pixel grid 480x270). Put all characters and props in the LEFT 54% of the frame, standing on a light grey floor line near the bottom. Keep the RIGHT 46% almost empty pure white for a title (only a few faint teal pixel zig-zag random-walk lines in its lower part as decoration). Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). A tiny street of four pixel shop fronts side by side: a coin game hall (coin icon), a stock booth (up-down chart icon), an ink factory (ink drop icon), a water purifier station (water drop icon). Characters stand in front, no signs with words. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

---

## 장면 그림 (3:2) — 26장
각 장 1·2단계의 「일상으로 치면」 비유 장면이에요. 표지 그림체를 참고 그림으로 함께 올려요.

### 묶음 F — 장면 01~02장

### scene_01_lv1 — 뽑기 가게
저장 이름: `scene_01_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). An amusement-park capsule prize booth. Haru and X3 pull capsules: some are empty, some hold big prizes. The Professor, as shop owner, calmly looks at a tally sheet showing that the day's average prize is steady. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_01_lv2 — 버스 배차
저장 이름: `scene_01_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow). Two bus stops side by side. At the left stop Sia waits calmly as buses arrive at even intervals. At the right stop Moa checks her watch impatiently: one bus just left early and the next is nowhere in sight. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_02_lv1 — 한 사람의 하루
저장 이름: `scene_02_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow). Sia holds a diary page showing one red mood line across a day: high at a sunrise icon, dipping at a cloudy noon icon, recovering at a sunset icon. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_02_lv2 — 운동회 사진
저장 이름: `scene_02_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat). School sports day race seen from the side, ten seconds after the start: runners are spread out at different points along the track. The Professor takes a snapshot with a pixel camera. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 G — 장면 03~04장

### scene_03_lv1 — 스무고개
저장 이름: `scene_03_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow). A guessing game: Moa hides an answer card behind her back; on a board of picture cards (animals and plants), all plant cards are crossed out with red X marks while Haru and Sia think. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_03_lv2 — 시험 엿보기
저장 이름: `scene_03_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). An exam room: X1 leans to peek at a neighbor's paper while the Fruit-fly researcher, as proctor, catches it with a magnifying glass; Haru writes honestly at her own desk. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_04_lv1 — 프레임 늘리기
저장 이름: `scene_04_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). Two film strips: one with a few frames where a ball jumps far between frames, one with many frames where the ball moves in tiny steps. Jupanbot runs a small projector. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_04_lv2 — 구간별 강수량
저장 이름: `scene_04_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat). A row of seven rain gauges for each day of the week, each filled to a different random level. Moa and X2 compare them with clipboards. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 H — 장면 05~06장

### scene_05_lv1 — 잉크 번짐
저장 이름: `scene_05_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie). Three glasses of water in a row showing a teal ink drop at three moments: small dot, wider cloud, much wider but paler cloud. The Professor holds a stopwatch. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_05_lv2 — 도로 흔들림
저장 이름: `scene_05_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). Split view: Jupanbot drives a small car calmly on a smooth highway; Haru drives a car bouncing up and down on a gravel road with little dust puffs. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_06_lv1 — 반쯤 끝난 경기
저장 이름: `scene_06_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat). A soccer stadium at halftime: the scoreboard shows two ball icons on one side and none on the other (no numbers). Students in the stands discuss predictions. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_06_lv2 — 공정한 동전 게임
저장 이름: `scene_06_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat). Sia and X1 flip a coin at a small table; between them a balance scale with equal stacks of coins stays perfectly level. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 I — 장면 07~08장

### scene_07_lv1 — 판자로 넓이 재기
저장 이름: `scene_07_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie). A cross-section of a gentle hill; X1 lines up thin wooden planks side by side under the slope to measure the area while the Professor watches. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_07_lv2 — 오늘 정한 주식 수
저장 이름: `scene_07_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). Haru at a trading desk decides how many shares to hold today; the board showing tomorrow's price is covered with a cloth curtain. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_08_lv1 — 땅 넓히기
저장 이름: `scene_08_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie). A square field seen from above being made a little bigger: two long thin strips added on two sides and a tiny corner square highlighted in red. The Professor holds a measuring tape. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_08_lv2 — 자갈길 연비
저장 이름: `scene_08_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). Two cars with fuel gauges: the car on the smooth road (Jupanbot) still has a full gauge, the car on the gravel road (Haru) bounces and its gauge drops faster. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 J — 장면 09~10장

### scene_09_lv1 — 강물 위 종이배
저장 이름: `scene_09_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow). A paper boat on a river drifting downstream with the current while small ripples rock it side to side; Sia and Moa watch from the riverbank. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_09_lv2 — 내비게이션
저장 이름: `scene_09_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). A tiny car on a map grid; a navigation device shows a dotted path of next positions computed step by step, each dot slightly wobbling. Jupanbot is the navigator. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_10_lv1 — 운동장 위 학생들
저장 이름: `scene_10_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: generic tiny pixel students (no main cast needed). Top-down view of a schoolyard: many tiny students who started together in the center are now spreading out in all directions, crowded in the middle and sparse at the edges. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_10_lv2 — 바람 부는 날 연기
저장 이름: `scene_10_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat). Smoke from a factory chimney drifting to the right with the wind while widening; Moa points in the wind direction, X2 sketches it. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 K — 장면 11~12장

### scene_11_lv1 — 처음 도달한 날
저장 이름: `scene_11_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Professor (spiky black hair with a white streak, round glasses, white lab coat over black vest and tie); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow). Morning: the Professor checks a growing plant against a height mark on the wall and cheers that it reached the mark for the first time today; Moa marks the calendar. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_11_lv2 — 바닥에서 사기
저장 이름: `scene_11_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). Jupanbot stares at a price chart with dips; the right part of the chart (the future) is hidden in fog, and a big question mark floats over the lowest point so far. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_12_lv1 — 게임 머니 목표
저장 이름: `scene_12_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers). Haru at an arcade coin game with a small coin pouch; a progress bar of coin icons goes from empty on the left to a treasure chest goal on the right. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_12_lv2 — 필승법 광고
저장 이름: `scene_12_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: the Fruit-fly researcher (big red compound eyes, blue helmet with tubes, white lab coat, translucent wings, holding a notebook); Jupanbot (beige CRT-monitor head showing a green smiling face, small antenna, holding a brown abacus, tank treads). A flashy wordless billboard shows coin stacks doubling (1, 2, 4, 8 coins as stacks, no numbers). Jupanbot admires it while the Fruit-fly researcher points at a rare huge pile of lost coins hidden in the corner. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### 묶음 L — 장면 13장

### scene_13_lv1 — 일기 예보의 두 화면
저장 이름: `scene_13_lv1.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow). A weather studio with two screens: left screen shows many possible typhoon track lines fanning out, right screen shows a colored probability map. Moa presents. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

### scene_13_lv2 — 졸업 앨범
저장 이름: `scene_13_lv2.png`
```
Composition 3:2 landscape (1200x800, pixel grid 300x200), full illustrated scene, simple background on white. Characters: Sia (long straight black hair, black-and-white maid-style dress with white apron and grey bow); Moa (long light-brown hair, white frilly headband, mustard cardigan over an apron dress, red bow); Haru (long pink hair with a navy streak and two hair buns, lavender hoodie under a white lab coat, jeans, sneakers); X1 (all-black shadow figure with a long ponytail and a pink bow, only small white dot eyes and pink blush visible, black coat); X2 (all-black shadow figure wearing a beret and round teal glasses, long black coat); X3 (small all-black shadow figure in a cat-eared hood with two yellow drawstring pompoms, white dot eyes and pink blush). An open graduation album with six framed portraits of the students wearing graduation caps, small stars around the frames. Style: 16-bit RPG pixel art (SNES era), crisp hard-edged pixels, drawn on a small pixel grid and upscaled 4x with nearest-neighbor (no blur, no anti-aliasing, no gradients), limited palette, pure white background (#FFFFFF), accent color soft teal (#2F6F8F). Keep every character exactly as in the attached reference sheet (same hair, outfit, colors, proportions). Absolutely no text, letters, numbers, formulas, logos or watermarks anywhere in the image.
```

---

## 저장 이름 체크리스트

- [ ] `cover_00.png`
- [ ] `cover_01.png`
- [ ] `cover_02.png`
- [ ] `cover_03.png`
- [ ] `cover_04.png`
- [ ] `cover_05.png`
- [ ] `cover_06.png`
- [ ] `cover_07.png`
- [ ] `cover_08.png`
- [ ] `cover_09.png`
- [ ] `cover_10.png`
- [ ] `cover_11.png`
- [ ] `cover_12.png`
- [ ] `cover_13.png`
- [ ] `cover_practice.png`
- [ ] `scene_01_lv1.png`
- [ ] `scene_01_lv2.png`
- [ ] `scene_02_lv1.png`
- [ ] `scene_02_lv2.png`
- [ ] `scene_03_lv1.png`
- [ ] `scene_03_lv2.png`
- [ ] `scene_04_lv1.png`
- [ ] `scene_04_lv2.png`
- [ ] `scene_05_lv1.png`
- [ ] `scene_05_lv2.png`
- [ ] `scene_06_lv1.png`
- [ ] `scene_06_lv2.png`
- [ ] `scene_07_lv1.png`
- [ ] `scene_07_lv2.png`
- [ ] `scene_08_lv1.png`
- [ ] `scene_08_lv2.png`
- [ ] `scene_09_lv1.png`
- [ ] `scene_09_lv2.png`
- [ ] `scene_10_lv1.png`
- [ ] `scene_10_lv2.png`
- [ ] `scene_11_lv1.png`
- [ ] `scene_11_lv2.png`
- [ ] `scene_12_lv1.png`
- [ ] `scene_12_lv2.png`
- [ ] `scene_13_lv1.png`
- [ ] `scene_13_lv2.png`
