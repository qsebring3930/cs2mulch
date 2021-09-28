---
title: Cuckoo Hashing
permalink: /hash/cuckoo/
toc: true
sidebar:
  nav: "hash"
---

## Goals

Students will understand elements of the insertion algorithm
for cuckoo hashing in hash tables.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//kqYNBGspsg8' frameborder='0' allowfullscreen></iframe></div>


## Materials

One deck of [Menagerie]({{site.baseurl}}/hash) cards.

{% include figure image_path="/assets/images/hash_deck.png" alt="this is a placeholder image" caption="Sample cards from the Menagerie deck." %}

## Setup

Give each student a set of 0-7 number cards. Set these cards in a
row, ordered from 0 on the left to 7 on the right.

{% include figure image_path="/assets/images/numbercards.png" alt="this is a placeholder image" caption="Number cards from the Menagerie deck." %}

Shuffle the animal cards from the deck and deal each student 12 cards.

Each student will shuffle their 12 cards, and place them
in a face-down pile to their left.

## Algorithm

Repeat these steps for each card in the face-down pile.

Flip over a card from your face-down pile, to become the *face-up* card.

### Gold Insertion

To determine where
the *face-up* card should be placed, look at the first number with a **gold** background.
This number is the result of passing the animal name through the
[Murmur3](https://github.com/aappleby/smhasher) hash function, and
calculating this number modulo 8.

Now find the matching number card in the row. If the space **below**
this number card is empty, then place the *face-up* card in this
space below. You are now finished with inserting this card.

However, if there is already a card in the space below, replace the
*found* card with the *face-up* card. The found card becomes the new *face-up*
card. Proceed to the **White Insertion** section.

### White Insertion

To determine where
the *face-up* card should be placed, look at the second number with a **white** background.
This number is the result of passing the animal name through the
[FNV](http://isthe.com/chongo/tech/comp/fnv/) hash function, and
calculating this number modulo 8.

Now find the matching number card in the row. If the space **above**
this number card is empty, then place the *face-up* card in this
space above. You are now finished with inserting this card

However, if there is *already* a card in the space above, replace the
*found* card with the *face-up* card. The found card becomes the new *face-up*
card. Proceed to the **Gold Insertion** section.

### Looping

If you ever find yourself repeating the same replacement steps,
then you should stop. The hash table is too small to hold the
desired elements and will need to be resized.

## Example

The first card flipped *face-up* is the **Capybara**. This card hashes to
**0**, so it is placed below the **0 number card**.

{% include figure image_path="/assets/images/linear1.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

The next card flipped *face-up* is the **Tarsier**. This card hashes to
**3**, so it is placed below the **3 number card**.

{% include figure image_path="/assets/images/linear2.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

The next card flipped *face-up* is the **Baboon**. This card hashes to
**5**, so it is placed below the **5 number card**.

{% include figure image_path="/assets/images/linear3.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

The next card flipped *face-up* is the **Okapi**. This card hashes to
**3**, but the **Tarsier** card is currently below this location.

The **Okapi** card replaces the **Tarsier** card. We now need to place the
**Tarsier** card according to the **White Insertion** rules.

The **Tarsier** now hashes to **6**. We find that the space **above** is
empty, so we place the **Tarsier** in this location.

{% include figure image_path="/assets/images/cuckoo4.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Hummingbird**

{% include figure image_path="/assets/images/cuckoo5.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Lyrebird**

{% include figure image_path="/assets/images/cuckoo6.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Shrimp**

{% include figure image_path="/assets/images/cuckoo7.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Lemur**

{% include figure image_path="/assets/images/cuckoo8.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Bison**

{% include figure image_path="/assets/images/cuckoo9.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Squid**

{% include figure image_path="/assets/images/cuckoo10.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Siamang**

{% include figure image_path="/assets/images/cuckoo11-1.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

{% include figure image_path="/assets/images/cuckoo11-2.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

{% include figure image_path="/assets/images/cuckoo11-3.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

{% include figure image_path="/assets/images/cuckoo11-4.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

{% include figure image_path="/assets/images/cuckoo11-5.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

**Pangolin**

{% include figure image_path="/assets/images/cuckoo12.png" alt="this is a placeholder image" caption="Demonstration
of cuckoo hash table algorithm." %}

## Exercises


## Evaluation
