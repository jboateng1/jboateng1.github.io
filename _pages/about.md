---
layout: about
title: about
permalink: /
subtitle: <em>Open and AI-native RAN &middot; 5G/6G &middot; Wireless Living Labs &middot; URLLC</em>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p><i class="fa-solid fa-location-dot"></i> 391C Durham Center</p>
    <p>613 Morrill Road, Ames, IA 50011</p>
    <p><i class="fa-solid fa-flask"></i> Center for Wireless, Communities &amp; Innovation (<a href='https://wici.iastate.edu/'>WiCI</a>)</p>
    <div class="wireless-ripple" title="Wireless signal" aria-label="Wireless signal"><span class="ripple-ring"></span><span class="ripple-ring"></span><span class="ripple-ring"></span><span class="ripple-ring"></span><span class="ripple-ring"></span><span class="ripple-dot"></span></div>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 6 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<style>
  /* Shrink the social icons at the bottom of the page to roughly match the
     small inline icons used elsewhere on the page. */
  .social .contact-icons,
  .social .contact-icons a,
  .social .contact-icons i {
    font-size: 1.5rem;
  }

  /* Make the profile block a positioning context, and lift the photo above
     the ripple rings so they appear to radiate from behind the image. */
  .profile {
    position: relative;
  }
  .profile img {
    position: relative;
    z-index: 2;
  }

  /* Interactive wireless-signal ripple whose center dot sits on the exact
     top-right corner of the profile photo. Multiple thin rings expand
     outward from behind the image at once. */
  .wireless-ripple {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%); /* center dot lands on the corner */
    z-index: 1; /* sits behind the photo (z-index: 2) */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .wireless-ripple .ripple-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--global-theme-color);
    transition: transform 0.3s ease;
  }
  .wireless-ripple:hover .ripple-dot {
    transform: scale(1.25);
  }
  .wireless-ripple .ripple-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    border: 1px solid var(--global-theme-color);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.3);
    opacity: 0;
    animation: wireless-ripple-out 4s linear infinite;
  }
  .wireless-ripple .ripple-ring:nth-child(2) {
    animation-delay: 0.8s;
  }
  .wireless-ripple .ripple-ring:nth-child(3) {
    animation-delay: 1.6s;
  }
  .wireless-ripple .ripple-ring:nth-child(4) {
    animation-delay: 2.4s;
  }
  .wireless-ripple .ripple-ring:nth-child(5) {
    animation-delay: 3.2s;
  }
  .wireless-ripple:hover .ripple-ring {
    animation-duration: 2.4s;
  }
  @keyframes wireless-ripple-out {
    0% {
      transform: translate(-50%, -50%) scale(0.3);
      opacity: 0.9;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      transform: translate(-50%, -50%) scale(16);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .wireless-ripple .ripple-ring {
      animation: none;
    }
  }
</style>

I am a **Research Assistant Professor** at the Center for Wireless, Communities and Innovation ([WiCI](https://wici.iastate.edu/)) affiliated with the [Department of Electrical and Computer Engineering](https://www.ece.iastate.edu/) at **Iowa State University**. I build **open, reliable, and scalable next-generation wireless systems** — and the **living-lab infrastructure** needed to evaluate them under the challenging conditions of the real world.

My research focuses on Democratizing 5G/6G systems through open, reliable and scalable wireless infrastructure. Working at the intersection of wireless systems, networked infrastructure, and software engineering. I lead the design and deployment of the [ARA Wireless Living Lab](https://arawireless.org/) — a large-scale, fully programmable Open RAN testbed serving over **170 researchers** across the U.S. In 2024 I spent a semester at **Microsoft Research** building a GEO-based 5G non-terrestrial network testbed.

My long-term vision is to make next-generation wireless innovation accessible, affordable, and deployable for rural, agricultural, and underserved communities, across Iowa, the broader Midwest and the United States as a whole.

<hr style="margin: 2rem 0;">

<h4 style="margin-bottom: 1rem;"><i class="fa-solid fa-flask-vial" style="color: var(--global-theme-color);"></i>&nbsp; Research Interests</h4>

<div class="row g-3 mb-3">
  <div class="col-md-4">
    <div class="p-3 h-100 rounded shadow-sm" style="background: var(--global-card-bg-color); border-left: 3px solid var(--global-theme-color);">
      <h6><i class="fa-solid fa-tower-cell"></i>&nbsp; Open, Programmable &amp; AI-native RAN</h6>
      <p class="mb-0">Open-source 5G/6G stacks (OCUDU, OAI), software-defined and intelligent RAN control, multi-tenant infrastructure.</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="p-3 h-100 rounded shadow-sm" style="background: var(--global-card-bg-color); border-left: 3px solid var(--global-theme-color);">
      <h6><i class="fa-solid fa-satellite-dish"></i>&nbsp; Wireless Testbeds &amp; Living Labs</h6>
      <p class="mb-0">Large-scale experimental 5G/6G platforms, real-world open RAN prototyping, reproducible wireless experimentation.</p>
    </div>
  </div>
  <div class="col-md-4">
    <div class="p-3 h-100 rounded shadow-sm" style="background: var(--global-card-bg-color); border-left: 3px solid var(--global-theme-color);">
      <h6><i class="fa-solid fa-bolt"></i>&nbsp; URLLC &amp; Deterministic Wireless</h6>
      <p class="mb-0">Measurement-driven latency modeling, system-level tuning for predictable low-latency 5G/6G, precision agriculture.</p>
    </div>
  </div>
</div>

<hr style="margin: 2rem 0;">

<h4 style="margin-bottom: 1rem;"><i class="fa-solid fa-rocket" style="color: var(--global-theme-color);"></i>&nbsp; At a Glance</h4>

<div class="row text-center g-3 mb-3">
  <div class="col-6 col-md-3">
    <div class="p-3 rounded shadow-sm h-100" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.6rem; font-weight: 700; color: var(--global-theme-color);">3&times;</div>
      <div style="font-size: 0.85rem; opacity: 0.85;">Best Paper / Demo Awards</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 rounded shadow-sm h-100" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.6rem; font-weight: 700; color: var(--global-theme-color);">170+</div>
      <div style="font-size: 0.85rem; opacity: 0.85;">Researchers using ARA</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 rounded shadow-sm h-100" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.6rem; font-weight: 700; color: var(--global-theme-color);">$20M+</div>
      <div style="font-size: 0.85rem; opacity: 0.85;">Funded projects involved</div>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="p-3 rounded shadow-sm h-100" style="background: var(--global-card-bg-color);">
      <div style="font-size: 1.6rem; font-weight: 700; color: var(--global-theme-color);">100+</div>
      <div style="font-size: 0.85rem; opacity: 0.85;">Citations</div>
    </div>
  </div>
</div>

<p style="font-size: 0.85rem; opacity: 0.7; text-align: center; margin-top: 0.5rem;">
  <i class="fa-solid fa-envelope"></i>&nbsp; <a href="mailto:jboateng@iastate.edu">jboateng@iastate.edu</a>
  &nbsp;&middot;&nbsp;
  <i class="fa-solid fa-file-lines"></i>&nbsp; <a href="/assets/pdf/Joshua_Ofori_Boateng_CV.pdf">CV (PDF)</a>
  &nbsp;&middot;&nbsp;
  <i class="fa-brands fa-linkedin"></i>&nbsp; <a href="https://www.linkedin.com/in/joshua-ofori-boateng-22b2b0145/">LinkedIn</a>
</p>

<!-- Makes the "N more authors" expander work in the Selected Publications list. -->
<script src="{{ '/assets/js/more-authors-fix.js' | relative_url }}"></script>
