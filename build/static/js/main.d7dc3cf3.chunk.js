(this["webpackJsonpftm-zombie"]=this["webpackJsonpftm-zombie"]||[]).push([[0],{318:function(e,t,n){},319:function(e,t,n){},321:function(e,t,n){},333:function(e,t){},335:function(e,t){},339:function(e,t){},364:function(e,t){},366:function(e,t){},375:function(e,t){},377:function(e,t){},387:function(e,t){},389:function(e,t){},507:function(e,t){},509:function(e,t){},516:function(e,t){},517:function(e,t){},604:function(e,t){},730:function(e,t,n){},731:function(e,t,n){},732:function(e,t,n){},733:function(e,t,n){"use strict";n.r(t);var a,i,s,r,o=n(20),d=n.n(o),u=n(301),p=n.n(u),c=(n(318),n.p,n(319),n(0)),l=n.n(c),y=n(6),m=n(163),b=n.p+"static/media/fantom_zombie_logo_2_without_black_shadow-01.69d99452.png",h=(n(321),n(161)),j=n.n(h),f=n(311),g=n(2),v=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousDeveloper",type:"address"},{indexed:!0,internalType:"address",name:"newDeveloper",type:"address"}],name:"DeveloperTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"shares",type:"uint256"}],name:"PayeeAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"PaymentReceived",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"PaymentReleased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"_old",type:"string"},{indexed:!1,internalType:"string",name:"_new",type:"string"}],name:"UpdatedBaseURI",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_old",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_new",type:"uint256"}],name:"UpdatedMintFees",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_old",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_new",type:"uint256"}],name:"UpdatedMintSize",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bool",name:"_old",type:"bool"},{indexed:!1,internalType:"bool",name:"_new",type:"bool"}],name:"UpdatedMintStatus",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"newRoyaltyAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"newPercentage",type:"uint256"}],name:"UpdatedRoyalties",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"_old",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_new",type:"uint256"}],name:"UpdatedTeamMintSize",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[{internalType:"address",name:"addy",type:"address"},{internalType:"uint256",name:"shares",type:"uint256"}],name:"addPayee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"developer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"disableMinting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"enableMinting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterMaximumCapacity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterMaximumTeamMints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterTeamMintsCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minterTeamMintsRemaining",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"payee",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"publicMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"released",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceDeveloper",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"uint256",name:"_salePrice",type:"uint256"}],name:"royaltyInfo",outputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"royaltyAmount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_base",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newFee",type:"uint256"}],name:"setMintFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"setMintSize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_royaltyAddress",type:"address"},{internalType:"uint256",name:"_percentage",type:"uint256"}],name:"setRoyaltyInfo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"setTeamMinting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"shares",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"sweepEthToAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"teamMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalReleased",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalShares",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newDeveloper",type:"address"}],name:"transferDeveloper",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],x="0x1d5d587B921050cfE96D2F7E89e9869DCDEC9b89",O=function(){var e=Object(o.useState)("side-menu-disable"),t=Object(m.a)(e,2),n=t[0],d=t[1],u=Object(o.useState)(!1),p=Object(m.a)(u,2),c=p[0],h=p[1],O=Object(o.createRef)(),T=Object(o.createRef)(),w=function(){var e=Object(y.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.a({infuraId:"27e484dcd9e3efcfd25a83a78777cdf1"}),e.next=4,t.enable();case 4:return a=new j.a(t),e.next=7,a.eth.getAccounts();case 7:return i=e.sent,e.next=10,new a.eth.Contract(v,x);case 10:s=e.sent,console.log(s._address),r=i[0],O.current.style.display="none",T.current.style.display="none",e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=new j.a(window.ethereum),e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:return e.next=6,a.eth.getAccounts();case 6:i=e.sent,s=new a.eth.Contract(v,x),console.log(s._address),r=i[0],console.log(r),O.current.style.display="none",T.current.style.display="none",e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"open",children:[Object(g.jsxs)("div",{className:n,children:[Object(g.jsx)("a",{href:"#about",children:"About"}),Object(g.jsx)("a",{href:"#gal",children:"Gallery"}),Object(g.jsx)("a",{href:"#mint",children:"Mint"}),c?Object(g.jsxs)("div",{style:{display:"inline"},ref:T,children:[Object(g.jsx)("div",{className:"connect-side",style:{marginBottom:"20px"},onClick:w,children:"WalletConnect"}),Object(g.jsx)("div",{className:"connect-side",onClick:M,children:"Web3"})]}):Object(g.jsx)("div",{className:"connect-side",onClick:function(){h(!0)},children:"Connect"})]}),Object(g.jsxs)("div",{className:"nav",children:[Object(g.jsx)("img",{src:b,alt:"logo",style:{width:"200px"}}),Object(g.jsxs)("div",{className:"wide-men",style:{display:"flex",flexDirection:"row",justifyContent:"flex-end",padding:"0px 5px",alignItems:"center"},children:[Object(g.jsx)("a",{href:"#about",children:"About"}),Object(g.jsx)("a",{href:"#gal",children:"Gallery"}),Object(g.jsx)("a",{href:"#mint",children:"Mint"}),c?Object(g.jsxs)("div",{style:{display:"flex"},ref:O,children:[Object(g.jsx)("div",{className:"connect",style:{marginRight:"10px"},onClick:w,children:"WalletConnect"}),Object(g.jsx)("div",{className:"connect",onClick:M,children:"Web3"})]}):Object(g.jsx)("div",{className:"connect",onClick:function(){h(!0)},children:"Connect"})]}),Object(g.jsx)("div",{className:"Menu",onClick:function(){d("side-menu-disable"===n?"side-menu":"side-menu-disable")},children:"Menu"})]}),Object(g.jsx)("div",{className:"Open-content"})]})},T=n(5),w=n(7),M=n(13),k=n(12),C=n.p+"static/media/Andre Cronje Zombie.19e6b88e.jpg",N=n.p+"static/media/Andre_code_Safu_.7591cbdb.jpg",A=n.p+"static/media/Barek  Zombie .e02286fb.jpg",F=n.p+"static/media/CowBoy Andre.716380c0.jpg",_=(n(730),[C,N,A,F]),I=function(e){Object(M.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={image:0},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.state.image<_.length-1?e.setState({image:e.state.image+1}):e.setState({image:0})}),1e3)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"about-data",id:"about",children:[Object(g.jsx)("div",{className:"im-slide",children:Object(g.jsx)("img",{src:_[this.state.image],alt:"slide"})}),Object(g.jsxs)("div",{className:"data",children:[Object(g.jsx)("h1",{style:{color:"rgb(131, 0, 0)"},children:"About Fantom Zombie"}),Object(g.jsxs)("p",{children:["Fantom Zombie NFTs ART is a ",Object(g.jsx)("span",{style:{color:"rgb(131, 0, 0)",fontSize:"25px"},children:"Mythologically resurrected dead person's land."}),' The living dead are a subset of the undead, which are mythical creatures that have been "re-animated." The legend of the Fantom Zombies began with the Fantom Marines.']}),Object(g.jsx)("p",{children:"Fantom Zombie is an undead collection of 1031 interactively created zombie art that exists in perpetuity throughout the Fantom block chain\u2019s undead. Each Zombie is not only unique, but it also provides its owner with unique opportunities in the future."}),Object(g.jsx)("p",{children:"Everyone has heard of fictional zombies, but few are aware of the truth about Fantom Zombies. Many people, both in the Crypto space and elsewhere, believe in the existence of zombies. They are more than just a form of art; they must be taken seriously. Magic and witchcraft are widely accepted in Crypto space and among the Fantom Marines, and are frequently practiced as religions in a mythological wasteland."}),Object(g.jsx)("p",{children:"Explore the undead , Be a zombie"}),Object(g.jsxs)("div",{style:{display:"inline"},children:[Object(g.jsx)("a",{href:"https://t.co/myjYTJDkXR?amp=1",style:{borderColor:"rgb(124, 0, 0)",backgroundColor:"rgb(71, 12, 12)"},children:"Discord"}),Object(g.jsx)("a",{href:"https://t.me/FantomZombie",style:{borderColor:"rgb(124, 0, 0)",backgroundColor:"rgb(71, 12, 12)"},children:"Telegram"})]})]})]})}}]),n}(d.a.Component),z=I,D=n(29),R=n.p+"static/media/rare1.0d9c1665.gif",S=n.p+"static/media/rare.946765e2.gif",Z=n.p+"static/media/Golden Mike G2.954cc53f.gif",E=(n(731),[R,S,Z]),q=["Aesthetic","Rare","Golden"],B=function(e){Object(M.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(T.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={image:0,title:0,content:0,id:"smooth"},e}return Object(w.a)(n,[{key:"render",value:function(){var e,t,n;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"about-data",id:this.state.id,children:[Object(g.jsx)("div",{className:"im-slide",children:Object(g.jsx)("img",{src:E[this.state.image],alt:"slide"})}),Object(g.jsxs)("div",{className:"data",id:"gal",children:[Object(g.jsx)("h1",(e={style:{color:"white"}},Object(D.a)(e,"style",{color:"rgb(131, 0, 0)"}),Object(D.a)(e,"id","redhead"),Object(D.a)(e,"children",q[this.state.title]),e)),Object(g.jsx)("p",{children:"The Aesthetic Zombie is a human who has died and been reborn as art, although not usually as a result of a virus. They are frequently combative. They might be interested, yet disoriented, and unsure of themselves and their surroundings. "}),Object(g.jsx)("p",{children:"In spite of their undead nature, they are usually immune to injury and decay. They aren't as dangerous as Runners right away, but they attack in bunches and have incredible stamina, making them a serious menace to humanity. Their primary characteristic is a voracious appetite for live flesh. "}),Object(g.jsx)("p",{children:"Each of the 999 FTM Zombies is unique in Appearance; each Zombie is created at Random and has its own Emotions."})]})]}),Object(g.jsxs)("div",{className:"about-data",id:this.state.id,children:[Object(g.jsx)("div",{className:"im-slide",children:Object(g.jsx)("img",{src:E[this.state.image+1],alt:"slide"})}),Object(g.jsxs)("div",{className:"data",id:"gal",children:[Object(g.jsx)("h1",(t={style:{color:"white"},id:"redhead"},Object(D.a)(t,"style",{color:"rgb(131, 0, 0)"}),Object(D.a)(t,"children",q[this.state.title+1]),t)),Object(g.jsx)("p",{children:"Rare kind humanoid zombies, which travel in short circuits about a few blocks and gravitate toward significant noises and visual stimuli, are a typical wondering hazard in infected towns. They may be found almost any place on the ground level, with fewer occurrences on upper levels of buildings or in open areas under direct sunshine. "}),Object(g.jsx)("p",{children:"Since this rare zombie loves to keep out of direct sunlight, they tend to congregate in and around huge buildings, and they frequently enter basements. If there's a wandering when a rare zombie sees, smells, or hears what it perceives to be a sign of life, it will moan loudly and run as quickly as it can toward the live signals. If it is a member of a group, the other members will begin to moan in response, drawing the attention of other groups who hear the pursuing frenzy. Their main distinguishing feature is a strong hunger for human small intestine. "}),Object(g.jsx)("p",{children:"Only 27 Rare FTM Zombies (FTM Team Members) are known to exist, and no two are same; each Zombie is handcrafted and has its own personality and emotions."})]})]}),Object(g.jsxs)("div",{className:"about-data",id:this.state.id,children:[Object(g.jsx)("div",{className:"im-slide",children:Object(g.jsx)("img",{src:E[this.state.image+2],alt:"slide"})}),Object(g.jsxs)("div",{className:"data",id:"gal",children:[Object(g.jsx)("h1",(n={style:{color:"white"}},Object(D.a)(n,"style",{color:"rgb(131, 0, 0)"}),Object(D.a)(n,"children",q[this.state.title+2]),n)),Object(g.jsx)("p",{children:"Golden zombies are a type of fast zombie that, for unexplained reasons, retain their agility after becoming zombies and are capable of fighting, sprinting, and climbing at breakneck speeds. When you combine this with their increased stamina, you get a monster that is extremely difficult to avoid."}),Object(g.jsx)("p",{children:"Like an Olympic athlete, they can climb ladders, steps, chain link fences, and other modestly high walls. Golden Zombies have been reported to assault for more than a mile without exhibiting symptoms of exhaustion. Their greatest unique characteristic is a voracious appetite for human brains. "}),Object(g.jsx)("p",{children:"There are only 5 FTM Zombies are golden, and each one is created with a unique personality and set of feelings. Then it's transformed into animated art."})]})]})]})}}]),n}(d.a.Component),L=B,G=n.p+"static/media/Egor Lysenko 27.b210f15b.jpg",U=n.p+"static/media/Harry17.9587f95b.jpg",P=n.p+"static/media/Harry Yeh 18.e4611ad8.jpg",W=n.p+"static/media/Jason Kwon 21.06f93812.jpg",J=[C,N,A,F,G,U,P,n.p+"static/media/Kong Zombie 2.2cc5b9bf.jpg",W],K=function(e){Object(M.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(T.a)(this,n),(e=t.call(this)).state={image:0,toMint:1},e.updateMint=Object(y.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({toMint:e.ref.current});case 1:case"end":return t.stop()}}),t)}))),e.mintNFT=Object(y.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.updateMint(),t.next=5,s.methods.minterFees().call();case 5:return n=t.sent,n*=e.state.toMint,console.log(n),t.next=10,s.methods.publicMint(n).send({from:r,value:n});case 10:a=t.sent,console.log(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.state.image<J.length-1?e.setState({image:e.state.image+1}):e.setState({image:0})}),300)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"about-data",id:"mint",children:[Object(g.jsx)("div",{className:"im-slide",children:Object(g.jsx)("img",{src:J[this.state.image],alt:"slide"})}),Object(g.jsxs)("div",{className:"data",children:[Object(g.jsx)("h1",{style:{color:"rgb(131, 0, 0)"},children:"Mint your zombie here!"}),Object(g.jsx)("p",{children:"Your very own zombie is just one click away"}),Object(g.jsx)("input",{type:"number",className:"noOfMint",placeholder:"Enter number of zombies",style:{width:"200px",margin:"10px"},ref:this.ref}),Object(g.jsx)("div",{className:"btn",onClick:this.mintNFT,children:"Mint"})]})]})}}]),n}(d.a.Component),X=(n(732),function(e){Object(M.a)(n,e);var t=Object(k.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:this.props.image,alt:this.props.name,style:{width:"100%"}})}),Object(g.jsx)("div",{style:{padding:"5px",color:"rgb(131, 0, 0)"},children:this.props.name}),Object(g.jsx)("div",{style:{padding:"5px"},children:this.props.title})]})}}]),n}(d.a.Component)),Y=X,H=n.p+"static/media/GOLDEN.dc51ad36.jpeg",V=n.p+"static/media/AK.02cc2c35.jpeg",Q=n.p+"static/media/ALEX.7e4d00e0.jpeg",$=n.p+"static/media/MAX.0947537c.jpeg",ee=n.p+"static/media/SHIBA DEV.c645f1ae.jpeg",te=n.p+"static/media/WOLF.1ef247df.jpeg",ne=function(e){Object(M.a)(n,e);var t=Object(k.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"tt",children:[Object(g.jsx)("h1",{children:" Meet The Team "}),Object(g.jsxs)("div",{className:"main-team",children:[Object(g.jsx)(Y,{image:te,name:"Wolf",title:"Co-Founder"}),Object(g.jsx)(Y,{image:ee,name:"Lord Shiba",title:"Dev Lead"}),Object(g.jsx)(Y,{image:V,name:"AK",title:"Visual Art Lead"}),Object(g.jsx)(Y,{image:$,name:"Maxflow",title:"Dev"}),Object(g.jsx)(Y,{image:H,name:"Golden",title:"Marketing"}),Object(g.jsx)(Y,{image:Q,name:"Alex",title:"Marketing/CM"})]})]})}}]),n}(d.a.Component),ae=ne;var ie=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(O,{}),Object(g.jsx)(z,{}),Object(g.jsx)(L,{}),Object(g.jsx)(K,{}),Object(g.jsx)(ae,{}),Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsxs)("div",{className:"social",children:[Object(g.jsx)("a",{href:"https://t.co/myjYTJDkXR?amp=1",children:"Discord"}),Object(g.jsx)("a",{href:"https://t.me/FantomZombie",children:"Telegram"}),Object(g.jsx)("a",{href:"https://twitter.com/fantom_zombie",children:"Twitter"})]}),"\xa9 Copyright 2021 FantomZombie. All rights reserved."]})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,739)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};p.a.render(Object(g.jsx)(d.a.StrictMode,{children:Object(g.jsx)(ie,{})}),document.getElementById("root")),se()}},[[733,1,2]]]);
//# sourceMappingURL=main.d7dc3cf3.chunk.js.map