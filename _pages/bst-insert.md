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

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//_VJ9a3sYsws' frameborder='0' allowfullscreen></iframe></div>

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

The first card flipped up is the **25**. Place this in front of you
to become the *root*.

{% include figure image_path="/assets/images/insert1.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

The next card flipped up is the **18**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert2.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **12**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

We find the **18** in this corner, and this becomes our *current* card.
We compare our original **12** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert3.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **04**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

We find the **18** in this corner, and this becomes our *current* card.
We compare our original **04** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

We find the **12** in this corner, and this becomes our *current* card.
We compare our original **04** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert4.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **44**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert5.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **26**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **44** in this corner, and this becomes our *current* card.
We compare our original **26** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert6.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **57**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **44** in this corner, and this becomes our *current* card.
We compare our original **57** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert7.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **33**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **44** in this corner, and this becomes our *current* card.
We compare our original **33** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

We find the **26** in this corner, and this becomes our *current* card.
We compare our original **33** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert8.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The next card flipped up is the **47**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **44** in this corner, and this becomes our *current* card.
We compare our original **47** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

We find the **57** in this corner, and this becomes our *current* card.
We compare our original **47** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner.

{% include figure image_path="/assets/images/insert9.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}


## Exercises


## Evaluation
