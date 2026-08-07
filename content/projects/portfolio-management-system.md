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
organization: Java Desktop Application
tags: Java, Swing, OOP, JSON, MVC
lead: A Java desktop application for managing creative portfolios—add works and research, view profile state, and persist data with JSON through a Swing GUI and CLI built on a shared object model.
hero_image: images/projects/portfolio-management-system.png

# --- Preview card (homepage + Projects list) ---
card_year: Course Project
card_description: A Java desktop app for managing creative portfolios—add works and research, view profile data, and persist everything with JSON save/load through a Swing GUI.
card_description_home: A Java desktop app for managing creative portfolios—works, research, and JSON persistence through a Swing interface.
card_medium: Desktop Application / Software Engineering
card_medium_home: Java / Desktop App
card_tags: Java, Swing, OOP, JSON

# --- Key contributions ---
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

Portfolio Management System helps artists keep creative works and research inspirations in one local app. Users add entries, inspect profile state, and save or reload everything through JSON—via a Swing GUI or a command-line interface over the same core logic.

## Architecture

| Package | Responsibility |
|---------|----------------|
| `model/` | `Profile`, `Work`, `Research` |
| `persistence/` | `JsonReader`, `JsonWriter` |
| `ui/` | `PortfolioGUI`, `PortfolioSystem` |

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
