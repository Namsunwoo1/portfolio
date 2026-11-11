# 남선우 포트폴리오 — 복구한 편집용 소스

기존 Railway 사이트는 컴파일된 정적 결과물만 남아 있었으므로, 공개된 콘텐츠와 기존 미디어 자산을 바탕으로 React/Vite 소스를 새로 작성했습니다. 원본 소스의 정확한 복원은 아니며, 디자인과 인터랙션은 재구현한 것입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## 배포 전 확인

```bash
npm run build
npm run preview
```

`src/projects.js`에서 작품 설명과 영상/이미지를 관리합니다. `public/`에는 기존 저장소의 미디어와 2026-11-04 Sites에서 확인한 RE4DAY 및 신한카드 최신 자산을 포함했습니다. Railway 배포 설정은 루트 디렉터리 `/source`, Dockerfile 경로 `Dockerfile`, 포트 `80`을 사용합니다.

최신 사이트와 비교해 RE4DAY 15초 세로 영상/캠페인 PDF/5컷 영상 스틸과 SHINHANCARD × CHIIKAWA 최신 15.2초 무음 영상/스토리보드/작품 설명을 반영했습니다. 이번 소스는 기존 사이트 디자인의 구조와 톤을 재구현한 것으로 픽셀 단위 복제는 아닙니다.

**임시 미디어 의존성:** 새 영상 2개는 GitHub 파일 업로드 제한으로 인해 아직 Sites 공개 미디어 URL을 사용합니다. 대외 주소는 Railway이지만, 해당 영상은 원본 Sites가 공개 상태여야 재생됩니다. 최종 독립 운영을 위해 이 두 영상 파일을 별도 저장소/CDN 또는 Railway 서비스 자산으로 옮겨야 합니다.
