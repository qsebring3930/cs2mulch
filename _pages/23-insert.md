---
title: 2-3 Tree Insertion Algorithm
permalink: /tree/23insertion/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion algorithm
for 2-3 trees.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/LbwWe2M8e_s?si=AsPEqtc6MuOn9pnj' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and place them
in a face-down pile to their left.

## Algorithm

Flip the top card face-up, and place this card directly
in front of you. This card will be the first card in the *root* node.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your tree.

Start each card insertion by labeling the *root* node
as the *current* node. Now follow the two steps
below to find where to place it in the tree.

### Which Node to Place

1. If the *current* node has no children, continue to the *insert* portion.

2. If the *flipped* card is **less than** the left-most card in the *current* node, look at look at the **upper-left** corner of the *current* node. Repeat the *which node to place* portion with the node in the **upper-left** as the *current* node.

3. If the *flipped* card is **greater than** the right-most card in the *current* node, look at look at the **upper-right** corner of the *current* node. Repeat the *which node to place* portion with the node in the **upper-right** as the *current* node.

4. Otherwise the *flipped* card must be **greater than** the left-most card in the *current* node and **less than** the right-most card in the *current* node, so look at the **upper-center** of the *current* node. Repeat the *which node to place* portion with the node in the **upper-center** as the *current* node.

### Insert

1. The *current* node has **one** card, we will call it the *node* card. Compare the *flipped* card with the *node* card. If the *flipped* card is less than the *node* card, place the *flipped* card on the left side of the *node* card. Otherwise, place the *flipped* card on the right side of the *node* card.

2. The *current* node has **two** cards, we will call them the *left-node* card and the *right-node* card. If the *flipped* card is **less than** the *left-node* card, place the *flipped* card on the left side of the *left-node* card. If the *flipped* card is **greater than** the *right-node* card, place the *flipped* card on the right side of the *right-node* card. Otherwise, place the *flipped* card on the left side of the *right-node* card. Continue to the *split* portion.

### Split

1. The *current* node has **three** cards, we will call them the *left-node* card, the *center-node* card, and the *right-node* card. The *center-node* card must be inserted into the *parent* node of the *current* node, so we will remove it.

2. If the *current* node has four child nodes, we will call them the **old-upper-left** and **old-upper-left-center** which will be assigned to the *left-node* card after the split and the **old-upper-right** and **old-upper-right-center** which will be assigned to the *right-node* card after the split.

3. If there is no *parent* node, the *center-node* card will become the only card in the *parent* node. The *left-node* card will be the **upper-left** child, and the *right-node* card will be the **upper-right** child.

4. If the *parent* node has **one** card,

    1. If the *left-node* card is **greater than** the one card in the *parent* node it will be the **upper-center** child of the *parent* node, and the *right-node* card will be the **upper-right** child of the *parent* node.
    2. If the *left-node* card is **less than** the card in the *parent* node it will be the **upper-left** child of the *parent* node, and the *right-node* card will be the **upper-center** child of the *parent* node.

Go to the insert portion and use the *center-node* card as a *flipped* card and the *parent* node is now the *current* node.

5. If the *parent* node has **two** cards, the *parent* node will temporarily have four child nodes, we will call them the **upper-left**, **upper-left-center**, **upper-right-center**, and **upper-right** child nodes.
    1. If the *current* node is the **upper-left** child of the *parent* node. The **upper-center** child of the *parent* node will be the **upper-right-center** child of the *parent* node. The **upper-right** child of the *parent* node will stay the **upper-right** child of the *parent* node. The *left-node* card will be the **upper-left** child of the *parent* node and the *right-node* card will be the **upper-left-center** child of the *parent* node.
    2. If the *current* node is the **upper-right** child of the *parent* node. The **upper-center** child of the *parent* node will be the **upper-left-center** child of the *parent* node. The **upper-left** child of the *parent* node will stay the **upper-left** child of the *parent* node. The *left-node* card will be the **upper-right-center** child of the *parent* node and the *right-node* card will be the **upper-right** child of the *parent* node.
    3. If the *current* node is the **upper-center** child of the *parent* node. The **upper-left** child of the *parent* node will stay the **upper-left** child of the *parent* node. The **upper-right** child of the *parent* node will stay the **upper-right** child of the *parent* node. The *left-node* card will be the **upper-left-center** child of the *parent* node and the *right-node* card will be the **upper-right-center** child of the *parent* node.

