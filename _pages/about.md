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
    <div class="wireless-ripple" aria-hidden="true"><svg viewBox="0 0 600 600"><g fill="none" stroke="#C8102E" stroke-width="1.4"><circle class="sig" cx="300" cy="300" r="70" style="animation-delay:0s;"></circle><circle class="sig" cx="300" cy="300" r="130" style="animation-delay:.5s;"></circle><circle class="sig" cx="300" cy="300" r="195" style="animation-delay:1s;"></circle><circle class="sig" cx="300" cy="300" r="265" style="animation-delay:1.5s;"></circle></g><circle cx="300" cy="300" r="6" fill="#C8102E"></circle></svg></div>

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
     the signal rings so they appear to radiate from behind the image. */
  .profile {
    position: relative;
  }
  .profile img {
    position: relative;
    z-index: 2;
  }

  /* Wireless "signal" motif from the design: thin concentric rings + a solid
     center dot pinned to the exact top-right corner of the profile photo. */
  .wireless-ripple {
    position: absolute;
    top: 0;
    right: 0;
    width: 380px;
    height: 380px;
    transform: translate(50%, -50%); /* center dot lands exactly on the corner */
    z-index: 1; /* sits behind the photo (z-index: 2) */
    pointer-events: none;
  }
  .wireless-ripple svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }
  .wireless-ripple .sig {
    transform-origin: 300px 300px;
    animation: signalPulse 5.5s ease-out infinite alternate;
  }
  /* Hovering the photo gives the rings an interactive lift. */
  .profile:hover .wireless-ripple .sig {
    animation-duration: 3s;
  }
  @keyframes signalPulse {
    0% {
      opacity: 0.28;
      transform: scale(0.96);
    }
    100% {
      opacity: 0.06;
      transform: scale(1.18);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .wireless-ripple .sig {
      animation: none;
      opacity: 0.18;
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
