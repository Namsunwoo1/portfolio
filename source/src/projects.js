export const projects = [
  {
    id: 'nexus-studio', title: 'NEXUS STUDIO', category: '모션그래픽', year: '2026', duration: '00:32',
    tagline: '타이포그래피에 리듬과 공간을 더하다.', description: '영상의 비트에 맞춰 타이포그래피와 공간감을 설계한 모션그래픽 프로젝트입니다.',
    poster: '/nexus-poster.webp', video: '/nexus.mp4', tools: ['After Effects'], featured: true,
    details: ['리듬을 기반으로 한 타이포그래피 전환', '블랙과 그린 컬러의 대비', '속도 변화와 공간감을 활용한 시각적 흐름'],
  },
  {
    id: 'escape', title: 'ESCAPE', category: '영상 편집', year: '2026', duration: '00:31',
    tagline: '일상을 벗어나는 31초의 여정.', description: '실사 영상과 타이포그래피를 연결해 여행의 해방감을 표현한 영상 편집 프로젝트입니다.',
    poster: '/escape-poster.webp', video: '/escape.mp4', tools: ['After Effects', 'Premiere Pro'], featured: true,
    details: ['실사 장면 전환과 컬러 분위기', 'FREEDOM 타이포그래피 합성', '시선 흐름을 고려한 컷 편집'],
  },
  {
    id: 'nam-sunwoo', title: 'NAM SUNWOO', category: '웹 · 디자인', year: '2026', duration: 'WEB PROJECT',
    tagline: '작업을 발견하는 가장 짧은 동선.', description: '영상과 기획 과정을 함께 소개하도록 설계한 반응형 포트폴리오 웹사이트입니다.',
    poster: '/portfolio.svg', video: null, tools: ['React', 'CSS', 'Vite'], featured: false,
    details: ['카테고리별 작업 탐색', '영상과 스토리보드를 함께 보는 상세 화면', '모바일·데스크톱에 맞춘 반응형 레이아웃'],
  },
  {
    id: 'shinhancard-chiikawa', title: 'SHINHANCARD × CHIIKAWA', category: '모션그래픽', year: '2026', duration: '00:15',
    tagline: '귀여움과 카드 혜택을 끊김 없는 15초 흐름으로 전달하다.',
    description: '신한카드 먼작귀 콜라보 체크카드 두 종의 특징을 소개하는 개인 포트폴리오용 제품 애니메이션입니다. 카드 비주얼을 강조하고 혜택 정보를 한쪽 시선축에 배치해 정보 집중도를 높였습니다.',
    poster: '/shinhan-v4-frame-01.png', video: '/shinhancard-card-focus-v5.mp4', tools: ['After Effects', 'Storyboarding', 'Motion Design'], featured: true,
    details: ['몰입형 콜라보 오프닝', 'SOL 트래블 카드 포커스', 'Hey Young 카드 포커스', '두 카드 선택', '브랜드 리빌'],
    storyboard: [
      {image: '/shinhan-v4-frame-01.png', time: '00:00–00:03', title: '몰입형 콜라보 오프닝'},
      {image: '/shinhan-v5-frame-02-sol-card.png', time: '00:03–00:06', title: 'SOL 트래블 카드 포커스'},
      {image: '/shinhan-v5-frame-03-hey-card.png', time: '00:06–00:09', title: 'Hey Young 카드 포커스'},
      {image: '/shinhan-v5-frame-04-duo-card.png', time: '00:09–00:12', title: '두 카드 선택'},
      {image: '/shinhan-04-logo.png', time: '00:12–00:15', title: '브랜드 리빌'},
    ],
    note: '신한카드 상품 정보와 캠페인 이미지를 바탕으로 제작한 비공식 개인 작업입니다.',
  },
];
