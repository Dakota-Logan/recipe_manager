(function(e){function t(t){for(var a,s,c=t[0],i=t[1],u=t[2],p=0,d=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view")],1)},o=[],s=n("8323"),c=n.n(s),i=n("edde"),u=n.n(i),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"uk-navbar"},[n("div",{staticClass:"uk-navbar-left"},[n("ul",{staticClass:"uk-navbar-nav"},[n("li",[n("a",{class:{"uk-active":"home"==e.isActive},on:{click:function(t){return e.goto("/")}}},[e._v("Home")])]),n("li",[n("a",{class:{"uk-active":"recipes"==e.isActive},on:{click:function(t){return e.goto("recipes")}}},[e._v("Recipes")])]),n("li",[n("a",{class:{"uk-active":"account"==e.isActive},on:{click:function(t){return e.goto("account")}}},[e._v("Account")])])])]),e.currRoute?n("div",{staticClass:"uk-navbar-center"},[n("form",{staticClass:"uk-form-horizontal uk-flex-inline",on:{submit:e.getRecipes}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"uk-search-input",attrs:{type:"text",placeholder:"Search Recipes"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("button",{staticClass:"uk-button"},[e._v("Sumbit")])])]):e._e(),this.isLogged?e._e():n("div",{staticClass:"uk-navbar-right"},[n("ul",{staticClass:"uk-navbar-nav"},[n("li",[n("a",{class:{"uk-active":"login"==e.isActive},on:{click:function(t){return e.goto("login")}}},[e._v("Login")])]),n("li",[n("a",{class:{"uk-active":"register"==e.isActive},on:{click:function(t){return e.goto("regitster")}}},[e._v("Register")])])])])])},p=[],d=n("2f62"),m={name:"navbar",props:["isActive"],data(){return{search:""}},methods:{goto(e){this.$router.push(e).catch(e=>e)},getRecipes(){console.log(this.$data.search)}},computed:{...Object(d["c"])(["isLogged"]),currRoute(){return!(-1!=["login","register"].indexOf(this.thisRoute))},thisRoute(){return this.$router.currentRoute.name}}},g=m,h=n("2877"),v=Object(h["a"])(g,l,p,!1,null,null,null),f=v.exports;c.a.use(u.a);var b={name:"App",components:{navbar:f}},w=b,k=(n("034f"),Object(h["a"])(w,r,o,!1,null,null,null)),_=k.exports,y=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},O=[],C={name:"home"},S=C,j=(n("ee90"),Object(h["a"])(S,x,O,!1,null,null,null)),A=j.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Hello world")])])}],R={name:"recipes"},$=R,D=Object(h["a"])($,L,E,!1,null,null,null),P=D.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:" uk-container-expand uk-responsive-height"},[n("form",{staticClass:"uk-align-center uk-form-horizontal uk-border-rounded uk-width-2-5@l uk-width-1-2@m  uk-width-1-1@s uk-flex uk-flex-column",staticStyle:{border:"2px solid black",padding:"3rem 4rem","box-shadow":"5px 5px 20px gray","background-color":"gainsboro"},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[n("h1",[e._v("Log In: ")]),n("h3",[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.email,expression:"userData.email"}],staticClass:"uk-input",attrs:{placeholder:"email",type:"text"},domProps:{value:e.userData.email},on:{input:function(t){t.target.composing||e.$set(e.userData,"email",t.target.value)}}}),n("h2",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userData.password,expression:"userData.password"}],staticClass:"uk-input",attrs:{placeholder:"password",type:"password"},domProps:{value:e.userData.password},on:{input:function(t){t.target.composing||e.$set(e.userData,"password",t.target.value)}}}),n("button",{staticClass:"uk-button-large uk-align-center",attrs:{type:"submit"}},[e._v("submit")]),n("p",{staticClass:"uk-align-center"},[e._v("Don't have an account? Create one "),n("a",{on:{click:function(e){}}},[e._v("HERE.")])])]),n("button",{staticClass:"uk-button-group",on:{click:e.checkLogin}},[e._v("Check")])])])},F=[],U={name:"login",data(){return{userData:{email:"",password:""}}},methods:{...Object(d["b"])({loginAction:"login",loginCheck:"loginCheck"}),login(){this.loginAction(this.userData)},checkLogin(){this.loginCheck()}}},M=U,T=Object(h["a"])(M,I,F,!1,null,null,null),H=T.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},z=[],J={name:"register"},q=J,B=Object(h["a"])(q,N,z,!1,null,"1ccdab56",null),G=B.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},Q=[],V={name:"search_Recipes"},W=V,X=Object(h["a"])(W,K,Q,!1,null,"5ccf3aea",null),Y=X.exports;a["a"].use(y["a"]);var Z=new y["a"]({routes:[{path:"/",name:"home",component:A},{path:"/recipes",name:"recipes",component:P},{path:"/login",name:"login",component:H},{path:"/register",name:"register",component:G},{path:"/search",name:"search_recipes",component:Y}]}),ee=n("ac63"),te=n.n(ee);a["a"].use(d["a"]);var ne=new d["a"].Store({state:{loadedRecipes:[]},mutations:{},actions:{getRecipes({commit:e,dispatch:t}){},async SOFetch({commit:e,dispatch:t},{w:n,m:a,d:r}){console.log(r);let o,s,c=r;switch(o="/"==n[0]?"http://localhost:3000"+n:"http://localhost:3000/"+n,a.toLowerCase()){case"c":s="post";break;case"r":s="get";break;case"u":s="put";break;case"d":s="delete";break;default:throw new Error("That is not a crud operation! (use lower case letters: c, r, u, or d)")}try{return await fetch(o,{credentials:"include",mode:"cors",method:s,body:c})}catch(i){return i}}},modules:{ModA:te.a}});a["a"].config.productionTip=!1,new a["a"]({router:Z,store:ne,render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,n){},ac63:function(e,t){const n={state:()=>({isUserLoggedIn:!1,account:{email:String}}),mutations:{login(e,t){e.isUserLoggedIn=!0,e.account.email=t},register(e,t){e.isUserLoggedIn=!0,e.account.email=t},logout(e){e.isUserLoggedIn=!1,e.account.email=String},deleteAccount(e){e.isUserLoggedIn=!1,e.account.email=String},clearAccount(e){}},actions:{async login({commit:e,dispatch:t},n){console.log("in login action");let a={email:n.email,password:n.password},r=await t("SOFetch",{w:"/user/login",m:"c",d:a});console.log(r)},async register({commit:e,dispatch:t},n){let a={email:n.email,password:n.password},r=await t("SOFetch",{w:"/user/register",m:"c",d:a});console.log(r)},async logout({commit:e,dispatch:t,getters:n},a){if(!n.isLogged())throw new Error;let r={email:a};await t("SOFetch",{w:"user/logout",m:"c",d:r});state.account.email=String},async getAccount({commit:e,dispatch:t,state:n}){if(!n.isUserLoggenIn)throw new Error;let a={email:n.account.email};await t("SOFetch",{w:"user/account",m:"r",d:a})},async deleteAccount({commit:e,dispatch:t},{e:n,p:a}){let r={email:n,password:a};t("SOFetch",{w:"/user/deleteAccount",m:"d",d:r}),e("deleteAccount")},async loginCheck({dispatch:e}){e("SOFetch",{w:"/user/isAuth",m:"r",d:null})}},getters:{isLogged(e){return e.isUserLoggedIn}}};e.exports=n},e2c1:function(e,t,n){},ee90:function(e,t,n){"use strict";var a=n("e2c1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.915ba5cc.js.map