(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{65549:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(24255);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},46487:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(24255);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]])},62798:function(e,t,n){e.exports=n(12073)},22068:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(29599),o=n(25946),u=n(70102),a=n(47621);function l(e){let t=e+"CollectionProvider",[n,l]=(0,o.b)(t),[c,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,l=i(d,n),c=(0,u.e)(t,l.collectionRef);return r.createElement(a.g7,{ref:c},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:o,...l}=e,c=r.useRef(null),d=(0,u.e)(t,c),s=i(f,n);return r.useEffect(()=>(s.itemMap.set(c,{ref:c,...l}),()=>void s.itemMap.delete(c))),r.createElement(a.g7,{[p]:"",ref:d},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(c,{scope:t,itemMap:u,collectionRef:o},n)},Slot:s,ItemSlot:m},function(t){let n=i(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},l]}},90130:function(e,t,n){"use strict";n.d(t,{gm:function(){return u}});var r=n(29599);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},31965:function(e,t,n){"use strict";n.d(t,{oC:function(){return tn},VY:function(){return e3},ZA:function(){return e8},ck:function(){return tt},wU:function(){return tu},__:function(){return te},Uv:function(){return e7},Ee:function(){return tr},Rk:function(){return to},fC:function(){return e5},Z0:function(){return ta},Tr:function(){return tl},tu:function(){return ti},fF:function(){return tc},xz:function(){return e4}});var r=n(96874),o=n(29599),u=n(91036),a=n(70102),l=n(25946),c=n(28398),i=n(37516),d=n(22068),s=n(90130),f=n(51463),p=n(36462),m=n(51341),v=n(23654),g=n(45984),w=n(83084),h=n(23753),M=n(78851);let E="rovingFocusGroup.onEntryFocus",_={bubbles:!1,cancelable:!0},C="RovingFocusGroup",[b,R,D]=(0,d.B)(C),[y,k]=(0,l.b)(C,[D]),[x,I]=y(C),P=(0,o.forwardRef)((e,t)=>(0,o.createElement)(b.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(T,(0,r.Z)({},e,{ref:t}))))),T=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:d=!1,dir:f,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:g,...w}=e,h=(0,o.useRef)(null),C=(0,a.e)(t,h),b=(0,s.gm)(f),[D=null,y]=(0,c.T)({prop:p,defaultProp:m,onChange:v}),[k,I]=(0,o.useState)(!1),P=(0,M.W)(g),T=R(n),F=(0,o.useRef)(!1),[O,S]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=h.current;if(e)return e.addEventListener(E,P),()=>e.removeEventListener(E,P)},[P]),(0,o.createElement)(x,{scope:n,orientation:l,dir:b,loop:d,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>y(e),[y]),onItemShiftTab:(0,o.useCallback)(()=>I(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>S(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>S(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,r.Z)({tabIndex:k||0===O?-1:0,"data-orientation":l},w,{ref:C,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!k){let t=new CustomEvent(E,_);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=T().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===D),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);Z(o)}}F.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>I(!1))})))}),F=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:l=!1,tabStopId:c,...d}=e,s=(0,v.M)(),f=c||s,p=I("RovingFocusGroupItem",n),m=p.currentTabStopId===f,g=R(n),{onFocusableItemAdd:w,onFocusableItemRemove:h}=p;return(0,o.useEffect)(()=>{if(a)return w(),()=>h()},[a,w,h]),(0,o.createElement)(b.ItemSlot,{scope:n,id:f,focusable:a,active:l},(0,o.createElement)(i.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{a?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return O[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=g().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=p.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>Z(u))}})})))}),O={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Z(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}var S=n(47621),A=n(90679),L=n(88949);let K=["Enter"," "],V=["ArrowUp","PageDown","End"],G=["ArrowDown","PageUp","Home",...V],W={ltr:[...K,"ArrowRight"],rtl:[...K,"ArrowLeft"]},U={ltr:["ArrowLeft"],rtl:["ArrowRight"]},B="Menu",[z,X,Y]=(0,d.B)(B),[H,q]=(0,l.b)(B,[Y,g.D7,k]),N=(0,g.D7)(),j=k(),[$,J]=H(B),[Q,ee]=H(B),et=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...u}=e,a=N(n);return(0,o.createElement)(g.ee,(0,r.Z)({},a,u,{ref:t}))}),en="MenuPortal",[er,eo]=H(en,{forceMount:void 0}),eu="MenuContent",[ea,el]=H(eu),ec=(0,o.forwardRef)((e,t)=>{let n=eo(eu,e.__scopeMenu),{forceMount:u=n.forceMount,...a}=e,l=J(eu,e.__scopeMenu),c=ee(eu,e.__scopeMenu);return(0,o.createElement)(z.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:u||l.open},(0,o.createElement)(z.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(ei,(0,r.Z)({},a,{ref:t})):(0,o.createElement)(ed,(0,r.Z)({},a,{ref:t})))))}),ei=(0,o.forwardRef)((e,t)=>{let n=J(eu,e.__scopeMenu),l=(0,o.useRef)(null),c=(0,a.e)(t,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,A.Ry)(e)},[]),(0,o.createElement)(es,(0,r.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,u.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),ed=(0,o.forwardRef)((e,t)=>{let n=J(eu,e.__scopeMenu);return(0,o.createElement)(es,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),es=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:M,onInteractOutside:E,onDismiss:_,disableOutsideScroll:C,...b}=e,R=J(eu,n),D=ee(eu,n),y=N(n),k=j(n),x=X(n),[I,T]=(0,o.useState)(null),F=(0,o.useRef)(null),O=(0,a.e)(t,F,R.onContentChange),Z=(0,o.useRef)(0),A=(0,o.useRef)(""),K=(0,o.useRef)(0),W=(0,o.useRef)(null),U=(0,o.useRef)("right"),B=(0,o.useRef)(0),z=C?L.Z:o.Fragment,Y=C?{as:S.g7,allowPinchZoom:!0}:void 0,H=e=>{var t,n;let r=A.current+e,o=x().filter(e=>!e.disabled),u=document.activeElement,a=null===(t=o.find(e=>e.ref.current===u))||void 0===t?void 0:t.textValue,l=o.map(e=>e.textValue),c=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0]),u=o?t[0]:t,a=n?e.indexOf(n):-1,l=(r=Math.max(a,0),e.map((t,n)=>e[(r+n)%e.length])),c=1===u.length;c&&(l=l.filter(e=>e!==n));let i=l.find(e=>e.toLowerCase().startsWith(u.toLowerCase()));return i!==n?i:void 0}(l,r,a),i=null===(n=o.find(e=>e.textValue===c))||void 0===n?void 0:n.ref.current;!function e(t){A.current=t,window.clearTimeout(Z.current),""!==t&&(Z.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(Z.current),[]),(0,p.EW)();let q=(0,o.useCallback)(e=>{var t,n;let r=U.current===(null===(t=W.current)||void 0===t?void 0:t.side);return r&&function(e,t){if(!t)return!1;let n={x:e.clientX,y:e.clientY};return function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,u=t.length-1;e<t.length;u=e++){let a=t[e].x,l=t[e].y,c=t[u].x,i=t[u].y,d=l>r!=i>r&&n<(c-a)*(r-l)/(i-l)+a;d&&(o=!o)}return o}(n,t)}(e,null===(n=W.current)||void 0===n?void 0:n.area)},[]);return(0,o.createElement)(ea,{scope:n,searchRef:A,onItemEnter:(0,o.useCallback)(e=>{q(e)&&e.preventDefault()},[q]),onItemLeave:(0,o.useCallback)(e=>{var t;q(e)||(null===(t=F.current)||void 0===t||t.focus(),T(null))},[q]),onTriggerLeave:(0,o.useCallback)(e=>{q(e)&&e.preventDefault()},[q]),pointerGraceTimerRef:K,onPointerGraceIntentChange:(0,o.useCallback)(e=>{W.current=e},[])},(0,o.createElement)(z,Y,(0,o.createElement)(m.M,{asChild:!0,trapped:c,onMountAutoFocus:(0,u.M)(i,e=>{var t;e.preventDefault(),null===(t=F.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:w,onPointerDownOutside:h,onFocusOutside:M,onInteractOutside:E,onDismiss:_},(0,o.createElement)(P,(0,r.Z)({asChild:!0},k,{dir:D.dir,orientation:"vertical",loop:l,currentTabStopId:I,onCurrentTabStopIdChange:T,onEntryFocus:(0,u.M)(v,e=>{D.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(g.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eZ(R.open),"data-radix-menu-content":"",dir:D.dir},y,b,{ref:O,style:{outline:"none",...b.style},onKeyDown:(0,u.M)(b.onKeyDown,e=>{let t=e.target,n=t.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,o=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!r&&o&&H(e.key));let u=F.current;if(e.target!==u||!G.includes(e.key))return;e.preventDefault();let a=x().filter(e=>!e.disabled),l=a.map(e=>e.ref.current);V.includes(e.key)&&l.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(l)}),onBlur:(0,u.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(Z.current),A.current="")}),onPointerMove:(0,u.M)(e.onPointerMove,eL(e=>{let t=e.target,n=B.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>B.current?"right":"left";U.current=t,B.current=e.clientX}}))})))))))}),ef=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},u,{ref:t}))}),ep=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},u,{ref:t}))}),em="MenuItem",ev="menu.itemSelect",eg=(0,o.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:l,...c}=e,d=(0,o.useRef)(null),s=ee(em,e.__scopeMenu),f=el(em,e.__scopeMenu),p=(0,a.e)(t,d),m=(0,o.useRef)(!1);return(0,o.createElement)(ew,(0,r.Z)({},c,{ref:p,disabled:n,onClick:(0,u.M)(e.onClick,()=>{let e=d.current;if(!n&&e){let t=new CustomEvent(ev,{bubbles:!0,cancelable:!0});e.addEventListener(ev,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,u.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&K.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),ew=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:l=!1,textValue:c,...d}=e,s=el(em,n),f=j(n),p=(0,o.useRef)(null),m=(0,a.e)(t,p),[v,g]=(0,o.useState)(!1),[w,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var t;h((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[d.children]),(0,o.createElement)(z.ItemSlot,{scope:n,disabled:l,textValue:null!=c?c:w},(0,o.createElement)(F,(0,r.Z)({asChild:!0},f,{focusable:!l}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0},d,{ref:m,onPointerMove:(0,u.M)(e.onPointerMove,eL(e=>{if(l)s.onItemLeave(e);else if(s.onItemEnter(e),!e.defaultPrevented){let t=e.currentTarget;t.focus()}})),onPointerLeave:(0,u.M)(e.onPointerLeave,eL(e=>s.onItemLeave(e))),onFocus:(0,u.M)(e.onFocus,()=>g(!0)),onBlur:(0,u.M)(e.onBlur,()=>g(!1))}))))}),eh=(0,o.forwardRef)((e,t)=>{let{checked:n=!1,onCheckedChange:a,...l}=e;return(0,o.createElement)(eR,{scope:e.__scopeMenu,checked:n},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eS(n)?"mixed":n},l,{ref:t,"data-state":eA(n),onSelect:(0,u.M)(l.onSelect,()=>null==a?void 0:a(!!eS(n)||!n),{checkForDefaultPrevented:!1})})))}),[eM,eE]=H("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),e_=(0,o.forwardRef)((e,t)=>{let{value:n,onValueChange:u,...a}=e,l=(0,M.W)(u);return(0,o.createElement)(eM,{scope:e.__scopeMenu,value:n,onValueChange:l},(0,o.createElement)(ef,(0,r.Z)({},a,{ref:t})))}),eC=(0,o.forwardRef)((e,t)=>{let{value:n,...a}=e,l=eE("MenuRadioItem",e.__scopeMenu),c=n===l.value;return(0,o.createElement)(eR,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(eg,(0,r.Z)({role:"menuitemradio","aria-checked":c},a,{ref:t,"data-state":eA(c),onSelect:(0,u.M)(a.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,n)},{checkForDefaultPrevented:!1})})))}),eb="MenuItemIndicator",[eR,eD]=H(eb,{checked:!1}),ey=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,forceMount:u,...a}=e,l=eD(eb,n);return(0,o.createElement)(h.z,{present:u||eS(l.checked)||!0===l.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},a,{ref:t,"data-state":eA(l.checked)})))}),ek=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...u}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},u,{ref:t}))}),ex=((e,t)=>{let{__scopeMenu:n,...u}=e,a=N(n);return(0,o.createElement)(g.Eh,(0,r.Z)({},a,u,{ref:t}))},"MenuSub"),[eI,eP]=H(ex),eT="MenuSubTrigger",eF=(0,o.forwardRef)((e,t)=>{let n=J(eT,e.__scopeMenu),l=ee(eT,e.__scopeMenu),c=eP(eT,e.__scopeMenu),i=el(eT,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(et,(0,r.Z)({asChild:!0},p),(0,o.createElement)(ew,(0,r.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":c.contentId,"data-state":eZ(n.open)},e,{ref:(0,a.F)(t,c.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,u.M)(e.onPointerMove,eL(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,u.M)(e.onPointerLeave,eL(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,u="right"===t,a=o[u?"left":"right"],l=o[u?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(u?-5:5),y:e.clientY},{x:a,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:a,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,u.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&W[l.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})))}),eO=(0,o.forwardRef)((e,t)=>{let n=eo(eu,e.__scopeMenu),{forceMount:l=n.forceMount,...c}=e,i=J(eu,e.__scopeMenu),d=ee(eu,e.__scopeMenu),s=eP("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,a.e)(t,f);return(0,o.createElement)(z.Provider,{scope:e.__scopeMenu},(0,o.createElement)(h.z,{present:l||i.open},(0,o.createElement)(z.Slot,{scope:e.__scopeMenu},(0,o.createElement)(es,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,u.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,u.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=U[d.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eZ(e){return e?"open":"closed"}function eS(e){return"indeterminate"===e}function eA(e){return eS(e)?"indeterminate":e?"checked":"unchecked"}function eL(e){return t=>"mouse"===t.pointerType?e(t):void 0}let eK=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:u,onOpenChange:a,modal:l=!0}=e,c=N(t),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,M.W)(a),m=(0,s.gm)(u);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,o.createElement)(g.fC,c,(0,o.createElement)($,{scope:t,open:n,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(Q,{scope:t,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:l},r)))},eV=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:u}=e,a=J(en,t);return(0,o.createElement)(er,{scope:t,forceMount:n},(0,o.createElement)(h.z,{present:n||a.open},(0,o.createElement)(w.h,{asChild:!0,container:u},r)))},eG=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:u}=e,a=J(ex,t),l=N(t),[c,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,M.W)(u);return(0,o.useEffect)(()=>(!1===a.open&&f(!1),()=>f(!1)),[a.open,f]),(0,o.createElement)(g.fC,l,(0,o.createElement)($,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(eI,{scope:t,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:c,onTriggerChange:i},n)))},eW="DropdownMenu",[eU,eB]=(0,l.b)(eW,[q]),ez=q(),[eX,eY]=eU(eW),eH=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:l=!1,...c}=e,d=eY("DropdownMenuTrigger",n),s=ez(n);return(0,o.createElement)(et,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},c,{ref:(0,a.F)(t,d.triggerRef),onPointerDown:(0,u.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,u.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eq=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eY("DropdownMenuContent",n),c=ez(n),i=(0,o.useRef)(!1);return(0,o.createElement)(ec,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},c,a,{ref:t,onCloseAutoFocus:(0,u.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=l.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,u.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eN=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(ef,(0,r.Z)({},a,u,{ref:t}))}),ej=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(ep,(0,r.Z)({},a,u,{ref:t}))}),e$=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(eg,(0,r.Z)({},a,u,{ref:t}))}),eJ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(eh,(0,r.Z)({},a,u,{ref:t}))}),eQ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(e_,(0,r.Z)({},a,u,{ref:t}))}),e0=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(eC,(0,r.Z)({},a,u,{ref:t}))}),e1=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(ey,(0,r.Z)({},a,u,{ref:t}))}),e2=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(ek,(0,r.Z)({},a,u,{ref:t}))}),e9=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(eF,(0,r.Z)({},a,u,{ref:t}))}),e6=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,a=ez(n);return(0,o.createElement)(eO,(0,r.Z)({},a,u,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e5=e=>{let{__scopeDropdownMenu:t,children:n,dir:u,open:a,defaultOpen:l,onOpenChange:i,modal:d=!0}=e,s=ez(t),f=(0,o.useRef)(null),[p=!1,m]=(0,c.T)({prop:a,defaultProp:l,onChange:i});return(0,o.createElement)(eX,{scope:t,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eK,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:u,modal:d}),n))},e4=eH,e7=e=>{let{__scopeDropdownMenu:t,...n}=e,u=ez(t);return(0,o.createElement)(eV,(0,r.Z)({},u,n))},e3=eq,e8=eN,te=ej,tt=e$,tn=eJ,tr=eQ,to=e0,tu=e1,ta=e2,tl=e=>{let{__scopeDropdownMenu:t,children:n,open:u,onOpenChange:a,defaultOpen:l}=e,i=ez(t),[d=!1,s]=(0,c.T)({prop:u,defaultProp:l,onChange:a});return(0,o.createElement)(eG,(0,r.Z)({},i,{open:d,onOpenChange:s}),n)},tc=e9,ti=e6}}]);