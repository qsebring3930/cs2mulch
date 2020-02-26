---
title: Insertion Sort Algorithm
permalink: /tree/insertionsort/
toc: true
sidebar:
  nav: "tree"
---

Students will understand elements of the insertion sort algorithm, which incrementally
adds cards and swaps them into sorted order.

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a face-down *pile* in front of you.

## Algorithm

Take the top card from the *pile*, and place this card face-down to your left.
This card will be the start of your *sorted collection*. New cards will be added
according to the following 3 steps.

1. For the each of the remaining cards in the *pile*, first flip the right-most card in the
*collection* face-up. Then take the top card from the *pile* and place it
face-up to the right of the right-most card in the collection.

2. If the two face-up cards are **in order**, such that the number of the left face-up
card is less than the number in the right face-up card, then **flip both face-up cards face-down**.
If the are cards left in the *pile*, return
to step 1, otherwise, you are done.

3. However, if the two face-up cards are **out of order**, such that the number of the left face-up
card is greater than the number in the right face-up card, then **swap** the two cards.

    1. If there is a face-down card to the left of the two face-up cards, then flip this card face-up,
      flip the right face-up card face-down, and repeat step 2.

    2. Otherwise, **flip both cards face-down**.
    If the are cards left in the *pile*, return
    to step 1, otherwise, you are done.

When all the cards have been added to the *collection*, flip them all face-up. The cards
should be in sorted order, with the smallest cards on the left and largest on the right.

## Example

25

{% include figure image_path="/assets/images/isort1.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

06

{% include figure image_path="/assets/images/isort2-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort3-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

47

{% include figure image_path="/assets/images/isort4-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

54

{% include figure image_path="/assets/images/isort5-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

29

{% include figure image_path="/assets/images/isort6-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort7-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort8-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort9-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort10-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

35

{% include figure image_path="/assets/images/isort11-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort12-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort13-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort14-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort15-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}


67

{% include figure image_path="/assets/images/isort16-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}


41

{% include figure image_path="/assets/images/isort17-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort18-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort19-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort20-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort21-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort22-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isort23-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

{% include figure image_path="/assets/images/isortfinal-0.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}


## Exercises

## Evaluation

The cards in the *collection* are kept face-down as much as possible, and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.
