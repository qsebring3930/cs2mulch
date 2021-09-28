---
title: Separate Chaining Insertion
permalink: /hash/separate/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion algorithm
for separate chaining in hash tables.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//acpOZUoQ414' frameborder='0' allowfullscreen></iframe></div>

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
To determine where
the *face-up* card should be placed, look at the first number in gold background.
This number is the result of passing the animal name through the
[Murmur3](https://github.com/aappleby/smhasher) hash function, and
calculating this number modulo 8.

Now find the matching number card in the row. If the space below
this number card is empty, then place the *face-up* card in this
space below. However, if there are other cards, place the *face-up*
card directly below all of the other cards.

## Example

The first card flipped *face-up* is the **Capybara**. This card hashes to
**0**, so it is placed under the **0 number card**.

{% include figure image_path="/assets/images/separate1.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Tarsier**. This card hashes to
**3**, so it is placed under the **3 number card**.

{% include figure image_path="/assets/images/separate2.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Baboon**. This card hashes to
**5**, so it is placed under the **5 number card**.

{% include figure image_path="/assets/images/separate3.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Okapi**. This card *also* hashes to
**3**, so it is placed under the **Tarsier** card.

{% include figure image_path="/assets/images/separate4.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Hummingbird**. This card hashes to
**7**, so it is placed under the **7 number card**.

{% include figure image_path="/assets/images/separate5.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Lyrebird**. This card hashes to
**1**, so it is placed under the **1 number card**.

{% include figure image_path="/assets/images/separate6.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Shrimp**. This card hashes to
**7**, so it is placed under the **Hummingbird** card.

{% include figure image_path="/assets/images/separate7.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The next card flipped *face-up* is the **Lemur**. This card hashes to
**2**, so it is placed under the **2 number card**.

{% include figure image_path="/assets/images/separate8.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

The last card flipped *face-up* is the **Bison**. This card hashes to
**6**, so it is placed under the **6 number card**.

{% include figure image_path="/assets/images/separate9.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}

## Exercises


## Evaluation
