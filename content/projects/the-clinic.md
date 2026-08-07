---
# ============================================================
# EDIT THIS PROJECT — then run:  npm run sync
# Full guide: content/projects/README.md
# ============================================================

# --- Show / hide / order ---
published: true
sort_order: 6

# --- Project page ---
title: The Clinic
organization: Interactive Installation / TouchDesigner
tags: TouchDesigner, Blender, Projection Mapping, Motion Tracking, Audio-visual
lead: An interactive sculptural installation that turns a women's clinic waiting room into a liminal space—where participation quietly rewrites the room, the media, and the mood.
hero_image: images/projects/the-clinic.png

# --- Preview card (homepage + Projects list) ---
card_year: Course Project
card_description: Interactive waiting-room installation exploring liminality, medical anxiety, and women's healthcare through TouchDesigner, projection, and motion tracking.
card_medium: Interactive Installation / TouchDesigner

# --- Usually leave alone ---
slug: the-clinic
layout: layouts/project-detail.njk
---

## Project Overview

*The Women's Clinic* is an interactive sculptural installation exploring liminality, anxiety, anticipation, and women's healthcare experiences. Visitors enter what looks like a familiar waiting room—then discover that a single gesture can tip the space from quiet unease into something more distorted and confrontational.

The piece sits at the intersection of installation art, interaction design, and real-time media systems. Soft institutional cues and restrained audiovisual design hold the room in a tense pause; participation becomes the mechanism that reveals what the space has been holding back.

## Concept & Artistic Intent

The waiting room is a liminal threshold: between arrival and care, uncertainty and action, private anxiety and public systems. The clinic appears ordinary—chairs slightly misaligned, soft light, muted news on a television—but something is already wrong. Time behaves strangely. The vending machine is nearly empty. The atmosphere is familiar and hard to place at once.

Conceptually, the work asks how issues around women's health and bodily autonomy can remain ambient or invisible until they are directly confronted. The room stages that delay. Raising a hand—against the instruction not to—breaks the equilibrium. Distortion, flicker, and intensified imagery make the underlying tension visible, linking personal hesitation to broader institutional and social pressure.

## Research & Inspirations

### The Backrooms and liminal horror

Liminal horror thrives on repetition, emptiness, and missing context. The clinic borrows that logic: a space viewers recognize, but cannot fully locate in time or narrative. Slight misalignment and emptiness do more work than spectacle.

### Analogue horror

Analogue horror uses mundane environments, degraded media, and audiovisual decay to build psychological tension. The installation leans on muted footage, distorted sound, and institutional texture rather than jump-scare grammar—discomfort accumulates through atmosphere and timing.

### Medical anxiety and institutional liminality

Waiting rooms encode bureaucracy, uncertainty, and loss of control. Here, that architecture becomes a stage for anxiety that is both intimate and systemic—personal experience folded into institutional form.

### Women's health clinics and reproductive rights history

Pamphlets, posters, and television footage ground the piece in histories of healthcare access and bodily autonomy. Visual materials reference public struggle and private waiting as parallel conditions.

### Participation and psychological framing

The instruction *Don't raise your hand. Don't ask a question.* sets a behavioral frame. Visitors who break it experience the consequences of participation: the room answers, and the cost of speaking—or refusing to speak—becomes part of the work.

## Interactive Experience

The installation opens as a quiet women's clinic waiting room:

- Empty chairs, slightly misaligned
- A clock with abnormal time behavior
- Women's health pamphlets and posters
- A mostly empty vending machine
- A television playing muted women's rights news footage
- Soft lighting and subtle environmental sound

When a visitor raises their hand, camera-based tracking triggers a transformation:

- The room warps into a more unsettling state
- TV imagery intensifies—protest and rights footage pushing forward
- Objects appear cracked, warped, or unstable
- Clock behavior shifts again
- Audio distorts; lights flicker

The interaction is deliberately simple. One readable gesture toggles the system's emotional register, so meaning comes from *when* and *why* someone participates—not from learning a complex interface.

## Technical Process

TouchDesigner is the central real-time system, coordinating environment states, media playback, distortion effects, and response to tracking input. The spatial experience is delivered through multi-channel projection, with asset work and scene construction supporting a cohesive clinic environment across screens.

Hand detection uses camera-based motion tracking so visitors can trigger the transformation without controllers or explicit UI. Audio runs as a parallel channel—ambient waiting-room tone in the calm state, then degradation and intensity as the room shifts—so sound and image stay locked to the same interaction logic.

## My Contributions

- Created and edited 3D assets for the clinic environment
- Built the interactive experience in TouchDesigner, including state changes and media logic
- Worked on projection mapping and multi-channel media output
- Designed hand-raise interaction logic and system integration with camera tracking
- Helped optimize the installation pipeline and technical workflow for live presentation

## Installation Setup

The piece was presented with multiple projectors in ACC 1002, driven from a Mac Mini for multi-channel output. The pipeline brought together projection mapping, camera tracking, and synchronized audiovisual states so the waiting room could hold as a continuous spatial composition rather than a single screen.

The system is structured for live installation constraints: stable playback, clear trigger thresholds, and room-scale media that remains legible under soft institutional lighting. Arduino-based sensing remains a possible extension for additional environmental or proximity inputs.

## Reflection / Outcome

*The Clinic* treats interaction as dramaturgy. The technical stack—TouchDesigner, tracking, projection, audio—exists to time a psychological shift: from ambient unease to confrontation. Building the piece meant balancing artistic references (liminal and analogue horror, medical institutional space) with interaction design that stays readable in a shared room.

The outcome is a system where participation is both invitation and pressure. By making the waiting room respond to a raised hand, the installation turns a familiar threshold into an argument about visibility—what stays quiet until someone chooses to act inside it.
