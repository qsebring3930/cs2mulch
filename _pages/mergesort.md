---
title: MergeSort Algorithm
permalink: /tree/mergesort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the mergesort algorithm, which equally divides the cards
into smaller collections and then merges sorted sub-collections.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//ptx23SEAotQ' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and deal them face-down
in a row in front of them,
as shown below. These will define their initial *collection* of cards.

## Algorithm

If the *collection* has more than once card, divide the
collection in half by shifting the cards in the left collection slightly up.
If the number of cards in the collection is odd, then make the
left sub-collection hold one more card than the right sub-collection.

Repeat this algorithm on each *sub-collection*, so that the sub-collections
are internally sorted.

Once the *sub-collection* algorithm is complete,
use the **Merge Two Sub-collections** section below to recombine your
two *sub-collections* into one collection.

Flip all the cards face-up. They should be in sorted order!

### Merge Two Sub-collections

With two sorted *sub-collections*, we can create one large sorted collection quickly.

Flip the left-most card of each *sub-collection* face-up. These cards will be the
*front* cards of the *sub-collections*.

1. Compare the *front* cards of the *sub-collections*. Add the smallest *front*
card to the right of the last card in the *merged collection* and flip it face-down.
If this is the first comparison, then this card becomes the first card in the *merged collection*.

2. When the *front* of a sub-collection is removed, flip the next card in the
sub-collection face-up to become the new *front*. As long as there are two
*front* cards to compare, repeat the previous step. Otherwise, move all the
cards in the remaining *sub-collection* in order to the right-hand side of the
*merged collection*.

## Example

## Exercises

## Evaluation
