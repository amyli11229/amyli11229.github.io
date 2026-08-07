/**
 * Build the Eleventy site, then copy the pages GitHub Pages serves
 * from `_site/` into the repo root / `projects/`.
 *
 * Edit content in `content/projects/*.md`, then run: npm run sync
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = path.join(__dirname, "..");
const site = path.join(root, "_site");

function copyFile(fromRel, toRel) {
  const from = path.join(site, fromRel);
  const to = path.join(root, toRel);
  if (!fs.existsSync(from)) {
    console.warn(`Skip (missing): ${fromRel}`);
    return;
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  console.log(`Updated ${toRel}`);
}

console.log("Building…");
execSync("npx eleventy", { cwd: root, stdio: "inherit" });

[
  "index.html",
  "projects.html",
  "about.html",
  "contact.html",
  "cv.html",
].forEach((file) => copyFile(file, file));

const projectsDir = path.join(site, "projects");
const liveProjectsDir = path.join(root, "projects");
const builtProjects = new Set();

if (fs.existsSync(projectsDir)) {
  for (const name of fs.readdirSync(projectsDir)) {
    if (name.endsWith(".html")) {
      builtProjects.add(name);
      copyFile(path.join("projects", name), path.join("projects", name));
    }
  }
}

if (fs.existsSync(liveProjectsDir)) {
  for (const name of fs.readdirSync(liveProjectsDir)) {
    if (name.endsWith(".html") && !builtProjects.has(name)) {
      fs.unlinkSync(path.join(liveProjectsDir, name));
      console.log(`Removed stale projects/${name}`);
    }
  }
}

console.log("\nDone. Preview with npm run serve, then push when ready.");
