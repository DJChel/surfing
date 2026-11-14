import { n as e, t } from "./main-Gln5nMiF.js";
var n = e(() => {
  console.log(`Привет, я на главной странице`);
  var e = 0,
    t = [
      {
        name: `Сёрфборд Olaian Foam 500 c 3 плавниками`,
        description: `Разработан нашей командой энтузиастов серфинга для детей, которые только начинают чувствовать себя уверенно на волнах. Может также использоваться легкими, продвинутыми взрослыми.`,
        features: `Этот пока скрыт`,
        rating: 4,
        votes: 25,
        price: 49e3,
        images: [
          `/assets/img/product.png`,
          `/assets/img/preview4.png`,
          `/assets/img/preview2.png`,
          `/assets/img/preview3.png`,
          `/assets/img/preview1.png`,
        ],
      },
      {
        name: `Сёрфборд OceanRider — Aqua Vortex Pro-V1`,
        description: `Динамичный шортборд с гипнотическим этническим орнаментом морских волн. Создан для сёрферов, ценящих глубокую связь с океаном, быстрый разгон на гребне и идеальный контроль над траекторией скольжения.`,
        features: `Усиленный центральный стрингер, геометрия хвоста Swallow Tail для резких разворотов, водоотталкивающее матовое покрытие и трёхплавниковая система Thruster с кастомным океанским принтом.`,
        rating: 4,
        votes: 25,
        price: 28750,
        images: [
          `/assets/img/d1-1.png`,
          `/assets/img/d1-2.png`,
          `/assets/img/d1-3.png`,
          `/assets/img/d1-4.png`,
          `/assets/img/d1-5.png`,
        ],
      },
      {
        name: `Сёрфборд OceanRider — Rebel Wave Street-Edition`,
        description: `Дерзкая модель в стиле уличной граффити-культуры. Матовый чёрный корпус с сочными неоновыми тэгами ярко выделяется на воде и на берегу, подчёркивая ваш бескомпромиссный стиль и свободу.`,
        features: `Износостойкий верхний слой от царапин и сколов, встроенная фактурная зона сцепления, сверхлёгкий сердечник EPS и гибкие съёмные плавники, оформленные авторскими стрит-арт `,
        rating: 5,
        votes: 71,
        price: 48990,
        images: [
          `/assets/img/d2-1.png`,
          `/assets/img/d2-2.png`,
          `/assets/img/d2-3.png`,
          `/assets/img/d2-4.png`,
          `/assets/img/d2-5.png`,
        ],
      },
      {
        name: `Сёрфборд OceanRider — Pop Bloom Retro-X`,
        description: `Сочная ретро-доска в стиле поп-арт с сиреневым фоном и яркими жёлтыми цветами. Объединяет винтажную эстетику пляжной свободы с отличными гидродинамическими свойствами для катания в удовольствие.`,
        features: `Расширенный нос (Nose) для лёгкого выгребания на волну, сглаженные канты для мягкого карвинга, защитный лак с UV-фильтром от выгорания на солнце и стильные тематические `,
        rating: 5,
        votes: 37,
        price: 27900,
        images: [
          `/assets/img/d3-1.png`,
          `/assets/img/d3-2.png`,
          `/assets/img/d3-3.png`,
          `/assets/img/d3-4.png`,
          `/assets/img/d3-5.png`,
        ],
      },
      {
        name: `Сёрфборд OceanRider — Super Strike Blam-Edition`,
        description: `Взрывная комикс-доска в ярко-жёлтых тонах с молниями и супергеройской графикой. Создана для любителей высокой скорости и экстрима, готовых совершать супергеройские трюки на самых крутых волнах.`,
        features: `Двойной конкейв на днище для взрывного ускорения, ударопрочный многослойный ламинат из стекловолокна, усиленные канты и универсальная конфигурация под 3 или 4 плавника.`,
        rating: 4,
        votes: 12,
        price: 22500,
        images: [
          `/assets/img/d4-1.png`,
          `/assets/img/d4-2.png`,
          `/assets/img/d4-3.png`,
          `/assets/img/d4-4.png`,
          `/assets/img/d4-5.png`,
        ],
      },
      {
        name: `Сёрфборд OceanRider — Royal Breeze Luxe-V`,
        description: `Элегантная премиум-доска с текстурой белого мрамора, золотистыми прожилками цвета шампань и нежными розами. Выбор для тех, кто ценит эстетическое совершенство и плавный, грациозный ход по воде.`,
        features: `Декоративный стрингер из натурального тёмного дерева, бесшовное глянцевое покрытие «Chrono-Glaze», мягкий рокер для комфортного скольжения и изящные плавники с мраморным `,
        rating: 5,
        votes: 7,
        price: 36990,
        images: [
          `/assets/img/d5-1.png`,
          `/assets/img/d5-2.png`,
          `/assets/img/d5-3.png`,
          `/assets/img/d5-4.png`,
          `/assets/img/d5-5.png`,
        ],
      },
    ],
    n = document.querySelector(`.tab.descriptionTab a`),
    r = document.querySelector(`.tab.featuresTab a`),
    i = document.querySelector(`.hero .productCard .productName`),
    a = document.querySelector(`#descriptionTab`),
    o = document.querySelector(`#featuresTab`),
    s = document.querySelector(`.hero .productCard .rating small`),
    c = document.querySelector(`.hero .productCard .commercial .price`),
    l = document.querySelector(`.productCounter`),
    u = document.querySelector(`.hero .productCard .picture img`),
    d = document.querySelector(`.hero .productCard .previewPictures`);
  (console.log(n),
    n.addEventListener(`click`, function (e) {
      (o.classList.remove(`selected`), a.classList.add(`selected`));
    }),
    r.addEventListener(`click`, function (e) {
      (o.classList.add(`selected`), a.classList.remove(`selected`));
    }),
    (window.getVoicesText = function (e, t = [`голос`, `голоса`, `голосов`]) {
      if (e % 100 >= 11 && e % 100 <= 19) return t[2];
      let n = e % 10,
        r;
      return ((r = n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2), t[r]);
    }),
    (window.setValues = function () {
      ((l.innerText = `${e + 1}/${t.length}`),
        (i.innerText = t[e].name),
        (a.innerText = t[e].description),
        (o.innerText = t[e].features),
        (s.innerText = t[e].votes + ` ` + getVoicesText(t[e].votes)),
        (c.innerHTML =
          t[e].price.toLocaleString(`ru-RU`) + ` <span>руб.</span>`),
        console.log(t[e].rating));
      let n = t[e].images;
      ((d.innerHTML = ``),
        n.forEach(function (e, t) {
          if (t > 3) return !1;
          let n = document.createElement(`div`);
          (n.classList.add(`thumbNail`),
            t === 0 &&
              (n.classList.add(`selected`),
              (u.src = e),
              (u.alt = i + ` картинка `)),
            n.addEventListener(`click`, (t) => {
              (d.childNodes.forEach(function (e) {
                e.classList.remove(`selected`);
              }),
                n.classList.add(`selected`),
                (u.src = e),
                (u.alt = i + ` картинка `));
            }));
          let r = document.createElement(`img`);
          ((r.src = e),
            (r.alt = i + ` картинка ` + t),
            n.appendChild(r),
            d.appendChild(n));
        }));
    }),
    (window.nextProduct = function () {
      (e++, e >= t.length && (e = 0), setValues());
    }),
    (window.prevProduct = function () {
      (e--, e < 0 && (e = t.length - 1), setValues());
    }));
});
(t(), n());
