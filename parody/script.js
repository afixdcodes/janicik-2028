// Shared header + footer so every page stays in sync.
(function () {
  var page = location.pathname.split("/").pop() || "index.html";
  var tabs = [
    ["biography.html", "Biography"],
    ["issues.html", "Issues"],
    ["events.html", "Campaign Events"],
    ["news.html", "News"],
    ["merchandise.html", "Merchandise"],
    ["ads.html", "Ads"]
  ];

  var links = tabs.map(function (t) {
    return '<li><a href="' + t[0] + '"' + (page === t[0] ? ' class="active"' : "") + ">" + t[1] + "</a></li>";
  }).join("");

  var header =
    '<div class="topbar">The FEC deadline is coming. <a href="donate.html">Chip in $27 for Graham &rarr;</a></div>' +
    '<header class="site-header"><div class="wrap nav">' +
      '<a class="logo" href="index.html"><span class="name">&#9733; JANICIK</span><span class="year">PRESIDENT 2028</span></a>' +
      '<input type="checkbox" id="menu-toggle" class="menu-toggle">' +
      '<label for="menu-toggle" class="menu-icon" aria-label="Menu">&#9776;</label>' +
      '<ul class="nav-links">' + links +
        '<li><a class="donate-btn' + (page === "donate.html" ? " active" : "") + '" href="donate.html">Donate</a></li>' +
      "</ul>" +
    "</div></header>";

  var footer =
    '<footer class="site-footer"><div class="wrap">' +
      '<div class="footer-grid">' +
        '<div><div class="logo"><span class="name">&#9733; JANICIK</span><span class="year">PRESIDENT 2028</span></div>' +
          '<p style="margin-top:14px">MAGMA: Make America Great, Mars Also. Joe is a liberal chicken. Graham is not.</p></div>' +
        '<div><h4>Campaign</h4><ul>' +
          '<li><a href="biography.html">Meet Graham</a></li><li><a href="issues.html">Issues</a></li>' +
          '<li><a href="events.html">Events</a></li><li><a href="news.html">Newsroom</a></li></ul></div>' +
        '<div><h4>Get Involved</h4><ul>' +
          '<li><a href="donate.html">Donate</a></li><li><a href="merchandise.html">Shop</a></li>' +
          '<li><a href="index.html#signup">Volunteer</a></li><li><a href="ads.html">Watch Our Ads</a></li></ul></div>' +
        '<div><h4>Contact</h4><ul>' +
          '<li>Janicik for America HQ</li><li>1776 Liberty Ave, Youngstown, OH</li>' +
          '<li>press@janicik2028.example</li></ul></div>' +
      "</div>" +
      '<div class="paid-for">Paid for by Janicik for America, Inc. Not authorized by any real candidate or committee.</div>' +
      '<p class="disclaimer">This is a fictional, satirical campaign website made for a school project. Graham L. Janicik is not a real person, and no money is collected anywhere on this site. Any resemblance between its fictional characters and real people or companies is coincidental.</p>' +
    "</div></footer>";

  document.getElementById("site-header").outerHTML = header;
  document.getElementById("site-footer").outerHTML = footer;

  // Any form on the site: show a thank-you instead of submitting anywhere.
  document.querySelectorAll("form[data-fake]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".thanks");
      if (msg) msg.hidden = false;
    });
  });
  // Official statement popup (once per browser session).
  var seen = false;
  try { seen = sessionStorage.getItem("janicikStatement") === "1"; } catch (e) {}
  if (!seen) {
    var box = document.createElement("div");
    box.className = "statement-overlay";
    box.innerHTML =
      '<div class="statement" role="dialog" aria-modal="true" aria-labelledby="stmt-title">' +
        '<div class="statement-head">&#9888; Official Statement from the Janicik Campaign</div>' +
        '<h2 id="stmt-title">"I had nothing to do with the Joe Chicken tar and feathering incidents."</h2>' +
        '<p>Graham L. Janicik was in Youngstown at the time of all three incidents, as confirmed by 41 witnesses and one carrier pigeon. The campaign condemns tar. The campaign has no official position on feathers.</p>' +
        '<button type="button" class="btn btn-red">I Believe You, Graham</button>' +
      '</div>';
    document.body.appendChild(box);
    box.querySelector("button").addEventListener("click", function () {
      box.remove();
      try { sessionStorage.setItem("janicikStatement", "1"); } catch (e) {}
    });
  }
})();
