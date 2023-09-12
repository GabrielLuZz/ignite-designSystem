var tt=Object.defineProperty;var a=(r,o)=>tt(r,"name",{value:o,configurable:!0});import{w as c}from"./iframe.41c9d591.js";import"./es.number.to-fixed.a346b860.js";var rt=c.LOGLEVEL,w=c.console,A={trace:1,debug:2,info:3,warn:4,error:5,silent:10},ot=rt,E=A[ot]||A.info,P={trace:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<=A.trace&&w.trace.apply(w,[o].concat(e))},"trace"),debug:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<=A.debug&&w.debug.apply(w,[o].concat(e))},"debug"),info:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<=A.info&&w.info.apply(w,[o].concat(e))},"info"),warn:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<=A.warn&&w.warn.apply(w,[o].concat(e))},"warn"),error:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<=A.error&&w.error.apply(w,[o].concat(e))},"error"),log:a(function(o){for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];return E<A.silent&&w.log.apply(w,[o].concat(e))},"log")},et=c.window,it=a(function(o,t){return o.length===t.length&&o.every(function(e,i){return e===t[i]})},"areDepsEqual"),K=a(function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")},"invalidHooksError");function nt(){return et.STORYBOOK_HOOKS_CONTEXT||null}a(nt,"getHooksContextOrNull");function U(){var r=nt();if(r==null)throw K();return r}a(U,"getHooksContextOrThrow");function at(r,o,t){var e=U();if(e.currentPhase==="MOUNT"){t!=null&&!Array.isArray(t)&&P.warn("".concat(r," received a final argument that is not an array (instead, received ").concat(t,"). When specified, the final argument must be an array."));var i={name:r,deps:t};return e.currentHooks.push(i),o(i),i}if(e.currentPhase==="UPDATE"){var n=e.getNextHook();if(n==null)throw new Error("Rendered more hooks than during the previous render.");return n.name!==r&&P.warn("Storybook has detected a change in the order of Hooks".concat(e.currentDecoratorName?" called by ".concat(e.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),t!=null&&n.deps==null&&P.warn("".concat(r," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),t!=null&&n.deps!=null&&t.length!==n.deps.length&&P.warn("The final argument passed to ".concat(r,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(n.deps,`
Incoming: `).concat(t)),(t==null||n.deps==null||!it(t,n.deps))&&(o(n),n.deps=t),n}throw K()}a(at,"useHook");function lt(r,o,t){var e=at(r,function(n){n.memoizedState=o()},t),i=e.memoizedState;return i}a(lt,"useMemoLike");function D(r,o){var t=U(),e=lt("useEffect",function(){return{create:r}},o);t.currentEffects.includes(e)||t.currentEffects.push(e)}a(D,"useEffect");function V(){var r=c.document.documentElement,o=Math.max(r.scrollHeight,r.offsetHeight),t=Math.max(r.scrollWidth,r.offsetWidth);return{width:t,height:o}}a(V,"getDocumentWidthAndHeight");function dt(){var r=c.document.createElement("canvas");r.id="storybook-addon-measure";var o=r.getContext("2d"),t=V(),e=t.width,i=t.height;return Y(r,o,{width:e,height:i}),r.style.position="absolute",r.style.left="0",r.style.top="0",r.style.zIndex="2147483647",r.style.pointerEvents="none",c.document.body.appendChild(r),{canvas:r,context:o,width:e,height:i}}a(dt,"createCanvas");function Y(r,o,t){var e=t.width,i=t.height;r.style.width="".concat(e,"px"),r.style.height="".concat(i,"px");var n=c.window.devicePixelRatio;r.width=Math.floor(e*n),r.height=Math.floor(i*n),o.scale(n,n)}a(Y,"setCanvasWidthAndHeight");var s={};function ft(){s.canvas||(s=dt())}a(ft,"init");function j(){s.context&&s.context.clearRect(0,0,s.width,s.height)}a(j,"clear");function ht(r){j(),r(s.context)}a(ht,"draw");function ut(){Y(s.canvas,s.context,{width:0,height:0});var r=V(),o=r.width,t=r.height;Y(s.canvas,s.context,{width:o,height:t}),s.width=o,s.height=t}a(ut,"rescale");function gt(){s.canvas&&(j(),s.canvas.parentNode.removeChild(s.canvas),s={})}a(gt,"destroy");var x={margin:"#f6b26b",border:"#ffe599",padding:"#93c47d",content:"#6fa8dc",text:"#232020"},y=6;function I(r,o){var t=o.x,e=o.y,i=o.w,n=o.h,l=o.r;t=t-i/2,e=e-n/2,i<2*l&&(l=i/2),n<2*l&&(l=n/2),r.beginPath(),r.moveTo(t+l,e),r.arcTo(t+i,e,t+i,e+n,l),r.arcTo(t+i,e+n,t,e+n,l),r.arcTo(t,e+n,t,e,l),r.arcTo(t,e,t+i,e,l),r.closePath()}a(I,"roundedRect");function ct(r,o){var t=o.padding,e=o.border,i=o.width,n=o.height,l=o.top,d=o.left,f=i-e.left-e.right-t.left-t.right,h=n-t.top-t.bottom-e.top-e.bottom,u=d+e.left+t.left,g=l+e.top+t.top;return r==="top"?u+=f/2:r==="right"?(u+=f,g+=h/2):r==="bottom"?(u+=f/2,g+=h):r==="left"?g+=h/2:r==="center"&&(u+=f/2,g+=h/2),{x:u,y:g}}a(ct,"positionCoordinate");function st(r,o,t,e,i){var n=t.margin,l=t.border,d=t.padding,f=a(function(p){return 0},"shift"),h=0,u=0,g=i?1:.5,m=i?e*2:0;return r==="padding"?f=a(function(p){return d[p]*g+m},"shift"):r==="border"?f=a(function(p){return d[p]+l[p]*g+m},"shift"):r==="margin"&&(f=a(function(p){return d[p]+l[p]+n[p]*g+m},"shift")),o==="top"?u=-f("top"):o==="right"?h=f("right"):o==="bottom"?u=f("bottom"):o==="left"&&(h=-f("left")),{offsetX:h,offsetY:u}}a(st,"offset");function pt(r,o){return Math.abs(r.x-o.x)<Math.abs(r.w+o.w)/2&&Math.abs(r.y-o.y)<Math.abs(r.h+o.h)/2}a(pt,"collide");function mt(r,o,t){return r==="top"?o.y=t.y-t.h-y:r==="right"?o.x=t.x+t.w/2+y+o.w/2:r==="bottom"?o.y=t.y+t.h+y:r==="left"&&(o.x=t.x-t.w/2-y-o.w/2),{x:o.x,y:o.y}}a(mt,"overlapAdjustment");function G(r,o,t,e){var i=t.x,n=t.y,l=t.w,d=t.h;return I(r,{x:i,y:n,w:l,h:d,r:3}),r.fillStyle="".concat(x[o],"dd"),r.fill(),r.strokeStyle=x[o],r.stroke(),r.fillStyle=x.text,r.fillText(e,i,n),I(r,{x:i,y:n,w:l,h:d,r:3}),r.fillStyle="".concat(x[o],"dd"),r.fill(),r.strokeStyle=x[o],r.stroke(),r.fillStyle=x.text,r.fillText(e,i,n),{x:i,y:n,w:l,h:d}}a(G,"textWithRect");function Z(r,o){r.font="600 12px monospace",r.textBaseline="middle",r.textAlign="center";var t=r.measureText(o),e=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent,i=t.width+y*2,n=e+y*2;return{w:i,h:n}}a(Z,"configureText");function wt(r,o,t,e){var i=t.type,n=t.position,l=n===void 0?"center":n,d=t.text,f=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,h=ct(l,o),u=h.x,g=h.y,m=st(i,l,o,y+1,f),b=m.offsetX,p=m.offsetY;u+=b,g+=p;var W=Z(r,d),T=W.w,M=W.h;if(e&&pt({x:u,y:g,w:T,h:M},e)){var O=mt(l,{x:u,y:g,w:T,h:M},e);u=O.x,g=O.y}return G(r,i,{x:u,y:g,w:T,h:M},d)}a(wt,"drawLabel");function vt(r,o){var t=o.w,e=o.h,i=t*.5+y,n=e*.5+y;return{offsetX:(r.x==="left"?-1:1)*i,offsetY:(r.y==="top"?-1:1)*n}}a(vt,"floatingOffset");function bt(r,o,t){var e=t.type,i=t.text,n=o.floatingAlignment,l=o.extremities,d=l[n.x],f=l[n.y],h=Z(r,i),u=h.w,g=h.h,m=vt(n,{w:u,h:g}),b=m.offsetX,p=m.offsetY;return d+=b,f+=p,G(r,e,{x:d,y:f,w:u,h:g},i)}a(bt,"drawFloatingLabel");function L(r,o,t,e){var i=[];t.forEach(function(n,l){var d=e&&n.position==="center"?bt(r,o,n):wt(r,o,n,i[l-1],e);i[l]=d})}a(L,"drawStack");function yt(r,o,t,e){var i=t.reduce(function(n,l){return Object.prototype.hasOwnProperty.call(n,l.position)||(n[l.position]=[]),n[l.position].push(l),n},{});i.top&&L(r,o,i.top,e),i.right&&L(r,o,i.right,e),i.bottom&&L(r,o,i.bottom,e),i.left&&L(r,o,i.left,e),i.center&&L(r,o,i.center,e)}a(yt,"labelStacks");function R(r){return St(r)||xt(r)||Et(r)||At()}a(R,"_toConsumableArray");function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a(At,"_nonIterableSpread");function Et(r,o){if(!!r){if(typeof r=="string")return X(r,o);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(r,o)}}a(Et,"_unsupportedIterableToArray");function xt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}a(xt,"_iterableToArray");function St(r){if(Array.isArray(r))return X(r)}a(St,"_arrayWithoutHoles");function X(r,o){(o==null||o>r.length)&&(o=r.length);for(var t=0,e=new Array(o);t<o;t++)e[t]=r[t];return e}a(X,"_arrayLikeToArray");var C={margin:"#f6b26ba8",border:"#ffe599a8",padding:"#93c47d8c",content:"#6fa8dca8"},F=30;function v(r){return parseInt(r.replace("px",""),10)}a(v,"pxToNumber");function S(r){return Number.isInteger(r)?r:r.toFixed(2)}a(S,"round");function N(r){return r.filter(function(o){return o.text!==0&&o.text!=="0"})}a(N,"filterZeroValues");function Tt(r){var o={top:c.window.scrollY,bottom:c.window.scrollY+c.window.innerHeight,left:c.window.scrollX,right:c.window.scrollX+c.window.innerWidth},t={top:Math.abs(o.top-r.top),bottom:Math.abs(o.bottom-r.bottom),left:Math.abs(o.left-r.left),right:Math.abs(o.right-r.right)};return{x:t.left>t.right?"left":"right",y:t.top>t.bottom?"top":"bottom"}}a(Tt,"floatingAlignment");function Mt(r){var o=c.getComputedStyle(r),t=r.getBoundingClientRect(),e=t.top,i=t.left,n=t.right,l=t.bottom,d=t.width,f=t.height,h=o.marginTop,u=o.marginBottom,g=o.marginLeft,m=o.marginRight,b=o.paddingTop,p=o.paddingBottom,W=o.paddingLeft,T=o.paddingRight,M=o.borderBottomWidth,O=o.borderTopWidth,J=o.borderLeftWidth,Q=o.borderRightWidth;e=e+c.window.scrollY,i=i+c.window.scrollX,l=l+c.window.scrollY,n=n+c.window.scrollX;var H={top:v(h),bottom:v(u),left:v(g),right:v(m)},k={top:v(b),bottom:v(p),left:v(W),right:v(T)},_={top:v(O),bottom:v(M),left:v(J),right:v(Q)},z={top:e-H.top,bottom:l+H.bottom,left:i-H.left,right:n+H.right};return{margin:H,padding:k,border:_,top:e,left:i,bottom:l,right:n,width:d,height:f,extremities:z,floatingAlignment:Tt(z)}}a(Mt,"measureElement");function Ht(r,o){var t=o.margin,e=o.width,i=o.height,n=o.top,l=o.left,d=o.bottom,f=o.right,h=i+t.bottom+t.top;r.fillStyle=C.margin,r.fillRect(l,n-t.top,e,t.top),r.fillRect(f,n-t.top,t.right,h),r.fillRect(l,d,e,t.bottom),r.fillRect(l-t.left,n-t.top,t.left,h);var u=[{type:"margin",text:S(t.top),position:"top"},{type:"margin",text:S(t.right),position:"right"},{type:"margin",text:S(t.bottom),position:"bottom"},{type:"margin",text:S(t.left),position:"left"}];return N(u)}a(Ht,"drawMargin");function Lt(r,o){var t=o.padding,e=o.border,i=o.width,n=o.height,l=o.top,d=o.left,f=o.bottom,h=o.right,u=i-e.left-e.right,g=n-t.top-t.bottom-e.top-e.bottom;r.fillStyle=C.padding,r.fillRect(d+e.left,l+e.top,u,t.top),r.fillRect(h-t.right-e.right,l+t.top+e.top,t.right,g),r.fillRect(d+e.left,f-t.bottom-e.bottom,u,t.bottom),r.fillRect(d+e.left,l+t.top+e.top,t.left,g);var m=[{type:"padding",text:t.top,position:"top"},{type:"padding",text:t.right,position:"right"},{type:"padding",text:t.bottom,position:"bottom"},{type:"padding",text:t.left,position:"left"}];return N(m)}a(Lt,"drawPadding");function Wt(r,o){var t=o.border,e=o.width,i=o.height,n=o.top,l=o.left,d=o.bottom,f=o.right,h=i-t.top-t.bottom;r.fillStyle=C.border,r.fillRect(l,n,e,t.top),r.fillRect(l,d-t.bottom,e,t.bottom),r.fillRect(l,n+t.top,t.left,h),r.fillRect(f-t.right,n+t.top,t.right,h);var u=[{type:"border",text:t.top,position:"top"},{type:"border",text:t.right,position:"right"},{type:"border",text:t.bottom,position:"bottom"},{type:"border",text:t.left,position:"left"}];return N(u)}a(Wt,"drawBorder");function Ot(r,o){var t=o.padding,e=o.border,i=o.width,n=o.height,l=o.top,d=o.left,f=i-e.left-e.right-t.left-t.right,h=n-t.top-t.bottom-e.top-e.bottom;return r.fillStyle=C.content,r.fillRect(d+e.left+t.left,l+e.top+t.top,f,h),[{type:"content",position:"center",text:"".concat(S(f)," x ").concat(S(h))}]}a(Ot,"drawContent");function Pt(r){return function(o){if(r&&o){var t=Mt(r),e=Ht(o,t),i=Lt(o,t),n=Wt(o,t),l=Ot(o,t),d=t.width<=F*3||t.height<=F;yt(o,t,[].concat(R(l),R(i),R(n),R(e)),d)}}}a(Pt,"drawBoxModel");function Rt(r){ht(Pt(r))}a(Rt,"drawSelectedElement");var Bt=a(function(o,t){var e=c.document.elementFromPoint(o,t),i=a(function l(d){if(d&&d.shadowRoot){var f=d.shadowRoot.elementFromPoint(o,t);return d.isEqualNode(f)?d:f.shadowRoot?l(f):f}return d},"crawlShadows"),n=i(e);return n||e},"deepElementFromPoint"),q,B={x:0,y:0};function $(r,o){q=Bt(r,o),Rt(q)}a($,"findAndDrawElement");var Ct=a(function(o,t){var e=t.globals.measureEnabled;return D(function(){var i=a(function(l){window.requestAnimationFrame(function(){l.stopPropagation(),B.x=l.clientX,B.y=l.clientY})},"onMouseMove");return document.addEventListener("mousemove",i),function(){document.removeEventListener("mousemove",i)}},[]),D(function(){var i=a(function(d){window.requestAnimationFrame(function(){d.stopPropagation(),$(d.clientX,d.clientY)})},"onMouseOver"),n=a(function(){window.requestAnimationFrame(function(){ut()})},"onResize");return e&&(document.addEventListener("mouseover",i),ft(),window.addEventListener("resize",n),$(B.x,B.y)),function(){window.removeEventListener("resize",n),gt()}},[e]),o()},"withMeasure"),Yt="measureEnabled";function Xt(r,o,t){return o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}a(Xt,"_defineProperty");var It=[Ct],Ft=Xt({},Yt,!1);export{It as decorators,Ft as globals};
//# sourceMappingURL=preview.32638b60.js.map
