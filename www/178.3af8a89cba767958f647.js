(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{HRT2:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),e=t("ZZ/e"),i=t("HNzf"),o=t("J/mm"),r=t("e8Qb"),a=t("f+iR"),c=function(n,l,t,u){return new(t||(t=Promise))(function(e,i){function o(n){try{a(u.next(n))}catch(l){i(l)}}function r(n){try{a(u.throw(n))}catch(l){i(l)}}function a(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(o,r)}a((u=u.apply(n,l||[])).next())})},s=function(n,l){var t,u,e,i,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,u&&(e=2&i[0]?u.return:i[0]?u.throw||((e=u.return)&&e.call(u),0):u.next)&&!(e=e.call(u,i[1])).done)return e;switch(u=0,e&&(i=[2&i[0],e.value]),i[0]){case 0:case 1:e=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,u=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!e||i[1]>e[0]&&i[1]<e[3])){o.label=i[1];break}if(6===i[0]&&o.label<e[1]){o.label=e[1],e=i;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(i);break}e[2]&&o.ops.pop(),o.trys.pop();continue}i=l.call(n,o)}catch(r){i=[6,r],u=0}finally{t=e=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}},b=function(){function n(n,l,t,u,e){var i=this;this.nativeStorage=n,this.appService=l,this.router=t,this.httpClient=u,this.toastController=e,this.cities=[],this.httpClient.get(o.a.citiesindex).subscribe(function(n){n&&(i.cities=n)},function(n){return c(i,void 0,void 0,function(){return s(this,function(l){switch(l.label){case 0:return console.log("+++ citiesindex 1:",n),[4,this.toastController.create({message:n,duration:2e3})];case 1:return l.sent().present(),[2]}})})})}return n.prototype.navigateToCity=function(n){Object(a.b)(n,"c"),this.router.navigate([o.b.cityPath(n)])},n.prototype.ngOnInit=function(){},n}(),p=t("AytR"),f=t("t/Na"),h=function(){function n(n){this._http=n}return n.prototype.getAllCities=function(){return this._http.get(p.a.api_domain+"/api/cities.json")},n.ngInjectableDef=u.S({factory:function(){return new n(u.W(f.c))},token:n,providedIn:"root"}),n}(),y=function(){function n(n,l,t,u,e,i){this.nativeStorage=n,this.appService=l,this.route=t,this.router=u,this.httpClient=e,this._cityService=i,this.city={},this.ngOnInit(),this.appRouter=o.b}return n.prototype.ngOnInit=function(){this.city={cityname:this.route.snapshot.paramMap.get("cityname")}},n.prototype.navigate=function(n){},n}(),d=function(){return function(){}}(),m=t("pMnS"),v=t("oBZk"),g=t("khmd"),x=t("Ko49"),w=t("SPri"),k=t("ZYCi"),C=t("Ip0R"),I=u.nb({encapsulation:2,styles:[],data:{}});function S(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,3,"ion-item",[["class","item-borderless"]],null,[[null,"click"]],function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.navigateToCity(n.context.$implicit)&&u),u},v.E,v.l)),u.ob(1,49152,null,0,e.E,[u.h,u.k],null,null),(n()(),u.pb(2,0,null,0,1,"div",[],null,null,null,null,null)),(n()(),u.Gb(3,null,["",""]))],null,function(n,l){n(l,3,0,l.context.$implicit.name)})}function j(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,9,"layout-sidemenu",[],null,null,null,g.b,g.a)),u.ob(1,114688,null,0,x.a,[r.a,w.a,e.Db,i.a,k.m,f.c,e.Kb],null,null),(n()(),u.pb(2,0,null,0,7,"ion-content",[["fullscreen",""]],null,null,null,v.y,v.f)),u.ob(3,49152,null,0,e.r,[u.h,u.k],{fullscreen:[0,"fullscreen"]},null),(n()(),u.pb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),u.Gb(-1,null,["Cities index"])),(n()(),u.pb(6,0,null,0,3,"ion-list",[],null,null,null,v.G,v.n)),u.ob(7,49152,null,0,e.L,[u.h,u.k],null,null),(n()(),u.gb(16777216,null,0,1,null,S)),u.ob(9,278528,null,0,C.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0),n(l,3,0,""),n(l,9,0,t.cities)},null)}function G(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,1,"app-cities-index",[],null,null,null,j,I)),u.ob(1,114688,null,0,b,[i.a,r.a,k.m,f.c,e.Kb],null,null)],function(n,l){n(l,1,0)},null)}var O=u.lb("app-cities-index",b,G,{},{},[]),R=u.nb({encapsulation:2,styles:[],data:{}});function E(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,8,"layout-sidemenu",[],null,null,null,g.b,g.a)),u.ob(1,114688,null,0,x.a,[r.a,w.a,e.Db,i.a,k.m,f.c,e.Kb],null,null),(n()(),u.pb(2,0,null,0,6,"ion-content",[["padding",""]],null,null,null,v.y,v.f)),u.ob(3,49152,null,0,e.r,[u.h,u.k],null,null),(n()(),u.pb(4,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),u.Gb(5,null,["City page! ",""])),(n()(),u.pb(6,0,null,0,2,"ul",[],null,null,null,null,null)),(n()(),u.pb(7,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),u.Gb(8,null,["",""]))],function(n,l){n(l,1,0)},function(n,l){var t=l.component;n(l,5,0,t.city.name),n(l,8,0,t.appRouter.cityPath(t.city))})}function A(n){return u.Ib(0,[(n()(),u.pb(0,0,null,null,1,"app-cities-show",[],null,null,null,E,R)),u.ob(1,114688,null,0,y,[i.a,r.a,k.a,k.m,f.c,h],null,null)],function(n,l){n(l,1,0)},null)}var H=u.lb("app-cities-show",y,A,{},{},[]),K=t("gIcY"),P=t("dVQv");t.d(l,"CitiesModuleNgFactory",function(){return T});var T=u.mb(d,[],function(n){return u.wb([u.xb(512,u.j,u.bb,[[8,[m.a,O,H]],[3,u.j],u.x]),u.xb(4608,C.k,C.j,[u.u,[2,C.s]]),u.xb(4608,K.h,K.h,[]),u.xb(4608,e.a,e.a,[u.z,u.g]),u.xb(4608,e.Eb,e.Eb,[e.a,u.j,u.q]),u.xb(4608,e.Hb,e.Hb,[e.a,u.j,u.q]),u.xb(1073742336,C.b,C.b,[]),u.xb(1073742336,K.g,K.g,[]),u.xb(1073742336,K.a,K.a,[]),u.xb(1073742336,e.Ab,e.Ab,[]),u.xb(1073742336,P.a,P.a,[]),u.xb(1073742336,k.p,k.p,[[2,k.v],[2,k.m]]),u.xb(1073742336,d,d,[]),u.xb(1024,k.k,function(){return[[{path:"",component:b},{path:"travel-to/:cityname",component:y}]]},[])])})}}]);