---
# ─── EDIT GUIDE ─────────────────────────────────────────────
# title ............... Project name (page heading)
# lead .............. First paragraph on the project page
# organization ...... Course/org line under the title
# tags .............. Tools on the project page
# card_* ............ Preview box on homepage / Projects list (before click)
# slug .............. URL name → projects/THIS-NAME.html (rarely change)
# layout ............ Do not edit
# See content/projects/README.md for full guide
title: Interactive Capacitive Print
slug: interactive-capacitive-print
sort_order: 5
published: true
layout: layouts/project-detail.njk
hero_image: images/projects/interactive-capacitive-print.png
card_year: Lab
card_title_home: Interactive Capacitive Print
card_description: Conductive ink prints as capacitive touch sensors—turning printed surfaces into interactive interfaces that trigger sound through touch.
card_description_home: Conductive ink prints as capacitive sensors—transforming printed surfaces into interactive interfaces that respond to touch with sound.
card_medium: Final Project — Touching the Window
card_medium_home: Printmaking / Creative Electronics
card_tags: Arduino, TouchDesigner, Conductive Ink, Printmaking
organization: Final Project — “Touching the Window”
tags: Arduino, TouchDesigner, Capacitive Sensing, Screen Printing, DIY Conductive Ink
lead: In this project, I explore the combination of printmaking and creative electronics, transforming printed surfaces into interactive interfaces. Using conductive ink prints as capacitive touch sensors, the work investigates how physical touch can activate digital responses—triggering sound and allowing static images to become responsive systems.
contributions:
  - Developed a DIY conductive ink (graphite, white glue, screen printing ink, water)
  - Screen-printed conductive surfaces that function as capacitive sensors
  - Built an Arduino capacitive sensing pipeline connected to TouchDesigner
  - Iterated ink ratios, layer thickness, conductivity, and printability
  - Designed interaction around touch, memory, and hidden digital response
---

## Artist statement

“Touching the Window” considers the printed surface as both image and interface. The work is inspired by the window in my home between 2019 and 2024, a period during which I spent an extended amount of time indoors during the COVID-19 pandemic. At first, staying at home with my family felt comforting, even enjoyable. Over time, however, that feeling shifted, and the experience became more difficult and limiting. I often found myself wishing I had done more during that period, though I have come to accept it as it was.

Using a coded system in TouchDesigner with Arduino that triggers output through touch, the project reflects on hidden layers embedded within visual forms. The window, once something to look through, becomes something to touch—transforming passive observation into active interaction. In this way, the work connects memory, material, and interface, allowing touch to reveal what is otherwise unseen.

## Materials & process

The project involved the development of a DIY conductive ink composed of graphite powder as the conductive material, combined with white glue and screen printing ink as binders, with water added to adjust viscosity.

Printmaking techniques were used to apply this ink onto paper surfaces. These printed elements were then integrated with an Arduino-based capacitive sensing system. In this setup, the print itself functions as the interface, eliminating the need for visible buttons.

The work emphasizes the relationship between touch, materiality, and hidden digital responses, particularly through sound.

## Key experimentation

- Tested different ink ratios (graphite vs binder)
- Explored conductivity, printability, and surface texture
- Created multiple samples and iterations

## Major challenge

An initial challenge was that the ink did not conduct electricity as expected. Further investigation revealed that the issue was not solely related to the material composition, but also to the thickness of the printed layer.

Thin applications of ink failed to create a continuous conductive path, while thicker or layered prints significantly improved conductivity. This finding became a key turning point in the development of the project.

## Technical system

The project uses capacitive sensing through an Arduino system. The conductive print acts as the sensor surface, and touch alters its capacitance. This change is detected by the Arduino, which then triggers an audio output. The interaction follows a simple pipeline:

**Touch → Signal → Arduino Processing → Sound Output**

## Future improvements

- Improve setup efficiency (faster, more reliable)
- Expand and refine the audio system
- Clearer interaction signifiers for audience
- Improve durability of the printed surface
- Explore protective layers / alternative materials
- Better documentation (process + results)

## References

- CapacitiveSensor — Arduino Library
- Soft Inkjet Circuits: Rapid Multi-Material Fabrication of Soft Circuits
- An introduction to printed electronics
- Screen-printed electrodes
- Conductive inks for printed electronics
- PaperID: A Technique for Drawing Functional Battery-Free Wireless Interfaces on Paper
- Building a Capacitive Sensor with Arduino
