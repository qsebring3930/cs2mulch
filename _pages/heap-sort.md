---
title: Heap Sorting Algorithm
permalink: /tree/hsort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the heap sort algorithm, which incrementally removes cards in sorted order from a heap.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/3Wmrj9CQqxY?si=ChMJXNCeQaoTjQI' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and then create a
heap as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/hinsertion) page.

{% include figure image_path="/assets/images/heap9-2.png" alt="Sample heap
created by heap insertion algorithm." caption="Sample heap
created by heap insertion algorithm." %}

## Algorithm

The heap sort algorithm uses the same basic steps from the [removal algorithm]({{site.baseurl}}/tree/hremove), in order to turn a heap into a sorted collection.

The first step in the heap sort algorithm is to remove the smallest card from the heap as demonstrated on the [removal algorithm]({{site.baseurl}}/tree/hremove) page. This card will be the start of your *collection*.

Repeat the previous step, adding each *least-card* to your *collection*, until there are no more cards in the heap. When you are finished all of the cards in your *collection* should be in sorted order, with the smallest on the left and the largest on the right.

## Example

We'll start with the example heap from the [insertion algorithm]({{site.baseurl}}/tree/hinsertion) page.

{% include figure image_path="/assets/images/heap9-2.png" alt="Sample heap
created by heap insertion algorithm." caption="Sample heap
created by heap insertion algorithm." %}

Our next step is to apply the removal algorithm to our heap. The root card **03** is removed and is the first card in our *collection*. The removal algorithm ensures our heap stays in minimum order and that the next root card will be the smallest value in the heap.

{% include figure image_path="/assets/images/heapsort1.png" alt="Root card 03 removed from heap" caption="Root card 03 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **03** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort1-1.png" alt="Card 03 added to the collection" caption="Card 03 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort2.png" alt="Root card 15 removed from heap" caption="Root card 15 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **15** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort2-1.png" alt="Card 15 added to the collection" caption="Card 15 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort3.png" alt="Root card 16 removed from heap" caption="Root card 16 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **16** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort3-1.png" alt="Card 16 added to the collection" caption="Card 16 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort4.png" alt="Root card 25 removed from heap" caption="Root card 25 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **25** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort4-1.png" alt="Card 25 added to the collection" caption="Card 25 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort5.png" alt="Root card 31 removed from heap" caption="Root card 31 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **31** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort5-1.png" alt="Card 31 added to the collection" caption="Card 31 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort6.png" alt="Root card 36 removed from heap" caption="Root card 36 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **36** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort6-1.png" alt="Card 36 added to the collection" caption="Card 36 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort7.png" alt="Root card 48 removed from heap" caption="Root card 48 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **48** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort7-1.png" alt="Card 48 added to the collection" caption="Card 48 is added to the collection" %}

{% include figure image_path="/assets/images/heapsort8.png" alt="Root card 56 removed from heap" caption="Root card 56 removed from heap" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **56** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort8-1.png" alt="Card 56 added to the collection" caption="Card 56 is added to the collection" %}

There are still cards in the heap, so we repeat the previous step and apply the removal algorithm to our heap. The root card **66** is removed and is the next card in our *collection*.

{% include figure image_path="/assets/images/heapsort9-1.png" alt="Root card 66 removed from heap and added to the collection" caption="Root card 66 removed from heap and added to the collection" %}

The *collection* should now be in sorted order, and we are finished.



## Exercises


## Evaluation
