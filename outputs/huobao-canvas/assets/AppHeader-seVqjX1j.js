import{f as pt,Z as Rt,aK as sl,w as Ce,e as T,ao as Fi,aH as dl,a2 as lt,aL as cl,aw as ul,_ as st,L as bt,r as B,aM as qe,i as Be,aN as so,aO as co,aP as lr,an as uo,a as fe,aQ as fl,aD as Ke,j as gn,aR as To,aS as hl,x as u,T as vl,U as Bi,aT as sr,Y as ue,a0 as fo,ax as Mt,aU as fn,au as Qt,aV as pl,aW as bl,af as Qn,a6 as Sn,am as Gn,aX as mr,aY as ho,aZ as En,a_ as dr,a$ as Fn,b0 as gl,b1 as ml,b2 as yl,b3 as vo,b4 as Wt,b5 as po,y as wl,b6 as Di,b7 as mn,b8 as Vr,b9 as Fo,ba as xl,bb as Bo,bc as Do,bd as Xn,be as Cl,bf as Lo,bg as kl,bh as Sl,bi as Pl,bj as _l,bk as Ml,bl as Ol,bm as Rl,z as Il,O as x,M as X,aa as E,ab as Li,ag as Ni,bn as Gt,bo as Wi,S as Vt,H as nt,I as Ie,bp as $l,a7 as ae,$ as rt,bq as vt,V as Bn,a4 as D,R as He,Q as bo,ad as Qe,a5 as Vi,br as ji,bs as en,bt as zl,bu as ft,bv as Al,a8 as pn,bw as er,W as go,bx as jr,C as El,ac as No,by as Tl,F as ht,bz as Hi,bA as Fl,bB as Ki,bC as Bl,bD as Ui,a1 as ye,D as mo,bE as Dl,K as Oe,bF as yo,bG as Wo,bH as Ll,bI as Nl,bJ as Wl,G as Bt,bK as Vl,bL as jl,bM as Hl,bN as Kl,bO as Ul,bP as ql,A as Yl,bQ as Gl,bR as Xl,bS as Jl,bT as Zl,ae as wo,bU as Ql,bV as es,bW as ts,bX as Hr,bY as ns,bZ as rs,b_ as tr,b$ as os,c0 as is,c1 as as,c2 as qi,c3 as Vo,c4 as ls,c5 as ss,t as ds,c6 as cs,c7 as yr,c8 as us,c9 as fs,c as Ge,o as Le,b as se,ah as Yi,ca as hs,at as _t,h as me,g as be,u as ne,n as je,m as Pn,B as xt,s as at,as as jo,k as wr,q as xr,N as vs,cb as Ho,cc as ps}from"./index-CP-Vz5Z5.js";let nr=[];const Gi=new WeakMap;function bs(){nr.forEach(e=>e(...Gi.get(e))),nr=[]}function Xi(e,...t){Gi.set(e,t),!nr.includes(e)&&nr.push(e)===1&&requestAnimationFrame(bs)}function Xt(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}let hn,zn;const gs=()=>{var e,t;hn=sl?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,zn=!1,hn!==void 0?hn.then(()=>{zn=!0}):zn=!0};gs();function Ji(e){if(zn)return;let t=!1;pt(()=>{zn||hn?.then(()=>{t||e()})}),Rt(()=>{t=!0})}function Zt(e,t){return Ce(e,n=>{n!==void 0&&(t.value=n)}),T(()=>e.value===void 0?t.value:e.value)}function rr(e,t){return T(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}function ms(e={},t){const n=Fi({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:o}=e,i=s=>{switch(s.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(c=>{if(c!==s.key)return;const d=r[c];if(typeof d=="function")d(s);else{const{stop:v=!1,prevent:p=!1}=d;v&&s.stopPropagation(),p&&s.preventDefault(),d.handler(s)}})},a=s=>{switch(s.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}o!==void 0&&Object.keys(o).forEach(c=>{if(c!==s.key)return;const d=o[c];if(typeof d=="function")d(s);else{const{stop:v=!1,prevent:p=!1}=d;v&&s.stopPropagation(),p&&s.preventDefault(),d.handler(s)}})},l=()=>{(t===void 0||t.value)&&(lt("keydown",document,i),lt("keyup",document,a)),t!==void 0&&Ce(t,s=>{s?(lt("keydown",document,i),lt("keyup",document,a)):(st("keydown",document,i),st("keyup",document,a))})};return cl()?(ul(l),Rt(()=>{(t===void 0||t.value)&&(st("keydown",document,i),st("keyup",document,a))})):l(),dl(n)}const xo=bt("n-internal-select-menu"),Zi=bt("n-internal-select-menu-body"),Qi="__disabled__";function Ot(e){const t=Be(so,null),n=Be(co,null),r=Be(lr,null),o=Be(Zi,null),i=B();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};pt(()=>{lt("fullscreenchange",document,a)}),Rt(()=>{st("fullscreenchange",document,a)})}return qe(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?Qi:l===!0?i.value||"body":l:t?.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n?.value?n.value:r?.value?r.value:o?.value?o.value:l??(i.value||"body")})}Ot.tdkey=Qi;Ot.propTo={type:[String,Object,Boolean],default:void 0};function ys(e,t,n){var r;const o=Be(e,null);if(o===null)return;const i=(r=uo())===null||r===void 0?void 0:r.proxy;Ce(n,a),a(n.value),Rt(()=>{a(void 0,n.value)});function a(c,d){if(!o)return;const v=o[t];d!==void 0&&l(v,d),c!==void 0&&s(v,c)}function l(c,d){c[d]||(c[d]=[]),c[d].splice(c[d].findIndex(v=>v===i),1)}function s(c,d){c[d]||(c[d]=[]),~c[d].findIndex(v=>v===i)||c[d].push(i)}}function ws(e,t,n){const r=B(e.value);let o=null;return Ce(e,i=>{o!==null&&window.clearTimeout(o),i===!0?n&&!n.value?r.value=!0:o=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}let Dt=null;function ea(){if(Dt===null&&(Dt=document.getElementById("v-binder-view-measurer"),Dt===null)){Dt=document.createElement("div"),Dt.id="v-binder-view-measurer";const{style:e}=Dt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Dt)}return Dt.getBoundingClientRect()}function xs(e,t){const n=ea();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Cr(e){const t=e.getBoundingClientRect(),n=ea();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function Cs(e){return e.nodeType===9?null:e.parentNode}function ta(e){if(e===null)return null;const t=Cs(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:o}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+o+r))return t}return ta(t)}const Co=fe({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;Ke("VBinder",(t=uo())===null||t===void 0?void 0:t.proxy);const n=Be("VBinder",null),r=B(null),o=g=>{r.value=g,n&&e.syncTargetWithParent&&n.setTargetRef(g)};let i=[];const a=()=>{let g=r.value;for(;g=ta(g),g!==null;)i.push(g);for(const S of i)lt("scroll",S,v,!0)},l=()=>{for(const g of i)st("scroll",g,v,!0);i=[]},s=new Set,c=g=>{s.size===0&&a(),s.has(g)||s.add(g)},d=g=>{s.has(g)&&s.delete(g),s.size===0&&l()},v=()=>{Xi(p)},p=()=>{s.forEach(g=>g())},b=new Set,f=g=>{b.size===0&&lt("resize",window,C),b.has(g)||b.add(g)},m=g=>{b.has(g)&&b.delete(g),b.size===0&&st("resize",window,C)},C=()=>{b.forEach(g=>g())};return Rt(()=>{st("resize",window,C),l()}),{targetRef:r,setTargetRef:o,addScrollListener:c,removeScrollListener:d,addResizeListener:f,removeResizeListener:m}},render(){return fl("binder",this.$slots)}}),ko=fe({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=Be("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?gn(To("follower",this.$slots),[[t]]):To("follower",this.$slots)}}),ln="@@mmoContext",ks={mounted(e,{value:t}){e[ln]={handler:void 0},typeof t=="function"&&(e[ln].handler=t,lt("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[ln];typeof t=="function"?n.handler?n.handler!==t&&(st("mousemoveoutside",e,n.handler),n.handler=t,lt("mousemoveoutside",e,t)):(e[ln].handler=t,lt("mousemoveoutside",e,t)):n.handler&&(st("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[ln];t&&st("mousemoveoutside",e,t),e[ln].handler=void 0}},{c:gt}=hl(),cr="vueuc-style";function Ko(e){return e&-e}class na{constructor(t,n){this.l=t,this.min=n;const r=new Array(t+1);for(let o=0;o<t+1;++o)r[o]=0;this.ft=r}add(t,n){if(n===0)return;const{l:r,ft:o}=this;for(t+=1;t<=r;)o[t]+=n,t+=Ko(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:r,l:o}=this;if(t>o)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=t*r;for(;t>0;)i+=n[t],t-=Ko(t);return i}getBound(t){let n=0,r=this.l;for(;r>n;){const o=Math.floor((n+r)/2),i=this.sum(o);if(i>t){r=o;continue}else if(i<t){if(n===o)return this.sum(n+1)<=t?n+1:o;n=o}else return o}return n}}const Ln={top:"bottom",bottom:"top",left:"right",right:"left"},Uo={start:"end",center:"center",end:"start"},kr={top:"height",bottom:"height",left:"width",right:"width"},Ss={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Ps={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},_s={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},qo={top:!0,bottom:!1,left:!0,right:!1},Yo={top:"end",bottom:"start",left:"end",right:"start"};function Ms(e,t,n,r,o,i){if(!o||i)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",c={top:0,left:0};const d=(b,f,m)=>{let C=0,g=0;const S=n[b]-t[f]-t[b];return S>0&&r&&(m?g=qo[f]?S:-S:C=qo[f]?S:-S),{left:C,top:g}},v=a==="left"||a==="right";if(s!=="center"){const b=_s[e],f=Ln[b],m=kr[b];if(n[m]>t[m]){if(t[b]+t[m]<n[m]){const C=(n[m]-t[m])/2;t[b]<C||t[f]<C?t[b]<t[f]?(s=Uo[l],c=d(m,f,v)):c=d(m,b,v):s="center"}}else n[m]<t[m]&&t[f]<0&&t[b]>t[f]&&(s=Uo[l])}else{const b=a==="bottom"||a==="top"?"left":"top",f=Ln[b],m=kr[b],C=(n[m]-t[m])/2;(t[b]<C||t[f]<C)&&(t[b]>t[f]?(s=Yo[b],c=d(m,b,v)):(s=Yo[f],c=d(m,f,v)))}let p=a;return t[a]<n[kr[a]]&&t[a]<t[Ln[a]]&&(p=Ln[a]),{placement:s!=="center"?`${p}-${s}`:p,left:c.left,top:c.top}}function Os(e,t){return t?Ps[e]:Ss[e]}function Rs(e,t,n,r,o,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+o)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+o)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+o)}px`,transform:"translateX(-50%)"}}}const Is=gt([gt(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),gt(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[gt("> *",{pointerEvents:"all"})])]),So=fe({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=Be("VBinder"),n=qe(()=>e.enabled!==void 0?e.enabled:e.show),r=B(null),o=B(null),i=()=>{const{syncTrigger:p}=e;p.includes("scroll")&&t.addScrollListener(s),p.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};pt(()=>{n.value&&(s(),i())});const l=sr();Is.mount({id:"vueuc/binder",head:!0,anchorMetaName:cr,ssr:l}),Rt(()=>{a()}),Ji(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const p=r.value;if(p===null)return;const b=t.targetRef,{x:f,y:m,overlap:C}=e,g=f!==void 0&&m!==void 0?xs(f,m):Cr(b);p.style.setProperty("--v-target-width",`${Math.round(g.width)}px`),p.style.setProperty("--v-target-height",`${Math.round(g.height)}px`);const{width:S,minWidth:M,placement:y,internalShift:k,flip:_}=e;p.setAttribute("v-placement",y),C?p.setAttribute("v-overlap",""):p.removeAttribute("v-overlap");const{style:N}=p;S==="target"?N.width=`${g.width}px`:S!==void 0?N.width=S:N.width="",M==="target"?N.minWidth=`${g.width}px`:M!==void 0?N.minWidth=M:N.minWidth="";const G=Cr(p),j=Cr(o.value),{left:q,top:Q,placement:I}=Ms(y,g,G,k,_,C),O=Os(I,C),{left:$,top:R,transform:J}=Rs(I,j,g,Q,q,C);p.setAttribute("v-placement",I),p.style.setProperty("--v-offset-left",`${Math.round(q)}px`),p.style.setProperty("--v-offset-top",`${Math.round(Q)}px`),p.style.transform=`translateX(${$}) translateY(${R}) ${J}`,p.style.setProperty("--v-transform-origin",O),p.style.transformOrigin=O};Ce(n,p=>{p?(i(),c()):a()});const c=()=>{Mt().then(s).catch(p=>console.error(p))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(p=>{Ce(ue(e,p),s)}),["teleportDisabled"].forEach(p=>{Ce(ue(e,p),c)}),Ce(ue(e,"syncTrigger"),p=>{p.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),p.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const d=fo(),v=qe(()=>{const{to:p}=e;if(p!==void 0)return p;d.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:o,followerRef:r,mergedTo:v,syncPosition:s}},render(){return u(vl,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=u("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[u("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?gn(n,[[Bi,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});let Nn;function $s(){return typeof document>"u"?!1:(Nn===void 0&&("matchMedia"in window?Nn=window.matchMedia("(pointer:coarse)").matches:Nn=!1),Nn)}let Sr;function Go(){return typeof document>"u"?1:(Sr===void 0&&(Sr="chrome"in window?window.devicePixelRatio:1),Sr)}const ra="VVirtualListXScroll";function zs({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const r=B(0),o=B(0),i=T(()=>{const c=e.value;if(c.length===0)return null;const d=new na(c.length,0);return c.forEach((v,p)=>{d.add(p,v.width)}),d}),a=qe(()=>{const c=i.value;return c!==null?Math.max(c.getBound(o.value)-1,0):0}),l=c=>{const d=i.value;return d!==null?d.sum(c):0},s=qe(()=>{const c=i.value;return c!==null?Math.min(c.getBound(o.value+r.value)+1,e.value.length-1):0});return Ke(ra,{startIndexRef:a,endIndexRef:s,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:l}),{listWidthRef:r,scrollLeftRef:o}}const Xo=fe({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:o,renderItemWithColsRef:i}=Be(ra);return{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:i,getLeft:r}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:o,getLeft:i,item:a}=this;if(o!=null)return o({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:a,getLeft:i});if(r!=null){const l=[];for(let s=e;s<=t;++s){const c=n[s];l.push(r({column:c,left:i(s),item:a}))}return l}return null}}),As=gt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[gt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[gt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Es=fe({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=sr();As.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:cr,ssr:t}),pt(()=>{const{defaultScrollIndex:O,defaultScrollKey:$}=e;O!=null?C({index:O}):$!=null&&C({key:$})});let n=!1,r=!1;pl(()=>{if(n=!1,!r){r=!0;return}C({top:b.value,left:a.value})}),bl(()=>{n=!0,r||(r=!0)});const o=qe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let O=0;return e.columns.forEach($=>{O+=$.width}),O}),i=T(()=>{const O=new Map,{keyField:$}=e;return e.items.forEach((R,J)=>{O.set(R[$],J)}),O}),{scrollLeftRef:a,listWidthRef:l}=zs({columnsRef:ue(e,"columns"),renderColRef:ue(e,"renderCol"),renderItemWithColsRef:ue(e,"renderItemWithCols")}),s=B(null),c=B(void 0),d=new Map,v=T(()=>{const{items:O,itemSize:$,keyField:R}=e,J=new na(O.length,$);return O.forEach((V,Z)=>{const re=V[R],ie=d.get(re);ie!==void 0&&J.add(Z,ie)}),J}),p=B(0),b=B(0),f=qe(()=>Math.max(v.value.getBound(b.value-Qn(e.paddingTop))-1,0)),m=T(()=>{const{value:O}=c;if(O===void 0)return[];const{items:$,itemSize:R}=e,J=f.value,V=Math.min(J+Math.ceil(O/R+1),$.length-1),Z=[];for(let re=J;re<=V;++re)Z.push($[re]);return Z}),C=(O,$)=>{if(typeof O=="number"){y(O,$,"auto");return}const{left:R,top:J,index:V,key:Z,position:re,behavior:ie,debounce:ve=!0}=O;if(R!==void 0||J!==void 0)y(R,J,ie);else if(V!==void 0)M(V,ie,ve);else if(Z!==void 0){const L=i.value.get(Z);L!==void 0&&M(L,ie,ve)}else re==="bottom"?y(0,Number.MAX_SAFE_INTEGER,ie):re==="top"&&y(0,0,ie)};let g,S=null;function M(O,$,R){const{value:J}=v,V=J.sum(O)+Qn(e.paddingTop);if(!R)s.value.scrollTo({left:0,top:V,behavior:$});else{g=O,S!==null&&window.clearTimeout(S),S=window.setTimeout(()=>{g=void 0,S=null},16);const{scrollTop:Z,offsetHeight:re}=s.value;if(V>Z){const ie=J.get(O);V+ie<=Z+re||s.value.scrollTo({left:0,top:V+ie-re,behavior:$})}else s.value.scrollTo({left:0,top:V,behavior:$})}}function y(O,$,R){s.value.scrollTo({left:O,top:$,behavior:R})}function k(O,$){var R,J,V;if(n||e.ignoreItemResize||I($.target))return;const{value:Z}=v,re=i.value.get(O),ie=Z.get(re),ve=(V=(J=(R=$.borderBoxSize)===null||R===void 0?void 0:R[0])===null||J===void 0?void 0:J.blockSize)!==null&&V!==void 0?V:$.contentRect.height;if(ve===ie)return;ve-e.itemSize===0?d.delete(O):d.set(O,ve-e.itemSize);const Y=ve-ie;if(Y===0)return;Z.add(re,Y);const de=s.value;if(de!=null){if(g===void 0){const H=Z.sum(re);de.scrollTop>H&&de.scrollBy(0,Y)}else if(re<g)de.scrollBy(0,Y);else if(re===g){const H=Z.sum(re);ve+H>de.scrollTop+de.offsetHeight&&de.scrollBy(0,Y)}Q()}p.value++}const _=!$s();let N=!1;function G(O){var $;($=e.onScroll)===null||$===void 0||$.call(e,O),(!_||!N)&&Q()}function j(O){var $;if(($=e.onWheel)===null||$===void 0||$.call(e,O),_){const R=s.value;if(R!=null){if(O.deltaX===0&&(R.scrollTop===0&&O.deltaY<=0||R.scrollTop+R.offsetHeight>=R.scrollHeight&&O.deltaY>=0))return;O.preventDefault(),R.scrollTop+=O.deltaY/Go(),R.scrollLeft+=O.deltaX/Go(),Q(),N=!0,Xi(()=>{N=!1})}}}function q(O){if(n||I(O.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(O.contentRect.height===c.value)return}else if(O.contentRect.height===c.value&&O.contentRect.width===l.value)return;c.value=O.contentRect.height,l.value=O.contentRect.width;const{onResize:$}=e;$!==void 0&&$(O)}function Q(){const{value:O}=s;O!=null&&(b.value=O.scrollTop,a.value=O.scrollLeft)}function I(O){let $=O;for(;$!==null;){if($.style.display==="none")return!0;$=$.parentElement}return!1}return{listHeight:c,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:T(()=>{const{itemResizable:O}=e,$=Sn(v.value.sum());return p.value,[e.itemsStyle,{boxSizing:"content-box",width:Sn(o.value),height:O?"":$,minHeight:O?$:"",paddingTop:Sn(e.paddingTop),paddingBottom:Sn(e.paddingBottom)}]}),visibleItemsStyle:T(()=>(p.value,{transform:`translateY(${Sn(v.value.sum(f.value))})`})),viewportItems:m,listElRef:s,itemsElRef:B(null),scrollTo:C,handleListResize:q,handleListScroll:G,handleListWheel:j,handleItemResize:k}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return u(fn,{onResize:this.handleListResize},{default:()=>{var o,i;return u("div",Qt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?u("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[u(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:a,renderItemWithCols:l}=this;return this.viewportItems.map(s=>{const c=s[t],d=n.get(c),v=a!=null?u(Xo,{index:d,item:s}):void 0,p=l!=null?u(Xo,{index:d,item:s}):void 0,b=this.$slots.default({item:s,renderedCols:v,renderedItemWithCols:p,index:d})[0];return e?u(fn,{key:c,onResize:f=>this.handleItemResize(c,f)},{default:()=>b}):(b.key=c,b)})}})]):(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)])}})}}),Ts=gt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[gt("&::-webkit-scrollbar",{width:0,height:0})]),Fs=fe({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=B(null);function t(o){!(o.currentTarget.offsetWidth<o.currentTarget.scrollWidth)||o.deltaY===0||(o.currentTarget.scrollLeft+=o.deltaY+o.deltaX,o.preventDefault())}const n=sr();return Ts.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:cr,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...o){var i;(i=e.value)===null||i===void 0||i.scrollTo(...o)}})},render(){return u("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Ct="v-hidden",Bs=gt("[v-hidden]",{display:"none!important"}),Jo=fe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=B(null),r=B(null);function o(a){const{value:l}=n,{getCounter:s,getTail:c}=e;let d;if(s!==void 0?d=s():d=r.value,!l||!d)return;d.hasAttribute(Ct)&&d.removeAttribute(Ct);const{children:v}=l;if(a.showAllItemsBeforeCalculate)for(const M of v)M.hasAttribute(Ct)&&M.removeAttribute(Ct);const p=l.offsetWidth,b=[],f=t.tail?c?.():null;let m=f?f.offsetWidth:0,C=!1;const g=l.children.length-(t.tail?1:0);for(let M=0;M<g-1;++M){if(M<0)continue;const y=v[M];if(C){y.hasAttribute(Ct)||y.setAttribute(Ct,"");continue}else y.hasAttribute(Ct)&&y.removeAttribute(Ct);const k=y.offsetWidth;if(m+=k,b[M]=k,m>p){const{updateCounter:_}=e;for(let N=M;N>=0;--N){const G=g-1-N;_!==void 0?_(G):d.textContent=`${G}`;const j=d.offsetWidth;if(m-=b[N],m+j<=p||N===0){C=!0,M=N-1,f&&(M===-1?(f.style.maxWidth=`${p-j}px`,f.style.boxSizing="border-box"):f.style.maxWidth="");const{onUpdateCount:q}=e;q&&q(G);break}}}}const{onUpdateOverflow:S}=e;C?S!==void 0&&S(!0):(S!==void 0&&S(!1),d.setAttribute(Ct,""))}const i=sr();return Bs.mount({id:"vueuc/overflow",head:!0,anchorMetaName:cr,ssr:i}),pt(()=>o({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:o}},render(){const{$slots:e}=this;return Mt(()=>this.sync({showAllItemsBeforeCalculate:!1})),u("div",{class:"v-overflow",ref:"selfRef"},[Gn(e,"default"),e.counter?e.counter():u("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function oa(e,t){t&&(pt(()=>{const{value:n}=e;n&&mr.registerHandler(n,t)}),Ce(e,(n,r)=>{r&&mr.unregisterHandler(r)},{deep:!1}),Rt(()=>{const{value:n}=e;n&&mr.unregisterHandler(n)}))}const Ds=/^(\d|\.)+$/,Zo=/(\d|\.)+/;function Jt(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e=="number"){const o=(e+n)*t;return o===0?"0":`${o}px`}else if(typeof e=="string")if(Ds.test(e)){const o=(Number(e)+n)*t;return r?o===0?"0":`${o}px`:`${o}`}else{const o=Zo.exec(e);return o?e.replace(Zo,String((Number(o[0])+n)*t)):e}return e}let Pr;function Ls(){return Pr===void 0&&(Pr=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Pr}function Qo(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Ns(e){return t=>{t?e.value=t.$el:e.value=null}}function _r(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(r=>{r&&r(n)})}}const Ws={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"},Heatmap:{less:"less",more:"more",monthFormat:"MMM",weekdayFormat:"eee"}};function Mr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function _n(e){return(t,n)=>{const r=n?.context?String(n.context):"standalone";let o;if(r==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=n?.width?String(n.width):a;o=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=n?.width?String(n.width):e.defaultWidth;o=e.values[l]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return o[i]}}function Mn(e){return(t,n={})=>{const r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;const a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?js(l,v=>v.test(a)):Vs(l,v=>v.test(a));let c;c=e.valueCallback?e.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;const d=t.slice(a.length);return{value:c,rest:d}}}function Vs(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function js(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Hs(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const o=r[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const l=t.slice(o.length);return{value:a,rest:l}}}const Ks={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Us=(e,t,n)=>{let r;const o=Ks[e];return typeof o=="string"?r=o:t===1?r=o.one:r=o.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},qs={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ys=(e,t,n,r)=>qs[e],Gs={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Xs={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Js={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Zs={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Qs={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ed={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},td=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},nd={ordinalNumber:td,era:_n({values:Gs,defaultWidth:"wide"}),quarter:_n({values:Xs,defaultWidth:"wide",argumentCallback:e=>e-1}),month:_n({values:Js,defaultWidth:"wide"}),day:_n({values:Zs,defaultWidth:"wide"}),dayPeriod:_n({values:Qs,defaultWidth:"wide",formattingValues:ed,defaultFormattingWidth:"wide"})},rd=/^(\d+)(th|st|nd|rd)?/i,od=/\d+/i,id={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ad={any:[/^b/i,/^(a|c)/i]},ld={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},sd={any:[/1/i,/2/i,/3/i,/4/i]},dd={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},cd={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ud={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fd={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},hd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},vd={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},pd={ordinalNumber:Hs({matchPattern:rd,parsePattern:od,valueCallback:e=>parseInt(e,10)}),era:Mn({matchPatterns:id,defaultMatchWidth:"wide",parsePatterns:ad,defaultParseWidth:"any"}),quarter:Mn({matchPatterns:ld,defaultMatchWidth:"wide",parsePatterns:sd,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Mn({matchPatterns:dd,defaultMatchWidth:"wide",parsePatterns:cd,defaultParseWidth:"any"}),day:Mn({matchPatterns:ud,defaultMatchWidth:"wide",parsePatterns:fd,defaultParseWidth:"any"}),dayPeriod:Mn({matchPatterns:hd,defaultMatchWidth:"any",parsePatterns:vd,defaultParseWidth:"any"})},bd={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},gd={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},md={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yd={date:Mr({formats:bd,defaultWidth:"full"}),time:Mr({formats:gd,defaultWidth:"full"}),dateTime:Mr({formats:md,defaultWidth:"full"})},wd={code:"en-US",formatDistance:Us,formatLong:yd,formatRelative:Ys,localize:nd,match:pd,options:{weekStartsOn:0,firstWeekContainsDate:1}},xd={name:"en-US",locale:wd};var Cd=/\s/;function kd(e){for(var t=e.length;t--&&Cd.test(e.charAt(t)););return t}var Sd=/^\s+/;function Pd(e){return e&&e.slice(0,kd(e)+1).replace(Sd,"")}var ei=NaN,_d=/^[-+]0x[0-9a-f]+$/i,Md=/^0b[01]+$/i,Od=/^0o[0-7]+$/i,Rd=parseInt;function ti(e){if(typeof e=="number")return e;if(ho(e))return ei;if(En(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=En(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Pd(e);var n=Md.test(e);return n||Od.test(e)?Rd(e.slice(2),n?2:8):_d.test(e)?ei:+e}var Kr=dr(Fn,"WeakMap"),Id=gl(Object.keys,Object),$d=Object.prototype,zd=$d.hasOwnProperty;function Ad(e){if(!ml(e))return Id(e);var t=[];for(var n in Object(e))zd.call(e,n)&&n!="constructor"&&t.push(n);return t}function Po(e){return vo(e)?yl(e):Ad(e)}var Ed=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Td=/^\w*$/;function _o(e,t){if(Wt(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||ho(e)?!0:Td.test(e)||!Ed.test(e)||t!=null&&e in Object(t)}var Fd="Expected a function";function Mo(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Fd);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Mo.Cache||po),n}Mo.Cache=po;var Bd=500;function Dd(e){var t=Mo(e,function(r){return n.size===Bd&&n.clear(),r}),n=t.cache;return t}var Ld=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nd=/\\(\\)?/g,Wd=Dd(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ld,function(n,r,o,i){t.push(o?i.replace(Nd,"$1"):r||n)}),t});function ia(e,t){return Wt(e)?e:_o(e,t)?[e]:Wd(wl(e))}function ur(e){if(typeof e=="string"||ho(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function aa(e,t){t=ia(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[ur(t[n++])];return n&&n==r?e:void 0}function Oo(e,t,n){var r=e==null?void 0:aa(e,t);return r===void 0?n:r}function Vd(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function jd(e,t){for(var n=-1,r=e==null?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function Hd(){return[]}var Kd=Object.prototype,Ud=Kd.propertyIsEnumerable,ni=Object.getOwnPropertySymbols,qd=ni?function(e){return e==null?[]:(e=Object(e),jd(ni(e),function(t){return Ud.call(e,t)}))}:Hd;function Yd(e,t,n){var r=t(e);return Wt(e)?r:Vd(r,n(e))}function ri(e){return Yd(e,Po,qd)}var Ur=dr(Fn,"DataView"),qr=dr(Fn,"Promise"),Yr=dr(Fn,"Set"),oi="[object Map]",Gd="[object Object]",ii="[object Promise]",ai="[object Set]",li="[object WeakMap]",si="[object DataView]",Xd=mn(Ur),Jd=mn(Vr),Zd=mn(qr),Qd=mn(Yr),ec=mn(Kr),Nt=Di;(Ur&&Nt(new Ur(new ArrayBuffer(1)))!=si||Vr&&Nt(new Vr)!=oi||qr&&Nt(qr.resolve())!=ii||Yr&&Nt(new Yr)!=ai||Kr&&Nt(new Kr)!=li)&&(Nt=function(e){var t=Di(e),n=t==Gd?e.constructor:void 0,r=n?mn(n):"";if(r)switch(r){case Xd:return si;case Jd:return oi;case Zd:return ii;case Qd:return ai;case ec:return li}return t});var tc="__lodash_hash_undefined__";function nc(e){return this.__data__.set(e,tc),this}function rc(e){return this.__data__.has(e)}function or(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new po;++t<n;)this.add(e[t])}or.prototype.add=or.prototype.push=nc;or.prototype.has=rc;function oc(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function ic(e,t){return e.has(t)}var ac=1,lc=2;function la(e,t,n,r,o,i){var a=n&ac,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var c=i.get(e),d=i.get(t);if(c&&d)return c==t&&d==e;var v=-1,p=!0,b=n&lc?new or:void 0;for(i.set(e,t),i.set(t,e);++v<l;){var f=e[v],m=t[v];if(r)var C=a?r(m,f,v,t,e,i):r(f,m,v,e,t,i);if(C!==void 0){if(C)continue;p=!1;break}if(b){if(!oc(t,function(g,S){if(!ic(b,S)&&(f===g||o(f,g,n,r,i)))return b.push(S)})){p=!1;break}}else if(!(f===m||o(f,m,n,r,i))){p=!1;break}}return i.delete(e),i.delete(t),p}function sc(e){var t=-1,n=Array(e.size);return e.forEach(function(r,o){n[++t]=[o,r]}),n}function dc(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var cc=1,uc=2,fc="[object Boolean]",hc="[object Date]",vc="[object Error]",pc="[object Map]",bc="[object Number]",gc="[object RegExp]",mc="[object Set]",yc="[object String]",wc="[object Symbol]",xc="[object ArrayBuffer]",Cc="[object DataView]",di=Fo?Fo.prototype:void 0,Or=di?di.valueOf:void 0;function kc(e,t,n,r,o,i,a){switch(n){case Cc:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case xc:return!(e.byteLength!=t.byteLength||!i(new Bo(e),new Bo(t)));case fc:case hc:case bc:return xl(+e,+t);case vc:return e.name==t.name&&e.message==t.message;case gc:case yc:return e==t+"";case pc:var l=sc;case mc:var s=r&cc;if(l||(l=dc),e.size!=t.size&&!s)return!1;var c=a.get(e);if(c)return c==t;r|=uc,a.set(e,t);var d=la(l(e),l(t),r,o,i,a);return a.delete(e),d;case wc:if(Or)return Or.call(e)==Or.call(t)}return!1}var Sc=1,Pc=Object.prototype,_c=Pc.hasOwnProperty;function Mc(e,t,n,r,o,i){var a=n&Sc,l=ri(e),s=l.length,c=ri(t),d=c.length;if(s!=d&&!a)return!1;for(var v=s;v--;){var p=l[v];if(!(a?p in t:_c.call(t,p)))return!1}var b=i.get(e),f=i.get(t);if(b&&f)return b==t&&f==e;var m=!0;i.set(e,t),i.set(t,e);for(var C=a;++v<s;){p=l[v];var g=e[p],S=t[p];if(r)var M=a?r(S,g,p,t,e,i):r(g,S,p,e,t,i);if(!(M===void 0?g===S||o(g,S,n,r,i):M)){m=!1;break}C||(C=p=="constructor")}if(m&&!C){var y=e.constructor,k=t.constructor;y!=k&&"constructor"in e&&"constructor"in t&&!(typeof y=="function"&&y instanceof y&&typeof k=="function"&&k instanceof k)&&(m=!1)}return i.delete(e),i.delete(t),m}var Oc=1,ci="[object Arguments]",ui="[object Array]",Wn="[object Object]",Rc=Object.prototype,fi=Rc.hasOwnProperty;function Ic(e,t,n,r,o,i){var a=Wt(e),l=Wt(t),s=a?ui:Nt(e),c=l?ui:Nt(t);s=s==ci?Wn:s,c=c==ci?Wn:c;var d=s==Wn,v=c==Wn,p=s==c;if(p&&Do(e)){if(!Do(t))return!1;a=!0,d=!1}if(p&&!d)return i||(i=new Xn),a||Cl(e)?la(e,t,n,r,o,i):kc(e,t,s,n,r,o,i);if(!(n&Oc)){var b=d&&fi.call(e,"__wrapped__"),f=v&&fi.call(t,"__wrapped__");if(b||f){var m=b?e.value():e,C=f?t.value():t;return i||(i=new Xn),o(m,C,n,r,i)}}return p?(i||(i=new Xn),Mc(e,t,n,r,o,i)):!1}function Ro(e,t,n,r,o){return e===t?!0:e==null||t==null||!Lo(e)&&!Lo(t)?e!==e&&t!==t:Ic(e,t,n,r,Ro,o)}var $c=1,zc=2;function Ac(e,t,n,r){var o=n.length,i=o;if(e==null)return!i;for(e=Object(e);o--;){var a=n[o];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++o<i;){a=n[o];var l=a[0],s=e[l],c=a[1];if(a[2]){if(s===void 0&&!(l in e))return!1}else{var d=new Xn,v;if(!(v===void 0?Ro(c,s,$c|zc,r,d):v))return!1}}return!0}function sa(e){return e===e&&!En(e)}function Ec(e){for(var t=Po(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,sa(o)]}return t}function da(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function Tc(e){var t=Ec(e);return t.length==1&&t[0][2]?da(t[0][0],t[0][1]):function(n){return n===e||Ac(n,e,t)}}function Fc(e,t){return e!=null&&t in Object(e)}function Bc(e,t,n){t=ia(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=ur(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&kl(o)&&Sl(a,o)&&(Wt(e)||Pl(e)))}function Dc(e,t){return e!=null&&Bc(e,t,Fc)}var Lc=1,Nc=2;function Wc(e,t){return _o(e)&&sa(t)?da(ur(e),t):function(n){var r=Oo(n,e);return r===void 0&&r===t?Dc(n,e):Ro(t,r,Lc|Nc)}}function Vc(e){return function(t){return t?.[e]}}function jc(e){return function(t){return aa(t,e)}}function Hc(e){return _o(e)?Vc(ur(e)):jc(e)}function Kc(e){return typeof e=="function"?e:e==null?_l:typeof e=="object"?Wt(e)?Wc(e[0],e[1]):Tc(e):Hc(e)}function Uc(e,t){return e&&Ml(e,t,Po)}function qc(e,t){return function(n,r){if(n==null)return n;if(!vo(n))return e(n,r);for(var o=n.length,i=-1,a=Object(n);++i<o&&r(a[i],i,a)!==!1;);return n}}var Yc=qc(Uc),Rr=function(){return Fn.Date.now()},Gc="Expected a function",Xc=Math.max,Jc=Math.min;function Zc(e,t,n){var r,o,i,a,l,s,c=0,d=!1,v=!1,p=!0;if(typeof e!="function")throw new TypeError(Gc);t=ti(t)||0,En(n)&&(d=!!n.leading,v="maxWait"in n,i=v?Xc(ti(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function b(_){var N=r,G=o;return r=o=void 0,c=_,a=e.apply(G,N),a}function f(_){return c=_,l=setTimeout(g,t),d?b(_):a}function m(_){var N=_-s,G=_-c,j=t-N;return v?Jc(j,i-G):j}function C(_){var N=_-s,G=_-c;return s===void 0||N>=t||N<0||v&&G>=i}function g(){var _=Rr();if(C(_))return S(_);l=setTimeout(g,m(_))}function S(_){return l=void 0,p&&r?b(_):(r=o=void 0,a)}function M(){l!==void 0&&clearTimeout(l),c=0,r=s=o=l=void 0}function y(){return l===void 0?a:S(Rr())}function k(){var _=Rr(),N=C(_);if(r=arguments,o=this,s=_,N){if(l===void 0)return f(s);if(v)return clearTimeout(l),l=setTimeout(g,t),b(s)}return l===void 0&&(l=setTimeout(g,t)),a}return k.cancel=M,k.flush=y,k}function Qc(e,t){var n=-1,r=vo(e)?Array(e.length):[];return Yc(e,function(o,i,a){r[++n]=t(o,i,a)}),r}function eu(e,t){var n=Wt(e)?Ol:Qc;return n(e,Kc(t))}var tu="Expected a function";function nu(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(tu);return En(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Zc(e,t,{leading:r,maxWait:t,trailing:o})}function Io(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=Be(Rl,null)||{},r=T(()=>{var i,a;return(a=(i=t?.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:Ws[e]});return{dateLocaleRef:T(()=>{var i;return(i=n?.value)!==null&&i!==void 0?i:xd}),localeRef:r}}const ru=fe({name:"Add",render(){return u("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ou=fe({name:"Checkmark",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},u("g",{fill:"none"},u("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),iu=fe({name:"ChevronDown",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),au=fe({name:"ChevronRight",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),lu=Il("clear",()=>u("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},u("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},u("g",{fill:"currentColor","fill-rule":"nonzero"},u("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),su=fe({name:"Empty",render(){return u("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),u("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),du=fe({name:"Eye",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),u("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),cu=fe({name:"EyeOff",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),u("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),u("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),u("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),u("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),uu=x("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[X(">",[E("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[X("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),X("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),E("placeholder",`
 display: flex;
 `),E("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Li({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Gr=fe({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Wi("-base-clear",uu,ue(e,"clsPrefix")),{handleMouseDown(t){t.preventDefault()}}},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-base-clear`},u(Ni,null,{default:()=>{var t,n;return this.show?u("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Gt(this.$slots.icon,()=>[u(Vt,{clsPrefix:e},{default:()=>u(lu,null)})])):u("div",{key:"icon",class:`${e}-base-clear__placeholder`},(n=(t=this.$slots).placeholder)===null||n===void 0?void 0:n.call(t))}}))}}),fu=fe({props:{onFocus:Function,onBlur:Function},setup(e){return()=>u("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function hi(e){return Array.isArray(e)?e:[e]}const Xr={STOP:"STOP"};function ca(e,t){const n=t(e);e.children!==void 0&&n!==Xr.STOP&&e.children.forEach(r=>ca(r,t))}function hu(e,t={}){const{preserveGroup:n=!1}=t,r=[],o=n?a=>{a.isLeaf||(r.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||r.push(a.key),i(a.children))};function i(a){a.forEach(o)}return i(e),r}function vu(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function pu(e){return e.children}function bu(e){return e.key}function gu(){return!1}function mu(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function yu(e){return e.disabled===!0}function wu(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Ir(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function $r(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function xu(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)||n.add(r)}),Array.from(n)}function Cu(e,t){const n=new Set(e);return t.forEach(r=>{n.has(r)&&n.delete(r)}),Array.from(n)}function ku(e){return e?.type==="group"}function Su(e){const t=new Map;return e.forEach((n,r)=>{t.set(n.key,r)}),n=>{var r;return(r=t.get(n))!==null&&r!==void 0?r:null}}class Pu extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function _u(e,t,n,r){return ir(t.concat(e),n,r,!1)}function Mu(e,t){const n=new Set;return e.forEach(r=>{const o=t.treeNodeMap.get(r);if(o!==void 0){let i=o.parent;for(;i!==null&&!(i.disabled||n.has(i.key));)n.add(i.key),i=i.parent}}),n}function Ou(e,t,n,r){const o=ir(t,n,r,!1),i=ir(e,n,r,!0),a=Mu(e,n),l=[];return o.forEach(s=>{(i.has(s)||a.has(s))&&l.push(s)}),l.forEach(s=>o.delete(s)),o}function zr(e,t){const{checkedKeys:n,keysToCheck:r,keysToUncheck:o,indeterminateKeys:i,cascade:a,leafOnly:l,checkStrategy:s,allowNotLoaded:c}=e;if(!a)return r!==void 0?{checkedKeys:xu(n,r),indeterminateKeys:Array.from(i)}:o!==void 0?{checkedKeys:Cu(n,o),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:d}=t;let v;o!==void 0?v=Ou(o,n,t,c):r!==void 0?v=_u(r,n,t,c):v=ir(n,t,c,!1);const p=s==="parent",b=s==="child"||l,f=v,m=new Set,C=Math.max.apply(null,Array.from(d.keys()));for(let g=C;g>=0;g-=1){const S=g===0,M=d.get(g);for(const y of M){if(y.isLeaf)continue;const{key:k,shallowLoaded:_}=y;if(b&&_&&y.children.forEach(q=>{!q.disabled&&!q.isLeaf&&q.shallowLoaded&&f.has(q.key)&&f.delete(q.key)}),y.disabled||!_)continue;let N=!0,G=!1,j=!0;for(const q of y.children){const Q=q.key;if(!q.disabled){if(j&&(j=!1),f.has(Q))G=!0;else if(m.has(Q)){G=!0,N=!1;break}else if(N=!1,G)break}}N&&!j?(p&&y.children.forEach(q=>{!q.disabled&&f.has(q.key)&&f.delete(q.key)}),f.add(k)):G&&m.add(k),S&&b&&f.has(k)&&f.delete(k)}}return{checkedKeys:Array.from(f),indeterminateKeys:Array.from(m)}}function ir(e,t,n,r){const{treeNodeMap:o,getChildren:i}=t,a=new Set,l=new Set(e);return e.forEach(s=>{const c=o.get(s);c!==void 0&&ca(c,d=>{if(d.disabled)return Xr.STOP;const{key:v}=d;if(!a.has(v)&&(a.add(v),l.add(v),wu(d.rawNode,i))){if(r)return Xr.STOP;if(!n)throw new Pu}})}),l}function Ru(e,{includeGroup:t=!1,includeSelf:n=!0},r){var o;const i=r.treeNodeMap;let a=e==null?null:(o=i.get(e))!==null&&o!==void 0?o:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(s=>s.key),l}function Iu(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function $u(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o+1)%r]:o===n.length-1?null:n[o+1]}function vi(e,t,{loop:n=!1,includeDisabled:r=!1}={}){const o=t==="prev"?zu:$u,i={reverse:t==="prev"};let a=!1,l=null;function s(c){if(c!==null){if(c===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!c.disabled||r)&&!c.ignored&&!c.isGroup){l=c;return}if(c.isGroup){const d=$o(c,i);d!==null?l=d:s(o(c,n))}else{const d=o(c,!1);if(d!==null)s(d);else{const v=Au(c);v?.isGroup?s(o(v,n)):n&&s(o(c,!0))}}}}return s(e),l}function zu(e,t){const n=e.siblings,r=n.length,{index:o}=e;return t?n[(o-1+r)%r]:o===0?null:n[o-1]}function Au(e){return e.parent}function $o(e,t={}){const{reverse:n=!1}=t,{children:r}=e;if(r){const{length:o}=r,i=n?o-1:0,a=n?-1:o,l=n?-1:1;for(let s=i;s!==a;s+=l){const c=r[s];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=$o(c,t);if(d!==null)return d}else return c}}return null}const Eu={getChild(){return this.ignored?null:$o(this)},getParent(){const{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return vi(this,"next",e)},getPrev(e={}){return vi(this,"prev",e)}};function Tu(e,t){const n=t?new Set(t):void 0,r=[];function o(i){i.forEach(a=>{r.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&o(a.children)})}return o(e),r}function Fu(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function ua(e,t,n,r,o,i=null,a=0){const l=[];return e.forEach((s,c)=>{var d;const v=Object.create(r);if(v.rawNode=s,v.siblings=l,v.level=a,v.index=c,v.isFirstChild=c===0,v.isLastChild=c+1===e.length,v.parent=i,!v.ignored){const p=o(s);Array.isArray(p)&&(v.children=ua(p,t,n,r,o,v,a+1))}l.push(v),t.set(v.key,v),n.has(a)||n.set(a,[]),(d=n.get(a))===null||d===void 0||d.push(v)}),l}function fa(e,t={}){var n;const r=new Map,o=new Map,{getDisabled:i=yu,getIgnored:a=gu,getIsGroup:l=ku,getKey:s=bu}=t,c=(n=t.getChildren)!==null&&n!==void 0?n:pu,d=t.ignoreEmptyChildren?y=>{const k=c(y);return Array.isArray(k)?k.length?k:null:k}:c,v=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return vu(this.rawNode,d)},get shallowLoaded(){return mu(this.rawNode,d)},get ignored(){return a(this.rawNode)},contains(y){return Fu(this,y)}},Eu),p=ua(e,r,o,v,d);function b(y){if(y==null)return null;const k=r.get(y);return k&&!k.isGroup&&!k.ignored?k:null}function f(y){if(y==null)return null;const k=r.get(y);return k&&!k.ignored?k:null}function m(y,k){const _=f(y);return _?_.getPrev(k):null}function C(y,k){const _=f(y);return _?_.getNext(k):null}function g(y){const k=f(y);return k?k.getParent():null}function S(y){const k=f(y);return k?k.getChild():null}const M={treeNodes:p,treeNodeMap:r,levelTreeNodeMap:o,maxLevel:Math.max(...o.keys()),getChildren:d,getFlattenedNodes(y){return Tu(p,y)},getNode:b,getPrev:m,getNext:C,getParent:g,getChild:S,getFirstAvailableNode(){return Iu(p)},getPath(y,k={}){return Ru(y,k,M)},getCheckedKeys(y,k={}){const{cascade:_=!0,leafOnly:N=!1,checkStrategy:G="all",allowNotLoaded:j=!1}=k;return zr({checkedKeys:Ir(y),indeterminateKeys:$r(y),cascade:_,leafOnly:N,checkStrategy:G,allowNotLoaded:j},M)},check(y,k,_={}){const{cascade:N=!0,leafOnly:G=!1,checkStrategy:j="all",allowNotLoaded:q=!1}=_;return zr({checkedKeys:Ir(k),indeterminateKeys:$r(k),keysToCheck:y==null?[]:hi(y),cascade:N,leafOnly:G,checkStrategy:j,allowNotLoaded:q},M)},uncheck(y,k,_={}){const{cascade:N=!0,leafOnly:G=!1,checkStrategy:j="all",allowNotLoaded:q=!1}=_;return zr({checkedKeys:Ir(k),indeterminateKeys:$r(k),keysToUncheck:y==null?[]:hi(y),cascade:N,leafOnly:G,checkStrategy:j,allowNotLoaded:q},M)},getNonLeafKeys(y={}){return hu(p,y)}};return M}const Bu=x("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[E("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[X("+",[E("description",`
 margin-top: 8px;
 `)])]),E("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),E("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Du=Object.assign(Object.assign({},Ie.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Lu=fe({name:"Empty",props:Du,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=nt(e),o=Ie("Empty","-empty",Bu,$l,e,t),{localeRef:i}=Io("Empty"),a=T(()=>{var d,v,p;return(d=e.description)!==null&&d!==void 0?d:(p=(v=r?.value)===null||v===void 0?void 0:v.Empty)===null||p===void 0?void 0:p.description}),l=T(()=>{var d,v;return((v=(d=r?.value)===null||d===void 0?void 0:d.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>u(su,null))}),s=T(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:v},self:{[ae("iconSize",d)]:p,[ae("fontSize",d)]:b,textColor:f,iconColor:m,extraTextColor:C}}=o.value;return{"--n-icon-size":p,"--n-font-size":b,"--n-bezier":v,"--n-text-color":f,"--n-icon-color":m,"--n-extra-text-color":C}}),c=n?rt("empty",T(()=>{let d="";const{size:v}=e;return d+=v[0],d}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:T(()=>a.value||i.value.description),cssVars:n?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),u("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?u("div",{class:`${t}-empty__icon`},e.icon?e.icon():u(Vt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?u("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?u("div",{class:`${t}-empty__extra`},e.extra()):null)}}),pi=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=Be(xo);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:o}}=this,i=r?.(o),a=t?t(o,!1):vt(o[this.labelField],o,!1),l=u("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i?.class]}),a);return o.render?o.render({node:l,option:o}):n?n({node:l,option:o,selected:!1}):l}});function Nu(e,t){return u(Bn,{name:"fade-in-scale-up-transition"},{default:()=>e?u(Vt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>u(ou)}):null})}const bi=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:o,renderLabelRef:i,renderOptionRef:a,labelFieldRef:l,valueFieldRef:s,showCheckmarkRef:c,nodePropsRef:d,handleOptionClick:v,handleOptionMouseEnter:p}=Be(xo),b=qe(()=>{const{value:g}=n;return g?e.tmNode.key===g.key:!1});function f(g){const{tmNode:S}=e;S.disabled||v(g,S)}function m(g){const{tmNode:S}=e;S.disabled||p(g,S)}function C(g){const{tmNode:S}=e,{value:M}=b;S.disabled||M||p(g,S)}return{multiple:r,isGrouped:qe(()=>{const{tmNode:g}=e,{parent:S}=g;return S&&S.rawNode.type==="group"}),showCheckmark:c,nodeProps:d,isPending:b,isSelected:qe(()=>{const{value:g}=t,{value:S}=r;if(g===null)return!1;const M=e.tmNode.rawNode[s.value];if(S){const{value:y}=o;return y.has(M)}else return g===M}),labelField:l,renderLabel:i,renderOption:a,handleMouseMove:C,handleMouseEnter:m,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:o,showCheckmark:i,nodeProps:a,renderOption:l,renderLabel:s,handleClick:c,handleMouseEnter:d,handleMouseMove:v}=this,p=Nu(n,e),b=s?[s(t,n),i&&p]:[vt(t[this.labelField],t,n),i&&p],f=a?.(t),m=u("div",Object.assign({},f,{class:[`${e}-base-select-option`,t.class,f?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:o,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:i}],style:[f?.style||"",t.style||""],onClick:_r([c,f?.onClick]),onMouseenter:_r([d,f?.onMouseenter]),onMousemove:_r([v,f?.onMousemove])}),u("div",{class:`${e}-base-select-option__content`},b));return t.render?t.render({node:m,option:t,selected:n}):l?l({node:m,option:t,selected:n}):m}}),Wu=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[E("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),E("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[D("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),D("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),D("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),D("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),D("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),D("disabled",`
 cursor: not-allowed;
 `,[He("selected",`
 color: var(--n-option-text-color-disabled);
 `),D("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),E("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[bo({enterScale:"0.5"})])])]),Vu=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=nt(e),r=en("InternalSelectMenu",n,t),o=Ie("InternalSelectMenu","-internal-select-menu",Wu,zl,e,ue(e,"clsPrefix")),i=B(null),a=B(null),l=B(null),s=T(()=>e.treeMate.getFlattenedNodes()),c=T(()=>Su(s.value)),d=B(null);function v(){const{treeMate:L}=e;let Y=null;const{value:de}=e;de===null?Y=L.getFirstAvailableNode():(e.multiple?Y=L.getNode((de||[])[(de||[]).length-1]):Y=L.getNode(de),(!Y||Y.disabled)&&(Y=L.getFirstAvailableNode())),$(Y||null)}function p(){const{value:L}=d;L&&!e.treeMate.getNode(L.key)&&(d.value=null)}let b;Ce(()=>e.show,L=>{L?b=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():p(),Mt(R)):p()},{immediate:!0}):b?.()},{immediate:!0}),Rt(()=>{b?.()});const f=T(()=>Qn(o.value.self[ae("optionHeight",e.size)])),m=T(()=>ft(o.value.self[ae("padding",e.size)])),C=T(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),g=T(()=>{const L=s.value;return L&&L.length===0});function S(L){const{onToggle:Y}=e;Y&&Y(L)}function M(L){const{onScroll:Y}=e;Y&&Y(L)}function y(L){var Y;(Y=l.value)===null||Y===void 0||Y.sync(),M(L)}function k(){var L;(L=l.value)===null||L===void 0||L.sync()}function _(){const{value:L}=d;return L||null}function N(L,Y){Y.disabled||$(Y,!1)}function G(L,Y){Y.disabled||S(Y)}function j(L){var Y;Xt(L,"action")||(Y=e.onKeyup)===null||Y===void 0||Y.call(e,L)}function q(L){var Y;Xt(L,"action")||(Y=e.onKeydown)===null||Y===void 0||Y.call(e,L)}function Q(L){var Y;(Y=e.onMousedown)===null||Y===void 0||Y.call(e,L),!e.focusable&&L.preventDefault()}function I(){const{value:L}=d;L&&$(L.getNext({loop:!0}),!0)}function O(){const{value:L}=d;L&&$(L.getPrev({loop:!0}),!0)}function $(L,Y=!1){d.value=L,Y&&R()}function R(){var L,Y;const de=d.value;if(!de)return;const H=c.value(de.key);H!==null&&(e.virtualScroll?(L=a.value)===null||L===void 0||L.scrollTo({index:H}):(Y=l.value)===null||Y===void 0||Y.scrollTo({index:H,elSize:f.value}))}function J(L){var Y,de;!((Y=i.value)===null||Y===void 0)&&Y.contains(L.target)&&((de=e.onFocus)===null||de===void 0||de.call(e,L))}function V(L){var Y,de;!((Y=i.value)===null||Y===void 0)&&Y.contains(L.relatedTarget)||(de=e.onBlur)===null||de===void 0||de.call(e,L)}Ke(xo,{handleOptionMouseEnter:N,handleOptionClick:G,valueSetRef:C,pendingTmNodeRef:d,nodePropsRef:ue(e,"nodeProps"),showCheckmarkRef:ue(e,"showCheckmark"),multipleRef:ue(e,"multiple"),valueRef:ue(e,"value"),renderLabelRef:ue(e,"renderLabel"),renderOptionRef:ue(e,"renderOption"),labelFieldRef:ue(e,"labelField"),valueFieldRef:ue(e,"valueField")}),Ke(Zi,i),pt(()=>{const{value:L}=l;L&&L.sync()});const Z=T(()=>{const{size:L}=e,{common:{cubicBezierEaseInOut:Y},self:{height:de,borderRadius:H,color:A,groupHeaderTextColor:F,actionDividerColor:we,optionTextColorPressed:$e,optionTextColor:Ae,optionTextColorDisabled:Ee,optionTextColorActive:ke,optionOpacityDisabled:De,optionCheckColor:Se,actionTextColor:Xe,optionColorPending:ot,optionColorActive:it,loadingColor:et,loadingSize:Je,optionColorActivePending:K,[ae("optionFontSize",L)]:U,[ae("optionHeight",L)]:oe,[ae("optionPadding",L)]:le}}=o.value;return{"--n-height":de,"--n-action-divider-color":we,"--n-action-text-color":Xe,"--n-bezier":Y,"--n-border-radius":H,"--n-color":A,"--n-option-font-size":U,"--n-group-header-text-color":F,"--n-option-check-color":Se,"--n-option-color-pending":ot,"--n-option-color-active":it,"--n-option-color-active-pending":K,"--n-option-height":oe,"--n-option-opacity-disabled":De,"--n-option-text-color":Ae,"--n-option-text-color-active":ke,"--n-option-text-color-disabled":Ee,"--n-option-text-color-pressed":$e,"--n-option-padding":le,"--n-option-padding-left":ft(le,"left"),"--n-option-padding-right":ft(le,"right"),"--n-loading-color":et,"--n-loading-size":Je}}),{inlineThemeDisabled:re}=e,ie=re?rt("internal-select-menu",T(()=>e.size[0]),Z,e):void 0,ve={selfRef:i,next:I,prev:O,getPendingTmNode:_};return oa(i,e.onResize),Object.assign({mergedTheme:o,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:a,scrollbarRef:l,itemSize:f,padding:m,flattenedNodes:s,empty:g,virtualListContainer(){const{value:L}=a;return L?.listElRef},virtualListContent(){const{value:L}=a;return L?.itemsElRef},doScroll:M,handleFocusin:J,handleFocusout:V,handleKeyUp:j,handleKeyDown:q,handleMouseDown:Q,handleVirtualListResize:k,handleVirtualListScroll:y,cssVars:re?void 0:Z,themeClass:ie?.themeClass,onRender:ie?.onRender},ve)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:r,themeClass:o,onRender:i}=this;return i?.(),u("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,o,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Qe(e.header,a=>a&&u("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},a)),this.loading?u("div",{class:`${n}-base-select-menu__loading`},u(Vi,{clsPrefix:n,strokeWidth:20})):this.empty?u("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Gt(e.empty,()=>[u(Lu,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):u(ji,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?u(Es,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?u(pi,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:u(bi,{clsPrefix:n,key:a.key,tmNode:a})}):u("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?u(pi,{key:a.key,clsPrefix:n,tmNode:a}):u(bi,{clsPrefix:n,key:a.key,tmNode:a})))}),Qe(e.action,a=>a&&[u("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),u(fu,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ar={top:"bottom",bottom:"top",left:"right",right:"left"},Ue="var(--n-arrow-height) * 1.414",ju=X([x("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[X(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),He("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[He("scrollable",[He("show-header-or-footer","padding: var(--n-padding);")])]),E("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),E("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),D("scrollable, show-header-or-footer",[E("content",`
 padding: var(--n-padding);
 `)])]),x("popover-shared",`
 transform-origin: inherit;
 `,[x("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[x("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ue});
 height: calc(${Ue});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),X("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),X("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),X("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),X("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ut("top-start",`
 top: calc(${Ue} / -2);
 left: calc(${kt("top-start")} - var(--v-offset-left));
 `),ut("top",`
 top: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `),ut("top-end",`
 top: calc(${Ue} / -2);
 right: calc(${kt("top-end")} + var(--v-offset-left));
 `),ut("bottom-start",`
 bottom: calc(${Ue} / -2);
 left: calc(${kt("bottom-start")} - var(--v-offset-left));
 `),ut("bottom",`
 bottom: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `),ut("bottom-end",`
 bottom: calc(${Ue} / -2);
 right: calc(${kt("bottom-end")} + var(--v-offset-left));
 `),ut("left-start",`
 left: calc(${Ue} / -2);
 top: calc(${kt("left-start")} - var(--v-offset-top));
 `),ut("left",`
 left: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `),ut("left-end",`
 left: calc(${Ue} / -2);
 bottom: calc(${kt("left-end")} + var(--v-offset-top));
 `),ut("right-start",`
 right: calc(${Ue} / -2);
 top: calc(${kt("right-start")} - var(--v-offset-top));
 `),ut("right",`
 right: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `),ut("right-end",`
 right: calc(${Ue} / -2);
 bottom: calc(${kt("right-end")} + var(--v-offset-top));
 `),...eu({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(o=>{const i=o.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${Ue}) / 2)`,s=kt(o);return X(`[v-placement="${o}"] >`,[x("popover-shared",[D("center-arrow",[x("popover-arrow",`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function kt(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ut(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return X(`[v-placement="${e}"] >`,[x("popover-shared",`
 margin-${Ar[n]}: var(--n-space);
 `,[D("show-arrow",`
 margin-${Ar[n]}: var(--n-space-arrow);
 `),D("overlap",`
 margin: 0;
 `),Al("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Ar[n]}: auto;
 ${r}
 `,[x("popover-arrow",t)])])])}const ha=Object.assign(Object.assign({},Ie.props),{to:Ot.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function va({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:o}){return u("div",{key:"__popover-arrow__",style:r,class:[`${o}-popover-arrow-wrapper`,n]},u("div",{class:[`${o}-popover-arrow`,e],style:t}))}const Hu=fe({name:"PopoverBody",inheritAttrs:!1,props:ha,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:a}=nt(e),l=Ie("Popover","-popover",ju,El,e,o),s=en("Popover",a,o),c=B(null),d=Be("NPopover"),v=B(null),p=B(e.show),b=B(!1);pn(()=>{const{show:j}=e;j&&!Ls()&&!e.internalDeactivateImmediately&&(b.value=!0)});const f=T(()=>{const{trigger:j,onClickoutside:q}=e,Q=[],{positionManuallyRef:{value:I}}=d;return I||(j==="click"&&!q&&Q.push([er,_,void 0,{capture:!0}]),j==="hover"&&Q.push([ks,k])),q&&Q.push([er,_,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&b.value)&&Q.push([go,e.show]),Q}),m=T(()=>{const{common:{cubicBezierEaseInOut:j,cubicBezierEaseIn:q,cubicBezierEaseOut:Q},self:{space:I,spaceArrow:O,padding:$,fontSize:R,textColor:J,dividerColor:V,color:Z,boxShadow:re,borderRadius:ie,arrowHeight:ve,arrowOffset:L,arrowOffsetVertical:Y}}=l.value;return{"--n-box-shadow":re,"--n-bezier":j,"--n-bezier-ease-in":q,"--n-bezier-ease-out":Q,"--n-font-size":R,"--n-text-color":J,"--n-color":Z,"--n-divider-color":V,"--n-border-radius":ie,"--n-arrow-height":ve,"--n-arrow-offset":L,"--n-arrow-offset-vertical":Y,"--n-padding":$,"--n-space":I,"--n-space-arrow":O}}),C=T(()=>{const j=e.width==="trigger"?void 0:Jt(e.width),q=[];j&&q.push({width:j});const{maxWidth:Q,minWidth:I}=e;return Q&&q.push({maxWidth:Jt(Q)}),I&&q.push({maxWidth:Jt(I)}),i||q.push(m.value),q}),g=i?rt("popover",void 0,m,e):void 0;d.setBodyInstance({syncPosition:S}),Rt(()=>{d.setBodyInstance(null)}),Ce(ue(e,"show"),j=>{e.animated||(j?p.value=!0:p.value=!1)});function S(){var j;(j=c.value)===null||j===void 0||j.syncPosition()}function M(j){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&d.handleMouseEnter(j)}function y(j){e.trigger==="hover"&&e.keepAliveOnHover&&d.handleMouseLeave(j)}function k(j){e.trigger==="hover"&&!N().contains(jr(j))&&d.handleMouseMoveOutside(j)}function _(j){(e.trigger==="click"&&!N().contains(jr(j))||e.onClickoutside)&&d.handleClickOutside(j)}function N(){return d.getTriggerElement()}Ke(lr,v),Ke(co,null),Ke(so,null);function G(){if(g?.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&b.value))return null;let q;const Q=d.internalRenderBodyRef.value,{value:I}=o;if(Q)q=Q([`${I}-popover-shared`,s?.value&&`${I}-popover--rtl`,g?.themeClass.value,e.overlap&&`${I}-popover-shared--overlap`,e.showArrow&&`${I}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${I}-popover-shared--center-arrow`],v,C.value,M,y);else{const{value:O}=d.extraClassRef,{internalTrapFocus:$}=e,R=!No(t.header)||!No(t.footer),J=()=>{var V,Z;const re=R?u(ht,null,Qe(t.header,L=>L?u("div",{class:[`${I}-popover__header`,e.headerClass],style:e.headerStyle},L):null),Qe(t.default,L=>L?u("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},t):null),Qe(t.footer,L=>L?u("div",{class:[`${I}-popover__footer`,e.footerClass],style:e.footerStyle},L):null)):e.scrollable?(V=t.default)===null||V===void 0?void 0:V.call(t):u("div",{class:[`${I}-popover__content`,e.contentClass],style:e.contentStyle},t),ie=e.scrollable?u(Hi,{themeOverrides:l.value.peerOverrides.Scrollbar,theme:l.value.peers.Scrollbar,contentClass:R?void 0:`${I}-popover__content ${(Z=e.contentClass)!==null&&Z!==void 0?Z:""}`,contentStyle:R?void 0:e.contentStyle},{default:()=>re}):re,ve=e.showArrow?va({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:I}):null;return[ie,ve]};q=u("div",Qt({class:[`${I}-popover`,`${I}-popover-shared`,s?.value&&`${I}-popover--rtl`,g?.themeClass.value,O.map(V=>`${I}-${V}`),{[`${I}-popover--scrollable`]:e.scrollable,[`${I}-popover--show-header-or-footer`]:R,[`${I}-popover--raw`]:e.raw,[`${I}-popover-shared--overlap`]:e.overlap,[`${I}-popover-shared--show-arrow`]:e.showArrow,[`${I}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:v,style:C.value,onKeydown:d.handleKeydown,onMouseenter:M,onMouseleave:y},n),$?u(Tl,{active:e.show,autoFocus:!0},{default:J}):J())}return gn(q,f.value)}return{displayed:b,namespace:r,isMounted:d.isMountedRef,zIndex:d.zIndexRef,followerRef:c,adjustedTo:Ot(e),followerEnabled:p,renderContentNode:G}},render(){return u(So,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Ot.tdkey},{default:()=>this.animated?u(Bn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Ku=Object.keys(ha),Uu={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function qu(e,t,n){Uu[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const o=e.props[r],i=n[r];o?e.props[r]=(...a)=>{o(...a),i(...a)}:e.props[r]=i})}const zo={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Ot.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Yu=Object.assign(Object.assign(Object.assign({},Ie.props),zo),{internalOnAfterLeave:Function,internalRenderBody:Function}),pa=fe({name:"Popover",inheritAttrs:!1,props:Yu,slots:Object,__popover__:!0,setup(e){const t=fo(),n=B(null),r=T(()=>e.show),o=B(e.defaultShow),i=Zt(r,o),a=qe(()=>e.disabled?!1:i.value),l=()=>{if(e.disabled)return!0;const{getDisabled:R}=e;return!!R?.()},s=()=>l()?!1:i.value,c=rr(e,["arrow","showArrow"]),d=T(()=>e.overlap?!1:c.value);let v=null;const p=B(null),b=B(null),f=qe(()=>e.x!==void 0&&e.y!==void 0);function m(R){const{"onUpdate:show":J,onUpdateShow:V,onShow:Z,onHide:re}=e;o.value=R,J&&ye(J,R),V&&ye(V,R),R&&Z&&ye(Z,!0),R&&re&&ye(re,!1)}function C(){v&&v.syncPosition()}function g(){const{value:R}=p;R&&(window.clearTimeout(R),p.value=null)}function S(){const{value:R}=b;R&&(window.clearTimeout(R),b.value=null)}function M(){const R=l();if(e.trigger==="focus"&&!R){if(s())return;m(!0)}}function y(){const R=l();if(e.trigger==="focus"&&!R){if(!s())return;m(!1)}}function k(){const R=l();if(e.trigger==="hover"&&!R){if(S(),p.value!==null||s())return;const J=()=>{m(!0),p.value=null},{delay:V}=e;V===0?J():p.value=window.setTimeout(J,V)}}function _(){const R=l();if(e.trigger==="hover"&&!R){if(g(),b.value!==null||!s())return;const J=()=>{m(!1),b.value=null},{duration:V}=e;V===0?J():b.value=window.setTimeout(J,V)}}function N(){_()}function G(R){var J;s()&&(e.trigger==="click"&&(g(),S(),m(!1)),(J=e.onClickoutside)===null||J===void 0||J.call(e,R))}function j(){if(e.trigger==="click"&&!l()){g(),S();const R=!s();m(R)}}function q(R){e.internalTrapFocus&&R.key==="Escape"&&(g(),S(),m(!1))}function Q(R){o.value=R}function I(){var R;return(R=n.value)===null||R===void 0?void 0:R.targetRef}function O(R){v=R}return Ke("NPopover",{getTriggerElement:I,handleKeydown:q,handleMouseEnter:k,handleMouseLeave:_,handleClickOutside:G,handleMouseMoveOutside:N,setBodyInstance:O,positionManuallyRef:f,isMountedRef:t,zIndexRef:ue(e,"zIndex"),extraClassRef:ue(e,"internalExtraClass"),internalRenderBodyRef:ue(e,"internalRenderBody")}),pn(()=>{i.value&&l()&&m(!1)}),{binderInstRef:n,positionManually:f,mergedShowConsideringDisabledProp:a,uncontrolledShow:o,mergedShowArrow:d,getMergedShow:s,setShow:Q,handleClick:j,handleMouseEnter:k,handleMouseLeave:_,handleFocus:M,handleBlur:y,syncPosition:C}},render(){var e;const{positionManually:t,$slots:n}=this;let r,o=!1;if(!t&&(r=Fl(n,"trigger"),r)){r=Ki(r),r=r.type===Bl?u("span",[r]):r;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)o=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[i,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,l=[i,...a],s={onBlur:c=>{l.forEach(d=>{d.onBlur(c)})},onFocus:c=>{l.forEach(d=>{d.onFocus(c)})},onClick:c=>{l.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{l.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{l.forEach(d=>{d.onMouseleave(c)})}};qu(r,a?"nested":t?"manual":this.trigger,s)}}return u(Co,{ref:"binderInstRef",syncTarget:!o,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?gn(u("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[Bi,{enabled:i,zIndex:this.zIndex}]]):null,t?null:u(ko,null,{default:()=>r}),u(Hu,Ui(this.$props,Ku,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}});function Gu(e){const{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:o,infoColor:i,successColor:a,warningColor:l,errorColor:s,baseColor:c,borderColor:d,opacityDisabled:v,tagColor:p,closeIconColor:b,closeIconColorHover:f,closeIconColorPressed:m,borderRadiusSmall:C,fontSizeMini:g,fontSizeTiny:S,fontSizeSmall:M,fontSizeMedium:y,heightMini:k,heightTiny:_,heightSmall:N,heightMedium:G,closeColorHover:j,closeColorPressed:q,buttonColor2Hover:Q,buttonColor2Pressed:I,fontWeightStrong:O}=e;return Object.assign(Object.assign({},Dl),{closeBorderRadius:C,heightTiny:k,heightSmall:_,heightMedium:N,heightLarge:G,borderRadius:C,opacityDisabled:v,fontSizeTiny:g,fontSizeSmall:S,fontSizeMedium:M,fontSizeLarge:y,fontWeightStrong:O,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:Q,colorPressedCheckable:I,colorChecked:o,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${d}`,textColor:t,color:p,colorBordered:"rgb(250, 250, 252)",closeIconColor:b,closeIconColorHover:f,closeIconColorPressed:m,closeColorHover:j,closeColorPressed:q,borderPrimary:`1px solid ${Oe(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:Oe(o,{alpha:.12}),colorBorderedPrimary:Oe(o,{alpha:.1}),closeIconColorPrimary:o,closeIconColorHoverPrimary:o,closeIconColorPressedPrimary:o,closeColorHoverPrimary:Oe(o,{alpha:.12}),closeColorPressedPrimary:Oe(o,{alpha:.18}),borderInfo:`1px solid ${Oe(i,{alpha:.3})}`,textColorInfo:i,colorInfo:Oe(i,{alpha:.12}),colorBorderedInfo:Oe(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:Oe(i,{alpha:.12}),closeColorPressedInfo:Oe(i,{alpha:.18}),borderSuccess:`1px solid ${Oe(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:Oe(a,{alpha:.12}),colorBorderedSuccess:Oe(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:Oe(a,{alpha:.12}),closeColorPressedSuccess:Oe(a,{alpha:.18}),borderWarning:`1px solid ${Oe(l,{alpha:.35})}`,textColorWarning:l,colorWarning:Oe(l,{alpha:.15}),colorBorderedWarning:Oe(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:Oe(l,{alpha:.12}),closeColorPressedWarning:Oe(l,{alpha:.18}),borderError:`1px solid ${Oe(s,{alpha:.23})}`,textColorError:s,colorError:Oe(s,{alpha:.1}),colorBorderedError:Oe(s,{alpha:.08}),closeIconColorError:s,closeIconColorHoverError:s,closeIconColorPressedError:s,closeColorHoverError:Oe(s,{alpha:.12}),closeColorPressedError:Oe(s,{alpha:.18})})}const Xu={common:mo,self:Gu},Ju={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Zu=x("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[D("strong",`
 font-weight: var(--n-font-weight-strong);
 `),E("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),E("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),E("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),E("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),D("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[E("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),E("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),D("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),D("icon, avatar",[D("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),D("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),D("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[He("disabled",[X("&:hover","background-color: var(--n-color-hover-checkable);",[He("checked","color: var(--n-text-color-hover-checkable);")]),X("&:active","background-color: var(--n-color-pressed-checkable);",[He("checked","color: var(--n-text-color-pressed-checkable);")])]),D("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[He("disabled",[X("&:hover","background-color: var(--n-color-checked-hover);"),X("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Qu=Object.assign(Object.assign(Object.assign({},Ie.props),Ju),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ef=bt("n-tag"),tt=fe({name:"Tag",props:Qu,slots:Object,setup(e){const t=B(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=nt(e),a=Ie("Tag","-tag",Zu,Xu,e,r);Ke(ef,{roundRef:ue(e,"round")});function l(){if(!e.disabled&&e.checkable){const{checked:b,onCheckedChange:f,onUpdateChecked:m,"onUpdate:checked":C}=e;m&&m(!b),C&&C(!b),f&&f(!b)}}function s(b){if(e.triggerClickOnClose||b.stopPropagation(),!e.disabled){const{onClose:f}=e;f&&ye(f,b)}}const c={setTextContent(b){const{value:f}=t;f&&(f.textContent=b)}},d=en("Tag",i,r),v=T(()=>{const{type:b,size:f,color:{color:m,textColor:C}={}}=e,{common:{cubicBezierEaseInOut:g},self:{padding:S,closeMargin:M,borderRadius:y,opacityDisabled:k,textColorCheckable:_,textColorHoverCheckable:N,textColorPressedCheckable:G,textColorChecked:j,colorCheckable:q,colorHoverCheckable:Q,colorPressedCheckable:I,colorChecked:O,colorCheckedHover:$,colorCheckedPressed:R,closeBorderRadius:J,fontWeightStrong:V,[ae("colorBordered",b)]:Z,[ae("closeSize",f)]:re,[ae("closeIconSize",f)]:ie,[ae("fontSize",f)]:ve,[ae("height",f)]:L,[ae("color",b)]:Y,[ae("textColor",b)]:de,[ae("border",b)]:H,[ae("closeIconColor",b)]:A,[ae("closeIconColorHover",b)]:F,[ae("closeIconColorPressed",b)]:we,[ae("closeColorHover",b)]:$e,[ae("closeColorPressed",b)]:Ae}}=a.value,Ee=ft(M);return{"--n-font-weight-strong":V,"--n-avatar-size-override":`calc(${L} - 8px)`,"--n-bezier":g,"--n-border-radius":y,"--n-border":H,"--n-close-icon-size":ie,"--n-close-color-pressed":Ae,"--n-close-color-hover":$e,"--n-close-border-radius":J,"--n-close-icon-color":A,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":we,"--n-close-icon-color-disabled":A,"--n-close-margin-top":Ee.top,"--n-close-margin-right":Ee.right,"--n-close-margin-bottom":Ee.bottom,"--n-close-margin-left":Ee.left,"--n-close-size":re,"--n-color":m||(n.value?Z:Y),"--n-color-checkable":q,"--n-color-checked":O,"--n-color-checked-hover":$,"--n-color-checked-pressed":R,"--n-color-hover-checkable":Q,"--n-color-pressed-checkable":I,"--n-font-size":ve,"--n-height":L,"--n-opacity-disabled":k,"--n-padding":S,"--n-text-color":C||de,"--n-text-color-checkable":_,"--n-text-color-checked":j,"--n-text-color-hover-checkable":N,"--n-text-color-pressed-checkable":G}}),p=o?rt("tag",T(()=>{let b="";const{type:f,size:m,color:{color:C,textColor:g}={}}=e;return b+=f[0],b+=m[0],C&&(b+=`a${Wo(C)}`),g&&(b+=`b${Wo(g)}`),n.value&&(b+="c"),b}),v,e):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:d,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:s,cssVars:o?void 0:v,themeClass:p?.themeClass,onRender:p?.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:r,closable:o,color:{borderColor:i}={},round:a,onRender:l,$slots:s}=this;l?.();const c=Qe(s.avatar,v=>v&&u("div",{class:`${n}-tag__avatar`},v)),d=Qe(s.icon,v=>v&&u("div",{class:`${n}-tag__icon`},v));return u("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:c,[`${n}-tag--icon`]:d,[`${n}-tag--closable`]:o}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||c,u("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&o?u(yo,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?u("div",{class:`${n}-tag__border`,style:{borderColor:i}}):null)}}),ba=fe({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:t}){return()=>{const{clsPrefix:n}=e;return u(Vi,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?u(Gr,{clsPrefix:n,show:e.showClear,onClear:e.onClear},{placeholder:()=>u(Vt,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Gt(t.default,()=>[u(iu,null)])})}):null})}}}),tf=X([x("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),E("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),E("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[E("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[E("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),x("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[x("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[E("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E("render-label",`
 color: var(--n-text-color);
 `)]),He("disabled",[X("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),D("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),D("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),D("disabled","cursor: not-allowed;",[E("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),E("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>D(`${e}-status`,[E("state-border",`border: var(--n-border-${e});`),He("disabled",[X("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),D("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),D("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[E("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),nf=fe({name:"InternalSelection",props:Object.assign(Object.assign({},Ie.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=nt(e),r=en("InternalSelection",n,t),o=B(null),i=B(null),a=B(null),l=B(null),s=B(null),c=B(null),d=B(null),v=B(null),p=B(null),b=B(null),f=B(!1),m=B(!1),C=B(!1),g=Ie("InternalSelection","-internal-selection",tf,Nl,e,ue(e,"clsPrefix")),S=T(()=>e.clearable&&!e.disabled&&(C.value||e.active)),M=T(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):vt(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=T(()=>{const h=e.selectedOption;if(h)return h[e.labelField]}),k=T(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function _(){var h;const{value:P}=o;if(P){const{value:ee}=i;ee&&(ee.style.width=`${P.offsetWidth}px`,e.maxTagCount!=="responsive"&&((h=p.value)===null||h===void 0||h.sync({showAllItemsBeforeCalculate:!1})))}}function N(){const{value:h}=b;h&&(h.style.display="none")}function G(){const{value:h}=b;h&&(h.style.display="inline-block")}Ce(ue(e,"active"),h=>{h||N()}),Ce(ue(e,"pattern"),()=>{e.multiple&&Mt(_)});function j(h){const{onFocus:P}=e;P&&P(h)}function q(h){const{onBlur:P}=e;P&&P(h)}function Q(h){const{onDeleteOption:P}=e;P&&P(h)}function I(h){const{onClear:P}=e;P&&P(h)}function O(h){const{onPatternInput:P}=e;P&&P(h)}function $(h){var P;(!h.relatedTarget||!(!((P=a.value)===null||P===void 0)&&P.contains(h.relatedTarget)))&&j(h)}function R(h){var P;!((P=a.value)===null||P===void 0)&&P.contains(h.relatedTarget)||q(h)}function J(h){I(h)}function V(){C.value=!0}function Z(){C.value=!1}function re(h){!e.active||!e.filterable||h.target!==i.value&&h.preventDefault()}function ie(h){Q(h)}const ve=B(!1);function L(h){if(h.key==="Backspace"&&!ve.value&&!e.pattern.length){const{selectedOptions:P}=e;P?.length&&ie(P[P.length-1])}}let Y=null;function de(h){const{value:P}=o;if(P){const ee=h.target.value;P.textContent=ee,_()}e.ignoreComposition&&ve.value?Y=h:O(h)}function H(){ve.value=!0}function A(){ve.value=!1,e.ignoreComposition&&O(Y),Y=null}function F(h){var P;m.value=!0,(P=e.onPatternFocus)===null||P===void 0||P.call(e,h)}function we(h){var P;m.value=!1,(P=e.onPatternBlur)===null||P===void 0||P.call(e,h)}function $e(){var h,P;if(e.filterable)m.value=!1,(h=c.value)===null||h===void 0||h.blur(),(P=i.value)===null||P===void 0||P.blur();else if(e.multiple){const{value:ee}=l;ee?.blur()}else{const{value:ee}=s;ee?.blur()}}function Ae(){var h,P,ee;e.filterable?(m.value=!1,(h=c.value)===null||h===void 0||h.focus()):e.multiple?(P=l.value)===null||P===void 0||P.focus():(ee=s.value)===null||ee===void 0||ee.focus()}function Ee(){const{value:h}=i;h&&(G(),h.focus())}function ke(){const{value:h}=i;h&&h.blur()}function De(h){const{value:P}=d;P&&P.setTextContent(`+${h}`)}function Se(){const{value:h}=v;return h}function Xe(){return i.value}let ot=null;function it(){ot!==null&&window.clearTimeout(ot)}function et(){e.active||(it(),ot=window.setTimeout(()=>{k.value&&(f.value=!0)},100))}function Je(){it()}function K(h){h||(it(),f.value=!1)}Ce(k,h=>{h||(f.value=!1)}),pt(()=>{pn(()=>{const h=c.value;h&&(e.disabled?h.removeAttribute("tabindex"):h.tabIndex=m.value?-1:0)})}),oa(a,e.onResize);const{inlineThemeDisabled:U}=e,oe=T(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:P},self:{fontWeight:ee,borderRadius:Te,color:Pe,placeholderColor:It,textColor:$t,paddingSingle:zt,paddingMultiple:jt,caretColor:Ht,colorDisabled:At,textColorDisabled:ct,placeholderColorDisabled:z,colorActive:te,boxShadowFocus:he,boxShadowActive:Me,boxShadowHover:_e,border:xe,borderFocus:ge,borderHover:Ve,borderActive:Ze,arrowColor:yn,arrowColorDisabled:nn,loadingColor:wn,colorActiveWarning:Et,boxShadowFocusWarning:Tt,boxShadowActiveWarning:xn,boxShadowHoverWarning:Cn,borderWarning:rn,borderFocusWarning:Ft,borderHoverWarning:w,borderActiveWarning:W,colorActiveError:ce,boxShadowFocusError:Fe,boxShadowActiveError:Ne,boxShadowHoverError:ze,borderError:mt,borderFocusError:yt,borderHoverError:wt,borderActiveError:Kt,clearColor:Ut,clearColorHover:kn,clearColorPressed:hr,clearSize:vr,arrowSize:pr,[ae("height",h)]:br,[ae("fontSize",h)]:gr}}=g.value,on=ft(zt),an=ft(jt);return{"--n-bezier":P,"--n-border":xe,"--n-border-active":Ze,"--n-border-focus":ge,"--n-border-hover":Ve,"--n-border-radius":Te,"--n-box-shadow-active":Me,"--n-box-shadow-focus":he,"--n-box-shadow-hover":_e,"--n-caret-color":Ht,"--n-color":Pe,"--n-color-active":te,"--n-color-disabled":At,"--n-font-size":gr,"--n-height":br,"--n-padding-single-top":on.top,"--n-padding-multiple-top":an.top,"--n-padding-single-right":on.right,"--n-padding-multiple-right":an.right,"--n-padding-single-left":on.left,"--n-padding-multiple-left":an.left,"--n-padding-single-bottom":on.bottom,"--n-padding-multiple-bottom":an.bottom,"--n-placeholder-color":It,"--n-placeholder-color-disabled":z,"--n-text-color":$t,"--n-text-color-disabled":ct,"--n-arrow-color":yn,"--n-arrow-color-disabled":nn,"--n-loading-color":wn,"--n-color-active-warning":Et,"--n-box-shadow-focus-warning":Tt,"--n-box-shadow-active-warning":xn,"--n-box-shadow-hover-warning":Cn,"--n-border-warning":rn,"--n-border-focus-warning":Ft,"--n-border-hover-warning":w,"--n-border-active-warning":W,"--n-color-active-error":ce,"--n-box-shadow-focus-error":Fe,"--n-box-shadow-active-error":Ne,"--n-box-shadow-hover-error":ze,"--n-border-error":mt,"--n-border-focus-error":yt,"--n-border-hover-error":wt,"--n-border-active-error":Kt,"--n-clear-size":vr,"--n-clear-color":Ut,"--n-clear-color-hover":kn,"--n-clear-color-pressed":hr,"--n-arrow-size":pr,"--n-font-weight":ee}}),le=U?rt("internal-selection",T(()=>e.size[0]),oe,e):void 0;return{mergedTheme:g,mergedClearable:S,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:m,filterablePlaceholder:M,label:y,selected:k,showTagsPanel:f,isComposing:ve,counterRef:d,counterWrapperRef:v,patternInputMirrorRef:o,patternInputRef:i,selfRef:a,multipleElRef:l,singleElRef:s,patternInputWrapperRef:c,overflowRef:p,inputTagElRef:b,handleMouseDown:re,handleFocusin:$,handleClear:J,handleMouseEnter:V,handleMouseLeave:Z,handleDeleteOption:ie,handlePatternKeyDown:L,handlePatternInputInput:de,handlePatternInputBlur:we,handlePatternInputFocus:F,handleMouseEnterCounter:et,handleMouseLeaveCounter:Je,handleFocusout:R,handleCompositionEnd:A,handleCompositionStart:H,onPopoverUpdateShow:K,focus:Ae,focusInput:Ee,blur:$e,blurInput:ke,updateCounter:De,getCounter:Se,getTail:Xe,renderLabel:e.renderLabel,cssVars:U?void 0:oe,themeClass:le?.themeClass,onRender:le?.onRender}},render(){const{status:e,multiple:t,size:n,disabled:r,filterable:o,maxTagCount:i,bordered:a,clsPrefix:l,ellipsisTagPopoverProps:s,onRender:c,renderTag:d,renderLabel:v}=this;c?.();const p=i==="responsive",b=typeof i=="number",f=p||b,m=u(Ll,null,{default:()=>u(ba,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var g,S;return(S=(g=this.$slots).arrow)===null||S===void 0?void 0:S.call(g)}})});let C;if(t){const{labelField:g}=this,S=O=>u("div",{class:`${l}-base-selection-tag-wrapper`,key:O.value},d?d({option:O,handleClose:()=>{this.handleDeleteOption(O)}}):u(tt,{size:n,closable:!O.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(O)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(O,!0):vt(O[g],O,!0)})),M=()=>(b?this.selectedOptions.slice(0,i):this.selectedOptions).map(S),y=o?u("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},u("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),u("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,k=p?()=>u("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},u(tt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let _;if(b){const O=this.selectedOptions.length-i;O>0&&(_=u("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},u(tt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${O}`})))}const N=p?o?u(Jo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:k,tail:()=>y}):u(Jo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:M,counter:k}):b&&_?M().concat(_):M(),G=f?()=>u("div",{class:`${l}-base-selection-popover`},p?M():this.selectedOptions.map(S)):void 0,j=f?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},u("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,I=o?u("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},N,p?null:y,m):u("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:r?void 0:0},N,m);C=u(ht,null,f?u(pa,Object.assign({},j,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>I,default:G}):I,Q)}else if(o){const g=this.pattern||this.isComposing,S=this.active?!g:!this.selected,M=this.active?!1:this.selected;C=u("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:Qo(this.label)},u("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),M?u("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},u("div",{class:`${l}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):vt(this.label,this.selectedOption,!0))):null,S?u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},u("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else C=u("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?u("div",{class:`${l}-base-selection-input`,title:Qo(this.label),key:"input"},u("div",{class:`${l}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):vt(this.label,this.selectedOption,!0))):u("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},u("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),m);return u("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},C,a?u("div",{class:`${l}-base-selection__border`}):null,a?u("div",{class:`${l}-base-selection__state-border`}):null)}});function rf(e){const{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:o,dividerColor:i,actionColor:a,textColor1:l,textColor2:s,closeColorHover:c,closeColorPressed:d,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:b,infoColor:f,successColor:m,warningColor:C,errorColor:g,fontSize:S}=e;return Object.assign(Object.assign({},Wl),{fontSize:S,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${i}`,color:a,titleTextColor:l,iconColor:s,contentTextColor:s,closeBorderRadius:n,closeColorHover:c,closeColorPressed:d,closeIconColor:v,closeIconColorHover:p,closeIconColorPressed:b,borderInfo:`1px solid ${Bt(o,Oe(f,{alpha:.25}))}`,colorInfo:Bt(o,Oe(f,{alpha:.08})),titleTextColorInfo:l,iconColorInfo:f,contentTextColorInfo:s,closeColorHoverInfo:c,closeColorPressedInfo:d,closeIconColorInfo:v,closeIconColorHoverInfo:p,closeIconColorPressedInfo:b,borderSuccess:`1px solid ${Bt(o,Oe(m,{alpha:.25}))}`,colorSuccess:Bt(o,Oe(m,{alpha:.08})),titleTextColorSuccess:l,iconColorSuccess:m,contentTextColorSuccess:s,closeColorHoverSuccess:c,closeColorPressedSuccess:d,closeIconColorSuccess:v,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:b,borderWarning:`1px solid ${Bt(o,Oe(C,{alpha:.33}))}`,colorWarning:Bt(o,Oe(C,{alpha:.08})),titleTextColorWarning:l,iconColorWarning:C,contentTextColorWarning:s,closeColorHoverWarning:c,closeColorPressedWarning:d,closeIconColorWarning:v,closeIconColorHoverWarning:p,closeIconColorPressedWarning:b,borderError:`1px solid ${Bt(o,Oe(g,{alpha:.25}))}`,colorError:Bt(o,Oe(g,{alpha:.08})),titleTextColorError:l,iconColorError:g,contentTextColorError:s,closeColorHoverError:c,closeColorPressedError:d,closeIconColorError:v,closeIconColorHoverError:p,closeIconColorPressedError:b})}const of={common:mo,self:rf},af=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[E("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),D("closable",[x("alert-body",[E("title",`
 padding-right: 24px;
 `)])]),E("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[E("title",{color:"var(--n-title-text-color)"}),E("content",{color:"var(--n-content-text-color)"})]),Vl({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),E("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),E("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),D("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),D("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[E("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[X("& +",[E("content",{marginTop:"9px"})])]),E("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),E("icon",{transition:"color .3s var(--n-bezier)"})]),lf=Object.assign(Object.assign({},Ie.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Er=fe({name:"Alert",inheritAttrs:!1,props:lf,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=nt(e),i=Ie("Alert","-alert",af,of,e,t),a=en("Alert",o,t),l=T(()=>{const{common:{cubicBezierEaseInOut:b},self:f}=i.value,{fontSize:m,borderRadius:C,titleFontWeight:g,lineHeight:S,iconSize:M,iconMargin:y,iconMarginRtl:k,closeIconSize:_,closeBorderRadius:N,closeSize:G,closeMargin:j,closeMarginRtl:q,padding:Q}=f,{type:I}=e,{left:O,right:$}=ft(y);return{"--n-bezier":b,"--n-color":f[ae("color",I)],"--n-close-icon-size":_,"--n-close-border-radius":N,"--n-close-color-hover":f[ae("closeColorHover",I)],"--n-close-color-pressed":f[ae("closeColorPressed",I)],"--n-close-icon-color":f[ae("closeIconColor",I)],"--n-close-icon-color-hover":f[ae("closeIconColorHover",I)],"--n-close-icon-color-pressed":f[ae("closeIconColorPressed",I)],"--n-icon-color":f[ae("iconColor",I)],"--n-border":f[ae("border",I)],"--n-title-text-color":f[ae("titleTextColor",I)],"--n-content-text-color":f[ae("contentTextColor",I)],"--n-line-height":S,"--n-border-radius":C,"--n-font-size":m,"--n-title-font-weight":g,"--n-icon-size":M,"--n-icon-margin":y,"--n-icon-margin-rtl":k,"--n-close-size":G,"--n-close-margin":j,"--n-close-margin-rtl":q,"--n-padding":Q,"--n-icon-margin-left":O,"--n-icon-margin-right":$}}),s=r?rt("alert",T(()=>e.type[0]),l,e):void 0,c=B(!0),d=()=>{const{onAfterLeave:b,onAfterHide:f}=e;b&&b(),f&&f()};return{rtlEnabled:a,mergedClsPrefix:t,mergedBordered:n,visible:c,handleCloseClick:()=>{var b;Promise.resolve((b=e.onClose)===null||b===void 0?void 0:b.call(e)).then(f=>{f!==!1&&(c.value=!1)})},handleAfterLeave:()=>{d()},mergedTheme:i,cssVars:r?void 0:l,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),u(ql,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:n}=this,r={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?u("div",Object.assign({},Qt(this.$attrs,r)),this.closable&&u(yo,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&u("div",{class:`${t}-alert__border`}),this.showIcon&&u("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},Gt(n.icon,()=>[u(Vt,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return u(Ul,null);case"info":return u(Kl,null);case"warning":return u(Hl,null);case"error":return u(jl,null);default:return null}}})])),u("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},Qe(n.header,o=>{const i=o||this.title;return i?u("div",{class:`${t}-alert-body__title`},i):null}),n.default&&u("div",{class:`${t}-alert-body__content`},n))):null}})}});function sf(e){const{textColor2:t,textColor3:n,textColorDisabled:r,primaryColor:o,primaryColorHover:i,inputColor:a,inputColorDisabled:l,borderColor:s,warningColor:c,warningColorHover:d,errorColor:v,errorColorHover:p,borderRadius:b,lineHeight:f,fontSizeTiny:m,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:S,heightTiny:M,heightSmall:y,heightMedium:k,heightLarge:_,actionColor:N,clearColor:G,clearColorHover:j,clearColorPressed:q,placeholderColor:Q,placeholderColorDisabled:I,iconColor:O,iconColorDisabled:$,iconColorHover:R,iconColorPressed:J,fontWeight:V}=e;return Object.assign(Object.assign({},Xl),{fontWeight:V,countTextColorDisabled:r,countTextColor:n,heightTiny:M,heightSmall:y,heightMedium:k,heightLarge:_,fontSizeTiny:m,fontSizeSmall:C,fontSizeMedium:g,fontSizeLarge:S,lineHeight:f,lineHeightTextarea:f,borderRadius:b,iconSize:"16px",groupLabelColor:N,groupLabelTextColor:t,textColor:t,textColorDisabled:r,textDecorationColor:t,caretColor:o,placeholderColor:Q,placeholderColorDisabled:I,color:a,colorDisabled:l,colorFocus:a,groupLabelBorder:`1px solid ${s}`,border:`1px solid ${s}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${s}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${Oe(o,{alpha:.2})}`,loadingColor:o,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${Oe(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:v,borderError:`1px solid ${v}`,borderHoverError:`1px solid ${p}`,colorFocusError:a,borderFocusError:`1px solid ${p}`,boxShadowFocusError:`0 0 0 2px ${Oe(v,{alpha:.2})}`,caretColorError:v,clearColor:G,clearColorHover:j,clearColorPressed:q,iconColor:O,iconColorDisabled:$,iconColorHover:R,iconColorPressed:J,suffixTextColor:t})}const df=Yl({name:"Input",common:mo,peers:{Scrollbar:Gl},self:sf}),ga=bt("n-input"),cf=x("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[E("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),E("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),E("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[X("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),X("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),X("&:-webkit-autofill ~",[E("placeholder","display: none;")])]),D("round",[He("textarea","border-radius: calc(var(--n-height) / 2);")]),E("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[X("span",`
 width: 100%;
 display: inline-block;
 `)]),D("textarea",[E("placeholder","overflow: visible;")]),He("autosize","width: 100%;"),D("autosize",[E("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),x("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),E("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),E("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[X("&[type=password]::-ms-reveal","display: none;"),X("+",[E("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),He("textarea",[E("placeholder","white-space: nowrap;")]),E("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),D("textarea","width: 100%;",[x("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),D("resizable",[x("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),E("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),E("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),D("pair",[E("input-el, placeholder","text-align: center;"),E("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[x("icon",`
 color: var(--n-icon-color);
 `),x("base-icon",`
 color: var(--n-icon-color);
 `)])]),D("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E("border","border: var(--n-border-disabled);"),E("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),E("placeholder","color: var(--n-placeholder-color-disabled);"),E("separator","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),x("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),E("suffix, prefix","color: var(--n-text-color-disabled);",[x("icon",`
 color: var(--n-icon-color-disabled);
 `),x("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),He("disabled",[E("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[X("&:hover",`
 color: var(--n-icon-color-hover);
 `),X("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),X("&:hover",[E("state-border","border: var(--n-border-hover);")]),D("focus","background-color: var(--n-color-focus);",[E("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),E("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),E("state-border",`
 border-color: #0000;
 z-index: 1;
 `),E("prefix","margin-right: 4px;"),E("suffix",`
 margin-left: 4px;
 `),E("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[x("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),x("base-clear",`
 font-size: var(--n-icon-size);
 `,[E("placeholder",[x("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),X(">",[x("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),x("base-icon",`
 font-size: var(--n-icon-size);
 `)]),x("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>D(`${e}-status`,[He("disabled",[x("base-loading",`
 color: var(--n-loading-color-${e})
 `),E("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),E("state-border",`
 border: var(--n-border-${e});
 `),X("&:hover",[E("state-border",`
 border: var(--n-border-hover-${e});
 `)]),X("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),D("focus",`
 background-color: var(--n-color-focus-${e});
 `,[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),uf=x("input",[D("disabled",[E("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function ff(e){let t=0;for(const n of e)t++;return t}function Vn(e){return e===""||e==null}function hf(e){const t=B(null);function n(){const{value:i}=e;if(!i?.focus){o();return}const{selectionStart:a,selectionEnd:l,value:s}=i;if(a==null||l==null){o();return}t.value={start:a,end:l,beforeText:s.slice(0,a),afterText:s.slice(l)}}function r(){var i;const{value:a}=t,{value:l}=e;if(!a||!l)return;const{value:s}=l,{start:c,beforeText:d,afterText:v}=a;let p=s.length;if(s.endsWith(v))p=s.length-v.length;else if(s.startsWith(d))p=d.length;else{const b=d[c-1],f=s.indexOf(b,c-1);f!==-1&&(p=f+1)}(i=l.setSelectionRange)===null||i===void 0||i.call(l,p,p)}function o(){t.value=null}return Ce(e,o),{recordCursor:n,restoreCursor:r}}const gi=fe({name:"InputWordCount",setup(e,{slots:t}){const{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:o,countGraphemesRef:i}=Be(ga),a=T(()=>{const{value:l}=n;return l===null||Array.isArray(l)?0:(i.value||ff)(l)});return()=>{const{value:l}=r,{value:s}=n;return u("span",{class:`${o.value}-input-word-count`},Jl(t.default,{value:s===null||Array.isArray(s)?"":s},()=>[l===void 0?a.value:`${a.value} / ${l}`]))}}}),vf=Object.assign(Object.assign({},Ie.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),On=fe({name:"Input",props:vf,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:o}=nt(e),i=Ie("Input","-input",cf,df,e,t);Zl&&Wi("-input-safari",uf,t);const a=B(null),l=B(null),s=B(null),c=B(null),d=B(null),v=B(null),p=B(null),b=hf(p),f=B(null),{localeRef:m}=Io("Input"),C=B(e.defaultValue),g=ue(e,"value"),S=Zt(g,C),M=wo(e),{mergedSizeRef:y,mergedDisabledRef:k,mergedStatusRef:_}=M,N=B(!1),G=B(!1),j=B(!1),q=B(!1);let Q=null;const I=T(()=>{const{placeholder:w,pair:W}=e;return W?Array.isArray(w)?w:w===void 0?["",""]:[w,w]:w===void 0?[m.value.placeholder]:[w]}),O=T(()=>{const{value:w}=j,{value:W}=S,{value:ce}=I;return!w&&(Vn(W)||Array.isArray(W)&&Vn(W[0]))&&ce[0]}),$=T(()=>{const{value:w}=j,{value:W}=S,{value:ce}=I;return!w&&ce[1]&&(Vn(W)||Array.isArray(W)&&Vn(W[1]))}),R=qe(()=>e.internalForceFocus||N.value),J=qe(()=>{if(k.value||e.readonly||!e.clearable||!R.value&&!G.value)return!1;const{value:w}=S,{value:W}=R;return e.pair?!!(Array.isArray(w)&&(w[0]||w[1]))&&(G.value||W):!!w&&(G.value||W)}),V=T(()=>{const{showPasswordOn:w}=e;if(w)return w;if(e.showPasswordToggle)return"click"}),Z=B(!1),re=T(()=>{const{textDecoration:w}=e;return w?Array.isArray(w)?w.map(W=>({textDecoration:W})):[{textDecoration:w}]:["",""]}),ie=B(void 0),ve=()=>{var w,W;if(e.type==="textarea"){const{autosize:ce}=e;if(ce&&(ie.value=(W=(w=f.value)===null||w===void 0?void 0:w.$el)===null||W===void 0?void 0:W.offsetWidth),!l.value||typeof ce=="boolean")return;const{paddingTop:Fe,paddingBottom:Ne,lineHeight:ze}=window.getComputedStyle(l.value),mt=Number(Fe.slice(0,-2)),yt=Number(Ne.slice(0,-2)),wt=Number(ze.slice(0,-2)),{value:Kt}=s;if(!Kt)return;if(ce.minRows){const Ut=Math.max(ce.minRows,1),kn=`${mt+yt+wt*Ut}px`;Kt.style.minHeight=kn}if(ce.maxRows){const Ut=`${mt+yt+wt*ce.maxRows}px`;Kt.style.maxHeight=Ut}}},L=T(()=>{const{maxlength:w}=e;return w===void 0?void 0:Number(w)});pt(()=>{const{value:w}=S;Array.isArray(w)||Ze(w)});const Y=uo().proxy;function de(w,W){const{onUpdateValue:ce,"onUpdate:value":Fe,onInput:Ne}=e,{nTriggerFormInput:ze}=M;ce&&ye(ce,w,W),Fe&&ye(Fe,w,W),Ne&&ye(Ne,w,W),C.value=w,ze()}function H(w,W){const{onChange:ce}=e,{nTriggerFormChange:Fe}=M;ce&&ye(ce,w,W),C.value=w,Fe()}function A(w){const{onBlur:W}=e,{nTriggerFormBlur:ce}=M;W&&ye(W,w),ce()}function F(w){const{onFocus:W}=e,{nTriggerFormFocus:ce}=M;W&&ye(W,w),ce()}function we(w){const{onClear:W}=e;W&&ye(W,w)}function $e(w){const{onInputBlur:W}=e;W&&ye(W,w)}function Ae(w){const{onInputFocus:W}=e;W&&ye(W,w)}function Ee(){const{onDeactivate:w}=e;w&&ye(w)}function ke(){const{onActivate:w}=e;w&&ye(w)}function De(w){const{onClick:W}=e;W&&ye(W,w)}function Se(w){const{onWrapperFocus:W}=e;W&&ye(W,w)}function Xe(w){const{onWrapperBlur:W}=e;W&&ye(W,w)}function ot(){j.value=!0}function it(w){j.value=!1,w.target===v.value?et(w,1):et(w,0)}function et(w,W=0,ce="input"){const Fe=w.target.value;if(Ze(Fe),w instanceof InputEvent&&!w.isComposing&&(j.value=!1),e.type==="textarea"){const{value:ze}=f;ze&&ze.syncUnifiedContainer()}if(Q=Fe,j.value)return;b.recordCursor();const Ne=Je(Fe);if(Ne)if(!e.pair)ce==="input"?de(Fe,{source:W}):H(Fe,{source:W});else{let{value:ze}=S;Array.isArray(ze)?ze=[ze[0],ze[1]]:ze=["",""],ze[W]=Fe,ce==="input"?de(ze,{source:W}):H(ze,{source:W})}Y.$forceUpdate(),Ne||Mt(b.restoreCursor)}function Je(w){const{countGraphemes:W,maxlength:ce,minlength:Fe}=e;if(W){let ze;if(ce!==void 0&&(ze===void 0&&(ze=W(w)),ze>Number(ce))||Fe!==void 0&&(ze===void 0&&(ze=W(w)),ze<Number(ce)))return!1}const{allowInput:Ne}=e;return typeof Ne=="function"?Ne(w):!0}function K(w){$e(w),w.relatedTarget===a.value&&Ee(),w.relatedTarget!==null&&(w.relatedTarget===d.value||w.relatedTarget===v.value||w.relatedTarget===l.value)||(q.value=!1),h(w,"blur"),p.value=null}function U(w,W){Ae(w),N.value=!0,q.value=!0,ke(),h(w,"focus"),W===0?p.value=d.value:W===1?p.value=v.value:W===2&&(p.value=l.value)}function oe(w){e.passivelyActivated&&(Xe(w),h(w,"blur"))}function le(w){e.passivelyActivated&&(N.value=!0,Se(w),h(w,"focus"))}function h(w,W){w.relatedTarget!==null&&(w.relatedTarget===d.value||w.relatedTarget===v.value||w.relatedTarget===l.value||w.relatedTarget===a.value)||(W==="focus"?(F(w),N.value=!0):W==="blur"&&(A(w),N.value=!1))}function P(w,W){et(w,W,"change")}function ee(w){De(w)}function Te(w){we(w),Pe()}function Pe(){e.pair?(de(["",""],{source:"clear"}),H(["",""],{source:"clear"})):(de("",{source:"clear"}),H("",{source:"clear"}))}function It(w){const{onMousedown:W}=e;W&&W(w);const{tagName:ce}=w.target;if(ce!=="INPUT"&&ce!=="TEXTAREA"){if(e.resizable){const{value:Fe}=a;if(Fe){const{left:Ne,top:ze,width:mt,height:yt}=Fe.getBoundingClientRect(),wt=14;if(Ne+mt-wt<w.clientX&&w.clientX<Ne+mt&&ze+yt-wt<w.clientY&&w.clientY<ze+yt)return}}w.preventDefault(),N.value||he()}}function $t(){var w;G.value=!0,e.type==="textarea"&&((w=f.value)===null||w===void 0||w.handleMouseEnterWrapper())}function zt(){var w;G.value=!1,e.type==="textarea"&&((w=f.value)===null||w===void 0||w.handleMouseLeaveWrapper())}function jt(){k.value||V.value==="click"&&(Z.value=!Z.value)}function Ht(w){if(k.value)return;w.preventDefault();const W=Fe=>{Fe.preventDefault(),st("mouseup",document,W)};if(lt("mouseup",document,W),V.value!=="mousedown")return;Z.value=!0;const ce=()=>{Z.value=!1,st("mouseup",document,ce)};lt("mouseup",document,ce)}function At(w){e.onKeyup&&ye(e.onKeyup,w)}function ct(w){switch(e.onKeydown&&ye(e.onKeydown,w),w.key){case"Escape":te();break;case"Enter":z(w);break}}function z(w){var W,ce;if(e.passivelyActivated){const{value:Fe}=q;if(Fe){e.internalDeactivateOnEnter&&te();return}w.preventDefault(),e.type==="textarea"?(W=l.value)===null||W===void 0||W.focus():(ce=d.value)===null||ce===void 0||ce.focus()}}function te(){e.passivelyActivated&&(q.value=!1,Mt(()=>{var w;(w=a.value)===null||w===void 0||w.focus()}))}function he(){var w,W,ce;k.value||(e.passivelyActivated?(w=a.value)===null||w===void 0||w.focus():((W=l.value)===null||W===void 0||W.focus(),(ce=d.value)===null||ce===void 0||ce.focus()))}function Me(){var w;!((w=a.value)===null||w===void 0)&&w.contains(document.activeElement)&&document.activeElement.blur()}function _e(){var w,W;(w=l.value)===null||w===void 0||w.select(),(W=d.value)===null||W===void 0||W.select()}function xe(){k.value||(l.value?l.value.focus():d.value&&d.value.focus())}function ge(){const{value:w}=a;w?.contains(document.activeElement)&&w!==document.activeElement&&te()}function Ve(w){if(e.type==="textarea"){const{value:W}=l;W?.scrollTo(w)}else{const{value:W}=d;W?.scrollTo(w)}}function Ze(w){const{type:W,pair:ce,autosize:Fe}=e;if(!ce&&Fe)if(W==="textarea"){const{value:Ne}=s;Ne&&(Ne.textContent=`${w??""}\r
`)}else{const{value:Ne}=c;Ne&&(w?Ne.textContent=w:Ne.innerHTML="&nbsp;")}}function yn(){ve()}const nn=B({top:"0"});function wn(w){var W;const{scrollTop:ce}=w.target;nn.value.top=`${-ce}px`,(W=f.value)===null||W===void 0||W.syncUnifiedContainer()}let Et=null;pn(()=>{const{autosize:w,type:W}=e;w&&W==="textarea"?Et=Ce(S,ce=>{!Array.isArray(ce)&&ce!==Q&&Ze(ce)}):Et?.()});let Tt=null;pn(()=>{e.type==="textarea"?Tt=Ce(S,w=>{var W;!Array.isArray(w)&&w!==Q&&((W=f.value)===null||W===void 0||W.syncUnifiedContainer())}):Tt?.()}),Ke(ga,{mergedValueRef:S,maxlengthRef:L,mergedClsPrefixRef:t,countGraphemesRef:ue(e,"countGraphemes")});const xn={wrapperElRef:a,inputElRef:d,textareaElRef:l,isCompositing:j,clear:Pe,focus:he,blur:Me,select:_e,deactivate:ge,activate:xe,scrollTo:Ve},Cn=en("Input",o,t),rn=T(()=>{const{value:w}=y,{common:{cubicBezierEaseInOut:W},self:{color:ce,borderRadius:Fe,textColor:Ne,caretColor:ze,caretColorError:mt,caretColorWarning:yt,textDecorationColor:wt,border:Kt,borderDisabled:Ut,borderHover:kn,borderFocus:hr,placeholderColor:vr,placeholderColorDisabled:pr,lineHeightTextarea:br,colorDisabled:gr,colorFocus:on,textColorDisabled:an,boxShadowFocus:Ia,iconSize:$a,colorFocusWarning:za,boxShadowFocusWarning:Aa,borderWarning:Ea,borderFocusWarning:Ta,borderHoverWarning:Fa,colorFocusError:Ba,boxShadowFocusError:Da,borderError:La,borderFocusError:Na,borderHoverError:Wa,clearSize:Va,clearColor:ja,clearColorHover:Ha,clearColorPressed:Ka,iconColor:Ua,iconColorDisabled:qa,suffixTextColor:Ya,countTextColor:Ga,countTextColorDisabled:Xa,iconColorHover:Ja,iconColorPressed:Za,loadingColor:Qa,loadingColorError:el,loadingColorWarning:tl,fontWeight:nl,[ae("padding",w)]:rl,[ae("fontSize",w)]:ol,[ae("height",w)]:il}}=i.value,{left:al,right:ll}=ft(rl);return{"--n-bezier":W,"--n-count-text-color":Ga,"--n-count-text-color-disabled":Xa,"--n-color":ce,"--n-font-size":ol,"--n-font-weight":nl,"--n-border-radius":Fe,"--n-height":il,"--n-padding-left":al,"--n-padding-right":ll,"--n-text-color":Ne,"--n-caret-color":ze,"--n-text-decoration-color":wt,"--n-border":Kt,"--n-border-disabled":Ut,"--n-border-hover":kn,"--n-border-focus":hr,"--n-placeholder-color":vr,"--n-placeholder-color-disabled":pr,"--n-icon-size":$a,"--n-line-height-textarea":br,"--n-color-disabled":gr,"--n-color-focus":on,"--n-text-color-disabled":an,"--n-box-shadow-focus":Ia,"--n-loading-color":Qa,"--n-caret-color-warning":yt,"--n-color-focus-warning":za,"--n-box-shadow-focus-warning":Aa,"--n-border-warning":Ea,"--n-border-focus-warning":Ta,"--n-border-hover-warning":Fa,"--n-loading-color-warning":tl,"--n-caret-color-error":mt,"--n-color-focus-error":Ba,"--n-box-shadow-focus-error":Da,"--n-border-error":La,"--n-border-focus-error":Na,"--n-border-hover-error":Wa,"--n-loading-color-error":el,"--n-clear-color":ja,"--n-clear-size":Va,"--n-clear-color-hover":Ha,"--n-clear-color-pressed":Ka,"--n-icon-color":Ua,"--n-icon-color-hover":Ja,"--n-icon-color-pressed":Za,"--n-icon-color-disabled":qa,"--n-suffix-text-color":Ya}}),Ft=r?rt("input",T(()=>{const{value:w}=y;return w[0]}),rn,e):void 0;return Object.assign(Object.assign({},xn),{wrapperElRef:a,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:v,textareaElRef:l,textareaMirrorElRef:s,textareaScrollbarInstRef:f,rtlEnabled:Cn,uncontrolledValue:C,mergedValue:S,passwordVisible:Z,mergedPlaceholder:I,showPlaceholder1:O,showPlaceholder2:$,mergedFocus:R,isComposing:j,activated:q,showClearButton:J,mergedSize:y,mergedDisabled:k,textDecorationStyle:re,mergedClsPrefix:t,mergedBordered:n,mergedShowPasswordOn:V,placeholderStyle:nn,mergedStatus:_,textAreaScrollContainerWidth:ie,handleTextAreaScroll:wn,handleCompositionStart:ot,handleCompositionEnd:it,handleInput:et,handleInputBlur:K,handleInputFocus:U,handleWrapperBlur:oe,handleWrapperFocus:le,handleMouseEnter:$t,handleMouseLeave:zt,handleMouseDown:It,handleChange:P,handleClick:ee,handleClear:Te,handlePasswordToggleClick:jt,handlePasswordToggleMousedown:Ht,handleWrapperKeydown:ct,handleWrapperKeyup:At,handleTextAreaMirrorResize:yn,getTextareaScrollContainer:()=>l.value,mergedTheme:i,cssVars:r?void 0:rn,themeClass:Ft?.themeClass,onRender:Ft?.onRender})},render(){var e,t,n,r,o,i,a;const{mergedClsPrefix:l,mergedStatus:s,themeClass:c,type:d,countGraphemes:v,onRender:p}=this,b=this.$slots;return p?.(),u("div",{ref:"wrapperElRef",class:[`${l}-input`,c,s&&`${l}-input--${s}-status`,{[`${l}-input--rtl`]:this.rtlEnabled,[`${l}-input--disabled`]:this.mergedDisabled,[`${l}-input--textarea`]:d==="textarea",[`${l}-input--resizable`]:this.resizable&&!this.autosize,[`${l}-input--autosize`]:this.autosize,[`${l}-input--round`]:this.round&&d!=="textarea",[`${l}-input--pair`]:this.pair,[`${l}-input--focus`]:this.mergedFocus,[`${l}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},u("div",{class:`${l}-input-wrapper`},Qe(b.prefix,f=>f&&u("div",{class:`${l}-input__prefix`},f)),d==="textarea"?u(ji,{ref:"textareaScrollbarInstRef",class:`${l}-input__textarea`,container:this.getTextareaScrollContainer,theme:(t=(e=this.theme)===null||e===void 0?void 0:e.peers)===null||t===void 0?void 0:t.Scrollbar,themeOverrides:(r=(n=this.themeOverrides)===null||n===void 0?void 0:n.peers)===null||r===void 0?void 0:r.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var f,m;const{textAreaScrollContainerWidth:C}=this,g={width:this.autosize&&C&&`${C}px`};return u(ht,null,u("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${l}-input__textarea-el`,(f=this.inputProps)===null||f===void 0?void 0:f.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(m=this.inputProps)===null||m===void 0?void 0:m.style,g],onBlur:this.handleInputBlur,onFocus:S=>{this.handleInputFocus(S,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?u("div",{class:`${l}-input__placeholder`,style:[this.placeholderStyle,g],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?u(fn,{onResize:this.handleTextAreaMirrorResize},{default:()=>u("div",{ref:"textareaMirrorElRef",class:`${l}-input__textarea-mirror`,key:"mirror"})}):null)}}):u("div",{class:`${l}-input__input`},u("input",Object.assign({type:d==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":d},this.inputProps,{ref:"inputElRef",class:[`${l}-input__input-el`,(o=this.inputProps)===null||o===void 0?void 0:o.class],style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style],tabindex:this.passivelyActivated&&!this.activated?-1:(a=this.inputProps)===null||a===void 0?void 0:a.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:f=>{this.handleInputFocus(f,0)},onInput:f=>{this.handleInput(f,0)},onChange:f=>{this.handleChange(f,0)}})),this.showPlaceholder1?u("div",{class:`${l}-input__placeholder`},u("span",null,this.mergedPlaceholder[0])):null,this.autosize?u("div",{class:`${l}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Qe(b.suffix,f=>f||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?u("div",{class:`${l}-input__suffix`},[Qe(b["clear-icon-placeholder"],m=>(this.clearable||m)&&u(Gr,{clsPrefix:l,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>m,icon:()=>{var C,g;return(g=(C=this.$slots)["clear-icon"])===null||g===void 0?void 0:g.call(C)}})),this.internalLoadingBeforeSuffix?null:f,this.loading!==void 0?u(ba,{clsPrefix:l,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?f:null,this.showCount&&this.type!=="textarea"?u(gi,null,{default:m=>{var C;const{renderCount:g}=this;return g?g(m):(C=b.count)===null||C===void 0?void 0:C.call(b,m)}}):null,this.mergedShowPasswordOn&&this.type==="password"?u("div",{class:`${l}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Gt(b["password-visible-icon"],()=>[u(Vt,{clsPrefix:l},{default:()=>u(du,null)})]):Gt(b["password-invisible-icon"],()=>[u(Vt,{clsPrefix:l},{default:()=>u(cu,null)})])):null]):null)),this.pair?u("span",{class:`${l}-input__separator`},Gt(b.separator,()=>[this.separator])):null,this.pair?u("div",{class:`${l}-input-wrapper`},u("div",{class:`${l}-input__input`},u("input",{ref:"inputEl2Ref",type:this.type,class:`${l}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:f=>{this.handleInputFocus(f,1)},onInput:f=>{this.handleInput(f,1)},onChange:f=>{this.handleChange(f,1)}}),this.showPlaceholder2?u("div",{class:`${l}-input__placeholder`},u("span",null,this.mergedPlaceholder[1])):null),Qe(b.suffix,f=>(this.clearable||f)&&u("div",{class:`${l}-input__suffix`},[this.clearable&&u(Gr,{clsPrefix:l,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var m;return(m=b["clear-icon"])===null||m===void 0?void 0:m.call(b)},placeholder:()=>{var m;return(m=b["clear-icon-placeholder"])===null||m===void 0?void 0:m.call(b)}}),f]))):null,this.mergedBordered?u("div",{class:`${l}-input__border`}):null,this.mergedBordered?u("div",{class:`${l}-input__state-border`}):null,this.showCount&&d==="textarea"?u(gi,null,{default:f=>{var m;const{renderCount:C}=this;return C?C(f):(m=b.count)===null||m===void 0?void 0:m.call(b,f)}}):null)}});function ar(e){return e.type==="group"}function ma(e){return e.type==="ignored"}function Tr(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function pf(e,t){return{getIsGroup:ar,getIgnored:ma,getKey(r){return ar(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[t]}}}function bf(e,t,n,r){if(!t)return e;function o(i){if(!Array.isArray(i))return[];const a=[];for(const l of i)if(ar(l)){const s=o(l[r]);s.length&&a.push(Object.assign({},l,{[r]:s}))}else{if(ma(l))continue;t(n,l)&&a.push(l)}return a}return o(e)}function gf(e,t,n){const r=new Map;return e.forEach(o=>{ar(o)?o[n].forEach(i=>{r.set(i[t],i)}):r.set(o[t],o)}),r}const mf=bt("n-checkbox-group"),yf=()=>u("svg",{viewBox:"0 0 64 64",class:"check-icon"},u("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),wf=()=>u("svg",{viewBox:"0 0 100 100",class:"line-icon"},u("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),xf=X([x("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[D("show-label","line-height: var(--n-label-line-height);"),X("&:hover",[x("checkbox-box",[E("border","border: var(--n-border-checked);")])]),X("&:focus:not(:active)",[x("checkbox-box",[E("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),D("inside-table",[x("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),D("checked",[x("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[x("checkbox-icon",[X(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("indeterminate",[x("checkbox-box",[x("checkbox-icon",[X(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),X(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),D("checked, indeterminate",[X("&:focus:not(:active)",[x("checkbox-box",[E("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),x("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[E("border",{border:"var(--n-border-checked)"})])]),D("disabled",{cursor:"not-allowed"},[D("checked",[x("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[E("border",{border:"var(--n-border-disabled-checked)"}),x("checkbox-icon",[X(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),x("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[E("border",`
 border: var(--n-border-disabled);
 `),x("checkbox-icon",[X(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),E("label",`
 color: var(--n-text-color-disabled);
 `)]),x("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),x("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[E("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),x("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[X(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),Li({left:"1px",top:"1px"})])]),E("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[X("&:empty",{display:"none"})])]),Ql(x("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),es(x("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Cf=Object.assign(Object.assign({},Ie.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),kf=fe({name:"Checkbox",props:Cf,setup(e){const t=Be(mf,null),n=B(null),{mergedClsPrefixRef:r,inlineThemeDisabled:o,mergedRtlRef:i}=nt(e),a=B(e.defaultChecked),l=ue(e,"checked"),s=Zt(l,a),c=qe(()=>{if(t){const _=t.valueSetRef.value;return _&&e.value!==void 0?_.has(e.value):!1}else return s.value===e.checkedValue}),d=wo(e,{mergedSize(_){const{size:N}=e;if(N!==void 0)return N;if(t){const{value:G}=t.mergedSizeRef;if(G!==void 0)return G}if(_){const{mergedSize:G}=_;if(G!==void 0)return G.value}return"medium"},mergedDisabled(_){const{disabled:N}=e;if(N!==void 0)return N;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:G},checkedCountRef:j}=t;if(G!==void 0&&j.value>=G&&!c.value)return!0;const{minRef:{value:q}}=t;if(q!==void 0&&j.value<=q&&c.value)return!0}return _?_.disabled.value:!1}}),{mergedDisabledRef:v,mergedSizeRef:p}=d,b=Ie("Checkbox","-checkbox",xf,ts,e,r);function f(_){if(t&&e.value!==void 0)t.toggleCheckbox(!c.value,e.value);else{const{onChange:N,"onUpdate:checked":G,onUpdateChecked:j}=e,{nTriggerFormInput:q,nTriggerFormChange:Q}=d,I=c.value?e.uncheckedValue:e.checkedValue;G&&ye(G,I,_),j&&ye(j,I,_),N&&ye(N,I,_),q(),Q(),a.value=I}}function m(_){v.value||f(_)}function C(_){if(!v.value)switch(_.key){case" ":case"Enter":f(_)}}function g(_){switch(_.key){case" ":_.preventDefault()}}const S={focus:()=>{var _;(_=n.value)===null||_===void 0||_.focus()},blur:()=>{var _;(_=n.value)===null||_===void 0||_.blur()}},M=en("Checkbox",i,r),y=T(()=>{const{value:_}=p,{common:{cubicBezierEaseInOut:N},self:{borderRadius:G,color:j,colorChecked:q,colorDisabled:Q,colorTableHeader:I,colorTableHeaderModal:O,colorTableHeaderPopover:$,checkMarkColor:R,checkMarkColorDisabled:J,border:V,borderFocus:Z,borderDisabled:re,borderChecked:ie,boxShadowFocus:ve,textColor:L,textColorDisabled:Y,checkMarkColorDisabledChecked:de,colorDisabledChecked:H,borderDisabledChecked:A,labelPadding:F,labelLineHeight:we,labelFontWeight:$e,[ae("fontSize",_)]:Ae,[ae("size",_)]:Ee}}=b.value;return{"--n-label-line-height":we,"--n-label-font-weight":$e,"--n-size":Ee,"--n-bezier":N,"--n-border-radius":G,"--n-border":V,"--n-border-checked":ie,"--n-border-focus":Z,"--n-border-disabled":re,"--n-border-disabled-checked":A,"--n-box-shadow-focus":ve,"--n-color":j,"--n-color-checked":q,"--n-color-table":I,"--n-color-table-modal":O,"--n-color-table-popover":$,"--n-color-disabled":Q,"--n-color-disabled-checked":H,"--n-text-color":L,"--n-text-color-disabled":Y,"--n-check-mark-color":R,"--n-check-mark-color-disabled":J,"--n-check-mark-color-disabled-checked":de,"--n-font-size":Ae,"--n-label-padding":F}}),k=o?rt("checkbox",T(()=>p.value[0]),y,e):void 0;return Object.assign(d,S,{rtlEnabled:M,selfRef:n,mergedClsPrefix:r,mergedDisabled:v,renderedChecked:c,mergedTheme:b,labelId:Hr(),handleClick:m,handleKeyUp:C,handleKeyDown:g,cssVars:o?void 0:y,themeClass:k?.themeClass,onRender:k?.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:r,indeterminate:o,privateInsideTable:i,cssVars:a,labelId:l,label:s,mergedClsPrefix:c,focusable:d,handleKeyUp:v,handleKeyDown:p,handleClick:b}=this;(e=this.onRender)===null||e===void 0||e.call(this);const f=Qe(t.default,m=>s||m?u("span",{class:`${c}-checkbox__label`,id:l},s||m):null);return u("div",{ref:"selfRef",class:[`${c}-checkbox`,this.themeClass,this.rtlEnabled&&`${c}-checkbox--rtl`,n&&`${c}-checkbox--checked`,r&&`${c}-checkbox--disabled`,o&&`${c}-checkbox--indeterminate`,i&&`${c}-checkbox--inside-table`,f&&`${c}-checkbox--show-label`],tabindex:r||!d?void 0:0,role:"checkbox","aria-checked":o?"mixed":n,"aria-labelledby":l,style:a,onKeyup:v,onKeydown:p,onClick:b,onMousedown:()=>{lt("selectstart",window,m=>{m.preventDefault()},{once:!0})}},u("div",{class:`${c}-checkbox-box-wrapper`}," ",u("div",{class:`${c}-checkbox-box`},u(Ni,null,{default:()=>this.indeterminate?u("div",{key:"indeterminate",class:`${c}-checkbox-icon`},wf()):u("div",{key:"check",class:`${c}-checkbox-icon`},yf())}),u("div",{class:`${c}-checkbox-box__border`}))),f)}}),Sf=X([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[bo({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Pf=Object.assign(Object.assign({},Ie.props),{to:Ot.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),jn=fe({name:"Select",props:Pf,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:o}=nt(e),i=Ie("Select","-select",Sf,rs,e,t),a=B(e.defaultValue),l=ue(e,"value"),s=Zt(l,a),c=B(!1),d=B(""),v=rr(e,["items","options"]),p=B([]),b=B([]),f=T(()=>b.value.concat(p.value).concat(v.value)),m=T(()=>{const{filter:z}=e;if(z)return z;const{labelField:te,valueField:he}=e;return(Me,_e)=>{if(!_e)return!1;const xe=_e[te];if(typeof xe=="string")return Tr(Me,xe);const ge=_e[he];return typeof ge=="string"?Tr(Me,ge):typeof ge=="number"?Tr(Me,String(ge)):!1}}),C=T(()=>{if(e.remote)return v.value;{const{value:z}=f,{value:te}=d;return!te.length||!e.filterable?z:bf(z,m.value,te,e.childrenField)}}),g=T(()=>{const{valueField:z,childrenField:te}=e,he=pf(z,te);return fa(C.value,he)}),S=T(()=>gf(f.value,e.valueField,e.childrenField)),M=B(!1),y=Zt(ue(e,"show"),M),k=B(null),_=B(null),N=B(null),{localeRef:G}=Io("Select"),j=T(()=>{var z;return(z=e.placeholder)!==null&&z!==void 0?z:G.value.placeholder}),q=[],Q=B(new Map),I=T(()=>{const{fallbackOption:z}=e;if(z===void 0){const{labelField:te,valueField:he}=e;return Me=>({[te]:String(Me),[he]:Me})}return z===!1?!1:te=>Object.assign(z(te),{value:te})});function O(z){const te=e.remote,{value:he}=Q,{value:Me}=S,{value:_e}=I,xe=[];return z.forEach(ge=>{if(Me.has(ge))xe.push(Me.get(ge));else if(te&&he.has(ge))xe.push(he.get(ge));else if(_e){const Ve=_e(ge);Ve&&xe.push(Ve)}}),xe}const $=T(()=>{if(e.multiple){const{value:z}=s;return Array.isArray(z)?O(z):[]}return null}),R=T(()=>{const{value:z}=s;return!e.multiple&&!Array.isArray(z)?z===null?null:O([z])[0]||null:null}),J=wo(e),{mergedSizeRef:V,mergedDisabledRef:Z,mergedStatusRef:re}=J;function ie(z,te){const{onChange:he,"onUpdate:value":Me,onUpdateValue:_e}=e,{nTriggerFormChange:xe,nTriggerFormInput:ge}=J;he&&ye(he,z,te),_e&&ye(_e,z,te),Me&&ye(Me,z,te),a.value=z,xe(),ge()}function ve(z){const{onBlur:te}=e,{nTriggerFormBlur:he}=J;te&&ye(te,z),he()}function L(){const{onClear:z}=e;z&&ye(z)}function Y(z){const{onFocus:te,showOnFocus:he}=e,{nTriggerFormFocus:Me}=J;te&&ye(te,z),Me(),he&&we()}function de(z){const{onSearch:te}=e;te&&ye(te,z)}function H(z){const{onScroll:te}=e;te&&ye(te,z)}function A(){var z;const{remote:te,multiple:he}=e;if(te){const{value:Me}=Q;if(he){const{valueField:_e}=e;(z=$.value)===null||z===void 0||z.forEach(xe=>{Me.set(xe[_e],xe)})}else{const _e=R.value;_e&&Me.set(_e[e.valueField],_e)}}}function F(z){const{onUpdateShow:te,"onUpdate:show":he}=e;te&&ye(te,z),he&&ye(he,z),M.value=z}function we(){Z.value||(F(!0),M.value=!0,e.filterable&&zt())}function $e(){F(!1)}function Ae(){d.value="",b.value=q}const Ee=B(!1);function ke(){e.filterable&&(Ee.value=!0)}function De(){e.filterable&&(Ee.value=!1,y.value||Ae())}function Se(){Z.value||(y.value?e.filterable?zt():$e():we())}function Xe(z){var te,he;!((he=(te=N.value)===null||te===void 0?void 0:te.selfRef)===null||he===void 0)&&he.contains(z.relatedTarget)||(c.value=!1,ve(z),$e())}function ot(z){Y(z),c.value=!0}function it(){c.value=!0}function et(z){var te;!((te=k.value)===null||te===void 0)&&te.$el.contains(z.relatedTarget)||(c.value=!1,ve(z),$e())}function Je(){var z;(z=k.value)===null||z===void 0||z.focus(),$e()}function K(z){var te;y.value&&(!((te=k.value)===null||te===void 0)&&te.$el.contains(jr(z))||$e())}function U(z){if(!Array.isArray(z))return[];if(I.value)return Array.from(z);{const{remote:te}=e,{value:he}=S;if(te){const{value:Me}=Q;return z.filter(_e=>he.has(_e)||Me.has(_e))}else return z.filter(Me=>he.has(Me))}}function oe(z){le(z.rawNode)}function le(z){if(Z.value)return;const{tag:te,remote:he,clearFilterAfterSelect:Me,valueField:_e}=e;if(te&&!he){const{value:xe}=b,ge=xe[0]||null;if(ge){const Ve=p.value;Ve.length?Ve.push(ge):p.value=[ge],b.value=q}}if(he&&Q.value.set(z[_e],z),e.multiple){const xe=U(s.value),ge=xe.findIndex(Ve=>Ve===z[_e]);if(~ge){if(xe.splice(ge,1),te&&!he){const Ve=h(z[_e]);~Ve&&(p.value.splice(Ve,1),Me&&(d.value=""))}}else xe.push(z[_e]),Me&&(d.value="");ie(xe,O(xe))}else{if(te&&!he){const xe=h(z[_e]);~xe?p.value=[p.value[xe]]:p.value=q}$t(),$e(),ie(z[_e],z)}}function h(z){return p.value.findIndex(he=>he[e.valueField]===z)}function P(z){y.value||we();const{value:te}=z.target;d.value=te;const{tag:he,remote:Me}=e;if(de(te),he&&!Me){if(!te){b.value=q;return}const{onCreate:_e}=e,xe=_e?_e(te):{[e.labelField]:te,[e.valueField]:te},{valueField:ge,labelField:Ve}=e;v.value.some(Ze=>Ze[ge]===xe[ge]||Ze[Ve]===xe[Ve])||p.value.some(Ze=>Ze[ge]===xe[ge]||Ze[Ve]===xe[Ve])?b.value=q:b.value=[xe]}}function ee(z){z.stopPropagation();const{multiple:te}=e;!te&&e.filterable&&$e(),L(),te?ie([],[]):ie(null,null)}function Te(z){!Xt(z,"action")&&!Xt(z,"empty")&&!Xt(z,"header")&&z.preventDefault()}function Pe(z){H(z)}function It(z){var te,he,Me,_e,xe;if(!e.keyboard){z.preventDefault();return}switch(z.key){case" ":if(e.filterable)break;z.preventDefault();case"Enter":if(!(!((te=k.value)===null||te===void 0)&&te.isComposing)){if(y.value){const ge=(he=N.value)===null||he===void 0?void 0:he.getPendingTmNode();ge?oe(ge):e.filterable||($e(),$t())}else if(we(),e.tag&&Ee.value){const ge=b.value[0];if(ge){const Ve=ge[e.valueField],{value:Ze}=s;e.multiple&&Array.isArray(Ze)&&Ze.includes(Ve)||le(ge)}}}z.preventDefault();break;case"ArrowUp":if(z.preventDefault(),e.loading)return;y.value&&((Me=N.value)===null||Me===void 0||Me.prev());break;case"ArrowDown":if(z.preventDefault(),e.loading)return;y.value?(_e=N.value)===null||_e===void 0||_e.next():we();break;case"Escape":y.value&&(ns(z),$e()),(xe=k.value)===null||xe===void 0||xe.focus();break}}function $t(){var z;(z=k.value)===null||z===void 0||z.focus()}function zt(){var z;(z=k.value)===null||z===void 0||z.focusInput()}function jt(){var z;y.value&&((z=_.value)===null||z===void 0||z.syncPosition())}A(),Ce(ue(e,"options"),A);const Ht={focus:()=>{var z;(z=k.value)===null||z===void 0||z.focus()},focusInput:()=>{var z;(z=k.value)===null||z===void 0||z.focusInput()},blur:()=>{var z;(z=k.value)===null||z===void 0||z.blur()},blurInput:()=>{var z;(z=k.value)===null||z===void 0||z.blurInput()}},At=T(()=>{const{self:{menuBoxShadow:z}}=i.value;return{"--n-menu-box-shadow":z}}),ct=o?rt("select",void 0,At,e):void 0;return Object.assign(Object.assign({},Ht),{mergedStatus:re,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:g,isMounted:fo(),triggerRef:k,menuRef:N,pattern:d,uncontrolledShow:M,mergedShow:y,adjustedTo:Ot(e),uncontrolledValue:a,mergedValue:s,followerRef:_,localizedPlaceholder:j,selectedOption:R,selectedOptions:$,mergedSize:V,mergedDisabled:Z,focused:c,activeWithoutMenuOpen:Ee,inlineThemeDisabled:o,onTriggerInputFocus:ke,onTriggerInputBlur:De,handleTriggerOrMenuResize:jt,handleMenuFocus:it,handleMenuBlur:et,handleMenuTabOut:Je,handleTriggerClick:Se,handleToggle:oe,handleDeleteOption:le,handlePatternInput:P,handleClear:ee,handleTriggerBlur:Xe,handleTriggerFocus:ot,handleKeydown:It,handleMenuAfterLeave:Ae,handleMenuClickOutside:K,handleMenuScroll:Pe,handleMenuKeydown:It,handleMenuMousedown:Te,mergedTheme:i,cssVars:o?void 0:At,themeClass:ct?.themeClass,onRender:ct?.onRender})},render(){return u("div",{class:`${this.mergedClsPrefix}-select`},u(Co,null,{default:()=>[u(ko,null,{default:()=>u(nf,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),u(So,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ot.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>u(Bn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),gn(u(Vu,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,o;return[(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)]},header:()=>{var r,o;return[(o=(r=this.$slots).header)===null||o===void 0?void 0:o.call(r)]},action:()=>{var r,o;return[(o=(r=this.$slots).action)===null||o===void 0?void 0:o.call(r)]}}),this.displayDirective==="show"?[[go,this.mergedShow],[er,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[er,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ao=bt("n-dropdown-menu"),fr=bt("n-dropdown"),mi=bt("n-dropdown-option"),ya=fe({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),_f=fe({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=Be(Ao),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:o,renderOptionRef:i}=Be(fr);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:o,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:n,showIcon:r,nodeProps:o,renderLabel:i,renderOption:a}=this,{rawNode:l}=this.tmNode,s=u("div",Object.assign({class:`${t}-dropdown-option`},o?.(l)),u("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,r&&`${t}-dropdown-option-body__prefix--show-icon`]},vt(l.icon)),u("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):vt((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),u("div",{class:[`${t}-dropdown-option-body__suffix`,n&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:l}):s}}),Mf=x("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[D("color-transition",{transition:"color .3s var(--n-bezier)"}),D("depth",{color:"var(--n-color)"},[X("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),X("svg",{height:"1em",width:"1em"})]),Of=Object.assign(Object.assign({},Ie.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),wa=fe({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Of,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=nt(e),r=Ie("Icon","-icon",Mf,os,e,t),o=T(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:l},self:s}=r.value;if(a!==void 0){const{color:c,[`opacity${a}Depth`]:d}=s;return{"--n-bezier":l,"--n-color":c,"--n-opacity":d}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),i=n?rt("icon",T(()=>`${e.depth||"d"}`),o,e):void 0;return{mergedClsPrefix:t,mergedStyle:T(()=>{const{size:a,color:l}=e;return{fontSize:Jt(a),color:l}}),cssVars:n?void 0:o,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:r,component:o,onRender:i,themeClass:a}=this;return!((e=t?.$options)===null||e===void 0)&&e._n_icon__&&tr("icon","don't wrap `n-icon` inside `n-icon`"),i?.(),u("i",Qt(this.$attrs,{role:"img",class:[`${r}-icon`,a,{[`${r}-icon--depth`]:n,[`${r}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),o?u(o):this.$slots)}});function Jr(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function Rf(e){return e.type==="group"}function xa(e){return e.type==="divider"}function If(e){return e.type==="render"}const Ca=fe({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=Be(fr),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:l,mergedShowRef:s,renderLabelRef:c,renderIconRef:d,labelFieldRef:v,childrenFieldRef:p,renderOptionRef:b,nodePropsRef:f,menuPropsRef:m}=t,C=Be(mi,null),g=Be(Ao),S=Be(lr),M=T(()=>e.tmNode.rawNode),y=T(()=>{const{value:V}=p;return Jr(e.tmNode.rawNode,V)}),k=T(()=>{const{disabled:V}=e.tmNode;return V}),_=T(()=>{if(!y.value)return!1;const{key:V,disabled:Z}=e.tmNode;if(Z)return!1;const{value:re}=n,{value:ie}=r,{value:ve}=o,{value:L}=i;return re!==null?L.includes(V):ie!==null?L.includes(V)&&L[L.length-1]!==V:ve!==null?L.includes(V):!1}),N=T(()=>r.value===null&&!l.value),G=ws(_,300,N),j=T(()=>!!C?.enteringSubmenuRef.value),q=B(!1);Ke(mi,{enteringSubmenuRef:q});function Q(){q.value=!0}function I(){q.value=!1}function O(){const{parentKey:V,tmNode:Z}=e;Z.disabled||s.value&&(o.value=V,r.value=null,n.value=Z.key)}function $(){const{tmNode:V}=e;V.disabled||s.value&&n.value!==V.key&&O()}function R(V){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:Z}=V;Z&&!Xt({target:Z},"dropdownOption")&&!Xt({target:Z},"scrollbarRail")&&(n.value=null)}function J(){const{value:V}=y,{tmNode:Z}=e;s.value&&!V&&!Z.disabled&&(t.doSelect(Z.key,Z.rawNode),t.doUpdateShow(!1))}return{labelField:v,renderLabel:c,renderIcon:d,siblingHasIcon:g.showIconRef,siblingHasSubmenu:g.hasSubmenuRef,menuProps:m,popoverBody:S,animated:l,mergedShowSubmenu:T(()=>G.value&&!j.value),rawNode:M,hasSubmenu:y,pending:qe(()=>{const{value:V}=i,{key:Z}=e.tmNode;return V.includes(Z)}),childActive:qe(()=>{const{value:V}=a,{key:Z}=e.tmNode,re=V.findIndex(ie=>Z===ie);return re===-1?!1:re<V.length-1}),active:qe(()=>{const{value:V}=a,{key:Z}=e.tmNode,re=V.findIndex(ie=>Z===ie);return re===-1?!1:re===V.length-1}),mergedDisabled:k,renderOption:b,nodeProps:f,handleClick:J,handleMouseMove:$,handleMouseEnter:O,handleMouseLeave:R,handleSubmenuBeforeEnter:Q,handleSubmenuAfterEnter:I}},render(){var e,t;const{animated:n,rawNode:r,mergedShowSubmenu:o,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:l,renderLabel:s,renderIcon:c,renderOption:d,nodeProps:v,props:p,scrollable:b}=this;let f=null;if(o){const S=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);f=u(ka,Object.assign({},S,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const m={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},C=v?.(r),g=u("div",Object.assign({class:[`${i}-dropdown-option`,C?.class],"data-dropdown-option":!0},C),u("div",Qt(m,p),[u("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(r):vt(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(r):vt((t=r[this.labelField])!==null&&t!==void 0?t:r.title)),u("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,l&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(wa,null,{default:()=>u(au,null)}):null)]),this.hasSubmenu?u(Co,null,{default:()=>[u(ko,null,{default:()=>u("div",{class:`${i}-dropdown-offset-container`},u(So,{show:this.mergedShowSubmenu,placement:this.placement,to:b&&this.popoverBody||void 0,teleportDisabled:!b},{default:()=>u("div",{class:`${i}-dropdown-menu-wrapper`},n?u(Bn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>f}):f)}))})]}):null);return d?d({node:g,option:r}):g}}),$f=fe({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return u(ht,null,u(_f,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(o=>{const{rawNode:i}=o;return i.show===!1?null:xa(i)?u(ya,{clsPrefix:n,key:o.key}):o.isGroup?(tr("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ca,{clsPrefix:n,tmNode:o,parentKey:t,key:o.key})}))}}),zf=fe({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return u("div",t,[e?.()])}}),ka=fe({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:n}=Be(fr);Ke(Ao,{showIconRef:T(()=>{const o=t.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>o?o(s):s.icon);const{rawNode:l}=i;return o?o(l):l.icon})}),hasSubmenuRef:T(()=>{const{value:o}=n;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>Jr(s,o));const{rawNode:l}=i;return Jr(l,o)})})});const r=B(null);return Ke(so,null),Ke(co,null),Ke(lr,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(o=>{const{rawNode:i}=o;return i.show===!1?null:If(i)?u(zf,{tmNode:o,key:o.key}):xa(i)?u(ya,{clsPrefix:t,key:o.key}):Rf(i)?u($f,{clsPrefix:t,tmNode:o,parentKey:e,key:o.key}):u(Ca,{clsPrefix:t,tmNode:o,parentKey:e,key:o.key,props:i.props,scrollable:n})});return u("div",{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},n?u(Hi,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?va({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Af=x("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[bo(),x("dropdown-option",`
 position: relative;
 `,[X("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[X("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[X("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),He("disabled",[D("pending",`
 color: var(--n-option-text-color-hover);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),X("&::before","background-color: var(--n-option-color-hover);")]),D("active",`
 color: var(--n-option-text-color-active);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),X("&::before","background-color: var(--n-option-color-active);")]),D("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[E("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),D("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),D("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[E("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[D("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),E("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[D("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),E("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),E("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[D("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),x("icon",`
 font-size: var(--n-option-icon-size);
 `)]),x("dropdown-menu","pointer-events: all;")]),x("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),x("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),x("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),X(">",[x("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),He("scrollable",`
 padding: var(--n-padding);
 `),D("scrollable",[E("content",`
 padding: var(--n-padding);
 `)])]),Ef={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Tf=Object.keys(zo),Ff=Object.assign(Object.assign(Object.assign({},zo),Ef),Ie.props),Fv=fe({name:"Dropdown",inheritAttrs:!1,props:Ff,setup(e){const t=B(!1),n=Zt(ue(e,"show"),t),r=T(()=>{const{keyField:I,childrenField:O}=e;return fa(e.options,{getKey($){return $[I]},getDisabled($){return $.disabled===!0},getIgnored($){return $.type==="divider"||$.type==="render"},getChildren($){return $[O]}})}),o=T(()=>r.value.treeNodes),i=B(null),a=B(null),l=B(null),s=T(()=>{var I,O,$;return($=(O=(I=i.value)!==null&&I!==void 0?I:a.value)!==null&&O!==void 0?O:l.value)!==null&&$!==void 0?$:null}),c=T(()=>r.value.getPath(s.value).keyPath),d=T(()=>r.value.getPath(e.value).keyPath),v=qe(()=>e.keyboard&&n.value);ms({keydown:{ArrowUp:{prevent:!0,handler:k},ArrowRight:{prevent:!0,handler:y},ArrowDown:{prevent:!0,handler:_},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:N},Escape:S}},v);const{mergedClsPrefixRef:p,inlineThemeDisabled:b}=nt(e),f=Ie("Dropdown","-dropdown",Af,is,e,p);Ke(fr,{labelFieldRef:ue(e,"labelField"),childrenFieldRef:ue(e,"childrenField"),renderLabelRef:ue(e,"renderLabel"),renderIconRef:ue(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:c,activeKeyPathRef:d,animatedRef:ue(e,"animated"),mergedShowRef:n,nodePropsRef:ue(e,"nodeProps"),renderOptionRef:ue(e,"renderOption"),menuPropsRef:ue(e,"menuProps"),doSelect:m,doUpdateShow:C}),Ce(n,I=>{!e.animated&&!I&&g()});function m(I,O){const{onSelect:$}=e;$&&ye($,I,O)}function C(I){const{"onUpdate:show":O,onUpdateShow:$}=e;O&&ye(O,I),$&&ye($,I),t.value=I}function g(){i.value=null,a.value=null,l.value=null}function S(){C(!1)}function M(){j("left")}function y(){j("right")}function k(){j("up")}function _(){j("down")}function N(){const I=G();I?.isLeaf&&n.value&&(m(I.key,I.rawNode),C(!1))}function G(){var I;const{value:O}=r,{value:$}=s;return!O||$===null?null:(I=O.getNode($))!==null&&I!==void 0?I:null}function j(I){const{value:O}=s,{value:{getFirstAvailableNode:$}}=r;let R=null;if(O===null){const J=$();J!==null&&(R=J.key)}else{const J=G();if(J){let V;switch(I){case"down":V=J.getNext();break;case"up":V=J.getPrev();break;case"right":V=J.getChild();break;case"left":V=J.getParent();break}V&&(R=V.key)}}R!==null&&(i.value=null,a.value=R)}const q=T(()=>{const{size:I,inverted:O}=e,{common:{cubicBezierEaseInOut:$},self:R}=f.value,{padding:J,dividerColor:V,borderRadius:Z,optionOpacityDisabled:re,[ae("optionIconSuffixWidth",I)]:ie,[ae("optionSuffixWidth",I)]:ve,[ae("optionIconPrefixWidth",I)]:L,[ae("optionPrefixWidth",I)]:Y,[ae("fontSize",I)]:de,[ae("optionHeight",I)]:H,[ae("optionIconSize",I)]:A}=R,F={"--n-bezier":$,"--n-font-size":de,"--n-padding":J,"--n-border-radius":Z,"--n-option-height":H,"--n-option-prefix-width":Y,"--n-option-icon-prefix-width":L,"--n-option-suffix-width":ve,"--n-option-icon-suffix-width":ie,"--n-option-icon-size":A,"--n-divider-color":V,"--n-option-opacity-disabled":re};return O?(F["--n-color"]=R.colorInverted,F["--n-option-color-hover"]=R.optionColorHoverInverted,F["--n-option-color-active"]=R.optionColorActiveInverted,F["--n-option-text-color"]=R.optionTextColorInverted,F["--n-option-text-color-hover"]=R.optionTextColorHoverInverted,F["--n-option-text-color-active"]=R.optionTextColorActiveInverted,F["--n-option-text-color-child-active"]=R.optionTextColorChildActiveInverted,F["--n-prefix-color"]=R.prefixColorInverted,F["--n-suffix-color"]=R.suffixColorInverted,F["--n-group-header-text-color"]=R.groupHeaderTextColorInverted):(F["--n-color"]=R.color,F["--n-option-color-hover"]=R.optionColorHover,F["--n-option-color-active"]=R.optionColorActive,F["--n-option-text-color"]=R.optionTextColor,F["--n-option-text-color-hover"]=R.optionTextColorHover,F["--n-option-text-color-active"]=R.optionTextColorActive,F["--n-option-text-color-child-active"]=R.optionTextColorChildActive,F["--n-prefix-color"]=R.prefixColor,F["--n-suffix-color"]=R.suffixColor,F["--n-group-header-text-color"]=R.groupHeaderTextColor),F}),Q=b?rt("dropdown",T(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:p,mergedTheme:f,tmNodes:o,mergedShow:n,handleAfterLeave:()=>{e.animated&&g()},doUpdateShow:C,cssVars:b?void 0:q,themeClass:Q?.themeClass,onRender:Q?.onRender}},render(){const e=(r,o,i,a,l)=>{var s;const{mergedClsPrefix:c,menuProps:d}=this;(s=this.onRender)===null||s===void 0||s.call(this);const v=d?.(void 0,this.tmNodes.map(b=>b.rawNode))||{},p={ref:Ns(o),class:[r,`${c}-dropdown`,this.themeClass],clsPrefix:c,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:l};return u(ka,Qt(this.$attrs,p,v))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(pa,Object.assign({},Ui(this.$props,Tf),n),{trigger:()=>{var r,o;return(o=(r=this.$slots).default)===null||o===void 0?void 0:o.call(r)}})}}),Bf=x("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[He("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[He("no-title",`
 display: flex;
 align-items: center;
 `)]),E("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),D("title-position-left",[E("line",[D("left",{width:"28px"})])]),D("title-position-right",[E("line",[D("right",{width:"28px"})])]),D("dashed",[E("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),D("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),E("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),He("dashed",[E("line",{backgroundColor:"var(--n-color)"})]),D("dashed",[E("line",{borderColor:"var(--n-color)"})]),D("vertical",{backgroundColor:"var(--n-color)"})]),Df=Object.assign(Object.assign({},Ie.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Lf=fe({name:"Divider",props:Df,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=nt(e),r=Ie("Divider","-divider",Bf,as,e,t),o=T(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:l,textColor:s,fontWeight:c}}=r.value;return{"--n-bezier":a,"--n-color":l,"--n-text-color":s,"--n-font-weight":c}}),i=n?rt("divider",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:o,themeClass:i?.themeClass,onRender:i?.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:r,dashed:o,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:r,[`${a}-divider--no-title`]:!t.default,[`${a}-divider--dashed`]:o,[`${a}-divider--title-position-${n}`]:t.default&&n}],style:i},r?null:u("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!r&&t.default?u(ht,null,u("div",{class:`${a}-divider__title`},this.$slots),u("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),Dn=bt("n-form"),Sa=bt("n-form-item-insts"),Nf=x("form",[D("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[x("form-item",{width:"auto",marginRight:"18px"},[X("&:last-child",{marginRight:0})])])]);var Wf=function(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function l(d){try{c(r.next(d))}catch(v){a(v)}}function s(d){try{c(r.throw(d))}catch(v){a(v)}}function c(d){d.done?i(d.value):o(d.value).then(l,s)}c((r=r.apply(e,t||[])).next())})};const Vf=Object.assign(Object.assign({},Ie.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:e=>{e.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),yi=fe({name:"Form",props:Vf,setup(e){const{mergedClsPrefixRef:t}=nt(e);Ie("Form","-form",Nf,qi,e,t);const n={},r=B(void 0),o=s=>{const c=r.value;(c===void 0||s>=c)&&(r.value=s)};function i(s){return Wf(this,arguments,void 0,function*(c,d=()=>!0){return yield new Promise((v,p)=>{const b=[];for(const f of Vo(n)){const m=n[f];for(const C of m)C.path&&b.push(C.internalValidate(null,d))}Promise.all(b).then(f=>{const m=f.some(S=>!S.valid),C=[],g=[];f.forEach(S=>{var M,y;!((M=S.errors)===null||M===void 0)&&M.length&&C.push(S.errors),!((y=S.warnings)===null||y===void 0)&&y.length&&g.push(S.warnings)}),c&&c(C.length?C:void 0,{warnings:g.length?g:void 0}),m?p(C.length?C:void 0):v({warnings:g.length?g:void 0})})})})}function a(){for(const s of Vo(n)){const c=n[s];for(const d of c)d.restoreValidation()}}return Ke(Dn,{props:e,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:o}),Ke(Sa,{formItems:n}),Object.assign({validate:i,restoreValidation:a},{mergedClsPrefix:t})},render(){const{mergedClsPrefix:e}=this;return u("form",{class:[`${e}-form`,this.inline&&`${e}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function Yt(){return Yt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yt.apply(this,arguments)}function jf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Tn(e,t)}function Zr(e){return Zr=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Zr(e)}function Tn(e,t){return Tn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Tn(e,t)}function Hf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Jn(e,t,n){return Hf()?Jn=Reflect.construct.bind():Jn=function(o,i,a){var l=[null];l.push.apply(l,i);var s=Function.bind.apply(o,l),c=new s;return a&&Tn(c,a.prototype),c},Jn.apply(null,arguments)}function Kf(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Qr(e){var t=typeof Map=="function"?new Map:void 0;return Qr=function(r){if(r===null||!Kf(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return Jn(r,arguments,Zr(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),Tn(o,r)},Qr(e)}var Uf=/%[sdj%]/g,qf=function(){};function eo(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function dt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var a=e.replace(Uf,function(l){if(l==="%%")return"%";if(o>=i)return l;switch(l){case"%s":return String(n[o++]);case"%d":return Number(n[o++]);case"%j":try{return JSON.stringify(n[o++])}catch{return"[Circular]"}break;default:return l}});return a}return e}function Yf(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Ye(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||Yf(t)&&typeof e=="string"&&!e)}function Gf(e,t,n){var r=[],o=0,i=e.length;function a(l){r.push.apply(r,l||[]),o++,o===i&&n(r)}e.forEach(function(l){t(l,a)})}function wi(e,t,n){var r=0,o=e.length;function i(a){if(a&&a.length){n(a);return}var l=r;r=r+1,l<o?t(e[l],i):n([])}i([])}function Xf(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var xi=function(e){jf(t,e);function t(n,r){var o;return o=e.call(this,"Async Validation Error")||this,o.errors=n,o.fields=r,o}return t}(Qr(Error));function Jf(e,t,n,r,o){if(t.first){var i=new Promise(function(p,b){var f=function(g){return r(g),g.length?b(new xi(g,eo(g))):p(o)},m=Xf(e);wi(m,n,f)});return i.catch(function(p){return p}),i}var a=t.firstFields===!0?Object.keys(e):t.firstFields||[],l=Object.keys(e),s=l.length,c=0,d=[],v=new Promise(function(p,b){var f=function(C){if(d.push.apply(d,C),c++,c===s)return r(d),d.length?b(new xi(d,eo(d))):p(o)};l.length||(r(d),p(o)),l.forEach(function(m){var C=e[m];a.indexOf(m)!==-1?wi(C,n,f):Gf(C,n,f)})});return v.catch(function(p){return p}),v}function Zf(e){return!!(e&&e.message!==void 0)}function Qf(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function Ci(e,t){return function(n){var r;return e.fullFields?r=Qf(t,e.fullFields):r=t[n.field||e.fullField],Zf(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function ki(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];typeof r=="object"&&typeof e[n]=="object"?e[n]=Yt({},e[n],r):e[n]=r}}return e}var Pa=function(t,n,r,o,i,a){t.required&&(!r.hasOwnProperty(t.field)||Ye(n,a||t.type))&&o.push(dt(i.messages.required,t.fullField))},eh=function(t,n,r,o,i){(/^\s+$/.test(n)||n==="")&&o.push(dt(i.messages.whitespace,t.fullField))},Hn,th=function(){if(Hn)return Hn;var e="[a-fA-F\\d:]",t=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",o=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+n+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+n+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+n+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+n+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+n+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+n+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+n+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+n+"$)|(?:^"+o+"$)"),a=new RegExp("^"+n+"$"),l=new RegExp("^"+o+"$"),s=function(y){return y&&y.exact?i:new RegExp("(?:"+t(y)+n+t(y)+")|(?:"+t(y)+o+t(y)+")","g")};s.v4=function(M){return M&&M.exact?a:new RegExp(""+t(M)+n+t(M),"g")},s.v6=function(M){return M&&M.exact?l:new RegExp(""+t(M)+o+t(M),"g")};var c="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",v=s.v4().source,p=s.v6().source,b="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",f="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",m="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",C="(?::\\d{2,5})?",g='(?:[/?#][^\\s"]*)?',S="(?:"+c+"|www\\.)"+d+"(?:localhost|"+v+"|"+p+"|"+b+f+m+")"+C+g;return Hn=new RegExp("(?:^"+S+"$)","i"),Hn},Si={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},$n={integer:function(t){return $n.number(t)&&parseInt(t,10)===t},float:function(t){return $n.number(t)&&!$n.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!$n.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Si.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(th())},hex:function(t){return typeof t=="string"&&!!t.match(Si.hex)}},nh=function(t,n,r,o,i){if(t.required&&n===void 0){Pa(t,n,r,o,i);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],l=t.type;a.indexOf(l)>-1?$n[l](n)||o.push(dt(i.messages.types[l],t.fullField,t.type)):l&&typeof n!==t.type&&o.push(dt(i.messages.types[l],t.fullField,t.type))},rh=function(t,n,r,o,i){var a=typeof t.len=="number",l=typeof t.min=="number",s=typeof t.max=="number",c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=n,v=null,p=typeof n=="number",b=typeof n=="string",f=Array.isArray(n);if(p?v="number":b?v="string":f&&(v="array"),!v)return!1;f&&(d=n.length),b&&(d=n.replace(c,"_").length),a?d!==t.len&&o.push(dt(i.messages[v].len,t.fullField,t.len)):l&&!s&&d<t.min?o.push(dt(i.messages[v].min,t.fullField,t.min)):s&&!l&&d>t.max?o.push(dt(i.messages[v].max,t.fullField,t.max)):l&&s&&(d<t.min||d>t.max)&&o.push(dt(i.messages[v].range,t.fullField,t.min,t.max))},sn="enum",oh=function(t,n,r,o,i){t[sn]=Array.isArray(t[sn])?t[sn]:[],t[sn].indexOf(n)===-1&&o.push(dt(i.messages[sn],t.fullField,t[sn].join(", ")))},ih=function(t,n,r,o,i){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||o.push(dt(i.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var a=new RegExp(t.pattern);a.test(n)||o.push(dt(i.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},Re={required:Pa,whitespace:eh,type:nh,range:rh,enum:oh,pattern:ih},ah=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return r();Re.required(t,n,o,a,i,"string"),Ye(n,"string")||(Re.type(t,n,o,a,i),Re.range(t,n,o,a,i),Re.pattern(t,n,o,a,i),t.whitespace===!0&&Re.whitespace(t,n,o,a,i))}r(a)},lh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&Re.type(t,n,o,a,i)}r(a)},sh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(n===""&&(n=void 0),Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&(Re.type(t,n,o,a,i),Re.range(t,n,o,a,i))}r(a)},dh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&Re.type(t,n,o,a,i)}r(a)},ch=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),Ye(n)||Re.type(t,n,o,a,i)}r(a)},uh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&(Re.type(t,n,o,a,i),Re.range(t,n,o,a,i))}r(a)},fh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&(Re.type(t,n,o,a,i),Re.range(t,n,o,a,i))}r(a)},hh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(n==null&&!t.required)return r();Re.required(t,n,o,a,i,"array"),n!=null&&(Re.type(t,n,o,a,i),Re.range(t,n,o,a,i))}r(a)},vh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&Re.type(t,n,o,a,i)}r(a)},ph="enum",bh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i),n!==void 0&&Re[ph](t,n,o,a,i)}r(a)},gh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return r();Re.required(t,n,o,a,i),Ye(n,"string")||Re.pattern(t,n,o,a,i)}r(a)},mh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n,"date")&&!t.required)return r();if(Re.required(t,n,o,a,i),!Ye(n,"date")){var s;n instanceof Date?s=n:s=new Date(n),Re.type(t,s,o,a,i),s&&Re.range(t,s.getTime(),o,a,i)}}r(a)},yh=function(t,n,r,o,i){var a=[],l=Array.isArray(n)?"array":typeof n;Re.required(t,n,o,a,i,l),r(a)},Fr=function(t,n,r,o,i){var a=t.type,l=[],s=t.required||!t.required&&o.hasOwnProperty(t.field);if(s){if(Ye(n,a)&&!t.required)return r();Re.required(t,n,o,l,i,a),Ye(n,a)||Re.type(t,n,o,l,i)}r(l)},wh=function(t,n,r,o,i){var a=[],l=t.required||!t.required&&o.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return r();Re.required(t,n,o,a,i)}r(a)},An={string:ah,method:lh,number:sh,boolean:dh,regexp:ch,integer:uh,float:fh,array:hh,object:vh,enum:bh,pattern:gh,date:mh,url:Fr,hex:Fr,email:Fr,required:yh,any:wh};function to(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var no=to(),bn=function(){function e(n){this.rules=null,this._messages=no,this.define(n)}var t=e.prototype;return t.define=function(r){var o=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(i){var a=r[i];o.rules[i]=Array.isArray(a)?a:[a]})},t.messages=function(r){return r&&(this._messages=ki(to(),r)),this._messages},t.validate=function(r,o,i){var a=this;o===void 0&&(o={}),i===void 0&&(i=function(){});var l=r,s=o,c=i;if(typeof s=="function"&&(c=s,s={}),!this.rules||Object.keys(this.rules).length===0)return c&&c(null,l),Promise.resolve(l);function d(m){var C=[],g={};function S(y){if(Array.isArray(y)){var k;C=(k=C).concat.apply(k,y)}else C.push(y)}for(var M=0;M<m.length;M++)S(m[M]);C.length?(g=eo(C),c(C,g)):c(null,l)}if(s.messages){var v=this.messages();v===no&&(v=to()),ki(v,s.messages),s.messages=v}else s.messages=this.messages();var p={},b=s.keys||Object.keys(this.rules);b.forEach(function(m){var C=a.rules[m],g=l[m];C.forEach(function(S){var M=S;typeof M.transform=="function"&&(l===r&&(l=Yt({},l)),g=l[m]=M.transform(g)),typeof M=="function"?M={validator:M}:M=Yt({},M),M.validator=a.getValidationMethod(M),M.validator&&(M.field=m,M.fullField=M.fullField||m,M.type=a.getType(M),p[m]=p[m]||[],p[m].push({rule:M,value:g,source:l,field:m}))})});var f={};return Jf(p,s,function(m,C){var g=m.rule,S=(g.type==="object"||g.type==="array")&&(typeof g.fields=="object"||typeof g.defaultField=="object");S=S&&(g.required||!g.required&&m.value),g.field=m.field;function M(_,N){return Yt({},N,{fullField:g.fullField+"."+_,fullFields:g.fullFields?[].concat(g.fullFields,[_]):[_]})}function y(_){_===void 0&&(_=[]);var N=Array.isArray(_)?_:[_];!s.suppressWarning&&N.length&&e.warning("async-validator:",N),N.length&&g.message!==void 0&&(N=[].concat(g.message));var G=N.map(Ci(g,l));if(s.first&&G.length)return f[g.field]=1,C(G);if(!S)C(G);else{if(g.required&&!m.value)return g.message!==void 0?G=[].concat(g.message).map(Ci(g,l)):s.error&&(G=[s.error(g,dt(s.messages.required,g.field))]),C(G);var j={};g.defaultField&&Object.keys(m.value).map(function(I){j[I]=g.defaultField}),j=Yt({},j,m.rule.fields);var q={};Object.keys(j).forEach(function(I){var O=j[I],$=Array.isArray(O)?O:[O];q[I]=$.map(M.bind(null,I))});var Q=new e(q);Q.messages(s.messages),m.rule.options&&(m.rule.options.messages=s.messages,m.rule.options.error=s.error),Q.validate(m.value,m.rule.options||s,function(I){var O=[];G&&G.length&&O.push.apply(O,G),I&&I.length&&O.push.apply(O,I),C(O.length?O:null)})}}var k;if(g.asyncValidator)k=g.asyncValidator(g,m.value,y,m.source,s);else if(g.validator){try{k=g.validator(g,m.value,y,m.source,s)}catch(_){console.error?.(_),s.suppressValidatorError||setTimeout(function(){throw _},0),y(_.message)}k===!0?y():k===!1?y(typeof g.message=="function"?g.message(g.fullField||g.field):g.message||(g.fullField||g.field)+" fails"):k instanceof Array?y(k):k instanceof Error&&y(k.message)}k&&k.then&&k.then(function(){return y()},function(_){return y(_)})},function(m){d(m)},l)},t.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!An.hasOwnProperty(r.type))throw new Error(dt("Unknown rule type %s",r.type));return r.type||"string"},t.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var o=Object.keys(r),i=o.indexOf("message");return i!==-1&&o.splice(i,1),o.length===1&&o[0]==="required"?An.required:An[this.getType(r)]||void 0},e}();bn.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");An[t]=n};bn.warning=qf;bn.messages=no;bn.validators=An;const{cubicBezierEaseInOut:Pi}=ls;function xh({name:e="fade-down",fromOffset:t="-4px",enterDuration:n=".3s",leaveDuration:r=".3s",enterCubicBezier:o=Pi,leaveCubicBezier:i=Pi}={}){return[X(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0,transform:`translateY(${t})`}),X(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),X(`&.${e}-transition-leave-active`,{transition:`opacity ${r} ${i}, transform ${r} ${i}`}),X(`&.${e}-transition-enter-active`,{transition:`opacity ${n} ${o}, transform ${n} ${o}`})]}const Ch=x("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[x("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[E("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),E("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),x("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),D("auto-label-width",[x("form-item-label","white-space: nowrap;")]),D("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[x("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[D("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),D("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),D("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),D("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),E("text",`
 grid-area: text; 
 `),E("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),D("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[D("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),x("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),x("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),x("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[X("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),x("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[D("warning",{color:"var(--n-feedback-text-color-warning)"}),D("error",{color:"var(--n-feedback-text-color-error)"}),xh({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);function kh(e){const t=Be(Dn,null);return{mergedSize:T(()=>e.size!==void 0?e.size:t?.props.size!==void 0?t.props.size:"medium")}}function Sh(e){const t=Be(Dn,null),n=T(()=>{const{labelPlacement:f}=e;return f!==void 0?f:t?.props.labelPlacement?t.props.labelPlacement:"top"}),r=T(()=>n.value==="left"&&(e.labelWidth==="auto"||t?.props.labelWidth==="auto")),o=T(()=>{if(n.value==="top")return;const{labelWidth:f}=e;if(f!==void 0&&f!=="auto")return Jt(f);if(r.value){const m=t?.maxChildLabelWidthRef.value;return m!==void 0?Jt(m):void 0}if(t?.props.labelWidth!==void 0)return Jt(t.props.labelWidth)}),i=T(()=>{const{labelAlign:f}=e;if(f)return f;if(t?.props.labelAlign)return t.props.labelAlign}),a=T(()=>{var f;return[(f=e.labelProps)===null||f===void 0?void 0:f.style,e.labelStyle,{width:o.value}]}),l=T(()=>{const{showRequireMark:f}=e;return f!==void 0?f:t?.props.showRequireMark}),s=T(()=>{const{requireMarkPlacement:f}=e;return f!==void 0?f:t?.props.requireMarkPlacement||"right"}),c=B(!1),d=B(!1),v=T(()=>{const{validationStatus:f}=e;if(f!==void 0)return f;if(c.value)return"error";if(d.value)return"warning"}),p=T(()=>{const{showFeedback:f}=e;return f!==void 0?f:t?.props.showFeedback!==void 0?t.props.showFeedback:!0}),b=T(()=>{const{showLabel:f}=e;return f!==void 0?f:t?.props.showLabel!==void 0?t.props.showLabel:!0});return{validationErrored:c,validationWarned:d,mergedLabelStyle:a,mergedLabelPlacement:n,mergedLabelAlign:i,mergedShowRequireMark:l,mergedRequireMarkPlacement:s,mergedValidationStatus:v,mergedShowFeedback:p,mergedShowLabel:b,isAutoLabelWidth:r}}function Ph(e){const t=Be(Dn,null),n=T(()=>{const{rulePath:a}=e;if(a!==void 0)return a;const{path:l}=e;if(l!==void 0)return l}),r=T(()=>{const a=[],{rule:l}=e;if(l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l)),t){const{rules:s}=t.props,{value:c}=n;if(s!==void 0&&c!==void 0){const d=Oo(s,c);d!==void 0&&(Array.isArray(d)?a.push(...d):a.push(d))}}return a}),o=T(()=>r.value.some(a=>a.required)),i=T(()=>o.value||e.required);return{mergedRules:r,mergedRequired:i}}var _i=function(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function l(d){try{c(r.next(d))}catch(v){a(v)}}function s(d){try{c(r.throw(d))}catch(v){a(v)}}function c(d){d.done?i(d.value):o(d.value).then(l,s)}c((r=r.apply(e,t||[])).next())})};const _h=Object.assign(Object.assign({},Ie.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object,contentClass:String,contentStyle:[String,Object]});function Mi(e,t){return(...n)=>{try{const r=e(...n);return!t&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r?.then?r:(r===void 0||tr("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use ${t?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(r){tr("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const qt=fe({name:"FormItem",props:_h,setup(e){ys(Sa,"formItems",ue(e,"path"));const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=nt(e),r=Be(Dn,null),o=kh(e),i=Sh(e),{validationErrored:a,validationWarned:l}=i,{mergedRequired:s,mergedRules:c}=Ph(e),{mergedSize:d}=o,{mergedLabelPlacement:v,mergedLabelAlign:p,mergedRequireMarkPlacement:b}=i,f=B([]),m=B(Hr()),C=r?ue(r.props,"disabled"):B(!1),g=Ie("Form","-form-item",Ch,qi,e,t);Ce(ue(e,"path"),()=>{e.ignorePathChange||S()});function S(){f.value=[],a.value=!1,l.value=!1,e.feedback&&(m.value=Hr())}const M=(...$)=>_i(this,[...$],void 0,function*(R=null,J=()=>!0,V={suppressWarning:!0}){const{path:Z}=e;V?V.first||(V.first=e.first):V={};const{value:re}=c,ie=r?Oo(r.props.model,Z||""):void 0,ve={},L={},Y=(R?re.filter(ke=>Array.isArray(ke.trigger)?ke.trigger.includes(R):ke.trigger===R):re).filter(J).map((ke,De)=>{const Se=Object.assign({},ke);if(Se.validator&&(Se.validator=Mi(Se.validator,!1)),Se.asyncValidator&&(Se.asyncValidator=Mi(Se.asyncValidator,!0)),Se.renderMessage){const Xe=`__renderMessage__${De}`;L[Xe]=Se.message,Se.message=Xe,ve[Xe]=Se.renderMessage}return Se}),de=Y.filter(ke=>ke.level!=="warning"),H=Y.filter(ke=>ke.level==="warning"),A={valid:!0,errors:void 0,warnings:void 0};if(!Y.length)return A;const F=Z??"__n_no_path__",we=new bn({[F]:de}),$e=new bn({[F]:H}),{validateMessages:Ae}=r?.props||{};Ae&&(we.messages(Ae),$e.messages(Ae));const Ee=ke=>{f.value=ke.map(De=>{const Se=De?.message||"";return{key:Se,render:()=>Se.startsWith("__renderMessage__")?ve[Se]():Se}}),ke.forEach(De=>{var Se;!((Se=De.message)===null||Se===void 0)&&Se.startsWith("__renderMessage__")&&(De.message=L[De.message])})};if(de.length){const ke=yield new Promise(De=>{we.validate({[F]:ie},V,De)});ke?.length&&(A.valid=!1,A.errors=ke,Ee(ke))}if(H.length&&!A.errors){const ke=yield new Promise(De=>{$e.validate({[F]:ie},V,De)});ke?.length&&(Ee(ke),A.warnings=ke)}return!A.errors&&!A.warnings?S():(a.value=!!A.errors,l.value=!!A.warnings),A});function y(){M("blur")}function k(){M("change")}function _(){M("focus")}function N(){M("input")}function G($,R){return _i(this,void 0,void 0,function*(){let J,V,Z,re;return typeof $=="string"?(J=$,V=R):$!==null&&typeof $=="object"&&(J=$.trigger,V=$.callback,Z=$.shouldRuleBeApplied,re=$.options),yield new Promise((ie,ve)=>{M(J,Z,re).then(({valid:L,errors:Y,warnings:de})=>{L?(V&&V(void 0,{warnings:de}),ie({warnings:de})):(V&&V(Y,{warnings:de}),ve(Y))})})})}Ke(ss,{path:ue(e,"path"),disabled:C,mergedSize:o.mergedSize,mergedValidationStatus:i.mergedValidationStatus,restoreValidation:S,handleContentBlur:y,handleContentChange:k,handleContentFocus:_,handleContentInput:N});const j={validate:G,restoreValidation:S,internalValidate:M},q=B(null);pt(()=>{if(!i.isAutoLabelWidth.value)return;const $=q.value;if($!==null){const R=$.style.whiteSpace;$.style.whiteSpace="nowrap",$.style.width="",r?.deriveMaxChildLabelWidth(Number(getComputedStyle($).width.slice(0,-2))),$.style.whiteSpace=R}});const Q=T(()=>{var $;const{value:R}=d,{value:J}=v,V=J==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:Z},self:{labelTextColor:re,asteriskColor:ie,lineHeight:ve,feedbackTextColor:L,feedbackTextColorWarning:Y,feedbackTextColorError:de,feedbackPadding:H,labelFontWeight:A,[ae("labelHeight",R)]:F,[ae("blankHeight",R)]:we,[ae("feedbackFontSize",R)]:$e,[ae("feedbackHeight",R)]:Ae,[ae("labelPadding",V)]:Ee,[ae("labelTextAlign",V)]:ke,[ae(ae("labelFontSize",J),R)]:De}}=g.value;let Se=($=p.value)!==null&&$!==void 0?$:ke;return J==="top"&&(Se=Se==="right"?"flex-end":"flex-start"),{"--n-bezier":Z,"--n-line-height":ve,"--n-blank-height":we,"--n-label-font-size":De,"--n-label-text-align":Se,"--n-label-height":F,"--n-label-padding":Ee,"--n-label-font-weight":A,"--n-asterisk-color":ie,"--n-label-text-color":re,"--n-feedback-padding":H,"--n-feedback-font-size":$e,"--n-feedback-height":Ae,"--n-feedback-text-color":L,"--n-feedback-text-color-warning":Y,"--n-feedback-text-color-error":de}}),I=n?rt("form-item",T(()=>{var $;return`${d.value[0]}${v.value[0]}${(($=p.value)===null||$===void 0?void 0:$[0])||""}`}),Q,e):void 0,O=T(()=>v.value==="left"&&b.value==="left"&&p.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:q,mergedClsPrefix:t,mergedRequired:s,feedbackId:m,renderExplains:f,reverseColSpace:O},i),o),j),{cssVars:n?void 0:Q,themeClass:I?.themeClass,onRender:I?.onRender})},render(){const{$slots:e,mergedClsPrefix:t,mergedShowLabel:n,mergedShowRequireMark:r,mergedRequireMarkPlacement:o,onRender:i}=this,a=r!==void 0?r:this.mergedRequired;i?.();const l=()=>{const s=this.$slots.label?this.$slots.label():this.label;if(!s)return null;const c=u("span",{class:`${t}-form-item-label__text`},s),d=a?u("span",{class:`${t}-form-item-label__asterisk`},o!=="left"?" *":"* "):o==="right-hanging"&&u("span",{class:`${t}-form-item-label__asterisk-placeholder`}," *"),{labelProps:v}=this;return u("label",Object.assign({},v,{class:[v?.class,`${t}-form-item-label`,`${t}-form-item-label--${o}-mark`,this.reverseColSpace&&`${t}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),o==="left"?[d,c]:[c,d])};return u("div",{class:[`${t}-form-item`,this.themeClass,`${t}-form-item--${this.mergedSize}-size`,`${t}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${t}-form-item--auto-label-width`,!n&&`${t}-form-item--no-label`],style:this.cssVars},n&&l(),u("div",{class:[`${t}-form-item-blank`,this.contentClass,this.mergedValidationStatus&&`${t}-form-item-blank--${this.mergedValidationStatus}`],style:this.contentStyle},e),this.mergedShowFeedback?u("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${t}-form-item-feedback-wrapper`,this.feedbackClass]},u(Bn,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:s}=this;return Qe(e.feedback,c=>{var d;const{feedback:v}=this,p=c||v?u("div",{key:"__feedback__",class:`${t}-form-item-feedback__line`},c||v):this.renderExplains.length?(d=this.renderExplains)===null||d===void 0?void 0:d.map(({key:b,render:f})=>u("div",{key:b,class:`${t}-form-item-feedback__line`},f())):null;return p?s==="warning"?u("div",{key:"controlled-warning",class:`${t}-form-item-feedback ${t}-form-item-feedback--warning`},p):s==="error"?u("div",{key:"controlled-error",class:`${t}-form-item-feedback ${t}-form-item-feedback--error`},p):s==="success"?u("div",{key:"controlled-success",class:`${t}-form-item-feedback ${t}-form-item-feedback--success`},p):u("div",{key:"controlled-default",class:`${t}-form-item-feedback`},p):null})}})):null)}}),Eo=bt("n-tabs"),_a={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Oi=fe({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:_a,slots:Object,setup(e){const t=Be(Eo,null);return t||ds("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return u("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Mh=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},cs(_a,["displayDirective"])),ro=fe({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Mh,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:o,tabStyleRef:i,addTabStyleRef:a,tabClassRef:l,addTabClassRef:s,tabChangeIdRef:c,onBeforeLeaveRef:d,triggerRef:v,handleAdd:p,activateTab:b,handleClose:f}=Be(Eo);return{trigger:v,mergedClosable:T(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?o.value:m}),style:i,addStyle:a,tabClass:l,addTabClass:s,clsPrefix:t,value:n,type:r,handleClose(m){m.stopPropagation(),!e.disabled&&f(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}const{name:m}=e,C=++c.id;if(m!==n.value){const{value:g}=d;g?Promise.resolve(g(e.name,n.value)).then(S=>{S&&c.id===C&&b(m)}):b(m)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:o,tab:i,value:a,mergedClosable:l,trigger:s,$slots:{default:c}}=this,d=o??i;return u("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?u("div",{class:`${t}-tabs-tab-pad`}):null,u("div",Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},Qt({class:[`${t}-tabs-tab`,a===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:s==="click"?this.activateTab:void 0,onMouseenter:s==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),u("span",{class:`${t}-tabs-tab__label`},e?u(ht,null,u("div",{class:`${t}-tabs-tab__height-placeholder`}," "),u(Vt,{clsPrefix:t},{default:()=>u(ru,null)})):c?c():typeof d=="object"?d:vt(d??n)),l&&this.type==="card"?u(yo,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),Oh=x("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[D("segment-type",[x("tabs-rail",[X("&.transition-disabled",[x("tabs-capsule",`
 transition: none;
 `)])])]),D("top",[x("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),D("left",[x("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),D("left, right",`
 flex-direction: row;
 `,[x("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),D("right",`
 flex-direction: row-reverse;
 `,[x("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),x("tabs-bar",`
 left: 0;
 `)]),D("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[x("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),x("tabs-bar",`
 top: 0;
 `)]),x("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[x("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),x("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[D("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),X("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),D("flex",[x("tabs-nav",`
 width: 100%;
 position: relative;
 `,[x("tabs-wrapper",`
 width: 100%;
 `,[x("tabs-tab",`
 margin-right: 0;
 `)])])]),x("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[E("prefix, suffix",`
 display: flex;
 align-items: center;
 `),E("prefix","padding-right: 16px;"),E("suffix","padding-left: 16px;")]),D("top, bottom",[X(">",[x("tabs-nav",[x("tabs-nav-scroll-wrapper",[X("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),X("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),D("shadow-start",[X("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),D("shadow-end",[X("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),D("left, right",[x("tabs-nav-scroll-content",`
 flex-direction: column;
 `),X(">",[x("tabs-nav",[x("tabs-nav-scroll-wrapper",[X("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),X("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),D("shadow-start",[X("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),D("shadow-end",[X("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),x("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[X("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),X("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),x("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),x("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),x("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),x("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D("disabled",{cursor:"not-allowed"}),E("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),E("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),x("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[X("&.transition-disabled",`
 transition: none;
 `),D("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),x("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),x("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[X("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),X("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),X("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),X("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),X("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),x("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),D("line-type, bar-type",[x("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[X("&:hover",{color:"var(--n-tab-text-color-hover)"}),D("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),D("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),x("tabs-nav",[D("line-type",[D("top",[E("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-bar",`
 bottom: -1px;
 `)]),D("left",[E("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),x("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),x("tabs-bar",`
 right: -1px;
 `)]),D("right",[E("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),x("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),x("tabs-bar",`
 left: -1px;
 `)]),D("bottom",[E("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),x("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),x("tabs-bar",`
 top: -1px;
 `)]),E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),x("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),x("tabs-bar",`
 border-radius: 0;
 `)]),D("card-type",[E("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),x("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),x("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),x("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[D("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[E("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),He("disabled",[X("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),D("closable","padding-right: 8px;"),D("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),D("disabled","color: var(--n-tab-text-color-disabled);")])]),D("left, right",`
 flex-direction: column; 
 `,[E("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),x("tabs-wrapper",`
 flex-direction: column;
 `),x("tabs-tab-wrapper",`
 flex-direction: column;
 `,[x("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),D("top",[D("card-type",[x("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),E("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[D("active",`
 border-bottom: 1px solid #0000;
 `)]),x("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),x("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),D("left",[D("card-type",[x("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),E("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[D("active",`
 border-right: 1px solid #0000;
 `)]),x("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),x("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),D("right",[D("card-type",[x("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),E("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[D("active",`
 border-left: 1px solid #0000;
 `)]),x("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),x("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),D("bottom",[D("card-type",[x("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),E("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),x("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[D("active",`
 border-top: 1px solid #0000;
 `)]),x("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),x("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Br=nu,Rh=Object.assign(Object.assign({},Ie.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ih=fe({name:"Tabs",props:Rh,slots:Object,setup(e,{slots:t}){var n,r,o,i;const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=nt(e),s=Ie("Tabs","-tabs",Oh,us,e,a),c=B(null),d=B(null),v=B(null),p=B(null),b=B(null),f=B(null),m=B(!0),C=B(!0),g=rr(e,["labelSize","size"]),S=rr(e,["activeName","value"]),M=B((r=(n=S.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&r!==void 0?r:t.default?(i=(o=yr(t.default())[0])===null||o===void 0?void 0:o.props)===null||i===void 0?void 0:i.name:null),y=Zt(S,M),k={id:0},_=T(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Ce(y,()=>{k.id=0,Q(),I()});function N(){var K;const{value:U}=y;return U===null?null:(K=c.value)===null||K===void 0?void 0:K.querySelector(`[data-name="${U}"]`)}function G(K){if(e.type==="card")return;const{value:U}=d;if(!U)return;const oe=U.style.opacity==="0";if(K){const le=`${a.value}-tabs-bar--disabled`,{barWidth:h,placement:P}=e;if(K.dataset.disabled==="true"?U.classList.add(le):U.classList.remove(le),["top","bottom"].includes(P)){if(q(["top","maxHeight","height"]),typeof h=="number"&&K.offsetWidth>=h){const ee=Math.floor((K.offsetWidth-h)/2)+K.offsetLeft;U.style.left=`${ee}px`,U.style.maxWidth=`${h}px`}else U.style.left=`${K.offsetLeft}px`,U.style.maxWidth=`${K.offsetWidth}px`;U.style.width="8192px",oe&&(U.style.transition="none"),U.offsetWidth,oe&&(U.style.transition="",U.style.opacity="1")}else{if(q(["left","maxWidth","width"]),typeof h=="number"&&K.offsetHeight>=h){const ee=Math.floor((K.offsetHeight-h)/2)+K.offsetTop;U.style.top=`${ee}px`,U.style.maxHeight=`${h}px`}else U.style.top=`${K.offsetTop}px`,U.style.maxHeight=`${K.offsetHeight}px`;U.style.height="8192px",oe&&(U.style.transition="none"),U.offsetHeight,oe&&(U.style.transition="",U.style.opacity="1")}}}function j(){if(e.type==="card")return;const{value:K}=d;K&&(K.style.opacity="0")}function q(K){const{value:U}=d;if(U)for(const oe of K)U.style[oe]=""}function Q(){if(e.type==="card")return;const K=N();K?G(K):j()}function I(){var K;const U=(K=b.value)===null||K===void 0?void 0:K.$el;if(!U)return;const oe=N();if(!oe)return;const{scrollLeft:le,offsetWidth:h}=U,{offsetLeft:P,offsetWidth:ee}=oe;le>P?U.scrollTo({top:0,left:P,behavior:"smooth"}):P+ee>le+h&&U.scrollTo({top:0,left:P+ee-h,behavior:"smooth"})}const O=B(null);let $=0,R=null;function J(K){const U=O.value;if(U){$=K.getBoundingClientRect().height;const oe=`${$}px`,le=()=>{U.style.height=oe,U.style.maxHeight=oe};R?(le(),R(),R=null):R=le}}function V(K){const U=O.value;if(U){const oe=K.getBoundingClientRect().height,le=()=>{document.body.offsetHeight,U.style.maxHeight=`${oe}px`,U.style.height=`${Math.max($,oe)}px`};R?(R(),R=null,le()):R=le}}function Z(){const K=O.value;if(K){K.style.maxHeight="",K.style.height="";const{paneWrapperStyle:U}=e;if(typeof U=="string")K.style.cssText=U;else if(U){const{maxHeight:oe,height:le}=U;oe!==void 0&&(K.style.maxHeight=oe),le!==void 0&&(K.style.height=le)}}}const re={value:[]},ie=B("next");function ve(K){const U=y.value;let oe="next";for(const le of re.value){if(le===U)break;if(le===K){oe="prev";break}}ie.value=oe,L(K)}function L(K){const{onActiveNameChange:U,onUpdateValue:oe,"onUpdate:value":le}=e;U&&ye(U,K),oe&&ye(oe,K),le&&ye(le,K),M.value=K}function Y(K){const{onClose:U}=e;U&&ye(U,K)}function de(){const{value:K}=d;if(!K)return;const U="transition-disabled";K.classList.add(U),Q(),K.classList.remove(U)}const H=B(null);function A({transitionDisabled:K}){const U=c.value;if(!U)return;K&&U.classList.add("transition-disabled");const oe=N();oe&&H.value&&(H.value.style.width=`${oe.offsetWidth}px`,H.value.style.height=`${oe.offsetHeight}px`,H.value.style.transform=`translateX(${oe.offsetLeft-Qn(getComputedStyle(U).paddingLeft)}px)`,K&&H.value.offsetWidth),K&&U.classList.remove("transition-disabled")}Ce([y],()=>{e.type==="segment"&&Mt(()=>{A({transitionDisabled:!1})})}),pt(()=>{e.type==="segment"&&A({transitionDisabled:!0})});let F=0;function we(K){var U;if(K.contentRect.width===0&&K.contentRect.height===0||F===K.contentRect.width)return;F=K.contentRect.width;const{type:oe}=e;if((oe==="line"||oe==="bar")&&de(),oe!=="segment"){const{placement:le}=e;Se((le==="top"||le==="bottom"?(U=b.value)===null||U===void 0?void 0:U.$el:f.value)||null)}}const $e=Br(we,64);Ce([()=>e.justifyContent,()=>e.size],()=>{Mt(()=>{const{type:K}=e;(K==="line"||K==="bar")&&de()})});const Ae=B(!1);function Ee(K){var U;const{target:oe,contentRect:{width:le,height:h}}=K,P=oe.parentElement.parentElement.offsetWidth,ee=oe.parentElement.parentElement.offsetHeight,{placement:Te}=e;if(!Ae.value)Te==="top"||Te==="bottom"?P<le&&(Ae.value=!0):ee<h&&(Ae.value=!0);else{const{value:Pe}=p;if(!Pe)return;Te==="top"||Te==="bottom"?P-le>Pe.$el.offsetWidth&&(Ae.value=!1):ee-h>Pe.$el.offsetHeight&&(Ae.value=!1)}Se(((U=b.value)===null||U===void 0?void 0:U.$el)||null)}const ke=Br(Ee,64);function De(){const{onAdd:K}=e;K&&K(),Mt(()=>{const U=N(),{value:oe}=b;!U||!oe||oe.scrollTo({left:U.offsetLeft,top:0,behavior:"smooth"})})}function Se(K){if(!K)return;const{placement:U}=e;if(U==="top"||U==="bottom"){const{scrollLeft:oe,scrollWidth:le,offsetWidth:h}=K;m.value=oe<=0,C.value=oe+h>=le}else{const{scrollTop:oe,scrollHeight:le,offsetHeight:h}=K;m.value=oe<=0,C.value=oe+h>=le}}const Xe=Br(K=>{Se(K.target)},64);Ke(Eo,{triggerRef:ue(e,"trigger"),tabStyleRef:ue(e,"tabStyle"),tabClassRef:ue(e,"tabClass"),addTabStyleRef:ue(e,"addTabStyle"),addTabClassRef:ue(e,"addTabClass"),paneClassRef:ue(e,"paneClass"),paneStyleRef:ue(e,"paneStyle"),mergedClsPrefixRef:a,typeRef:ue(e,"type"),closableRef:ue(e,"closable"),valueRef:y,tabChangeIdRef:k,onBeforeLeaveRef:ue(e,"onBeforeLeave"),activateTab:ve,handleClose:Y,handleAdd:De}),Ji(()=>{Q(),I()}),pn(()=>{const{value:K}=v;if(!K)return;const{value:U}=a,oe=`${U}-tabs-nav-scroll-wrapper--shadow-start`,le=`${U}-tabs-nav-scroll-wrapper--shadow-end`;m.value?K.classList.remove(oe):K.classList.add(oe),C.value?K.classList.remove(le):K.classList.add(le)});const ot={syncBarPosition:()=>{Q()}},it=()=>{A({transitionDisabled:!0})},et=T(()=>{const{value:K}=g,{type:U}=e,oe={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[U],le=`${K}${oe}`,{self:{barColor:h,closeIconColor:P,closeIconColorHover:ee,closeIconColorPressed:Te,tabColor:Pe,tabBorderColor:It,paneTextColor:$t,tabFontWeight:zt,tabBorderRadius:jt,tabFontWeightActive:Ht,colorSegment:At,fontWeightStrong:ct,tabColorSegment:z,closeSize:te,closeIconSize:he,closeColorHover:Me,closeColorPressed:_e,closeBorderRadius:xe,[ae("panePadding",K)]:ge,[ae("tabPadding",le)]:Ve,[ae("tabPaddingVertical",le)]:Ze,[ae("tabGap",le)]:yn,[ae("tabGap",`${le}Vertical`)]:nn,[ae("tabTextColor",U)]:wn,[ae("tabTextColorActive",U)]:Et,[ae("tabTextColorHover",U)]:Tt,[ae("tabTextColorDisabled",U)]:xn,[ae("tabFontSize",K)]:Cn},common:{cubicBezierEaseInOut:rn}}=s.value;return{"--n-bezier":rn,"--n-color-segment":At,"--n-bar-color":h,"--n-tab-font-size":Cn,"--n-tab-text-color":wn,"--n-tab-text-color-active":Et,"--n-tab-text-color-disabled":xn,"--n-tab-text-color-hover":Tt,"--n-pane-text-color":$t,"--n-tab-border-color":It,"--n-tab-border-radius":jt,"--n-close-size":te,"--n-close-icon-size":he,"--n-close-color-hover":Me,"--n-close-color-pressed":_e,"--n-close-border-radius":xe,"--n-close-icon-color":P,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":Te,"--n-tab-color":Pe,"--n-tab-font-weight":zt,"--n-tab-font-weight-active":Ht,"--n-tab-padding":Ve,"--n-tab-padding-vertical":Ze,"--n-tab-gap":yn,"--n-tab-gap-vertical":nn,"--n-pane-padding-left":ft(ge,"left"),"--n-pane-padding-right":ft(ge,"right"),"--n-pane-padding-top":ft(ge,"top"),"--n-pane-padding-bottom":ft(ge,"bottom"),"--n-font-weight-strong":ct,"--n-tab-color-segment":z}}),Je=l?rt("tabs",T(()=>`${g.value[0]}${e.type[0]}`),et,e):void 0;return Object.assign({mergedClsPrefix:a,mergedValue:y,renderedNames:new Set,segmentCapsuleElRef:H,tabsPaneWrapperRef:O,tabsElRef:c,barElRef:d,addTabInstRef:p,xScrollInstRef:b,scrollWrapperElRef:v,addTabFixed:Ae,tabWrapperStyle:_,handleNavResize:$e,mergedSize:g,handleScroll:Xe,handleTabsResize:ke,cssVars:l?void 0:et,themeClass:Je?.themeClass,animationDirection:ie,renderNameListRef:re,yScrollElRef:f,handleSegmentResize:it,onAnimationBeforeLeave:J,onAnimationEnter:V,onAnimationAfterEnter:Z,onRender:Je?.onRender},ot)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:o,mergedSize:i,renderNameListRef:a,onRender:l,paneWrapperClass:s,paneWrapperStyle:c,$slots:{default:d,prefix:v,suffix:p}}=this;l?.();const b=d?yr(d()).filter(k=>k.type.__TAB_PANE__===!0):[],f=d?yr(d()).filter(k=>k.type.__TAB__===!0):[],m=!f.length,C=t==="card",g=t==="segment",S=!C&&!g&&this.justifyContent;a.value=[];const M=()=>{const k=u("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:u("div",{class:`${e}-tabs-scroll-padding`,style:n==="top"||n==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),m?b.map((_,N)=>(a.value.push(_.props.name),Dr(u(ro,Object.assign({},_.props,{internalCreatedByPane:!0,internalLeftPadded:N!==0&&(!S||S==="center"||S==="start"||S==="end")}),_.children?{default:_.children.tab}:void 0)))):f.map((_,N)=>(a.value.push(_.props.name),Dr(N!==0&&!S?$i(_):_))),!r&&o&&C?Ii(o,(m?b.length:f.length)!==0):null,S?null:u("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return u("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},C&&o?u(fn,{onResize:this.handleTabsResize},{default:()=>k}):k,C?u("div",{class:`${e}-tabs-pad`}):null,C?null:u("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},y=g?"top":n;return u("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,S&&`${e}-tabs--flex`,`${e}-tabs--${y}`],style:this.cssVars},u("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${y}`,`${e}-tabs-nav`]},Qe(v,k=>k&&u("div",{class:`${e}-tabs-nav__prefix`},k)),g?u(fn,{onResize:this.handleSegmentResize},{default:()=>u("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},u("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},u("div",{class:`${e}-tabs-wrapper`},u("div",{class:`${e}-tabs-tab`}))),m?b.map((k,_)=>(a.value.push(k.props.name),u(ro,Object.assign({},k.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0}),k.children?{default:k.children.tab}:void 0))):f.map((k,_)=>(a.value.push(k.props.name),_===0?k:$i(k))))}):u(fn,{onResize:this.handleNavResize},{default:()=>u("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(y)?u(Fs,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:M}):u("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},M()))}),r&&o&&C?Ii(o,!0):null,Qe(p,k=>k&&u("div",{class:`${e}-tabs-nav__suffix`},k))),m&&(this.animated&&(y==="top"||y==="bottom")?u("div",{ref:"tabsPaneWrapperRef",style:c,class:[`${e}-tabs-pane-wrapper`,s]},Ri(b,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ri(b,this.mergedValue,this.renderedNames)))}});function Ri(e,t,n,r,o,i,a){const l=[];return e.forEach(s=>{const{name:c,displayDirective:d,"display-directive":v}=s.props,p=f=>d===f||v===f,b=t===c;if(s.key!==void 0&&(s.key=c),b||p("show")||p("show:lazy")&&n.has(c)){n.has(c)||n.add(c);const f=!p("if");l.push(f?gn(s,[[go,b]]):s)}}),a?u(fs,{name:`${a}-transition`,onBeforeLeave:r,onEnter:o,onAfterEnter:i},{default:()=>l}):l}function Ii(e,t){return u(ro,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function $i(e){const t=Ki(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Dr(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const $h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Bv=fe({name:"AddOutline",render:function(t,n){return Le(),Ge("svg",$h,n[0]||(n[0]=[se("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),se("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)]))}}),zh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Dv=fe({name:"CopyOutline",render:function(t,n){return Le(),Ge("svg",zh,n[0]||(n[0]=[se("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),se("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Ah={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Eh=fe({name:"MoonOutline",render:function(t,n){return Le(),Ge("svg",Ah,n[0]||(n[0]=[se("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Th={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Lv=fe({name:"RefreshOutline",render:function(t,n){return Le(),Ge("svg",Th,n[0]||(n[0]=[se("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),se("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1)]))}}),Fh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Nv=fe({name:"SendOutline",render:function(t,n){return Le(),Ge("svg",Fh,n[0]||(n[0]=[se("path",{d:"M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Bh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wv=fe({name:"SettingsOutline",render:function(t,n){return Le(),Ge("svg",Bh,n[0]||(n[0]=[se("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Dh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Lh=fe({name:"SunnyOutline",render:function(t,n){return Le(),Ge("svg",Dh,n[0]||(n[0]=[Yi('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9)]))}}),Nh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Vv=fe({name:"TrashOutline",render:function(t,n){return Le(),Ge("svg",Nh,n[0]||(n[0]=[Yi('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>',6)]))}}),Zn="ai-canvas-projects",Wh=3e4;let Kn=0,Un=!1,qn="";const Ma=()=>`project_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,We=B([]),Vh=B(null);T(()=>We.value.find(e=>e.id===Vh.value)||null);const Oa=()=>{try{const e=localStorage.getItem(Zn);if(e){const t=JSON.parse(e);We.value=t.map(n=>({...n,createdAt:new Date(n.createdAt),updatedAt:new Date(n.updatedAt)}))}}catch(e){console.error("Failed to load projects:",e),We.value=[]}},oo=e=>typeof e=="string"?/^(data:(?:image|video)\/|blob:)/i.test(e)?void 0:e:Array.isArray(e)?e.map(oo).filter(t=>t!==void 0):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,n])=>[t,oo(n)]).filter(([,t])=>t!==void 0)):e,jh=e=>{if(!e.data)return e;const t=oo(e.data);return t.base64&&delete t.base64,t.url?.startsWith?.("data:")&&delete t.url,t.maskData&&delete t.maskData,delete t.loading,delete t.progress,delete t.error,{...e,data:t}},Hh=e=>({...e,canvasData:e.canvasData?{...e.canvasData,nodes:e.canvasData.nodes?.map(jh)||[]}:e.canvasData,thumbnail:e.thumbnail?.startsWith?.("data:")?"":e.thumbnail}),tn=()=>{if(Date.now()<Kn)return!1;const e=We.value.map(Hh),t=JSON.stringify(e);if(t===qn)return!0;try{return localStorage.setItem(Zn,t),qn=t,Un=!1,!0}catch(n){if(n.name==="QuotaExceededError"){Kn=Date.now()+Wh,Un||console.warn("localStorage quota exceeded, attempting aggressive cleanup...");const r=e.map((o,i)=>({...o,thumbnail:"",canvasData:i>10?{nodes:[],edges:[],viewport:o.canvasData?.viewport}:o.canvasData}));try{localStorage.setItem(Zn,JSON.stringify(r)),qn=JSON.stringify(r),Kn=0,console.log("Saved with aggressive cleanup"),window.$message?.warning("存储空间不足，已自动清理部分数据")}catch(o){console.error("Still failed after aggressive cleanup:",o);try{const i=r.slice(0,5);localStorage.setItem(Zn,JSON.stringify(i)),qn=JSON.stringify(i),Kn=0,We.value=We.value.slice(0,5),window.$message?.warning("存储空间严重不足，已保留最近 5 个项目")}catch(i){Un||(console.error("Cannot save even minimal data:",i),window.$message?.error("存储空间不足，已暂停后台保存 30 秒以保持画布流畅"),Un=!0)}}}else console.error("Failed to save projects:",n)}return!1},Ra=(e="未命名项目")=>{const t=Ma(),n=new Date,r={id:t,name:e,thumbnail:"",createdAt:n,updatedAt:n,canvasData:{nodes:[],edges:[],viewport:{x:100,y:50,zoom:.8}}};return We.value=[r,...We.value],tn(),t},Kh=(e,t)=>{const n=We.value.findIndex(o=>o.id===e);if(n===-1)return!1;We.value[n]={...We.value[n],...t,updatedAt:new Date};const[r]=We.value.splice(n,1);return We.value=[r,...We.value],tn(),!0},jv=(e,t)=>{const n=We.value.find(r=>r.id===e);if(!n)return!1;if(n.canvasData={...n.canvasData,...t},n.updatedAt=new Date,t.nodes){const r=t.nodes.filter(o=>(o.type==="image"||o.type==="video")&&o.data?.url).sort((o,i)=>{const a=o.data?.updatedAt||o.data?.createdAt||0;return(i.data?.updatedAt||i.data?.createdAt||0)-a});if(r.length>0){const o=r[0];o.type==="video"?n.thumbnail=o.data.thumbnail||o.data.url:n.thumbnail=o.data.url}}return tn(),!0},Hv=e=>We.value.find(n=>n.id===e)?.canvasData||null,Uh=e=>{We.value=We.value.filter(t=>t.id!==e),tn()},Kv=e=>{const t=We.value.find(i=>i.id===e);if(!t)return null;const n=Ma(),r=new Date,o={...JSON.parse(JSON.stringify(t)),id:n,name:`${t.name} (副本)`,createdAt:r,updatedAt:r};return We.value=[o,...We.value],tn(),n},Uv=(e,t)=>Kh(e,{name:t}),qv=()=>{if(Oa(),We.value.length===0){const e=Ra("示例项目"),t=We.value.find(n=>n.id===e);t&&(t.canvasData={nodes:[{id:"node_0",type:"text",position:{x:150,y:150},data:{content:"一只金毛寻回犬在草地上奔跑，摇着尾巴，脸上带着快乐的表情。它的毛发在阳光下闪耀，眼神充满了对自由的渴望，全身散发着阳光、友善的气息。",label:"文本输入"}},{id:"node_1",type:"imageConfig",position:{x:500,y:150},data:{prompt:"",model:"doubao-seedream-4-5-251128",size:"512x512",label:"文生图"}}],edges:[{id:"edge_node_0_node_1",source:"node_0",target:"node_1",sourceHandle:"right",targetHandle:"left"}],viewport:{x:100,y:50,zoom:.8}},tn())}};typeof window<"u"&&(window.__aiCanvasProjects={projects:We,loadProjects:Oa,saveProjects:tn,createProject:Ra,deleteProject:Uh});const zi=[{label:"21:9",key:"3024x1296"},{label:"16:9",key:"2560x1440"},{label:"4:3",key:"2304x1728"},{label:"3:2",key:"2496x1664"},{label:"1:1",key:"2048x2048"},{label:"2:3",key:"1664x2496"},{label:"3:4",key:"1728x2304"},{label:"9:16",key:"1440x2560"},{label:"9:21",key:"1296x3024"}],qh=[{label:"21:9",key:"6198x2656"},{label:"16:9",key:"5404x3040"},{label:"4:3",key:"4694x3520"},{label:"3:2",key:"4992x3328"},{label:"1:1",key:"4096x4096"},{label:"2:3",key:"3328x4992"},{label:"3:4",key:"3520x4694"},{label:"9:16",key:"3040x5404"},{label:"9:21",key:"2656x6198"}],Yh=[{label:"标准画质",key:"standard"},{label:"4K 高清",key:"4k"}],Ai=[{label:"16:9",key:"16x9"},{label:"4:3",key:"4x3"},{label:"3:2",key:"3x2"},{label:"1:1",key:"1x1"},{label:"2:3",key:"2x3"},{label:"3:4",key:"3x4"},{label:"9:16",key:"9x16"}],io=[{label:"FLUX（Pollinations 免费免密·带水印）",key:"pollinations/flux",provider:["chatfire"],sizes:["1024x1024","1536x1024","1024x1536"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"AI Horde SDXL（免费免注册·无水印）",key:"aihorde/sdxl-text2img",provider:["chatfire"],sizes:["512x512","768x768","1024x1024"],defaultParams:{size:"512x512",quality:"standard",style:"vivid"}},{label:"Kontext（Pollinations 免费额度）",key:"pollinations/kontext",provider:["chatfire"],sizes:["1024x1024","1536x1024","1024x1536"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"AI Horde SDXL（免费免注册图生图）",key:"aihorde/sdxl-img2img",provider:["chatfire"],sizes:["512x512","768x768","1024x1024"],defaultParams:{size:"512x512",quality:"standard",style:"vivid"}},{label:"FLUX.1 Schnell（HF 免费额度）",key:"black-forest-labs/FLUX.1-schnell",provider:["huggingface"],sizes:["1024x1024"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"Stable Diffusion XL（HF 免费额度）",key:"stabilityai/stable-diffusion-xl-base-1.0",provider:["huggingface"],sizes:["1024x1024"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"Nano Banana 2",key:"nano-banana-2",provider:["chatfire"],sizes:Ai.map(e=>e.key),defaultParams:{size:"1x1",quality:"standard",style:"vivid"}},{label:"Nano Banana Pro",key:"nano-banana-pro",provider:["chatfire"],sizes:Ai.map(e=>e.key),defaultParams:{size:"1x1",quality:"standard",style:"vivid"}},{label:"豆包 Seedream 4.5",key:"doubao-seedream-4-5-251128",provider:["chatfire"],sizes:zi.map(e=>e.key),qualities:Yh,getSizesByQuality:e=>e==="4k"?qh:zi,defaultParams:{size:"2048x2048",quality:"standard",style:"vivid"}},{label:"Nano Banana",key:"nano-banana",provider:["chatfire"],tips:"尺寸写在提示词中: 尺寸 9:16",sizes:[],defaultParams:{quality:"standard",style:"vivid"}}],Gh=[{label:"16:9 (横版)",key:"16x9"},{label:"4:3",key:"4x3"},{label:"1:1 (方形)",key:"1x1"},{label:"3:4",key:"3x4"},{label:"9:16 (竖版)",key:"9x16"}],ao=[{label:"Seedance 1.5 Pro (图文视频)",key:"doubao-seedance-1-5-pro-251215",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:10,resolution:"1080p"}},{label:"Seedance 1.0 Lite (文生视频)",key:"doubao-seedance-1-0-lite-t2v-250428",provider:["chatfire"],type:"t2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"720p",defaultParams:{ratio:"16:9",duration:5,resolution:"720p"}},{label:"Seedance 1.0 Lite (图生视频)",key:"doubao-seedance-1-0-lite-i2v-250428",provider:["chatfire"],type:"i2v",ratios:["16:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"720p",defaultParams:{ratio:"16:9",duration:5,resolution:"720p"}},{label:"Seedance 1.0 Pro (图文视频)",key:"doubao-seedance-1-0-pro-250528",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9","16:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:5,resolution:"1080p"}},{label:"Seedance 1.0 Pro Fast (图文视频)",key:"doubao-seedance-1-0-pro-fast-251015",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:5,resolution:"1080p"}}],lo=[{label:"OpenRouter Free Router",key:"openrouter/free",provider:["openrouter"]},{label:"DeepSeek Chat V3 Free",key:"deepseek/deepseek-chat-v3-0324:free",provider:["openrouter"]},{label:"Qwen3 235B Free",key:"qwen/qwen3-235b-a22b:free",provider:["openrouter"]},{label:"Gemini Flash（免费额度）",key:"gemini-3.5-flash",provider:["gemini"]},{label:"GPT OSS 20B（HF 免费额度）",key:"openai/gpt-oss-20b",provider:["huggingface"]},{label:"GPT-4o Mini",key:"gpt-4o-mini",provider:["openai"]},{label:"GPT-4o",key:"gpt-4o",provider:["openai"]},{label:"GPT-5.2",key:"gpt-5.2",provider:["openai"]},{label:"DeepSeek Chat",key:"deepseek-chat",provider:["openai","chatfire"]},{label:"豆包 Seed Flash",key:"doubao-seed-1-6-flash-250615",provider:["chatfire"]},{label:"Gemini 3 Pro",key:"gemini-3-pro",provider:["openai"]}],Yv=Gh,Gv=[{label:"5 秒",key:5},{label:"10 秒",key:10}],Lr="nano-banana-pro",Nr="doubao-seedance-1-5-pro-251215",Wr="gpt-4o-mini",Xv=e=>[...io,...ao,...lo].find(n=>n.key===e),vn={chatfire:{label:"OpenAI 兼容接口",defaultBaseUrl:"https://api.chatfire.site",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/video/generations",videoQuery:"/v1/video/task/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),e.image&&(t.image=e.image),t},video:e=>{const t=e.model||"";if(t.includes("seedance")){const r=[];let o=e.prompt||"";return e.resolution&&(o+=` --resolution ${e.resolution}`),e.size&&(o+=` --ratio ${e.size}`),e.seconds&&(o+=` --dur ${e.seconds}`),o+=" --fps 24",o+=` --wm ${e.wm!==!1?"true":"false"}`,e.seed!==void 0&&(o+=` --seed ${e.seed}`),o+=` --cf ${e.cf===!0?"true":"false"}`,r.push({type:"text",text:o}),e.first_frame_image&&r.push({type:"image_url",image_url:{url:e.first_frame_image}}),{model:t,content:r,generate_audio:e.generateAudio!==!1}}if(t.includes("kling")){const r={"16:9":"16:9","9:16":"9:16","1:1":"1:1","4:3":"4:3","3:4":"3:4"},o={model_name:t,mode:"std",prompt:e.prompt||"",aspect_ratio:r[e.size]||"16:9",duration:e.seconds||5,negative_prompt:"",cfg_scale:.5};return e.first_frame_image&&(o.image=e.first_frame_image),o}const n={model:e.model,prompt:e.prompt||""};return e.first_frame_image&&(n.first_frame_image=e.first_frame_image),e.last_frame_image&&(n.last_frame_image=e.last_frame_image),e.size&&(n.size=e.size),e.seconds&&(n.seconds=e.seconds),n}},responseAdapter:{chat:e=>e.choices&&e.choices.length>0&&e.choices[0].message?.content||"",image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))},video:e=>({url:e.data?.url||e.url||e.data?.[0]?.url||"",...e})}},openai:{label:"OpenAI",defaultBaseUrl:"https://api.chatfire.cn",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),e.image&&(t.image=e.image),t},video:e=>{const t={model:e.model,prompt:e.prompt||""};return e.first_frame_image&&(t.first_frame_image=e.first_frame_image),e.last_frame_image&&(t.last_frame_image=e.last_frame_image),e.size&&(t.size=e.size),e.seconds&&(t.seconds=e.seconds),t}},responseAdapter:{chat:e=>e.choices&&e.choices.length>0&&e.choices[0].message?.content||"",image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))},video:e=>({url:e.data?.url||e.url||e.data?.[0]?.url||"",...e})}},openrouter:{label:"OpenRouter 免费模型",defaultBaseUrl:"https://openrouter.ai/api",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),t}},responseAdapter:{chat:e=>e.choices?.[0]?.message?.content||"",image:e=>{const t=e.data||e.images||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||n.image_url||"",revisedPrompt:n.revised_prompt||""}))}}},gemini:{label:"Gemini 免费额度",defaultBaseUrl:"https://generativelanguage.googleapis.com/v1beta/openai",endpoints:{chat:"/chat/completions",image:"/images/generations",video:"/videos",videoQuery:"/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>({model:e.model,prompt:e.prompt,size:e.size||"1024x1024"})},responseAdapter:{chat:e=>e.choices?.[0]?.message?.content||"",image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))}}},huggingface:{label:"Hugging Face 免费额度",defaultBaseUrl:"https://router.huggingface.co",endpoints:{chat:"/v1/chat/completions",image:e=>`/hf-inference/models/${String(e||"").split("/").map(encodeURIComponent).join("/")}`,video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>({model:e.model,messages:e.messages,stream:e.stream}),image:e=>({inputs:e.prompt,parameters:{width:1024,height:1024,num_inference_steps:4}})},responseAdapter:{chat:e=>e.choices?.[0]?.message?.content||"",image:e=>e instanceof Blob?[{url:URL.createObjectURL(e),revisedPrompt:""}]:Array.isArray(e)?e.map(t=>({url:t.url||t.image||"",revisedPrompt:""})):[{url:e.url||e.image||"",revisedPrompt:""}]},imageResponseType:"blob"},default:"chatfire"},Xh=()=>Object.entries(vn).filter(([e])=>e!=="default").map(([e,t])=>({key:e,label:t.label})),Ei=()=>vn.default,Jh=e=>un(e).defaultBaseUrl||"",un=e=>vn[e]||vn[vn.default],pe={PROVIDER:"api-provider",API_KEY_STORAGE_MODE:"api-key-storage-mode",CUSTOM_CHAT_MODELS:"custom-chat-models",CUSTOM_IMAGE_MODELS:"custom-image-models",CUSTOM_VIDEO_MODELS:"custom-video-models",SELECTED_CHAT_MODEL:"selected-chat-model",SELECTED_IMAGE_MODEL:"selected-image-model",SELECTED_VIDEO_MODEL:"selected-video-model",CUSTOM_CHAT_MODELS_BY_PROVIDER:"custom-chat-models-by-provider",CUSTOM_IMAGE_MODELS_BY_PROVIDER:"custom-image-models-by-provider",CUSTOM_VIDEO_MODELS_BY_PROVIDER:"custom-video-models-by-provider",API_KEYS_BY_PROVIDER:"api-keys-by-provider",SESSION_API_KEYS_BY_PROVIDER:"session-api-keys-by-provider",BASE_URLS_BY_PROVIDER:"base-urls-by-provider"},Rn=(e,t="")=>{try{return localStorage.getItem(e)||t}catch{return t}},dn=(e,t)=>{try{t?localStorage.setItem(e,t):localStorage.removeItem(e)}catch{}},St=e=>{try{localStorage.removeItem(e)}catch{}},Lt=(e,t=[])=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Pt=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}},Zh=(e,t=[])=>{try{const n=sessionStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Ti=(e,t)=>{try{sessionStorage.setItem(e,JSON.stringify(t))}catch{}},In=e=>{try{sessionStorage.removeItem(e)}catch{}},Yn=e=>e&&Object.values(e).some(Boolean),cn=(e,t)=>e.provider?e.provider.includes(t):!0,Qh=hs("model",()=>{const e=B(Rn(pe.PROVIDER)||Ei()),t=B(Rn(pe.API_KEY_STORAGE_MODE,"session")),n=T(()=>Xh()),r=T(()=>un(e.value)),o=T(()=>r.value.label||e.value),i=h=>{vn[h]&&(e.value=h,dn(pe.PROVIDER,h))},a=()=>{e.value=Ei(),St(pe.PROVIDER)},l=(h,P)=>{const ee=r.value;return ee.requestAdapter&&ee.requestAdapter[h]?ee.requestAdapter[h](P):P},s=(h,P)=>{const ee=r.value;return ee.responseAdapter&&ee.responseAdapter[h]?ee.responseAdapter[h](P):P},c=B(Lt(pe.CUSTOM_CHAT_MODELS,[])),d=B(Lt(pe.CUSTOM_IMAGE_MODELS,[])),v=B(Lt(pe.CUSTOM_VIDEO_MODELS,[])),p=B(Lt(pe.CUSTOM_CHAT_MODELS_BY_PROVIDER,{})),b=B(Lt(pe.CUSTOM_IMAGE_MODELS_BY_PROVIDER,{})),f=B(Lt(pe.CUSTOM_VIDEO_MODELS_BY_PROVIDER,{})),m=B(Rn(pe.SELECTED_CHAT_MODEL,Wr)),C=B(Rn(pe.SELECTED_IMAGE_MODEL,Lr)),g=B(Rn(pe.SELECTED_VIDEO_MODEL,Nr)),S=B(Zh(pe.SESSION_API_KEYS_BY_PROVIDER,null)||Lt(pe.API_KEYS_BY_PROVIDER,{})),M=B(Lt(pe.BASE_URLS_BY_PROVIDER,{})),y=T(()=>S.value[e.value]||""),k=T(()=>M.value[e.value]||Jh(e.value)),_=(h,P)=>{S.value[h]=P},N=h=>{const P=h==="persistent"?"persistent":"session";t.value=P,dn(pe.API_KEY_STORAGE_MODE,P)},G=(h,P)=>{M.value[h]=P},j=h=>{delete S.value[h],delete M.value[h]},q=()=>{St("apiKey"),St(pe.API_KEYS_BY_PROVIDER),In(pe.SESSION_API_KEYS_BY_PROVIDER),S.value={}},Q=T(()=>[...lo.map(h=>({...h,isCustom:!1})),...c.value.map(h=>({label:h.label||h.key,key:h.key,isCustom:!0})),...(p.value[e.value]||[]).map(h=>({label:h.label||h.key,key:h.key,isCustom:!0,provider:[e.value]}))]),I=T(()=>[...io.map(P=>({...P,isCustom:!1})),...d.value.map(P=>({label:P.label||P.key,key:P.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"}})),...(b.value[e.value]||[]).map(P=>({label:P.label||P.key,key:P.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"},provider:[e.value]}))].filter((P,ee,Te)=>Te.findIndex(Pe=>Pe.key===P.key)===ee)),O=T(()=>[...ao.map(h=>({...h,isCustom:!1})),...v.value.map(h=>({label:h.label||h.key,key:h.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5}})),...(f.value[e.value]||[]).map(h=>({label:h.label||h.key,key:h.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5},provider:[e.value]}))]),$=T(()=>Q.value.filter(h=>cn(h,e.value))),R=T(()=>I.value.filter(h=>cn(h,e.value))),J=T(()=>O.value.filter(h=>cn(h,e.value))),V=T(()=>I.value.map(h=>({label:h.label,key:h.key}))),Z=T(()=>O.value.map(h=>({label:h.label,key:h.key}))),re=T(()=>Q.value.map(h=>({label:h.label,key:h.key}))),ie=T(()=>R.value.map(h=>({label:h.label,key:h.key}))),ve=T(()=>J.value.map(h=>({label:h.label,key:h.key}))),L=T(()=>$.value.map(h=>({label:h.label,key:h.key}))),Y=(h,P="")=>!h||c.value.some(ee=>ee.key===h)?!1:(c.value.push({key:h,label:P||h}),!0),de=(h,P="")=>!h||d.value.some(ee=>ee.key===h)?!1:(d.value.push({key:h,label:P||h}),!0),H=(h,P="")=>!h||v.value.some(ee=>ee.key===h)?!1:(v.value.push({key:h,label:P||h}),!0),A=h=>{const P=c.value.findIndex(ee=>ee.key===h);return P>-1?(c.value.splice(P,1),m.value===h&&(m.value=Wr),!0):!1},F=h=>{const P=d.value.findIndex(ee=>ee.key===h);return P>-1?(d.value.splice(P,1),C.value===h&&(C.value=Lr),!0):!1},we=h=>{const P=v.value.findIndex(ee=>ee.key===h);return P>-1?(v.value.splice(P,1),g.value===h&&(g.value=Nr),!0):!1},$e=h=>Q.value.find(P=>P.key===h),Ae=h=>I.value.find(P=>P.key===h),Ee=h=>O.value.find(P=>P.key===h),ke=(h="")=>{const P=r.value.endpoints?.image||"/images/generations",ee=typeof P=="function"?P(h):P;return`${k.value}${ee}`},De=()=>{const h=r.value.endpoints?.video||"/videos";return`${k.value}${h}`},Se=()=>{const h=r.value;let P=h.endpoints?.videoQuery||h.endpoints?.video||"/videos";return`${k.value}${P}`},Xe=()=>{const h=r.value?.endpoints?.chat||"/chat/completions";return`${k.value}${h}`},ot=h=>{const P=[...lo.filter(Pe=>cn(Pe,h)).map(Pe=>({...Pe,isCustom:!1})),...(p.value[h]||[]).map(Pe=>({label:Pe.label||Pe.key,key:Pe.key,isCustom:!0,provider:[h]}))],ee=[...io.filter(Pe=>cn(Pe,h)).map(Pe=>({...Pe,isCustom:!1})),...(b.value[h]||[]).map(Pe=>({label:Pe.label||Pe.key,key:Pe.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"},provider:[h]}))],Te=[...ao.filter(Pe=>cn(Pe,h)).map(Pe=>({...Pe,isCustom:!1})),...(f.value[h]||[]).map(Pe=>({label:Pe.label||Pe.key,key:Pe.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5},provider:[h]}))];return{chat:P,image:ee,video:Te}},it=(h,P,ee="")=>!h||(p.value[P]||(p.value[P]=[]),p.value[P].some(Te=>Te.key===h))?!1:(p.value[P].push({key:h,label:ee||h}),!0),et=(h,P,ee="")=>!h||(b.value[P]||(b.value[P]=[]),b.value[P].some(Te=>Te.key===h))?!1:(b.value[P].push({key:h,label:ee||h}),!0),Je=(h,P,ee="")=>!h||(f.value[P]||(f.value[P]=[]),f.value[P].some(Te=>Te.key===h))?!1:(f.value[P].push({key:h,label:ee||h}),!0),K=(h,P)=>{if(!p.value[P])return!1;const ee=p.value[P].findIndex(Te=>Te.key===h);return ee>-1?(p.value[P].splice(ee,1),!0):!1},U=(h,P)=>{if(!b.value[P])return!1;const ee=b.value[P].findIndex(Te=>Te.key===h);return ee>-1?(b.value[P].splice(ee,1),!0):!1},oe=(h,P)=>{if(!f.value[P])return!1;const ee=f.value[P].findIndex(Te=>Te.key===h);return ee>-1?(f.value[P].splice(ee,1),!0):!1},le=()=>{c.value=[],d.value=[],v.value=[],m.value=Wr,C.value=Lr,g.value=Nr};return Ce(c,h=>Pt(pe.CUSTOM_CHAT_MODELS,h),{deep:!0}),Ce(d,h=>Pt(pe.CUSTOM_IMAGE_MODELS,h),{deep:!0}),Ce(v,h=>Pt(pe.CUSTOM_VIDEO_MODELS,h),{deep:!0}),Ce(p,h=>Pt(pe.CUSTOM_CHAT_MODELS_BY_PROVIDER,h),{deep:!0}),Ce(b,h=>Pt(pe.CUSTOM_IMAGE_MODELS_BY_PROVIDER,h),{deep:!0}),Ce(f,h=>Pt(pe.CUSTOM_VIDEO_MODELS_BY_PROVIDER,h),{deep:!0}),Ce(t,h=>{dn(pe.API_KEY_STORAGE_MODE,h),h==="session"?(Yn(S.value)?Ti(pe.SESSION_API_KEYS_BY_PROVIDER,S.value):In(pe.SESSION_API_KEYS_BY_PROVIDER),St(pe.API_KEYS_BY_PROVIDER),St("apiKey")):(Yn(S.value)?Pt(pe.API_KEYS_BY_PROVIDER,S.value):St(pe.API_KEYS_BY_PROVIDER),In(pe.SESSION_API_KEYS_BY_PROVIDER))}),Ce(m,h=>dn(pe.SELECTED_CHAT_MODEL,h)),Ce(C,h=>dn(pe.SELECTED_IMAGE_MODEL,h)),Ce(g,h=>dn(pe.SELECTED_VIDEO_MODEL,h)),Ce(S,h=>{t.value==="persistent"?(Yn(h)?Pt(pe.API_KEYS_BY_PROVIDER,h):St(pe.API_KEYS_BY_PROVIDER),In(pe.SESSION_API_KEYS_BY_PROVIDER)):(Yn(h)?Ti(pe.SESSION_API_KEYS_BY_PROVIDER,h):In(pe.SESSION_API_KEYS_BY_PROVIDER),St(pe.API_KEYS_BY_PROVIDER),St("apiKey"))},{deep:!0}),Ce(M,h=>Pt(pe.BASE_URLS_BY_PROVIDER,h),{deep:!0}),{currentProvider:e,providerList:n,providerConfig:r,providerLabel:o,setProvider:i,clearProvider:a,adaptRequest:l,adaptResponse:s,allChatModels:Q,allImageModels:I,allVideoModels:O,availableChatModels:$,availableImageModels:R,availableVideoModels:J,imageModelOptions:ie,videoModelOptions:ve,chatModelOptions:L,allImageModelOptions:V,allVideoModelOptions:Z,allChatModelOptions:re,selectedChatModel:m,selectedImageModel:C,selectedVideoModel:g,customChatModels:c,customImageModels:d,customVideoModels:v,customChatModelsByProvider:p,customImageModelsByProvider:b,customVideoModelsByProvider:f,addCustomChatModel:Y,addCustomImageModel:de,addCustomVideoModel:H,removeCustomChatModel:A,removeCustomImageModel:F,removeCustomVideoModel:we,addCustomChatModelByProvider:it,addCustomImageModelByProvider:et,addCustomVideoModelByProvider:Je,removeCustomChatModelByProvider:K,removeCustomImageModelByProvider:U,removeCustomVideoModelByProvider:oe,getChatModel:$e,getImageModel:Ae,getVideoModel:Ee,getImageEndpoint:ke,getVideoEndpoint:De,getVideoTaskEndpoint:Se,getChatEndpoint:Xe,getModelsByProvider:ot,clearCustomModels:le,currentApiKey:y,currentBaseUrl:k,apiKeyStorageMode:t,apiKeysByProvider:S,baseUrlsByProvider:M,setApiKeyByProvider:_,setApiKeyStorageMode:N,setBaseUrlByProvider:G,clearApiConfigByProvider:j,clearLegacyApiSecrets:q}}),ev=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},tv={class:"free-preset-card"},nv={class:"free-preset-head"},rv={class:"free-preset-actions"},ov={class:"security-card"},iv={class:"security-card-head"},av={key:0,class:"security-result"},lv={key:0,class:"security-risk-list"},sv={key:1},dv={class:"endpoint-list"},cv={class:"endpoint-item"},uv={class:"endpoint-item"},fv={class:"endpoint-item"},hv={class:"endpoint-item"},vv={class:"model-config-section"},pv={class:"model-group"},bv={class:"model-group-header"},gv={class:"model-group"},mv={class:"model-group-header"},yv={class:"model-input-row"},wv={class:"model-tags"},xv={class:"model-group"},Cv={class:"model-group-header"},kv={class:"model-input-row"},Sv={class:"model-tags"},Pv={class:"model-group"},_v={class:"model-group-header"},Mv={class:"model-input-row"},Ov={class:"model-tags"},Rv={class:"flex justify-between items-center"},Iv={class:"flex gap-2"},$v={__name:"ApiSettings",props:{show:{type:Boolean,default:!1}},emits:["update:show","saved"],setup(e,{emit:t}){const n=e,r=t,o=T(()=>!!i.currentApiKey),i=Qh(),a=i.providerList.map(H=>({label:H.label,value:H.key})),l=T(()=>{const A=un(y.provider).endpoints||{chat:"/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"};return{...A,image:typeof A.image=="function"?"/hf-inference/models/{model}":A.image}}),s=T(()=>i.allChatModels),c=T(()=>i.allImageModels),d=T(()=>i.allVideoModels),v=T(()=>i.providerLabel),p=T(()=>i.getModelsByProvider(y.provider)),b=T(()=>p.value.chat.map(H=>({label:H.label,value:H.key}))),f=T(()=>p.value.image.map(H=>({label:H.label,value:H.key}))),m=T(()=>p.value.video.map(H=>({label:H.label,value:H.key}))),C=[{label:"HF 文字+图片",provider:"huggingface",chatModel:"openai/gpt-oss-20b",imageModel:"black-forest-labs/FLUX.1-schnell",keyUrl:"https://huggingface.co/settings/tokens"},{label:"OpenRouter 文字",provider:"openrouter",chatModel:"deepseek/deepseek-chat-v3-0324:free",keyUrl:"https://openrouter.ai/settings/keys"},{label:"Gemini 文字",provider:"gemini",chatModel:"gemini-3.5-flash",keyUrl:"https://aistudio.google.com/app/apikey"}];T(()=>C.find(H=>H.provider===y.provider)?.keyUrl||"https://api.chatfire.site/login?inviteCode=EEE80324");const g=B(n.show),S=T({get:()=>i.apiKeyStorageMode!=="persistent",set:H=>i.setApiKeyStorageMode(H?"session":"persistent")}),M=B(null),y=Fi({provider:i.currentProvider,apiKey:"",baseUrl:""}),k=B(""),_=B(""),N=B(""),G=()=>{const H=y.provider,A=un(H);y.apiKey=i.apiKeysByProvider[H]||"",y.baseUrl=i.baseUrlsByProvider[H]||A.defaultBaseUrl||""},j=(H,A)=>{try{const F=H.getItem(A);return F?JSON.parse(F):{}}catch{return{}}},q=()=>{const H=[],A=localStorage.getItem("apiKey"),F=j(localStorage,"api-keys-by-provider"),we=j(localStorage,"base-urls-by-provider"),$e=y.baseUrl||"";A&&H.push("检测到旧版 apiKey 明文残留，建议清理。"),Object.values(F).some(Boolean)&&H.push("检测到 API Key 被长期保存在本地，建议改为仅本次会话保存。"),Object.values({...we,active:$e}).filter(Boolean).filter(Ee=>!String(Ee).startsWith("https://")).length&&H.push("检测到非 HTTPS API 地址，可能被中间人窃取请求内容。"),M.value={risks:H}},Q=()=>{i.setApiKeyStorageMode("session"),i.clearLegacyApiSecrets(),y.apiKey="",M.value={risks:[]},window.$message?.success("已清理长期保存的 Key，并切换为仅本次会话保存")},I=H=>{const A=un(H.provider);y.provider=H.provider,y.baseUrl=A.defaultBaseUrl||"",i.setProvider(H.provider),i.setBaseUrlByProvider(H.provider,y.baseUrl),i.selectedChatModel=H.chatModel,H.imageModel&&(i.selectedImageModel=H.imageModel);const F=i.getModelsByProvider(H.provider).video[0];F&&(i.selectedVideoModel=F.key),window.$message?.success(`已配置 ${H.label} API 预设`)},O=H=>{const A=H.provider?.[0];if(!A||A===y.provider)return;const F=un(A);y.provider=A,i.setProvider(A),!i.baseUrlsByProvider[A]&&F.defaultBaseUrl&&i.setBaseUrlByProvider(A,F.defaultBaseUrl)},$=H=>{O(H),i.selectedChatModel=H.key},R=H=>{O(H),i.selectedImageModel=H.key},J=H=>{O(H),i.selectedVideoModel=H.key};Ce(()=>n.show,H=>{g.value=H,H&&(y.provider=i.currentProvider,G())}),Ce(()=>y.provider,()=>{G();const{chat:H,image:A,video:F}=i.getModelsByProvider(y.provider);H.length&&!H.some(we=>we.key===i.selectedChatModel)&&(i.selectedChatModel=H[0].key),A.length&&!A.some(we=>we.key===i.selectedImageModel)&&(i.selectedImageModel=A[0].key),F.length&&!F.some(we=>we.key===i.selectedVideoModel)&&(i.selectedVideoModel=F[0].key)}),Ce(g,H=>{r("update:show",H)});const V=()=>{k.value.trim()&&(i.addCustomChatModel(k.value.trim()),k.value="")},Z=()=>{_.value.trim()&&(i.addCustomImageModel(_.value.trim()),_.value="")},re=()=>{N.value.trim()&&(i.addCustomVideoModel(N.value.trim()),N.value="")},ie=H=>{i.removeCustomChatModel(H)},ve=H=>{i.removeCustomImageModel(H)},L=H=>{i.removeCustomVideoModel(H)},Y=()=>{y.provider&&i.setProvider(y.provider),i.setApiKeyStorageMode(S.value?"session":"persistent"),y.apiKey&&i.setApiKeyByProvider(y.provider,y.apiKey),y.baseUrl&&i.setBaseUrlByProvider(y.provider,y.baseUrl),g.value=!1,r("saved")},de=()=>{i.clearApiConfigByProvider(y.provider),i.clearLegacyApiSecrets(),i.clearCustomModels(),y.apiKey="",y.baseUrl=""};return(H,A)=>(Le(),_t(ne(vs),{show:g.value,"onUpdate:show":A[11]||(A[11]=F=>g.value=F),preset:"card",title:"API 设置",style:{width:"560px"}},{footer:me(()=>[se("div",Rv,[A[36]||(A[36]=se("span",{class:"text-xs text-[var(--text-secondary)]"},"API Key 仅用于本地请求配置",-1)),se("div",Iv,[be(ne(xt),{onClick:de,tertiary:""},{default:me(()=>[...A[33]||(A[33]=[je("清除配置",-1)])]),_:1}),be(ne(xt),{onClick:A[10]||(A[10]=F=>g.value=!1)},{default:me(()=>[...A[34]||(A[34]=[je("取消",-1)])]),_:1}),be(ne(xt),{type:"primary",onClick:Y},{default:me(()=>[...A[35]||(A[35]=[je("保存",-1)])]),_:1})])])]),default:me(()=>[be(ne(Ih),{type:"line",animated:""},{default:me(()=>[be(ne(Oi),{name:"api",tab:"API 配置"},{default:me(()=>[be(ne(yi),{ref:"formRef",model:y,"label-placement":"left","label-width":"80"},{default:me(()=>[be(ne(qt),{label:"渠道",path:"provider"},{default:me(()=>[be(ne(jn),{value:y.provider,"onUpdate:value":A[0]||(A[0]=F=>y.provider=F),options:ne(a),placeholder:"选择 API 渠道"},null,8,["value","options"])]),_:1}),se("div",tv,[se("div",nv,[A[13]||(A[13]=se("div",null,[se("strong",null,"免费模型 API 预设"),se("p",null,"自动配置免费模型渠道、Base URL 和默认模型。")],-1)),be(ne(tt),{size:"small",type:"success"},{default:me(()=>[...A[12]||(A[12]=[je("推荐",-1)])]),_:1})]),se("div",rv,[(Le(),Ge(ht,null,Pn(C,F=>be(ne(xt),{key:F.provider,size:"small",secondary:"",type:y.provider===F.provider?"primary":"default",onClick:we=>I(F)},{default:me(()=>[je(at(F.label),1)]),_:2},1032,["type","onClick"])),64))]),A[14]||(A[14]=se("p",{class:"free-preset-note"},"平台仍需要你的个人免费 API Key；本项目不会内置或保存公共密钥。",-1))]),be(ne(qt),{label:"Base URL",path:"baseUrl"},{default:me(()=>[be(ne(On),{value:y.baseUrl,"onUpdate:value":A[1]||(A[1]=F=>y.baseUrl=F),placeholder:"https://api.chatfire.site/v1"},null,8,["value"])]),_:1}),be(ne(qt),{label:"API Key",path:"apiKey"},{default:me(()=>[be(ne(On),{value:y.apiKey,"onUpdate:value":A[2]||(A[2]=F=>y.apiKey=F),type:"password","show-password-on":"click",placeholder:"请输入 API Key"},null,8,["value"])]),_:1}),be(ne(qt),{label:"保存方式"},{default:me(()=>[be(ne(kf),{checked:S.value,"onUpdate:checked":A[3]||(A[3]=F=>S.value=F)},{default:me(()=>[...A[15]||(A[15]=[je(" 仅本次会话保存 Key（推荐） ",-1)])]),_:1},8,["checked"])]),_:1}),se("div",ov,[se("div",iv,[A[17]||(A[17]=se("div",null,[se("strong",null,"API 安全检测"),se("p",null,"检查旧版明文 Key、长期保存 Key、非 HTTPS API 地址。")],-1)),be(ne(xt),{size:"small",secondary:"",onClick:q},{default:me(()=>[...A[16]||(A[16]=[je("检测",-1)])]),_:1})]),M.value?(Le(),Ge("div",av,[be(ne(Er),{type:M.value.risks.length?"warning":"success",title:M.value.risks.length?`发现 ${M.value.risks.length} 个风险`:"未发现明显风险"},{default:me(()=>[M.value.risks.length?(Le(),Ge("ul",lv,[(Le(!0),Ge(ht,null,Pn(M.value.risks,F=>(Le(),Ge("li",{key:F},at(F),1))),128))])):(Le(),Ge("p",sv,"当前没有发现长期保存 Key 或不安全地址。"))]),_:1},8,["type","title"]),M.value.risks.length?(Le(),_t(ne(xt),{key:0,size:"small",type:"primary",class:"mt-2",onClick:Q},{default:me(()=>[...A[18]||(A[18]=[je(" 一键修复 ",-1)])]),_:1})):jo("",!0)])):jo("",!0)]),be(ne(Lf),{"title-placement":"left",class:"!my-3"},{default:me(()=>[...A[19]||(A[19]=[se("span",{class:"text-xs text-[var(--text-secondary)]"},"端点路径",-1)])]),_:1}),se("div",dv,[se("div",cv,[A[20]||(A[20]=se("span",{class:"endpoint-label"},"问答",-1)),be(ne(tt),{size:"small",type:"info",class:"endpoint-tag"},{default:me(()=>[je(at(l.value.chat),1)]),_:1})]),se("div",uv,[A[21]||(A[21]=se("span",{class:"endpoint-label"},"生图",-1)),be(ne(tt),{size:"small",type:"success",class:"endpoint-tag"},{default:me(()=>[je(at(l.value.image),1)]),_:1})]),se("div",fv,[A[22]||(A[22]=se("span",{class:"endpoint-label"},"视频生成",-1)),be(ne(tt),{size:"small",type:"warning",class:"endpoint-tag"},{default:me(()=>[je(at(l.value.video),1)]),_:1})]),se("div",hv,[A[23]||(A[23]=se("span",{class:"endpoint-label"},"视频查询",-1)),be(ne(tt),{size:"small",type:"warning",class:"endpoint-tag"},{default:me(()=>[je(at(l.value.videoQuery),1)]),_:1})])]),o.value?(Le(),_t(ne(Er),{key:1,type:"success",title:"已配置",class:"mb-4"},{default:me(()=>[...A[25]||(A[25]=[je(" API 已就绪，可以使用 AI 功能 ",-1)])]),_:1})):(Le(),_t(ne(Er),{key:0,type:"warning",title:"未配置",class:"mb-4"},{default:me(()=>[...A[24]||(A[24]=[se("div",{class:"flex flex-col gap-2"},[se("p",null,"API 地址和免费模型已可一键配置；还需要填写你自己的免费 API Key。")],-1)])]),_:1}))]),_:1},8,["model"])]),_:1}),be(ne(Oi),{name:"models",tab:"模型配置"},{default:me(()=>[se("div",vv,[se("div",pv,[se("div",bv,[A[26]||(A[26]=se("span",{class:"model-group-title"},"当前默认模型",-1)),be(ne(tt),{size:"tiny",type:"success"},{default:me(()=>[je(at(v.value),1)]),_:1})]),be(ne(yi),{"label-placement":"left","label-width":"92"},{default:me(()=>[be(ne(qt),{label:"文字模型"},{default:me(()=>[be(ne(jn),{value:ne(i).selectedChatModel,"onUpdate:value":A[4]||(A[4]=F=>ne(i).selectedChatModel=F),options:b.value,placeholder:"选择文字模型",filterable:""},null,8,["value","options"])]),_:1}),be(ne(qt),{label:"图片模型"},{default:me(()=>[be(ne(jn),{value:ne(i).selectedImageModel,"onUpdate:value":A[5]||(A[5]=F=>ne(i).selectedImageModel=F),options:f.value,placeholder:"选择图片模型",filterable:""},null,8,["value","options"])]),_:1}),be(ne(qt),{label:"视频模型"},{default:me(()=>[be(ne(jn),{value:ne(i).selectedVideoModel,"onUpdate:value":A[6]||(A[6]=F=>ne(i).selectedVideoModel=F),options:m.value,placeholder:"选择视频模型",filterable:""},null,8,["value","options"])]),_:1})]),_:1})]),se("div",gv,[se("div",mv,[A[27]||(A[27]=se("span",{class:"model-group-title"},"问答模型",-1)),be(ne(tt),{size:"tiny",type:"info"},{default:me(()=>[je(at(s.value.length)+" 个",1)]),_:1})]),se("div",yv,[be(ne(On),{value:k.value,"onUpdate:value":A[7]||(A[7]=F=>k.value=F),placeholder:"输入模型名称，如 gpt-4o",size:"small",onKeyup:wr(V,["enter"])},null,8,["value"]),be(ne(xt),{size:"small",type:"primary",onClick:V,disabled:!k.value},{default:me(()=>[...A[28]||(A[28]=[je(" 添加 ",-1)])]),_:1},8,["disabled"])]),se("div",wv,[(Le(!0),Ge(ht,null,Pn(s.value,F=>(Le(),_t(ne(tt),{key:F.key,size:"small",closable:F.isCustom,type:ne(i).selectedChatModel===F.key||F.isCustom?"info":"default",class:xr(["model-choice-tag",{"is-selected":ne(i).selectedChatModel===F.key}]),onClick:we=>$(F),onClose:we=>ie(F.key)},{default:me(()=>[je(at(F.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])]),se("div",xv,[se("div",Cv,[A[29]||(A[29]=se("span",{class:"model-group-title"},"图片模型",-1)),be(ne(tt),{size:"tiny",type:"success"},{default:me(()=>[je(at(c.value.length)+" 个",1)]),_:1})]),se("div",kv,[be(ne(On),{value:_.value,"onUpdate:value":A[8]||(A[8]=F=>_.value=F),placeholder:"输入模型名称，如 dall-e-3",size:"small",onKeyup:wr(Z,["enter"])},null,8,["value"]),be(ne(xt),{size:"small",type:"primary",onClick:Z,disabled:!_.value},{default:me(()=>[...A[30]||(A[30]=[je(" 添加 ",-1)])]),_:1},8,["disabled"])]),se("div",Sv,[(Le(!0),Ge(ht,null,Pn(c.value,F=>(Le(),_t(ne(tt),{key:F.key,size:"small",closable:F.isCustom,type:ne(i).selectedImageModel===F.key||F.isCustom?"success":"default",class:xr(["model-choice-tag",{"is-selected":ne(i).selectedImageModel===F.key}]),onClick:we=>R(F),onClose:we=>ve(F.key)},{default:me(()=>[je(at(F.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])]),se("div",Pv,[se("div",_v,[A[31]||(A[31]=se("span",{class:"model-group-title"},"视频模型",-1)),be(ne(tt),{size:"tiny",type:"warning"},{default:me(()=>[je(at(d.value.length)+" 个",1)]),_:1})]),se("div",Mv,[be(ne(On),{value:N.value,"onUpdate:value":A[9]||(A[9]=F=>N.value=F),placeholder:"输入模型名称，如 sora-2",size:"small",onKeyup:wr(re,["enter"])},null,8,["value"]),be(ne(xt),{size:"small",type:"primary",onClick:re,disabled:!N.value},{default:me(()=>[...A[32]||(A[32]=[je(" 添加 ",-1)])]),_:1},8,["disabled"])]),se("div",Ov,[(Le(!0),Ge(ht,null,Pn(d.value,F=>(Le(),_t(ne(tt),{key:F.key,size:"small",closable:F.isCustom,type:ne(i).selectedVideoModel===F.key||F.isCustom?"warning":"default",class:xr(["model-choice-tag",{"is-selected":ne(i).selectedVideoModel===F.key}]),onClick:we=>J(F),onClose:we=>L(F.key)},{default:me(()=>[je(at(F.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])])])]),_:1})]),_:1})]),_:1},8,["show"]))}},Jv=ev($v,[["__scopeId","data-v-d7830312"]]),zv={class:"h-[48px] flex-none flex items-center justify-between px-4 md:px-8 border-b border-[var(--border-color)]"},Av={class:"flex items-center gap-2"},Ev={class:"flex items-center gap-4"},Zv={__name:"AppHeader",setup(e){return(t,n)=>(Le(),Ge("header",zv,[se("div",Av,[Gn(t.$slots,"left")]),se("div",Ev,[Gn(t.$slots,"center"),se("button",{onClick:n[0]||(n[0]=(...r)=>ne(Ho)&&ne(Ho)(...r)),class:"p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"},[be(ne(wa),{size:20},{default:me(()=>[ne(ps)?(Le(),_t(ne(Lh),{key:0})):(Le(),_t(ne(Eh),{key:1}))]),_:1})]),Gn(t.$slots,"right")])]))}};export{Jv as A,Yv as B,Dv as C,Wr as D,Gh as E,Gv as F,zi as G,qh as H,io as I,Xv as J,ev as K,jn as N,vn as P,Lv as R,Wv as S,Vv as T,ao as V,Zv as _,wa as a,Nv as b,Ra as c,Bv as d,Fv as e,On as f,Uh as g,Kv as h,qv as i,pa as j,zo as k,Io as l,Zt as m,Xi as n,rr as o,We as p,jv as q,Uv as r,Hv as s,Nr as t,Qh as u,Lr as v,Ei as w,Xh as x,un as y,lo as z};
