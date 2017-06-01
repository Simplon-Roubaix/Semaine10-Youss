
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget,function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),S=d+f+i(this,"marginRight")+w.width,D=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:S,collisionHeight:D,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete});
(function($) {
var _rootUrl = '/', _serverUrl = _rootUrl + 'ezjscore/', _seperator = '@SEPERATOR$',
_prefUrl = _rootUrl + 'user/preferences';
if ( window.XMLHttpRequest && window.ActiveXObject )
$.ajaxSettings.xhr = function() { try { return new window.ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {} };
function _ez( callArgs, post, callBack )
{
callArgs = callArgs.join !== undefined ? callArgs.join( _seperator ) : callArgs;
var url = _serverUrl + 'call/';
if ( post )
{
var _token = '', _tokenNode = document.getElementById('ezxform_token_js');
if ( _tokenNode ) _token = _tokenNode.getAttribute('title');
if ( post.join !== undefined )// support serializeArray() format
{
post.push( { 'name': 'ezjscServer_function_arguments', 'value': callArgs } );
post.push( { 'name': 'ezxform_token', 'value': _token } );
}
else if ( typeof(post) === 'string' )// string
{
post += ( post ? '&' : '' ) + 'ezjscServer_function_arguments=' + callArgs + '&ezxform_token=' + _token;
}
else // object
{
post['ezjscServer_function_arguments'] = callArgs;
post['ezxform_token'] = _token;
}
return $.post( url, post, callBack, 'json' );
}
return $.get( url + encodeURIComponent( callArgs ), {}, callBack, 'json' );
};
_ez.url = _serverUrl;
_ez.root_url = _rootUrl;
_ez.seperator = _seperator;
$.ez = _ez;
$.ez.setPreference = function( name, value )
{
var param = {'Function': 'set_and_exit', 'Key': name, 'Value': value};
_tokenNode = document.getElementById( 'ezxform_token_js' );
if ( _tokenNode )
param.ezxform_token = _tokenNode.getAttribute( 'title' );
return $.post( _prefUrl, param );
};
function _ezLoad( callArgs, post, selector, callBack )
{
callArgs = callArgs.join !== undefined ? callArgs.join( _seperator ) : callArgs;
var url = _serverUrl + 'call/';
if ( post )
{
post['ezjscServer_function_arguments'] = callArgs;
post['ezxform_token'] = jQuery('#ezxform_token_js').attr('title');
}
else
url += encodeURIComponent( callArgs );
return this.load( url + ( selector ? ' ' + selector : '' ), post, callBack );
};
$.fn.ez = _ezLoad;
})(jQuery);
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
gaProperty = $('#cnil_banner_consent').attr( 'data-site-id' );
var cnilBannerAskConsentString = '<div class="wrap-center alert alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span class="sr-only">Fermer</span></button>En poursuivant votre navigation sur ce site, vous acceptez l\'utilisation de cookies pour réaliser des statistiques de visites. Pour s\'opposer à ce dépôt, <a href="javascript:gaOptout()">cliquer ici</a>.</div>';
var cnilBannerOptoutString = '<div class="alert alert-info alert-dismissible text-center" style="display: none" role="alert"><button type="button" class="close" data-dismiss="alert"><span class="sr-only">Fermer</span></button>Votre opposition au dépôt des cookies a bien été prise en compte.</div>';
$(document).ready( function() {
$('#cnil_banner_consent').html( cnilBannerAskConsentString );
});
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf('hasConsent=false') > -1)
window[disableStr] = true;
function getCookieExpireDate()
{
var cookieTimeout = 34214400000;
var date = new Date();
date.setTime(date.getTime()+cookieTimeout);
var expires = "; expires="+date.toGMTString();
return expires;
}
function askConsent()
{
$('#cnil_banner_consent').show();
}
function getCookie(NomDuCookie)
{
if (document.cookie.length > 0)
{
begin = document.cookie.indexOf(NomDuCookie+"=");
if (begin != -1)
{
begin += NomDuCookie.length+1;
end = document.cookie.indexOf(";", begin);
if (end == -1)
end = document.cookie.length;
return unescape(document.cookie.substring(begin, end));
}
}
return null;
}
function delCookie(name )
{
var path = ";path=" + "/";
var expiration = "Thu, 01-Jan-1970 00:00:01 GMT";
var domain=";domain=" + "."+document.location.hostname;
document.cookie = name + "=" + path + domain + ";expires=" + expiration;
domain=document.location.hostname;
domain=";domain=" + "."+domain.substring(domain.lastIndexOf(".", domain.lastIndexOf(".") - 1) + 1);
document.cookie = name + "=" + path + domain + ";expires=" + expiration;
}
function deleteAnalyticsCookies()
{
var cookieNames = ["__utma","__utmb","__utmc","__utmz","_ga"]
for (var i=0; i<cookieNames.length; i++)
delCookie(cookieNames[i])
}
function gaOptout() {
document.cookie = disableStr + '=true;'+ getCookieExpireDate() +' ; path=/';
document.cookie = 'hasConsent=false;'+ getCookieExpireDate() +' ; path=/';
$('#cnil_banner_consent div').fadeOut( function() {
$('#cnil_banner_consent').html( cnilBannerOptoutString );
$('#cnil_banner_consent div').fadeIn();
});
window[disableStr] = true;
deleteAnalyticsCookies();
}
var consentCookie =  getCookie('hasConsent');
if (consentCookie == null)
{
var referrer_host = document.referrer.split('/')[2];
if ( referrer_host != document.location.hostname )
{
window[disableStr] = true;
window[disableStr] = true;
$(document).ready( function() {
askConsent();
});
}
else
document.cookie = 'hasConsent=true; '+ getCookieExpireDate() +' ; path=/';
}
$(document).ready( function() {
$( '#skipnavigation ul li a' ).focus( function() {
$( '#skipnavigation' ).removeClass( 'sr-only' );
}).blur( function() {
$( '#skipnavigation' ).addClass( 'sr-only' );
});
});
;(function( $ ){
'use strict';
$.fn.fitVids = function( options ) {
var settings = {
customSelector: null,
ignore: null
};
if(!document.getElementById('fit-vids-style')) {
var head = document.head || document.getElementsByTagName('head')[0];
var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
var div = document.createElement("div");
div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
head.appendChild(div.childNodes[1]);
}
if ( options ) {
$.extend( settings, options );
}
return this.each(function(){
var selectors = [
'iframe[src*="player.vimeo.com"]',
'iframe[src*="youtube.com"]',
'iframe[src*="youtube-nocookie.com"]',
'iframe[src*="kickstarter.com"][src*="video.html"]',
'object',
'embed'
];
if (settings.customSelector) {
selectors.push(settings.customSelector);
}
var ignoreList = '.fitvidsignore';
if(settings.ignore) {
ignoreList = ignoreList + ', ' + settings.ignore;
}
var $allVideos = $(this).find(selectors.join(','));
$allVideos = $allVideos.not('object object'); // SwfObj conflict patch
$allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.
$allVideos.each(function(count){
var $this = $(this);
if($this.parents(ignoreList).length > 0) {
return; // Disable FitVids on this video.
}
if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
{
$this.attr('height', 9);
$this.attr('width', 16);
}
var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
aspectRatio = height / width;
if(!$this.attr('id')){
var videoID = 'fitvid' + count;
$this.attr('id', videoID);
}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
$this.removeAttr('height').removeAttr('width');
});
});
};
})( window.jQuery || window.Zepto );
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script, .dotdotdot-keep";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),!l||f.is(d.after)||f.find(d.after).length||e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),n.addClass("is-truncated"),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"　",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),r.children().each(function(){t(this).toggle().toggle()}),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){switch(o.removeClass("is-truncated"),e.preventDefault(),e.stopPropagation(),typeof l.height){case"number":l.maxHeight=l.height;break;case"function":l.maxHeight=l.height.call(o[0]);break;default:l.maxHeight=f(o)}l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||"nodeType"in d&&1===d.nodeType)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},100))})}else c=d(o),u=setInterval(function(){if(o.is(":visible")){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=t)}},500);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);
(function( factory ) {
if ( typeof define === "function" && define.amd ) {
define([ "jquery" ], factory );
} else {
factory( jQuery );
}
}(function( $ ) {
$.ui = $.ui || {};
$.extend( $.ui, {
version: "1.11.4",
keyCode: {
BACKSPACE: 8,
COMMA: 188,
DELETE: 46,
DOWN: 40,
END: 35,
ENTER: 13,
ESCAPE: 27,
HOME: 36,
LEFT: 37,
PAGE_DOWN: 34,
PAGE_UP: 33,
PERIOD: 190,
RIGHT: 39,
SPACE: 32,
TAB: 9,
UP: 38
}
});
$.fn.extend({
scrollParent: function( includeHidden ) {
var position = this.css( "position" ),
excludeStaticParent = position === "absolute",
overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
scrollParent = this.parents().filter( function() {
var parent = $( this );
if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
return false;
}
return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
}).eq( 0 );
return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
},
uniqueId: (function() {
var uuid = 0;
return function() {
return this.each(function() {
if ( !this.id ) {
this.id = "ui-id-" + ( ++uuid );
}
});
};
})(),
removeUniqueId: function() {
return this.each(function() {
if ( /^ui-id-\d+$/.test( this.id ) ) {
$( this ).removeAttr( "id" );
}
});
}
});
function focusable( element, isTabIndexNotNaN ) {
var map, mapName, img,
nodeName = element.nodeName.toLowerCase();
if ( "area" === nodeName ) {
map = element.parentNode;
mapName = map.name;
if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
return false;
}
img = $( "img[usemap='#" + mapName + "']" )[ 0 ];
return !!img && visible( img );
}
return ( /^(input|select|textarea|button|object)$/.test( nodeName ) ?
!element.disabled :
"a" === nodeName ?
element.href || isTabIndexNotNaN :
isTabIndexNotNaN) &&
visible( element );
}
function visible( element ) {
return $.expr.filters.visible( element ) &&
!$( element ).parents().addBack().filter(function() {
return $.css( this, "visibility" ) === "hidden";
}).length;
}
$.extend( $.expr[ ":" ], {
data: $.expr.createPseudo ?
$.expr.createPseudo(function( dataName ) {
return function( elem ) {
return !!$.data( elem, dataName );
};
}) :
function( elem, i, match ) {
return !!$.data( elem, match[ 3 ] );
},
focusable: function( element ) {
return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
},
tabbable: function( element ) {
var tabIndex = $.attr( element, "tabindex" ),
isTabIndexNaN = isNaN( tabIndex );
return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
}
});
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
$.each( [ "Width", "Height" ], function( i, name ) {
var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
type = name.toLowerCase(),
orig = {
innerWidth: $.fn.innerWidth,
innerHeight: $.fn.innerHeight,
outerWidth: $.fn.outerWidth,
outerHeight: $.fn.outerHeight
};
function reduce( elem, size, border, margin ) {
$.each( side, function() {
size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
if ( border ) {
size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
}
if ( margin ) {
size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
}
});
return size;
}
$.fn[ "inner" + name ] = function( size ) {
if ( size === undefined ) {
return orig[ "inner" + name ].call( this );
}
return this.each(function() {
$( this ).css( type, reduce( this, size ) + "px" );
});
};
$.fn[ "outer" + name] = function( size, margin ) {
if ( typeof size !== "number" ) {
return orig[ "outer" + name ].call( this, size );
}
return this.each(function() {
$( this).css( type, reduce( this, size, true, margin ) + "px" );
});
};
});
}
if ( !$.fn.addBack ) {
$.fn.addBack = function( selector ) {
return this.add( selector == null ?
this.prevObject : this.prevObject.filter( selector )
);
};
}
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
$.fn.removeData = (function( removeData ) {
return function( key ) {
if ( arguments.length ) {
return removeData.call( this, $.camelCase( key ) );
} else {
return removeData.call( this );
}
};
})( $.fn.removeData );
}
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
$.fn.extend({
focus: (function( orig ) {
return function( delay, fn ) {
return typeof delay === "number" ?
this.each(function() {
var elem = this;
setTimeout(function() {
$( elem ).focus();
if ( fn ) {
fn.call( elem );
}
}, delay );
}) :
orig.apply( this, arguments );
};
})( $.fn.focus ),
disableSelection: (function() {
var eventType = "onselectstart" in document.createElement( "div" ) ?
"selectstart" :
"mousedown";
return function() {
return this.bind( eventType + ".ui-disableSelection", function( event ) {
event.preventDefault();
});
};
})(),
enableSelection: function() {
return this.unbind( ".ui-disableSelection" );
},
zIndex: function( zIndex ) {
if ( zIndex !== undefined ) {
return this.css( "zIndex", zIndex );
}
if ( this.length ) {
var elem = $( this[ 0 ] ), position, value;
while ( elem.length && elem[ 0 ] !== document ) {
position = elem.css( "position" );
if ( position === "absolute" || position === "relative" || position === "fixed" ) {
value = parseInt( elem.css( "zIndex" ), 10 );
if ( !isNaN( value ) && value !== 0 ) {
return value;
}
}
elem = elem.parent();
}
}
return 0;
}
});
$.ui.plugin = {
add: function( module, option, set ) {
var i,
proto = $.ui[ module ].prototype;
for ( i in set ) {
proto.plugins[ i ] = proto.plugins[ i ] || [];
proto.plugins[ i ].push( [ option, set[ i ] ] );
}
},
call: function( instance, name, args, allowDisconnected ) {
var i,
set = instance.plugins[ name ];
if ( !set ) {
return;
}
if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
return;
}
for ( i = 0; i < set.length; i++ ) {
if ( instance.options[ set[ i ][ 0 ] ] ) {
set[ i ][ 1 ].apply( instance.element, args );
}
}
}
};
var widget_uuid = 0,
widget_slice = Array.prototype.slice;
$.cleanData = (function( orig ) {
return function( elems ) {
var events, elem, i;
for ( i = 0; (elem = elems[i]) != null; i++ ) {
try {
events = $._data( elem, "events" );
if ( events && events.remove ) {
$( elem ).triggerHandler( "remove" );
}
} catch ( e ) {}
}
orig( elems );
};
})( $.cleanData );
$.widget = function( name, base, prototype ) {
var fullName, existingConstructor, constructor, basePrototype,
proxiedPrototype = {},
namespace = name.split( "." )[ 0 ];
name = name.split( "." )[ 1 ];
fullName = namespace + "-" + name;
if ( !prototype ) {
prototype = base;
base = $.Widget;
}
$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
return !!$.data( elem, fullName );
};
$[ namespace ] = $[ namespace ] || {};
existingConstructor = $[ namespace ][ name ];
constructor = $[ namespace ][ name ] = function( options, element ) {
if ( !this._createWidget ) {
return new constructor( options, element );
}
if ( arguments.length ) {
this._createWidget( options, element );
}
};
$.extend( constructor, existingConstructor, {
version: prototype.version,
_proto: $.extend( {}, prototype ),
_childConstructors: []
});
basePrototype = new base();
basePrototype.options = $.widget.extend( {}, basePrototype.options );
$.each( prototype, function( prop, value ) {
if ( !$.isFunction( value ) ) {
proxiedPrototype[ prop ] = value;
return;
}
proxiedPrototype[ prop ] = (function() {
var _super = function() {
return base.prototype[ prop ].apply( this, arguments );
},
_superApply = function( args ) {
return base.prototype[ prop ].apply( this, args );
};
return function() {
var __super = this._super,
__superApply = this._superApply,
returnValue;
this._super = _super;
this._superApply = _superApply;
returnValue = value.apply( this, arguments );
this._super = __super;
this._superApply = __superApply;
return returnValue;
};
})();
});
constructor.prototype = $.widget.extend( basePrototype, {
widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
}, proxiedPrototype, {
constructor: constructor,
namespace: namespace,
widgetName: name,
widgetFullName: fullName
});
if ( existingConstructor ) {
$.each( existingConstructor._childConstructors, function( i, child ) {
var childPrototype = child.prototype;
$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
});
delete existingConstructor._childConstructors;
} else {
base._childConstructors.push( constructor );
}
$.widget.bridge( name, constructor );
return constructor;
};
$.widget.extend = function( target ) {
var input = widget_slice.call( arguments, 1 ),
inputIndex = 0,
inputLength = input.length,
key,
value;
for ( ; inputIndex < inputLength; inputIndex++ ) {
for ( key in input[ inputIndex ] ) {
value = input[ inputIndex ][ key ];
if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
if ( $.isPlainObject( value ) ) {
target[ key ] = $.isPlainObject( target[ key ] ) ?
$.widget.extend( {}, target[ key ], value ) :
$.widget.extend( {}, value );
} else {
target[ key ] = value;
}
}
}
}
return target;
};
$.widget.bridge = function( name, object ) {
var fullName = object.prototype.widgetFullName || name;
$.fn[ name ] = function( options ) {
var isMethodCall = typeof options === "string",
args = widget_slice.call( arguments, 1 ),
returnValue = this;
if ( isMethodCall ) {
this.each(function() {
var methodValue,
instance = $.data( this, fullName );
if ( options === "instance" ) {
returnValue = instance;
return false;
}
if ( !instance ) {
return $.error( "cannot call methods on " + name + " prior to initialization; " +
"attempted to call method '" + options + "'" );
}
if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
return $.error( "no such method '" + options + "' for " + name + " widget instance" );
}
methodValue = instance[ options ].apply( instance, args );
if ( methodValue !== instance && methodValue !== undefined ) {
returnValue = methodValue && methodValue.jquery ?
returnValue.pushStack( methodValue.get() ) :
methodValue;
return false;
}
});
} else {
if ( args.length ) {
options = $.widget.extend.apply( null, [ options ].concat(args) );
}
this.each(function() {
var instance = $.data( this, fullName );
if ( instance ) {
instance.option( options || {} );
if ( instance._init ) {
instance._init();
}
} else {
$.data( this, fullName, new object( options, this ) );
}
});
}
return returnValue;
};
};
$.Widget = function( ) {};
$.Widget._childConstructors = [];
$.Widget.prototype = {
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
disabled: false,
create: null
},
_createWidget: function( options, element ) {
element = $( element || this.defaultElement || this )[ 0 ];
this.element = $( element );
this.uuid = widget_uuid++;
this.eventNamespace = "." + this.widgetName + this.uuid;
this.bindings = $();
this.hoverable = $();
this.focusable = $();
if ( element !== this ) {
$.data( element, this.widgetFullName, this );
this._on( true, this.element, {
remove: function( event ) {
if ( event.target === element ) {
this.destroy();
}
}
});
this.document = $( element.style ?
element.ownerDocument :
element.document || element );
this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
}
this.options = $.widget.extend( {},
this.options,
this._getCreateOptions(),
options );
this._create();
this._trigger( "create", null, this._getCreateEventData() );
this._init();
},
_getCreateOptions: $.noop,
_getCreateEventData: $.noop,
_create: $.noop,
_init: $.noop,
destroy: function() {
this._destroy();
this.element
.unbind( this.eventNamespace )
.removeData( this.widgetFullName )
.removeData( $.camelCase( this.widgetFullName ) );
this.widget()
.unbind( this.eventNamespace )
.removeAttr( "aria-disabled" )
.removeClass(
this.widgetFullName + "-disabled " +
"ui-state-disabled" );
this.bindings.unbind( this.eventNamespace );
this.hoverable.removeClass( "ui-state-hover" );
this.focusable.removeClass( "ui-state-focus" );
},
_destroy: $.noop,
widget: function() {
return this.element;
},
option: function( key, value ) {
var options = key,
parts,
curOption,
i;
if ( arguments.length === 0 ) {
return $.widget.extend( {}, this.options );
}
if ( typeof key === "string" ) {
options = {};
parts = key.split( "." );
key = parts.shift();
if ( parts.length ) {
curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
for ( i = 0; i < parts.length - 1; i++ ) {
curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
curOption = curOption[ parts[ i ] ];
}
key = parts.pop();
if ( arguments.length === 1 ) {
return curOption[ key ] === undefined ? null : curOption[ key ];
}
curOption[ key ] = value;
} else {
if ( arguments.length === 1 ) {
return this.options[ key ] === undefined ? null : this.options[ key ];
}
options[ key ] = value;
}
}
this._setOptions( options );
return this;
},
_setOptions: function( options ) {
var key;
for ( key in options ) {
this._setOption( key, options[ key ] );
}
return this;
},
_setOption: function( key, value ) {
this.options[ key ] = value;
if ( key === "disabled" ) {
this.widget()
.toggleClass( this.widgetFullName + "-disabled", !!value );
if ( value ) {
this.hoverable.removeClass( "ui-state-hover" );
this.focusable.removeClass( "ui-state-focus" );
}
}
return this;
},
enable: function() {
return this._setOptions({ disabled: false });
},
disable: function() {
return this._setOptions({ disabled: true });
},
_on: function( suppressDisabledCheck, element, handlers ) {
var delegateElement,
instance = this;
if ( typeof suppressDisabledCheck !== "boolean" ) {
handlers = element;
element = suppressDisabledCheck;
suppressDisabledCheck = false;
}
if ( !handlers ) {
handlers = element;
element = this.element;
delegateElement = this.widget();
} else {
element = delegateElement = $( element );
this.bindings = this.bindings.add( element );
}
$.each( handlers, function( event, handler ) {
function handlerProxy() {
if ( !suppressDisabledCheck &&
( instance.options.disabled === true ||
$( this ).hasClass( "ui-state-disabled" ) ) ) {
return;
}
return ( typeof handler === "string" ? instance[ handler ] : handler )
.apply( instance, arguments );
}
if ( typeof handler !== "string" ) {
handlerProxy.guid = handler.guid =
handler.guid || handlerProxy.guid || $.guid++;
}
var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
eventName = match[1] + instance.eventNamespace,
selector = match[2];
if ( selector ) {
delegateElement.delegate( selector, eventName, handlerProxy );
} else {
element.bind( eventName, handlerProxy );
}
});
},
_off: function( element, eventName ) {
eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
this.eventNamespace;
element.unbind( eventName ).undelegate( eventName );
this.bindings = $( this.bindings.not( element ).get() );
this.focusable = $( this.focusable.not( element ).get() );
this.hoverable = $( this.hoverable.not( element ).get() );
},
_delay: function( handler, delay ) {
function handlerProxy() {
return ( typeof handler === "string" ? instance[ handler ] : handler )
.apply( instance, arguments );
}
var instance = this;
return setTimeout( handlerProxy, delay || 0 );
},
_hoverable: function( element ) {
this.hoverable = this.hoverable.add( element );
this._on( element, {
mouseenter: function( event ) {
$( event.currentTarget ).addClass( "ui-state-hover" );
},
mouseleave: function( event ) {
$( event.currentTarget ).removeClass( "ui-state-hover" );
}
});
},
_focusable: function( element ) {
this.focusable = this.focusable.add( element );
this._on( element, {
focusin: function( event ) {
$( event.currentTarget ).addClass( "ui-state-focus" );
},
focusout: function( event ) {
$( event.currentTarget ).removeClass( "ui-state-focus" );
}
});
},
_trigger: function( type, event, data ) {
var prop, orig,
callback = this.options[ type ];
data = data || {};
event = $.Event( event );
event.type = ( type === this.widgetEventPrefix ?
type :
this.widgetEventPrefix + type ).toLowerCase();
event.target = this.element[ 0 ];
orig = event.originalEvent;
if ( orig ) {
for ( prop in orig ) {
if ( !( prop in event ) ) {
event[ prop ] = orig[ prop ];
}
}
}
this.element.trigger( event, data );
return !( $.isFunction( callback ) &&
callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
event.isDefaultPrevented() );
}
};
$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
if ( typeof options === "string" ) {
options = { effect: options };
}
var hasOptions,
effectName = !options ?
method :
options === true || typeof options === "number" ?
defaultEffect :
options.effect || defaultEffect;
options = options || {};
if ( typeof options === "number" ) {
options = { duration: options };
}
hasOptions = !$.isEmptyObject( options );
options.complete = callback;
if ( options.delay ) {
element.delay( options.delay );
}
if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
element[ method ]( options );
} else if ( effectName !== method && element[ effectName ] ) {
element[ effectName ]( options.duration, options.easing, callback );
} else {
element.queue(function( next ) {
$( this )[ method ]();
if ( callback ) {
callback.call( element[ 0 ] );
}
next();
});
}
};
});
var widget = $.widget;
var mouseHandled = false;
$( document ).mouseup( function() {
mouseHandled = false;
});
var mouse = $.widget("ui.mouse", {
version: "1.11.4",
options: {
cancel: "input,textarea,button,select,option",
distance: 1,
delay: 0
},
_mouseInit: function() {
var that = this;
this.element
.bind("mousedown." + this.widgetName, function(event) {
return that._mouseDown(event);
})
.bind("click." + this.widgetName, function(event) {
if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
$.removeData(event.target, that.widgetName + ".preventClickEvent");
event.stopImmediatePropagation();
return false;
}
});
this.started = false;
},
_mouseDestroy: function() {
this.element.unbind("." + this.widgetName);
if ( this._mouseMoveDelegate ) {
this.document
.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
.unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
}
},
_mouseDown: function(event) {
if ( mouseHandled ) {
return;
}
this._mouseMoved = false;
(this._mouseStarted && this._mouseUp(event));
this._mouseDownEvent = event;
var that = this,
btnIsLeft = (event.which === 1),
elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
return true;
}
this.mouseDelayMet = !this.options.delay;
if (!this.mouseDelayMet) {
this._mouseDelayTimer = setTimeout(function() {
that.mouseDelayMet = true;
}, this.options.delay);
}
if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
this._mouseStarted = (this._mouseStart(event) !== false);
if (!this._mouseStarted) {
event.preventDefault();
return true;
}
}
if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
$.removeData(event.target, this.widgetName + ".preventClickEvent");
}
this._mouseMoveDelegate = function(event) {
return that._mouseMove(event);
};
this._mouseUpDelegate = function(event) {
return that._mouseUp(event);
};
this.document
.bind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
.bind( "mouseup." + this.widgetName, this._mouseUpDelegate );
event.preventDefault();
mouseHandled = true;
return true;
},
_mouseMove: function(event) {
if ( this._mouseMoved ) {
if ($.ui.ie && ( !document.documentMode || document.documentMode < 9 ) && !event.button) {
return this._mouseUp(event);
} else if ( !event.which ) {
return this._mouseUp( event );
}
}
if ( event.which || event.button ) {
this._mouseMoved = true;
}
if (this._mouseStarted) {
this._mouseDrag(event);
return event.preventDefault();
}
if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
this._mouseStarted =
(this._mouseStart(this._mouseDownEvent, event) !== false);
(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
}
return !this._mouseStarted;
},
_mouseUp: function(event) {
this.document
.unbind( "mousemove." + this.widgetName, this._mouseMoveDelegate )
.unbind( "mouseup." + this.widgetName, this._mouseUpDelegate );
if (this._mouseStarted) {
this._mouseStarted = false;
if (event.target === this._mouseDownEvent.target) {
$.data(event.target, this.widgetName + ".preventClickEvent", true);
}
this._mouseStop(event);
}
mouseHandled = false;
return false;
},
_mouseDistanceMet: function(event) {
return (Math.max(
Math.abs(this._mouseDownEvent.pageX - event.pageX),
Math.abs(this._mouseDownEvent.pageY - event.pageY)
) >= this.options.distance
);
},
_mouseDelayMet: function(/* event */) {
return this.mouseDelayMet;
},
_mouseStart: function(/* event */) {},
_mouseDrag: function(/* event */) {},
_mouseStop: function(/* event */) {},
_mouseCapture: function(/* event */) { return true; }
});
$.widget("ui.resizable", $.ui.mouse, {
version: "1.11.4",
widgetEventPrefix: "resize",
options: {
alsoResize: false,
animate: false,
animateDuration: "slow",
animateEasing: "swing",
aspectRatio: false,
autoHide: false,
containment: false,
ghost: false,
grid: false,
handles: "e,s,se",
helper: false,
maxHeight: null,
maxWidth: null,
minHeight: 10,
minWidth: 10,
zIndex: 90,
resize: null,
start: null,
stop: null
},
_num: function( value ) {
return parseInt( value, 10 ) || 0;
},
_isNumber: function( value ) {
return !isNaN( parseInt( value, 10 ) );
},
_hasScroll: function( el, a ) {
if ( $( el ).css( "overflow" ) === "hidden") {
return false;
}
var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
has = false;
if ( el[ scroll ] > 0 ) {
return true;
}
el[ scroll ] = 1;
has = ( el[ scroll ] > 0 );
el[ scroll ] = 0;
return has;
},
_create: function() {
var n, i, handle, axis, hname,
that = this,
o = this.options;
this.element.addClass("ui-resizable");
$.extend(this, {
_aspectRatio: !!(o.aspectRatio),
aspectRatio: o.aspectRatio,
originalElement: this.element,
_proportionallyResizeElements: [],
_helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
});
if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
this.element.wrap(
$("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
position: this.element.css("position"),
width: this.element.outerWidth(),
height: this.element.outerHeight(),
top: this.element.css("top"),
left: this.element.css("left")
})
);
this.element = this.element.parent().data(
"ui-resizable", this.element.resizable( "instance" )
);
this.elementIsWrapper = true;
this.element.css({
marginLeft: this.originalElement.css("marginLeft"),
marginTop: this.originalElement.css("marginTop"),
marginRight: this.originalElement.css("marginRight"),
marginBottom: this.originalElement.css("marginBottom")
});
this.originalElement.css({
marginLeft: 0,
marginTop: 0,
marginRight: 0,
marginBottom: 0
});
this.originalResizeStyle = this.originalElement.css("resize");
this.originalElement.css("resize", "none");
this._proportionallyResizeElements.push( this.originalElement.css({
position: "static",
zoom: 1,
display: "block"
}) );
this.originalElement.css({ margin: this.originalElement.css("margin") });
this._proportionallyResize();
}
this.handles = o.handles ||
( !$(".ui-resizable-handle", this.element).length ?
"e,s,se" : {
n: ".ui-resizable-n",
e: ".ui-resizable-e",
s: ".ui-resizable-s",
w: ".ui-resizable-w",
se: ".ui-resizable-se",
sw: ".ui-resizable-sw",
ne: ".ui-resizable-ne",
nw: ".ui-resizable-nw"
} );
this._handles = $();
if ( this.handles.constructor === String ) {
if ( this.handles === "all") {
this.handles = "n,e,s,w,se,sw,ne,nw";
}
n = this.handles.split(",");
this.handles = {};
for (i = 0; i < n.length; i++) {
handle = $.trim(n[i]);
hname = "ui-resizable-" + handle;
axis = $("<div class='ui-resizable-handle " + hname + "'></div>");
axis.css({ zIndex: o.zIndex });
if ("se" === handle) {
axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
}
this.handles[handle] = ".ui-resizable-" + handle;
this.element.append(axis);
}
}
this._renderAxis = function(target) {
var i, axis, padPos, padWrapper;
target = target || this.element;
for (i in this.handles) {
if (this.handles[i].constructor === String) {
this.handles[i] = this.element.children( this.handles[ i ] ).first().show();
} else if ( this.handles[ i ].jquery || this.handles[ i ].nodeType ) {
this.handles[ i ] = $( this.handles[ i ] );
this._on( this.handles[ i ], { "mousedown": that._mouseDown });
}
if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
axis = $(this.handles[i], this.element);
padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
padPos = [ "padding",
/ne|nw|n/.test(i) ? "Top" :
/se|sw|s/.test(i) ? "Bottom" :
/^e$/.test(i) ? "Right" : "Left" ].join("");
target.css(padPos, padWrapper);
this._proportionallyResize();
}
this._handles = this._handles.add( this.handles[ i ] );
}
};
this._renderAxis(this.element);
this._handles = this._handles.add( this.element.find( ".ui-resizable-handle" ) );
this._handles.disableSelection();
this._handles.mouseover(function() {
if (!that.resizing) {
if (this.className) {
axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
}
that.axis = axis && axis[1] ? axis[1] : "se";
}
});
if (o.autoHide) {
this._handles.hide();
$(this.element)
.addClass("ui-resizable-autohide")
.mouseenter(function() {
if (o.disabled) {
return;
}
$(this).removeClass("ui-resizable-autohide");
that._handles.show();
})
.mouseleave(function() {
if (o.disabled) {
return;
}
if (!that.resizing) {
$(this).addClass("ui-resizable-autohide");
that._handles.hide();
}
});
}
this._mouseInit();
},
_destroy: function() {
this._mouseDestroy();
var wrapper,
_destroy = function(exp) {
$(exp)
.removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
.removeData("resizable")
.removeData("ui-resizable")
.unbind(".resizable")
.find(".ui-resizable-handle")
.remove();
};
if (this.elementIsWrapper) {
_destroy(this.element);
wrapper = this.element;
this.originalElement.css({
position: wrapper.css("position"),
width: wrapper.outerWidth(),
height: wrapper.outerHeight(),
top: wrapper.css("top"),
left: wrapper.css("left")
}).insertAfter( wrapper );
wrapper.remove();
}
this.originalElement.css("resize", this.originalResizeStyle);
_destroy(this.originalElement);
return this;
},
_mouseCapture: function(event) {
var i, handle,
capture = false;
for (i in this.handles) {
handle = $(this.handles[i])[0];
if (handle === event.target || $.contains(handle, event.target)) {
capture = true;
}
}
return !this.options.disabled && capture;
},
_mouseStart: function(event) {
var curleft, curtop, cursor,
o = this.options,
el = this.element;
this.resizing = true;
this._renderProxy();
curleft = this._num(this.helper.css("left"));
curtop = this._num(this.helper.css("top"));
if (o.containment) {
curleft += $(o.containment).scrollLeft() || 0;
curtop += $(o.containment).scrollTop() || 0;
}
this.offset = this.helper.offset();
this.position = { left: curleft, top: curtop };
this.size = this._helper ? {
width: this.helper.width(),
height: this.helper.height()
} : {
width: el.width(),
height: el.height()
};
this.originalSize = this._helper ? {
width: el.outerWidth(),
height: el.outerHeight()
} : {
width: el.width(),
height: el.height()
};
this.sizeDiff = {
width: el.outerWidth() - el.width(),
height: el.outerHeight() - el.height()
};
this.originalPosition = { left: curleft, top: curtop };
this.originalMousePosition = { left: event.pageX, top: event.pageY };
this.aspectRatio = (typeof o.aspectRatio === "number") ?
o.aspectRatio :
((this.originalSize.width / this.originalSize.height) || 1);
cursor = $(".ui-resizable-" + this.axis).css("cursor");
$("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);
el.addClass("ui-resizable-resizing");
this._propagate("start", event);
return true;
},
_mouseDrag: function(event) {
var data, props,
smp = this.originalMousePosition,
a = this.axis,
dx = (event.pageX - smp.left) || 0,
dy = (event.pageY - smp.top) || 0,
trigger = this._change[a];
this._updatePrevProperties();
if (!trigger) {
return false;
}
data = trigger.apply(this, [ event, dx, dy ]);
this._updateVirtualBoundaries(event.shiftKey);
if (this._aspectRatio || event.shiftKey) {
data = this._updateRatio(data, event);
}
data = this._respectSize(data, event);
this._updateCache(data);
this._propagate("resize", event);
props = this._applyChanges();
if ( !this._helper && this._proportionallyResizeElements.length ) {
this._proportionallyResize();
}
if ( !$.isEmptyObject( props ) ) {
this._updatePrevProperties();
this._trigger( "resize", event, this.ui() );
this._applyChanges();
}
return false;
},
_mouseStop: function(event) {
this.resizing = false;
var pr, ista, soffseth, soffsetw, s, left, top,
o = this.options, that = this;
if (this._helper) {
pr = this._proportionallyResizeElements;
ista = pr.length && (/textarea/i).test(pr[0].nodeName);
soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
soffsetw = ista ? 0 : that.sizeDiff.width;
s = {
width: (that.helper.width()  - soffsetw),
height: (that.helper.height() - soffseth)
};
left = (parseInt(that.element.css("left"), 10) +
(that.position.left - that.originalPosition.left)) || null;
top = (parseInt(that.element.css("top"), 10) +
(that.position.top - that.originalPosition.top)) || null;
if (!o.animate) {
this.element.css($.extend(s, { top: top, left: left }));
}
that.helper.height(that.size.height);
that.helper.width(that.size.width);
if (this._helper && !o.animate) {
this._proportionallyResize();
}
}
$("body").css("cursor", "auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop", event);
if (this._helper) {
this.helper.remove();
}
return false;
},
_updatePrevProperties: function() {
this.prevPosition = {
top: this.position.top,
left: this.position.left
};
this.prevSize = {
width: this.size.width,
height: this.size.height
};
},
_applyChanges: function() {
var props = {};
if ( this.position.top !== this.prevPosition.top ) {
props.top = this.position.top + "px";
}
if ( this.position.left !== this.prevPosition.left ) {
props.left = this.position.left + "px";
}
if ( this.size.width !== this.prevSize.width ) {
props.width = this.size.width + "px";
}
if ( this.size.height !== this.prevSize.height ) {
props.height = this.size.height + "px";
}
this.helper.css( props );
return props;
},
_updateVirtualBoundaries: function(forceAspectRatio) {
var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
o = this.options;
b = {
minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
};
if (this._aspectRatio || forceAspectRatio) {
pMinWidth = b.minHeight * this.aspectRatio;
pMinHeight = b.minWidth / this.aspectRatio;
pMaxWidth = b.maxHeight * this.aspectRatio;
pMaxHeight = b.maxWidth / this.aspectRatio;
if (pMinWidth > b.minWidth) {
b.minWidth = pMinWidth;
}
if (pMinHeight > b.minHeight) {
b.minHeight = pMinHeight;
}
if (pMaxWidth < b.maxWidth) {
b.maxWidth = pMaxWidth;
}
if (pMaxHeight < b.maxHeight) {
b.maxHeight = pMaxHeight;
}
}
this._vBoundaries = b;
},
_updateCache: function(data) {
this.offset = this.helper.offset();
if (this._isNumber(data.left)) {
this.position.left = data.left;
}
if (this._isNumber(data.top)) {
this.position.top = data.top;
}
if (this._isNumber(data.height)) {
this.size.height = data.height;
}
if (this._isNumber(data.width)) {
this.size.width = data.width;
}
},
_updateRatio: function( data ) {
var cpos = this.position,
csize = this.size,
a = this.axis;
if (this._isNumber(data.height)) {
data.width = (data.height * this.aspectRatio);
} else if (this._isNumber(data.width)) {
data.height = (data.width / this.aspectRatio);
}
if (a === "sw") {
data.left = cpos.left + (csize.width - data.width);
data.top = null;
}
if (a === "nw") {
data.top = cpos.top + (csize.height - data.height);
data.left = cpos.left + (csize.width - data.width);
}
return data;
},
_respectSize: function( data ) {
var o = this._vBoundaries,
a = this.axis,
ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width),
ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width),
isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height),
dw = this.originalPosition.left + this.originalSize.width,
dh = this.position.top + this.size.height,
cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
if (isminw) {
data.width = o.minWidth;
}
if (isminh) {
data.height = o.minHeight;
}
if (ismaxw) {
data.width = o.maxWidth;
}
if (ismaxh) {
data.height = o.maxHeight;
}
if (isminw && cw) {
data.left = dw - o.minWidth;
}
if (ismaxw && cw) {
data.left = dw - o.maxWidth;
}
if (isminh && ch) {
data.top = dh - o.minHeight;
}
if (ismaxh && ch) {
data.top = dh - o.maxHeight;
}
if (!data.width && !data.height && !data.left && data.top) {
data.top = null;
} else if (!data.width && !data.height && !data.top && data.left) {
data.left = null;
}
return data;
},
_getPaddingPlusBorderDimensions: function( element ) {
var i = 0,
widths = [],
borders = [
element.css( "borderTopWidth" ),
element.css( "borderRightWidth" ),
element.css( "borderBottomWidth" ),
element.css( "borderLeftWidth" )
],
paddings = [
element.css( "paddingTop" ),
element.css( "paddingRight" ),
element.css( "paddingBottom" ),
element.css( "paddingLeft" )
];
for ( ; i < 4; i++ ) {
widths[ i ] = ( parseInt( borders[ i ], 10 ) || 0 );
widths[ i ] += ( parseInt( paddings[ i ], 10 ) || 0 );
}
return {
height: widths[ 0 ] + widths[ 2 ],
width: widths[ 1 ] + widths[ 3 ]
};
},
_proportionallyResize: function() {
if (!this._proportionallyResizeElements.length) {
return;
}
var prel,
i = 0,
element = this.helper || this.element;
for ( ; i < this._proportionallyResizeElements.length; i++) {
prel = this._proportionallyResizeElements[i];
if (!this.outerDimensions) {
this.outerDimensions = this._getPaddingPlusBorderDimensions( prel );
}
prel.css({
height: (element.height() - this.outerDimensions.height) || 0,
width: (element.width() - this.outerDimensions.width) || 0
});
}
},
_renderProxy: function() {
var el = this.element, o = this.options;
this.elementOffset = el.offset();
if (this._helper) {
this.helper = this.helper || $("<div style='overflow:hidden;'></div>");
this.helper.addClass(this._helper).css({
width: this.element.outerWidth() - 1,
height: this.element.outerHeight() - 1,
position: "absolute",
left: this.elementOffset.left + "px",
top: this.elementOffset.top + "px",
zIndex: ++o.zIndex //TODO: Don't modify option
});
this.helper
.appendTo("body")
.disableSelection();
} else {
this.helper = this.element;
}
},
_change: {
e: function(event, dx) {
return { width: this.originalSize.width + dx };
},
w: function(event, dx) {
var cs = this.originalSize, sp = this.originalPosition;
return { left: sp.left + dx, width: cs.width - dx };
},
n: function(event, dx, dy) {
var cs = this.originalSize, sp = this.originalPosition;
return { top: sp.top + dy, height: cs.height - dy };
},
s: function(event, dx, dy) {
return { height: this.originalSize.height + dy };
},
se: function(event, dx, dy) {
return $.extend(this._change.s.apply(this, arguments),
this._change.e.apply(this, [ event, dx, dy ]));
},
sw: function(event, dx, dy) {
return $.extend(this._change.s.apply(this, arguments),
this._change.w.apply(this, [ event, dx, dy ]));
},
ne: function(event, dx, dy) {
return $.extend(this._change.n.apply(this, arguments),
this._change.e.apply(this, [ event, dx, dy ]));
},
nw: function(event, dx, dy) {
return $.extend(this._change.n.apply(this, arguments),
this._change.w.apply(this, [ event, dx, dy ]));
}
},
_propagate: function(n, event) {
$.ui.plugin.call(this, n, [ event, this.ui() ]);
(n !== "resize" && this._trigger(n, event, this.ui()));
},
plugins: {},
ui: function() {
return {
originalElement: this.originalElement,
element: this.element,
helper: this.helper,
position: this.position,
size: this.size,
originalSize: this.originalSize,
originalPosition: this.originalPosition
};
}
});
$.ui.plugin.add("resizable", "animate", {
stop: function( event ) {
var that = $(this).resizable( "instance" ),
o = that.options,
pr = that._proportionallyResizeElements,
ista = pr.length && (/textarea/i).test(pr[0].nodeName),
soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
soffsetw = ista ? 0 : that.sizeDiff.width,
style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) },
left = (parseInt(that.element.css("left"), 10) +
(that.position.left - that.originalPosition.left)) || null,
top = (parseInt(that.element.css("top"), 10) +
(that.position.top - that.originalPosition.top)) || null;
that.element.animate(
$.extend(style, top && left ? { top: top, left: left } : {}), {
duration: o.animateDuration,
easing: o.animateEasing,
step: function() {
var data = {
width: parseInt(that.element.css("width"), 10),
height: parseInt(that.element.css("height"), 10),
top: parseInt(that.element.css("top"), 10),
left: parseInt(that.element.css("left"), 10)
};
if (pr && pr.length) {
$(pr[0]).css({ width: data.width, height: data.height });
}
that._updateCache(data);
that._propagate("resize", event);
}
}
);
}
});
$.ui.plugin.add( "resizable", "containment", {
start: function() {
var element, p, co, ch, cw, width, height,
that = $( this ).resizable( "instance" ),
o = that.options,
el = that.element,
oc = o.containment,
ce = ( oc instanceof $ ) ? oc.get( 0 ) : ( /parent/.test( oc ) ) ? el.parent().get( 0 ) : oc;
if ( !ce ) {
return;
}
that.containerElement = $( ce );
if ( /document/.test( oc ) || oc === document ) {
that.containerOffset = {
left: 0,
top: 0
};
that.containerPosition = {
left: 0,
top: 0
};
that.parentData = {
element: $( document ),
left: 0,
top: 0,
width: $( document ).width(),
height: $( document ).height() || document.body.parentNode.scrollHeight
};
} else {
element = $( ce );
p = [];
$([ "Top", "Right", "Left", "Bottom" ]).each(function( i, name ) {
p[ i ] = that._num( element.css( "padding" + name ) );
});
that.containerOffset = element.offset();
that.containerPosition = element.position();
that.containerSize = {
height: ( element.innerHeight() - p[ 3 ] ),
width: ( element.innerWidth() - p[ 1 ] )
};
co = that.containerOffset;
ch = that.containerSize.height;
cw = that.containerSize.width;
width = ( that._hasScroll ( ce, "left" ) ? ce.scrollWidth : cw );
height = ( that._hasScroll ( ce ) ? ce.scrollHeight : ch ) ;
that.parentData = {
element: ce,
left: co.left,
top: co.top,
width: width,
height: height
};
}
},
resize: function( event ) {
var woset, hoset, isParent, isOffsetRelative,
that = $( this ).resizable( "instance" ),
o = that.options,
co = that.containerOffset,
cp = that.position,
pRatio = that._aspectRatio || event.shiftKey,
cop = {
top: 0,
left: 0
},
ce = that.containerElement,
continueResize = true;
if ( ce[ 0 ] !== document && ( /static/ ).test( ce.css( "position" ) ) ) {
cop = co;
}
if ( cp.left < ( that._helper ? co.left : 0 ) ) {
that.size.width = that.size.width +
( that._helper ?
( that.position.left - co.left ) :
( that.position.left - cop.left ) );
if ( pRatio ) {
that.size.height = that.size.width / that.aspectRatio;
continueResize = false;
}
that.position.left = o.helper ? co.left : 0;
}
if ( cp.top < ( that._helper ? co.top : 0 ) ) {
that.size.height = that.size.height +
( that._helper ?
( that.position.top - co.top ) :
that.position.top );
if ( pRatio ) {
that.size.width = that.size.height * that.aspectRatio;
continueResize = false;
}
that.position.top = that._helper ? co.top : 0;
}
isParent = that.containerElement.get( 0 ) === that.element.parent().get( 0 );
isOffsetRelative = /relative|absolute/.test( that.containerElement.css( "position" ) );
if ( isParent && isOffsetRelative ) {
that.offset.left = that.parentData.left + that.position.left;
that.offset.top = that.parentData.top + that.position.top;
} else {
that.offset.left = that.element.offset().left;
that.offset.top = that.element.offset().top;
}
woset = Math.abs( that.sizeDiff.width +
(that._helper ?
that.offset.left - cop.left :
(that.offset.left - co.left)) );
hoset = Math.abs( that.sizeDiff.height +
(that._helper ?
that.offset.top - cop.top :
(that.offset.top - co.top)) );
if ( woset + that.size.width >= that.parentData.width ) {
that.size.width = that.parentData.width - woset;
if ( pRatio ) {
that.size.height = that.size.width / that.aspectRatio;
continueResize = false;
}
}
if ( hoset + that.size.height >= that.parentData.height ) {
that.size.height = that.parentData.height - hoset;
if ( pRatio ) {
that.size.width = that.size.height * that.aspectRatio;
continueResize = false;
}
}
if ( !continueResize ) {
that.position.left = that.prevPosition.left;
that.position.top = that.prevPosition.top;
that.size.width = that.prevSize.width;
that.size.height = that.prevSize.height;
}
},
stop: function() {
var that = $( this ).resizable( "instance" ),
o = that.options,
co = that.containerOffset,
cop = that.containerPosition,
ce = that.containerElement,
helper = $( that.helper ),
ho = helper.offset(),
w = helper.outerWidth() - that.sizeDiff.width,
h = helper.outerHeight() - that.sizeDiff.height;
if ( that._helper && !o.animate && ( /relative/ ).test( ce.css( "position" ) ) ) {
$( this ).css({
left: ho.left - cop.left - co.left,
width: w,
height: h
});
}
if ( that._helper && !o.animate && ( /static/ ).test( ce.css( "position" ) ) ) {
$( this ).css({
left: ho.left - cop.left - co.left,
width: w,
height: h
});
}
}
});
$.ui.plugin.add("resizable", "alsoResize", {
start: function() {
var that = $(this).resizable( "instance" ),
o = that.options;
$(o.alsoResize).each(function() {
var el = $(this);
el.data("ui-resizable-alsoresize", {
width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
left: parseInt(el.css("left"), 10), top: parseInt(el.css("top"), 10)
});
});
},
resize: function(event, ui) {
var that = $(this).resizable( "instance" ),
o = that.options,
os = that.originalSize,
op = that.originalPosition,
delta = {
height: (that.size.height - os.height) || 0,
width: (that.size.width - os.width) || 0,
top: (that.position.top - op.top) || 0,
left: (that.position.left - op.left) || 0
};
$(o.alsoResize).each(function() {
var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {},
css = el.parents(ui.originalElement[0]).length ?
[ "width", "height" ] :
[ "width", "height", "top", "left" ];
$.each(css, function(i, prop) {
var sum = (start[prop] || 0) + (delta[prop] || 0);
if (sum && sum >= 0) {
style[prop] = sum || null;
}
});
el.css(style);
});
},
stop: function() {
$(this).removeData("resizable-alsoresize");
}
});
$.ui.plugin.add("resizable", "ghost", {
start: function() {
var that = $(this).resizable( "instance" ), o = that.options, cs = that.size;
that.ghost = that.originalElement.clone();
that.ghost
.css({
opacity: 0.25,
display: "block",
position: "relative",
height: cs.height,
width: cs.width,
margin: 0,
left: 0,
top: 0
})
.addClass("ui-resizable-ghost")
.addClass(typeof o.ghost === "string" ? o.ghost : "");
that.ghost.appendTo(that.helper);
},
resize: function() {
var that = $(this).resizable( "instance" );
if (that.ghost) {
that.ghost.css({
position: "relative",
height: that.size.height,
width: that.size.width
});
}
},
stop: function() {
var that = $(this).resizable( "instance" );
if (that.ghost && that.helper) {
that.helper.get(0).removeChild(that.ghost.get(0));
}
}
});
$.ui.plugin.add("resizable", "grid", {
resize: function() {
var outerDimensions,
that = $(this).resizable( "instance" ),
o = that.options,
cs = that.size,
os = that.originalSize,
op = that.originalPosition,
a = that.axis,
grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid,
gridX = (grid[0] || 1),
gridY = (grid[1] || 1),
ox = Math.round((cs.width - os.width) / gridX) * gridX,
oy = Math.round((cs.height - os.height) / gridY) * gridY,
newWidth = os.width + ox,
newHeight = os.height + oy,
isMaxWidth = o.maxWidth && (o.maxWidth < newWidth),
isMaxHeight = o.maxHeight && (o.maxHeight < newHeight),
isMinWidth = o.minWidth && (o.minWidth > newWidth),
isMinHeight = o.minHeight && (o.minHeight > newHeight);
o.grid = grid;
if (isMinWidth) {
newWidth += gridX;
}
if (isMinHeight) {
newHeight += gridY;
}
if (isMaxWidth) {
newWidth -= gridX;
}
if (isMaxHeight) {
newHeight -= gridY;
}
if (/^(se|s|e)$/.test(a)) {
that.size.width = newWidth;
that.size.height = newHeight;
} else if (/^(ne)$/.test(a)) {
that.size.width = newWidth;
that.size.height = newHeight;
that.position.top = op.top - oy;
} else if (/^(sw)$/.test(a)) {
that.size.width = newWidth;
that.size.height = newHeight;
that.position.left = op.left - ox;
} else {
if ( newHeight - gridY <= 0 || newWidth - gridX <= 0) {
outerDimensions = that._getPaddingPlusBorderDimensions( this );
}
if ( newHeight - gridY > 0 ) {
that.size.height = newHeight;
that.position.top = op.top - oy;
} else {
newHeight = gridY - outerDimensions.height;
that.size.height = newHeight;
that.position.top = op.top + os.height - newHeight;
}
if ( newWidth - gridX > 0 ) {
that.size.width = newWidth;
that.position.left = op.left - ox;
} else {
newWidth = gridX - outerDimensions.width;
that.size.width = newWidth;
that.position.left = op.left + os.width - newWidth;
}
}
}
});
var resizable = $.ui.resizable;
}));
(function() {
var $;
$ = window.jQuery || window.Zepto || window.$;
$.fn.fancySelect = function(opts) {
var isiOS, settings;
if (opts == null) {
opts = {};
}
settings = $.extend({
forceiOS: false,
includeBlank: false,
optionTemplate: function(optionEl) {
return optionEl.text();
},
triggerTemplate: function(optionEl) {
return optionEl.text();
}
}, opts);
isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
return this.each(function() {
var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper;
sel = $(this);
if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
return;
}
sel.addClass('fancified');
sel.css({
width: 1,
height: 1,
display: 'block',
position: 'absolute',
top: 0,
left: 0,
opacity: 0
});
sel.wrap('<div class="fancy-select">');
wrapper = sel.parent();
if (sel.data('class')) {
wrapper.addClass(sel.data('class'));
}
wrapper.append('<div class="trigger">');
if (!(isiOS && !settings.forceiOS)) {
wrapper.append('<ul class="options">');
}
trigger = wrapper.find('.trigger');
options = wrapper.find('.options');
disabled = sel.prop('disabled');
if (disabled) {
wrapper.addClass('disabled');
}
updateTriggerText = function() {
var triggerHtml;
triggerHtml = settings.triggerTemplate(sel.find(':selected'));
return trigger.html(triggerHtml);
};
sel.on('blur.fs', function() {
if (trigger.hasClass('open')) {
return setTimeout(function() {
return trigger.trigger('close.fs');
}, 120);
}
});
trigger.on('close.fs', function() {
trigger.removeClass('open');
return options.removeClass('open');
});
trigger.on('click.fs', function() {
var offParent, parent;
if (!disabled) {
trigger.toggleClass('open');
if (isiOS && !settings.forceiOS) {
if (trigger.hasClass('open')) {
return sel.focus();
}
} else {
if (trigger.hasClass('open')) {
parent = trigger.parent();
offParent = parent.offsetParent();
if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
} else {
options.removeClass('overflowing');
}
}
options.toggleClass('open');
if (!isiOS) {
return sel.focus();
}
}
}
});
sel.on('enable', function() {
sel.prop('disabled', false);
wrapper.removeClass('disabled');
disabled = false;
return copyOptionsToList();
});
sel.on('disable', function() {
sel.prop('disabled', true);
wrapper.addClass('disabled');
return disabled = true;
});
sel.on('change.fs', function(e) {
if (e.originalEvent && e.originalEvent.isTrusted) {
return e.stopPropagation();
} else {
return updateTriggerText();
}
});
sel.on('focus', function() {
wrapper.addClass('focus-fancy-select');
}).on('blur', function(){
wrapper.removeClass('focus-fancy-select');
});
var oldCaracter = 'raz';
var index= 0;
sel.on('keydown', function(e) {
var hovered, newHovered, w;
w = e.which;
hovered = options.find('.hover');
hovered.removeClass('hover');
var optionList = new Array();
var innerCount = 0;
if (options.hasClass('open')) {
if((w>47 && w<91) || (w>95 && w<106)){
var caracter = String.fromCharCode(w).toLowerCase();
options.find('li').each(function(){
smallName = $(this).html().toLowerCase();
if (smallName.indexOf(caracter) == 0){
optionList[innerCount] = $(this);
innerCount ++;
}
})
if(oldCaracter==caracter){
index ++;
}else{
index =0;
}
if(optionList[index+1]){
oldCaracter = String.fromCharCode(w).toLowerCase();
}else{
oldCaracter= 'raz';
}
if(optionList[index]){
optionList[index].addClass('hover');
}else{
if(optionList[index-1]){
optionList[index-1].addClass('hover');
}
}
}
}
if (!options.hasClass('open')) {
options.find('li').removeClass('selected');
if((w>47 && w<91) || (w>95 && w<106)){
var caracter = String.fromCharCode(w).toLowerCase();
options.find('li').each(function(){
smallName = $(this).html().toLowerCase();
if (smallName.indexOf(caracter) == 0){
optionList[innerCount] = $(this);
innerCount ++;
}
})
if(oldCaracter==caracter){
index ++;
}else{
index =0;
}
if(optionList[index+1]){
oldCaracter = String.fromCharCode(w).toLowerCase();
}else{
oldCaracter= 'raz';
}
if(optionList[index]){
optionList[index].addClass('selected');
}else{
if(optionList[index-1]){
optionList[index-1].addClass('selected');
}
}
var selectedHtml = options.find('.selected').html();
var selectedValue = options.find('.selected').data('raw-value');
trigger.html(selectedHtml);
sel.val(selectedValue);
}
if (w === 13 || w === 32 || w === 38 || w === 40) {
e.preventDefault();
return trigger.trigger('click.fs');
}
} else {
if (w === 38) {
e.preventDefault();
if (hovered.length && hovered.index() > 0) {
hovered.prev().addClass('hover');
} else {
options.find('li:last-child').addClass('hover');
}
} else if (w === 40) {
e.preventDefault();
if (hovered.length && hovered.index() < options.find('li').length - 1) {
hovered.next().addClass('hover');
} else {
options.find('li:first-child').addClass('hover');
}
} else if (w === 27) {
e.preventDefault();
trigger.trigger('click.fs');
} else if (w === 13 || w === 32) {
e.preventDefault();
hovered.trigger('mousedown.fs');
} else if (w === 9) {
if (trigger.hasClass('open')) {
trigger.trigger('close.fs');
}
}
newHovered = options.find('.hover');
if (newHovered.length) {
options.scrollTop(0);
return options.scrollTop(newHovered.position().top - 12);
}
}
});
options.on('mousedown.fs', 'li', function(e) {
var clicked;
clicked = $(this);
sel.val(clicked.data('raw-value'));
if (!isiOS) {
sel.trigger('blur.fs').trigger('focus.fs');
}
options.find('.selected').removeClass('selected');
clicked.addClass('selected');
trigger.addClass('selected');
return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
});
options.on('mouseenter.fs', 'li', function() {
var hovered, nowHovered;
nowHovered = $(this);
hovered = options.find('.hover');
hovered.removeClass('hover');
return nowHovered.addClass('hover');
});
options.on('mouseleave.fs', 'li', function() {
return options.find('.hover').removeClass('hover');
});
copyOptionsToList = function() {
var selOpts;
updateTriggerText();
if (isiOS && !settings.forceiOS) {
return;
}
selOpts = sel.find('option');
return sel.find('option').each(function(i, opt) {
var optHtml;
opt = $(opt);
if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
optHtml = settings.optionTemplate(opt);
if (opt.prop('selected')) {
return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
} else {
return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
}
}
});
};
sel.on('update.fs', function() {
wrapper.find('.options').empty();
return copyOptionsToList();
});
return copyOptionsToList();
});
};
}).call(this);
!function(a){var b=function(b,c){this.$form=a(b),this.options=a.extend({},a.fn.bootstrapValidator.DEFAULT_OPTIONS,c),this.$invalidFields=a([]),this.$submitButton=null,this.$hiddenButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID";var d=function(){for(var a=3,b=document.createElement("div"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0];);return a>4?a:!a}(),e=document.createElement("div");this._changeEvent=9!==d&&"oninput"in e?"input":"keyup",this._submitIfValid=null,this._cacheFields={},this._init()};b.prototype={constructor:b,_init:function(){var b=this,c={excluded:this.$form.attr("data-bv-excluded"),trigger:this.$form.attr("data-bv-trigger"),message:this.$form.attr("data-bv-message"),container:this.$form.attr("data-bv-container"),group:this.$form.attr("data-bv-group"),submitButtons:this.$form.attr("data-bv-submitbuttons"),threshold:this.$form.attr("data-bv-threshold"),live:this.$form.attr("data-bv-live"),onSuccess:this.$form.attr("data-bv-onsuccess"),onError:this.$form.attr("data-bv-onerror"),fields:{},feedbackIcons:{valid:this.$form.attr("data-bv-feedbackicons-valid"),invalid:this.$form.attr("data-bv-feedbackicons-invalid"),validating:this.$form.attr("data-bv-feedbackicons-validating")},events:{formInit:this.$form.attr("data-bv-events-form-init"),formError:this.$form.attr("data-bv-events-form-error"),formSuccess:this.$form.attr("data-bv-events-form-success"),fieldAdded:this.$form.attr("data-bv-events-field-added"),fieldRemoved:this.$form.attr("data-bv-events-field-removed"),fieldInit:this.$form.attr("data-bv-events-field-init"),fieldError:this.$form.attr("data-bv-events-field-error"),fieldSuccess:this.$form.attr("data-bv-events-field-success"),fieldStatus:this.$form.attr("data-bv-events-field-status"),validatorError:this.$form.attr("data-bv-events-validator-error"),validatorSuccess:this.$form.attr("data-bv-events-validator-success")}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit.bv",function(a){a.preventDefault(),b.validate()}).on("click.bv",this.options.submitButtons,function(){b.$submitButton=a(this),b._submitIfValid=!0}).find("[name], [data-bv-field]").each(function(){var d=a(this),e=d.attr("name")||d.attr("data-bv-field"),f=b._parseOptions(d);f&&(d.attr("data-bv-field",e),c.fields[e]=a.extend({},f,c.fields[e]))}),this.options=a.extend(!0,this.options,c),this.$hiddenButton=a("<button/>").attr("type","submit").prependTo(this.$form).addClass("bv-hidden-submit").css({display:"none",width:0,height:0}),this.$form.on("click.bv",'[type="submit"]',function(c){var d=a(c.target).eq(0);!b.options.submitButtons||d.is(b.options.submitButtons)||d.is(b.$hiddenButton)||b.$form.off("submit.bv").submit()});for(var d in this.options.fields)this._initField(d);this.$form.trigger(a.Event(this.options.events.formInit),{bv:this,options:this.options}),this.options.onSuccess&&this.$form.on(this.options.events.formSuccess,function(c){a.fn.bootstrapValidator.helpers.call(b.options.onSuccess,[c])}),this.options.onError&&this.$form.on(this.options.events.formError,function(c){a.fn.bootstrapValidator.helpers.call(b.options.onError,[c])})},_parseOptions:function(b){var c,d,e,f,g,h,i,j=b.attr("name")||b.attr("data-bv-field"),k={};for(d in a.fn.bootstrapValidator.validators)if(c=a.fn.bootstrapValidator.validators[d],e=b.attr("data-bv-"+d.toLowerCase())+"",i="function"==typeof c.enableByHtml5?c.enableByHtml5(b):null,i&&"false"!==e||i!==!0&&(""===e||"true"===e)){c.html5Attributes=a.extend({},{message:"message",onerror:"onError",onsuccess:"onSuccess"},c.html5Attributes),k[d]=a.extend({},i===!0?{}:i,k[d]);for(h in c.html5Attributes)f=c.html5Attributes[h],g=b.attr("data-bv-"+d.toLowerCase()+"-"+h),g&&("true"===g?g=!0:"false"===g&&(g=!1),k[d][f]=g)}var l={excluded:b.attr("data-bv-excluded"),feedbackIcons:b.attr("data-bv-feedbackicons"),trigger:b.attr("data-bv-trigger"),message:b.attr("data-bv-message"),container:b.attr("data-bv-container"),group:b.attr("data-bv-group"),selector:b.attr("data-bv-selector"),threshold:b.attr("data-bv-threshold"),onStatus:b.attr("data-bv-onstatus"),onSuccess:b.attr("data-bv-onsuccess"),onError:b.attr("data-bv-onerror"),validators:k},m=a.isEmptyObject(l),n=a.isEmptyObject(k);return!n||!m&&this.options.fields&&this.options.fields[j]?(l.validators=k,l):null},_initField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b),c.attr("data-bv-field",b)}if(null!==this.options.fields[b]&&null!==this.options.fields[b].validators){if(0===c.length)return void delete this.options.fields[b];var d;for(d in this.options.fields[b].validators)a.fn.bootstrapValidator.validators[d]||delete this.options.fields[b].validators[d];null===this.options.fields[b].enabled&&(this.options.fields[b].enabled=!0);for(var e=this,f=c.length,g=c.attr("type"),h=1===f||"radio"===g||"checkbox"===g,i="radio"===g||"checkbox"===g||"file"===g||"SELECT"===c.eq(0).get(0).tagName?"change":this._changeEvent,j=(this.options.fields[b].trigger||this.options.trigger||i).split(" "),k=a.map(j,function(a){return a+".update.bv"}).join(" "),l=0;f>l;l++){var m=c.eq(l),n=this.options.fields[b].group||this.options.group,o=m.parents(n),p=this.options.fields[b].container||this.options.container,q=p&&"tooltip"!==p&&"popover"!==p?a(p):this._getMessageContainer(m,n);p&&"tooltip"!==p&&"popover"!==p&&q.addClass("has-error"),q.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]').remove(),o.find('i[data-bv-icon-for="'+b+'"]').remove(),m.off(k).on(k,function(){e.updateStatus(a(this),e.STATUS_NOT_VALIDATED)}),m.data("bv.messages",q);for(d in this.options.fields[b].validators)m.data("bv.result."+d,this.STATUS_NOT_VALIDATED),h&&l!==f-1||a("<small/>").css("display","none").addClass("help-block").attr("data-bv-validator",d).attr("data-bv-for",b).attr("data-bv-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(b,d)).appendTo(q),this.options.fields[b].validators[d].onSuccess&&m.on(this.options.events.validatorSuccess,function(c,f){a.fn.bootstrapValidator.helpers.call(e.options.fields[b].validators[d].onSuccess,[c,f])}),this.options.fields[b].validators[d].onError&&m.on(this.options.events.validatorError,function(c,f){a.fn.bootstrapValidator.helpers.call(e.options.fields[b].validators[d].onError,[c,f])});if(this.options.fields[b].feedbackIcons!==!1&&"false"!==this.options.fields[b].feedbackIcons&&this.options.feedbackIcons&&this.options.feedbackIcons.validating&&this.options.feedbackIcons.invalid&&this.options.feedbackIcons.valid&&(!h||l===f-1)){o.removeClass("has-success").removeClass("has-error").addClass("has-feedback");var r=a("<i/>").css("display","none").addClass("form-control-feedback").attr("data-bv-icon-for",b).insertAfter(m);if("checkbox"===g||"radio"===g){var s=m.parent();s.hasClass(g)?r.insertAfter(s):s.parent().hasClass(g)&&r.insertAfter(s.parent())}0===o.find("label").length&&r.css("top",0),0!==o.find(".input-group").length&&r.css({top:0,"z-index":100}).insertAfter(o.find(".input-group").eq(0))}}switch(this.options.fields[b].onSuccess&&c.on(this.options.events.fieldSuccess,function(c,d){a.fn.bootstrapValidator.helpers.call(e.options.fields[b].onSuccess,[c,d])}),this.options.fields[b].onError&&c.on(this.options.events.fieldError,function(c,d){a.fn.bootstrapValidator.helpers.call(e.options.fields[b].onError,[c,d])}),this.options.fields[b].onStatus&&c.on(this.options.events.fieldStatus,function(c,d){a.fn.bootstrapValidator.helpers.call(e.options.fields[b].onStatus,[c,d])}),k=a.map(j,function(a){return a+".live.bv"}).join(" "),this.options.live){case"submitted":break;case"disabled":c.off(k);break;case"enabled":default:c.off(k).on(k,function(){e._exceedThreshold(a(this))&&e.validateField(a(this))})}c.trigger(a.Event(this.options.events.fieldInit),{bv:this,field:b,element:c})}},_getMessage:function(b,c){if(!(this.options.fields[b]&&a.fn.bootstrapValidator.validators[c]&&this.options.fields[b].validators&&this.options.fields[b].validators[c]))return"";var d=this.options.fields[b].validators[c];switch(!0){case!!d.message:return d.message;case!!this.options.fields[b].message:return this.options.fields[b].message;case!!a.fn.bootstrapValidator.i18n[c]:return a.fn.bootstrapValidator.i18n[c]["default"];default:return this.options.message}},_getMessageContainer:function(a,b){var c=a.parent();if(c.is(b))return c;var d=c.attr("class");if(!d)return this._getMessageContainer(c,b);d=d.split(" ");for(var e=d.length,f=0;e>f;f++)if(/^col-(xs|sm|md|lg)-\d+$/.test(d[f])||/^col-(xs|sm|md|lg)-offset-\d+$/.test(d[f]))return c;return this._getMessageContainer(c,b)},_submit:function(){var b=this.isValid(),c=b?this.options.events.formSuccess:this.options.events.formError,d=a.Event(c);this.$form.trigger(d),this.$submitButton&&(b?this._onSuccess(d):this._onError(d))},_isExcluded:function(b){var c=b.attr("data-bv-excluded"),d=b.attr("data-bv-field")||b.attr("name");switch(!0){case!!d&&this.options.fields&&this.options.fields[d]&&("true"===this.options.fields[d].excluded||this.options.fields[d].excluded===!0):case"true"===c:case""===c:return!0;case!!d&&this.options.fields&&this.options.fields[d]&&("false"===this.options.fields[d].excluded||this.options.fields[d].excluded===!1):case"false"===c:return!1;default:if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=a.map(this.options.excluded.split(","),function(b){return a.trim(b)}));for(var e=this.options.excluded.length,f=0;e>f;f++)if("string"==typeof this.options.excluded[f]&&b.is(this.options.excluded[f])||"function"==typeof this.options.excluded[f]&&this.options.excluded[f].call(this,b,this)===!0)return!0}return!1}},_exceedThreshold:function(b){var c=b.attr("data-bv-field"),d=this.options.fields[c].threshold||this.options.threshold;if(!d)return!0;var e=-1!==a.inArray(b.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"]);return e||b.val().length>=d},_onError:function(b){if(!b.isDefaultPrevented()){if("submitted"===this.options.live){this.options.live="enabled";var c=this;for(var d in this.options.fields)!function(b){var e=c.getFieldElements(b);if(e.length){var f=a(e[0]).attr("type"),g="radio"===f||"checkbox"===f||"file"===f||"SELECT"===a(e[0]).get(0).tagName?"change":c._changeEvent,h=c.options.fields[d].trigger||c.options.trigger||g,i=a.map(h.split(" "),function(a){return a+".live.bv"}).join(" ");e.off(i).on(i,function(){c._exceedThreshold(a(this))&&c.validateField(a(this))})}}(d)}var e=this.$invalidFields.eq(0);if(e){var f,g=e.parents(".tab-pane");g&&(f=g.attr("id"))&&a('a[href="#'+f+'"][data-toggle="tab"]').tab("show"),e.focus()}}},_onSuccess:function(a){a.isDefaultPrevented()||this.disableSubmitButtons(!0).defaultSubmit()},_onFieldValidated:function(b,c){var d=b.attr("data-bv-field"),e=this.options.fields[d].validators,f={},g=0,h={bv:this,field:d,element:b,validator:c};if(c)switch(b.data("bv.result."+c)){case this.STATUS_INVALID:b.trigger(a.Event(this.options.events.validatorError),h);break;case this.STATUS_VALID:b.trigger(a.Event(this.options.events.validatorSuccess),h)}f[this.STATUS_NOT_VALIDATED]=0,f[this.STATUS_VALIDATING]=0,f[this.STATUS_INVALID]=0,f[this.STATUS_VALID]=0;for(var i in e)if(e[i].enabled!==!1){g++;var j=b.data("bv.result."+i);j&&f[j]++}f[this.STATUS_VALID]===g?(this.$invalidFields=this.$invalidFields.not(b),b.trigger(a.Event(this.options.events.fieldSuccess),h)):0===f[this.STATUS_NOT_VALIDATED]&&0===f[this.STATUS_VALIDATING]&&f[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(b),b.trigger(a.Event(this.options.events.fieldError),h))},getFieldElements:function(b){return this._cacheFields[b]||(this._cacheFields[b]=this.options.fields[b]&&this.options.fields[b].selector?a(this.options.fields[b].selector):this.$form.find('[name="'+b+'"]')),this._cacheFields[b]},disableSubmitButtons:function(a){return a?"disabled"!==this.options.live&&this.$form.find(this.options.submitButtons).attr("disabled","disabled"):this.$form.find(this.options.submitButtons).removeAttr("disabled"),this},validate:function(){if(!this.options.fields)return this;this.disableSubmitButtons(!0);for(var a in this.options.fields)this.validateField(a);return this._submit(),this},validateField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b)}if(this.options.fields[b]&&this.options.fields[b].enabled===!1)return this;for(var d,e,f=this,g=c.attr("type"),h="radio"===g||"checkbox"===g?1:c.length,i="radio"===g||"checkbox"===g,j=this.options.fields[b].validators,k=0;h>k;k++){var l=c.eq(k);if(!this._isExcluded(l))for(d in j){l.data("bv.dfs."+d)&&l.data("bv.dfs."+d).reject();var m=l.data("bv.result."+d);m!==this.STATUS_VALID&&m!==this.STATUS_INVALID&&j[d].enabled!==!1?(l.data("bv.result."+d,this.STATUS_VALIDATING),e=a.fn.bootstrapValidator.validators[d].validate(this,l,j[d]),"object"==typeof e&&e.resolve?(this.updateStatus(i?b:l,this.STATUS_VALIDATING,d),l.data("bv.dfs."+d,e),e.done(function(a,b,c,d){a.removeData("bv.dfs."+b),d&&f.updateMessage(a,b,d),f.updateStatus(i?a.attr("data-bv-field"):a,c?f.STATUS_VALID:f.STATUS_INVALID,b),c&&f._submitIfValid===!0&&f._submit()})):"object"==typeof e&&void 0!==e.valid&&void 0!==e.message?(this.updateMessage(i?b:l,d,e.message),this.updateStatus(i?b:l,e.valid?this.STATUS_VALID:this.STATUS_INVALID,d)):"boolean"==typeof e&&this.updateStatus(i?b:l,e?this.STATUS_VALID:this.STATUS_INVALID,d)):this._onFieldValidated(l,d)}}return this},updateMessage:function(b,c,d){var e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-bv-field");break;case"string":e=this.getFieldElements(b)}e.each(function(){a(this).data("bv.messages").find('.help-block[data-bv-validator="'+c+'"][data-bv-for="'+b+'"]').html(d)})},updateStatus:function(b,c,d){var e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-bv-field");break;case"string":e=this.getFieldElements(b)}c===this.STATUS_NOT_VALIDATED&&(this._submitIfValid=!1);for(var f=this,g=e.attr("type"),h=this.options.fields[b].group||this.options.group,i="radio"===g||"checkbox"===g?1:e.length,j=0;i>j;j++){var k=e.eq(j);if(!this._isExcluded(k)){var l=k.parents(h),m=k.data("bv.messages"),n=m.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]'),o=d?n.filter('[data-bv-validator="'+d+'"]'):n,p=l.find('.form-control-feedback[data-bv-icon-for="'+b+'"]'),q=this.options.fields[b].container||this.options.container,r=null;if(d)k.data("bv.result."+d,c);else for(var s in this.options.fields[b].validators)k.data("bv.result."+s,c);o.attr("data-bv-result",c);var t,u,v=k.parents(".tab-pane");switch(v&&(t=v.attr("id"))&&(u=a('a[href="#'+t+'"][data-toggle="tab"]').parent()),c){case this.STATUS_VALIDATING:r=null,this.disableSubmitButtons(!0),l.removeClass("has-success").removeClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error");break;case this.STATUS_INVALID:r=!1,this.disableSubmitButtons(!0),l.removeClass("has-success").addClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),u&&u.removeClass("bv-tab-success").addClass("bv-tab-error");break;case this.STATUS_VALID:r=0===n.filter('[data-bv-result="'+this.STATUS_NOT_VALIDATED+'"]').length?n.filter('[data-bv-result="'+this.STATUS_VALID+'"]').length===n.length:null,null!==r&&(this.disableSubmitButtons(this.$submitButton?!this.isValid():!r),p&&p.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(r?this.options.feedbackIcons.valid:this.options.feedbackIcons.invalid).show()),l.removeClass("has-error has-success").addClass(this.isValidContainer(l)?"has-success":"has-error"),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(v)?"bv-tab-success":"bv-tab-error");break;case this.STATUS_NOT_VALIDATED:default:r=null,this.disableSubmitButtons(!1),l.removeClass("has-success").removeClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error")}switch(!0){case p&&"tooltip"===q:r===!1?p.css("cursor","pointer").tooltip("destroy").tooltip({html:!0,placement:"top",title:n.filter('[data-bv-result="'+f.STATUS_INVALID+'"]').eq(0).html()}):p.css("cursor","").tooltip("destroy");break;case p&&"popover"===q:r===!1?p.css("cursor","pointer").popover("destroy").popover({content:n.filter('[data-bv-result="'+f.STATUS_INVALID+'"]').eq(0).html(),html:!0,placement:"top",trigger:"hover click"}):p.css("cursor","").popover("destroy");break;default:c===this.STATUS_INVALID?o.show():o.hide()}k.trigger(a.Event(this.options.events.fieldStatus),{bv:this,field:b,element:k,status:c}),this._onFieldValidated(k,d)}}return this},isValid:function(){for(var a in this.options.fields)if(!this.isValidField(a))return!1;return!0},isValidField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b)}if(0===c.length||null===this.options.fields[b]||this.options.fields[b].enabled===!1)return!0;for(var d,e,f,g=c.attr("type"),h="radio"===g||"checkbox"===g?1:c.length,i=0;h>i;i++)if(d=c.eq(i),!this._isExcluded(d))for(e in this.options.fields[b].validators)if(this.options.fields[b].validators[e].enabled!==!1&&(f=d.data("bv.result."+e),f!==this.STATUS_VALID))return!1;return!0},isValidContainer:function(b){var c=this,d={},e="string"==typeof b?a(b):b;if(0===e.length)return!0;e.find("[data-bv-field]").each(function(){var b=a(this),e=b.attr("data-bv-field");c._isExcluded(b)||d[e]||(d[e]=b)});for(var f in d){var g=d[f];if(0!==g.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+f+'"]').filter(function(){var b=a(this).attr("data-bv-validator"),d=a(this).attr("data-bv-for");return c.options.fields[d].validators[b].enabled!==!1&&g.data("bv.result."+b)&&g.data("bv.result."+b)!==c.STATUS_VALID}).length)return!1}return!0},defaultSubmit:function(){this.$submitButton&&a("<input/>").attr("type","hidden").attr("data-bv-submit-hidden","").attr("name",this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit.bv").submit()},getInvalidFields:function(){return this.$invalidFields},getSubmitButton:function(){return this.$submitButton},getMessages:function(b,c){var d=this,e=[],f=a([]);switch(!0){case b&&"object"==typeof b:f=b;break;case b&&"string"==typeof b:var g=this.getFieldElements(b);if(g.length>0){var h=g.attr("type");f="radio"===h||"checkbox"===h?g.eq(0):g}break;default:f=this.$invalidFields}var i=c?'[data-bv-validator="'+c+'"]':"";return f.each(function(){e=e.concat(a(this).data("bv.messages").find('.help-block[data-bv-for="'+a(this).attr("data-bv-field")+'"][data-bv-result="'+d.STATUS_INVALID+'"]'+i).map(function(){var b=a(this).attr("data-bv-validator"),c=a(this).attr("data-bv-for");return d.options.fields[c].validators[b].enabled===!1?"":a(this).html()}).get())}),e},getOptions:function(a,b,c){if(!a)return this.options;if("object"==typeof a&&(a=a.attr("data-bv-field")),!this.options.fields[a])return null;var d=this.options.fields[a];return b?d.validators&&d.validators[b]?c?d.validators[b][c]:d.validators[b]:null:d},updateOption:function(a,b,c,d){return"object"==typeof a&&(a=a.attr("data-bv-field")),this.options.fields[a]&&this.options.fields[a].validators[b]&&(this.options.fields[a].validators[b][c]=d,this.updateStatus(a,this.STATUS_NOT_VALIDATED,b)),this},addField:function(b,c){var d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field")||b.attr("name");break;case"string":delete this._cacheFields[b],d=this.getFieldElements(b)}d.attr("data-bv-field",b);for(var e=d.attr("type"),f="radio"===e||"checkbox"===e?1:d.length,g=0;f>g;g++){var h=d.eq(g),i=this._parseOptions(h);i=null===i?c:a.extend(!0,c,i),this.options.fields[b]=a.extend(!0,this.options.fields[b],i),this._cacheFields[b]=this._cacheFields[b]?this._cacheFields[b].add(h):h,this._initField("checkbox"===e||"radio"===e?b:h)}return this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldAdded),{field:b,element:d,options:this.options.fields[b]}),this},removeField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field")||b.attr("name"),c.attr("data-bv-field",b);break;case"string":c=this.getFieldElements(b)}if(0===c.length)return this;for(var d=c.attr("type"),e="radio"===d||"checkbox"===d?1:c.length,f=0;e>f;f++){var g=c.eq(f);this.$invalidFields=this.$invalidFields.not(g),this._cacheFields[b]=this._cacheFields[b].not(g)}return this._cacheFields[b]&&0!==this._cacheFields[b].length||delete this.options.fields[b],("checkbox"===d||"radio"===d)&&this._initField(b),this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldRemoved),{field:b,element:c}),this},resetField:function(b,c){var d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field");break;case"string":d=this.getFieldElements(b)}var e=d.length;if(this.options.fields[b])for(var f=0;e>f;f++)for(var g in this.options.fields[b].validators)d.eq(f).removeData("bv.dfs."+g);if(this.updateStatus(b,this.STATUS_NOT_VALIDATED),c){var h=d.attr("type");"radio"===h||"checkbox"===h?d.removeAttr("checked").removeAttr("selected"):d.val("")}return this},resetForm:function(b){for(var c in this.options.fields)this.resetField(c,b);return this.$invalidFields=a([]),this.$submitButton=null,this.disableSubmitButtons(!1),this},revalidateField:function(a){return this.updateStatus(a,this.STATUS_NOT_VALIDATED).validateField(a),this},enableFieldValidators:function(a,b,c){var d=this.options.fields[a].validators;if(c&&d&&d[c]&&d[c].enabled!==b)this.options.fields[a].validators[c].enabled=b,this.updateStatus(a,this.STATUS_NOT_VALIDATED,c);else if(!c&&this.options.fields[a].enabled!==b){this.options.fields[a].enabled=b;for(var e in d)this.enableFieldValidators(a,b,e)}return this},getDynamicOption:function(b,c){var d="string"==typeof b?this.getFieldElements(b):b,e=d.val();if("function"==typeof c)return a.fn.bootstrapValidator.helpers.call(c,[e,this,d]);if("string"==typeof c){var f=this.getFieldElements(c);return f.length?f.val():a.fn.bootstrapValidator.helpers.call(c,[e,this,d])||c}return null},destroy:function(){var a,b,c,d,e,f,g;for(a in this.options.fields){b=this.getFieldElements(a),f=this.options.fields[a].container||this.options.container,g=this.options.fields[a].group||this.options.group;for(var h=0;h<b.length;h++){if(c=b.eq(h),c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+a+'"]').remove().end().end().removeData("bv.messages").parents(g).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),e=c.parents(g).find('i[data-bv-icon-for="'+a+'"]'))switch(f){case"tooltip":e.tooltip("destroy").remove();break;case"popover":e.popover("destroy").remove();break;default:e.remove()}for(d in this.options.fields[a].validators)c.data("bv.dfs."+d)&&c.data("bv.dfs."+d).reject(),c.removeData("bv.result."+d).removeData("bv.dfs."+d)}}this.disableSubmitButtons(!1),this.$hiddenButton.remove(),this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")}},a.fn.bootstrapValidator=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("bootstrapValidator"),g="object"==typeof c&&c;f||(f=new b(this,g),e.data("bootstrapValidator",f)),"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1))})},a.fn.bootstrapValidator.DEFAULT_OPTIONS={elementClass:"bv-form",message:"This value is not valid",group:".form-group",container:null,threshold:null,excluded:[":disabled",":hidden",":not(:visible)"],feedbackIcons:{valid:null,invalid:null,validating:null},submitButtons:'[type="submit"]',live:"enabled",fields:null,events:{formInit:"init.form.bv",formError:"error.form.bv",formSuccess:"success.form.bv",fieldAdded:"added.field.bv",fieldRemoved:"removed.field.bv",fieldInit:"init.field.bv",fieldError:"error.field.bv",fieldSuccess:"success.field.bv",fieldStatus:"status.field.bv",validatorError:"error.validator.bv",validatorSuccess:"success.validator.bv"}},a.fn.bootstrapValidator.validators={},a.fn.bootstrapValidator.i18n={},a.fn.bootstrapValidator.Constructor=b,a.fn.bootstrapValidator.helpers={call:function(a,b){if("function"==typeof a)return a.apply(this,b);if("string"==typeof a){"()"===a.substring(a.length-2)&&(a=a.substring(0,a.length-2));for(var c=a.split("."),d=c.pop(),e=window,f=0;f<c.length;f++)e=e[c[f]];return"undefined"==typeof e[d]?null:e[d].apply(this,b)}},format:function(b,c){a.isArray(c)||(c=[c]);for(var d in c)b=b.replace("%s",c[d]);return b},date:function(a,b,c,d){if(isNaN(a)||isNaN(b)||isNaN(c))return!1;if(c.length>2||b.length>2||a.length>4)return!1;if(c=parseInt(c,10),b=parseInt(b,10),a=parseInt(a,10),1e3>a||a>9999||0>=b||b>12)return!1;var e=[31,28,31,30,31,30,31,31,30,31,30,31];if((a%400===0||a%100!==0&&a%4===0)&&(e[1]=29),0>=c||c>e[b-1])return!1;if(d===!0){var f=new Date,g=f.getFullYear(),h=f.getMonth(),i=f.getDate();return g>a||a===g&&h>b-1||a===g&&b-1===h&&i>c}return!0},luhn:function(a){for(var b=a.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],e=0;b--;)e+=d[c][parseInt(a.charAt(b),10)],c^=1;return e%10===0&&e>0},mod11And10:function(a){for(var b=5,c=a.length,d=0;c>d;d++)b=(2*(b||10)%11+parseInt(a.charAt(d),10))%10;return 1===b},mod37And36:function(a,b){b=b||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var c=b.length,d=a.length,e=Math.floor(c/2),f=0;d>f;f++)e=(2*(e||c)%(c+1)+b.indexOf(a.charAt(f)))%c;return 1===e}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.base64=a.extend(a.fn.bootstrapValidator.i18n.base64||{},{"default":"Please enter a valid base 64 encoded"}),a.fn.bootstrapValidator.validators.base64={validate:function(a,b){var c=b.val();return""===c?!0:/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.between=a.extend(a.fn.bootstrapValidator.i18n.between||{},{"default":"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"}),a.fn.bootstrapValidator.validators.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(a){return"range"===a.attr("type")?{min:a.attr("min"),max:a.attr("max")}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),g=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=f&&g>=e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.between["default"],[f,g])}:{valid:e>f&&g>e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.between.notInclusive,[f,g])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.callback=a.extend(a.fn.bootstrapValidator.i18n.callback||{},{"default":"Please enter a valid value"}),a.fn.bootstrapValidator.validators.callback={html5Attributes:{message:"message",callback:"callback"},validate:function(b,c,d){var e=c.val();if(d.callback){var f=new a.Deferred,g=a.fn.bootstrapValidator.helpers.call(d.callback,[e,b,c]);return f.resolve(c,"callback","boolean"==typeof g?g:g.valid,"object"==typeof g&&g.message?g.message:null),f}return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.choice=a.extend(a.fn.bootstrapValidator.i18n.choice||{},{"default":"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"}),a.fn.bootstrapValidator.validators.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(b,c,d){var e=c.is("select")?b.getFieldElements(c.attr("data-bv-field")).find("option").filter(":selected").length:b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length,f=d.min?a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min):null,g=d.max?a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max):null,h=!0,i=d.message||a.fn.bootstrapValidator.i18n.choice["default"];switch((f&&e<parseInt(f,10)||g&&e>parseInt(g,10))&&(h=!1),!0){case!!f&&!!g:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.between,[parseInt(f,10),parseInt(g,10)]);break;case!!f:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.less,parseInt(f,10));break;case!!g:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.more,parseInt(g,10))}return{valid:h,message:i}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.creditCard=a.extend(a.fn.bootstrapValidator.i18n.creditCard||{},{"default":"Please enter a valid credit card number"}),a.fn.bootstrapValidator.validators.creditCard={validate:function(b,c){var d=c.val();if(""===d)return!0;if(/[^0-9-\s]+/.test(d))return!1;if(d=d.replace(/\D/g,""),!a.fn.bootstrapValidator.helpers.luhn(d))return!1;var e,f,g={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};for(e in g)for(f in g[e].prefix)if(d.substr(0,g[e].prefix[f].length)===g[e].prefix[f]&&-1!==a.inArray(d.length,g[e].length))return!0;return!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.cusip=a.extend(a.fn.bootstrapValidator.i18n.cusip||{},{"default":"Please enter a valid CUSIP number"}),a.fn.bootstrapValidator.validators.cusip={validate:function(b,c){var d=c.val();if(""===d)return!0;if(d=d.toUpperCase(),!/^[0-9A-Z]{9}$/.test(d))return!1;for(var e=a.map(d.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),f=e.length,g=0,h=0;f-1>h;h++){var i=parseInt(e[h],10);h%2!==0&&(i*=2),i>9&&(i-=9),g+=i}return g=(10-g%10)%10,g===e[f-1]}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.cvv=a.extend(a.fn.bootstrapValidator.i18n.cvv||{},{"default":"Please enter a valid CVV number"}),a.fn.bootstrapValidator.validators.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!/^[0-9]{3,4}$/.test(e))return!1;if(!d.creditCardField)return!0;var f=b.getFieldElements(d.creditCardField).val();if(""===f)return!0;f=f.replace(/\D/g,"");var g,h,i={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}},j=null;
for(g in i)for(h in i[g].prefix)if(f.substr(0,i[g].prefix[h].length)===i[g].prefix[h]&&-1!==a.inArray(f.length,i[g].length)){j=g;break}return null===j?!1:"AMERICAN_EXPRESS"===j?4===e.length:3===e.length}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.date=a.extend(a.fn.bootstrapValidator.i18n.date||{},{"default":"Please enter a valid date"}),a.fn.bootstrapValidator.validators.date={html5Attributes:{message:"message",format:"format",separator:"separator"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;d.format=d.format||"MM/DD/YYYY","date"===c.attr("type")&&(d.format="YYYY-MM-DD");var f=d.format.split(" "),g=f[0],h=f.length>1?f[1]:null,i=f.length>2?f[2]:null,j=e.split(" "),k=j[0],l=j.length>1?j[1]:null;if(f.length!==j.length)return!1;var m=d.separator;if(m||(m=-1!==k.indexOf("/")?"/":-1!==k.indexOf("-")?"-":null),null===m||-1===k.indexOf(m))return!1;if(k=k.split(m),g=g.split(m),k.length!==g.length)return!1;var n=k[a.inArray("YYYY",g)],o=k[a.inArray("MM",g)],p=k[a.inArray("DD",g)];if(!n||!o||!p||4!==n.length)return!1;var q=null,r=null,s=null;if(h){if(h=h.split(":"),l=l.split(":"),h.length!==l.length)return!1;if(r=l.length>0?l[0]:null,q=l.length>1?l[1]:null,s=l.length>2?l[2]:null){if(isNaN(s)||s.length>2)return!1;if(s=parseInt(s,10),0>s||s>60)return!1}if(r){if(isNaN(r)||r.length>2)return!1;if(r=parseInt(r,10),0>r||r>=24||i&&r>12)return!1}if(q){if(isNaN(q)||q.length>2)return!1;if(q=parseInt(q,10),0>q||q>59)return!1}}return a.fn.bootstrapValidator.helpers.date(n,o,p)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.different=a.extend(a.fn.bootstrapValidator.i18n.different||{},{"default":"Please enter a different value"}),a.fn.bootstrapValidator.validators.different={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=a.getFieldElements(c.field);return null===e||0===e.length?!0:d!==e.val()?(a.updateStatus(c.field,a.STATUS_VALID,"different"),!0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.digits=a.extend(a.fn.bootstrapValidator.i18n.digits||{},{"default":"Please enter only digits"}),a.fn.bootstrapValidator.validators.digits={validate:function(a,b){var c=b.val();return""===c?!0:/^\d+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ean=a.extend(a.fn.bootstrapValidator.i18n.ean||{},{"default":"Please enter a valid EAN number"}),a.fn.bootstrapValidator.validators.ean={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(c))return!1;for(var d=c.length,e=0,f=8===d?[3,1]:[1,3],g=0;d-1>g;g++)e+=parseInt(c.charAt(g),10)*f[g%2];return e=(10-e%10)%10,e+""===c.charAt(d-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.emailAddress=a.extend(a.fn.bootstrapValidator.i18n.emailAddress||{},{"default":""}),a.fn.bootstrapValidator.validators.emailAddress={enableByHtml5:function(a){return"email"===a.attr("type")},validate:function(a,b){var c=b.val();if(""===c)return!0;var d=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return d.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.file=a.extend(a.fn.bootstrapValidator.i18n.file||{},{"default":"Please choose a valid file"}),a.fn.bootstrapValidator.validators.file={html5Attributes:{extension:"extension",maxsize:"maxSize",message:"message",type:"type"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f,g=d.extension?d.extension.toLowerCase().split(","):null,h=d.type?d.type.toLowerCase().split(","):null,i=window.File&&window.FileList&&window.FileReader;if(i)for(var j=c.get(0).files,k=j.length,l=0;k>l;l++){if(d.maxSize&&j[l].size>parseInt(d.maxSize,10))return!1;if(f=j[l].name.substr(j[l].name.lastIndexOf(".")+1),g&&-1===a.inArray(f.toLowerCase(),g))return!1;if(j[l].type&&h&&-1===a.inArray(j[l].type.toLowerCase(),h))return!1}else if(f=e.substr(e.lastIndexOf(".")+1),g&&-1===a.inArray(f.toLowerCase(),g))return!1;return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.greaterThan=a.extend(a.fn.bootstrapValidator.i18n.greaterThan||{},{"default":"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"}),a.fn.bootstrapValidator.validators.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("min");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=f,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.greaterThan["default"],f)}:{valid:e>f,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.greaterThan.notInclusive,f)}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.grid=a.extend(a.fn.bootstrapValidator.i18n.grid||{},{"default":"Please enter a valid GRId number"}),a.fn.bootstrapValidator.validators.grid={validate:function(b,c){var d=c.val();return""===d?!0:(d=d.toUpperCase(),/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(d)?(d=d.replace(/\s/g,"").replace(/-/g,""),"GRID:"===d.substr(0,5)&&(d=d.substr(5)),a.fn.bootstrapValidator.helpers.mod37And36(d)):!1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.hex=a.extend(a.fn.bootstrapValidator.i18n.hex||{},{"default":"Please enter a valid hexadecimal number"}),a.fn.bootstrapValidator.validators.hex={validate:function(a,b){var c=b.val();return""===c?!0:/^[0-9a-fA-F]+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.hexColor=a.extend(a.fn.bootstrapValidator.i18n.hexColor||{},{"default":"Please enter a valid hex color"}),a.fn.bootstrapValidator.validators.hexColor={enableByHtml5:function(a){return"color"===a.attr("type")},validate:function(a,b){var c=b.val();return""===c?!0:/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.iban=a.extend(a.fn.bootstrapValidator.i18n.iban||{},{"default":"Please enter a valid IBAN number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestinian",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British"}}),a.fn.bootstrapValidator.validators.iban={html5Attributes:{message:"message",country:"country"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;e=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var f=d.country;if(f?"string"==typeof f&&this.REGEX[f]||(f=b.getDynamicOption(c,f)):f=e.substr(0,2),!this.REGEX[f])return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.iban.countryNotSupported,f)};if(!new RegExp("^"+this.REGEX[f]+"$").test(e))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.iban.country,a.fn.bootstrapValidator.i18n.iban.countries[f])};e=e.substr(4)+e.substr(0,4),e=a.map(e.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),e=e.join("");for(var g=parseInt(e.substr(0,1),10),h=e.length,i=1;h>i;++i)g=(10*g+parseInt(e.substr(i,1),10))%97;return{valid:1===g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.iban.country,a.fn.bootstrapValidator.i18n.iban.countries[f])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.id=a.extend(a.fn.bootstrapValidator.i18n.id||{},{"default":"Please enter a valid identification number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s identification number",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgarian",BR:"Brazilian",CH:"Swiss",CL:"Chilean",CZ:"Czech",DK:"Danish",EE:"Estonian",ES:"Spanish",FI:"Finnish",HR:"Croatian",IE:"Irish",IS:"Iceland",LT:"Lithuanian",LV:"Latvian",ME:"Montenegro",MK:"Macedonian",NL:"Dutch",RO:"Romanian",RS:"Serbian",SE:"Swedish",SI:"Slovenian",SK:"Slovak",SM:"San Marino",ZA:"South African"}}),a.fn.bootstrapValidator.validators.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","RO","RS","SE","SI","SK","SM","ZA"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(f?("string"!=typeof f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)):f=e.substr(0,2),-1===a.inArray(f,this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.id.countryNotSupported,f)};var g=["_",f.toLowerCase()].join("");return this[g](e)?!0:{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.id.country,a.fn.bootstrapValidator.i18n.id.countries[f.toUpperCase()])}},_validateJMBG:function(a,b){if(!/^\d{13}$/.test(a))return!1;var c=parseInt(a.substr(0,2),10),d=parseInt(a.substr(2,2),10),e=(parseInt(a.substr(4,3),10),parseInt(a.substr(7,2),10)),f=parseInt(a.substr(12,1),10);if(c>31||d>12)return!1;for(var g=0,h=0;6>h;h++)g+=(7-h)*(parseInt(a.charAt(h),10)+parseInt(a.charAt(h+6),10));if(g=11-g%11,(10===g||11===g)&&(g=0),g!==f)return!1;switch(b.toUpperCase()){case"BA":return e>=10&&19>=e;case"MK":return e>=41&&49>=e;case"ME":return e>=20&&29>=e;case"RS":return e>=70&&99>=e;case"SI":return e>=50&&59>=e;default:return!0}},_ba:function(a){return this._validateJMBG(a,"BA")},_mk:function(a){return this._validateJMBG(a,"MK")},_me:function(a){return this._validateJMBG(a,"ME")},_rs:function(a){return this._validateJMBG(a,"RS")},_si:function(a){return this._validateJMBG(a,"SI")},_bg:function(b){if(!/^\d{10}$/.test(b)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(b))return!1;b=b.replace(/\s/g,"");var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=f%11%10,f+""===b.substr(9,1)},_br:function(a){if(/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))return!1;if(!/^\d{11}$/.test(a)&&!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(a))return!1;a=a.replace(/\./g,"").replace(/-/g,"");for(var b=0,c=0;9>c;c++)b+=(10-c)*parseInt(a.charAt(c),10);if(b=11-b%11,(10===b||11===b)&&(b=0),b+""!==a.charAt(9))return!1;var d=0;for(c=0;10>c;c++)d+=(11-c)*parseInt(a.charAt(c),10);return d=11-d%11,(10===d||11===d)&&(d=0),d+""===a.charAt(10)},_ch:function(a){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))return!1;a=a.replace(/\D/g,"").substr(3);for(var b=a.length,c=0,d=8===b?[3,1]:[1,3],e=0;b-1>e;e++)c+=parseInt(a.charAt(e),10)*d[e%2];return c=10-c%10,c+""===a.charAt(b-1)},_cl:function(a){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(a))return!1;for(a=a.replace(/\-/g,"");a.length<9;)a="0"+a;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b?b=0:10===b&&(b="K"),b+""===a.charAt(8).toUpperCase()},_cz:function(b){if(!/^\d{9,10}$/.test(b))return!1;var c=1900+parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10)%50%20,e=parseInt(b.substr(4,2),10);if(9===b.length){if(c>=1980&&(c-=100),c>1953)return!1}else 1954>c&&(c+=100);if(!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;if(10===b.length){var f=parseInt(b.substr(0,9),10)%11;return 1985>c&&(f%=10),f+""===b.substr(9,1)}return!0},_dk:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);switch(!0){case-1!=="5678".indexOf(b.charAt(6))&&e>=58:e+=1800;break;case-1!=="0123".indexOf(b.charAt(6)):case-1!=="49".indexOf(b.charAt(6))&&e>=37:e+=1900;break;default:e+=2e3}return a.fn.bootstrapValidator.helpers.date(e,d,c)},_ee:function(a){return this._lt(a)},_es:function(a){if(!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(a)&&!/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(a))return!1;a=a.replace(/-/g,"");var b="XYZ".indexOf(a.charAt(0));-1!==b&&(a=b+a.substr(1)+"");var c=parseInt(a.substr(0,8),10);return c="TRWAGMYFPDXBNJZSQVHLCKE"[c%23],c===a.substr(8,1)},_fi:function(b){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(b))return!1;var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f={"+":1800,"-":1900,A:2e3};if(e=f[b.charAt(6)]+e,!a.fn.bootstrapValidator.helpers.date(e,d,c))return!1;var g=parseInt(b.substr(7,3),10);if(2>g)return!1;var h=b.substr(0,6)+b.substr(7,3)+"";return h=parseInt(h,10),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(h%31)===b.charAt(10)},_hr:function(b){return/^[0-9]{11}$/.test(b)?a.fn.bootstrapValidator.helpers.mod11And10(b):!1},_ie:function(a){if(!/^\d{7}[A-W][AHWTX]?$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return 9!==a.length||"A"!==a.charAt(8)&&"H"!==a.charAt(8)?a.charAt(7)===b(a.substr(0,7)):a.charAt(7)===b(a.substr(0,7)+a.substr(8)+"")},_is:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f=parseInt(b.charAt(9),10);if(e=9===f?1900+e:100*(20+f)+e,!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var g=0,h=[3,2,7,6,5,4,3,2],i=0;8>i;i++)g+=parseInt(b.charAt(i),10)*h[i];return g=11-g%11,g+""===b.charAt(8)},_lt:function(b){if(!/^[0-9]{11}$/.test(b))return!1;var c=parseInt(b.charAt(0),10),d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g=c%2===0?17+c/2:17+(c+1)/2;if(d=100*g+d,!a.fn.bootstrapValidator.helpers.date(d,e,f,!0))return!1;for(var h=0,i=[1,2,3,4,5,6,7,8,9,1],j=0;10>j;j++)h+=parseInt(b.charAt(j),10)*i[j];if(h%=11,10!==h)return h+""===b.charAt(10);for(h=0,i=[3,4,5,6,7,8,9,1,2,3],j=0;10>j;j++)h+=parseInt(b.charAt(j),10)*i[j];return h%=11,10===h&&(h=0),h+""===b.charAt(10)},_lv:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(b))return!1;b=b.replace(/\D/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(e=e+1800+100*parseInt(b.charAt(6),10),!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var f=0,g=[10,5,8,4,2,1,6,3,7,9],h=0;10>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=(f+1)%11%10,f+""===b.charAt(10)},_nl:function(a){for(;a.length<9;)a="0"+a;if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))return!1;if(a=a.replace(/\./g,""),0===parseInt(a,10))return!1;for(var b=0,c=a.length,d=0;c-1>d;d++)b+=(9-d)*parseInt(a.charAt(d),10);return b%=11,10===b&&(b=0),b+""===a.charAt(c-1)},_ro:function(b){if(!/^[0-9]{13}$/.test(b))return!1;var c=parseInt(b.charAt(0),10);if(0===c||7===c||8===c)return!1;var d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(f>31&&e>12)return!1;if(9!==c&&(d=g[c+""]+d,!a.fn.bootstrapValidator.helpers.date(d,e,f)))return!1;for(var h=0,i=[2,7,9,1,4,6,3,5,8,2,7,9],j=b.length,k=0;j-1>k;k++)h+=parseInt(b.charAt(k),10)*i[k];return h%=11,10===h&&(h=1),h+""===b.charAt(j-1)},_se:function(b){if(!/^[0-9]{10}$/.test(b)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(b))return!1;b=b.replace(/[^0-9]/g,"");var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);return a.fn.bootstrapValidator.helpers.date(c,d,e)?a.fn.bootstrapValidator.helpers.luhn(b):!1},_sk:function(a){return this._cz(a)},_sm:function(a){return/^\d{5}$/.test(a)},_za:function(b){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(b))return!1;var c=parseInt(b.substr(0,2),10),d=(new Date).getFullYear()%100,e=parseInt(b.substr(2,2),10),f=parseInt(b.substr(4,2),10);return c=c>=d?c+1900:c+2e3,a.fn.bootstrapValidator.helpers.date(c,e,f)?a.fn.bootstrapValidator.helpers.luhn(b):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.identical=a.extend(a.fn.bootstrapValidator.i18n.identical||{},{"default":"Please enter the same value"}),a.fn.bootstrapValidator.validators.identical={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=a.getFieldElements(c.field);return null===e||0===e.length?!0:d===e.val()?(a.updateStatus(c.field,a.STATUS_VALID,"identical"),!0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.imei=a.extend(a.fn.bootstrapValidator.i18n.imei||{},{"default":"Please enter a valid IMEI number"}),a.fn.bootstrapValidator.validators.imei={validate:function(b,c){var d=c.val();if(""===d)return!0;switch(!0){case/^\d{15}$/.test(d):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(d):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(d):return d=d.replace(/[^0-9]/g,""),a.fn.bootstrapValidator.helpers.luhn(d);case/^\d{14}$/.test(d):case/^\d{16}$/.test(d):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(d):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(d):return!0;default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.imo=a.extend(a.fn.bootstrapValidator.i18n.imo||{},{"default":"Please enter a valid IMO number"}),a.fn.bootstrapValidator.validators.imo={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^IMO \d{7}$/i.test(c))return!1;for(var d=0,e=c.replace(/^.*(\d{7})$/,"$1"),f=6;f>=1;f--)d+=e.slice(6-f,-f)*(f+1);return d%10===parseInt(e.charAt(6),10)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.integer=a.extend(a.fn.bootstrapValidator.i18n.integer||{},{"default":"Please enter a valid number"}),a.fn.bootstrapValidator.validators.integer={enableByHtml5:function(a){return"number"===a.attr("type")&&(void 0===a.attr("step")||a.attr("step")%1===0)},validate:function(a,b){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var c=b.val();return""===c?!0:/^(?:-?(?:0|[1-9][0-9]*))$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ip=a.extend(a.fn.bootstrapValidator.i18n.ip||{},{"default":"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"}),a.fn.bootstrapValidator.validators.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;d=a.extend({},{ipv4:!0,ipv6:!0},d);var f,g=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,h=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,i=!1;switch(!0){case d.ipv4&&!d.ipv6:i=g.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip.ipv4;break;case!d.ipv4&&d.ipv6:i=h.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip.ipv6;break;case d.ipv4&&d.ipv6:default:i=g.test(e)&&h.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip["default"]}return{valid:i,message:f}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.isbn=a.extend(a.fn.bootstrapValidator.i18n.isbn||{},{"default":"Please enter a valid ISBN number"}),a.fn.bootstrapValidator.validators.isbn={validate:function(a,b){var c=b.val();if(""===c)return!0;var d;switch(!0){case/^\d{9}[\dX]$/.test(c):case 13===c.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 13===c.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(c):case 17===c.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 17===c.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN13";break;default:return!1}c=c.replace(/[^0-9X]/gi,"");var e,f,g=c.split(""),h=g.length,i=0;switch(d){case"ISBN10":for(i=0,e=0;h-1>e;e++)i+=parseInt(g[e],10)*(10-e);return f=11-i%11,11===f?f=0:10===f&&(f="X"),f+""===g[h-1];case"ISBN13":for(i=0,e=0;h-1>e;e++)i+=e%2===0?parseInt(g[e],10):3*parseInt(g[e],10);return f=10-i%10,10===f&&(f="0"),f+""===g[h-1];default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.isin=a.extend(a.fn.bootstrapValidator.i18n.isin||{},{"default":"Please enter a valid ISIN number"}),a.fn.bootstrapValidator.validators.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(a,b){var c=b.val();if(""===c)return!0;c=c.toUpperCase();var d=new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$");if(!d.test(c))return!1;for(var e="",f=c.length,g=0;f-1>g;g++){var h=c.charCodeAt(g);e+=h>57?(h-55).toString():c.charAt(g)}var i="",j=e.length,k=j%2!==0?0:1;for(g=0;j>g;g++)i+=parseInt(e[g],10)*(g%2===k?2:1)+"";var l=0;for(g=0;g<i.length;g++)l+=parseInt(i.charAt(g),10);return l=(10-l%10)%10,l+""===c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ismn=a.extend(a.fn.bootstrapValidator.i18n.ismn||{},{"default":"Please enter a valid ISMN number"}),a.fn.bootstrapValidator.validators.ismn={validate:function(a,b){var c=b.val();if(""===c)return!0;var d;switch(!0){case/^M\d{9}$/.test(c):case/^M-\d{4}-\d{4}-\d{1}$/.test(c):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN10";break;case/^9790\d{9}$/.test(c):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(c):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN13";break;default:return!1}"ISMN10"===d&&(c="9790"+c.substr(1)),c=c.replace(/[^0-9]/gi,"");for(var e=c.length,f=0,g=[1,3],h=0;e-1>h;h++)f+=parseInt(c.charAt(h),10)*g[h%2];return f=10-f%10,f+""===c.charAt(e-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.issn=a.extend(a.fn.bootstrapValidator.i18n.issn||{},{"default":"Please enter a valid ISSN number"}),a.fn.bootstrapValidator.validators.issn={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(c))return!1;c=c.replace(/[^0-9X]/gi,"");var d=c.split(""),e=d.length,f=0;"X"===d[7]&&(d[7]=10);for(var g=0;e>g;g++)f+=parseInt(d[g],10)*(8-g);return f%11===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.lessThan=a.extend(a.fn.bootstrapValidator.i18n.lessThan||{},{"default":"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"}),a.fn.bootstrapValidator.validators.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("max");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:f>=e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.lessThan["default"],f)}:{valid:f>e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.lessThan.notInclusive,f)}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.mac=a.extend(a.fn.bootstrapValidator.i18n.mac||{},{"default":"Please enter a valid MAC address"}),a.fn.bootstrapValidator.validators.mac={validate:function(a,b){var c=b.val();return""===c?!0:/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.meid=a.extend(a.fn.bootstrapValidator.i18n.meid||{},{"default":"Please enter a valid MEID number"}),a.fn.bootstrapValidator.validators.meid={validate:function(b,c){var d=c.val();if(""===d)return!0;switch(!0){case/^[0-9A-F]{15}$/i.test(d):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(d):case/^\d{19}$/.test(d):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(d):var e=d.charAt(d.length-1);if(d=d.replace(/[- ]/g,""),d.match(/^\d*$/i))return a.fn.bootstrapValidator.helpers.luhn(d);d=d.slice(0,-1);for(var f="",g=1;13>=g;g+=2)f+=(2*parseInt(d.charAt(g),16)).toString(16);var h=0;for(g=0;g<f.length;g++)h+=parseInt(f.charAt(g),16);return h%10===0?"0"===e:e===(2*(10*Math.floor((h+10)/10)-h)).toString(16);case/^[0-9A-F]{14}$/i.test(d):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(d):case/^\d{18}$/.test(d):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(d):return!0;default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.notEmpty=a.extend(a.fn.bootstrapValidator.i18n.notEmpty||{},{"default":"Please enter a value"}),a.fn.bootstrapValidator.validators.notEmpty={enableByHtml5:function(a){var b=a.attr("required")+"";return"required"===b||"true"===b},validate:function(b,c){var d=c.attr("type");return"radio"===d||"checkbox"===d?b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length>0:""!==a.trim(c.val())}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.numeric=a.extend(a.fn.bootstrapValidator.i18n.numeric||{},{"default":"Please enter a valid float number"}),a.fn.bootstrapValidator.validators.numeric={html5Attributes:{message:"message",separator:"separator"},enableByHtml5:function(a){return"number"===a.attr("type")&&void 0!==a.attr("step")&&a.attr("step")%1!==0},validate:function(a,b,c){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var d=b.val();if(""===d)return!0;var e=c.separator||".";return"."!==e&&(d=d.replace(e,".")),!isNaN(parseFloat(d))&&isFinite(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.phone=a.extend(a.fn.bootstrapValidator.i18n.phone||{},{"default":"Please enter a valid phone number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid phone number in %s",countries:{BR:"Brazil",ES:"Spain",FR:"France",GB:"United Kingdom",MA:"Morocco",PK:"Pakistan",US:"USA"}}),a.fn.bootstrapValidator.validators.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","ES","FR","GB","MA","PK","US"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(("string"!=typeof f||-1===a.inArray(f,this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)),!f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.phone.countryNotSupported,f)};var g=!0;switch(f.toUpperCase()){case"BR":e=a.trim(e),g=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(e);break;
case"ES":e=a.trim(e),g=/^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(e);break;case"FR":e=a.trim(e),g=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(e);break;case"GB":e=a.trim(e),g=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);break;case"MA":e=a.trim(e),g=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(e);break;case"PK":e=a.trim(e),g=/^0?3[0-9]{2}[0-9]{7}$/.test(e);break;case"US":default:e=e.replace(/\D/g,""),g=/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e)&&10===e.length}return{valid:g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.phone.country,a.fn.bootstrapValidator.i18n.phone.countries[f])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.regexp=a.extend(a.fn.bootstrapValidator.i18n.regexp||{},{"default":"Please enter a value matching the pattern"}),a.fn.bootstrapValidator.validators.regexp={html5Attributes:{message:"message",regexp:"regexp"},enableByHtml5:function(a){var b=a.attr("pattern");return b?{regexp:b}:!1},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e="string"==typeof c.regexp?new RegExp(c.regexp):c.regexp;return e.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.remote=a.extend(a.fn.bootstrapValidator.i18n.remote||{},{"default":"Please enter a valid value"}),a.fn.bootstrapValidator.validators.remote={html5Attributes:{message:"message",name:"name",type:"type",url:"url"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=c.attr("data-bv-field"),g=d.data||{},h=d.url,i=d.type||"POST",j=d.headers||{};"function"==typeof g&&(g=g.call(this,b)),"function"==typeof h&&(h=h.call(this,b)),g[d.name||f]=e;var k=new a.Deferred,l=a.ajax({type:i,headers:j,url:h,dataType:"json",data:g});return l.then(function(a){k.resolve(c,"remote",a.valid===!0||"true"===a.valid,a.message?a.message:null)}),k.fail(function(){l.abort()}),k}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.rtn=a.extend(a.fn.bootstrapValidator.i18n.rtn||{},{"default":"Please enter a valid RTN number"}),a.fn.bootstrapValidator.validators.rtn={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^\d{9}$/.test(c))return!1;for(var d=0,e=0;e<c.length;e+=3)d+=3*parseInt(c.charAt(e),10)+7*parseInt(c.charAt(e+1),10)+parseInt(c.charAt(e+2),10);return 0!==d&&d%10===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.sedol=a.extend(a.fn.bootstrapValidator.i18n.sedol||{},{"default":"Please enter a valid SEDOL number"}),a.fn.bootstrapValidator.validators.sedol={validate:function(a,b){var c=b.val();if(""===c)return!0;if(c=c.toUpperCase(),!/^[0-9A-Z]{7}$/.test(c))return!1;for(var d=0,e=[1,3,1,7,3,9,1],f=c.length,g=0;f-1>g;g++)d+=e[g]*parseInt(c.charAt(g),36);return d=(10-d%10)%10,d+""===c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.siren=a.extend(a.fn.bootstrapValidator.i18n.siren||{},{"default":"Please enter a valid SIREN number"}),a.fn.bootstrapValidator.validators.siren={validate:function(b,c){var d=c.val();return""===d?!0:/^\d{9}$/.test(d)?a.fn.bootstrapValidator.helpers.luhn(d):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.siret=a.extend(a.fn.bootstrapValidator.i18n.siret||{},{"default":"Please enter a valid SIRET number"}),a.fn.bootstrapValidator.validators.siret={validate:function(a,b){var c=b.val();if(""===c)return!0;for(var d,e=0,f=c.length,g=0;f>g;g++)d=parseInt(c.charAt(g),10),g%2===0&&(d=2*d,d>9&&(d-=9)),e+=d;return e%10===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.step=a.extend(a.fn.bootstrapValidator.i18n.step||{},{"default":"Please enter a valid step of %s"}),a.fn.bootstrapValidator.validators.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(d=a.extend({},{baseValue:0,step:1},d),e=parseFloat(e),!a.isNumeric(e))return!1;var f=function(a,b){var c=Math.pow(10,b);a*=c;var d=a>0|-(0>a),e=a%1===.5*d;return e?(Math.floor(a)+(d>0))/c:Math.round(a)/c},g=function(a,b){if(0===b)return 1;var c=(a+"").split("."),d=(b+"").split("."),e=(1===c.length?0:c[1].length)+(1===d.length?0:d[1].length);return f(a-b*Math.floor(a/b),e)},h=g(e-d.baseValue,d.step);return{valid:0===h||h===d.step,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.step["default"],[d.step])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.stringCase=a.extend(a.fn.bootstrapValidator.i18n.stringCase||{},{"default":"Please enter only lowercase characters",upper:"Please enter only uppercase characters"}),a.fn.bootstrapValidator.validators.stringCase={html5Attributes:{message:"message","case":"case"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=(d["case"]||"lower").toLowerCase();return{valid:"upper"===f?e===e.toUpperCase():e===e.toLowerCase(),message:d.message||("upper"===f?a.fn.bootstrapValidator.i18n.stringCase.upper:a.fn.bootstrapValidator.i18n.stringCase["default"])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.stringLength=a.extend(a.fn.bootstrapValidator.i18n.stringLength||{},{"default":"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"}),a.fn.bootstrapValidator.validators.stringLength={html5Attributes:{message:"message",min:"min",max:"max"},enableByHtml5:function(a){var b=a.attr("maxlength");return b?{max:parseInt(b,10)}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),g=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max),h=e.length,i=!0,j=d.message||a.fn.bootstrapValidator.i18n.stringLength["default"];switch((f&&h<parseInt(f,10)||g&&h>parseInt(g,10))&&(i=!1),!0){case!!f&&!!g:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.between,[parseInt(f,10),parseInt(g,10)]);break;case!!f:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.more,parseInt(f,10));break;case!!g:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.less,parseInt(g,10))}return{valid:i,message:j}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.uri=a.extend(a.fn.bootstrapValidator.i18n.uri||{},{"default":"Please enter a valid URI"}),a.fn.bootstrapValidator.validators.uri={html5Attributes:{message:"message",allowlocal:"allowLocal"},enableByHtml5:function(a){return"url"===a.attr("type")},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=c.allowLocal===!0||"true"===c.allowLocal,f=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:"+(e?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(e?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i");return f.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.uuid=a.extend(a.fn.bootstrapValidator.i18n.uuid||{},{"default":"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"}),a.fn.bootstrapValidator.validators.uuid={html5Attributes:{message:"message",version:"version"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},g=d.version?d.version+"":"all";return{valid:null===f[g]?!0:f[g].test(e),message:d.version?a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.uuid.version,d.version):d.message||a.fn.bootstrapValidator.i18n.uuid["default"]}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.vat=a.extend(a.fn.bootstrapValidator.i18n.vat||{},{"default":"Please enter a valid VAT number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s VAT number",countries:{AT:"Austrian",BE:"Belgian",BG:"Bulgarian",BR:"Brazilian",CH:"Swiss",CY:"Cypriot",CZ:"Czech",DE:"German",DK:"Danish",EE:"Estonian",ES:"Spanish",FI:"Finnish",FR:"French",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungarian",HR:"Croatian",IE:"Irish",IS:"Iceland",IT:"Italian",LT:"Lithuanian",LU:"Luxembourg",LV:"Latvian",MT:"Maltese",NL:"Dutch",NO:"Norwegian",PL:"Polish",PT:"Portuguese",RO:"Romanian",RU:"Russian",RS:"Serbian",SE:"Swedish",SI:"Slovenian",SK:"Slovak",ZA:"South African"}}),a.fn.bootstrapValidator.validators.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","ZA"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(f?("string"!=typeof f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)):f=e.substr(0,2),-1===a.inArray(f,this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.vat.countryNotSupported,f)};var g=["_",f.toLowerCase()].join("");return this[g](e)?!0:{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.vat.country,a.fn.bootstrapValidator.i18n.vat.countries[f.toUpperCase()])}},_at:function(a){if(!/^ATU[0-9]{8}$/.test(a))return!1;a=a.substr(3);for(var b=0,c=[1,2,1,2,1,2,1],d=0,e=0;7>e;e++)d=parseInt(a.charAt(e),10)*c[e],d>9&&(d=Math.floor(d/10)+d%10),b+=d;return b=10-(b+4)%10,10===b&&(b=0),b+""===a.substr(7,1)},_be:function(a){if(!/^BE[0]{0,1}[0-9]{9}$/.test(a))return!1;if(a=a.substr(2),9===a.length&&(a="0"+a),"0"===a.substr(1,1))return!1;var b=parseInt(a.substr(0,8),10)+parseInt(a.substr(8,2),10);return b%97===0},_bg:function(b){if(!/^BG[0-9]{9,10}$/.test(b))return!1;b=b.substr(2);var c=0,d=0;if(9===b.length){for(d=0;8>d;d++)c+=parseInt(b.charAt(d),10)*(d+1);if(c%=11,10===c)for(c=0,d=0;8>d;d++)c+=parseInt(b.charAt(d),10)*(d+3);return c%=10,c+""===b.substr(8)}if(10===b.length){var e=function(b){var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=f%11%10,f+""===b.substr(9,1)},f=function(a){for(var b=0,c=[21,19,17,13,11,9,7,3,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=10,b+""===a.substr(9,1)},g=function(a){for(var b=0,c=[4,3,2,7,6,5,4,3,2],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(9,1))};return e(b)||f(b)||g(b)}return!1},_br:function(a){if(""===a)return!0;var b=a.replace(/[^\d]+/g,"");if(""===b||14!==b.length)return!1;if("00000000000000"===b||"11111111111111"===b||"22222222222222"===b||"33333333333333"===b||"44444444444444"===b||"55555555555555"===b||"66666666666666"===b||"77777777777777"===b||"88888888888888"===b||"99999999999999"===b)return!1;for(var c=b.length-2,d=b.substring(0,c),e=b.substring(c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);var i=2>f%11?0:11-f%11;if(i!==parseInt(e.charAt(0),10))return!1;for(c+=1,d=b.substring(0,c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);return i=2>f%11?0:11-f%11,i===parseInt(e.charAt(1),10)},_ch:function(a){if(!/^CHE[0-9]{9}(MWST)?$/.test(a))return!1;a=a.substr(3);for(var b=0,c=[5,4,3,2,7,6,5,4],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(8,1))},_cy:function(a){if(!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))return!1;if(a=a.substr(2),"12"===a.substr(0,2))return!1;for(var b=0,c={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},d=0;8>d;d++){var e=parseInt(a.charAt(d),10);d%2===0&&(e=c[e+""]),b+=e}return b="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b%26],b+""===a.substr(8,1)},_cz:function(b){if(!/^CZ[0-9]{8,10}$/.test(b))return!1;b=b.substr(2);var c=0,d=0;if(8===b.length){if(b.charAt(0)+""=="9")return!1;for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d),10)*(8-d);return c=11-c%11,10===c&&(c=0),11===c&&(c=1),c+""===b.substr(7,1)}if(9===b.length&&b.charAt(0)+""=="6"){for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d+1),10)*(8-d);return c=11-c%11,10===c&&(c=0),11===c&&(c=1),c=[8,7,6,5,4,3,2,1,0,9,10][c-1],c+""===b.substr(8,1)}if(9===b.length||10===b.length){var e=1900+parseInt(b.substr(0,2),10),f=parseInt(b.substr(2,2),10)%50%20,g=parseInt(b.substr(4,2),10);if(9===b.length){if(e>=1980&&(e-=100),e>1953)return!1}else 1954>e&&(e+=100);if(!a.fn.bootstrapValidator.helpers.date(e,f,g))return!1;if(10===b.length){var h=parseInt(b.substr(0,9),10)%11;return 1985>e&&(h%=10),h+""===b.substr(9,1)}return!0}return!1},_de:function(b){return/^DE[0-9]{9}$/.test(b)?(b=b.substr(2),a.fn.bootstrapValidator.helpers.mod11And10(b)):!1},_dk:function(a){if(!/^DK[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[2,7,6,5,4,3,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_ee:function(a){if(!/^EE[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,7,1,3,7,1,3,7,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_es:function(a){if(!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))return!1;a=a.substr(2);var b=function(a){var b=parseInt(a.substr(0,8),10);return b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},c=function(a){var b=["XYZ".indexOf(a.charAt(0)),a.substr(1)].join("");return b=parseInt(b,10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},d=function(a){var b,c=a.charAt(0);if(-1!=="KLM".indexOf(c))return b=parseInt(a.substr(1,8),10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1);if(-1!=="ABCDEFGHJNPQRSUVW".indexOf(c)){for(var d=0,e=[2,1,2,1,2,1,2],f=0,g=0;7>g;g++)f=parseInt(a.charAt(g+1),10)*e[g],f>9&&(f=Math.floor(f/10)+f%10),d+=f;return d=10-d%10,d+""===a.substr(8,1)||"JABCDEFGHI"[d]===a.substr(8,1)}return!1},e=a.charAt(0);return/^[0-9]$/.test(e)?b(a):/^[XYZ]$/.test(e)?c(a):d(a)},_fi:function(a){if(!/^FI[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[7,9,10,5,8,4,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_fr:function(b){if(!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(b))return!1;if(b=b.substr(2),!a.fn.bootstrapValidator.helpers.luhn(b.substr(2)))return!1;if(/^[0-9]{2}$/.test(b.substr(0,2)))return b.substr(0,2)===parseInt(b.substr(2)+"12",10)%97+"";var c,d="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return c=/^[0-9]{1}$/.test(b.charAt(0))?24*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-10:34*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-100,(parseInt(b.substr(2),10)+1+Math.floor(c/11))%11===c%11},_gb:function(a){if(!(/^GB[0-9]{9}$/.test(a)||/^GB[0-9]{12}$/.test(a)||/^GBGD[0-9]{3}$/.test(a)||/^GBHA[0-9]{3}$/.test(a)||/^GB(GD|HA)8888[0-9]{5}$/.test(a)))return!1;a=a.substr(2);var b=a.length;if(5===b){var c=a.substr(0,2),d=parseInt(a.substr(2),10);return"GD"===c&&500>d||"HA"===c&&d>=500}if(11===b&&("GD8888"===a.substr(0,6)||"HA8888"===a.substr(0,6)))return"GD"===a.substr(0,2)&&parseInt(a.substr(6,3),10)>=500||"HA"===a.substr(0,2)&&parseInt(a.substr(6,3),10)<500?!1:parseInt(a.substr(6,3),10)%97===parseInt(a.substr(9,2),10);if(9===b||12===b){for(var e=0,f=[8,7,6,5,4,3,2,10,1],g=0;9>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e%=97,parseInt(a.substr(0,3),10)>=100?0===e||42===e||55===e:0===e}return!0},_gr:function(a){if(!/^GR[0-9]{9}$/.test(a))return!1;a=a.substr(2),8===a.length&&(a="0"+a);for(var b=0,c=[256,128,64,32,16,8,4,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=b%11%10,b+""===a.substr(8,1)},_el:function(a){return/^EL[0-9]{9}$/.test(a)?(a="GR"+a.substr(2),this._gr(a)):!1},_hu:function(a){if(!/^HU[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,7,3,1,9,7,3,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_hr:function(b){return/^HR[0-9]{11}$/.test(b)?(b=b.substr(2),a.fn.bootstrapValidator.helpers.mod11And10(b)):!1},_ie:function(a){if(!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))return!1;a=a.substr(2);var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return/^[0-9]+$/.test(a.substr(0,7))?a.charAt(7)===b(a.substr(0,7)+a.substr(8)+""):-1!=="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1))?a.charAt(7)===b(a.substr(2,5)+a.substr(0,1)+""):!0},_is:function(a){return/^IS\d{5,6}$/.test(a)},_it:function(b){if(!/^IT[0-9]{11}$/.test(b))return!1;if(b=b.substr(2),0===parseInt(b.substr(0,7),10))return!1;var c=parseInt(b.substr(7,3),10);return 1>c||c>201&&999!==c&&888!==c?!1:a.fn.bootstrapValidator.helpers.luhn(b)},_lt:function(a){if(!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))return!1;a=a.substr(2);var b,c=a.length,d=0;for(b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+b%9);var e=d%11;if(10===e)for(d=0,b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+(b+2)%9);return e=e%11%10,e+""===a.charAt(c-1)},_lu:function(a){return/^LU[0-9]{8}$/.test(a)?(a=a.substr(2),parseInt(a.substr(0,6),10)%89+""===a.substr(6,2)):!1},_lv:function(b){if(!/^LV[0-9]{11}$/.test(b))return!1;b=b.substr(2);var c,d=parseInt(b.charAt(0),10),e=0,f=[],g=b.length;if(d>3){for(e=0,f=[9,1,4,8,3,10,2,5,7,6,1],c=0;g>c;c++)e+=parseInt(b.charAt(c),10)*f[c];return e%=11,3===e}var h=parseInt(b.substr(0,2),10),i=parseInt(b.substr(2,2),10),j=parseInt(b.substr(4,2),10);if(j=j+1800+100*parseInt(b.charAt(6),10),!a.fn.bootstrapValidator.helpers.date(j,i,h))return!1;for(e=0,f=[10,5,8,4,2,1,6,3,7,9],c=0;g-1>c;c++)e+=parseInt(b.charAt(c),10)*f[c];return e=(e+1)%11%10,e+""===b.charAt(g-1)},_mt:function(a){if(!/^MT[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,4,6,7,8,9,10,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%37===0},_nl:function(a){if(!/^NL[0-9]{9}B[0-9]{2}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=11,b>9&&(b=0),b+""===a.substr(8,1)},_no:function(a){if(!/^NO[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b&&(b=0),b+""===a.substr(8,1)},_pl:function(a){if(!/^PL[0-9]{10}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[6,5,7,2,3,4,5,6,7,-1],d=0;10>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_pt:function(a){if(!/^PT[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,b>9&&(b=0),b+""===a.substr(8,1)},_ro:function(a){if(!/^RO[1-9][0-9]{1,9}$/.test(a))return!1;a=a.substr(2);for(var b=a.length,c=[7,5,3,2,1,7,5,3,2].slice(10-b),d=0,e=0;b-1>e;e++)d+=parseInt(a.charAt(e),10)*c[e];return d=10*d%11%10,d+""===a.substr(b-1,1)},_ru:function(a){if(!/^RU([0-9]{9}|[0-9]{12})$/.test(a))return!1;a=a.substr(2);var b=0;if(10===a.length){var c=0,d=[2,4,10,3,5,9,4,6,8,0];for(b=0;10>b;b++)c+=parseInt(a.charAt(b),10)*d[b];return c%=11,c>9&&(c%=10),c+""===a.substr(9,1)}if(12===a.length){var e=0,f=[7,2,4,10,3,5,9,4,6,8,0],g=0,h=[3,7,2,4,10,3,5,9,4,6,8,0];for(b=0;11>b;b++)e+=parseInt(a.charAt(b),10)*f[b],g+=parseInt(a.charAt(b),10)*h[b];return e%=11,e>9&&(e%=10),g%=11,g>9&&(g%=10),e+""===a.substr(10,1)&&g+""===a.substr(11,1)}return!1},_rs:function(a){if(!/^RS[0-9]{9}$/.test(a))return!1;a=a.substr(2);for(var b=10,c=0,d=0;8>d;d++)c=(parseInt(a.charAt(d),10)+b)%10,0===c&&(c=10),b=2*c%11;return(b+parseInt(a.substr(8,1),10))%10===1},_se:function(b){return/^SE[0-9]{10}01$/.test(b)?(b=b.substr(2,10),a.fn.bootstrapValidator.helpers.luhn(b)):!1},_si:function(a){if(!/^SI[0-9]{8}$/.test(a))return!1;a=a.substr(2);for(var b=0,c=[8,7,6,5,4,3,2],d=0;7>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b&&(b=0),b+""===a.substr(7,1)},_sk:function(a){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)?parseInt(a.substr(2),10)%11===0:!1},_za:function(a){return/^ZA4\d{9}$/.test(a)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.vin=a.extend(a.fn.bootstrapValidator.i18n.vin||{},{"default":"Please enter a valid VIN number"}),a.fn.bootstrapValidator.validators.vin={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))return!1;c=c.toUpperCase();for(var d={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},e=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],f=0,g=c.length,h=0;g>h;h++)f+=d[c.charAt(h)+""]*e[h];var i=f%11;return 10===i&&(i="X"),i+""===c.charAt(8)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.zipCode=a.extend(a.fn.bootstrapValidator.i18n.zipCode||{},{"default":"Please enter a valid zip code",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid %s",countries:{BR:"Brazilian postal code",CA:"Canadian postal code",DK:"Danish postal code",GB:"United Kingdom postal code",IT:"Italian postal code",MA:"Moroccan postal code",NL:"Dutch postal code",SE:"Swiss postal code",SG:"Singapore postal code",US:"US zip code"}}),a.fn.bootstrapValidator.validators.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","CA","DK","GB","IT","MA","NL","SE","SG","US"],validate:function(b,c,d){var e=c.val();if(""===e||!d.country)return!0;var f=d.country;if(("string"!=typeof f||-1===a.inArray(f,this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)),!f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.zipCode.countryNotSupported,f)};var g=!1;switch(f=f.toUpperCase()){case"BR":g=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(e);break;case"CA":g=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(e);break;case"DK":g=/^(DK(-|\s)?)?\d{4}$/i.test(e);break;case"GB":g=this._gb(e);break;case"IT":g=/^(I-|IT-)?\d{5}$/i.test(e);break;case"MA":g=/^[1-9][0-9]{4}$/i.test(e);break;case"NL":g=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(e);break;case"SE":g=/^(S-)?\d{3}\s?\d{2}$/i.test(e);break;case"SG":g=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(e);break;case"US":default:g=/^\d{4,5}([\-]?\d{4})?$/.test(e)}return{valid:g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.zipCode.country,a.fn.bootstrapValidator.i18n.zipCode.countries[f])}},_gb:function(a){for(var b="[ABCDEFGHIJKLMNOPRSTUWYZ]",c="[ABCDEFGHKLMNOPQRSTUVWXY]",d="[ABCDEFGHJKPMNRSTUVWXY]",e="[ABEHMNPRVWXY]",f="[ABDEFGHJLNPQRSTUWXYZ]",g=[new RegExp("^("+b+"{1}"+c+"?[0-9]{1,2})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}[0-9]{1}"+d+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}"+c+"{1}?[0-9]{1}"+e+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],h=0;h<g.length;h++)if(g[h].test(a))return!0;return!1}}}(window.jQuery);
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e,n){return!!~(""+e).indexOf(n)}function u(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?u(o,t||n):o);return!1}function c(){var e=n.body;return e||(e=l(x?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,s,a,f,u="modernizr",d=l("div"),p=c();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=o?o[r]:u+(r+1),d.appendChild(a);return i=l("style"),i.type="text/css",i.id="s"+u,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),s=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=f,_.offsetHeight):d.parentNode.removeChild(d),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function a(){d&&(delete T.style,delete T.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,c,p,v,h,y=["modernizr","tspan"];!T.style;)d=!0,T.modElem=l(y.shift()),T.style=T.modElem.style;for(p=e.length,c=0;p>c;c++)if(v=e[c],h=T.style[v],f(v,"-")&&(v=s(v)),T.style[v]!==t){if(i||r(o,"undefined"))return a(),"pfx"==n?v:!0;try{T.style[v]=o}catch(g){}if(T.style[v]!=h)return a(),"pfx"==n?v:!0}return a(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+k.join(s+" ")+s).split(" "),d(a,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var g=[],C=[],S={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var w=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];S._prefixes=w;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",k=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=k;var E=function(e,n){var t=!1,r=l("div"),o=r.style;if(e in o){var i=k.length;for(o[e]=n,t=o[e];i--&&!t;)o[e]="-"+k[i]+"-"+n,t=o[e]}return""===t&&(t=!1),t};S.prefixedCSSValue=E;var P=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=P;var z=function(n){var r,o=w.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=w[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};S.atRule=z;var R={elem:l("modernizr")};Modernizr._q.push(function(){delete R.elem});var T={style:R.elem.style};Modernizr._q.unshift(function(){delete T.style}),S.testAllProps=h;var N=S.prefixed=function(e,n,t){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};S.prefixedCSS=function(e){var n=N(e);return n&&a(n)};S.testAllProps=y,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=y("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=y("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||y(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("csstransitions",y("transition","all",!0)),o(),i(g),delete S.addTest,delete S.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
(function(n,t){n.fn.watch=function(i){function u(t,i,u){t.each(function(){var i=n(this),t;window.MutationObserver?(t=i.data("__watcherObserver"),t==null&&(t=new MutationObserver(u.fnc),i.data("__watcherObserver",t)),t.observe(this,{attributes:!0,subtree:r.watchChildren,childList:r.watchChildren,characterData:!0})):u.intervalId=setInterval(u.fnc,r.interval)})}function f(i,r,f){var s=n(this),e=s.data(i),a,l,o,h,c;if(e&&(a=this,e.func)){for(l=!1,o=0,o;o<e.props.length;o++)if((h=e.props[o],c="",c=h.startsWith("attr_")?s.attr(h.replace("attr_","")):h.startsWith("prop_")?s.prop(h.replace("prop_","")):s.css(h),c!=t)&&e.vals[o]!=c){e.vals[o]=c;l=!0;break}l&&(s.unwatch(i),e.func.call(a,e,o,r,f),u(s,i,e))}}var r=n.extend({properties:null,interval:100,id:"_watcher_"+(new Date).getTime(),watchChildren:!1,callback:null},i);return this.each(function(){var e=this,i=n(this),o=function(n,t){f.call(e,r.id,n,t)},t={id:r.id,props:r.properties.split(","),vals:[r.properties.split(",").length],func:r.callback,fnc:o,origProps:r.properties,interval:r.interval,intervalId:null};n.each(t.props,function(n){var r=t.props[n];t.vals[n]=t.props[n].startsWith("attr_")?i.attr(r.replace("attr_","")):r.startsWith("prop_")?i.prop(r.replace("props_","")):i.css(r)});i.data(r.id,t);u(i,r.id,t)})};n.fn.unwatch=function(t){return this.each(function(){var i=n(this),u=i.data(t),r;try{window.MutationObserver?(r=i.data("__watcherObserver"),r&&(r.disconnect(),i.removeData("__watcherObserver"))):clearInterval(u.intervalId)}catch(f){}}),this};String.prototype.startsWith=function(n){return n===null||n===t?!1:n==this.substr(0,n.length)}})(jQuery,undefined);
;(function ($, window) {
var defaults = {
ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
videoId: 'ZCAnLxRvNNc', // toy robot in space is a good default, no?
mute: true,
repeat: true,
width: $(window).width(),
wrapperZIndex: 99,
playButtonClass: 'tubular-play',
pauseButtonClass: 'tubular-pause',
muteButtonClass: 'tubular-mute',
volumeUpClass: 'tubular-volume-up',
volumeDownClass: 'tubular-volume-down',
increaseVolumeBy: 10,
start: 0
};
var tubular = function(node, options) { // should be called on the wrapper div
var options = $.extend({}, defaults, options),
$body = $('body') // cache body node
$node = $(node); // cache wrapper node
var tubularContainer = '<div id="tubular-container" style="overflow: hidden; position: fixed; z-index: 1; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';
$('html,body').css({'width': '100%', 'height': '100%'});
$body.prepend(tubularContainer);
$node.css({position: 'relative', 'z-index': options.wrapperZIndex});
window.player;
window.onYouTubeIframeAPIReady = function() {
player = new YT.Player('tubular-player', {
width: options.width,
height: Math.ceil(options.width / options.ratio),
videoId: options.videoId,
playerVars: {
controls: 0,
showinfo: 0,
modestbranding: 1,
wmode: 'transparent'
},
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}
window.onPlayerReady = function(e) {
resize();
if (options.mute) e.target.mute();
e.target.seekTo(options.start);
e.target.playVideo();
}
window.onPlayerStateChange = function(state) {
if (state.data === 0 && options.repeat) { // video ended and repeat option is set true
player.seekTo(options.start); // restart
}
}
var resize = function() {
var width = $(window).width(),
pWidth, // player width, to be defined
height = $(window).height(),
pHeight, // player height, tbd
$tubularPlayer = $('#tubular-player');
if (width / options.ratio < height) { // if new video height < window height (gap underneath)
pWidth = Math.ceil(height * options.ratio); // get new player width
$tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
} else { // new video width < window width (gap to right)
pHeight = Math.ceil(width / options.ratio); // get new player height
$tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
}
}
$(window).on('resize.tubular', function() {
resize();
})
$('body').on('click','.' + options.playButtonClass, function(e) { // play button
e.preventDefault();
player.playVideo();
}).on('click', '.' + options.pauseButtonClass, function(e) { // pause button
e.preventDefault();
player.pauseVideo();
}).on('click', '.' + options.muteButtonClass, function(e) { // mute button
e.preventDefault();
(player.isMuted()) ? player.unMute() : player.mute();
}).on('click', '.' + options.volumeDownClass, function(e) { // volume down button
e.preventDefault();
var currentVolume = player.getVolume();
if (currentVolume < options.increaseVolumeBy) currentVolume = options.increaseVolumeBy;
player.setVolume(currentVolume - options.increaseVolumeBy);
}).on('click', '.' + options.volumeUpClass, function(e) { // volume up button
e.preventDefault();
if (player.isMuted()) player.unMute(); // if mute is on, unmute
var currentVolume = player.getVolume();
if (currentVolume > 100 - options.increaseVolumeBy) currentVolume = 100 - options.increaseVolumeBy;
player.setVolume(currentVolume + options.increaseVolumeBy);
})
}
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
$.fn.tubular = function (options) {
return this.each(function () {
if (!$.data(this, 'tubular_instantiated')) { // let's only run one
$.data(this, 'tubular_instantiated',
tubular(this, options));
}
});
}
})(jQuery, window);
var environment = 'desktop';
var environmentChanged = false;
var tabulationMode = false;
function viewport() {
var e = window,
a = 'inner';
if (!('innerWidth' in window)) {
a = 'client';
e = document.documentElement || document.body;
}
return {
width: e[a + 'Width'],
height: e[a + 'Height']
};
}
var windowWidth = viewport().width; // This should match your media query
function testEnvironment() {
var currentEnvironment = environment;
windowWidth = viewport().width;
if (windowWidth <= 1279 && windowWidth > 639) {
environment = 'tablette';
} else if (windowWidth <= 639) {
environment = 'mobile';
} else {
environment = 'desktop';
}
if (currentEnvironment != environment) {
return true;
} else {
return false;
}
}
if (navigator.userAgent.indexOf('Mac') > 0) {
$('body').addClass('mac');
}
function hackFloatRight() {}
function manageAutoComplete() {
if ($('.searchEngine').length) {
if (environment == 'desktop') {
$('.searchEngine input').autocomplete('enable');
} else {
$('.searchEngine input').autocomplete('disable');
}
}
}
function swapPlanRWD() {
if ($('.page--infos-plan-musee').length) {
var link = $('input[name=plan-src]').val();
if (environment == "desktop") {
$('section.plan').each(function() {
var planNumber = $(this).data('plan');
var url = link + 'plan-' + planNumber + '--desktop.jpg';
$(this).find('img').attr('src', url);
})
} else {
$('section.plan').each(function() {
var planNumber = $(this).data('plan');
var url = link + 'plan-' + planNumber + '--mobile.jpg';
$(this).find('img').attr('src', url);
})
}
}
}
if (document.createElement('input').placeholder == undefined) {
$('[placeholder]')
.focus(function() {
if ($(this).val() == $(this).attr('placeholder')) {
$(this).val('');
}
})
.blur(function() {
if ($(this).val() == '') {
$(this).val($(this).attr('placeholder'));
}
})
.blur()
.parents('form').submit(function() {
$(this).find('[placeholder]').each(function() {
if ($(this).val() == $(this).attr('placeholder')) {
$(this).val('');
}
});
});
}
var $video = $('#bgvid');
$video.on('canplaythrough', function() {
this.play();
});
function testCalcSupported() {
var el = document.createElement("div");
var isCalcSupported;
el.style.cssText = "width: calc(2em);"; //adapter pour inclure les préfixes nécessaires
isCalcSupported = !!el.style.length;
if (isCalcSupported) {
return true;
} else {
return false;
}
}
function calcTitrePage() {
if ($('.titrePage').length) {
var maxWidth = $('.headerRWD').width();
var minus1 = $('.headerRwd .blocLogo').outerWidth(true);
var minus2 = $('.search-icon-mobile').width() + 172;
var calculatedWidth;
if (environment == 'tablette') {
calculatedWidth = maxWidth - minus1 - minus2 - 25;
$('.titrePage').css('width', calculatedWidth);
} else if (environment == 'mobile') {
calculatedWidth = maxWidth - minus1 - minus2 - 12.5;
$('.titrePage').css('width', calculatedWidth);
}
}
}
function toggleLangAction() {
if (environment == 'desktop') {
$('header .blocLang .lang .langSelect').off('click');
$('header .blocLang .lang .langSelect').on('click', function() {
$(this).find('.langHidden').removeClass('hidden');
}).on('mouseleave', function() {
$(this).find('.langHidden').addClass('hidden');
});
} else {
$('header .blocLang .lang .langSelect').off();
$('header .blocLang .lang .langSelect').on('click', function(e) {
if ($('header .blocLang .lang .langSelect .langHidden.hidden').length) {
e.preventDefault();
}
$(this).find('.langHidden').toggleClass('hidden');
})
$('header .blocLang .lang .langSelect').focusout(function() {
$(this).find('.langHidden').addClass('hidden');
});
}
}
function dotRWD() {
if (environment == 'desktop') {
$('.gallery--artips-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 85,
watch: true
});
$('.gallery--artips-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 85,
watch: true
});
$('.gallery--parcours-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 65,
watch: true
});
$('.gallery--collection-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 85,
watch: true
});
$('.gallery--oeuvre-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 40,
watch: true
});
$('.gallery--oeuvre-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 40,
watch: true
});
$('.actu--item .title').dotdotdot({
wrap: 'word',
height: 60,
watch: true
});
$('.mini-actu .title').dotdotdot({
wrap: 'word',
height: 90,
watch: true
});
$('.contenuTitre h1').dotdotdot({
wrap: 'word',
height: 135,
watch: true
});
$('.contenuTitre p').dotdotdot({
wrap: 'word',
height: 65,
watch: true
});
$('.actu-slider h1').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.actu-slider .sous-titre-actu').dotdotdot({
wrap: 'word',
height: 110,
watch: true
});
$('.actu-slider .contenu-actu').dotdotdot({
wrap: 'word',
height: 140,
watch: true
});
$('.actu-slider .contenu-actu .bigger').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.arianne h1').dotdotdot({
wrap: 'word',
height: 50,
watch: true
});
$('.nommagePhoto').dotdotdot({
wrap: 'letter',
height: 48,
watch: true
});
} else if (environment == 'tablette') {
$('.gallery--artips-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 120,
watch: true
});
$('.gallery--artips-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 120,
watch: true
});
$('.gallery--parcours-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 150,
watch: true
});
$('.gallery--collection-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 85,
watch: true
});
$('.gallery--oeuvre-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 57,
watch: true
});
$('.gallery--oeuvre-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 57,
watch: true
});
$('.mini-actu .title').dotdotdot({
wrap: 'word',
height: 60,
watch: true
});
$('.contenuTitre h1').dotdotdot({
wrap: 'word',
height: 135,
watch: true
});
$('.contenuTitre p').dotdotdot({
wrap: 'word',
height: 65,
watch: true
});
$('.actu-slider h1').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.actu-slider .sous-titre-actu').dotdotdot({
wrap: 'word',
height: 110,
watch: true
});
$('.actu-slider .contenu-actu').dotdotdot({
wrap: 'word',
height: 140,
watch: true
});
$('.actu-slider .contenu-actu .bigger').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.sousTitrePage').dotdotdot({
wrap: 'word',
height: 31,
watch: true
});
} else {
$('.gallery--artips-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 60,
watch: true
});
$('.gallery--artips-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 60,
watch: true
});
$('.gallery--parcours-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 75,
watch: true
});
$('.gallery--collection-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 42,
watch: true
});
$('.gallery--oeuvre-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 28,
watch: true
});
$('.gallery--oeuvre-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 28,
watch: true
});
$('.mini-actu .title').dotdotdot({
wrap: 'word',
height: 30,
watch: true
});
$('.contenuTitre h1').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.contenuTitre p').dotdotdot({
wrap: 'word',
height: 32,
watch: true
});
$('.actu-slider h1').dotdotdot({
wrap: 'word',
height: 35,
watch: true
});
$('.actu-slider .sous-titre-actu').dotdotdot({
wrap: 'word',
height: 55,
watch: true
});
$('.actu-slider .contenu-actu').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.actu-slider .contenu-actu .bigger').dotdotdot({
wrap: 'word',
height: 70,
watch: true
});
$('.sousTitrePage').dotdotdot({
wrap: 'word',
height: 16,
watch: true
});
}
}
function dot() {
$('.gallery--collection-locked-4 .vignette .title').dotdotdot({
wrap: 'word',
height: 85,
watch: true
});
$('.gallery--plan-6 .vignette .title').dotdotdot({
wrap: 'word',
height: 40,
watch: true
});
$('.nommagePhoto').dotdotdot({
wrap: 'letter',
height: 48,
watch: true
});
}
function infoPratiqueTime() {
var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var day = d.getDay();
$('#hours').replaceWith(hours);
$('#minutes').replaceWith(minutes);
$('#seconds').replaceWith(seconds);
if ( (day == 1 && hours >= 14 && hours < 18) ||
( (day  == 0 || day > 2) && hours >= 10 && hours < 18) ) {
$('.bloc-green').addClass('ouvert');
$('.bloc-green').removeClass('ferme');
} else {
$('.bloc-green').addClass('ferme');
$('.bloc-green').removeClass('ouvert');
}
}
var video_width;
var video_height;
function swapPicture() {
if ($('.infos-gallery').length) {
$('.gallery-picto').on('click', function() {
var src = $(this).data('target');
var url = src;
$('.sliderFicheOeuvre .oeuvre-visu img').attr('src', url);
})
}
}
var sliderOeuvre;
function buildSliderOeuvre() {
if ($('.sliderOeuvre').length) {
if (environment != "desktop") {
if(!$('.sliderFicheOeuvre .bx-viewport').length){
$('.sliderOeuvre li:not(.visible-desktop)').each(function(i) {
$('.sliderFicheOeuvre').find('.pagerSquare').append('<a data-slide-index="' + i + '" href=""><div class="pager-square"></div></a>');
})
sliderOeuvre = $('.sliderOeuvre').bxSlider({
startSlide: '0',
pagerCustom: $('.pagerSquare'),
prevSelector: $('.sliderFicheOeuvre').find('.prevPage'),
nextSelector: $('.sliderFicheOeuvre').find('.nextPage'),
nextText: '',
prevText: '',
slideSelector: 'li.visible-mobile',
adaptiveHeight: true
});
}
} else {
if (sliderOeuvre) {
sliderOeuvre.destroySlider();
$('.sliderFicheOeuvre .oeuvre-visu').css('width', '735px');
$('.sliderFicheOeuvre .oeuvreControls').append('<div class="pagerSquare"></div>');
}
}
}
}
function positionRWD() {
if (environment == 'desktop') {
$('.Home-page .hide-video-mobile').appendTo(".classeVideo");
$("#tablette-appli").insertAfter('#tablette-appli-after');
$("#logo2").insertBefore('#logo3');
$("#logo7").insertAfter('#logo6');
$("#logo9").insertAfter('#logo8');
$("#logo10").insertAfter('#logo9');
} else if (environment == 'tablette') {
$('.fillerCookie').addClass('reallyHidden');
$('.Home-page .hide-video-mobile').detach();
$("#tablette-appli").insertBefore('#tabletteBefore');
$("#logo2").insertAfter('#logo1');
$("#logo7").insertBefore('#logo8');
$("#logo9").insertAfter('#deplacement-js-mobile');
$("#logo10").insertAfter('#logo9');
} else {
$('.fillerCookie').addClass('reallyHidden');
$('.Home-page .hide-video-mobile').detach();
$("#tablette-appli").insertBefore('#tabletteBefore');
$("#logo2").insertAfter('#logo1');
$("#logo7").insertBefore('#logo8');
$("#logo9").insertAfter('#deplacement-js-mobile');
$("#logo10").insertAfter('#logo9');
}
}
function ratioYoutube(){
var container_width = $('.bg-image').width();
var container_height= $('.bg-image').height();
var video_width = $('.classeVideo').data('video-width');
var video_height = $('.classeVideo').data('video-height');
var video_ratio = (video_height*100)/video_width;
var target_height = (container_width*video_ratio)/100;
var target_top_position = -((target_height-container_height)/2);
$('.Home-page iframe').height(target_height);
$('.Home-page iframe').css('top',target_top_position);
}
if ($('#player').length) {
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var video_src = $('.classeVideo').data('video-src');
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
player = new YT.Player('player', {
playerVars: {
'autoplay': 1,
'controls': 0,
'autohide': 1,
'wmode': 'transparent',
'loop': 1,
'playlist': video_src,
'disablekb': 1,
'iv_load_policy': 3,
'rel': 0
},
videoId: video_src,
height: "100%",
width: "100%",
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerReady
}
});
}
function onPlayerReady(event) {
event.target.mute();
ratioYoutube();
}
}
$("#prevent").focus(function() {
slider.reloadSlider();
});
$(document).ready(function() {
testEnvironment();
dot();
dotRWD();
toggleLangAction();
swapPicture();
positionRWD();
if((environment == "mobile") && ($('.sliderOeuvre').length)){
var nbr_img = $('.sliderOeuvre li').length;
$('.sliderOeuvre li').each(function( i ){
});
}
$('.has-scroll').click(function() {
target = $(this).data('target-scroll');
if ($(target).length) {
$('html, body').animate({
scrollTop: $(target).offset().top - $('#mainNav').height()
}, 'slow');
}
})
if ($('.toFancySelect').length) {
$('.toFancySelect').fancySelect();
}
$(document).on('keydown', function(e) {
var keyCode = e.keyCode || e.which;
if (keyCode == 9) {
tabulationMode = true;
}
});
$('.arianne .share').addClass('share-this share-btn hidden-phone');
$shareFull = $('#share-full'),
$shareFullOpenBtn = $('.share-btn'),
$shareFullCloseBtn = $('#share-full button.overlay-close'),
transEndEventNames = {
'WebkitTransition': 'webkitTransitionEnd',
'MozTransition': 'transitionend',
'OTransition': 'oTransitionEnd',
'msTransition': 'MSTransitionEnd',
'transition': 'transitionend'
},
transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
support = {
transitions: Modernizr.csstransitions
};
function toggleOverlay($menu) {
if ($menu.hasClass('open')) { //si ouvert on ferme
blockMainContentForModal(false);
$menu.removeClass('open').addClass('close');
var onEndTransitionFn = function(ev) {
$menu.removeClass('close');
};
if (support.transitions) { //si support des transitions on enclenche les transitions CSS
onEndTransitionFn();
} else {
onEndTransitionFn();
}
} else if (!$menu.hasClass('close')) { //si fermé on ouvre
blockMainContentForModal(true, 'share');
$menu.addClass('open');
if (tabulationMode) {
setTimeout(function() {
$("#share-full li:first a").focus();
}, 500);
}
}
}
if ($shareFullOpenBtn) {
$shareFullOpenBtn.on('click', function() {
toggleOverlay($shareFull);
});
$shareFullCloseBtn.on('click', function() {
toggleOverlay($shareFull);
});
$('#embed-link').click(function() {
$(this).select();
});
}
function blockMainContentForModal(statut, typeModal) {
$('#fond-modale').removeClass('menu-recherche menu-newsletter menu-partage');
if (statut == true) {
$('body').addClass('modale-active');
$('#fond-modale').removeClass('hidden');
if (typeModal == 'search') $('#fond-modale').addClass('menu-recherche');
if (typeModal == 'newsletter') $('#fond-modale').addClass('menu-newsletter');
if (typeModal == 'share') $('#fond-modale').addClass('menu-partage');
} else {
$('body').removeClass('modale-active');
$('#fond-modale').addClass('hidden');
}
}
var evitementDisplay = false;
$('#skipnavigation li a').on('focus', function() {
if (!evitementDisplay) {
evitementDisplay = true;
$('#skipnavigation').addClass('hasSkipLinkBanner');
}
}).on('blur', function() {
if (evitementDisplay) {
evitementDisplay = false;
$('#skipnavigation').removeClass('hasSkipLinkBanner');
}
});
if ($('.bigger').length) {
$("p:has(.bigger)").css("margin-bottom", "18");
}
$('.headerUp .burger').click(function() {
if ($('.rechercheRWD').css('display') == 'block') {
$('.rechercheRWD').css("display", "none");
$('.headerRWD .triangleSearch').toggleClass("hidden");
}
$('.containerMenuRWD').slideToggle();
$('body').toggleClass('no-overflow');
$('#skipToContent').toggleClass('no-overflow');
$('.oeuvre-infos-mobile').css('height', '0');
$(this).toggleClass('burger-icon-closed').toggleClass('burger-icon-opened');
$('.headerRWD .triangleBurger').toggleClass("hidden");
$('.rechercheRWD').css("display", "none");
});
$('.headerUp .buttonSearch').click(function() {
if ($('.containerMenuRWD').css('display') == 'block') {
$('.containerMenuRWD').css("display", "none");
$('.headerRWD .triangleBurger').toggleClass("hidden");
$('.headerUp .burger').toggleClass('burger-icon-closed').toggleClass('burger-icon-opened');
}
$('.rechercheRWD').slideToggle();
$('.headerRWD .triangleSearch').toggleClass("hidden");
$('body').removeClass("no-overflow");
$('.containerMenuRWD').css("display", " none");
});
$('.menuDeroulant button').click(function() {
$(this).toggleClass('more').toggleClass('less');
$(this).parent('li').next('li').next('li').find('.ul_lvl2').slideToggle();
});
$('.collections-parcours-visite .plus-info-unique button').click(function() {
$('.plus-info-toggle').slideToggle();
if ($(this).find('.icon-more-circled').length) {
$(this).find('.icon').removeClass('icon-more-circled');
$(this).find('.icon').addClass('icon-less-circled');
} else {
$(this).find('.icon').addClass('icon-more-circled');
$(this).find('.icon').removeClass('icon-less-circled');
}
});
if ($('.section-agenda .collection-select').length) {
$('.section-agenda .collection-select').on('click', function() {
$(this).parents('.select-contain').find('.collection-list').slideToggle();
if ($('.collection-select .icon-chevron-down').length) {
$('.collection-select .icon').addClass('icon-chevron-up');
$('.collection-select .icon').removeClass('icon-chevron-down');
} else {
$('.collection-select .icon').removeClass('icon-chevron-up');
$('.collection-select .icon').addClass('icon-chevron-down');
}
});
$('.section-agenda .collection-list a').on('click', function() {
var selected = $(this).html();
$('.collection-select .collection.active span').html(selected);
})
}
if ($('.arianne.collections-liste .collection-select').length) {
$('.arianne.collections-liste .collection-select').on('click', function() {
$(this).parents('.select-contain').find('.collection-list').slideToggle();
if ($('.collection-select .icon-chevron-down').length) {
$('.collection-select .icon').addClass('icon-chevron-up');
$('.collection-select .icon').removeClass('icon-chevron-down');
} else {
$('.collection-select .icon').removeClass('icon-chevron-up');
$('.collection-select .icon').addClass('icon-chevron-down');
}
});
$('.arianne.collections-liste .collection-list a').on('click', function() {
var selected = $(this).html();
$('.collection-select .collection.active span').html(selected);
})
}
if ($('.collections-liste-oeuvre').length) {
$('.collection-select').on('click', function() {
if ($('.collection-advance.open').length) {
var critere = false;
$('.collection-advance').removeClass('open');
$('.collection-advance').fadeOut();
$('body').removeClass('has-advance');
$('.collection-select .icon').removeClass('icon-chevron-up');
$('.collection-select .icon').addClass('icon-chevron-down');
$('.collection-advance select').each(function() {
if ($(this).val() != null) {
critere = true;
}
})
if (critere == false) {
$('.collection-select .collection.active span').html('Selection Tri');
}
} else {
$(this).parents('.arianne').find('.collection-list').slideToggle();
if ($('.collection-select .icon-chevron-down').length) {
$('.collection-select .icon').addClass('icon-chevron-up');
$('.collection-select .icon').removeClass('icon-chevron-down');
} else {
$('.collection-select .icon').removeClass('icon-chevron-up');
$('.collection-select .icon').addClass('icon-chevron-down');
}
}
});
$('.collection-list a').on('click', function() {
var selected = $(this).html();
$('.collection-select .collection.active span').html(selected);
})
$('.advance').on('click', function() {
var selected = $(this).html();
$('body').addClass('has-advance');
$('.collection-select .collection.active span').html(selected);
$('.collection-list').hide(0);
$('.collection-advance').fadeIn();
$('.collection-advance').addClass('open');
})
$('.reset').on('click', function() {
$('.collection-advance .select').each(function() {
$(this).find('select').val(null);
var reset = $(this).find('label').html();
$(this).find('.trigger').html(reset);
})
})
}
if ($('.tovalidate').length) {
$('.tovalidate').bootstrapValidator();
}
if ($('.searchEngine').length) {
$(function() {
$('.searchEngine input').autocomplete({
source: [],
})
$('.searchEngine input').change(function() {})
});
}
$(".searchEngine input").on("autocompletecreate", function(event, ui) {
setTimeout(function() {
manageAutoComplete();
}, 1);
});
}); // Fin document ready
var mySelect = $('.tovalidate');
mySelect.fancySelect().on('change.fs', function() {
$(this).trigger('change.$');
if ($('.selectContact-container .trigger').hasClass('selected')) {
if ($('.selectContact-container.form-group').hasClass('has-error')) {
$('.selectContact-container .fancy-select .options').on('click', 'li', function() {
$('.selectContact-container.form-group').removeClass('has-error');
$('.selectContact-container.form-group').addClass('has-success');
$('.selectContact-container .help-block').addClass('hidden');
});
}
}
});
$(window).load(function() {
$('body').removeClass('.no-js');
buildSliderOeuvre();
if ($('#map_1').length) {
var stylez = [{
"stylers": [{
"visibility": "on"
}, {
"saturation": -83
}]
}, {
"featureType": "road",
"elementType": "geometry",
"stylers": [{
"color": "#E06245"
}, {
"visibility": "on"
}, {
"saturation": -53
}]
}, {
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [{
"visibility": "on"
}, {
"weight": 0.8
}, {
"color": "#E06245"
}]
}];
var mapstyle_id = 'minimal';
var my_cat_style = {
red: {
icon: '../images/marker-map.png'
},
};
$("#map_1").mosne_map({
elements: '#map_1_list .maplocation',
clickedzoom: 8,
mapstyle: stylez,
mapstyle_name: mapstyle_id,
infowindows: false,
infobox: true,
mode: 'address',
cat_style: my_cat_style
});
}
if ($('.bxslider').length) {
var lockedItem = 0;
$('.bxslider li').each(function() {
$('.bxslider').parent('.sliderGabarit').find('.pagerSquare').append('<a data-slide-index="' + lockedItem + '" href=""><div class="pager-square"></div></a>');
lockedItem++;
})
$('.bxslider').each(function() {
$(this).bxSlider({
startSlide: '0',
pagerCustom: $('.pagerSquare'),
prevSelector: $(this).parent('.sliderGabarit').find('.prevPage'),
nextSelector: $(this).parent('.sliderGabarit').find('.nextPage'),
nextText: '',
prevText: ''
})
});
$('.prevPage .bx-prev').addClass('icon-chevron-left icon');
$('.nextPage .bx-next').addClass('icon-chevron-right icon');
}
if ($('.locked-bxslider').length) {
var lockedItem = 0;
$('.locked-bxslider li').each(function() {
$('.locked-bxslider').parent('.sliderGabarit').find('.pagerSquare').append('<a data-slide-index="' + lockedItem + '" href=""><div class="pager-square"></div></a>');
lockedItem++;
})
$('.locked-bxslider').each(function() {
$(this).bxSlider({
startSlide: '0',
pagerCustom: $('.pagerSquare'),
prevSelector: $(this).parent('.sliderGabarit').find('.prevPage'),
nextSelector: $(this).parent('.sliderGabarit').find('.nextPage'),
nextText: '',
prevText: ''
})
});
$('.prevPage .bx-prev').addClass('icon-chevron-left icon');
$('.nextPage .bx-next').addClass('icon-chevron-right icon');
}
if ($('.bxsliderHome').length) {
$('.bxsliderHome').each(function() {
var currentSlider = $(this);
$(this).find('li').each(function(i) {
currentSlider.parent('.sliderHome').find('.pagerSquare').append('<a data-slide-index="' + i + '" href=""><div class="pager-square"></div></a>');
})
$(this).bxSlider({
startSlide: '0',
pagerCustom: $('.pagerSquare'),
prevSelector: $(this).parent('.sliderHome').find('.prevPage'),
nextSelector: $(this).parent('.sliderHome').find('.nextPage'),
nextText: '',
prevText: ''
})
});
$('.prevPage .bx-prev').addClass('icon-chevron-left icon');
$('.nextPage .bx-next').addClass('icon-chevron-right icon');
}
if (!testCalcSupported()) {
calcTitrePage();
}
$(window).resize(function() {
if (!testCalcSupported()) {
calcTitrePage();
if (environment != 'desktop') {
if ($('.banner--anchor-4 .scrollTo--picto').length) {
$('.banner--anchor-4 .scrollTo--picto').each(function() {
var width = $('.banner--anchor-4').width() - 130;
$(this).find('.innerContent').css('width', width);
})
}
if ($('#player').length) {
$('#player').remove();
}
}
if (environment == 'tablette') {
if ($('.artist-detail').length) {
$('.artist-detail').each(function() {
var calcWidth = $('.artist-details').width() - 220;
$(this).css('width', calcWidth);
})
}
} else if (environment == 'mobile') {
if ($('.artist-detail').length) {
$('.artist-detail').each(function() {
var calcWidth = $('.artist-details').width() - 110;
$(this).css('width', calcWidth);
})
}
}
if (environment == 'desktop') {
if ($('#player').length) {
ratioYoutube();
}
};
}
if (testEnvironment()) { // S'execute si environment a changé
dotRWD();
buildSliderOeuvre();
positionRWD();
manageAutoComplete();
if ($('.anchor-contain').length) {
$('.anchor-contain .has-scroll').not('.icon-chevron-down').each(function() {
$(this).removeClass('scrollTo--picto');
setTimeout(function() {
$('.anchor-contain .has-scroll').not('.icon-chevron-down').addClass('scrollTo--picto');
}, 200)
});
$('.anchor-contain .icon-chevron-down').removeClass('scrollTo--picto');
}
if (environment == 'desktop') {
} else if (environment == 'tablette') {
} else {
}
}
});
}); // Fin Window load
function fixHeader(){
$('.nav').addClass('sticky');
$('.filler').height($('header').height());
$('.filler').removeClass('hidden');
}
function defixHeader(){
$('.nav').removeClass('sticky');
$('.filler').addClass('hidden');
}
function setHeader(){
var scrolled = $(window).scrollTop();
var headerHeight = $('header').height() - $('.headerDesktop').height();
if(scrolled){
fixHeader();
}else{
defixHeader();
}
}
$(document).ready(function(){
setHeader();
$(window).scroll(function() {
setHeader();
});
});
(function() {
var device,
previousDevice,
addClass,
documentElement,
find,
handleOrientation,
hasClass,
orientationEvent,
removeClass,
userAgent;
previousDevice = window.device;
device = {};
window.device = device;
documentElement = window.document.documentElement;
userAgent = window.navigator.userAgent.toLowerCase();
device.ios = function () {
return device.iphone() || device.ipod() || device.ipad();
};
device.iphone = function () {
return !device.windows() && find('iphone');
};
device.ipod = function () {
return find('ipod');
};
device.ipad = function () {
return find('ipad');
};
device.android = function () {
return !device.windows() && find('android');
};
device.androidPhone = function () {
return device.android() && find('mobile');
};
device.androidTablet = function () {
return device.android() && !find('mobile');
};
device.blackberry = function () {
return find('blackberry') || find('bb10') || find('rim');
};
device.blackberryPhone = function () {
return device.blackberry() && !find('tablet');
};
device.blackberryTablet = function () {
return device.blackberry() && find('tablet');
};
device.windows = function () {
return find('windows');
};
device.windowsPhone = function () {
return device.windows() && find('phone');
};
device.windowsTablet = function () {
return device.windows() && (find('touch') && !device.windowsPhone());
};
device.fxos = function () {
return (find('(mobile;') || find('(tablet;')) && find('; rv:');
};
device.fxosPhone = function () {
return device.fxos() && find('mobile');
};
device.fxosTablet = function () {
return device.fxos() && find('tablet');
};
device.meego = function () {
return find('meego');
};
device.cordova = function () {
return window.cordova && location.protocol === 'file:';
};
device.nodeWebkit = function () {
return typeof window.process === 'object';
};
device.mobile = function () {
return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
};
device.tablet = function () {
return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
};
device.desktop = function () {
return !device.tablet() && !device.mobile();
};
device.television = function() {
var i, tvString;
television = [
"googletv",
"viera",
"smarttv",
"internet.tv",
"netcast",
"nettv",
"appletv",
"boxee",
"kylo",
"roku",
"dlnadoc",
"roku",
"pov_tv",
"hbbtv",
"ce-html"
];
i = 0;
while (i < television.length) {
if (find(television[i])) {
return true;
}
i++;
}
return false;
};
device.portrait = function () {
return (window.innerHeight / window.innerWidth) > 1;
};
device.landscape = function () {
return (window.innerHeight / window.innerWidth) < 1;
};
device.noConflict = function () {
window.device = previousDevice;
return this;
};
find = function (needle) {
return userAgent.indexOf(needle) !== -1;
};
hasClass = function (className) {
var regex;
regex = new RegExp(className, 'i');
return documentElement.className.match(regex);
};
addClass = function (className) {
var currentClassNames = null;
if (!hasClass(className)) {
currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
documentElement.className = currentClassNames + " " + className;
}
};
removeClass = function (className) {
if (hasClass(className)) {
documentElement.className = documentElement.className.replace(" " + className, "");
}
};
if (device.ios()) {
if (device.ipad()) {
addClass("ios ipad tablet");
} else if (device.iphone()) {
addClass("ios iphone mobile");
} else if (device.ipod()) {
addClass("ios ipod mobile");
}
} else if (device.android()) {
if (device.androidTablet()) {
addClass("android tablet");
} else {
addClass("android mobile");
}
} else if (device.blackberry()) {
if (device.blackberryTablet()) {
addClass("blackberry tablet");
} else {
addClass("blackberry mobile");
}
} else if (device.windows()) {
if (device.windowsTablet()) {
addClass("windows tablet");
} else if (device.windowsPhone()) {
addClass("windows mobile");
} else {
addClass("desktop");
}
} else if (device.fxos()) {
if (device.fxosTablet()) {
addClass("fxos tablet");
} else {
addClass("fxos mobile");
}
} else if (device.meego()) {
addClass("meego mobile");
} else if (device.nodeWebkit()) {
addClass("node-webkit");
} else if (device.television()) {
addClass("television");
} else if (device.desktop()) {
addClass("desktop");
}
if (device.cordova()) {
addClass("cordova");
}
handleOrientation = function () {
if (device.landscape()) {
removeClass("portrait");
addClass("landscape");
} else {
removeClass("landscape");
addClass("portrait");
}
return;
};
if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
orientationEvent = "orientationchange";
} else {
orientationEvent = "resize";
}
if (window.addEventListener) {
window.addEventListener(orientationEvent, handleOrientation, false);
} else if (window.attachEvent) {
window.attachEvent(orientationEvent, handleOrientation);
} else {
window[orientationEvent] = handleOrientation;
}
handleOrientation();
if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
define(function() {
return device;
});
} else if (typeof module !== 'undefined' && module.exports) {
module.exports = device;
} else {
window.device = device;
}
}).call(this);
