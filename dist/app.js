!function(u){function n(n){for(var t,e,r=n[0],a=n[1],o=n[2],i=0,s=[];i<r.length;i++)e=r[i],c[e]&&s.push(c[e][0]),c[e]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(u[t]=a[t]);for(g&&g(n);s.length;)s.shift()();return p.push.apply(p,o||[]),l()}function l(){for(var n,t=0;t<p.length;t++){for(var e=p[t],r=!0,a=1;a<e.length;a++){var o=e[a];0!==c[o]&&(r=!1)}r&&(p.splice(t--,1),n=i(i.s=e[0]))}return n}var e={},c={2:0},p=[];function i(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=e,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="dist";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=n,t=t.slice();for(var a=0;a<t.length;a++)n(t[a]);var g=r;p.push([50,0]),l()}({11:function(n,t){var e,r,a,o,i,s;e=window,r=document,a="script",o="ga",e.GoogleAnalyticsObject=o,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,i=r.createElement(a),s=r.getElementsByTagName(a)[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(i,s),ga("create","UA-73752623-2","auto"),ga("send","pageview")},25:function(n,t,e){var r=e(26);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(7).default)("1af7b034",r,!0,{})},26:function(n,t,e){(n.exports=e(5)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},3:function(n,t,e){var r=e(4);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(7).default)("5585a372",r,!0,{})},4:function(n,t,e){(n.exports=e(5)(!1)).push([n.i,"\nhtml[data-v-99128a60], body[data-v-99128a60] {\n  height: 100%;\n}\n#footer[data-v-99128a60] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-99128a60] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])},50:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e(19),o=e.n(a),i={name:"App",data:function(){return{apps:[{name:"Train number calc",url:"/train-number-calc.html"}],links:[{name:"Home Page",url:"https://hiroto-k.net/"},{name:"Profile",url:"https://hiroto-k.net/profile"},{name:"Project",url:"https://hiroto-k.net/project"},{name:"Blog (Programming)",url:"https://hiroto-k.hatenablog.com/"},{name:"Blog (Train)",url:"https://hiroto-k.github.io/blog/"}],repos:[],gitHubPages:[],hasError:!1}},computed:{reposLength:function(){return this.repos.length},gitHubPagesLength:function(){return this.gitHubPages.length}},methods:{reloadRepos:function(){this.hasError=!1,this.updateRepos()},updateRepos:function(){var t=this;this.repos=[],this.gitHubPages=[],o.a.get("https://api.github.com/users/hiroto-k/repos?per_page=100").then(function(n){return n.data}).then(function(n){n.forEach(function(n){t.repos.push(n),n.has_pages&&38377426!==n.id&&t.gitHubPages.push(n)}),t.hasError=!1}).catch(function(n){console.log(n),t.hasError=!0})}},mounted:function(){this.updateRepos()}},s=e(2);var u=function(n){e(25)},l=Object(s.a)(i,function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",{staticClass:"jumbotron"},[r("div",{staticClass:"container"},[r("h1",[e._v("Hiroto-K.github.io")]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"mb-3"},[r("h2",[e._v("Apps")]),e._v(" "),r("div",{staticClass:"list-group"},e._l(e.apps,function(n,t){return r("a",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url}},[e._v("\n            "+e._s(n.name)+"\n          ")])}))]),e._v(" "),r("div",{staticClass:"mb-4"},[r("h2",[e._v("Links")]),e._v(" "),r("div",{staticClass:"list-group"},e._l(e.links,function(n,t){return r("a",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url}},[e._v("\n            "+e._s(n.name)+"\n          ")])}))]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"mt-3 mb-3"},[e.hasError?r("div",[r("h2",[e._v("Public Repositories")]),e._v(" "),r("h3",[e._v("Error")]),e._v(" "),r("p",{staticClass:"text-danger"},[e._v("Sorry, An error has occurred.")])]):r("div",[r("h2",[e._v("Public Repositories "),r("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.reposLength))])]),e._v(" "),r("div",{staticClass:"list-group"},e._l(e.repos,function(n){return r("a",{key:e.repos.id,staticClass:"list-group-item list-group-item-action",attrs:{href:n.html_url}},[e._v("\n              "+e._s(n.full_name)+"\n            ")])}))]),e._v(" "),r("div",{staticClass:"mt-3"},[r("h2",[e._v("GitHub Pages "),r("span",{staticClass:"badge badge-primary"},[e._v(e._s(e.gitHubPagesLength))])]),e._v(" "),r("div",{staticClass:"list-group"},e._l(e.gitHubPages,function(n){return r("a",{key:e.gitHubPages.id,staticClass:"list-group-item list-group-item-action",attrs:{href:["https://hiroto-k.github.io/"+n.name]}},[e._v("\n              "+e._s(n.full_name)+"\n            ")])}))])]),e._v(" "),r("button",{staticClass:"btn btn-primary btn-sm float-right mb-5",attrs:{type:"button"},on:{click:function(n){e.reloadRepos()}}},[e._v("Reload repos")])])]),e._v(" "),r("page-footer")],1)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"lead"},[n._v("This is a web pages of "),e("a",{attrs:{href:"https://github.com/hiroto-k"}},[n._v("hiroto-k")]),n._v(".")])}],!1,u,"data-v-973cb784",null).exports;e(6),e(11);new r.a({el:"#app",render:function(n){return n(l)}})},6:function(n,t,e){"use strict";var r=e(0),a={name:"Footer",data:function(){return{sinceYear:"2015"}},computed:{currentYear:function(){return(new Date).getFullYear().toString()}}},o=e(2);var i=function(n){e(3)},s=Object(o.a)(a,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[n._v("© "+n._s(n.sinceYear)+"-"+n._s(n.currentYear)+" Hiroto-K")])])])},[],!1,i,"data-v-99128a60",null).exports;e(9);r.a.component("page-footer",s)}});