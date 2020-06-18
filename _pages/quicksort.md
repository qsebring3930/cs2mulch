---
title: Quicksort Algorithm
permalink: /tree/quicksort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the quicksort algorithm, which uses a pivot element to recursively sort a deck of cards quickly.

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and deal them face-down
in a row in front of them,
as shown below. These will define their initial *collection* of cards.

## Algorithm

Flip up the right-most card of your current *collection*.
This will be the local *pivot* element.

Now, use the **Partition** section below to divide your
collection into two *sub-collections*, the cards lower than the *pivot*,
and the cards higher than the *pivot*.

For each *sub-collection* that has more than once card, repeat this algorithm.

Now, flip all the cards face-up. They should be in sorted order!

### Partition

To start, flip the left-most card of the *sub-collection* face-up to become the *current* card.

1. If the number on the *current* card is less than or equal to the number on the *pivot* card,
  swap it with the card immediately to the right of the shifted-up *smaller* cards. If there are
  no shifted-up cards, swap it with the left-most card in the collection. Flip the swapped-out
  card face-up, and the *current* card face-down. Since the *current* card is a *smaller* card, shift it up.

2. If there is a face-down card to the right of the face-up card, then flip this card face-up to become
  the new *current* card,
  flip the face-up card face-down, and repeat the previous step.

Finally, swap the pivot card with the card immediately to the right of the shifted-up *smaller* cards.
If there are no shifted-up cards, swap it with the left-most card in the collection.

## Example

## Exercises

## Evaluation
