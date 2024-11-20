---
layout: page
title: CheckDocAI
description: Телеграм-бот с ИИ модулем для контроля качества оформления документов
img: assets/img/document-checking-bot.png
importance: 1
category: "пет проекты"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/check_doc_ai_logo.png" title="Project logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Создать сервис, обеспечивающий проверку корректности и полноты оформления Актов проверки работоспособности системы автоматической пожарной сигнализации. Сервис должен принимать PDF-файл с отсканированными актами и возвращать информацию о найденных дефектах. Критерий проверки: на каждом акте должны быть две печати и две подписи.

## Команда проекта

<div class="row">
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mvasiljev.jpg" title="Михаил Васильев" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Михаил Васильев</b></li>
              <li>старший специалист по машинному обучению</li>
              <li><a href="https://makves.ru/">Маквес</a></li>
              <li><a href="https://t.me/LaHundo">@LaHundo</a></li>
              <li>тим-лид и технический эксперт</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jusuhinina.jpg" title="Юлия Сухинина" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
            <li><b>Юлия Сухинина</b></li>
              <li>руководитель по развитию</li>
              <li><a href="https://gulfstream.ru/">Гольфстрим</a></li>
              <li><a href="https://t.me/Sukhinina_Julia">@Sukhinina_Julia</a></li>
              <li>разметка данных, аугментации, обучение модели</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/oivanova.jpg" title="Ольга Иванова" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
            <li><b>Ольга Иванова</b></li>
              <li>инженер</li>
              <li><a href="https://msu.ru/">МГУ им. М.В. Ломоносова</a></li>
              <li><a href="https://t.me/oakarabut">@oakarabut</a></li>
              <li>разметка данных, аугментации</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsemionov.jpg" title="Валерий Семёнов" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Валерий Семёнов</b></li>
              <li>бекенд разработчик</li>
              <li><a href="https://www.i-sol.ru/ru">Интеллектуальные решения</a></li>
              <li><a href="https://t.me/vivat7on">@vivat7on</a></li>
              <li>бекенд, DevOps</li>
            </ul>
        </div>
    </div>
</div>

## Технологии

yolo, albumentations, aiogram, cvat

## Решение

[(репозиторий)](https://github.com/vivat-7on/TGaktBot)

Собрали собственный датасет с отсканированными Актами проверки. Произвели разметку датасета с использованием сервиса [CVAT](https://www.cvat.ai). Для каждого акта мы размечали проставленные печати, подписи, даты, а также номер акта. Произвели аугментацию датасета с использованием библиотеки [albumentations](https://albumentations.ai/). Обучили нейросеть [YOLO v8](https://www.ultralytics.com/).

Для взаимодействия с пользователем реализовали телеграм-бота, принимающего на вход PDF-файл с отсканированными актами и возвращающего результаты проверки.

Решение развёрнуто и успешно используется АО «Гольфстрим охранные системы».

## Доклад

По результатом проекта я выступил с докладом на митапе [Moscow Python Meetup № 95](https://moscowpython.ru/meetup/95/). Рассказали об идее проекта и сложностях, с которыми столкнулись в процессе разработки.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gafaM5zT9L8?si=l0KkFGuhtFV134su" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Презентация

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/30879722fcfc4ab3955e46d0a6a24218" title="Moscow Python Meetup №95. Юлия Сухинина  (АО «ГОЛЬФСТРИМ охранные системы» (МТС), Руководитель по развитию). Разработка ТГ Бота с ИИ модулем для автоматизации процесса контроля качества оформления документов" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>
