---
title: Red Black Tree Insertion Algorithm
permalink: /tree/rbinsertion/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion algorithm for red black trees.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a face-down pile to their left.

Each student will have a pile of 8 chits.

## Algorithm

Flip the top card face-up, and place this card directly
in front of you. This card will be known as the *root* card.
Place a black-sided chit on top of the *root* card.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your tree.

Start each card insertion by labeling the *root* card
as the *current* card.

### Where to Look

1. If the *flipped* card is **less than** the *current* card,
  look at the **upper-left** corner of the *current* card.

2. Otherwise the *flipped* card must be **greater than** the *current*
  card, so look at the **upper-right** corner of the *current* card.

### Can I Place

1. If a card is *found* where you are looking, **repeat the *Where To Look* step again** with the *found* card becoming the *current* card next time around.

2. Otherwise, if there is *no card* where you are looking, **place the *flipped* card on this corner**, tilted roughly 45 degrees from the current card. Place a red-sided chit on top of the *flipped* card.

### Fix Violations

If the *parent* of the *flipped* card has a black-sided chit on it, there are no violations and the insertion algorithm is finished.

1. If the *flipped* card is the *root* of the tree, **flip** the chit to it's black side.

2. If the *pibling* of the *flipped* card has a **red-sided** chit on it, **flip** the chit on the *pibling* card, the *parent* card, and the *grandparent* card of the *flipped* card. Repeat the **Fix Violations** step and treat the *grandparent* card as the new *flipped* card.

3. If the *pibling* of the *flipped* card has a **black-sided** chit on it or there is no *pibling* of the *flipped** card, and

    1. If the *flipped* card and the parent of the *flipped* card are both right children or both left children, go to the *Zig* portion.

    2. If the *flipped* card and the parent of the *flipped* card are opposite children (i.e one is a left child, one is a right child), go to the *Zig-Zag* portion.

#### Zig

1. **Flip** the chit on the *parent* of the *flipped* card to it's black side, and **flip** the chit on the *grandparent* of the *flipped* card to it's red side.

2. If the *flipped* card and the *parent* card of the *flipped* card are both left children, go the *rotate* portion and perform a right rotation with the *parent* card as the *current* card.

3. If the *flipped* card and the *parent* card of the *flipped* card are both right children, go the *rotate* portion and perform a left rotation with the *parent* card as the *current* card.

#### Zig-Zag

1. **Flip** the chit on the *flipped* card to it's black side, and **flip** the chit on the *grandparent* of the *flipped* card to it's red side.

2. If the *flipped* card is a left child, go the *rotate* portion and perform a right rotation with the *flipped* card as the *current* card, then perform a left rotation with the *flipped* card as the *current* card.

3. If the *flipped* card is a right child, go the *rotate* portion and perform a left rotation with the *flipped* card as the *current* card, then perform a right rotation with the *flipped* card as the *current* card.

### Rotate

The parent of the *current* card is the *rotate* card.

1. Replace the *side of rotation* child of the *current* card with the *rotate* card. Keep all of the *rotate* card children on the *side of rotation* intact. Set aside the *side of rotation* child and keep all of the children intact. If the rotation was done on a subtree, place the *current* card where the *rotate* card used to be. Keep all of the *current* card children intact.

2. Place the *side of rotation* child of the *current* card that was replaced in step 1 as the *opposite side of rotation* child of the *rotate* card.

## Example

### Add 35

The first card flipped up is the **35**. Place this in front of you
to become the *root*. Place a black-sided chit on top of the *root* card.

{% include figure image_path="/assets/images/rbtree0.png" alt="need caption" caption="need caption" %}

### Add 21

The next card flipped up is **21**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree1.png" alt="need caption" caption="need caption" %}

Since the *parent* of the *flipped* card has a *black-sided* chit, there are no violations and we can continue.

### Add 42

The next card flipped up is **42**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree2.png" alt="need caption" caption="need caption" %}

Since the *parent* of the *flipped* card has a *black-sided* chit, there are no violations and we can continue.

### Add 55

The next card flipped up is the **55**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **42** in this corner, and this becomes our *current* card.
We compare our original **55** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree3.png" alt="need caption" caption="need caption" %}

