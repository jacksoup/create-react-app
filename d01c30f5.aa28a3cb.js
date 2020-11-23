/*! For license information please see d01c30f5.aa28a3cb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,l(l({ref:t},u),{},{components:n})):o.a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var N=w.prototype=new v;N.constructor=w,r(N,j.prototype),N.isPureReactComponent=!0;var C={current:null},S={current:null},k=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,R=[];function U(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function $(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case i:l=!0}}if(l)return n(r,e,""===t?"."+T(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=t+T(o=e[c],c);l+=$(o,u,n,r)}else if(null===e||"object"!=typeof e?u=null:u="function"==typeof(u=h&&e[h]||e["@@iterator"])?u:null,"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=$(o=o.value,u=t+T(o,c++),n,r);else if("object"===o)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function I(e,t,n){return null==e?0:$(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),I(e,M,t=U(t,a,r,o)),L(t)}function F(){var e=C.current;if(null===e)throw Error(y(321));return e}var D={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return q(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,A,t=U(null,null,t,n)),L(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return q(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(y(143));return e}},createRef:function(){return{current:null}},Component:j,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:l,Profiler:u,StrictMode:c,Suspense:d,createElement:_,cloneElement:function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)k.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var p=0;p<s;p++)u[p]=arguments[p+2];o.children=u}return{$$typeof:a,type:e.type,key:i,ref:l,props:o,_owner:c}},createFactory:function(e){var t=_.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r}},B={default:D},H=B&&D||B;e.exports=H.default||H},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(c[s]=n[s]);if(r){l=r(n);for(var p=0;p<l.length;p++)a.call(n,l[p])&&(c[l[p]]=n[l[p]])}}return c}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(114),n(113)),i={id:"using-the-public-folder",title:"Using the Public Folder"},l={unversionedId:"using-the-public-folder",id:"using-the-public-folder",isDocsHomePage:!1,title:"Using the Public Folder",description:"Note: this feature is available with react-scripts@0.5.0 and higher.",source:"@site/../docs/using-the-public-folder.md",slug:"/using-the-public-folder",permalink:"/docs/using-the-public-folder",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/using-the-public-folder.md",version:"current",lastUpdatedBy:"Lewis Llobera",lastUpdatedAt:1581604862,sidebar:"docs",previous:{title:"Loading .graphql Files",permalink:"/docs/loading-graphql-files"},next:{title:"Code Splitting",permalink:"/docs/code-splitting"}},c=[{value:"Changing the HTML",id:"changing-the-html",children:[]},{value:"Adding Assets Outside of the Module System",id:"adding-assets-outside-of-the-module-system",children:[]},{value:"When to Use the <code>public</code> Folder",id:"when-to-use-the-public-folder",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@0.5.0")," and higher.")),Object(a.b)("h2",{id:"changing-the-html"},"Changing the HTML"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder contains the HTML file so you can tweak it, for example, to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/title-and-meta-tags"}),"set the page title"),".\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"<script>")," tag with the compiled code will be added to it automatically during the build process."),Object(a.b)("h2",{id:"adding-assets-outside-of-the-module-system"},"Adding Assets Outside of the Module System"),Object(a.b)("p",null,"You can also add other assets to the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder."),Object(a.b)("p",null,"Note that we normally encourage you to ",Object(a.b)("inlineCode",{parentName:"p"},"import")," assets in JavaScript files instead.\nFor example, see the sections on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-a-stylesheet"}),"adding a stylesheet")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-images-fonts-and-files"}),"adding images and fonts"),".\nThis mechanism provides a number of benefits:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Scripts and stylesheets get minified and bundled together to avoid extra network requests."),Object(a.b)("li",{parentName:"ul"},"Missing files cause compilation errors instead of 404 errors for your users."),Object(a.b)("li",{parentName:"ul"},"Result filenames include content hashes so you don\u2019t need to worry about browsers caching their old versions.")),Object(a.b)("p",null,"However there is an ",Object(a.b)("strong",{parentName:"p"},"escape hatch")," that you can use to add an asset outside of the module system."),Object(a.b)("p",null,"If you put a file into the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder, it will ",Object(a.b)("strong",{parentName:"p"},"not")," be processed by webpack. Instead it will be copied into the build folder untouched. To reference assets in the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder, you need to use an environment variable called ",Object(a.b)("inlineCode",{parentName:"p"},"PUBLIC_URL"),"."),Object(a.b)("p",null,"Inside ",Object(a.b)("inlineCode",{parentName:"p"},"index.html"),", you can use it like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n')),Object(a.b)("p",null,"Only files inside the ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder will be accessible by ",Object(a.b)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," prefix. If you need to use a file from ",Object(a.b)("inlineCode",{parentName:"p"},"src")," or ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),", you\u2019ll have to copy it there to explicitly specify your intention to make this file a part of the build."),Object(a.b)("p",null,"When you run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run build"),", Create React App will substitute ",Object(a.b)("inlineCode",{parentName:"p"},"%PUBLIC_URL%")," with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL."),Object(a.b)("p",null,"In JavaScript code, you can use ",Object(a.b)("inlineCode",{parentName:"p"},"process.env.PUBLIC_URL")," for similar purposes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"render() {\n  // Note: this is an escape hatch and should be used sparingly!\n  // Normally we recommend using `import` for getting asset URLs\n  // as described in \u201cAdding Images and Fonts\u201d above this section.\n  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;\n}\n")),Object(a.b)("p",null,"Keep in mind the downsides of this approach:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"None of the files in ",Object(a.b)("inlineCode",{parentName:"li"},"public")," folder get post-processed or minified."),Object(a.b)("li",{parentName:"ul"},"Missing files will not be called at compilation time, and will cause 404 errors for your users."),Object(a.b)("li",{parentName:"ul"},"Result filenames won\u2019t include content hashes so you\u2019ll need to add query arguments or rename them every time they change.")),Object(a.b)("h2",{id:"when-to-use-the-public-folder"},"When to Use the ",Object(a.b)("inlineCode",{parentName:"h2"},"public")," Folder"),Object(a.b)("p",null,"Normally we recommend importing ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-a-stylesheet"}),"stylesheets"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-images-fonts-and-files"}),"images, and fonts")," from JavaScript.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"public")," folder is useful as a workaround for a number of less common cases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You need a file with a specific name in the build output, such as ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"}),Object(a.b)("inlineCode",{parentName:"a"},"manifest.webmanifest")),"."),Object(a.b)("li",{parentName:"ul"},"You have thousands of images and need to dynamically reference their paths."),Object(a.b)("li",{parentName:"ul"},"You want to include a small script like ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.hubspot.com/pace/docs/welcome/"}),Object(a.b)("inlineCode",{parentName:"a"},"pace.js"))," outside of the bundled code."),Object(a.b)("li",{parentName:"ul"},"Some library may be incompatible with webpack and you have no other option but to include it as a ",Object(a.b)("inlineCode",{parentName:"li"},"<script>")," tag.")),Object(a.b)("p",null,"Note that if you add a ",Object(a.b)("inlineCode",{parentName:"p"},"<script>")," that declares global variables, you should read the topic ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-global-variables"}),"Using Global Variables")," in the next section which explains how to reference them."))}s.isMDXComponent=!0}}]);