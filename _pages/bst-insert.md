---
title: Binary Search Tree Insertion Algorithm
permalink: /tree/insertion/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion algorithm
for binary search trees.

## Materials

One deck of [Before the Birds]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and place them
in a face-down pile to their left.

## Algorithm

Flip the top card face-up, and place this card directly
in front of you. This card will be known as the *root* card.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your tree.

Start each card insertion by labeling the *root* card
as the *current* card. Now follow the two steps
below to find where to place it in the tree.

### Where To Look

1. If the *flipped* card is **less than** the *current* card,
  look at the **upper-left** corner of the *current* card.

1. Otherwise the *flipped* card must be **greater than** the *current*
  card, so look at the **upper-right** corner of the *current* card.

### Can I Place

1. If a card is *found* where you are looking, **repeat the *Where
  To Look* step again** with the *found* card becoming the *current*
  card next time around.

1. Otherwise, if there is *no card* where you are looking, **place
  the *flipped* card on this corner**, tilted roughly 45 degrees
  from the current card.

Continue until all cards have been placed.

## Example

We start with the 9 cards shuffled and placed face-down to the left.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

The first card flipped up is the 25. Place this in front of you
to become the *root*.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

The next card flipped up is the 18. We compare it to the *root*
and determine that it is **less than** the root, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}



## Exercises


## Evaluation