6. If the *current* node had 4 children before the split, the **old-upper-left** node will be the **upper-left** child of the **upper-left** child of the *parent* node. The **old-upper-left-center** node will be the **upper-right** child of the **upper-left** child of the *parent* node. The **old-upper-right-center** node will be the **upper-left** child of the **upper-right** child of the *parent* node. the **old-upper-right** node will be the **upper-right** child of the **upper-right** child of the *parent* node.

Go to the promote portion and use the *center-node* card as a *flipped* card and the *parent* node is now the *current* node.

## Example

### Add 17

The first card flipped up is **17**. Place this in front of you be the first card in the *root* node.

{% include figure image_path="/assets/images/23tree1.png" alt="17 placed as the root card." caption="17 placed as the root card." %}

### Add 40

The next card flipped up is **40**. Since the *current* node has no children, we insert it into the node. Since the *current* node only has **one** card and **40** is **greater than** the *node* card **17**, we place it to the right of the *node* card.

{% include figure image_path="/assets/images/23tree2.png" alt="40 placed to the right of 17." caption="40 placed to the right of 17." %}

### Add 59

The next card flipped up is **59**. Since the *current* node has no children, we insert it into the node. Since the *current* node has **two** cards and **59** is **greater than** the *right-node* card **40**, we place it to the right of the *right-node* card and split the node.

{% include figure image_path="/assets/images/23tree3.png" alt="59 placed to the right of 40." caption="59 placed to the right of 40." %}

The *center-node* card is **40**, so we will remove it. Since there are no cards in the *parent* node, the *center-node* card will become the only card in the *parent* node. The *left-node* card **17** will be the **upper-left** child, and the *right-node* card **59** will be the **upper-right** child of the *parent* node.

{% include figure image_path="/assets/images/23tree4.png" alt="Node split with 17 as left child and 59 as right child, 40 becomes parent node." caption="Node split with 17 as left child and 59 as right child, 40 becomes parent node." %}

### Add 61

The next card flipped up is **61**. Since **61** is **greater than** the right-most card **40** in the *current* node, we look at the **upper-right** corner of the current node.

The node in the **upper-right** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node only has **one** card and **61** is **greater than** the *node* card **59**, we place it to the right of the *node* card.

{% include figure image_path="/assets/images/23tree5.png" alt="61 placed to the right of 59." caption="61 placed to the right of 59." %}

### Add 43

The next card flipped up is **43**. Since **43** is **greater than** the right-most card **40** in the *current* node, we look at the **upper-right** corner of the current node.

The node in the **upper-right** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node has **two** cards and **59** is not **less than** the *left-node* card **40** and not **greater than** the *right-node* card **61**, we place it to the left of the *right-node* card and split the node.

{% include figure image_path="/assets/images/23tree6.png" alt="43 placed to the left of 59." caption="43 placed to the left of 59." %}

The *center-node* card is **59**, so we will remove it. Since there is **one** card in the *parent* node and the *left-node* card **43** is greater than the one card **40** in the *parent* node, the *left-node* card **43** will be the **upper-center** child, and the *right-node* card **61** will be the **upper-right** child of the *parent* node.

The *center-node* card **59** will become our flipped up card and the *parent* node will become our *current* node, and we insert. Since the *current* node has **one** card and **59** is **greater than** the *node* card **40**, we place it to the right of the *node* card.

{% include figure image_path="/assets/images/23tree7.png" alt="Node split with 43 as center child and 61 as right child, 59 inserted into parent node." caption="Node split with 43 as center child and 61 as right child, 59 inserted into parent node." %}

### Add 49

The next card flipped up is **49**. Since **49** is **greater than** than the left-most card **40** and **less than** the right-most card **59** in the current node, we look at the **upper-center** of the *current* node.

The node in the **upper-center** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node only has **one** card and **49** is **greater than** the *node* card **43**, we place it to the right of the *node* card.

{% include figure image_path="/assets/images/23tree8.png" alt="49 placed to the right of 43." caption="49 placed to the right of 43." %}

### Add 51

The next card flipped up is **51**. Since **51** is **greater than** than the left-most card **40** and **less than** the right-most card **59** in the current node, we look at the **upper-center** of the *current* node.

