# MouGO Web

모바일 앱 **모으고(MouGO)**를 소개하는 공식 랜딩페이지입니다.

모으고는 주변의 물건을 카메라로 발견하고, 게임처럼 포획해 도감과
탐색 기록을 완성하는 일상 탐험 앱입니다.

## 주요 페이지

| 경로 | 설명 |
| --- | --- |
| `/` | 서비스 소개 및 앱 화면을 담은 반응형 랜딩페이지 |
| `/privacy` | 개인정보처리방침 |
| `/terms` | 이용약관 |

개인정보처리방침과 이용약관의 현재 시행일은 **2026년 6월 30일**입니다.

## 기술 스택

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 3 및 전역 CSS
- Next.js Image Optimization

## 시작하기

Node.js와 Yarn이 설치되어 있어야 합니다.

```bash
yarn install
```

실행 환경에 맞는 ENV 파일을 프로젝트 루트에 생성합니다.

```text
.env.local
.env.development
.env.production
```

현재 랜딩페이지 자체에 필수 환경 변수는 없으므로 빈 파일로 시작해도
됩니다.

### 로컬 실행

```bash
yarn start:local
```

기본 주소는 [http://localhost:3000](http://localhost:3000)입니다.

ENV 파일 없이 바로 확인하려면 다음 명령을 사용할 수 있습니다.

```bash
yarn next dev
```

## 빌드 및 실행

```bash
# 로컬 환경 빌드
yarn build:local

# 개발 환경 빌드
yarn build:dev

# 운영 환경 빌드
yarn build:prod
```

빌드 결과를 환경별로 실행하려면 아래 명령을 사용합니다.

```bash
yarn host:local
yarn host:dev
yarn host:prod
```

환경 파일 없이 프로덕션 빌드만 검증할 수 있습니다.

```bash
yarn next build --webpack
```

## 프로젝트 구조

```text
src/
├── app/
│   ├── page.tsx             # 랜딩페이지
│   ├── layout.tsx           # 공통 레이아웃 및 메타데이터
│   ├── globals.css          # 랜딩/법률 페이지 스타일
│   ├── legal-content.ts     # 약관 및 개인정보처리방침 원문
│   ├── legal-page.tsx       # 법률 문서 공통 레이아웃
│   ├── privacy/page.tsx     # 개인정보처리방침
│   └── terms/page.tsx       # 이용약관
├── assets/
│   └── screen/
│       ├── index.ts         # 앱 화면 이미지 export
│       └── *.png            # 랜딩페이지용 앱 스크린샷
└── types/
    └── assets.d.ts          # PNG 모듈 타입 선언
```

## 앱 스크린샷 관리

새 앱 화면은 `src/assets/screen`에 PNG 형식으로 추가하고
`src/assets/screen/index.ts`에서 export한 뒤 사용합니다.

```ts
import newScreen from "./new-screen.png";

export const screens = {
  newScreen,
};
```

파일명을 변경하거나 이미지를 추가했다면 랜딩페이지의
`next/image` 참조도 함께 확인해 주세요.

## 법률 문서 관리

개인정보처리방침과 이용약관의 실제 내용 및 시행일은
`src/app/legal-content.ts`에서 관리합니다. 법률 문구를 변경할 때는
모바일 앱에 포함된 문서와 웹 문서가 동일한지 함께 확인해야 합니다.

## 문의

- 이메일: [dev.jcahn@gmail.com](mailto:dev.jcahn@gmail.com)
