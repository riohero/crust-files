(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{60954:function(e,t,n){"use strict";var r,o=n(52209),i=n(92809),a=n(67294),s=n(48237),c=n(29163),l=n(85893);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=a.memo((0,c.ZP)((function(e){return(0,l.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}))(r||(r=(0,o.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},60649:function(e,t,n){"use strict";var r,o=n(52209),i=n(67294),a=n(76736),s=n(35766),c=n(14309),l=n(8736),u=n(94983),d=n(65382),p=n(11163),h=n(94184),m=n.n(h),f=n(29163),g=n(85893),v=[{path:"/files",icon:"file outline",name:"Upload"},{path:"/docs",icon:"file alternate outline",name:"Docs"},{path:"/setting",icon:"setting",name:"Setting"}];var b="15.7rem";t.Z=i.memo((0,f.ZP)((function(e){var t=(0,p.useRouter)(),n=(0,i.useCallback)((function(n,r){var o=r.index,i=v[o];i.path!==e.path&&t.push(i.path)}),[e.path]);return(0,g.jsxs)(a.Z.Pushable,{as:s.Z,className:m()(e.className,"basic"),children:[(0,g.jsx)(a.Z,{as:s.Z,animation:"push",direction:"left",visible:!0,className:"font1 basic",children:(0,g.jsxs)(c.Z,{textAlign:"center",children:[(0,g.jsx)(c.Z.Row,{columns:1,className:"logoPanel",children:(0,g.jsx)(l.Z,{size:"small",src:"/images/logo_1.png"})}),(0,g.jsx)(c.Z.Row,{columns:1,children:(0,g.jsx)(u.Z,{fluid:!0,vertical:!0,borderless:!0,children:v.map((function(t,r){return(0,g.jsx)(u.Z.Item,{position:"left",index:r,active:t.path===e.path,icon:(0,g.jsx)(d.Z,{name:t.icon}),name:t.name,onClick:n,className:"font1"},"side_menu_".concat(r))}))})})]})}),(0,g.jsx)(a.Z.Pusher,{children:e.children})]})}))(r||(r=(0,o.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    width: ",";\n\n    .logoPanel {\n      padding: 2rem 0;\n    }\n\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n\n        &.active {\n          color: var(--main-color);\n        }\n\n        .icon {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - ",");\n    height: 100vh;\n    transform: translate3d(",", 0, 0) !important;\n    overflow: auto !important;\n    background: white;\n  }\n"])),b,b,b))},43913:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r,o=n(52209),i=n(80318),a=n(67294),s=n(35766),c=n(88188),l=n(68154),u=n(99816),d=n(29163),p=n(99056),h=n(65058),m=n(92809),f=n(10219),g=n(345),v=n(60954),b=n(85893),y=["user","toggleOpen"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,m.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z,k=a.memo((0,d.ZP)((function(e){var t=e.user,n=e.toggleOpen,r=(0,f.Z)(e,y),o=(0,a.useState)(t.account),i=o[0],s=o[1],c=(0,a.useCallback)((function(e,t){var n=t.value;s(n)}),[]),u=(0,a.useCallback)((function(){t.account!==i&&t.setLoginUser({wallet:t.wallet,account:i,pubKey:t.pubKey}),n(!1)}),[i,t]),d=(0,a.useMemo)((function(){return t.accounts.map((function(e){return{text:(0,p.l)(e),value:e}}))}),[t]);return(0,b.jsxs)(g.Z,x(x({closeIcon:!0,onClose:function(){return n(!1)}},r),{},{children:[(0,b.jsx)(g.Z.Header,{content:"Select account"}),(0,b.jsxs)(g.Z.Content,{children:[(0,b.jsx)(l.Z,{fluid:!0,selection:!0,defaultValue:i,options:d,onChange:c}),(0,b.jsxs)("div",{className:"btns",children:[(0,b.jsx)(v.Z,{content:"Confirm",onClick:u}),(0,b.jsx)(v.Z,{content:"Cancel",onClick:function(){return n(!1)}})]})]})]}))}))(r||(r=(0,o.Z)(["\n  .header {\n    height: 3.36rem;\n    font-size: 1rem !important;\n    padding: 0 1rem !important;\n    font-weight: unset !important;\n    line-height: 3.36rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n\n    .btns {\n      padding-top: 1rem;\n\n      button {\n        width: calc(50% - 0.5rem) !important;\n        margin: unset;\n      }\n\n      button:first-child {\n        margin-right: 1rem;\n      }\n    }\n  }\n"]))));function P(e){switch(e){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";default:return""}}var j=a.memo((0,d.ZP)((function(e){var t=(0,u.WY)(),n=(0,a.useCallback)(t.logout,[t]),r=(0,h.O)(),o=(0,i.Z)(r,2),d=o[0],m=o[1];return(0,b.jsxs)(s.Z,{basic:!0,textAlign:"right",className:e.className,style:{borderBottom:"2px solid #eeeeee"},children:[d&&(0,b.jsx)(k,{size:"tiny",open:!0,user:t,toggleOpen:m}),(0,b.jsx)(c.Z.Group,{children:(0,b.jsxs)(c.Z,{style:{justifyContent:"flex-end"},children:[(0,b.jsx)(c.Z.Image,{src:P(t.wallet),size:"tiny"}),(0,b.jsx)(c.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.5rem"},children:(0,b.jsx)(l.Z,{pointing:"top right",basic:!0,text:(0,p.l)(t.account),children:(0,b.jsxs)(l.Z.Menu,{children:[t.accounts&&(0,b.jsx)(l.Z.Item,{text:"Switch Account",onClick:function(){return m()}}),(0,b.jsx)(l.Z.Item,{text:"Logout",onClick:n})]})})})]})})]})}))(Z||(Z=(0,o.Z)(['\n  border-bottom: 2px solid #eeeeee;\n  margin: unset !important;\n\n  .ui.dropdown {\n    .text {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.3rem;\n    }\n  }\n']))))},65058:function(e,t,n){"use strict";n.d(t,{O:function(){return o}});var r=n(67294);function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useState)(e),n=t[0],o=t[1],i=(0,r.useCallback)((function(e){o(void 0!==e?e:function(e){return!e})}),[]);return[n,i]}},99056:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return e.length>2*t?"".concat(e.substr(0,t),"...").concat(e.substr(e.length-t)):e}},83514:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(52209),o=n(80318),i=n(67294),a=n(29163),s=n(60649),c=n(87462),l=n(86010),u=(n(45697),n(95929)),d=n(28935),p=n(94578),h=n(30335),m=n(5625),f=n(61295),g=n(90096),v=n(12519),b=n(92248),y=n(90327),w=n(70682),x=n(27601),Z=n(65382),k=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){return(0,m.Z)(t.props,"onClick",e,t.props)},t}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,n=e.active,r=e.children,o=e.className,a=e.content,s=e.icon,p=(0,l.Z)((0,u.lG)(n,"active"),"title",o),h=(0,d.Z)(t,this.props),m=(0,v.Z)(t,this.props),f=(0,x.Z)(s)?"dropdown":s;return b.kK(r)?i.createElement(m,(0,c.Z)({},h,{className:p,onClick:this.handleClick}),Z.Z.create(f,{autoGenerateKey:!1}),a):i.createElement(m,(0,c.Z)({},h,{className:p,onClick:this.handleClick}),r)},t}(i.Component);function P(e){var t=e.active,n=e.children,r=e.className,o=e.content,a=(0,l.Z)("content",(0,u.lG)(t,"active"),r),s=(0,d.Z)(P,e),p=(0,v.Z)(P,e);return i.createElement(p,(0,c.Z)({},s,{className:a}),b.kK(n)?o:n)}k.handledProps=["active","as","children","className","content","icon","index","onClick"],k.propTypes={},k.create=(0,w.u5)(k,(function(e){return{content:e}})),P.handledProps=["active","as","children","className","content"],P.propTypes={},P.create=(0,w.u5)(P,(function(e){return{content:e}}));var j=P,C=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).handleTitleOverrides=function(e){return{onClick:function(n,r){(0,m.Z)(e,"onClick",n,r),(0,m.Z)(t.props,"onTitleClick",n,r)}}},t}return(0,p.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.active,n=e.content,r=e.index,o=e.title;return i.createElement(i.Fragment,null,k.create(o,{autoGenerateKey:!1,defaultProps:{active:t,index:r},overrideProps:this.handleTitleOverrides}),j.create(n,{autoGenerateKey:!1,defaultProps:{active:t}}))},t}(i.Component);C.handledProps=["active","content","index","onTitleClick","title"],C.propTypes={},C.create=(0,w.u5)(C,null);var O=C,F=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).computeNewIndex=function(e){var n=t.props.exclusive,r=t.state.activeIndex;return n?e===r?-1:e:(0,g.Z)(r,e)?(0,f.Z)(r,e):[].concat(r,[e])},t.handleTitleClick=function(e,n){var r=n.index;t.setState({activeIndex:t.computeNewIndex(r)}),(0,m.Z)(t.props,"onTitleClick",e,n)},t.isIndexActive=function(e){var n=t.props.exclusive,r=t.state.activeIndex;return n?r===e:(0,g.Z)(r,e)},t}(0,p.Z)(t,e);var n=t.prototype;return n.getInitialAutoControlledState=function(e){return{activeIndex:e.exclusive?-1:[]}},n.componentDidMount=function(){0},n.componentDidUpdate=function(){0},n.render=function(){var e=this,n=this.props,r=n.className,o=n.children,a=n.panels,s=(0,l.Z)("accordion",r),u=(0,d.Z)(t,this.props),p=(0,v.Z)(t,this.props);return i.createElement(p,(0,c.Z)({},u,{className:s}),b.kK(o)?(0,h.Z)(a,(function(t,n){return O.create(t,{defaultProps:{active:e.isIndexActive(n),index:n,onTitleClick:e.handleTitleClick}})})):o)},t}(y.Z);function I(e){var t=e.className,n=e.fluid,r=e.inverted,o=e.styled,a=(0,l.Z)("ui",(0,u.lG)(n,"fluid"),(0,u.lG)(r,"inverted"),(0,u.lG)(o,"styled"),t),s=(0,d.Z)(I,e);return i.createElement(F,(0,c.Z)({},s,{className:a}))}F.handledProps=["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"],F.propTypes={},F.defaultProps={exclusive:!0},F.autoControlledProps=["activeIndex"],F.create=(0,w.u5)(F,(function(e){return{content:e}})),I.handledProps=["className","fluid","inverted","styled"],I.propTypes={},I.Accordion=F,I.Content=j,I.Panel=O,I.Title=k;var S,N=I,A=n(35766),_=n(43913),E=n(65058),W=n(85893),T=[{title:"What is Crust Files?",sub:["Crust Files is a Web3.0 decentralized IPFS storage application.","Crust Files helps you to easily store your personal files on IPFS via Crust\u2019s decentralized storage network."]},{title:"More Detailed Features",sub:[">Multi-Wallet Access, Web3.0 Identity",">End-to-end File Encryption",">Share Links to Friends",">Long-term IPFS Storage with Replicas Worldwide",">Retrieve Anywhere & Anytime",">Open-source, Decentralized-hosted"]},{title:"What Wallet Does It Support?",sub:["Crust Files supports multi-wallets as Web3.0 identity to sign-in the application and use its Web3.0 Auth IPFS Gateway & Web3.0 Auth Crust Pinner. ",">Crust Network \u2013 Browser Wallet",">Ethereum & Polygon \u2013 MetaMask",">Polkadot \u2013 Browser {.js} Extension",">NEAR",">Solana",">Elrond",">FLOW"]},{title:"What\u2019s More to Expect in the Future",sub:[">More blockchain platforms and wallets sign-in supported.",">Smart Contract on various platforms, so that users are able to Deposit / Pay to use Crust Files.",">Customizable IPFS Gateways.",">Native folder structure management.",">On-chain storage for account info."]},{title:"Developer\u2019s Guide",sub:["Please refer to this link:","<a target='_blank' href='https://wiki.crust.network/docs/en/buildGettingStarted'>https://wiki.crust.network/docs/en/buildGettingStarted<a/>"]},{title:"About IPFS Web3-Auth Gateway",sub:["IPFS W3Auth Gateway is a lightweight Web3-based authentication service based on IPFS gateway and reverse proxy.","For detailed information, Please refer to this link:","<a target='_blank' href='https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW'>https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW</a>"]},{title:"About IPFS Web3-Auth Crust Pinner",sub:["IPFS W3Auth Pinning Service is a lightweight Web3-based authentication service based on IPFS remote pinning service and Crust Network.","For detailed information, Please refer to this link:","<a target='_blank' href='https://wiki.crust.network/docs/en/buildIPFSW3AuthPin'>https://wiki.crust.network/docs/en/buildIPFSW3AuthPin</a>"]},{title:"About Local Cache",sub:["Crust Files is a decentralized Application, and it will NEVER store your Upload History and File Encryption Key on any remote server. Instead, they are cached on your local devices. This indicates that, if you sign-in Crust Files with your wallet account on a new device, you will lose your Upload History and File Encryption Key from your previous device.","If you want to migrate your Upload History and File Encryption Key to a new device, use Export & Import function on the Upload page.","Note1: File Encryption Key can always be imported / recovered from Seed Phrase on the Settings page.","Note2: We are working on a possible solution so that your account-linked information, such as your Upload History, File Encryption Key and Folder Structure can be stored on-chain."]}],G=function(e){var t=e.item,n=e.index,r=(0,E.O)(n<1),i=(0,o.Z)(r,2),a=i[0],s=i[1];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(N.Title,{index:n,active:a,onClick:function(){return s()},children:[t.title,(0,W.jsx)(Z.Z,{name:"dropdown"})]}),(0,W.jsx)(N.Content,{active:a,children:t.sub.map((function(e,t){return(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:e}},"str_".concat(n,"_").concat(t))}))})]})};var D=i.memo((0,a.ZP)((function(e){var t=e.className;return(0,W.jsx)(s.Z,{path:"/docs",children:(0,W.jsxs)(A.Z,{basic:!0,className:t,children:[(0,W.jsx)(_.Z,{}),(0,W.jsx)(N,{children:T.map((function(e,t){return(0,W.jsx)(G,{item:e,index:t},"docs_item_".concat(t))}))})]})})}))(S||(S=(0,r.Z)(['\n  padding: unset !important;\n\n  .ui.accordion {\n    padding: 3rem 2.8rem;\n\n    .title {\n      font-family: "ArialRoundedMTBold";\n      font-size: 1.6rem;\n    }\n\n    .content {\n      font-size: 1.2rem;\n      color: var(--secend-color);\n    }\n  }\n']))))},48348:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n(83514)}])}},function(e){e.O(0,[428,774,888,179],(function(){return t=48348,e(e.s=t);var t}));var t=e.O();_N_E=t}]);