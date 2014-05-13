//>>built
define("dijit/focus",["dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/Evented","dojo/_base/lang","dojo/on","dojo/ready","dojo/sniff","dojo/Stateful","dojo/_base/unload","dojo/_base/window","dojo/window","./a11y","./registry","./main"],function(_1,_2,_3,_4,_5,_6,_7,on,_8,_9,_a,_b,_c,_d,_e,_f,_10){
var _11=_2([_a,_6],{curNode:null,activeStack:[],constructor:function(){
var _12=_7.hitch(this,function(_13){
if(_3.isDescendant(this.curNode,_13)){
this.set("curNode",null);
}
if(_3.isDescendant(this.prevNode,_13)){
this.set("prevNode",null);
}
});
_1.before(_5,"empty",_12);
_1.before(_5,"destroy",_12);
},registerIframe:function(_14){
return this.registerWin(_14.contentWindow,_14);
},registerWin:function(_15,_16){
var _17=this,_18=_15.document&&_15.document.body;
if(_18){
var mdh=on(_18,"mousedown",function(evt){
_17._justMouseDowned=true;
setTimeout(function(){
_17._justMouseDowned=false;
},13);
if(evt&&evt.target&&evt.target.parentNode==null){
return;
}
_17._onTouchNode(_16||evt.target,"mouse");
});
var fih=on(_18,"focusin",function(evt){
if(!evt.target.tagName){
return;
}
var tag=evt.target.tagName.toLowerCase();
if(tag=="#document"||tag=="body"){
return;
}
if(_e.isFocusable(evt.target)){
_17._onFocusNode(_16||evt.target);
}else{
_17._onTouchNode(_16||evt.target);
}
});
var foh=on(_18,"focusout",function(evt){
_17._onBlurNode(_16||evt.target);
});
return {remove:function(){
mdh.remove();
fih.remove();
foh.remove();
mdh=fih=foh=null;
_18=null;
}};
}
},_onBlurNode:function(_19){
if(this._clearFocusTimer){
clearTimeout(this._clearFocusTimer);
}
this._clearFocusTimer=setTimeout(_7.hitch(this,function(){
this.set("prevNode",this.curNode);
this.set("curNode",null);
}),0);
if(this._justMouseDowned){
return;
}
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
}
this._clearActiveWidgetsTimer=setTimeout(_7.hitch(this,function(){
delete this._clearActiveWidgetsTimer;
this._setStack([]);
}),0);
},_onTouchNode:function(_1a,by){
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
delete this._clearActiveWidgetsTimer;
}
var _1b=[];
try{
while(_1a){
var _1c=_4.get(_1a,"dijitPopupParent");
if(_1c){
_1a=_f.byId(_1c).domNode;
}else{
if(_1a.tagName&&_1a.tagName.toLowerCase()=="body"){
if(_1a===_c.body()){
break;
}
_1a=_d.get(_1a.ownerDocument).frameElement;
}else{
var id=_1a.getAttribute&&_1a.getAttribute("widgetId"),_1d=id&&_f.byId(id);
if(_1d&&!(by=="mouse"&&_1d.get("disabled"))){
_1b.unshift(id);
}
_1a=_1a.parentNode;
}
}
}
}
catch(e){
}
this._setStack(_1b,by);
},_onFocusNode:function(_1e){
if(!_1e){
return;
}
if(_1e.nodeType==9){
return;
}
if(this._clearFocusTimer){
clearTimeout(this._clearFocusTimer);
delete this._clearFocusTimer;
}
this._onTouchNode(_1e);
if(_1e==this.curNode){
return;
}
this.set("prevNode",this.curNode);
this.set("curNode",_1e);
},_setStack:function(_1f,by){
var _20=this.activeStack;
this.set("activeStack",_1f);
for(var _21=0;_21<Math.min(_20.length,_1f.length);_21++){
if(_20[_21]!=_1f[_21]){
break;
}
}
var _22;
for(var i=_20.length-1;i>=_21;i--){
_22=_f.byId(_20[i]);
if(_22){
_22._hasBeenBlurred=true;
_22.set("focused",false);
if(_22._focusManager==this){
_22._onBlur(by);
}
this.emit("widget-blur",_22,by);
}
}
for(i=_21;i<_1f.length;i++){
_22=_f.byId(_1f[i]);
if(_22){
_22.set("focused",true);
if(_22._focusManager==this){
_22._onFocus(by);
}
this.emit("widget-focus",_22,by);
}
}
},focus:function(_23){
if(_23){
try{
_23.focus();
}
catch(e){
}
}
}});
var _24=new _11();
_8(function(){
var _25=_24.registerWin(_d.get(_c.doc));
if(_9("ie")){
_b.addOnWindowUnload(function(){
if(_25){
_25.remove();
_25=null;
}
});
}
});
_10.focus=function(_26){
_24.focus(_26);
};
for(var _27 in _24){
if(!/^_/.test(_27)){
_10.focus[_27]=typeof _24[_27]=="function"?_7.hitch(_24,_27):_24[_27];
}
}
_24.watch(function(_28,_29,_2a){
_10.focus[_28]=_2a;
});
return _24;
});
