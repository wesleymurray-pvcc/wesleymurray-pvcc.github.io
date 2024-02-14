"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6078],{83690:function(e){e.exports=function(e,n){for(var t=-1,r=null==e?0:e.length,u=Array(r);++t<r;)u[t]=n(e[t],t,e);return u}},38824:function(e,n,t){var r=t(53066),u=t(217);e.exports=function(e,n){n=r(n,e);for(var t=0,o=n.length;null!=e&&t<o;)e=e[u(n[t++])];return t&&t==o?e:void 0}},2218:function(e,n,t){var r=t(14212),u=t(83690),o=t(95059),a=t(62704),l=1/0,i=r?r.prototype:void 0,c=i?i.toString:void 0;e.exports=function e(n){if("string"==typeof n)return n;if(o(n))return u(n,e)+"";if(a(n))return c?c.call(n):"";var t=n+"";return"0"==t&&1/n==-l?"-0":t}},53066:function(e,n,t){var r=t(95059),u=t(55632),o=t(35508),a=t(25635);e.exports=function(e,n){return r(e)?e:u(e,n)?[e]:o(a(e))}},55632:function(e,n,t){var r=t(95059),u=t(62704),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;e.exports=function(e,n){if(r(e))return!1;var t=typeof e;return!!("number"==t||"symbol"==t||"boolean"==t||null==e||u(e))||a.test(e)||!o.test(e)||null!=n&&e in Object(n)}},53092:function(e,n,t){var r=t(49512);e.exports=function(e){var n=r(e,function(e){return 500===t.size&&t.clear(),e}),t=n.cache;return n}},35508:function(e,n,t){var r=t(53092),u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(u,function(e,t,r,u){n.push(r?u.replace(o,"$1"):t||e)}),n});e.exports=a},217:function(e,n,t){var r=t(62704),u=1/0;e.exports=function(e){if("string"==typeof e||r(e))return e;var n=e+"";return"0"==n&&1/e==-u?"-0":n}},39100:function(e){e.exports=function(e){return e}},62704:function(e,n,t){var r=t(7976),u=t(19340);e.exports=function(e){return"symbol"==typeof e||u(e)&&"[object Symbol]"==r(e)}},49512:function(e,n,t){var r=t(93785);function u(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw TypeError("Expected a function");var t=function(){var r=arguments,u=n?n.apply(this,r):r[0],o=t.cache;if(o.has(u))return o.get(u);var a=e.apply(this,r);return t.cache=o.set(u,a)||o,a};return t.cache=new(u.Cache||r),t}u.Cache=r,e.exports=u},25635:function(e,n,t){var r=t(2218);e.exports=function(e){return null==e?"":r(e)}},47907:function(e,n,t){var r=t(15313);t.o(r,"useParams")&&t.d(n,{useParams:function(){return r.useParams}}),t.o(r,"usePathname")&&t.d(n,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(n,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(n,{useSearchParams:function(){return r.useSearchParams}}),t.o(r,"useSelectedLayoutSegment")&&t.d(n,{useSelectedLayoutSegment:function(){return r.useSelectedLayoutSegment}}),t.o(r,"useServerInsertedHTML")&&t.d(n,{useServerInsertedHTML:function(){return r.useServerInsertedHTML}})},62523:function(e,n,t){t.d(n,{K:function(){return o}});var r=t(64090),u=t(44022).aS?Symbol.for("__APOLLO_CONTEXT__"):"__APOLLO_CONTEXT__";function o(){var e=r.createContext[u];return e||(Object.defineProperty(r.createContext,u,{value:e=r.createContext({}),enumerable:!1,writable:!1,configurable:!0}),e.displayName="ApolloContext"),e}},99259:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(77542),u=t(64090),o=t(62523);function a(e){var n=(0,u.useContext)((0,o.K)()),t=e||n.client;return __DEV__?(0,r.kG)(!!t,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'):(0,r.kG)(!!t,32),t}},69512:function(e,n,t){t.d(n,{h:function(){return f}});var r=t(72599),u=t(99030),o=t(48726),a=t(7362),l=t(64090),i=t(3827),c={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},s={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},f=(0,u.forwardRef)(function(e,n){let{size:t,colorScheme:u,variant:f,className:d,spacing:v="0.5rem",isAttached:p,isDisabled:m,orientation:h="horizontal",...b}=e,y=(0,a.cx)("chakra-button__group",d),x=(0,l.useMemo)(()=>({size:t,colorScheme:u,variant:f,isDisabled:m}),[t,u,f,m]),g={display:"inline-flex",...p?c[h]:s[h](v)},k="vertical"===h;return(0,i.jsx)(r.D,{value:x,children:(0,i.jsx)(o.chakra.div,{ref:n,role:"group",__css:g,className:y,"data-attached":p?"":void 0,"data-orientation":h,flexDir:k?"column":void 0,...b})})});f.displayName="ButtonGroup"},55849:function(e,n,t){t.d(n,{h:function(){return l}});var r=t(64090),u=t(7362),o=t(16881);function a(e){let{tagName:n,isContentEditable:t}=e.target;return"INPUT"!==n&&"TEXTAREA"!==n&&!0!==t}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:n,isDisabled:t,isFocusable:l,clickOnEnter:i=!0,clickOnSpace:c=!0,onMouseDown:s,onMouseUp:f,onClick:d,onKeyDown:v,onKeyUp:p,tabIndex:m,onMouseOver:h,onMouseLeave:b,...y}=e,[x,g]=(0,r.useState)(!0),[k,C]=(0,r.useState)(!1),E=function(){let e=(0,r.useRef)(new Map),n=e.current,t=(0,r.useCallback)((n,t,r,u)=>{e.current.set(r,{type:t,el:n,options:u}),n.addEventListener(t,r,u)},[]),u=(0,r.useCallback)((n,t,r,u)=>{n.removeEventListener(t,r,u),e.current.delete(r)},[]);return(0,r.useEffect)(()=>()=>{n.forEach((e,n)=>{u(e.el,e.type,n,e.options)})},[u,n]),{add:t,remove:u}}(),_=x?m:m||0,w=t&&!l,S=(0,r.useCallback)(e=>{if(t){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),null==d||d(e)},[t,d]),M=(0,r.useCallback)(e=>{k&&a(e)&&(e.preventDefault(),e.stopPropagation(),C(!1),E.remove(document,"keyup",M,!1))},[k,E]),D=(0,r.useCallback)(e=>{if(null==v||v(e),t||e.defaultPrevented||e.metaKey||!a(e.nativeEvent)||x)return;let n=i&&"Enter"===e.key;c&&" "===e.key&&(e.preventDefault(),C(!0)),n&&(e.preventDefault(),e.currentTarget.click()),E.add(document,"keyup",M,!1)},[t,x,v,i,c,E,M]),P=(0,r.useCallback)(e=>{null==p||p(e),!t&&!e.defaultPrevented&&!e.metaKey&&a(e.nativeEvent)&&!x&&c&&" "===e.key&&(e.preventDefault(),C(!1),e.currentTarget.click())},[c,x,t,p]),T=(0,r.useCallback)(e=>{0===e.button&&(C(!1),E.remove(document,"mouseup",T,!1))},[E]),R=(0,r.useCallback)(e=>{if(0===e.button){if(t){e.stopPropagation(),e.preventDefault();return}x||C(!0),e.currentTarget.focus({preventScroll:!0}),E.add(document,"mouseup",T,!1),null==s||s(e)}},[t,x,s,E,T]),N=(0,r.useCallback)(e=>{0===e.button&&(x||C(!1),null==f||f(e))},[f,x]),L=(0,r.useCallback)(e=>{if(t){e.preventDefault();return}null==h||h(e)},[t,h]),A=(0,r.useCallback)(e=>{k&&(e.preventDefault(),C(!1)),null==b||b(e)},[k,b]),O=(0,o.lq)(n,e=>{e&&"BUTTON"!==e.tagName&&g(!1)});return x?{...y,ref:O,type:"button","aria-disabled":w?void 0:t,disabled:w,onClick:S,onMouseDown:s,onMouseUp:f,onKeyUp:p,onKeyDown:v,onMouseOver:h,onMouseLeave:b}:{...y,ref:O,role:"button","data-active":(0,u.PB)(k),"aria-disabled":t?"true":void 0,tabIndex:w?void 0:_,onClick:S,onMouseDown:R,onMouseUp:N,onKeyUp:P,onKeyDown:D,onMouseOver:L,onMouseLeave:A}}},99948:function(e,n,t){t.d(n,{k:function(){return r}});function r(e){let{wasSelected:n,enabled:t,isSelected:r,mode:u="unmount"}=e;return!t||!!r||"keepMounted"===u&&!!n}},18679:function(e,n,t){t.d(n,{d:function(){return l}});var r=t(99528),u=t(99030),o=t(48726),a=t(3827),l=(0,u.forwardRef)((e,n)=>{let t=(0,r.x)();return(0,a.jsx)(o.chakra.span,{ref:n,...e,__css:t.command,className:"chakra-menu__command"})});l.displayName="MenuCommand"},9762:function(e,n,t){t.d(n,{s:function(){return s}});var r=t(18679),u=t(99083),o=t(34932),a=t(20482),l=t(99030),i=t(7362),c=t(3827),s=(0,l.forwardRef)((e,n)=>{let{icon:t,iconSpacing:l="0.75rem",command:s,commandSpacing:f="0.75rem",children:d,...v}=e,p=(0,a.iX)(v,n),m=t||s?(0,c.jsx)("span",{style:{pointerEvents:"none",flex:1},children:d}):d;return(0,c.jsxs)(u.C,{...p,className:(0,i.cx)("chakra-menu__menuitem",p.className),children:[t&&(0,c.jsx)(o.O,{fontSize:"0.8em",marginEnd:l,children:t}),m,s&&(0,c.jsx)(r.d,{marginStart:f,children:s})]})});s.displayName="MenuItem"},14428:function(e,n,t){t.d(n,{q:function(){return d}});var r=t(99528),u=t(20482),o=t(7362),a=t(48726),l=t(99030),i=t(23538),c=t(3827),s={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},f=(0,a.chakra)(i.E.div),d=(0,l.forwardRef)(function(e,n){var t,l;let{rootProps:i,motionProps:d,...v}=e,{isOpen:p,onTransitionEnd:m,unstable__animationState:h}=(0,u.Xh)(),b=(0,u._l)(v,n),y=(0,u.Qh)(i),x=(0,r.x)();return(0,c.jsx)(a.chakra.div,{...y,__css:{zIndex:null!=(l=e.zIndex)?l:null==(t=x.list)?void 0:t.zIndex},children:(0,c.jsx)(f,{variants:s,initial:!1,animate:p?"enter":"exit",__css:{outline:0,...x.list},...d,className:(0,o.cx)("chakra-menu__menu-list",b.className),...b,onUpdate:m,onAnimationComplete:(0,o.PP)(h.onComplete,b.onAnimationComplete)})})});d.displayName="MenuList"},34932:function(e,n,t){t.d(n,{O:function(){return i}});var r=t(99528),u=t(48726),o=t(7362),a=t(64090),l=t(3827),i=e=>{let{className:n,children:t,...i}=e,c=(0,r.x)(),s=a.Children.only(t),f=(0,a.isValidElement)(s)?(0,a.cloneElement)(s,{focusable:"false","aria-hidden":!0,className:(0,o.cx)("chakra-menu__icon",s.props.className)}):null,d=(0,o.cx)("chakra-menu__icon-wrapper",n);return(0,l.jsx)(u.chakra.span,{className:d,...i,__css:c.icon,children:f})};i.displayName="MenuIcon"},99083:function(e,n,t){t.d(n,{C:function(){return i}});var r=t(99528),u=t(99030),o=t(48726),a=t(64090),l=t(3827),i=(0,u.forwardRef)((e,n)=>{let{type:t,...u}=e,i=(0,r.x)(),c=u.as||t?null!=t?t:void 0:"button",s=(0,a.useMemo)(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...i.item}),[i.item]);return(0,l.jsx)(o.chakra.button,{ref:n,type:c,...u,__css:s})})},20482:function(e,n,t){t.d(n,{wN:function(){return g},Kb:function(){return _},H9:function(){return D},zZ:function(){return P},Xh:function(){return w},mX:function(){return E},Zf:function(){return C},oZ:function(){return k},iX:function(){return L},_l:function(){return R},gO:function(){return A},Vg:function(){return O},Qh:function(){return N},w8:function(){return j}});var r=t(64090),u=t(55849),o=t(93043),a=t(56126),l=t(72981),i=t(76798),c=t(34322);function s(e,n){var t;let r=e.target;return(!r||!!f(r).contains(r))&&!(null==(t=n.current)?void 0:t.contains(r))}function f(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}var d=t(66210),v=t(8608),p=t(97951),m=t(67342),h=t(10806),b=t(16881),y=t(7362),x=t(99948),[g,k,C,E]=(0,o.n)(),[_,w]=(0,v.k)({strict:!1,name:"MenuContext"});function S(e){var n;return null!=(n=null==e?void 0:e.ownerDocument)?n:document}function M(e){return S(e).activeElement===e}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{id:n,closeOnSelect:t=!0,closeOnBlur:u=!0,initialFocusRef:o,autoSelect:v=!0,isLazy:p,isOpen:m,defaultIsOpen:b,onClose:y,onOpen:x,placement:g="bottom-start",lazyBehavior:k="unmount",direction:E,computePositionOnMount:_=!1,...w}=e,M=(0,r.useRef)(null),D=(0,r.useRef)(null),P=C(),T=(0,r.useCallback)(()=>{requestAnimationFrame(()=>{var e;null==(e=M.current)||e.focus({preventScroll:!1})})},[]),R=(0,r.useCallback)(()=>{let e=setTimeout(()=>{var e;if(o)null==(e=o.current)||e.focus();else{let e=P.firstEnabled();e&&K(e.index)}});B.current.add(e)},[P,o]),N=(0,r.useCallback)(()=>{let e=setTimeout(()=>{let e=P.lastEnabled();e&&K(e.index)});B.current.add(e)},[P]),L=(0,r.useCallback)(()=>{null==x||x(),v?R():T()},[v,R,T,x]),{isOpen:A,onOpen:O,onClose:j,onToggle:I}=(0,i.q)({isOpen:m,defaultIsOpen:b,onClose:y,onOpen:L});!function(e){let{ref:n,handler:t,enabled:u=!0}=e,o=(0,c.W)(t),a=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;(0,r.useEffect)(()=>{if(!u)return;let e=e=>{s(e,n)&&(a.isPointerDown=!0)},r=e=>{if(a.ignoreEmulatedMouseEvents){a.ignoreEmulatedMouseEvents=!1;return}a.isPointerDown&&t&&s(e,n)&&(a.isPointerDown=!1,o(e))},l=e=>{a.ignoreEmulatedMouseEvents=!0,t&&a.isPointerDown&&s(e,n)&&(a.isPointerDown=!1,o(e))},i=f(n.current);return i.addEventListener("mousedown",e,!0),i.addEventListener("mouseup",r,!0),i.addEventListener("touchstart",e,!0),i.addEventListener("touchend",l,!0),()=>{i.removeEventListener("mousedown",e,!0),i.removeEventListener("mouseup",r,!0),i.removeEventListener("touchstart",e,!0),i.removeEventListener("touchend",l,!0)}},[t,n,o,a,u])}({enabled:A&&u,ref:M,handler:e=>{var n;(null==(n=D.current)?void 0:n.contains(e.target))||j()}});let q=(0,l.D)({...w,enabled:A||_,placement:g,direction:E}),[F,K]=(0,r.useState)(-1);(0,h.r)(()=>{A||K(-1)},[A]),(0,a.C)(M,{focusRef:D,visible:A,shouldFocus:!0});let z=(0,d.h)({isOpen:A,ref:M}),[U,W]=function(e){for(var n=arguments.length,t=Array(n>1?n-1:0),u=1;u<n;u++)t[u-1]=arguments[u];let o=(0,r.useId)(),a=e||o;return(0,r.useMemo)(()=>t.map(e=>"".concat(e,"-").concat(a)),[a,t])}(n,"menu-button","menu-list"),X=(0,r.useCallback)(()=>{O(),T()},[O,T]),B=(0,r.useRef)(new Set([]));(0,r.useEffect)(()=>{let e=B.current;return()=>{e.forEach(e=>clearTimeout(e)),e.clear()}},[]);let H=(0,r.useCallback)(()=>{O(),R()},[R,O]),G=(0,r.useCallback)(()=>{O(),N()},[O,N]),V=(0,r.useCallback)(()=>{var e,n;let t=S(M.current),r=null==(e=M.current)?void 0:e.contains(t.activeElement);if(!(A&&!r))return;let u=null==(n=P.item(F))?void 0:n.node;null==u||u.focus({preventScroll:!0})},[A,F,P]),Z=(0,r.useRef)(null);return{openAndFocusMenu:X,openAndFocusFirstItem:H,openAndFocusLastItem:G,onTransitionEnd:V,unstable__animationState:z,descendants:P,popper:q,buttonId:U,menuId:W,forceUpdate:q.forceUpdate,orientation:"vertical",isOpen:A,onToggle:I,onOpen:O,onClose:j,menuRef:M,buttonRef:D,focusedIndex:F,closeOnSelect:t,closeOnBlur:u,autoSelect:v,setFocusedIndex:K,isLazy:p,lazyBehavior:k,initialFocusRef:o,rafId:Z}}function P(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=w(),{onToggle:u,popper:o,openAndFocusFirstItem:a,openAndFocusLastItem:l}=t,i=(0,r.useCallback)(e=>{let n={Enter:a,ArrowDown:a,ArrowUp:l}[e.key];n&&(e.preventDefault(),e.stopPropagation(),n(e))},[a,l]);return{...e,ref:(0,b.lq)(t.buttonRef,n,o.referenceRef),id:t.buttonId,"data-active":(0,y.PB)(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:(0,y.v0)(e.onClick,u),onKeyDown:(0,y.v0)(e.onKeyDown,i)}}function T(e){var n;return function(e){var n;if(!(null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE))return!1;let t=null!=(n=e.ownerDocument.defaultView)?n:window;return e instanceof t.HTMLElement}(e)&&!!(null==(n=null==e?void 0:e.getAttribute("role"))?void 0:n.startsWith("menuitem"))}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=w();if(!t)throw Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");let{focusedIndex:u,setFocusedIndex:o,menuRef:a,isOpen:l,onClose:i,menuId:c,isLazy:s,lazyBehavior:f,unstable__animationState:d}=t,v=k(),p=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{timeout:n=300,preventDefault:t=()=>!0}=e,[u,o]=(0,r.useState)([]),a=(0,r.useRef)(),l=()=>{a.current&&(clearTimeout(a.current),a.current=null)},i=()=>{l(),a.current=setTimeout(()=>{o([]),a.current=null},n)};return(0,r.useEffect)(()=>l,[]),function(e){return n=>{if("Backspace"===n.key){let e=[...u];e.pop(),o(e);return}if(function(e){let{key:n}=e;return 1===n.length||n.length>1&&/[^a-zA-Z0-9]/.test(n)}(n)){let r=u.concat(n.key);t(n)&&(n.preventDefault(),n.stopPropagation()),o(r),e(r.join("")),i()}}}}({preventDefault:e=>" "!==e.key&&T(e.target)}),m=(0,r.useCallback)(e=>{if(!e.currentTarget.contains(e.target))return;let n={Tab:e=>e.preventDefault(),Escape:i,ArrowDown:()=>{let e=v.nextEnabled(u);e&&o(e.index)},ArrowUp:()=>{let e=v.prevEnabled(u);e&&o(e.index)}}[e.key];if(n){e.preventDefault(),n(e);return}let t=p(e=>{let n=function(e,n,t,r){if(null==n)return r;if(!r)return e.find(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));let u=e.filter(e=>t(e).toLowerCase().startsWith(n.toLowerCase()));if(u.length>0){let n;return u.includes(r)?((n=u.indexOf(r)+1)===u.length&&(n=0),u[n]):(n=e.indexOf(u[0]),e[n])}return r}(v.values(),e,e=>{var n,t;return null!=(t=null==(n=null==e?void 0:e.node)?void 0:n.textContent)?t:""},v.item(u));n&&o(v.indexOf(n.node))});T(e.target)&&t(e)},[v,u,p,i,o]),h=(0,r.useRef)(!1);l&&(h.current=!0);let g=(0,x.k)({wasSelected:h.current,enabled:s,mode:f,isSelected:d.present});return{...e,ref:(0,b.lq)(a,n),children:g?e.children:null,tabIndex:-1,role:"menu",id:c,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:(0,y.v0)(e.onKeyDown,m)}}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{popper:n,isOpen:t}=w();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{onMouseEnter:t,onMouseMove:o,onMouseLeave:a,onClick:l,onFocus:i,isDisabled:c,isFocusable:s,closeOnSelect:f,type:d,...v}=e,{setFocusedIndex:p,focusedIndex:m,closeOnSelect:y,onClose:x,menuRef:g,isOpen:k,menuId:C,rafId:_}=w(),S=(0,r.useRef)(null),D="".concat(C,"-menuitem-").concat((0,r.useId)()),{index:P,register:R}=E({disabled:c&&!s}),N=(0,r.useCallback)(e=>{null==t||t(e),c||p(P)},[p,P,c,t]),L=(0,r.useCallback)(e=>{null==o||o(e),S.current&&!M(S.current)&&N(e)},[N,o]),A=(0,r.useCallback)(e=>{null==a||a(e),c||p(-1)},[p,c,a]),O=(0,r.useCallback)(e=>{null==l||l(e),T(e.currentTarget)&&(null!=f?f:y)&&x()},[x,l,y,f]),j=(0,r.useCallback)(e=>{null==i||i(e),p(P)},[p,i,P]),I=P===m,q=c&&!s;(0,h.r)(()=>{if(k)return I&&!q&&S.current?(_.current&&cancelAnimationFrame(_.current),_.current=requestAnimationFrame(()=>{var e;null==(e=S.current)||e.focus({preventScroll:!0}),_.current=null})):g.current&&!M(g.current)&&g.current.focus({preventScroll:!0}),()=>{_.current&&cancelAnimationFrame(_.current)}},[I,q,g,k]);let F=(0,u.h)({onClick:O,onFocus:j,onMouseEnter:N,onMouseMove:L,onMouseLeave:A,ref:(0,b.lq)(R,S,n),isDisabled:c,isFocusable:s});return{...v,...F,type:null!=d?d:F.type,id:D,role:"menuitem",tabIndex:I?0:-1}}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,{type:t="radio",isChecked:r,...u}=e;return{...L(u,n),role:"menuitem".concat(t),"aria-checked":r}}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{children:n,type:t="radio",value:u,defaultValue:o,onChange:a,...l}=e,i="radio"===t,[c,s]=(0,m.T)({defaultValue:null!=o?o:i?"":[],value:u,onChange:a}),f=(0,r.useCallback)(e=>{"radio"===t&&"string"==typeof c&&s(e),"checkbox"===t&&Array.isArray(c)&&s(c.includes(e)?c.filter(n=>n!==e):c.concat(e))},[c,s,t]),d=(0,p.W)(n).map(e=>{if("MenuItemOption"!==e.type.id)return e;let n="radio"===t?e.props.value===c:c.includes(e.props.value);return(0,r.cloneElement)(e,{type:t,onClick:n=>{var t,r;f(e.props.value),null==(r=(t=e.props).onClick)||r.call(t,n)},isChecked:n})});return{...l,children:d}}function j(){let{isOpen:e,onClose:n}=w();return{isOpen:e,onClose:n}}},99528:function(e,n,t){t.d(n,{v:function(){return v},x:function(){return d}});var r=t(20482),u=t(8608),o=t(56335),a=t(31073),l=t(16915),i=t(7362),c=t(64090),s=t(3827),[f,d]=(0,u.k)({name:"MenuStylesContext",errorMessage:"useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "}),v=e=>{let{children:n}=e,t=(0,o.useMultiStyleConfig)("Menu",e),u=(0,a.Lr)(e),{direction:d}=(0,l.useTheme)(),{descendants:v,...p}=(0,r.H9)({...u,direction:d}),m=(0,c.useMemo)(()=>p,[p]),{isOpen:h,onClose:b,forceUpdate:y}=m;return(0,s.jsx)(r.wN,{value:v,children:(0,s.jsx)(r.Kb,{value:m,children:(0,s.jsx)(f,{value:t,children:(0,i.Pu)(n,{isOpen:h,onClose:b,forceUpdate:y})})})})};v.displayName="Menu"},44215:function(e,n,t){t.d(n,{j:function(){return s}});var r=t(99528),u=t(20482),o=t(99030),a=t(48726),l=t(7362),i=t(3827),c=(0,o.forwardRef)((e,n)=>{let t=(0,r.x)();return(0,i.jsx)(a.chakra.button,{ref:n,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),s=(0,o.forwardRef)((e,n)=>{let{children:t,as:r,...o}=e,s=(0,u.zZ)(o,n),f=r||c;return(0,i.jsx)(f,{...s,className:(0,l.cx)("chakra-menu__menu-button",e.className),children:(0,i.jsx)(a.chakra.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:e.children})})});s.displayName="MenuButton"},66210:function(e,n,t){t.d(n,{h:function(){return a}});var r=t(64090),u=t(30856),o=t(28141);function a(e){let{isOpen:n,ref:t}=e,[a,l]=(0,r.useState)(n),[i,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{i||(l(n),c(!0))},[n,i,a]),(0,u.O)(()=>t.current,"animationend",()=>{l(n)}),{present:!(!n&&!a),onComplete(){var e;let n=new((0,o.kR)(t.current)).CustomEvent("animationend",{bubbles:!0});null==(e=t.current)||e.dispatchEvent(n)}}}},56126:function(e,n,t){t.d(n,{C:function(){return s},G:function(){return d}});var r=t(28141),u=t(22665),o=t(51683),a=t(30856),l=t(50905),i=t(10806),c=t(64090);function s(e,n){let{shouldFocus:t,visible:o,focusRef:a}=n,l=t&&!o;(0,i.r)(()=>{let n;if(!l||function(e){let n=e.current;if(!n)return!1;let t=(0,r.vY)(n);return!(!t||n.contains(t))&&!!(0,u.Wq)(t)}(e))return;let t=(null==a?void 0:a.current)||e.current;if(t)return n=requestAnimationFrame(()=>{t.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(n)}},[l,e,a])}var f={preventScroll:!0,shouldFocus:!1};function d(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,{focusRef:t,preventScroll:r,shouldFocus:u,visible:s}=n,d="current"in e?e.current:e,v=u&&s,p=(0,c.useRef)(v),m=(0,c.useRef)(s);(0,l.G)(()=>{!m.current&&s&&(p.current=v),m.current=s},[s,v]);let h=(0,c.useCallback)(()=>{if(s&&d&&p.current&&(p.current=!1,!d.contains(document.activeElement))){if(null==t?void 0:t.current)requestAnimationFrame(()=>{var e;null==(e=t.current)||e.focus({preventScroll:r})});else{let e=(0,o.t5)(d);e.length>0&&requestAnimationFrame(()=>{e[0].focus({preventScroll:r})})}}},[s,r,d,t]);(0,i.r)(()=>{h()},[h]),(0,a.O)(d,"transitionend",h)}}}]);