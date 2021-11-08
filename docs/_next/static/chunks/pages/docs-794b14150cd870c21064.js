(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{60954:function(n,e,t){"use strict";var r,o=t(52209),i=t(92809),a=t(67294),s=t(48237),c=t(29163),l=t(85893);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}e.Z=a.memo((0,c.ZP)((function(n){return(0,l.jsx)(s.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},n))}))(r||(r=(0,o.Z)(["\n  background: unset !important;\n  border: 1px solid var(--primary-color) !important;\n  color: var(--primary-color) !important;\n  font-weight: normal !important;\n  border-radius: 10px !important;\n\n  &:hover {\n    background: var(--primary-color) !important;\n    color: white !important;\n  }\n"]))))},97494:function(n,e,t){"use strict";var r,o=t(52209),i=t(67294),a=t(29163),s=t(85893);e.Z=i.memo((0,a.ZP)((function(n){var e=n.src,t=void 0===e?"/images/logo_22x.png":e,r=n.className;return(0,s.jsx)("div",{className:r,children:(0,s.jsx)("img",{src:t})})}))(r||(r=(0,o.Z)(["\n  display: inline-block;\n\n  img {\n    display: inline-block;\n    height: 2.5rem;\n    width: auto;\n    object-fit: contain;\n  }\n\n  span {\n    font-size: 2.45rem;\n    font-weight: 400;\n    line-height: 2.45rem;\n    color: white;\n    display: inline-block;\n  }\n"]))))},60649:function(n,e,t){"use strict";var r,o=t(52209),i=t(67294),a=t(76736),s=t(35766),c=t(14309),l=t(94983),u=t(11163),d=t(94184),p=t.n(d),m=t(29163),h=t(97494),f=t(85893),g=[{path:"/files",icon:"cru-fo-file",name:"Upload"},{path:"/docs",icon:"cru-fo-file-text",name:"Docs"},{path:"/setting",icon:"cru-fo-settings",name:"Settings"}];var b="15.7rem";e.Z=i.memo((0,m.ZP)((function(n){var e=(0,u.useRouter)(),t=(0,i.useCallback)((function(t,r){var o=r.index,i=g[o];i.path!==n.path&&e.push(i.path)}),[n.path]);return(0,f.jsxs)(a.Z.Pushable,{as:s.Z,className:p()(n.className,"basic"),children:[(0,f.jsx)(a.Z,{as:s.Z,animation:"push",direction:"left",visible:!0,className:"basic",children:(0,f.jsxs)(c.Z,{textAlign:"center",children:[(0,f.jsx)(c.Z.Row,{columns:1,className:"logoPanel",children:(0,f.jsx)(h.Z,{src:"/images/logo_12x.png"})}),(0,f.jsx)(c.Z.Row,{columns:1,children:(0,f.jsx)(l.Z,{fluid:!0,vertical:!0,borderless:!0,children:g.map((function(e,r){return(0,f.jsx)(l.Z.Item,{position:"left",index:r,active:e.path===n.path,icon:(0,f.jsx)("span",{className:e.icon}),name:e.name,onClick:t},"side_menu_".concat(r))}))})})]})}),(0,f.jsx)(a.Z.Pusher,{children:n.children})]})}))(r||(r=(0,o.Z)(["\n  overflow: hidden;\n  height: 100vh;\n  background: white;\n\n  .ui.sidebar {\n    background: #F5F5F5;\n    box-shadow: unset !important;\n    width: ",';\n\n    .logoPanel {\n      padding: 4.7rem 0;\n\n      img {\n        height: 1.7rem;\n      }\n    }\n\n    .menu {\n      box-shadow: unset !important;\n      border: unset !important;\n      border-radius: unset !important;\n      background: unset !important;\n\n      .item {\n        border-radius: 0 !important;\n        text-align: left;\n        padding-left: 2rem !important;\n        font-weight: 500;\n        font-size: 1.3rem;\n        color: var(--secend-color);\n        font-family: "OpenSans-Regular";\n\n        &.active {\n          position: relative;\n          color: var(--main-color);\n          font-family: "OpenSans-Medium";\n          border-right: solid 0.2rem var(--primary-color);\n          border-right-style: dot-dash;\n        }\n\n\n        span {\n          float: left;\n          margin-right: 10px;\n        }\n      }\n    }\n  }\n\n  .pusher {\n    width: calc(100vw - ',");\n    height: 100vh;\n    transform: translate3d(",", 0, 0) !important;\n    overflow: auto !important;\n    background: white;\n  }\n"])),b,b,b))},43913:function(n,e,t){"use strict";t.d(e,{Z:function(){return E}});var r,o=t(52209),i=t(80318),a=t(67294),s=t(35766),c=t(88188),l=t(68154),u=t(96705),d=t(29163),p=t(99056),m=t(65058),h=t(92809),f=t(10219),g=t(345),b=t(60954),v=t(85893),w=["user","toggleOpen"];function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function x(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){(0,h.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var k,Z=a.memo((0,d.ZP)((function(n){var e=n.user,t=n.toggleOpen,r=(0,f.Z)(n,w),o=(0,a.useState)(e.account),i=o[0],s=o[1],c=(0,a.useCallback)((function(n,e){var t=e.value;s(t)}),[]),u=(0,a.useCallback)((function(){e.account!==i&&e.setLoginUser({wallet:e.wallet,account:i,pubKey:e.pubKey}),t(!1)}),[i,e]),d=(0,a.useMemo)((function(){return e.accounts.map((function(n){return{text:(0,p.l)(n),value:n}}))}),[e]);return(0,v.jsxs)(g.Z,x(x({closeIcon:(0,v.jsx)("span",{className:"close icon cru-fo-x"}),onClose:function(){return t(!1)}},r),{},{children:[(0,v.jsx)(g.Z.Header,{content:"Select Account"}),(0,v.jsxs)(g.Z.Content,{children:[(0,v.jsx)(l.Z,{fluid:!0,selection:!0,icon:(0,v.jsx)("span",{className:"icon cru-fo cru-fo-chevron-down"}),defaultValue:i,options:d,onChange:c}),(0,v.jsxs)("div",{className:"btns",children:[(0,v.jsx)(b.Z,{content:"Confirm",onClick:u}),(0,v.jsx)(b.Z,{content:"Cancel",onClick:function(){return t(!1)}})]})]})]}))}))(r||(r=(0,o.Z)(["\n  overflow: unset !important;\n  width: 34.3rem !important;\n  \n  .header {\n    height: 3.93rem;\n    font-size: 1.3rem !important;\n    padding: 0 1.14rem !important;\n    font-weight: 600 !important;\n    line-height: 3.93rem !important;\n    border-top-right-radius: 0.6rem !important;\n    border-top-left-radius: 0.6rem !important;\n  }\n\n\n  .close.icon {\n    top: 0.5rem;\n    right: 0.6rem;\n    color: #666666;\n  }\n\n  .content {\n    padding: 1rem !important;\n    border-bottom-right-radius: 0.6rem !important;\n    border-bottom-left-radius: 0.6rem !important;\n\n    .btns {\n      padding-top: 2.3rem;\n\n      button {\n        width: calc(50% - 0.5rem) !important;\n        margin: unset;\n      }\n\n      button:first-child {\n        margin-right: 1rem;\n      }\n    }\n\n    .ui.dropdown {\n      border-radius: 0.57rem !important;\n      border: 0.07rem solid #CCCCCC !important;\n      box-shadow: unset !important;\n\n      .icon {\n        float: right;\n        transform: translateX(1.2rem);\n      }\n      \n      .text {\n        font-weight: 500 !important;\n        color: var(--main-color) !important;\n        font-family: OpenSans-Medium sans-serif !important;\n      }\n\n      .menu {\n        background: #FFFFFF;\n        box-shadow: 0 0.57rem 1.43rem 0 rgba(0, 0, 0, 0.1) !important;\n        border-radius: 0.57rem !important;\n        border: 0.07rem solid #EEEEEE !important;\n        padding: unset !important;\n        top: calc(100% + 0.6rem);\n\n        .item {\n          padding: 1rem 0.8rem !important;\n          border-radius: unset !important;\n          border-top: 1px solid #EEEEEE;\n          font-weight: 500;\n          color: var(--main-color) !important;\n          font-family: OpenSans-Medium sans-serif;\n\n          &:active {\n            background-color: #EEEEEE;\n          }\n        }\n\n        .item:first-child {\n          border-top: unset !important;\n        }\n      }\n    }\n  }\n"])))),j=t(96486),P=t.n(j);function C(n){switch(n.wallet){case"crust":return"/images/wallet_crust.png";case"polkadot-js":return"/images/wallet_polkadot.png";case"metamask":return"/images/wallet_metamask.png";case"near":return"/images/wallet_near.png";case"solana":return"/images/wallet_solana.png";case"elrond":return"/images/wallet_elrond.png";case"flow":return"/images/wallet_flow.png";case"wallet-connect":var e=P().get(n.walletConnect.connect,"peerMeta.icons");return P().size(e)?e[0]:"/images/wallet_connect.png";default:return""}}var E=a.memo((0,d.ZP)((function(n){var e=(0,u.WY)(),t=(0,a.useCallback)(e.logout,[e]),r=(0,m.O)(),o=(0,i.Z)(r,2),d=o[0],h=o[1];return(0,v.jsxs)(s.Z,{basic:!0,textAlign:"right",className:n.className,children:[d&&(0,v.jsx)(Z,{size:"tiny",open:!0,user:e,toggleOpen:h}),(0,v.jsx)(c.Z.Group,{children:(0,v.jsxs)(c.Z,{style:{justifyContent:"flex-end"},children:[(0,v.jsx)(c.Z.Image,{src:C(e),size:"tiny"}),(0,v.jsx)(c.Z.Content,{verticalAlign:"middle",style:{flex:"unset",paddingLeft:"0.7rem"},children:(0,v.jsx)(l.Z,{pointing:"top right",icon:(0,v.jsx)("span",{className:"cru-fo cru-fo-chevron-down"}),basic:!0,text:(0,p.l)(e.account),children:(0,v.jsxs)(l.Z.Menu,{children:[e.accounts&&(0,v.jsx)(l.Z.Item,{text:"Switch Account",onClick:function(){return h()}}),(0,v.jsx)(l.Z.Item,{text:"Logout",onClick:t})]})})})]})})]})}))(k||(k=(0,o.Z)(["\n  border-bottom: 1px solid var(--line-color) !important;\n  margin: unset !important;\n  padding: 1.3rem !important;\n\n  .items > .item.tiny {\n    width: 4.3rem;\n  }\n\n  .ui.dropdown {\n    .cru-fo {\n      font-size: 1.3rem;\n      margin-left: 1.1rem;\n    }\n\n    .text {\n      font-family: OpenSans-Medium Sana sans-serif;\n      font-size: 1.3rem;\n    }\n\n    .menu::after {\n      display: none;\n    }\n\n    .menu {\n      background: #FFFFFF;\n      box-shadow: 0 0.57rem 1.43rem 0 rgba(0, 0, 0, 0.1);\n      border-radius: 0.86rem;\n      border: 0.07rem solid #EEEEEE;\n      padding: 0.57rem;\n\n      .item {\n        padding: 0.78rem 0.57rem !important;\n        border-radius: 0.57rem;\n\n        &:active {\n          background-color: #EEEEEE;\n        }\n      }\n    }\n  }\n"]))))},65058:function(n,e,t){"use strict";t.d(e,{O:function(){return o}});var r=t(67294);function o(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,r.useState)(n),t=e[0],o=e[1],i=(0,r.useCallback)((function(n){o(void 0!==n?n:function(n){return!n})}),[]);return[t,i]}},99056:function(n,e,t){"use strict";t.d(e,{l:function(){return r}});var r=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return n.length>2*e?"".concat(n.substr(0,e),"...").concat(n.substr(n.length-e)):n}},64705:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return G}});var r=t(52209),o=t(67294),i=t(29163),a=t(60649),s=t(87462),c=t(86010),l=(t(45697),t(95929)),u=t(28935),d=t(94578),p=t(30335),m=t(5625),h=t(61295),f=t(90096),g=t(12519),b=t(92248),v=t(90327),w=t(70682),y=t(27601),x=t(65382),k=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).handleClick=function(n){return(0,m.Z)(e.props,"onClick",n,e.props)},e}return(0,d.Z)(e,n),e.prototype.render=function(){var n=this.props,t=n.active,r=n.children,i=n.className,a=n.content,d=n.icon,p=(0,c.Z)((0,l.lG)(t,"active"),"title",i),m=(0,u.Z)(e,this.props),h=(0,g.Z)(e,this.props),f=(0,y.Z)(d)?"dropdown":d;return b.kK(r)?o.createElement(h,(0,s.Z)({},m,{className:p,onClick:this.handleClick}),x.Z.create(f,{autoGenerateKey:!1}),a):o.createElement(h,(0,s.Z)({},m,{className:p,onClick:this.handleClick}),r)},e}(o.Component);function Z(n){var e=n.active,t=n.children,r=n.className,i=n.content,a=(0,c.Z)("content",(0,l.lG)(e,"active"),r),d=(0,u.Z)(Z,n),p=(0,g.Z)(Z,n);return o.createElement(p,(0,s.Z)({},d,{className:a}),b.kK(t)?i:t)}k.handledProps=["active","as","children","className","content","icon","index","onClick"],k.propTypes={},k.create=(0,w.u5)(k,(function(n){return{content:n}})),Z.handledProps=["active","as","children","className","content"],Z.propTypes={},Z.create=(0,w.u5)(Z,(function(n){return{content:n}}));var j=Z,P=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).handleTitleOverrides=function(n){return{onClick:function(t,r){(0,m.Z)(n,"onClick",t,r),(0,m.Z)(e.props,"onTitleClick",t,r)}}},e}return(0,d.Z)(e,n),e.prototype.render=function(){var n=this.props,e=n.active,t=n.content,r=n.index,i=n.title;return o.createElement(o.Fragment,null,k.create(i,{autoGenerateKey:!1,defaultProps:{active:e,index:r},overrideProps:this.handleTitleOverrides}),j.create(t,{autoGenerateKey:!1,defaultProps:{active:e}}))},e}(o.Component);P.handledProps=["active","content","index","onTitleClick","title"],P.propTypes={},P.create=(0,w.u5)(P,null);var C=P,E=function(n){function e(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).computeNewIndex=function(n){var t=e.props.exclusive,r=e.state.activeIndex;return t?n===r?-1:n:(0,f.Z)(r,n)?(0,h.Z)(r,n):[].concat(r,[n])},e.handleTitleClick=function(n,t){var r=t.index;e.setState({activeIndex:e.computeNewIndex(r)}),(0,m.Z)(e.props,"onTitleClick",n,t)},e.isIndexActive=function(n){var t=e.props.exclusive,r=e.state.activeIndex;return t?r===n:(0,f.Z)(r,n)},e}(0,d.Z)(e,n);var t=e.prototype;return t.getInitialAutoControlledState=function(n){return{activeIndex:n.exclusive?-1:[]}},t.componentDidMount=function(){0},t.componentDidUpdate=function(){0},t.render=function(){var n=this,t=this.props,r=t.className,i=t.children,a=t.panels,l=(0,c.Z)("accordion",r),d=(0,u.Z)(e,this.props),m=(0,g.Z)(e,this.props);return o.createElement(m,(0,s.Z)({},d,{className:l}),b.kK(i)?(0,p.Z)(a,(function(e,t){return C.create(e,{defaultProps:{active:n.isIndexActive(t),index:t,onTitleClick:n.handleTitleClick}})})):i)},e}(v.Z);function O(n){var e=n.className,t=n.fluid,r=n.inverted,i=n.styled,a=(0,c.Z)("ui",(0,l.lG)(t,"fluid"),(0,l.lG)(r,"inverted"),(0,l.lG)(i,"styled"),e),d=(0,u.Z)(O,n);return o.createElement(E,(0,s.Z)({},d,{className:a}))}E.handledProps=["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"],E.propTypes={},E.defaultProps={exclusive:!0},E.autoControlledProps=["activeIndex"],E.create=(0,w.u5)(E,(function(n){return{content:n}})),O.handledProps=["className","fluid","inverted","styled"],O.propTypes={},O.Accordion=E,O.Content=j,O.Panel=C,O.Title=k;var F,S=O,N=t(35766),I=t(43913),_=t(85893);function A(n){return"<span class='dot'></span> ".concat(n)}var W=[{title:"What is Crust Files?",sub:["Crust Files is a Web3.0 decentralized IPFS storage application.","Crust Files helps you to easily store your personal files on IPFS via Crust\u2019s decentralized storage network."]},{title:"More Detailed Features",sub:[A("Multi-Wallet Access, Web3.0 Identity"),A("End-to-end File Encryption"),A("Share Links to Friends"),A("Long-term IPFS Storage with Replicas Worldwide"),A("Retrieve Anywhere & Anytime"),A("Open-source, Decentralized-hosted")]},{title:"What Wallet Does It Support?",sub:["Crust Files supports multi-wallets as Web3.0 identity to sign-in the application and use its Web3.0 Auth IPFS Gateway & Web3.0 Auth Crust Pinner. ",A("Crust Network \u2013 Browser Wallet"),A("Ethereum & Polygon \u2013 MetaMask"),A("Polkadot \u2013 Browser {.js} Extension"),A("NEAR"),A("Solana"),A("Elrond"),A("FLOW")]},{title:"What\u2019s More to Expect in the Future",sub:[A("More blockchain platforms and wallets sign-in supported."),A("Smart Contract on various platforms, so that users are able to Deposit / Pay to use Crust Files."),A("Customizable IPFS Gateways."),A("Native folder structure management."),A("On-chain storage for account info.")]},{title:"Developer\u2019s Guide",sub:["Please refer to this link : <a target='_blank' href='https://wiki.crust.network/docs/en/buildGettingStarted'>https://wiki.crust.network/docs/en/buildGettingStarted<a/>"]},{title:"About IPFS Web3-Auth Gateway",sub:["IPFS W3Auth Gateway is a lightweight Web3-based authentication service based on IPFS gateway and reverse proxy.","For detailed information, Please refer to this link : <a target='_blank' href='https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW'>https://wiki.crust.network/docs/en/buildIPFSWeb3AuthGW</a>"]},{title:"About IPFS Web3-Auth Crust Pinner",sub:["IPFS W3Auth Pinning Service is a lightweight Web3-based authentication service based on IPFS remote pinning service and Crust Network.","For detailed information, Please refer to this link : <a target='_blank' href='https://wiki.crust.network/docs/en/buildIPFSW3AuthPin'>https://wiki.crust.network/docs/en/buildIPFSW3AuthPin</a>"]},{title:"About Local Cache",sub:["Crust Files is a decentralized Application, and it will NEVER store your Upload History and File Encryption Key on any remote server. Instead, they are cached on your local devices. This indicates that, if you sign-in Crust Files with your wallet account on a new device, you will lose your Upload History and File Encryption Key from your previous device.","If you want to migrate your Upload History and File Encryption Key to a new device, use Export & Import function on the Upload page.","Note1: File Encryption Key can always be imported / recovered from Seed Phrase on the Settings page.","Note2: We are working on a possible solution so that your account-linked information, such as your Upload History, File Encryption Key and Folder Structure can be stored on-chain."]}],T=function(n){var e=n.item,t=n.index;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(S.Title,{index:t,active:!0,icon:function(){return null},children:[e.title,(0,_.jsx)(x.Z,{name:"dropdown"})]}),(0,_.jsx)(S.Content,{active:!0,children:e.sub.map((function(n,e){return(0,_.jsx)("div",{dangerouslySetInnerHTML:{__html:n}},"str_".concat(t,"_").concat(e))}))})]})};var G=o.memo((0,i.ZP)((function(n){var e=n.className;return(0,_.jsx)(a.Z,{path:"/docs",children:(0,_.jsxs)(N.Z,{basic:!0,className:e,children:[(0,_.jsx)(I.Z,{}),(0,_.jsx)(S,{children:W.map((function(n,e){return(0,_.jsx)(T,{item:n,index:e},"docs_item_".concat(e))}))})]})})}))(F||(F=(0,r.Z)(["\n  padding: unset !important;\n\n  .ui.accordion {\n    padding: 0.9rem 2.3rem;\n\n    .title {\n      padding: 0.7rem 0 0.2rem;\n      font-family: OpenSans-SemiBold;\n      font-size: 1.3rem;\n      line-height: 1.7rem;\n      font-weight: 600;\n\n      .icon {\n        display: none;\n      }\n    }\n\n    .content {\n      color: var(--secend-color);\n      font-size: 1rem;\n      font-family: OpenSans-Regular;\n      font-weight: 400;\n      line-height: 1.57rem;\n\n      .dot {\n        position: relative;\n        top: -0.15rem;\n        display: inline-block;\n        width: 0.29rem;\n        height: 0.29rem;\n        margin-right: 0.86rem;\n        border-radius: 0.2rem;\n        background: #333333;\n      }\n    }\n  }\n"]))))},28147:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return t(64705)}])}},function(n){n.O(0,[557,774,888,179],(function(){return e=28147,n(n.s=e);var e}));var e=n.O();_N_E=e}]);