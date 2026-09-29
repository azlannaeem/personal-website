---
title: "Custom Threading Library"
description: "A preemptive user-level threading library in C with context switching, scheduling, and synchronization built on POSIX signals."
category: "systems"
stack: ["C", "POSIX", "x86-64"]
repoUrl: "https://github.com/azlannaeem"
featured: true
date: 2024-10-01
---

## Overview

Built a preemptive user-level threading library in C from scratch, implementing
context switching, thread creation, scheduling, mutex locks, and synchronization
using POSIX signals — no OS-level thread support relied on.

## Highlights

- Implemented FCFS and priority-based schedulers with blocking/wakeup
  mechanisms for concurrent execution.
- Handled preemption via POSIX signal handlers and manual context switches at
  the x86-64 register level.
