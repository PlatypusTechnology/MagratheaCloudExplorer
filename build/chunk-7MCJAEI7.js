import{Ia as u,e as o,h as p,j as s,t as l,tb as c,zb as h}from"./chunk-UL6IPJLP.js";var m=(()=>{let r=class r extends h{constructor(t){super(t)}getUsers(){let t=this.url("/users");return this.get(t).pipe(this.defaultMap)}getById(t){let e=this.url("/user/:id").params({id:t});return this.get(e).pipe(this.defaultMap)}update(t){let e=t.id,a=this.url("/user/:id").params({id:e});return this.put(a,t)}insert(t){let e=this.url("/users");return this.post(e,t)}getMe(){let t=this.url("/me");return this.get(t).pipe(this.defaultMap)}saveMe(t){let e=this.url("/me");return this.put(e,t).pipe(this.defaultMap)}changePassword(t){let e=this.url("/change-password");return this.put(e,{password:t}).pipe(this.defaultMap)}};r.\u0275fac=function(e){return new(e||r)(s(l))},r.\u0275prov=p({token:r,factory:r.\u0275fac});let i=r;return i})();var y=(()=>{let r=class r{constructor(t,e,a){this.transloco=t,this.datePipe=e,this.api=a}getObjFromData(t){let e=t.loginUser,a=this.transloco.translate("date-format");return{id:t.id,active:t.active,name:t.name,email:e.email,phone_number:t.phone_number,role:t.role,roleName:t.roleName,language:t.language,updated_at:t.updated_at,last_login:this.datePipe.transform(e.last_login,a)}}newUser(){return this.getObjFromData({loginUser:{}})}GetUsers(){return this.api.getUsers().pipe(o(t=>t.map(e=>this.getObjFromData(e))))}GetUserById(t){return this.api.getById(t).pipe(o(e=>this.getObjFromData(e)))}Save(t){return new Promise((e,a)=>{t.id!=null?this.api.update(t).subscribe(n=>e(n.success)):this.api.insert(t).subscribe(n=>{n.success?e(!0):a(n)})})}getMyAccount(){return this.api.getMe().pipe(o(t=>this.getObjFromData(t)))}saveMyData(t){return this.api.saveMe(t)}changePassword(t){return this.api.changePassword(t)}};r.\u0275fac=function(e){return new(e||r)(s(c),s(u),s(m))},r.\u0275prov=p({token:r,factory:r.\u0275fac});let i=r;return i})();export{m as a,y as b};