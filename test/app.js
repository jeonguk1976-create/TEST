/**
 * ============================================================================
 * 바른 말 고운 글 - 고1 국어 맞춤법 실전 모의고사 10제 (app.js)
 * 
 * [교사용 안내]
 * 선생님! 문제를 수정하거나 다음 단원 문제로 바꾸고 싶으시다면 아래의
 * QUIZ_DATA 배열 안의 텍스트(title, passage, options, answer, explanation)만
 * 수정하시면 됩니다. 별도의 프로그래밍 지식 없이도 쉽게 문제 변경이 가능합니다.
 * ============================================================================
 */

// 1. 평가원 모의고사 기반 5지선다 10문항 데이터셋
const QUIZ_DATA = [
  {
    id: 1,
    title: "다음 <보기>를 바탕으로 한글 맞춤법의 기본 원리를 탐구한 내용으로 적절하지 않은 것은?",
    passage: `[한글 맞춤법 제1항]<br>
    한글 맞춤법은 표준어를 소리대로 적되, 어법에 맞도록 함을 원칙으로 한다.<br>
    <div class="passage-example">
      - 소리대로 적는 원칙: 표준어의 음성 형태를 그대로 표기에 반영함.<br>
      - 어법에 맞도록 하는 원칙: 뜻을 파악하기 쉽도록 각 형태소의 본모습(원형)을 밝혀 적음.
    </div>`,
    options: [
      "‘구름, 하늘’은 소리 나는 형태 그대로 적었으므로 소리대로 적는 원칙을 따른 것이다.",
      "‘꽃이[꼬치], 꽃나무[꼰나무]’를 모두 ‘꽃’으로 통일하여 적는 것은 어법에 맞도록 한 것이다.",
      "‘드러나다’는 ‘들다[入]’의 본뜻에서 멀어졌으므로 본래 형태소를 밝히지 않고 소리대로 적은 것이다.",
      "‘사라지다’는 ‘살다[生]’의 본뜻이 뚜렷하게 유지되고 있으므로 어법에 맞도록 밝혀 적은 것이다.",
      "형태소의 본모습을 밝혀 적으면 독서할 때 단어의 뜻을 신속하게 파악할 수 있는 장점이 있다."
    ],
    answer: 4,
    rule: "한글 맞춤법 제1장 총칙 제1항 & 제15항",
    explanation: "‘사라지다’는 ‘살다’에 ‘-아지다’가 결합한 말이지만, 어원인 ‘살다’의 본뜻에서 완전히 멀어졌으므로 본래 형태소를 밝히지 않고 소리 나는 대로 ‘사라지다’로 적습니다. (만약 본뜻이 유지되었다면 ‘살아지다’로 적었을 것입니다.) 따라서 ④번 설명은 적절하지 않습니다."
  },
  {
    id: 2,
    title: "다음 밑줄 친 단어의 맞춤법 표기가 옳은 것만을 <보기>에서 있는 대로 고른 것은?",
    passage: `ㄱ. 이번 1학기 국어 시험의 <u>합격률</u>은 예상보다 높았다.<br>
    ㄴ. 새로운 회계 <u>년도</u>가 시작되어 사업 계획을 수립했다.<br>
    ㄷ. 그는 어린 나이에도 남다른 도덕적 <u>양심</u>을 지녔다.<br>
    ㄹ. 3학년 선배들의 명문대 <u>진학율</u>이 크게 향상되었다.`,
    options: [
      "ㄱ, ㄷ",
      "ㄱ, ㄹ",
      "ㄴ, ㄷ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answer: 1,
    rule: "한글 맞춤법 제10항, 제11항 (두음 법칙 및 '렬/률'의 표기)",
    explanation: `[정답 분석: ㄱ, ㄷ]<br>
    - <strong>ㄱ(옳음):</strong> 모음이나 'ㄴ' 받침 뒤에서는 '-열/-율'로 적고, 그 외의 받침(ㄱ, ㅂ, ㄹ, ㅇ 등) 뒤에서는 '-렬/-률'로 적습니다. '합격'은 'ㄱ' 받침이므로 <strong>'합격률'</strong>이 맞습니다.<br>
    - <strong>ㄴ(틀림):</strong> 두음 법칙에 따라 단어 첫머리에서는 <strong>'연도'</strong>로 적어야 합니다. 숫자에 붙는 의존 명사일 때만(예: 2026년도) '년도'로 씁니다.<br>
    - <strong>ㄷ(옳음):</strong> 한자음 '량'이 첫머리에 올 때 두음 법칙이 적용되어 <strong>'양심'</strong>으로 표기합니다.<br>
    - <strong>ㄹ(틀림):</strong> '진학'은 'ㄱ' 받침이므로 '진학율'이 아니라 <strong>'진학률'</strong>로 적어야 합니다.`
  },
  {
    id: 3,
    title: "<보기>의 규정을 참고할 때, 빈칸에 들어갈 부사의 표기가 '-이'로 끝나는 것만을 짝지은 것은?",
    passage: `[한글 맞춤법 제51항]<br>
    부사의 끝음절이 분명히 '이'로만 나는 것은 '-이'로 적고, '히'로만 나거나 '이'나 '히'로 나는 것은 '-히'로 적는다.<br>
    <div class="passage-example">
      - 'ㅅ' 받침 뒤: 항상 '-이' (예: 깨끗이, 따뜻이)<br>
      - 첩어(반복어) 뒤: 항상 '-이' (예: 틈틈이, 겹겹이)<br>
      - '하다'가 붙지 않는 부사 뒤: '-이' (예: 일찍이, 더욱이)<br>
      - '하다'가 붙는 어근 뒤: 대개 '-히' (예: 솔직히, 꼼꼼히)
    </div>
    A. 교실을 [ 깨끗이 / 깨끗히 ] 청소했다.<br>
    B. 친구에게 속마음을 [ 솔직이 / 솔직히 ] 털어놓았다.<br>
    C. 쉬는 시간마다 [ 틈틈이 / 틈틈히 ] 단어를 외웠다.<br>
    D. 약속 시간보다 [ 일찍이 / 일찍히 ] 도착해 기다렸다.`,
    options: [
      "A, B",
      "A, C, D",
      "B, C",
      "B, D",
      "A, B, C, D"
    ],
    answer: 2,
    rule: "한글 맞춤법 제51항 (부사 파생 접미사 '-이'와 '-히')",
    explanation: `A. <strong>깨끗이</strong>: 어근 끝이 'ㅅ' 받침이므로 '-이'로 적습니다.<br>
    B. <strong>솔직히</strong>: '솔직하다'처럼 '-하다'가 붙는 어근 뒤이므로 '-히'로 적습니다.<br>
    C. <strong>틈틈이</strong>: 첩어(명사 '틈'이 겹친 말) 뒤이므로 '-이'로 적습니다.<br>
    D. <strong>일찍이</strong>: '일찍하다'가 성립하지 않는 순수 부사 어근 뒤이므로 '-이'로 적습니다.<br>
    따라서 '-이'로 적는 단어는 A, C, D입니다.`
  },
  {
    id: 4,
    title: "<보기>의 사이시옷 표기 규정을 적용한 예로 적절하지 않은 것은?",
    passage: `[한글 맞춤법 제30항 사이시옷 표기 규정]<br>
    사이시옷은 순우리말 또는 순우리말과 한자어로 된 합성어로서 앞말이 모음으로 끝나고, 뒷말의 첫소리가 된소리로 나거나 'ㄴ' 소리가 덧나는 경우에 받치어 적는다.<br>
    <div class="passage-example">
      ※ 주의: 순수 한자어 간의 결합에는 원칙적으로 사이시옷을 받치지 않는다.<br>
      (단, 2음절 한자어 예외 6개만 허용: <strong>곳간, 셋방, 숫자, 찻간, 툇간, 횟수</strong>)
    </div>`,
    options: [
      "‘등교(한자어) + 길(우리말)’은 뒷말의 첫소리가 [등교낄]로 소리 나므로 ‘등굣길’로 적는다.",
      "‘순대(우리말) + 국(우리말)’은 뒷말의 첫소리가 [순대꾹]으로 소리 나므로 ‘순댓국’으로 적는다.",
      "‘해(우리말) + 님(접사)’은 합성어가 아닌 파생어이므로 사이시옷을 받치지 않고 ‘해님’으로 적는다.",
      "‘초(한자어) + 점(한자어)’은 발음이 된소리[초쩜]로 나므로 ‘촛점’으로 적는다.",
      "‘코(우리말) + 날(우리말)’은 발음 시 [콘날]로 'ㄴ' 소리가 덧나므로 ‘콧날’로 적는다."
    ],
    answer: 4,
    rule: "한글 맞춤법 제30항 (사이시옷 규정)",
    explanation: "‘초점(焦點)’은 ‘한자어 + 한자어’로 이루어진 순수 한자어입니다. 한자어 사이에는 예외로 정해진 6개 단어(곳간, 셋방, 숫자, 찻간, 툇간, 횟수)에만 사이시옷을 쓰므로, 발음이 [초쩜]으로 나더라도 표기는 ‘촛점’이 아니라 **‘초점’**으로 적어야 합니다. (마찬가지로 개수, 시가, 대가 등도 사이시옷을 쓰지 않습니다.)"
  },
  {
    id: 5,
    title: "밑줄 친 부분의 띄어쓰기가 어법에 맞게 올바른 것은?",
    passage: `[한글 맞춤법 띄어쓰기 규정 핵심]<br>
    - 제41항: 조사는 그 앞말에 붙여 쓴다.<br>
    - 제42항: 의존 명사는 앞말과 띄어 쓴다.<br>
    <div class="passage-example">
      ‘뿐, 대로, 만큼’ 등은 체언(명사·대명사) 뒤에 올 때는 조사이므로 앞말에 붙여 쓰고, 용언의 관형사형(-ㄹ, -은, -는) 뒤에 올 때는 의존 명사이므로 띄어 씁니다.
    </div>`,
    options: [
      "내가 가진 재산은 지금 가지고 있는 <u>이것 뿐</u>이다.",
      "그는 어떠한 어려움 속에서도 오직 <u>성공만을바랄</u> 뿐이다.",
      "친구들과 미리 약속한 <u>시간대로</u> 정확히 도착했다.",
      "너는 다른 사람 눈치 보지 말고 너 <u>아는대로</u> 말하렴.",
      "그는 부모님을 위해 집을 궁궐 <u>만큼 크게</u> 지어 올렸다."
    ],
    answer: 3,
    rule: "한글 맞춤법 제41항 & 제42항 (조사와 의존 명사의 띄어쓰기)",
    explanation: `[정답 분석: ③번]<br>
    - ① ‘이것(대명사) + 뿐(조사)’이므로 붙여 써야 합니다. ➔ <strong>‘이것뿐이다’</strong><br>
    - ② ‘성공만을(체언+조사)’ 뒤에 ‘바랄(용언의 관형사형)’이 오고 그 뒤의 ‘뿐’은 의존 명사이므로 띄어야 합니다. ➔ <strong>‘성공만을 바랄 뿐이다’</strong><br>
    - ③ <strong>‘시간(명사) + 대로(조사)’</strong>이므로 붙여 쓴 것이 정확합니다. (정답!)<br>
    - ④ ‘아는(관형사형)’ 뒤의 ‘대로’는 의존 명사이므로 띄어 써야 합니다. ➔ <strong>‘아는 대로’</strong><br>
    - ⑤ ‘궁궐(명사) + 만큼(조사)’이므로 붙여 써야 합니다. ➔ <strong>‘궁궐만큼’</strong>`
  },
  {
    id: 6,
    title: "다음 밑줄 친 어미의 맞춤법 표기가 올바른 것은?",
    passage: `[한글 맞춤법 제56항 & 제53항 어미의 구별]<br>
    - ‘-던지’: 지난 일을 회상할 때 씁니다. (예: 어제 얼마나 춥던지)<br>
    - ‘-든지’: 어느 것이 선택되어도 상관없음을 나타낼 때 씁니다. (예: 가든지 오든지)<br>
    - 된소리로 발음되더라도 예사소리로 적는 어미: ‘-(으)ㄹ걸, -(으)ㄹ게, -(으)ㄹ세’ 등`,
    options: [
      "어제는 바람이 얼마나 세차게 <u>불든지</u> 나무가 쓰러질 뻔했다.",
      "집에 일찍 <u>가던지</u> 학교 도서관에 남던지 네가 결정해라.",
      "국어 숙제를 오늘 저녁까지 꼭 다 <u>끝낼께</u>.",
      "이번 주말에 비가 <u>올런지</u> 하늘에 먹구름이 가득하다.",
      "사과를 <u>먹든지</u> 배를 먹든지 네가 원하는 것을 골라라."
    ],
    answer: 5,
    rule: "한글 맞춤법 제56항 ('-던'과 '-든') 및 제53항 어미 표기",
    explanation: `[정답 분석: ⑤번]<br>
    - ① 과거의 지난 일을 회상하는 문맥이므로 ‘불든지’가 아니라 <strong>‘불던지’</strong>로 적어야 합니다.<br>
    - ② 두 가지 대상 중 선택하는 상황이므로 ‘가던지’가 아니라 <strong>‘가든지’</strong>로 적어야 합니다.<br>
    - ③ 말하는 이의 약속이나 의지를 나타내는 어미는 발음이 [끝낼께]로 나더라도 <strong>‘끝낼게’</strong>로 적어야 합니다.<br>
    - ④ 추측을 나타내는 연결 어미는 ‘-ㄹ런지’가 아니라 <strong>‘-ㄹ는지’</strong>이므로 ‘올는지’로 적어야 합니다.<br>
    - ⑤ 사과와 배 중 선택하는 상황이므로 <strong>‘먹든지’</strong>가 올바르게 표기되었습니다.`
  },
  {
    id: 7,
    title: "<보기>를 참고하여 ‘부치다’와 ‘붙이다’를 구별한 것으로 올바르지 않은 것은?",
    passage: `[한글 맞춤법 제57항 다음 말들은 각각 구별하여 적는다.]<br>
    - <strong>‘붙이다’</strong>: ‘맞닿아 떨어지지 않게 하다’, ‘불을 지피다’, ‘취미/조건을 덧붙이다’ 등 ‘붙다’의 의미가 명확하게 살아 있는 경우<br>
    - <strong>‘부치다’</strong>: ‘편지나 짐을 보내다’, ‘힘이 미치지 못하다’, ‘회의나 재판에 넘기다’, ‘부채질을 하다’ 등 ‘붙다’의 본뜻에서 멀어진 경우`,
    options: [
      "외국에 유학 중인 친구에게 생일 선물과 손편지를 <u>부쳤다</u>.",
      "오랜만에 등산을 하니 체력이 떨어져서 힘에 <u>부친다</u>.",
      "편지 봉투 겉면에 예쁜 기념우표를 풀로 <u>붙였다</u>.",
      "학생들이 국어에 흥미를 <u>부칠</u> 수 있도록 재미있는 퀴즈를 준비했다.",
      "이번 학급 회의의 핵심 안건을 공식 표결에 <u>부치기로</u> 했다."
    ],
    answer: 4,
    rule: "한글 맞춤법 제57항 (구별하여 적어야 할 말)",
    explanation: "‘흥미나 취미가 생기다’라는 뜻은 ‘붙다’의 의미가 살아 있으므로 사동 접사 ‘-이-’가 결합한 **‘붙이다(흥미를 붙일)’**로 적어야 합니다. 나머지 문장들의 ‘편지를 부치다’, ‘힘에 부치다’, ‘우표를 붙이다’, ‘표결에 부치다’는 모두 규정에 맞게 정확히 쓰였습니다."
  },
  {
    id: 8,
    title: "다음 선생님과 학생의 대화 중 밑줄 친 부분의 맞춤법이 올바른 것은?",
    passage: `[원리 도움말]<br>
    - ‘되-’와 ‘돼-’의 구별: ‘돼’는 ‘되어’의 준말이므로, ‘되어’를 넣어서 자연스러우면 ‘돼’, 부자연스러우면 ‘되’를 씁니다. (또는 ‘하/해’를 대입하여 ‘해’ 자리에는 ‘돼’, ‘하’ 자리에는 ‘되’)<br>
    - ‘봬-’와 ‘뵈-’의 구별: ‘봬’는 ‘뵈어’의 준말입니다. 문장의 끝에서는 홀로 어간 ‘뵈-’만 쓰일 수 없으므로 종결 어미 ‘-어’와 결합하여 ‘봬요(뵈어요)’가 됩니다.`,
    options: [
      "학생: 선생님, 내일 방과 후에 교무실로 찾아 <u>뵈요</u>.",
      "교사: 그래, 내일 오후 4시 이후에 언제든지 오면 <u>돼</u>.",
      "학생: 네, 그때는 다른 동아리 활동이 없어서 정말 <u>안 되요</u>.",
      "교사: 혹시 늦어질 것 같으면 미리 단체방에 연락하면 <u>됀다</u>.",
      "학생: 네! 약속 시간 잊지 않고 꼭 <u>봽겠습니다</u>."
    ],
    answer: 2,
    rule: "한글 맞춤법 제35항 (모음 'ㅚ' 뒤에 '-어'가 어울려 'ㅙ'로 될 때)",
    explanation: `[정답 분석: ②번]<br>
    - ① ‘뵈다’의 어간 ‘뵈-’에 어미 ‘-어’와 보조사 ‘-요’가 결합한 것이므로 ‘뵈어요’ ➔ <strong>‘봬요’</strong>가 올바릅니다.<br>
    - ② ‘오면 되- + -어’가 줄어든 형태이므로 <strong>‘오면 돼’</strong>가 맞습니다. (정답!) (‘해’를 넣어보아도 ‘오면 해’가 자연스러움)<br>
    - ③ ‘되- + -어’에 ‘-요’가 붙은 것이므로 ‘안 되어요’ ➔ <strong>‘안 돼요’</strong>로 적어야 합니다.<br>
    - ④ ‘되다’의 어간 ‘되-’에 현재 시제 어미 ‘-ㄴ다’가 붙은 기본 활용이므로 <strong>‘된다’</strong>로 적어야 합니다.<br>
    - ⑤ 자음 어미 ‘-겠-’ 앞에서는 모음 축약이 일어날 이유가 없으므로 <strong>‘뵙겠습니다’</strong>로 적어야 합니다.`
  },
  {
    id: 9,
    title: "<보기>의 준말 규정을 올바르게 적용한 것만을 짝지은 것은?",
    passage: `[한글 맞춤법 제40항]<br>
    어간의 끝음절 ‘하’가 줄어들 때 다음과 같이 적는다.<br>
    <div class="passage-clause">
      <strong>[원칙 1]</strong> ‘하’ 앞의 받침이 울림소리(모음, ㄴ, ㄹ, ㅁ, ㅇ)인 경우: ‘하’의 ‘ㅏ’만 줄고 ‘ㅎ’이 남아 뒤 음절 첫소리와 어울려 거센소리가 됨. (예: 간편하지 ➔ <strong>간편치</strong>, 다정하지 ➔ <strong>다정치</strong>)
    </div>
    <div class="passage-clause">
      <strong>[원칙 2]</strong> ‘하’ 앞의 받침이 안울림소리(ㄱ, ㅂ, ㅅ 등)인 경우: ‘하’가 통째로 탈락함. (예: 생각하지 ➔ <strong>생각지</strong>, 거북하지 ➔ <strong>거북지</strong>)
    </div>
    ㄱ. 그 문제는 아직 <u>익숙치</u> 않아서 푸는 데 시간이 걸린다.<br>
    ㄴ. 친구가 약속을 취소했지만 전혀 <u>섭섭지</u> 않았다.<br>
    ㄷ. 요즘 길거리에서 공중전화를 찾기가 <u>흔치</u> 않다.<br>
    ㄹ. 방이 <u>깨끗치</u> 못해서 주말에 대청소를 시작했다.`,
    options: [
      "ㄱ, ㄷ",
      "ㄴ, ㄷ",
      "ㄴ, ㄹ",
      "ㄱ, ㄴ, ㄹ",
      "ㄴ, ㄷ, ㄹ"
    ],
    answer: 2,
    rule: "한글 맞춤법 제40항 (어간 끝음절 '하'의 준말)",
    explanation: `ㄱ(틀림): ‘익숙’의 끝 받침이 안울림소리 ‘ㄱ’이므로 ‘하’가 완전히 탈락하여 <strong>‘익숙지’</strong>가 맞습니다.<br>
    ㄴ(옳음): ‘섭섭’의 끝 받침이 안울림소리 ‘ㅂ’이므로 ‘하’가 통째로 탈락하여 <strong>‘섭섭지’</strong>가 맞습니다.<br>
    ㄷ(옳음): ‘흔’의 끝 받침이 울림소리 ‘ㄴ’이므로 ‘ㅎ’이 남아 <strong>‘흔치(흔하지)’</strong>가 맞습니다.<br>
    ㄹ(틀림): ‘깨끗’의 끝 받침이 안울림소리 ‘ㅅ’이므로 ‘하’가 통째로 탈락하여 <strong>‘깨끗지’</strong>가 맞습니다.<br>
    따라서 올바른 것은 ㄴ, ㄷ입니다.`
  },
  {
    id: 10,
    title: "다음 문장 중 밑줄 친 단어의 맞춤법 표기가 올바른 것은?",
    passage: `[한글 맞춤법 제27항 붙임 2 & 규정 해설]<br>
    - ‘어원이 분명하지 아니한 것은 원형을 밝히어 적지 아니한다.’<br>
    - 날짜를 묻거나 얼마 동안의 날을 나타낼 때 ‘몇 일’로 발음되지 않고 [며칠]로 소리 나는 단어는 ‘몇 년, 몇 월’과 달리 ‘몇 일’로 분석되지 않으므로 소리대로 <strong>‘며칠’</strong>로만 적습니다.`,
    options: [
      "이번 고등학교 모의고사 시험은 앞으로 <u>며칠</u> 안 남았다.",
      "달력을 보며 오늘이 <u>몇 월 몇 일</u>인지 확인해 보았다.",
      "넘어져도 다시 꿋꿋하게 일어나는 <u>오뚜기</u> 같은 마음을 갖자.",
      "어머니께서 실과 바늘을 <u>바느질고리</u>에 정돈해 두셨다.",
      "등산화 끈을 <u>단단이</u> 묶지 않으면 걷다가 넘어지기 쉽다."
    ],
    answer: 1,
    rule: "한글 맞춤법 제27항 붙임 2 ('며칠'의 표기 원칙)",
    explanation: `[정답 분석: ①번]<br>
    - ① ‘며칠’은 ‘몇 일’의 형태가 아니라 어원 의식이 사라져 항상 <strong>‘며칠’</strong>로 적는 것이 맞습니다. (정답!)<br>
    - ② ‘몇 월 몇 일’이 아니라 <strong>‘몇 월 며칠’</strong>로 적어야 합니다.<br>
    - ③ ‘오뚝하다’에 접미사 ‘-이’가 결합한 말이므로 원형을 밝혀 <strong>‘오뚝이’</strong>로 적어야 합니다. (‘오뚜기’는 상표명일 뿐 표준어가 아닙니다.)<br>
    - ④ 바느질 세트를 담는 상자는 ‘바느질고리’가 아니라 ‘ㄹ’이 탈락한 형태인 <strong>‘반짇고리’</strong>가 표준어입니다.<br>
    - ⑤ ‘단단하다’처럼 ‘-하다’가 붙는 어근 뒤이므로 <strong>‘단단히’</strong>로 적어야 합니다.`
  }
];

// 2. 앱 전역 상태(State) 관리
const state = {
  currentIndex: 0,
  userAnswers: new Array(QUIZ_DATA.length).fill(null),
  timerInterval: null,
  elapsedSeconds: 0,
  isSubmitted: false,
  filterMode: 'all' // 'all', 'wrong', 'correct'
};

// 3. DOM 요소 캐싱
const elements = {
  // 화면 요소들
  startScreen: document.getElementById('start-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultScreen: document.getElementById('result-screen'),

  // 시작 버튼
  startBtn: document.getElementById('start-btn'),

  // 퀴즈 진행 상태
  currentQNum: document.getElementById('current-q-num'),
  progressText: document.getElementById('progress-text'),
  progressFill: document.getElementById('progress-fill'),
  timerText: document.getElementById('timer-text'),

  // 문제 카드 요소들
  qNumberBadge: document.getElementById('q-number-badge'),
  qTitle: document.getElementById('q-title'),
  qPassageContainer: document.getElementById('q-passage-container'),
  qPassage: document.getElementById('q-passage'),
  optionsContainer: document.getElementById('options-container'),
  questionPalette: document.getElementById('question-palette'),

  // 내비게이션 버튼
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  submitBtn: document.getElementById('submit-btn'),

  // 결과 화면 요소들
  finalScore: document.getElementById('final-score'),
  scoreGrade: document.getElementById('score-grade'),
  correctCount: document.getElementById('correct-count'),
  accuracyRate: document.getElementById('accuracy-rate'),
  finalTime: document.getElementById('final-time'),
  avgTime: document.getElementById('avg-time'),
  praiseMessage: document.getElementById('praise-message'),
  reviewList: document.getElementById('review-list'),
  retryBtn: document.getElementById('retry-btn'),
  printBtn: document.getElementById('print-btn'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  wrongCountBadge: document.getElementById('wrong-count-badge'),
  correctCountBadge: document.getElementById('correct-count-badge'),

  // 모달
  unansweredModal: document.getElementById('unanswered-modal'),
  unansweredCount: document.getElementById('unanswered-count'),
  modalCancelBtn: document.getElementById('modal-cancel-btn'),
  modalConfirmBtn: document.getElementById('modal-confirm-btn'),

  // 캔버스
  confettiCanvas: document.getElementById('confetti-canvas')
};

// 원문자 번호 목록
const CIRCLED_NUMBERS = ['①', '②', '③', '④', '⑤'];

// ============================================================================
// 4. 초기화 및 이벤트 리스너 등록
// ============================================================================
function initApp() {
  buildQuestionPalette();
  bindEvents();
}

function bindEvents() {
  elements.startBtn.addEventListener('click', startQuiz);
  elements.prevBtn.addEventListener('click', () => navigateQuestion(-1));
  elements.nextBtn.addEventListener('click', () => navigateQuestion(1));
  elements.submitBtn.addEventListener('click', handlePreSubmit);

  elements.modalCancelBtn.addEventListener('click', () => {
    elements.unansweredModal.classList.add('hidden');
  });

  elements.modalConfirmBtn.addEventListener('click', () => {
    elements.unansweredModal.classList.add('hidden');
    finishQuiz();
  });

  elements.retryBtn.addEventListener('click', restartQuiz);
  elements.printBtn.addEventListener('click', () => window.print());

  // 필터 탭 클릭
  elements.filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      elements.filterTabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.filterMode = e.currentTarget.dataset.filter;
      renderReviewList();
    });
  });

  // 키보드 좌우 방향키 및 숫자 1~5 단축키 지원
  window.addEventListener('keydown', handleKeyNavigation);
}

