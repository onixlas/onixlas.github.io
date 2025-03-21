---
layout: page
title: Распознавание лиц
description: В этом проекте мы будем решать задачу распознавания лиц. Мы обучим нейросеть и поиграем с различными функциями потерь и метриками. Обучение будем производить на наборе данных CelebA dataset.
img: assets/img/facial-recognition.png
importance: 1
category: "учебные проекты DLS"
related_publications: false
pretty_table: true
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/facial-recognition.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

В этом проекте мы будем решать задачу распознавания лиц. Мы обучим нейросеть и поиграем с различными функциями потерь и метриками. Обучение будем производить на наборе данных [CelebA dataset](https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html).

## Ноутбук

[(ноутбук проекта)](https://github.com/onixlas/DS_portfolio/blob/main/DLS_cv_diploma_project/DLS_cv_diploma_project.ipynb)

## Выводы

В этом проекте мы решали задачу распознавания лиц. В общем случае задача поиска и распознавания лиц решается в несколько этапов:

1. обнаружение лица
2. выравнивание лица
3. распознавание лица

Обычно за каждый из этапов отвечает отдельная нейронная сеть. В нашей работе мы сконцентрировались на решении только задачи распознавания.

Мы описали процесс подготовки данных (фотографий лиц) для распознавания, который также разбивается на этапы:

1. для каждой фотографии определяются координаты элементов лица (глаз, носа, уголков рта)
2. каждая фотография вращается таким образом, чтобы координаты глаз располагались на заранее заданной горизонтальной линии;
3. каждая фотография масштабируется, чтобы размеры всех лиц были примерно схожими.

В нашей работе мы использовали уже подготовленные данные, все фотографии были правильным образом развёрнуты и отмасштабированы. Всего в наших данных были фотографии 500 человек.

Для базовой модели мы взяли нейросеть архитектуры `ResNext` и заменили ей классифицирующий слой. В качестве функции потерь мы использовали кросс-энтропию. После обучения на тестовой выборке нам удалось достичь значения целевой метрики `Accuracy > 70%`.

Уже обученную базовую модель мы использовали для получения эмбедингов и анализа их косинусной близости. Идея заключалась в том, что если наша модель обучена правильно, косинусная близость эмбедингов различных фотографий одного и того же человека будет больше, чем эмбедингов фотографий разных людей. Для проверки нашей модели мы определили классы, которые есть как в обучающей, так и в тестовой выборке, а также классы, которые есть только в тестовой выборке. Затем мы построили две гистограммы: на одной мы отобразили косинусные близости всех эмбедингов фотографий одного и того же человека в обучающей и тестовой выборке. На второй гистограмме мы отобразили косинусные близости эмбедингов фотографий разных людей.

Из полученных графиков видно, что оба распределения заметно отличаются друг от друга, а значит наша базовая модель была обучена правильно.

Мы также описали и применили метрику `identification rate`. В отличие от метрики `Accuracy`, по которой мы оценивали базовую модель, `identification rate` позволяет понять, несколько хорошо наша модель будет справляться с классификацией ранее неизвестных лиц. Для наглядной оценки значения метрики мы построили график зависимости `TPR` (доля истинно положительных ответов модели) от `FPR` (доля ложно положительных ответов модели).

Форма графика (выпуклость кривой) говорит о том, что наша модель обучилась и позволяет получать осмысленные предсказания.

В рамках данной работы мы также провели эксперименты с функциями потерь `Triplet Loss` и `ArcFace Loss`. Эти функции потерь получают на вход эмбединги изображений и штрафуют нейросеть таким образом, чтобы эмбединги изображений одного класса (фотографий одного и того же человека) были ближе друг к другу, а эмбединги изображений разных классов (фотографий разных людей) были дальше друг от друга. Этот подход имеет важное преимущество: при появлении новых классов (фотографий новых людей) модель не приходится обучать заново, достаточно дообучить модель на новых данных.

Для наглядности мы визуализировали `TSNE`-разложение эмбедингов после обучения модели с функциями потерь `Triplet Loss` и `ArcFace Loss`.

На обоих графиках видно, что эмбединги изображений действительно группируются по классам, при этом группы различных классов легко визуально отделимы друг от друга.

Благодаря обучению моделей с функциями потерь `Triplet` и `ArcFace` удалось добиться значений целевой метрики `Accuracy` 79 и 80 процентов соответственно. Значения метрик для всех трёх моделей приведены в таблице ниже.

| Модель (функция потерь) | Значение `Accuracy` |
| ----------------------- | ------------------- |
| ResNext (cross-entropy) | 70 %                |
| ResNext (Triplet)       | 79 %                |
| ResNext (ArcFace)       | 80 %                |

Таким образом в данной работе мы показали, какие методы применяются при решении задачи распознавания лиц, какие метрики можно применять для оценки эффективности распознавания, какие функции потерь могут быть использованы для заметного повышения качества работы базовой модели.

Полученные модели могут применяться для решения различных задач: непосредственно для распознавания лиц, для поиска неизвестных (незарегистрированных) лиц в общем наборе фотографий, для поиска фотографий похожих лиц.
