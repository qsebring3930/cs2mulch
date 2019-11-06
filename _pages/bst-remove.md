---
title: Binary Search Tree Removal Algorithm
permalink: /tree/remove/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the removal algorithm
for binary search trees.

## Materials

One deck of [Before the Birds]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the tree deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and then create a
binary tree as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/insertion) page.

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

## Algorithm

There are three cases possible when removing a card from a binary search tree.

1. The card is a **leaf** (no corners covered).
2. The card is in the **middle** of the tree with **only one** corner covered.
3. The card is in the **middle** of the tree with **both** corners covered.

### Removing a leaf

When removing a **leaf** card at the edge of the tree, there are no consequences.
Just remove the card.

### Removing from the middle, one corner

When removing a card in the **middle** of the tree with **only one** corner covered,
it will create a hole in your tree. Remove the card, then shift the branch back, covering
the same corner as the removed did.

### Removing from the middle, two corners

When removing a card in the **middle** of the tree with **both** corners covered,
it will create a hole in your tree. To fix it, we will need to find
the *next-highest card* in the tree.

1. First, look at the **upper-right** corner of the card to be removed. This
card should be **greater than** the card to be removed. We will call this
the *possible* card.

2. If the *possible* card has a card in the **upper-left** corner, then
this new card becomes the *possible* card. Repeat this step until the
**upper-left** corner is empty.

3. Once you find a card where the **upper-left** corner is empty, you have found the
*next-highest card*. Take out the card to be removed from the tree, and replace it with the
*next-highest card*.

4. Now, repair the tree the *next-highest* card, following this same algorithm.
Note that the next-highest card is either a leaf or has only one corner covered,
both of which involve simple fixes to the tree.

## Example

Remove 4

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

Remove 57

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

Remove 25

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

{% include figure image_path="/assets/images/fulltree.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

## Exercises


## Evaluation