// ============================================================================
// 5. 퀴즈 진행 로직
// ============================================================================

// 빠른 번호표 (1~10) 렌더링
function buildQuestionPalette() {
  elements.questionPalette.innerHTML = '';
  for (let i = 0; i < QUIZ_DATA.length; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'palette-btn';
    btn.textContent = i + 1;
    btn.setAttribute('aria-label', `${i + 1}번 문항으로 이동`);
    btn.addEventListener('click', () => {
      jumpToQuestion(i);
    });
    elements.questionPalette.appendChild(btn);
  }
}

// 퀴즈 시작
function startQuiz() {
  switchScreen('quiz');
  state.currentIndex = 0;
  state.elapsedSeconds = 0;
  state.userAnswers = new Array(QUIZ_DATA.length).fill(null);
  state.isSubmitted = false;

  startTimer();
  renderQuestion(state.currentIndex);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 화면 전환 헬퍼
function switchScreen(screenName) {
  elements.startScreen.classList.remove('active');
  elements.quizScreen.classList.remove('active');
  elements.resultScreen.classList.remove('active');

  if (screenName === 'start') elements.startScreen.classList.add('active');
  if (screenName === 'quiz') elements.quizScreen.classList.add('active');
  if (screenName === 'result') elements.resultScreen.classList.add('active');
}

// 타이머 시작
function startTimer() {
  clearInterval(state.timerInterval);
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

function formatTime(totalSec) {
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function formatTimeKorean(totalSec) {
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  if (mins === 0) return `${secs}초`;
  return `${mins}분 ${secs}초`;
}

function updateTimerDisplay() {
  elements.timerText.textContent = formatTime(state.elapsedSeconds);
}

// 문항 렌더링
function renderQuestion(index) {
  const q = QUIZ_DATA[index];

  // 진행도 표시
  const currentNum = index + 1;
  const totalCount = QUIZ_DATA.length;
  const progressPercent = Math.round((currentNum / totalCount) * 100);

  elements.currentQNum.textContent = currentNum;
  elements.progressText.textContent = `${progressPercent}%`;
  elements.progressFill.style.width = `${progressPercent}%`;
  elements.qNumberBadge.textContent = `문항 ${String(currentNum).padStart(2, '0')}`;

  // 문제 발문
  elements.qTitle.innerHTML = q.title;

  // <보기> 박스 표시 여부
  if (q.passage && q.passage.trim() !== '') {
    elements.qPassageContainer.classList.remove('hidden');
    elements.qPassage.innerHTML = q.passage;
  } else {
    elements.qPassageContainer.classList.add('hidden');
  }

  // 선지 5개 렌더링
  elements.optionsContainer.innerHTML = '';
  q.options.forEach((optText, optIdx) => {
    const optValue = optIdx + 1;
    const isSelected = state.userAnswers[index] === optValue;

    const row = document.createElement('div');
    row.className = `option-row ${isSelected ? 'selected' : ''}`;
    row.setAttribute('role', 'radio');
    row.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    row.setAttribute('tabindex', '0');

    row.innerHTML = `
      <span class="option-number">${CIRCLED_NUMBERS[optIdx]}</span>
      <span class="option-text">${optText}</span>
    `;

    // 선지 선택 이벤트
    const selectHandler = () => {
      selectAnswer(index, optValue);
    };

    row.addEventListener('click', selectHandler);
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectHandler();
      }
    });

    elements.optionsContainer.appendChild(row);
  });

  // 이전/다음 및 제출 버튼 표시 조정
  elements.prevBtn.disabled = index === 0;

  if (index === totalCount - 1) {
    elements.nextBtn.classList.add('hidden');
    elements.submitBtn.classList.remove('hidden');
  } else {
    elements.nextBtn.classList.remove('hidden');
    elements.submitBtn.classList.add('hidden');
  }

  updatePaletteStatus();
}

