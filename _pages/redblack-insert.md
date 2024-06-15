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

## Exercises

## Evaluation
