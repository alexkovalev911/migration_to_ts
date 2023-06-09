# News API

**[News API](https://newsapi.org/)** - это простой HTTP REST API для поиска и извлечения новостей со всего Интернета.

## Ключевые навыки:

- JavaScript Classes
- Modules in JavaScript
- Webpack
- TypeScript

## Источник

[Исходное приложение](https://github.com/Pulya10c/news-JS)

## Требования к заданию

- Скопировать себе приложение и создать свою копию приложения
- Добавить [TypeScript](https://www.typescriptlang.org/) в проект
- Настроить ESLint для работы с TypeScript
- Настроить Webpack для работы с Typescript
- Смигрировать приложение с JavaScript на TypeScript, обязательно использовать:
  - Enum
  - interface
  - type
  - Generics
  - Union
  - Private, public
  - Partial, pick, readonly
  - Тип `any` использовать **ЗАПРЕЩАЕТСЯ!**
- Сделать верстку адаптивной с дизайном на свое усмотрение

## Требования к вёрстке и оформлению приложения

- внешний вид приложения соответствует предложенному образцу или является его улучшенной версией
- вёрстка адаптивная. Минимальная ширина страницы, при которой проверяется корректность отображения приложения - 320рх, максимальная ширина страницы, при которой проверяется корректность отображения приложения - 1920рх
- в футере приложения есть ссылка на гитхаб автора, год создания приложения

## Технические требования

- работа приложения проверяется в браузере Google Chrome последней версии

## Последовательность выполнения задания:

### Этап 1. Bootstrap приложения

Результатом выполнения этого этапа является:

- `TypeScript` добавлен в проект
  - добавлен npm пакет `TypeScript`
  - создан `tsconfig.json` файл
- `ESLint` и `Webpack` настроены для работы с `TypeScript`
- В `ESLint` используется плагин [typescript-eslint/recommended](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- Ваша копия приложения запускается

### Этап 2. Подготовка к миграция кода на TypeScript

Результатом выполнения этого этапа является:

- Файлы с расширением `*.js` переименованы в файлы с расширением `*.ts`
- Созданы необходимые интерфейсы для обмена данными c [News API](https://newsapi.org/)

### Этап 3. Миграция кода на TypeScript

Результатом выполнения этого этапа является:

- Код строго типизирован. А именно:
  - объявленны типы для всех переменных
  - типизированны параметры функций и методов, а так же для возвращаемые значения (и если значения не возвращаются)
  - типизированны используемые классы
  - созданные ранее интерфейсы используются в коде
  - созданы и используются enums, generics, partial и т.д.
- В конфигурационном файле TypeScript стоят флаги:
  - `"noImplicitAny": true`
  - `"strict": true`
- ESLint включено правило `no-explicit-any`

### Этап 4. Адаптивная верстка

Результатом выполнения этого этапа является:

- При масштабировании верстка не плывет, элементы не выпадают, часть контента не скрывается

## Проверка задания ментором

**Максимальный балл за задание +170**

1. Репозиторий +20
   - pull request выполнен в соответствии с требованиями +10
   - ведётся история коммитов, названия коммитов даются согласно гайдлайну +10
2. Качество кода +100
   - приложение полностью смигрированно на TypeScript +50:
     - используется Everyday Types and Enums + 10
     - используются Generics +10
     - использование Object Types +10
     - использование Classes and private, public +10
     - использование Function +10
   - ESLinter настроен на TypeScript, включено правило `no-explicit-any` и отсутствуют ошибки +10
   - нигде не используется тип Any +10
   - В конфигурационном файле TypeScript стоят флаги `"noImplicitAny": true` и `"strict": true` + 20
   - webpack настроен и работает с TypeScript +10
3. Оформление и функционал приложения +50
   - выполнена адаптивная верстка +10
   - добавлен свой собственный дизайн или улучшения (в ПР должно быть описано что именно) +20
   - у ментора нет замечаний к оформлению +20

## Штрафы

1. Используется тип Any -20
2. Код не полностью покрыт типами -20
3. В конфигурационном файле TypeScript не стоят обязательные флаги `"noImplicitAny": true` и `"strict": true` -20
4. В конфигурационном файле ESLint не включено правило `no-explicit-any` -10
5. Ошибки ESLinter -10

## Требования к репозиторию

- задание выполняется в публичном репо 
- в репозитории школы от ветки `main` создайте ветку с названием задания, в ней создайте папку с названием задания, в папке разместите файлы проекта
- для деплоя используйте gh-pages 
- при невозможности использовать gh-pages, используйте для деплоя https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- история коммитов должна отображать процесс разработки приложения. 
- после окончания разработки необходимо сделать Pull Request из ветки приложения в ветку `main`  **Мержить Pull Request из ветки разработки в ветку `main` не нужно**

## Материалы которые могут помочь:

- [tsconfig](https://habr.com/ru/post/557738/)
- [no-explicit-any](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md)
- [responsive and adaptive](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)





# MIGRATION NEWS-API TO TS TASK WALKTHROUGH

Примерное описание процесса выполнения таски (**следовать на свой страх и риск**). Будет полезно тем, у кого возникают вопросы, что именно нужно делать в таске. Остальным будет мало полезно.

## ПОДГОТОВКА
+ Открываем в **VSCode** папку с приватным репозиторием **RSSchool**
+ Создаем новую ветку с именем таски (**migration-newip-to-ts**)
+ Переходим в созданную ветку
+ Создаем новую папку с именем таски
+ Копируем в нее файлы таски (загружаем **zip-файл** с гитхаба и распаковываем)
+ *(Делаем init коммит)*

## НАСТРОЙКА СБОРКИ И ДОБАВЛЕНИЕ API KEY
+ Выполняем `npm i` для установки исходных пакетов проекта
+ Добавляем **apiKey** (получить можно на сайте **https://newsapi.org**)
	+ В файл **src/components/controller/appLoader.js**
+ *(Делаем коммит)*
+ Добавляем пакет **TS**
	+ `npm i -D typescript`
+ Добавляем пакеты для работы **ESlint** и **Webpack** c **.ts файлами**
	+ `npm i -D @typescript-eslint/parser` (парсер **TS** для **ESlint** - чтобы **ESlint** умел правильно парсить **.ts** файлы)
	+ `npm i -D @typescript-eslint/eslint-plugin` (плагин **TS** для **ESlint** - правила, по которым **ESlint** будет проверять **.ts** файлы)
	+ `npm i -D ts-loader` (лоадер **TS** для **webpack-а** - чтобы **webpack** мог работать с **.ts** файлами)
	+ `npm i -D eslint-webpack-plugin` (плагин **ESlint** - для работы **ESlint** вместе с **Webpack**)
+ Настраиваем конфиги
	+ **TS**
		+ Создаем файл **tsconfig.json** (команда `npx tsc --init`)
		+ Внутри файла **tsconfig.json**
			+ Выключить `"module": "commonjs"` (т.к. сборкой будет заниматься **Webpack**)
			+ Включить `"strict": true` (требование таски)
			+ Включить `"noImplicitAny": true` (требование таски)
	+ **ESlint**
		+ В корень добавляем
			+ `"parser": "@typescript-eslint/parser"` (чтобы **ESlint** понимал какой парсер использовать)
		+ В массив **"plugins"** добавляем
			+ `"@typescript-eslint"` (чтобы **ESlint** видел плагин **TS**)
		+ В массив **"extends"** добавляем
			+ `"eslint:recommended"` (родные правила **ESlint** - на всякий случай)
			+ `"plugin:@typescript-eslint/recommended"` (правила **Typescript**)
		+ В массив **"rules"** добавляем
			+ `"@typescript-eslint/no-explicit-any": 2` (правило, запрещающее использование типа **any**)
	+ **Webpack**
		+ Меняем **"entry"** удаляя из него расширение файла **.js** (чтобы при замене **.js** на **.ts** он его тоже подхватил)
		+ Добавляем в массив **"module.rules"** правило для **.ts-файлов** (чтобы **Wepback** обрабатывал **.ts-файлы**)
			+ `{ test: /\.ts$/i, use: 'ts-loader' },`
		+ Импортируем плагин **ESlint** (чтобы он работал во время работы **Webpack**)
			+ `const EslingPlugin = require('eslint-webpack-plugin');`
		+ Добавляем экземпляр плагина **ESlint** в массив **"plugins"** (в его настройках указываем тип файлов **.ts**)
			+ `new EslingPlugin({ extensions: 'ts' })`
		+ Добавляем в массив **"resolve.extensions"** расширение **.ts-файлов** (это определяет порядок поиска файлов в импортах)
			+ `extensions: ['.ts', '.js']`
+ *(Делаем коммит)*
+ Запускаем дев-сервер командой `npm start`

## ОПИСЫВАЕМ ИНТЕРФЕЙСЫ
+ Пишем интерфейсы для **News API:**
	+ Создаем файл **src/types/index.ts**
	+ Внутри файла объявляем и импортируем интерфейсы **News API** (`export interface <имя интерфейса> { ... }`)
		+ Какие именно поля должны иметь интерфейсы и их типы можно посмотреть в документации **News API** (**https://newsapi.org/docs/endpoints/sources**)
+ *(Делаем коммит)*

## МИГРАЦИЯ ПРОЕКТА
+ По очереди меняем расширения файлов с **.js** на **.ts** в следующем порядке и добиваемся отсутствия ошибок в консоли (для каждого готового **.ts** файла делаем коммит):
	+ src/components/view/news/news.js
	+ src/components/view/sources/sources.js	
	+ src/components/view/appView.js
	+ src/components/controller/loader.js
	+ src/components/controller/appLoader.js
	+ src/components/controller/controller.js
	+ src/components/app/app.js
	+ src/index.js
	
## ДОПОЛНИТЕЛЬНЫЕ ЗАДАЧИ
+ Добавляем в футер лого со ссылкой на курс и ссылку на гитхаб автора
+ *(Делаем коммит)*
+ Добавляем **"фичу"** (например, фильтрацию по алфавиту или еще что-то)
+ *(Делаем коммит)*
+ Убираем из **html темплейта** явное подключение скрипта (если до этого не сделали)
+ *(Делаем коммит)*
+ Реализуем адаптив и наводим красоту (правим **HTML** и **CSS**)
+ *(Делаем коммит)*
+ Фиксим отсутствующий **img/news_placeholder.jpg** (файл **src/components/view/news/news.ts**)
+ *(Делаем коммит)*
+ Меняем **URL** в **fetch** на тот, который заработает в **gh-pages** (**https://nodenews.herokuapp.com/**)
+ *(Последний\* коммит)*
+ Билдим проект командой `npm run build`
+ Копируем билд в ветку **gh-pages**
+ *(Делаем коммит в gh-pages и пушим в удаленный репозиторий)*
- Оформляем **пул-реквест**

**Mission Complete!**
