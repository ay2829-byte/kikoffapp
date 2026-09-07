# Kikoff, redesigned for clarity

A concept redesign of three screens in a credit-building app, built after
reading through public reviews (Trustpilot, BBB, App Store) of the current
Kikoff app.

## Why these three screens

- **Home** — shows the score plus the specific factors moving it, and
  surfaces the next payment date up front instead of burying it in settings.
- **Before you cancel** — the single most common complaint in reviews was
  not knowing what happens after cancelling, or getting charged again
  anyway. This screen states the timeline and the next charge status
  plainly before the user commits.
- **Goal reached** — many users plateau and stop opening the app once they
  hit their target score. This screen gives them a next target and two
  concrete actions instead of ending the journey.

## Stack

Plain HTML, CSS, and no JavaScript framework. No build step.

## Running it

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

Then visit `localhost:8080`.

## Note

This is an unaffiliated concept project. It is not built with, endorsed
by, or using any real Kikoff data, design assets, or code.
