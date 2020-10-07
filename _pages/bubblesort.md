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

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/watch?v=N8AKXGRIlEU' frameborder='0' allowfullscreen></iframe></div>

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

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.

### First Pass

{% include figure image_path="/assets/images/isort23-0.png" alt="Sample cards from the Acorn deck." caption="Flip up 35, flip down 47. Stop because in order." %}

### Finished

We did not have any swaps this pass, so now we can flip up all the cards and confirm they are in sorted order.

{% include figure image_path="/assets/images/isortfinal-0.png" alt="Sample cards from the Acorn deck." caption="Flip all cards up, they are now in order." %}

## Exercises

## Evaluation
