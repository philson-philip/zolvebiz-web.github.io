(function () {
  var w = window,
    d = document,
    z = w.NeetoChat || {};
  z.subdomain = "zolvebiz";
  z.chatApiKey = "RqrHX6Rh3zgcfq4Zs2hexPyA";
  z.neetoChatBaseUrl = "https://zolvebiz.neetochat.com";
  z.neetoKbBaseUrl = "https://zolvebiz.neetokb.com";
  z.neetoDeskBaseUrl = "https://zolvebiz.neetodesk.com";
  w.NeetoChat = z;
  var inserted = false;
  function insertTag() {
    if (inserted) return;
    inserted = true;
    var s = d.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://d1andfazro43qm.cloudfront.net/bundle-loader.js";
    var x = d.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState != "loading") {
    insertTag();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState != "loading") insertTag();
    };
  }
})();
