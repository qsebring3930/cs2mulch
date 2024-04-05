---
title: MergeSort Algorithm
permalink: /tree/mergesort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the mergesort algorithm, which equally divides the cards
into smaller collections and then merges sorted sub-collections.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//ptx23SEAotQ' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and deal them face-down
in a row in front of them,
as shown below. These will define their initial *collection* of cards.

## Algorithm

If the *collection* has more than one card, divide the
collection in half by shifting the cards in the left collection slightly up.
If the number of cards in the collection is odd, then make the
left sub-collection hold one more card than the right sub-collection.

Repeat this algorithm on each *sub-collection* until there is only one card in your *sub-collection*, so that sub-collection is internally sorted.

Once the *sub-collection* algorithm is complete,
use the **Merge Two Sub-collections** section below to recombine your
two *sub-collections* into one collection.

Flip all the cards face-up. They should be in sorted order!

### Merge Two Sub-collections

With two sorted *sub-collections*, we can create one large sorted collection quickly.

Flip the left-most card of each *sub-collection* face-up. These cards will be the
*front* cards of the *sub-collections*.

1. Compare the *front* cards of the *sub-collections*. Add the smallest *front*
card to the right of the last card in the *merged collection*.
If this is the first comparison, then this card becomes the first card in the *merged collection*.

2. When the *front* of a sub-collection is removed, flip the next card in the
sub-collection face-up to become the new *front*. As long as there are two
*front* cards to compare, repeat the previous step. Otherwise, move all the
cards in the remaining *sub-collection* in order to the right-hand side of the
*merged collection*.

3. Flip the *merged collection* face down.

## Example

We start with our *initial collection* of 8 cards face down.

{% include figure image_path="/assets/images/mergesort1.png" alt="8 cards dealt face down for the initial collection." caption="8 cards dealt face down for the initial collection." %}

We have 8 cards, more than one, in our *initial collection*, so we will divide our *initial collection* in half by shifting the **Left** half of the collection up. Since 8 is an even number, the left *sub-collection* will have 4 cards.

{% include figure image_path="/assets/images/mergesort2.png" alt="Collection divided into two sub-collections." caption="Collection divided into two sub-collections." %}

We have 4 cards, more than one, in our first *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 4 is an even number, the left *sub-collection* will have 2 cards.

{% include figure image_path="/assets/images/mergesort3.png" alt="First sub-collection divided into two sub-collections." caption="First sub-collection divided into two sub-collections." %}

We have 2 cards, more than one, in our first *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 2 is an even number, the left *sub-collection* will have 1 card.

{% include figure image_path="/assets/images/mergesort4.png" alt="First sub-collection divided into two sub-collections." caption="First sub-collection divided into two sub-collections." %}

There is only one card in our first *sub-collection*, so we can flip it up and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort5.png" alt="Internally sorted the first sub-collection." caption="Internally sorted the first sub-collection." %}

We flip down our internally sorted first *sub-collection*. There is only one card in our second *sub-collection*, so we can shift it up, flip it up, and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort6.png" alt="First sub-collection flipped down, second sub-collection shifted up and internally sorted." caption="First sub-collection flipped down, second sub-collection shifted up and internally sorted." %}

We flip down our internally sorted second *sub-collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards.

{% include figure image_path="/assets/images/mergesort7.png" alt="Front cards of first and second sub-collections flipped up to compare." caption="Front cards of first and second sub-collections flipped up to compare." %}

We shift down the smallest *front* card **27**, since this is the first comparison this is the start of our *merged collection*. Since there is only one *front* card **63** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **63** remains in its *sub-collection*) are shifted down, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort8.png" alt="27 is the shifted down to start merged collection, 63 is shifted down to the end of merged collection." caption="27 is the shifted down to start merged collection, 63 is shifted down to the end of merged collection." %}

We flip down our *merged collection* and move on to the next *sub-collection*. We have 2 cards, more than one, in this *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 2 is an even number, the left *sub-collection* will have 1 card.

{% include figure image_path="/assets/images/mergesort9.png" alt="Merged collection is flipped down, first sub-collection divided into two sub-collections." caption="merged collection is flipped down, first sub-collection divided into two sub-collections." %}

There is only one card in our first *sub-collection*, so we can flip it up and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort10.png" alt="First sub-collection internally sorted." caption="First sub-collection internally sorted." %}

