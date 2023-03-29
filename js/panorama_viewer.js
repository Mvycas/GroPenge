/* ===========================================================
 * jquery-panorama_viewer.js v1
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Embed Panorama Photos on your website
 * with Panorama Viewer
 *
 * https://github.com/peachananr/panorama_viewer
 *
 * ========================================================== */
// This panorama viewer was based on Jquerry 1.9.1 library, that has Cross-site Scripting (XSS) vulnerability.
// I have used Jquerry 3.5.1 library which currently has no known vulnerabilities. Therefore, the code below was adjusted.

!function(n) {
  var e = {
      repeat: !1,
      direction: "horizontal",
      animationTime: 0,
      easing: "ease-out",
      overlay: !0
  };
  function i(n) {
      var e = n.changedTouches[0],
      i = "";
      switch (n.type) {
      case "touchstart":
          i = "mousedown";
          break;
      case "touchmove":
          i = "mousemove";
          break;
      case "touchend":
          i = "mouseup";
          break;
      default:
          return
      }
      var t = document.createEvent("MouseEvent"),
      a = 2;
      navigator.userAgent.match(/Android/i) && (a = 10),
      t.initMouseEvent(i, !0, !0, window, 1, e.screenX, e.screenY, e.clientX * a, e.clientY * a, !1, !1, !1, !1, 0, null),
      e.target.dispatchEvent(t)
  }
  n.fn.panorama_viewer = function(t) {
      return document.addEventListener("touchstart", i, !0),
      document.addEventListener("touchmove", i, !0),
      document.addEventListener("touchend", i, !0),
      document.addEventListener("touchcancel", i, !0),
      this.each((function() {
          var i = n.extend({},
          e, t),
          a = n(this);
          a.find("> img").ready((function() {
              a.find("> img").addClass("pv-pano"),
              a.addClass("pv-container").wrapInner("<div class='pv-inner pv-animating'></div>"),
              "vertical" == i.direction && a.addClass("pv-vertical"),
              a.find(".pv-animating").css({
                  "-webkit-transition": "all " + i.animationTime + "ms " + i.easing,
                  "-moz-transition": "all " + i.animationTime + "ms " + i.easing,
                  "-ms-transition": "all " + i.animationTime + "ms " + i.easing,
                  transition: "all " + i.animationTime + "ms " + i.easing
              }),
              imgSrc = a.find(".pv-pano").attr("src"),
              width = a.find(".pv-pano").width(),
              height = a.find(".pv-pano").height();
              var e = "no-repeat";
              1 == i.repeat && (e = "repeat"),
              a.find(".pv-inner").css({
                  height: height,
                  width: width,
                  background: "url(" + imgSrc + ") " + e,
                  "background-size": "cover"
              }),
              1 == i.overlay && (n("<div class='pv-overlay'><i class='pvicon-overlay'></i></div>").appendTo(a.find(".pv-inner")), a.find(".pv-inner").bind("mouseenter", (function() {
                  n(this).find(".pv-overlay ").fadeOut("fast")
              })).bind("mouseleave", (function() {
                  n(this).find(".pv-overlay ").fadeIn("fast")
              })));
              var t = a.find(".pv-inner"),
              o = parseInt(t.parent().width()),
              r = parseInt(t.parent().height()),
              s = width - o,
              d = height - r,
              c = {
                  x: 0,
                  y: 0
              },
              u = {
                  x: 0,
                  y: 0
              },
              v = !1;
              function p(e) {
                  var t = {
                      x: !1,
                      y: !1
                  },
                  a = {
                      x: u.x - (c.x - e.clientX),
                      y: u.y - (c.y - e.clientY)
                  };
                  return "horizontal" == i.direction ? (1 == i.repeat ? t.x = !0 : t.x = a.x < 0 && -1 * a.x < s, v && t.x && (u.x = a.x, u.y = 0)) : (1 == i.repeat ? t.y = !0 : t.y = a.y < 0 && -1 * a.y < d, v && t.y && (u.y = a.y, u.x = 0)),
                  n(this).css("background-position", u.x + "px " + u.y + "px"),
                  c.x = e.clientX,
                  c.y = e.clientY,
                  e.stopPropagation(),
                  !1
              }
              t.bind("mousedown mouseup mouseleave", (function(e) {
                  return v = !1,
                  t.unbind("mousemove", p),
                  "mousedown" == e.type ? (c.x = e.clientX, c.y = e.clientY, v = !0, t.bind("mousemove", p)) : n(document.body).focus(),
                  e.stopPropagation(),
                  !1
              })),
              t.bind("dblclick", (function() {
                  u = {
                      x: 0,
                      y: 0
                  },
                  n(this).css("backgroundPosition", "0 0")
              })),
              a.find(".pv-pano").hide()
          }))
      }))
  }
} (window.jQuery);