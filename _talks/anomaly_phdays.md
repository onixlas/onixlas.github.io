---
layout: page
title: Поиск аномалий c Python
description: Доклад на Positive Hack Days 2025
img: assets/img/phd_anomaly.png
importance: 1
category: "аномалии"
related_publications: false
---

## Описание

Обзорный доклад «Поиск аномалий с использованием Python: от теории к практике», представленный на конференции Positive Hack Days 24 мая 2025 года, посвящён прикладному использованию алгоритмов обнаружения аномалий в данных. В ходе выступления были рассмотрены ключевые особенности задачи поиска аномалий — такие как редкость, разнообразие и нестабильность аномальных наблюдений, а также их влияние на эффективность классических методов анализа.

Доклад включает обзор нескольких классов алгоритмов обнаружения аномалий, включая статистические, ансамблевые и нейросетевые методы. Для каждого из них были приведены ключевые сильные и слабые стороны, а также даны рекомендации по выбору подхода в зависимости от контекста задачи.

Особое внимание было уделено практической ценности применения таких алгоритмов. На примере из сферы корпоративной информационной безопасности показано, как автоматическое выявление аномалий может повысить эффективность мониторинга и существенно сократить время реагирования на инциденты.

Доклад ориентирован на специалистов в области анализа данных, инженерии безопасности и разработчиков, работающих с большими объёмами информации и заинтересованных в построении устойчивых систем обнаружения нетипичного поведения.

## Репозиторий проекта

Код для генерации всех графиков для доклада размещён в [репозитории](https://github.com/onixlas/phd-2025-anomaly-detection) на github.

## Доклад на русском языке

<iframe width="560" height="315" src="https://www.youtube.com/embed/yt55PeVFNyk?si=-A6SisevVe6cncbV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Доклад на английском языке

<iframe width="560" height="315" src="https://www.youtube.com/embed/Zg36gHVdr0E?si=5BupynJi3avwTvoK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Презентация

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/efc91da6ec45435dbbc570b3d62faafc" title="Anomaly Detection with Python" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>

[скачать презентацию в pdf](https://github.com/onixlas/conference-presentations/blob/main/positive_hack_days_2025/michael_vasiljev_phd_anomaly.pdf)

## Литература

{% bibliography --query @article[keywords ~= outlier-detection] %}
