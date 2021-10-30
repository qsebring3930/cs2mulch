---
title: Linear Probing Deletion
permalink: /hash/linear-del/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the deletion algorithm
for open addressing with linear probing in hash tables.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//4v33HcICoa4' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

{% include figure image_path="/assets/images/numbercards.png" alt="Number cards form the Menagerie deck" caption="Number cards from the Menagerie deck." %}

Shuffle the animal cards from the deck and deal each student 7 cards.

Each student should use their cards and follow the
[insertion algorithm]({{site.baseurl}}/hash/linear).

## Algorithm

The first step is finding the card we are looking to delete.

Check under the numbered card corresponding to the key of the card we are looking for.

If there is a different card stored here *or* if there is no card and the numbered card is flipped, look at the spot to the right. Continue checking the card to the right until you encounter an empty space under a numbered card that isn't flipped or the card we are looking for.

If we've found the card we are looking for, we remove it. Since we removed it we must flip the numbered card above it.

## Example

For this example we are using a Hash table containing the Tiger, Snake, Barracuda, Quelea, Boar, Sheep, Baboon, and Hummingbird cards.

{% include figure image_path="/assets/images/hash-linear-del0.png" alt="Number cards form the Menagerie deck" caption="Number cards from the Menagerie deck." %}

### Deleting the Quelea

When hashed the Quelea card has a key of 4, so we look under the numbered card *4*.

There is a different card stored in this spot, so we look at the spot to the right.

The spot to the right stores the Quelea card, so we remove it and flip the numbered card *5* above it.

{% include figure image_path="/assets/images/hash-linear-del1.png" alt="Quelea removed from hash table and number 5 flipped." caption="Quelea removed from hash table and number 5 flipped." %}

### Deleting the Baboon

When hashed the Baboon card has a key of 5, so we look under the numbered card *5*.

There is no card stored in this spot *and* the numbered card is flipped, so we look at the spot to the right.

The spot to the right stores a different card **Boar**, so we look at the spot to the right again.

The spot to the right stores a different card **Hummingbird**, so we look at the spot to the right again.

The spot to the right stores the Baboon card, so we remove it and flip the numbered card *0* above it.

{% include figure image_path="/assets/images/hash-linear-del2.png" alt="Baboon removed from hash table and number 0 flipped." caption="Baboon removed from hash table and number 0 flipped." %}

### Deleting the Tiger

When hashed the Tiger card has a key of 1, so we look under the numbered card *1*.

There is a different card stored in this spot, so we look at the spot to the right.

The spot to the right stores a different card **Barracuda**, so we look at the spot to the right again.

The spot to the right stores the Tiger card, so we remove it and flip the numbered card *3* above it.

{% include figure image_path="/assets/images/hash-linear-del3.png" alt="Tiger removed from hash table and number 3 flipped." caption="Tiger removed from hash table and number 3 flipped." %}

## Exercises

## Evaluation
