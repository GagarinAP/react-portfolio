import React from 'react';
import {Image, Breadcrumb, Row, Col} from 'react-bootstrap';

export default class Technologies extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
          <Breadcrumb.Item active>Технологии</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Технологии веб-разработки</h1>
          <p>Вы когда-нибудь смотрели на свой веб-сайт и задавались вопросом, что же сделало его таким красивым?
             Вы посмотрели на то, как меняются блоки, как работает меню или как действовуют кнопки при нажатии на них
              или любую другую часть, и подумали: «Интересно, насколько это сложно реализовать?» Или «Жаль, что я не
              могу это сделать»?</p>
          <p>Все эти вещи являются front-end разработкой. В то время как веб-дизайн - это то, как выглядит веб-сайт,
              разработка front end - это то, как этот дизайн фактически реализуется в Интернете.</p><br/>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/html-css.jpg"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
              <h2>
                <a href="https://html.spec.whatwg.org/multipage/">HTML5 + CSS3
                  <i className="fa fa-link"></i>
                </a>
              </h2>
            <p>HTML (Hyper Text Markup Language) и CSS (Каскадные Таблицы Стилей) являются самыми основами,
                строительными блоками веб-разработки.</p>
            <p>Без этих двух вещей вы не сможете создать дизайн веб-сайта, и все,
                что вы получите, - неформатированный текст на экране. Вы даже не можете добавлять изображения на
                страницу без HTML!</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/bootstrap.jpg"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
              <h2><a href="http://getbootstrap.com/">Bootstrap<i className="fa fa-link fa-1x"></i></a></h2>
              <p>Bootstrap — свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML и
                  CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов
                  веб-интерфейса, включая JavaScript-расширения.</p>
              <p>Bootstrap использует современные наработки в области CSS и HTML, поэтому необходимо быть внимательным
                  при поддержке старых браузеров.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/chart.png"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
              <h2><a href="http://www.chartjs.org/">Chart.js<i className="fa fa-link"></i></a></h2>
              <p>Простой, чистый и привлекательный строитель диаграмм JavaScript на основе HTML5. Chart.js - это простой
                  способ включить анимированные интерактивные графики на ваш сайт бесплатно.</p>
              <p>Chart.js предлагает восемь типов диаграмм.</p>
              <p>Chart.js перерисовывает диаграммы с изменением размера окна, обеспечивая отличную масштабируемость.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/gulp.jpg"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
            <h2><a href="http://gulpjs.com/">Gulp.js<i className="fa fa-link fa-1x"></i></a></h2>
              <p>Gulp - это инструмент для автоматизации трудоемких задач в рабочем процессе разработки.</p>
              <p>Gulp - это инструмент сборки веб-приложения, позволяющий автоматизировать повторяющиеся задачи, такие
                  как сборка и минификация CSS- и JS-файлов, запуск тестов, перезагрузка браузера и т.д.</p>
              <p>Тем самым Gulp ускоряет и оптимизирует процесс веб-разработки.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/lodash.jpg"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
              <h2><a href="https://lodash.com/">Lodash<i className="fa fa-link fa-1x"></i></a></h2>
              <p>Lodash — это полноценная замена для Underscore.js. Lodash имеет более высокую производительность,
                  избавлен от некоторых багов underscore и даёт некоторые новые возможности.</p>
              <p>Знающие люди рекомендуют разработчикам периодически пробегать глазами свою стандартную библиотеку,
                  чтобы лучше представлять ее возможности.</p>
              <p>Зачем очередной раз изобретать велосипед, когда до нас уже столько сделано, и, главное, хорошо
                  оттестировано, а бывает даже и нормально задокументировано. Говорят, полное использование стандартной
                  библиотеки Lodash здорово повышает производительность.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/leaflet.png"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
              <h2><a href="http://leafletjs.com/">Lealet.js<i className="fa fa-link fa-1x"></i></a></h2>
              <p>Lealet.js - библиотека с открытым исходным кодом, написанная на JavaScript, предназначенная для
                  отображения карт на веб-сайтах. Поддерживает большинство мобильных и стационарных платформ из числа
                  тех, что поддерживают HTML5 и CSS3.</p>
              <p>Как и в других картографических веб-библиотеках, в Leaflet реализована следующая модель: отображается
                  базовая карта с, возможно, растровыми и векторными слоями, накладываемыми поверх неё.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/webpack.png"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
            <h2><a href="https://webpack.js.org/">Webpack<i className="fa fa-link fa-1x"></i></a></h2>
              <p>Webpack — это крутая новая утилита для сборки бандлов и оптимизации модулей JavaScript и других
                  ресурсов для фронтенда.</p>
              <p>Webpack позволяет избавиться от bower и gulp/grunt в приложении, и заменить их одним инструментом.</p>
              <p>Вместо bower'а для установки и управления клиентскими зависимостями, можно использовать стандартный
                  Node Package Manager (npm) для установки и управления всеми фронтэнд-зависимостями. Webpack также
                  может выполнять большинство задач grunt/gulp'а.</p>
          </Col>
        </Row>
        <Row className="pre">
          <Col
              md={4}
              sm={6}
          >
            <Image
                className="image"
                responsive
                src="images/react.png"
            />
          </Col>
          <Col
              md={8}
              sm={6}
          >
            <h2><a href="https://facebook.github.io/react/">React<i className="fa fa-link fa-1x"></i></a></h2>
              <p>React.js - открытая JavaScript библиотека для создания интерфейсов, которая призвана решать проблемы
                  частичного обновления содержимого веб-страницы, с которыми сталкиваются в разработке одностраничных
                  приложений.</p>
              <p>Разрабатывается Facebook, Instagram и сообществом индивидуальных разработчиков.</p>
              <p>React позволяет разработчикам создавать крупные веб-приложения, которые используют данные какие
                  меняются со временем, без перезагрузки страницы. Его цель состоит в том, чтобы быть быстрым, простым,
                  масштабируемым. React обрабатывает только интерфейс в приложениях.</p>
          </Col>
        </Row>
          <Row className="pre">
              <Col
                  md={4}
                  sm={6}
              >
                  <Image
                      className="image"
                      responsive
                      src="images/redux.png"
                  />
              </Col>
              <Col
                  md={8}
                  sm={6}
              >
                  <h2><a href="http://redux.js.org/">Redux<i className="fa fa-link fa-1x"></i></a></h2>
                  <p>Redux - это инструмент управления как состоянием данных, так и состоянием интерфейса в
                      JavaScript-приложениях. Он подходит для одностраничных приложений, в которых управление состоянием
                      может со временем становиться сложным.</p>
                  <p>Redux предлагает думать о приложении, как о начальном состоянии модифицируемом последовательностью
                      действий (actions), что я считаю действительно хорошим подходом для сложных веб-приложений,
                      открывающим много возможностей.</p>
              </Col>
          </Row>
          <Row className="pre">
              <Col
                  md={4}
                  sm={6}
              >
                  <Image
                      className="image"
                      responsive
                      src="images/mongodb.jpg"
                  />
              </Col>
              <Col
                  md={8}
                  sm={6}
              >
                  <h2><a href="https://www.mongodb.com/">MongoDB<i className="fa fa-link fa-1x"></i></a></h2>
                  <p>MongoDB — документоориентированная система управления базами данных с открытым исходным кодом, не
                      требующая описания схемы таблиц. Классифицирована как NoSQL, использует JSON-подобные документы и
                      схему базы данных.</p>
                  <p>СУБД управляет наборами JSON-подобных документов, хранимых в двоичном виде в формате BSON. Хранение
                      и поиск файлов в MongoDB происходит благодаря вызовам протокола GridFS.</p>
              </Col>
          </Row>
          <Row className="pre">
              <Col
                  md={4}
                  sm={6}
              >
                  <Image
                      className="image"
                      responsive
                      src="images/nodejs.png"
                  />
              </Col>
              <Col
                  md={8}
                  sm={6}
              >
                  <h2><a href="https://nodejs.org/en/">Node.js<i className="fa fa-link fa-1x"></i></a></h2>
                  <p>Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код),
                      превращающая JavaScript из узкоспециализированного языка в язык общего назначения.</p>
                  <p>Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свою
                      API, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним
                      из JavaScript-кода.</p>
                  <p>Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность
                      разрабатывать на Node.js и десктопные оконные приложения.</p>
              </Col>
          </Row>
      </div>
    );
  }
}
