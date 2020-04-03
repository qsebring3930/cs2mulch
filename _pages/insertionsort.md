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

The cards in the *collection* are kept
[face-down as much as possible](https://dl.acm.org/doi/10.1145/3287324.3293797), and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.

### Add 25

The first card (25) is placed face-down to start the collection.

{% include figure image_path="/assets/images/isort1.png" alt="Sample cards from the Acorn deck." caption="First card, 25 face down." %}

### Add 06

Next, we flip up the last card (25) and add in the next card (06) face-up.
When compared (25 > 06), they are out of order, so they are swapped.
The left-most card is face-up, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort2-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 25, 06 added to right." %}

{% include figure image_path="/assets/images/isort3-0.png" alt="Sample cards from the Acorn deck." caption="Swap 06 and 25. Stop because at the left end." %}

### Add 47

Next, we flip up the last card (25) and add in the next card (47) face-up. They
are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort4-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 25, 47 added to right. Stop because in order." %}

### Add 54

Next, we flip up the last card (47) and add in the next card (54) face-up. They
are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort5-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 47, 54 added to right. Stop because in order." %}

### Add 29

Next, we flip up the last card (54) and add in the next card (29) face-up.
When compared (54 > 29), they are out of order, so they are swapped.
We flip the card to the left (47) face-up, and flip the card on the right (54) face-down.
When compared (47 > 29), they are out of order, so they are swapped.
We flip the card to the left (25) face-up, and flip the card on the right (47) face-down.
They are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort6-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 54, 29 added to right." %}

{% include figure image_path="/assets/images/isort7-0.png" alt="Sample cards from the Acorn deck." caption="Swap 29 and 54." %}

{% include figure image_path="/assets/images/isort8-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 47, flip down 54." %}

{% include figure image_path="/assets/images/isort9-0.png" alt="Sample cards from the Acorn deck." caption="Swap 29 and 47." %}

{% include figure image_path="/assets/images/isort10-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 25, flip down 47. Stop because in order." %}

### Add 35

Next, we flip up the last card (54) and add in the next card (35) face-up.
When compared (54 > 35), they are out of order, so they are swapped.
We flip the card to the left (47) face-up, and flip the card on the right (54) face-down.
When compared (47 > 35), they are out of order, so they are swapped.
We flip the card to the left (29) face-up, and flip the card on the right (47) face-down.
They are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort11-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 54, 35 added to right." %}

{% include figure image_path="/assets/images/isort12-0.png" alt="Sample cards from the Acorn deck." caption="Swap 35 and 54." %}

{% include figure image_path="/assets/images/isort13-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 47, flip down 54." %}

{% include figure image_path="/assets/images/isort14-0.png" alt="Sample cards from the Acorn deck." caption="Swap 35 and 47." %}

{% include figure image_path="/assets/images/isort15-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 29, flip down 47. Stop because in order." %}

### Add 67

Next, we flip up the last card (54) and add in the next card (67) face-up. They
are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort16-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 54, 67 added to right. Stop because in order." %}

### Add 41

Next, we flip up the last card (67) and add in the next card (41) face-up.
When compared (67 > 54), they are out of order, so they are swapped.
We flip the card to the left (54) face-up, and flip the card on the right (67) face-down.
When compared (54 > 41), they are out of order, so they are swapped.
We flip the card to the left (47) face-up, and flip the card on the right (54) face-down.
When compared (47 > 41), they are out of order, so they are swapped.
We flip the card to the left (35) face-up, and flip the card on the right (47) face-down.
They are in order, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort17-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 67, 41 added to right." %}

{% include figure image_path="/assets/images/isort18-0.png" alt="Sample cards from the Acorn deck." caption="Swap 41 and 67." %}

{% include figure image_path="/assets/images/isort19-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 54, flip down 67." %}

{% include figure image_path="/assets/images/isort20-0.png" alt="Sample cards from the Acorn deck." caption="Swap 41 and 54." %}

{% include figure image_path="/assets/images/isort21-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 47, flip down 54." %}

{% include figure image_path="/assets/images/isort22-0.png" alt="Sample cards from the Acorn deck." caption="Swap 41 and 47." %}

{% include figure image_path="/assets/images/isort23-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 35, flip down 47. Stop because in order." %}

### Finished

We have placed each card, so now we can flip up all the cards and confirm they are in sorted order.

{% include figure image_path="/assets/images/isortfinal-0.png" alt="Sample cards from the Acorn deck." caption="Flip all cards up, they are now in order." %}

## Exercises

## Evaluation
