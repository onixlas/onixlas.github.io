---
layout: page
title: Автокодировщики
description: В данном проекте наша задача — написать и обучить несколько вариантов автокодировщиков, оценить их свойства и применимость для различных задач. Для этого мы будем использовать датасеты лиц (LFW) и цифр (MNIST).
img: assets/img/digits.png
importance: 5
category: "учебные проекты DLS"
related_publications: false
---

## Задача

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/digits.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

В данном проекте наша задача — написать и обучить несколько вариантов автокодировщиков, оценить их свойства и применимость для различных задач. Для этого мы будем использовать датасеты лиц _(LFW)_ и цифр _(MNIST)_. Во всех случаях мы будем применять достаточно простые свёрточные архитектуры и латентные вектора малых размеров, чтобы полученные результаты были более наглядными.

## Ноутбук

[(ноутбук проекта)](https://github.com/onixlas/DS_portfolio/blob/main/DLS_p3_autoencoders/dls_p3_autoencoders.ipynb)

## Выводы

В данном проекте мы создали и обучили три автокодировщика с различными архитектурами:

- обычный автокодировщик
- вариационный автокодировщик
- условный вариационный автокодировщик

Для обучения мы использовали датасеты лиц _(LFW)_ и цифр _(MNIST)_.

Одной из целей данной работы было проведение экспериментов с автокодировщиками и оценка их применимости для различных задач.

Для начала мы обучили обычный автокодировщик (простую архитектуру с тремя свёрточными и двумя линейными слоями) на датасете лиц. Мы сознательно выбрали небольшой размер латентного вектора, чтобы энкодер не мог сохранять картинки целиком, а был вынужден кодировать самые важные элементы изображения.

Сначала мы проверили результаты работы обычного автокодировщика на сжатии и восстановлении фотографий. Полученные из декодера картинки сохраняли значительную часть элементов оригинала, хотя изображения получались несколько размытыми.

Затем мы сгенерировали несколько случайных лиц. Для этого мы посмотрели на распределения латентных векторов изображений из валидационной выборки и засемплировали несколько случайных выборок из этих распределений. Полученные изображения действительно были похожи на фотографии живых людей, хотя и довольно размытые.

Также мы провели следующий эксперимент: отобрали несколько фотографий улыбающихся людей и несколько фотографий грустных людей. Закодировали их в латентные вектора и посчитали разницу. Полученный "вектор улыбки" мы добавили к латентным векторам грустных людей и пропустили через декодер. В результате мы получили фотографии улыбающихся людей. При этом возник интересный нюанс: в следствие особенностей выборки наша сеть решила, что в "вектор улыбки" входят и женские черты лица, поэтому они также перенеслись на декодированные фотографии.

Затем мы обучили вариационный автоэнкодер. Особенностью данной архитектуры является то, что кодировщик учится отображать поступающие данные в пространство с заданными свойствами, так что при генерации новых изображений не приходится оценивать свойства распределения элементов латентных векторов.

Для обучения вариационного автоэнкодера мы использовали датасет цифр _MNIST_. Нейросети было явно проще кодировать цифры, потому что получаемые из декодера изображения практически не отличались от подаваемых в энкодер.

Мы также сгенерировали несколько изображений цифр из случайных данных, полученных из нормального распределения. Часть полученных картинок были похожи на цифры (хотя и очень неаккуратно написанные), а некоторые (например, цифры девять, восемь, семь) выглядели очень даже хорошо. И этого удалось достичь с очень простой архитектурой вариационного автоэнкодера (всего по два свёрточных слоя на энкодер и декодер).

Мы также визуализировали латентные вектора вариационного автоэнкодера в двумерном пространстве. На полученном графике видно, что вектора различных цифр очень хорошо кластеризуются и визуально отделимы друг от друга.

Наконец, мы построили и обучили на датасете цифр условный вариационный автоэнкодер. Особенностью данной архитектуры является возможность генерации изображений определённых классов "на заказ". Для демонстрации этой возможности мы сгенерировали из нормального распределения латентные вектора и получили из каждого изображения цифр пять и семь. У нас действительно получились изображения именно заданных классов.

Полученные результаты экспериментов наглядно демонстрируют возможности различных архитектур автокодировщиков. Кроме того, автокодировщики часто применяются для уменьшения шума в данных или обнаружения аномальных значений.
