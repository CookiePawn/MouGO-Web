import Image from "next/image";
import Link from "next/link";
import { screens } from "@/assets/screen";

const features = [
  {
    number: "01",
    eyebrow: "발견",
    title: "카메라를 켜면\n일상이 탐험이 돼요",
    description:
      "산책길의 표지판도, 책상 위의 마우스도 모으고에선 새로운 발견이에요.",
    screen: screens.battle,
    accent: "green",
  },
  {
    number: "02",
    eyebrow: "포획",
    title: "상자를 던져\n야생의 물건을 포획!",
    description:
      "발견한 물건을 게임처럼 포획해 보세요. 어떤 레어도가 나올지는 잡아보기 전까지 몰라요.",
    screen: screens.result,
    accent: "orange",
  },
  {
    number: "03",
    eyebrow: "수집",
    title: "내가 발견한 세계를\n도감으로 완성해요",
    description:
      "포획 기록과 희귀도를 한눈에 모으고, 업적을 하나씩 열어 나만의 탐험을 남겨요.",
    screen: screens.dex,
    accent: "violet",
  },
] as const;

function BoxMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`box-mark${small ? " box-mark--small" : ""}`} aria-hidden>
      <span className="box-mark__tape" />
      <span className="box-mark__face">↟ ◇ ↟</span>
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="모으고 홈">
        <BoxMark small />
        <span>모으고</span>
      </Link>
      <nav aria-label="주요 메뉴">
        <a href="#how">모으고는?</a>
        <a href="#features">기능</a>
        <a href="#download">다운로드</a>
      </nav>
      <a className="header-cta" href="#download">
        탐험 시작하기
      </a>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">EVERYDAY TREASURE HUNT</p>
          <h1>
            평범한 오늘을
            <br />
            <span>수집</span>해 보세요.
          </h1>
          <p className="hero__description">
            카메라로 발견하고, 상자로 포획하고,
            <br />
            나만의 도감을 완성하는 일상 탐험.
          </p>
          <div className="hero__actions">
            <a className="button button--dark" href="#download">
              앱 다운로드 <span>↗</span>
            </a>
            <a className="text-link" href="#how">
              어떻게 놀아요? <span>↓</span>
            </a>
          </div>
          <div className="hero__mini">
            <span className="mini-orb">✦</span>
            <p>
              <b>오늘도 새로운 물건이 기다리고 있어요</b>
              <br />
              집 앞 5분 거리부터 탐험해 보세요.
            </p>
          </div>
        </div>

        <div className="hero__visual" aria-label="모으고 앱 홈 화면">
          <div className="sun-shape" />
          <div className="orbit orbit--one">✦</div>
          <div className="orbit orbit--two">●</div>
          <div className="hero-phone">
            <Image
              src={screens.home}
              alt="모으고 앱 홈 화면"
              priority
              sizes="(max-width: 700px) 74vw, 390px"
            />
          </div>
          <div className="floating-card floating-card--top">
            <span className="rarity-dot" />
            <div>
              <small>오늘의 발견</small>
              <b>불타는 정체불명의 상자</b>
            </div>
          </div>
          <div className="floating-card floating-card--bottom">
            <BoxMark small />
            <div>
              <small>포획 성공!</small>
              <b>새로운 도감 +1</b>
            </div>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="서비스 특징">
        <span>DISCOVER</span><i>✦</i><span>CAPTURE</span><i>✦</i>
        <span>COLLECT</span><i>✦</i><span>REPEAT</span>
      </section>

      <section className="intro" id="how">
        <div className="intro__label">
          <span>HOW TO PLAY</span>
          <i />
        </div>
        <div className="intro__copy">
          <p className="eyebrow">주변을 다시 보는 작은 계기</p>
          <h2>
            그냥 지나쳤던 것들이
            <br />
            오늘의 <em>모험</em>이 됩니다.
          </h2>
          <p>
            모으고는 거창한 목적지가 필요하지 않아요.
            <br />
            눈에 들어온 물건 하나면 탐험은 이미 시작됐으니까요.
          </p>
        </div>
      </section>

      <section className="features" id="features">
        {features.map((feature, index) => (
          <article
            className={`feature feature--${feature.accent}`}
            key={feature.number}
          >
            <div className="feature__copy">
              <span className="feature__number">{feature.number}</span>
              <p className="eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p className="feature__description">{feature.description}</p>
              <div className="feature__tag">
                {index === 0 && "AI가 물건을 알아봐요"}
                {index === 1 && "두근두근 랜덤 레어도"}
                {index === 2 && "기록 · 도감 · 업적"}
              </div>
            </div>
            <div className="feature__screen">
              <div className="feature__blob" />
              <div className="feature-phone">
                <Image
                  src={feature.screen}
                  alt={`${feature.eyebrow} 기능 앱 화면`}
                  sizes="(max-width: 700px) 68vw, 320px"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="gallery">
        <div className="gallery__heading">
          <p className="eyebrow">MY LITTLE COLLECTION</p>
          <h2>모을수록 더 재미있어져요.</h2>
        </div>
        <div className="gallery__rail">
          {[screens.history, screens.rarity, screens.achievement].map((screen, i) => (
            <div className="gallery-phone" key={i}>
              <Image src={screen} alt={["탐색 기록", "레어도 현황", "업적"][i]} sizes="260px" />
            </div>
          ))}
        </div>
      </section>

      <section className="download" id="download">
        <div className="download__spark">✦</div>
        <BoxMark />
        <p className="eyebrow">READY TO EXPLORE?</p>
        <h2>
          오늘은 무엇을
          <br />
          발견하게 될까요?
        </h2>
        <p>모으고와 함께, 평범한 하루를 수집해 보세요.</p>
        <div className="download__buttons">
          <span className="store-button"><b></b><span><small>Download on the</small>App Store</span></span>
          <span className="store-button"><b>▶</b><span><small>GET IT ON</small>Google Play</span></span>
        </div>
        <small className="coming-soon">곧 만나요 · 출시 준비 중</small>
      </section>

      <footer>
        <div className="footer__brand">
          <Link href="/" className="brand"><BoxMark small /><span>모으고</span></Link>
          <p>일상을 탐험으로, 발견을 수집으로.</p>
        </div>
        <div className="footer__links">
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
          <a href="mailto:dev.jcahn@gmail.com">문의하기</a>
        </div>
        <p className="copyright">© 2026 Mougo. All rights reserved.</p>
      </footer>
    </main>
  );
}
