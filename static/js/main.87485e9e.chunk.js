(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{16:function(e,c,s){},19:function(e,c,s){},20:function(e,c,s){"use strict";s.r(c);var t=s(0),n=s(1),i=s(9),a=s.n(i),r=(s(16),s(2)),l=s(3),o=s(5),j=s(4),d=s(8),h=s(10),b=s.n(h),O=(s(19),function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("header",{id:"home",children:[Object(t.jsxs)("nav",{id:"nav-wrap",children:[Object(t.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(t.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(t.jsxs)("ul",{id:"nav",className:"nav",children:[Object(t.jsx)("li",{className:"current",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(t.jsx)("div",{className:"row banner",children:Object(t.jsxs)("div",{className:"banner-text",children:[Object(t.jsx)("h1",{className:"responsive-headline",children:"I'm Kunlin Cai."}),Object(t.jsx)("hr",{})]})}),Object(t.jsx)("p",{className:"scrolldown",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(t.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(n.Component)),m=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(t.jsx)("footer",{children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{id:"go-top",children:Object(t.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(t.jsx)("i",{className:"icon-up-open"})})})})})}}]),s}(n.Component),u=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e="./images/"+this.props.data.image,c=this.props.data.bio,s=this.props.data.resumedownload;return Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"three columns",children:Object(t.jsx)("img",{className:"profile-pic",src:e,alt:"Kunlin Profile Pic"})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("h2",{children:"About Me"}),Object(t.jsx)("p",{children:c}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"columns contact-details",children:[Object(t.jsx)("h2",{children:"Contact Details"}),Object(t.jsxs)("p",{className:"address",children:[Object(t.jsx)("span",{children:"Kunlin Cai"}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:"(+1)7812283500"}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:"caik20@bu.edu"})]})]}),Object(t.jsx)("div",{className:"columns download",children:Object(t.jsx)("p",{children:Object(t.jsxs)("a",{href:s,className:"button",children:[Object(t.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),s}(n.Component),x=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.school}),Object(t.jsxs)("p",{className:"info",children:[e.degree," ",Object(t.jsx)("span",{children:"\u2022"}),Object(t.jsx)("em",{className:"date",children:e.graduated})]}),Object(t.jsx)("p",{children:e.description}),Object(t.jsxs)("p",{children:[Object(t.jsx)("b",{children:e.description2}),e.description3," "]})]},e.school)})),c=this.props.data.researchinterest.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.title}),Object(t.jsxs)("p",{children:[e.description,Object(t.jsx)("br",{})]}),Object(t.jsx)("p",{children:e.description2})]},e.title)})),s=this.props.data.research.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.company}),Object(t.jsxs)("p",{className:"info",children:[e.title,Object(t.jsx)("span",{children:"\u2022"})," ",Object(t.jsx)("em",{className:"date",children:e.years})]}),Object(t.jsxs)("p2",{children:[e.description,Object(t.jsx)("br",{})]}),Object(t.jsxs)("p2",{children:[e.description2,Object(t.jsx)("br",{})]}),Object(t.jsx)("p",{children:e.description3})]},e.company)})),n=this.props.data.publication.map((function(e){return Object(t.jsx)("div",{children:Object(t.jsxs)("p",{children:[e.description,Object(t.jsx)("br",{})]})})})),i=this.props.data.work.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.company}),Object(t.jsxs)("p",{className:"info",children:[e.title,Object(t.jsx)("span",{children:"\u2022"})," ",Object(t.jsx)("em",{className:"date",children:e.years})]}),Object(t.jsxs)("p2",{children:[e.description," ",Object(t.jsx)("br",{})]}),Object(t.jsxs)("p2",{children:[e.description2,Object(t.jsx)("br",{})]}),Object(t.jsxs)("p2",{children:[e.description3,Object(t.jsx)("br",{})]}),Object(t.jsx)("p",{children:e.description4})]},e.company)}));return Object(t.jsxs)("section",{id:"resume",children:[Object(t.jsxs)("div",{className:"row education",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Education"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row item",children:Object(t.jsx)("div",{className:"twelve columns",children:e})})})]}),Object(t.jsxs)("div",{className:"row researchinterest",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Research Interest"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:c})]}),Object(t.jsxs)("div",{className:"row research",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Research"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(t.jsxs)("div",{className:"row publication",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Publications"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:n})]}),Object(t.jsxs)("div",{className:"row work",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Work"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:i})]})]})}}]),s}(n.Component),p=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(t.jsxs)("section",{id:"contact",children:[Object(t.jsx)("div",{className:"row section-head",children:Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Get In Touch."})})})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("aside",{className:"four columns footer-widgets",children:Object(t.jsxs)("div",{className:"widget widget_contact",children:[Object(t.jsx)("h4",{children:"Contact Information"}),Object(t.jsxs)("p",{className:"address",children:["Kunlin Cai ",Object(t.jsx)("br",{}),"caik20@bu.edu ",Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:"(+1)7812283500"})]})]})})})]})}}]),s}(n.Component),v=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsxs)("blockquote",{children:[Object(t.jsx)("p",{children:e.text}),Object(t.jsx)("cite",{children:e.user})]})},e.user)}));return Object(t.jsx)("section",{id:"testimonials",children:Object(t.jsx)("div",{className:"text-container",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Client Testimonials"})})}),Object(t.jsx)("div",{className:"ten columns flex-container",children:Object(t.jsx)("ul",{className:"slides",children:e})})]})})})}}]),s}(n.Component),f=function(e){Object(o.a)(s,e);var c=Object(j.a)(s);function s(e){var t;return Object(r.a)(this,s),(t=c.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(l.a)(s,[{key:"getResumeData",value:function(){b.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,c,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(O,{data:this.state.resumeData.main}),Object(t.jsx)(u,{data:this.state.resumeData.main}),Object(t.jsx)(x,{data:this.state.resumeData.resume}),Object(t.jsx)(v,{data:this.state.resumeData.testimonials}),Object(t.jsx)(p,{data:this.state.resumeData.main}),Object(t.jsx)(m,{data:this.state.resumeData.main})]})}}]),s}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(t.jsx)(f,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/personal_website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/personal_website","/service-worker.js");N?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.87485e9e.chunk.js.map