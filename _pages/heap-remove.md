---
title: Heap Removal Algorithm
permalink: /tree/hremove/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the removal algorithm
for heaps.

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and then create a
heap as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/hinsertion) page.

{% include figure image_path="/assets/images/heap9-2.png" alt="this is a placeholder image" caption="Sample heap
created by heap insertion algorithm." %}

## Algorithm

This algorithm will remove smallest card in the heap, which is at the *root*, while
maintaining the heap property that every *parent* is smaller than its *children*.

A card is a *leaf* if it has no *children* in the upper-left or upper-right corners.

Find the cards with *level* equal to the *height* of the tree. These will be
the furthest away from the *root* of the tree. Find the right-most of these cards,
which we will call the *selected* card.

Swap the *selected* with the *root* card.

Now, repeat the **Swap If Higher** section below for as long as needed to find the
correct location for the *selected* card in the heap.

Once this is complete, you can remove the card which used to be the root.

### Swap If Higher

Once the *selected* card has swapped with the *root* card, repeat the step
below until you have found the final location of the *selected* card in the tree.

1. If the *selected* card is a *leaf*, then stop.
2. If the *selected* card is **greater than** any of its *child* cards,
swap the *selected* card with the *largest* child card and repeat the **Swap If Higher** steps.

## Example


## Exercises


## Evaluation
