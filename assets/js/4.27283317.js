(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{341:function(t,e,a){},354:function(t,e,a){"use strict";a(341)},365:function(t,e,a){"use strict";a.r(e);var n=a(4),r=a(142),o=a(143),i=a(54),s=a(38),l=a(144),u={name:"Home",components:{CBox:n.a,CHeading:r.a,CImage:o.a,CText:i.a,CButton:s.a,CStack:l.a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(a(354),a(40)),d=Object(c.a)(u,(function(){var t=this,e=t._self._c;return e("CBox",{staticClass:"home",attrs:{as:"main","aria-labelledby":null!==t.data.heroText?"main-title":null,mx:"auto"}},[e("CBox",{attrs:{as:"header",d:"flex",flexDir:"column",alignItems:"center",paddingTop:"2rem",textAlign:"center"}},[t.data.heroImages?e("CStack",{attrs:{"is-inline":[!1,!0]}},t._l(t.data.heroImages,(function(a){return e("CBox",[e("CBox",{key:a.name,attrs:{as:"img",src:t.$withBase(a.src),alt:a.alt,maxH:"280px",w:"280px"}})],1)})),1):t._e(),t._v(" "),null!==t.data.heroText?e("CHeading",{attrs:{as:"h1",fontSize:"3rem",m:"1.8rem auto"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("CText",{attrs:{m:"1.8rem auto",maxWidth:"35rem",fontSize:"1.6rem",lineHeight:"1.3",color:"gray.500"}},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("CButton",{attrs:{as:"a",href:t.data.actionLink,backgroundColor:"vue.500",color:"white",p:"2rem 1.5rem",fontSize:"1.2rem",_hover:{backgroundColor:"vue.400"}}},[t._v("\n      "+t._s(t.data.actionText)+"\n    ")]):t._e()],1),t._v(" "),t.data.features&&t.data.features.length?e("CBox",{attrs:{borderTop:"1px solid #eee",p:"1.2rem 0","margin-top":"2.5rem",d:"flex",flexDir:["column","row"],"flex-wrap":"wrap","align-items":"flex-start","align-content":"stretch","justify-content":"space-between"}},t._l(t.data.features,(function(a,n){return e("CBox",{key:n,attrs:{"flex-grow":"1","flex-basis":"30%","max-width":["100%","30%"],p:["0.5rem","0"]}},[e("CHeading",{attrs:{as:"h2",fontSize:"1.4rem",fontWeight:"500",color:"gray.600",borderBottom:"none"}},[t._v("\n        "+t._s(a.title)+"\n      ")]),t._v(" "),e("CText",{attrs:{color:"gray.600"}},[t._v(t._s(a.details))])],1)})),1):t._e(),t._v(" "),e("Content"),t._v(" "),t.data.footer?e("CBox",{attrs:{as:"footer",padding:"2.5rem",borderTop:"1px solid #eee",textAlign:"center",color:"gray.500"}},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=d.exports},387:function(t,e,a){"use strict";a.r(e);var n=a(39),r=a(147),o=a(380),i={name:"ChakraLayout",components:{CThemeProvider:n.a,CReset:r.a,Layout:o.a}},s=a(40),l=Object(s.a)(i,(function(){var t=this._self._c;return t("CThemeProvider",[t("CReset"),this._v(" "),t("Layout")],1)}),[],!1,null,null,null);e.default=l.exports}}]);