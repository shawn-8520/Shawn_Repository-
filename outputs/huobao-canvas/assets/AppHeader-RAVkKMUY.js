import{e as gt,Y as $t,aL as il,w as ke,n as E,aH as al,aA as $i,a1 as at,aM as ll,aw as sl,Z as lt,L as mt,aN as qe,r as D,i as Fe,aO as ar,aP as lr,aQ as io,an as sr,a as ce,aR as dl,aE as Ke,h as mn,aS as $r,aT as cl,x as f,T as ul,U as Ai,$ as dr,aU as ao,ax as zt,a3 as de,aV as hn,as as en,aW as fl,aX as hl,ah as Jn,a9 as Pn,am as qn,aY as bo,aZ as cr,a_ as Tn,a$ as lo,b0 as Bn,b1 as vl,b2 as pl,b3 as ur,b4 as bl,b5 as Vt,b6 as fr,y as gl,b7 as Ei,b8 as yn,b9 as Wo,ba as Ar,bb as ml,bc as Er,bd as Tr,be as Yn,bf as yl,bg as Fr,bh as wl,bi as xl,bj as Cl,bk as kl,bl as Sl,bm as Pl,bn as _l,z as Ml,O as C,M as Z,ab as A,ac as Ti,ag as Fi,bo as Xt,bp as Bi,S as jt,H as Qe,I as $e,_ as nt,bq as Rl,aa as oe,br as bt,V as Dn,a4 as B,R as je,Q as hr,ae as Ze,a5 as Di,bs as Li,bt as tn,bu as Ol,bv as ht,bw as zl,a6 as bn,ad as Br,bx as Il,F as pt,by as Ni,C as $l,bz as Zn,W as vr,bA as Vo,bB as Al,bC as Wi,bD as El,bE as Vi,a0 as Ce,D as pr,bF as Tl,K as Re,bG as br,bH as Dr,bI as Fl,bJ as Bl,bK as Dl,G as Dt,bL as Ll,bM as Nl,bN as Wl,bO as Vl,bP as jl,bQ as Hl,A as Kl,bR as Ul,bS as ql,bT as Yl,bU as Gl,af as gr,bV as Xl,bW as Jl,bX as jo,bY as Zl,bZ as Ql,b_ as es,b$ as Qn,c0 as ts,c1 as ns,c2 as os,c3 as go,c4 as ji,c5 as rs,c6 as is,t as as,c7 as ls,c8 as mo,c9 as ss,ca as ds,o as De,c as Ge,b as re,ai as Hi,cb as cs,au as Ot,g as xe,f as me,u as ne,m as We,l as _n,B as St,s as it,at as Lr,j as yo,q as wo,N as us,cc as Nr,cd as fs}from"./index-DI5253XD.js";let eo=[];const Ki=new WeakMap;function hs(){eo.forEach(e=>e(...Ki.get(e))),eo=[]}function Ui(e,...t){Ki.set(e,t),!eo.includes(e)&&eo.push(e)===1&&requestAnimationFrame(hs)}function Jt(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}let vn,An;const vs=()=>{var e,t;vn=il?(t=(e=document)===null||e===void 0?void 0:e.fonts)===null||t===void 0?void 0:t.ready:void 0,An=!1,vn!==void 0?vn.then(()=>{An=!0}):An=!0};vs();function qi(e){if(An)return;let t=!1;gt(()=>{An||vn==null||vn.then(()=>{t||e()})}),$t(()=>{t=!0})}function Qt(e,t){return ke(e,n=>{n!==void 0&&(t.value=n)}),E(()=>e.value===void 0?t.value:e.value)}function to(e,t){return E(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}function ps(e={},t){const n=$i({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:r}=e,i=s=>{switch(s.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0;break}o!==void 0&&Object.keys(o).forEach(u=>{if(u!==s.key)return;const c=o[u];if(typeof c=="function")c(s);else{const{stop:v=!1,prevent:g=!1}=c;v&&s.stopPropagation(),g&&s.preventDefault(),c.handler(s)}})},a=s=>{switch(s.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1;break}r!==void 0&&Object.keys(r).forEach(u=>{if(u!==s.key)return;const c=r[u];if(typeof c=="function")c(s);else{const{stop:v=!1,prevent:g=!1}=c;v&&s.stopPropagation(),g&&s.preventDefault(),c.handler(s)}})},l=()=>{(t===void 0||t.value)&&(at("keydown",document,i),at("keyup",document,a)),t!==void 0&&ke(t,s=>{s?(at("keydown",document,i),at("keyup",document,a)):(lt("keydown",document,i),lt("keyup",document,a))})};return ll()?(sl(l),$t(()=>{(t===void 0||t.value)&&(lt("keydown",document,i),lt("keyup",document,a))})):l(),al(n)}const mr=mt("n-internal-select-menu"),Yi=mt("n-internal-select-menu-body"),Gi="__disabled__";function It(e){const t=Fe(ar,null),n=Fe(lr,null),o=Fe(io,null),r=Fe(Yi,null),i=D();if(typeof document<"u"){i.value=document.fullscreenElement;const a=()=>{i.value=document.fullscreenElement};gt(()=>{at("fullscreenchange",document,a)}),$t(()=>{lt("fullscreenchange",document,a)})}return qe(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?Gi:l===!0?i.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:o!=null&&o.value?o.value:r!=null&&r.value?r.value:l??(i.value||"body")})}It.tdkey=Gi;It.propTo={type:[String,Object,Boolean],default:void 0};function bs(e,t,n){var o;const r=Fe(e,null);if(r===null)return;const i=(o=sr())===null||o===void 0?void 0:o.proxy;ke(n,a),a(n.value),$t(()=>{a(void 0,n.value)});function a(u,c){if(!r)return;const v=r[t];c!==void 0&&l(v,c),u!==void 0&&s(v,u)}function l(u,c){u[c]||(u[c]=[]),u[c].splice(u[c].findIndex(v=>v===i),1)}function s(u,c){u[c]||(u[c]=[]),~u[c].findIndex(v=>v===i)||u[c].push(i)}}function gs(e,t,n){const o=D(e.value);let r=null;return ke(e,i=>{r!==null&&window.clearTimeout(r),i===!0?n&&!n.value?o.value=!0:r=window.setTimeout(()=>{o.value=!0},t):o.value=!1}),o}let Lt=null;function Xi(){if(Lt===null&&(Lt=document.getElementById("v-binder-view-measurer"),Lt===null)){Lt=document.createElement("div"),Lt.id="v-binder-view-measurer";const{style:e}=Lt;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(Lt)}return Lt.getBoundingClientRect()}function ms(e,t){const n=Xi();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function xo(e){const t=e.getBoundingClientRect(),n=Xi();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function ys(e){return e.nodeType===9?null:e.parentNode}function Ji(e){if(e===null)return null;const t=ys(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:o,overflowY:r}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+r+o))return t}return Ji(t)}const yr=ce({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;Ke("VBinder",(t=sr())===null||t===void 0?void 0:t.proxy);const n=Fe("VBinder",null),o=D(null),r=b=>{o.value=b,n&&e.syncTargetWithParent&&n.setTargetRef(b)};let i=[];const a=()=>{let b=o.value;for(;b=Ji(b),b!==null;)i.push(b);for(const _ of i)at("scroll",_,v,!0)},l=()=>{for(const b of i)lt("scroll",b,v,!0);i=[]},s=new Set,u=b=>{s.size===0&&a(),s.has(b)||s.add(b)},c=b=>{s.has(b)&&s.delete(b),s.size===0&&l()},v=()=>{Ui(g)},g=()=>{s.forEach(b=>b())},m=new Set,h=b=>{m.size===0&&at("resize",window,k),m.has(b)||m.add(b)},p=b=>{m.has(b)&&m.delete(b),m.size===0&&lt("resize",window,k)},k=()=>{m.forEach(b=>b())};return $t(()=>{lt("resize",window,k),l()}),{targetRef:o,setTargetRef:r,addScrollListener:u,removeScrollListener:c,addResizeListener:h,removeResizeListener:p}},render(){return dl("binder",this.$slots)}}),wr=ce({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=Fe("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?mn($r("follower",this.$slots),[[t]]):$r("follower",this.$slots)}}),sn="@@mmoContext",ws={mounted(e,{value:t}){e[sn]={handler:void 0},typeof t=="function"&&(e[sn].handler=t,at("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[sn];typeof t=="function"?n.handler?n.handler!==t&&(lt("mousemoveoutside",e,n.handler),n.handler=t,at("mousemoveoutside",e,t)):(e[sn].handler=t,at("mousemoveoutside",e,t)):n.handler&&(lt("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[sn];t&&lt("mousemoveoutside",e,t),e[sn].handler=void 0}},{c:wt}=cl(),so="vueuc-style";function Wr(e){return e&-e}class Zi{constructor(t,n){this.l=t,this.min=n;const o=new Array(t+1);for(let r=0;r<t+1;++r)o[r]=0;this.ft=o}add(t,n){if(n===0)return;const{l:o,ft:r}=this;for(t+=1;t<=o;)r[t]+=n,t+=Wr(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:o,l:r}=this;if(t>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let i=t*o;for(;t>0;)i+=n[t],t-=Wr(t);return i}getBound(t){let n=0,o=this.l;for(;o>n;){const r=Math.floor((n+o)/2),i=this.sum(r);if(i>t){o=r;continue}else if(i<t){if(n===r)return this.sum(n+1)<=t?n+1:r;n=r}else return r}return n}}const Nn={top:"bottom",bottom:"top",left:"right",right:"left"},Vr={start:"end",center:"center",end:"start"},Co={top:"height",bottom:"height",left:"width",right:"width"},xs={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Cs={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},ks={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},jr={top:!0,bottom:!1,left:!0,right:!1},Hr={top:"end",bottom:"start",left:"end",right:"start"};function Ss(e,t,n,o,r,i){if(!r||i)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",u={top:0,left:0};const c=(m,h,p)=>{let k=0,b=0;const _=n[m]-t[h]-t[m];return _>0&&o&&(p?b=jr[h]?_:-_:k=jr[h]?_:-_),{left:k,top:b}},v=a==="left"||a==="right";if(s!=="center"){const m=ks[e],h=Nn[m],p=Co[m];if(n[p]>t[p]){if(t[m]+t[p]<n[p]){const k=(n[p]-t[p])/2;t[m]<k||t[h]<k?t[m]<t[h]?(s=Vr[l],u=c(p,h,v)):u=c(p,m,v):s="center"}}else n[p]<t[p]&&t[h]<0&&t[m]>t[h]&&(s=Vr[l])}else{const m=a==="bottom"||a==="top"?"left":"top",h=Nn[m],p=Co[m],k=(n[p]-t[p])/2;(t[m]<k||t[h]<k)&&(t[m]>t[h]?(s=Hr[m],u=c(p,m,v)):(s=Hr[h],u=c(p,h,v)))}let g=a;return t[a]<n[Co[a]]&&t[a]<t[Nn[a]]&&(g=Nn[a]),{placement:s!=="center"?`${g}-${s}`:g,left:u.left,top:u.top}}function Ps(e,t){return t?Cs[e]:xs[e]}function _s(e,t,n,o,r,i){if(i)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+n.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+o)}px`,left:`${Math.round(n.left-t.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+o)}px`,left:`${Math.round(n.left-t.left+n.width/2+r)}px`,transform:"translateX(-50%)"}}}const Ms=wt([wt(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),wt(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[wt("> *",{pointerEvents:"all"})])]),xr=ce({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=Fe("VBinder"),n=qe(()=>e.enabled!==void 0?e.enabled:e.show),o=D(null),r=D(null),i=()=>{const{syncTrigger:g}=e;g.includes("scroll")&&t.addScrollListener(s),g.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};gt(()=>{n.value&&(s(),i())});const l=ao();Ms.mount({id:"vueuc/binder",head:!0,anchorMetaName:so,ssr:l}),$t(()=>{a()}),qi(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const g=o.value;if(g===null)return;const m=t.targetRef,{x:h,y:p,overlap:k}=e,b=h!==void 0&&p!==void 0?ms(h,p):xo(m);g.style.setProperty("--v-target-width",`${Math.round(b.width)}px`),g.style.setProperty("--v-target-height",`${Math.round(b.height)}px`);const{width:_,minWidth:R,placement:y,internalShift:S,flip:z}=e;g.setAttribute("v-placement",y),k?g.setAttribute("v-overlap",""):g.removeAttribute("v-overlap");const{style:F}=g;_==="target"?F.width=`${b.width}px`:_!==void 0?F.width=_:F.width="",R==="target"?F.minWidth=`${b.width}px`:R!==void 0?F.minWidth=R:F.minWidth="";const X=xo(g),U=xo(r.value),{left:Y,top:Q,placement:H}=Ss(y,b,X,S,z,k),O=Ps(H,k),{left:L,top:M,transform:V}=_s(H,U,b,Q,Y,k);g.setAttribute("v-placement",H),g.style.setProperty("--v-offset-left",`${Math.round(Y)}px`),g.style.setProperty("--v-offset-top",`${Math.round(Q)}px`),g.style.transform=`translateX(${L}) translateY(${M}) ${V}`,g.style.setProperty("--v-transform-origin",O),g.style.transformOrigin=O};ke(n,g=>{g?(i(),u()):a()});const u=()=>{zt().then(s).catch(g=>console.error(g))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(g=>{ke(de(e,g),s)}),["teleportDisabled"].forEach(g=>{ke(de(e,g),u)}),ke(de(e,"syncTrigger"),g=>{g.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),g.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const c=dr(),v=qe(()=>{const{to:g}=e;if(g!==void 0)return g;c.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:r,followerRef:o,mergedTo:v,syncPosition:s}},render(){return f(ul,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=f("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[f("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?mn(n,[[Ai,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});let Wn;function Rs(){return typeof document>"u"?!1:(Wn===void 0&&("matchMedia"in window?Wn=window.matchMedia("(pointer:coarse)").matches:Wn=!1),Wn)}let ko;function Kr(){return typeof document>"u"?1:(ko===void 0&&(ko="chrome"in window?window.devicePixelRatio:1),ko)}const Qi="VVirtualListXScroll";function Os({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){const o=D(0),r=D(0),i=E(()=>{const u=e.value;if(u.length===0)return null;const c=new Zi(u.length,0);return u.forEach((v,g)=>{c.add(g,v.width)}),c}),a=qe(()=>{const u=i.value;return u!==null?Math.max(u.getBound(r.value)-1,0):0}),l=u=>{const c=i.value;return c!==null?c.sum(u):0},s=qe(()=>{const u=i.value;return u!==null?Math.min(u.getBound(r.value+o.value)+1,e.value.length-1):0});return Ke(Qi,{startIndexRef:a,endIndexRef:s,columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:l}),{listWidthRef:o,scrollLeftRef:r}}const Ur=ce({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:o,renderColRef:r,renderItemWithColsRef:i}=Fe(Qi);return{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:o}},render(){const{startIndex:e,endIndex:t,columns:n,renderCol:o,renderItemWithCols:r,getLeft:i,item:a}=this;if(r!=null)return r({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:a,getLeft:i});if(o!=null){const l=[];for(let s=e;s<=t;++s){const u=n[s];l.push(o({column:u,left:i(s),item:a}))}return l}return null}}),zs=wt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[wt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[wt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Is=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=ao();zs.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:so,ssr:t}),gt(()=>{const{defaultScrollIndex:O,defaultScrollKey:L}=e;O!=null?k({index:O}):L!=null&&k({key:L})});let n=!1,o=!1;fl(()=>{if(n=!1,!o){o=!0;return}k({top:m.value,left:a.value})}),hl(()=>{n=!0,o||(o=!0)});const r=qe(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let O=0;return e.columns.forEach(L=>{O+=L.width}),O}),i=E(()=>{const O=new Map,{keyField:L}=e;return e.items.forEach((M,V)=>{O.set(M[L],V)}),O}),{scrollLeftRef:a,listWidthRef:l}=Os({columnsRef:de(e,"columns"),renderColRef:de(e,"renderCol"),renderItemWithColsRef:de(e,"renderItemWithCols")}),s=D(null),u=D(void 0),c=new Map,v=E(()=>{const{items:O,itemSize:L,keyField:M}=e,V=new Zi(O.length,L);return O.forEach((T,G)=>{const ee=T[M],ae=c.get(ee);ae!==void 0&&V.add(G,ae)}),V}),g=D(0),m=D(0),h=qe(()=>Math.max(v.value.getBound(m.value-Jn(e.paddingTop))-1,0)),p=E(()=>{const{value:O}=u;if(O===void 0)return[];const{items:L,itemSize:M}=e,V=h.value,T=Math.min(V+Math.ceil(O/M+1),L.length-1),G=[];for(let ee=V;ee<=T;++ee)G.push(L[ee]);return G}),k=(O,L)=>{if(typeof O=="number"){y(O,L,"auto");return}const{left:M,top:V,index:T,key:G,position:ee,behavior:ae,debounce:ue=!0}=O;if(M!==void 0||V!==void 0)y(M,V,ae);else if(T!==void 0)R(T,ae,ue);else if(G!==void 0){const le=i.value.get(G);le!==void 0&&R(le,ae,ue)}else ee==="bottom"?y(0,Number.MAX_SAFE_INTEGER,ae):ee==="top"&&y(0,0,ae)};let b,_=null;function R(O,L,M){const{value:V}=v,T=V.sum(O)+Jn(e.paddingTop);if(!M)s.value.scrollTo({left:0,top:T,behavior:L});else{b=O,_!==null&&window.clearTimeout(_),_=window.setTimeout(()=>{b=void 0,_=null},16);const{scrollTop:G,offsetHeight:ee}=s.value;if(T>G){const ae=V.get(O);T+ae<=G+ee||s.value.scrollTo({left:0,top:T+ae-ee,behavior:L})}else s.value.scrollTo({left:0,top:T,behavior:L})}}function y(O,L,M){s.value.scrollTo({left:O,top:L,behavior:M})}function S(O,L){var M,V,T;if(n||e.ignoreItemResize||H(L.target))return;const{value:G}=v,ee=i.value.get(O),ae=G.get(ee),ue=(T=(V=(M=L.borderBoxSize)===null||M===void 0?void 0:M[0])===null||V===void 0?void 0:V.blockSize)!==null&&T!==void 0?T:L.contentRect.height;if(ue===ae)return;ue-e.itemSize===0?c.delete(O):c.set(O,ue-e.itemSize);const _e=ue-ae;if(_e===0)return;G.add(ee,_e);const j=s.value;if(j!=null){if(b===void 0){const P=G.sum(ee);j.scrollTop>P&&j.scrollBy(0,_e)}else if(ee<b)j.scrollBy(0,_e);else if(ee===b){const P=G.sum(ee);ue+P>j.scrollTop+j.offsetHeight&&j.scrollBy(0,_e)}Q()}g.value++}const z=!Rs();let F=!1;function X(O){var L;(L=e.onScroll)===null||L===void 0||L.call(e,O),(!z||!F)&&Q()}function U(O){var L;if((L=e.onWheel)===null||L===void 0||L.call(e,O),z){const M=s.value;if(M!=null){if(O.deltaX===0&&(M.scrollTop===0&&O.deltaY<=0||M.scrollTop+M.offsetHeight>=M.scrollHeight&&O.deltaY>=0))return;O.preventDefault(),M.scrollTop+=O.deltaY/Kr(),M.scrollLeft+=O.deltaX/Kr(),Q(),F=!0,Ui(()=>{F=!1})}}}function Y(O){if(n||H(O.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(O.contentRect.height===u.value)return}else if(O.contentRect.height===u.value&&O.contentRect.width===l.value)return;u.value=O.contentRect.height,l.value=O.contentRect.width;const{onResize:L}=e;L!==void 0&&L(O)}function Q(){const{value:O}=s;O!=null&&(m.value=O.scrollTop,a.value=O.scrollLeft)}function H(O){let L=O;for(;L!==null;){if(L.style.display==="none")return!0;L=L.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:E(()=>{const{itemResizable:O}=e,L=Pn(v.value.sum());return g.value,[e.itemsStyle,{boxSizing:"content-box",width:Pn(r.value),height:O?"":L,minHeight:O?L:"",paddingTop:Pn(e.paddingTop),paddingBottom:Pn(e.paddingBottom)}]}),visibleItemsStyle:E(()=>(g.value,{transform:`translateY(${Pn(v.value.sum(h.value))})`})),viewportItems:p,listElRef:s,itemsElRef:D(null),scrollTo:k,handleListResize:Y,handleListScroll:X,handleListWheel:U,handleItemResize:S}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:o}=this;return f(hn,{onResize:this.handleListResize},{default:()=>{var r,i;return f("div",en(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?f("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[f(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:a,renderItemWithCols:l}=this;return this.viewportItems.map(s=>{const u=s[t],c=n.get(u),v=a!=null?f(Ur,{index:c,item:s}):void 0,g=l!=null?f(Ur,{index:c,item:s}):void 0,m=this.$slots.default({item:s,renderedCols:v,renderedItemWithCols:g,index:c})[0];return e?f(hn,{key:u,onResize:h=>this.handleItemResize(u,h)},{default:()=>m}):(m.key=u,m)})}})]):(i=(r=this.$slots).empty)===null||i===void 0?void 0:i.call(r)])}})}}),$s=wt(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[wt("&::-webkit-scrollbar",{width:0,height:0})]),As=ce({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=D(null);function t(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const n=ao();return $s.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:so,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...r){var i;(i=e.value)===null||i===void 0||i.scrollTo(...r)}})},render(){return f("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Pt="v-hidden",Es=wt("[v-hidden]",{display:"none!important"}),qr=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=D(null),o=D(null);function r(a){const{value:l}=n,{getCounter:s,getTail:u}=e;let c;if(s!==void 0?c=s():c=o.value,!l||!c)return;c.hasAttribute(Pt)&&c.removeAttribute(Pt);const{children:v}=l;if(a.showAllItemsBeforeCalculate)for(const R of v)R.hasAttribute(Pt)&&R.removeAttribute(Pt);const g=l.offsetWidth,m=[],h=t.tail?u==null?void 0:u():null;let p=h?h.offsetWidth:0,k=!1;const b=l.children.length-(t.tail?1:0);for(let R=0;R<b-1;++R){if(R<0)continue;const y=v[R];if(k){y.hasAttribute(Pt)||y.setAttribute(Pt,"");continue}else y.hasAttribute(Pt)&&y.removeAttribute(Pt);const S=y.offsetWidth;if(p+=S,m[R]=S,p>g){const{updateCounter:z}=e;for(let F=R;F>=0;--F){const X=b-1-F;z!==void 0?z(X):c.textContent=`${X}`;const U=c.offsetWidth;if(p-=m[F],p+U<=g||F===0){k=!0,R=F-1,h&&(R===-1?(h.style.maxWidth=`${g-U}px`,h.style.boxSizing="border-box"):h.style.maxWidth="");const{onUpdateCount:Y}=e;Y&&Y(X);break}}}}const{onUpdateOverflow:_}=e;k?_!==void 0&&_(!0):(_!==void 0&&_(!1),c.setAttribute(Pt,""))}const i=ao();return Es.mount({id:"vueuc/overflow",head:!0,anchorMetaName:so,ssr:i}),gt(()=>r({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:r}},render(){const{$slots:e}=this;return zt(()=>this.sync({showAllItemsBeforeCalculate:!1})),f("div",{class:"v-overflow",ref:"selfRef"},[qn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function ea(e,t){t&&(gt(()=>{const{value:n}=e;n&&bo.registerHandler(n,t)}),ke(e,(n,o)=>{o&&bo.unregisterHandler(o)},{deep:!1}),$t(()=>{const{value:n}=e;n&&bo.unregisterHandler(n)}))}const Ts=/^(\d|\.)+$/,Yr=/(\d|\.)+/;function Zt(e,{c:t=1,offset:n=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+n)*t;return r===0?"0":`${r}px`}else if(typeof e=="string")if(Ts.test(e)){const r=(Number(e)+n)*t;return o?r===0?"0":`${r}px`:`${r}`}else{const r=Yr.exec(e);return r?e.replace(Yr,String((Number(r[0])+n)*t)):e}return e}let So;function Fs(){return So===void 0&&(So=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),So}function Gr(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Bs(e){return t=>{t?e.value=t.$el:e.value=null}}function Po(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const Ds={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"},Heatmap:{less:"less",more:"more",monthFormat:"MMM",weekdayFormat:"eee"}};function _o(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function Mn(e){return(t,n)=>{const o=n!=null&&n.context?String(n.context):"standalone";let r;if(o==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,l=n!=null&&n.width?String(n.width):a;r=e.formattingValues[l]||e.formattingValues[a]}else{const a=e.defaultWidth,l=n!=null&&n.width?String(n.width):e.defaultWidth;r=e.values[l]||e.values[a]}const i=e.argumentCallback?e.argumentCallback(t):t;return r[i]}}function Rn(e){return(t,n={})=>{const o=n.width,r=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const a=i[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?Ns(l,v=>v.test(a)):Ls(l,v=>v.test(a));let u;u=e.valueCallback?e.valueCallback(s):s,u=n.valueCallback?n.valueCallback(u):u;const c=t.slice(a.length);return{value:u,rest:c}}}function Ls(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ns(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function Ws(e){return(t,n={})=>{const o=t.match(e.matchPattern);if(!o)return null;const r=o[0],i=t.match(e.parsePattern);if(!i)return null;let a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;const l=t.slice(r.length);return{value:a,rest:l}}}const Vs={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},js=(e,t,n)=>{let o;const r=Vs[e];return typeof r=="string"?o=r:t===1?o=r.one:o=r.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o},Hs={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ks=(e,t,n,o)=>Hs[e],Us={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},qs={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ys={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Gs={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Xs={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Js={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Zs=(e,t)=>{const n=Number(e),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Qs={ordinalNumber:Zs,era:Mn({values:Us,defaultWidth:"wide"}),quarter:Mn({values:qs,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mn({values:Ys,defaultWidth:"wide"}),day:Mn({values:Gs,defaultWidth:"wide"}),dayPeriod:Mn({values:Xs,defaultWidth:"wide",formattingValues:Js,defaultFormattingWidth:"wide"})},ed=/^(\d+)(th|st|nd|rd)?/i,td=/\d+/i,nd={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},od={any:[/^b/i,/^(a|c)/i]},rd={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},id={any:[/1/i,/2/i,/3/i,/4/i]},ad={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ld={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sd={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},dd={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},cd={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ud={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},fd={ordinalNumber:Ws({matchPattern:ed,parsePattern:td,valueCallback:e=>parseInt(e,10)}),era:Rn({matchPatterns:nd,defaultMatchWidth:"wide",parsePatterns:od,defaultParseWidth:"any"}),quarter:Rn({matchPatterns:rd,defaultMatchWidth:"wide",parsePatterns:id,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Rn({matchPatterns:ad,defaultMatchWidth:"wide",parsePatterns:ld,defaultParseWidth:"any"}),day:Rn({matchPatterns:sd,defaultMatchWidth:"wide",parsePatterns:dd,defaultParseWidth:"any"}),dayPeriod:Rn({matchPatterns:cd,defaultMatchWidth:"any",parsePatterns:ud,defaultParseWidth:"any"})},hd={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vd={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},pd={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bd={date:_o({formats:hd,defaultWidth:"full"}),time:_o({formats:vd,defaultWidth:"full"}),dateTime:_o({formats:pd,defaultWidth:"full"})},gd={code:"en-US",formatDistance:js,formatLong:bd,formatRelative:Ks,localize:Qs,match:fd,options:{weekStartsOn:0,firstWeekContainsDate:1}},md={name:"en-US",locale:gd};var yd=/\s/;function wd(e){for(var t=e.length;t--&&yd.test(e.charAt(t)););return t}var xd=/^\s+/;function Cd(e){return e&&e.slice(0,wd(e)+1).replace(xd,"")}var Xr=NaN,kd=/^[-+]0x[0-9a-f]+$/i,Sd=/^0b[01]+$/i,Pd=/^0o[0-7]+$/i,_d=parseInt;function Jr(e){if(typeof e=="number")return e;if(cr(e))return Xr;if(Tn(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Tn(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Cd(e);var n=Sd.test(e);return n||Pd.test(e)?_d(e.slice(2),n?2:8):kd.test(e)?Xr:+e}var Ho=lo(Bn,"WeakMap"),Md=vl(Object.keys,Object),Rd=Object.prototype,Od=Rd.hasOwnProperty;function zd(e){if(!pl(e))return Md(e);var t=[];for(var n in Object(e))Od.call(e,n)&&n!="constructor"&&t.push(n);return t}function Cr(e){return ur(e)?bl(e):zd(e)}var Id=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$d=/^\w*$/;function kr(e,t){if(Vt(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||cr(e)?!0:$d.test(e)||!Id.test(e)||t!=null&&e in Object(t)}var Ad="Expected a function";function Sr(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Ad);var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return n.cache=i.set(r,a)||i,a};return n.cache=new(Sr.Cache||fr),n}Sr.Cache=fr;var Ed=500;function Td(e){var t=Sr(e,function(o){return n.size===Ed&&n.clear(),o}),n=t.cache;return t}var Fd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bd=/\\(\\)?/g,Dd=Td(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Fd,function(n,o,r,i){t.push(r?i.replace(Bd,"$1"):o||n)}),t});function ta(e,t){return Vt(e)?e:kr(e,t)?[e]:Dd(gl(e))}function co(e){if(typeof e=="string"||cr(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function na(e,t){t=ta(t,e);for(var n=0,o=t.length;e!=null&&n<o;)e=e[co(t[n++])];return n&&n==o?e:void 0}function Pr(e,t,n){var o=e==null?void 0:na(e,t);return o===void 0?n:o}function Ld(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}function Nd(e,t){for(var n=-1,o=e==null?0:e.length,r=0,i=[];++n<o;){var a=e[n];t(a,n,e)&&(i[r++]=a)}return i}function Wd(){return[]}var Vd=Object.prototype,jd=Vd.propertyIsEnumerable,Zr=Object.getOwnPropertySymbols,Hd=Zr?function(e){return e==null?[]:(e=Object(e),Nd(Zr(e),function(t){return jd.call(e,t)}))}:Wd;function Kd(e,t,n){var o=t(e);return Vt(e)?o:Ld(o,n(e))}function Qr(e){return Kd(e,Cr,Hd)}var Ko=lo(Bn,"DataView"),Uo=lo(Bn,"Promise"),qo=lo(Bn,"Set"),ei="[object Map]",Ud="[object Object]",ti="[object Promise]",ni="[object Set]",oi="[object WeakMap]",ri="[object DataView]",qd=yn(Ko),Yd=yn(Wo),Gd=yn(Uo),Xd=yn(qo),Jd=yn(Ho),Wt=Ei;(Ko&&Wt(new Ko(new ArrayBuffer(1)))!=ri||Wo&&Wt(new Wo)!=ei||Uo&&Wt(Uo.resolve())!=ti||qo&&Wt(new qo)!=ni||Ho&&Wt(new Ho)!=oi)&&(Wt=function(e){var t=Ei(e),n=t==Ud?e.constructor:void 0,o=n?yn(n):"";if(o)switch(o){case qd:return ri;case Yd:return ei;case Gd:return ti;case Xd:return ni;case Jd:return oi}return t});var Zd="__lodash_hash_undefined__";function Qd(e){return this.__data__.set(e,Zd),this}function ec(e){return this.__data__.has(e)}function no(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new fr;++t<n;)this.add(e[t])}no.prototype.add=no.prototype.push=Qd;no.prototype.has=ec;function tc(e,t){for(var n=-1,o=e==null?0:e.length;++n<o;)if(t(e[n],n,e))return!0;return!1}function nc(e,t){return e.has(t)}var oc=1,rc=2;function oa(e,t,n,o,r,i){var a=n&oc,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var u=i.get(e),c=i.get(t);if(u&&c)return u==t&&c==e;var v=-1,g=!0,m=n&rc?new no:void 0;for(i.set(e,t),i.set(t,e);++v<l;){var h=e[v],p=t[v];if(o)var k=a?o(p,h,v,t,e,i):o(h,p,v,e,t,i);if(k!==void 0){if(k)continue;g=!1;break}if(m){if(!tc(t,function(b,_){if(!nc(m,_)&&(h===b||r(h,b,n,o,i)))return m.push(_)})){g=!1;break}}else if(!(h===p||r(h,p,n,o,i))){g=!1;break}}return i.delete(e),i.delete(t),g}function ic(e){var t=-1,n=Array(e.size);return e.forEach(function(o,r){n[++t]=[r,o]}),n}function ac(e){var t=-1,n=Array(e.size);return e.forEach(function(o){n[++t]=o}),n}var lc=1,sc=2,dc="[object Boolean]",cc="[object Date]",uc="[object Error]",fc="[object Map]",hc="[object Number]",vc="[object RegExp]",pc="[object Set]",bc="[object String]",gc="[object Symbol]",mc="[object ArrayBuffer]",yc="[object DataView]",ii=Ar?Ar.prototype:void 0,Mo=ii?ii.valueOf:void 0;function wc(e,t,n,o,r,i,a){switch(n){case yc:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case mc:return!(e.byteLength!=t.byteLength||!i(new Er(e),new Er(t)));case dc:case cc:case hc:return ml(+e,+t);case uc:return e.name==t.name&&e.message==t.message;case vc:case bc:return e==t+"";case fc:var l=ic;case pc:var s=o&lc;if(l||(l=ac),e.size!=t.size&&!s)return!1;var u=a.get(e);if(u)return u==t;o|=sc,a.set(e,t);var c=oa(l(e),l(t),o,r,i,a);return a.delete(e),c;case gc:if(Mo)return Mo.call(e)==Mo.call(t)}return!1}var xc=1,Cc=Object.prototype,kc=Cc.hasOwnProperty;function Sc(e,t,n,o,r,i){var a=n&xc,l=Qr(e),s=l.length,u=Qr(t),c=u.length;if(s!=c&&!a)return!1;for(var v=s;v--;){var g=l[v];if(!(a?g in t:kc.call(t,g)))return!1}var m=i.get(e),h=i.get(t);if(m&&h)return m==t&&h==e;var p=!0;i.set(e,t),i.set(t,e);for(var k=a;++v<s;){g=l[v];var b=e[g],_=t[g];if(o)var R=a?o(_,b,g,t,e,i):o(b,_,g,e,t,i);if(!(R===void 0?b===_||r(b,_,n,o,i):R)){p=!1;break}k||(k=g=="constructor")}if(p&&!k){var y=e.constructor,S=t.constructor;y!=S&&"constructor"in e&&"constructor"in t&&!(typeof y=="function"&&y instanceof y&&typeof S=="function"&&S instanceof S)&&(p=!1)}return i.delete(e),i.delete(t),p}var Pc=1,ai="[object Arguments]",li="[object Array]",Vn="[object Object]",_c=Object.prototype,si=_c.hasOwnProperty;function Mc(e,t,n,o,r,i){var a=Vt(e),l=Vt(t),s=a?li:Wt(e),u=l?li:Wt(t);s=s==ai?Vn:s,u=u==ai?Vn:u;var c=s==Vn,v=u==Vn,g=s==u;if(g&&Tr(e)){if(!Tr(t))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new Yn),a||yl(e)?oa(e,t,n,o,r,i):wc(e,t,s,n,o,r,i);if(!(n&Pc)){var m=c&&si.call(e,"__wrapped__"),h=v&&si.call(t,"__wrapped__");if(m||h){var p=m?e.value():e,k=h?t.value():t;return i||(i=new Yn),r(p,k,n,o,i)}}return g?(i||(i=new Yn),Sc(e,t,n,o,r,i)):!1}function _r(e,t,n,o,r){return e===t?!0:e==null||t==null||!Fr(e)&&!Fr(t)?e!==e&&t!==t:Mc(e,t,n,o,_r,r)}var Rc=1,Oc=2;function zc(e,t,n,o){var r=n.length,i=r;if(e==null)return!i;for(e=Object(e);r--;){var a=n[r];if(a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<i;){a=n[r];var l=a[0],s=e[l],u=a[1];if(a[2]){if(s===void 0&&!(l in e))return!1}else{var c=new Yn,v;if(!(v===void 0?_r(u,s,Rc|Oc,o,c):v))return!1}}return!0}function ra(e){return e===e&&!Tn(e)}function Ic(e){for(var t=Cr(e),n=t.length;n--;){var o=t[n],r=e[o];t[n]=[o,r,ra(r)]}return t}function ia(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function $c(e){var t=Ic(e);return t.length==1&&t[0][2]?ia(t[0][0],t[0][1]):function(n){return n===e||zc(n,e,t)}}function Ac(e,t){return e!=null&&t in Object(e)}function Ec(e,t,n){t=ta(t,e);for(var o=-1,r=t.length,i=!1;++o<r;){var a=co(t[o]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&wl(r)&&xl(a,r)&&(Vt(e)||Cl(e)))}function Tc(e,t){return e!=null&&Ec(e,t,Ac)}var Fc=1,Bc=2;function Dc(e,t){return kr(e)&&ra(t)?ia(co(e),t):function(n){var o=Pr(n,e);return o===void 0&&o===t?Tc(n,e):_r(t,o,Fc|Bc)}}function Lc(e){return function(t){return t==null?void 0:t[e]}}function Nc(e){return function(t){return na(t,e)}}function Wc(e){return kr(e)?Lc(co(e)):Nc(e)}function Vc(e){return typeof e=="function"?e:e==null?kl:typeof e=="object"?Vt(e)?Dc(e[0],e[1]):$c(e):Wc(e)}function jc(e,t){return e&&Sl(e,t,Cr)}function Hc(e,t){return function(n,o){if(n==null)return n;if(!ur(n))return e(n,o);for(var r=n.length,i=-1,a=Object(n);++i<r&&o(a[i],i,a)!==!1;);return n}}var Kc=Hc(jc),Ro=function(){return Bn.Date.now()},Uc="Expected a function",qc=Math.max,Yc=Math.min;function Gc(e,t,n){var o,r,i,a,l,s,u=0,c=!1,v=!1,g=!0;if(typeof e!="function")throw new TypeError(Uc);t=Jr(t)||0,Tn(n)&&(c=!!n.leading,v="maxWait"in n,i=v?qc(Jr(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g);function m(z){var F=o,X=r;return o=r=void 0,u=z,a=e.apply(X,F),a}function h(z){return u=z,l=setTimeout(b,t),c?m(z):a}function p(z){var F=z-s,X=z-u,U=t-F;return v?Yc(U,i-X):U}function k(z){var F=z-s,X=z-u;return s===void 0||F>=t||F<0||v&&X>=i}function b(){var z=Ro();if(k(z))return _(z);l=setTimeout(b,p(z))}function _(z){return l=void 0,g&&o?m(z):(o=r=void 0,a)}function R(){l!==void 0&&clearTimeout(l),u=0,o=s=r=l=void 0}function y(){return l===void 0?a:_(Ro())}function S(){var z=Ro(),F=k(z);if(o=arguments,r=this,s=z,F){if(l===void 0)return h(s);if(v)return clearTimeout(l),l=setTimeout(b,t),m(s)}return l===void 0&&(l=setTimeout(b,t)),a}return S.cancel=R,S.flush=y,S}function Xc(e,t){var n=-1,o=ur(e)?Array(e.length):[];return Kc(e,function(r,i,a){o[++n]=t(r,i,a)}),o}function Jc(e,t){var n=Vt(e)?Pl:Xc;return n(e,Vc(t))}var Zc="Expected a function";function Qc(e,t,n){var o=!0,r=!0;if(typeof e!="function")throw new TypeError(Zc);return Tn(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),Gc(e,t,{leading:o,maxWait:t,trailing:r})}function Mr(e){const{mergedLocaleRef:t,mergedDateLocaleRef:n}=Fe(_l,null)||{},o=E(()=>{var i,a;return(a=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i[e])!==null&&a!==void 0?a:Ds[e]});return{dateLocaleRef:E(()=>{var i;return(i=n==null?void 0:n.value)!==null&&i!==void 0?i:md}),localeRef:o}}const eu=ce({name:"Add",render(){return f("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),tu=ce({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),nu=ce({name:"ChevronDown",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ou=ce({name:"ChevronRight",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ru=Ml("clear",()=>f("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},f("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},f("g",{fill:"currentColor","fill-rule":"nonzero"},f("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),iu=ce({name:"Empty",render(){return f("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),f("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),au=ce({name:"Eye",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},f("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),f("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),lu=ce({name:"EyeOff",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},f("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),f("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),f("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),f("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),f("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),su=C("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[Z(">",[A("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[Z("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),Z("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),A("placeholder",`
 display: flex;
 `),A("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ti({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Yo=ce({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return Bi("-base-clear",su,de(e,"clsPrefix")),{handleMouseDown(t){t.preventDefault()}}},render(){const{clsPrefix:e}=this;return f("div",{class:`${e}-base-clear`},f(Fi,null,{default:()=>{var t,n;return this.show?f("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Xt(this.$slots.icon,()=>[f(jt,{clsPrefix:e},{default:()=>f(ru,null)})])):f("div",{key:"icon",class:`${e}-base-clear__placeholder`},(n=(t=this.$slots).placeholder)===null||n===void 0?void 0:n.call(t))}}))}}),du=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function di(e){return Array.isArray(e)?e:[e]}const Go={STOP:"STOP"};function aa(e,t){const n=t(e);e.children!==void 0&&n!==Go.STOP&&e.children.forEach(o=>aa(o,t))}function cu(e,t={}){const{preserveGroup:n=!1}=t,o=[],r=n?a=>{a.isLeaf||(o.push(a.key),i(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),i(a.children))};function i(a){a.forEach(r)}return i(e),o}function uu(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function fu(e){return e.children}function hu(e){return e.key}function vu(){return!1}function pu(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function bu(e){return e.disabled===!0}function gu(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Oo(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function zo(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function mu(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function yu(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function wu(e){return(e==null?void 0:e.type)==="group"}function xu(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class Cu extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function ku(e,t,n,o){return oo(t.concat(e),n,o,!1)}function Su(e,t){const n=new Set;return e.forEach(o=>{const r=t.treeNodeMap.get(o);if(r!==void 0){let i=r.parent;for(;i!==null&&!(i.disabled||n.has(i.key));)n.add(i.key),i=i.parent}}),n}function Pu(e,t,n,o){const r=oo(t,n,o,!1),i=oo(e,n,o,!0),a=Su(e,n),l=[];return r.forEach(s=>{(i.has(s)||a.has(s))&&l.push(s)}),l.forEach(s=>r.delete(s)),r}function Io(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:r,indeterminateKeys:i,cascade:a,leafOnly:l,checkStrategy:s,allowNotLoaded:u}=e;if(!a)return o!==void 0?{checkedKeys:mu(n,o),indeterminateKeys:Array.from(i)}:r!==void 0?{checkedKeys:yu(n,r),indeterminateKeys:Array.from(i)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(i)};const{levelTreeNodeMap:c}=t;let v;r!==void 0?v=Pu(r,n,t,u):o!==void 0?v=ku(o,n,t,u):v=oo(n,t,u,!1);const g=s==="parent",m=s==="child"||l,h=v,p=new Set,k=Math.max.apply(null,Array.from(c.keys()));for(let b=k;b>=0;b-=1){const _=b===0,R=c.get(b);for(const y of R){if(y.isLeaf)continue;const{key:S,shallowLoaded:z}=y;if(m&&z&&y.children.forEach(Y=>{!Y.disabled&&!Y.isLeaf&&Y.shallowLoaded&&h.has(Y.key)&&h.delete(Y.key)}),y.disabled||!z)continue;let F=!0,X=!1,U=!0;for(const Y of y.children){const Q=Y.key;if(!Y.disabled){if(U&&(U=!1),h.has(Q))X=!0;else if(p.has(Q)){X=!0,F=!1;break}else if(F=!1,X)break}}F&&!U?(g&&y.children.forEach(Y=>{!Y.disabled&&h.has(Y.key)&&h.delete(Y.key)}),h.add(S)):X&&p.add(S),_&&m&&h.has(S)&&h.delete(S)}}return{checkedKeys:Array.from(h),indeterminateKeys:Array.from(p)}}function oo(e,t,n,o){const{treeNodeMap:r,getChildren:i}=t,a=new Set,l=new Set(e);return e.forEach(s=>{const u=r.get(s);u!==void 0&&aa(u,c=>{if(c.disabled)return Go.STOP;const{key:v}=c;if(!a.has(v)&&(a.add(v),l.add(v),gu(c.rawNode,i))){if(o)return Go.STOP;if(!n)throw new Cu}})}),l}function _u(e,{includeGroup:t=!1,includeSelf:n=!0},o){var r;const i=o.treeNodeMap;let a=e==null?null:(r=i.get(e))!==null&&r!==void 0?r:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(s=>s.key),l}function Mu(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function Ru(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r+1)%o]:r===n.length-1?null:n[r+1]}function ci(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const r=t==="prev"?Ou:Ru,i={reverse:t==="prev"};let a=!1,l=null;function s(u){if(u!==null){if(u===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){l=u;return}if(u.isGroup){const c=Rr(u,i);c!==null?l=c:s(r(u,n))}else{const c=r(u,!1);if(c!==null)s(c);else{const v=zu(u);v!=null&&v.isGroup?s(r(v,n)):n&&s(r(u,!0))}}}}return s(e),l}function Ou(e,t){const n=e.siblings,o=n.length,{index:r}=e;return t?n[(r-1+o)%o]:r===0?null:n[r-1]}function zu(e){return e.parent}function Rr(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:r}=o,i=n?r-1:0,a=n?-1:r,l=n?-1:1;for(let s=i;s!==a;s+=l){const u=o[s];if(!u.disabled&&!u.ignored)if(u.isGroup){const c=Rr(u,t);if(c!==null)return c}else return u}}return null}const Iu={getChild(){return this.ignored?null:Rr(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return ci(this,"next",e)},getPrev(e={}){return ci(this,"prev",e)}};function $u(e,t){const n=t?new Set(t):void 0,o=[];function r(i){i.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&r(a.children)})}return r(e),o}function Au(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function la(e,t,n,o,r,i=null,a=0){const l=[];return e.forEach((s,u)=>{var c;const v=Object.create(o);if(v.rawNode=s,v.siblings=l,v.level=a,v.index=u,v.isFirstChild=u===0,v.isLastChild=u+1===e.length,v.parent=i,!v.ignored){const g=r(s);Array.isArray(g)&&(v.children=la(g,t,n,o,r,v,a+1))}l.push(v),t.set(v.key,v),n.has(a)||n.set(a,[]),(c=n.get(a))===null||c===void 0||c.push(v)}),l}function sa(e,t={}){var n;const o=new Map,r=new Map,{getDisabled:i=bu,getIgnored:a=vu,getIsGroup:l=wu,getKey:s=hu}=t,u=(n=t.getChildren)!==null&&n!==void 0?n:fu,c=t.ignoreEmptyChildren?y=>{const S=u(y);return Array.isArray(S)?S.length?S:null:S}:u,v=Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return uu(this.rawNode,c)},get shallowLoaded(){return pu(this.rawNode,c)},get ignored(){return a(this.rawNode)},contains(y){return Au(this,y)}},Iu),g=la(e,o,r,v,c);function m(y){if(y==null)return null;const S=o.get(y);return S&&!S.isGroup&&!S.ignored?S:null}function h(y){if(y==null)return null;const S=o.get(y);return S&&!S.ignored?S:null}function p(y,S){const z=h(y);return z?z.getPrev(S):null}function k(y,S){const z=h(y);return z?z.getNext(S):null}function b(y){const S=h(y);return S?S.getParent():null}function _(y){const S=h(y);return S?S.getChild():null}const R={treeNodes:g,treeNodeMap:o,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:c,getFlattenedNodes(y){return $u(g,y)},getNode:m,getPrev:p,getNext:k,getParent:b,getChild:_,getFirstAvailableNode(){return Mu(g)},getPath(y,S={}){return _u(y,S,R)},getCheckedKeys(y,S={}){const{cascade:z=!0,leafOnly:F=!1,checkStrategy:X="all",allowNotLoaded:U=!1}=S;return Io({checkedKeys:Oo(y),indeterminateKeys:zo(y),cascade:z,leafOnly:F,checkStrategy:X,allowNotLoaded:U},R)},check(y,S,z={}){const{cascade:F=!0,leafOnly:X=!1,checkStrategy:U="all",allowNotLoaded:Y=!1}=z;return Io({checkedKeys:Oo(S),indeterminateKeys:zo(S),keysToCheck:y==null?[]:di(y),cascade:F,leafOnly:X,checkStrategy:U,allowNotLoaded:Y},R)},uncheck(y,S,z={}){const{cascade:F=!0,leafOnly:X=!1,checkStrategy:U="all",allowNotLoaded:Y=!1}=z;return Io({checkedKeys:Oo(S),indeterminateKeys:zo(S),keysToUncheck:y==null?[]:di(y),cascade:F,leafOnly:X,checkStrategy:U,allowNotLoaded:Y},R)},getNonLeafKeys(y={}){return cu(g,y)}};return R}const Eu=C("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[A("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[A("description",`
 margin-top: 8px;
 `)])]),A("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),A("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Tu=Object.assign(Object.assign({},$e.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Fu=ce({name:"Empty",props:Tu,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:o}=Qe(e),r=$e("Empty","-empty",Eu,Rl,e,t),{localeRef:i}=Mr("Empty"),a=E(()=>{var c,v,g;return(c=e.description)!==null&&c!==void 0?c:(g=(v=o==null?void 0:o.value)===null||v===void 0?void 0:v.Empty)===null||g===void 0?void 0:g.description}),l=E(()=>{var c,v;return((v=(c=o==null?void 0:o.value)===null||c===void 0?void 0:c.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>f(iu,null))}),s=E(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:v},self:{[oe("iconSize",c)]:g,[oe("fontSize",c)]:m,textColor:h,iconColor:p,extraTextColor:k}}=r.value;return{"--n-icon-size":g,"--n-font-size":m,"--n-bezier":v,"--n-text-color":h,"--n-icon-color":p,"--n-extra-text-color":k}}),u=n?nt("empty",E(()=>{let c="";const{size:v}=e;return c+=v[0],c}),s,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:E(()=>a.value||i.value.description),cssVars:n?void 0:s,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),f("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?f("div",{class:`${t}-empty__icon`},e.icon?e.icon():f(jt,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?f("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?f("div",{class:`${t}-empty__extra`},e.extra()):null)}}),ui=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=Fe(mr);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:r}}=this,i=o==null?void 0:o(r),a=t?t(r,!1):bt(r[this.labelField],r,!1),l=f("div",Object.assign({},i,{class:[`${e}-base-select-group-header`,i==null?void 0:i.class]}),a);return r.render?r.render({node:l,option:r}):n?n({node:l,option:r,selected:!1}):l}});function Bu(e,t){return f(Dn,{name:"fade-in-scale-up-transition"},{default:()=>e?f(jt,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(tu)}):null})}const fi=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:r,renderLabelRef:i,renderOptionRef:a,labelFieldRef:l,valueFieldRef:s,showCheckmarkRef:u,nodePropsRef:c,handleOptionClick:v,handleOptionMouseEnter:g}=Fe(mr),m=qe(()=>{const{value:b}=n;return b?e.tmNode.key===b.key:!1});function h(b){const{tmNode:_}=e;_.disabled||v(b,_)}function p(b){const{tmNode:_}=e;_.disabled||g(b,_)}function k(b){const{tmNode:_}=e,{value:R}=m;_.disabled||R||g(b,_)}return{multiple:o,isGrouped:qe(()=>{const{tmNode:b}=e,{parent:_}=b;return _&&_.rawNode.type==="group"}),showCheckmark:u,nodeProps:c,isPending:m,isSelected:qe(()=>{const{value:b}=t,{value:_}=o;if(b===null)return!1;const R=e.tmNode.rawNode[s.value];if(_){const{value:y}=r;return y.has(R)}else return b===R}),labelField:l,renderLabel:i,renderOption:a,handleMouseMove:k,handleMouseEnter:p,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:r,showCheckmark:i,nodeProps:a,renderOption:l,renderLabel:s,handleClick:u,handleMouseEnter:c,handleMouseMove:v}=this,g=Bu(n,e),m=s?[s(t,n),i&&g]:[bt(t[this.labelField],t,n),i&&g],h=a==null?void 0:a(t),p=f("div",Object.assign({},h,{class:[`${e}-base-select-option`,t.class,h==null?void 0:h.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:r,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:i}],style:[(h==null?void 0:h.style)||"",t.style||""],onClick:Po([u,h==null?void 0:h.onClick]),onMouseenter:Po([c,h==null?void 0:h.onMouseenter]),onMousemove:Po([v,h==null?void 0:h.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:p,option:t,selected:n}):l?l({node:p,option:t,selected:n}):p}}),Du=C("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[C("scrollbar",`
 max-height: var(--n-height);
 `),C("virtual-list",`
 max-height: var(--n-height);
 `),C("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[A("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),C("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),C("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),A("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),A("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),A("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),A("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),C("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),C("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[B("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),B("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),B("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),B("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),B("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),B("disabled",`
 cursor: not-allowed;
 `,[je("selected",`
 color: var(--n-option-text-color-disabled);
 `),B("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),A("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[hr({enterScale:"0.5"})])])]),Lu=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},$e.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:o}=Qe(e),r=tn("InternalSelectMenu",n,t),i=$e("InternalSelectMenu","-internal-select-menu",Du,Ol,e,de(e,"clsPrefix")),a=D(null),l=D(null),s=D(null),u=E(()=>e.treeMate.getFlattenedNodes()),c=E(()=>xu(u.value)),v=D(null);function g(){const{treeMate:j}=e;let P=null;const{value:I}=e;I===null?P=j.getFirstAvailableNode():(e.multiple?P=j.getNode((I||[])[(I||[]).length-1]):P=j.getNode(I),(!P||P.disabled)&&(P=j.getFirstAvailableNode())),V(P||null)}function m(){const{value:j}=v;j&&!e.treeMate.getNode(j.key)&&(v.value=null)}let h;ke(()=>e.show,j=>{j?h=ke(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():m(),zt(T)):m()},{immediate:!0}):h==null||h()},{immediate:!0}),$t(()=>{h==null||h()});const p=E(()=>Jn(i.value.self[oe("optionHeight",e.size)])),k=E(()=>ht(i.value.self[oe("padding",e.size)])),b=E(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),_=E(()=>{const j=u.value;return j&&j.length===0}),R=E(()=>{var j,P;return(P=(j=o==null?void 0:o.value)===null||j===void 0?void 0:j.Select)===null||P===void 0?void 0:P.renderEmpty});function y(j){const{onToggle:P}=e;P&&P(j)}function S(j){const{onScroll:P}=e;P&&P(j)}function z(j){var P;(P=s.value)===null||P===void 0||P.sync(),S(j)}function F(){var j;(j=s.value)===null||j===void 0||j.sync()}function X(){const{value:j}=v;return j||null}function U(j,P){P.disabled||V(P,!1)}function Y(j,P){P.disabled||y(P)}function Q(j){var P;Jt(j,"action")||(P=e.onKeyup)===null||P===void 0||P.call(e,j)}function H(j){var P;Jt(j,"action")||(P=e.onKeydown)===null||P===void 0||P.call(e,j)}function O(j){var P;(P=e.onMousedown)===null||P===void 0||P.call(e,j),!e.focusable&&j.preventDefault()}function L(){const{value:j}=v;j&&V(j.getNext({loop:!0}),!0)}function M(){const{value:j}=v;j&&V(j.getPrev({loop:!0}),!0)}function V(j,P=!1){v.value=j,P&&T()}function T(){var j,P;const I=v.value;if(!I)return;const N=c.value(I.key);N!==null&&(e.virtualScroll?(j=l.value)===null||j===void 0||j.scrollTo({index:N}):(P=s.value)===null||P===void 0||P.scrollTo({index:N,elSize:p.value}))}function G(j){var P,I;!((P=a.value)===null||P===void 0)&&P.contains(j.target)&&((I=e.onFocus)===null||I===void 0||I.call(e,j))}function ee(j){var P,I;!((P=a.value)===null||P===void 0)&&P.contains(j.relatedTarget)||(I=e.onBlur)===null||I===void 0||I.call(e,j)}Ke(mr,{handleOptionMouseEnter:U,handleOptionClick:Y,valueSetRef:b,pendingTmNodeRef:v,nodePropsRef:de(e,"nodeProps"),showCheckmarkRef:de(e,"showCheckmark"),multipleRef:de(e,"multiple"),valueRef:de(e,"value"),renderLabelRef:de(e,"renderLabel"),renderOptionRef:de(e,"renderOption"),labelFieldRef:de(e,"labelField"),valueFieldRef:de(e,"valueField")}),Ke(Yi,a),gt(()=>{const{value:j}=s;j&&j.sync()});const ae=E(()=>{const{size:j}=e,{common:{cubicBezierEaseInOut:P},self:{height:I,borderRadius:N,color:fe,groupHeaderTextColor:he,actionDividerColor:Ae,optionTextColorPressed:Ne,optionTextColor:Te,optionTextColorDisabled:pe,optionTextColorActive:Be,optionOpacityDisabled:Me,optionCheckColor:He,actionTextColor:ot,optionColorPending:vt,optionColorActive:tt,loadingColor:dt,loadingSize:Xe,optionColorActivePending:q,[oe("optionFontSize",j)]:K,[oe("optionHeight",j)]:d,[oe("optionPadding",j)]:w}}=i.value;return{"--n-height":I,"--n-action-divider-color":Ae,"--n-action-text-color":ot,"--n-bezier":P,"--n-border-radius":N,"--n-color":fe,"--n-option-font-size":K,"--n-group-header-text-color":he,"--n-option-check-color":He,"--n-option-color-pending":vt,"--n-option-color-active":tt,"--n-option-color-active-pending":q,"--n-option-height":d,"--n-option-opacity-disabled":Me,"--n-option-text-color":Te,"--n-option-text-color-active":Be,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":Ne,"--n-option-padding":w,"--n-option-padding-left":ht(w,"left"),"--n-option-padding-right":ht(w,"right"),"--n-loading-color":dt,"--n-loading-size":Xe}}),{inlineThemeDisabled:ue}=e,le=ue?nt("internal-select-menu",E(()=>e.size[0]),ae,e):void 0,_e={selfRef:a,next:L,prev:M,getPendingTmNode:X};return ea(a,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:t,rtlEnabled:r,virtualListRef:l,scrollbarRef:s,itemSize:p,padding:k,flattenedNodes:u,empty:_,mergedRenderEmpty:R,virtualListContainer(){const{value:j}=l;return j==null?void 0:j.listElRef},virtualListContent(){const{value:j}=l;return j==null?void 0:j.itemsElRef},doScroll:S,handleFocusin:G,handleFocusout:ee,handleKeyUp:Q,handleKeyDown:H,handleMouseDown:O,handleVirtualListResize:F,handleVirtualListScroll:z,cssVars:ue?void 0:ae,themeClass:le==null?void 0:le.themeClass,onRender:le==null?void 0:le.onRender},_e)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:r,onRender:i}=this;return i==null||i(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,`${n}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,r,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ze(e.header,a=>a&&f("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},a)),this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(Di,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Xt(e.empty,()=>{var a;return[((a=this.mergedRenderEmpty)===null||a===void 0?void 0:a.call(this))||f(Fu,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty,size:this.size})]})):f(Li,Object.assign({ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},this.scrollbarProps),{default:()=>t?f(Is,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(ui,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:f(fi,{clsPrefix:n,key:a.key,tmNode:a})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(ui,{key:a.key,clsPrefix:n,tmNode:a}):f(fi,{clsPrefix:n,key:a.key,tmNode:a})))}),Ze(e.action,a=>a&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),f(du,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),$o={top:"bottom",bottom:"top",left:"right",right:"left"},Ue="var(--n-arrow-height) * 1.414",Nu=Z([C("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[Z(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),je("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[je("scrollable",[je("show-header-or-footer","padding: var(--n-padding);")])]),A("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),A("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),B("scrollable, show-header-or-footer",[A("content",`
 padding: var(--n-padding);
 `)])]),C("popover-shared",`
 transform-origin: inherit;
 `,[C("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[C("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ue});
 height: calc(${Ue});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),Z("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),Z("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),Z("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),Z("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),ft("top-start",`
 top: calc(${Ue} / -2);
 left: calc(${_t("top-start")} - var(--v-offset-left));
 `),ft("top",`
 top: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `),ft("top-end",`
 top: calc(${Ue} / -2);
 right: calc(${_t("top-end")} + var(--v-offset-left));
 `),ft("bottom-start",`
 bottom: calc(${Ue} / -2);
 left: calc(${_t("bottom-start")} - var(--v-offset-left));
 `),ft("bottom",`
 bottom: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `),ft("bottom-end",`
 bottom: calc(${Ue} / -2);
 right: calc(${_t("bottom-end")} + var(--v-offset-left));
 `),ft("left-start",`
 left: calc(${Ue} / -2);
 top: calc(${_t("left-start")} - var(--v-offset-top));
 `),ft("left",`
 left: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `),ft("left-end",`
 left: calc(${Ue} / -2);
 bottom: calc(${_t("left-end")} + var(--v-offset-top));
 `),ft("right-start",`
 right: calc(${Ue} / -2);
 top: calc(${_t("right-start")} - var(--v-offset-top));
 `),ft("right",`
 right: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `),ft("right-end",`
 right: calc(${Ue} / -2);
 bottom: calc(${_t("right-end")} + var(--v-offset-top));
 `),...Jc({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),o=n?"width":"height";return e.map(r=>{const i=r.split("-")[1]==="end",l=`calc((${`var(--v-target-${o}, 0px)`} - ${Ue}) / 2)`,s=_t(r);return Z(`[v-placement="${r}"] >`,[C("popover-shared",[B("center-arrow",[C("popover-arrow",`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function _t(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function ft(e,t){const n=e.split("-")[0],o=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return Z(`[v-placement="${e}"] >`,[C("popover-shared",`
 margin-${$o[n]}: var(--n-space);
 `,[B("show-arrow",`
 margin-${$o[n]}: var(--n-space-arrow);
 `),B("overlap",`
 margin: 0;
 `),zl("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${$o[n]}: auto;
 ${o}
 `,[C("popover-arrow",t)])])])}const da=Object.assign(Object.assign({},$e.props),{to:It.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number});function ca({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:o,clsPrefix:r}){return f("div",{key:"__popover-arrow__",style:o,class:[`${r}-popover-arrow-wrapper`,n]},f("div",{class:[`${r}-popover-arrow`,e],style:t}))}const Wu=ce({name:"PopoverBody",inheritAttrs:!1,props:da,setup(e,{slots:t,attrs:n}){const{namespaceRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:a}=Qe(e),l=$e("Popover","-popover",Nu,$l,e,r),s=tn("Popover",a,r),u=D(null),c=Fe("NPopover"),v=D(null),g=D(e.show),m=D(!1);bn(()=>{const{show:U}=e;U&&!Fs()&&!e.internalDeactivateImmediately&&(m.value=!0)});const h=E(()=>{const{trigger:U,onClickoutside:Y}=e,Q=[],{positionManuallyRef:{value:H}}=c;return H||(U==="click"&&!Y&&Q.push([Zn,z,void 0,{capture:!0}]),U==="hover"&&Q.push([ws,S])),Y&&Q.push([Zn,z,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&m.value)&&Q.push([vr,e.show]),Q}),p=E(()=>{const{common:{cubicBezierEaseInOut:U,cubicBezierEaseIn:Y,cubicBezierEaseOut:Q},self:{space:H,spaceArrow:O,padding:L,fontSize:M,textColor:V,dividerColor:T,color:G,boxShadow:ee,borderRadius:ae,arrowHeight:ue,arrowOffset:le,arrowOffsetVertical:_e}}=l.value;return{"--n-box-shadow":ee,"--n-bezier":U,"--n-bezier-ease-in":Y,"--n-bezier-ease-out":Q,"--n-font-size":M,"--n-text-color":V,"--n-color":G,"--n-divider-color":T,"--n-border-radius":ae,"--n-arrow-height":ue,"--n-arrow-offset":le,"--n-arrow-offset-vertical":_e,"--n-padding":L,"--n-space":H,"--n-space-arrow":O}}),k=E(()=>{const U=e.width==="trigger"?void 0:Zt(e.width),Y=[];U&&Y.push({width:U});const{maxWidth:Q,minWidth:H}=e;return Q&&Y.push({maxWidth:Zt(Q)}),H&&Y.push({maxWidth:Zt(H)}),i||Y.push(p.value),Y}),b=i?nt("popover",void 0,p,e):void 0;c.setBodyInstance({syncPosition:_}),$t(()=>{c.setBodyInstance(null)}),ke(de(e,"show"),U=>{e.animated||(U?g.value=!0:g.value=!1)});function _(){var U;(U=u.value)===null||U===void 0||U.syncPosition()}function R(U){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&c.handleMouseEnter(U)}function y(U){e.trigger==="hover"&&e.keepAliveOnHover&&c.handleMouseLeave(U)}function S(U){e.trigger==="hover"&&!F().contains(Vo(U))&&c.handleMouseMoveOutside(U)}function z(U){(e.trigger==="click"&&!F().contains(Vo(U))||e.onClickoutside)&&c.handleClickOutside(U)}function F(){return c.getTriggerElement()}Ke(io,v),Ke(lr,null),Ke(ar,null);function X(){if(b==null||b.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&m.value))return null;let Y;const Q=c.internalRenderBodyRef.value,{value:H}=r;if(Q)Y=Q([`${H}-popover-shared`,(s==null?void 0:s.value)&&`${H}-popover--rtl`,b==null?void 0:b.themeClass.value,e.overlap&&`${H}-popover-shared--overlap`,e.showArrow&&`${H}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${H}-popover-shared--center-arrow`],v,k.value,R,y);else{const{value:O}=c.extraClassRef,{internalTrapFocus:L}=e,M=!Br(t.header)||!Br(t.footer),V=()=>{var T,G;const ee=M?f(pt,null,Ze(t.header,le=>le?f("div",{class:[`${H}-popover__header`,e.headerClass],style:e.headerStyle},le):null),Ze(t.default,le=>le?f("div",{class:[`${H}-popover__content`,e.contentClass],style:e.contentStyle},t):null),Ze(t.footer,le=>le?f("div",{class:[`${H}-popover__footer`,e.footerClass],style:e.footerStyle},le):null)):e.scrollable?(T=t.default)===null||T===void 0?void 0:T.call(t):f("div",{class:[`${H}-popover__content`,e.contentClass],style:e.contentStyle},t),ae=e.scrollable?f(Ni,{themeOverrides:l.value.peerOverrides.Scrollbar,theme:l.value.peers.Scrollbar,contentClass:M?void 0:`${H}-popover__content ${(G=e.contentClass)!==null&&G!==void 0?G:""}`,contentStyle:M?void 0:e.contentStyle},{default:()=>ee}):ee,ue=e.showArrow?ca({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:H}):null;return[ae,ue]};Y=f("div",en({class:[`${H}-popover`,`${H}-popover-shared`,(s==null?void 0:s.value)&&`${H}-popover--rtl`,b==null?void 0:b.themeClass.value,O.map(T=>`${H}-${T}`),{[`${H}-popover--scrollable`]:e.scrollable,[`${H}-popover--show-header-or-footer`]:M,[`${H}-popover--raw`]:e.raw,[`${H}-popover-shared--overlap`]:e.overlap,[`${H}-popover-shared--show-arrow`]:e.showArrow,[`${H}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:v,style:k.value,onKeydown:c.handleKeydown,onMouseenter:R,onMouseleave:y},n),L?f(Il,{active:e.show,autoFocus:!0},{default:V}):V())}return mn(Y,h.value)}return{displayed:m,namespace:o,isMounted:c.isMountedRef,zIndex:c.zIndexRef,followerRef:u,adjustedTo:It(e),followerEnabled:g,renderContentNode:X}},render(){return f(xr,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===It.tdkey},{default:()=>this.animated?f(Dn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),Vu=Object.keys(da),ju={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Hu(e,t,n){ju[t].forEach(o=>{e.props?e.props=Object.assign({},e.props):e.props={};const r=e.props[o],i=n[o];r?e.props[o]=(...a)=>{r(...a),i(...a)}:e.props[o]=i})}const Or={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:It.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Ku=Object.assign(Object.assign(Object.assign({},$e.props),Or),{internalOnAfterLeave:Function,internalRenderBody:Function}),ua=ce({name:"Popover",inheritAttrs:!1,props:Ku,slots:Object,__popover__:!0,setup(e){const t=dr(),n=D(null),o=E(()=>e.show),r=D(e.defaultShow),i=Qt(o,r),a=qe(()=>e.disabled?!1:i.value),l=()=>{if(e.disabled)return!0;const{getDisabled:M}=e;return!!(M!=null&&M())},s=()=>l()?!1:i.value,u=to(e,["arrow","showArrow"]),c=E(()=>e.overlap?!1:u.value);let v=null;const g=D(null),m=D(null),h=qe(()=>e.x!==void 0&&e.y!==void 0);function p(M){const{"onUpdate:show":V,onUpdateShow:T,onShow:G,onHide:ee}=e;r.value=M,V&&Ce(V,M),T&&Ce(T,M),M&&G&&Ce(G,!0),M&&ee&&Ce(ee,!1)}function k(){v&&v.syncPosition()}function b(){const{value:M}=g;M&&(window.clearTimeout(M),g.value=null)}function _(){const{value:M}=m;M&&(window.clearTimeout(M),m.value=null)}function R(){const M=l();if(e.trigger==="focus"&&!M){if(s())return;p(!0)}}function y(){const M=l();if(e.trigger==="focus"&&!M){if(!s())return;p(!1)}}function S(){const M=l();if(e.trigger==="hover"&&!M){if(_(),g.value!==null||s())return;const V=()=>{p(!0),g.value=null},{delay:T}=e;T===0?V():g.value=window.setTimeout(V,T)}}function z(){const M=l();if(e.trigger==="hover"&&!M){if(b(),m.value!==null||!s())return;const V=()=>{p(!1),m.value=null},{duration:T}=e;T===0?V():m.value=window.setTimeout(V,T)}}function F(){z()}function X(M){var V;s()&&(e.trigger==="click"&&(b(),_(),p(!1)),(V=e.onClickoutside)===null||V===void 0||V.call(e,M))}function U(){if(e.trigger==="click"&&!l()){b(),_();const M=!s();p(M)}}function Y(M){e.internalTrapFocus&&M.key==="Escape"&&(b(),_(),p(!1))}function Q(M){r.value=M}function H(){var M;return(M=n.value)===null||M===void 0?void 0:M.targetRef}function O(M){v=M}return Ke("NPopover",{getTriggerElement:H,handleKeydown:Y,handleMouseEnter:S,handleMouseLeave:z,handleClickOutside:X,handleMouseMoveOutside:F,setBodyInstance:O,positionManuallyRef:h,isMountedRef:t,zIndexRef:de(e,"zIndex"),extraClassRef:de(e,"internalExtraClass"),internalRenderBodyRef:de(e,"internalRenderBody")}),bn(()=>{i.value&&l()&&p(!1)}),{binderInstRef:n,positionManually:h,mergedShowConsideringDisabledProp:a,uncontrolledShow:r,mergedShowArrow:c,getMergedShow:s,setShow:Q,handleClick:U,handleMouseEnter:S,handleMouseLeave:z,handleFocus:R,handleBlur:y,syncPosition:k}},render(){var e;const{positionManually:t,$slots:n}=this;let o,r=!1;if(!t&&(o=Al(n,"trigger"),o)){o=Wi(o),o=o.type===El?f("span",[o]):o;const i={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=o.type)===null||e===void 0)&&e.__popover__)r=!0,o.props||(o.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),o.props.internalSyncTargetWithParent=!0,o.props.internalInheritedEventHandlers?o.props.internalInheritedEventHandlers=[i,...o.props.internalInheritedEventHandlers]:o.props.internalInheritedEventHandlers=[i];else{const{internalInheritedEventHandlers:a}=this,l=[i,...a],s={onBlur:u=>{l.forEach(c=>{c.onBlur(u)})},onFocus:u=>{l.forEach(c=>{c.onFocus(u)})},onClick:u=>{l.forEach(c=>{c.onClick(u)})},onMouseenter:u=>{l.forEach(c=>{c.onMouseenter(u)})},onMouseleave:u=>{l.forEach(c=>{c.onMouseleave(u)})}};Hu(o,a?"nested":t?"manual":this.trigger,s)}}return f(yr,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const i=this.getMergedShow();return[this.internalTrapFocus&&i?mn(f("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0}}),[[Ai,{enabled:i,zIndex:this.zIndex}]]):null,t?null:f(wr,null,{default:()=>o}),f(Wu,Vi(this.$props,Vu,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:i})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}});function Uu(e){const{textColor2:t,primaryColorHover:n,primaryColorPressed:o,primaryColor:r,infoColor:i,successColor:a,warningColor:l,errorColor:s,baseColor:u,borderColor:c,opacityDisabled:v,tagColor:g,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:p,borderRadiusSmall:k,fontSizeMini:b,fontSizeTiny:_,fontSizeSmall:R,fontSizeMedium:y,heightMini:S,heightTiny:z,heightSmall:F,heightMedium:X,closeColorHover:U,closeColorPressed:Y,buttonColor2Hover:Q,buttonColor2Pressed:H,fontWeightStrong:O}=e;return Object.assign(Object.assign({},Tl),{closeBorderRadius:k,heightTiny:S,heightSmall:z,heightMedium:F,heightLarge:X,borderRadius:k,opacityDisabled:v,fontSizeTiny:b,fontSizeSmall:_,fontSizeMedium:R,fontSizeLarge:y,fontWeightStrong:O,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:u,colorCheckable:"#0000",colorHoverCheckable:Q,colorPressedCheckable:H,colorChecked:r,colorCheckedHover:n,colorCheckedPressed:o,border:`1px solid ${c}`,textColor:t,color:g,colorBordered:"rgb(250, 250, 252)",closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:p,closeColorHover:U,closeColorPressed:Y,borderPrimary:`1px solid ${Re(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Re(r,{alpha:.12}),colorBorderedPrimary:Re(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:Re(r,{alpha:.12}),closeColorPressedPrimary:Re(r,{alpha:.18}),borderInfo:`1px solid ${Re(i,{alpha:.3})}`,textColorInfo:i,colorInfo:Re(i,{alpha:.12}),colorBorderedInfo:Re(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:Re(i,{alpha:.12}),closeColorPressedInfo:Re(i,{alpha:.18}),borderSuccess:`1px solid ${Re(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:Re(a,{alpha:.12}),colorBorderedSuccess:Re(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:Re(a,{alpha:.12}),closeColorPressedSuccess:Re(a,{alpha:.18}),borderWarning:`1px solid ${Re(l,{alpha:.35})}`,textColorWarning:l,colorWarning:Re(l,{alpha:.15}),colorBorderedWarning:Re(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:Re(l,{alpha:.12}),closeColorPressedWarning:Re(l,{alpha:.18}),borderError:`1px solid ${Re(s,{alpha:.23})}`,textColorError:s,colorError:Re(s,{alpha:.1}),colorBorderedError:Re(s,{alpha:.08}),closeIconColorError:s,closeIconColorHoverError:s,closeIconColorPressedError:s,closeColorHoverError:Re(s,{alpha:.12}),closeColorPressedError:Re(s,{alpha:.18})})}const qu={common:pr,self:Uu},Yu={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Gu=C("tag",`
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
`,[B("strong",`
 font-weight: var(--n-font-weight-strong);
 `),A("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),A("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),A("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),A("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[A("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),A("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),B("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),B("icon, avatar",[B("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),B("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),B("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[je("disabled",[Z("&:hover","background-color: var(--n-color-hover-checkable);",[je("checked","color: var(--n-text-color-hover-checkable);")]),Z("&:active","background-color: var(--n-color-pressed-checkable);",[je("checked","color: var(--n-text-color-pressed-checkable);")])]),B("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[je("disabled",[Z("&:hover","background-color: var(--n-color-checked-hover);"),Z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Xu=Object.assign(Object.assign(Object.assign({},$e.props),Yu),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ju=mt("n-tag"),et=ce({name:"Tag",props:Xu,slots:Object,setup(e){const t=D(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:a}=Qe(e),l=E(()=>{var p,k;return e.size||((k=(p=a==null?void 0:a.value)===null||p===void 0?void 0:p.Tag)===null||k===void 0?void 0:k.size)||"medium"}),s=$e("Tag","-tag",Gu,qu,e,o);Ke(Ju,{roundRef:de(e,"round")});function u(){if(!e.disabled&&e.checkable){const{checked:p,onCheckedChange:k,onUpdateChecked:b,"onUpdate:checked":_}=e;b&&b(!p),_&&_(!p),k&&k(!p)}}function c(p){if(e.triggerClickOnClose||p.stopPropagation(),!e.disabled){const{onClose:k}=e;k&&Ce(k,p)}}const v={setTextContent(p){const{value:k}=t;k&&(k.textContent=p)}},g=tn("Tag",i,o),m=E(()=>{const{type:p,color:{color:k,textColor:b}={}}=e,_=l.value,{common:{cubicBezierEaseInOut:R},self:{padding:y,closeMargin:S,borderRadius:z,opacityDisabled:F,textColorCheckable:X,textColorHoverCheckable:U,textColorPressedCheckable:Y,textColorChecked:Q,colorCheckable:H,colorHoverCheckable:O,colorPressedCheckable:L,colorChecked:M,colorCheckedHover:V,colorCheckedPressed:T,closeBorderRadius:G,fontWeightStrong:ee,[oe("colorBordered",p)]:ae,[oe("closeSize",_)]:ue,[oe("closeIconSize",_)]:le,[oe("fontSize",_)]:_e,[oe("height",_)]:j,[oe("color",p)]:P,[oe("textColor",p)]:I,[oe("border",p)]:N,[oe("closeIconColor",p)]:fe,[oe("closeIconColorHover",p)]:he,[oe("closeIconColorPressed",p)]:Ae,[oe("closeColorHover",p)]:Ne,[oe("closeColorPressed",p)]:Te}}=s.value,pe=ht(S);return{"--n-font-weight-strong":ee,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":R,"--n-border-radius":z,"--n-border":N,"--n-close-icon-size":le,"--n-close-color-pressed":Te,"--n-close-color-hover":Ne,"--n-close-border-radius":G,"--n-close-icon-color":fe,"--n-close-icon-color-hover":he,"--n-close-icon-color-pressed":Ae,"--n-close-icon-color-disabled":fe,"--n-close-margin-top":pe.top,"--n-close-margin-right":pe.right,"--n-close-margin-bottom":pe.bottom,"--n-close-margin-left":pe.left,"--n-close-size":ue,"--n-color":k||(n.value?ae:P),"--n-color-checkable":H,"--n-color-checked":M,"--n-color-checked-hover":V,"--n-color-checked-pressed":T,"--n-color-hover-checkable":O,"--n-color-pressed-checkable":L,"--n-font-size":_e,"--n-height":j,"--n-opacity-disabled":F,"--n-padding":y,"--n-text-color":b||I,"--n-text-color-checkable":X,"--n-text-color-checked":Q,"--n-text-color-hover-checkable":U,"--n-text-color-pressed-checkable":Y}}),h=r?nt("tag",E(()=>{let p="";const{type:k,color:{color:b,textColor:_}={}}=e;return p+=k[0],p+=l.value[0],b&&(p+=`a${Dr(b)}`),_&&(p+=`b${Dr(_)}`),n.value&&(p+="c"),p}),m,e):void 0;return Object.assign(Object.assign({},v),{rtlEnabled:g,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:u,handleCloseClick:c,cssVars:r?void 0:m,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:r,color:{borderColor:i}={},round:a,onRender:l,$slots:s}=this;l==null||l();const u=Ze(s.avatar,v=>v&&f("div",{class:`${n}-tag__avatar`},v)),c=Ze(s.icon,v=>v&&f("div",{class:`${n}-tag__icon`},v));return f("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:u,[`${n}-tag--icon`]:c,[`${n}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},c||u,f("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&r?f(br,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${n}-tag__border`,style:{borderColor:i}}):null)}}),fa=ce({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:t}){return()=>{const{clsPrefix:n}=e;return f(Di,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?f(Yo,{clsPrefix:n,show:e.showClear,onClear:e.onClear},{placeholder:()=>f(jt,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>Xt(t.default,()=>[f(nu,null)])})}):null})}}}),Zu=Z([C("base-selection",`
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
 `,[C("base-loading",`
 color: var(--n-loading-color);
 `),C("base-selection-tags","min-height: var(--n-height);"),A("border, state-border",`
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
 `),A("state-border",`
 z-index: 1;
 border-color: #0000;
 `),C("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[A("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),C("base-selection-overlay",`
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
 `,[A("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),C("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[A("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),C("base-selection-tags",`
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
 `),C("base-selection-label",`
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
 `,[C("base-selection-input",`
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
 `,[A("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),A("render-label",`
 color: var(--n-text-color);
 `)]),je("disabled",[Z("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),B("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),B("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),C("base-selection-label","background-color: var(--n-color-active);"),C("base-selection-tags","background-color: var(--n-color-active);")])]),B("disabled","cursor: not-allowed;",[A("arrow",`
 color: var(--n-arrow-color-disabled);
 `),C("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[C("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),A("render-label",`
 color: var(--n-text-color-disabled);
 `)]),C("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),C("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),C("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[A("input",`
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
 `),A("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>B(`${e}-status`,[A("state-border",`border: var(--n-border-${e});`),je("disabled",[Z("&:hover",[A("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),B("active",[A("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),C("base-selection-label",`background-color: var(--n-color-active-${e});`),C("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),B("focus",[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),C("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),C("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),C("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[A("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Qu=ce({name:"InternalSelection",props:Object.assign(Object.assign({},$e.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Qe(e),o=tn("InternalSelection",n,t),r=D(null),i=D(null),a=D(null),l=D(null),s=D(null),u=D(null),c=D(null),v=D(null),g=D(null),m=D(null),h=D(!1),p=D(!1),k=D(!1),b=$e("InternalSelection","-internal-selection",Zu,Bl,e,de(e,"clsPrefix")),_=E(()=>e.clearable&&!e.disabled&&(k.value||e.active)),R=E(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):bt(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=E(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),S=E(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function z(){var d;const{value:w}=r;if(w){const{value:J}=i;J&&(J.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=g.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function F(){const{value:d}=m;d&&(d.style.display="none")}function X(){const{value:d}=m;d&&(d.style.display="inline-block")}ke(de(e,"active"),d=>{d||F()}),ke(de(e,"pattern"),()=>{e.multiple&&zt(z)});function U(d){const{onFocus:w}=e;w&&w(d)}function Y(d){const{onBlur:w}=e;w&&w(d)}function Q(d){const{onDeleteOption:w}=e;w&&w(d)}function H(d){const{onClear:w}=e;w&&w(d)}function O(d){const{onPatternInput:w}=e;w&&w(d)}function L(d){var w;(!d.relatedTarget||!(!((w=a.value)===null||w===void 0)&&w.contains(d.relatedTarget)))&&U(d)}function M(d){var w;!((w=a.value)===null||w===void 0)&&w.contains(d.relatedTarget)||Y(d)}function V(d){H(d)}function T(){k.value=!0}function G(){k.value=!1}function ee(d){!e.active||!e.filterable||d.target!==i.value&&d.preventDefault()}function ae(d){Q(d)}const ue=D(!1);function le(d){if(d.key==="Backspace"&&!ue.value&&!e.pattern.length){const{selectedOptions:w}=e;w!=null&&w.length&&ae(w[w.length-1])}}let _e=null;function j(d){const{value:w}=r;if(w){const J=d.target.value;w.textContent=J,z()}e.ignoreComposition&&ue.value?_e=d:O(d)}function P(){ue.value=!0}function I(){ue.value=!1,e.ignoreComposition&&O(_e),_e=null}function N(d){var w;p.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,d)}function fe(d){var w;p.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,d)}function he(){var d,w;if(e.filterable)p.value=!1,(d=u.value)===null||d===void 0||d.blur(),(w=i.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:J}=l;J==null||J.blur()}else{const{value:J}=s;J==null||J.blur()}}function Ae(){var d,w,J;e.filterable?(p.value=!1,(d=u.value)===null||d===void 0||d.focus()):e.multiple?(w=l.value)===null||w===void 0||w.focus():(J=s.value)===null||J===void 0||J.focus()}function Ne(){const{value:d}=i;d&&(X(),d.focus())}function Te(){const{value:d}=i;d&&d.blur()}function pe(d){const{value:w}=c;w&&w.setTextContent(`+${d}`)}function Be(){const{value:d}=v;return d}function Me(){return i.value}let He=null;function ot(){He!==null&&window.clearTimeout(He)}function vt(){e.active||(ot(),He=window.setTimeout(()=>{S.value&&(h.value=!0)},100))}function tt(){ot()}function dt(d){d||(ot(),h.value=!1)}ke(S,d=>{d||(h.value=!1)}),gt(()=>{bn(()=>{const d=u.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=p.value?-1:0)})}),ea(a,e.onResize);const{inlineThemeDisabled:Xe}=e,q=E(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:w},self:{fontWeight:J,borderRadius:Pe,color:ye,placeholderColor:rt,textColor:ct,paddingSingle:At,paddingMultiple:Et,caretColor:Ht,colorDisabled:Kt,textColorDisabled:Tt,placeholderColorDisabled:ut,colorActive:$,boxShadowFocus:te,boxShadowActive:se,boxShadowHover:we,border:ve,borderFocus:be,borderHover:Se,borderActive:Le,arrowColor:Je,arrowColorDisabled:wn,loadingColor:on,colorActiveWarning:xn,boxShadowFocusWarning:Ft,boxShadowActiveWarning:Bt,boxShadowHoverWarning:Cn,borderWarning:kn,borderFocusWarning:rn,borderHoverWarning:yt,borderActiveWarning:x,colorActiveError:W,boxShadowFocusError:ie,boxShadowActiveError:Ie,boxShadowHoverError:Ee,borderError:ze,borderFocusError:xt,borderHoverError:Ct,borderActiveError:kt,clearColor:Ut,clearColorHover:qt,clearColorPressed:Sn,clearSize:fo,arrowSize:ho,[oe("height",d)]:vo,[oe("fontSize",d)]:po}}=b.value,an=ht(At),ln=ht(Et);return{"--n-bezier":w,"--n-border":ve,"--n-border-active":Le,"--n-border-focus":be,"--n-border-hover":Se,"--n-border-radius":Pe,"--n-box-shadow-active":se,"--n-box-shadow-focus":te,"--n-box-shadow-hover":we,"--n-caret-color":Ht,"--n-color":ye,"--n-color-active":$,"--n-color-disabled":Kt,"--n-font-size":po,"--n-height":vo,"--n-padding-single-top":an.top,"--n-padding-multiple-top":ln.top,"--n-padding-single-right":an.right,"--n-padding-multiple-right":ln.right,"--n-padding-single-left":an.left,"--n-padding-multiple-left":ln.left,"--n-padding-single-bottom":an.bottom,"--n-padding-multiple-bottom":ln.bottom,"--n-placeholder-color":rt,"--n-placeholder-color-disabled":ut,"--n-text-color":ct,"--n-text-color-disabled":Tt,"--n-arrow-color":Je,"--n-arrow-color-disabled":wn,"--n-loading-color":on,"--n-color-active-warning":xn,"--n-box-shadow-focus-warning":Ft,"--n-box-shadow-active-warning":Bt,"--n-box-shadow-hover-warning":Cn,"--n-border-warning":kn,"--n-border-focus-warning":rn,"--n-border-hover-warning":yt,"--n-border-active-warning":x,"--n-color-active-error":W,"--n-box-shadow-focus-error":ie,"--n-box-shadow-active-error":Ie,"--n-box-shadow-hover-error":Ee,"--n-border-error":ze,"--n-border-focus-error":xt,"--n-border-hover-error":Ct,"--n-border-active-error":kt,"--n-clear-size":fo,"--n-clear-color":Ut,"--n-clear-color-hover":qt,"--n-clear-color-pressed":Sn,"--n-arrow-size":ho,"--n-font-weight":J}}),K=Xe?nt("internal-selection",E(()=>e.size[0]),q,e):void 0;return{mergedTheme:b,mergedClearable:_,mergedClsPrefix:t,rtlEnabled:o,patternInputFocused:p,filterablePlaceholder:R,label:y,selected:S,showTagsPanel:h,isComposing:ue,counterRef:c,counterWrapperRef:v,patternInputMirrorRef:r,patternInputRef:i,selfRef:a,multipleElRef:l,singleElRef:s,patternInputWrapperRef:u,overflowRef:g,inputTagElRef:m,handleMouseDown:ee,handleFocusin:L,handleClear:V,handleMouseEnter:T,handleMouseLeave:G,handleDeleteOption:ae,handlePatternKeyDown:le,handlePatternInputInput:j,handlePatternInputBlur:fe,handlePatternInputFocus:N,handleMouseEnterCounter:vt,handleMouseLeaveCounter:tt,handleFocusout:M,handleCompositionEnd:I,handleCompositionStart:P,onPopoverUpdateShow:dt,focus:Ae,focusInput:Ne,blur:he,blurInput:Te,updateCounter:pe,getCounter:Be,getTail:Me,renderLabel:e.renderLabel,cssVars:Xe?void 0:q,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:r,maxTagCount:i,bordered:a,clsPrefix:l,ellipsisTagPopoverProps:s,onRender:u,renderTag:c,renderLabel:v}=this;u==null||u();const g=i==="responsive",m=typeof i=="number",h=g||m,p=f(Fl,null,{default:()=>f(fa,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var b,_;return(_=(b=this.$slots).arrow)===null||_===void 0?void 0:_.call(b)}})});let k;if(t){const{labelField:b}=this,_=O=>f("div",{class:`${l}-base-selection-tag-wrapper`,key:O.value},c?c({option:O,handleClose:()=>{this.handleDeleteOption(O)}}):f(et,{size:n,closable:!O.disabled,disabled:o,onClose:()=>{this.handleDeleteOption(O)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>v?v(O,!0):bt(O[b],O,!0)})),R=()=>(m?this.selectedOptions.slice(0,i):this.selectedOptions).map(_),y=r?f("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,S=g?()=>f("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(et,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let z;if(m){const O=this.selectedOptions.length-i;O>0&&(z=f("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},f(et,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${O}`})))}const F=g?r?f(qr,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:S,tail:()=>y}):f(qr,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:S}):m&&z?R().concat(z):R(),X=h?()=>f("div",{class:`${l}-base-selection-popover`},g?R():this.selectedOptions.map(_)):void 0,U=h?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},s):null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,H=r?f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},F,g?null:y,p):f("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},F,p);k=f(pt,null,h?f(ua,Object.assign({},U,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>H,default:X}):H,Q)}else if(r){const b=this.pattern||this.isComposing,_=this.active?!b:!this.selected,R=this.active?!1:this.selected;k=f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:Gr(this.label)},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?f("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},f("div",{class:`${l}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):bt(this.label,this.selectedOption,!0))):null,_?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else k=f("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${l}-base-selection-input`,title:Gr(this.label),key:"input"},f("div",{class:`${l}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):v?v(this.selectedOption,!0):bt(this.label,this.selectedOption,!0))):f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),p);return f("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,a?f("div",{class:`${l}-base-selection__border`}):null,a?f("div",{class:`${l}-base-selection__state-border`}):null)}});function ef(e){const{lineHeight:t,borderRadius:n,fontWeightStrong:o,baseColor:r,dividerColor:i,actionColor:a,textColor1:l,textColor2:s,closeColorHover:u,closeColorPressed:c,closeIconColor:v,closeIconColorHover:g,closeIconColorPressed:m,infoColor:h,successColor:p,warningColor:k,errorColor:b,fontSize:_}=e;return Object.assign(Object.assign({},Dl),{fontSize:_,lineHeight:t,titleFontWeight:o,borderRadius:n,border:`1px solid ${i}`,color:a,titleTextColor:l,iconColor:s,contentTextColor:s,closeBorderRadius:n,closeColorHover:u,closeColorPressed:c,closeIconColor:v,closeIconColorHover:g,closeIconColorPressed:m,borderInfo:`1px solid ${Dt(r,Re(h,{alpha:.25}))}`,colorInfo:Dt(r,Re(h,{alpha:.08})),titleTextColorInfo:l,iconColorInfo:h,contentTextColorInfo:s,closeColorHoverInfo:u,closeColorPressedInfo:c,closeIconColorInfo:v,closeIconColorHoverInfo:g,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${Dt(r,Re(p,{alpha:.25}))}`,colorSuccess:Dt(r,Re(p,{alpha:.08})),titleTextColorSuccess:l,iconColorSuccess:p,contentTextColorSuccess:s,closeColorHoverSuccess:u,closeColorPressedSuccess:c,closeIconColorSuccess:v,closeIconColorHoverSuccess:g,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${Dt(r,Re(k,{alpha:.33}))}`,colorWarning:Dt(r,Re(k,{alpha:.08})),titleTextColorWarning:l,iconColorWarning:k,contentTextColorWarning:s,closeColorHoverWarning:u,closeColorPressedWarning:c,closeIconColorWarning:v,closeIconColorHoverWarning:g,closeIconColorPressedWarning:m,borderError:`1px solid ${Dt(r,Re(b,{alpha:.25}))}`,colorError:Dt(r,Re(b,{alpha:.08})),titleTextColorError:l,iconColorError:b,contentTextColorError:s,closeColorHoverError:u,closeColorPressedError:c,closeIconColorError:v,closeIconColorHoverError:g,closeIconColorPressedError:m})}const tf={common:pr,self:ef},nf=C("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[A("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),B("closable",[C("alert-body",[A("title",`
 padding-right: 24px;
 `)])]),A("icon",{color:"var(--n-icon-color)"}),C("alert-body",{padding:"var(--n-padding)"},[A("title",{color:"var(--n-title-text-color)"}),A("content",{color:"var(--n-content-text-color)"})]),Ll({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),A("icon",`
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
 `),A("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),B("show-icon",[C("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),B("right-adjust",[C("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),C("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[A("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[Z("& +",[A("content",{marginTop:"9px"})])]),A("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),A("icon",{transition:"color .3s var(--n-bezier)"})]),of=Object.assign(Object.assign({},$e.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Ao=ce({name:"Alert",inheritAttrs:!1,props:of,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:o,mergedRtlRef:r}=Qe(e),i=$e("Alert","-alert",nf,tf,e,t),a=tn("Alert",r,t),l=E(()=>{const{common:{cubicBezierEaseInOut:m},self:h}=i.value,{fontSize:p,borderRadius:k,titleFontWeight:b,lineHeight:_,iconSize:R,iconMargin:y,iconMarginRtl:S,closeIconSize:z,closeBorderRadius:F,closeSize:X,closeMargin:U,closeMarginRtl:Y,padding:Q}=h,{type:H}=e,{left:O,right:L}=ht(y);return{"--n-bezier":m,"--n-color":h[oe("color",H)],"--n-close-icon-size":z,"--n-close-border-radius":F,"--n-close-color-hover":h[oe("closeColorHover",H)],"--n-close-color-pressed":h[oe("closeColorPressed",H)],"--n-close-icon-color":h[oe("closeIconColor",H)],"--n-close-icon-color-hover":h[oe("closeIconColorHover",H)],"--n-close-icon-color-pressed":h[oe("closeIconColorPressed",H)],"--n-icon-color":h[oe("iconColor",H)],"--n-border":h[oe("border",H)],"--n-title-text-color":h[oe("titleTextColor",H)],"--n-content-text-color":h[oe("contentTextColor",H)],"--n-line-height":_,"--n-border-radius":k,"--n-font-size":p,"--n-title-font-weight":b,"--n-icon-size":R,"--n-icon-margin":y,"--n-icon-margin-rtl":S,"--n-close-size":X,"--n-close-margin":U,"--n-close-margin-rtl":Y,"--n-padding":Q,"--n-icon-margin-left":O,"--n-icon-margin-right":L}}),s=o?nt("alert",E(()=>e.type[0]),l,e):void 0,u=D(!0),c=()=>{const{onAfterLeave:m,onAfterHide:h}=e;m&&m(),h&&h()};return{rtlEnabled:a,mergedClsPrefix:t,mergedBordered:n,visible:u,handleCloseClick:()=>{var m;Promise.resolve((m=e.onClose)===null||m===void 0?void 0:m.call(e)).then(h=>{h!==!1&&(u.value=!1)})},handleAfterLeave:()=>{c()},mergedTheme:i,cssVars:o?void 0:l,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f(Hl,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:t,$slots:n}=this,o={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?f("div",Object.assign({},en(this.$attrs,o)),this.closable&&f(br,{clsPrefix:t,class:`${t}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&f("div",{class:`${t}-alert__border`}),this.showIcon&&f("div",{class:`${t}-alert__icon`,"aria-hidden":"true"},Xt(n.icon,()=>[f(jt,{clsPrefix:t},{default:()=>{switch(this.type){case"success":return f(jl,null);case"info":return f(Vl,null);case"warning":return f(Wl,null);case"error":return f(Nl,null);default:return null}}})])),f("div",{class:[`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`]},Ze(n.header,r=>{const i=r||this.title;return i?f("div",{class:`${t}-alert-body__title`},i):null}),n.default&&f("div",{class:`${t}-alert-body__content`},n))):null}})}});function rf(e){const{textColor2:t,textColor3:n,textColorDisabled:o,primaryColor:r,primaryColorHover:i,inputColor:a,inputColorDisabled:l,borderColor:s,warningColor:u,warningColorHover:c,errorColor:v,errorColorHover:g,borderRadius:m,lineHeight:h,fontSizeTiny:p,fontSizeSmall:k,fontSizeMedium:b,fontSizeLarge:_,heightTiny:R,heightSmall:y,heightMedium:S,heightLarge:z,actionColor:F,clearColor:X,clearColorHover:U,clearColorPressed:Y,placeholderColor:Q,placeholderColorDisabled:H,iconColor:O,iconColorDisabled:L,iconColorHover:M,iconColorPressed:V,fontWeight:T}=e;return Object.assign(Object.assign({},ql),{fontWeight:T,countTextColorDisabled:o,countTextColor:n,heightTiny:R,heightSmall:y,heightMedium:S,heightLarge:z,fontSizeTiny:p,fontSizeSmall:k,fontSizeMedium:b,fontSizeLarge:_,lineHeight:h,lineHeightTextarea:h,borderRadius:m,iconSize:"16px",groupLabelColor:F,groupLabelTextColor:t,textColor:t,textColorDisabled:o,textDecorationColor:t,caretColor:r,placeholderColor:Q,placeholderColorDisabled:H,color:a,colorDisabled:l,colorFocus:a,groupLabelBorder:`1px solid ${s}`,border:`1px solid ${s}`,borderHover:`1px solid ${i}`,borderDisabled:`1px solid ${s}`,borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 0 2px ${Re(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:u,borderWarning:`1px solid ${u}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:a,borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 0 2px ${Re(u,{alpha:.2})}`,caretColorWarning:u,loadingColorError:v,borderError:`1px solid ${v}`,borderHoverError:`1px solid ${g}`,colorFocusError:a,borderFocusError:`1px solid ${g}`,boxShadowFocusError:`0 0 0 2px ${Re(v,{alpha:.2})}`,caretColorError:v,clearColor:X,clearColorHover:U,clearColorPressed:Y,iconColor:O,iconColorDisabled:L,iconColorHover:M,iconColorPressed:V,suffixTextColor:t})}const af=Kl({name:"Input",common:pr,peers:{Scrollbar:Ul},self:rf}),ha=mt("n-input"),lf=C("input",`
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
`,[A("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),A("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
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
 `),A("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[Z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),Z("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),Z("&:-webkit-autofill ~",[A("placeholder","display: none;")])]),B("round",[je("textarea","border-radius: calc(var(--n-height) / 2);")]),A("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[Z("span",`
 width: 100%;
 display: inline-block;
 `)]),B("textarea",[A("placeholder","overflow: visible;")]),je("autosize","width: 100%;"),B("autosize",[A("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),C("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),A("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),A("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[Z("&[type=password]::-ms-reveal","display: none;"),Z("+",[A("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),je("textarea",[A("placeholder","white-space: nowrap;")]),A("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),B("textarea","width: 100%;",[C("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),B("resizable",[C("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),A("textarea-el, textarea-mirror, placeholder",`
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
 `),A("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),B("pair",[A("input-el, placeholder","text-align: center;"),A("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[C("icon",`
 color: var(--n-icon-color);
 `),C("base-icon",`
 color: var(--n-icon-color);
 `)])]),B("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[A("border","border: var(--n-border-disabled);"),A("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),A("placeholder","color: var(--n-placeholder-color-disabled);"),A("separator","color: var(--n-text-color-disabled);",[C("icon",`
 color: var(--n-icon-color-disabled);
 `),C("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),C("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),A("suffix, prefix","color: var(--n-text-color-disabled);",[C("icon",`
 color: var(--n-icon-color-disabled);
 `),C("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),je("disabled",[A("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[Z("&:hover",`
 color: var(--n-icon-color-hover);
 `),Z("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),Z("&:hover",[A("state-border","border: var(--n-border-hover);")]),B("focus","background-color: var(--n-color-focus);",[A("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),A("border, state-border",`
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
 `),A("state-border",`
 border-color: #0000;
 z-index: 1;
 `),A("prefix","margin-right: 4px;"),A("suffix",`
 margin-left: 4px;
 `),A("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[C("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),C("base-clear",`
 font-size: var(--n-icon-size);
 `,[A("placeholder",[C("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),Z(">",[C("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),C("base-icon",`
 font-size: var(--n-icon-size);
 `)]),C("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>B(`${e}-status`,[je("disabled",[C("base-loading",`
 color: var(--n-loading-color-${e})
 `),A("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),A("state-border",`
 border: var(--n-border-${e});
 `),Z("&:hover",[A("state-border",`
 border: var(--n-border-hover-${e});
 `)]),Z("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),B("focus",`
 background-color: var(--n-color-focus-${e});
 `,[A("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),sf=C("input",[B("disabled",[A("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function df(e){let t=0;for(const n of e)t++;return t}function jn(e){return e===""||e==null}function cf(e){const t=D(null);function n(){const{value:i}=e;if(!(i!=null&&i.focus)){r();return}const{selectionStart:a,selectionEnd:l,value:s}=i;if(a==null||l==null){r();return}t.value={start:a,end:l,beforeText:s.slice(0,a),afterText:s.slice(l)}}function o(){var i;const{value:a}=t,{value:l}=e;if(!a||!l)return;const{value:s}=l,{start:u,beforeText:c,afterText:v}=a;let g=s.length;if(s.endsWith(v))g=s.length-v.length;else if(s.startsWith(c))g=c.length;else{const m=c[u-1],h=s.indexOf(m,u-1);h!==-1&&(g=h+1)}(i=l.setSelectionRange)===null||i===void 0||i.call(l,g,g)}function r(){t.value=null}return ke(e,r),{recordCursor:n,restoreCursor:o}}const hi=ce({name:"InputWordCount",setup(e,{slots:t}){const{mergedValueRef:n,maxlengthRef:o,mergedClsPrefixRef:r,countGraphemesRef:i}=Fe(ha),a=E(()=>{const{value:l}=n;return l===null||Array.isArray(l)?0:(i.value||df)(l)});return()=>{const{value:l}=o,{value:s}=n;return f("span",{class:`${r.value}-input-word-count`},Yl(t.default,{value:s===null||Array.isArray(s)?"":s},()=>[l===void 0?a.value:`${a.value} / ${l}`]))}}}),uf=Object.assign(Object.assign({},$e.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),On=ce({name:"Input",props:uf,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:o,mergedRtlRef:r,mergedComponentPropsRef:i}=Qe(e),a=$e("Input","-input",lf,af,e,t);Gl&&Bi("-input-safari",sf,t);const l=D(null),s=D(null),u=D(null),c=D(null),v=D(null),g=D(null),m=D(null),h=cf(m),p=D(null),{localeRef:k}=Mr("Input"),b=D(e.defaultValue),_=de(e,"value"),R=Qt(_,b),y=gr(e,{mergedSize:x=>{var W,ie;const{size:Ie}=e;if(Ie)return Ie;const{mergedSize:Ee}=x||{};if(Ee!=null&&Ee.value)return Ee.value;const ze=(ie=(W=i==null?void 0:i.value)===null||W===void 0?void 0:W.Input)===null||ie===void 0?void 0:ie.size;return ze||"medium"}}),{mergedSizeRef:S,mergedDisabledRef:z,mergedStatusRef:F}=y,X=D(!1),U=D(!1),Y=D(!1),Q=D(!1);let H=null;const O=E(()=>{const{placeholder:x,pair:W}=e;return W?Array.isArray(x)?x:x===void 0?["",""]:[x,x]:x===void 0?[k.value.placeholder]:[x]}),L=E(()=>{const{value:x}=Y,{value:W}=R,{value:ie}=O;return!x&&(jn(W)||Array.isArray(W)&&jn(W[0]))&&ie[0]}),M=E(()=>{const{value:x}=Y,{value:W}=R,{value:ie}=O;return!x&&ie[1]&&(jn(W)||Array.isArray(W)&&jn(W[1]))}),V=qe(()=>e.internalForceFocus||X.value),T=qe(()=>{if(z.value||e.readonly||!e.clearable||!V.value&&!U.value)return!1;const{value:x}=R,{value:W}=V;return e.pair?!!(Array.isArray(x)&&(x[0]||x[1]))&&(U.value||W):!!x&&(U.value||W)}),G=E(()=>{const{showPasswordOn:x}=e;if(x)return x;if(e.showPasswordToggle)return"click"}),ee=D(!1),ae=E(()=>{const{textDecoration:x}=e;return x?Array.isArray(x)?x.map(W=>({textDecoration:W})):[{textDecoration:x}]:["",""]}),ue=D(void 0),le=()=>{var x,W;if(e.type==="textarea"){const{autosize:ie}=e;if(ie&&(ue.value=(W=(x=p.value)===null||x===void 0?void 0:x.$el)===null||W===void 0?void 0:W.offsetWidth),!s.value||typeof ie=="boolean")return;const{paddingTop:Ie,paddingBottom:Ee,lineHeight:ze}=window.getComputedStyle(s.value),xt=Number(Ie.slice(0,-2)),Ct=Number(Ee.slice(0,-2)),kt=Number(ze.slice(0,-2)),{value:Ut}=u;if(!Ut)return;if(ie.minRows){const qt=Math.max(ie.minRows,1),Sn=`${xt+Ct+kt*qt}px`;Ut.style.minHeight=Sn}if(ie.maxRows){const qt=`${xt+Ct+kt*ie.maxRows}px`;Ut.style.maxHeight=qt}}},_e=E(()=>{const{maxlength:x}=e;return x===void 0?void 0:Number(x)});gt(()=>{const{value:x}=R;Array.isArray(x)||Je(x)});const j=sr().proxy;function P(x,W){const{onUpdateValue:ie,"onUpdate:value":Ie,onInput:Ee}=e,{nTriggerFormInput:ze}=y;ie&&Ce(ie,x,W),Ie&&Ce(Ie,x,W),Ee&&Ce(Ee,x,W),b.value=x,ze()}function I(x,W){const{onChange:ie}=e,{nTriggerFormChange:Ie}=y;ie&&Ce(ie,x,W),b.value=x,Ie()}function N(x){const{onBlur:W}=e,{nTriggerFormBlur:ie}=y;W&&Ce(W,x),ie()}function fe(x){const{onFocus:W}=e,{nTriggerFormFocus:ie}=y;W&&Ce(W,x),ie()}function he(x){const{onClear:W}=e;W&&Ce(W,x)}function Ae(x){const{onInputBlur:W}=e;W&&Ce(W,x)}function Ne(x){const{onInputFocus:W}=e;W&&Ce(W,x)}function Te(){const{onDeactivate:x}=e;x&&Ce(x)}function pe(){const{onActivate:x}=e;x&&Ce(x)}function Be(x){const{onClick:W}=e;W&&Ce(W,x)}function Me(x){const{onWrapperFocus:W}=e;W&&Ce(W,x)}function He(x){const{onWrapperBlur:W}=e;W&&Ce(W,x)}function ot(){Y.value=!0}function vt(x){Y.value=!1,x.target===g.value?tt(x,1):tt(x,0)}function tt(x,W=0,ie="input"){const Ie=x.target.value;if(Je(Ie),x instanceof InputEvent&&!x.isComposing&&(Y.value=!1),e.type==="textarea"){const{value:ze}=p;ze&&ze.syncUnifiedContainer()}if(H=Ie,Y.value)return;h.recordCursor();const Ee=dt(Ie);if(Ee)if(!e.pair)ie==="input"?P(Ie,{source:W}):I(Ie,{source:W});else{let{value:ze}=R;Array.isArray(ze)?ze=[ze[0],ze[1]]:ze=["",""],ze[W]=Ie,ie==="input"?P(ze,{source:W}):I(ze,{source:W})}j.$forceUpdate(),Ee||zt(h.restoreCursor)}function dt(x){const{countGraphemes:W,maxlength:ie,minlength:Ie}=e;if(W){let ze;if(ie!==void 0&&(ze===void 0&&(ze=W(x)),ze>Number(ie))||Ie!==void 0&&(ze===void 0&&(ze=W(x)),ze<Number(ie)))return!1}const{allowInput:Ee}=e;return typeof Ee=="function"?Ee(x):!0}function Xe(x){Ae(x),x.relatedTarget===l.value&&Te(),x.relatedTarget!==null&&(x.relatedTarget===v.value||x.relatedTarget===g.value||x.relatedTarget===s.value)||(Q.value=!1),w(x,"blur"),m.value=null}function q(x,W){Ne(x),X.value=!0,Q.value=!0,pe(),w(x,"focus"),W===0?m.value=v.value:W===1?m.value=g.value:W===2&&(m.value=s.value)}function K(x){e.passivelyActivated&&(He(x),w(x,"blur"))}function d(x){e.passivelyActivated&&(X.value=!0,Me(x),w(x,"focus"))}function w(x,W){x.relatedTarget!==null&&(x.relatedTarget===v.value||x.relatedTarget===g.value||x.relatedTarget===s.value||x.relatedTarget===l.value)||(W==="focus"?(fe(x),X.value=!0):W==="blur"&&(N(x),X.value=!1))}function J(x,W){tt(x,W,"change")}function Pe(x){Be(x)}function ye(x){he(x),rt()}function rt(){e.pair?(P(["",""],{source:"clear"}),I(["",""],{source:"clear"})):(P("",{source:"clear"}),I("",{source:"clear"}))}function ct(x){const{onMousedown:W}=e;W&&W(x);const{tagName:ie}=x.target;if(ie!=="INPUT"&&ie!=="TEXTAREA"){if(e.resizable){const{value:Ie}=l;if(Ie){const{left:Ee,top:ze,width:xt,height:Ct}=Ie.getBoundingClientRect(),kt=14;if(Ee+xt-kt<x.clientX&&x.clientX<Ee+xt&&ze+Ct-kt<x.clientY&&x.clientY<ze+Ct)return}}x.preventDefault(),X.value||se()}}function At(){var x;U.value=!0,e.type==="textarea"&&((x=p.value)===null||x===void 0||x.handleMouseEnterWrapper())}function Et(){var x;U.value=!1,e.type==="textarea"&&((x=p.value)===null||x===void 0||x.handleMouseLeaveWrapper())}function Ht(){z.value||G.value==="click"&&(ee.value=!ee.value)}function Kt(x){if(z.value)return;x.preventDefault();const W=Ie=>{Ie.preventDefault(),lt("mouseup",document,W)};if(at("mouseup",document,W),G.value!=="mousedown")return;ee.value=!0;const ie=()=>{ee.value=!1,lt("mouseup",document,ie)};at("mouseup",document,ie)}function Tt(x){e.onKeyup&&Ce(e.onKeyup,x)}function ut(x){switch(e.onKeydown&&Ce(e.onKeydown,x),x.key){case"Escape":te();break;case"Enter":$(x);break}}function $(x){var W,ie;if(e.passivelyActivated){const{value:Ie}=Q;if(Ie){e.internalDeactivateOnEnter&&te();return}x.preventDefault(),e.type==="textarea"?(W=s.value)===null||W===void 0||W.focus():(ie=v.value)===null||ie===void 0||ie.focus()}}function te(){e.passivelyActivated&&(Q.value=!1,zt(()=>{var x;(x=l.value)===null||x===void 0||x.focus()}))}function se(){var x,W,ie;z.value||(e.passivelyActivated?(x=l.value)===null||x===void 0||x.focus():((W=s.value)===null||W===void 0||W.focus(),(ie=v.value)===null||ie===void 0||ie.focus()))}function we(){var x;!((x=l.value)===null||x===void 0)&&x.contains(document.activeElement)&&document.activeElement.blur()}function ve(){var x,W;(x=s.value)===null||x===void 0||x.select(),(W=v.value)===null||W===void 0||W.select()}function be(){z.value||(s.value?s.value.focus():v.value&&v.value.focus())}function Se(){const{value:x}=l;x!=null&&x.contains(document.activeElement)&&x!==document.activeElement&&te()}function Le(x){if(e.type==="textarea"){const{value:W}=s;W==null||W.scrollTo(x)}else{const{value:W}=v;W==null||W.scrollTo(x)}}function Je(x){const{type:W,pair:ie,autosize:Ie}=e;if(!ie&&Ie)if(W==="textarea"){const{value:Ee}=u;Ee&&(Ee.textContent=`${x??""}\r
`)}else{const{value:Ee}=c;Ee&&(x?Ee.textContent=x:Ee.innerHTML="&nbsp;")}}function wn(){le()}const on=D({top:"0"});function xn(x){var W;const{scrollTop:ie}=x.target;on.value.top=`${-ie}px`,(W=p.value)===null||W===void 0||W.syncUnifiedContainer()}let Ft=null;bn(()=>{const{autosize:x,type:W}=e;x&&W==="textarea"?Ft=ke(R,ie=>{!Array.isArray(ie)&&ie!==H&&Je(ie)}):Ft==null||Ft()});let Bt=null;bn(()=>{e.type==="textarea"?Bt=ke(R,x=>{var W;!Array.isArray(x)&&x!==H&&((W=p.value)===null||W===void 0||W.syncUnifiedContainer())}):Bt==null||Bt()}),Ke(ha,{mergedValueRef:R,maxlengthRef:_e,mergedClsPrefixRef:t,countGraphemesRef:de(e,"countGraphemes")});const Cn={wrapperElRef:l,inputElRef:v,textareaElRef:s,isCompositing:Y,clear:rt,focus:se,blur:we,select:ve,deactivate:Se,activate:be,scrollTo:Le},kn=tn("Input",r,t),rn=E(()=>{const{value:x}=S,{common:{cubicBezierEaseInOut:W},self:{color:ie,borderRadius:Ie,textColor:Ee,caretColor:ze,caretColorError:xt,caretColorWarning:Ct,textDecorationColor:kt,border:Ut,borderDisabled:qt,borderHover:Sn,borderFocus:fo,placeholderColor:ho,placeholderColorDisabled:vo,lineHeightTextarea:po,colorDisabled:an,colorFocus:ln,textColorDisabled:_a,boxShadowFocus:Ma,iconSize:Ra,colorFocusWarning:Oa,boxShadowFocusWarning:za,borderWarning:Ia,borderFocusWarning:$a,borderHoverWarning:Aa,colorFocusError:Ea,boxShadowFocusError:Ta,borderError:Fa,borderFocusError:Ba,borderHoverError:Da,clearSize:La,clearColor:Na,clearColorHover:Wa,clearColorPressed:Va,iconColor:ja,iconColorDisabled:Ha,suffixTextColor:Ka,countTextColor:Ua,countTextColorDisabled:qa,iconColorHover:Ya,iconColorPressed:Ga,loadingColor:Xa,loadingColorError:Ja,loadingColorWarning:Za,fontWeight:Qa,[oe("padding",x)]:el,[oe("fontSize",x)]:tl,[oe("height",x)]:nl}}=a.value,{left:ol,right:rl}=ht(el);return{"--n-bezier":W,"--n-count-text-color":Ua,"--n-count-text-color-disabled":qa,"--n-color":ie,"--n-font-size":tl,"--n-font-weight":Qa,"--n-border-radius":Ie,"--n-height":nl,"--n-padding-left":ol,"--n-padding-right":rl,"--n-text-color":Ee,"--n-caret-color":ze,"--n-text-decoration-color":kt,"--n-border":Ut,"--n-border-disabled":qt,"--n-border-hover":Sn,"--n-border-focus":fo,"--n-placeholder-color":ho,"--n-placeholder-color-disabled":vo,"--n-icon-size":Ra,"--n-line-height-textarea":po,"--n-color-disabled":an,"--n-color-focus":ln,"--n-text-color-disabled":_a,"--n-box-shadow-focus":Ma,"--n-loading-color":Xa,"--n-caret-color-warning":Ct,"--n-color-focus-warning":Oa,"--n-box-shadow-focus-warning":za,"--n-border-warning":Ia,"--n-border-focus-warning":$a,"--n-border-hover-warning":Aa,"--n-loading-color-warning":Za,"--n-caret-color-error":xt,"--n-color-focus-error":Ea,"--n-box-shadow-focus-error":Ta,"--n-border-error":Fa,"--n-border-focus-error":Ba,"--n-border-hover-error":Da,"--n-loading-color-error":Ja,"--n-clear-color":Na,"--n-clear-size":La,"--n-clear-color-hover":Wa,"--n-clear-color-pressed":Va,"--n-icon-color":ja,"--n-icon-color-hover":Ya,"--n-icon-color-pressed":Ga,"--n-icon-color-disabled":Ha,"--n-suffix-text-color":Ka}}),yt=o?nt("input",E(()=>{const{value:x}=S;return x[0]}),rn,e):void 0;return Object.assign(Object.assign({},Cn),{wrapperElRef:l,inputElRef:v,inputMirrorElRef:c,inputEl2Ref:g,textareaElRef:s,textareaMirrorElRef:u,textareaScrollbarInstRef:p,rtlEnabled:kn,uncontrolledValue:b,mergedValue:R,passwordVisible:ee,mergedPlaceholder:O,showPlaceholder1:L,showPlaceholder2:M,mergedFocus:V,isComposing:Y,activated:Q,showClearButton:T,mergedSize:S,mergedDisabled:z,textDecorationStyle:ae,mergedClsPrefix:t,mergedBordered:n,mergedShowPasswordOn:G,placeholderStyle:on,mergedStatus:F,textAreaScrollContainerWidth:ue,handleTextAreaScroll:xn,handleCompositionStart:ot,handleCompositionEnd:vt,handleInput:tt,handleInputBlur:Xe,handleInputFocus:q,handleWrapperBlur:K,handleWrapperFocus:d,handleMouseEnter:At,handleMouseLeave:Et,handleMouseDown:ct,handleChange:J,handleClick:Pe,handleClear:ye,handlePasswordToggleClick:Ht,handlePasswordToggleMousedown:Kt,handleWrapperKeydown:ut,handleWrapperKeyup:Tt,handleTextAreaMirrorResize:wn,getTextareaScrollContainer:()=>s.value,mergedTheme:a,cssVars:o?void 0:rn,themeClass:yt==null?void 0:yt.themeClass,onRender:yt==null?void 0:yt.onRender})},render(){var e,t,n,o,r,i,a;const{mergedClsPrefix:l,mergedStatus:s,themeClass:u,type:c,countGraphemes:v,onRender:g}=this,m=this.$slots;return g==null||g(),f("div",{ref:"wrapperElRef",class:[`${l}-input`,`${l}-input--${this.mergedSize}-size`,u,s&&`${l}-input--${s}-status`,{[`${l}-input--rtl`]:this.rtlEnabled,[`${l}-input--disabled`]:this.mergedDisabled,[`${l}-input--textarea`]:c==="textarea",[`${l}-input--resizable`]:this.resizable&&!this.autosize,[`${l}-input--autosize`]:this.autosize,[`${l}-input--round`]:this.round&&c!=="textarea",[`${l}-input--pair`]:this.pair,[`${l}-input--focus`]:this.mergedFocus,[`${l}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},f("div",{class:`${l}-input-wrapper`},Ze(m.prefix,h=>h&&f("div",{class:`${l}-input__prefix`},h)),c==="textarea"?f(Li,{ref:"textareaScrollbarInstRef",class:`${l}-input__textarea`,container:this.getTextareaScrollContainer,theme:(t=(e=this.theme)===null||e===void 0?void 0:e.peers)===null||t===void 0?void 0:t.Scrollbar,themeOverrides:(o=(n=this.themeOverrides)===null||n===void 0?void 0:n.peers)===null||o===void 0?void 0:o.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var h,p;const{textAreaScrollContainerWidth:k}=this,b={width:this.autosize&&k&&`${k}px`};return f(pt,null,f("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${l}-input__textarea-el`,(h=this.inputProps)===null||h===void 0?void 0:h.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(p=this.inputProps)===null||p===void 0?void 0:p.style,b],onBlur:this.handleInputBlur,onFocus:_=>{this.handleInputFocus(_,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?f("div",{class:`${l}-input__placeholder`,style:[this.placeholderStyle,b],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?f(hn,{onResize:this.handleTextAreaMirrorResize},{default:()=>f("div",{ref:"textareaMirrorElRef",class:`${l}-input__textarea-mirror`,key:"mirror"})}):null)}}):f("div",{class:`${l}-input__input`},f("input",Object.assign({type:c==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":c},this.inputProps,{ref:"inputElRef",class:[`${l}-input__input-el`,(r=this.inputProps)===null||r===void 0?void 0:r.class],style:[this.textDecorationStyle[0],(i=this.inputProps)===null||i===void 0?void 0:i.style],tabindex:this.passivelyActivated&&!this.activated?-1:(a=this.inputProps)===null||a===void 0?void 0:a.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,0)},onInput:h=>{this.handleInput(h,0)},onChange:h=>{this.handleChange(h,0)}})),this.showPlaceholder1?f("div",{class:`${l}-input__placeholder`},f("span",null,this.mergedPlaceholder[0])):null,this.autosize?f("div",{class:`${l}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Ze(m.suffix,h=>h||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?f("div",{class:`${l}-input__suffix`},[Ze(m["clear-icon-placeholder"],p=>(this.clearable||p)&&f(Yo,{clsPrefix:l,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>p,icon:()=>{var k,b;return(b=(k=this.$slots)["clear-icon"])===null||b===void 0?void 0:b.call(k)}})),this.internalLoadingBeforeSuffix?null:h,this.loading!==void 0?f(fa,{clsPrefix:l,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?h:null,this.showCount&&this.type!=="textarea"?f(hi,null,{default:p=>{var k;const{renderCount:b}=this;return b?b(p):(k=m.count)===null||k===void 0?void 0:k.call(m,p)}}):null,this.mergedShowPasswordOn&&this.type==="password"?f("div",{class:`${l}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Xt(m["password-visible-icon"],()=>[f(jt,{clsPrefix:l},{default:()=>f(au,null)})]):Xt(m["password-invisible-icon"],()=>[f(jt,{clsPrefix:l},{default:()=>f(lu,null)})])):null]):null)),this.pair?f("span",{class:`${l}-input__separator`},Xt(m.separator,()=>[this.separator])):null,this.pair?f("div",{class:`${l}-input-wrapper`},f("div",{class:`${l}-input__input`},f("input",{ref:"inputEl2Ref",type:this.type,class:`${l}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:v?void 0:this.maxlength,minlength:v?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:h=>{this.handleInputFocus(h,1)},onInput:h=>{this.handleInput(h,1)},onChange:h=>{this.handleChange(h,1)}}),this.showPlaceholder2?f("div",{class:`${l}-input__placeholder`},f("span",null,this.mergedPlaceholder[1])):null),Ze(m.suffix,h=>(this.clearable||h)&&f("div",{class:`${l}-input__suffix`},[this.clearable&&f(Yo,{clsPrefix:l,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var p;return(p=m["clear-icon"])===null||p===void 0?void 0:p.call(m)},placeholder:()=>{var p;return(p=m["clear-icon-placeholder"])===null||p===void 0?void 0:p.call(m)}}),h]))):null,this.mergedBordered?f("div",{class:`${l}-input__border`}):null,this.mergedBordered?f("div",{class:`${l}-input__state-border`}):null,this.showCount&&c==="textarea"?f(hi,null,{default:h=>{var p;const{renderCount:k}=this;return k?k(h):(p=m.count)===null||p===void 0?void 0:p.call(m,h)}}):null)}});function ro(e){return e.type==="group"}function va(e){return e.type==="ignored"}function Eo(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ff(e,t){return{getIsGroup:ro,getIgnored:va,getKey(o){return ro(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function hf(e,t,n,o){if(!t)return e;function r(i){if(!Array.isArray(i))return[];const a=[];for(const l of i)if(ro(l)){const s=r(l[o]);s.length&&a.push(Object.assign({},l,{[o]:s}))}else{if(va(l))continue;t(n,l)&&a.push(l)}return a}return r(e)}function vf(e,t,n){const o=new Map;return e.forEach(r=>{ro(r)?r[n].forEach(i=>{o.set(i[t],i)}):o.set(r[t],r)}),o}const pf=mt("n-checkbox-group"),bf=()=>f("svg",{viewBox:"0 0 64 64",class:"check-icon"},f("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),gf=()=>f("svg",{viewBox:"0 0 100 100",class:"line-icon"},f("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),mf=Z([C("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[B("show-label","line-height: var(--n-label-line-height);"),Z("&:hover",[C("checkbox-box",[A("border","border: var(--n-border-checked);")])]),Z("&:focus:not(:active)",[C("checkbox-box",[A("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),B("inside-table",[C("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),B("checked",[C("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[C("checkbox-icon",[Z(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("indeterminate",[C("checkbox-box",[C("checkbox-icon",[Z(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),Z(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),B("checked, indeterminate",[Z("&:focus:not(:active)",[C("checkbox-box",[A("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),C("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[A("border",{border:"var(--n-border-checked)"})])]),B("disabled",{cursor:"not-allowed"},[B("checked",[C("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[A("border",{border:"var(--n-border-disabled-checked)"}),C("checkbox-icon",[Z(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),C("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[A("border",`
 border: var(--n-border-disabled);
 `),C("checkbox-icon",[Z(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),A("label",`
 color: var(--n-text-color-disabled);
 `)]),C("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),C("checkbox-box",`
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
 `,[A("border",`
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
 `),C("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[Z(".check-icon, .line-icon",`
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
 `),Ti({left:"1px",top:"1px"})])]),A("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[Z("&:empty",{display:"none"})])]),Xl(C("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Jl(C("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),yf=Object.assign(Object.assign({},$e.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),wf=ce({name:"Checkbox",props:yf,setup(e){const t=Fe(pf,null),n=D(null),{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:i,mergedComponentPropsRef:a}=Qe(e),l=D(e.defaultChecked),s=de(e,"checked"),u=Qt(s,l),c=qe(()=>{if(t){const F=t.valueSetRef.value;return F&&e.value!==void 0?F.has(e.value):!1}else return u.value===e.checkedValue}),v=gr(e,{mergedSize(F){var X,U;const{size:Y}=e;if(Y!==void 0)return Y;if(t){const{value:H}=t.mergedSizeRef;if(H!==void 0)return H}if(F){const{mergedSize:H}=F;if(H!==void 0)return H.value}const Q=(U=(X=a==null?void 0:a.value)===null||X===void 0?void 0:X.Checkbox)===null||U===void 0?void 0:U.size;return Q||"medium"},mergedDisabled(F){const{disabled:X}=e;if(X!==void 0)return X;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:U},checkedCountRef:Y}=t;if(U!==void 0&&Y.value>=U&&!c.value)return!0;const{minRef:{value:Q}}=t;if(Q!==void 0&&Y.value<=Q&&c.value)return!0}return F?F.disabled.value:!1}}),{mergedDisabledRef:g,mergedSizeRef:m}=v,h=$e("Checkbox","-checkbox",mf,Zl,e,o);function p(F){if(t&&e.value!==void 0)t.toggleCheckbox(!c.value,e.value);else{const{onChange:X,"onUpdate:checked":U,onUpdateChecked:Y}=e,{nTriggerFormInput:Q,nTriggerFormChange:H}=v,O=c.value?e.uncheckedValue:e.checkedValue;U&&Ce(U,O,F),Y&&Ce(Y,O,F),X&&Ce(X,O,F),Q(),H(),l.value=O}}function k(F){g.value||p(F)}function b(F){if(!g.value)switch(F.key){case" ":case"Enter":p(F)}}function _(F){switch(F.key){case" ":F.preventDefault()}}const R={focus:()=>{var F;(F=n.value)===null||F===void 0||F.focus()},blur:()=>{var F;(F=n.value)===null||F===void 0||F.blur()}},y=tn("Checkbox",i,o),S=E(()=>{const{value:F}=m,{common:{cubicBezierEaseInOut:X},self:{borderRadius:U,color:Y,colorChecked:Q,colorDisabled:H,colorTableHeader:O,colorTableHeaderModal:L,colorTableHeaderPopover:M,checkMarkColor:V,checkMarkColorDisabled:T,border:G,borderFocus:ee,borderDisabled:ae,borderChecked:ue,boxShadowFocus:le,textColor:_e,textColorDisabled:j,checkMarkColorDisabledChecked:P,colorDisabledChecked:I,borderDisabledChecked:N,labelPadding:fe,labelLineHeight:he,labelFontWeight:Ae,[oe("fontSize",F)]:Ne,[oe("size",F)]:Te}}=h.value;return{"--n-label-line-height":he,"--n-label-font-weight":Ae,"--n-size":Te,"--n-bezier":X,"--n-border-radius":U,"--n-border":G,"--n-border-checked":ue,"--n-border-focus":ee,"--n-border-disabled":ae,"--n-border-disabled-checked":N,"--n-box-shadow-focus":le,"--n-color":Y,"--n-color-checked":Q,"--n-color-table":O,"--n-color-table-modal":L,"--n-color-table-popover":M,"--n-color-disabled":H,"--n-color-disabled-checked":I,"--n-text-color":_e,"--n-text-color-disabled":j,"--n-check-mark-color":V,"--n-check-mark-color-disabled":T,"--n-check-mark-color-disabled-checked":P,"--n-font-size":Ne,"--n-label-padding":fe}}),z=r?nt("checkbox",E(()=>m.value[0]),S,e):void 0;return Object.assign(v,R,{rtlEnabled:y,selfRef:n,mergedClsPrefix:o,mergedDisabled:g,renderedChecked:c,mergedTheme:h,labelId:jo(),handleClick:k,handleKeyUp:b,handleKeyDown:_,cssVars:r?void 0:S,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender})},render(){var e;const{$slots:t,renderedChecked:n,mergedDisabled:o,indeterminate:r,privateInsideTable:i,cssVars:a,labelId:l,label:s,mergedClsPrefix:u,focusable:c,handleKeyUp:v,handleKeyDown:g,handleClick:m}=this;(e=this.onRender)===null||e===void 0||e.call(this);const h=Ze(t.default,p=>s||p?f("span",{class:`${u}-checkbox__label`,id:l},s||p):null);return f("div",{ref:"selfRef",class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,n&&`${u}-checkbox--checked`,o&&`${u}-checkbox--disabled`,r&&`${u}-checkbox--indeterminate`,i&&`${u}-checkbox--inside-table`,h&&`${u}-checkbox--show-label`],tabindex:o||!c?void 0:0,role:"checkbox","aria-checked":r?"mixed":n,"aria-labelledby":l,style:a,onKeyup:v,onKeydown:g,onClick:m,onMousedown:()=>{at("selectstart",window,p=>{p.preventDefault()},{once:!0})}},f("div",{class:`${u}-checkbox-box-wrapper`}," ",f("div",{class:`${u}-checkbox-box`},f(Fi,null,{default:()=>this.indeterminate?f("div",{key:"indeterminate",class:`${u}-checkbox-icon`},gf()):f("div",{key:"check",class:`${u}-checkbox-icon`},bf())}),f("div",{class:`${u}-checkbox-box__border`}))),h)}}),xf=Z([C("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),C("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[hr({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Cf=Object.assign(Object.assign({},$e.props),{to:It.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),Hn=ce({name:"Select",props:Cf,slots:Object,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:r,mergedComponentPropsRef:i}=Qe(e),a=$e("Select","-select",xf,es,e,t),l=D(e.defaultValue),s=de(e,"value"),u=Qt(s,l),c=D(!1),v=D(""),g=to(e,["items","options"]),m=D([]),h=D([]),p=E(()=>h.value.concat(m.value).concat(g.value)),k=E(()=>{const{filter:$}=e;if($)return $;const{labelField:te,valueField:se}=e;return(we,ve)=>{if(!ve)return!1;const be=ve[te];if(typeof be=="string")return Eo(we,be);const Se=ve[se];return typeof Se=="string"?Eo(we,Se):typeof Se=="number"?Eo(we,String(Se)):!1}}),b=E(()=>{if(e.remote)return g.value;{const{value:$}=p,{value:te}=v;return!te.length||!e.filterable?$:hf($,k.value,te,e.childrenField)}}),_=E(()=>{const{valueField:$,childrenField:te}=e,se=ff($,te);return sa(b.value,se)}),R=E(()=>vf(p.value,e.valueField,e.childrenField)),y=D(!1),S=Qt(de(e,"show"),y),z=D(null),F=D(null),X=D(null),{localeRef:U}=Mr("Select"),Y=E(()=>{var $;return($=e.placeholder)!==null&&$!==void 0?$:U.value.placeholder}),Q=[],H=D(new Map),O=E(()=>{const{fallbackOption:$}=e;if($===void 0){const{labelField:te,valueField:se}=e;return we=>({[te]:String(we),[se]:we})}return $===!1?!1:te=>Object.assign($(te),{value:te})});function L($){const te=e.remote,{value:se}=H,{value:we}=R,{value:ve}=O,be=[];return $.forEach(Se=>{if(we.has(Se))be.push(we.get(Se));else if(te&&se.has(Se))be.push(se.get(Se));else if(ve){const Le=ve(Se);Le&&be.push(Le)}}),be}const M=E(()=>{if(e.multiple){const{value:$}=u;return Array.isArray($)?L($):[]}return null}),V=E(()=>{const{value:$}=u;return!e.multiple&&!Array.isArray($)?$===null?null:L([$])[0]||null:null}),T=gr(e,{mergedSize:$=>{var te,se;const{size:we}=e;if(we)return we;const{mergedSize:ve}=$||{};if(ve!=null&&ve.value)return ve.value;const be=(se=(te=i==null?void 0:i.value)===null||te===void 0?void 0:te.Select)===null||se===void 0?void 0:se.size;return be||"medium"}}),{mergedSizeRef:G,mergedDisabledRef:ee,mergedStatusRef:ae}=T;function ue($,te){const{onChange:se,"onUpdate:value":we,onUpdateValue:ve}=e,{nTriggerFormChange:be,nTriggerFormInput:Se}=T;se&&Ce(se,$,te),ve&&Ce(ve,$,te),we&&Ce(we,$,te),l.value=$,be(),Se()}function le($){const{onBlur:te}=e,{nTriggerFormBlur:se}=T;te&&Ce(te,$),se()}function _e(){const{onClear:$}=e;$&&Ce($)}function j($){const{onFocus:te,showOnFocus:se}=e,{nTriggerFormFocus:we}=T;te&&Ce(te,$),we(),se&&he()}function P($){const{onSearch:te}=e;te&&Ce(te,$)}function I($){const{onScroll:te}=e;te&&Ce(te,$)}function N(){var $;const{remote:te,multiple:se}=e;if(te){const{value:we}=H;if(se){const{valueField:ve}=e;($=M.value)===null||$===void 0||$.forEach(be=>{we.set(be[ve],be)})}else{const ve=V.value;ve&&we.set(ve[e.valueField],ve)}}}function fe($){const{onUpdateShow:te,"onUpdate:show":se}=e;te&&Ce(te,$),se&&Ce(se,$),y.value=$}function he(){ee.value||(fe(!0),y.value=!0,e.filterable&&Et())}function Ae(){fe(!1)}function Ne(){v.value="",h.value=Q}const Te=D(!1);function pe(){e.filterable&&(Te.value=!0)}function Be(){e.filterable&&(Te.value=!1,S.value||Ne())}function Me(){ee.value||(S.value?e.filterable?Et():Ae():he())}function He($){var te,se;!((se=(te=X.value)===null||te===void 0?void 0:te.selfRef)===null||se===void 0)&&se.contains($.relatedTarget)||(c.value=!1,le($),Ae())}function ot($){j($),c.value=!0}function vt(){c.value=!0}function tt($){var te;!((te=z.value)===null||te===void 0)&&te.$el.contains($.relatedTarget)||(c.value=!1,le($),Ae())}function dt(){var $;($=z.value)===null||$===void 0||$.focus(),Ae()}function Xe($){var te;S.value&&(!((te=z.value)===null||te===void 0)&&te.$el.contains(Vo($))||Ae())}function q($){if(!Array.isArray($))return[];if(O.value)return Array.from($);{const{remote:te}=e,{value:se}=R;if(te){const{value:we}=H;return $.filter(ve=>se.has(ve)||we.has(ve))}else return $.filter(we=>se.has(we))}}function K($){d($.rawNode)}function d($){if(ee.value)return;const{tag:te,remote:se,clearFilterAfterSelect:we,valueField:ve}=e;if(te&&!se){const{value:be}=h,Se=be[0]||null;if(Se){const Le=m.value;Le.length?Le.push(Se):m.value=[Se],h.value=Q}}if(se&&H.value.set($[ve],$),e.multiple){const be=q(u.value),Se=be.findIndex(Le=>Le===$[ve]);if(~Se){if(be.splice(Se,1),te&&!se){const Le=w($[ve]);~Le&&(m.value.splice(Le,1),we&&(v.value=""))}}else be.push($[ve]),we&&(v.value="");ue(be,L(be))}else{if(te&&!se){const be=w($[ve]);~be?m.value=[m.value[be]]:m.value=Q}At(),Ae(),ue($[ve],$)}}function w($){return m.value.findIndex(se=>se[e.valueField]===$)}function J($){S.value||he();const{value:te}=$.target;v.value=te;const{tag:se,remote:we}=e;if(P(te),se&&!we){if(!te){h.value=Q;return}const{onCreate:ve}=e,be=ve?ve(te):{[e.labelField]:te,[e.valueField]:te},{valueField:Se,labelField:Le}=e;g.value.some(Je=>Je[Se]===be[Se]||Je[Le]===be[Le])||m.value.some(Je=>Je[Se]===be[Se]||Je[Le]===be[Le])?h.value=Q:h.value=[be]}}function Pe($){$.stopPropagation();const{multiple:te,tag:se,remote:we,clearCreatedOptionsOnClear:ve}=e;!te&&e.filterable&&Ae(),se&&!we&&ve&&(m.value=Q),_e(),te?ue([],[]):ue(null,null)}function ye($){!Jt($,"action")&&!Jt($,"empty")&&!Jt($,"header")&&$.preventDefault()}function rt($){I($)}function ct($){var te,se,we,ve,be;if(!e.keyboard){$.preventDefault();return}switch($.key){case" ":if(e.filterable)break;$.preventDefault();case"Enter":if(!(!((te=z.value)===null||te===void 0)&&te.isComposing)){if(S.value){const Se=(se=X.value)===null||se===void 0?void 0:se.getPendingTmNode();Se?K(Se):e.filterable||(Ae(),At())}else if(he(),e.tag&&Te.value){const Se=h.value[0];if(Se){const Le=Se[e.valueField],{value:Je}=u;e.multiple&&Array.isArray(Je)&&Je.includes(Le)||d(Se)}}}$.preventDefault();break;case"ArrowUp":if($.preventDefault(),e.loading)return;S.value&&((we=X.value)===null||we===void 0||we.prev());break;case"ArrowDown":if($.preventDefault(),e.loading)return;S.value?(ve=X.value)===null||ve===void 0||ve.next():he();break;case"Escape":S.value&&(Ql($),Ae()),(be=z.value)===null||be===void 0||be.focus();break}}function At(){var $;($=z.value)===null||$===void 0||$.focus()}function Et(){var $;($=z.value)===null||$===void 0||$.focusInput()}function Ht(){var $;S.value&&(($=F.value)===null||$===void 0||$.syncPosition())}N(),ke(de(e,"options"),N);const Kt={focus:()=>{var $;($=z.value)===null||$===void 0||$.focus()},focusInput:()=>{var $;($=z.value)===null||$===void 0||$.focusInput()},blur:()=>{var $;($=z.value)===null||$===void 0||$.blur()},blurInput:()=>{var $;($=z.value)===null||$===void 0||$.blurInput()}},Tt=E(()=>{const{self:{menuBoxShadow:$}}=a.value;return{"--n-menu-box-shadow":$}}),ut=r?nt("select",void 0,Tt,e):void 0;return Object.assign(Object.assign({},Kt),{mergedStatus:ae,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:_,isMounted:dr(),triggerRef:z,menuRef:X,pattern:v,uncontrolledShow:y,mergedShow:S,adjustedTo:It(e),uncontrolledValue:l,mergedValue:u,followerRef:F,localizedPlaceholder:Y,selectedOption:V,selectedOptions:M,mergedSize:G,mergedDisabled:ee,focused:c,activeWithoutMenuOpen:Te,inlineThemeDisabled:r,onTriggerInputFocus:pe,onTriggerInputBlur:Be,handleTriggerOrMenuResize:Ht,handleMenuFocus:vt,handleMenuBlur:tt,handleMenuTabOut:dt,handleTriggerClick:Me,handleToggle:K,handleDeleteOption:d,handlePatternInput:J,handleClear:Pe,handleTriggerBlur:He,handleTriggerFocus:ot,handleKeydown:ct,handleMenuAfterLeave:Ne,handleMenuClickOutside:Xe,handleMenuScroll:rt,handleMenuKeydown:ct,handleMenuMousedown:ye,mergedTheme:a,cssVars:r?void 0:Tt,themeClass:ut==null?void 0:ut.themeClass,onRender:ut==null?void 0:ut.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(yr,null,{default:()=>[f(wr,null,{default:()=>f(Qu,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(xr,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===It.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(Dn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),mn(f(Lu,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var o,r;return[(r=(o=this.$slots).empty)===null||r===void 0?void 0:r.call(o)]},header:()=>{var o,r;return[(r=(o=this.$slots).header)===null||r===void 0?void 0:r.call(o)]},action:()=>{var o,r;return[(r=(o=this.$slots).action)===null||r===void 0?void 0:r.call(o)]}}),this.displayDirective==="show"?[[vr,this.mergedShow],[Zn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Zn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),zr=mt("n-dropdown-menu"),uo=mt("n-dropdown"),vi=mt("n-dropdown-option"),pa=ce({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return f("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),kf=ce({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:t}=Fe(zr),{renderLabelRef:n,labelFieldRef:o,nodePropsRef:r,renderOptionRef:i}=Fe(uo);return{labelField:o,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:r,renderOption:i}},render(){var e;const{clsPrefix:t,hasSubmenu:n,showIcon:o,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:l}=this.tmNode,s=f("div",Object.assign({class:`${t}-dropdown-option`},r==null?void 0:r(l)),f("div",{class:`${t}-dropdown-option-body ${t}-dropdown-option-body--group`},f("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__prefix`,o&&`${t}-dropdown-option-body__prefix--show-icon`]},bt(l.icon)),f("div",{class:`${t}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):bt((e=l.title)!==null&&e!==void 0?e:l[this.labelField])),f("div",{class:[`${t}-dropdown-option-body__suffix`,n&&`${t}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:l}):s}}),Sf=C("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[B("color-transition",{transition:"color .3s var(--n-bezier)"}),B("depth",{color:"var(--n-color)"},[Z("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),Z("svg",{height:"1em",width:"1em"})]),Pf=Object.assign(Object.assign({},$e.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),ba=ce({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:Pf,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Qe(e),o=$e("Icon","-icon",Sf,ts,e,t),r=E(()=>{const{depth:a}=e,{common:{cubicBezierEaseInOut:l},self:s}=o.value;if(a!==void 0){const{color:u,[`opacity${a}Depth`]:c}=s;return{"--n-bezier":l,"--n-color":u,"--n-opacity":c}}return{"--n-bezier":l,"--n-color":"","--n-opacity":""}}),i=n?nt("icon",E(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:E(()=>{const{size:a,color:l}=e;return{fontSize:Zt(a),color:l}}),cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$parent:t,depth:n,mergedClsPrefix:o,component:r,onRender:i,themeClass:a}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&Qn("icon","don't wrap `n-icon` inside `n-icon`"),i==null||i(),f("i",en(this.$attrs,{role:"img",class:[`${o}-icon`,a,{[`${o}-icon--depth`]:n,[`${o}-icon--color-transition`]:n!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?f(r):this.$slots)}});function Xo(e,t){return e.type==="submenu"||e.type===void 0&&e[t]!==void 0}function _f(e){return e.type==="group"}function ga(e){return e.type==="divider"}function Mf(e){return e.type==="render"}const ma=ce({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const t=Fe(uo),{hoverKeyRef:n,keyboardKeyRef:o,lastToggledSubmenuKeyRef:r,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:l,mergedShowRef:s,renderLabelRef:u,renderIconRef:c,labelFieldRef:v,childrenFieldRef:g,renderOptionRef:m,nodePropsRef:h,menuPropsRef:p}=t,k=Fe(vi,null),b=Fe(zr),_=Fe(io),R=E(()=>e.tmNode.rawNode),y=E(()=>{const{value:T}=g;return Xo(e.tmNode.rawNode,T)}),S=E(()=>{const{disabled:T}=e.tmNode;return T}),z=E(()=>{if(!y.value)return!1;const{key:T,disabled:G}=e.tmNode;if(G)return!1;const{value:ee}=n,{value:ae}=o,{value:ue}=r,{value:le}=i;return ee!==null?le.includes(T):ae!==null?le.includes(T)&&le[le.length-1]!==T:ue!==null?le.includes(T):!1}),F=E(()=>o.value===null&&!l.value),X=gs(z,300,F),U=E(()=>!!(k!=null&&k.enteringSubmenuRef.value)),Y=D(!1);Ke(vi,{enteringSubmenuRef:Y});function Q(){Y.value=!0}function H(){Y.value=!1}function O(){const{parentKey:T,tmNode:G}=e;G.disabled||s.value&&(r.value=T,o.value=null,n.value=G.key)}function L(){const{tmNode:T}=e;T.disabled||s.value&&n.value!==T.key&&O()}function M(T){if(e.tmNode.disabled||!s.value)return;const{relatedTarget:G}=T;G&&!Jt({target:G},"dropdownOption")&&!Jt({target:G},"scrollbarRail")&&(n.value=null)}function V(){const{value:T}=y,{tmNode:G}=e;s.value&&!T&&!G.disabled&&(t.doSelect(G.key,G.rawNode),t.doUpdateShow(!1))}return{labelField:v,renderLabel:u,renderIcon:c,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:p,popoverBody:_,animated:l,mergedShowSubmenu:E(()=>X.value&&!U.value),rawNode:R,hasSubmenu:y,pending:qe(()=>{const{value:T}=i,{key:G}=e.tmNode;return T.includes(G)}),childActive:qe(()=>{const{value:T}=a,{key:G}=e.tmNode,ee=T.findIndex(ae=>G===ae);return ee===-1?!1:ee<T.length-1}),active:qe(()=>{const{value:T}=a,{key:G}=e.tmNode,ee=T.findIndex(ae=>G===ae);return ee===-1?!1:ee===T.length-1}),mergedDisabled:S,renderOption:m,nodeProps:h,handleClick:V,handleMouseMove:L,handleMouseEnter:O,handleMouseLeave:M,handleSubmenuBeforeEnter:Q,handleSubmenuAfterEnter:H}},render(){var e,t;const{animated:n,rawNode:o,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:l,renderLabel:s,renderIcon:u,renderOption:c,nodeProps:v,props:g,scrollable:m}=this;let h=null;if(r){const _=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,o,o.children);h=f(ya,Object.assign({},_,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const p={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=v==null?void 0:v(o),b=f("div",Object.assign({class:[`${i}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),f("div",en(p,g),[f("div",{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[u?u(o):bt(o.icon)]),f("div",{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(o):bt((t=o[this.labelField])!==null&&t!==void 0?t:o.title)),f("div",{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,l&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?f(ba,null,{default:()=>f(ou,null)}):null)]),this.hasSubmenu?f(yr,null,{default:()=>[f(wr,null,{default:()=>f("div",{class:`${i}-dropdown-offset-container`},f(xr,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>f("div",{class:`${i}-dropdown-menu-wrapper`},n?f(Dn,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>h}):h)}))})]}):null);return c?c({node:b,option:o}):b}}),Rf=ce({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:o}=e;return f(pt,null,f(kf,{clsPrefix:n,tmNode:e,key:e.key}),o==null?void 0:o.map(r=>{const{rawNode:i}=r;return i.show===!1?null:ga(i)?f(pa,{clsPrefix:n,key:r.key}):r.isGroup?(Qn("dropdown","`group` node is not allowed to be put in `group` node."),null):f(ma,{clsPrefix:n,tmNode:r,parentKey:t,key:r.key})}))}}),Of=ce({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:t}}=this.tmNode;return f("div",t,[e==null?void 0:e()])}}),ya=ce({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:t,childrenFieldRef:n}=Fe(uo);Ke(zr,{showIconRef:E(()=>{const r=t.value;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>r?r(s):s.icon);const{rawNode:l}=i;return r?r(l):l.icon})}),hasSubmenuRef:E(()=>{const{value:r}=n;return e.tmNodes.some(i=>{var a;if(i.isGroup)return(a=i.children)===null||a===void 0?void 0:a.some(({rawNode:s})=>Xo(s,r));const{rawNode:l}=i;return Xo(l,r)})})});const o=D(null);return Ke(ar,null),Ke(lr,null),Ke(io,o),{bodyRef:o}},render(){const{parentKey:e,clsPrefix:t,scrollable:n}=this,o=this.tmNodes.map(r=>{const{rawNode:i}=r;return i.show===!1?null:Mf(i)?f(Of,{tmNode:r,key:r.key}):ga(i)?f(pa,{clsPrefix:t,key:r.key}):_f(i)?f(Rf,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):f(ma,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return f("div",{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:"bodyRef"},n?f(Ni,{contentClass:`${t}-dropdown-menu__content`},{default:()=>o}):o,this.showArrow?ca({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),zf=C("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[hr(),C("dropdown-option",`
 position: relative;
 `,[Z("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[Z("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),C("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[Z("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),je("disabled",[B("pending",`
 color: var(--n-option-text-color-hover);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),Z("&::before","background-color: var(--n-option-color-hover);")]),B("active",`
 color: var(--n-option-text-color-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),Z("&::before","background-color: var(--n-option-color-active);")]),B("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[A("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),B("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),B("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[A("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[B("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),A("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[B("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),A("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),A("suffix",`
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
 `,[B("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),C("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("dropdown-menu","pointer-events: all;")]),C("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),C("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),C("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),Z(">",[C("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),je("scrollable",`
 padding: var(--n-padding);
 `),B("scrollable",[A("content",`
 padding: var(--n-padding);
 `)])]),If={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},$f=Object.keys(Or),Af=Object.assign(Object.assign(Object.assign({},Or),If),$e.props),Iv=ce({name:"Dropdown",inheritAttrs:!1,props:Af,setup(e){const t=D(!1),n=Qt(de(e,"show"),t),o=E(()=>{const{keyField:L,childrenField:M}=e;return sa(e.options,{getKey(V){return V[L]},getDisabled(V){return V.disabled===!0},getIgnored(V){return V.type==="divider"||V.type==="render"},getChildren(V){return V[M]}})}),r=E(()=>o.value.treeNodes),i=D(null),a=D(null),l=D(null),s=E(()=>{var L,M,V;return(V=(M=(L=i.value)!==null&&L!==void 0?L:a.value)!==null&&M!==void 0?M:l.value)!==null&&V!==void 0?V:null}),u=E(()=>o.value.getPath(s.value).keyPath),c=E(()=>o.value.getPath(e.value).keyPath),v=qe(()=>e.keyboard&&n.value);ps({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:z},ArrowDown:{prevent:!0,handler:X},ArrowLeft:{prevent:!0,handler:S},Enter:{prevent:!0,handler:U},Escape:y}},v);const{mergedClsPrefixRef:g,inlineThemeDisabled:m,mergedComponentPropsRef:h}=Qe(e),p=E(()=>{var L,M;return e.size||((M=(L=h==null?void 0:h.value)===null||L===void 0?void 0:L.Dropdown)===null||M===void 0?void 0:M.size)||"medium"}),k=$e("Dropdown","-dropdown",zf,ns,e,g);Ke(uo,{labelFieldRef:de(e,"labelField"),childrenFieldRef:de(e,"childrenField"),renderLabelRef:de(e,"renderLabel"),renderIconRef:de(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:u,activeKeyPathRef:c,animatedRef:de(e,"animated"),mergedShowRef:n,nodePropsRef:de(e,"nodeProps"),renderOptionRef:de(e,"renderOption"),menuPropsRef:de(e,"menuProps"),doSelect:b,doUpdateShow:_}),ke(n,L=>{!e.animated&&!L&&R()});function b(L,M){const{onSelect:V}=e;V&&Ce(V,L,M)}function _(L){const{"onUpdate:show":M,onUpdateShow:V}=e;M&&Ce(M,L),V&&Ce(V,L),t.value=L}function R(){i.value=null,a.value=null,l.value=null}function y(){_(!1)}function S(){Q("left")}function z(){Q("right")}function F(){Q("up")}function X(){Q("down")}function U(){const L=Y();L!=null&&L.isLeaf&&n.value&&(b(L.key,L.rawNode),_(!1))}function Y(){var L;const{value:M}=o,{value:V}=s;return!M||V===null?null:(L=M.getNode(V))!==null&&L!==void 0?L:null}function Q(L){const{value:M}=s,{value:{getFirstAvailableNode:V}}=o;let T=null;if(M===null){const G=V();G!==null&&(T=G.key)}else{const G=Y();if(G){let ee;switch(L){case"down":ee=G.getNext();break;case"up":ee=G.getPrev();break;case"right":ee=G.getChild();break;case"left":ee=G.getParent();break}ee&&(T=ee.key)}}T!==null&&(i.value=null,a.value=T)}const H=E(()=>{const{inverted:L}=e,M=p.value,{common:{cubicBezierEaseInOut:V},self:T}=k.value,{padding:G,dividerColor:ee,borderRadius:ae,optionOpacityDisabled:ue,[oe("optionIconSuffixWidth",M)]:le,[oe("optionSuffixWidth",M)]:_e,[oe("optionIconPrefixWidth",M)]:j,[oe("optionPrefixWidth",M)]:P,[oe("fontSize",M)]:I,[oe("optionHeight",M)]:N,[oe("optionIconSize",M)]:fe}=T,he={"--n-bezier":V,"--n-font-size":I,"--n-padding":G,"--n-border-radius":ae,"--n-option-height":N,"--n-option-prefix-width":P,"--n-option-icon-prefix-width":j,"--n-option-suffix-width":_e,"--n-option-icon-suffix-width":le,"--n-option-icon-size":fe,"--n-divider-color":ee,"--n-option-opacity-disabled":ue};return L?(he["--n-color"]=T.colorInverted,he["--n-option-color-hover"]=T.optionColorHoverInverted,he["--n-option-color-active"]=T.optionColorActiveInverted,he["--n-option-text-color"]=T.optionTextColorInverted,he["--n-option-text-color-hover"]=T.optionTextColorHoverInverted,he["--n-option-text-color-active"]=T.optionTextColorActiveInverted,he["--n-option-text-color-child-active"]=T.optionTextColorChildActiveInverted,he["--n-prefix-color"]=T.prefixColorInverted,he["--n-suffix-color"]=T.suffixColorInverted,he["--n-group-header-text-color"]=T.groupHeaderTextColorInverted):(he["--n-color"]=T.color,he["--n-option-color-hover"]=T.optionColorHover,he["--n-option-color-active"]=T.optionColorActive,he["--n-option-text-color"]=T.optionTextColor,he["--n-option-text-color-hover"]=T.optionTextColorHover,he["--n-option-text-color-active"]=T.optionTextColorActive,he["--n-option-text-color-child-active"]=T.optionTextColorChildActive,he["--n-prefix-color"]=T.prefixColor,he["--n-suffix-color"]=T.suffixColor,he["--n-group-header-text-color"]=T.groupHeaderTextColor),he}),O=m?nt("dropdown",E(()=>`${p.value[0]}${e.inverted?"i":""}`),H,e):void 0;return{mergedClsPrefix:g,mergedTheme:k,mergedSize:p,tmNodes:r,mergedShow:n,handleAfterLeave:()=>{e.animated&&R()},doUpdateShow:_,cssVars:m?void 0:H,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender}},render(){const e=(o,r,i,a,l)=>{var s;const{mergedClsPrefix:u,menuProps:c}=this;(s=this.onRender)===null||s===void 0||s.call(this);const v=(c==null?void 0:c(void 0,this.tmNodes.map(m=>m.rawNode)))||{},g={ref:Bs(r),class:[o,`${u}-dropdown`,`${u}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:u,tmNodes:this.tmNodes,style:[...i,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:a,onMouseleave:l};return f(ya,en(this.$attrs,g,v))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return f(ua,Object.assign({},Vi(this.$props,$f),n),{trigger:()=>{var o,r;return(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o)}})}}),Ef=C("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[je("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[je("no-title",`
 display: flex;
 align-items: center;
 `)]),A("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),B("title-position-left",[A("line",[B("left",{width:"28px"})])]),B("title-position-right",[A("line",[B("right",{width:"28px"})])]),B("dashed",[A("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),B("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),A("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),je("dashed",[A("line",{backgroundColor:"var(--n-color)"})]),B("dashed",[A("line",{borderColor:"var(--n-color)"})]),B("vertical",{backgroundColor:"var(--n-color)"})]),Tf=Object.assign(Object.assign({},$e.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Ff=ce({name:"Divider",props:Tf,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Qe(e),o=$e("Divider","-divider",Ef,os,e,t),r=E(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:l,textColor:s,fontWeight:u}}=o.value;return{"--n-bezier":a,"--n-color":l,"--n-text-color":s,"--n-font-weight":u}}),i=n?nt("divider",void 0,r,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:r,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:o,dashed:r,cssVars:i,mergedClsPrefix:a}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:o,[`${a}-divider--no-title`]:!t.default,[`${a}-divider--dashed`]:r,[`${a}-divider--title-position-${n}`]:t.default&&n}],style:i},o?null:f("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!o&&t.default?f(pt,null,f("div",{class:`${a}-divider__title`},this.$slots),f("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),Ln=mt("n-form"),wa=mt("n-form-item-insts"),Bf=C("form",[B("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[C("form-item",{width:"auto",marginRight:"18px"},[Z("&:last-child",{marginRight:0})])])]);var Df=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function l(c){try{u(o.next(c))}catch(v){a(v)}}function s(c){try{u(o.throw(c))}catch(v){a(v)}}function u(c){c.done?i(c.value):r(c.value).then(l,s)}u((o=o.apply(e,t||[])).next())})};const Lf=Object.assign(Object.assign({},$e.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:e=>{e.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),pi=ce({name:"Form",props:Lf,setup(e){const{mergedClsPrefixRef:t}=Qe(e);$e("Form","-form",Bf,ji,e,t);const n={},o=D(void 0),r=u=>{const c=o.value;(c===void 0||u>=c)&&(o.value=u)};function i(){var u;for(const c of go(n)){const v=n[c];for(const g of v)(u=g.invalidateLabelWidth)===null||u===void 0||u.call(g)}}function a(u){return Df(this,arguments,void 0,function*(c,v=()=>!0){return yield new Promise((g,m)=>{const h=[];for(const p of go(n)){const k=n[p];for(const b of k)b.path&&h.push(b.internalValidate(null,v))}Promise.all(h).then(p=>{const k=p.some(R=>!R.valid),b=[],_=[];p.forEach(R=>{var y,S;!((y=R.errors)===null||y===void 0)&&y.length&&b.push(R.errors),!((S=R.warnings)===null||S===void 0)&&S.length&&_.push(R.warnings)}),c&&c(b.length?b:void 0,{warnings:_.length?_:void 0}),k?m(b.length?b:void 0):g({warnings:_.length?_:void 0})})})})}function l(){for(const u of go(n)){const c=n[u];for(const v of c)v.restoreValidation()}}return Ke(Ln,{props:e,maxChildLabelWidthRef:o,deriveMaxChildLabelWidth:r}),Ke(wa,{formItems:n}),Object.assign({validate:a,restoreValidation:l,invalidateLabelWidth:i},{mergedClsPrefix:t})},render(){const{mergedClsPrefix:e}=this;return f("form",{class:[`${e}-form`,this.inline&&`${e}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function Gt(){return Gt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Gt.apply(this,arguments)}function Nf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Fn(e,t)}function Jo(e){return Jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Jo(e)}function Fn(e,t){return Fn=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},Fn(e,t)}function Wf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gn(e,t,n){return Wf()?Gn=Reflect.construct.bind():Gn=function(r,i,a){var l=[null];l.push.apply(l,i);var s=Function.bind.apply(r,l),u=new s;return a&&Fn(u,a.prototype),u},Gn.apply(null,arguments)}function Vf(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Zo(e){var t=typeof Map=="function"?new Map:void 0;return Zo=function(o){if(o===null||!Vf(o))return o;if(typeof o!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(o))return t.get(o);t.set(o,r)}function r(){return Gn(o,arguments,Jo(this).constructor)}return r.prototype=Object.create(o.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Fn(r,o)},Zo(e)}var jf=/%[sdj%]/g,Hf=function(){};function Qo(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var o=n.field;t[o]=t[o]||[],t[o].push(n)}),t}function st(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=0,i=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var a=e.replace(jf,function(l){if(l==="%%")return"%";if(r>=i)return l;switch(l){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch{return"[Circular]"}break;default:return l}});return a}return e}function Kf(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Ye(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||Kf(t)&&typeof e=="string"&&!e)}function Uf(e,t,n){var o=[],r=0,i=e.length;function a(l){o.push.apply(o,l||[]),r++,r===i&&n(o)}e.forEach(function(l){t(l,a)})}function bi(e,t,n){var o=0,r=e.length;function i(a){if(a&&a.length){n(a);return}var l=o;o=o+1,l<r?t(e[l],i):n([])}i([])}function qf(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var gi=function(e){Nf(t,e);function t(n,o){var r;return r=e.call(this,"Async Validation Error")||this,r.errors=n,r.fields=o,r}return t}(Zo(Error));function Yf(e,t,n,o,r){if(t.first){var i=new Promise(function(g,m){var h=function(b){return o(b),b.length?m(new gi(b,Qo(b))):g(r)},p=qf(e);bi(p,n,h)});return i.catch(function(g){return g}),i}var a=t.firstFields===!0?Object.keys(e):t.firstFields||[],l=Object.keys(e),s=l.length,u=0,c=[],v=new Promise(function(g,m){var h=function(k){if(c.push.apply(c,k),u++,u===s)return o(c),c.length?m(new gi(c,Qo(c))):g(r)};l.length||(o(c),g(r)),l.forEach(function(p){var k=e[p];a.indexOf(p)!==-1?bi(k,n,h):Uf(k,n,h)})});return v.catch(function(g){return g}),v}function Gf(e){return!!(e&&e.message!==void 0)}function Xf(e,t){for(var n=e,o=0;o<t.length;o++){if(n==null)return n;n=n[t[o]]}return n}function mi(e,t){return function(n){var o;return e.fullFields?o=Xf(t,e.fullFields):o=t[n.field||e.fullField],Gf(n)?(n.field=n.field||e.fullField,n.fieldValue=o,n):{message:typeof n=="function"?n():n,fieldValue:o,field:n.field||e.fullField}}}function yi(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];typeof o=="object"&&typeof e[n]=="object"?e[n]=Gt({},e[n],o):e[n]=o}}return e}var xa=function(t,n,o,r,i,a){t.required&&(!o.hasOwnProperty(t.field)||Ye(n,a||t.type))&&r.push(st(i.messages.required,t.fullField))},Jf=function(t,n,o,r,i){(/^\s+$/.test(n)||n==="")&&r.push(st(i.messages.whitespace,t.fullField))},Kn,Zf=function(){if(Kn)return Kn;var e="[a-fA-F\\d:]",t=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",o="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+o+":){7}(?:"+o+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+o+":){6}(?:"+n+"|:"+o+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+o+":){5}(?::"+n+"|(?::"+o+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+o+":){4}(?:(?::"+o+"){0,1}:"+n+"|(?::"+o+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+o+":){3}(?:(?::"+o+"){0,2}:"+n+"|(?::"+o+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+o+":){2}(?:(?::"+o+"){0,3}:"+n+"|(?::"+o+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+o+":){1}(?:(?::"+o+"){0,4}:"+n+"|(?::"+o+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+o+"){0,5}:"+n+"|(?::"+o+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),i=new RegExp("(?:^"+n+"$)|(?:^"+r+"$)"),a=new RegExp("^"+n+"$"),l=new RegExp("^"+r+"$"),s=function(y){return y&&y.exact?i:new RegExp("(?:"+t(y)+n+t(y)+")|(?:"+t(y)+r+t(y)+")","g")};s.v4=function(R){return R&&R.exact?a:new RegExp(""+t(R)+n+t(R),"g")},s.v6=function(R){return R&&R.exact?l:new RegExp(""+t(R)+r+t(R),"g")};var u="(?:(?:[a-z]+:)?//)",c="(?:\\S+(?::\\S*)?@)?",v=s.v4().source,g=s.v6().source,m="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",h="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",p="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",k="(?::\\d{2,5})?",b='(?:[/?#][^\\s"]*)?',_="(?:"+u+"|www\\.)"+c+"(?:localhost|"+v+"|"+g+"|"+m+h+p+")"+k+b;return Kn=new RegExp("(?:^"+_+"$)","i"),Kn},wi={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},$n={integer:function(t){return $n.number(t)&&parseInt(t,10)===t},float:function(t){return $n.number(t)&&!$n.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!$n.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(wi.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(Zf())},hex:function(t){return typeof t=="string"&&!!t.match(wi.hex)}},Qf=function(t,n,o,r,i){if(t.required&&n===void 0){xa(t,n,o,r,i);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],l=t.type;a.indexOf(l)>-1?$n[l](n)||r.push(st(i.messages.types[l],t.fullField,t.type)):l&&typeof n!==t.type&&r.push(st(i.messages.types[l],t.fullField,t.type))},eh=function(t,n,o,r,i){var a=typeof t.len=="number",l=typeof t.min=="number",s=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=n,v=null,g=typeof n=="number",m=typeof n=="string",h=Array.isArray(n);if(g?v="number":m?v="string":h&&(v="array"),!v)return!1;h&&(c=n.length),m&&(c=n.replace(u,"_").length),a?c!==t.len&&r.push(st(i.messages[v].len,t.fullField,t.len)):l&&!s&&c<t.min?r.push(st(i.messages[v].min,t.fullField,t.min)):s&&!l&&c>t.max?r.push(st(i.messages[v].max,t.fullField,t.max)):l&&s&&(c<t.min||c>t.max)&&r.push(st(i.messages[v].range,t.fullField,t.min,t.max))},dn="enum",th=function(t,n,o,r,i){t[dn]=Array.isArray(t[dn])?t[dn]:[],t[dn].indexOf(n)===-1&&r.push(st(i.messages[dn],t.fullField,t[dn].join(", ")))},nh=function(t,n,o,r,i){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||r.push(st(i.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var a=new RegExp(t.pattern);a.test(n)||r.push(st(i.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},Oe={required:xa,whitespace:Jf,type:Qf,range:eh,enum:th,pattern:nh},oh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return o();Oe.required(t,n,r,a,i,"string"),Ye(n,"string")||(Oe.type(t,n,r,a,i),Oe.range(t,n,r,a,i),Oe.pattern(t,n,r,a,i),t.whitespace===!0&&Oe.whitespace(t,n,r,a,i))}o(a)},rh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&Oe.type(t,n,r,a,i)}o(a)},ih=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(n===""&&(n=void 0),Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&(Oe.type(t,n,r,a,i),Oe.range(t,n,r,a,i))}o(a)},ah=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&Oe.type(t,n,r,a,i)}o(a)},lh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),Ye(n)||Oe.type(t,n,r,a,i)}o(a)},sh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&(Oe.type(t,n,r,a,i),Oe.range(t,n,r,a,i))}o(a)},dh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&(Oe.type(t,n,r,a,i),Oe.range(t,n,r,a,i))}o(a)},ch=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(n==null&&!t.required)return o();Oe.required(t,n,r,a,i,"array"),n!=null&&(Oe.type(t,n,r,a,i),Oe.range(t,n,r,a,i))}o(a)},uh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&Oe.type(t,n,r,a,i)}o(a)},fh="enum",hh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i),n!==void 0&&Oe[fh](t,n,r,a,i)}o(a)},vh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n,"string")&&!t.required)return o();Oe.required(t,n,r,a,i),Ye(n,"string")||Oe.pattern(t,n,r,a,i)}o(a)},ph=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n,"date")&&!t.required)return o();if(Oe.required(t,n,r,a,i),!Ye(n,"date")){var s;n instanceof Date?s=n:s=new Date(n),Oe.type(t,s,r,a,i),s&&Oe.range(t,s.getTime(),r,a,i)}}o(a)},bh=function(t,n,o,r,i){var a=[],l=Array.isArray(n)?"array":typeof n;Oe.required(t,n,r,a,i,l),o(a)},To=function(t,n,o,r,i){var a=t.type,l=[],s=t.required||!t.required&&r.hasOwnProperty(t.field);if(s){if(Ye(n,a)&&!t.required)return o();Oe.required(t,n,r,l,i,a),Ye(n,a)||Oe.type(t,n,r,l,i)}o(l)},gh=function(t,n,o,r,i){var a=[],l=t.required||!t.required&&r.hasOwnProperty(t.field);if(l){if(Ye(n)&&!t.required)return o();Oe.required(t,n,r,a,i)}o(a)},En={string:oh,method:rh,number:ih,boolean:ah,regexp:lh,integer:sh,float:dh,array:ch,object:uh,enum:hh,pattern:vh,date:ph,url:To,hex:To,email:To,required:bh,any:gh};function er(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var tr=er(),gn=function(){function e(n){this.rules=null,this._messages=tr,this.define(n)}var t=e.prototype;return t.define=function(o){var r=this;if(!o)throw new Error("Cannot configure a schema with no rules");if(typeof o!="object"||Array.isArray(o))throw new Error("Rules must be an object");this.rules={},Object.keys(o).forEach(function(i){var a=o[i];r.rules[i]=Array.isArray(a)?a:[a]})},t.messages=function(o){return o&&(this._messages=yi(er(),o)),this._messages},t.validate=function(o,r,i){var a=this;r===void 0&&(r={}),i===void 0&&(i=function(){});var l=o,s=r,u=i;if(typeof s=="function"&&(u=s,s={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,l),Promise.resolve(l);function c(p){var k=[],b={};function _(y){if(Array.isArray(y)){var S;k=(S=k).concat.apply(S,y)}else k.push(y)}for(var R=0;R<p.length;R++)_(p[R]);k.length?(b=Qo(k),u(k,b)):u(null,l)}if(s.messages){var v=this.messages();v===tr&&(v=er()),yi(v,s.messages),s.messages=v}else s.messages=this.messages();var g={},m=s.keys||Object.keys(this.rules);m.forEach(function(p){var k=a.rules[p],b=l[p];k.forEach(function(_){var R=_;typeof R.transform=="function"&&(l===o&&(l=Gt({},l)),b=l[p]=R.transform(b)),typeof R=="function"?R={validator:R}:R=Gt({},R),R.validator=a.getValidationMethod(R),R.validator&&(R.field=p,R.fullField=R.fullField||p,R.type=a.getType(R),g[p]=g[p]||[],g[p].push({rule:R,value:b,source:l,field:p}))})});var h={};return Yf(g,s,function(p,k){var b=p.rule,_=(b.type==="object"||b.type==="array")&&(typeof b.fields=="object"||typeof b.defaultField=="object");_=_&&(b.required||!b.required&&p.value),b.field=p.field;function R(z,F){return Gt({},F,{fullField:b.fullField+"."+z,fullFields:b.fullFields?[].concat(b.fullFields,[z]):[z]})}function y(z){z===void 0&&(z=[]);var F=Array.isArray(z)?z:[z];!s.suppressWarning&&F.length&&e.warning("async-validator:",F),F.length&&b.message!==void 0&&(F=[].concat(b.message));var X=F.map(mi(b,l));if(s.first&&X.length)return h[b.field]=1,k(X);if(!_)k(X);else{if(b.required&&!p.value)return b.message!==void 0?X=[].concat(b.message).map(mi(b,l)):s.error&&(X=[s.error(b,st(s.messages.required,b.field))]),k(X);var U={};b.defaultField&&Object.keys(p.value).map(function(H){U[H]=b.defaultField}),U=Gt({},U,p.rule.fields);var Y={};Object.keys(U).forEach(function(H){var O=U[H],L=Array.isArray(O)?O:[O];Y[H]=L.map(R.bind(null,H))});var Q=new e(Y);Q.messages(s.messages),p.rule.options&&(p.rule.options.messages=s.messages,p.rule.options.error=s.error),Q.validate(p.value,p.rule.options||s,function(H){var O=[];X&&X.length&&O.push.apply(O,X),H&&H.length&&O.push.apply(O,H),k(O.length?O:null)})}}var S;if(b.asyncValidator)S=b.asyncValidator(b,p.value,y,p.source,s);else if(b.validator){try{S=b.validator(b,p.value,y,p.source,s)}catch(z){console.error==null||console.error(z),s.suppressValidatorError||setTimeout(function(){throw z},0),y(z.message)}S===!0?y():S===!1?y(typeof b.message=="function"?b.message(b.fullField||b.field):b.message||(b.fullField||b.field)+" fails"):S instanceof Array?y(S):S instanceof Error&&y(S.message)}S&&S.then&&S.then(function(){return y()},function(z){return y(z)})},function(p){c(p)},l)},t.getType=function(o){if(o.type===void 0&&o.pattern instanceof RegExp&&(o.type="pattern"),typeof o.validator!="function"&&o.type&&!En.hasOwnProperty(o.type))throw new Error(st("Unknown rule type %s",o.type));return o.type||"string"},t.getValidationMethod=function(o){if(typeof o.validator=="function")return o.validator;var r=Object.keys(o),i=r.indexOf("message");return i!==-1&&r.splice(i,1),r.length===1&&r[0]==="required"?En.required:En[this.getType(o)]||void 0},e}();gn.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");En[t]=n};gn.warning=Hf;gn.messages=tr;gn.validators=En;const{cubicBezierEaseInOut:xi}=rs;function mh({name:e="fade-down",fromOffset:t="-4px",enterDuration:n=".3s",leaveDuration:o=".3s",enterCubicBezier:r=xi,leaveCubicBezier:i=xi}={}){return[Z(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0,transform:`translateY(${t})`}),Z(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),Z(`&.${e}-transition-leave-active`,{transition:`opacity ${o} ${i}, transform ${o} ${i}`}),Z(`&.${e}-transition-enter-active`,{transition:`opacity ${n} ${r}, transform ${n} ${r}`})]}const yh=C("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[C("form-item-label",`
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
 `,[A("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),A("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),C("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),B("auto-label-width",[C("form-item-label","white-space: nowrap;")]),B("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `,[C("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[B("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),B("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),B("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),B("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),A("text",`
 grid-area: text; 
 `),A("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),B("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[B("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),C("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),C("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),C("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[Z("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),C("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[B("warning",{color:"var(--n-feedback-text-color-warning)"}),B("error",{color:"var(--n-feedback-text-color-error)"}),mh({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);function wh(e){const t=Fe(Ln,null),{mergedComponentPropsRef:n}=Qe(e);return{mergedSize:E(()=>{var o,r;if(e.size!==void 0)return e.size;if((t==null?void 0:t.props.size)!==void 0)return t.props.size;const i=(r=(o=n==null?void 0:n.value)===null||o===void 0?void 0:o.Form)===null||r===void 0?void 0:r.size;return i||"medium"})}}function xh(e){const t=Fe(Ln,null),n=E(()=>{const{labelPlacement:h}=e;return h!==void 0?h:t!=null&&t.props.labelPlacement?t.props.labelPlacement:"top"}),o=E(()=>n.value==="left"&&(e.labelWidth==="auto"||(t==null?void 0:t.props.labelWidth)==="auto")),r=E(()=>{if(n.value==="top")return;const{labelWidth:h}=e;if(h!==void 0&&h!=="auto")return Zt(h);if(o.value){const p=t==null?void 0:t.maxChildLabelWidthRef.value;return p!==void 0?Zt(p):void 0}if((t==null?void 0:t.props.labelWidth)!==void 0)return Zt(t.props.labelWidth)}),i=E(()=>{const{labelAlign:h}=e;if(h)return h;if(t!=null&&t.props.labelAlign)return t.props.labelAlign}),a=E(()=>{var h;return[(h=e.labelProps)===null||h===void 0?void 0:h.style,e.labelStyle,{width:r.value}]}),l=E(()=>{const{showRequireMark:h}=e;return h!==void 0?h:t==null?void 0:t.props.showRequireMark}),s=E(()=>{const{requireMarkPlacement:h}=e;return h!==void 0?h:(t==null?void 0:t.props.requireMarkPlacement)||"right"}),u=D(!1),c=D(!1),v=E(()=>{const{validationStatus:h}=e;if(h!==void 0)return h;if(u.value)return"error";if(c.value)return"warning"}),g=E(()=>{const{showFeedback:h}=e;return h!==void 0?h:(t==null?void 0:t.props.showFeedback)!==void 0?t.props.showFeedback:!0}),m=E(()=>{const{showLabel:h}=e;return h!==void 0?h:(t==null?void 0:t.props.showLabel)!==void 0?t.props.showLabel:!0});return{validationErrored:u,validationWarned:c,mergedLabelStyle:a,mergedLabelPlacement:n,mergedLabelAlign:i,mergedShowRequireMark:l,mergedRequireMarkPlacement:s,mergedValidationStatus:v,mergedShowFeedback:g,mergedShowLabel:m,isAutoLabelWidth:o}}function Ch(e){const t=Fe(Ln,null),n=E(()=>{const{rulePath:a}=e;if(a!==void 0)return a;const{path:l}=e;if(l!==void 0)return l}),o=E(()=>{const a=[],{rule:l}=e;if(l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l)),t){const{rules:s}=t.props,{value:u}=n;if(s!==void 0&&u!==void 0){const c=Pr(s,u);c!==void 0&&(Array.isArray(c)?a.push(...c):a.push(c))}}return a}),r=E(()=>o.value.some(a=>a.required)),i=E(()=>r.value||e.required);return{mergedRules:o,mergedRequired:i}}var Ci=function(e,t,n,o){function r(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function l(c){try{u(o.next(c))}catch(v){a(v)}}function s(c){try{u(o.throw(c))}catch(v){a(v)}}function u(c){c.done?i(c.value):r(c.value).then(l,s)}u((o=o.apply(e,t||[])).next())})};const kh=Object.assign(Object.assign({},$e.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,feedbackClass:String,feedbackStyle:[String,Object],showLabel:{type:Boolean,default:void 0},labelProps:Object,contentClass:String,contentStyle:[String,Object]});function ki(e,t){return(...n)=>{try{const o=e(...n);return!t&&(typeof o=="boolean"||o instanceof Error||Array.isArray(o))||o!=null&&o.then?o:(o===void 0||Qn("form-item/validate",`You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t?"`Promise`":"`boolean`, `Error` or `Promise`"} typed value instead.`),!0)}catch(o){Qn("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(o);return}}}const Yt=ce({name:"FormItem",props:kh,slots:Object,setup(e){bs(wa,"formItems",de(e,"path"));const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Qe(e),o=Fe(Ln,null),r=wh(e),i=xh(e),{validationErrored:a,validationWarned:l}=i,{mergedRequired:s,mergedRules:u}=Ch(e),{mergedSize:c}=r,{mergedLabelPlacement:v,mergedLabelAlign:g,mergedRequireMarkPlacement:m}=i,h=D([]),p=D(jo()),k=D(null),b=o?de(o.props,"disabled"):D(!1),_=$e("Form","-form-item",yh,ji,e,t);ke(de(e,"path"),()=>{e.ignorePathChange||y()});function R(){if(!i.isAutoLabelWidth.value)return;const M=k.value;if(M!==null){const V=M.style.whiteSpace;M.style.whiteSpace="nowrap",M.style.width="",o==null||o.deriveMaxChildLabelWidth(Number(getComputedStyle(M).width.slice(0,-2))),M.style.whiteSpace=V}}function y(){h.value=[],a.value=!1,l.value=!1,e.feedback&&(p.value=jo())}const S=(...M)=>Ci(this,[...M],void 0,function*(V=null,T=()=>!0,G={suppressWarning:!0}){const{path:ee}=e;G?G.first||(G.first=e.first):G={};const{value:ae}=u,ue=o?Pr(o.props.model,ee||""):void 0,le={},_e={},j=(V?ae.filter(pe=>Array.isArray(pe.trigger)?pe.trigger.includes(V):pe.trigger===V):ae).filter(T).map((pe,Be)=>{const Me=Object.assign({},pe);if(Me.validator&&(Me.validator=ki(Me.validator,!1)),Me.asyncValidator&&(Me.asyncValidator=ki(Me.asyncValidator,!0)),Me.renderMessage){const He=`__renderMessage__${Be}`;_e[He]=Me.message,Me.message=He,le[He]=Me.renderMessage}return Me}),P=j.filter(pe=>pe.level!=="warning"),I=j.filter(pe=>pe.level==="warning"),N={valid:!0,errors:void 0,warnings:void 0};if(!j.length)return N;const fe=ee??"__n_no_path__",he=new gn({[fe]:P}),Ae=new gn({[fe]:I}),{validateMessages:Ne}=(o==null?void 0:o.props)||{};Ne&&(he.messages(Ne),Ae.messages(Ne));const Te=pe=>{h.value=pe.map(Be=>{const Me=(Be==null?void 0:Be.message)||"";return{key:Me,render:()=>Me.startsWith("__renderMessage__")?le[Me]():Me}}),pe.forEach(Be=>{var Me;!((Me=Be.message)===null||Me===void 0)&&Me.startsWith("__renderMessage__")&&(Be.message=_e[Be.message])})};if(P.length){const pe=yield new Promise(Be=>{he.validate({[fe]:ue},G,Be)});pe!=null&&pe.length&&(N.valid=!1,N.errors=pe,Te(pe))}if(I.length&&!N.errors){const pe=yield new Promise(Be=>{Ae.validate({[fe]:ue},G,Be)});pe!=null&&pe.length&&(Te(pe),N.warnings=pe)}return!N.errors&&!N.warnings?y():(a.value=!!N.errors,l.value=!!N.warnings),N});function z(){S("blur")}function F(){S("change")}function X(){S("focus")}function U(){S("input")}function Y(M,V){return Ci(this,void 0,void 0,function*(){let T,G,ee,ae;return typeof M=="string"?(T=M,G=V):M!==null&&typeof M=="object"&&(T=M.trigger,G=M.callback,ee=M.shouldRuleBeApplied,ae=M.options),yield new Promise((ue,le)=>{S(T,ee,ae).then(({valid:_e,errors:j,warnings:P})=>{_e?(G&&G(void 0,{warnings:P}),ue({warnings:P})):(G&&G(j,{warnings:P}),le(j))})})})}Ke(is,{path:de(e,"path"),disabled:b,mergedSize:r.mergedSize,mergedValidationStatus:i.mergedValidationStatus,restoreValidation:y,handleContentBlur:z,handleContentChange:F,handleContentFocus:X,handleContentInput:U});const Q={validate:Y,restoreValidation:y,internalValidate:S,invalidateLabelWidth:R};gt(R);const H=E(()=>{var M;const{value:V}=c,{value:T}=v,G=T==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:ee},self:{labelTextColor:ae,asteriskColor:ue,lineHeight:le,feedbackTextColor:_e,feedbackTextColorWarning:j,feedbackTextColorError:P,feedbackPadding:I,labelFontWeight:N,[oe("labelHeight",V)]:fe,[oe("blankHeight",V)]:he,[oe("feedbackFontSize",V)]:Ae,[oe("feedbackHeight",V)]:Ne,[oe("labelPadding",G)]:Te,[oe("labelTextAlign",G)]:pe,[oe(oe("labelFontSize",T),V)]:Be}}=_.value;let Me=(M=g.value)!==null&&M!==void 0?M:pe;return T==="top"&&(Me=Me==="right"?"flex-end":"flex-start"),{"--n-bezier":ee,"--n-line-height":le,"--n-blank-height":he,"--n-label-font-size":Be,"--n-label-text-align":Me,"--n-label-height":fe,"--n-label-padding":Te,"--n-label-font-weight":N,"--n-asterisk-color":ue,"--n-label-text-color":ae,"--n-feedback-padding":I,"--n-feedback-font-size":Ae,"--n-feedback-height":Ne,"--n-feedback-text-color":_e,"--n-feedback-text-color-warning":j,"--n-feedback-text-color-error":P}}),O=n?nt("form-item",E(()=>{var M;return`${c.value[0]}${v.value[0]}${((M=g.value)===null||M===void 0?void 0:M[0])||""}`}),H,e):void 0,L=E(()=>v.value==="left"&&m.value==="left"&&g.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:k,mergedClsPrefix:t,mergedRequired:s,feedbackId:p,renderExplains:h,reverseColSpace:L},i),r),Q),{cssVars:n?void 0:H,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender})},render(){const{$slots:e,mergedClsPrefix:t,mergedShowLabel:n,mergedShowRequireMark:o,mergedRequireMarkPlacement:r,onRender:i}=this,a=o!==void 0?o:this.mergedRequired;i==null||i();const l=()=>{const s=this.$slots.label?this.$slots.label():this.label;if(!s)return null;const u=f("span",{class:`${t}-form-item-label__text`},s),c=a?f("span",{class:`${t}-form-item-label__asterisk`},r!=="left"?" *":"* "):r==="right-hanging"&&f("span",{class:`${t}-form-item-label__asterisk-placeholder`}," *"),{labelProps:v}=this;return f("label",Object.assign({},v,{class:[v==null?void 0:v.class,`${t}-form-item-label`,`${t}-form-item-label--${r}-mark`,this.reverseColSpace&&`${t}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),r==="left"?[c,u]:[u,c])};return f("div",{class:[`${t}-form-item`,this.themeClass,`${t}-form-item--${this.mergedSize}-size`,`${t}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${t}-form-item--auto-label-width`,!n&&`${t}-form-item--no-label`],style:this.cssVars},n&&l(),f("div",{class:[`${t}-form-item-blank`,this.contentClass,this.mergedValidationStatus&&`${t}-form-item-blank--${this.mergedValidationStatus}`],style:this.contentStyle},e),this.mergedShowFeedback?f("div",{key:this.feedbackId,style:this.feedbackStyle,class:[`${t}-form-item-feedback-wrapper`,this.feedbackClass]},f(Dn,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:s}=this;return Ze(e.feedback,u=>{var c;const{feedback:v}=this,g=u||v?f("div",{key:"__feedback__",class:`${t}-form-item-feedback__line`},u||v):this.renderExplains.length?(c=this.renderExplains)===null||c===void 0?void 0:c.map(({key:m,render:h})=>f("div",{key:m,class:`${t}-form-item-feedback__line`},h())):null;return g?s==="warning"?f("div",{key:"controlled-warning",class:`${t}-form-item-feedback ${t}-form-item-feedback--warning`},g):s==="error"?f("div",{key:"controlled-error",class:`${t}-form-item-feedback ${t}-form-item-feedback--error`},g):s==="success"?f("div",{key:"controlled-success",class:`${t}-form-item-feedback ${t}-form-item-feedback--success`},g):f("div",{key:"controlled-default",class:`${t}-form-item-feedback`},g):null})}})):null)}}),Ir=mt("n-tabs"),Ca={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Si=ce({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ca,slots:Object,setup(e){const t=Fe(Ir,null);return t||as("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return f("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Sh=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ls(Ca,["displayDirective"])),nr=ce({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Sh,setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:i,addTabStyleRef:a,tabClassRef:l,addTabClassRef:s,tabChangeIdRef:u,onBeforeLeaveRef:c,triggerRef:v,handleAdd:g,activateTab:m,handleClose:h}=Fe(Ir);return{trigger:v,mergedClosable:E(()=>{if(e.internalAddable)return!1;const{closable:p}=e;return p===void 0?r.value:p}),style:i,addStyle:a,tabClass:l,addTabClass:s,clsPrefix:t,value:n,type:o,handleClose(p){p.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){g();return}const{name:p}=e,k=++u.id;if(p!==n.value){const{value:b}=c;b?Promise.resolve(b(e.name,n.value)).then(_=>{_&&u.id===k&&m(p)}):m(p)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:o,label:r,tab:i,value:a,mergedClosable:l,trigger:s,$slots:{default:u}}=this,c=r??i;return f("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?f("div",{class:`${t}-tabs-tab-pad`}):null,f("div",Object.assign({key:n,"data-name":n,"data-disabled":o?!0:void 0},en({class:[`${t}-tabs-tab`,a===n&&`${t}-tabs-tab--active`,o&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:s==="click"?this.activateTab:void 0,onMouseenter:s==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),f("span",{class:`${t}-tabs-tab__label`},e?f(pt,null,f("div",{class:`${t}-tabs-tab__height-placeholder`}," "),f(jt,{clsPrefix:t},{default:()=>f(eu,null)})):u?u():typeof c=="object"?c:bt(c??n)),l&&this.type==="card"?f(br,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),Ph=C("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[B("segment-type",[C("tabs-rail",[Z("&.transition-disabled",[C("tabs-capsule",`
 transition: none;
 `)])])]),B("top",[C("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),B("left",[C("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),B("left, right",`
 flex-direction: row;
 `,[C("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),C("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),B("right",`
 flex-direction: row-reverse;
 `,[C("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),C("tabs-bar",`
 left: 0;
 `)]),B("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[C("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),C("tabs-bar",`
 top: 0;
 `)]),C("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[C("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),C("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[C("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[B("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),B("flex",[C("tabs-nav",`
 width: 100%;
 position: relative;
 `,[C("tabs-wrapper",`
 width: 100%;
 `,[C("tabs-tab",`
 margin-right: 0;
 `)])])]),C("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),B("top, bottom",[Z(">",[C("tabs-nav",[C("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),Z("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),B("shadow-start",[Z("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),B("shadow-end",[Z("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),B("left, right",[C("tabs-nav-scroll-content",`
 flex-direction: column;
 `),Z(">",[C("tabs-nav",[C("tabs-nav-scroll-wrapper",[Z("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),Z("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),B("shadow-start",[Z("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),B("shadow-end",[Z("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),C("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[C("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[Z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),Z("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),C("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),C("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),C("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),C("tabs-tab",`
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
 `,[B("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),C("tabs-bar",`
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
 `,[Z("&.transition-disabled",`
 transition: none;
 `),B("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),C("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),C("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[Z("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),Z("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),Z("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),Z("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),Z("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),C("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),B("line-type, bar-type",[C("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[Z("&:hover",{color:"var(--n-tab-text-color-hover)"}),B("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),B("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),C("tabs-nav",[B("line-type",[B("top",[A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 bottom: -1px;
 `)]),B("left",[A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 right: -1px;
 `)]),B("right",[A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 left: -1px;
 `)]),B("bottom",[A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-bar",`
 top: -1px;
 `)]),A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-bar",`
 border-radius: 0;
 `)]),B("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),C("tabs-tab",`
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
 `,[B("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),je("disabled",[Z("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),B("closable","padding-right: 8px;"),B("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),B("disabled","color: var(--n-tab-text-color-disabled);")])]),B("left, right",`
 flex-direction: column; 
 `,[A("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),C("tabs-wrapper",`
 flex-direction: column;
 `),C("tabs-tab-wrapper",`
 flex-direction: column;
 `,[C("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),B("top",[B("card-type",[C("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),A("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[B("active",`
 border-bottom: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),B("left",[B("card-type",[C("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),A("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[B("active",`
 border-right: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),B("right",[B("card-type",[C("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),A("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[B("active",`
 border-left: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),B("bottom",[B("card-type",[C("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),A("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[B("active",`
 border-top: 1px solid #0000;
 `)]),C("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),C("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Fo=Qc,_h=Object.assign(Object.assign({},$e.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Mh=ce({name:"Tabs",props:_h,slots:Object,setup(e,{slots:t}){var n,o,r,i;const{mergedClsPrefixRef:a,inlineThemeDisabled:l,mergedComponentPropsRef:s}=Qe(e),u=$e("Tabs","-tabs",Ph,ss,e,a),c=D(null),v=D(null),g=D(null),m=D(null),h=D(null),p=D(null),k=D(!0),b=D(!0),_=to(e,["labelSize","size"]),R=E(()=>{var q,K;if(_.value)return _.value;const d=(K=(q=s==null?void 0:s.value)===null||q===void 0?void 0:q.Tabs)===null||K===void 0?void 0:K.size;return d||"medium"}),y=to(e,["activeName","value"]),S=D((o=(n=y.value)!==null&&n!==void 0?n:e.defaultValue)!==null&&o!==void 0?o:t.default?(i=(r=mo(t.default())[0])===null||r===void 0?void 0:r.props)===null||i===void 0?void 0:i.name:null),z=Qt(y,S),F={id:0},X=E(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ke(z,()=>{F.id=0,O(),L()});function U(){var q;const{value:K}=z;return K===null?null:(q=c.value)===null||q===void 0?void 0:q.querySelector(`[data-name="${K}"]`)}function Y(q){if(e.type==="card")return;const{value:K}=v;if(!K)return;const d=K.style.opacity==="0";if(q){const w=`${a.value}-tabs-bar--disabled`,{barWidth:J,placement:Pe}=e;if(q.dataset.disabled==="true"?K.classList.add(w):K.classList.remove(w),["top","bottom"].includes(Pe)){if(H(["top","maxHeight","height"]),typeof J=="number"&&q.offsetWidth>=J){const ye=Math.floor((q.offsetWidth-J)/2)+q.offsetLeft;K.style.left=`${ye}px`,K.style.maxWidth=`${J}px`}else K.style.left=`${q.offsetLeft}px`,K.style.maxWidth=`${q.offsetWidth}px`;K.style.width="8192px",d&&(K.style.transition="none"),K.offsetWidth,d&&(K.style.transition="",K.style.opacity="1")}else{if(H(["left","maxWidth","width"]),typeof J=="number"&&q.offsetHeight>=J){const ye=Math.floor((q.offsetHeight-J)/2)+q.offsetTop;K.style.top=`${ye}px`,K.style.maxHeight=`${J}px`}else K.style.top=`${q.offsetTop}px`,K.style.maxHeight=`${q.offsetHeight}px`;K.style.height="8192px",d&&(K.style.transition="none"),K.offsetHeight,d&&(K.style.transition="",K.style.opacity="1")}}}function Q(){if(e.type==="card")return;const{value:q}=v;q&&(q.style.opacity="0")}function H(q){const{value:K}=v;if(K)for(const d of q)K.style[d]=""}function O(){if(e.type==="card")return;const q=U();q?Y(q):Q()}function L(){var q;const K=(q=h.value)===null||q===void 0?void 0:q.$el;if(!K)return;const d=U();if(!d)return;const{scrollLeft:w,offsetWidth:J}=K,{offsetLeft:Pe,offsetWidth:ye}=d;w>Pe?K.scrollTo({top:0,left:Pe,behavior:"smooth"}):Pe+ye>w+J&&K.scrollTo({top:0,left:Pe+ye-J,behavior:"smooth"})}const M=D(null);let V=0,T=null;function G(q){const K=M.value;if(K){V=q.getBoundingClientRect().height;const d=`${V}px`,w=()=>{K.style.height=d,K.style.maxHeight=d};T?(w(),T(),T=null):T=w}}function ee(q){const K=M.value;if(K){const d=q.getBoundingClientRect().height,w=()=>{document.body.offsetHeight,K.style.maxHeight=`${d}px`,K.style.height=`${Math.max(V,d)}px`};T?(T(),T=null,w()):T=w}}function ae(){const q=M.value;if(q){q.style.maxHeight="",q.style.height="";const{paneWrapperStyle:K}=e;if(typeof K=="string")q.style.cssText=K;else if(K){const{maxHeight:d,height:w}=K;d!==void 0&&(q.style.maxHeight=d),w!==void 0&&(q.style.height=w)}}}const ue={value:[]},le=D("next");function _e(q){const K=z.value;let d="next";for(const w of ue.value){if(w===K)break;if(w===q){d="prev";break}}le.value=d,j(q)}function j(q){const{onActiveNameChange:K,onUpdateValue:d,"onUpdate:value":w}=e;K&&Ce(K,q),d&&Ce(d,q),w&&Ce(w,q),S.value=q}function P(q){const{onClose:K}=e;K&&Ce(K,q)}function I(){const{value:q}=v;if(!q)return;const K="transition-disabled";q.classList.add(K),O(),q.classList.remove(K)}const N=D(null);function fe({transitionDisabled:q}){const K=c.value;if(!K)return;q&&K.classList.add("transition-disabled");const d=U();d&&N.value&&(N.value.style.width=`${d.offsetWidth}px`,N.value.style.height=`${d.offsetHeight}px`,N.value.style.transform=`translateX(${d.offsetLeft-Jn(getComputedStyle(K).paddingLeft)}px)`,q&&N.value.offsetWidth),q&&K.classList.remove("transition-disabled")}ke([z],()=>{e.type==="segment"&&zt(()=>{fe({transitionDisabled:!1})})}),gt(()=>{e.type==="segment"&&fe({transitionDisabled:!0})});let he=0;function Ae(q){var K;if(q.contentRect.width===0&&q.contentRect.height===0||he===q.contentRect.width)return;he=q.contentRect.width;const{type:d}=e;if((d==="line"||d==="bar")&&I(),d!=="segment"){const{placement:w}=e;He((w==="top"||w==="bottom"?(K=h.value)===null||K===void 0?void 0:K.$el:p.value)||null)}}const Ne=Fo(Ae,64);ke([()=>e.justifyContent,()=>e.size],()=>{zt(()=>{const{type:q}=e;(q==="line"||q==="bar")&&I()})});const Te=D(!1);function pe(q){var K;const{target:d,contentRect:{width:w,height:J}}=q,Pe=d.parentElement.parentElement.offsetWidth,ye=d.parentElement.parentElement.offsetHeight,{placement:rt}=e;if(!Te.value)rt==="top"||rt==="bottom"?Pe<w&&(Te.value=!0):ye<J&&(Te.value=!0);else{const{value:ct}=m;if(!ct)return;rt==="top"||rt==="bottom"?Pe-w>ct.$el.offsetWidth&&(Te.value=!1):ye-J>ct.$el.offsetHeight&&(Te.value=!1)}He(((K=h.value)===null||K===void 0?void 0:K.$el)||null)}const Be=Fo(pe,64);function Me(){const{onAdd:q}=e;q&&q(),zt(()=>{const K=U(),{value:d}=h;!K||!d||d.scrollTo({left:K.offsetLeft,top:0,behavior:"smooth"})})}function He(q){if(!q)return;const{placement:K}=e;if(K==="top"||K==="bottom"){const{scrollLeft:d,scrollWidth:w,offsetWidth:J}=q;k.value=d<=0,b.value=d+J>=w}else{const{scrollTop:d,scrollHeight:w,offsetHeight:J}=q;k.value=d<=0,b.value=d+J>=w}}const ot=Fo(q=>{He(q.target)},64);Ke(Ir,{triggerRef:de(e,"trigger"),tabStyleRef:de(e,"tabStyle"),tabClassRef:de(e,"tabClass"),addTabStyleRef:de(e,"addTabStyle"),addTabClassRef:de(e,"addTabClass"),paneClassRef:de(e,"paneClass"),paneStyleRef:de(e,"paneStyle"),mergedClsPrefixRef:a,typeRef:de(e,"type"),closableRef:de(e,"closable"),valueRef:z,tabChangeIdRef:F,onBeforeLeaveRef:de(e,"onBeforeLeave"),activateTab:_e,handleClose:P,handleAdd:Me}),qi(()=>{O(),L()}),bn(()=>{const{value:q}=g;if(!q)return;const{value:K}=a,d=`${K}-tabs-nav-scroll-wrapper--shadow-start`,w=`${K}-tabs-nav-scroll-wrapper--shadow-end`;k.value?q.classList.remove(d):q.classList.add(d),b.value?q.classList.remove(w):q.classList.add(w)});const vt={syncBarPosition:()=>{O()}},tt=()=>{fe({transitionDisabled:!0})},dt=E(()=>{const{value:q}=R,{type:K}=e,d={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[K],w=`${q}${d}`,{self:{barColor:J,closeIconColor:Pe,closeIconColorHover:ye,closeIconColorPressed:rt,tabColor:ct,tabBorderColor:At,paneTextColor:Et,tabFontWeight:Ht,tabBorderRadius:Kt,tabFontWeightActive:Tt,colorSegment:ut,fontWeightStrong:$,tabColorSegment:te,closeSize:se,closeIconSize:we,closeColorHover:ve,closeColorPressed:be,closeBorderRadius:Se,[oe("panePadding",q)]:Le,[oe("tabPadding",w)]:Je,[oe("tabPaddingVertical",w)]:wn,[oe("tabGap",w)]:on,[oe("tabGap",`${w}Vertical`)]:xn,[oe("tabTextColor",K)]:Ft,[oe("tabTextColorActive",K)]:Bt,[oe("tabTextColorHover",K)]:Cn,[oe("tabTextColorDisabled",K)]:kn,[oe("tabFontSize",q)]:rn},common:{cubicBezierEaseInOut:yt}}=u.value;return{"--n-bezier":yt,"--n-color-segment":ut,"--n-bar-color":J,"--n-tab-font-size":rn,"--n-tab-text-color":Ft,"--n-tab-text-color-active":Bt,"--n-tab-text-color-disabled":kn,"--n-tab-text-color-hover":Cn,"--n-pane-text-color":Et,"--n-tab-border-color":At,"--n-tab-border-radius":Kt,"--n-close-size":se,"--n-close-icon-size":we,"--n-close-color-hover":ve,"--n-close-color-pressed":be,"--n-close-border-radius":Se,"--n-close-icon-color":Pe,"--n-close-icon-color-hover":ye,"--n-close-icon-color-pressed":rt,"--n-tab-color":ct,"--n-tab-font-weight":Ht,"--n-tab-font-weight-active":Tt,"--n-tab-padding":Je,"--n-tab-padding-vertical":wn,"--n-tab-gap":on,"--n-tab-gap-vertical":xn,"--n-pane-padding-left":ht(Le,"left"),"--n-pane-padding-right":ht(Le,"right"),"--n-pane-padding-top":ht(Le,"top"),"--n-pane-padding-bottom":ht(Le,"bottom"),"--n-font-weight-strong":$,"--n-tab-color-segment":te}}),Xe=l?nt("tabs",E(()=>`${R.value[0]}${e.type[0]}`),dt,e):void 0;return Object.assign({mergedClsPrefix:a,mergedValue:z,renderedNames:new Set,segmentCapsuleElRef:N,tabsPaneWrapperRef:M,tabsElRef:c,barElRef:v,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:g,addTabFixed:Te,tabWrapperStyle:X,handleNavResize:Ne,mergedSize:R,handleScroll:ot,handleTabsResize:Be,cssVars:l?void 0:dt,themeClass:Xe==null?void 0:Xe.themeClass,animationDirection:le,renderNameListRef:ue,yScrollElRef:p,handleSegmentResize:tt,onAnimationBeforeLeave:G,onAnimationEnter:ee,onAnimationAfterEnter:ae,onRender:Xe==null?void 0:Xe.onRender},vt)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:o,addable:r,mergedSize:i,renderNameListRef:a,onRender:l,paneWrapperClass:s,paneWrapperStyle:u,$slots:{default:c,prefix:v,suffix:g}}=this;l==null||l();const m=c?mo(c()).filter(S=>S.type.__TAB_PANE__===!0):[],h=c?mo(c()).filter(S=>S.type.__TAB__===!0):[],p=!h.length,k=t==="card",b=t==="segment",_=!k&&!b&&this.justifyContent;a.value=[];const R=()=>{const S=f("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},_?null:f("div",{class:`${e}-tabs-scroll-padding`,style:n==="top"||n==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),p?m.map((z,F)=>(a.value.push(z.props.name),Bo(f(nr,Object.assign({},z.props,{internalCreatedByPane:!0,internalLeftPadded:F!==0&&(!_||_==="center"||_==="start"||_==="end")}),z.children?{default:z.children.tab}:void 0)))):h.map((z,F)=>(a.value.push(z.props.name),Bo(F!==0&&!_?Mi(z):z))),!o&&r&&k?_i(r,(p?m.length:h.length)!==0):null,_?null:f("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return f("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},k&&r?f(hn,{onResize:this.handleTabsResize},{default:()=>S}):S,k?f("div",{class:`${e}-tabs-pad`}):null,k?null:f("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},y=b?"top":n;return f("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,_&&`${e}-tabs--flex`,`${e}-tabs--${y}`],style:this.cssVars},f("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${y}`,`${e}-tabs-nav`]},Ze(v,S=>S&&f("div",{class:`${e}-tabs-nav__prefix`},S)),b?f(hn,{onResize:this.handleSegmentResize},{default:()=>f("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},f("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},f("div",{class:`${e}-tabs-wrapper`},f("div",{class:`${e}-tabs-tab`}))),p?m.map((S,z)=>(a.value.push(S.props.name),f(nr,Object.assign({},S.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0}),S.children?{default:S.children.tab}:void 0))):h.map((S,z)=>(a.value.push(S.props.name),z===0?S:Mi(S))))}):f(hn,{onResize:this.handleNavResize},{default:()=>f("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(y)?f(As,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:R}):f("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},R()))}),o&&r&&k?_i(r,!0):null,Ze(g,S=>S&&f("div",{class:`${e}-tabs-nav__suffix`},S))),p&&(this.animated&&(y==="top"||y==="bottom")?f("div",{ref:"tabsPaneWrapperRef",style:u,class:[`${e}-tabs-pane-wrapper`,s]},Pi(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Pi(m,this.mergedValue,this.renderedNames)))}});function Pi(e,t,n,o,r,i,a){const l=[];return e.forEach(s=>{const{name:u,displayDirective:c,"display-directive":v}=s.props,g=h=>c===h||v===h,m=t===u;if(s.key!==void 0&&(s.key=u),m||g("show")||g("show:lazy")&&n.has(u)){n.has(u)||n.add(u);const h=!g("if");l.push(h?mn(s,[[vr,m]]):s)}}),a?f(ds,{name:`${a}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:i},{default:()=>l}):l}function _i(e,t){return f(nr,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e=="object"&&e.disabled})}function Mi(e){const t=Wi(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Bo(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const Rh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$v=ce({name:"AddOutline",render:function(t,n){return De(),Ge("svg",Rh,n[0]||(n[0]=[re("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),re("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)]))}}),Oh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Av=ce({name:"CopyOutline",render:function(t,n){return De(),Ge("svg",Oh,n[0]||(n[0]=[re("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),re("path",{d:"M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),zh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ih=ce({name:"MoonOutline",render:function(t,n){return De(),Ge("svg",zh,n[0]||(n[0]=[re("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),$h={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ev=ce({name:"RefreshOutline",render:function(t,n){return De(),Ge("svg",$h,n[0]||(n[0]=[re("path",{d:"M320 146s24.36-12-64-12a160 160 0 1 0 160 160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),re("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 58l80 80l-80 80"},null,-1)]))}}),Ah={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Tv=ce({name:"SendOutline",render:function(t,n){return De(),Ge("svg",Ah,n[0]||(n[0]=[re("path",{d:"M470.3 271.15L43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Eh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fv=ce({name:"SettingsOutline",render:function(t,n){return De(),Ge("svg",Eh,n[0]||(n[0]=[re("path",{d:"M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}}),Th={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Fh=ce({name:"SunnyOutline",render:function(t,n){return De(),Ge("svg",Th,n[0]||(n[0]=[Hi('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9)]))}}),Bh={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Bv=ce({name:"TrashOutline",render:function(t,n){return De(),Ge("svg",Bh,n[0]||(n[0]=[Hi('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>',6)]))}}),Xn="ai-canvas-projects",ka=()=>`project_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,Ve=D([]),Sa=()=>{try{const e=localStorage.getItem(Xn);if(e){const t=JSON.parse(e);Ve.value=t.map(n=>({...n,createdAt:new Date(n.createdAt),updatedAt:new Date(n.updatedAt)}))}}catch(e){console.error("Failed to load projects:",e),Ve.value=[]}},Dh=e=>{var n,o;if(!e.data)return e;const t={...e.data};return t.base64&&delete t.base64,(o=(n=t.url)==null?void 0:n.startsWith)!=null&&o.call(n,"data:")&&delete t.url,t.maskData&&delete t.maskData,{...e,data:t}},Lh=e=>{var t,n,o;return{...e,canvasData:e.canvasData?{...e.canvasData,nodes:((t=e.canvasData.nodes)==null?void 0:t.map(Dh))||[]}:e.canvasData,thumbnail:(o=(n=e.thumbnail)==null?void 0:n.startsWith)!=null&&o.call(n,"data:")?"":e.thumbnail}},nn=()=>{var t,n,o;const e=Ve.value.map(Lh);try{localStorage.setItem(Xn,JSON.stringify(e))}catch(r){if(r.name==="QuotaExceededError"){console.warn("localStorage quota exceeded, attempting aggressive cleanup...");const i=e.map((a,l)=>{var s;return{...a,thumbnail:"",canvasData:l>10?{nodes:[],edges:[],viewport:(s=a.canvasData)==null?void 0:s.viewport}:a.canvasData}});try{localStorage.setItem(Xn,JSON.stringify(i)),console.log("Saved with aggressive cleanup"),(t=window.$message)==null||t.warning("存储空间不足，已自动清理部分数据")}catch(a){console.error("Still failed after aggressive cleanup:",a);try{const l=i.slice(0,5);localStorage.setItem(Xn,JSON.stringify(l)),Ve.value=Ve.value.slice(0,5),(n=window.$message)==null||n.warning("存储空间严重不足，已保留最近 5 个项目")}catch(l){console.error("Cannot save even minimal data:",l),(o=window.$message)==null||o.error("存储失败，请清理浏览器存储空间")}}}else console.error("Failed to save projects:",r)}},Pa=(e="未命名项目")=>{const t=ka(),n=new Date,o={id:t,name:e,thumbnail:"",createdAt:n,updatedAt:n,canvasData:{nodes:[],edges:[],viewport:{x:100,y:50,zoom:.8}}};return Ve.value=[o,...Ve.value],nn(),t},Nh=(e,t)=>{const n=Ve.value.findIndex(r=>r.id===e);if(n===-1)return!1;Ve.value[n]={...Ve.value[n],...t,updatedAt:new Date};const[o]=Ve.value.splice(n,1);return Ve.value=[o,...Ve.value],nn(),!0},Dv=(e,t)=>{const n=Ve.value.find(o=>o.id===e);if(!n)return!1;if(n.canvasData={...n.canvasData,...t},n.updatedAt=new Date,t.nodes){const o=t.nodes.filter(r=>{var i;return(r.type==="image"||r.type==="video")&&((i=r.data)==null?void 0:i.url)}).sort((r,i)=>{var s,u,c,v;const a=((s=r.data)==null?void 0:s.updatedAt)||((u=r.data)==null?void 0:u.createdAt)||0;return(((c=i.data)==null?void 0:c.updatedAt)||((v=i.data)==null?void 0:v.createdAt)||0)-a});if(o.length>0){const r=o[0];r.type==="video"?n.thumbnail=r.data.thumbnail||r.data.url:n.thumbnail=r.data.url}}return nn(),!0},Lv=e=>{const t=Ve.value.find(n=>n.id===e);return(t==null?void 0:t.canvasData)||null},Wh=e=>{Ve.value=Ve.value.filter(t=>t.id!==e),nn()},Nv=e=>{const t=Ve.value.find(i=>i.id===e);if(!t)return null;const n=ka(),o=new Date,r={...JSON.parse(JSON.stringify(t)),id:n,name:`${t.name} (副本)`,createdAt:o,updatedAt:o};return Ve.value=[r,...Ve.value],nn(),n},Wv=(e,t)=>Nh(e,{name:t}),Vv=()=>{if(Sa(),Ve.value.length===0){const e=Pa("示例项目"),t=Ve.value.find(n=>n.id===e);t&&(t.canvasData={nodes:[{id:"node_0",type:"text",position:{x:150,y:150},data:{content:"一只金毛寻回犬在草地上奔跑，摇着尾巴，脸上带着快乐的表情。它的毛发在阳光下闪耀，眼神充满了对自由的渴望，全身散发着阳光、友善的气息。",label:"文本输入"}},{id:"node_1",type:"imageConfig",position:{x:500,y:150},data:{prompt:"",model:"doubao-seedream-4-5-251128",size:"512x512",label:"文生图"}}],edges:[{id:"edge_node_0_node_1",source:"node_0",target:"node_1",sourceHandle:"right",targetHandle:"left"}],viewport:{x:100,y:50,zoom:.8}},nn())}};typeof window<"u"&&(window.__aiCanvasProjects={projects:Ve,loadProjects:Sa,saveProjects:nn,createProject:Pa,deleteProject:Wh});const Ri=[{label:"21:9",key:"3024x1296"},{label:"16:9",key:"2560x1440"},{label:"4:3",key:"2304x1728"},{label:"3:2",key:"2496x1664"},{label:"1:1",key:"2048x2048"},{label:"2:3",key:"1664x2496"},{label:"3:4",key:"1728x2304"},{label:"9:16",key:"1440x2560"},{label:"9:21",key:"1296x3024"}],Vh=[{label:"21:9",key:"6198x2656"},{label:"16:9",key:"5404x3040"},{label:"4:3",key:"4694x3520"},{label:"3:2",key:"4992x3328"},{label:"1:1",key:"4096x4096"},{label:"2:3",key:"3328x4992"},{label:"3:4",key:"3520x4694"},{label:"9:16",key:"3040x5404"},{label:"9:21",key:"2656x6198"}],jh=[{label:"标准画质",key:"standard"},{label:"4K 高清",key:"4k"}],Oi=[{label:"16:9",key:"16x9"},{label:"4:3",key:"4x3"},{label:"3:2",key:"3x2"},{label:"1:1",key:"1x1"},{label:"2:3",key:"2x3"},{label:"3:4",key:"3x4"},{label:"9:16",key:"9x16"}],or=[{label:"FLUX.1 Schnell（HF 免费额度）",key:"black-forest-labs/FLUX.1-schnell",provider:["huggingface"],sizes:["1024x1024"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"Stable Diffusion XL（HF 免费额度）",key:"stabilityai/stable-diffusion-xl-base-1.0",provider:["huggingface"],sizes:["1024x1024"],defaultParams:{size:"1024x1024",quality:"standard",style:"vivid"}},{label:"Nano Banana 2",key:"nano-banana-2",provider:["chatfire"],sizes:Oi.map(e=>e.key),defaultParams:{size:"1x1",quality:"standard",style:"vivid"}},{label:"Nano Banana Pro",key:"nano-banana-pro",provider:["chatfire"],sizes:Oi.map(e=>e.key),defaultParams:{size:"1x1",quality:"standard",style:"vivid"}},{label:"豆包 Seedream 4.5",key:"doubao-seedream-4-5-251128",provider:["chatfire"],sizes:Ri.map(e=>e.key),qualities:jh,getSizesByQuality:e=>e==="4k"?Vh:Ri,defaultParams:{size:"2048x2048",quality:"standard",style:"vivid"}},{label:"Nano Banana",key:"nano-banana",provider:["chatfire"],tips:"尺寸写在提示词中: 尺寸 9:16",sizes:[],defaultParams:{quality:"standard",style:"vivid"}}],Hh=[{label:"16:9 (横版)",key:"16x9"},{label:"4:3",key:"4x3"},{label:"1:1 (方形)",key:"1x1"},{label:"3:4",key:"3x4"},{label:"9:16 (竖版)",key:"9x16"}],rr=[{label:"Seedance 1.5 Pro (图文视频)",key:"doubao-seedance-1-5-pro-251215",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:10,resolution:"1080p"}},{label:"Seedance 1.0 Lite (文生视频)",key:"doubao-seedance-1-0-lite-t2v-250428",provider:["chatfire"],type:"t2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"720p",defaultParams:{ratio:"16:9",duration:5,resolution:"720p"}},{label:"Seedance 1.0 Lite (图生视频)",key:"doubao-seedance-1-0-lite-i2v-250428",provider:["chatfire"],type:"i2v",ratios:["16:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"720p",defaultParams:{ratio:"16:9",duration:5,resolution:"720p"}},{label:"Seedance 1.0 Pro (图文视频)",key:"doubao-seedance-1-0-pro-250528",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9","16:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:5,resolution:"1080p"}},{label:"Seedance 1.0 Pro Fast (图文视频)",key:"doubao-seedance-1-0-pro-fast-251015",provider:["chatfire"],type:"t2v+i2v",ratios:["16:9","4:3","1:1","3:4","9:16","21:9"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],resolutions:["480p","720p","1080p"],defaultResolution:"1080p",defaultParams:{ratio:"16:9",duration:5,resolution:"1080p"}}],ir=[{label:"OpenRouter Free Router",key:"openrouter/free",provider:["openrouter"]},{label:"DeepSeek Chat V3 Free",key:"deepseek/deepseek-chat-v3-0324:free",provider:["openrouter"]},{label:"Qwen3 235B Free",key:"qwen/qwen3-235b-a22b:free",provider:["openrouter"]},{label:"Gemini Flash（免费额度）",key:"gemini-3.5-flash",provider:["gemini"]},{label:"GPT OSS 20B（HF 免费额度）",key:"openai/gpt-oss-20b",provider:["huggingface"]},{label:"GPT-4o Mini",key:"gpt-4o-mini",provider:["openai"]},{label:"GPT-4o",key:"gpt-4o",provider:["openai"]},{label:"GPT-5.2",key:"gpt-5.2",provider:["openai"]},{label:"DeepSeek Chat",key:"deepseek-chat",provider:["openai","chatfire"]},{label:"豆包 Seed Flash",key:"doubao-seed-1-6-flash-250615",provider:["chatfire"]},{label:"Gemini 3 Pro",key:"gemini-3-pro",provider:["openai"]}],jv=Hh,Hv=[{label:"5 秒",key:5},{label:"10 秒",key:10}],Do="nano-banana-pro",Lo="doubao-seedance-1-5-pro-251215",No="gpt-4o-mini",Kv=e=>[...or,...rr,...ir].find(n=>n.key===e),pn={chatfire:{label:"OpenAI 兼容接口",defaultBaseUrl:"https://api.chatfire.site",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/video/generations",videoQuery:"/v1/video/task/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),e.image&&(t.image=e.image),t},video:e=>{const t=e.model||"";if(t.includes("seedance")){const o=[];let r=e.prompt||"";return e.resolution&&(r+=` --resolution ${e.resolution}`),e.size&&(r+=` --ratio ${e.size}`),e.seconds&&(r+=` --dur ${e.seconds}`),r+=" --fps 24",r+=` --wm ${e.wm!==!1?"true":"false"}`,e.seed!==void 0&&(r+=` --seed ${e.seed}`),r+=` --cf ${e.cf===!0?"true":"false"}`,o.push({type:"text",text:r}),e.first_frame_image&&o.push({type:"image_url",image_url:{url:e.first_frame_image}}),{model:t,content:o,generate_audio:e.generateAudio!==!1}}if(t.includes("kling")){const o={"16:9":"16:9","9:16":"9:16","1:1":"1:1","4:3":"4:3","3:4":"3:4"},r={model_name:t,mode:"std",prompt:e.prompt||"",aspect_ratio:o[e.size]||"16:9",duration:e.seconds||5,negative_prompt:"",cfg_scale:.5};return e.first_frame_image&&(r.image=e.first_frame_image),r}const n={model:e.model,prompt:e.prompt||""};return e.first_frame_image&&(n.first_frame_image=e.first_frame_image),e.last_frame_image&&(n.last_frame_image=e.last_frame_image),e.size&&(n.size=e.size),e.seconds&&(n.seconds=e.seconds),n}},responseAdapter:{chat:e=>{var t;return e.choices&&e.choices.length>0&&((t=e.choices[0].message)==null?void 0:t.content)||""},image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))},video:e=>{var t,n,o;return{url:((t=e.data)==null?void 0:t.url)||e.url||((o=(n=e.data)==null?void 0:n[0])==null?void 0:o.url)||"",...e}}}},openai:{label:"OpenAI",defaultBaseUrl:"https://api.chatfire.cn",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),e.image&&(t.image=e.image),t},video:e=>{const t={model:e.model,prompt:e.prompt||""};return e.first_frame_image&&(t.first_frame_image=e.first_frame_image),e.last_frame_image&&(t.last_frame_image=e.last_frame_image),e.size&&(t.size=e.size),e.seconds&&(t.seconds=e.seconds),t}},responseAdapter:{chat:e=>{var t;return e.choices&&e.choices.length>0&&((t=e.choices[0].message)==null?void 0:t.content)||""},image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))},video:e=>{var t,n,o;return{url:((t=e.data)==null?void 0:t.url)||e.url||((o=(n=e.data)==null?void 0:n[0])==null?void 0:o.url)||"",...e}}}},openrouter:{label:"OpenRouter 免费模型",defaultBaseUrl:"https://openrouter.ai/api",endpoints:{chat:"/v1/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>{const t={model:e.model,prompt:e.prompt};return e.size&&(t.size=e.size),e.n&&(t.n=e.n),e.quality&&(t.quality=e.quality),e.style&&(t.style=e.style),t}},responseAdapter:{chat:e=>{var t,n,o;return((o=(n=(t=e.choices)==null?void 0:t[0])==null?void 0:n.message)==null?void 0:o.content)||""},image:e=>{const t=e.data||e.images||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||n.image_url||"",revisedPrompt:n.revised_prompt||""}))}}},gemini:{label:"Gemini 免费额度",defaultBaseUrl:"https://generativelanguage.googleapis.com/v1beta/openai",endpoints:{chat:"/chat/completions",image:"/images/generations",video:"/videos",videoQuery:"/videos/{taskId}"},requestAdapter:{chat:e=>{const t={model:e.model,messages:e.messages};return e.temperature!==void 0&&(t.temperature=e.temperature),e.max_tokens!==void 0&&(t.max_tokens=e.max_tokens),e.stream!==void 0&&(t.stream=e.stream),t},image:e=>({model:e.model,prompt:e.prompt,size:e.size||"1024x1024"})},responseAdapter:{chat:e=>{var t,n,o;return((o=(n=(t=e.choices)==null?void 0:t[0])==null?void 0:n.message)==null?void 0:o.content)||""},image:e=>{const t=e.data||e;return(Array.isArray(t)?t:[t]).map(n=>({url:n.url||n.b64_json||"",revisedPrompt:n.revised_prompt||""}))}}},huggingface:{label:"Hugging Face 免费额度",defaultBaseUrl:"https://router.huggingface.co",endpoints:{chat:"/v1/chat/completions",image:e=>`/hf-inference/models/${String(e||"").split("/").map(encodeURIComponent).join("/")}`,video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"},requestAdapter:{chat:e=>({model:e.model,messages:e.messages,stream:e.stream}),image:e=>({inputs:e.prompt,parameters:{width:1024,height:1024,num_inference_steps:4}})},responseAdapter:{chat:e=>{var t,n,o;return((o=(n=(t=e.choices)==null?void 0:t[0])==null?void 0:n.message)==null?void 0:o.content)||""},image:e=>e instanceof Blob?[{url:URL.createObjectURL(e),revisedPrompt:""}]:Array.isArray(e)?e.map(t=>({url:t.url||t.image||"",revisedPrompt:""})):[{url:e.url||e.image||"",revisedPrompt:""}]},imageResponseType:"blob"},default:"chatfire"},Kh=()=>Object.entries(pn).filter(([e])=>e!=="default").map(([e,t])=>({key:e,label:t.label})),zi=()=>pn.default,Uh=e=>fn(e).defaultBaseUrl||"",fn=e=>pn[e]||pn[pn.default],ge={PROVIDER:"api-provider",API_KEY_STORAGE_MODE:"api-key-storage-mode",CUSTOM_CHAT_MODELS:"custom-chat-models",CUSTOM_IMAGE_MODELS:"custom-image-models",CUSTOM_VIDEO_MODELS:"custom-video-models",SELECTED_CHAT_MODEL:"selected-chat-model",SELECTED_IMAGE_MODEL:"selected-image-model",SELECTED_VIDEO_MODEL:"selected-video-model",CUSTOM_CHAT_MODELS_BY_PROVIDER:"custom-chat-models-by-provider",CUSTOM_IMAGE_MODELS_BY_PROVIDER:"custom-image-models-by-provider",CUSTOM_VIDEO_MODELS_BY_PROVIDER:"custom-video-models-by-provider",API_KEYS_BY_PROVIDER:"api-keys-by-provider",SESSION_API_KEYS_BY_PROVIDER:"session-api-keys-by-provider",BASE_URLS_BY_PROVIDER:"base-urls-by-provider"},zn=(e,t="")=>{try{return localStorage.getItem(e)||t}catch{return t}},cn=(e,t)=>{try{t?localStorage.setItem(e,t):localStorage.removeItem(e)}catch{}},Mt=e=>{try{localStorage.removeItem(e)}catch{}},Nt=(e,t=[])=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Rt=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}},qh=(e,t=[])=>{try{const n=sessionStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Ii=(e,t)=>{try{sessionStorage.setItem(e,JSON.stringify(t))}catch{}},In=e=>{try{sessionStorage.removeItem(e)}catch{}},Un=e=>e&&Object.values(e).some(Boolean),un=(e,t)=>e.provider?e.provider.includes(t):!0,Yh=cs("model",()=>{const e=D(zn(ge.PROVIDER)||zi()),t=D(zn(ge.API_KEY_STORAGE_MODE,"session")),n=E(()=>Kh()),o=E(()=>fn(e.value)),r=E(()=>o.value.label||e.value),i=d=>{pn[d]&&(e.value=d,cn(ge.PROVIDER,d))},a=()=>{e.value=zi(),Mt(ge.PROVIDER)},l=(d,w)=>{const J=o.value;return J.requestAdapter&&J.requestAdapter[d]?J.requestAdapter[d](w):w},s=(d,w)=>{const J=o.value;return J.responseAdapter&&J.responseAdapter[d]?J.responseAdapter[d](w):w},u=D(Nt(ge.CUSTOM_CHAT_MODELS,[])),c=D(Nt(ge.CUSTOM_IMAGE_MODELS,[])),v=D(Nt(ge.CUSTOM_VIDEO_MODELS,[])),g=D(Nt(ge.CUSTOM_CHAT_MODELS_BY_PROVIDER,{})),m=D(Nt(ge.CUSTOM_IMAGE_MODELS_BY_PROVIDER,{})),h=D(Nt(ge.CUSTOM_VIDEO_MODELS_BY_PROVIDER,{})),p=D(zn(ge.SELECTED_CHAT_MODEL,No)),k=D(zn(ge.SELECTED_IMAGE_MODEL,Do)),b=D(zn(ge.SELECTED_VIDEO_MODEL,Lo)),_=D(qh(ge.SESSION_API_KEYS_BY_PROVIDER,null)||Nt(ge.API_KEYS_BY_PROVIDER,{})),R=D(Nt(ge.BASE_URLS_BY_PROVIDER,{})),y=E(()=>_.value[e.value]||""),S=E(()=>R.value[e.value]||Uh(e.value)),z=(d,w)=>{_.value[d]=w},F=d=>{const w=d==="persistent"?"persistent":"session";t.value=w,cn(ge.API_KEY_STORAGE_MODE,w)},X=(d,w)=>{R.value[d]=w},U=d=>{delete _.value[d],delete R.value[d]},Y=()=>{Mt("apiKey"),Mt(ge.API_KEYS_BY_PROVIDER),In(ge.SESSION_API_KEYS_BY_PROVIDER),_.value={}},Q=E(()=>[...ir.map(d=>({...d,isCustom:!1})),...u.value.map(d=>({label:d.label||d.key,key:d.key,isCustom:!0})),...(g.value[e.value]||[]).map(d=>({label:d.label||d.key,key:d.key,isCustom:!0,provider:[e.value]}))]),H=E(()=>[...or.map(d=>({...d,isCustom:!1})),...c.value.map(d=>({label:d.label||d.key,key:d.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"}})),...(m.value[e.value]||[]).map(d=>({label:d.label||d.key,key:d.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"},provider:[e.value]}))]),O=E(()=>[...rr.map(d=>({...d,isCustom:!1})),...v.value.map(d=>({label:d.label||d.key,key:d.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5}})),...(h.value[e.value]||[]).map(d=>({label:d.label||d.key,key:d.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5},provider:[e.value]}))]),L=E(()=>Q.value.filter(d=>un(d,e.value))),M=E(()=>H.value.filter(d=>un(d,e.value))),V=E(()=>O.value.filter(d=>un(d,e.value))),T=E(()=>H.value.map(d=>({label:d.label,key:d.key}))),G=E(()=>O.value.map(d=>({label:d.label,key:d.key}))),ee=E(()=>Q.value.map(d=>({label:d.label,key:d.key}))),ae=E(()=>M.value.map(d=>({label:d.label,key:d.key}))),ue=E(()=>V.value.map(d=>({label:d.label,key:d.key}))),le=E(()=>L.value.map(d=>({label:d.label,key:d.key}))),_e=(d,w="")=>!d||u.value.some(J=>J.key===d)?!1:(u.value.push({key:d,label:w||d}),!0),j=(d,w="")=>!d||c.value.some(J=>J.key===d)?!1:(c.value.push({key:d,label:w||d}),!0),P=(d,w="")=>!d||v.value.some(J=>J.key===d)?!1:(v.value.push({key:d,label:w||d}),!0),I=d=>{const w=u.value.findIndex(J=>J.key===d);return w>-1?(u.value.splice(w,1),p.value===d&&(p.value=No),!0):!1},N=d=>{const w=c.value.findIndex(J=>J.key===d);return w>-1?(c.value.splice(w,1),k.value===d&&(k.value=Do),!0):!1},fe=d=>{const w=v.value.findIndex(J=>J.key===d);return w>-1?(v.value.splice(w,1),b.value===d&&(b.value=Lo),!0):!1},he=d=>Q.value.find(w=>w.key===d),Ae=d=>H.value.find(w=>w.key===d),Ne=d=>O.value.find(w=>w.key===d),Te=(d="")=>{var Pe;const w=((Pe=o.value.endpoints)==null?void 0:Pe.image)||"/images/generations",J=typeof w=="function"?w(d):w;return`${S.value}${J}`},pe=()=>{var w;const d=((w=o.value.endpoints)==null?void 0:w.video)||"/videos";return`${S.value}${d}`},Be=()=>{var J,Pe;const d=o.value;let w=((J=d.endpoints)==null?void 0:J.videoQuery)||((Pe=d.endpoints)==null?void 0:Pe.video)||"/videos";return`${S.value}${w}`},Me=()=>{var w,J;const d=((J=(w=o.value)==null?void 0:w.endpoints)==null?void 0:J.chat)||"/chat/completions";return`${S.value}${d}`},He=d=>{const w=[...ir.filter(ye=>un(ye,d)).map(ye=>({...ye,isCustom:!1})),...(g.value[d]||[]).map(ye=>({label:ye.label||ye.key,key:ye.key,isCustom:!0,provider:[d]}))],J=[...or.filter(ye=>un(ye,d)).map(ye=>({...ye,isCustom:!1})),...(m.value[d]||[]).map(ye=>({label:ye.label||ye.key,key:ye.key,isCustom:!0,sizes:[],defaultParams:{quality:"standard",style:"vivid"},provider:[d]}))],Pe=[...rr.filter(ye=>un(ye,d)).map(ye=>({...ye,isCustom:!1})),...(h.value[d]||[]).map(ye=>({label:ye.label||ye.key,key:ye.key,isCustom:!0,ratios:["16x9","9:16","1:1"],durs:[{label:"5 秒",key:5},{label:"10 秒",key:10}],defaultParams:{ratio:"16:9",duration:5},provider:[d]}))];return{chat:w,image:J,video:Pe}},ot=(d,w,J="")=>!d||(g.value[w]||(g.value[w]=[]),g.value[w].some(Pe=>Pe.key===d))?!1:(g.value[w].push({key:d,label:J||d}),!0),vt=(d,w,J="")=>!d||(m.value[w]||(m.value[w]=[]),m.value[w].some(Pe=>Pe.key===d))?!1:(m.value[w].push({key:d,label:J||d}),!0),tt=(d,w,J="")=>!d||(h.value[w]||(h.value[w]=[]),h.value[w].some(Pe=>Pe.key===d))?!1:(h.value[w].push({key:d,label:J||d}),!0),dt=(d,w)=>{if(!g.value[w])return!1;const J=g.value[w].findIndex(Pe=>Pe.key===d);return J>-1?(g.value[w].splice(J,1),!0):!1},Xe=(d,w)=>{if(!m.value[w])return!1;const J=m.value[w].findIndex(Pe=>Pe.key===d);return J>-1?(m.value[w].splice(J,1),!0):!1},q=(d,w)=>{if(!h.value[w])return!1;const J=h.value[w].findIndex(Pe=>Pe.key===d);return J>-1?(h.value[w].splice(J,1),!0):!1},K=()=>{u.value=[],c.value=[],v.value=[],p.value=No,k.value=Do,b.value=Lo};return ke(u,d=>Rt(ge.CUSTOM_CHAT_MODELS,d),{deep:!0}),ke(c,d=>Rt(ge.CUSTOM_IMAGE_MODELS,d),{deep:!0}),ke(v,d=>Rt(ge.CUSTOM_VIDEO_MODELS,d),{deep:!0}),ke(g,d=>Rt(ge.CUSTOM_CHAT_MODELS_BY_PROVIDER,d),{deep:!0}),ke(m,d=>Rt(ge.CUSTOM_IMAGE_MODELS_BY_PROVIDER,d),{deep:!0}),ke(h,d=>Rt(ge.CUSTOM_VIDEO_MODELS_BY_PROVIDER,d),{deep:!0}),ke(t,d=>{cn(ge.API_KEY_STORAGE_MODE,d),d==="session"?(Un(_.value)?Ii(ge.SESSION_API_KEYS_BY_PROVIDER,_.value):In(ge.SESSION_API_KEYS_BY_PROVIDER),Mt(ge.API_KEYS_BY_PROVIDER),Mt("apiKey")):(Un(_.value)?Rt(ge.API_KEYS_BY_PROVIDER,_.value):Mt(ge.API_KEYS_BY_PROVIDER),In(ge.SESSION_API_KEYS_BY_PROVIDER))}),ke(p,d=>cn(ge.SELECTED_CHAT_MODEL,d)),ke(k,d=>cn(ge.SELECTED_IMAGE_MODEL,d)),ke(b,d=>cn(ge.SELECTED_VIDEO_MODEL,d)),ke(_,d=>{t.value==="persistent"?(Un(d)?Rt(ge.API_KEYS_BY_PROVIDER,d):Mt(ge.API_KEYS_BY_PROVIDER),In(ge.SESSION_API_KEYS_BY_PROVIDER)):(Un(d)?Ii(ge.SESSION_API_KEYS_BY_PROVIDER,d):In(ge.SESSION_API_KEYS_BY_PROVIDER),Mt(ge.API_KEYS_BY_PROVIDER),Mt("apiKey"))},{deep:!0}),ke(R,d=>Rt(ge.BASE_URLS_BY_PROVIDER,d),{deep:!0}),{currentProvider:e,providerList:n,providerConfig:o,providerLabel:r,setProvider:i,clearProvider:a,adaptRequest:l,adaptResponse:s,allChatModels:Q,allImageModels:H,allVideoModels:O,availableChatModels:L,availableImageModels:M,availableVideoModels:V,imageModelOptions:ae,videoModelOptions:ue,chatModelOptions:le,allImageModelOptions:T,allVideoModelOptions:G,allChatModelOptions:ee,selectedChatModel:p,selectedImageModel:k,selectedVideoModel:b,customChatModels:u,customImageModels:c,customVideoModels:v,customChatModelsByProvider:g,customImageModelsByProvider:m,customVideoModelsByProvider:h,addCustomChatModel:_e,addCustomImageModel:j,addCustomVideoModel:P,removeCustomChatModel:I,removeCustomImageModel:N,removeCustomVideoModel:fe,addCustomChatModelByProvider:ot,addCustomImageModelByProvider:vt,addCustomVideoModelByProvider:tt,removeCustomChatModelByProvider:dt,removeCustomImageModelByProvider:Xe,removeCustomVideoModelByProvider:q,getChatModel:he,getImageModel:Ae,getVideoModel:Ne,getImageEndpoint:Te,getVideoEndpoint:pe,getVideoTaskEndpoint:Be,getChatEndpoint:Me,getModelsByProvider:He,clearCustomModels:K,currentApiKey:y,currentBaseUrl:S,apiKeyStorageMode:t,apiKeysByProvider:_,baseUrlsByProvider:R,setApiKeyByProvider:z,setApiKeyStorageMode:F,setBaseUrlByProvider:X,clearApiConfigByProvider:U,clearLegacyApiSecrets:Y}}),Gh=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},Xh={class:"free-preset-card"},Jh={class:"free-preset-head"},Zh={class:"free-preset-actions"},Qh={class:"security-card"},ev={class:"security-card-head"},tv={key:0,class:"security-result"},nv={key:0,class:"security-risk-list"},ov={key:1},rv={class:"endpoint-list"},iv={class:"endpoint-item"},av={class:"endpoint-item"},lv={class:"endpoint-item"},sv={class:"endpoint-item"},dv={class:"model-config-section"},cv={class:"model-group"},uv={class:"model-group-header"},fv={class:"model-group"},hv={class:"model-group-header"},vv={class:"model-input-row"},pv={class:"model-tags"},bv={class:"model-group"},gv={class:"model-group-header"},mv={class:"model-input-row"},yv={class:"model-tags"},wv={class:"model-group"},xv={class:"model-group-header"},Cv={class:"model-input-row"},kv={class:"model-tags"},Sv={class:"flex justify-between items-center"},Pv={class:"flex gap-2"},_v={__name:"ApiSettings",props:{show:{type:Boolean,default:!1}},emits:["update:show","saved"],setup(e,{emit:t}){const n=e,o=t,r=E(()=>!!i.currentApiKey),i=Yh(),a=i.providerList.map(P=>({label:P.label,value:P.key})),l=E(()=>{const I=fn(y.provider).endpoints||{chat:"/chat/completions",image:"/v1/images/generations",video:"/v1/videos",videoQuery:"/v1/videos/{taskId}"};return{...I,image:typeof I.image=="function"?"/hf-inference/models/{model}":I.image}}),s=E(()=>i.allChatModels),u=E(()=>i.allImageModels),c=E(()=>i.allVideoModels),v=E(()=>i.providerLabel),g=E(()=>i.getModelsByProvider(y.provider)),m=E(()=>g.value.chat.map(P=>({label:P.label,value:P.key}))),h=E(()=>g.value.image.map(P=>({label:P.label,value:P.key}))),p=E(()=>g.value.video.map(P=>({label:P.label,value:P.key}))),k=[{label:"HF 文字+图片",provider:"huggingface",chatModel:"openai/gpt-oss-20b",imageModel:"black-forest-labs/FLUX.1-schnell",keyUrl:"https://huggingface.co/settings/tokens"},{label:"OpenRouter 文字",provider:"openrouter",chatModel:"deepseek/deepseek-chat-v3-0324:free",keyUrl:"https://openrouter.ai/settings/keys"},{label:"Gemini 文字",provider:"gemini",chatModel:"gemini-3.5-flash",keyUrl:"https://aistudio.google.com/app/apikey"}],b=D(n.show),_=E({get:()=>i.apiKeyStorageMode!=="persistent",set:P=>i.setApiKeyStorageMode(P?"session":"persistent")}),R=D(null),y=$i({provider:i.currentProvider,apiKey:"",baseUrl:""}),S=D(""),z=D(""),F=D(""),X=()=>{const P=y.provider,I=fn(P);y.apiKey=i.apiKeysByProvider[P]||"",y.baseUrl=i.baseUrlsByProvider[P]||I.defaultBaseUrl||""},U=(P,I)=>{try{const N=P.getItem(I);return N?JSON.parse(N):{}}catch{return{}}},Y=()=>{const P=[],I=localStorage.getItem("apiKey"),N=U(localStorage,"api-keys-by-provider"),fe=U(localStorage,"base-urls-by-provider"),he=y.baseUrl||"";I&&P.push("检测到旧版 apiKey 明文残留，建议清理。"),Object.values(N).some(Boolean)&&P.push("检测到 API Key 被长期保存在本地，建议改为仅本次会话保存。"),Object.values({...fe,active:he}).filter(Boolean).filter(Ne=>!String(Ne).startsWith("https://")).length&&P.push("检测到非 HTTPS API 地址，可能被中间人窃取请求内容。"),R.value={risks:P}},Q=()=>{var P;i.setApiKeyStorageMode("session"),i.clearLegacyApiSecrets(),y.apiKey="",R.value={risks:[]},(P=window.$message)==null||P.success("已清理长期保存的 Key，并切换为仅本次会话保存")},H=P=>{var fe;const I=fn(P.provider);y.provider=P.provider,y.baseUrl=I.defaultBaseUrl||"",i.setProvider(P.provider),i.setBaseUrlByProvider(P.provider,y.baseUrl),i.selectedChatModel=P.chatModel,P.imageModel&&(i.selectedImageModel=P.imageModel);const N=i.getModelsByProvider(P.provider).video[0];N&&(i.selectedVideoModel=N.key),(fe=window.$message)==null||fe.success(`已配置 ${P.label} API 预设`)},O=P=>{var fe;const I=(fe=P.provider)==null?void 0:fe[0];if(!I||I===y.provider)return;const N=fn(I);y.provider=I,i.setProvider(I),!i.baseUrlsByProvider[I]&&N.defaultBaseUrl&&i.setBaseUrlByProvider(I,N.defaultBaseUrl)},L=P=>{O(P),i.selectedChatModel=P.key},M=P=>{O(P),i.selectedImageModel=P.key},V=P=>{O(P),i.selectedVideoModel=P.key};ke(()=>n.show,P=>{b.value=P,P&&(y.provider=i.currentProvider,X())}),ke(()=>y.provider,()=>{X();const{chat:P,image:I,video:N}=i.getModelsByProvider(y.provider);P.length&&!P.some(fe=>fe.key===i.selectedChatModel)&&(i.selectedChatModel=P[0].key),I.length&&!I.some(fe=>fe.key===i.selectedImageModel)&&(i.selectedImageModel=I[0].key),N.length&&!N.some(fe=>fe.key===i.selectedVideoModel)&&(i.selectedVideoModel=N[0].key)}),ke(b,P=>{o("update:show",P)});const T=()=>{S.value.trim()&&(i.addCustomChatModel(S.value.trim()),S.value="")},G=()=>{z.value.trim()&&(i.addCustomImageModel(z.value.trim()),z.value="")},ee=()=>{F.value.trim()&&(i.addCustomVideoModel(F.value.trim()),F.value="")},ae=P=>{i.removeCustomChatModel(P)},ue=P=>{i.removeCustomImageModel(P)},le=P=>{i.removeCustomVideoModel(P)},_e=()=>{y.provider&&i.setProvider(y.provider),i.setApiKeyStorageMode(_.value?"session":"persistent"),y.apiKey&&i.setApiKeyByProvider(y.provider,y.apiKey),y.baseUrl&&i.setBaseUrlByProvider(y.provider,y.baseUrl),b.value=!1,o("saved")},j=()=>{i.clearApiConfigByProvider(y.provider),i.clearLegacyApiSecrets(),i.clearCustomModels(),y.apiKey="",y.baseUrl=""};return(P,I)=>(De(),Ot(ne(us),{show:b.value,"onUpdate:show":I[11]||(I[11]=N=>b.value=N),preset:"card",title:"API 设置",style:{width:"560px"}},{footer:xe(()=>[re("div",Sv,[I[36]||(I[36]=re("span",{class:"text-xs text-[var(--text-secondary)]"},"API Key 仅用于本地请求配置",-1)),re("div",Pv,[me(ne(St),{onClick:j,tertiary:""},{default:xe(()=>[...I[33]||(I[33]=[We("清除配置",-1)])]),_:1}),me(ne(St),{onClick:I[10]||(I[10]=N=>b.value=!1)},{default:xe(()=>[...I[34]||(I[34]=[We("取消",-1)])]),_:1}),me(ne(St),{type:"primary",onClick:_e},{default:xe(()=>[...I[35]||(I[35]=[We("保存",-1)])]),_:1})])])]),default:xe(()=>[me(ne(Mh),{type:"line",animated:""},{default:xe(()=>[me(ne(Si),{name:"api",tab:"API 配置"},{default:xe(()=>[me(ne(pi),{ref:"formRef",model:y,"label-placement":"left","label-width":"80"},{default:xe(()=>[me(ne(Yt),{label:"渠道",path:"provider"},{default:xe(()=>[me(ne(Hn),{value:y.provider,"onUpdate:value":I[0]||(I[0]=N=>y.provider=N),options:ne(a),placeholder:"选择 API 渠道"},null,8,["value","options"])]),_:1}),re("div",Xh,[re("div",Jh,[I[13]||(I[13]=re("div",null,[re("strong",null,"免费模型 API 预设"),re("p",null,"自动配置免费模型渠道、Base URL 和默认模型。")],-1)),me(ne(et),{size:"small",type:"success"},{default:xe(()=>[...I[12]||(I[12]=[We("推荐",-1)])]),_:1})]),re("div",Zh,[(De(),Ge(pt,null,_n(k,N=>me(ne(St),{key:N.provider,size:"small",secondary:"",type:y.provider===N.provider?"primary":"default",onClick:fe=>H(N)},{default:xe(()=>[We(it(N.label),1)]),_:2},1032,["type","onClick"])),64))]),I[14]||(I[14]=re("p",{class:"free-preset-note"},"平台仍需要你的个人免费 API Key；本项目不会内置或保存公共密钥。",-1))]),me(ne(Yt),{label:"Base URL",path:"baseUrl"},{default:xe(()=>[me(ne(On),{value:y.baseUrl,"onUpdate:value":I[1]||(I[1]=N=>y.baseUrl=N),placeholder:"https://api.chatfire.site/v1"},null,8,["value"])]),_:1}),me(ne(Yt),{label:"API Key",path:"apiKey"},{default:xe(()=>[me(ne(On),{value:y.apiKey,"onUpdate:value":I[2]||(I[2]=N=>y.apiKey=N),type:"password","show-password-on":"click",placeholder:"请输入 API Key"},null,8,["value"])]),_:1}),me(ne(Yt),{label:"保存方式"},{default:xe(()=>[me(ne(wf),{checked:_.value,"onUpdate:checked":I[3]||(I[3]=N=>_.value=N)},{default:xe(()=>[...I[15]||(I[15]=[We(" 仅本次会话保存 Key（推荐） ",-1)])]),_:1},8,["checked"])]),_:1}),re("div",Qh,[re("div",ev,[I[17]||(I[17]=re("div",null,[re("strong",null,"API 安全检测"),re("p",null,"检查旧版明文 Key、长期保存 Key、非 HTTPS API 地址。")],-1)),me(ne(St),{size:"small",secondary:"",onClick:Y},{default:xe(()=>[...I[16]||(I[16]=[We("检测",-1)])]),_:1})]),R.value?(De(),Ge("div",tv,[me(ne(Ao),{type:R.value.risks.length?"warning":"success",title:R.value.risks.length?`发现 ${R.value.risks.length} 个风险`:"未发现明显风险"},{default:xe(()=>[R.value.risks.length?(De(),Ge("ul",nv,[(De(!0),Ge(pt,null,_n(R.value.risks,N=>(De(),Ge("li",{key:N},it(N),1))),128))])):(De(),Ge("p",ov,"当前没有发现长期保存 Key 或不安全地址。"))]),_:1},8,["type","title"]),R.value.risks.length?(De(),Ot(ne(St),{key:0,size:"small",type:"primary",class:"mt-2",onClick:Q},{default:xe(()=>[...I[18]||(I[18]=[We(" 一键修复 ",-1)])]),_:1})):Lr("",!0)])):Lr("",!0)]),me(ne(Ff),{"title-placement":"left",class:"!my-3"},{default:xe(()=>[...I[19]||(I[19]=[re("span",{class:"text-xs text-[var(--text-secondary)]"},"端点路径",-1)])]),_:1}),re("div",rv,[re("div",iv,[I[20]||(I[20]=re("span",{class:"endpoint-label"},"问答",-1)),me(ne(et),{size:"small",type:"info",class:"endpoint-tag"},{default:xe(()=>[We(it(l.value.chat),1)]),_:1})]),re("div",av,[I[21]||(I[21]=re("span",{class:"endpoint-label"},"生图",-1)),me(ne(et),{size:"small",type:"success",class:"endpoint-tag"},{default:xe(()=>[We(it(l.value.image),1)]),_:1})]),re("div",lv,[I[22]||(I[22]=re("span",{class:"endpoint-label"},"视频生成",-1)),me(ne(et),{size:"small",type:"warning",class:"endpoint-tag"},{default:xe(()=>[We(it(l.value.video),1)]),_:1})]),re("div",sv,[I[23]||(I[23]=re("span",{class:"endpoint-label"},"视频查询",-1)),me(ne(et),{size:"small",type:"warning",class:"endpoint-tag"},{default:xe(()=>[We(it(l.value.videoQuery),1)]),_:1})])]),r.value?(De(),Ot(ne(Ao),{key:1,type:"success",title:"已配置",class:"mb-4"},{default:xe(()=>[...I[25]||(I[25]=[We(" API 已就绪，可以使用 AI 功能 ",-1)])]),_:1})):(De(),Ot(ne(Ao),{key:0,type:"warning",title:"未配置",class:"mb-4"},{default:xe(()=>[...I[24]||(I[24]=[re("div",{class:"flex flex-col gap-2"},[re("p",null,"API 地址和免费模型已可一键配置；还需要填写你自己的免费 API Key。")],-1)])]),_:1}))]),_:1},8,["model"])]),_:1}),me(ne(Si),{name:"models",tab:"模型配置"},{default:xe(()=>[re("div",dv,[re("div",cv,[re("div",uv,[I[26]||(I[26]=re("span",{class:"model-group-title"},"当前默认模型",-1)),me(ne(et),{size:"tiny",type:"success"},{default:xe(()=>[We(it(v.value),1)]),_:1})]),me(ne(pi),{"label-placement":"left","label-width":"92"},{default:xe(()=>[me(ne(Yt),{label:"文字模型"},{default:xe(()=>[me(ne(Hn),{value:ne(i).selectedChatModel,"onUpdate:value":I[4]||(I[4]=N=>ne(i).selectedChatModel=N),options:m.value,placeholder:"选择文字模型",filterable:""},null,8,["value","options"])]),_:1}),me(ne(Yt),{label:"图片模型"},{default:xe(()=>[me(ne(Hn),{value:ne(i).selectedImageModel,"onUpdate:value":I[5]||(I[5]=N=>ne(i).selectedImageModel=N),options:h.value,placeholder:"选择图片模型",filterable:""},null,8,["value","options"])]),_:1}),me(ne(Yt),{label:"视频模型"},{default:xe(()=>[me(ne(Hn),{value:ne(i).selectedVideoModel,"onUpdate:value":I[6]||(I[6]=N=>ne(i).selectedVideoModel=N),options:p.value,placeholder:"选择视频模型",filterable:""},null,8,["value","options"])]),_:1})]),_:1})]),re("div",fv,[re("div",hv,[I[27]||(I[27]=re("span",{class:"model-group-title"},"问答模型",-1)),me(ne(et),{size:"tiny",type:"info"},{default:xe(()=>[We(it(s.value.length)+" 个",1)]),_:1})]),re("div",vv,[me(ne(On),{value:S.value,"onUpdate:value":I[7]||(I[7]=N=>S.value=N),placeholder:"输入模型名称，如 gpt-4o",size:"small",onKeyup:yo(T,["enter"])},null,8,["value"]),me(ne(St),{size:"small",type:"primary",onClick:T,disabled:!S.value},{default:xe(()=>[...I[28]||(I[28]=[We(" 添加 ",-1)])]),_:1},8,["disabled"])]),re("div",pv,[(De(!0),Ge(pt,null,_n(s.value,N=>(De(),Ot(ne(et),{key:N.key,size:"small",closable:N.isCustom,type:ne(i).selectedChatModel===N.key||N.isCustom?"info":"default",class:wo(["model-choice-tag",{"is-selected":ne(i).selectedChatModel===N.key}]),onClick:fe=>L(N),onClose:fe=>ae(N.key)},{default:xe(()=>[We(it(N.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])]),re("div",bv,[re("div",gv,[I[29]||(I[29]=re("span",{class:"model-group-title"},"图片模型",-1)),me(ne(et),{size:"tiny",type:"success"},{default:xe(()=>[We(it(u.value.length)+" 个",1)]),_:1})]),re("div",mv,[me(ne(On),{value:z.value,"onUpdate:value":I[8]||(I[8]=N=>z.value=N),placeholder:"输入模型名称，如 dall-e-3",size:"small",onKeyup:yo(G,["enter"])},null,8,["value"]),me(ne(St),{size:"small",type:"primary",onClick:G,disabled:!z.value},{default:xe(()=>[...I[30]||(I[30]=[We(" 添加 ",-1)])]),_:1},8,["disabled"])]),re("div",yv,[(De(!0),Ge(pt,null,_n(u.value,N=>(De(),Ot(ne(et),{key:N.key,size:"small",closable:N.isCustom,type:ne(i).selectedImageModel===N.key||N.isCustom?"success":"default",class:wo(["model-choice-tag",{"is-selected":ne(i).selectedImageModel===N.key}]),onClick:fe=>M(N),onClose:fe=>ue(N.key)},{default:xe(()=>[We(it(N.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])]),re("div",wv,[re("div",xv,[I[31]||(I[31]=re("span",{class:"model-group-title"},"视频模型",-1)),me(ne(et),{size:"tiny",type:"warning"},{default:xe(()=>[We(it(c.value.length)+" 个",1)]),_:1})]),re("div",Cv,[me(ne(On),{value:F.value,"onUpdate:value":I[9]||(I[9]=N=>F.value=N),placeholder:"输入模型名称，如 sora-2",size:"small",onKeyup:yo(ee,["enter"])},null,8,["value"]),me(ne(St),{size:"small",type:"primary",onClick:ee,disabled:!F.value},{default:xe(()=>[...I[32]||(I[32]=[We(" 添加 ",-1)])]),_:1},8,["disabled"])]),re("div",kv,[(De(!0),Ge(pt,null,_n(c.value,N=>(De(),Ot(ne(et),{key:N.key,size:"small",closable:N.isCustom,type:ne(i).selectedVideoModel===N.key||N.isCustom?"warning":"default",class:wo(["model-choice-tag",{"is-selected":ne(i).selectedVideoModel===N.key}]),onClick:fe=>V(N),onClose:fe=>le(N.key)},{default:xe(()=>[We(it(N.label),1)]),_:2},1032,["closable","type","class","onClick","onClose"]))),128))])])])]),_:1})]),_:1})]),_:1},8,["show"]))}},Uv=Gh(_v,[["__scopeId","data-v-d7830312"]]),Mv={class:"flex items-center justify-between px-4 md:px-8 py-4 border-b border-[var(--border-color)]"},Rv={class:"flex items-center gap-2"},Ov={class:"flex items-center gap-4"},qv={__name:"AppHeader",setup(e){return(t,n)=>(De(),Ge("header",Mv,[re("div",Rv,[qn(t.$slots,"left")]),re("div",Ov,[qn(t.$slots,"center"),re("button",{onClick:n[0]||(n[0]=(...o)=>ne(Nr)&&ne(Nr)(...o)),class:"p-2 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors"},[me(ne(ba),{size:20},{default:xe(()=>[ne(fs)?(De(),Ot(ne(Fh),{key:0})):(De(),Ot(ne(Ih),{key:1}))]),_:1})]),qn(t.$slots,"right")])]))}};export{Uv as A,Ri as B,Av as C,No as D,Vh as E,jv as F,Hh as G,Hv as H,or as I,Kv as J,Gh as K,Hn as N,pn as P,Ev as R,Fv as S,Bv as T,rr as V,qv as _,ba as a,Tv as b,Pa as c,$v as d,Iv as e,On as f,Wh as g,Nv as h,Vv as i,ua as j,Or as k,Mr as l,Qt as m,Ui as n,to as o,Ve as p,Dv as q,Wv as r,Lv as s,Lo as t,Yh as u,Do as v,zi as w,Kh as x,fn as y,ir as z};
