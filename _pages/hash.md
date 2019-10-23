---
title: Hash Deck
permalink: /hash/
classes: wide
sidebar:
  nav: "hash"
---

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the hash deck." %}

The hashed deck consists of 72 cards. 64 of these cards will display a name of
an animal, along with two integers that are the result of passing this name
through two simple hash functions, Murmur3 [14] and FVN [15], modulus 8. An
additional 8 cards are numbered 0 to 7.

Figure above shows a prototype of
this deck being used to demonstrate a hash table. We plan to create a game
where players determine which animals are threatened with extinction through
using a Bloom filter [16].

## Licenses and Attributions

Add Info Here
