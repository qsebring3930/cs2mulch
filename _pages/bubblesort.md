---
title: Bubble Sort Algorithm
permalink: /tree/bubblesort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the bubble sort algorithm, which incrementally
swaps cards into sorted order.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//N8AKXGRIlEU' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a row face-down to form a *collection* in front of you.

## Algorithm

Flip the two left-most cards in the
*collection* face-up.

1. If the two face-up cards are **out of order**, such that the number of the left face-up
card is greater than the number in the right face-up card, then **swap** the two cards.

2. If there is a face-down card to the right of the two face-up cards, then flip this card face-up,
  flip the left face-up card face-down, and repeat the previous step.

When you reach the right side of the collection, if any swaps occurred as you
were moving from left to right, start the algorithm over.

When you are finished, flip all cards in the *collection* face-up. The cards
should be in sorted order, with the smallest cards on the left and largest on the right.

The cards in the *collection* are kept
[face-down as much as possible](https://dl.acm.org/doi/10.1145/3287324.3293797), and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, and 35.

### First Pass

First we flip the two-left most cards in our collection face-up, **25** and **06**.

These two cards are **out of order** because the left card **25** is *greater than* the right card **06**, so here we must swap them.

{% include figure image_path="/assets/images/bsort0.png" alt="25 and 06 being compared in the collection." caption="25 and 06 being compared in the collection." %}

After swapping, there is a face-down card to the right of our two face-up cards so we flip our left card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort1.png" alt="25 and 06 swapping positions in the collection." caption="25 and 06 swapping positions in the collection." %}

The next two face-up cards are **25** and **47**. These two cards are **in order** because the left card **25** is *less than* the right card **47** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort2.png" alt="25 and 47 being compared in the collection." caption="25 and 47 being compared in the collection." %}

The next two face-up cards are **47** and **54**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **47** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort3.png" alt="47 and 54 being compared in the collection." caption="47 and 54 being compared in the collection." %}

The next two face-up cards are **54** and **29**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/bsort4.png" alt="54 and 29 being compared in the collection." caption="54 and 29 being compared in the collection." %}

After swapping, there is a face-down card to the right of our two face-up cards so we flip our left card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort5.png" alt="54 and 29 swapping positions in the collection." caption="54 and 29 swapping positions in the collection." %}

The next two face-up cards are **54** and **35**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/bsort6.png" alt="54 and 35 being compared in the collection." caption="54 and 35 being compared in the collection." %}

After swapping, there is no card to the right of our two face-up cards so we stop.

{% include figure image_path="/assets/images/bsort7.png" alt="54 and 35 swapping positions in the collection." caption="54 and 35 swapping positions in the collection." %}

### Second Pass

We had swaps in the previous pass, so we must start the algorithm over.

First we flip the two-left most cards in our collection face-up, **06** and **25**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort8.png" alt="06 and 25 being compared in the collection." caption="06 and 25 being compared in the collection." %}

The next two face-up cards are **25** and **47**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort9.png" alt="25 and 47 being compared in the collection." caption="25 and 47 being compared in the collection." %}

The next two face-up cards are **47** and **29**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/bsort10.png" alt="47 and 29 being compared in the collection." caption="47 and 29 being compared in the collection." %}

After swapping, there is a face-down card to the right of our two face-up cards so we flip our left card **29** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort11.png" alt="47 and 29 swapping positions in the collection." caption="47 and 29 swapping positions in the collection." %}

The next two face-up cards are **47** and **35**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/bsort12.png" alt="47 and 35 being compared in the collection." caption="47 and 35 being compared in the collection." %}

After swapping, there is a face-down card to the right of our two face-up cards so we flip our left card **35** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort13.png" alt="47 and 35 swapping positions in the collection." caption="47 and 35 swapping positions in the collection." %}

The next two face-up cards are **47** and **54**. These two cards are **in order** so here we do not need to swap.

There is no card to the right of our two face-up cards so we stop.

{% include figure image_path="/assets/images/bsort14.png" alt="47 and 54 being compared in the collection." caption="47 and 54 being compared in the collection." %}

### Third Pass

We had swaps in the previous pass, so we must start the algorithm over.

First we flip the two-left most cards in our collection face-up, **06** and **25**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort15.png" alt="06 and 25 being compared in the collection." caption="06 and 25 being compared in the collection." %}

The next two face-up cards are **25** and **29**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort16.png" alt="25 and 29 being compared in the collection." caption="25 and 29 being compared in the collection." %}

The next two face-up cards are **29** and **35**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **29** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort17.png" alt="29 and 35 being compared in the collection." caption="29 and 35 being compared in the collection." %}

The next two face-up cards are **35** and **47**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **35** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/bsort18.png" alt="35 and 47 being compared in the collection." caption="35 and 47 being compared in the collection." %}

The next two face-up cards are **47** and **54**. These two cards are **in order** so here we do not need to swap.

There is no card to the right of our two face-up cards so we stop.

{% include figure image_path="/assets/images/bsort19.png" alt="47 and 54 being compared in the collection." caption="47 and 54 being compared in the collection." %}

### Finished

We did not have any swaps on the previous pass, so now we can flip up all the cards and confirm they are in sorted order.

{% include figure image_path="/assets/images/bsort20.png" alt="The collection being displayed face-up." caption="The collection being displayed face-up." %}

## Exercises

## Evaluation
