---
title: Quicksort Algorithm
permalink: /tree/quicksort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the quicksort algorithm, which uses a pivot element to recursively sort a deck of cards quickly.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//vA8PZP_cOK4' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and deal them face-down
in a row in front of them,
as shown below. These will define their initial *collection* of cards.

## Algorithm

Flip up the right-most card of your current *collection*.
This will be the local *pivot* element.

Now, use the **Partition** section below to divide your
collection into two *sub-collections*, the cards lower than the *pivot*,
and the cards higher than the *pivot*.

For each *sub-collection* that has more than once card, repeat this algorithm.

Now, flip all the cards face-up. They should be in sorted order!

### Partition

To start, flip the left-most card of the *sub-collection* face-up to become the *current* card.

1. If the number on the *current* card is less than or equal to the number on the *pivot* card,
  swap it with the card immediately to the right of the shifted-up *smaller* cards. If there are
  no shifted-up cards, swap it with the left-most card in the collection. Flip the swapped-out
  card face-up, and the *current* card face-down. Since the *current* card is a *smaller* card, shift it up.

2. If there is a face-down card to the right of the face-up card, then flip this card face-up to become
  the new *current* card,
  flip the face-up card face-down, and repeat the previous step.

Finally, swap the pivot card with the card immediately to the right of the shifted-up *smaller* cards.
If there are no shifted-up cards, swap it with the left-most card in the collection.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.

The right-most card **41** of our collection is flipped face-up as our *pivot* card.

{% include figure image_path="/assets/images/qsort0.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **25**. **25** is *less than* our *pivot* card **41** so it must be shifted up.

There is a face-down card to the right of our *current* card so we flip our *current* card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort1.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **06** is *less than* our *pivot* card **41** so it must be shifted up.

There is a face-down card to the right of our *current* card so we flip our *current* card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort2.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **47** is *greater than* our *pivot* card **41** so we continue.

There is a face-down card to the right of our *current* card so we flip our *current* card **47** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort3.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **54** is *greater than* our *pivot* card **41** so we continue.

There is a face-down card to the right of our *current* card so we flip our *current* card **54** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort4.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **29** is *less than* our *pivot* card **41** so it must be shifted up.

The card to the immediate right of our shifted-up cards is swapped into its place.

There is a face-down card to the right of where our *current* card was so we flip our *current* card **29** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort5.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **35** is *less than* our *pivot* card **41** so it must be shifted up.

The card to the immediate right of our shifted-up cards is swapped into its place.

There is a face-down card to the right of where our *current* card was so we flip our *current* card **35** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort6.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **54** is *greater than* our *pivot* card **41** so we continue.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort7.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The card to the immediate right of our shifted-up cards is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort8.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The shifted up cards will become our *current collection*.

The right-most card **35** of our collection is flipped face-up as our *pivot* card.

{% include figure image_path="/assets/images/qsort9.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **25**. **25** is *less than* our *pivot* card **35** so it must be shifted up.

There is a face-down card to the right of our *current* card so we flip our *current* card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort10.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **06** is *less than* our *pivot* card **35** so it must be shifted up.

There is a face-down card to the right of our *current* card so we flip our *current* card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort11.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **29** is *less than* our *pivot* card **35** so it must be shifted up.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort12.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The card to the immediate right of our shifted-up cards is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort13.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The shifted up cards will become our *current collection*.

The right-most card **29** of our collection is flipped face-up as our *pivot* card.

{% include figure image_path="/assets/images/qsort14.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **25**. **25** is *less than* our *pivot* card **29** so it must be shifted up.

There is a face-down card to the right of our *current* card so we flip our *current* card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort15.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **06** is *less than* our *pivot* card **29** so it must be shifted up.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort16.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The card to the immediate right of our shifted-up cards is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort18.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The shifted up cards will become our *current collection*.

The right-most card **06** of our collection is flipped face-up as our *pivot* card

{% include figure image_path="/assets/images/qsort19.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **25**. **25** is *greater than* our *pivot* card **06** so we continue.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort20.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

Since there are no shifted up cards, the left-most card in the collection is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort21.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

There is only one card in the next collection, so it is flipped face-up.

{% include figure image_path="/assets/images/qsort22.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The cards that have never been shifted-up become our *current collection*.

The right-most card **47** of our collection is flipped face-up as our *pivot* card

{% include figure image_path="/assets/images/qsort23.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **54**. **54** is *greater than* our *pivot* card **47** so we continue.

There is a face-down card to the right of our *current* card so we flip our *current* card **54** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/qsort24.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The *current* card **67** is *greater than* our *pivot* card **47** so we continue.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort25.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

Since there are no shifted up cards, the left-most card in the collection is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort26.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The cards that have never been shifted-up become our *current collection*.

The right-most card **54** of our collection is flipped face-up as our *pivot* card

{% include figure image_path="/assets/images/qsort27.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

The first *current* card is the left-most card of the collection **67**. **67** is *greater than* our *pivot* card **54** so we continue.

There is no face-down card to the right of our *current* card so we stop and flip the *current* card face-down.

{% include figure image_path="/assets/images/qsort28.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

Since there are no shifted up cards, the left-most card in the collection is swapped with the *pivot* card.

{% include figure image_path="/assets/images/qsort29.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

There is only one card in the next collection, so it is flipped face-up.

{% include figure image_path="/assets/images/qsort30.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

### Finished

Now all the cards should be flipped up and in sorted order.

## Exercises

## Evaluation
