---
title: Gnome Sort Algorithm
permalink: /tree/gnomesort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the gnome sort algorithm, which incrementally
swaps cards into sorted order.

## Video

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a row face-down to form a *collection* in front of you.

## Algorithm

1. Flip the two left-most cards in the *collection* face-up.

2. If the two face-up cards are **out of order**, such that the number of the left face-up card is greater than the number in the right face-up card, then **swap** the two cards. If there is a face-down card to the left of the two face-up cards, then flip this card face-up, flip the right face-up card face-down, and repeat this step.

3. Check to see if there is a face-down card to the right of the two face-up cards. If so, then flip this card face-up, flip the left face-up card face-down, and repeat step 2.

When you reach the right side of the collection, flip all cards in the *collection* face-up. The cards
should be in sorted order, with the smallest cards on the left and largest on the right.

The cards in the *collection* are kept
[face-down as much as possible](https://dl.acm.org/doi/10.1145/3287324.3293797), and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.  

First we flip the two-left most cards in our collection face-up, **25** and **06**.

These two cards are **out of order** because the left card **25** is *greater than* the right card **06**, so here we must swap them.

{% include figure image_path="/assets/images/gsort0.png" alt="25 and 06 being compared in the collection." caption="25 and 06 being compared in the collection." %}

After swapping, there is no face-down card to the left of our two face-up cards so we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **06** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort1.png" alt="25 and 06 swapping positions in the collection." caption="25 and 06 swapping positions in the collection." %}

The next two face-up cards are **25** and **47**. These two cards are **in order** because the left card **25** is *less than* the right card **47** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort2.png" alt="25 and 47 being compared in the collection." caption="25 and 47 being compared in the collection." %}

The next two face-up cards are **47** and **54**. These two cards are **in order** so here we do not need to swap and we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **47** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort3.png" alt="47 and 54 being compared in the collection." caption="47 and 54 being compared in the collection." %}

The next two face-up cards are **54** and **29**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort4.png" alt="54 and 29 being compared in the collection." caption="54 and 29 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort5.png" alt="54 and 29 swapping positions in the collection." caption="54 and 29 swapping positions in the collection." %}

The next two face-up cards are **47** and **29**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort6.png" alt="47 and 29 being compared in the collection." caption="47 and 29 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort7.png" alt="47 and 29 swapping positions in the collection." caption="47 and 29 swapping positions in the collection." %}

The next two face-up cards are **25** and **29**. These two cards are **in order** so we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort8.png" alt="25 and 29 being compared in the collection." caption="25 and 29 being compared in the collection." %}

*We continue through our collection comparing our face-up cards until there is a pair that is out of order*

The next two face-up cards are **54** and **35**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort9.png" alt="54 and 35 being compared in the collection." caption="54 and 35 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort10.png" alt="54 and 35 swapping positions in the collection." caption="54 and 35 swapping positions in the collection." %}

The next two face-up cards are **47** and **35**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort11.png" alt="47 and 35 being compared in the collection." caption="47 and 35 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort12.png" alt="47 and 35 swapping positions in the collection." caption="47 and 35 swapping positions in the collection." %}

The next two face-up cards are **29** and **35**. These two cards are **in order** so we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **25** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort13.png" alt="29 and 35 being compared in the collection." caption="29 and 35 being compared in the collection." %}

*We continue through our collection comparing our face-up cards until there is a pair that is out of order*

The next two face-up cards are **67** and **41**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort14.png" alt="67 and 41 being compared in the collection." caption="67 and 41 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **67** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort15.png" alt="67 and 41 swapping positions in the collection." caption="67 and 41 swapping positions in the collection." %}

The next two face-up cards are **54** and **41**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort16.png" alt="54 and 41 being compared in the collection." caption="54 and 41 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort17.png" alt="54 and 41 swapping positions in the collection." caption="54 and 41 swapping positions in the collection." %}

The next two face-up cards are **47** and **41**. These two cards are **out of order** so here we must swap them.

{% include figure image_path="/assets/images/gsort18.png" alt="47 and 41 being compared in the collection." caption="47 and 41 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and the card to the left face-up.

{% include figure image_path="/assets/images/gsort19.png" alt="47 and 41 swapping positions in the collection." caption="47 and 41 swapping positions in the collection." %}

The next two face-up cards are **35** and **41**. These two cards are **in order** so we continue.

There is a face-down card to the right of our two face-up cards so we flip our left card **35** face-down and flip the card to the right face-up.

{% include figure image_path="/assets/images/gsort20.png" alt="35 and 41 being compared in the collection." caption="35 and 41 being compared in the collection." %}

*We continue through our collection comparing our face-up cards until there is a pair that is out of order*

The last two face-up cards **54** and **67** are *in order* and there is no face-down card to the right so we stop.

{% include figure image_path="/assets/images/gsort21.png" alt="54 and 67 being compared in the collection." caption="54 and 67 being compared in the collection." %}

### Finished

We can flip up all the cards and confirm they are in sorted order.

{% include figure image_path="/assets/images/gsort22.png" alt="The collection being displayed face-up." caption="The collection being displayed face-up." %}

## Exercises

## Evaluation