We flip down our internally sorted first *sub-collection*. There is only one card in our second *sub-collection*, so we can shift it up, flip it up, and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort11.png" alt="First sub-collection flipped down, second sub-collection shifted up and internally sorted." caption="First sub-collection flipped down, second sub-collection shifted up and internally sorted." %}

We flip down our internally sorted second *sub-collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards. The smallest *front* card **18**, becomes the start of our *merged collection* since this is the first comparison. Since there is only one *front* card **50** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **50** remains in its *sub-collection*) are moved, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort12.png" alt="Front cards of first and second sub-collections flipped up to compare." caption="Front cards of first and second sub-collections flipped up to compare." %}

We flip down our *merged collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards.

{% include figure image_path="/assets/images/mergesort14.png" alt="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." caption="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." %}

We shift down the smallest *front* card **18**, since this is the first comparison this is the start of our *merged collection*.
Since there is another card in the *sub-collection* of **18** we flip it up to become our next *front* card, **50**.

{% include figure image_path="/assets/images/mergesort15.png" alt="18 shifted down to start the merged collection, 50 flipped up to compare." caption="18 shifted down to start the merged collection, 50 flipped up to compare." %}

We shift down the smallest *front* card **27**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **27** we flip it up to become our next *front* card, **63**.

{% include figure image_path="/assets/images/mergesort16.png" alt="27 shifted down to the right of 18, 63 flipped up to compare." caption="27 shifted down to the right of 18, 63 flipped up to compare." %}

We shift down the smallest *front* card **50**, and add it to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort17.png" alt="50 shifted down to the right of 27." caption="50 shifted down to the right of 27." %}

Since there is only one *front* card **63** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **63** remains in its *sub-collection*) are shifted down, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort18.png" alt="63 shifted down to the right of 50." caption="63 shifted down to the right of 50." %}

We flip down our *merged collection* and move on to the next *sub-collection*. We have 4 cards, more than one, in this *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 4 is an even number, the left *sub-collection* will have 2 cards.

{% include figure image_path="/assets/images/mergesort19.png" alt="Merged collection is flipped down, first sub-collection divided into two sub-collections." caption="Merged collection is flipped down, first sub-collection divided into two sub-collections." %}

We have 2 cards, more than one, in our first *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 2 is an even number, the left *sub-collection* will have 1 card.

{% include figure image_path="/assets/images/mergesort20.png" alt="First sub-collection divided into two sub-collections." caption="First sub-collection divided into two sub-collections." %}

There is only one card in our first *sub-collection*, so we can flip it up and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort21.png" alt="First sub-collection internally sorted." caption="First sub-collection internally sorted." %}

We flip down our internally sorted first *sub-collection*. There is only one card in our second *sub-collection*, so we can shift it up, flip it up, and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort22.png" alt="First sub-collection flipped down, second sub-collection shifted up and internally sorted." caption="First sub-collection flipped down, second sub-collection shifted up and internally sorted." %}

We flip down our internally sorted second *sub-collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards. The smallest *front* card **19** is shifted down and becomes the start of our *merged collection* since this is the first comparison. Since there is only one *front* card **52** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **52** remains in its *sub-collection*) are shifted down, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort23.png" alt="Front cards of first and second sub-collections flipped up to compare." caption="Front cards of first and second sub-collections flipped up to compare." %}

We flip our *merged collection* down and move on to the next *sub-collection*.

{% include figure image_path="/assets/images/mergesort24.png" alt="Second merged collection flipped down." caption="Second merged collection flipped down." %}

 We have 2 cards, more than one, in this *sub-collection*, so we will divide our *sub-collection* in half by shifting the **Left** half of the collection up. Since 2 is an even number, the left *sub-collection* will have 1 card.

{% include figure image_path="/assets/images/mergesort25.png" alt="First sub-collection divided into two sub-collections." caption="First sub-collection divided into two sub-collections." %}

There is only one card in our first *sub-collection*, so we can flip it up and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort26.png" alt="First sub-collection internally sorted." caption="First sub-collection internally sorted." %}

We flip down our internally sorted first *sub-collection*. There is only one card in our second *sub-collection*, so we can shift it up, flip it up, and see that it is internally sorted.

{% include figure image_path="/assets/images/mergesort27.png" alt="First sub-collection flipped down, second sub-collection shifted up and internally sorted." caption="First sub-collection flipped down, second sub-collection shifted up and internally sorted." %}