The node in the **upper-center** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node has **two** cards and **51** is **greater than** the *right-node* card **49**, we place it to the right of the *right-node* card and split the node.

{% include figure image_path="/assets/images/23tree9.png" alt="51 placed to the right of 49." caption="51 placed to the right of 49." %}

The *center-node* card is **49**, so we will remove it. Since there are **two** cards in the *parent* node and the *current* node is the **upper-center** child of the *parent* node, the **upper-left** child of the *parent* node will stay the **upper-left** child of the *parent* node. The **upper-right** child of the *parent* node will stay the **upper-right** child of the *parent* node. The *left-node* card will be the **upper-left-center** child of the *parent* node and the *right-node* card will be the **upper-right-center** child of the *parent* node.

The *center-node* card **49** will become our flipped up card and the *parent* node will become our *current* node, and we insert. Since the *current* node has **two** cards and **49** is not **less than** the *left-node* card **40** and not **greater than** the *right-node* card **59**, we place it to the left of the *right-node* card and split the node.

{% include figure image_path="/assets/images/23tree10.png" alt="Node split with 17 as left child, 43 as left center child, 51 as right center child, and 61 as right child, 49 inserted into parent node." caption="Node split with 17 as left child, 43 as left center child, 51 as right center child, and 61 as right child, 49 inserted into parent node." %}

The *center-node* card is **49**, so we will remove it. Since there are no cards in the *parent* node, the *center-node* card will become the only card in the *parent* node. The *left-node* card **40** will be the **upper-left** child of the *parent* node, and the *right-node* card **59** will be the **upper-right** child of the *parent* node. Since the *current* node had 4 children before the split, the **old-upper-left** node will be the **upper-left** child of the **upper-left** child of the *parent* node. The **old-upper-left-center** node will be the **upper-right** child of the **upper-left** child of the *parent* node. The **old-upper-right-center** node will be the **upper-left** child of the
**upper-right** child of the *parent* node. The **old-upper-right** node will be the **upper-right** child of the **upper-right** of the *parent* node.

{% include figure image_path="/assets/images/23tree11.png" alt="Node split with 40 as left child and 59 as right child, temporary children assigned." caption="Node split with 40 as left child and 59 as right child, temporary children assigned." %}

### Add 41

The next card flipped up is **41**. Since **41** is **less than** the left-most card **49** in the *current* node, we look at the **upper-left** corner of the current node.

The node in the **upper-left** becomes our *current* node. Since **41** is **greater than** the right-most card **40** in the *current* node, we look at the **upper-right** corner of the current node.

The node in the **upper-right** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node only has **one** card and **41** is **less than** the *node* card **59**, we place it to the left of the *node* card.

{% include figure image_path="/assets/images/23tree12.png" alt="41 placed to the left of 43." caption="41 placed to the left of 43." %}

### Add 48

The next card flipped up is **48**. Since **48** is **less than** the left-most card **49** in the *current* node, we look at the **upper-left** corner of the current node.

The node in the **upper-left** becomes our *current* node. Since **48** is **greater than** the right-most card **40** in the *current* node, we look at the **upper-right** corner of the current node.

The node in the **upper-right** becomes our *current* node. Since the *current* node has no children, we insert it into the node. Since the *current* node has **two** cards and **48** is **greater than** the *right-node* card **43**, we place it to the right of the *right-node* card and split the node.

{% include figure image_path="/assets/images/23tree13.png" alt="48 placed to the right of 43." caption="48 placed to the right of 43." %}

The *center-node* card is **43**, so we will remove it. Since there is **one** card in the *parent* node and the *left-node* card **41** is greater than the one card **40** in the *parent* node, the *left-node* card **41** will be the **upper-center** child, and the *right-node* card **48** will be the **upper-right** child of the *parent* node.

The *center-node* card **43** will become our flipped up card and the *parent* node will become our *current* node, and we insert. Since the *current* node has **one** card and **43** is **greater than** the *node* card **40**, we place it to the right of the *node* card.

{% include figure image_path="/assets/images/23tree14.png" alt="Node split with 41 as center child and 48 as left child, 43 inserted into parent node." caption="Node split with 41 as center child and 48 as left child, 43 inserted into parent node." %}

## Exercises

## Evaluation
