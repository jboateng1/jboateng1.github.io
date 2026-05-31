---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed papers, demos, and pre-prints &middot; in reverse chronological order. See also my <a href='/awards/'>awards</a> and full <a href='/cv/'>CV</a>.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

<!-- Makes the "N more authors" expander work (al-folio v1 dropped the jQuery it relied on). -->
<script src="{{ '/assets/js/more-authors-fix.js' | relative_url }}"></script>
