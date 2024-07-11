---
title: Insertion Sort Algorithm
permalink: /tree/insertionsort/
toc: true
toc_sticky: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the insertion sort algorithm, which incrementally
adds cards and swaps them into sorted order.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//AOAkXKw0kgA' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="Sample cards from the Acorn deck." caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 8 cards.

Each student will shuffle their 8 cards, and place them
in a face-down *pile* in front of you.

## Algorithm

Take the top card from the *pile*, and place this card face-down.
This card will be the start of your *sorted collection*. New cards will be added
according to the following 3 steps.

1. First flip the right-most card in the *collection* face-up. Then take the top card from the *pile* and place it face-up to the right of the right-most card in the collection. If there are no more cards in the *pile*, then you are done.

2. If the two face-up cards are **in order**, such that the number of the left face-up
card is less than the number in the right face-up card, then **flip both cards face-down** and return to step 1.
If the two face-up cards are **out of order**, such that the number of the left face-up
card is greater than the number in the right face-up card, then **swap** the two cards.

3. If there was a swap in step 2 and there is a face-down card to the left of the two face-up cards flip the face-down card to the left face-up, flip the right face-up card face-down, and repeat step 2. Otherwise, **flip both cards face-down** and return to step 1.


When all the cards have been added to the *collection*, flip them all face-up. The cards
should be in sorted order, with the smallest cards on the left and largest on the right.

The cards in the *collection* are kept
[face-down as much as possible](https://dl.acm.org/doi/10.1145/3287324.3293797), and only two cards
are face-up at a time. This emphasizes the way computers need to use indices to walk
through an array and compare the data at neighboring memory locations.

## Example

Here is an example of this algorithm applied to the cards 25, 06, 47, 54, 29, 35, 67, and 41.

### Add 25

The first card **25** is placed face-down to start the collection.

{% include figure image_path="/assets/images/isort1.png" alt="25 starting the collection." caption="25 starting the collection." %}

### Add 06

Next we flip up the *right-most* card **25**. The next card **06** is placed to the right of our *right-most* card face-up.

The two face-up cards **25** and **06** are **out of order** because the left card **25** is *greater than* the right card **06**, so here we must swap them.

{% include figure image_path="/assets/images/isort2-0.png" alt="06 placed in the collection." caption="06 placed in the collection." %}

After swapping, there is no card to the left of our two face-up cards, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort3-0.png" alt="25 and 06 swapping positions in the collection." caption="25 and 06 swapping positions in the collection." %}

### Add 47

Next we flip up the *right-most* card **25**. The next card **47** is placed to the right of our *right-most* card face-up.

The two face-up cards **25** and **47** are **in order** because the left card **25** is *less than* the right card **47**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort4-0.png" alt="47 placed in the collection." caption="47 placed in the collection." %}

### Add 54

Next we flip up the *right-most* card **47**. The next card **54** is placed to the right of our *right-most* card face-up.

The two face-up cards **47** and **54** are **in order** because the left card **25** is *less than* the right card **47**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort5-0.png" alt="54 placed in the collection." caption="54 placed in the collection." %}

### Add 29

Next we flip up the *right-most* card **54**. The next card **29** is placed to the right of our *right-most* card face-up.

The two face-up cards **54** and **29** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort6-0.png" alt="29 placed in the collection." caption="29 placed in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort7-0.png" alt="29 and 54 swapping positions in the collection." caption="29 and 54 swapping positions in the collection." %}

The two face-up cards **47** and **29** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort8-0.png" alt="47 and 29 being compared in the collection." caption="47 and 29 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort9-0.png" alt="47 and 29 swapping positions in the collection." caption="47 and 29 swapping positions in the collection." %}

The two face-up cards **25** and **29** are **in order**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort10-0.png" alt="25 and 29 being compared in the collection." caption="25 and 29 being compared in the collection." %}

### Add 35

Next we flip up the *right-most* card **54**. The next card **35** is placed to the right of our *right-most* card face-up.

The two face-up cards **54** and **35** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort11-0.png" alt="35 placed in the collection." caption="35 placed in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort12-0.png" alt="54 and 35 swapping positions in the collection." caption="54 and 35 swapping positions in the collection." %}

The two face-up cards **47** and **35** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort13-0.png" alt="47 and 35 being compared in the collection." caption="47 and 35 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort14-0.png" alt="47 and 35 swapping positions in the collection." caption="47 and 35 swapping positions in the collection." %}

The two face-up cards **29** and **35** are **in order**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort15-0.png" alt="29 and 35 being compared in the collection." caption="29 and 35 being compared in the collection." %}

### Add 67

Next we flip up the *right-most* card **54**. The next card **67** is placed to the right of our *right-most* card face-up.

The two face-up cards **54** and **67** are **in order**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort16-0.png" alt="67 placed in the collection." caption="67 placed in the collection." %}

### Add 41

Next we flip up the *right-most* card **67**. The next card **41** is placed to the right of our *right-most* card face-up.

The two face-up cards **67** and **41** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort17-0.png" alt="41 placed in the collection." caption="41 placed in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **67** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort18-0.png" alt="67 and 41 swapping positions in the collection." caption="67 and 41 swapping positions in the collection." %}

The two face-up cards **54** and **41** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort19-0.png" alt="54 and 41 being compared in the collection." caption="54 and 41 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **54** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort20-0.png" alt="54 and 41 swapping positions in the collection." caption="54 and 41 swapping positions in the collection." %}

The two face-up cards **47** and **41** are **out of order**, so here we must swap them.

{% include figure image_path="/assets/images/isort21-0.png" alt="47 and 41 being compared in the collection." caption="47 and 41 being compared in the collection." %}

After swapping, there is a face-down card to the left of our two face-up cards so we flip our right card **47** face-down and flip the card to the left face-up.

{% include figure image_path="/assets/images/isort22-0.png" alt="47 and 41 swapping positions in the collection." caption="47 and 41 swapping positions in the collection." %}

The two face-up cards **35** and **41** are **in order**, so we stop and flip them both face-down.

{% include figure image_path="/assets/images/isort23-0.png" alt="35 and 41 being compared in the collection." caption="35 and 41 being compared in the collection." %}

### Finished

We have no remaining cards in the *pile* so now we are done and can flip up all the cards to confirm they are in sorted order.

{% include figure image_path="/assets/images/isortfinal-0.png" alt="The collection being displayed face-up." caption="The collection being displayed face-up." %}

## Exercises

## Evaluation
