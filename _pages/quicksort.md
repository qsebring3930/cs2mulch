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

![dealt cards](cards)

## Algorithm

Flip up the right-most card of your current *collection*.
This will be the local *pivot* element.

Now, use the **Partition** section below to divide your
collection into two *sub-collections*, the cards lower than the *pivot*,
and the cards higher than the *pivot*.

For each *sub-collection* that has more than once card, repeat this algorithm.

### Partition

To start, flip the left-most card of the *sub-collection* face-up to become the *current* card.

1. If the number on the *current* card is less than or equal to the number on the *pivot* card,
  swap it with the card immediately to the right of the shifted up cards.
  shift it up.

2. If there is a face-down card to the right of the face-up card, then flip this card face-up,
  flip the current face-up card face-down, and repeat the previous step.


Now, move the pivot element one card to the right, and repeat the above rule.
Additionally when you keep a card face-up, if there are face-down
cards to the left of current card, swap this card with the
left-most face-down card.

Keep repeating the above steps until you have examined every card
in the collection.

Place the pivot card on the right of the collection.

Now, swap the pivot card with the left-most face-down card.

Shift the cards to the left of the pivot element slightly to the left,
and shift the cards to the right of the pivot element slightly to the right.
These two sets are now new *collections*.

For each collection that is more than one card, repeat the above
instructions.

Now, flip all the cards face-up. They should be in sorted order!

## Example

## Exercises

If you were given the nine cards shown below, what would be their
arrangement after one pass through the linked-list based algorithm
described above?

## Evaluation
