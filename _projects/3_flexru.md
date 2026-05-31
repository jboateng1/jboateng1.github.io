---
layout: page
title: FlexRU
description: <i class="fa-solid fa-network-wired"></i>&nbsp; A flexible, lightweight radio-unit sharing framework for fully-programmable 5G/6G
img: assets/img/11.jpg
importance: 3
category: systems
related_publications: true
---

> **FlexRU** is a framework that lets *multiple independent 5G RAN instances* share a single physical radio unit (RU) — preserving slice isolation and timing correctness, at a fraction of the deployment cost.

#### <i class="fa-solid fa-bullseye"></i>&nbsp; Why this matters

The radio unit accounts for roughly **80% of the cost** of a cellular base station. In rural and underserved regions, that cost is the binding constraint on coverage. If we can let several operators or slices safely share one RU, the economics of community-scale 5G change completely.

#### <i class="fa-solid fa-screwdriver-wrench"></i>&nbsp; Design

- **Composite baseband multiplexing:** FlexRU combines 5G baseband signals from independent RAN instances into a single wideband signal that a shared RU transmits over the air.
- **Slice isolation:** strict per-slice resource fencing so one tenant cannot starve or interfere with another.
- **Timing correctness:** preserves the µs-level 5G NR slot alignment each independent RAN expects.
- **Open and lightweight:** runs against open-source RAN stacks (OAI, srsRAN) on commodity SDRs.

#### <i class="fa-solid fa-chart-line"></i>&nbsp; Toward multi-tenant private 5G

FlexRU is the architectural piece that makes **multi-tenant private 5G** practical for precision agriculture, rural broadband, and community networks — the use cases where dedicated per-operator RUs are economically out of reach.

#### <i class="fa-solid fa-link"></i>&nbsp; Status

- <i class="fa-solid fa-hourglass-half"></i> **Manuscript under review (2026).** Pre-print available upon request.