// 답안 선택 처리
function selectAnswer(qIndex, answerValue) {
  state.userAnswers[qIndex] = answerValue;

  // 현재 화면의 옵션 스타일 업데이트
  const rows = elements.optionsContainer.querySelectorAll('.option-row');
  rows.forEach((row, idx) => {
    const isChosen = idx + 1 === answerValue;
    row.classList.toggle('selected', isChosen);
    row.setAttribute('aria-checked', isChosen ? 'true' : 'false');
  });

  updatePaletteStatus();
}

// 번호판 색상 갱신
function updatePaletteStatus() {
  const paletteBtns = elements.questionPalette.querySelectorAll('.palette-btn');
  paletteBtns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === state.currentIndex);
    btn.classList.toggle('answered', state.userAnswers[idx] !== null);
  });
}

// 문항 이동
function navigateQuestion(offset) {
  const newIndex = state.currentIndex + offset;
  if (newIndex >= 0 && newIndex < QUIZ_DATA.length) {
    jumpToQuestion(newIndex);
  }
}

function jumpToQuestion(index) {
  state.currentIndex = index;
  renderQuestion(index);
}

// 키보드 단축키
function handleKeyNavigation(e) {
  if (!elements.quizScreen.classList.contains('active')) return;
  if (state.isSubmitted) return;

  // 1~5 숫자키로 답안 선택
  if (['1', '2', '3', '4', '5'].includes(e.key)) {
    const val = parseInt(e.key, 10);
    selectAnswer(state.currentIndex, val);
  } else if (e.key === 'ArrowRight') {
    if (state.currentIndex < QUIZ_DATA.length - 1) navigateQuestion(1);
  } else if (e.key === 'ArrowLeft') {
    if (state.currentIndex > 0) navigateQuestion(-1);
  }
}

