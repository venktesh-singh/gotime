"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5966],{95966:function(e,n,r){r.r(n);var t=r(70885),i=r(4942),a=r(72791),o=r(16030),s=r(91523),l=r(66934),c=r(68870),d=r(79836),h=r(36151),u=r(39281),x=r(35527),p=r(57621),g=r(56890),Z=r(35855),m=r(53994),f=r(53382),j=r(99875),b=r(44422),v=r(41286),P=r(31353),w=r(27247),k=r(72426),y=r.n(k),W=r(42419),I=r(80184),U=(0,l.ZP)("div")((function(e){var n,r=e.theme;return n={margin:"30px"},(0,i.Z)(n,r.breakpoints.down("sm"),{margin:"16px"}),(0,i.Z)(n,"& .breadcrumb",(0,i.Z)({marginBottom:"30px"},r.breakpoints.down("sm"),{marginBottom:"16px"})),n})),C=(0,l.ZP)(c.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"}})),E=(0,l.ZP)("img")((function(){return{height:45,width:45,borderRadius:"4px"}})),S=(0,l.ZP)(d.Z)((function(){return{minWidth:"1000",whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0,fontSize:"1rem"}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}}));n.default=function(){var e,n=(0,a.useState)(0),r=(0,t.Z)(n,2),i=r[0],l=r[1],d=(0,a.useState)([]),k=(0,t.Z)(d,2),M=k[0],A=k[1],B=(0,a.useState)(10),N=(0,t.Z)(B,2),Y=N[0],D=N[1],L=(0,o.v9)((function(e){var n;return null===e||void 0===e||null===(n=e.dataList)||void 0===n?void 0:n.data}));return fetch("https://go-time.onrender.com/api/user/").then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){A(e)})).catch((function(e){console.error("Error fetching User data:",e)})),(0,I.jsxs)(U,{children:[(0,I.jsxs)(h.Z,{sx:{mb:2,pl:1,"&:hover":{backgroundColor:"primary.main",color:"#fff"}},variant:"contained",color:"primary",component:s.rU,to:"/users/add-user",children:[(0,I.jsx)(W.Z,{"aria-label":"AddIcon","aria-haspopup":"true"}),"Add New User"]}),(0,I.jsx)(u.Z,{component:x.Z,sx:{px:0},children:(0,I.jsx)(p.Z,{sx:{px:0,py:0},elevation:1,children:(0,I.jsxs)(c.Z,{width:"100%",overflow:"auto",children:[(0,I.jsxs)(S,{children:[(0,I.jsx)(g.Z,{children:(0,I.jsxs)(Z.Z,{children:[(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"S.No."}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Profile Pic"}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Full Name"}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Email"}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Phone"}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Date"}),(0,I.jsx)(m.Z,{align:"center",sx:{fontWeight:"bold"},children:"Action"})]})}),(0,I.jsx)(f.Z,{children:null===M||void 0===M||null===(e=M.data)||void 0===e?void 0:e.slice(i*Y,i*Y+Y).map((function(e,n){return(0,I.jsxs)(Z.Z,{children:[(0,I.jsx)(m.Z,{align:"center",children:n+1}),(0,I.jsx)(m.Z,{align:"center",children:(0,I.jsx)(C,{children:(0,I.jsx)(c.Z,{children:(0,I.jsx)(E,{align:"center",src:e.profile_picture,alt:"IMG"})})})}),(0,I.jsx)(m.Z,{align:"center",children:e.full_name}),(0,I.jsx)(m.Z,{align:"center",children:e.email}),(0,I.jsx)(m.Z,{align:"center",children:e.contact_number}),(0,I.jsx)(m.Z,{align:"center",children:y()(null===e||void 0===e?void 0:e.createdAt).format("MMMM Do YYYY")}),(0,I.jsxs)(m.Z,{align:"center",children:[(0,I.jsx)(s.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/users/user-details",state:{subscriber:e}},name:"User Details",children:(0,I.jsx)(P.Z,{"aria-label":"PreviewIcon","aria-haspopup":"true",children:(0,I.jsx)(j.Z,{color:"primary",children:"view"})})}),(0,I.jsx)(s.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/users/edit-user",state:{subscriber:e}},name:"User Edit",children:(0,I.jsx)(v.Z,{"aria-label":"EditIcon","aria-haspopup":"true",children:(0,I.jsx)(j.Z,{color:"primary",children:"edit"})})}),(0,I.jsx)(w.Z,{"aria-label":"delete","aria-haspopup":"true",children:(0,I.jsx)(j.Z,{color:"error",children:"close"})})]})]},n)}))})]}),(0,I.jsx)(b.Z,{sx:{px:2},page:i,component:"div",rowsPerPage:Y,count:null===L||void 0===L?void 0:L.length,onPageChange:function(e,n){l(n)},rowsPerPageOptions:[10,20,30],onRowsPerPageChange:function(e){D(+e.target.value),l(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})})})]})}}}]);
//# sourceMappingURL=5966.3064c579.chunk.js.map