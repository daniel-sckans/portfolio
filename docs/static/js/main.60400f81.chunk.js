(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/chocoloate-bike-1-0-1440615893.b33f72bf.jpg"},24:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},36:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.5787ef1e.svg"},38:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},39:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},40:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},41:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},42:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.b3c5fd8e.png"},43:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.b3c5fd8e.png"},44:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),r=a(21),n=a.n(r),c=a(6),o=a(8),s=a(2),m=["component","layout"],d=function(e){var t=e.component,a=e.layout,l=Object(s.a)(e,m);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(c.a,Object.assign({},l,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},u=a(11),v=a(3),p=a.n(v),E=a(17),f=i.a.forwardRef((function(e,t){var a=Object(l.useState)(window.innerHeight),r=Object(u.a)(a,2),n=r[0],c=r[1],o=Object(l.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),l=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=n-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,l)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(l.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(l.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",b),window.addEventListener("resize",h)),p())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",h))},b=Object(E.throttle)((function(){f(),p()}),30),h=Object(E.throttle)((function(){c(window.innerHeight)}),30);return Object(l.useEffect)((function(){f(),p()}),[n]),i.a.createElement(i.a.Fragment,null,e.children())}));f.propTypes={children:p.a.func.isRequired};var b=f,h=a(13),g=(a(34),a(1)),N=a.n(g),w=a(4),O=["className","src","width","height","alt"],x=function(e){var t=e.className,a=e.src,r=e.width,n=e.height,c=e.alt,o=Object(s.a)(e,O),m=Object(l.useState)(!1),d=Object(u.a)(m,2),v=d[0],p=d[1],E=Object(l.useRef)(null);Object(l.useEffect)((function(){f(E.current)}),[]);var f=function(e){var t,a,l=document.createElement("img");v||(e.style.display="none",e.before(l),l.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),l.width=e.getAttribute("width"),l.height=e.getAttribute("height"),l.style.opacity="0",e.className&&l.classList.add(e.className),l.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},o,{ref:E,className:t,src:a,width:r,height:n,alt:c,onLoad:function(){p(!0)}}))};x.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=x,j=["className"],y=function(e){var t=e.className,l=Object(s.a)(e,j),r=N()("brand",t);return i.a.createElement("div",Object.assign({},l,{className:r}),i.a.createElement("h1",{className:"m-0"},i.a.createElement(w.a,{to:"/"},i.a.createElement(D,{src:a(35),alt:"Open",className:"square",width:32,height:32}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,n=e.hideSignin,c=e.bottomOuterDivider,o=e.bottomDivider,m=Object(s.a)(e,k),d=Object(l.useState)(!1),v=Object(u.a)(d,2),p=v[0],E=v[1],f=Object(l.useRef)(null),b=Object(l.useRef)(null);Object(l.useEffect)((function(){return p&&h(),document.addEventListener("keydown",O),document.addEventListener("click",x),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",x),g()}}));var h=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",E(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),E(!1)},O=function(e){p&&27===e.keyCode&&g()},x=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==b.current&&g()},D=N()("site-header",c&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},m,{className:D}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-header-inner",o&&"has-bottom-divider")},i.a.createElement(y,null),!r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:p?g:h},i.a.createElement("span",{className:"screen-reader"},"Menu"),i.a.createElement("span",{className:"hamburger"},i.a.createElement("span",{className:"hamburger-inner"}))),i.a.createElement("nav",{ref:f,className:N()("header-nav",p&&"is-active")},i.a.createElement("div",{className:"header-nav-inner"},i.a.createElement("ul",{className:N()("list-reset text-xs",a&&"header-nav-".concat(a))},i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0",onClick:g},"Documentation"))),!n&&i.a.createElement("ul",{className:"list-reset header-nav-right"},i.a.createElement("li",null,i.a.createElement(w.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:g},"Sign up")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var F=C,L=["className"],W=function(e){var t=e.className,a=Object(s.a)(e,L),l=N()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:l}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement(w.a,{to:"/portfolio/contact"},"Contact")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"/portfolio/about-us"},"About us")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"/portfolio/faq"},"FAQ's")),i.a.createElement("li",null,i.a.createElement(w.a,{to:"/portfolio/support"},"Support"))))},q=["className"],H=function(e){var t=e.className,a=Object(s.a)(e,q),l=N()("footer-social",t);return i.a.createElement("div",Object.assign({},a,{className:l}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://facebook.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://google.com/"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Instagram"),i.a.createElement("g",null,i.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),i.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),i.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},A=["className","topOuterDivider","topDivider"],P=function(e){var t=e.className,a=e.topOuterDivider,l=e.topDivider,r=Object(s.a)(e,A),n=N()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},r,{className:n}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:N()("site-footer-inner",l&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(y,null),i.a.createElement(H,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(W,null),i.a.createElement("div",{className:"footer-copyright"},"Made by ",i.a.createElement("a",{href:"/portfolio/easter-egg"},"Cruip"),". All right reserved")))))};P.defaultProps={topOuterDivider:!1,topDivider:!1};var B=P,M=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(F,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(B,null))},S=a(5),z={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},R={types:Object(S.a)({},z.types),defaults:Object(S.a)({},z.defaults)},T={types:Object(S.a)(Object(S.a)({},z.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(S.a)(Object(S.a)({},z.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},I={types:Object(S.a)(Object(S.a)({},z.types),{},{pushLeft:p.a.bool}),defaults:Object(S.a)(Object(S.a)({},z.defaults),{},{pushLeft:!1})},V=["className"],U=function(e){var t=e.className,a=Object(s.a)(e,V),l=N()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:l}))},G=["className","tag","color","size","loading","wide","wideMobile","disabled"],Q=function(e){var t=e.className,a=e.tag,l=e.color,r=e.size,n=e.loading,c=e.wide,o=e.wideMobile,m=e.disabled,d=Object(s.a)(e,G),u=N()("button",l&&"button-".concat(l),r&&"button-".concat(r),n&&"is-loading",c&&"button-block",o&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};Q.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Y=Q,J=["className","children","handleClose","show","closeHidden","video","videoTag"],$=function(e){var t=e.className,a=e.children,r=e.handleClose,n=e.show,c=e.closeHidden,o=e.video,m=e.videoTag,d=Object(s.a)(e,J);Object(l.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(l.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},E=N()("modal",n&&"is-active",o&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,n&&i.a.createElement("div",Object.assign({},d,{className:E,onClick:r}),i.a.createElement("div",{className:"modal-inner",onClick:p},o?i.a.createElement("div",{className:"responsive-video"},"iframe"===m?i.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):i.a.createElement("video",{"v-else":!0,controls:!0,src:o})):i.a.createElement(i.a.Fragment,null,!c&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),i.a.createElement("div",{className:"modal-content"},a)))))};$.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var _=$,K=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],X=Object(S.a)({},R.defaults),Z=function(e){var t=e.className,r=e.topOuterDivider,n=e.bottomOuterDivider,c=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,v=Object(s.a)(e,K),p=Object(l.useState)(!1),E=Object(u.a)(p,2),f=E[0],b=E[1],h=N()("hero section center-content",r&&"has-top-divider",n&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),g=N()("hero-inner section-inner",c&&"has-top-divider",o&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},v,{className:h}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:g},i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Evan",i.a.createElement("span",{className:"text-color-primar-chicken"},"Daniel")),i.a.createElement("div",{className:"container-xs"},i.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Digital Media artist and professor"),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},i.a.createElement(U,null,i.a.createElement(Y,{tag:"a",color:"dark",className:"rectangle",wideMobile:!0,href:"https://google.com/"},"Get ",i.a.createElement("span",{className:"airplane"},"\xa0 started",i.a.createElement("div",{className:"aardvark"},"Roar!"))),i.a.createElement(Y,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/cruip/open-react-template/"},"View on Test"))))),i.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},i.a.createElement("a",{"data-video":"https://player.vimeo.com/video/188929412",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),b(!0)}},i.a.createElement(D,{className:"has-shadow",src:a(36),alt:"Hero",width:896,height:504}))),i.a.createElement(_,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),b(!1)},video:"https://www.youtube.com/embed/3eMFyMwD_2c",videoTag:"iframe"}))))};Z.defaultProps=X;var ee=Z,te=["className","data","children","tag"],ae=function(e){var t=e.className,a=e.data,l=e.children,r=e.tag,n=Object(s.a)(e,te),c=N()("section-header",t),o=r;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},n,{className:c}),i.a.createElement("div",{className:"container-xs"},l,a.title&&i.a.createElement(o,{className:N()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};ae.defaultProps={children:null,tag:"h2"};var le=ae,ie=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],re=Object(S.a)({},I.defaults),ne=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(s.a)(e,ie),v=N()("features-tiles section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=N()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",c&&"has-bottom-divider"),E=N()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(le,{data:{title:"Don't build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:a(37),alt:"Features tile icon 01",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),i.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:a(38),alt:"Features tile icon 02",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),i.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:a(39),alt:"Features tile icon 03",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),i.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:a(40),alt:"Features tile icon 04",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),i.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(D,{src:a(41),alt:"Features tile icon 05",width:64,height:64}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8"},"Robust Workflow"),i.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};ne.defaultProps=re;var ce=ne,oe=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],se=Object(S.a)({},T.defaults),me=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,n=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,E=Object(s.a)(e,oe),f=N()("features-split section",l&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),b=N()("features-split-inner section-inner",n&&"has-top-divider",c&&"has-bottom-divider"),h=N()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return i.a.createElement("section",Object.assign({},E,{className:f}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:b},i.a.createElement(le,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),i.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(42),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),i.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(43),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),i.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),i.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement("div",{className:N()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(D,{src:a(44),alt:"Features split 03",width:528,height:396})))))))};me.defaultProps=se;var de=me,ue=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],ve=Object(S.a)({},I.defaults),pe=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(s.a)(e,ue),u=N()("testimonial section",a&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),v=N()("testimonial-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider"),p=N()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(le,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"AppName"))))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"AppName"))))),i.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"testimonial-item-content"},i.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),i.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},i.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),i.a.createElement("span",{className:"text-color-low"}," / "),i.a.createElement("span",{className:"testimonial-item-link"},i.a.createElement("a",{href:"#0"},"AppName")))))))))};pe.defaultProps=ve;var Ee=pe,fe=["className","children","labelHidden","id"],be=function(e){var t=e.className,a=e.children,l=e.labelHidden,r=e.id,n=Object(s.a)(e,fe),c=N()("form-label",l&&"screen-reader",t);return i.a.createElement("label",Object.assign({},n,{className:c,htmlFor:r}),a)};be.defaultProps={children:null,labelHidden:!1,id:null};var he=be,ge=["children","className","status"],Ne=function(e){var t=e.children,a=e.className,l=e.status,r=Object(s.a)(e,ge),n=N()("form-hint",l&&"text-color-".concat(l),a);return i.a.createElement("div",Object.assign({},r,{className:n}),t)};Ne.defaultProps={children:null,status:!1};var we=Ne,Oe=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],xe=function(e){var t=e.className,a=e.children,l=e.label,r=e.labelHidden,n=e.type,c=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,E=e.placeholder,f=e.rows,b=e.hint,h=Object(s.a)(e,Oe),g=N()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),w=N()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),O="textarea"===n?"textarea":"input";return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement(he,{labelHidden:r,id:h.id},l),i.a.createElement("div",{className:g},i.a.createElement(O,Object.assign({},h,{type:"textarea"!==n?n:null,className:w,name:c,disabled:m,value:d,placeholder:E,rows:"textarea"===n?f:null})),a),b&&i.a.createElement(we,{status:o},b))};xe.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var De=xe,je=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],ye=Object(S.a)(Object(S.a)({},R.defaults),{},{split:!1}),ke=function(e){var t=e.className,a=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,n=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(s.a)(e,je),u=N()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",l&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),v=N()("cta-inner section-inner",r&&"has-top-divider",n&&"has-bottom-divider",m&&"cta-split");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement("div",{className:"cta-slogan"},i.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),i.a.createElement("div",{className:"cta-action"},i.a.createElement(De,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},i.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};ke.defaultProps=ye;var Ce=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ce,null),i.a.createElement(ee,{className:"illustration-section-01"}),i.a.createElement(de,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),i.a.createElement(Ee,{topDivider:!0}))},Fe=function(){return i.a.createElement("div",{class:"easter-egg-avocado"},i.a.createElement("div",{class:"nav"},i.a.createElement(w.a,{to:"/porfolio"},"Home"),i.a.createElement(w.a,{to:"/portfolio/alabama"},"Alabama")),i.a.createElement("div",{class:"inner-avocado"},i.a.createElement("div",{class:"inner-inner-avocado"},"Inner-inner div"),"Avocado",i.a.createElement("div",{class:"other-inner-inner-avocado"},"Other inner-inner div"),i.a.createElement("div",{class:"img-lion-fish"}),i.a.createElement("h6",{class:"other-inner-inner-avocado",id:"penguin",swordfish:"batman",value:"1"},"Other inner-inner div"),i.a.createElement("p",null,"Oak Tree")))},Le=a(23),We=a.n(Le),qe=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"banner"},i.a.createElement("img",{className:"cb",src:We.a}),i.a.createElement("div",{className:"text-cont"},t)))},He=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"top-nav"},i.a.createElement(w.a,{to:"/portfolio"},"Home"),i.a.createElement(w.a,{to:"/portfolio/about-us"},"About"),i.a.createElement(w.a,{to:"/portfolio/contact"},"Contact"),i.a.createElement(w.a,{to:"/portfolio/faq"},"FAQ"),i.a.createElement(w.a,{to:"/portfolio/support"},"Support")))},Ae=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(He,null),i.a.createElement(qe,null,"SUPPORT!"),i.a.createElement("div",{className:"main-content"},i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!"),i.a.createElement("div",null,"Welcome!")),i.a.createElement("iframe",{className:"cl",src:"https://www.youtube.com/embed/W6jrDPALHYc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),i.a.createElement("input",{placeholder:"Enter your name"}),i.a.createElement(B,null))},Pe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(qe,null,"About Us!"))},Be=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(qe,null,"FAQ",i.a.createElement("br",null),"(Frequently Asked Questions)"),i.a.createElement(B,null))};h.a.initialize("UA-209687432-1");var Me=function(){var e=Object(l.useRef)(),t=Object(c.f)();return Object(l.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),i.a.createElement(b,{ref:e,children:function(){return i.a.createElement(c.c,null,i.a.createElement(d,{exact:!0,path:"/portfolio",component:Ce,layout:M}),i.a.createElement(d,{exact:!0,path:"/portfolio/easter-egg",component:Fe}),i.a.createElement(d,{exact:!0,path:"/portfolio/support",component:Ae}),i.a.createElement(d,{exact:!0,path:"/portfolio/about-us",component:Pe}),i.a.createElement(d,{path:"/portfolio/faq",component:Be}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(45);var Se=Object(o.a)();n.a.render(i.a.createElement(c.b,{history:Se},i.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.60400f81.chunk.js.map