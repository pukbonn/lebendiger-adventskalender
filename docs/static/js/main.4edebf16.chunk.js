(this.webpackJsonpadventskalender=this.webpackJsonpadventskalender||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){var r={"./McKibben-CovidMarshmallowTest.webp":25};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=c,e.exports=s,s.id=24},25:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/McKibben-CovidMarshmallowTest.5aabd39e.webp"},26:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=26},33:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(4),c=n.n(s),i=n(10),a=n.n(i),d=(n(18),n(6)),l=n.n(d),o=n(8),j=n(7),h=(n(20),n(21),n(11)),b=n.p+"static/media/Logo_rechts_fh_mit-farbkorrektur-von-thomas.bb636f7c.svg",u=n.p+"static/media/Trini-Logo-Schriftszug.52b96221.jpg",x=n.p+"static/media/LAK-desaturated.046dbb6a.svg";var O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"footer",children:["Ein \xf6kumenisches Projekt der ",Object(r.jsx)("a",{href:"https://puk-bonn.de",children:"Pfarrei St. Maria Magdalena und Christi Auferstehung"})," und der ",Object(r.jsx)("a",{href:"https://www.trinitatiskirche-bonn.de/",children:"Evangelische Trinitatiskirchengemeinde Bonn-Endenich"}),"."]}),Object(r.jsxs)("div",{className:"footer_logos",children:[Object(r.jsx)("a",{href:"https://puk-bonn.de",children:Object(r.jsx)("img",{src:b,alt:"Logo der Pfarrei St. Maria Magdalena und Christi Auferstehung"})}),Object(r.jsx)("a",{href:"https://www.lebendiger-adventskalender.de/",children:Object(r.jsx)("img",{src:x,alt:"Logo des Lebendigen Adventskalenders"})}),Object(r.jsx)("a",{href:"https://www.trinitatiskirche-bonn.de/",children:Object(r.jsx)("img",{src:u,alt:"Logo der Evangelische Trinitatiskirchengemeinde Bonn"})})]})]})};var f=function(e){var t=e.data,c=t.date,i=t.cover,a=t.photos,d=t.address,h=Object(s.useState)(""),b=Object(j.a)(h,2),u=b[0],x=b[1];Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a&&a.length>0&&""!==a[0]?(t=n(24)("./"+a[0]),x(t.default)):i&&""!==i&&(r=n(26)("./"+i),x(r.default));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,i]);var O=Object(s.useState)(""),f=Object(j.a)(O,2),g=f[0],p=f[1];return Object(s.useEffect)((function(){p(new Date(2020,11,c).toLocaleString("de",{weekday:"long"}))}),[c]),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h2",{className:"number",children:c}),Object(r.jsx)("p",{className:"weekday",children:g}),""!==u?Object(r.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(u,")")}}):null,Object(r.jsx)("p",{className:"address",children:d})]})},g=n(12),p=n.n(g),m=n.p+"static/media/data.c40cad5a.yaml";var v=function(e){var t=e.days,n=e.hours,s=e.minutes,c=e.seconds;return e.completed?null:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Das erste Fenster \xf6ffnet in\u2026"}),Object(r.jsx)("br",{}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[0===t?null:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{textAlign:"right"},children:t}),Object(r.jsx)("td",{style:{textAlign:"left"},children:1===t?"Tag":"Tagen"})]}),0===n?null:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{textAlign:"right"},children:n}),Object(r.jsx)("td",{style:{textAlign:"left"},children:1===n?"Stunde":"Stunden"})]}),0===s?null:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{textAlign:"right"},children:s}),Object(r.jsx)("td",{style:{textAlign:"left"},children:1===s?"Minute":"Minuten"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{textAlign:"right"},children:c}),Object(r.jsx)("td",{style:{textAlign:"left"},children:1===c?"Sekunde":"Sekunden"})]})]})})]})};var w=function(){var e=Object(s.useState)({days:[]}),t=Object(j.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){fetch("https://script.google.com/macros/s/AKfycbxY8QOeplWqP9LKCI-epNCfmxZ5CZKOyt13y1J0wnJoXKk5qUH5/exec?url="+encodeURIComponent(window.location.href)+"&title="+encodeURIComponent(document.title)),fetch(m).then(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.t1=p.a,e.next=4,t.text();case 4:e.t2=e.sent,e.t3=e.t1.parse.call(e.t1,e.t2),(0,e.t0)(e.t3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}),[]);var i=new Date(2020,11,1,18,0,0,0);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("svg",{viewBox:"0 0 775 305",className:"svg-header",children:[Object(r.jsx)("text",{className:"h1",x:"10",y:"90",children:"Lebendiger"}),Object(r.jsx)("text",{className:"h1",x:"10",y:"200",children:"Adventskalender"}),Object(r.jsx)("text",{className:"h1",x:"10",y:"290",children:"2020"})]}),Object(r.jsx)("div",{className:"intro_text",children:Object(r.jsxs)("div",{className:"inner",children:[Object(r.jsxs)("p",{children:["Gemeindemitglieder aus St. Maria Magdalena und Trinitatis laden ein.",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"Jeweils von 18.00 bis 18.30 Uhr erstrahlt ein geschm\xfccktes Fenster,"}),Object(r.jsx)("br",{}),"spazieren Sie vorbei, vielleicht gibt es eine \xdcberraschung."]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:Object(r.jsx)("strong",{children:"Die Gestaltung ber\xfccksichtigt die geltenden Coronabedingungen!"})}),Object(r.jsx)(h.a,{date:i,renderer:v})]})}),Object(r.jsx)("div",{className:"cards",children:n.days.map((function(e){return Object(r.jsx)(f,{data:e},e.date)}))}),Object(r.jsx)(O,{})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"));var k=window.location+"";!k.startsWith("https")&&k.startsWith("http://adventskalender.puk-bonn.de")&&window.location.replace(k.replace("http://","https://"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4edebf16.chunk.js.map