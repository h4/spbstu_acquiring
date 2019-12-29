(window.webpackJsonpspbstu_acquiring=window.webpackJsonpspbstu_acquiring||[]).push([[0],{179:function(e,t,a){e.exports=a(333)},184:function(e,t,a){},185:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=(a(184),a(185),a(28)),i=a(18),m=a(57),s=a(72),u=a(38),E=a(337),p=a(41),d=a(42),g=a(52),f=a(51),h=a(53),b=a(111),y=a(78),v=a(338),w=a(344),k=a(341),j=a(14),I=a(335),O=a(342),P=a(58),S=a(103),x=a(69);function N(){var e=Object(S.a)(["\n  mutation SignInBasic($type: signDataBasic!) {\n    signInBasic(input: $type) {\n      tokenInfo {\n        accessToken,\n      }\n    }\n  }\n\n"]);return N=function(){return e},e}var q=Object(x.b)(N()),L=new(function(){function e(t){var a=this,n=t.firstName,r=t.lastName;Object(p.a)(this,e),this.login=function(e){localStorage.setItem("token",JSON.stringify(e.tokenInfo)),a.isLogged=!0},this.logout=function(){a.isLogged=!1},this.firstName=n,this.lastName=r,this.isLogged=!1}return Object(d.a)(e,[{key:"update",value:function(e){var t=e.split(" "),a=Object(b.a)(t,2),n=a[0],r=a[1];this.firstName=n,this.lastName=r}},{key:"fullName",get:function(){return"".concat(this.firstName," ").concat(this.lastName)}}]),e}())({firstName:"John",lastName:"Doe"}),D=function(e){var t=e.form,a=e.onSubmit,n=Object(y.a)(q),l=Object(b.a)(n,2),c=l[0],o=l[1].error;return r.a.createElement(v.a,{onSubmit:function(e,t){return function(a){a.preventDefault(),e.validateFields(function(e,a){e||c({variables:{type:{username:a.username,password:a.password,sessionToken:""}}}).then(t)})}}(t,a),className:"login-form"},o&&r.a.createElement("div",{className:"error"},o.graphQLErrors.map(function(e,t){var a=e.message;return r.a.createElement(w.a,{key:t,message:a,type:"error"})})),r.a.createElement(v.a.Item,null,t.getFieldDecorator("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(j.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Phone Number or Email"}))),r.a.createElement(v.a.Item,null,t.getFieldDecorator("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(j.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(I.a,{orientation:"left"},"Are you not a bot?"),r.a.createElement(v.a.Item,null,r.a.createElement(s.a,{gutter:16,type:"flex",justify:"space-between",align:"middle"},r.a.createElement(u.a,{sm:12,xs:24},r.a.createElement("img",{src:"img/captcha.jpg",style:{maxWidth:"100%"},alt:"captcha"})),r.a.createElement(u.a,{sm:12,xs:24},t.getFieldDecorator("capthca",{rules:[{required:!0,message:"Please input text from image!"}]})(r.a.createElement(k.a,{placeholder:"Text on Image"})),r.a.createElement("div",null,r.a.createElement(i.b,{to:""},"Reload Image"),r.a.createElement(I.a,{type:"vertical"}),r.a.createElement(i.b,{to:""},"Play Sound"))))),r.a.createElement(v.a.Item,null,r.a.createElement(s.a,{gutter:16,type:"flex",justify:"space-between"},r.a.createElement(u.a,{sm:12,xs:24},t.getFieldDecorator("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(O.a,null,"Remember me")),r.a.createElement(P.a,{type:"primary",htmlType:"submit",block:!0,className:"login-form-button"},"Log in")),r.a.createElement(u.a,{sm:12,xs:24,style:{lineHeight:1.6,marginTop:10}},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/remember"},"Forgot Password?")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/register"},"Register")),r.a.createElement("div",null,r.a.createElement("a",{href:"http://lk.spbstu.ru/"},"Login with SPbPU ID"))))))},F=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e)))._onSuccess=function(e){var t=e.data;L.login(t.signInBasic),a.setState({redirect:!0})},a.state={redirect:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(m.a,{push:!0,to:"/"}):r.a.createElement(D,{form:this.props.form,onSubmit:this._onSuccess})}}]),t}(r.a.Component),T=v.a.create({name:"normal_login"})(F),H=a(336),R=a(343),B=a(340);function C(){var e=Object(S.a)(["\n  query {\n    currentUser {name}\n  }\n"]);return C=function(){return e},e}var U=Object(x.b)(C()),_=function(e){var t=Object(y.b)(U),a=t.loading,n=t.data;return a?"...":n&&n.currentUser?(L.update(n.currentUser.name),r.a.createElement(B.a,{overlay:r.a.createElement(R.a,null,r.a.createElement("div",{style:{padding:"5px 12px"}},L.fullName),r.a.createElement(R.a.Divider,null),r.a.createElement(R.a.Item,{key:"0"},r.a.createElement(i.b,{to:"/settings"},"Settings")),r.a.createElement(R.a.Item,{key:"1"},r.a.createElement(i.b,{to:"/logout"},"Logout"))),placement:"bottomRight"},r.a.createElement(P.a,{size:"large",shape:"circle",icon:"user"}))):[r.a.createElement(I.a,{key:"divider",type:"vertical"}),r.a.createElement(i.b,{key:"link",to:"/login"},"Login")]},J=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(f.a)(t).call(this,e))).clickHandler=function(){a.setState({redirect:!0})},a.state={redirect:!1},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(m.a,{push:!0,to:"/"}):r.a.createElement("div",{style:{cursor:"pointer"},onClick:this.clickHandler},this.props.children)}}]),t}(n.Component),M=H.a.Sider,A=[r.a.createElement(R.a.Item,{key:"1"},r.a.createElement(i.b,{to:"/payment"},r.a.createElement(j.a,{type:"credit-card"})," Payment")),r.a.createElement(R.a.Item,{key:"2"},r.a.createElement(i.b,{to:"/inquiries"},r.a.createElement(j.a,{type:"file"})," Inquiries")),r.a.createElement(R.a.Item,{key:"3"},r.a.createElement(i.b,{to:"/history"},r.a.createElement(j.a,{type:"calendar"})," History"))],z=[r.a.createElement(R.a.Item,{key:"1"},r.a.createElement(i.b,{to:"/payment"},r.a.createElement(j.a,{type:"credit-card"})," Payment")),r.a.createElement(R.a.Divider,{key:"-"}),r.a.createElement(R.a.Item,{key:"2"},r.a.createElement(i.b,{to:"/login"},r.a.createElement(j.a,{type:"user"})," Login"))],W=function(){return r.a.createElement(M,{style:{background:"#FFF"}},r.a.createElement(R.a,{mode:"inline",style:{height:"100%"}},L.isLogged&&A||z))},$=H.a.Header,K=H.a.Footer,Q=H.a.Content;var V=function(e){var t=e.showMenu,a=void 0===t||t,n=e.children;return r.a.createElement(H.a,{style:{minHeight:"100vh"}},r.a.createElement($,null,r.a.createElement(s.a,{type:"flex",justify:"space-between"},r.a.createElement(u.a,{md:6,style:{color:"white"}},r.a.createElement(J,null,"NoBody Inc")),r.a.createElement(u.a,{md:6,lg:5},r.a.createElement(R.a,{mode:"horizontal",align:"right",defaultSelectedKeys:["en"],style:{lineHeight:"64px",padding:"0 12px"}},r.a.createElement(R.a.Item,{key:"en"},"En"),r.a.createElement(R.a.Item,{key:"ru"},"Ru"),r.a.createElement(_,null))))),r.a.createElement(H.a,null,a&&r.a.createElement(W,null),r.a.createElement(Q,{style:{minHeight:"calc(100vh - 164px)",padding:36}},n)),r.a.createElement(K,{style:{background:"#d6d9de"}},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:6},"\xa9 2019 Nobody Inc"))))},Y=function(){return r.a.createElement(V,{showMenu:!1},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:{span:16,offset:4},lg:{span:8,offset:8}},r.a.createElement(E.a,{title:"Login"},r.a.createElement(T,null)))))},G=function(){return r.a.createElement(V,null,r.a.createElement("h1",null,"Settings"))},X=a(339),Z=X.a.Title,ee=function(){return L.logout(),r.a.createElement(V,{showMenu:!1},r.a.createElement(Z,null,"Logout"),r.a.createElement("p",null,"You were logged out"))},te=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(v.a,{onSubmit:this.handleSubmit,className:"forgot-password-form"},r.a.createElement(v.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(j.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Phone Number or Email"}))),r.a.createElement(v.a.Item,null,r.a.createElement(s.a,{gutter:16,type:"flex",justify:"space-between"},r.a.createElement(u.a,{sm:12,xs:24},r.a.createElement(P.a,{type:"primary",htmlType:"submit",block:!0,className:"login-form-button"},"Remember Password")),r.a.createElement(u.a,{sm:12,xs:24,style:{lineHeight:1.6}},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"},"Login")),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/register"},"Register")),r.a.createElement("div",null,r.a.createElement("a",{href:"http://lk.spbstu.ru/"},"Login with SPbPU ID"))))))}}]),t}(r.a.Component),ae=v.a.create({name:"normal_login"})(te),ne=function(){return r.a.createElement(V,{showMenu:!1},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:{span:16,offset:4},lg:{span:8,offset:8}},r.a.createElement(E.a,{title:"Remember Password"},r.a.createElement(ae,null)))))},re=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(v.a,{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement(v.a.Item,null,e("username",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(j.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Phone Number or Email"}))),r.a.createElement(v.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(k.a,{prefix:r.a.createElement(j.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(v.a.Item,null,r.a.createElement(s.a,{gutter:16,type:"flex",justify:"space-between"},r.a.createElement(u.a,{sm:12,xs:24},r.a.createElement(P.a,{type:"primary",htmlType:"submit",block:!0,className:"login-form-button"},"Register")),r.a.createElement(u.a,{sm:12,xs:24,style:{lineHeight:1.6}},r.a.createElement("div",null,r.a.createElement(i.b,{to:"/login"},"Login")),r.a.createElement("div",null,r.a.createElement("a",{href:"http://lk.spbstu.ru/"},"Login with SPbPU ID"))))))}}]),t}(r.a.Component),le=v.a.create({name:"normal_login"})(re),ce=function(){return r.a.createElement(V,{showMenu:!1},r.a.createElement(s.a,null,r.a.createElement(u.a,{md:{span:16,offset:4},lg:{span:8,offset:8}},r.a.createElement(E.a,{title:"Login"},r.a.createElement(le,null)))))},oe=X.a.Title,ie=function(){return r.a.createElement(V,null,r.a.createElement(oe,null,"SPbPU Acquiring Service"),r.a.createElement("p",null,"Some description about service will be here"))},me=X.a.Title,se=function(){return r.a.createElement(V,null,r.a.createElement(me,null,"Inquiries"),r.a.createElement("p",null,"Inquiries Page will be here"))},ue=X.a.Title,Ee=function(){return r.a.createElement(V,null,r.a.createElement(ue,null,"History"),r.a.createElement("p",null,"History Page will be here"))},pe=X.a.Title,de=function(){return r.a.createElement(V,null,r.a.createElement(pe,null,"Payment"),r.a.createElement("p",null,"Payment Form will be here"))},ge=new x.a({uri:"https://po.meow.spbstu.ru/api/v1/query",request:function(e){var t=JSON.parse(localStorage.getItem("token"));e.setContext({headers:{authorization:t?"Bearer ".concat(t.accessToken):""}})}});var fe=function(){return r.a.createElement(o.a,{client:ge},r.a.createElement(i.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/remember"},r.a.createElement(ne,null)),r.a.createElement(m.b,{path:"/register"},r.a.createElement(ce,null)),r.a.createElement(m.b,{path:"/settings"},r.a.createElement(G,null)),r.a.createElement(m.b,{path:"/logout"},r.a.createElement(ee,null)),r.a.createElement(m.b,{path:"/login"},r.a.createElement(Y,null)),r.a.createElement(m.b,{path:"/inquiries"},r.a.createElement(se,null)),r.a.createElement(m.b,{path:"/history"},r.a.createElement(Ee,null)),r.a.createElement(m.b,{path:"/payment"},r.a.createElement(de,null)),r.a.createElement(m.b,{path:"/"},r.a.createElement(ie,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[179,1,2]]]);
//# sourceMappingURL=main.67e4a3c2.chunk.js.map