The *parent* of the *flipped* card does not have a **black-sided** chit, so we need to fix violations.

The *pibling* of the *flipped* card, **21**, has a **red-sided** chit on it, so we **flip** the chit on the *pibling* card, **21**, to be **black-sided**, the *parent* card, **42**, to be **black-sided**, and the *grandparent* card, **35**, to be **red-sided**. We will repeat the fix violations step with the *grandparent* card as the new *flipped* card.

The *flipped* card **35** is the root of the tree so we will **flip** the chit to be **black-sided**.

{% include figure image_path="/assets/images/rbtree4.png" alt="need caption" caption="need caption" %}

### Add 9

The next card flipped up is the **9**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

We find the **21** in this corner, and this becomes our *current* card.
We compare our original **9** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree5.png" alt="need caption" caption="need caption" %}

Since the *parent* of the *flipped* card has a *black-sided* chit, there are no violations and we can continue.

### Add 17

The next card flipped up is the **17**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

We find the **21** in this corner, and this becomes our *current* card.
We compare our original **17** to the *current* card
and determine that it is **less than** the *current* card, so we look
at the **upper-left** corner.

We find the **9** in this corner, and this becomes our *current* card.
We compare our original **17** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree6.png" alt="need caption" caption="need caption" %}

The *parent* of the *flipped* card does not have a **black-sided** chit, so we need to fix violations.

There is no *pibling* of our *flipped* card and the *flipped* card and the parent of the *flipped* card are opposite children so we will perform a *Zig-Zag* operation.

We **flip** the chit on the *flipped* card, **17**, to it's black side, and **flip** the chit on the *grandparent* of the *flipped* card, **21** to it's red side.

Since the *flipped* card is a right child, we perform a left rotation with the *flipped* card as the *current* card, then perform a right rotation with the *flipped* card as the *current* card.

{% include figure image_path="/assets/images/rbtree7.png" alt="need caption" caption="need caption" %}

### Add 64

The next card flipped up is the **64**. We compare it to the *root*
and determine that it is **greater than** the *root*, so we look
at the **upper-right** corner.

We find the **42** in this corner, and this becomes our *current* card.
We compare our original **64** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

We find the **55** in this corner, and this becomes our *current* card.
We compare our original **64** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree8.png" alt="need caption" caption="need caption" %}

The *parent* of the *flipped* card does not have a **black-sided** chit, so we need to fix violations.

There is no *pibling* of our *flipped* card and the *flipped* card and the parent of the *flipped* card are both right children so we will perform a *Zig* operation.

We **flip** the chit on the *flipped* card, **64**, to it's black side, and **flip** the chit on the *grandparent* of the *flipped* card, **42** to it's red side.

Since the *flipped* card and the *parent* card of the *flipped* card are both right children, we will perform a left rotation with the *parent* card as the *current* card.

{% include figure image_path="/assets/images/rbtree9.png" alt="need caption" caption="need caption" %}

### Add 29

The next card flipped up is the **29**. We compare it to the *root*
and determine that it is **less than** the *root*, so we look
at the **upper-left** corner.

We find the **17** in this corner, and this becomes our *current* card.
We compare our original **29** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

We find the **21** in this corner, and this becomes our *current* card.
We compare our original **29** to the *current* card
and determine that it is **greater than** the *current* card, so we look
at the **upper-right** corner.

There is no card in this corner, so we can **place the card**
on this corner. We will place a *red-sided* chit on top of the *flipped* card.

{% include figure image_path="/assets/images/rbtree10.png" alt="need caption" caption="need caption" %}

The *parent* of the *flipped* card does not have a **black-sided** chit, so we need to fix violations.

The *pibling* of the *flipped* card, **9**, has a **red-sided** chit on it, so we **flip** the chit on the *pibling* card, **9**, to be **black-sided**, the *parent* card, **21**, to be **black-sided**, and the *grandparent* card, **17**, to be **red-sided**. We will repeat the fix violations step with the *grandparent* card as the new *flipped* card.

{% include figure image_path="/assets/images/rbtree11.png" alt="need caption" caption="need caption" %}

Since the *parent* of the *flipped* card, **35**, has a *black-sided* chit, there are no violations and we can continue.

## Exercises

## Evaluation
