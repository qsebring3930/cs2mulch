---
title: Binary Search Tree Traversal Algorithm
permalink: /tree/traversal/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the traversal algorithm
for binary search trees.

## Video


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

There are three possible Algorithms for traversing a tree: preorder, postorder, and inorder.

### Preorder

1. Visit the root of the tree.

2. Visit the left child. If the left child is a leaf then continue, otherwise repeat step 2.

3. Visit the right child. If the right child is a leaf then continue, otherwise repeat step 2.

### Postorder

1. If the left child of the root is a leaf, then visit it. Otherwise, use the Postorder algorithm on the left child.

2. If the right child of the root is a leaf, then visit it. Otherwise, use the Postorder algorithm on the right child.

3. Visit the root of the tree.

### Inorder

1. If the left child of the root is a leaf, then visit it. Otherwise, use the Inorder algorithm on the left child.

2. Visit the root of the tree.

3. If the right child of the root is a leaf, then visit it. Otherwise, use the Inorder algorithm on the right child.

## Example


## Exercises


## Evaluation
