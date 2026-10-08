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

  /* Alliance / membership cards */
  .mem-card {
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
    padding: 1.1rem 1.3rem;
    margin-bottom: 1rem;
  }
  .mem-head {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  .mem-head i {
    font-size: 1.4rem;
    color: var(--global-theme-color);
  }
  .mem-org {
    font-weight: 600;
  }
  .mem-org a {
    color: inherit;
  }
  .mem-org a:hover {
    color: var(--global-theme-color);
  }
  .mem-year {
    margin-left: auto;
    font-weight: 700;
    color: var(--global-theme-color);
    white-space: nowrap;
  }
  .mem-roles {
    list-style: none;
    padding-left: 2.2rem;
    margin: 0.55rem 0 0;
  }
  .mem-roles li {
    display: flex;
    font-size: 0.92rem;
    opacity: 0.85;
    padding: 0.15rem 0;
  }
  .mem-roles li span {
    margin-left: auto;
    font-weight: 600;
    white-space: nowrap;
  }
</style>

<p class="svc-intro">
  I give back to the wireless, networking, and systems community — shaping program agendas, organizing workshops, reviewing for leading IEEE and ACM venues, and contributing to industry alliances and open-source communities that advance open, AI-native next-generation wireless.
</p>

<h5 class="svc-section-title"><i class="fa-solid fa-users-gear"></i>&nbsp; Technical Program Committee</h5>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-network-wired tpc-icon"></i>
  <div>
    <div class="tpc-role">TPC Member</div>
    <div class="tpc-venue">Workshop on Open Research Infrastructures and Toolkits for 6G (OpenRIT6G) @ IEEE WCNC</div>
  </div>
  <span class="tpc-year">2027</span>
</div>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-network-wired tpc-icon"></i>
  <div>
    <div class="tpc-role">TPC Member</div>
    <div class="tpc-venue">ACM Workshop on Wireless Network Testbeds, Experimental Evaluation &amp; Characterization (WiNTECH)</div>
  </div>
  <span class="tpc-year">2026</span>
</div>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-network-wired tpc-icon"></i>
  <div>
    <div class="tpc-role">TPC Member</div>
    <div class="tpc-venue">IEEE Military Communications Conference (MILCOM Demos)</div>
  </div>
  <span class="tpc-year">2026</span>
</div>

<h5 class="svc-section-title"><i class="fa-solid fa-people-group"></i>&nbsp; Organizing Committees</h5>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-chalkboard-user tpc-icon"></i>
  <div>
    <div class="tpc-role">Demo and Poster Chair</div>
    <div class="tpc-venue"><a href="https://arawireless.org/agwireless26/">AgWireless'26: Accelerating Concerted 6G, AgTech &amp; Multi-Use Innovation</a> · Ames, IA</div>
  </div>
  <span class="tpc-year">2026</span>
</div>

<div class="tpc-card mb-5">
  <i class="fa-solid fa-tractor tpc-icon"></i>
  <div>
    <div class="tpc-role">Organizer</div>
    <div class="tpc-venue">NSF AgRuralG Workshop and ARA User Program &amp; Local Organizing Committee · co-located with the <a href="https://www.farmprogressshow.com/">U.S. Farm Progress Show</a></div>
  </div>
  <span class="tpc-year">2026</span>
</div>

<h5 class="svc-section-title"><i class="fa-solid fa-file-pen"></i>&nbsp; Peer Review</h5>

<div class="venue-grid">
  <div class="venue-badge">
    <div class="vb-acronym">Access</div>
    <div class="vb-name">IEEE Access</div>
    <div class="vb-years">2026</div>
  </div>
  <div class="venue-badge">
    <div class="vb-acronym">JCN</div>
    <div class="vb-name">Journal of Communications and Networks</div>
    <div class="vb-years">2026</div>
  </div>
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
    <div class="vb-acronym">WiNTECH</div>
    <div class="vb-name">ACM Workshop on Wireless Network Testbeds, Experimental Evaluation &amp; Characterization</div>
    <div class="vb-years">2026</div>
  </div>
  <div class="venue-badge">
    <div class="vb-acronym">MILCOM</div>
    <div class="vb-name">IEEE Military Communications Conference</div>
    <div class="vb-years">2025 - 2026</div>
  </div>
</div>

<h5 class="svc-section-title mt-5"><i class="fa-solid fa-handshake"></i>&nbsp; Industry Alliances &amp; Memberships</h5>

<div class="mem-card">
  <div class="mem-head">
    <i class="fa-solid fa-brain"></i>
    <div class="mem-org"><a href="https://ai-ran.org">AI-RAN Alliance</a></div>
  </div>
  <ul class="mem-roles">
    <li>Member, Working Group 2 (AI-and-RAN)<span>2026 – Present</span></li>
  </ul>
</div>

<div class="mem-card">
  <div class="mem-head">
    <i class="fa-solid fa-code-branch"></i>
    <div class="mem-org"><a href="https://ocudu.org">OCUDU Project (Linux Foundation)</a> — Technical Steering Committee (TSC) Working Groups</div>
  </div>
  <ul class="mem-roles">
    <li>Member, AI-RAN Working Group<span>2026 – Present</span></li>
    <li>Member, Hardware-Acceleration Working Group<span>2026 – Present</span></li>
  </ul>
</div>

<div class="mem-card">
  <div class="mem-head">
    <i class="fa-solid fa-tower-broadcast"></i>
    <div class="mem-org">IEEE Communications Society (ComSoc)</div>
  </div>
  <ul class="mem-roles">
    <li>Member<span>2024 – Present</span></li>
  </ul>
</div>
