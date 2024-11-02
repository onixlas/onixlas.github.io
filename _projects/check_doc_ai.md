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
        {% include figure.liquid loading="eager" path="assets/img/mvasiljev.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
    Михаил Васильев
</div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/jusuhinina.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
    Юлия Сухинина
</div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/oivanova.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
    Ольга Иванова
</div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vsemionov.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
    Валерий Семёнов
</div>
</div>

## Технологии

yolo, albumentations, aiogram, cvat

## Решение

Собрали собственный датасет с отсканированными Актами проверки. Произвели разметку датасета с использованием сервиса CVAT. Для каждого акта мы размечали проставленные печати, подписи, даты, а также номер акта. Произвели аугментацию датасета с использованием библиотеки albumentations. Обучили нейросеть YOLO v8.

Для взаимодействия с пользователем реализовали телеграм-бота, принимающего на вход PDF-файл с отсканированными актами и возвращающего результаты проверки.

Решение развёрнуто и успешно используется АО «Гольфстрим охранные системы».

[(репозиторий)](https://github.com/vivat-7on/TGaktBot) [(презентация)](./check_doc_ai.pdf)
