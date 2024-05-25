---
title: Huffman Coding Algorithm
permalink: /tree/huffman/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the Huffman coding algorithm, which assigns weights to the corresponding frequency of a letter in a sentence in order to build a binary search tree.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards. Give each student 8 random chits.

Each student will place their 8 cards in a row face-up to form a *collection* in front of you. Each student will place a chit on each face-up card.

## Algorithm

### Constructing the Tree

1. Remove the two **least-valued** cards from the *collection*. Draw a card from the deck and place it face-down as the *root* card of a new subtree. Place the **least-value** of the two cards as the *left* child of the *root* card and the **greatest-value** as the *right* child. The face-down *root* card has the value of its children added together. Reinsert the *root* card into the *collection* and keep all of its children intact.

2. If there is more than one card in the *collection*, repeat step 1.

### Assigning a Binary Value

For each leaf of the tree, a new binary value can be assigned to it based on the route to the leaf from the root. For each Binary value, our *current* card is the root of the tree.

1. If the *current* card is the leaf we are looking for, we assign the binary value to it.

1. If the next card in the path to the leaf is the *left* child of the *current* card, the next binary number in the binary value is 0. The *left* child is the new *current* card.

2. If the next card in the path to the leaf is the *right* child of the *current* card, the next binary number is 1. The *right* child is the new *current* card.

## Example

First we lay out our initial collection and place a chit on each card.

{% include figure image_path="/assets/images/huffman0.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

### Constructing the Tree

We will remove the two **least-valued** cards **10** and **17** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **10** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **17** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **27**, and we will reinsert it into the collection with all of it's children intact. There are 7 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman1.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards **23** and our face-down card with a value of **27** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **23** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **27** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **50**, and we will reinsert it into the collection with all of it's children intact. There are 6 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman2.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards **33** and **42** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **33** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **42** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **72**, and we will reinsert it into the collection with all of it's children intact. There are 5 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman3.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards **54** and our face-down card with a value of **50** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **50** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **54** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **104**, and we will reinsert it into the collection with all of it's children intact. There are 4 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman4.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards **58** and **65** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **58** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **65** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **123**, and we will reinsert it into the collection with all of it's children intact. There are 3 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman5.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards, our face-down card with a value of **72** and our face-down card with a value of **104**, from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **72** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **104** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **176**, and we will reinsert it into the collection with all of it's children intact. There are 2 cards in the collection, so we will have to repeat this step.

{% include figure image_path="/assets/images/huffman6.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

We will remove the two **least-valued** cards, our face-down card with a value of **123** and our face-down card with a value of **176** from our collection. We will draw a card from the deck and place it face-down as the *root* of a new subtree. **123** is the **least-value** of the two cards we removed so it will be the *left* child of the *root* card. **176** is the **greatest-value** of the two cards we removed so it will be the *right* child of the *root* card. The value of the face-down card is **299**, and we will reinsert it into the collection with all of it's children intact. There is only 1 card in the collection, so we are finished.

{% include figure image_path="/assets/images/huffman7.png" alt="Initial collection with chits." caption="Initial collection with chits." %}

### Assigning a Binary Value

#### Assign 23

We start at the *root* card of the tree as our *current* card. The next card in the path to **23** is the *right* child of the *current* card, so the next binary number is 1. The *right* child is the new *current* card. Our current binary value for **23** is 1.

The next card in the path to **23** is the *right* child of the *current* card, so the next binary number is 1. The *right* child is the new *current* card. Our current binary value for **23** is 11.

The next card in the path to **23** is the *left* child of the *current* card, so the next binary number is 0. The *left* child is the new *current* card. Our current binary value for **23** is 110.

The next card in the path to **23** is the *left* child of the *current* card, so the next binary number is 0. The *left* child is the new *current* card. Our current binary value for **23** is 1100.

The **current** card is **23** which is the leaf we are looking to assign, so we are finished. The binary value for **23** is 1100.

## Exercises

## Evaluation
