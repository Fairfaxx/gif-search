(this["webpackJsonpgif-search"]=this["webpackJsonpgif-search"]||[]).push([[0],{14:function(e,a,t){e.exports=t(37)},19:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),i=t.n(c),l=t(2),s=(t(19),t(13)),m=t.n(s);var u=function(e){var a=e.performSearch,t=Object(n.useState)(""),c=Object(l.a)(t,2),i=c[0],s=c[1];return r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),a(i),e.currentTarget.reset()}},r.a.createElement("label",{className:"is-hidden",htmlFor:"search"},"Search"),r.a.createElement("input",{type:"search",onChange:function(e){s(e.target.value)},name:"search",placeholder:"Search..."}),r.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},r.a.createElement("i",{className:"material-icons icn-search"},"search")))},o=function(e){return r.a.createElement("li",{className:"gif-wrap"},r.a.createElement("img",{src:e.url,alt:""}))},f=function(e){return r.a.createElement("li",{className:"no-gifs"},r.a.createElement("i",{className:"material-icons icon-gif"},"sentiment_very_dissatisfied"),r.a.createElement("h3",null,"Sorry, no GIFs match your search."))},h=function(e){var a,t=e.data;return a=t.length?t.map((function(e){return r.a.createElement(o,{url:e.images.fixed_height.url,key:e.id})})):r.a.createElement(f,null),r.a.createElement("ul",{className:"gif-list"},a)};var E=function(){var e=Object(n.useState)([]),a=Object(l.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)("cats"),s=Object(l.a)(i,2),o=s[0],f=s[1],E=Object(n.useState)(!0),d=Object(l.a)(E,2),g=d[0],p=d[1];return Object(n.useEffect)((function(){m()("http://api.giphy.com/v1/gifs/search?q=".concat(o,"&limit=24&api_key=TfUCIbSSSmieLm9wnIFc1T9FVVRlYqdz")).then((function(e){return c(e.data.data)})).catch((function(e){return console.log("Error fetching and parsing data",e)})).finally((function(){return p(!1)}))}),[o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"inner"},r.a.createElement("h1",{className:"main-title"},"GifSearch"),r.a.createElement(u,{performSearch:function(e){return f(e)}}))),r.a.createElement("div",{className:"main-content"},g?r.a.createElement("p",null,"Loading..."):r.a.createElement(h,{data:t})))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff554454.chunk.js.map