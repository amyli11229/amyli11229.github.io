---
# ============================================================
# EDIT THIS PROJECT — then run:  npm run sync
# Full guide: content/projects/README.md
# ============================================================

# --- Show / hide / order ---
published: true
sort_order: 2
featured: true
featured_order: 2

# --- Project page ---
title: Soil Science Viewer
organization: EML Research & Visualization Project
tags: Figma, Gaussian Splatting, GitHub, User Testing
lead: Making complex 3D soil data easier to explore
hero_image: images/projects/soil-science-viewer.png
hero_alt: Soil Science Viewer interface showing a 3D Gaussian Splat soil scan with location list and orbit controls
role: Sole UI/UX Designer
project_type: Research / Data Visualization
year: September 2025 – April 2026
team: Emerging Media Lab — UBC Department of Soil Science, researchers and developers.
bodyClass: case-study

# --- Homepage featured ---
home_title: Soil Science Viewer
home_description: Making complex 3D soil data easier to explore—a web viewer for Gaussian Splat soil scans.
home_categories: 3D Visualization · Gaussian Splatting · Interface Design

# --- Preview card (homepage + Projects list) ---
card_year: Work Project
card_title_home: Soil Science Viewer
card_description: UI for exploring Gaussian Splat soil scans in 3D—clearer navigation for research and education.
card_medium: Research / Data Visualization

# --- Case study framing ---
psr:
  problem:
    title: A technically complex dataset
    text: A Gaussian Splat scan can hold an enormous amount of visual information. Without clear controls and orientation, rotating, zooming, and moving through 3D soil quickly becomes hard to understand—especially for people who are not 3D or visualization experts.
  solution:
    title: An interface that gets out of the way
    text: I designed around the user's mental model, not the technical capabilities of the viewer. The work was to figure out what people needed to see, what they needed to understand, and how the interface could support exploration without competing with the data.
  result:
    title: A more approachable viewer
    text: The live web viewer at virtualsoils.ca lets researchers and students move through high-resolution soil scans with clearer navigation, organized controls, and an interaction system shaped by testing.

impact:
  - value: 1
    title: Designer
    note: Sole UI/UX between researchers and developers
  - value: Live
    title: Web viewer
    note: Exploring Gaussian Splat soil scans at virtualsoils.ca
  - value: UBC
    title: Soil Science
    note: Built with Emerging Media Lab and the Department of Soil Science

# --- Optional: download / visit button ---
prototype_callout:
  title: Live project
  text: "Explore the Virtual Soils viewer online:"
  link_label: virtualsoils.ca
  link_url: https://virtualsoils.ca/
  button_label: Visit Virtual Soils
  button_url: https://virtualsoils.ca/

# --- Optional: extra links ---
external_links:
  - label: Virtual Soils website
    url: https://virtualsoils.ca/
  - label: Learn more about Virtual Soil
    url: https://eml.ubc.ca/projects/virtual-soils/

# --- Usually leave alone ---
slug: soil-science-viewer
layout: layouts/project-detail.njk
---

<p class="case-label">Context</p>

## How do you make complex 3D scientific data feel approachable?

*Soil Science Viewer* is a web-based visualization tool for exploring high-resolution soil scans using Gaussian Splatting. As the sole UI/UX designer, I worked between researchers and developers to turn a technically complex dataset into an interface that was easier to navigate, understand, and explore.

The challenge wasn't simply to make the viewer look clean.

It was to figure out **what users needed to see, what they needed to understand, and how the interface could get out of their way while they explored the data.**

<p class="case-label">Problem</p>

## Starting with a complex dataset

The original challenge came from the nature of the data itself.

A Gaussian Splat scan can contain an enormous amount of visual information. Users can rotate, zoom, and move through a three-dimensional representation of soil, but without clear controls and orientation, the viewer can quickly become difficult to understand.

I began by breaking the experience down into the fundamental questions a user might have:

<div class="case-questions">
<p>Where am I?</p>
<p>What am I looking at?</p>
<p>How do I move through it?</p>
<p>What can I interact with?</p>
<p>How do I get back if I lose my position?</p>
</div>

These questions became the foundation for the navigation and interaction system.

<p class="case-label">Goals + North Star</p>

<div class="case-split">

<div class="case-split-main">

## Designing for people who aren't 3D experts

Rather than designing around the technical capabilities of the visualization, I focused on designing around the user's mental model.

The goal was not to hide the complexity of the data, but to **make that complexity easier to approach.**

</div>

<div class="case-split-side">

