---
layout: page
title: Промышленная обработка стали
description: Чтобы оптимизировать производственные расходы, металлургический комбинат ООО «Так закаляем сталь» решил уменьшить потребление электроэнергии на этапе обработки стали. Нам предстоит построить модель, которая предскажет температуру стали.
img: assets/img/steel-production.png
importance: 1
category: "учебные проекты Практикума"
related_publications: false
pretty_table: true
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/steel-production.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Чтобы оптимизировать производственные расходы, металлургический комбинат ООО «Так закаляем сталь» решил уменьшить потребление электроэнергии на этапе обработки стали. Нам предстоит построить модель, которая предскажет температуру стали.

## Ноутбук

[(ноутбук проекта)](https://github.com/onixlas/DS_portfolio/tree/main/ML_diploma_project/diploma-project.ipynb)

## Выводы

Сталь обрабатывают в металлическом ковше вместимостью около 100 тонн. Чтобы ковш выдерживал высокие температуры, изнутри его облицовывают огнеупорным кирпичом. Расплавленную сталь заливают в ковш и подогревают до нужной температуры графитовыми электродами. Они установлены в крышке ковша.

Из сплава выводится сера (десульфурация), добавлением примесей корректируется химический состав и отбираются пробы. Сталь легируют — изменяют её состав — подавая куски сплава из бункера для сыпучих материалов или проволоку через специальный трайб-аппарат (англ. _tribe_, «масса»).

Перед тем как первый раз ввести легирующие добавки, измеряют температуру стали и производят её химический анализ. Потом температуру на несколько минут повышают, добавляют легирующие материалы и продувают сплав инертным газом. Затем его перемешивают и снова проводят измерения. Такой цикл повторяется до достижения целевого химического состава и оптимальной температуры плавки.

Тогда расплавленная сталь отправляется на доводку металла или поступает в машину непрерывной разливки. Оттуда готовый продукт выходит в виде заготовок-слябов (англ. _slab_, «плита»).

Чтобы оптимизировать производственные расходы, металлургический комбинат ООО «Так закаляем сталь» решил уменьшить потребление электроэнергии на этапе обработки стали. Нам поставлена задача построить модель, которая предскажет температуру стали.

Доступные нам данные состоят из файлов, полученных из разных источников:

- `data_arc.csv` — данные об электродах;
- `data_bulk.csv` — данные о подаче сыпучих материалов (объём);
- `data_bulk_time.csv` — данные о подаче сыпучих материалов (время);
- `data_gas.csv` — данные о продувке сплава газом;
- `data_temp.csv` — результаты измерения температуры;
- `data_wire.csv` — данные о проволочных материалах (объём);
- `data_wire_time.csv` — данные о проволочных материалах (время).

Количество строк в файлах различается от 3081 до 14876 штук. Дубликатов данных ни в одном файле обнаружено не было. Во всех файлах были найдены пропуски данных. Каждый файл содержит столбец `key`, возможно его можно будет использовать для объединения таблиц.

Мы провели исследовательский анализ данных, в ходе которого было выявлено несколько проблем:

1. Во всех таблицах были выявлены пропуски данных. Природа части пропусков известна от заказчика.
2. Во всех колонках, содержащих данные о времени совершения операций, отсутствует информация о периоде 11, 12, 13 июля;
3. В некоторых колонках были выявлены подозрительные значения. Они могли появиться в данных например, в результате сбоя измерительного оборудования;
4. Были выявлены замеры температуры менее 1500 градусов;
5. Была выявлена партия с отрицательной реактивной мощностью;
6. Во всех таблицах количество уникальных значений в столбце `key` различается.

Для подготовки данных к обучению мы удалили значения, которые по согласованию с заказчиком считаются выбросами. Затем мы обработали данные и сформировали дополнительные признаки: рассчитали энергию, переданную сплаву в результате нагрева и время, прошедшее между замерами температуры. Полученные таблицы мы объединили в одну, при этом использовались только те партии (ключи), инфомрация о которых была во всех объединяемых таблицах.

Для получения предсказаний мы выбрали пять моделей:

- линейную регрессию с регуляризацией (ElasticNet)
- метод опорных векторов (SVR)
- случайный лес (RandomForest)
- градиентный бустинг (CatBoost)
- голосующий ансамбль (VotingRegressor).

Для сравнения моделей мы обучили каждую из них на кросс-валидации и получили значения метрики MAE. Результаты представлены в таблице ниже.

_Таблица 1: Значения метрики MAE для различных моделей на кросс-валидации_

| Модель          | MAE (к.-в.) |
| --------------- | ----------- |
| ElasticNet      | 6.12        |
| SVR             | 6.51        |
| RandomForest    | 5.92        |
| CatBoost        | 5.87        |
| VotingRegressor | 5.78        |

Наилучший результат показала модель на основе голосующего ансамбля. Её мы отобрали для получения предсказаний на тестовых данных.

На тестовых данных значение метрики оказалось лишь немного выше значения на кросс-валидации.

_Таблица 2: Значение метрики MAE для голосующего регрессора на тестовых данных_

| Модель          | MAE (тест) |
| --------------- | ---------- |
| VotingRegressor | 5.84       |

Мы также проверили, какие признаки больше всего сказываются на предсказаниях модели. Мы установили, что для определения итоговой температуры сплава важнее всего начальная температура и передаваемая сплаву энергия.
