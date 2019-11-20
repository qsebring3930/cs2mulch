---
title: Before The Birds
permalink: /tree/btb/
toc: true
sidebar:
  nav: "tree"
---

## Overview

In *Before The Birds*, players are squirrels collecting acorns for the winter. Players compete to collect acorns from the ground, looking for acorns that can be **efficiently stored** and will **ripen together**. The player with the best collection wins the game!

* 3-7 Players
* 10 Minutes

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the deck." %}

## Initial Setup

Shuffle the full deck of cards and **deal 9 cards** face-down to each player. These cards will be the player's **Hand**. Players may look at the cards in their Hand.

Turn **one card per player** face-up to
form the initial **Ground**. Sort these Ground cards, *from lowest to highest*, and place them in a row in the middle of the table.

The remaining cards are discarded from the game.

{% include figure image_path="/assets/images/ground.png" alt="this is a placeholder image" caption="Sample initial Ground in 4-player game." %}

## Rules

The game has 9 rounds, which consist of **Collection** and **Storage**.

### Collection

First, players will simultaneously and secretly select one card from their Hand to **bid** for a Ground card, placing it face-down in front of them.  When all players have selected a card, these bid cards are **revealed face-up simultaneously**.

The player who bid the *lowest* card collects the *lowest* Ground card, and must add it to their tree according to the **Storage** section rules. The player who bid the *second-lowest* card collects the *second-lowest* Ground card, etc. for each player’s bid.

{% include figure image_path="/assets/images/turns.png" alt="this is a placeholder image" caption="Figure showing what player collects which card. 18 is the lowest card played this round, so this player collects the 03 card. 33 is the second-lowest card played, so this player collects the 25 card, etc. " %}

As a player collects a Ground card, they should replace it in the Ground with their **bid card**. In this way, the bid cards become the Ground for the *next round*.

{% include figure image_path="/assets/images/newground.png" alt="this is a placeholder image" caption="New Ground for second round in 4-player game." %}

### Storage

Squirrels store their acorns in a peculiar way. To store an acorn in the **first** round, players place their collected card face-up in front of them.  This first card is called the **root** of their storage.

For all subsequent rounds, players **start with the root** as their *current* card and repeatedly try to find the right place to bury the collected card using the following rules:

* If the collected card is **less than** the *current* card, look at the **upper-left** corner of the *current* card. Otherwise, the collected card must be **greater than** the *current* card, so look at the **upper-right** corner of the *current* card.

* If a card is *found* where you are looking, **repeat the above step again**, with the *found* card becoming the *current* card next time around.

* Otherwise, if there is *no card* where you are looking, **place the collected card on this corner**, tilted roughly 45 degrees from the *current* card.  

Continue playing rounds until all players have empty Hands.

{% include figure image_path="/assets/images/insert6.png" alt="this is a placeholder image" caption="An example of where to place 26. 25 is the root. 26 is greater than 25, so we look right. Now, 26 is less than 44, so we look left. There is no card left, so we place the 26 here." %}

## Final Scoring

A player’s score is determined by two properties of their collection: the **length** of their storage, and the **time** when their acorns ripen.

* **Length**: Count the number of cards on the *longest possible path* a squirrel could take according to the Storage section.

* **Color**: The acorns are colored with seven different colors: Red, Green, Blue, Orange, Yellow, Purple, and White. Count
the number of **different** colors in the tree.

Sum these two values, and the player with the **lowest** score is the winner!

## Scoring Example

In this collection, the player stored acorns efficiently,
but the color difference was large.

{% include figure image_path="/assets/images/insert9.png" alt="this is a placeholder image" caption="How to score a collection." %}

* Length	=  4  (25 to 44 to 26 to 33)

* Color 	=  4  (Yellow, Purple, Green, Blue)

Final Score: 4 + 4 = 8

## Variants

### Game Length

Players can agree upon a **scoring limit**, such as 25 points.
Over multiple games, players accumulate points until at least
one player has earned over the scoring limit. The player with
the lowest **total** score is the winner.

### Strategy

Games with a smaller number of players can reduce the number of
cards used according to the table below.

|Players|Cards To Use|
|:--:|:--:|
|3   |00-29|
|4   |00-39|
|5   |00-49|
|6   |00-59|
|7   |00-69|

## Science Background

Research shows that squirrels actually use
[spatial chunking](https://animals.howstuffworks.com/mammals/squirrels-really-organize-nuts.htm)
to organize nuts!

The way acorns are stored in this game is called a
[binary search tree](https://en.wikipedia.org/wiki/Binary_tree).
Computer scientists use structures like this to efficiently store data in a program.

## Acknowlegements

Thanks to Laura Goadrich, Ryan Goadrich, Gabe Ferrer, the Little
Rock Game Designers for graphic design advice, and to
CSC 234 and CSCI 151 students for early playtesting.

All images in this game were modified from models found at
[SVGRepo](https://www.svgrepo.com/), licensed for use under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
