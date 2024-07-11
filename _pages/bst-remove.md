---
title: Binary Search Tree Removal Algorithm
permalink: /tree/remove/
toc: true
toc_sticky: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the removal algorithm
for binary search trees.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//UTF1WwhRX7A' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and then create a
binary tree as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/insertion) page.

{% include figure image_path="/assets/images/insert9.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm." %}

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

### Remove 04

Our first card to remove from the tree is 04. This card is highlighted in the
image below.

{% include figure image_path="/assets/images/before4.png" alt="this is a placeholder image" caption="The 04 card
is highlighted in red." %}

The 04 card is a **leaf** in our tree, so it can simply be removed without
consequences, as shown below.

{% include figure image_path="/assets/images/removed4.png" alt="this is a placeholder image" caption="Tree
after removal of the 04 card." %}

### Remove 57

Next, we will remove the 57 card from the tree, highlighted below.

{% include figure image_path="/assets/images/before57.png" alt="this is a placeholder image" caption="The
57 card is highlighted in red." %}

The 57 card is in the middle of the tree with **one corner** covered. This
means we can remove the card, and then shift the following cards back to take
its place, as shown below.

{% include figure image_path="/assets/images/removed57.png" alt="this is a placeholder image" caption="Tree
after removal of the 57 card." %}

### Remove 25

Finally, we remove the 25 card, which is the root of the tree. This card
is highlighted below.

{% include figure image_path="/assets/images/before25.png" alt="this is a placeholder image" caption="The
25 card is highlighted in red." %}

Since this card is in the middle of the tree with **two corners** covered, we need to find the
*next-highest card* in the tree. This is the 26 card, highlighted below in green. We find the
26 by first looking at the *upper-right* corner of the 25 card, then repeatedly looking in the
*upper-left* corner of each subsequent card until this corner is empty.

{% include figure image_path="/assets/images/found26.png" alt="this is a placeholder image" caption="The
next-highest card, 26, is highlighted in green." %}

To complete the removal, we replace the 25 card with the 26 card, then resolve the
removal of the 26. Since the 26 card had only **one corner** covered, we can shift
the following cards back to take its place, as shown below.

{% include figure image_path="/assets/images/removed25.png" alt="this is a placeholder image" caption="Tree
after removal of the 25 card at the root." %}

## Exercises

## Evaluation
