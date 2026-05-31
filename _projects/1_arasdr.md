---
layout: page
title: AraSDR
description: <i class="fa-solid fa-tower-cell"></i>&nbsp; End-to-end, fully-programmable 5G living lab spanning central Iowa
img: assets/img/9.jpg
importance: 1
category: systems
related_publications: true
---

> **AraSDR** is the first-of-its-kind end-to-end, **fully programmable 5G platform** that lets researchers build whole-stack 5G/6G solutions on **open-source software + commodity hardware** — and evaluate them under _real_ outdoor propagation, interference, and mobility conditions.

#### <i class="fa-solid fa-bullseye"></i>&nbsp; The problem

Most open-source 5G research is confined to single-cell indoor testbeds. These miss the failure modes that actually matter in deployment: outdoor propagation, multi-cell interference, mobility, weather, and operator-grade timing.

#### <i class="fa-solid fa-screwdriver-wrench"></i>&nbsp; What we built

- A whole-stack programmable 5G NR platform from **PHY → PDCP** using OpenAirInterface and srsRAN on USRP X410 / X310 / N320 SDRs.
- Multi-site deployment across the **ARA Wireless Living Lab** in central Iowa (rural towers, fiber/microwave x-haul, edge compute).
- Containerized, reproducible 5G core integration (Open5GS, SD-Core) with Grafana/InfluxDB telemetry.
- Self-service experiment workflow so external researchers can reserve, deploy, and tear down full 5G stacks.

#### <i class="fa-solid fa-chart-line"></i>&nbsp; Impact

<div class="row text-center g-3 my-3">
  <div class="col-md-4">
    <div class="p-3 rounded shadow-sm" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--global-theme-color);">170+</div>
      <div style="font-size: 0.9rem;">researchers using ARA</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="p-3 rounded shadow-sm" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--global-theme-color);">7</div>
      <div style="font-size: 0.9rem;">deployment sites in central Iowa</div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="p-3 rounded shadow-sm" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.8rem; font-weight: 700; color: var(--global-theme-color);">PHY → APP</div>
      <div style="font-size: 0.9rem;">full-stack programmability</div>
    </div>
  </div>
</div>

#### <i class="fa-solid fa-link"></i>&nbsp; Links

- <i class="fa-solid fa-file-pdf"></i> **Paper (IEEE ICC 2024):** [AraSDR: End-to-End, Fully-Programmable Living Lab for 5G and Beyond](https://ieeexplore.ieee.org/document/10623061)
- <i class="fa-solid fa-globe"></i> **Project site:** [arawireless.org](https://arawireless.org/)
- <i class="fa-solid fa-file-pdf"></i> **System paper (Elsevier Computer Networks 2025):** [DOI](https://www.sciencedirect.com/science/article/pii/S1389128625000350)
