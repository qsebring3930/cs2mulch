---
title: Linear Probing Insertion
permalink: /hash/linear/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion algorithm
for open addressing with linear probing in hash tables.

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

{% include figure image_path="/assets/images/numbercards.png" alt="this is a placeholder image" caption="Number cards from the Menagerie deck." %}

Shuffle the animal cards from the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and place them
in a face-down pile to their left.

## Algorithm

Repeat these steps for each card in the face-down pile.

Flip over a card from your face-down pile, to become the *face-up* card.
To determined where
the *face-up* card should be placed, look at the first number in gold background.
This number is the result of passing the animal name through the
[Murmur3](https://github.com/aappleby/smhasher) hash function, and
calculating this number modulo 8.

Now find the matching number card in the row. If the space below
this number card is empty, then place the *face-up* card in this
space below.

However, if is already a card in the space below, place the *face-up*
card directly below the *next available* number card, starting with
the number to the *right* of the initial attempt. When you reach the end
of the row of number cards, at the 7 card, start over again with
the 0 card.

## Example

The first card flipped *face-up* is the **Capybara**. This card hashes to
**0**, so it is placed under the **0 number card**.

{% include figure image_path="/assets/images/linear1.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Tarsier**. This card hashes to
**3**, so it is placed under the **3 number card**.

{% include figure image_path="/assets/images/linear2.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Baboon**. This card hashes to
**5**, so it is placed under the **5 number card**.

{% include figure image_path="/assets/images/linear3.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Okapi**. This card hashes to
**3**, but the **Capybara** card is currently in this location.

We look one to the *right* at the **4 number card**. We find that the space under is
empty, so we place the **Okapi** in this location.

{% include figure image_path="/assets/images/linear4.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Hummingbird**. This card hashes to
**7**, so it is placed under the **7 number card**.

{% include figure image_path="/assets/images/linear5.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Lyrebird**. This card hashes to
**1**, so it is placed under the **1 number card**.

{% include figure image_path="/assets/images/linear6.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Shrimp**. This card hashes to
**7**, but the **Hummingbird** card is currently in this location.

We look one to the *right*, but we are at the end of the row. Instead,
we *start back* at **0 number card**, but the **Capybara** card is currently in this location.

We look one more to the *right*, at the **1 number card**, but the **Lyrebird** card is currently in this location.

We look one more to the *right*, at the **2 number card**. We find that the space under is
empty, so we place the **Shrimp** in this location.

{% include figure image_path="/assets/images/linear7.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Lemur**. This card hashes to
**2**, but the **Shrimp** card is currently in this location.

We look one to the *right*, at the **3 number card**, but the **Tarsier** card is currently in this location.

We look one more to the *right*, at the **4 number card**, but the **Okapi** card is currently in this location.

We look one more to the *right*, at the **5 number card**, but the **Baboon** card is currently in this location.

We look one more to the *right*, at the **6 number card**. We find that the space under is
empty, so we place the **Lemur** in this location.

{% include figure image_path="/assets/images/linear8.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The last card flipped *face-up* is the **Bison**. At this point, there are no more open
locations, so the **Bison** cannot be added to the hash table.

{% include figure image_path="/assets/images/linear9.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

## Exercises


## Evaluation
