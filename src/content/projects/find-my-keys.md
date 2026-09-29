---
title: "Find My Keys"
description: "Full-stack personal item locator using YOLO object detection and voice transcription for image- and voice-based retrieval."
category: "ml"
stack: ["Python", "Flask", "React Native", "SQLite", "Docker", "YOLO", "AWS", "Socket.io"]
repoUrl: "https://github.com/azlannaeem"
featured: true
date: 2024-12-01
---

## Overview

A full-stack personal item locator built with a Python/Flask backend and a
TypeScript/React Native frontend, integrating YOLO object detection and voice
transcription so users can find items by describing or photographing them.

## Highlights

- Built the ML inference pipeline for object detection and integrated AWS S3
  and SQLite for image storage and application data.
- Used Socket.io for real-time communication between client and server during
  detection and voice-command flows.
- Implemented JWT authentication with refresh tokens and token blocklisting.
- Wrote pytest coverage for authentication, detection, and voice-command
  endpoints, wired into GitHub Actions CI/CD.
