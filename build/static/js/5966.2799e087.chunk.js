"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[5966],{95966:function(e,r,n){n.r(r);var t=n(74165),a=n(15861),i=n(1413),o=n(70885),l=n(4942),s=n(72791),c=n(91523),d=n(98472),u=n(66934),p=n(96285),h=n(68870),x=n(79836),m=n(36151),f=n(39281),g=n(35527),v=n(57621),Z=n(56890),j=n(35855),b=n(53994),P=n(53382),k=n(99875),y=n(44422),w=n(41286),C=n(31353),N=n(27247),S=n(72426),_=n.n(S),D=n(42419),E=n(91265),I=n(75985),A=(n(5462),n(16030)),O=n(80184),U=(0,u.ZP)("div")((function(e){var r,n=e.theme;return r={margin:"30px"},(0,l.Z)(r,n.breakpoints.down("sm"),{margin:"16px"}),(0,l.Z)(r,"& .breadcrumb",(0,l.Z)({marginBottom:"30px"},n.breakpoints.down("sm"),{marginBottom:"16px"})),r})),B=(0,u.ZP)(p.Z)((function(){return{marginBottom:"16px",padding:"0px"}})),M=(0,u.ZP)(h.Z)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto"}})),W=(0,u.ZP)("img")((function(){return{height:45,width:45,borderRadius:"4px"}})),Y=(0,u.ZP)(x.Z)((function(){return{minWidth:"1000",whiteSpace:"pre","& thead":{"& tr":{"& th":{paddingLeft:0,paddingRight:0,fontSize:"1rem"}}},"& tbody":{"& tr":{"& td":{paddingLeft:0,textTransform:"capitalize"}}}}}));r.default=function(){var e,r=(0,s.useState)(0),n=(0,o.Z)(r,2),l=n[0],u=n[1],p=(0,A.I0)(),x=(0,s.useState)([]),S=(0,o.Z)(x,2),F=S[0],L=S[1],z=(0,s.useState)(10),H=(0,o.Z)(z,2),R=H[0],T=H[1],V=(0,s.useState)(""),q=(0,o.Z)(V,2),G=q[0],J=q[1],K=(0,A.v9)((function(e){var r;return null===e||void 0===e||null===(r=e.dataList)||void 0===r?void 0:r.data}));console.log("Sia User Data",F.data),fetch("https://gotimeapi.onrender.com/api/user/").then((function(e){if(!e.ok)throw new Error("Error: "+e.status);return e.json()})).then((function(e){L(e)})).catch((function(e){console.error("Error fetching User data:",e)}));var Q=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p((0,E.h8)(r));case 3:I.Am.success("User Deleted Successfully!",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),p((0,E.lE)()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),I.Am.error("Failed to delete user!",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I.Ix,{position:"top-center",theme:"dark",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,O.jsxs)(U,{children:[(0,O.jsxs)(m.Z,{sx:{mb:2,pl:1,"&:hover":{backgroundColor:"primary.main",color:"#fff"}},variant:"contained",color:"primary",component:c.rU,to:"/users/add-user",children:[(0,O.jsx)(D.Z,{"aria-label":"AddIcon","aria-haspopup":"true"}),"Add New User"]}),(0,O.jsx)(B,{size:"small",type:"text",value:G,onChange:function(e){return function(e){var r=e.target.value;J(r)}(e)},placeholder:"Search by Name",style:{float:"right",backgroundColor:"#fff",padding:"0px"}}),(0,O.jsx)(f.Z,{component:g.Z,sx:{px:0},children:(0,O.jsx)(v.Z,{sx:{px:0,py:0},elevation:1,children:(0,O.jsxs)(h.Z,{width:"100%",overflow:"auto",children:[(0,O.jsxs)(Y,{children:[(0,O.jsx)(Z.Z,{children:(0,O.jsxs)(j.Z,{children:[(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"S.No."}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Profile Pic"}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Full Name"}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Email"}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Phone"}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Date"}),(0,O.jsx)(b.Z,{align:"center",sx:{fontWeight:"bold"},children:"Action"})]})}),(0,O.jsx)(P.Z,{children:null===F||void 0===F||null===(e=F.data)||void 0===e?void 0:e.filter((function(e){return e.full_name&&e.full_name.toLowerCase().includes(G.toLowerCase())})).slice(l*R,l*R+R).map((function(e,r){return(0,O.jsxs)(j.Z,{children:[(0,O.jsx)(b.Z,{align:"center",children:r+1}),(0,O.jsx)(b.Z,{align:"center",children:(0,O.jsx)(M,{children:(0,O.jsx)(h.Z,{children:e.profile_picture?(0,O.jsx)(W,{align:"center",src:e.profile_picture,className:"c-avatar-img",alt:e.email}):(0,O.jsx)(W,{align:"center",src:"https://i.pravatar.cc/150?u=a042581f4e29026704d",className:"c-avatar-img",alt:"Dummy Image"})})})}),(0,O.jsx)(b.Z,{align:"center",children:e.full_name}),(0,O.jsx)(b.Z,{align:"center",children:e.email}),(0,O.jsx)(b.Z,{align:"center",children:e.contact_number}),(0,O.jsx)(b.Z,{align:"center",children:_()(null===e||void 0===e?void 0:e.createdAt).format("MMMM Do YYYY")}),(0,O.jsxs)(b.Z,{align:"center",children:[(0,O.jsx)(c.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/users/user-details",state:{subscriber:e}},name:"User Details",children:(0,O.jsx)(C.Z,{"aria-label":"PreviewIcon","aria-haspopup":"true",children:(0,O.jsx)(k.Z,{color:"primary",children:"view"})})}),(0,O.jsx)(c.rU,{sx:{m:.5},variant:"contained",to:{pathname:"/users/edit-user",state:{subscriber:e}},name:"User Edit",children:(0,O.jsx)(w.Z,{"aria-label":"EditIcon","aria-haspopup":"true",children:(0,O.jsx)(k.Z,{color:"primary",children:"edit"})})}),(0,O.jsx)(N.Z,{"aria-label":"delete","aria-haspopup":"true",onClick:function(){return Q(null===e||void 0===e?void 0:e._id)},children:(0,O.jsx)(k.Z,{color:"error",children:"close"})})]})]},r)}))})]}),(0,O.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",px:2},children:[(0,O.jsx)(m.Z,{variant:"contained",children:function(){var e;if(!F||null===F||void 0===F||!F.data)return null;var r=null===F||void 0===F||null===(e=F.data)||void 0===e?void 0:e.map((function(e,r){return{SNo:r+1,"Profile Pic":Array.isArray(e.profile_picture)?e.profile_picture.join(", "):e.profile_picture,"Full Name":e.full_name,Email:e.email,"Contact Number":e.contact_number,Date:_()(null===e||void 0===e?void 0:e.createdAt).format("MMMM Do YYYY")}})),n={filename:"user_data.csv",headers:[{label:"S.No.",key:"SNo"},{label:"Profile Pic",key:"Profile Pic"},{label:"Full Name",key:"Full Name"},{label:"Email",key:"Email"},{label:"Contact Number",key:"Contact Number"},{label:"Date",key:"Date"}]};return(0,O.jsx)(d.CSVLink,(0,i.Z)((0,i.Z)({data:r},n),{},{style:{color:"#fff",textDecoration:"none"},children:"Download CSV"}))}()}),(0,O.jsx)(y.Z,{sx:{px:2},page:l,component:"div",rowsPerPage:R,count:null===K||void 0===K?void 0:K.length,onPageChange:function(e,r){u(r)},rowsPerPageOptions:[10,20,30],onRowsPerPageChange:function(e){T(+e.target.value),u(0)},nextIconButtonProps:{"aria-label":"Next Page"},backIconButtonProps:{"aria-label":"Previous Page"}})]})]})})})]})]})}}}]);
//# sourceMappingURL=5966.2799e087.chunk.js.map