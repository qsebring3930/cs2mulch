---
title: Skip List Insertion Algorithm
permalink: /tree/slinsertion/
toc: true
toc_sticky: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion algorithm
for skip lists.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

One chit per student.

{% include figure image_path="/assets/images/chit-overview.png" alt="Sample chits from the CS2Mulch set." caption="Sample chits from the CS2Mulch set." %}

## Setup

Shuffle the deck and deal each student 8 cards, give each student a small stack of cards to use as placeholders. Give each student 1 chit.

Each student will shuffle their 8 cards, and place them in a face-down pile to their left.

## Algorithm

Flip the top card face-up, and place this card directly
in front of you. This card will be our first card at **level 1**.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your list.

When inserting a new card we will always start with **level 1** as the *insert* level, the highest level left-most card as our *compare* card, and the highest level as our *current* level.

### Which Level to Insert

1. If there are no cards at the *insert* level, go to the *Where to Place* portion.

2. Flip a chit, and

    1. If the chit is black, go to the *Where to Place* portion.

    2. If the chit is red, **repeat the *Which Level to Insert* step again** with the level above our *insert* level becoming the *insert* level next time around.

### Where to Place

1. If the *flipped* card is **greater than** the *compare* card, look to the card to the right of the *compare* card at the *current* level.

    1. If the *flipped* card is **greater than** the *found* card, **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around.

    2. If there is *no card* where you are looking or if the *flipped* card is **less than** the *found* card, and

        1. If the *current* level is **greater than level 1**, **repeat the *Where to Place* step again** with the level below the *current* level becoming the *current* level next time around.

        2. If the *current* level is **level 1**, place the *flipped* card to the right of the *compare* card at the *insert* level, place face-down cards below the *flipped* cards until they reach **level 1**.

1. If the *flipped* card is **less than** the *compare* card, look to the highest level card to the left of the *compare* card.

    1. If a card is *found* where you are looking, **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card and the level of the *found* card becoming the *current* level next time around.

    2. If there is *no card* where you are looking, place the *flipped* card to the left of the *compare* card at the *insert* level, place face-down cards below the *flipped* cards until they reach **level 1**.

## Example

### Add 29

The first card flipped up is **29**. Place this in front of you be the first card in **level 1**.

{% include figure image_path="/assets/images/skipinsert1.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 46

The next card flipped up is **46**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert2.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **29**, will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **level 1**, so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card.

{% include figure image_path="/assets/images/skipinsert3.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 43

The next card flipped up is **43**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert4.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **29**, will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **46** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card.

{% include figure image_path="/assets/images/skipinsert4-1.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 15

The next card flipped up is **15**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. There are no cards at this level so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert5.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **29**, will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **less than** the *compare* card we will look to the highest level card to the left of the *compare* card.

There is no card here so we will place the *flipped* card to the left of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 2** so we will place **one** face-down card below the *flipped* card to reach **level 1**.

{% include figure image_path="/assets/images/skipinsert6.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 12

The next card flipped up is **12**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert7.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **15**, will be our *compare* card. The highest level, **level 2**, will be our *current* level. Since the *flipped* card is **less than** the *compare* card we will look to the highest level card to the left of the *compare* card.

There is no card here so we will place the *flipped* card to the left of the *compare* card, **15**, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card.

{% include figure image_path="/assets/images/skipinsert8.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 18

The next card flipped up is **18**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 3** as our *insert* level. There are no cards at this level so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert9.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **15**, will be our *compare* card. The highest level, **level 2**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **15**, at the *insert* level.

The *insert* level is **level 3** so we will place **two** face-down cards below the *flipped* card to reach **level 1**.

{% include figure image_path="/assets/images/skipinsert10.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 55

The next card flipped up is **55**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 3** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert11.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **18**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **43** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **46** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **level 1**, so we will place the *flipped* card to the right of the *compare* card, **46**, at the *insert* level.

The *insert* level is **level 3** so we will place **two** face-down cards below the *flipped* card to reach **level 1**.

{% include figure image_path="/assets/images/skipinsert12.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

### Add 36

The next card flipped up is **36**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert13.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

The highest level left-most card in the list, **18**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **55** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1** so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **55** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1** so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around.

Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **43** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 2** so we will place **one** face-down card below the *flipped* card to reach **level 1**.

{% include figure image_path="/assets/images/skipinsert14.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm deck." %}

## Exercises

## Evaluation
