---
title: Binary Search Tree Rotation Algorithm
permalink: /tree/rotation/
toc: true
toc_sticky: true
sidebar:
  nav: "tree"
---

## Goals

Students will understand elements of the rotation algorithm
for binary search trees.

## Video

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/OEo1GE6U2vg?si=R0DbpDRmcno0WsEv' frameborder='0' allowfullscreen></iframe></div>

## Materials

One deck of [Acorn]({{site.baseurl}}/tree) cards.

{% include figure image_path="/assets/images/bg.png" alt="this is a placeholder image" caption="Sample cards from the Acorn deck." %}

## Setup

Shuffle the deck and deal each student 9 cards.

Each student will shuffle their 9 cards, and then create a
binary tree as demonstrated on the
[insertion algorithm]({{site.baseurl}}/tree/insertion) page.

{% include figure image_path="/assets/images/insert9.png" alt="this is a placeholder image" caption="Sample tree created by insertion algorithm." %}

## Algorithm

The card chosen to be rotated is our *root* card. The child of the *root* card on the *opposite side of rotation* is the *pivot* card, ex. the left child for a right rotation.

1. Replace the *side of rotation* child of the *pivot* card with the *root* card. Keep all of the *root* card children on the *side of rotation* intact. Set aside the *side of rotation* child and keep all of the children intact.

2. Place the *side of rotation* child of the *pivot* card that was replaced in step 1 as the *opposite side of rotation* child of the *root* card.


## Example

This is an example of a right-side rotation of the root **35** of our tree.

Since this is a *right*-side rotation, the *left* child of our root, **25** is the *pivot* card.

{% include figure image_path="/assets/images/bst-rotation0.png" alt="Sample tree created by insertion algorithm." caption="Sample tree created by insertion algorithm." %}

The *side of rotation* child **29** of the *pivot* card **25** is replaced by the *root* card **35**, with all of the *root* card's children intact. **29** has no children so only itself is set aside.

{% include figure image_path="/assets/images/bst-rotation1.png" alt="29 set aside, 35 and its children take its place." caption="29 set aside, 35 and its children take its place." %}

The *side of rotation* child **29** is placed as the *opposite side of rotation* child of the *root* card.

{% include figure image_path="/assets/images/bst-rotation2.png" alt="29 placed as the opposite side of rotation child of 35." caption="29 placed as the opposite side of rotation child of 35." %}


## Exercises


## Evaluation
