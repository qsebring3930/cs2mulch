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

## Video

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
card into your heap at the next available spot for a *child*.

### Where To Place

Each card can only hold two *children* cards, one on the upper-left corner,
and one on the upper-right corner.

The *flipped* card should be placed as a child as close to the *root* as possible.
The card where it is placed will be called the *parent* card.
When there are multiple possible parent cards with open corners for a child that
at the same *level*, choose the *left-most* parent card.

If the parent card has both corners empty, the *upper-left* corner is filled
before the upper-right corner.

### Swap If Lower

Once the *flipped* card has been placed on a parent card, repeat the step
below until you have found the final location in the tree.

1. If the *flipped* card is the *root*, then stop.
2. If the *flipped* card is **less than** the parent card below it in
  the tree, **swap the two cards** and repeat the **Swap If Lower** steps.

Continue until all cards have been placed.

## Example

The first card flipped up is the **31**. Place this in front of you
to become the *root*.

{% include figure image_path="/assets/images/heap1.png" alt="31 taking the root position of the tree" caption="31 taking the root position of the tree" %}

The next card flipped up is the **66**. This is placed on the only
available parent **31**, and placed in the *upper-left* corner.

**66** is *greater than* **31**, so there is no need to swap.

{% include figure image_path="/assets/images/heap2.png" alt="66 taking the first child position of the tree" caption="66 taking the first child position of the tree" %}

The next card flipped up is the **25**. This is placed on the closest
card to the root, which is the root, making the parent **31**,
and placed in the *upper-right* corner.

{% include figure image_path="/assets/images/heap3.png" alt="25 taking the second child position of the tree." caption="25 taking the second child position of the tree." %}

**25** is
*less* than **31**, so there we need to swap. After the swap, **25** is the root, so
we stop swapping.

{% include figure image_path="/assets/images/heap3-1.png" alt="25 taking the root position of the tree." caption="25 taking the root position of the tree." %}

The next card flipped up is the **48**. There are two
available parents, **66** and **31**. **66** is the left-most and is
chosen as the parent. **48** is placed in the *upper-left* corner.

{% include figure image_path="/assets/images/heap4.png" alt="48 taking the lowest-level child position of the tree." caption="48 taking the lowest-level child position of the tree." %}

**48** is *less than* **66**, so there needs to be a swap. After the swap, **48** is *greater than* **25**, so we stop.

{% include figure image_path="/assets/images/heap4-1.png" alt="48 taking the position of its parent." caption="48 taking the position of its parent." %}

The next card flipped up is the **15**. There are two available parents, **48** and **31**. **48** is the left-most and is
chosen as the parent. **15** is placed in the *upper-right* corner.

{% include figure image_path="/assets/images/heap5.png" alt="15 taking the lowest-level child position of the tree." caption="15 taking the lowest-level child position of the tree." %}

**15** is *less than* **48**, so there needs to be a swap. After the swap, **15** is *less than* **25**, so we must continue.

{% include figure image_path="/assets/images/heap5-1.png" alt="15 taking the position of its parent." caption="15 taking the position of its parent." %}

**15** is *less than* **25**, so we must swap. After the swap, **15** is the root, so we stop swapping.

{% include figure image_path="/assets/images/heap5-2.png" alt="15 taking the root position of the tree." caption="15 taking the root position of the tree." %}

The next card flipped up is the **36**. There is one available parent, **31**, and is chosen as the parent. **36** is placed in the *upper-left* corner.

**36** is *greater than* **31**, so there is no need to swap.

{% include figure image_path="/assets/images/heap6.png" alt="36 taking the lowest-level child position of the tree." caption="36 taking the lowest-level child position of the tree." %}

The next card flipped up is the **03**. There is one available parent, **31**, and is chosen as the parent. **03** is placed in the *upper-right* corner.

{% include figure image_path="/assets/images/heap7.png" alt="03 taking the lowest-level child position of the tree." caption="03 taking the lowest-level child position of the tree." %}

**03** is *less than* **31**, so there needs to be a swap. After the swap, **03** is *less than* **15**, so we must continue.

{% include figure image_path="/assets/images/heap7-1.png" alt="03 taking the position of its parent." caption="03 taking the position of its parent." %}

**03** is *less than* **15**, so we must swap. After the swap, **03** is the root, so we stop swapping.

{% include figure image_path="/assets/images/heap7-2.png" alt="03 taking the root position of the tree." caption="03 taking the root position of the tree." %}

The next card flipped up is the **56**. There four available parents, **66**, **48**, **36**, and **31**. **66** is the left-most and is chosen as the parent. **56** is placed in the *upper-left* corner.

{% include figure image_path="/assets/images/heap8.png" alt="56 taking the lowest-level child position of the tree." caption="56 taking the lowest-level child position of the tree." %}

**56** is *less than* **66**, so there needs to be a swap. After the swap, **56** is *greater than* **25**, so we stop.

{% include figure image_path="/assets/images/heap8-1.png" alt="56 taking the position of its parent." caption="56 taking the position of its parent." %}

The next card flipped up is the **16**. There four available parents, **56**, **48**, **36**, and **31**. **56** is the left-most and is chosen as the parent. **56** is placed in the *upper-right* corner.

{% include figure image_path="/assets/images/heap9.png" alt="16 taking the lowest-level child position of the tree." caption="16 taking the lowest-level child position of the tree." %}

**16** is *less than* **56**, so there needs to be a swap. After the swap, **16** is *less than* **25**, so we must continue.

{% include figure image_path="/assets/images/heap9-1.png" alt="16 taking the position of its parent." caption="16 taking the position of its parent." %}

**16** is *less than* **25**, so there needs to be a swap. After the swap, **16** is *greater than* **03**, so we stop.

{% include figure image_path="/assets/images/heap9-2.png" alt="16 taking the position of its parent." caption="16 taking the position of its parent." %}

## Exercises


## Evaluation