We flip down our internally sorted second *sub-collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards. The smallest *front* card **01** is the start of our *merged collection* since this is the first comparison. Since there is only one *front* card **44** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **44** remains in its *sub-collection*) are moved, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort28.png" alt="Front cards of first and second sub-collections flipped up to compare." caption="Front cards of first and second sub-collections flipped up to compare." %}

We flip down our *merged collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards.

{% include figure image_path="/assets/images/mergesort29.png" alt="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." caption="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." %}

We shift down the smallest *front* card **01**, since this is the first comparison this is the start of our *merged collection*.
Since there is another card in the *sub-collection* of **01** we flip it up to become our next *front* card, **44**.

{% include figure image_path="/assets/images/mergesort30.png" alt="01 shifted down to start the merged collection, 44 flipped up to compare." caption="01 shifted down to start the merged collection, 44 flipped up to compare." %}

We shift down the smallest *front* card **19**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **19** we flip it up to become our next *front* card, **52**.

{% include figure image_path="/assets/images/mergesort31.png" alt="19 shifted down to the right of 01, 52 flipped up to compare." caption="19 shifted down to the right of 01, 52 flipped up to compare." %}

We shift down the smallest *front* card **44**, and add it to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort32.png" alt="44 shifted down to the right of 19." caption="44 shifted down to the right of 19." %}

Since there is only one *front* card **52** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **52** remains in its *sub-collection*) are shifted down, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort33.png" alt="52 shifted down to the right of 44." caption="52 shifted down to the right of 44." %}

We flip down our *merged collection*. Now we have two internally sorted *sub-collections* so we need to start the **Merge Two Sub-collections** process. We flip the left-most card of each *sub-collection* face up to become the *front* cards.

{% include figure image_path="/assets/images/mergesort34.png" alt="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." caption="Second merged collection flipped down, front cards of first and second merged collections flipped up to compare." %}

We shift down the smallest *front* card **01**, since this is the first comparison this is the start of our *merged collection*.
Since there is another card in the *sub-collection* of **01** we flip it up to become our next *front* card, **19**.

{% include figure image_path="/assets/images/mergesort35.png" alt="01 shifted down to start the merged collection, 19 flipped up to compare." caption="01 shifted down to start the merged collection, 19 flipped up to compare." %}

We shift down the smallest *front* card **18**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **18** we flip it up to become our next *front* card, **27**.

{% include figure image_path="/assets/images/mergesort36.png" alt="18 shifted down to the right of 01, 27 flipped up to compare." caption="18 shifted down to the right of 01, 27 flipped up to compare." %}

We shift down the smallest *front* card **19**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **19** we flip it up to become our next *front* card, **44**.

{% include figure image_path="/assets/images/mergesort37.png" alt="19 shifted down to the right of 18, 44 flipped up to compare." caption="19 shifted down to the right of 18, 44 flipped up to compare." %}

We shift down the smallest *front* card **27**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **27** we flip it up to become our next *front* card, **50**.

{% include figure image_path="/assets/images/mergesort38.png" alt="27 shifted down to the right of 19, 50 flipped up to compare." caption="27 shifted down to the right of 19, 50 flipped up to compare." %}

We shift down the smallest *front* card **44**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **44** we flip it up to become our next *front* card, **52**.

{% include figure image_path="/assets/images/mergesort39.png" alt="44 shifted down to the right of 27, 52 flipped up to compare." caption="44 shifted down to the right of 27, 52 flipped up to compare." %}

We shift down the smallest *front* card **50**, and add it to the right-hand side of the *merged collection*. Since there is another card in the *sub-collection* of **50** we flip it up to become our next *front* card, **63**.

{% include figure image_path="/assets/images/mergesort40.png" alt="50 shifted down to the right of 44, 63 flipped up to compare." caption="50 shifted down to the right of 44, 63 flipped up to compare." %}

We shift down the smallest *front* card **52**, and add it to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort41.png" alt="52 shifted down to the right of 50." caption="52 shifted down to the right of 50." %}

Since there is only one *front* card **63** left in the *sub-collections*, all cards in the remaining *sub-collection* (only **63** remains in its *sub-collection*) are shifted down, in order, to the right-hand side of the *merged collection*.

{% include figure image_path="/assets/images/mergesort42.png" alt="63 shifted down to the right of 52." caption="63 shifted down to the right of 52." %}


## Exercises

## Evaluation
