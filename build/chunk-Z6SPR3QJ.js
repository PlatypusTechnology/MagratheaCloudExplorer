import{A as o,Ab as M,B as c,Fa as I,K as u,M as r,Mb as A,Ob as G,R as a,S as l,T as g,Wb as V,Y as S,bb as k,cb as _,ga as f,gb as T,ha as h,hb as m,i as x,ib as E,jb as N,m as y,n as w,nb as j,oa as C,ob as B,pb as L,sb as q,ta as s,tb as F,ua as p,ub as D}from"./chunk-UL6IPJLP.js";function H(e,i){e&1&&(a(0,"span",14),f(1),s(2,"transloco"),l()),e&2&&(o(),h(p(2,1,"errors.email-required")))}function R(e,i){e&1&&(a(0,"span",14),f(1),s(2,"transloco"),l()),e&2&&(o(),h(p(2,1,"errors.email-invalid")))}function J(e,i){e&1&&(a(0,"span",14),f(1),s(2,"transloco"),l()),e&2&&(o(),h(p(2,1,"errors.password-required")))}function K(e,i){e&1&&(a(0,"span"),f(1),s(2,"transloco"),l()),e&2&&(o(),h(p(2,1,"login.sign-in")))}function O(e,i){e&1&&g(0,"app-loading",15)}var v=(()=>{let i=class i{constructor(d,n,t,b,z){this.nav=n,this.translate=t,this.Toaster=b,this.AuthService=z,this.loading=!1,this.form=d.group({email:["",m.compose([m.required])],password:["",m.compose([m.required,m.minLength(6)])]}),this.email=this.form.controls.email,this.password=this.form.controls.password}onSubmit(d){this.form.valid&&(this.loading=!0,this.AuthService.login(this.email.value,this.password.value).then(n=>{n.success?(this.Toaster.success(this.translate.translate("login.success")),this.nav.goHome()):this.Toaster.warning(this.translate.translate("errors.login-error"))}).catch(n=>{let t=n.message||this.translate.translate("errors.unknown-error");this.Toaster.error(t),console.error("error catch: ",n)}).finally(()=>this.loading=!1))}};i.\u0275fac=function(n){return new(n||i)(c(q),c(_),c(F),c(A),c(M))},i.\u0275cmp=y({type:i,selectors:[["login-form"]],standalone:!0,features:[C],decls:20,vars:15,consts:[[1,"login-container"],[1,"col-xl-4","col-md-6","col-10","mx-auto"],[1,"card"],[1,"card-body","text-center"],[1,"card-title"],["src","./assets/images/logo.png"],[1,"text-left",3,"ngSubmit","formGroup"],[1,"form-group"],["type","text",1,"form-control","checking-field",3,"formControl","placeholder"],["class","help-block text-danger",4,"ngIf"],["type","password",1,"form-control","checking-field",3,"formControl","placeholder"],["type","submit",1,"btn","btn-main","btn-block","center",3,"disabled"],[4,"ngIf"],["extraClass","small white ml-4",4,"ngIf"],[1,"help-block","text-danger"],["extraClass","small white ml-4"]],template:function(n,t){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),g(5,"img",5),l(),a(6,"form",6),S("ngSubmit",function(){return t.onSubmit(t.form.value)}),a(7,"div",7),g(8,"input",8),s(9,"transloco"),u(10,H,3,3,"span",9)(11,R,3,3,"span",9),l(),a(12,"div",7),g(13,"input",10),s(14,"transloco"),u(15,J,3,3,"span",9),l(),a(16,"div",7)(17,"button",11),u(18,K,3,3,"span",12)(19,O,1,0,"app-loading",13),l()()()()()()()),n&2&&(o(6),r("formGroup",t.form),o(2),r("formControl",t.email)("placeholder",p(9,11,"login.email")),o(2),r("ngIf",t.form.get("email").touched&&t.form.get("email").hasError("required")),o(),r("ngIf",t.form.get("email").touched&&t.form.get("email").hasError("invalidEmail")),o(2),r("formControl",t.password)("placeholder",p(14,13,"login.password")),o(2),r("ngIf",t.form.get("password").touched&&t.form.get("password").hasError("required")),o(2),r("disabled",!t.form.valid),o(),r("ngIf",!t.loading),o(),r("ngIf",t.loading))},dependencies:[V,I,j,T,E,N,B,L,G,D],styles:[`h2 img{width:200px}.login-container{display:flex;align-items:center;height:100%;width:100%;position:absolute}.login-container .card{padding:15px}.login-container .card .btn-link{padding:0}.login-container .card .btn-link.forgot{font-size:14px}.login-container .card .btn-link:hover{color:#000}.auth-sep{margin-top:32px;margin-bottom:24px;line-height:20px;font-size:15px;text-align:center;display:block;position:relative}.auth-sep>span{display:table-cell;width:30%;white-space:nowrap;padding:0 14px;color:#555}.auth-sep>span>span{margin-top:-11px;display:block;font-weight:300}.auth-sep:before,.auth-sep:after{border-top:solid 1px #ccc;content:"";height:1px;width:35%;display:table-cell}.login-help{margin:0;padding:0}.login-help li{list-style:none;display:inline-block;margin-left:10px}.login-help li:first-child{margin-left:0}.login-help li i{cursor:pointer;transition:all .1s ease;color:#fff;padding:9px 9px 6px;font-size:12px;background-color:#000}.login-help li i.socicon-facebook{background-color:#3b5998}.login-help li i.socicon-twitter{background-color:#55acee}.login-help li i.socicon-google{background-color:#dd4b39}.login-help li i:hover{opacity:.9}
`],encapsulation:2});let e=i;return e})();var Q=[{path:"",component:v,pathMatch:"full"}],ae=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=w({type:i}),i.\u0275inj=x({imports:[v,k.forChild(Q)]});let e=i;return e})();export{ae as LoginModule,Q as routes};
