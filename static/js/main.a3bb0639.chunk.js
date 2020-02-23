(this["webpackJsonpkarabiner-complex-rules-generator"]=this["webpackJsonpkarabiner-complex-rules-generator"]||[]).push([[0],{72:function(e,a,l){e.exports=l(85)},77:function(e,a,l){},78:function(e,a,l){},85:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),o=l(13),r=l.n(o),i=(l(77),l(78),l(79),l(136)),u=l(137),c=l(138),d=l(90),s=l(12),b=l(8),m=l(14),v=l(140),f=l(130),p=l(131),y=l(141),h=l(147),_=l(145),E=l(144),g=l(134),O=l(89),k=l(39),C=l.n(k),j=Object(t.createContext)({setFormState:function(){},setRuleState:function(){},getRuleByIndex:function(){},formState:{}}),w=l(142),x=[{label:"Function key",value:"fn"},{label:"Left Command",value:"left_gui"},{label:"Right Command",value:"right_gui"},{label:"Left Control",value:"left_control"},{label:"Right Control",value:"right_control"},{label:"Left Alt / Option",value:"left_alt"},{label:"Right Alt / Option",value:"right_alt"},{label:"Left Shift",value:"left_shift"},{label:"Right Shift",value:"right_shift"}],S=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"0",value:"0"},{label:"A",value:"a"},{label:"B",value:"b"},{label:"C",value:"c"},{label:"D",value:"d"},{label:"E",value:"e"},{label:"F",value:"f"},{label:"G",value:"g"},{label:"H",value:"h"},{label:"I",value:"i"},{label:"J",value:"j"},{label:"K",value:"k"},{label:"L",value:"l"},{label:"M",value:"m"},{label:"N",value:"n"},{label:"O",value:"o"},{label:"P",value:"p"},{label:"Q",value:"q"},{label:"R",value:"r"},{label:"S",value:"s"},{label:"T",value:"t"},{label:"U",value:"u"},{label:"V",value:"v"},{label:"W",value:"w"},{label:"X",value:"x"},{label:"Y",value:"y"},{label:"Z",value:"z"},{label:"F1",value:"f1"},{label:"F2",value:"f2"},{label:"F3",value:"f3"},{label:"F4",value:"f4"},{label:"F5",value:"f5"},{label:"F6",value:"f6"},{label:"F7",value:"f7"},{label:"F8",value:"f8"},{label:"F9",value:"f9"},{label:"F10",value:"f10"},{label:"F11",value:"f11"},{label:"F12",value:"f12"},{label:"Escape",value:"escape"},{label:"` Grave Accent, Tilde",value:"grave_accent_and_tilde"},{label:"Tab key",value:"tab"},{label:"Caps Lock",value:"caps_lock"},{label:"Spacebar",value:"spacebar"},{label:"Up Arrow",value:"up_arrow"},{label:"Left Arrow",value:"left_arrow"},{label:"Down Arrow",value:"down_arrow"},{label:"Right Arrow",value:"right_arrow"},{label:"Enter",value:"return_or_enter"},{label:" (Backslash)",value:"backslash"},{label:"[ (Open Bracket)",value:"open_bracket"},{label:"] (Close Bracket)",value:"close_bracket"},{label:"; (Semicolon)",value:"semicolon"},{label:"' (Quote)",value:"quote"},{label:", (Comma)",value:"comma"},{label:". (Period)",value:"period"},{label:"/ (Slash)",value:"slash"},{label:"- (Dash or Hyphen)",value:"hyphen"},{label:"= (Equal)",value:"equal_sign"},{label:"Delete or Backspace",value:"delete_or_backspace"},{label:"Decrease Screen Brightness",value:"display_brightness_decrement"},{label:"Increase Screen Brightness",value:"display_brightness_increment"},{label:"Mission Control",value:"mission_control"},{label:"Launchpad",value:"launchpad"},{label:"Keyboard Brightness Decrease",value:"illumination_decrement"},{label:"Keyboard Brightness Increase",value:"illumination_increment"},{label:"Rewind / Previous",value:"rewind"},{label:"Play or Pause",value:"play_or_pause"},{label:"Fastfoward / Next",value:"fastforwad"},{label:"Mute",value:"mute"},{label:"Volume Down",value:"volume_decrement"},{label:"Volume Up",value:"volume_increment"}],I=function(e){var a=e.value,l=void 0===a?[]:a,t=e.onChange,o=void 0===t?function(e){}:t,r=e.modifiers,i=void 0!==r&&r,u=e.keyCodes,c=void 0!==u&&u,d=e.multiple,b=void 0===d||d,m=e.autoHighlight,v=void 0!==m&&m,f=e.freeSolo,p=void 0===f||f,y=e.label,h=void 0===y?"keys":y,E=[],g=[];return c&&(E=[].concat(Object(s.a)(E),Object(s.a)(S)),g.push("Key Codes")),i&&(E=[].concat(Object(s.a)(E),Object(s.a)(x)),g.push("Modifiers")),n.a.createElement(w.a,{multiple:b,freeSolo:p,options:E,getOptionLabel:function(e){return("object"===typeof e?e.label:e)||""},value:l,onChange:o,autoHighlight:v,renderInput:function(e){return n.a.createElement(_.a,Object.assign({},e,{variant:"filled",label:h,placeholder:g.join(", "),fullWidth:!0}))}})},R=l(132),B=[{label:"None",value:"disabled"},{label:"Left Click",value:"button1"},{label:"Right Click",value:"button2"},{label:"Middle Click",value:"button3"},{label:"Mouse 4",value:"button4"},{label:"Mouse 5",value:"button5"}],F=function(e){var a=e.setShowOptional,l=void 0===a?function(e){}:a,t=e.showOptional,o=void 0===t?{}:t,r=e.eventObject,i=void 0===r?{}:r,u=e.setEventObject,c=void 0===u?function(e){}:u;return n.a.createElement("div",null,n.a.createElement(R.a,null,n.a.createElement(O.a,{disabled:o.keyCode,variant:"contained",onClick:function(){l(Object(b.a)({},o,{keyCode:!0,consumerKeyCode:!1}))}},"Key Code"),n.a.createElement(O.a,{disabled:o.consumerKeyCode,variant:"contained",onClick:function(){l(Object(b.a)({},o,{keyCode:!1,consumerKeyCode:!0}))}},"Consumer Key Code"),n.a.createElement(O.a,{variant:"contained",onClick:function(){l(Object(b.a)({},o,{keyCode:!1,consumerKeyCode:!1}))},disabled:!(o.keyCode||o.consumerKeyCode),color:"secondary"},"Disable")),n.a.createElement("div",null,o.keyCode&&n.a.createElement(I,{keyCodes:!0,modifiers:!0,multiple:!1,value:i.key_code,autoHighlight:!1,label:"Key Code (optional)",onChange:function(e,a){c(Object(b.a)({},i,{key_code:"string"===typeof a?{label:a,value:a}:a}))}}),o.consumerKeyCode&&n.a.createElement(_.a,{placeholder:"",margin:"normal",variant:"filled",label:"Consumer Key Code (optional)",fullWidth:!0,value:i.consumer_key_code||"",onChange:function(e){return c(Object(b.a)({},i,{consumer_key_code:e.currentTarget.value}))}})),n.a.createElement(v.a,null,n.a.createElement(f.a,{variant:"filled",fullWidth:!0},n.a.createElement(p.a,{id:"type"},"Pointing Button (optional)"),n.a.createElement(y.a,{labelId:"type",value:i.pointing_button||"",onChange:function(e){c(Object(b.a)({},i,{pointing_button:e.target.value||""}))}},B.map((function(e){var a=e.label,l=e.value;return n.a.createElement(h.a,{value:l,key:l},a)}))))))},K=function(e){var a=e.ruleIndex,l=Object(t.useContext)(j),o=l.getRuleByIndex,r=l.setRuleState,i=o(a),u=Object(t.useState)({pointing_button:"disabled",modifiers:{mandatory:[],optional:[]}}),c=Object(m.a)(u,2),d=c[0],s=c[1],f=Object(t.useState)({keyCode:!1,consumerKeyCode:!1,pointingButton:!1,simultaneous:!1,simultaneousOptions:!1}),p=Object(m.a)(f,2),y=p[0],h=p[1];return Object(t.useEffect)((function(){var e,l,t,n=Object(b.a)({},d,{modifiers:Object(b.a)({},d.modifiers)});("disabled"===n.pointing_button&&delete n.pointing_button,!y.keyCode&&n.key_code)?delete n.key_code:n.key_code=null===(t=n.key_code)||void 0===t?void 0:t.value;!y.consumerKeyCode&&n.consumer_key_code&&delete n.consumer_key_code,(null===(e=n.modifiers)||void 0===e?void 0:e.mandatory.length)?n.modifiers.mandatory=n.modifiers.mandatory.map((function(e){return e.value})):delete n.modifiers.mandatory,(null===(l=n.modifiers)||void 0===l?void 0:l.optional.length)?n.modifiers.optional=n.modifiers.optional.map((function(e){return e.value})):delete n.modifiers.optional,n.modifiers.mandatory||n.modifiers.optional||delete n.modifiers,r(a,Object(b.a)({},i,{from:n}))}),[d,y]),n.a.createElement(v.a,{className:"form-container"},n.a.createElement(F,{setShowOptional:h,showOptional:y,setEventObject:s,eventObject:d}),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(I,{modifiers:!0,value:d.modifiers.mandatory,label:"Mandatory Modifiers (optional)",onChange:function(e,a){s(Object(b.a)({},d,{modifiers:Object(b.a)({},d.modifiers,{mandatory:a.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))})}))}})),n.a.createElement("div",null,n.a.createElement(I,{modifiers:!0,value:d.modifiers.optional,label:"Optional Modifiers (optional)",onChange:function(e,a){s(Object(b.a)({},d,{modifiers:Object(b.a)({},d.modifiers,{optional:a.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))})}))}}))))},M=l(9),L=l(88),A=l(133),W=l(143),D=l(63),N=l.n(D),z=function(e){var a=e.type,l=e.index,o=e.ruleIndex,r=Object(t.useContext)(j),i=r.getRuleByIndex,u=r.setRuleState,c=i(o),d=Object(t.useState)({pointing_button:"disabled",modifiers:[],repeat:!0}),v=Object(m.a)(d,2),p=v[0],y=v[1],h=Object(t.useState)({keyCode:!1,consumerKeyCode:!1,pointingButton:!1,modifiersMandatory:!1,modifiersOptional:!1,simultaneous:!1,simultaneousOptions:!1}),_=Object(m.a)(h,2),E=_[0],g=_[1];return Object(t.useEffect)((function(){var e,t,n=Object(b.a)({},p);("disabled"===n.pointing_button&&delete n.pointing_button,!E.keyCode&&n.key_code)?delete n.key_code:n.key_code=null===(t=n.key_code)||void 0===t?void 0:t.value;!E.consumerKeyCode&&n.consumer_key_code&&delete n.consumer_key_code,(null===(e=n.modifiers)||void 0===e?void 0:e.length)?n.modifiers=n.modifiers.map((function(e){return e.value})):delete n.modifiers,!1===n.lazy&&delete n.lazy,!0===n.repeat&&delete n.repeat,!1===n.halt&&delete n.halt;var r=Object(s.a)(c[a]);r[l]=Object(b.a)({},n),u(o,Object(b.a)({},c,Object(M.a)({},a,r)))}),[p,E]),n.a.createElement("div",{className:"form-container"},n.a.createElement(F,{showOptional:E,setShowOptional:g,setEventObject:y,eventObject:p}),n.a.createElement(I,{freeSolo:!1,modifiers:!0,value:p.modifiers,label:"Modifiers",onChange:function(e,a){console.log({value:a}),y(Object(b.a)({},p,{modifiers:a.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))}))}}),n.a.createElement(f.a,{fullWidth:!0},n.a.createElement(L.a,null,"Additional Options"),n.a.createElement(A.a,{label:"Lazy",control:n.a.createElement(W.a,{checked:!!p.lazy,onChange:function(e){y(Object(b.a)({},p,{lazy:e.target.checked}))}})}),n.a.createElement(A.a,{label:"Repeat",control:n.a.createElement(W.a,{checked:!!p.repeat,onChange:function(e){y(Object(b.a)({},p,{repeat:e.target.checked}))}})}),n.a.createElement(A.a,{label:"Halt",control:n.a.createElement(W.a,{checked:!!p.halt,onChange:function(e){y(Object(b.a)({},p,{halt:e.target.checked}))}})})),n.a.createElement(O.a,{color:"secondary",variant:"contained",onClick:function(){return function(){var e=Object(s.a)(c[a]);e.splice(l,1),u(o,Object(b.a)({},c,Object(M.a)({},a,e)))}()},startIcon:n.a.createElement(N.a,null)},"Remove"))},P=l(52),T=l.n(P),H=function(e){var a=(0|e)%100;return a>3&&a<21?"th":["th","st","nd","rd"][a%10]||"th"},q=function(e){for(var a=e.toLowerCase().split("_"),l=0;l<a.length;l++)a[l]=a[l][0].toUpperCase()+a[l].slice(1);return a.join(" ")},J=["basic","frontmost_application_if","frontmost_application_unless","device_if","device_unless","keyboard_type_if","keyboard_type_unless","input_source_if","input_source_unless","variable_if","variable_unless","event_changed_if","event_changed_unless"],U=["to","to_if_alone","to_if_held_down","to_after_key_up"],V=function(e){var a=e.index,l=Object(t.useContext)(j),o=l.getRuleByIndex,r=l.setRuleState,i=o(a);return n.a.createElement(v.a,null,n.a.createElement(f.a,{variant:"filled",fullWidth:!0},n.a.createElement(p.a,{id:"type"},"Type*"),n.a.createElement(y.a,{labelId:"type",value:i.type,onChange:function(e){r(a,Object(b.a)({},i,{type:e.target.value}))}},J.map((function(e){return n.a.createElement(h.a,{value:e,key:e},q(e))})))),n.a.createElement(_.a,{label:"Description (optional)",variant:"filled",value:i.description,onChange:function(e){return r(a,Object(b.a)({},i,{description:e.target.value}))},multiline:!0,fullWidth:!0}),n.a.createElement(E.a,{defaultExpanded:!0},n.a.createElement(g.a,{expandIcon:n.a.createElement(C.a,null)},'"From" Event*'),n.a.createElement(K,{ruleIndex:a})),U.map((function(e,l){return i[e]&&n.a.createElement(E.a,{key:l,defaultExpanded:!0},n.a.createElement(g.a,{expandIcon:n.a.createElement(C.a,null)},'"',q(e),'" Events'),n.a.createElement(v.a,{p:2},i[e].map((function(l,t){return n.a.createElement(E.a,{key:t,defaultExpanded:0===t},n.a.createElement(g.a,{expandIcon:n.a.createElement(C.a,null)},t+1,H(t+1),' "',q(e),'" Event'),n.a.createElement(v.a,{p:1},n.a.createElement(z,{type:e,index:t,ruleIndex:a})))}))))})),n.a.createElement(v.a,null,U.map((function(e){return n.a.createElement(O.a,{key:e,variant:"contained",color:"primary",onClick:function(){!function(e){var l=Object(b.a)({},i);l[e]=l[e]||[],l[e].push({}),r(a,l)}(e)},startIcon:n.a.createElement(T.a,null),size:"small"},e)}))))},G=l(135),Q={type:"basic",from:{}},X=["to","to_if_alone","to_if_held_down","to_after_key_up"],Y=function(){var e=Object(t.useState)({title:"",rules:[Q]}),a=Object(m.a)(e,2),l=a[0],o=a[1];return n.a.createElement(j.Provider,{value:{formState:l,setFormState:o,setRuleState:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(b.a)({},l),n=Object(s.a)(l.rules);n[e]=Object(b.a)({},a),X.map((function(a){var l;0===(null===(l=n[e][a])||void 0===l?void 0:l.length)&&delete n[e][a]})),t.rules=n,o(t)},getRuleByIndex:function(e){return l.rules[e]}}},n.a.createElement(G.a,{container:!0,direction:"row",justify:"space-between"},n.a.createElement(G.a,{item:!0,xs:!0},n.a.createElement(v.a,{p:1},n.a.createElement(_.a,{fullWidth:!0,onChange:function(e){return o(Object(b.a)({},l,{title:e.currentTarget.value}))},variant:"filled",label:"Title"}),l.rules.map((function(e,a){return n.a.createElement(E.a,{defaultExpanded:0===a,key:a},n.a.createElement(g.a,{expandIcon:n.a.createElement(C.a,null)},a+1+H(a+1)+" Rule"+(e.description?": "+e.description:"")),n.a.createElement(v.a,{p:1},n.a.createElement(V,{index:a,key:a})))})),n.a.createElement(O.a,{onClick:function(){o(Object(b.a)({},l,{rules:[].concat(Object(s.a)(l.rules),[Q])}))},color:"primary",variant:"contained",startIcon:n.a.createElement(T.a,null)},"Rule"))),n.a.createElement(G.a,{item:!0,xs:!0,container:!0},n.a.createElement("textarea",{className:"generated-code",readOnly:!0,value:JSON.stringify(l,null,2)}))))},Z=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{position:"static"},n.a.createElement(u.a,null,n.a.createElement(c.a,null,n.a.createElement(d.a,null,"Karabiner Complex Modification")))),n.a.createElement(Y,null))};var $=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[72,1,2]]]);
//# sourceMappingURL=main.a3bb0639.chunk.js.map