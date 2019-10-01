---
layout: page
title: Hash Deck
description:
sitemap:
    priority: 1.0
    lastmod: 2017-11-02
    changefreq: weekly
---
# Here's some information about the deck:

![hash deck]({{site.baseurl}}/images/hash_deck.png)

The hashed deck will consist of 72 cards. 64 of these cards will display a name of an animal, along with two integers that are the result of passing this name through two simple hash functions, Murmur3 [14] and FVN [15], modulus 8. An additional 8 cards will be numbered 0 to 7. Figure 2 above shows a prototype of this deck being used to demonstrate a hash table. We plan to create a game where players determine which animals are threatened with extinction through using a Bloom filter [16].

# Activities:
* Linear Hash Table
* Linked Hash Table
* Cuckoo Hash Table
* Bloom Filter
* [Hash Game]({{site.baseurl}}/hashgame/)
