---
title: Separate Chaining Insertion and Removal
permalink: /hash/separate/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion algorithm
for separate chaining in hash tables.

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

Shuffle the animal cards from the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and place them
in a face-down pile to their left.

{% include figure image_path="/assets/images/separate-start.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Algorithm

Flip over a card from your face-down pile, to become the *face-up* card.
To determined where
the *face-up* card should be placed, look at the first number in gold background.
This number is the result of passing the animal name through the
[Murmur3](https://github.com/aappleby/smhasher) hash function, and
calculating this number modulus 8.

Now find the matching number card in the row. If the space below
this number card is empty, then place the *face-up* card in this
space below. However, if there are other cards, place the *face-up*
card directly below all of the other cards.

## Example


{% include figure image_path="/assets/images/separatefinal.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

## Exercises


## Evaluation