// ============================================================================
// 6. 답안 제출 및 자동 채점 로직
// ============================================================================

// 제출 전 미응답 문항 체크
function handlePreSubmit() {
  const unansweredIndices = [];
  state.userAnswers.forEach((ans, idx) => {
    if (ans === null) unansweredIndices.push(idx + 1);
  });

  if (unansweredIndices.length > 0) {
    elements.unansweredCount.textContent = unansweredIndices.length;
    elements.unansweredModal.classList.remove('hidden');
  } else {
    finishQuiz();
  }
}

// 최종 채점 및 결과 화면 표시
function finishQuiz() {
  stopTimer();
  state.isSubmitted = true;

  // 채점 계산
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const finalScore = correctCount * 10;
  const accuracy = Math.round((correctCount / QUIZ_DATA.length) * 100);
  const avgSec = Math.round(state.elapsedSeconds / QUIZ_DATA.length);

  // 결과 화면 데이터 바인딩
  elements.finalScore.textContent = finalScore;
  elements.correctCount.textContent = correctCount;
  elements.accuracyRate.textContent = `${accuracy}%`;
  elements.finalTime.textContent = formatTimeKorean(state.elapsedSeconds);
  elements.avgTime.textContent = `문항당 약 ${avgSec}초`;

  elements.wrongCountBadge.textContent = QUIZ_DATA.length - correctCount;
  elements.correctCountBadge.textContent = correctCount;

  // 등급 및 칭찬 격려 문구 세분화
  if (finalScore === 100) {
    elements.scoreGrade.textContent = "1등급 (만점 완성!)";
    elements.praiseMessage.textContent = "완벽합니다! 고1 국어 평가원 모의고사 맞춤법을 완벽하게 정복했습니다! 🥇";
  } else if (finalScore >= 80) {
    elements.scoreGrade.textContent = "1~2등급 수준 (우수)";
    elements.praiseMessage.textContent = "대단해요! 고득점을 달성했습니다. 헷갈렸던 문항만 아래 오답 노트로 확인해 보세요! 🥈";
  } else if (finalScore >= 60) {
    elements.scoreGrade.textContent = "3~4등급 수준 (양호)";
    elements.praiseMessage.textContent = "수고 많았어요! 맞춤법 기본 원리를 조금만 보완하면 1등급도 충분히 가능합니다! 🥉";
  } else {
    elements.scoreGrade.textContent = "기본기 보완 권장";
    elements.praiseMessage.textContent = "끝까지 최선을 다해 풀었어요! 아래 문항별 맞춤법 규정과 상세 해설을 꼼꼼히 복습해 보세요! 💪";
  }

  // 화면 전환
  switchScreen('result');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 오답 노트 렌더링
  state.filterMode = 'all';
  elements.filterTabs.forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
  renderReviewList();

  // 화려한 축하 꽃가루(Confetti) 실행!
  launchConfetti();
}

