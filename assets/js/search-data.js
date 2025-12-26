// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-обо-мне",
    title: "Обо мне",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-проекты",
          title: "Проекты",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-доклады",
          title: "Доклады",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-лонгриды",
          title: "Лонгриды",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "nav-репозитории",
          title: "Репозитории",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-резюме",
          title: "Резюме",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "articles-алгоритмы-поиска-аномалий-hbos-и-ecod",
          title: 'Алгоритмы поиска аномалий HBOS и ECOD',
          description: "Разбор алгоритмов HBOS и ECOD",
          section: "Articles",handler: () => {
              window.location.href = "/articles/anomaly_hbos_ecod/";
            },},{id: "articles-алгоритм-поиска-аномалий-isolation-forest",
          title: 'Алгоритм поиска аномалий Isolation Forest',
          description: "Разбор алгоритма Isolation Forest",
          section: "Articles",handler: () => {
              window.location.href = "/articles/anomaly_iforest/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-видео-выступления",
          title: 'Видео выступления',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-выпуск-подкаста",
          title: 'Выпуск подкаста',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-доклад-о-пет-проекте",
          title: 'Доклад о пет-проекте',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-амбассадор-яндекс-практикума",
          title: 'Амбассадор Яндекс Практикума',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-запись-доклада",
          title: 'Запись доклада',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-разбор-алгоритмов-hbos-и-ecod",
          title: 'Разбор алгоритмов HBOS и ECOD',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-статья-на-хабре",
          title: 'Статья на Хабре',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-доклад-на-positive-hack-days-fest-2025",
          title: 'Доклад на Positive Hack Days Fest 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-разбор-алгоритмов-iforest-и-pca",
          title: 'Разбор алгоритмов IForest и PCA',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-видео-моего-доклада-на-positive-hack-days-теперь-доступно-на-youtube",
          title: 'Видео моего доклада на Positive Hack Days теперь доступно на YouTube',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "news-поиск-аномалий-алгоритмы-knn-и-lof",
          title: 'Поиск аномалий, алгоритмы kNN и LOF',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12/";
            },},{id: "news-статья-алгоритм-поиска-аномалий-isolation-forest",
          title: 'Статья «Алгоритм поиска аномалий Isolation Forest»',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_13/";
            },},{id: "projects-распознавание-лиц",
          title: 'Распознавание лиц',
          description: "В этом проекте мы будем решать задачу распознавания лиц. Мы обучим нейросеть и поиграем с различными функциями потерь и метриками. Обучение будем производить на наборе данных CelebA dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_cv_diploma_project/";
            },},{id: "projects-классификация-изображений",
          title: 'Классификация изображений',
          description: "В этом задании нам необходимо классифицировать персонажей мультсериала «Симпсоны». Как известно, сериал идет более 25 лет, и за это время скопилось очень много видеоматериала. Персонажи менялись вместе с изменяющимися технологиями, и Гомер Симпсон-2023 не очень похож на Гомера Симпсона-1989.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_cv_p1_simpsons/";
            },},{id: "projects-семантическая-сегментация",
          title: 'Семантическая сегментация',
          description: "Мы будем решить задачу сегментации медицинских снимков. В нашем распоряжении датасет ADDI project. В нём содержатся фотографии различных поражений кожи. Однако мы будем заниматься не классификацией, а сегментацией изображений, т.е. разделением изображений на несколько сегментов для упрощения последующего анализа и обработки.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_cv_p2_semantic_segmentation/";
            },},{id: "projects-автокодировщики",
          title: 'Автокодировщики',
          description: "В данном проекте наша задача — написать и обучить несколько вариантов автокодировщиков, оценить их свойства и применимость для различных задач. Для этого мы будем использовать датасеты лиц (LFW) и цифр (MNIST).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_cv_p3_autoencoders/";
            },},{id: "projects-gan",
          title: 'GAN',
          description: "Мы обучим нейросеть генерировать лица людей и посмотрим на то, как можно оценивать качество генерации. В качестве обучающей выборки возьмём датасет Flickr-Faces.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_cv_p4_gan/";
            },},{id: "projects-классификация-текстов",
          title: 'Классификация текстов',
          description: "На этот раз нам предстоит решить задачу классификации текстов. Мы будем использовать набор данных ag_news. Это датасет для классификации новостей на 4 темы — World, Sports, Business, Sci/Tech. Посмотрим, как с такой задачей справятся рекуррентные нейросети.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_nlp_p1_text_classification/";
            },},{id: "projects-языковое-моделирование",
          title: 'Языковое моделирование',
          description: "В данном проекте мы будем заниматься языковым моделированием. Обучим несколько нейросетевых моделей предсказывать слова на основе предыдущего текста. Такие модели можно использовать и для генерации новых текстов, что мы также продемонстрируем.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DLS_nlp_p2_language_modeling/";
            },},{id: "projects-checkdocai",
          title: 'CheckDocAI',
          description: "Телеграм-бот с ИИ модулем для контроля качества оформления документов",
          section: "Projects",handler: () => {
              window.location.href = "/projects/check_doc_ai/";
            },},{id: "projects-промышленная-обработка-стали",
          title: 'Промышленная обработка стали',
          description: "Чтобы оптимизировать производственные расходы, металлургический комбинат ООО «Так закаляем сталь» решил уменьшить потребление электроэнергии на этапе обработки стали. Нам предстоит построить модель, которая предскажет температуру стали.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_diploma_project/";
            },},{id: "projects-защита-данных-клиентов-страховой-компании",
          title: 'Защита данных клиентов страховой компании',
          description: "Необходимо защитить данные клиентов страховой компании «Хоть потоп». Разработаем такой метод преобразования данных, чтобы по ним было сложно восстановить персональную информацию. Обоснуем корректность его работы. Нужно защитить данные, чтобы при преобразовании качество моделей машинного обучения не ухудшилось. Подбирать наилучшую модель не требуется.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p10_insurance/";
            },},{id: "projects-построение-модели-определения-стоимости-автомобиля",
          title: 'Построение модели определения стоимости автомобиля',
          description: "Сервис по продаже автомобилей с пробегом разрабатывает приложение для привлечения новых клиентов. В нём можно быстро узнать рыночную стоимость своего автомобиля. На основе исторические данные необходимо построить модель для определения стоимости автомобиля.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p11_car_prices/";
            },},{id: "projects-прогнозирование-количества-заказов-такси-на-следующий-час",
          title: 'Прогнозирование количества заказов такси на следующий час',
          description: "Компания такси собрала исторические данные о заказах такси в аэропортах. Чтобы привлекать больше водителей в период пиковой нагрузки, нужно спрогнозировать количество заказов такси на следующий час. Строится модель для такого предсказания.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p12_time_series/";
            },},{id: "projects-обучение-модели-классификации-комментариев",
          title: 'Обучение модели классификации комментариев',
          description: "Интернет-магазин запускает новый сервис. Теперь пользователи могут редактировать и дополнять описания товаров, как в вики-сообществах. То есть клиенты предлагают свои правки и комментируют изменения других. Требуется инструмент, который будет искать токсичные комментарии и отправлять их на модерацию.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p13_texts/";
            },},{id: "projects-определение-возраста-по-фотографиям",
          title: 'Определение возраста по фотографиям',
          description: "Сетевой супермаркет «Хлеб-Соль» внедряет систему компьютерного зрения для обработки фотографий покупателей. Необходимо построить модель, которая по фотографии определит приблизительный возраст человека. В нашем распоряжении набор фотографий людей с указанием возраста.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p14_cv/";
            },},{id: "projects-классификация-клиентов-телеком-компании",
          title: 'Классификация клиентов телеком компании',
          description: "Оператор мобильной связи выяснил: многие клиенты пользуются архивными тарифами. Они хотят построить систему, способную проанализировать поведение клиентов и предложить пользователям один из новых тарифов.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p6_telecom/";
            },},{id: "projects-прогнозирование-оттока-клиента-банка",
          title: 'Прогнозирование оттока клиента банка',
          description: "Из банка стали уходить клиенты. Каждый месяц. Немного, но заметно. Банковские маркетологи посчитали: сохранять текущих клиентов дешевле, чем привлекать новых. Нужно спрогнозировать, уйдёт клиент из банка в ближайшее время или нет. Предоставлены исторические данные о поведении клиентов и расторжении договоров с банком.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p7_bank_churn/";
            },},{id: "projects-определение-наиболее-выгодного-региона-нефтедобычи",
          title: 'Определение наиболее выгодного региона нефтедобычи',
          description: "Нам предоставлены пробы нефти в трёх регионах. Характеристики для каждой скважины в регионе уже известны. Необходимо построить модель для определения региона, где добыча принесёт наибольшую прибыль.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p8_oil_rigs/";
            },},{id: "projects-исследование-технологического-процесса-очистки-золота",
          title: 'Исследование технологического процесса очистки золота',
          description: "Строится модель машинного обучения для промышленной компании, разрабатывающая решения для эффективной работы промышленных предприятий. Модель должна предсказать коэффициент восстановления золота из золотосодержащей руды на основе данных с параметрами добычи и очистки. Модель поможет оптимизировать производство, чтобы не запускать предприятие с убыточными характеристиками.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practicum_p9_gold/";
            },},{id: "projects-цифровой-прорыв-2024-всероссийский",
          title: 'Цифровой прорыв 2024 (всероссийский)',
          description: "В рамках хакатона был разработан интеллектуальный помощник оператора службы поддержки RuTube",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rutube_hack/";
            },},{id: "projects-vk-hse-data-hack-1-место",
          title: 'VK HSE Data Hack (1 место)',
          description: "Хакатон по классификации новостных статей на 21 класс. В нашем решении комбинируются результаты работы небольшого классификатора на базе трансформерной архитектуры и предсказания LLM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vk_hse_hack/";
            },},{id: "talks-поиск-аномалий-hbos-и-ecod",
          title: 'Поиск аномалий, HBOS и ECOD',
          description: "Разбор алгоритмов HBOS и ECOD",
          section: "Talks",handler: () => {
              window.location.href = "/talks/anomaly_hbos_ecod/";
            },},{id: "talks-поиск-аномалий-iforest-и-pca",
          title: 'Поиск аномалий, IForest и PCA',
          description: "Разбор алгоритмов IForest и PCA",
          section: "Talks",handler: () => {
              window.location.href = "/talks/anomaly_iforest_pca/";
            },},{id: "talks-поиск-аномалий-knn-и-lof",
          title: 'Поиск аномалий, kNN и LOF',
          description: "Разбор алгоритмов kNN и LOF",
          section: "Talks",handler: () => {
              window.location.href = "/talks/anomaly_knn_lof/";
            },},{id: "talks-поиск-аномалий-c-python",
          title: 'Поиск аномалий c Python',
          description: "Доклад на Positive Hack Days 2025",
          section: "Talks",handler: () => {
              window.location.href = "/talks/anomaly_phdays/";
            },},{id: "talks-cv-модуль-dcap-системы",
          title: 'CV-модуль DCAP-системы',
          description: "Разработка микросервиса с computer vision нейросетями для анализа неструктурированных данных",
          section: "Talks",handler: () => {
              window.location.href = "/talks/work_cv/";
            },},{id: "talks-nlp-модуль-dcap-системы",
          title: 'NLP-модуль DCAP-системы',
          description: "Разработка микросервиса с NLP-нейросетями для анализа неструктурированных данных",
          section: "Talks",handler: () => {
              window.location.href = "/talks/work_nlp/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/michael_vasiljev.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6E%75.%78%69%6E%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/onixlas", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u//", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michael-vasiliev-ds", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/LaHundo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
