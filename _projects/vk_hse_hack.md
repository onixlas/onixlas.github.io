---
layout: page
title: VK HSE Data Hack (1 место)
description: Хакатон по классификации новостных статей на 21 класс. В нашем решении комбинируются результаты работы небольшого классификатора на базе трансформерной архитектуры и предсказания LLM
img: assets/img/llm-news-classification.png
importance: 1
category: "хакатоны"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm-news-classification.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Разработать сервис для автоматической классификации новостей на 21 класс.

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
        {% include figure.liquid loading="eager" path="assets/img/nmetelev.jpg" title="Никита Метелёв" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Никита Метелёв</b></li>
              <li>data scientist</li>
              <li>open to work</li>
              <li><a href="https://t.me/SciManNik">@SciManNik</a></li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/vskorina.jpg" title="Валентина Скорина" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            <ul>
                <li><b>Валентина Скорина</b></li>
              <li>data scientist</li>
              <li>open to work</li>
              <li><a href="https://t.me/valentina_lineyka">@valentina_lineyka</a></li>
            </ul>
        </div>
    </div>
</div>

## Технологии

`transformers`, `Saiga3 8b`, `taiga dataset`, `streamlit`

## Решение

Обогатили датасет, добавив 56 000 новостных статей агентства «Интерфакс». Подготовили псевдо-разметку с использованием zero-shot классификации, обучили небольшую модель `rubert-tiny2` в режиме multilabel классификации. Также использовали LLM `Saiga3 8b` для оценки соответствия статей каждому из 21 тегов. На основе обоих подходов развернули сервис с REST API для классификации текстов.

## Моя роль

- обогатил датасет
- подобрал zero-shot classification модель
- обучил модель-классификатор
- обеспечил координацию работы команды
- презентовал результаты

## Презентация

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/032874b4af3c4e6387fb503e1f29781d" title="Классификация новостных текстов с присвоением тегов" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>
