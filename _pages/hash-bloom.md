---
title: Bloom Filter
permalink: /hash/bloom/
toc: true
toc_sticky: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion and search algorithms
for bloom filters in hash tables.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/PCT3zD26lrk?si=aFr5VIF8bFUDdbgO' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

{% include figure image_path="/assets/images/numbercards.png" alt="this is a placeholder image" caption="Number cards from the Menagerie deck." %}

Shuffle the animal cards from the deck and deal each student 6 cards.

Each student will shuffle their 6 cards, and place them
in a face-down pile to their left.

Give each student a pile of chits.

## Algorithm

### Insertion

Repeat these steps for each card in the face-down pile.

1. Flip over a card from your face-down pile, to become the *face-up* card.

2. On the *face-up* card, look at the first number with a **gold** background. If there is not a chit on the matching number card in your row, place a chit on it.

3. On the *face-up* card, look at the second number with a **white** background. If there is not a chit on the matching number card in your row, place a chit on it.

### Lookup

1. Check the number cards in your row that match the **gold** number and that match the **white** number of the card you are looking for, and

    1. If there is a chit on both number cards, the card you are looking for is likely in the bloom filter.

    2. If there is one chit or no chit on either number card, the card you are looking for is not in the bloom filter.

## Example

### Insertion Example

#### Add Wolf

The first card flipped up is the **Wolf**, the first number with a **gold** background is **7**. There is not a chit on the number card 7 in our row so we will place a chit on it. The second number with a **white** background is **6**. There is not a chit on the number card 6 in our row so we will place a chit on it.

{% include figure image_path="/assets/images/bloom1.png" alt="Wolf hashes into Bloom Filter" caption="Wolf hashes into Bloom Filter" %}

#### Add Meerkat

The next card flipped up is the **Meerkat**, the first number with a **gold** background is **7**. There is already a chit on the number card 7 so we continue. The second number with a **white** background is **3**. There is not a chit on the number card 3 in our row so we will place a chit on it.

{% include figure image_path="/assets/images/bloom2.png" alt="Meerkat hashes into Bloom Filter" caption="Meerkat hashes into Bloom Filter" %}

#### Add Walrus

The next card flipped up is the **Walrus**, the first number with a **gold** background is **6**. There is already a chit on the number card 6 so we continue. The second number with a **white** background is **2**. There is not a chit on the number card 2 in our row so we will place a chit on it.

{% include figure image_path="/assets/images/bloom3.png" alt="Walrus hashes into Bloom Filter" caption="Walrus hashes into Bloom Filter" %}

#### Add Rhinocerous

The next card flipped up is the **Rhinocerous**, the first number with a **gold** background is **5**. There is not a chit on the number card 5 in our row so we will place a chit on it. The second number with a **white** background is **6**. There is already a chit on the number card 6 so we continue.

{% include figure image_path="/assets/images/bloom4.png" alt="Rhinocerous hashes into Bloom Filter" caption="Rhinocerous hashes into Bloom Filter" %}

#### Add Badger

The next card flipped up is the **Badger**, the first number with a **gold** background is **6**. There is already a chit on the number card 6 so we continue. The second number with a **white** background is **5**. There is already a chit on the number card 5 so we continue.

{% include figure image_path="/assets/images/bloom5.png" alt="Badger hashes into Bloom Filter" caption="Badger hashes into Bloom Filter" %}

#### Add Lion

The next card flipped up is the **Lion**, the first number with a **gold** background is **6**. There is already a chit on the number card 6 so we continue. The second number with a **white** background is **4**. There is not a chit on the number card 4 in our row so we will place a chit on it.

{% include figure image_path="/assets/images/bloom6.png" alt="Lion hashes into Bloom Filter" caption="Lion hashes into Bloom Filter" %}

### Lookup Example

#### Lookup Walrus

When we hash the **Walrus**, The first number with a **gold** background is **6** and the second number with a **white** background is **2**. There is a chit on the number card 6 and the number card 2 so it is likely that the bloom filter contains the **Walrus**.

{% include figure image_path="/assets/images/bloom7.png" alt="Checking Walrus hash against Bloom Filter." caption="Checking Walrus hash against Bloom Filter." %}

#### Lookup Ladybug

When we hash the **Ladybug**, The first number with a **gold** background is **4** and the second number with a **white** background is **0**. There is a chit on the number card 4 but not on the number card 0 so the **Ladybug** is not in our bloom filter.

{% include figure image_path="/assets/images/bloom8.png" alt="Checking Ladybug hash against Bloom Filter." caption="Checking Ladybug hash against Bloom Filter." %}

## Exercises

## Evaluation
