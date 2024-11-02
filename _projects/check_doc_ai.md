---
layout: page
title: CheckDocAI
description: Телеграм-бот с ИИ модулем для контроля качества оформления документов
img: https://github.com/user-attachments/assets/7afa470d-bedc-406a-88b2-d180f6933f8c
importance: 1
category: "пет проекты"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="https://github.com/user-attachments/assets/7afa470d-bedc-406a-88b2-d180f6933f8c" title="Project logo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Создать сервис, обеспечивающий проверку корректности и полноты оформления Актов проверки работоспособности системы автоматической пожарной сигнализации. Сервис должен принимать PDF-файл с отсканированными актами и возвращать информацию о найденных дефектах. Критерий проверки: на каждом акте должны быть две печати и две подписи.

## Команда проекта

<div class="row">
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mvasiljev.jpg" title="Михаил Васильев" class="img-fluid rounded z-depth-1" %}
        <div class="caption"><b>Михаил Васильев</b>
            <ul>
              <li>старший специалист по машинному обучению, <a href="https://makves.ru/">Маквес</a></li>
              <li>Telegram: <a href="https://t.me/LaHundo">@LaHundo</a></li>
              <li>тим-лид и технический эксперт</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jusuhinina.jpg" title="Юлия Сухинина" class="img-fluid rounded z-depth-1" %}
        <div class="caption"><b>Юлия Сухинина</b>
            <ul>
              <li>руководитель по развитию, <a href="https://gulfstream.ru/">АО «Гольфстрим охранные системы»</a></li>
              <li>Telegram: <a href="https://t.me/Sukhinina_Julia">@Sukhinina_Julia</a></li>
              <li>разметка данных, аугментации, обучение модели</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/oivanova.jpg" title="Ольга Иванова" class="img-fluid rounded z-depth-1" %}
        <div class="caption"><b>Ольга Иванова</b>
            <ul>
              <li>инженер, <a href="https://msu.ru/">МГУ им. М.В. Ломоносова</a></li>
              <li>Telegram: <a href="https://t.me/oakarabut">@oakarabut</a></li>
              <li>разметка данных, аугментации</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsemionov.jpg" title="Валерий Семёнов" class="img-fluid rounded z-depth-1" %}
        <div class="caption"><b>Валерий Семёнов</b>
            <ul>
              <li>бекенд разработчик</li>
              <li>Telegram: <a href="https://t.me/vivat7on">@vivat7on</a></li>
              <li>бекенд, DevOps</li>
            </ul>
        </div>
    </div>
</div>

## Технологии

yolo, albumentations, aiogram, cvat

## Решение

Собрали собственный датасет с отсканированными Актами проверки. Произвели разметку датасета с использованием сервиса CVAT. Для каждого акта мы размечали проставленные печати, подписи, даты, а также номер акта. Произвели аугментацию датасета с использованием библиотеки albumentations. Обучили нейросеть YOLO v8.

Для взаимодействия с пользователем реализовали телеграм-бота, принимающего на вход PDF-файл с отсканированными актами и возвращающего результаты проверки.

Решение развёрнуто и успешно используется АО «Гольфстрим охранные системы».

[(репозиторий)](https://github.com/vivat-7on/TGaktBot) [(презентация)](./check_doc_ai.pdf)
