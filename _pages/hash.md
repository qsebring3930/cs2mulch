---
title: Menagerie Deck
permalink: /hash/
classes: wide
sidebar:
  nav: "hash"
---

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

The *Menagerie* deck consists of 72 cards. 64 of these cards display
an animal, along with two integers that are the result of passing the name
through two simple hash functions, [Murmur3](https://github.com/aappleby/smhasher)
and [FNV](http://isthe.com/chongo/tech/comp/fnv/), modulo 8. An
additional 8 cards are numbered 0 to 7, to be used as the markers for an
array within various hash table implementations.

{% include figure image_path="/assets/images/separatefinal.png" alt="this is a placeholder image" caption="Demonstration
of separate chaining hash table algorithm." %}


## Licenses and Attributions

Add Info Here
