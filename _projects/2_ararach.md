---
layout: page
title: AraRACH
description: <i class="fa-solid fa-trophy" style="color:#d4a017;"></i>&nbsp; Reliable 5G random access for open-source RAN — <em>Best Paper, IEEE NetSoft 2025</em>
img: assets/img/10.jpg
importance: 2
category: systems
related_publications: true
---

> **AraRACH** is a _timing-aware scheduling_ mechanism that significantly improves the reliability of the 5G random-access channel (RACH) in open-source RAN stacks — under real-world outdoor conditions.

<div class="alert alert-warning d-flex align-items-center" role="alert" style="background: linear-gradient(90deg, #fff3cd, #ffe69c); border: none; border-left: 4px solid #d4a017;">
  <i class="fa-solid fa-trophy fa-2x me-3" style="color: #b45309;"></i>
  <div>
    <strong>Best Paper Award</strong> &middot; 11th IEEE International Conference on Network Softwarization (NetSoft), Budapest, June 2025.
  </div>
</div>

#### <i class="fa-solid fa-bullseye"></i>&nbsp; The problem

RACH is the procedure a phone uses to first reach a base station — without it, nothing else happens. In commercial 5G it's invisible; in open-source RAN deployed outdoors, it silently fails. We measured RACH success rates as low as **~40%** in real ARA deployments because of timing misalignment and scheduling inefficiencies that toy testbeds never reveal.

#### <i class="fa-solid fa-screwdriver-wrench"></i>&nbsp; What we built

- A measurement campaign on the ARA living lab characterizing the actual RACH failure modes in OAI and srsRAN.
- A **timing-aware preamble scheduling** approach that aligns RACH opportunities to the propagation regime of each cell.
- Open-source patches integrated and validated against multiple commercial 5G phones.

#### <i class="fa-solid fa-chart-line"></i>&nbsp; Result

Significant uplift in RACH success rate across distance/SNR regimes, evaluated on real outdoor 5G NR deployments — closing a measurable gap between open-source and proprietary cellular stacks.

#### <i class="fa-solid fa-link"></i>&nbsp; Links

- <i class="fa-solid fa-file-pdf"></i> **Paper (IEEE NetSoft 2025):** [IEEE Xplore](https://ieeexplore.ieee.org/document/11080601)
- <i class="fa-brands fa-square-arxiv"></i> **arXiv:** [2503.18218](https://arxiv.org/abs/2503.18218)
