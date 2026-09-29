---
title: "Gait"
description: "A security tool that analyzes access logs to tell whether an account is being operated by a person, an AI agent, or an automated bot, and flags accounts that start behaving out of character."
category: "ml"
status: "in-progress"
stack: ["Python", "XGBoost", "scikit-learn", "FastAPI", "React", "Docker", "AWS S3", "Snowflake", "Anyscale"]
featured: true
date: 2026-09-01
---

## Overview

AI agents increasingly act inside company systems, often through an employee's own
credentials, which makes their activity look like a person's in the logs. Identity
platforms are starting to register AI agents as their own class of identity, but that
only covers agents someone chose to register — an agent running through a person's
credentials, or deployed without approval, shows up as an ordinary user. Security
teams have no easy way to tell the difference.

Gait is a detection tool for security analysts that infers who, or what, is behind an
account from how it behaves: classifying each identity as a person, an AI agent, or a
traditional bot, learning each account's normal behavior, and flagging sudden changes.

This is a CSC490 capstone project (ML engineering) at the University of Toronto, Fall
2026, with a team of 3. It's currently in the planning and early build phase — nothing
below is built or measured yet.

## Planned approach

- **Actor classification**: predict whether a person, an AI agent, or a traditional bot
  is operating an account, from behavioral features like request frequency, timing,
  session patterns, and which systems are accessed.
- **Behavioral baselines**: learn each account's normal activity and flag deviations,
  such as reaching unfamiliar systems or requesting at an unusual rate.
- **Calibrated confidence**: confidence scores calibrated to reflect how often
  predictions are actually correct.
- **Evidence for every result**: each flag comes with the specific behavior that
  triggered it, not a black-box score.
- **Analyst-in-the-loop**: Gait detects and explains; it never blocks access on its own.

## My role

I'm focused on the machine learning side — training and calibrating the actor
classifier — and on the security side, red-teaming the models by testing how easily an
AI agent can disguise itself as a human in the logs.
