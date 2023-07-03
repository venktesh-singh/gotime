"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5172],{5172:function(e,n,r){r.r(n);var t=r(70885),i=r(4942),a=r(72791),o=r(16030),c=r(91523),l=r(19598),s=r(66934),d=r(68870),h=r(79836),u=r(36151),x=r(39281),g=r(35527),p=r(57621),m=r(56890),Z=r(35855),f=r(53994),j=r(53382),v=r(99875),b=r(44422),y=r(41286),P=r(31353),w=r(27247),k=r(72426),C=r.n(k),I=r(42419),S=r(80184),W=(0,s.ZP)("div")((function(e){var n,r=e.theme;return n={margin:"30px"},(0,i.Z)(n,r.breakpoints.down("sm"),{margin:"16px"}),(0,i.Z)(n,"& .breadcrumb",(0,i.Z)({marginBottom:"30px"},r.breakpoints.down("sm"),{marginBottom:"16px"})),n})),E=(0,s.ZP)(d.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"}})),M=(0,s.ZP)("img")((function(){return{height:45,width:45,borderRadius:"4px"}})),A=(0,s.ZP)(h.Z)((function(){return{minWidth:"1000",whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0,fontSize:"1rem"}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}}));n.default=function(){var e,n=(0,a.useState)(0),r=(0,t.Z)(n,2),i=r[0],s=r[1],h=((0,l.k6)(),(0,a.useState)([])),k=(0,t.Z)(h,2),B=k[0],N=k[1],U=(0,a.useState)(10),Y=(0,t.Z)(U,2),D=Y[0],L=Y[1],R=(0,o.v9)((function(e){var n;return null===e||void 0===e||null===(n=e.dataList)||void 0===n?void 0:n.data}));fetch("https://go-time.onrender.com/api/category").then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){N(e)})).catch((function(e){console.error("Error fetching User data:",e)}));return(0,S.jsxs)(W,{children:[(0,S.jsxs)(u.Z,{sx:{mb:2,pl:1,"&:hover":{backgroundColor:"primary.main",color:"#fff"}},variant:"contained",color:"primary",component:c.rU,to:"/category/category-add",children:[(0,S.jsx)(I.Z,{"aria-label":"AddIcon","aria-haspopup":"true"}),"Add New Category"]}),(0,S.jsx)(x.Z,{component:g.Z,sx:{px:0},children:(0,S.jsx)(p.Z,{sx:{px:0,py:0},elevation:1,children:(0,S.jsxs)(d.Z,{width:"100%",overflow:"auto",children:[(0,S.jsxs)(A,{children:[(0,S.jsx)(m.Z,{children:(0,S.jsxs)(Z.Z,{children:[(0,S.jsx)(f.Z,{align:"center",sx:{fontWeight:"bold"},children:"S.No."}),(0,S.jsx)(f.Z,{align:"center",sx:{fontWeight:"bold"},children:"Category Pic"}),(0,S.jsx)(f.Z,{align:"center",sx:{fontWeight:"bold"},children:"Name"}),(0,S.jsx)(f.Z,{align:"center",sx:{fontWeight:"bold"},children:"Date"}),(0,S.jsx)(f.Z,{align:"center",sx:{fontWeight:"bold"},children:"Action"})]})}),(0,S.jsx)(j.Z,{children:null===B||void 0===B||null===(e=B.data)||void 0===e?void 0:e.slice(i*D,i*D+D).map((function(e,n){return(0,S.jsxs)(Z.Z,{children:[(0,S.jsx)(f.Z,{align:"center",children:n+1}),(0,S.jsx)(f.Z,{align:"center",children:(0,S.jsx)(E,{children:(0,S.jsx)(d.Z,{children:(0,S.jsx)(M,{align:"center",src:e.image,alt:"IMG"})})})}),(0,S.jsx)(f.Z,{align:"center",children:null===e||void 0===e?void 0:e.name}),(0,S.jsx)(f.Z,{align:"center",children:C()(null===e||void 0===e?void 0:e.createdAt).format("MMMM Do YYYY")}),(0,S.jsxs)(f.Z,{align:"center",children:[(0,S.jsx)(c.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/category/category-detail",state:{subscriber:e}},name:"Category Detail",children:(0,S.jsx)(P.Z,{"aria-label":"PreviewIcon","aria-haspopup":"true",children:(0,S.jsx)(v.Z,{color:"primary",children:"view"})})}),(0,S.jsx)(c.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/category/category-edit",state:{subscriber:e}},name:"Category Edit",children:(0,S.jsx)(y.Z,{"aria-label":"EditIcon","aria-haspopup":"true",children:(0,S.jsx)(v.Z,{color:"primary",children:"edit"})})}),(0,S.jsx)(w.Z,{"aria-label":"delete","aria-haspopup":"true",children:(0,S.jsx)(v.Z,{color:"error",children:"close"})})]})]},n)}))})]}),(0,S.jsx)(b.Z,{sx:{px:2},page:i,component:"div",rowsPerPage:D,count:null===R||void 0===R?void 0:R.length,onPageChange:function(e,n){s(n)},rowsPerPageOptions:[10,20,30],onRowsPerPageChange:function(e){L(+e.target.value),s(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})})})]})}}}]);
//# sourceMappingURL=5172.d9360368.chunk.js.map