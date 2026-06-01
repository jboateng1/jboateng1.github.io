---
layout: page
permalink: /service/
title: service
description: Service to the wireless, networking, and systems research community.
nav: true
nav_order: 6
---

<style>
  .svc-intro {
    font-size: 1.05rem;
    opacity: 0.9;
    max-width: 46rem;
    margin-bottom: 2.2rem;
  }
  .svc-section-title {
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .svc-section-title i {
    color: var(--global-theme-color);
  }

  /* TPC highlight */
  .tpc-card {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    background: linear-gradient(135deg, rgba(var(--global-theme-color-rgb, 0, 122, 255), 0.06), transparent);
    border: 1px solid var(--global-divider-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 12px;
    padding: 1.1rem 1.3rem;
    margin-bottom: 2.75rem;
  }
  .tpc-card .tpc-icon {
    font-size: 1.6rem;
    color: var(--global-theme-color);
    flex-shrink: 0;
  }
  .tpc-card .tpc-role {
    font-weight: 600;
  }
  .tpc-card .tpc-venue {
    opacity: 0.8;
    font-size: 0.92rem;
  }
  .tpc-card .tpc-year {
    margin-left: auto;
    font-weight: 700;
    color: var(--global-theme-color);
    white-space: nowrap;
  }

  /* Review venue badges */
  .venue-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
  .venue-badge {
    text-align: center;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.3rem 1rem;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
  .venue-badge:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.12);
  }
  .venue-badge .vb-acronym {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--global-theme-color);
    line-height: 1.1;
  }
  .venue-badge .vb-name {
    font-size: 0.82rem;
    opacity: 0.75;
    margin: 0.35rem 0 0.6rem;
  }
  .venue-badge .vb-years {
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.9;
  }
</style>

<p class="svc-intro">
  I give back to the wireless, networking, and systems community — shaping program agendas and reviewing for leading IEEE venues that advance open and reliable next-generation wireless.
</p>

<h5 class="svc-section-title"><i class="fa-solid fa-users-gear"></i>&nbsp; Technical Program Committee</h5>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-network-wired tpc-icon"></i>
  <div>
    <div class="tpc-role">TPC Member</div>
    <div class="tpc-venue">ACM Workshop on Wireless Network Testbeds, Experimental Evaluation &amp; Characterization (WiNTECH)</div>
  </div>
  <span class="tpc-year">2026</span>
</div>

<h5 class="svc-section-title"><i class="fa-solid fa-file-pen"></i>&nbsp; Peer Review</h5>

<div class="venue-grid">
  <div class="venue-badge">
    <div class="vb-acronym">TWC</div>
    <div class="vb-name">IEEE Transactions on Wireless Communications</div>
    <div class="vb-years">2023 – 2026</div>
  </div>
  <div class="venue-badge">
    <div class="vb-acronym">INFOCOM</div>
    <div class="vb-name">IEEE Conference on Computer Communications</div>
    <div class="vb-years">2022 – 2025</div>
  </div>
  <div class="venue-badge">
    <div class="vb-acronym">MILCOM</div>
    <div class="vb-name">IEEE Military Communications Conference</div>
    <div class="vb-years">2025</div>
  </div>
</div>
