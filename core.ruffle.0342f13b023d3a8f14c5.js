"use strict";(self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[]).push([[966],{762:(n,e,_)=>{function t(n,e,_){e&&n.getChannelData(0).set(e),_&&n.getChannelData(1).set(_)}function r(n){var e,_;const t=null===(e=n.getOutputTimestamp)||void 0===e?void 0:e.call(n);return null!==(_=null==t?void 0:t.contextTime)&&void 0!==_?_:n.currentTime-n.baseLatency}_.d(e,{K:()=>t,T:()=>r})},966:(n,e,_)=>{_.r(e),_.d(e,{Ruffle:()=>G,default:()=>H});var t=_(762);const r="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let b;const c=new Array(32).fill(void 0);function f(n){return c[n]}c.push(void 0,null,!0,!1);let u=c.length;function o(n){const e=f(n);return function(n){n<36||(c[n]=u,u=n)}(n),e}let a=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let i=null;function g(){return null!==i&&i.buffer===b.memory.buffer||(i=new Uint8Array(b.memory.buffer)),i}function w(n,e){return a.decode(g().subarray(n,n+e))}function d(n){u===c.length&&c.push(c.length+1);const e=u;return u=c[e],c[e]=n,e}let s=0,l=new TextEncoder("utf-8");const m="function"==typeof l.encodeInto?function(n,e){return l.encodeInto(n,e)}:function(n,e){const _=l.encode(n);return e.set(_),{read:n.length,written:_.length}};function p(n,e,_){if(void 0===_){const _=l.encode(n),t=e(_.length);return g().subarray(t,t+_.length).set(_),s=_.length,t}let t=n.length,r=e(t);const b=g();let c=0;for(;c<t;c++){const e=n.charCodeAt(c);if(e>127)break;b[r+c]=e}if(c!==t){0!==c&&(n=n.slice(c)),r=_(r,t,t=c+3*n.length);const e=g().subarray(r+c,r+t);c+=m(n,e).written}return s=c,r}let y=null;function h(){return null!==y&&y.buffer===b.memory.buffer||(y=new Int32Array(b.memory.buffer)),y}function v(n){return null==n}let x=null;function A(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let _="[";e>0&&(_+=A(n[0]));for(let t=1;t<e;t++)_+=", "+A(n[t]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(n));let t;if(!(_.length>1))return toString.call(n);if(t=_[1],"Object"==t)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:t}function S(n,e,_,t){const r={a:n,b:e,cnt:1,dtor:_},c=(...n)=>{r.cnt++;const e=r.a;r.a=0;try{return t(e,r.b,...n)}finally{0==--r.cnt?b.__wbindgen_export_2.get(r.dtor)(e,r.b):r.a=e}};return c.original=r,c}function C(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function T(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function R(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function E(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function F(n,e){b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h49f5afc31c3c306b(n,e)}function P(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbd9f4ba647e8a8a0(n,e,_)}function k(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function M(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h09c4864e7a3c5360(n,e,d(_))}function O(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h45f4984371d106df(n,e,d(_))}let L=null;function W(n,e){return(null!==L&&L.buffer===b.memory.buffer||(L=new Float32Array(b.memory.buffer)),L).subarray(n/4,n/4+e)}function I(n,e){try{return n.apply(this,e)}catch(n){b.__wbindgen_exn_store(d(n))}}let D=32;function B(n){if(1==D)throw new Error("out of js stack");return c[--D]=n,D}let V=null;function j(n,e){return g().subarray(n/1,n/1+e)}let U=null;function q(n,e){return(null!==U&&U.buffer===b.memory.buffer||(U=new Uint8ClampedArray(b.memory.buffer)),U).subarray(n/1,n/1+e)}class G{static __wrap(n){const e=Object.create(G.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();b.__wbg_ruffle_free(n)}constructor(n,e,_){try{return o(b.ruffle_new(d(n),d(e),B(_)))}finally{c[D++]=void 0}}stream_from(n,e){try{var _=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;b.ruffle_stream_from(this.ptr,_,t,B(e))}finally{c[D++]=void 0}}load_data(n,e){try{b.ruffle_load_data(this.ptr,d(n),B(e))}finally{c[D++]=void 0}}play(){b.ruffle_play(this.ptr)}pause(){b.ruffle_pause(this.ptr)}is_playing(){return 0!==b.ruffle_is_playing(this.ptr)}prepare_context_menu(){return o(b.ruffle_prepare_context_menu(this.ptr))}run_context_menu_callback(n){b.ruffle_run_context_menu_callback(this.ptr,n)}set_fullscreen(n){b.ruffle_set_fullscreen(this.ptr,n)}clear_custom_menu_items(){b.ruffle_clear_custom_menu_items(this.ptr)}destroy(){b.ruffle_destroy(this.ptr)}call_exposed_callback(n,e){var _=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s,r=function(n,e){const _=e(4*n.length),t=(null!==V&&V.buffer===b.memory.buffer||(V=new Uint32Array(b.memory.buffer)),V);for(let e=0;e<n.length;e++)t[_/4+e]=d(n[e]);return s=n.length,_}(e,b.__wbindgen_malloc),c=s;return o(b.ruffle_call_exposed_callback(this.ptr,_,t,r,c))}set_trace_observer(n){b.ruffle_set_trace_observer(this.ptr,d(n))}audio_context(){return o(b.ruffle_audio_context(this.ptr))}static is_wasm_simd_used(){return 0!==b.ruffle_is_wasm_simd_used()}}const H=async function n(e){void 0===e&&(e=new URL(_(285),_.b));const c={wbg:{}};c.wbg.__wbindgen_object_drop_ref=function(n){o(n)},c.wbg.__wbindgen_cb_drop=function(n){const e=o(n).original;return 1==e.cnt--&&(e.a=0,!0)},c.wbg.__wbindgen_string_new=function(n,e){return d(w(n,e))},c.wbg.__wbindgen_object_clone_ref=function(n){return d(f(n))},c.wbg.__wbg_ruffle_new=function(n){return d(G.__wrap(n))},c.wbg.__wbindgen_is_function=function(n){return"function"==typeof f(n)},c.wbg.__wbindgen_json_parse=function(n,e){return d(JSON.parse(w(n,e)))},c.wbg.__wbindgen_json_serialize=function(n,e){const _=f(e);var t=p(JSON.stringify(void 0===_?null:_),b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},c.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2=function(n,e,_,r,b){(0,t.K)(f(n),0===e?void 0:W(e,_),0===r?void 0:W(r,b))},c.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15=function(n){return(0,t.T)(f(n))},c.wbg.__wbg_new_df6e6ab7a65c4c4d=function(n,e){return d(new Error(w(n,e)))},c.wbg.__wbg_panic_bbc809dd04a12c60=function(n,e){f(n).panic(f(e))},c.wbg.__wbg_setFullscreen_9819a8b20564e39b=function(){return I((function(n,e){f(n).setFullscreen(0!==e)}),arguments)},c.wbg.__wbindgen_string_get=function(n,e){const _=f(e);var t="string"==typeof _?_:void 0,r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91=function(n){f(n).displayUnsupportedMessage()},c.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a=function(n){f(n).displayRootMovieDownloadFailedMessage()},c.wbg.__wbg_displayMessage_c57c20204892da2b=function(n,e,_){f(n).displayMessage(w(e,_))},c.wbg.__wbg_setMetadata_bbaeaee7f48274e6=function(n,e){f(n).setMetadata(o(e))},c.wbg.__wbg_onCallbackAvailable_3a48fae397926c96=function(n,e,_){f(n).onCallbackAvailable(w(e,_))},c.wbg.__wbg_onFSCommand_fb2f94653f71796e=function(){return I((function(n,e,_,t,r){return f(n).onFSCommand(w(e,_),w(t,r))}),arguments)},c.wbg.__wbindgen_number_get=function(n,e){const _=f(e);var t="number"==typeof _?_:void 0;(null!==x&&x.buffer===b.memory.buffer||(x=new Float64Array(b.memory.buffer)),x)[n/8+1]=v(t)?0:t,h()[n/4+0]=!v(t)},c.wbg.__wbindgen_boolean_get=function(n){const e=f(n);return"boolean"==typeof e?e?1:0:2},c.wbg.__wbindgen_number_new=function(n){return d(n)},c.wbg.__wbg_new_693216e109162396=function(){return d(new Error)},c.wbg.__wbg_stack_0ddaca5d1abfb52f=function(n,e){var _=p(f(e).stack,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_error_09919627ac0992f5=function(n,e){try{console.error(w(n,e))}finally{b.__wbindgen_free(n,e)}},c.wbg.__wbindgen_is_undefined=function(n){return void 0===f(n)},c.wbg.__wbg_instanceof_WebGl2RenderingContext_56ad96bfac3f5531=function(n){return f(n)instanceof WebGL2RenderingContext},c.wbg.__wbg_bindVertexArray_52b8b2f5fd93d81d=function(n,e){f(n).bindVertexArray(f(e))},c.wbg.__wbg_blitFramebuffer_d6dafd082e3b1266=function(n,e,_,t,r,b,c,u,o,a,i){f(n).blitFramebuffer(e,_,t,r,b,c,u,o,a>>>0,i>>>0)},c.wbg.__wbg_createVertexArray_d59135c0a43c410b=function(n){var e=f(n).createVertexArray();return v(e)?0:d(e)},c.wbg.__wbg_renderbufferStorageMultisample_41916a754c02df64=function(n,e,_,t,r,b){f(n).renderbufferStorageMultisample(e>>>0,_,t>>>0,r,b)},c.wbg.__wbg_texImage2D_29ea0a7f026e239b=function(){return I((function(n,e,_,t,r,b,c,u,o,a,i){f(n).texImage2D(e>>>0,_,t,r,b,c,u>>>0,o>>>0,0===a?void 0:j(a,i))}),arguments)},c.wbg.__wbg_bindFramebuffer_48c4bf8ff82bf7e9=function(n,e,_){f(n).bindFramebuffer(e>>>0,f(_))},c.wbg.__wbg_bindRenderbuffer_4a9ad1cf80580397=function(n,e,_){f(n).bindRenderbuffer(e>>>0,f(_))},c.wbg.__wbg_bindTexture_9d8ed0fcd83eb0a9=function(n,e,_){f(n).bindTexture(e>>>0,f(_))},c.wbg.__wbg_createFramebuffer_9818fc04b4a38c18=function(n){var e=f(n).createFramebuffer();return v(e)?0:d(e)},c.wbg.__wbg_createRenderbuffer_d1a55ec78e26295b=function(n){var e=f(n).createRenderbuffer();return v(e)?0:d(e)},c.wbg.__wbg_createTexture_8f31e7386e22fc37=function(n){var e=f(n).createTexture();return v(e)?0:d(e)},c.wbg.__wbg_deleteFramebuffer_5f58ccb548438c57=function(n,e){f(n).deleteFramebuffer(f(e))},c.wbg.__wbg_deleteRenderbuffer_6372146d4689793e=function(n,e){f(n).deleteRenderbuffer(f(e))},c.wbg.__wbg_deleteTexture_a0632c71429795ac=function(n,e){f(n).deleteTexture(f(e))},c.wbg.__wbg_framebufferRenderbuffer_9d619e8bf8f2aeb6=function(n,e,_,t,r){f(n).framebufferRenderbuffer(e>>>0,_>>>0,t>>>0,f(r))},c.wbg.__wbg_framebufferTexture2D_3da41a7f38e2c523=function(n,e,_,t,r,b){f(n).framebufferTexture2D(e>>>0,_>>>0,t>>>0,f(r),b)},c.wbg.__wbg_getError_868f7c8ef6475b32=function(n){return f(n).getError()},c.wbg.__wbg_getParameter_e3aea13dd0a2904d=function(){return I((function(n,e){return d(f(n).getParameter(e>>>0))}),arguments)},c.wbg.__wbg_texParameteri_c54aab65b2f8cf6d=function(n,e,_,t){f(n).texParameteri(e>>>0,_>>>0,t)},c.wbg.__wbg_instanceof_Window_c4b70662a0d2c5ec=function(n){return f(n)instanceof Window},c.wbg.__wbg_document_1c64944725c0d81d=function(n){var e=f(n).document;return v(e)?0:d(e)},c.wbg.__wbg_location_f98ad02632f88c43=function(n){return d(f(n).location)},c.wbg.__wbg_navigator_480e592af6ad365b=function(n){return d(f(n).navigator)},c.wbg.__wbg_devicePixelRatio_d8c3852bb37f76bf=function(n){return f(n).devicePixelRatio},c.wbg.__wbg_performance_947628766699c5bb=function(n){var e=f(n).performance;return v(e)?0:d(e)},c.wbg.__wbg_localStorage_6775414303ab5085=function(){return I((function(n){var e=f(n).localStorage;return v(e)?0:d(e)}),arguments)},c.wbg.__wbg_cancelAnimationFrame_5f2a1e987a6de100=function(){return I((function(n,e){f(n).cancelAnimationFrame(e)}),arguments)},c.wbg.__wbg_focus_70ecc8fcab4bdb61=function(){return I((function(n){f(n).focus()}),arguments)},c.wbg.__wbg_open_5416e4448a959cfa=function(){return I((function(n,e,_,t,r){var b=f(n).open(w(e,_),w(t,r));return v(b)?0:d(b)}),arguments)},c.wbg.__wbg_requestAnimationFrame_71638ca922068239=function(){return I((function(n,e){return f(n).requestAnimationFrame(f(e))}),arguments)},c.wbg.__wbg_fetch_cfe0d1dd786e9cd4=function(n,e){return d(f(n).fetch(f(e)))},c.wbg.__wbg_destination_6c3ac66ee8b2fe85=function(n){return d(f(n).destination)},c.wbg.__wbg_sampleRate_ffa6f08191b00934=function(n){return f(n).sampleRate},c.wbg.__wbg_currentTime_e231c76a3c011126=function(n){return f(n).currentTime},c.wbg.__wbg_new_52bbbd81ffc19dff=function(){return I((function(){return d(new r)}),arguments)},c.wbg.__wbg_suspend_5b2c4674b28d07f2=function(){return I((function(n){return d(f(n).suspend())}),arguments)},c.wbg.__wbg_createBuffer_79833a4052d7b42a=function(){return I((function(n,e,_,t){return d(f(n).createBuffer(e>>>0,_>>>0,t))}),arguments)},c.wbg.__wbg_createBufferSource_7244d810d62a0bed=function(){return I((function(n){return d(f(n).createBufferSource())}),arguments)},c.wbg.__wbg_createChannelMerger_542d0885aa4bdc09=function(){return I((function(n,e){return d(f(n).createChannelMerger(e>>>0))}),arguments)},c.wbg.__wbg_createChannelSplitter_95302cbc3f9b9f85=function(){return I((function(n,e){return d(f(n).createChannelSplitter(e>>>0))}),arguments)},c.wbg.__wbg_createGain_c5f114390c363029=function(){return I((function(n){return d(f(n).createGain())}),arguments)},c.wbg.__wbg_createScriptProcessor_ec30f8ab6ea543d1=function(){return I((function(n,e,_,t){return d(f(n).createScriptProcessor(e>>>0,_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_decodeAudioData_66b886741a4167f4=function(){return I((function(n,e,_,t){return d(f(n).decodeAudioData(f(e),f(_),f(t)))}),arguments)},c.wbg.__wbg_resume_ca50287e91c0323e=function(){return I((function(n){return d(f(n).resume())}),arguments)},c.wbg.__wbg_setvalue_df8236adf40ea2d3=function(n,e){f(n).value=e},c.wbg.__wbg_linearRampToValueAtTime_113d2920c90f1851=function(){return I((function(n,e,_){return d(f(n).linearRampToValueAtTime(e,_))}),arguments)},c.wbg.__wbg_setValueAtTime_9396570ff0d3cc1f=function(){return I((function(n,e,_){return d(f(n).setValueAtTime(e,_))}),arguments)},c.wbg.__wbg_gain_d4eaca6128dcfd90=function(n){return d(f(n).gain)},c.wbg.__wbg_baseURI_083fd53f8bea9af2=function(){return I((function(n,e){var _=f(e).baseURI,t=v(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t}),arguments)},c.wbg.__wbg_appendChild_d318db34c4559916=function(){return I((function(n,e){return d(f(n).appendChild(f(e)))}),arguments)},c.wbg.__wbg_instanceof_SvgsvgElement_631275f115d8f8e3=function(n){return f(n)instanceof SVGSVGElement},c.wbg.__wbg_createSVGMatrix_037d6368ea06b02d=function(n){return d(f(n).createSVGMatrix())},c.wbg.__wbg_protocol_f17adabd4e662b06=function(){return I((function(n,e){var _=p(f(e).protocol,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_}),arguments)},c.wbg.__wbg_assign_26269af9ce90e6c7=function(){return I((function(n,e,_){f(n).assign(w(e,_))}),arguments)},c.wbg.__wbg_new_a3422e0170c31454=function(){return I((function(){return d(new Path2D)}),arguments)},c.wbg.__wbg_addPath_18881cd56483fe63=function(n,e,_){f(n).addPath(f(e),f(_))},c.wbg.__wbg_closePath_bf39ada268053aea=function(n){f(n).closePath()},c.wbg.__wbg_lineTo_4d75fbab7308c3d2=function(n,e,_){f(n).lineTo(e,_)},c.wbg.__wbg_moveTo_70f7a4760893f917=function(n,e,_){f(n).moveTo(e,_)},c.wbg.__wbg_quadraticCurveTo_7724e01d766ebfe2=function(n,e,_,t,r){f(n).quadraticCurveTo(e,_,t,r)},c.wbg.__wbg_get_f0092ad67dc97639=function(){return I((function(n,e,_,t){var r=f(e)[w(_,t)],c=v(r)?0:p(r,b.__wbindgen_malloc,b.__wbindgen_realloc),u=s;h()[n/4+1]=u,h()[n/4+0]=c}),arguments)},c.wbg.__wbg_set_3a236a97145dc780=function(){return I((function(n,e,_,t,r){f(n)[w(e,_)]=w(t,r)}),arguments)},c.wbg.__wbg_delete_881ab2d2a830b82f=function(){return I((function(n,e,_){delete f(n)[w(e,_)]}),arguments)},c.wbg.__wbg_length_b398b347bd3c9cd5=function(n){return f(n).length},c.wbg.__wbg_setTransform_3f9fc1784a580fff=function(n,e){f(n).setTransform(f(e))},c.wbg.__wbg_setProperty_1460c660bc329763=function(){return I((function(n,e,_,t,r){f(n).setProperty(w(e,_),w(t,r))}),arguments)},c.wbg.__wbg_offsetX_5da3ebf8a8cda8a4=function(n){return f(n).offsetX},c.wbg.__wbg_offsetY_b0edbc16723a55cb=function(n){return f(n).offsetY},c.wbg.__wbg_button_a02c0467d38e8338=function(n){return f(n).button},c.wbg.__wbg_bindVertexArrayOES_7104c80fb0d31cb0=function(n,e){f(n).bindVertexArrayOES(f(e))},c.wbg.__wbg_createVertexArrayOES_ced4f8a084b789b7=function(n){var e=f(n).createVertexArrayOES();return v(e)?0:d(e)},c.wbg.__wbg_deltaY_080604c20160c0e8=function(n){return f(n).deltaY},c.wbg.__wbg_deltaMode_c5ec1ee518ea0a08=function(n){return f(n).deltaMode},c.wbg.__wbg_connect_723cc4823fe3e6c0=function(){return I((function(n,e){return d(f(n).connect(f(e)))}),arguments)},c.wbg.__wbg_connect_cb8dcaafd6d14fe4=function(){return I((function(n,e,_){return d(f(n).connect(f(e),_>>>0))}),arguments)},c.wbg.__wbg_connect_eb8fcb61cab88f0b=function(){return I((function(n,e,_,t){return d(f(n).connect(f(e),_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_disconnect_661941cf5b88fa5a=function(){return I((function(n){f(n).disconnect()}),arguments)},c.wbg.__wbg_instanceof_HtmlFormElement_aeafa27e92962efa=function(n){return f(n)instanceof HTMLFormElement},c.wbg.__wbg_submit_7479ea6e99f76174=function(){return I((function(n){f(n).submit()}),arguments)},c.wbg.__wbg_instanceof_Response_e1b11afbefa5b563=function(n){return f(n)instanceof Response},c.wbg.__wbg_ok_270f6d403efe7e7b=function(n){return f(n).ok},c.wbg.__wbg_statusText_97740db9b8bb12e3=function(n,e){var _=p(f(e).statusText,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_arrayBuffer_b8937ed04beb0d36=function(){return I((function(n){return d(f(n).arrayBuffer())}),arguments)},c.wbg.__wbg_seta_f5667df13832f473=function(n,e){f(n).a=e},c.wbg.__wbg_setb_51b68c87004ceb92=function(n,e){f(n).b=e},c.wbg.__wbg_setc_62d7a8abc0082fcc=function(n,e){f(n).c=e},c.wbg.__wbg_setd_544fd4902db40bca=function(n,e){f(n).d=e},c.wbg.__wbg_sete_a3575dd88c8f17a3=function(n,e){f(n).e=e},c.wbg.__wbg_setf_956eaea5b3047302=function(n,e){f(n).f=e},c.wbg.__wbg_setbuffer_c643a88bac27b2bd=function(n,e){f(n).buffer=f(e)},c.wbg.__wbg_setloop_32c84ea32fabef74=function(n,e){f(n).loop=0!==e},c.wbg.__wbg_setloopStart_a113b4d478da7f93=function(n,e){f(n).loopStart=e},c.wbg.__wbg_setloopEnd_b83c2563fe5be665=function(n,e){f(n).loopEnd=e},c.wbg.__wbg_setonended_6ce8715add45953e=function(n,e){f(n).onended=f(e)},c.wbg.__wbg_start_551bedf1ecfdc0e2=function(){return I((function(n){f(n).start()}),arguments)},c.wbg.__wbg_start_885262ec460f3ef3=function(){return I((function(n,e,_){f(n).start(e,_)}),arguments)},c.wbg.__wbg_stop_c6532de1aeb2e765=function(){return I((function(n,e){f(n).stop(e)}),arguments)},c.wbg.__wbg_outputBuffer_3f27dc3af0998ec9=function(){return I((function(n){return d(f(n).outputBuffer)}),arguments)},c.wbg.__wbg_now_559193109055ebad=function(n){return f(n).now()},c.wbg.__wbg_pointerId_9302f0e125f0b48e=function(n){return f(n).pointerId},c.wbg.__wbg_currentTarget_65309531208d5df3=function(n){var e=f(n).currentTarget;return v(e)?0:d(e)},c.wbg.__wbg_preventDefault_9866c9fd51eecfb6=function(n){f(n).preventDefault()},c.wbg.__wbg_setsrc_3eb04f553f8335c7=function(n,e,_){f(n).src=w(e,_)},c.wbg.__wbg_new_265b3e027a3022bd=function(){return I((function(){return d(new Image)}),arguments)},c.wbg.__wbg_key_10dcaa4bb6d5449f=function(n,e){var _=p(f(e).key,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_code_1c2fd251f38b398a=function(n,e){var _=p(f(e).code,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_newwithstrandinit_9b0fa00478c37287=function(){return I((function(n,e,_){return d(new Request(w(n,e),f(_)))}),arguments)},c.wbg.__wbg_setonaudioprocess_4334efc34353560d=function(n,e){f(n).onaudioprocess=f(e)},c.wbg.__wbg_body_78ae4fd43b446013=function(n){var e=f(n).body;return v(e)?0:d(e)},c.wbg.__wbg_createElement_86c152812a141a62=function(){return I((function(n,e,_){return d(f(n).createElement(w(e,_)))}),arguments)},c.wbg.__wbg_createElementNS_ae12b8681c3957a3=function(){return I((function(n,e,_,t,r){return d(f(n).createElementNS(0===e?void 0:w(e,_),w(t,r)))}),arguments)},c.wbg.__wbg_setid_681bb5a14c3d5850=function(n,e,_){f(n).id=w(e,_)},c.wbg.__wbg_clientWidth_4d9e01af2b5b9f21=function(n){return f(n).clientWidth},c.wbg.__wbg_clientHeight_87c209f0cacf2e97=function(n){return f(n).clientHeight},c.wbg.__wbg_querySelector_dc71838110c91f39=function(){return I((function(n,e,_){var t=f(n).querySelector(w(e,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_releasePointerCapture_326599f769b49681=function(){return I((function(n,e){f(n).releasePointerCapture(e)}),arguments)},c.wbg.__wbg_setAttribute_1b533bf07966de55=function(){return I((function(n,e,_,t,r){f(n).setAttribute(w(e,_),w(t,r))}),arguments)},c.wbg.__wbg_setAttributeNS_92db6decf2ec8400=function(){return I((function(n,e,_,t,r,b,c){f(n).setAttributeNS(0===e?void 0:w(e,_),w(t,r),w(b,c))}),arguments)},c.wbg.__wbg_setPointerCapture_bd3244d9f008798f=function(){return I((function(n,e){f(n).setPointerCapture(e)}),arguments)},c.wbg.__wbg_remove_c63cabc94a77cacb=function(n){f(n).remove()},c.wbg.__wbg_instanceof_WebGlRenderingContext_101b938bec1286a3=function(n){return f(n)instanceof WebGLRenderingContext},c.wbg.__wbg_drawingBufferWidth_8b0c2b31d9d6eee7=function(n){return f(n).drawingBufferWidth},c.wbg.__wbg_drawingBufferHeight_f62678018bab567c=function(n){return f(n).drawingBufferHeight},c.wbg.__wbg_bufferData_2f9be23b37e5a1a4=function(n,e,_,t,r){f(n).bufferData(e>>>0,j(_,t),r>>>0)},c.wbg.__wbg_texImage2D_712c56fe5a9825ed=function(){return I((function(n,e,_,t,r,b,c,u,o,a,i){f(n).texImage2D(e>>>0,_,t,r,b,c,u>>>0,o>>>0,0===a?void 0:j(a,i))}),arguments)},c.wbg.__wbg_uniform1fv_02b26dddaa3ea984=function(n,e,_,t){f(n).uniform1fv(f(e),W(_,t))},c.wbg.__wbg_uniform4fv_ca394beb323215c6=function(n,e,_,t){f(n).uniform4fv(f(e),W(_,t))},c.wbg.__wbg_uniformMatrix3fv_340429fe0911bc6f=function(n,e,_,t,r){f(n).uniformMatrix3fv(f(e),0!==_,W(t,r))},c.wbg.__wbg_uniformMatrix4fv_a92133b68236ac68=function(n,e,_,t,r){f(n).uniformMatrix4fv(f(e),0!==_,W(t,r))},c.wbg.__wbg_activeTexture_b34aca0c2110966c=function(n,e){f(n).activeTexture(e>>>0)},c.wbg.__wbg_attachShader_eaa824fd5b37a770=function(n,e,_){f(n).attachShader(f(e),f(_))},c.wbg.__wbg_bindBuffer_2ca7e1c18819ecb2=function(n,e,_){f(n).bindBuffer(e>>>0,f(_))},c.wbg.__wbg_bindFramebuffer_c9f468afa9d42a5f=function(n,e,_){f(n).bindFramebuffer(e>>>0,f(_))},c.wbg.__wbg_bindRenderbuffer_7b2b49f71f3eeef9=function(n,e,_){f(n).bindRenderbuffer(e>>>0,f(_))},c.wbg.__wbg_bindTexture_edd827f3dba6038e=function(n,e,_){f(n).bindTexture(e>>>0,f(_))},c.wbg.__wbg_blendFunc_d5ab9f0ff5a40a48=function(n,e,_){f(n).blendFunc(e>>>0,_>>>0)},c.wbg.__wbg_clear_da26620d46f0a11a=function(n,e){f(n).clear(e>>>0)},c.wbg.__wbg_clearColor_cbf22f8faa5a52c1=function(n,e,_,t,r){f(n).clearColor(e,_,t,r)},c.wbg.__wbg_colorMask_035708eb94fe9af8=function(n,e,_,t,r){f(n).colorMask(0!==e,0!==_,0!==t,0!==r)},c.wbg.__wbg_compileShader_8fb70a472f32552c=function(n,e){f(n).compileShader(f(e))},c.wbg.__wbg_createBuffer_4802e2f0e1b1acdf=function(n){var e=f(n).createBuffer();return v(e)?0:d(e)},c.wbg.__wbg_createProgram_b1d94f4c7554d3a1=function(n){var e=f(n).createProgram();return v(e)?0:d(e)},c.wbg.__wbg_createShader_da09e167692f0dc7=function(n,e){var _=f(n).createShader(e>>>0);return v(_)?0:d(_)},c.wbg.__wbg_createTexture_bafc7c08393ae59d=function(n){var e=f(n).createTexture();return v(e)?0:d(e)},c.wbg.__wbg_disable_b07faddb7d04349f=function(n,e){f(n).disable(e>>>0)},c.wbg.__wbg_disableVertexAttribArray_c9fdabd5f12b0539=function(n,e){f(n).disableVertexAttribArray(e>>>0)},c.wbg.__wbg_drawElements_8e8af4b6757fedce=function(n,e,_,t,r){f(n).drawElements(e>>>0,_,t>>>0,r)},c.wbg.__wbg_enable_d3d210aeb08eff52=function(n,e){f(n).enable(e>>>0)},c.wbg.__wbg_enableVertexAttribArray_d539e547495bea44=function(n,e){f(n).enableVertexAttribArray(e>>>0)},c.wbg.__wbg_getAttribLocation_706a0beabcdaebcf=function(n,e,_,t){return f(n).getAttribLocation(f(e),w(_,t))},c.wbg.__wbg_getExtension_045789240c50a108=function(){return I((function(n,e,_){var t=f(n).getExtension(w(e,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_getParameter_6412bd2d0602696d=function(){return I((function(n,e){return d(f(n).getParameter(e>>>0))}),arguments)},c.wbg.__wbg_getProgramInfoLog_b60e82d52c200cbd=function(n,e,_){var t=f(e).getProgramInfoLog(f(_)),r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_getProgramParameter_229c193895936bbe=function(n,e,_){return d(f(n).getProgramParameter(f(e),_>>>0))},c.wbg.__wbg_getShaderInfoLog_ba51160c01b98360=function(n,e,_){var t=f(e).getShaderInfoLog(f(_)),r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_getUniformLocation_c3b3570b4632cc5c=function(n,e,_,t){var r=f(n).getUniformLocation(f(e),w(_,t));return v(r)?0:d(r)},c.wbg.__wbg_linkProgram_7080c84b0233cea2=function(n,e){f(n).linkProgram(f(e))},c.wbg.__wbg_pixelStorei_3cd96723ae22a5c6=function(n,e,_){f(n).pixelStorei(e>>>0,_)},c.wbg.__wbg_shaderSource_67b991301db003d0=function(n,e,_,t){f(n).shaderSource(f(e),w(_,t))},c.wbg.__wbg_stencilFunc_bbc24750c2db9a15=function(n,e,_,t){f(n).stencilFunc(e>>>0,_,t>>>0)},c.wbg.__wbg_stencilMask_0ec7662710f598d4=function(n,e){f(n).stencilMask(e>>>0)},c.wbg.__wbg_stencilOp_fd4ec71a7de6ac85=function(n,e,_,t){f(n).stencilOp(e>>>0,_>>>0,t>>>0)},c.wbg.__wbg_texParameteri_bd724f6a5ad0cbbc=function(n,e,_,t){f(n).texParameteri(e>>>0,_>>>0,t)},c.wbg.__wbg_uniform1f_b9cff1cea32def5a=function(n,e,_){f(n).uniform1f(f(e),_)},c.wbg.__wbg_uniform1i_0811c29c0eebe191=function(n,e,_){f(n).uniform1i(f(e),_)},c.wbg.__wbg_useProgram_b72b0bfcbc720fa9=function(n,e){f(n).useProgram(f(e))},c.wbg.__wbg_vertexAttribPointer_b5cb524c6fe9eec8=function(n,e,_,t,r,b,c){f(n).vertexAttribPointer(e>>>0,_,t>>>0,0!==r,b,c)},c.wbg.__wbg_viewport_89af3aceb7036a2c=function(n,e,_,t,r){f(n).viewport(e,_,t,r)},c.wbg.__wbg_debug_675b0ecb65722d2a=function(n){console.debug(f(n))},c.wbg.__wbg_error_cc38ce2b4b661e1d=function(n){console.error(f(n))},c.wbg.__wbg_info_e0c9813e6fd3bdc1=function(n){console.info(f(n))},c.wbg.__wbg_log_3445347661d4505e=function(n){console.log(f(n))},c.wbg.__wbg_warn_5ec7c7c02d0b3841=function(n){console.warn(f(n))},c.wbg.__wbg_style_c88e323890d3a091=function(n){return d(f(n).style)},c.wbg.__wbg_instanceof_CanvasRenderingContext2d_3abbe7ec7af32cae=function(n){return f(n)instanceof CanvasRenderingContext2D},c.wbg.__wbg_setglobalAlpha_27b14e5f5b7567ec=function(n,e){f(n).globalAlpha=e},c.wbg.__wbg_setglobalCompositeOperation_c650e9805cc6316f=function(){return I((function(n,e,_){f(n).globalCompositeOperation=w(e,_)}),arguments)},c.wbg.__wbg_setstrokeStyle_947bd4c26c94673f=function(n,e){f(n).strokeStyle=f(e)},c.wbg.__wbg_setfillStyle_528a6a267c863ae7=function(n,e){f(n).fillStyle=f(e)},c.wbg.__wbg_setfilter_3d48443a4a710be8=function(n,e,_){f(n).filter=w(e,_)},c.wbg.__wbg_setimageSmoothingEnabled_92d14a22667eae22=function(n,e){f(n).imageSmoothingEnabled=0!==e},c.wbg.__wbg_setlineWidth_3221b7818c00ed48=function(n,e){f(n).lineWidth=e},c.wbg.__wbg_setlineCap_5284a001e1efcecd=function(n,e,_){f(n).lineCap=w(e,_)},c.wbg.__wbg_setlineJoin_a6af4e7d24a3a67e=function(n,e,_){f(n).lineJoin=w(e,_)},c.wbg.__wbg_setmiterLimit_9fa0d72650341727=function(n,e){f(n).miterLimit=e},c.wbg.__wbg_drawImage_5e8203c5b210fce3=function(){return I((function(n,e,_,t){f(n).drawImage(f(e),_,t)}),arguments)},c.wbg.__wbg_drawImage_9492b361f8b31282=function(){return I((function(n,e,_,t){f(n).drawImage(f(e),_,t)}),arguments)},c.wbg.__wbg_fill_75988ff43d6e3499=function(n,e,_){f(n).fill(f(e),o(_))},c.wbg.__wbg_stroke_d91ac76d5b1eb792=function(n,e){f(n).stroke(f(e))},c.wbg.__wbg_createPattern_1d0b3c3750c8448c=function(){return I((function(n,e,_,t){var r=f(n).createPattern(f(e),w(_,t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_createPattern_b824d17776fa1f1e=function(){return I((function(n,e,_,t){var r=f(n).createPattern(f(e),w(_,t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_getImageData_9ffc3df78ca3dbc9=function(){return I((function(n,e,_,t,r){return d(f(n).getImageData(e,_,t,r))}),arguments)},c.wbg.__wbg_putImageData_b9544b271e569392=function(){return I((function(n,e,_,t){f(n).putImageData(f(e),_,t)}),arguments)},c.wbg.__wbg_clearRect_07caefec3496ced1=function(n,e,_,t,r){f(n).clearRect(e,_,t,r)},c.wbg.__wbg_fillRect_10e42dc7a5e8cccd=function(n,e,_,t,r){f(n).fillRect(e,_,t,r)},c.wbg.__wbg_resetTransform_26f86c1cc48a4fae=function(){return I((function(n){f(n).resetTransform()}),arguments)},c.wbg.__wbg_setTransform_8ffd6a5c85396174=function(){return I((function(n,e,_,t,r,b,c){f(n).setTransform(e,_,t,r,b,c)}),arguments)},c.wbg.__wbg_newwithbuffersourcesequenceandoptions_2b60b470c130cb1a=function(){return I((function(n,e){return d(new Blob(f(n),f(e)))}),arguments)},c.wbg.__wbg_addEventListener_52721772cc0a7f30=function(){return I((function(n,e,_,t){f(n).addEventListener(w(e,_),f(t))}),arguments)},c.wbg.__wbg_addEventListener_09e11fbf8b4b719b=function(){return I((function(n,e,_,t,r){f(n).addEventListener(w(e,_),f(t),f(r))}),arguments)},c.wbg.__wbg_addEventListener_0ed522a6d9900d5d=function(){return I((function(n,e,_,t,r){f(n).addEventListener(w(e,_),f(t),0!==r)}),arguments)},c.wbg.__wbg_removeEventListener_f2adc9b2b318de99=function(){return I((function(n,e,_,t){f(n).removeEventListener(w(e,_),f(t))}),arguments)},c.wbg.__wbg_removeEventListener_24d5a7c12c3f3c39=function(){return I((function(n,e,_,t,r){f(n).removeEventListener(w(e,_),f(t),0!==r)}),arguments)},c.wbg.__wbg_instanceof_HtmlCanvasElement_25d964a0dde6717e=function(n){return f(n)instanceof HTMLCanvasElement},c.wbg.__wbg_width_555f63ab09ba7d3f=function(n){return f(n).width},c.wbg.__wbg_setwidth_c1a7061891b71f25=function(n,e){f(n).width=e>>>0},c.wbg.__wbg_height_7153faec70fbaf7b=function(n){return f(n).height},c.wbg.__wbg_setheight_88894b05710ff752=function(n,e){f(n).height=e>>>0},c.wbg.__wbg_getContext_f701d0231ae22393=function(){return I((function(n,e,_){var t=f(n).getContext(w(e,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_getContext_3e21e21280a332fc=function(){return I((function(n,e,_,t){var r=f(n).getContext(w(e,_),f(t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_width_16bd64d09cbf5661=function(n){return f(n).width},c.wbg.__wbg_height_368bb86c37d51bc9=function(n){return f(n).height},c.wbg.__wbg_data_1ae7496c58caf755=function(n,e){var _=function(n,e){const _=e(1*n.length);return g().set(n,_/1),s=n.length,_}(f(e).data,b.__wbindgen_malloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_newwithu8clampedarray_45da2809f7882d12=function(){return I((function(n,e,_){return d(new ImageData(q(n,e),_>>>0))}),arguments)},c.wbg.__wbg_userAgent_bdd46cceef222f52=function(){return I((function(n,e){var _=p(f(e).userAgent,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_}),arguments)},c.wbg.__wbg_getRandomValues_98117e9a7e993920=function(){return I((function(n,e){f(n).getRandomValues(f(e))}),arguments)},c.wbg.__wbg_randomFillSync_64cc7d048f228ca8=function(){return I((function(n,e,_){f(n).randomFillSync(j(e,_))}),arguments)},c.wbg.__wbg_process_2f24d6544ea7b200=function(n){return d(f(n).process)},c.wbg.__wbindgen_is_object=function(n){const e=f(n);return"object"==typeof e&&null!==e},c.wbg.__wbg_versions_6164651e75405d4a=function(n){return d(f(n).versions)},c.wbg.__wbg_node_4b517d861cbcb3bc=function(n){return d(f(n).node)},c.wbg.__wbindgen_is_string=function(n){return"string"==typeof f(n)},c.wbg.__wbg_modulerequire_3440a4bcf44437db=function(){return I((function(n,e){return d(a.require(w(n,e)))}),arguments)},c.wbg.__wbg_crypto_98fc271021c7d2ad=function(n){return d(f(n).crypto)},c.wbg.__wbg_msCrypto_a2cdb043d2bfe57f=function(n){return d(f(n).msCrypto)},c.wbg.__wbg_get_67189fe0b323d288=function(n,e){return d(f(n)[e>>>0])},c.wbg.__wbg_new_949bbc1147195c4e=function(){return d(new Array)},c.wbg.__wbg_newnoargs_be86524d73f67598=function(n,e){return d(new Function(w(n,e)))},c.wbg.__wbg_next_7720502039b96d00=function(){return I((function(n){return d(f(n).next())}),arguments)},c.wbg.__wbg_done_b06cf0578e89ff68=function(n){return f(n).done},c.wbg.__wbg_value_e74a542443d92451=function(n){return d(f(n).value)},c.wbg.__wbg_get_4d0f21c2f823742e=function(){return I((function(n,e){return d(Reflect.get(f(n),f(e)))}),arguments)},c.wbg.__wbg_call_888d259a5fefc347=function(){return I((function(n,e){return d(f(n).call(f(e)))}),arguments)},c.wbg.__wbg_new_0b83d3df67ecb33e=function(){return d(new Object)},c.wbg.__wbg_isArray_eb7ad55f2da67dde=function(n){return Array.isArray(f(n))},c.wbg.__wbg_of_db9e1b8e0a7ed9bc=function(n,e){return d(Array.of(f(n),f(e)))},c.wbg.__wbg_push_284486ca27c6aa8b=function(n,e){return f(n).push(f(e))},c.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3=function(n){return f(n)instanceof ArrayBuffer},c.wbg.__wbg_new_3e02a228090b2e72=function(n){return d(new ArrayBuffer(n>>>0))},c.wbg.__wbg_slice_dcc477bca8fe38b1=function(n,e,_){return d(f(n).slice(e>>>0,_>>>0))},c.wbg.__wbg_values_364ae56c608e6824=function(n){return d(f(n).values())},c.wbg.__wbg_apply_7cfa6ebf144990a5=function(){return I((function(n,e,_){return d(f(n).apply(f(e),f(_)))}),arguments)},c.wbg.__wbg_call_346669c262382ad7=function(){return I((function(n,e,_){return d(f(n).call(f(e),f(_)))}),arguments)},c.wbg.__wbg_getTime_10d33f4f2959e5dd=function(n){return f(n).getTime()},c.wbg.__wbg_getTimezoneOffset_d3e5a22a1b7fb1d8=function(n){return f(n).getTimezoneOffset()},c.wbg.__wbg_new0_fd3a3a290b25cdac=function(){return d(new Date)},c.wbg.__wbg_instanceof_Object_66786225e0dbc8ba=function(n){return f(n)instanceof Object},c.wbg.__wbg_entries_aadf9c3f38203a12=function(n){return d(Object.entries(f(n)))},c.wbg.__wbg_fromEntries_164ebf0f69983a8e=function(){return I((function(n){return d(Object.fromEntries(f(n)))}),arguments)},c.wbg.__wbg_is_0f5efc7977a2c50b=function(n,e){return Object.is(f(n),f(e))},c.wbg.__wbg_new_b1d61b5687f5e73a=function(n,e){try{var _={a:n,b:e},t=new Promise(((n,e)=>{const t=_.a;_.a=0;try{return function(n,e,_,t){b.wasm_bindgen__convert__closures__invoke2_mut__hd3d1d0c3fccd6861(n,e,d(_),d(t))}(t,_.b,n,e)}finally{_.a=t}}));return d(t)}finally{_.a=_.b=0}},c.wbg.__wbg_resolve_d23068002f584f22=function(n){return d(Promise.resolve(f(n)))},c.wbg.__wbg_then_2fcac196782070cc=function(n,e){return d(f(n).then(f(e)))},c.wbg.__wbg_then_8c2d62e8ae5978f7=function(n,e,_){return d(f(n).then(f(e),f(_)))},c.wbg.__wbg_self_c6fbdfc2918d5e58=function(){return I((function(){return d(self.self)}),arguments)},c.wbg.__wbg_window_baec038b5ab35c54=function(){return I((function(){return d(window.window)}),arguments)},c.wbg.__wbg_globalThis_3f735a5746d41fbd=function(){return I((function(){return d(globalThis.globalThis)}),arguments)},c.wbg.__wbg_global_1bc0b39582740e95=function(){return I((function(){return d(_.g.global)}),arguments)},c.wbg.__wbg_buffer_397eaa4d72ee94dd=function(n){return d(f(n).buffer)},c.wbg.__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff=function(n,e,_){return d(new Uint8Array(f(n),e>>>0,_>>>0))},c.wbg.__wbg_new_a7ce447f15ff496f=function(n){return d(new Uint8Array(f(n)))},c.wbg.__wbg_set_969ad0a60e51d320=function(n,e,_){f(n).set(f(e),_>>>0)},c.wbg.__wbg_length_1eb8fc608a0d4cdb=function(n){return f(n).length},c.wbg.__wbg_newwithlength_929232475839a482=function(n){return d(new Uint8Array(n>>>0))},c.wbg.__wbg_fill_cd6951964c67ad3a=function(n,e,_,t){return d(f(n).fill(e,_>>>0,t>>>0))},c.wbg.__wbg_buffer_facf0398a281c85b=function(n){return d(f(n).buffer)},c.wbg.__wbg_subarray_8b658422a224f479=function(n,e,_){return d(f(n).subarray(e>>>0,_>>>0))},c.wbg.__wbg_byteLength_3e250b41a8915757=function(n){return f(n).byteLength},c.wbg.__wbg_byteOffset_4204ecb24a6e5df9=function(n){return f(n).byteOffset},c.wbg.__wbg_ownKeys_f3f1916b5564918f=function(){return I((function(n){return d(Reflect.ownKeys(f(n)))}),arguments)},c.wbg.__wbg_set_82a4e8a85e31ac42=function(){return I((function(n,e,_){return Reflect.set(f(n),f(e),f(_))}),arguments)},c.wbg.__wbindgen_debug_string=function(n,e){var _=p(A(f(e)),b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbindgen_throw=function(n,e){throw new Error(w(n,e))},c.wbg.__wbindgen_rethrow=function(n){throw o(n)},c.wbg.__wbindgen_memory=function(){return d(b.memory)},c.wbg.__wbindgen_closure_wrapper418=function(n,e,_){return d(S(n,e,3,C))},c.wbg.__wbindgen_closure_wrapper420=function(n,e,_){return d(S(n,e,3,T))},c.wbg.__wbindgen_closure_wrapper422=function(n,e,_){return d(S(n,e,3,R))},c.wbg.__wbindgen_closure_wrapper424=function(n,e,_){return d(S(n,e,3,E))},c.wbg.__wbindgen_closure_wrapper426=function(n,e,_){return d(S(n,e,3,F))},c.wbg.__wbindgen_closure_wrapper428=function(n,e,_){return d(S(n,e,3,P))},c.wbg.__wbindgen_closure_wrapper430=function(n,e,_){return d(S(n,e,3,k))},c.wbg.__wbindgen_closure_wrapper432=function(n,e,_){return d(S(n,e,3,M))},c.wbg.__wbindgen_closure_wrapper1847=function(n,e,_){return d(S(n,e,906,O))},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:u,module:a}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const _=await n.arrayBuffer();return await WebAssembly.instantiate(_,e)}{const _=await WebAssembly.instantiate(n,e);return _ instanceof WebAssembly.Instance?{instance:_,module:n}:_}}(await e,c);return b=u.exports,n.__wbindgen_wasm_module=a,b}},285:(n,e,_)=>{n.exports=_.p+"f2c3a62f45168abd7077.wasm"}}]);
//# sourceMappingURL=core.ruffle.0342f13b023d3a8f14c5.js.map