(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91599],{25889:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var i=t(67294),r=t(7665);function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(i),s=function(){return s=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},s.apply(this,arguments)};function c(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]])}return t}function u(){var e="undefined"!=typeof window&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1;return Math.min(Math.max(1,e),3)}"function"==typeof SuppressedError&&SuppressedError;var l=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),d=globalThis.ResizeObserver||l,f=void 0!==globalThis.ResizeObserver,h=!f;function p(e,n){void 0===n&&(n=!0);var t=i.useState({width:0,height:0}),r=t[0],o=t[1];i.useEffect((function(){if("undefined"!=typeof window&&n){var e=function(){o({width:window.innerWidth,height:window.innerHeight})};return h&&(e(),window.addEventListener("resize",e)),function(){return window.removeEventListener("resize",e)}}}),[]);var a,s,c=i.useRef(new d((a=function(e){f&&o({width:e[e.length-1].contentRect.width,height:e[e.length-1].contentRect.height})},0,s=0,function(){for(var e=this,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];clearTimeout(s),s=window.setTimeout((function(){return a.apply(e,n)}),0)})));return i.useEffect((function(){var t=c.current;if(n){var i=e.current;return e.current&&f&&t.observe(e.current),function(){t.disconnect(),i&&f&&t.unobserve(i)}}t.disconnect()}),[e,c]),r}var v={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function m(e){return Object.assign({},v,e)}function g(e){var n=e.riveLoaded,t=void 0!==n&&n,r=e.canvasRef,o=e.containerRef,a=e.options,s=void 0===a?{}:a,c=e.onCanvasHasResized,l=e.artboardBounds,d=m(s),f=i.useState({height:0,width:0}),h=f[0],v=h.height,g=h.width,w=f[1],y=i.useState({height:0,width:0}),x=y[0],b=x.height,R=x.width,j=y[1],C=i.useState(!0),E=C[0],O=C[1],S=d.fitCanvasToArtboardHeight,k=d.shouldResizeCanvasToContainer,M=d.useDevicePixelRatio,P=d.customDevicePixelRatio,_=p(o,k),L=function(e){var n=e||u(),t=i.useState(n),r=t[0],o=t[1];return i.useEffect((function(){if("undefined"!=typeof window&&"matchMedia"in window){var n=function(){var n=e||u();o(n)},t=window.matchMedia("screen and (resolution: ".concat(r,"dppx)"));return t.hasOwnProperty("addEventListener")?t.addEventListener("change",n):t.addListener(n),function(){t.hasOwnProperty("removeEventListener")?t.removeEventListener("change",n):t.removeListener(n)}}}),[r,e]),r}(P),T=null!=l?l:{},Z=T.maxX,B=T.maxY,I=i.useCallback((function(){var e,n,t,i,r=null!==(n=null===(e=o.current)||void 0===e?void 0:e.clientWidth)&&void 0!==n?n:0,a=null!==(i=null===(t=o.current)||void 0===t?void 0:t.clientHeight)&&void 0!==i?i:0;return S&&l?{width:r,height:r*(l.maxY/l.maxX)}:{width:r,height:a}}),[o,S,Z,B]);i.useEffect((function(){if(k&&o.current&&t){var e=I(),n=e.width,i=e.height,a=!1;if(r.current){var s=n!==g||i!==v;if(d.fitCanvasToArtboardHeight&&s&&(o.current.style.height=i+"px",a=!0),d.useDevicePixelRatio){if(s||n*L!==R||i*L!==b){var u=L*n,l=L*i;r.current.width=u,r.current.height=l,r.current.style.width=n+"px",r.current.style.height=i+"px",j({width:u,height:l}),a=!0}}else s&&(r.current.width=n,r.current.height=i,j({width:n,height:i}),a=!0);w({width:n,height:i})}c&&(E||a)&&c&&c(),E&&O(!1)}}),[r,o,_,L,I,E,O,b,R,v,g,c,k,S,M,t])}function w(e){var n=e.setContainerRef,t=e.setCanvasRef,i=e.className,r=void 0===i?"":i,o=e.style,u=e.children,l=c(e,["setContainerRef","setCanvasRef","className","style","children"]),d=s({width:"100%",height:"100%"},o);return a.default.createElement("div",s({ref:n,className:r},!r&&{style:d}),a.default.createElement("canvas",s({ref:t,style:{verticalAlign:"top",width:0,height:0}},l),u))}function y(e,n){void 0===n&&(n={});var t=i.useRef(null),o=i.useRef(null),c=i.useState(null),u=c[0],l=c[1],d=Boolean(e),f=m(n),h=i.useCallback((function(){u&&(u.startRendering(),u.resizeToCanvas())}),[u]);g({riveLoaded:!!u,canvasRef:t,containerRef:o,options:f,onCanvasHasResized:h,artboardBounds:null==u?void 0:u.bounds});var p=i.useCallback((function(n){if(n&&e&&d){var i=f.useOffscreenRenderer,o=new r.Rive(s(s({useOffscreenRenderer:i},e),{canvas:n}));o.on(r.EventType.Load,(function(){t.current?l(o):o.cleanup()}))}else null===n&&t.current&&(t.current.height=0,t.current.width=0);t.current=n}),[d]),v=i.useCallback((function(e){o.current=e}),[]);i.useEffect((function(){var e=new IntersectionObserver((function(e){e[0].isIntersecting?u&&u.startRendering():u&&u.stopRendering()}));return t.current&&e.observe(t.current),function(){e.disconnect()}}),[u]),i.useEffect((function(){return function(){u&&(u.cleanup(),l(null))}}),[u]);var y=null==e?void 0:e.animations;i.useEffect((function(){u&&y&&(u.isPlaying?(u.stop(u.animationNames),u.play(y)):u.isPaused&&(u.stop(u.animationNames),u.pause(y)))}),[y,u]);var x=i.useCallback((function(e){return a.default.createElement(w,s({setContainerRef:v,setCanvasRef:p},e))}),[p,v]);return{canvas:t.current,container:o.current,setCanvasRef:p,setContainerRef:v,rive:u,RiveComponent:x}}n.default=function(e){var n=e.src,t=e.artboard,i=e.animations,r=e.stateMachines,o=e.layout,u=e.useOffscreenRenderer,l=void 0===u||u,d=e.shouldDisableRiveListeners,f=void 0!==d&&d,h=e.shouldResizeCanvasToContainer,p=void 0===h||h,v=e.automaticallyHandleEvents,m=void 0!==v&&v,g=e.children,w=c(e,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),x=y({src:n,artboard:t,animations:i,layout:o,stateMachines:r,autoplay:!0,shouldDisableRiveListeners:f,automaticallyHandleEvents:m},{useOffscreenRenderer:l,shouldResizeCanvasToContainer:p}).RiveComponent;return a.default.createElement(x,s({},w),g)},n.useResizeCanvas=g,n.useRive=y,n.useStateMachineInput=function(e,n,t,o){var a=i.useState(null),s=a[0],c=a[1];return i.useEffect((function(){function i(){if(e&&n&&t||c(null),e&&n&&t){var i=e.stateMachineInputs(n);if(i){var r=i.find((function(e){return e.name===t}));void 0!==o&&r&&(r.value=o),c(r||null)}}else c(null)}i(),e&&e.on(r.EventType.Play,(function(){i()}))}),[e]),s},Object.keys(r).forEach((function(e){"default"===e||n.hasOwnProperty(e)||Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})}))},91599:function(e,n,t){"use strict";t.d(n,{Z:function(){return z}});var i=t(59499),r=t(17674),o=t(90116),a=t(67294),s=t(5152),c=t.n(s),u=t(95631),l=t(4480),d=t(40615),f=t(31190),h=t(25889),p=u.ZP.div.withConfig({displayName:"styles__StyledRizLogoWrapper",componentId:"sc-1b8wlca-0"})(["height:2.5rem;width:7rem;padding-left:0.375rem;@media (max-width:768px){height:1.625rem;width:5.313rem;padding-left:0px !important;}"]),v=t(11776),m=t(32062),g=t(85893),w=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1],i=(0,h.useRive)({src:v.AT,stateMachines:"stateMachine",artboard:"txt",autoplay:!0,onLoadError:function(){t(!0)}}),r=i.RiveComponent,o=i.rive;return(0,h.useStateMachineInput)(o,"stateMachine","usersA",2),(0,h.useStateMachineInput)(o,"stateMachine","usersB",3),(0,h.useStateMachineInput)(o,"stateMachine","citiesA",1),(0,h.useStateMachineInput)(o,"stateMachine","citiesB",9),(0,h.useStateMachineInput)(o,"stateMachine","citiesC",0),(0,g.jsxs)(p,{children:[(0,g.jsx)(d.Z,{if:!n,children:(0,g.jsx)(r,{width:"100%",height:"100%"})}),(0,g.jsx)(d.Z,{if:n,children:(0,g.jsx)(m.Z,{})})]})},y=t(26002),x=t(16163),b=t(74439),R=t(76995),j=t(18374),C=t(42340),E=t(1274),O=t(8244),S=t(23999),k=t(96088),M=t(51212),P=t(33834),_=t(60564);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=c()((function(){return t.e(3847).then(t.bind(t,3847))}),{loadableGenerated:{webpack:function(){return[3847]}}}),B=c()((function(){return t.e(57628).then(t.bind(t,18826)).then((function(e){return e.ResponsiveSelector}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[18826]}}}),I=u.ZP.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1fj3eql-0"})(["height:80px;width:100%;background-color:",";display:flex;z-index:11;transition:all 0.2s ease-in;position:sticky;top:0;box-shadow:",";:hover{z-index:99;}"," @media (max-width:768px){height:56px;"," "," ","}"],(function(e){var n=e.theme.primaryBackground;return n||"#fff"}),(function(e){var n=e.$isTop,t=e.$isEntertainmentMB,i=e.$isSticky,r=e.$isPillBarSticky;return!n&&!t&&!r&&i&&"0px -1px 2px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.12)"}),(function(e){var n=e.$isSticky,t=e.$isEntertainmentMB;return!n&&!t&&"\n    top: -5rem;\n    left: 0;\n    right: 0;\n"}),(function(e){var n=e.$isSticky,t=e.$isEntertainmentMB;return!n&&!t&&"\n      top: -3.5rem;\n    "}),(function(e){return e.$isPillBarSticky&&"\n      box-shadow: none;\n    "}),(function(e){var n=e.$isEntertainmentMB,t=e.$isPillBarSticky;return(n||t)&&"border-bottom: 1px solid ".concat(M.Z.GRAY.G6,";")})),H=u.ZP.div.withConfig({displayName:"Header__StyledHeaderContainer",componentId:"sc-1fj3eql-1"})(["display:grid;grid-auto-flow:column;grid-auto-columns:auto;",";width:calc(100% - (5.46vw * 2));margin:auto;max-width:1200px;margin:auto;align-items:center;.header-city-selector{min-width:180px;}.header-city-selector .current-selection{border-radius:4px;padding:12px 15px;border:1px solid ",";}@media (max-width:768px){height:56px;width:100%;}"],(function(e){return e.hasDropdownLinks?" \n      grid-template-columns: auto auto 1fr;\n      grid-column-gap: 24px;\n    ":""}),(function(e){return e.theme.primaryBGColor||M.Z.GRAY.G6})),N=u.ZP.div.withConfig({displayName:"Header__StyledLogo",componentId:"sc-1fj3eql-2"})((function(e){var n=e.isEntertainmentMB;return"\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-self: left;\n  justify-content: left;\n  max-width: 350px;\n  height:2rem !important;\n\n\n  .center {\n    display: flex;\n    padding-top: 0.25rem;\n  }\n\n  .image-wrap {\n    padding-right: 7px;\n    span {\n      position: relative !important;\n    }\n    img {\n      height: ".concat(n?"2.25rem":"2.5rem"," !important;\n      position: relative !important;\n      max-width: ").concat(n?"10.625rem":"100%",";\n      width: unset !important;\n      object-fit: contain;\n      padding-top: ").concat(n&&"4.5px",";\n    }\n  }\n\n  svg {\n    height: ").concat(n?"2.25rem":"2.5rem",";\n    width: auto;\n    margin-left: ").concat(n?"-1px":"11px",";\n  }\n\n  @media (max-width: 768px) {\n    display: grid;\n    grid-auto-flow: column;\n    margin-left: 1.5rem;\n\n    .image-wrap {        \n      padding-right: 0;\n      img {\n        height: ").concat(n?"20px":"26px"," !important;\n      }\n    }\n\n    svg {\n      height: ").concat(n?"20px":"26px",";\n      width: 67px;\n    }\n  }\n")})),A=u.ZP.div.withConfig({displayName:"Header__StyledHeaderElements",componentId:"sc-1fj3eql-3"})(["justify-self:right;display:flex;align-items:center;column-gap:8px;*{color:",";}@media (max-width:768px){margin-right:24px;*{color:",";}}"],(function(e){var n=e.theme.primaryBGText;return n||M.Z.GRAY.G2}),M.Z.GRAY.G2),G=u.ZP.div.withConfig({displayName:"Header__StyledVerticalDivider",componentId:"sc-1fj3eql-4"})(["border-left:0.063rem solid ",";height:2.5rem;margin-left:0.375rem;@media (max-width:768px){height:1.625rem;padding-bottom:0.25rem;}"],M.Z.LIGHT_GRAY),D=u.ZP.div.withConfig({displayName:"Header__StyledMenuItem",componentId:"sc-1fj3eql-5"})(["margin-left:24px;font-size:15px;font-family:",";color:",";text-decoration:none;cursor:pointer;padding:0.5rem 0.75rem;border-radius:0.25rem;&:hover{background-color:",";}@media (max-width:768px){margin-left:16px;}"],_.x.FONT_STACK,(function(e){return e.color||M.Z.BRAND.PURPS}),M.Z.BACKGROUND.FLOATING_PURPS),z=function(e){var n,t,s=(0,a.useState)(!1),c=s[0],u=s[1],h=e.languages,p=e.headerLinks,M=e.currentLanguage,_=e.logoUrl,L=e.logoAltText,z=e.isMobile,$=e.showGroupBooking,Y=void 0!==$&&$,U=e.logoRedirectionURL,q=e.showTicketRedirectionURL,K=e.hasPoweredByHeadoutLogo,W=e.openGroupBookingModal,J=e.slices,F=void 0===J?[]:J,V=e.hasDropdownLinks,X=e.dropdownLinks,Q=e.showTicketMenu,ee=e.isEntertainmentMB,ne=void 0!==ee&&ee,te=e.primaryCity,ie=e.taggedCity,re=e.categoryHeaderMenu,oe=e.categoryHeaderMenuExists,ae=void 0!==oe&&oe,se=(0,l.sJ)(S.c),ce=(0,l.sJ)(k.J),ue=null!==h&&void 0!==h&&h.length?[].concat((0,o.Z)(h),[{code:M}]):[{code:M}],le=(0,l.sJ)(O.n),de=le.isSidenavScroll,fe=le.isPillBarSticky,he=ae?Object.keys(re).length>0:Y||!(null===p||void 0===p||null===(n=p.filter((function(e){var n;return null===(n=e.link_url)||void 0===n?void 0:n.url})))||void 0===n||!n.length)||F.length,pe=(0,a.useRef)(null),ve=(0,a.useRef)(null),me=(0,a.useState)(0),ge=me[0],we=me[1],ye=(0,a.useState)(!1),xe=ye[0],be=ye[1],Re=(0,l.FV)(O.n),je=(0,r.Z)(Re,2),Ce=je[0],Ee=je[1];(0,R.w)(pe,(function(){u(!1)}),[ve]);var Oe=(null===p||void 0===p||null===(t=p.filter((function(e){var n;return null===(n=e.link_url)||void 0===n?void 0:n.url})))||void 0===t?void 0:t.map((function(e){var n;return{slice_type:"menu_item",primary:{label:e.link_heading,url:{url:(0,E.jE)(null===e||void 0===e||null===(n=e.link_url)||void 0===n?void 0:n.url),target:e.link_url.target}}}})))||[];Y&&Oe.push({slice_type:"group_booking",action:function(){W()},toggleMenu:function(){return u((function(e){return!e}))}}),(0,a.useEffect)((function(){if(window){var e=(0,C.P2)((function(){if(we(window.pageYOffset),ae)be(!!z);else{var e=ge>window.pageYOffset;be(e)}}),500);return window.addEventListener("scroll",e,{passive:!0}),function(){window.removeEventListener("scroll",e)}}}),[ge]);return(0,a.useEffect)((function(){var e=setTimeout((function(){de&&Ee(T(T({},Ce),{},{isSidenavScroll:!1}))}),5e3);return function(){return clearTimeout(e)}}),[de]),(0,g.jsx)(I,{$isSticky:xe,$isTop:ge<=80,$isEntertainmentMB:ne,$isPillBarSticky:fe,children:(0,g.jsxs)(H,{hasDropdownLinks:!z&&V,children:[(0,g.jsx)("a",{href:U||"/",children:(0,g.jsxs)(N,{isEntertainmentMB:ne,children:[(0,g.jsx)(b.default,{url:_,alt:L,priority:!0,fill:!0,height:"40",width:"130",autoCrop:!1,className:"center",fetchPriority:"high"}),(0,g.jsxs)(d.Z,{if:K&&!ne,children:[(0,g.jsx)(G,{}),(0,g.jsx)(w,{})]}),(0,g.jsx)(d.Z,{if:K&&ne,children:(0,g.jsx)(m.Z,{})})]})}),(0,g.jsx)(d.Z,{if:!z&&V,children:(0,g.jsx)("div",{className:"header-links",children:(0,g.jsx)(B,{options:X,onChange:function(e){return window.location.href=e.value},customClassName:"header-city-selector"})})}),(0,g.jsxs)(A,{active:he,children:[(0,g.jsx)(d.Z,{if:!F&&p,children:(0,g.jsx)(y.Z,{headerLinks:p,openGroupBookingModal:W,isMobile:z,showGroupBooking:Y,hiddenMobile:c})}),(0,g.jsx)(d.Z,{if:F,children:(0,g.jsx)("span",{ref:ve,children:(0,g.jsx)(Z,{isMobile:z,isActive:c,slice:F.filter((function(e){return"navigation"===e.slice_type})),oldMenuItems:Oe,primaryCity:te,taggedCity:ie,categoryHeaderMenu:re,categoryHeaderMenuExists:ae})})}),(0,g.jsx)(d.Z,{if:Q,children:(0,g.jsx)(D,{as:"a",href:q,onClick:function(){return(0,j.L9)((0,i.Z)({eventName:v.dW.MICROSITE_PAGE_CTA_CLICKED},v.Oh.CTA_TYPE,v.me.TICKETS))},children:P.j.TICKETS})}),(0,g.jsx)(d.Z,{if:(null===se||void 0===se?void 0:se.length)||(null===ue||void 0===ue?void 0:ue.length),children:(0,g.jsx)(f.Z,{currencies:se,languages:ue,currentLanguage:M,isMobile:z})}),(0,g.jsx)(d.Z,{if:z&&he,children:(0,g.jsx)("div",{ref:pe,onClick:function(){u((function(e){return!e})),(0,j.L9)(T({eventName:v.dW.HAMBURGER_MENU_CLICKED},(0,j.VL)(ce)))},tabIndex:0,role:"button",children:(0,g.jsx)(x.Z,{isActive:c})})})]})]})})}}}]);
//# sourceMappingURL=91599-00a5c0a1cc2f989c.js.map