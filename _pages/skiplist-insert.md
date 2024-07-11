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

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/AnM-9C4B-1s?si=V2fCQxLtanqpQKyD' frameborder='0' allowfullscreen></iframe></div>

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

Place a face-down card to the **left** and to the **right** of the first face-up
card at **level 1**, these will serve as the *head* and *tail* cards of our level respectively.
We'll treat these cards as a least-possible valued *head* and a maximum-possible valued *tail*.

For the remaining cards, flip each one face-up in turn,
calling it the *flipped* card. You will now insert this
card into your list.

When inserting a new card we will always start with **level 1** as the *insert* level, the highest level *head* card as our *compare* card, and the highest level as our *current* level.

### Which Level to Insert

1. If there are no cards at the *insert* level, go to the *Where to Place* portion.

2. Flip a chit, and

    1. If the chit is black, go to the *Where to Place* portion.

    2. If the chit is red, **repeat the *Which Level to Insert* step again** with the level above our *insert* level becoming the *insert* level next time around.

### Where to Place

1. If the *flipped* card is **greater than** the *compare* card, look to the card to the right of the *compare* card at the *current* level.

    1. If the *flipped* card is **greater than** the *found* card, **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around.

    2. If the *flipped* card is **less than** the *found* card, and

        1. If the *current* level is **greater than level 1**, **repeat the *Where to Place* step again** with the level below the *current* level becoming the *current* level next time around.

        2. If the *current* level is **level 1**, place the *flipped* card to the right of the *compare* card at the *insert* level, place face-down cards below the *flipped* cards until they reach **level 1**. If there are no *head* or *tail* cards at this level, place a face-down *head* and *tail* card above the previous level's *head* and *tail* cards.

## Example

### Add 29

The first card flipped up is **29**. Place this in front of you be the first card in **level 1**. Place a face down card to the left of **29** to be the *head* card of **level 1**. Place a face down card to the right of **29** to be the *tail* card of **level 1**.

{% include figure image_path="/assets/images/skipinsert1.png" alt="29 inserted into list at level 1." caption="29 inserted into list at level 1." %}

### Add 46

The next card flipped up is **46**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert2.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the *tail* to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card, there are already *head* and *tail* cards at this level so we can continue.

{% include figure image_path="/assets/images/skipinsert3.png" alt="46 inserted into list at level 1." caption="46 inserted into list at level 1." %}

### Add 43

The next card flipped up is **43**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert4.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **46** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card, there are already *head* and *tail* cards at this level so we can continue.

{% include figure image_path="/assets/images/skipinsert4-1.png" alt="43 inserted into list at level 1." caption="43 inserted into list at level 1." %}

### Add 15

The next card flipped up is **15**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. There are no cards at this level so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert5.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 1**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, at the *insert* level.

The *insert* level is **level 2** so we will place **one** face-down card below the *flipped* card to reach **level 1**. There are no *head* and *tail* cards at this level so we place a face-down *head* and *tail* card above the previous level's *head* and *tail* cards.

{% include figure image_path="/assets/images/skipinsert6.png" alt="15 inserted into list at level 2." caption="15 inserted into list at level 2." %}

### Add 12

The next card flipped up is **12**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert7.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 2**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **15** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1** so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **15** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, at the *insert* level.

The *insert* level is **level 1** so there is no need to place any face-down cards below the *flipped* card, there are already *head* and *tail* cards at this level so we can continue.

{% include figure image_path="/assets/images/skipinsert8.png" alt="12 inserted into list at level 1." caption="12 inserted into list at level 1." %}

### Add 18

The next card flipped up is **18**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 3** as our *insert* level. There are no cards at this level so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert9.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 2**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **15** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the *tail* to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

We find the **29** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, at the *insert* level.

The *insert* level is **level 3** so we will place **two** face-down cards below the *flipped* card to reach **level 1**. There are no *head* and *tail* cards at this level so we place a face-down *head* and *tail* card above the previous level's *head* and *tail* cards.

{% include figure image_path="/assets/images/skipinsert10.png" alt="18 inserted into list at level 3." caption="18 inserted into list at level 3." %}

### Add 55

The next card flipped up is **55**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 3** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert11.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **18** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the *tail* to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around.

We find the *tail* to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1**, so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **43** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **46** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the *tail* to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1**, so we will place the *flipped* card to the right of the *compare* card, **46**, at the *insert* level.

The *insert* level is **level 3** so we will place **two** face-down cards below the *flipped* card to reach **level 1**, there are already *head* and *tail* cards at this level so we can continue.

{% include figure image_path="/assets/images/skipinsert12.png" alt="55 inserted into list at level 3." caption="55 inserted into list at level 3." %}

### Add 36

The next card flipped up is **36**. Since there are cards in our *insert* level, **level 1**, we will flip a chit.

The flipped chit is red so we will **repeat the *Which Level to Insert* step again** with **level 2** as our *insert* level. Since there are cards in our *insert* level, we will flip a chit.

The flipped chit is black so we will go to the *Where to Place* portion.

{% include figure image_path="/assets/images/skipinsert13.png" alt="Sequence of flipped chits to determine level." caption="Sequence of flipped chits to determine level." %}

The highest level *head* card will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **18** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **55** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1** so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **55** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **greater than level 1** so we will **repeat the *Where to Place* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **29** to the right. The *flipped* card is **greater than** the *found* card, so we will **repeat the *Where to Place* step again** with the *found* card becoming the *compare* card next time around. Since the *flipped* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **43** to the right. The *flipped* card is **less than** the *found* card and the *current* level is **level 1** so we will place the *flipped* card to the right of the *compare* card, **29**, at the *insert* level.

The *insert* level is **level 2** so we will place **one** face-down card below the *flipped* card to reach **level 1**, there are already *head* and *tail* cards at this level so we can continue.

{% include figure image_path="/assets/images/skipinsert14.png" alt="36 inserted into list at level 2." caption="36 inserted into list at level 2." %}

## Exercises

## Evaluation
