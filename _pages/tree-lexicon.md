---
title: Tree Lexicon
permalink: /tree/lexicon/
toc: true
sidebar:
  nav: "tree"
---

When describing a tree in computer science, we commonly use a specific
set of words and notation. Here we define these words and give their
specific context for use in the Acorn Deck.

## Child

A card in a tree can have other cards overlapping the upper-left and upper-right
corners. These overlapping cards on top are called the *children* of the card below.

{% include figure image_path="/assets/images/tree_child.png" alt="Cards from the Acorn deck displaying how children are positioned." caption="Cards from the Acorn deck displaying how children are positioned." %}

## Parent

When the lower portion of a card overlaps another card, the overlapped card
underneath is called the *parent* of the card on top.

{% include figure image_path="/assets/images/tree_parent.png" alt="Cards from the Acorn deck displaying how the parent is positioned." caption="Cards from the Acorn deck displaying how the parent is positioned." %}

## Sibling

When there are two children cards overlapping a parent card, the *sibling* of one child is the opposite child of the parent card underneath both children.

{% include figure image_path="/assets/images/tree_sibling.png" alt="Cards from the Acorn deck displaying how siblings are positioned." caption="Cards from the Acorn deck displaying how siblings are positioned." %}

## Pibling

When the parent of a child card has a sibling, the *pibling* of the child card is sibling of the parent card.

{% include figure image_path="/assets/images/tree_pibling.png" alt="Cards from the Acorn deck displaying how piblings are positioned." caption="Cards from the Acorn deck displaying how piblings are positioned." %}

## Leaf

A card is a *leaf* when it has no children overlapping on the upper-left or
upper-right corners. The maximum number of leaves in a tree directly corresponds to the height of a tree: max. leaves = 2 ^ (height).

{% include figure image_path="/assets/images/tree_leaf.png" alt="Cards from the Acorn deck displaying how leaves are positioned." caption="Cards from the Acorn deck displaying how leaves are positioned." %}

## Root

The *root* of a tree is a card without a parent. There will be one root
card per tree.

{% include figure image_path="/assets/images/tree_root.png" alt="Cards from the Acorn deck displaying how the root is positioned." caption="Cards from the Acorn deck displaying how the root is positioned." %}

## Level

A card is at a certain *level* in a tree. The level is determined by the number of cards
between this card and the *root* of the tree, using the path from the card to the *root*
through its *parent*.

{% include figure image_path="/assets/images/tree_level.png" alt="Cards from the Acorn deck displaying the levels of a tree." caption="Cards from the Acorn deck displaying the levels of a tree." %}

## Height

The *height* of a tree is equal to the highest *level* on any card in the tree.

{% include figure image_path="/assets/images/tree_height.png" alt="Cards from the Acorn deck displaying the height of a tree." caption="Cards from the Acorn deck displaying the height of a tree." %}

## Exercises

## Evaluation
