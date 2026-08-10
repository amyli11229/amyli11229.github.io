---
# ============================================================
# EDIT THIS PROJECT — then run:  npm run sync
# Full guide: content/projects/README.md
# ============================================================

# --- Show / hide / order ---
published: true
sort_order: 4

# --- Project page ---
title: Portfolio Management System
organization: Java Tool Application
tags: Java, Swing, OOP, JSON, MVC
lead: Personal Java desktop app for managing creative portfolios for artist research—Swing GUI and CLI over a shared model with JSON save/load.
hero_image: images/projects/portfolio-management-system.png

# --- Preview card (homepage + Projects list) ---
card_year: Course Project
card_description: Java desktop art research managment tool with Swing UI, CLI, and JSON persistence.
card_medium: Java / Visual Studio Code
card_tags: Java, Swing, OOP, JSON

# --- My Approach ---
contributions:
  - Architected an MVC-inspired Java app with model, persistence, and UI layers
  - Built Swing GUI and CLI on the same core portfolio system
  - Implemented JSON save/load with file I/O and exception handling
  - Modeled Profile, Work, and Research as first-class domain objects

# --- Usually leave alone ---
slug: portfolio-management-system
layout: layouts/project-detail.njk
---

## Overview

Portfolio Management System is a tool that I made to helps artists keep creative works and research inspirations in one local file. Users add entries, inspect profile state, and save or reload everything through JSON—via a Swing GUI or a command-line interface over the same core logic. This system was inspired by my process in artist research, having to archive different pieces of research that I've done for my artworks.

## Architecture


| Package        | Responsibility                    |
| -------------- | --------------------------------- |
| `model/`       | `Profile`, `Work`, `Research`     |
| `persistence/` | `JsonReader`, `JsonWriter`        |
| `ui/`          | `PortfolioGUI`, `PortfolioSystem` |


UI never owns storage rules. The model holds state; persistence encodes it; both interfaces call into that shared core.

## Features

- Add creative works and research inspirations
- View portfolio profile state
- Save and load portfolio data as JSON
- Desktop Swing GUI + CLI over one system



## Critical code

Wiring the shared store and portfolio model:

```java
private static final String JSON_STORE = "./data/profile.json";
private Profile profile;
private JsonWriter jsonWriter;
private JsonReader jsonReader;

public PortfolioSystem() throws FileNotFoundException {
    profile = new Profile("My Profile");
    jsonWriter = new JsonWriter(JSON_STORE);
    jsonReader = new JsonReader(JSON_STORE);
    runPortfolio();
}
```

Persisting and restoring state with explicit failure handling:

```java
public void saveFile() {
    try {
        jsonWriter.open();
        jsonWriter.write(profile);
        jsonWriter.close();
        System.out.println("Saved " + profile.getUserName() + " to " + JSON_STORE);
    } catch (FileNotFoundException e) {
        System.out.println("Unable to write to file: " + JSON_STORE);
    }
}

public void loadFile() {
    try {
        profile = jsonReader.read();
        System.out.println("Loaded " + profile.getUserName() + " from " + JSON_STORE);
    } catch (IOException e) {
        System.out.println("Unable to read from file: " + JSON_STORE);
    }
}
```

Creating domain objects and updating the profile:

```java
Work addedWork = new Work(workName, imageURL, workDescription);
profile.addWork(addedWork);
```



## Design notes

- Separated model, persistence, and UI so GUI and CLI stay thin
- Used JSON for readable local persistence without a database
- Treated works and research as distinct types to match the artist workflow



## Future improvements

- Richer work metadata and search
- Image attachments
- Automated tests for model and persistence
- Visual polish for the Swing UI

