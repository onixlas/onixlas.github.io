---
layout: page
title: Обучение модели классификации комментариев
description: Интернет-магазин запускает новый сервис. Теперь пользователи могут редактировать и дополнять описания товаров, как в вики-сообществах. То есть клиенты предлагают свои правки и комментируют изменения других. Требуется инструмент, который будет искать токсичные комментарии и отправлять их на модерацию.
img: assets/img/comments-classification.png
importance: 3
category: "учебные проекты Практикума"
related_publications: false
pretty_table: true
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/comments-classification.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Интернет-магазин «Викишоп» запускает новый сервис. Теперь пользователи могут редактировать и дополнять описания товаров, как в вики-сообществах. То есть клиенты предлагают свои правки и комментируют изменения других. Магазину нужен инструмент, который будет искать токсичные комментарии и отправлять их на модерацию.

## Ноутбук

[(ноутбук проекта)](https://github.com/onixlas/DS_portfolio/tree/main/ML_p13_texts/bert.ipynb)

## Выводы

Мы загрузили данные и немного познакомились с ними. В нашем распоряжении файл с почти 160 тысячами комментариев. Пропусков данных нет, явных дупилкатов данных нет.

Классы не сбалансированы, данных без признака токсичности сильно больше.

Мы попробовали решить задачу несколькими способами.

Для начала мы сравнили модели на основе логистической регрессии, метода опроных векторов и гребневой регрессии. Предварительно мы провели лемматизацию признаков с помощью библиотеки _nltk_. Модель линейной регресии показала наивысшее значение метрики _ROC-AUC_, поэтому мы отобрали её для дальнейшего обучения. После подбора гипер-параметров и выбора оптимального порога модель обеспечила значение метрики _F1_=0.78.

Затем мы применили две модели на основе нейросетей. Для их использования нам понадобилось использовать видеокарты.

Модель на основе библиотеки _fast.ai_ после обучения смогла классифицировать комментарии довольно точно, значение метрики _F1_ составило 0.82.

Предобученная модель _BERT_ из библиотеки _HuggingFace_ делала предсказания довольно долго, но в конце дотянула метрику _F1_ до великолепного 0.94.

Сведём результаты моделей в единую таблицу.

| Item                    | F1   |
| ----------------------- | ---- |
| Логистическая регрессия | 0.78 |
| fast.ai (LSTM)          | 0.82 |
| HuggingFace (BERT)      | 0.94 |

Исходя из значения метрики _F1_ мы можем рекомендовать заказчику нейросетевую модель _BERT_. Однако если заказчику важно ещё и время расчётов предсказаний, то можно рассмотреть возможность применения модели на основе библиотеки _fast.ai_ (высокая скорость предсказаний и неплохая точность).
