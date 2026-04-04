export default function App() {
  const services = [
    {
      title: "分離式冷氣安裝",
      desc: "住家、套房、店面與辦公空間冷氣安裝，重視配管配置、排水與施工整潔。",
      icon: "❄️",
    },
    {
      title: "冷氣維修檢測",
      desc: "針對不冷、漏水、異音、跳電、啟動異常等問題，提供到府檢測與維修建議。",
      icon: "🛠️",
    },
    {
      title: "冷氣清洗保養",
      desc: "深度清洗與定期保養，改善異味、提升冷房效率並延長設備使用壽命。",
      icon: "🧼",
    },
    {
      title: "移機與舊機更換",
      desc: "搬遷移機、舊機拆除、新機更換與重新定位施工，流程清楚、施作細緻。",
      icon: "🚚",
    },
    {
      title: "充電樁安裝",
      desc: "提供電動車充電樁安裝與用電規劃評估，兼顧安全、線路配置與後續使用便利性。",
      icon: "⚡",
    },
    {
      title: "用電設備規劃",
      desc: "結合冷氣與電能工程經驗，協助現場評估用電條件與設備配置建議。",
      icon: "🔌",
    },
  ];

  const highlights = [
    "大台北地區到府服務",
    "家用／店面／商用空調",
    "安裝・維修・清洗保養一站式",
    "充電樁專業安裝",
  ];

  const processSteps = [
    {
      step: "01",
      title: "來電或 LINE 諮詢",
      desc: "提供需求、地點與設備狀況，先進行初步判斷與服務建議。",
    },
    {
      step: "02",
      title: "現場評估與報價",
      desc: "依空間條件、線路配置與安裝需求評估，提供合適施工方案。",
    },
    {
      step: "03",
      title: "安排施工或檢修",
      desc: "確認時間後到府施作，重視細節、整潔與作業流程。",
    },
    {
      step: "04",
      title: "完工測試與說明",
      desc: "完成後進行測試與交付說明，讓使用更安心。",
    },
  ];

  const caseStudies = [
    {
      title: "住宅冷氣汰舊換新",
      category: "分離式冷氣安裝",
      desc: "針對老舊設備冷房效率下降的住家，重新評估室內外機配置、配管與排水路徑，完成拆舊換新。",
      tag: "住家空間",
    },
    {
      title: "店面空調異常檢修",
      category: "冷氣維修",
      desc: "處理營業場所臨時不冷與異音問題，現場檢查設備狀態後完成檢修，協助快速恢復使用。",
      tag: "店面空間",
    },
    {
      title: "冷氣深度清洗保養",
      category: "保養清洗",
      desc: "針對長期使用後出風異味與積塵問題，進行清洗與保養，提升舒適度與出風品質。",
      tag: "定期保養",
    },
    {
      title: "住宅充電樁安裝規劃",
      category: "充電樁工程",
      desc: "依現場配電與停車位置條件規劃施工方式，兼顧安全、便利與後續使用動線。",
      tag: "電能工程",
    },
  ];

  const reviews = [
    {
      name: "蘆洲住家客戶",
      text: "預約後回覆很快，施工整齊，冷氣清洗完異味和出風明顯改善！",
    },
    {
      name: "三重店面業主",
      text: "店裡空調臨時故障，師傅處理效率很好，溝通也很清楚。",
    },
    {
      name: "大台北車主",
      text: "充電樁安裝評估很仔細，施工前後都講解得很完整，讓人安心。不用再停外面找充電樁了",
    },
  ];

  const lineLink = "https://line.me/ti/p/hAguZzEmaa";

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-sky-900 selection:text-white">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">頂好冷氣電能工程</div>
            <div className="text-xs text-slate-500">冷氣安裝・維修・保養清洗・充電樁安裝</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#about" className="transition hover:text-slate-950">關於我們</a>
            <a href="#services" className="transition hover:text-slate-950">服務項目</a>
            <a href="#process" className="transition hover:text-slate-950">服務流程</a>
            <a href="#cases" className="transition hover:text-slate-950">施工案例</a>
            <a href="#contact" className="transition hover:text-slate-950">聯絡我們</a>
          </nav>
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={lineLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              LINE 聯絡
            </a>
            <a
              href="tel:0981988796"
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              立即來電
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_55%,#ffffff_100%)]">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-12 top-16 h-52 w-52 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="absolute right-0 top-6 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-sky-200 bg-white px-3 py-1 text-sm text-sky-800 shadow-sm">
              新北蘆洲・三重・大台北空調工程到府服務
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              <span className="block">頂好 Don&apos;hot</span>
              <span className="block text-sky-800">讓您不再熱</span>
              <span className="block text-sky-800">舒適空間的最佳選擇</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              頂好冷氣電能工程提供冷氣安裝、維修、保養清洗、移機換新與充電樁安裝服務，從需求諮詢、現場評估到完工測試，協助你把空調與用電工程處理得更安心。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0981988796"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                立即來電洽詢
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                加 LINE 詢問
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
              <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <img
                  src="/cover.png"
                  alt="頂好冷氣與充電樁安裝服務"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">主要服務</div>
                  <div className="mt-1 font-semibold">冷氣安裝 / 維修 / 清洗</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">服務範圍</div>
                  <div className="mt-1 font-semibold">蘆洲・三重・大台北</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">附加工程</div>
                  <div className="mt-1 font-semibold">充電樁安裝</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">About Us</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              冷氣工程為主軸，整合電能設備服務
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              頂好冷氣電能工程以冷氣安裝、維修與保養清洗為主要服務，也提供充電樁安裝與相關用電設備評估。從住家到店面、從汰舊換新到故障檢修，我們重視的是現場條件、施工品質與交付後的實際使用感受。
            </p>
            
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["現場評估", "依安裝位置、空間條件與線路狀況規劃施工方式"],
              ["工程細節", "重視配管、排水、機位與施工整潔"],
              ["問題判斷", "針對不冷、漏水、異音等常見問題協助檢測"],
              ["整合服務", "冷氣工程與充電樁安裝可一併討論"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">Services</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              主要服務項目
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              以冷氣工程為核心，搭配電能設備安裝與規劃，讓服務內容更完整。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-2xl transition group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">Process</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            服務流程
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            用清楚流程降低溝通成本，讓安裝、維修與工程安排更有方向。
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm font-bold tracking-[0.25em] text-sky-800">STEP {item.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">Cases</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              施工案例
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={[
                      "/1.png",
                      "/2.png",
                      "/3.png",
                      "/4.png",
                    ][index]}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                    {item.tag}
                  </div>
                  <div className="mt-4 text-sm text-slate-500">{item.category}</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">Contact & Location</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              服務據點與聯絡方式
            </h2>
            <div className="mt-8 space-y-5 text-slate-700">
              <div>
                <div className="text-sm text-slate-500">地址</div>
                <div className="mt-1 text-lg font-medium">新北市蘆洲區中山一路197巷11號</div>
              </div>
              <div>
                <div className="text-sm text-slate-500">公司電話</div>
                <a href="tel:0222856465" className="mt-1 block text-lg font-medium hover:text-slate-950">
                  02-2285-6465
                </a>
              </div>
              <div>
                <div className="text-sm text-slate-500">手機</div>
                <a href="tel:0981988796" className="mt-1 block text-lg font-medium hover:text-slate-950">
                  0981-988-796
                </a>
              </div>
              <div>
                <div className="text-sm text-slate-500">LINE</div>
                <a href={lineLink} target="_blank" rel="noreferrer" className="mt-1 block text-lg font-medium text-emerald-600 hover:text-emerald-700">
                  點我加入 LINE 聯絡
                </a>
              </div>
              <div>
                <div className="text-sm text-slate-500">Email</div>
                <a href="mailto:c0981988796@gmail.com" className="mt-1 block break-all text-lg font-medium hover:text-slate-950">
                  c0981988796@gmail.com
                </a>
              </div>
              <div>
                <div className="text-sm text-slate-500">服務範圍</div>
                <div className="mt-1 text-lg font-medium">三重、蘆洲、大台北地區</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8C%97%E5%B8%82%E8%98%86%E6%B4%B2%E5%8D%80%E4%B8%AD%E5%B1%B1%E4%B8%80%E8%B7%AF197%E5%B7%B711%E8%99%9F"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Google 地圖導航
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                LINE 諮詢
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">
            <div className="aspect-[16/12] overflow-hidden rounded-[1.5rem]">
              <iframe
                title="頂好冷氣電能工程地圖"
                src="https://www.google.com/maps?q=%E6%96%B0%E5%8C%97%E5%B8%82%E8%98%86%E6%B4%B2%E5%8D%80%E4%B8%AD%E5%B1%B1%E4%B8%80%E8%B7%AF197%E5%B7%B711%E8%99%9F&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-slate-200 bg-slate-50/80">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-800">Reviews</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              客戶常見回饋
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-lg text-amber-500">★★★★★</div>
                <p className="mt-4 leading-8 text-slate-700">“{review.text}”</p>
                <div className="mt-6 text-sm font-medium text-slate-500">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-2xl shadow-slate-300/40 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                有冷氣安裝、維修、保養或充電樁需求？
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                歡迎直接來電或加入 LINE 洽詢
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:0981988796"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                撥打 0981988796
              </a>
              <a
                href={lineLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                LINE 聯絡
              </a>
              <a
                href="mailto:c0981988796@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                寄送 Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={lineLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:bg-emerald-600"
      >
        LINE 快速聯絡
      </a>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <div className="font-semibold text-slate-700">頂好冷氣電能工程</div>
            <div className="mt-1">冷氣安裝・維修・保養清洗・充電樁安裝</div>
          </div>
          <div>© 2026 Tinghao Air Conditioning & Energy Engineering. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
