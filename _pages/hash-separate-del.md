---
title: Separate Chaining Deletion
permalink: /hash/separate-del/
toc: true
toc_sticky: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the deletion algorithm for separate chaining in hash tables.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//4v33HcICoa4' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

{% include figure image_path="/assets/images/numbercards.png" alt="this is a placeholder image" caption="Number cards from the Menagerie deck." %}

Shuffle the animal cards from the deck and deal each student 9 cards.

Each student should use their cards and follow the
[insertion algorithm]({{site.baseurl}}/hash/separate).

## Algorithm

The first step in separate chaining deletion is finding the chain that contains the card we are looking to delete. For example, If a card hashes to 6 it will be in the numbered card 6 chain.

Now that we know which chain contains our card we remove it. If there are cards following it shift all of them up.

## Example

For this example we are using a Hash table containing the Tiger, Snake, Barracuda, Quelea, Boar, Sheep, Baboon, Civet, and Hummingbird cards.

{% include figure image_path="/assets/images/hash-separate-del0.png" alt="Example has table created from separate chaining insertion." caption="Example has table created from separate chaining insertion." %}

### Deleting the Quelea

First, we find the chain that contains the Quelea card. When hashed the Quelea key is 4, therefore we are looking under the gold numbered card 4.

We remove the Quelea card from the chain and shift the Boar and Sheep cards up.

{% include figure image_path="/assets/images/hash-separate-del1.png" alt="Quelea removed from hash table." caption="Quelea removed from hash table." %}

### Deleting the Hummingbird

First, we find the chain that contains the Hummingbird card. When hashed the Hummingbird key is 7, therefore we are looking under the gold numbered card 7.

We remove the Hummingbird card from the chain, since there are no other cards after we do nothing else.

{% include figure image_path="/assets/images/hash-separate-del2.png" alt="Hummingbird removed from hash table." caption="Hummingbird removed from hash table." %}

### Deleting the Baboon

First, we find the chain that contains the Baboon card. When hashed the Baboon key is 5, therefore we are looking under the gold numbered card 5.

We remove the Baboon card from the chain and shift the Civet card up.

{% include figure image_path="/assets/images/hash-separate-del3.png" alt="Baboon removed from hash table." caption="Baboon removed from hash table." %}

### Deleting the Civet

First, we find the chain that contains the Civet. When hashed the Civet key is 5, therefore we are looking under the gold numbered card 5.

We remove the Civet card from the chain, since there are no other cards after we do nothing else.

{% include figure image_path="/assets/images/hash-separate-del4.png" alt="Civet removed from hash table." caption="Civet removed from hash table." %}

## Exercises

## Evaluation
