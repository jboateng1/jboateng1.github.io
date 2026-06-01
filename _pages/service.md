---
layout: page
permalink: /service/
title: service
description: Service to the wireless, networking, and systems research community.
nav: true
nav_order: 6
---

<style>
  .service-card {
    background: var(--global-card-bg-color);
    border-left: 4px solid var(--global-theme-color);
    border-radius: 10px;
    transition:
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }
  .service-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.12) !important;
  }
  .service-card .svc-head {
    font-weight: 600;
  }
  .service-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }
  .service-list li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.55rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .service-list li:last-child {
    border-bottom: none;
  }
  .svc-year {
    flex-shrink: 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--global-theme-color);
    white-space: nowrap;
  }
</style>

<div class="row g-4 my-2">

  <!-- Technical Program Committee -->
  <div class="col-md-6">
    <div class="service-card p-4 shadow-sm h-100">
      <h5 class="svc-head mb-3"><i class="fa-solid fa-users-gear" style="color: var(--global-theme-color);"></i>&nbsp; Technical Program Committee</h5>
      <ul class="service-list">
        <li>
          <span>ACM Workshop on Wireless Network Testbeds, Experimental Evaluation &amp; Characterization (<strong>WiNTECH</strong>)</span>
          <span class="svc-year">2026</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Professional Membership -->
  <div class="col-md-6">
    <div class="service-card p-4 shadow-sm h-100">
      <h5 class="svc-head mb-3"><i class="fa-solid fa-id-badge" style="color: var(--global-theme-color);"></i>&nbsp; Professional Membership</h5>
      <ul class="service-list">
        <li>
          <span>IEEE Communications Society (<strong>ComSoc</strong>)</span>
          <span class="svc-year">2024 – present</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Peer Review -->
  <div class="col-12">
    <div class="service-card p-4 shadow-sm h-100">
      <h5 class="svc-head mb-3"><i class="fa-solid fa-file-pen" style="color: var(--global-theme-color);"></i>&nbsp; Peer Review</h5>
      <ul class="service-list">
        <li>
          <span>IEEE Transactions on Wireless Communications (<strong>TWC</strong>)</span>
          <span class="svc-year">2023 – 2026</span>
        </li>
        <li>
          <span>IEEE Conference on Computer Communications (<strong>INFOCOM</strong>)</span>
          <span class="svc-year">2022 – 2025</span>
        </li>
        <li>
          <span>IEEE Military Communications Conference (<strong>MILCOM</strong>)</span>
          <span class="svc-year">2025</span>
        </li>
      </ul>
    </div>
  </div>

</div>
