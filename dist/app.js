!function(u){function n(n){for(var t,e,r=n[0],o=n[1],a=n[2],i=0,s=[];i<r.length;i++)e=r[i],c[e]&&s.push(c[e][0]),c[e]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(u[t]=o[t]);for(h&&h(n);s.length;)s.shift()();return p.push.apply(p,a||[]),l()}function l(){for(var n,t=0;t<p.length;t++){for(var e=p[t],r=!0,o=1;o<e.length;o++){var a=e[o];0!==c[a]&&(r=!1)}r&&(p.splice(t--,1),n=i(i.s=e[0]))}return n}var e={},c={2:0},p=[];function i(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return u[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=u,i.c=e,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="dist";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=n,t=t.slice();for(var o=0;o<t.length;o++)n(t[o]);var h=r;p.push([63,0]),l()}({10:function(n,t,e){"use strict";var r=e(0),o=e(3),a=e(5),i=e.n(a),s=e(6),u={name:"Footer",computed:{currentYear:function(){return(new Date).getFullYear().toString()},gitHubUserLink:function(){return"https://github.com/hiroto-k"}}},l=e(1);var c=function(n){e(7)},p=Object(l.a)(u,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("p",{staticClass:"footer-text"},[n._v("\n      © 2015-"+n._s(n.currentYear)+"\n        "),e("a",{attrs:{href:n.gitHubUserLink}},[n._v("\n          Hiroto-K\n        ")])])])])},[],!1,c,"data-v-2695b10a",null).exports;e(15);r.a.use(o.b),o.a.localize("ja",i.a),r.a.use(s.a),r.a.component("page-footer",p)},13:function(n,t,e){var r,o,a,i,s;r=window,o=document,a="ga",r.GoogleAnalyticsObject=a,r.ga=r.ga||function(){(r.ga.q=r.ga.q||[]).push(arguments)},r.ga.l=1*new Date,i=o.createElement("script"),s=o.getElementsByTagName("script")[0],i.async=1,i.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(i,s),ga("create","UA-73752623-2","auto"),ga("send","pageview")},33:function(n,t,e){var r=e(34);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(11).default)("d5e78c84",r,!0,{})},34:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},63:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(24),a=e.n(o),i={name:"App",data:function(){return{repos:[],gitHubPages:[],hasError:!1}},computed:{links:function(){return[{name:"Home Page",url:"https://hiroto-k.net/"},{name:"Profile",url:"https://hiroto-k.net/profile"},{name:"Project",url:"https://hiroto-k.net/project"},{name:"Blog (Programming)",url:"https://hiroto-k.hatenablog.com/"},{name:"Blog (Train)",url:"https://hiroto-k.github.io/blog/"}]},icons:function(){return[{name:"Home page",url:"https://hiroto-k.net/",className:"fas fa-home"},{name:"Profile",url:"https://hiroto-k.net/profile",className:"fas fa-user-alt"},{name:"Twitter",url:"https://twitter.com/hiroto_k_",className:"fab fa-twitter"},{name:"GitHub",url:"https://github.com/hiroto-k",className:"fab fa-github"},{name:"GitLab",url:"https://gitlab.com/hiroto-k",className:"fab fa-gitlab"},{name:"Bitbucket",url:"https://bitbucket.org/hiroto-k/",className:"fab fa-bitbucket"}]},apps:function(){return[{name:"Train number calc",url:"/train-number-calc.html"},{name:"QR Code Generator",url:"/qr-code.html"}]},reposLength:function(){return this.repos.length},gitHubPagesLength:function(){return this.gitHubPages.length}},methods:{reloadRepos:function(){this.hasError=!1,this.updateRepos()},updateRepos:function(){var t=this;this.repos=[],this.gitHubPages=[],a.a.get("https://api.github.com/users/hiroto-k/repos?per_page=100").then(function(n){return n.data}).then(function(n){return n.forEach(function(n){t.repos.push(n),n.has_pages&&38377426!==n.id&&(n.gh_page_url="https://hiroto-k.github.io/".concat(n.name),t.gitHubPages.push(n))}),t.hasError=!1,n}).catch(function(n){console.log(n),t.hasError=!0})}},mounted:function(){this.updateRepos()}},s=e(1);var u=function(n){e(33)},l=Object(s.a)(i,function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("b-jumbotron",[r("h1",[e._v("Hiroto-K.github.io")]),e._v(" "),r("p",{staticClass:"lead"},[e._v("\n    This site is a github pages of "),r("a",{attrs:{href:"https://github.com/hiroto-k"}},[e._v("\n      hiroto-k\n    ")]),e._v(".\n  ")]),e._v(" "),r("div",{staticClass:"mb-3"},[r("h2",[e._v("Links")]),e._v(" "),r("b-list-group",e._l(e.links,function(n,t){return r("b-link",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url},domProps:{textContent:e._s(n.name)}})}),1)],1),e._v(" "),r("div",{staticClass:"mb-3"},[r("ul",{staticClass:"list-inline"},e._l(e.icons,function(n,t){return r("li",{key:t,staticClass:"list-inline-item"},[r("a",{staticClass:"text-muted",attrs:{href:n.url}},[r("i",{staticClass:"fa-2x",class:n.className})])])}),0)]),e._v(" "),r("div",{staticClass:"mb-3"},[r("h2",[e._v("Apps")]),e._v(" "),r("b-list-group",e._l(e.apps,function(n,t){return r("b-link",{key:t,staticClass:"list-group-item list-group-item-action",attrs:{href:n.url},domProps:{textContent:e._s(n.name)}})}),1)],1),e._v(" "),r("hr"),e._v(" "),e.hasError?[r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("Public Repositories")]),e._v(" "),r("h3",[e._v("Error")]),e._v(" "),r("p",{staticClass:"text-danger"},[e._v("\n        Sorry, An error has occurred.\n      ")])])]:[r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("\n        Public Repositories\n        "),r("b-badge",{attrs:{variant:"primary"}},[e._v("\n          "+e._s(e.reposLength)+"\n        ")])],1),e._v(" "),r("b-list-group",e._l(e.repos,function(n){return r("b-link",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.focus.bottom",value:n.description,expression:"repo.description",modifiers:{hover:!0,focus:!0,bottom:!0}}],key:n.id,staticClass:"list-group-item list-group-item-action",attrs:{href:n.html_url},domProps:{textContent:e._s(n.full_name)}})}),1)],1),e._v(" "),r("div",{staticClass:"mt-3 mb-3"},[r("h2",[e._v("\n        GitHub Pages\n        "),r("b-badge",{attrs:{variant:"primary"}},[e._v("\n          "+e._s(e.gitHubPagesLength)+"\n        ")])],1),e._v(" "),r("b-list-group",e._l(e.gitHubPages,function(n){return r("b-link",{key:n.id,staticClass:"list-group-item list-group-item-action",attrs:{href:n.gh_page_url},domProps:{textContent:e._s(n.full_name)}})}),1)],1)],e._v(" "),r("b-button",{staticClass:"btn-sm float-right mb-5",attrs:{variant:"primary"},on:{click:function(n){e.reloadRepos()}}},[e._v("\n    Reload repos\n  ")])],2)},[],!1,u,"data-v-9f1813c6",null).exports;e(10),e(13);new r.a({el:"#app",template:"\n    <b-container>\n      <App></App>\n      <page-footer></page-footer>\n    </b-container>\n  ",components:{App:l}})},7:function(n,t,e){var r=e(8);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);(0,e(11).default)("037d9ec3",r,!0,{})},8:function(n,t,e){(n.exports=e(9)(!1)).push([n.i,"\nhtml[data-v-2695b10a], body[data-v-2695b10a] {\n  height: 100%;\n}\n#footer[data-v-2695b10a] {\n  margin-bottom: 10px;\n  height: 60px;\n  border-radius: 10px;\n  -webkit-border-radius: 10px;\n  -moz-border-radius: 10px;\n  background-color: #f5f5f5;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-bottom: 0px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.footer-text[data-v-2695b10a] {\n  margin: 20px 0;\n  line-height: 60px;\n}\n",""])}});