import{h as u,hb as d,j as c,sb as h}from"./chunk-QBWOBUYP.js";var g=(()=>{let a=class a{constructor(t){this.fb=t}formClass(t){return t?{"form-validate":t.touched}:{}}BuildFromInterface(t){let e=[],o=[];return t.forEach(r=>{let i=r.name;e.push(i),r.optional||o.push(i)}),this.Build(e,o)}Build(t,e=[]){let o={};return t.forEach(r=>{o[r]=[""]}),e.forEach(r=>o[r]=["",d.required]),this.fb.group(o)}BuildFromGroup(t){return this.fb.group(t)}setObject(t,e){return Object.keys(t.controls).forEach(r=>t.controls[r].setValue(e[r])),t}getChangedData(t){let e={};return Object.keys(t.controls).forEach(o=>{let r=t.get(o);r!=null&&(r.pristine||(e[o]=r.value))}),e}validate(t){t.markAsTouched();let e=[],o=t.valid,r="";return o?{valid:o,data:this.getChangedData(t)}:(Object.keys(t.controls).forEach(i=>{let s=t.get(i)?.errors??null;s!=null&&(t.get(i)?.setErrors({invalid:!0}),Object.keys(s).forEach(l=>{r+=`${i} is ${l}; <br/>`,e.push({key:i,error:l,data:s[l]})}))}),{valid:o,errors:e,errorString:r})}};a.\u0275fac=function(e){return new(e||a)(c(h))},a.\u0275prov=u({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();export{g as a};
