---
title: Separate Chaining Insertion and Removal
permalink: /hash/separate/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion and removal algorithm
for separate chaining in hash tables.

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Shuffle the animal cards from the deck and deal each student 9 cards.


## Algorithm

### Insertion

Flip over a card. Look at the first number in gold background.
Find the card in the array for that number. If below is empty, then
add this card there, otherwise, place it below all other cards.

### Removal

Find the card you are looking for by the number. Then, remove it. If it
was in the middle of a chain, shift the other cards up into the hole.

## Exercises


## Evaluation
