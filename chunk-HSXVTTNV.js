import{A as bt,C as ke,K as it,P as mt,Q as Pe,R as Kt,T as Ne,U as w,W as R,Y as D,Z as Oe,a as Xt,ca as Te,i as Fe,j as Se,k as Ae,l as O,m as Ie}from"./chunk-JFNJHXSR.js";import{$a as b,Ab as St,Bb as Ve,Db as xe,Eb as et,Fb as N,Gb as nt,Hb as ot,Ib as ht,Kb as ft,Lb as gt,Mb as Qt,N as Et,Na as y,Nb as Ee,P as K,Pb as At,Q as F,Qb as Z,R as x,Sa as Mt,Sb as C,T as q,Ta as u,Tb as It,Ub as kt,V as p,Xb as g,Za as A,Zb as Yt,_a as E,a as M,aa as J,ab as d,b as P,bb as Q,ca as _e,da as Ce,db as T,gc as H,hb as De,hc as L,ia as dt,j as be,lb as S,lc as B,ma as ut,mc as Zt,n as me,na as c,pa as tt,s as ye,sb as v,ta as we,tb as ct,tc as h,ub as pt,uc as Me,vb as Y,wb as $t,xb as Ut,y as ve,yb as qt,zb as Ft}from"./chunk-CDDVTM4M.js";var We=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(u(Mt),u(tt))};static \u0275dir=b({type:e})}return e})(),$e=(()=>{class e extends We{static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275dir=b({type:e,features:[d]})}return e})(),Gt=new q("");var Fn={provide:Gt,useExisting:K(()=>Ue),multi:!0};function Sn(){let e=Xt()?Xt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var An=new q(""),Ue=(()=>{class e extends We{_compositionMode;_composing=!1;constructor(t,n,i){super(t,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!Sn())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(u(Mt),u(tt),u(An,8))};static \u0275dir=b({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&et("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[g([Fn]),d]})}return e})();function ie(e){return e==null||re(e)===0}function re(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var se=new q(""),ae=new q(""),In=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Be=class{static min(o){return kn(o)}static max(o){return Pn(o)}static required(o){return Nn(o)}static requiredTrue(o){return On(o)}static email(o){return Tn(o)}static minLength(o){return Bn(o)}static maxLength(o){return Rn(o)}static pattern(o){return jn(o)}static nullValidator(o){return qe()}static compose(o){return Je(o)}static composeAsync(o){return en(o)}};function kn(e){return o=>{if(o.value==null||e==null)return null;let t=parseFloat(o.value);return!isNaN(t)&&t<e?{min:{min:e,actual:o.value}}:null}}function Pn(e){return o=>{if(o.value==null||e==null)return null;let t=parseFloat(o.value);return!isNaN(t)&&t>e?{max:{max:e,actual:o.value}}:null}}function Nn(e){return ie(e.value)?{required:!0}:null}function On(e){return e.value===!0?null:{required:!0}}function Tn(e){return ie(e.value)||In.test(e.value)?null:{email:!0}}function Bn(e){return o=>{let t=o.value?.length??re(o.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function Rn(e){return o=>{let t=o.value?.length??re(o.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function jn(e){if(!e)return qe;let o,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),o=new RegExp(t)):(t=e.toString(),o=e),n=>{if(ie(n.value))return null;let i=n.value;return o.test(i)?null:{pattern:{requiredPattern:t,actualValue:i}}}}function qe(e){return null}function Qe(e){return e!=null}function Ye(e){return De(e)?me(e):e}function Ze(e){let o={};return e.forEach(t=>{o=t!=null?M(M({},o),t):o}),Object.keys(o).length===0?null:o}function Xe(e,o){return o.map(t=>t(e))}function Hn(e){return!e.validate}function Ke(e){return e.map(o=>Hn(o)?o:t=>o.validate(t))}function Je(e){if(!e)return null;let o=e.filter(Qe);return o.length==0?null:function(t){return Ze(Xe(t,o))}}function tn(e){return e!=null?Je(Ke(e)):null}function en(e){if(!e)return null;let o=e.filter(Qe);return o.length==0?null:function(t){let n=Xe(t,o).map(Ye);return ve(n).pipe(ye(Ze))}}function nn(e){return e!=null?en(Ke(e)):null}function Re(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function on(e){return e._rawValidators}function rn(e){return e._rawAsyncValidators}function Jt(e){return e?Array.isArray(e)?e:[e]:[]}function Ot(e,o){return Array.isArray(e)?e.includes(o):e===o}function je(e,o){let t=Jt(o);return Jt(e).forEach(i=>{Ot(t,i)||t.push(i)}),t}function He(e,o){return Jt(o).filter(t=>!Ot(e,t))}var Tt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=tn(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=nn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},at=class extends Tt{name;get formDirective(){return null}get path(){return null}},z=class extends Tt{_parent=null;name=null;valueAccessor=null},Bt=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ln={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},li=P(M({},Ln),{"[class.ng-submitted]":"isSubmitted"}),di=(()=>{class e extends Bt{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(u(z,2))};static \u0275dir=b({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Z("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[d]})}return e})(),ui=(()=>{class e extends Bt{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(u(at,10))};static \u0275dir=b({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,i){n&2&&Z("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[d]})}return e})();var yt="VALID",Pt="INVALID",rt="PENDING",vt="DISABLED",G=class{},Rt=class extends G{value;source;constructor(o,t){super(),this.value=o,this.source=t}},_t=class extends G{pristine;source;constructor(o,t){super(),this.pristine=o,this.source=t}},Ct=class extends G{touched;source;constructor(o,t){super(),this.touched=o,this.source=t}},st=class extends G{status;source;constructor(o,t){super(),this.status=o,this.source=t}},te=class extends G{source;constructor(o){super(),this.source=o}},wt=class extends G{source;constructor(o){super(),this.source=o}};function le(e){return(Wt(e)?e.validators:e)||null}function zn(e){return Array.isArray(e)?tn(e):e||null}function de(e,o){return(Wt(o)?o.asyncValidators:e)||null}function Gn(e){return Array.isArray(e)?nn(e):e||null}function Wt(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function sn(e,o,t){let n=e.controls;if(!(o?Object.keys(n):n).length)throw new Et(1e3,"");if(!n[t])throw new Et(1001,"")}function an(e,o,t){e._forEachChild((n,i)=>{if(t[i]===void 0)throw new Et(1002,"")})}var lt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,t){this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return H(this.statusReactive)}set status(o){H(()=>this.statusReactive.set(o))}_status=L(()=>this.statusReactive());statusReactive=dt(void 0);get valid(){return this.status===yt}get invalid(){return this.status===Pt}get pending(){return this.status==rt}get disabled(){return this.status===vt}get enabled(){return this.status!==vt}errors;get pristine(){return H(this.pristineReactive)}set pristine(o){H(()=>this.pristineReactive.set(o))}_pristine=L(()=>this.pristineReactive());pristineReactive=dt(!0);get dirty(){return!this.pristine}get touched(){return H(this.touchedReactive)}set touched(o){H(()=>this.touchedReactive.set(o))}_touched=L(()=>this.touchedReactive());touchedReactive=dt(!1);get untouched(){return!this.touched}_events=new be;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(je(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(je(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(He(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(He(o,this._rawAsyncValidators))}hasValidator(o){return Ot(this._rawValidators,o)}hasAsyncValidator(o){return Ot(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(P(M({},o),{sourceControl:n})),t&&o.emitEvent!==!1&&this._events.next(new Ct(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,n),t&&o.emitEvent!==!1&&this._events.next(new Ct(!1,n))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(P(M({},o),{sourceControl:n})),t&&o.emitEvent!==!1&&this._events.next(new _t(!1,n))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,n),t&&o.emitEvent!==!1&&this._events.next(new _t(!0,n))}markAsPending(o={}){this.status=rt;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new st(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(P(M({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=vt,this.errors=null,this._forEachChild(i=>{i.disable(P(M({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Rt(this.value,n)),this._events.next(new st(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(P(M({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=yt,this._forEachChild(n=>{n.enable(P(M({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(P(M({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,t){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===yt||this.status===rt)&&this._runAsyncValidator(n,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Rt(this.value,t)),this._events.next(new st(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(P(M({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?vt:yt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=rt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:o!==!1};let n=Ye(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,i)=>n&&n._find(i),this)}getError(o,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new st(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,n)}_initObservables(){this.valueChanges=new T,this.statusChanges=new T}_calculateStatus(){return this._allControlsDisabled()?vt:this.errors?Pt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(rt)?rt:this._anyControlsHaveStatus(Pt)?Pt:yt}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),i&&this._events.next(new _t(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ct(this.touched,t)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){Wt(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let t=this._parent&&this._parent.dirty;return!o&&!!t&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=zn(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=Gn(this._rawAsyncValidators)}},jt=class extends lt{constructor(o,t,n){super(le(t),de(n,t)),this.controls=o,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,t){return this.controls[o]?this.controls[o]:(this.controls[o]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(o,t,n={}){this.registerControl(o,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(o,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(o,t,n={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],t&&this.registerControl(o,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,t={}){an(this,!0,o),Object.keys(o).forEach(n=>{sn(this,!0,n),this.controls[n].setValue(o[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(o,t={}){o!=null&&(Object.keys(o).forEach(n=>{let i=this.controls[n];i&&i.patchValue(o[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(o={},t={}){this._forEachChild((n,i)=>{n.reset(o?o[i]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new wt(this))}getRawValue(){return this._reduceChildren({},(o,t,n)=>(o[n]=t.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&o(n,t)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&o(n))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(t,n,i)=>((n.enabled||this.disabled)&&(t[i]=n.value),t))}_reduceChildren(o,t){let n=o;return this._forEachChild((i,r)=>{n=t(n,i,r)}),n}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var ee=class extends jt{};var Dt=new q("",{providedIn:"root",factory:()=>Vt}),Vt="always";function Wn(e,o){return[...o.path,e]}function ne(e,o,t=Vt){ue(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),Un(e,o),Qn(e,o),qn(e,o),$n(e,o)}function Ht(e,o,t=!0){let n=()=>{};o.valueAccessor&&(o.valueAccessor.registerOnChange(n),o.valueAccessor.registerOnTouched(n)),zt(e,o),e&&(o._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function Lt(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function $n(e,o){if(o.valueAccessor.setDisabledState){let t=n=>{o.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function ue(e,o){let t=on(e);o.validator!==null?e.setValidators(Re(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let n=rn(e);o.asyncValidator!==null?e.setAsyncValidators(Re(n,o.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let i=()=>e.updateValueAndValidity();Lt(o._rawValidators,i),Lt(o._rawAsyncValidators,i)}function zt(e,o){let t=!1;if(e!==null){if(o.validator!==null){let i=on(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.validator);r.length!==i.length&&(t=!0,e.setValidators(r))}}if(o.asyncValidator!==null){let i=rn(e);if(Array.isArray(i)&&i.length>0){let r=i.filter(s=>s!==o.asyncValidator);r.length!==i.length&&(t=!0,e.setAsyncValidators(r))}}}let n=()=>{};return Lt(o._rawValidators,n),Lt(o._rawAsyncValidators,n),t}function Un(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ln(e,o)})}function qn(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ln(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function ln(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Qn(e,o){let t=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Yn(e,o){e==null,ue(e,o)}function Zn(e,o){return zt(e,o)}function dn(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function Xn(e){return Object.getPrototypeOf(e.constructor)===$e}function Kn(e,o){e._syncPendingControls(),o.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function un(e,o){if(!o)return null;Array.isArray(o);let t,n,i;return o.forEach(r=>{r.constructor===Ue?t=r:Xn(r)?n=r:i=r}),i||n||t||null}function Jn(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function Le(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function ze(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var Nt=class extends lt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,t,n){super(le(t),de(n,t)),this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wt(t)&&(t.nonNullable||t.initialValueIsDefault)&&(ze(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new wt(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Le(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Le(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){ze(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var to=e=>e instanceof Nt;var pi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=b({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var eo={provide:Gt,useExisting:K(()=>oo),multi:!0};var no=(()=>{class e{_accessors=[];add(t,n){this._accessors.push([t,n])}remove(t){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===t){this._accessors.splice(n,1);return}}select(t){this._accessors.forEach(n=>{this._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)})}_isSameGroup(t,n){return t[0].control?t[0]._parent===n._control._parent&&t[1].name===n.name:!1}static \u0275fac=function(n){return new(n||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),oo=(()=>{class e extends $e{_registry;_injector;_state;_control;_fn;setDisabledStateFired=!1;onChange=()=>{};name;formControlName;value;callSetDisabledState=p(Dt,{optional:!0})??Vt;constructor(t,n,i,r){super(t,n),this._registry=i,this._injector=r}ngOnInit(){this._control=this._injector.get(z),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static \u0275fac=function(n){return new(n||e)(u(Mt),u(tt),u(no),u(_e))};static \u0275dir=b({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,i){n&1&&et("change",function(){return i.onChange()})("blur",function(){return i.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},standalone:!1,features:[g([eo]),d]})}return e})();var ce=new q(""),io={provide:z,useExisting:K(()=>ro)},ro=(()=>{class e extends z{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(t){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,i,r,s){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=s,this._setValidators(t),this._setAsyncValidators(n),this.valueAccessor=un(this,i)}ngOnChanges(t){if(this._isControlChanged(t)){let n=t.form.previousValue;n&&Ht(n,this,!1),ne(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}dn(t,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Ht(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_isControlChanged(t){return t.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||e)(u(se,10),u(ae,10),u(Gt,10),u(ce,8),u(Dt,8))};static \u0275dir=b({type:e,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[g([io]),d,ut]})}return e})(),so={provide:at,useExisting:K(()=>ao)},ao=(()=>{class e extends at{callSetDisabledState;get submitted(){return H(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=L(()=>this._submittedReactive());_submittedReactive=dt(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new T;constructor(t,n,i){super(),this.callSetDisabledState=i,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(zt(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return ne(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ht(t.control||null,t,!1),Jn(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),Kn(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new te(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(!1)}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,i=this.form.get(t.path);n!==i&&(Ht(n||null,t),to(i)&&(ne(i,t,this.callSetDisabledState),t.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Yn(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Zn(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ue(this.form,this),this._oldForm&&zt(this._oldForm,this)}static \u0275fac=function(n){return new(n||e)(u(se,10),u(ae,10),u(Dt,8))};static \u0275dir=b({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,i){n&1&&et("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[g([so]),d,ut]})}return e})();var lo={provide:z,useExisting:K(()=>uo)},uo=(()=>{class e extends z{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new T;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,i,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=un(this,r)}ngOnChanges(t){this._added||this._setUpControl(),dn(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Wn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||e)(u(at,13),u(se,10),u(ae,10),u(Gt,10),u(ce,8))};static \u0275dir=b({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[g([lo]),d,ut]})}return e})();var cn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({})}return e})(),oe=class extends lt{constructor(o,t,n){super(le(t),de(n,t)),this.controls=o,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(o){return this.controls[this._adjustIndex(o)]}push(o,t={}){Array.isArray(o)?o.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(o),this._registerControl(o)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(o,t,n={}){this.controls.splice(o,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(o,t={}){let n=this._adjustIndex(o);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(o,t,n={}){let i=this._adjustIndex(o);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),t&&(this.controls.splice(i,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(o,t={}){an(this,!1,o),o.forEach((n,i)=>{sn(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(o,t={}){o!=null&&(o.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(o=[],t={}){this._forEachChild((n,i)=>{n.reset(o[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new wt(this))}getRawValue(){return this.controls.map(o=>o.getRawValue())}clear(o={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:o.emitEvent}))}_adjustIndex(o){return o<0?o+this.length:o}_syncPendingControls(){let o=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){this.controls.forEach((t,n)=>{o(t,n)})}_updateValue(){this.value=this.controls.filter(o=>o.enabled||this.disabled).map(o=>o.value)}_anyControls(o){return this.controls.some(t=>t.enabled&&o(t))}_setUpControls(){this._forEachChild(o=>this._registerControl(o))}_allControlsDisabled(){for(let o of this.controls)if(o.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(o){o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)}_find(o){return this.at(o)??null}};function Ge(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var hi=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,n=null){let i=this._reduceControls(t),r={};return Ge(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new jt(i,r)}record(t,n=null){let i=this._reduceControls(t);return new ee(i,n)}control(t,n,i){let r={};return this.useNonNullable?(Ge(n)?r=n:(r.validators=n,r.asyncValidators=i),new Nt(t,P(M({},r),{nonNullable:!0}))):new Nt(t,n,i)}array(t,n,i){let r=t.map(s=>this._createControl(s));return new oe(r,n,i)}_reduceControls(t){let n={};return Object.keys(t).forEach(i=>{n[i]=this._createControl(t[i])}),n}_createControl(t){if(t instanceof Nt)return t;if(t instanceof lt)return t;if(Array.isArray(t)){let n=t[0],i=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(n,i,r)}else return this.control(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var fi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Dt,useValue:t.callSetDisabledState??Vt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[cn]})}return e})(),gi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:ce,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Dt,useValue:t.callSetDisabledState??Vt}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[cn]})}return e})();var pe=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)t.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)t.className+=" "+i[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==t)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(t,n){let i=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==t)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,i="self"){i!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,i="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),i==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,i=!0){let r=U=>{if(U)return getComputedStyle(U).getPropertyValue("position")==="relative"?U:r(U.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,l=n.getBoundingClientRect(),V=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),m=this.getViewport(),_=r(t)?.getBoundingClientRect()||{top:-1*V,left:-1*f},k,j,xt="top";l.top+a+s.height>m.height?(k=l.top-_.top-s.height,xt="bottom",l.top+k<0&&(k=-1*l.top)):(k=a+l.top-_.top,xt="top");let ge=l.left+s.width-m.width,Mn=l.left-_.left;if(s.width>m.width?j=(l.left-_.left)*-1:ge>0?j=Mn-ge:j=l.left-_.left,t.style.top=k+"px",t.style.left=j+"px",t.style.transformOrigin=xt,i){let U=ke(/-anchor-gutter$/)?.value;t.style.marginTop=xt==="bottom"?`calc(${U??"2px"} * -1)`:U??""}}static absolutePosition(t,n,i=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=n.offsetHeight,V=n.offsetWidth,f=n.getBoundingClientRect(),m=this.getWindowScrollTop(),I=this.getWindowScrollLeft(),_=this.getViewport(),k,j;f.top+l+s>_.height?(k=f.top+m-s,t.style.transformOrigin="bottom",k<0&&(k=m)):(k=l+f.top+m,t.style.transformOrigin="top"),f.left+a>_.width?j=Math.max(0,f.left+I+V-a):j=f.left+I,t.style.top=k+"px",t.style.left=j+"px",i&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let i=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let V=l.split(",");for(let f of V){let m=this.findSingle(a,f);m&&s(m)&&n.push(m)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let i=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),f=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,m=t.scrollTop,I=t.clientHeight,_=this.getOuterHeight(n);f<0?t.scrollTop=m+f:f+_>I&&(t.scrollTop=m+f-I+_)}static fadeIn(t,n){t.style.opacity=0;let i=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,t.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,n){var i=1,r=50,s=n,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),t.style.opacity=i},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let i=t.offsetWidth;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(t,n){let i=t.offsetHeight;if(n){let r=getComputedStyle(t);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(t){let n=t.offsetHeight,i=getComputedStyle(t);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,i=getComputedStyle(t);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let t=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||i.clientWidth||r.clientWidth,a=t.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let i=t.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var i=t.indexOf("Trident/");if(i>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,i){t[n].apply(t,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let i=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let i=this.findSingle(t,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(t,n=""){let i=this.getFocusableElements(t,n);return i.length>0?i[0]:null}static getLastFocusableElement(t,n){let i=this.getFocusableElements(t,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(t,n=!1){let i=e.getFocusableElements(t),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof t;if(i==="string")return document.querySelector(t);if(i==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let i=t.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...i){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(t,n="",i){this.isElement(t)&&i!==null&&i!==void 0&&t.setAttribute(n,i)}static setAttributes(t,n={}){if(this.isElement(t)){let i=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,V)=>{if(V!=null){let f=typeof V;if(f==="string"||f==="number")l.push(V);else if(f==="object"){let m=Array.isArray(V)?i(r,V):Object.entries(V).map(([I,_])=>r==="style"&&(_||_===0)?`${I.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${_}`:_?I:void 0);l=m.length?l.concat(m.filter(I=>!!I)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var pn=class{element;listener;scrollableParents;constructor(o,t=()=>{}){this.element=o,this.listener=t}bindScrollListener(){this.scrollableParents=pe.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var hn=(()=>{class e extends D{autofocus=!1;focused=!1;platformId=p(we);document=p(Ce);host=p(tt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Ie(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=pe.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275dir=b({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[d]})}return e})();var fn=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var co=`
    ${fn}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,po={root:({instance:e})=>["p-badge p-component",{"p-badge-circle":Pe(e.value())&&String(e.value()).length===1,"p-badge-dot":mt(e.value()),"p-badge-sm":e.size()==="small"||e.badgeSize()==="small","p-badge-lg":e.size()==="large"||e.badgeSize()==="large","p-badge-xl":e.size()==="xlarge"||e.badgeSize()==="xlarge","p-badge-info":e.severity()==="info","p-badge-success":e.severity()==="success","p-badge-warn":e.severity()==="warn","p-badge-danger":e.severity()==="danger","p-badge-secondary":e.severity()==="secondary","p-badge-contrast":e.severity()==="contrast"}]},gn=(()=>{class e extends R{name="badge";theme=co;classes=po;static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var he=(()=>{class e extends D{styleClass=B();badgeSize=B();size=B();severity=B();value=B();badgeDisabled=B(!1,{transform:h});_componentStyle=p(gn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,i){n&2&&(C(i.cn(i.cx("root"),i.styleClass())),At("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[g([gn]),d],decls:1,vars:1,template:function(n,i){n&1&&It(0),n&2&&kt(i.value())},dependencies:[O,w],encapsulation:2,changeDetection:0})}return e})(),bn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[he,w,w]})}return e})();var fo=["*"],go={root:"p-fluid"},mn=(()=>{class e extends R{name="fluid";classes=go;static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var fe=(()=>{class e extends D{_componentStyle=p(mn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&C(i.cx("root"))},features:[g([mn]),d],ngContentSelectors:fo,decls:1,vars:0,template:function(n,i){n&1&&(nt(),ot(0))},dependencies:[O],encapsulation:2,changeDetection:0})}return e})();var bo=["data-p-icon","spinner"],yn=(()=>{class e extends Oe{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Kt()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["","data-p-icon","spinner"]],features:[d],attrs:bo,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(J(),$t(0,"g"),qt(1,"path",0),Ut(),$t(2,"defs")(3,"clipPath",1),qt(4,"rect",2),Ut()()),n&2&&(S("clip-path",i.pathId),y(3),xe("id",i.pathId))},encapsulation:2})}return e})();var vn=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var mo=["content"],yo=["loadingicon"],vo=["icon"],_o=["*"],wn=e=>({class:e});function Co(e,o){e&1&&Ve(0)}function wo(e,o){if(e&1&&Y(0,"span"),e&2){let t=N(3);C(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Do(e,o){if(e&1&&(J(),Y(0,"svg",7)),e&2){let t=N(3);C(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),v("spin",!0),S("aria-hidden",!0)("data-pc-section","loadingicon")}}function Vo(e,o){if(e&1&&(Ft(0),Q(1,wo,1,4,"span",3)(2,Do,1,5,"svg",6),St()),e&2){let t=N(2);y(),v("ngIf",t.loadingIcon),y(),v("ngIf",!t.loadingIcon)}}function xo(e,o){}function Eo(e,o){if(e&1&&Q(0,xo,0,0,"ng-template",8),e&2){let t=N(2);v("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Mo(e,o){if(e&1&&(Ft(0),Q(1,Vo,3,2,"ng-container",2)(2,Eo,1,1,null,5),St()),e&2){let t=N();y(),v("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),y(),v("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Yt(3,wn,t.cx("loadingIcon")))}}function Fo(e,o){if(e&1&&Y(0,"span"),e&2){let t=N(2);C(t.cn("icon",t.iconClass())),S("data-pc-section","icon")}}function So(e,o){}function Ao(e,o){if(e&1&&Q(0,So,0,0,"ng-template",8),e&2){let t=N(2);v("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Io(e,o){if(e&1&&(Ft(0),Q(1,Fo,1,3,"span",3)(2,Ao,1,1,null,5),St()),e&2){let t=N();y(),v("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),y(),v("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Yt(3,wn,t.cx("icon")))}}function ko(e,o){if(e&1&&(ct(0,"span"),It(1),pt()),e&2){let t=N();C(t.cx("label")),S("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),y(),kt(t.label)}}function Po(e,o){if(e&1&&Y(0,"p-badge",9),e&2){let t=N();v("value",t.badge)("severity",t.badgeSeverity)}}var No={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,o])=>!!o).reduce((o,[t])=>o+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},$=(()=>{class e extends R{name="button";theme=vn;classes=No;static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var W={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},_n=(()=>{class e extends D{_componentStyle=p($);static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275dir=b({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,i){n&2&&Z("p-button-label",!0)},features:[g([$]),d]})}return e})(),Cn=(()=>{class e extends D{_componentStyle=p($);static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275dir=b({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,i){n&2&&Z("p-button-icon",!0)},features:[g([$]),d]})}return e})(),Fr=(()=>{class e extends D{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Zt(Cn);labelSignal=Zt(_n);isIconOnly=L(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=B(void 0,{transform:h});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(W);pcFluid=p(fe,{optional:!0,host:!0,skipSelf:!0});isTextButton=L(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=p($);ngAfterViewInit(){super.ngAfterViewInit(),bt(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let t=[W.button,W.component];return this.icon&&!this.label&&mt(this.htmlElement.textContent)&&t.push(W.iconOnly),this.loading&&(t.push(W.disabled,W.loading),!this.icon&&this.label&&t.push(W.labelOnly),this.icon&&!this.label&&!mt(this.htmlElement.textContent)&&t.push(W.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(i=>t.some(r=>i===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!it(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!it(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let i=this.label?"p-button-icon-"+this.iconPos:null;i&&bt(n,i);let r=this.getIconClass();r&&bt(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let t=it(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=it(this.htmlElement,".p-button-icon"),n=it(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275dir=b({type:e,selectors:[["","pButton",""]],contentQueries:function(n,i,r){n&1&&(Qt(r,i.iconSignal,Cn,5),Qt(r,i.labelSignal,_n,5)),n&2&&Ee(2)},hostVars:4,hostBindings:function(n,i){n&2&&Z("p-button-icon-only",i.isIconOnly())("p-button-text",i.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],outlined:[2,"outlined","outlined",h],size:"size",plain:[2,"plain","plain",h],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[g([$]),d]})}return e})(),Oo=(()=>{class e extends D{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=B(void 0,{transform:h});onClick=new T;onFocus=new T;onBlur=new T;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(fe,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=p($);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&(ht(r,mo,5),ht(r,yo,5),ht(r,vo,5),ht(r,Ne,4)),n&2){let s;ft(s=gt())&&(i.contentTemplate=s.first),ft(s=gt())&&(i.loadingIconTemplate=s.first),ft(s=gt())&&(i.iconTemplate=s.first),ft(s=gt())&&(i.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",h],loading:[2,"loading","loading",h],loadingIcon:"loadingIcon",raised:[2,"raised","raised",h],rounded:[2,"rounded","rounded",h],text:[2,"text","text",h],plain:[2,"plain","plain",h],severity:"severity",outlined:[2,"outlined","outlined",h],link:[2,"link","link",h],tabindex:[2,"tabindex","tabindex",Me],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",h],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[g([$]),d],ngContentSelectors:_o,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,i){n&1&&(nt(),ct(0,"button",0),et("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),ot(1),Q(2,Co,1,0,"ng-container",1)(3,Mo,3,5,"ng-container",2)(4,Io,3,5,"ng-container",2)(5,ko,2,5,"span",3)(6,Po,1,2,"p-badge",4),pt()),n&2&&(C(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),v("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus)),S("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex)),y(2),v("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),y(),v("ngIf",i.loading),y(),v("ngIf",!i.loading),y(),v("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.label),y(),v("ngIf",!i.contentTemplate&&!i._contentTemplate&&i.badge))},dependencies:[O,Fe,Ae,Se,Te,hn,yn,bn,he,w],encapsulation:2,changeDetection:0})}return e})(),Sr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[O,Oo,w,w]})}return e})();var Dn=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var To={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Vn=(()=>{class e extends R{name="progressspinner";theme=Dn;classes=To;static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Bo=(()=>{class e extends D{styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=p(Vn);static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:7,hostBindings:function(n,i){n&2&&(S("aria-label",i.ariaLabel)("role","progressbar")("data-pc-name","progressspinner")("data-pc-section","root")("aria-busy",!0),C(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[g([Vn]),d],decls:2,vars:9,consts:[["viewBox","25 25 50 50"],["cx","50","cy","50","r","20","stroke-miterlimit","10"]],template:function(n,i){n&1&&(J(),ct(0,"svg",0),Y(1,"circle",1),pt()),n&2&&(C(i.cx("spin")),At("animation-duration",i.animationDuration),S("data-pc-section","root"),y(),C(i.cx("circle")),S("fill",i.fill)("stroke-width",i.strokeWidth))},dependencies:[O,w],encapsulation:2,changeDetection:0})}return e})(),Wr=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[Bo,w,w]})}return e})();var xn=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var Ro=["*"],jo=`
    ${xn}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,Ho={root:({instance:e})=>["p-floatlabel",{"p-floatlabel-over":e.variant==="over","p-floatlabel-on":e.variant==="on","p-floatlabel-in":e.variant==="in"}]},En=(()=>{class e extends R{name="floatlabel";theme=jo;classes=Ho;static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275prov=F({token:e,factory:e.\u0275fac})}return e})();var Lo=(()=>{class e extends D{_componentStyle=p(En);variant="over";static \u0275fac=(()=>{let t;return function(i){return(t||(t=c(e)))(i||e)}})();static \u0275cmp=A({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(n,i){n&2&&C(i.cx("root"))},inputs:{variant:"variant"},features:[g([En]),d],ngContentSelectors:Ro,decls:1,vars:0,template:function(n,i){n&1&&(nt(),ot(0))},dependencies:[O,w],encapsulation:2,changeDetection:0})}return e})(),rs=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=E({type:e});static \u0275inj=x({imports:[Lo,w,w]})}return e})();var as={production:!1,apiUrl:"https://linked-posts.routemisr.com/"};export{Ue as a,Be as b,di as c,ui as d,jt as e,Nt as f,pi as g,oo as h,ro as i,ao as j,uo as k,hi as l,fi as m,gi as n,as as o,pn as p,he as q,bn as r,Cn as s,Fr as t,Oo as u,Sr as v,Bo as w,Wr as x,Lo as y,rs as z};
