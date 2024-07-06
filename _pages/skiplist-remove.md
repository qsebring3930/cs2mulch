---
title: Skip List Removal Algorithm
permalink: /tree/slremove/
toc: true
toc_sticky: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the removal algorithm
for skip lists.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and then create a
skip list as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/slinsertion) page.

## Algorithm

The removal algorithm for skip lists follows the same basic procedures found in the *Where to Place* portion of the insertion algorithm. The card we are looking to remove will be our *remove* card, the highest level left-most card will be our *compare* card, and the highest level will be our *current* level.

### Where to Remove

1. If the *remove* card is **greater than** the *compare* card, look to the card to the right of the *compare* card at the *current* level.

    1. If the *remove* card is **greater than** the *found* card, **repeat the *Where to Remove* step again** with the *found* card becoming the *compare* card next time around.

    2. If there is *no card* where you are looking or if the *remove* card is **less than** the *found* card, and

        1. If the *current* level is **greater than level 1**, **repeat the *Where to Remove* step again** with the level below the *current* level becoming the *current* level next time around.

        2. If the *current* level is **level 1**, the list does not contain the *remove* card and we are unable to remove it.

    3. If the *remove* card is the *found* card, remove the *found* card from the list. Shift the cards following the *remove* card back to fill the hole.

1. If the *remove* card is **less than** the *compare* card, look to the highest level card to the left of the *compare* card.

    2. If a card is *found* where you are looking and it is not the *remove* card, **repeat the *Where to Remove* step again** with the *found* card becoming the *compare* card and the level of the *found* card becoming the *current* level next time around. Otherwise, remove the *found* card from the list. Shift the cards following the *remove* card back to fill the hole.

    3. If there is *no card* where you are looking, the list does not contain the *remove* card and we are unable to remove it.

3. If the *remove* card is the *compare* card, remove the *compare* card from the list. Shift the cards following the *remove* card back to fill the hole.

## Example

We'll start by building a skip list according to the insertion algorithm.

{% include figure image_path="/assets/images/skipremove1.png" alt="Sample list created by insertion algorithm." caption="Sample list created by insertion algorithm." %}

### Remove 34

The highest level left-most card in the list, **16**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Remove* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around.

Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **34** to the right. The *remove* card is the *found* card, so we will remove the *found* card from the list and shift the cards following the *remove* card to fill the hole.

{% include figure image_path="/assets/images/skipremove2.png" alt="34 removed from list." caption="34 removed from list." %}

### Remove 4

The highest level left-most card in the list, **16**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *remove* card is **less than** the *compare* card we will look to the highest level card to the left of the *compare* card.

We find the **4** to the left. The *remove* card is the *found* card, so we will remove the *found* card from the list and shift the cards following the *remove* card to fill the hole.

{% include figure image_path="/assets/images/skipremove3.png" alt="4 removed from list." caption="4 removed from list." %}

### Remove 49

The highest level left-most card in the list, **16**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Remove* step again** with the level below the *current* level, **level 2**, becoming the *current* level next time around.

Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **40** to the right. The *remove* card is **greater than** the *found* card, so we will **repeat the *Where to Remove* step again** with the *found* card becoming the *compare* card next time around. Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

There is no card to the right and our *current* level is **greater than level 1**, so we will **repeat the *Where to Remove* step again** with the level below the *current* level, **level 1**, becoming the *current* level next time around.

Since the *remove* card is **greater than** the *compare* card we will look to the card to the right of the *compare* card at the *current* level.

We find the **49** to the right. The *remove* card is the *found* card, so we will remove the *found* card from the list and shift the cards following the *remove* card to fill the hole.

{% include figure image_path="/assets/images/skipremove4.png" alt="49 removed from list." caption="49 removed from list." %}

### Remove 10

The highest level left-most card in the list, **16**, will be our *compare* card. The highest level, **level 3**, will be our *current* level. Since the *remove* card is **less than** the *compare* card we will look to the highest level card to the left of the *compare* card.

We find the **13** to the left. We will **repeat the *Where to Remove* step again** with the *found* card becoming the *compare* card and the level of the *found* card becoming the *current* level next time around. Since the *remove* card is **less than** the *compare* card we will look to the highest level card to the left of the *compare* card.

There is *no card* here, so the list does not contain the *remove* card and we are unable to remove it.

{% include figure image_path="/assets/images/skipremove4.png" alt="10 removed from list." caption="10 removed from list." %}

## Exercises

## Evaluation
