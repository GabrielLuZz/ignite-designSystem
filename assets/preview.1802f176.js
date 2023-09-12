var G=Object.defineProperty;var i=(t,e)=>G(t,"name",{value:e,configurable:!0});import{w as y,d as x,k as $}from"./iframe.41c9d591.js";var K=y.LOGLEVEL,d=y.console,f={trace:1,debug:2,info:3,warn:4,error:5,silent:10},U=K,b=f[U]||f.info,w={trace:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<=f.trace&&d.trace.apply(d,[e].concat(a))},"trace"),debug:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<=f.debug&&d.debug.apply(d,[e].concat(a))},"debug"),info:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<=f.info&&d.info.apply(d,[e].concat(a))},"info"),warn:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<=f.warn&&d.warn.apply(d,[e].concat(a))},"warn"),error:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<=f.error&&d.error.apply(d,[e].concat(a))},"error"),log:i(function(e){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return b<f.silent&&d.log.apply(d,[e].concat(a))},"log")},Y=y.window,F=i(function(e,r){return e.length===r.length&&e.every(function(a,n){return a===r[n]})},"areDepsEqual"),C=i(function(){return new Error("Storybook preview hooks can only be called inside decorators and story functions.")},"invalidHooksError");function W(){return Y.STORYBOOK_HOOKS_CONTEXT||null}i(W,"getHooksContextOrNull");function N(){var t=W();if(t==null)throw C();return t}i(N,"getHooksContextOrThrow");function X(t,e,r){var a=N();if(a.currentPhase==="MOUNT"){r!=null&&!Array.isArray(r)&&w.warn("".concat(t," received a final argument that is not an array (instead, received ").concat(r,"). When specified, the final argument must be an array."));var n={name:t,deps:r};return a.currentHooks.push(n),e(n),n}if(a.currentPhase==="UPDATE"){var o=a.getNextHook();if(o==null)throw new Error("Rendered more hooks than during the previous render.");return o.name!==t&&w.warn("Storybook has detected a change in the order of Hooks".concat(a.currentDecoratorName?" called by ".concat(a.currentDecoratorName):"",". This will lead to bugs and errors if not fixed.")),r!=null&&o.deps==null&&w.warn("".concat(t," received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.")),r!=null&&o.deps!=null&&r.length!==o.deps.length&&w.warn("The final argument passed to ".concat(t,` changed size between renders. The order and size of this array must remain constant.
Previous: `).concat(o.deps,`
Incoming: `).concat(r)),(r==null||o.deps==null||!F(r,o.deps))&&(e(o),o.deps=r),o}throw C()}i(X,"useHook");function j(t,e,r){var a=X(t,function(o){o.memoizedState=e()},r),n=a.memoizedState;return n}i(j,"useMemoLike");function M(t,e){return j("useMemo",t,e)}i(M,"useMemo");function P(t,e){var r=N(),a=j("useEffect",function(){return{create:t}},e);r.currentEffects.includes(a)||r.currentEffects.push(a)}i(P,"useEffect");var z="backgrounds",k;function q(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}i(q,"_taggedTemplateLiteral$1");var v=y.document,J=y.window,Q=i(function(){var e=J.matchMedia("(prefers-reduced-motion: reduce)");return e.matches},"isReduceMotionEnabled"),V=i(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0;if(e==="transparent")return"transparent";if(r.find(function(c){return c.value===e}))return e;var n=r.find(function(c){return c.name===a});if(n)return n.value;if(a){var o=r.map(function(c){return c.name}).join(", ");w.warn(x(k||(k=q([`
        Backgrounds Addon: could not find the default color "`,`".
        These are the available colors for your story based on your configuration:
        `,`.
      `])),a,o))}return"transparent"},"getBackgroundColorByName"),I=i(function(e){var r=Array.isArray(e)?e:[e];r.forEach(Z)},"clearStyles"),Z=i(function(e){var r=v.getElementById(e);r&&r.parentElement.removeChild(r)},"clearStyle"),_=i(function(e,r){var a=v.getElementById(e);if(a)a.innerHTML!==r&&(a.innerHTML=r);else{var n=v.createElement("style");n.setAttribute("id",e),n.innerHTML=r,v.head.appendChild(n)}},"addGridStyle"),rr=i(function(e,r,a){var n=v.getElementById(e);if(n)n.innerHTML!==r&&(n.innerHTML=r);else{var o=v.createElement("style");o.setAttribute("id",e),o.innerHTML=r;var c="addon-backgrounds-grid".concat(a?"-docs-".concat(a):""),s=v.getElementById(c);s?s.parentElement.insertBefore(o,s):v.head.appendChild(o)}},"addBackgroundStyle"),er=i(function(e,r){var a,n=r.globals,o=r.parameters,c=(a=n[z])===null||a===void 0?void 0:a.value,s=o[z],u=M(function(){return s.disable?"transparent":V(c,s.values,s.default)},[s,c]),g=M(function(){return u&&u!=="transparent"},[u]),h=r.viewMode==="docs"?"#anchor--".concat(r.id," .docs-story"):".sb-show-main",m=M(function(){var p="transition: background-color 0.3s;";return`
      `.concat(h,` {
        background: `).concat(u,` !important;
        `).concat(Q()?"":p,`
      }
    `)},[u,h]);return P(function(){var p=r.viewMode==="docs"?"addon-backgrounds-docs-".concat(r.id):"addon-backgrounds-color";if(!g){I(p);return}rr(p,m,r.viewMode==="docs"?r.id:null)},[g,m,r]),e()},"withBackground"),H;function nr(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}i(nr,"_taggedTemplateLiteral");var ar=$(function(){},x(H||(H=nr([`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `])))),tr=i(function(e,r){var a,n,o,c,s=r.globals,u=r.parameters,g=u[z].grid,h=((a=s[z])===null||a===void 0?void 0:a.grid)===!0&&g.disable!==!0,m=g.cellAmount,p=g.cellSize,S=g.opacity,B=r.viewMode==="docs",l;(n=u.grid)!==null&&n!==void 0&&n.cellSize?(l=u.grid.cellSize,ar()):l=p;var R=u.layout===void 0||u.layout==="padded",L=R?16:0,E=(o=g.offsetX)!==null&&o!==void 0?o:B?20:L,A=(c=g.offsetY)!==null&&c!==void 0?c:B?20:L,T=M(function(){var O=r.viewMode==="docs"?"#anchor--".concat(r.id," .docs-story"):".sb-show-main",D=["".concat(l*m,"px ").concat(l*m,"px"),"".concat(l*m,"px ").concat(l*m,"px"),"".concat(l,"px ").concat(l,"px"),"".concat(l,"px ").concat(l,"px")].join(", ");return`
      `.concat(O,` {
        background-size: `).concat(D,` !important;
        background-position: `).concat(E,"px ").concat(A,"px, ").concat(E,"px ").concat(A,"px, ").concat(E,"px ").concat(A,"px, ").concat(E,"px ").concat(A,`px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, `).concat(S,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(S,`) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, `).concat(S/2,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(S/2,`) 1px, transparent 1px) !important;
      }
    `)},[l]);return P(function(){var O=r.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(r.id):"addon-backgrounds-grid";if(!h){I(O);return}_(O,T)},[h,T,r]),e()},"withGrid"),cr=[tr,er],dr={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{cr as decorators,dr as parameters};
//# sourceMappingURL=preview.1802f176.js.map
