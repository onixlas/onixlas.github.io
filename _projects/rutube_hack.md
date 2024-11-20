---
layout: page
title: Цифровой прорыв 2024 (всероссийский)
description: В рамках хакатона был разработан интеллектуальный помощник оператора службы поддержки RuTube
img: assets/img/tech-support-bot.png
importance: 1
category: "хакатоны"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/tech-support-bot.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Разработать RAG-систему для автоматизации работы технической поддержки RuTube

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
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/amevdokimov.jpg" title="Александр Евдокимов" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
            <li><b>Александр Евдокимов</b></li>
              <li>ведущий разработчик-лингвист</li>
              <li><a href="https://evotor.ru/">Эвотор</a></li>
              <li><a href="https://t.me/snakerzr">@snakerzr</a></li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/oivanova.jpg" title="Ольга Иванова" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
            <li><b>Ольга Иванова</b></li>
              <li>data scientist</li>
              <li>open to work</li>
              <li><a href="https://t.me/oakarabut">@oakarabut</a></li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ayudina.jpg" title="Анастасия Юдина" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Анастасия Юдина</b></li>
              <li>data scientist (NLP)</li>
              <li>Сбер</li>
              <li><a href="https://t.me/hug_asya02">@hug_asya02</a></li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/abondarenko.jpg" title="Алексей Бондаренко" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Алексей Бондаренко</b></li>
              <li>data scientist</li>
              <li>Яндекс</li>
              <li><a href="https://t.me/yabondaleksey">@yabondaleksey</a></li>
            </ul>
        </div>
    </div>
</div>

## Технологии

gpt, mistral nemo, fastapi, aiogram

## Решение

Расширили датасет синтетическими данными, созданными `GPT-4o`. Обучили на полученных данных две модели-классификатора. Также произвели файн-тюнинг модели-эмбеддера. Развернули RAG-систему на базе модели `Mistral-Nemo`. Развернули REST API и телеграм-бота для получения результатов генерации. 

## Моя роль

* обучение моделей-классификаторов
* файн-тюнинг модели-эмбеддера
* создание REST API
* презентация результатов

## Презентация

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/fd69db63882b4585b60142de98431faa" title="Интеллектуальный помощник оператора службы поддержки" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>
