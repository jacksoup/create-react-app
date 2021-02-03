/*! For license information please see 993ad022.5267669f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var s=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),s=p("react.provider"),i=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var O=j.prototype=new h;O.constructor=j,r(O,y.prototype),O.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:g.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,n,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return s=s(c=e),e=""===r?"."+_(c,0):r,Array.isArray(s)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),k(s,t,n,"",(function(e){return e}))):null!=s&&(C(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+_(i=e[l],l);c+=k(i,t,n,u,s)}else if("function"==typeof(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=u.call(e),l=0;!(i=e.next()).done;)c+=k(i=i.value,t,n,u=r+_(i,l++),s);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function x(e,t,n){if(null==e)return e;var r=[],o=0;return k(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function E(){var e=A.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var a=r({},e.props),s=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=g.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)v.call(t,u)&&!w.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:s,ref:i,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=N,t.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return E().useCallback(e,t)},t.useContext=function(e,t){return E().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return E().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return E().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return E().useLayoutEffect(e,t)},t.useMemo=function(e,t){return E().useMemo(e,t)},t.useReducer=function(e,t,n){return E().useReducer(e,t,n)},t.useRef=function(e){return E().useRef(e)},t.useState=function(e){return E().useState(e)},t.version="17.0.1"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,c=s(e),l=1;l<arguments.length;l++){for(var u in n=Object(arguments[l]))o.call(n,u)&&(c[u]=n[u]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(c[i[p]]=n[i[p]])}}return c}},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(114),n(113)),s={id:"adding-a-sass-stylesheet",title:"Adding a Sass Stylesheet",sidebar_label:"Adding Sass Stylesheets"},i={unversionedId:"adding-a-sass-stylesheet",id:"adding-a-sass-stylesheet",isDocsHomePage:!1,title:"Adding a Sass Stylesheet",description:"Note: this feature is available with react-scripts@2.0.0 and higher.",source:"@site/../docs/adding-a-sass-stylesheet.md",slug:"/adding-a-sass-stylesheet",permalink:"/docs/adding-a-sass-stylesheet",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/adding-a-sass-stylesheet.md",version:"current",lastUpdatedBy:"Monish",lastUpdatedAt:1553460101,sidebar_label:"Adding Sass Stylesheets",sidebar:"docs",previous:{title:"Adding a CSS Modules Stylesheet",permalink:"/docs/adding-a-css-modules-stylesheet"},next:{title:"Adding a CSS Reset",permalink:"/docs/adding-css-reset"}},c=[],l={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: this feature is available with ",Object(a.b)("inlineCode",{parentName:"p"},"react-scripts@2.0.0")," and higher.")),Object(a.b)("p",null,"Generally, we recommend that you don\u2019t reuse the same CSS classes across different components. For example, instead of using a ",Object(a.b)("inlineCode",{parentName:"p"},".Button")," CSS class in ",Object(a.b)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<RejectButton>")," components, we recommend creating a ",Object(a.b)("inlineCode",{parentName:"p"},"<Button>")," component with its own ",Object(a.b)("inlineCode",{parentName:"p"},".Button")," styles, that both ",Object(a.b)("inlineCode",{parentName:"p"},"<AcceptButton>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<RejectButton>")," can render (but ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react/docs/composition-vs-inheritance.html"}),"not inherit"),")."),Object(a.b)("p",null,"Following this rule often makes CSS preprocessors less useful, as features like mixins and nesting are replaced by component composition. You can, however, integrate a CSS preprocessor if you find it valuable."),Object(a.b)("p",null,"To use Sass, first install ",Object(a.b)("inlineCode",{parentName:"p"},"node-sass"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install node-sass --save\n$ # or\n$ yarn add node-sass\n")),Object(a.b)("p",null,"Now you can rename ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.css")," to ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.scss")," and update ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.js")," to import ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.scss"),".\nThis file and any other file will be automatically compiled if imported with the extension ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," or ",Object(a.b)("inlineCode",{parentName:"p"},".sass"),"."),Object(a.b)("p",null,"To share variables between Sass files, you can use Sass imports. For example, ",Object(a.b)("inlineCode",{parentName:"p"},"src/App.scss")," and other component style files could include ",Object(a.b)("inlineCode",{parentName:"p"},'@import "./shared.scss";')," with variable definitions."),Object(a.b)("p",null,"This will allow you to do imports like"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/_colors.scss'; // assuming a styles directory under src/\n@import '~nprogress/nprogress'; // importing a css file from the nprogress node module\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," You must prefix imports from ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," with ",Object(a.b)("inlineCode",{parentName:"p"},"~")," as displayed above.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"node-sass")," also supports the ",Object(a.b)("inlineCode",{parentName:"p"},"SASS_PATH")," variable."),Object(a.b)("p",null,"To use imports relative to a path you specify, and from ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules")," without adding the ",Object(a.b)("inlineCode",{parentName:"p"},"~")," prefix, you can add a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/adding-custom-environment-variables.md#adding-development-environment-variables-in-env"}),Object(a.b)("inlineCode",{parentName:"a"},".env")," file")," at the project root with the variable ",Object(a.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),". To specify more directories you can add them to ",Object(a.b)("inlineCode",{parentName:"p"},"SASS_PATH")," separated by a ",Object(a.b)("inlineCode",{parentName:"p"},":")," like ",Object(a.b)("inlineCode",{parentName:"p"},"path1:path2:path3"),"."),Object(a.b)("p",null,"If you set ",Object(a.b)("inlineCode",{parentName:"p"},"SASS_PATH=node_modules:src"),", this will allow you to do imports like"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-scss"}),"@import 'styles/colors'; // assuming a styles directory under src/, where _colors.scss partial file exists.\n@import 'nprogress/nprogress'; // importing a css file from the nprogress node module\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," For windows operating system, use below syntax"),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"SASS_PATH=./node_modules;./src\n"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Tip:")," You can opt into using this feature with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/adding-a-css-modules-stylesheet"}),"CSS modules")," too!")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you're using Flow, override the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://flow.org/en/docs/config/options/#toc-module-file-ext-string"}),"module.file_ext")," setting in your ",Object(a.b)("inlineCode",{parentName:"p"},".flowconfig")," so it'll recognize ",Object(a.b)("inlineCode",{parentName:"p"},".sass")," or ",Object(a.b)("inlineCode",{parentName:"p"},".scss")," files. You will also need to include the ",Object(a.b)("inlineCode",{parentName:"p"},"module.file_ext")," default settings for ",Object(a.b)("inlineCode",{parentName:"p"},".js"),", ",Object(a.b)("inlineCode",{parentName:"p"},".jsx"),", ",Object(a.b)("inlineCode",{parentName:"p"},".mjs")," and ",Object(a.b)("inlineCode",{parentName:"p"},".json")," files."),Object(a.b)("pre",{parentName:"blockquote"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"[options]\nmodule.file_ext=.js\nmodule.file_ext=.jsx\nmodule.file_ext=.mjs\nmodule.file_ext=.json\nmodule.file_ext=.sass\nmodule.file_ext=.scss\n"))))}u.isMDXComponent=!0}}]);