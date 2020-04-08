---
title: Heap Insertion Algorithm
permalink: /tree/hinsertion/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion algorithm
for heaps.

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and place them
in a face-down pile to their left.

## Algorithm

Flip the top card face-up, and place this card directly
in front of you. This card will be known as the *root* card.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your heap at the next available spot for a *leaf*.

### Where To Place

Each card can only hold two *leaf* cards, one on the upper-left corner,
and one on the upper-right corner.

The *flipped* card should be placed as as a leaf as close to the *root* as possible.
When there are multiple possible cards with open corners for a leaf that
are the same distance from the root, choose the *left-most* card.

If a card has both corners empty, the upper-left corner is filled
before the upper-right corner.

### Swap If Lower

Once the *flipped* card has been placed, repeat the step
below until you have found where to place it in the tree.

1. If the *flipped* card is **less than** the card below it in
  the tree, **swap the two cards** and repeat this check.

Continue until all cards have been placed.

## Example

The first card flipped up is the **31**. Place this in front of you
to become the *root*.

{% include figure image_path="/assets/images/heap1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap2.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap3.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap3-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap4.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap4-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap5.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap5-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap5-2.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap6.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap7.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap7-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap7-2.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap8.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap8-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap9.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap9-1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

{% include figure image_path="/assets/images/heap9-2.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

## Exercises


## Evaluation
