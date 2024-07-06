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

    1. If a card is *found* where you are looking and it is not the *remove* card, **repeat the *Where to Remove* step again** with the *found* card becoming the *compare* card and the level of the *found* card becoming the *current* level next time around. Otherwise, remove the *found* card from the list. Shift the cards following the *remove* card back to fill the hole.

    2. If there is *no card* where you are looking, the list does not contain the *remove* card and we are unable to remove it.

3. If the *remove* card is the *compare* card, remove the *compare* card from the list. Shift the cards following the *remove* card back to fill the hole.

## Example

## Exercises

## Evaluation