// 오답 노트 리스트 렌더링
function renderReviewList() {
  elements.reviewList.innerHTML = '';

  QUIZ_DATA.forEach((q, idx) => {
    const userAns = state.userAnswers[idx];
    const isCorrect = userAns === q.answer;
    const isUnanswered = userAns === null;

    // 필터링 적용
    if (state.filterMode === 'wrong' && isCorrect) return;
    if (state.filterMode === 'correct' && !isCorrect) return;

    const card = document.createElement('article');
    card.className = `review-item-card ${isCorrect ? 'is-correct' : 'is-wrong'}`;

    // 상태 뱃지
    let badgeHtml = '';
    if (isUnanswered) {
      badgeHtml = `<span class="badge-tag badge-unanswered">미응답</span>`;
    } else if (isCorrect) {
      badgeHtml = `<span class="badge-tag badge-correct">정답 (+10점)</span>`;
    } else {
      badgeHtml = `<span class="badge-tag badge-wrong">오답 (0점)</span>`;
    }

    // 답안 비교 문구
    const userAnsText = isUnanswered ? '선택 안 함' : `${CIRCLED_NUMBERS[userAns - 1]}번`;
    const actualAnsText = `${CIRCLED_NUMBERS[q.answer - 1]}번`;

    // 선지 리스트 HTML
    let optionsHtml = '';
    q.options.forEach((optText, optIdx) => {
      const optNum = optIdx + 1;
      const isAns = optNum === q.answer;
      const isUserChoice = optNum === userAns;

      let lineClass = 'review-option-line';
      let hintBadge = '';

      if (isAns) {
        lineClass += ' is-answer';
        hintBadge = `<span class="option-badge-hint hint-correct">정답</span>`;
      } else if (isUserChoice && !isCorrect) {
        lineClass += ' is-user-wrong';
        hintBadge = `<span class="option-badge-hint hint-wrong">내가 고른 오답</span>`;
      }

      optionsHtml += `
        <div class="${lineClass}">
          <span>${CIRCLED_NUMBERS[optIdx]}</span>
          <span>${optText}</span>
          ${hintBadge}
        </div>
      `;
    });

    // 지문 HTML
    const passageHtml = q.passage ? `<div class="review-passage">${q.passage}</div>` : '';

    card.innerHTML = `
      <div class="review-card-header">
        <div class="review-q-meta">
          <span class="review-q-num">문항 ${String(idx + 1).padStart(2, '0')}</span>
          ${badgeHtml}
        </div>
        <div class="review-answers-pill">
          <span class="user-ans">내 답안: <strong>${userAnsText}</strong></span>
          <span class="actual-ans">정답: <strong>${actualAnsText}</strong></span>
        </div>
      </div>

      <h4 class="question-title" style="font-size: 1.05rem;">${q.title}</h4>
      ${passageHtml}

      <div class="review-options">
        ${optionsHtml}
      </div>

      <div class="explanation-box">
        <div class="explanation-title">💡 <strong>정답 및 맞춤법 규정 풀이</strong></div>
        <div class="explanation-rule">근거 조항: ${q.rule}</div>
        <div class="explanation-detail">${q.explanation}</div>
      </div>
    `;

    elements.reviewList.appendChild(card);
  });
}

