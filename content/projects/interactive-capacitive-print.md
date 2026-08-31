---
# ============================================================
# EDIT THIS PROJECT — then run:  npm run sync
# Full guide: content/projects/README.md
# ============================================================

# --- Show / hide / order ---
published: true
sort_order: 7
featured: true
featured_order: 4

# --- Project page ---
title: Interactive Capacitive Print
organization: Final Project — “Touching the Window”
tags: Arduino, C++, TouchDesigner, Capacitive Sensing, Screen Printing, DIY Conductive Ink, Research
lead: Printmaking meets electronics—conductive-ink surfaces as capacitive sensors that trigger sound on touch.
hero_image: images/projects/interactive-capacitive-print.png
hero_alt: Conductive-ink print from Touching the Window
role: Artist / designer
project_type: Interactive print / physical computing

# --- Homepage featured ---
home_title: Touching the Window
home_description: Conductive-ink prints that act as capacitive sensors, turning touch into sound.
home_categories: Physical Computing · Printmaking · TouchDesigner

# --- Preview card (homepage + Projects list) ---
card_year: Course Project
card_description: Conductive-ink prints as capacitive sensors that trigger sound on touch.
card_medium: Printmaking / Creative Electronics
card_tags: Arduino, TouchDesigner, Conductive Ink, Printmaking

# --- Optional: video ---
project_video:
  title: TD YVR presentation — Touching the Window
  youtube_id: EYBdnrJTZEA
  start_seconds: 270
  description: A diverse group of artists, designers, developers & hobbyists sharing knowledge and exploring TD in Vancouver 🇨🇦.
  instagram: touchdesigner.yvr
  description_note: TouchDesigner is a node-based visual programming environment developed by Derivative. It allows artists, designers, and programmers to build real-time interactive multimedia content, 3D projections, live music visuals, and complex sensor-driven installations by connecting functional blocks called operators without traditional text-based coding.

# --- Optional: PDF embed ---
project_pdf:
  title: Presentation slides
  file: ../files/touching-the-window-presentation.pdf

# --- My Approach ---
contributions:
  - Developed a DIY conductive ink (graphite, white glue, screen printing ink, water)
  - Screen-printed conductive surfaces that function as capacitive sensors
  - Built an Arduino capacitive sensing pipeline connected to TouchDesigner
  - Iterated ink ratios, layer thickness, conductivity, and printability
  - Designed interaction around touch, memory, and hidden digital response

# --- Usually leave alone ---
slug: interactive-capacitive-print
layout: layouts/project-detail.njk
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

