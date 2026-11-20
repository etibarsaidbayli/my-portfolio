// All page copy in Azerbaijani and Russian.
export const WA_NUMBER = '994506661009';
export const PHONE_LABEL = '+994 50 666 10 09';

export const content = {
  az: {
    nav: [['#xidmetler', 'Xidmətlər'], ['#isler', 'İşlər'], ['#haqqimda', 'Haqqımda'], ['#suallar', 'Suallar']],
    write: 'WhatsApp-da yazın',
    hero: {
      title: 'Müraciətlər, anbar və hesabatlar özü işləsin',
      lead: 'Biznesinizdə əl ilə görülən işləri avtomatlaşdırıram: sayt, 1C, mobil tətbiq və AI bir sistemdə. Siz biznesə baxırsınız, qalanını sistem görür.',
      how: 'Nə edə bilərəm',
      me: 'Layihəni özüm aparıram, vasitəçisiz',
    },
    board: {
      manual: 'Əl ilə', auto: 'Avtomatik', label: 'Biznesiniz',
      chaos: [
        { kind: 'chat', text: 'Salam, qiymət neçəyədir?', meta: '3 saatdır cavabsız' },
        { kind: 'missed', text: '4 buraxılmış zəng', meta: 'dünən axşam' },
        { kind: 'sheet', text: 'Qalıq: ???', meta: 'anbar_son_v3.xlsx' },
        { kind: 'note', text: 'Cümə gününə hesabatı yığ!', meta: '' },
      ],
      order: [
        { text: 'Yeni müraciət CRM-ə düşdü', meta: 'Instagram, 14:02' },
        { text: 'AI-operator müştəriyə zəng etdi', meta: '47 saniyə sonra' },
        { text: 'Anbar 1C ilə sinxrondur', meta: 'qalıq: 128 ədəd' },
        { text: 'Hesabat hazırdır', meta: 'hər səhər 09:00' },
      ],
    },
    services: {
      title: 'Nə edə bilərəm',
      lead: 'Texnologiyanı yox, nəticəni seçin. Hər biri ayrıca və ya bir sistem kimi işləyir.',
      groups: [
        { t: 'Müştəri itməsin', items: [
          ['Sayt və lendinq', 'Qiymət kalkulyatoru və sifariş forması olan sayt. Müraciət dərhal WhatsApp-a və ya CRM-ə düşür.', 'React, Next.js'],
          ['AI-operator', 'Saytdan və reklamdan gələn müraciətə 60 saniyə ərzində zəng edir, azərbaycan və rus dillərində danışır.', 'FastCall, LLM'],
          ['WhatsApp və Instagram', 'Müraciətlər, avtomatik cavablar və bildirişlər bir yerdə toplanır.', 'WhatsApp API, Meta API'],
        ] },
        { t: 'Daxildə qayda olsun', items: [
          ['1C avtomatlaşdırma', 'Tətbiq və təkmilləşdirmə: anbar, satış, mühasibat, hesabatlar. Sayt və kassa ilə avtomatik mübadilə.', '1C:Enterprise'],
          ['CRM və daxili sistemlər', 'Müştəri bazası, tapşırıqlar, işçilər üçün panel və özü yığılan hesabatlar.', 'Node.js, NestJS, PostgreSQL'],
        ] },
        { t: 'Müştərinin telefonunda olun', items: [
          ['Veb-tətbiq', 'Brauzerdə işləyən şəxsi kabinet, onlayn yazılış, sifariş və ödəniş.', 'React, Next.js'],
          ['PWA', 'Saytınız telefona tətbiq kimi quraşdırılır: ana ekranda ikon, oflayn iş, push-bildirişlər. App Store-suz.', 'PWA'],
          ['Mobil tətbiq', 'iOS və Android üçün tam tətbiq — müştərilər və ya işçilər üçün.', 'React Native, Flutter'],
        ] },
      ],
    },
    cases: {
      title: 'İşlər',
      fastcall: {
        tag: 'Öz məhsulum', t: 'FastCall',
        d: 'Reklamdan gələn müraciət menecerin gözləmədən itməsin deyə AI-operator müştəriyə özü zəng edir.',
        flow: ['Reklamdan müraciət gəlir', '60 saniyə ərzində AI zəng edir', 'Azərbaycan və ya rus dilində danışır'],
        link: 'fastcall.az saytına keçin',
      },
      demo: {
        tag: 'Kiçik biznes üçün sayt', t: 'Təmizlik şirkətinin saytı',
        d: 'Qiymət kalkulyatoru, iki dil və sifariş birbaşa WhatsApp-a. Belə saytı bir neçə günə işə salıram.',
        link: 'Demonu açın',
      },
      pos: { tag: 'Öz məhsulum, hazırlanır', t: 'Restoranlar üçün POS', d: 'Sifarişlər, mətbəx, anbar və hesabatlar bir sistemdə — restoran və kafelər üçün.' },
      team: {
        t: 'Komandada iştirak etdiyim layihələr',
        items: [
          ['Umico', 'Marketplace, loyallıq proqramı və maliyyə xidmətləri olan platformanın veb-versiyası', 'https://umico.az'],
          ['Push30', 'Korporativ fitnes platforması: 250+ idman zalı, onlayn yazılış, SİMA ilə giriş', 'https://push30.az'],
        ],
      },
    },
    process: {
      title: 'Necə işləyirik',
      steps: [
        ['Pulsuz audit', 'Biznesinizi öyrənirəm və vaxtın, pulun harada itdiyini göstərirəm.'],
        ['Plan və qiymət', 'Nə ediləcəyini, müddəti və qiyməti əvvəlcədən yazılı razılaşdırırıq.'],
        ['Hazırlama', 'Hissə-hissə hazırlayıram, hər mərhələdə nəticəni göstərirəm.'],
        ['İşə salma', 'Sistemi işə salıram, komandanızı öyrədirəm və dəstəkdə qalıram.'],
      ],
    },
    about: {
      title: 'Salam, mən Etibaram',
      p: [
        '5 ildən çoxdur veb-development ilə məşğulam, son illərdə isə 1C və AI ilə biznes proseslərini avtomatlaşdırıram.',
        'Bir neçə podratçı əvəzinə bir adamla işləyirsiniz: 1C, sayt, tətbiq və AI bir-biri ilə uyğun qurulur. Sizinlə texniki terminlərlə yox, sadə dildə və rəqəmlərlə danışıram.',
      ],
      facts: ['5+ il veb-development', 'İri holdinq və məhsul komandalarında təcrübə', 'Azərbaycan və rus dillərində'],
      stack: 'İşlədiyim texnologiyalar',
      caption: 'Full-stack developer, 1C və AI',
    },
    faq: {
      title: 'Suallar',
      items: [
        ['Qiymət nə qədərdir?', 'Tapşırıqdan asılıdır. Pulsuz auditdən sonra dəqiq qiyməti yazılı şəkildə deyirəm və o, iş zamanı dəyişmir.'],
        ['Nə qədər vaxt aparır?', 'Lendinq — bir neçə gün. Veb-tətbiq, mobil tətbiq və ya 1C avtomatlaşdırması — layihədən asılı olaraq bir neçə həftə.'],
        ['Bizdə artıq 1C var. Onunla işləyirsiniz?', 'Bəli. Mövcud 1C-ni təkmilləşdirirəm və onu sayt, kassa, mobil tətbiq və CRM ilə bağlayıram.'],
        ['PWA nədir və mənə nə üçün lazımdır?', 'PWA — saytınızın telefona tətbiq kimi quraşdırılan versiyasıdır: ana ekranda ikon, oflayn iş və push-bildirişlər. Ayrıca iOS və Android tətbiqindən ucuz və tez hazırlanır, mağazalarda yoxlama gözləmək lazım deyil.'],
        ['İşə salandan sonra dəstək olacaq?', 'Bəli. Sistemin işləməsinə, düzəlişlərə və inkişafına dəstək verirəm.'],
        ['Kiçik biznesəm, mənə uyğundur?', 'Bəli. Kiçik bizneslə çox vaxt sadə sayt və müraciətlərin avtomatlaşdırılmasından başlayırıq — tez nəticə verir.'],
      ],
    },
    final: {
      title: 'Biznesinizdə nəyi avtomatlaşdırmaq olar?',
      lead: 'Bir neçə sözlə yazın. 30 dəqiqəlik pulsuz konsultasiyada nədən başlamağı və nəyə qənaət edəcəyinizi deyəcəm.',
      name: 'Adınız', business: 'Biznesiniz', businessPh: 'Məsələn, 3 filiallı kafe', task: 'Nəyi avtomatlaşdırmaq istəyirsiniz?', taskPh: 'Məsələn, anbar uçotu və saytdan sifariş',
      send: 'WhatsApp-da göndərin', or: 'Və ya birbaşa yazın:',
      msg: (d) => `Salam, Etibar! Konsultasiya istəyirəm.\nAd: ${d.name}\nBiznes: ${d.business}${d.task ? `\nTapşırıq: ${d.task}` : ''}`,
      need: 'Adınızı və biznesinizi yazın, sonra göndərin',
    },
    footer: 'Biznes avtomatlaşdırması, Bakı',
  },

  ru: {
    nav: [['#xidmetler', 'Услуги'], ['#isler', 'Работы'], ['#haqqimda', 'Обо мне'], ['#suallar', 'Вопросы']],
    write: 'Написать в WhatsApp',
    hero: {
      title: 'Пусть заявки, склад и отчёты работают сами',
      lead: 'Автоматизирую ручную работу в бизнесе: сайт, 1С, мобильное приложение и AI в одной системе. Вы занимаетесь бизнесом, остальное делает система.',
      how: 'Что я могу сделать',
      me: 'Веду проект лично, без посредников',
    },
    board: {
      manual: 'Вручную', auto: 'Автоматически', label: 'Ваш бизнес',
      chaos: [
        { kind: 'chat', text: 'Здравствуйте, сколько стоит?', meta: 'без ответа 3 часа' },
        { kind: 'missed', text: '4 пропущенных звонка', meta: 'вчера вечером' },
        { kind: 'sheet', text: 'Остаток: ???', meta: 'склад_финал_v3.xlsx' },
        { kind: 'note', text: 'К пятнице собрать отчёт!', meta: '' },
      ],
      order: [
        { text: 'Новая заявка попала в CRM', meta: 'Instagram, 14:02' },
        { text: 'AI-оператор перезвонил клиенту', meta: 'через 47 секунд' },
        { text: 'Склад синхронизирован с 1С', meta: 'остаток: 128 шт' },
        { text: 'Отчёт готов', meta: 'каждое утро в 09:00' },
      ],
    },
    services: {
      title: 'Что я могу сделать',
      lead: 'Выбирайте не технологию, а результат. Каждое решение работает отдельно или как часть одной системы.',
      groups: [
        { t: 'Чтобы клиент не терялся', items: [
          ['Сайт и лендинг', 'Сайт с калькулятором цены и формой заказа. Заявка сразу приходит в WhatsApp или CRM.', 'React, Next.js'],
          ['AI-оператор', 'Перезванивает по заявке с сайта и из рекламы в течение 60 секунд, говорит на азербайджанском и русском.', 'FastCall, LLM'],
          ['WhatsApp и Instagram', 'Заявки, автоответы и уведомления собираются в одном месте.', 'WhatsApp API, Meta API'],
        ] },
        { t: 'Чтобы внутри был порядок', items: [
          ['Автоматизация на 1С', 'Внедрение и доработка: склад, продажи, бухгалтерия, отчёты. Автоматический обмен с сайтом и кассой.', '1С:Предприятие'],
          ['CRM и внутренние системы', 'Клиентская база, задачи, панель для сотрудников и отчёты, которые собираются сами.', 'Node.js, NestJS, PostgreSQL'],
        ] },
        { t: 'Чтобы вы были у клиента в телефоне', items: [
          ['Веб-приложение', 'Личный кабинет в браузере, онлайн-запись, заказы и оплата.', 'React, Next.js'],
          ['PWA', 'Ваш сайт ставится на телефон как приложение: иконка на экране, работа офлайн, push-уведомления. Без App Store.', 'PWA'],
          ['Мобильное приложение', 'Полноценное приложение для iOS и Android — для клиентов или сотрудников.', 'React Native, Flutter'],
        ] },
      ],
    },
    cases: {
      title: 'Работы',
      fastcall: {
        tag: 'Мой продукт', t: 'FastCall',
        d: 'Чтобы заявка из рекламы не остывала, пока менеджер занят, AI-оператор сам звонит клиенту.',
        flow: ['Приходит заявка из рекламы', 'AI звонит в течение 60 секунд', 'Говорит на азербайджанском или русском'],
        link: 'Перейти на fastcall.az',
      },
      demo: {
        tag: 'Сайт для малого бизнеса', t: 'Сайт клининговой компании',
        d: 'Калькулятор цены, два языка и заказ прямо в WhatsApp. Такой сайт запускаю за несколько дней.',
        link: 'Открыть демо',
      },
      pos: { tag: 'Мой продукт, в разработке', t: 'POS для ресторанов', d: 'Заказы, кухня, склад и отчёты в одной системе — для ресторанов и кафе.' },
      team: {
        t: 'Проекты, в которых я работал в команде',
        items: [
          ['Umico', 'Веб-версия платформы с маркетплейсом, программой лояльности и финансовыми сервисами', 'https://umico.az'],
          ['Push30', 'Корпоративная фитнес-платформа: 250+ залов, онлайн-запись, вход через SIMA', 'https://push30.az'],
        ],
      },
    },
    process: {
      title: 'Как мы работаем',
      steps: [
        ['Бесплатный аудит', 'Разбираюсь в вашем бизнесе и показываю, где теряются время и деньги.'],
        ['План и цена', 'Заранее письменно фиксируем, что делаем, сроки и стоимость.'],
        ['Разработка', 'Делаю по частям и на каждом этапе показываю результат.'],
        ['Запуск', 'Запускаю систему, обучаю команду и остаюсь на поддержке.'],
      ],
    },
    about: {
      title: 'Привет, я Этибар',
      p: [
        'Больше 5 лет занимаюсь веб-разработкой, а последние годы автоматизирую бизнес-процессы с помощью 1С и AI.',
        'Вместо нескольких подрядчиков вы работаете с одним человеком: 1С, сайт, приложение и AI сразу строятся так, чтобы работать вместе. Говорю с вами не терминами, а простым языком и цифрами.',
      ],
      facts: ['5+ лет в веб-разработке', 'Опыт в крупном холдинге и продуктовых командах', 'Азербайджанский и русский'],
      stack: 'Технологии, с которыми работаю',
      caption: 'Full-stack разработчик, 1С и AI',
    },
    faq: {
      title: 'Вопросы',
      items: [
        ['Сколько стоит?', 'Зависит от задачи. После бесплатного аудита называю точную цену письменно, и в процессе она не меняется.'],
        ['Сколько по времени?', 'Лендинг — несколько дней. Веб-приложение, мобильное приложение или автоматизация на 1С — несколько недель, в зависимости от проекта.'],
        ['У нас уже есть 1С. Работаете с ней?', 'Да. Дорабатываю существующую 1С и связываю её с сайтом, кассой, мобильным приложением и CRM.'],
        ['Что такое PWA и зачем оно мне?', 'PWA — это версия вашего сайта, которая ставится на телефон как приложение: иконка на экране, работа офлайн и push-уведомления. Дешевле и быстрее отдельных приложений для iOS и Android, и не нужно ждать проверки в сторах.'],
        ['Будет поддержка после запуска?', 'Да. Сопровождаю систему, вношу правки и развиваю её дальше.'],
        ['У меня малый бизнес — мне подойдёт?', 'Да. С малым бизнесом часто начинаем с простого сайта и автоматизации заявок — это быстро даёт результат.'],
      ],
    },
    final: {
      title: 'Что можно автоматизировать в вашем бизнесе?',
      lead: 'Опишите в двух словах. На бесплатной 30-минутной консультации скажу, с чего начать и что это сэкономит.',
      name: 'Ваше имя', business: 'Ваш бизнес', businessPh: 'Например, кафе с 3 филиалами', task: 'Что хотите автоматизировать?', taskPh: 'Например, учёт склада и заказы с сайта',
      send: 'Отправить в WhatsApp', or: 'Или напишите напрямую:',
      msg: (d) => `Здравствуйте, Этибар! Хочу консультацию.\nИмя: ${d.name}\nБизнес: ${d.business}${d.task ? `\nЗадача: ${d.task}` : ''}`,
      need: 'Укажите имя и бизнес, затем отправьте',
    },
    footer: 'Автоматизация бизнеса, Баку',
  },
};

export const stack = ['1C:Enterprise', 'React', 'Next.js', 'Nuxt.js', 'Node.js', 'NestJS', 'React Native', 'Flutter', 'PWA', 'TypeScript', 'PostgreSQL', 'AI / LLM', 'WhatsApp API'];
