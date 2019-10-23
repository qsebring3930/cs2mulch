---
title: Quicksort Algorithm
permalink: /tree/quicksort/
toc: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the quicksort algorithm, which uses a pivot element to recursively sort a deck of cards quickly.

## Materials

1 Before the Birds deck consisting of 69 cards, each with a
unique number from 01 to 69.

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and deal them face-down
in a row in front of them,
as shown below. These will define their initial *collection* of cards.

![dealt cards](cards)

## Linked-List Based Algorithm

First, flip up the right-most card of your current *collection*. This will be the  *pivot* element.

![dealt cards](cards)

Next, you will be determining the new location of each card to the
left of the pivot card, one by one.

To determine the new location of a card, first flip it face-up.

* If the number on this card is greater than the number on the pivot card,
  move the card face-down to the right of the pivot card.

  When moving the card, if there
  are already cards to the right of the pivot card, place the card to the
  right of the right-most card.

![dealt cards](cards)

* Otherwise, if the number on the card is less than
  the number on the pivot card, leave this card where it is (on the
  left of the pivot card) and move on to the next card.

![dealt cards](cards)

Once all cards have been examined and potentially moved,
shift the cards on either side of the pivot card close to each other,
and slightly away from the pivot.

![dealt cards](cards)

You now have two new *collections*,
one to the left of the pivot, and one to the right of the pivot!

Tilt the pivot card to a 45 degree angle to mark this separation.

![dealt cards](cards)

Now, for each new collection that has more than one card, repeat the above
steps of flipping a new pivot element, and moving cards to their
correct side of the pivot.

When all the cards are face-up, they should be in sorted order!

![dealt cards](cards)

## Array-based Algorithm

Flip up the right-most card of your current *collection*. This will be the  *pivot* element.

![dealt cards](cards)

Move the pivot element below the left-most card, and flip this left-most card
face-up.

If the number on this
card is less than or equal to the number on the pivot card, keep it face up.

Now, move the pivot element one card to the right, and repeat the above rule.
Additionally when you keep a card face-up, if there are face-down
cards to the left of current card, swap this card with the
left-most face-down card.

Keep repeating the above steps until you have examined every card
in the collection.

Place the pivot card on the right of the collection.

Now, swap the pivot card with the left-most face-down card.

Shift the cards to the left of the pivot element slightly to the left,
and shift the cards to the right of the pivot element slightly to the right.
These two sets are now new *collections*.

For each collection that is more than one card, repeat the above
instructions.

Now, flip all the cards face-up. They should be in sorted order!

## Exercises

If you were given the nine cards shown below, what would be their
arrangement after one pass through the linked-list based algorithm
described above?

## Evaluation
