---
title: Gnome Sort Algorithm
permalink: /tree/gnomesort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the gnome sort algorithm, which incrementally
swaps cards into sorted order.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a row face-down to form a *collection* in front of you.

## Algorithm

1. Flip the two left-most cards in the *collection* face-up.

2. If the two face-up cards are **out of order**, such that the number of the left face-up card is greater than the number in the right face-up card, then **swap** the two cards. If there is a face-down card to the left of the two face-up cards, then flip this card face-up, flip the right face-up card face-down, and repeat this step.

3. Check to see if there is a face-down card to the right of the two face-up cards. If so, then flip this card face-up, flip the left face-up card face-down, and repeat step 2.

When you reach the right side of the collection, flip all cards in the *collection* face-up. The cards
should be in sorted order, with the smallest cards on the left and largest on the right.

The cards in the *collection* are kept
[face-down as much as possible](https://dl.acm.org/doi/10.1145/3287324.3293797), and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.

### First Pass

{% include figure image_path="/assets/images/gsort0.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort1.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort2.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort3.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort4.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort5.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort6.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort7.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort8.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort9.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort10.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort11.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort12.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort13.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort14.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort15.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort16.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort17.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort18.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort19.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort20.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

{% include figure image_path="/assets/images/gsort21.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

### Finished

We did not have any swaps this pass, so now we can flip up all the cards and confirm they are in sorted order.

{% include figure image_path="/assets/images/gsort22.png" alt="Sample cards from the Acorn deck." caption="Flip all cards up, they are now in order." %}

## Exercises

## Evaluation
