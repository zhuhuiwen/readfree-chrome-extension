!function(){function e(e,t,a){var r=new XMLHttpRequest,o="http://readfree.me/book/"+e;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=document.createElement("div");e.innerHTML=r.responseText;var i=(e.getElementsByTagName("a"),n(t,o));a.appendChild(i),a.setAttribute("has-readfree","1")}},r.open("GET",o,!0),r.setRequestHeader("Content-type","text/html"),r.send()}function t(e,t){var n=new XMLHttpRequest,a="http://readfree.me/search/?q="+e;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&t&&t(n.responseText)},n.open("GET",a,!0),n.setRequestHeader("Content-type","text/html"),n.send()}function n(e,t){var n=null,a=null;if(e===d.LINK_TYPE.SUBJECT?(n="rf-book-page-main-link",a="ReadFree!"):e===d.LINK_TYPE.HOME?(n="rf-douban-home-link",a="ReadFree!"):e===d.LINK_TYPE.IMAGE&&(n="rf-normal-link",a="R!"),null!==n){var r=document.createElement("a");return r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("class",n),r.innerHTML=a,r}return null}function a(){var e=document.createElement("style");e.appendChild(document.createTextNode("")),document.head.appendChild(e);var t="#37a",n="#614e3c",a={".rf-book-page-main-link":{position:"fixed",top:"160px",left:"-10px",padding:"10px 20px 10px 30px",display:"block",background:n,color:"white !important"},".rf-douban-home-link":{display:"inline-block",padding:"2px 4px","text-align":"center",background:t,color:"white !important"},".rf-normal-link":{padding:"2px","text-align":"center",position:"absolute","margin-left":"-64px",display:"inline-block",background:t,color:"white !important"}};for(var r in a){var o=r+"{";for(var i in a[r])o+=i+": "+a[r][i]+";";o+="} ",e.sheet.insertRule(o,0)}}function r(){function t(){var t=document.getElementsByTagName("a");for(var a in t)!function(a){if("object"!=typeof t[a]||"1"!==t[a].parentNode.getAttribute("has-readfree")){var r=void 0===t[a].href?null:t[a].href.match(/\/subject\/(\d+)(\/$|\/\?)/);if("cover"===t[a].className)return void e(r[1],d.LINK_TYPE.IMAGE,t[a].parentNode);var o=t[a].childNodes;for(var i in o)if("IMG"===o[i].tagName)return void("climg"===o[i].className&&e(r[1],d.LINK_TYPE.IMAGE,t[a].parentNode));var r=void 0===t[a].href?null:t[a].href.match(/\/subject\/(\d+)(\/$|\/\?)/);r&&(!n||n&&n[2]&&n[2]!==r[1])&&e(r[1],d.LINK_TYPE.HOME,t[a].parentNode)}}(a)}var n=location.pathname.match(/\/(\w+)\/(\d+)\//);if(t(),n){var a=n[1],r=n[2];"subject"===a&&e(r,d.LINK_TYPE.SUBJECT,document.body)}if("book.douban.com"===window.location.hostname){var i=document.getElementsByClassName("nav-items");if(i&&i[0]){i[0].addEventListener("mouseover",function(){var e=document.getElementById("readfree-menu");e&&(e.style.display="inline-block")},!1),i[0].addEventListener("mouseout",function(){var e=document.getElementById("readfree-menu");e&&(e.style.display="none")},!1);var l=document.createElement("li");l.setAttribute("id","readfree-menu"),l.style.display="none";var u=document.createElement("a");u.setAttribute("href","http://www.douban.com/people/ovilia1024/"),u.innerHTML="ReadFree 插件作者",l.appendChild(u),i[0].appendChild(l)}}o(["a_nointerest_subject","load-more","book_x"],function(){setTimeout(function(){t()},2e3)})}function o(e,t){for(var n=0,a=e.length;a>n;++n){var r=document.getElementsByClassName(e[n]);if(r.length>0&&t)for(var o=0;o<r.length;++o)r[o].addEventListener("click",function(){t()})}}function i(){var e=document.getElementById("detail_bullets_id"),a="<b>ISBN:</b> ";if(e)for(var r=e.getElementsByTagName("li"),o=0,i=r.length;i>o;++o){var l=r[o].innerHTML,u=l.indexOf(a);if(u>-1){var c=l.indexOf(", ");if(c>-1)var s=l.substr(c+2);else var s=l.substr(a.length);t(s,function(e){var t=document.createElement("html");t.innerHTML=e;var a=t.getElementsByClassName("pjax");if(a){var r="http://readfree.me/"+a[0].getAttribute("href"),o=n(d.LINK_TYPE.SUBJECT,r);document.body.appendChild(o)}});break}}}var d={LINK_TYPE:{SUBJECT:0,HOME:1,DOULIST:2,UPDATE:3,IMAGE:4}};a();var l=window.location.hostname;"www.douban.com"===l||"book.douban.com"===l?r():"www.amazon.cn"===l&&i()}();