// 다시 풀기 (초기화)
function restartQuiz() {
  if (confirm("시험을 처음부터 다시 시작하시겠습니까?")) {
    startQuiz();
  }
}

// ============================================================================
// 7. 축하 꽃가루(Confetti) 순수 JavaScript 파티클 엔진
// ============================================================================
function launchConfetti() {
  const canvas = elements.confettiCanvas;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 120;
  const particles = [];
  const colors = ['#1e3a8a', '#3b82f6', '#f59e0b', '#10b981', '#ec4899', '#8b5cf6'];

  for (let i = 0; i < confettiCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }

  let animationFrame;
  let startTime = Date.now();

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) * 0.7;
      p.x += Math.sin(p.d) * 1.5;
      p.tilt = Math.sin(p.tiltAngle - (particles.indexOf(p) / 3)) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });

    // 4.5초 동안 파티클 효과 실행 후 자동 정지
    if (Date.now() - startTime < 4500) {
      animationFrame = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  draw();
}

// 윈도우 리사이즈 대응
window.addEventListener('resize', () => {
  if (elements.confettiCanvas) {
    elements.confettiCanvas.width = window.innerWidth;
    elements.confettiCanvas.height = window.innerHeight;
  }
});

// 앱 시작
document.addEventListener('DOMContentLoaded', initApp);
