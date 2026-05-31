/**
 * Fix for the "N more authors" expander in publication lists.
 *
 * al-folio's bibliography template (al_folio_core) renders the expander with an
 * inline `onclick` that calls jQuery's `$(this)`. al-folio v1 no longer ships
 * jQuery, so `$` is undefined and clicking the link does nothing.
 *
 * This shim is dependency-free. For each `.more-authors` span it reads the two
 * strings the template already baked into the original onclick — the collapsed
 * label ("N more authors") and the expanded full author list — then replaces the
 * broken handler with a working vanilla-JS toggle that keeps the typing animation.
 *
 * Lives in the starter repo (not the plugin) so it survives gem upgrades; if a
 * future al_folio_core fixes the handler, the regex below simply won't match and
 * this becomes a no-op.
 */
document.addEventListener("DOMContentLoaded", function () {
  var ANIMATION_DELAY = 10; // ms per character; matches site.more_authors_animation_delay

  document.querySelectorAll("span.more-authors").forEach(function (el) {
    var onclick = el.getAttribute("onclick") || "";

    // Original handler shape: ... element.text() == 'HIDE' ? 'SHOW' : 'HIDE' ...
    var match = onclick.match(/==\s*'([\s\S]*?)'\s*\?\s*'([\s\S]*?)'\s*:/);
    if (!match) return;

    var hideText = match[1]; // "N more authors"
    var showText = match[2]; // full comma-separated author list

    el.removeAttribute("onclick"); // drop the broken jQuery handler
    el.style.cursor = "pointer";

    var expanded = false;
    var timer = null;

    el.addEventListener("click", function () {
      el.setAttribute("title", "");
      expanded = !expanded;
      var target = expanded ? showText : hideText;

      if (timer) clearInterval(timer);
      var i = 0;
      timer = setInterval(function () {
        el.innerHTML = target.substring(0, i + 1);
        if (++i >= target.length) {
          clearInterval(timer);
          timer = null;
        }
      }, ANIMATION_DELAY);
    });
  });
});
