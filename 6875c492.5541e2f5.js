(window.webpackJsonp=window.webpackJsonp||[]).push([[17,44],{128:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(121),c=a(136),s=a(137),o=a(3),i=a(24),m=a(21),u=a(127),d=a(125),p=a(123),b=a(22),h=a(131),g=a(256),y=a(259),f=a(144);let v=null;function E({hit:e,children:t}){return r.a.createElement(p.a,{to:e.url},t)}function k({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(h.a)();return r.a.createElement(p.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function j({contextualSearch:e,...t}){var l,c;const{siteMetadata:s}=Object(m.default)(),p=Object(f.a)(),h=null!==(l=null===(c=t.searchParameters)||void 0===c?void 0:c.facetFilters)&&void 0!==l?l:[],j=e?[...p,...h]:h,O={...t.searchParameters,facetFilters:j},{withBaseUrl:_}=Object(d.b)(),N=Object(u.useHistory)(),C=Object(n.useRef)(null),[T,w]=Object(n.useState)(!1),[x,S]=Object(n.useState)(null),P=Object(n.useCallback)((()=>v?Promise.resolve():Promise.all([a.e(50).then(a.bind(null,258)),Promise.all([a.e(1),a.e(51)]).then(a.bind(null,257)),a.e(1).then(a.t.bind(null,120,7))]).then((([{DocSearchModal:e}])=>{v=e}))),[]),I=Object(n.useCallback)((()=>{P().then((()=>{w(!0)}))}),[P,w]),L=Object(n.useCallback)((()=>{w(!1)}),[w]),$=Object(n.useCallback)((e=>{P().then((()=>{w(!0),S(e.key)}))}),[P,w,S]),B=Object(n.useRef)({navigate({itemUrl:e}){N.push(e)}}).current,D=Object(n.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(`${t.pathname}${t.hash}`)}})))).current,F=Object(n.useMemo)((()=>e=>r.a.createElement(k,Object(o.a)({},e,{onClose:L}))),[L]),A=Object(n.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",s.docusaurusVersion),e)),[s.docusaurusVersion]);return Object(g.a)({isOpen:T,onOpen:I,onClose:L,onInput:$,searchButtonRef:C}),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.a.createElement(y.a,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:I,ref:C}),T&&Object(i.createPortal)(r.a.createElement(v,Object(o.a)({onClose:L,initialScrollY:window.scrollY,initialQuery:x,navigator:B,transformItems:D,hitComponent:E,resultsFooterComponent:F,transformSearchClient:A},t,{searchParameters:O})),document.body))}var O=function(){const{siteConfig:e}=Object(m.default)();return r.a.createElement(j,e.themeConfig.algolia)},_=a(138),N=a(130),C=a(122),T=a(139),w=a(132),x=a(133),S=a(143),P=a(135),I=a(134),L=a(54),$=a.n(L);const B="right";var D=function(){const{navbar:{items:e,hideOnScroll:t,style:a},colorMode:{disableSwitch:c}}=Object(C.useThemeConfig)(),[s,i]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!1),{isDarkTheme:d,setLightTheme:p,setDarkTheme:b}=Object(N.a)(),{navbarRef:h,isNavbarVisible:g}=Object(T.a)(t);Object(w.a)(s);const y=Object(n.useCallback)((()=>{i(!0)}),[i]),f=Object(n.useCallback)((()=>{i(!1)}),[i]),v=Object(n.useCallback)((e=>e.target.checked?b():p()),[p,b]),E=Object(x.a)();Object(n.useEffect)((()=>{E===x.b.desktop&&i(!1)}),[E]);const{leftItems:k,rightItems:j}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:B)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:B)}))}}(e);return r.a.createElement("nav",{ref:h,className:Object(l.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===a,"navbar--primary":"primary"===a,"navbar-sidebar--show":s,[$.a.navbarHideable]:t,[$.a.navbarHidden]:!g})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:Object(l.a)($.a.navbar__toggle,"navbar__toggle"),role:"button",tabIndex:0,onClick:y,onKeyDown:y},r.a.createElement(I.a,null)),r.a.createElement(P.a,{className:Object(l.a)($.a.navbar__brand,"navbar__brand"),imageClassName:Object(l.a)($.a.navbar__logo,"navbar__logo"),titleClassName:Object(l.a)("navbar__title",{[$.a.hideLogoText]:m})}),k.map(((e,t)=>r.a.createElement(S.a,Object(o.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},j.map(((e,t)=>r.a.createElement(S.a,Object(o.a)({},e,{key:t})))),!c&&r.a.createElement(_.a,{className:$.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:d,onChange:v}),r.a.createElement(O,{handleSearchBarToggle:u,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f}),r.a.createElement("div",{className:Object(l.a)($.a.navbar__sidebar,"navbar-sidebar")},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(P.a,{className:Object(l.a)($.a.navbar__brand,"navbar__brand"),imageClassName:Object(l.a)($.a.navbar__logo,"navbar__logo"),titleClassName:"navbar__title",onClick:f}),!c&&s&&r.a.createElement(_.a,{"aria-label":"Dark mode toggle in sidebar",checked:d,onChange:v})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.a.createElement(S.a,Object(o.a)({mobile:!0},e,{onClick:f,key:t})))))))))},F=a(55),A=a.n(F);function M({to:e,href:t,label:a,prependBaseUrlToHref:n,...l}){const c=Object(d.a)(e),s=Object(d.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement(p.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:n?s:t}:{to:c},l),a)}const R=({url:e,alt:t})=>r.a.createElement("img",{className:A.a.footer__logo,alt:t,src:e});var H=function(){const{footer:e}=Object(C.useThemeConfig)(),{copyright:t,links:a=[],logo:n={}}=e||{},c=Object(d.a)(n.src);return e?r.a.createElement("footer",{className:Object(l.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},a&&a.length>0&&r.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(M,e))))):null)))),(n||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},n&&n.src&&r.a.createElement("div",{className:"margin-bottom--sm"},n.href?r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:A.a.footerLogoLink},r.a.createElement(R,{alt:n.alt,url:c})):r.a.createElement(R,{alt:n.alt,url:c})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},U=a(141),J=a(142),V=a(140);a(56);t.a=function(e){const{children:t,noFooter:a,wrapperClassName:n}=e;return Object(V.a)(),r.a.createElement(U.a,null,r.a.createElement(J.a,e),r.a.createElement(c.a,null),r.a.createElement(s.a,null),r.a.createElement(D,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},t),!a&&r.a.createElement(H,null))}},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(121),c=a(123),s=a(57),o=a.n(s);function i({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(l.a)(o.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:o.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:o.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:o.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:o.a.sidebarItemLink,activeClassName:o.a.sidebarItemLinkActive},e.title))))))}},148:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),c};e.exports=n,e.exports.default=n},149:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},150:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),c=a(123),s=a(121),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:o};function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},b=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function g(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),m(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),m(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),m(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var c=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(s))}})),m(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,c=u({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),c=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,c=0,s=[],o=[s];c>-1;){for(;(l=n[c]++)<r[c];){var i=void 0,m=t[c],u=a[c][l];if("string"==typeof u?(m=c>0?m:["plain"],i=u):(m=b(m,u.type),u.alias&&(m=b(m,u.alias)),i=u.content),"string"==typeof i){var h=i.split(d),g=h.length;s.push({types:m,content:h[0]});for(var y=1;y<g;y++)p(s),o.push(s=[]),s.push({types:m,content:h[y]})}else c++,t.push(m),a.push(i),n.push(0),r.push(i.length)}c--,t.pop(),a.pop(),n.pop(),r.pop()}return p(s),o}(void 0!==c?t.tokenize(n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(148),v=a.n(f),E=a(149),k=a.n(E),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=a(130),_=a(122);var N=()=>{const{prism:e}=Object(_.useThemeConfig)(),{isDarkTheme:t}=Object(O.a)(),a=e.theme||j,n=e.darkTheme||a;return t?n:a},C=a(58),T=a.n(C);const w=/{([\d,-]+)}/,x=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},S=/(?:title=")(.*)(?:")/;var P=({children:e,className:t,metastring:a})=>{const{prism:c}=Object(_.useThemeConfig)(),[o,m]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const p=Object(r.useRef)(null);let b=[],h="";const g=N();if(Array.isArray(e)&&(e=e.join("")),a&&w.test(a)){const e=a.match(w)[1];b=k()(e).filter((e=>e>0))}a&&S.test(a)&&(h=a.match(S)[1]);let f=t&&t.replace(/language-/,"");!f&&c.defaultLanguage&&(f=c.defaultLanguage);let E=e.replace(/\n$/,"");if(0===b.length&&void 0!==f){let t="";const a=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return x(["js","jsBlock"]);case"jsx":case"tsx":return x(["js","jsBlock","jsx"]);case"html":return x(["js","jsBlock","html"]);case"python":case"py":return x(["python"]);default:return x()}})(f),n=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<n.length;){const l=e+1,c=n[e].match(a);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${l},`;break;case"highlight-start":r=l;break;case"highlight-end":t+=`${r}-${l-1},`}n.splice(e,1)}else e+=1}b=k()(t),E=n.join("\n")}const j=()=>{v()(E),m(!0),setTimeout((()=>m(!1)),2e3)};return l.a.createElement(y,Object(n.a)({},i,{key:String(u),theme:g,code:E,language:f}),(({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:c})=>l.a.createElement(l.a.Fragment,null,h&&l.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),l.a.createElement("div",{className:T.a.codeBlockContent},l.a.createElement("div",{tabIndex:0,className:Object(s.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},l.a.createElement("div",{className:T.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=r({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map(((e,t)=>l.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t}))))))})))),l.a.createElement("button",{ref:p,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(T.a.copyButton),onClick:j},o?"Copied":"Copy")))))},I=(a(59),a(60)),L=a.n(I);var $=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(_.useThemeConfig)();return t?l.a.createElement(e,a,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[L.a.enhancedAnchor]:!n}),id:t}),a.children,l.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):l.a.createElement(e,a)},B=a(61),D=a.n(B);const F={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?l.a.createElement(P,e):l.a.createElement("code",e):t},a:e=>l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:D.a.mdxCodeBlock},e)),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6")};t.a=F},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(121),c=a(124),s=a(22),o=a(123),i=a(150),m=a(125),u=a(62),d=a.n(u);const p=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:u,isBlogPostPage:b=!1}=e,{date:h,permalink:g,tags:y,readingTime:f}=n,{author:v,title:E,image:k,keywords:j}=a,O=a.author_url||a.authorURL,_=a.author_title||a.authorTitle,N=a.author_image_url||a.authorImageURL,C=Object(m.a)(k,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:C}),k&&r.a.createElement("meta",{name:"twitter:image",content:C}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`})),r.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(()=>{const e=b?"h1":"h2",t=h.substring(0,10).split("-"),a=t[0],n=p[parseInt(t[1],10)-1],c=parseInt(t[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:Object(l.a)("margin-bottom--sm",d.a.blogPostTitle)},b?E:r.a.createElement(o.a,{to:g},E)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:d.a.blogPostDate},n," ",c,", ",a," ",f&&r.a.createElement(r.a.Fragment,null," \xb7 \u062e\u0648\u0627\u0646\u062f\u0646 \u062f\u0631 ",Math.ceil(f)," \u062f\u0642\u06cc\u0642\u0647"))),r.a.createElement("div",{className:"avatar margin-vert--md"},N&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:N,alt:v})),r.a.createElement("div",{className:"avatar__intro"},v&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},v)),r.a.createElement("small",{className:"avatar__subtitle"},_)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:i.a},t)),(y.length>0||u)&&r.a.createElement("footer",{className:"row margin-vert--lg"},y.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"\u0628\u0631\u0686\u0633\u0628 \u0647\u0627:"),y.map((({label:e,permalink:t})=>r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},e)))),u&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:n.permalink,"aria-label":`Read more about ${E}`},r.a.createElement("strong",null,"\u0627\u062f\u0627\u0645\u0647 \u0645\u0637\u0644\u0628"))))))}},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(128),c=a(158),s=a(123),o=a(147);t.default=function(e){const{metadata:t,items:a,sidebar:n}=e,{allTagsPath:i,name:m,count:u}=t;return r.a.createElement(l.a,{title:`Posts tagged "${m}"`,description:`Blog | Tagged "${m}"`,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,u,' \u067e\u0633\u062a \u0628\u0627 \u0628\u0631\u0686\u0633\u0628 "',m,'"'),r.a.createElement(s.a,{href:i},"\u0645\u0634\u0627\u0647\u062f\u0647 \u062a\u0645\u0627\u0645 \u0628\u0631\u0686\u0633\u0628 \u0647\u0627"),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(c.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}}}]);