// Shared header + footer so every page stays in sync.
(function () {
  var page = location.pathname.split("/").pop() || "index.html";
  var tabs = [
    ["biography.html", "Bio"],
    ["issues.html", "Issues"],
    ["events.html", "Events"],
    ["news.html", "News"],
    ["merchandise.html", "Shop"],
    ["ads.html", "Ads"]
  ];

  var links = tabs.map(function (t) {
    return '<li><a href="' + t[0] + '"' + (page === t[0] ? ' class="active"' : "") + ">" + t[1] + "</a></li>";
  }).join("");

  var header =
    '<div class="topbar">Almost time to reach our October 30th goal! <a href="donate.html">Help Graham out &rarr;</a></div>' +
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
        '<div><div class="logo"><span class="name"><a href="parody/" class="egg">&#9733;</a> JANICIK</span><span class="year">PRESIDENT 2028</span></div>' +
          '<p style="margin-top:14px">A campaign built for America. Army Veteran. Businessman. Two-term Governor of Ohio.</p></div>' +
        '<div><h4>Campaign</h4><ul>' +
          '<li><a href="biography.html">Meet Graham</a></li><li><a href="issues.html">Issues</a></li>' +
          '<li><a href="events.html">Events</a></li><li><a href="news.html">Press</a></li></ul></div>' +
        '<div><h4>Get Involved</h4><ul>' +
          '<li><a href="donate.html">Donate</a></li><li><a href="merchandise.html">Shop</a></li>' +
          '<li><a href="index.html#signup">Volunteer</a></li><li><a href="ads.html">View our Ads</a></li></ul></div>' +
        '<div><h4>Contact</h4><ul>' +
          '<li>Janicik for America HQ</li><li>1776 Liberty Ave, Youngstown, OH</li>' +
          '<li>press@janicik2028.example</li></ul></div>' +
      "</div>" +
      '<div class="paid-for">Paid for by Janicik for America, Inc. Not authorized by any real candidate or committee.</div>' +
      '<p class="disclaimer">This website is fictional and part of a school project. Graham L. Janicik is not a real person. The picture is an AI generated image of a non-existent person. No money is raised from any part of this site.</p>' +
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
})();
