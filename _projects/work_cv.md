---
layout: page
title: CV-модуль DCAP-системы
description: Разработка микросервиса с computer vision нейросетями для анализа неструктурированных данных
img: assets/img/computer_vision_analysis.png
importance: 1
category: "доклады"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/computer_vision_analysis.png" title="Computer vision" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

В рамках работы над нейросетевым модулем computer vision для DCAP (data-centric audit and protection) системы, я столкнулся с задачей анализа неструктурированных данных, значительную часть которых составляли изображения. Эти изображения включали как различные сканы и фотографии корпоративных документов, так и нерабочие изображения (например, фотографии с корпоративов). Для эффективного анализа и классификации этих данных, я обучил несколько нейросетей.

## Технологии

`YOLO`, `pytorch`, `lightning`, `numpy`, `matplotlib`, `plotly`, `onnx`, `fastapi`, `uvicorn`, `pyinstaller`, `pywin32`, `optimum`, `cvat`

## Решение

Первая нейросеть была направлена на классификацию изображений. Она успешно отбирала изображения класса «документ» из общего потока данных, что позволило значительно сократить объем данных, требующих дальнейшего анализа. Этот этап был критически важен для повышения точности и скорости обработки данных, так как позволил сосредоточиться на наиболее релевантных изображениях.

Вторая нейросеть была разработана для более детального анализа изображений класса «документ». Она искала на этих изображениях различные графические элементы, такие как подписи, печати, таблицы и другие важные компоненты. Это позволило автоматизировать процесс извлечения ключевой информации из документов, что значительно упростило дальнейшую обработку и анализ данных.

Результаты работы этих нейросетей показали высокую точность и надежность, что подтверждает эффективность выбранных подходов и методов. Внедрение этих модулей в DCAP-систему позволило значительно повысить качество аудита и защиты, обеспечивая более точный и быстрый анализ неструктурированных данных.

## Доклад

По итогам работы я выступил с докладом на [Moscow Python Meetup 91](https://moscowpython.ru/meetup/91/). Подробно рассказал о задаче и её особенностях, рассмотрел плюсы и минусы полученного решения.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VMDWjJoT8yE?si=wiMyAM7ROvAwkn7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Презентация

<iframe class="speakerdeck-iframe" style="border: 0px; background: rgba(0, 0, 0, 0.1) padding-box; margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" frameborder="0" src="https://speakerdeck.com/player/e146ab7b0a8641afbaeb379f5e9f4725" title="Moscow Python Meetup №91. Михаил Васильев (Старший специалист по машинному обучению, Makves (входит в группу компаний &quot;Гарда&quot;)). Опыт обучения и применения нейросетей в качестве модуля российской DCAP системы" allowfullscreen="true" data-ratio="1.7777777777777777"></iframe>