<p><strong>Organize.</strong> Could controls sit around the actions people needed most?</p>
<p><strong>Communicate.</strong> Was navigation understandable without becoming another layer of noise?</p>
<p><strong>Focus.</strong> Did the 3D view stay the main attraction?</p>
<p><strong>Discover.</strong> Were important actions still easy to find?</p>

</div>

</div>

<p class="case-label">Process + Key Insights</p>

## Design → build → test → identify friction → revise

Designing the interface was only one part of the problem.

Because the viewer was being developed collaboratively, I worked directly with developers to understand what was technically possible and how the design would translate into the actual web experience.

I created and iterated on prototypes in Figma, discussed interaction behaviour with the development team, and refined designs as implementation revealed new constraints.

Instead of treating the handoff as the end of the design process, I stayed involved throughout implementation.

As the viewer developed, I used feedback and observation to identify where users were having difficulty. I looked at more than whether someone could successfully operate the viewer. I paid attention to moments of hesitation, confusion, and unnecessary effort.

<div class="case-insights">
<div class="case-insight">
<p class="case-insight-num">01</p>
<h3>Discovery is the first barrier</h3>
<p>Where people looked first—and which controls they missed—mattered more than whether a feature technically existed.</p>
</div>
<div class="case-insight">
<p class="case-insight-num">02</p>
<h3>Navigation has to feel predictable</h3>
<p>Moving through a splat is easy to get lost in. People needed to trust how orbit, fly, and reset would behave.</p>
</div>
<div class="case-insight">
<p class="case-insight-num">03</p>
<h3>The interface must explain the 3D view</h3>
<p>Users had to understand the relationship between controls and the environment, then find their way back if they lost their position.</p>
</div>
</div>

Small changes to hierarchy, labeling, control placement, and navigation could make a significant difference in how confidently someone explored the visualization.

<p class="case-label">Design 1/3</p>

## Designing the interface around the data

One of the most important design decisions was balancing **interface clarity with visual immersion**.

The 3D soil scan is the reason users are on the page in the first place. Too much UI would compete with the visualization; too little would leave users without enough guidance.

I therefore treated the interface as a supporting layer rather than the main attraction.

Controls were organized around the actions users needed most, while secondary information remained available without constantly competing for attention.

This helped create a viewer where the interface supports exploration rather than becoming another problem users have to solve.

<p class="case-label">Design 2/3</p>

## From prototype to implementation

I explored different ways of organizing controls, communicating navigation, and presenting information without overwhelming the 3D view.

Through prototyping and iteration, I simplified the interface so that the visualization remained the focus while important actions were still easy to discover.

Implementation kept revealing new constraints. That made the loop essential: **design, build, test, identify friction, revise, and build again.**

<p class="case-label">Design 3/3</p>

## Collaborating across design and research

Working as the sole designer also meant taking responsibility for translating between different perspectives.

Researchers brought questions about how the soil data should be presented and explored. Developers understood the underlying visualization technology and implementation constraints. My role was to connect these requirements to the experience of the person actually using the viewer.

Sometimes that meant advocating for a usability improvement. Other times, it meant adapting a design to a technical limitation or finding a simpler solution that achieved the same goal.

The process taught me that good UX in research environments isn't about designing in isolation.

It is about **asking the right questions, communicating clearly, and finding a solution that works for both the people using the tool and the people building it.**

<p class="case-label">The Result</p>

## A viewer that makes the data easier to approach

The final result is a web-based viewer that allows users to explore Gaussian Splat soil scans through a more accessible interaction system.

My work established:

- **Navigation & interaction** — clearer ways to move through and interact with 3D soil scans
- **Information architecture** — organized controls and information around user needs
- **Usability** — identified and addressed points of confusion and interaction friction
- **Accessibility** — considered the needs of non-technical users interacting with scientific data
- **Design systems** — developed consistent interface patterns and prototypes in Figma
- **Implementation collaboration** — worked directly with developers throughout development

<figure class="case-media">
<img src="../images/projects/virtual-soils-poster.png" alt="Virtual Soils project poster for Winter 2025–2026 from UBC Emerging Media Lab" width="1024" height="768" loading="lazy" decoding="async">
<figcaption>Project poster — Winter 2025–2026. Purpose, stack, design approach, architecture, and the EML student team.</figcaption>
</figure>

<p class="case-label">Reflections</p>

## Build a bridge, not just a visualization

The project changed how I think about scientific visualization.

The hardest part isn't necessarily visualizing the data.

It is **building a bridge between the complexity of the data and the simplicity users need in order to understand it.**
