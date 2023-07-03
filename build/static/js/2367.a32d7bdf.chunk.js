"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[2367],{20097:function(e,r,n){var a=n(57621),i=n(93457),t=n(52791),l=n(80184),s=(0,i.Z)(a.Z)((function(){return{height:"100%",padding:"20px 24px"}})),o=(0,i.Z)("div")((function(e){return{fontSize:"1.2rem",fontWeight:"500",textTransform:"capitalize",marginBottom:!e.subtitle&&"16px"}}));r.Z=function(e){var r=e.children,n=e.title,a=e.subtitle;e.icon;return(0,l.jsxs)(s,{elevation:6,children:[(0,l.jsx)(o,{subtitle:a,children:n}),a&&(0,l.jsx)(t.Z,{sx:{mb:2},children:a}),r]})}},22367:function(e,r,n){n.r(r);var a=n(1413),i=n(74165),t=n(15861),l=n(70885),s=n(4942),o=n(72791),u=n(36314),d=n(93457),h=n(52791),c=n(20097),m=n(96285),p=n(36151),g=n(61889),x=n(71747),f=n(92506),b=n(24929),_=n(16030),v=n(91265),Z=n(19598),w=n(75985),j=n(43954),B=n(67394),C=(n(5462),n(80184)),q=(0,d.Z)("div")((function(e){var r,n=e.theme;return r={margin:"30px"},(0,s.Z)(r,n.breakpoints.down("sm"),{margin:"16px"}),(0,s.Z)(r,"& .breadcrumb",(0,s.Z)({marginBottom:"30px"},n.breakpoints.down("sm"),{marginBottom:"16px"})),r})),k=(0,d.Z)("form")((function(){return{paddingLeft:"16px",paddingRight:"16px"}})),A=(0,d.Z)(m.Z)((function(){return{marginBottom:"16px"}})),y=b.Ry().shape({full_name:b.Z_().required("Full name is required"),username:b.Z_().required("User name is required"),email:b.Z_().required("Email is required"),password:b.Z_().required("Password is required"),height_feet:b.Z_().required("Height in feet is required"),height_inches:b.Z_().required("Height in inches is required"),weight:b.Z_().required("Weight is required"),age:b.Rx().typeError("Age must be a number").required("Age is required").positive("Age must be a positive number").integer("Age must be an integer"),contact_number:b.Z_().required("Contact Number is required")}),z={full_name:"",username:"",email:"",password:"",weight:"",height_feet:"",height_inches:"",age:"",contact_number:""};r.default=function(){var e=(0,_.I0)(),r=(0,Z.k6)(),n=(0,o.useState)(null),s=(0,l.Z)(n,2),d=s[0],m=s[1],b=(0,o.useState)(!1),T=(0,l.Z)(b,2),W=T[0],P=T[1],S=(0,j.uI)({accept:"image/*",onDrop:function(e){m(e[0]),P(!1)}}),R=S.getRootProps,F=S.getInputProps,I=S.isDragActive,N=function(){var n=(0,t.Z)((0,i.Z)().mark((function n(a){var t,l;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new FormData).append("full_name",a.full_name),t.append("username",a.username),t.append("email",a.email),t.append("password",a.password),t.append("weight",a.weight),t.append("height_feet",a.height_feet),t.append("height_inches",a.height_inches),t.append("age",a.age),t.append("contact_number",a.contact_number),t.append("address",a.address),console.log("Selected File:",d),d?t.append("image",d):console.log("No file selected"),l={headers:{"Content-Type":"multipart/form-data"}},P(!0),n.prev=15,n.next=18,e((0,v.Nq)(t,l));case 18:w.Am.success("User Added Successfully!",{}),r.push("/users/user-list"),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(15),console.error("Error adding user:",n.t0),w.Am.error("Failed to add user. Please try again later.",{});case 26:return n.prev=26,P(!1),n.finish(26);case 29:case"end":return n.stop()}}),n,null,[[15,22,26,29]])})));return function(e){return n.apply(this,arguments)}}();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.Ix,{position:"top-center",theme:"colored",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,C.jsxs)(q,{children:[(0,C.jsxs)(p.Z,{sx:{mb:2,pl:1},variant:"contained",color:"primary",onClick:function(){r.goBack()},children:[(0,C.jsx)(B.Z,{"aria-label":"ArrowBackIcon","aria-haspopup":"true"}),"Back"]}),(0,C.jsx)(u.Z,{spacing:3,children:(0,C.jsx)(c.Z,{title:"Add New User",children:(0,C.jsx)(f.J9,{onSubmit:N,enableReinitialize:!0,initialValues:z,validationSchema:y,children:function(e){var r=e.values,n=e.errors,i=e.touched,t=e.handleChange,l=e.handleBlur,s=e.handleSubmit;return(0,C.jsxs)(k,{onSubmit:s,children:[(0,C.jsx)(g.ZP,{container:!0,spacing:3,children:(0,C.jsxs)(g.ZP,{item:!0,sm:6,xs:12,children:[(0,C.jsx)(A,{fullWidth:!0,name:"full_name",label:"Full Name",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.full_name||"",error:Boolean(i.full_name&&n.full_name),helperText:i.full_name&&n.full_name}),(0,C.jsx)(A,{fullWidth:!0,name:"username",label:"User Name",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.username||"",error:Boolean(i.username&&n.username),helperText:i.username&&n.username}),(0,C.jsx)(A,{fullWidth:!0,name:"email",label:"Email",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.email||"",error:Boolean(i.email&&n.email),helperText:i.email&&n.email}),(0,C.jsx)(A,{fullWidth:!0,name:"password",label:"Password",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.password||"",error:Boolean(i.password&&n.password),helperText:i.password&&n.password}),(0,C.jsx)(A,{fullWidth:!0,name:"weight",label:"Weight",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.weight||"",error:Boolean(i.weight&&n.weight),helperText:i.weight&&n.weight}),(0,C.jsx)(A,{fullWidth:!0,name:"height_feet",label:"Height In Feet",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.height_feet||"",error:Boolean(i.height_feet&&n.height_feet),helperText:i.height_feet&&n.height_feet}),(0,C.jsx)(A,{fullWidth:!0,name:"height_inches",label:"Height In Inches",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.height_inches||"",error:Boolean(i.height_inches&&n.height_inches),helperText:i.height_inches&&n.height_inches}),(0,C.jsx)(A,{fullWidth:!0,name:"age",label:"Age",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.age||"",error:Boolean(i.age&&n.age),helperText:i.age&&n.age}),(0,C.jsx)(A,{fullWidth:!0,name:"contact_number",label:"Contact Number",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.contact_number||"",error:Boolean(i.contact_number&&n.contact_number),helperText:i.contact_number&&n.contact_number}),(0,C.jsx)(x.Z,{fullWidth:!0,minRows:2,maxRows:4,style:{width:"100%",borderRadius:"4px",borderColor:"#ccc",padding:"8px",fontSize:"16px"},name:"address",label:"Address",placeholder:"Enter your Address",size:"small",variant:"outlined",onBlur:l,onChange:t,value:r.address||"",error:Boolean(i.address&&n.address),helperText:i.address&&n.address}),(0,C.jsx)(h.Z,{flex:1,children:(0,C.jsxs)("div",(0,a.Z)((0,a.Z)({style:{border:"1px solid #ccc",padding:"10px",textAlign:"center",margin:"12px 0",borderRadius:"4px"}},R()),{},{children:[(0,C.jsx)("input",(0,a.Z)({type:"file",label:"Profile Pic",name:"profile_picture"},F())),I?(0,C.jsx)("p",{children:"Drop the image file here ..."}):(0,C.jsx)("b",{children:"Drag and drop an image file here, or click to select file"})]}))})]})}),(0,C.jsx)(p.Z,{type:"submit",color:"primary",variant:"contained",sx:{mb:2,px:4},disabled:W,style:{marginTop:"10px"},children:W?"Uploading...":"Add User"})]})}})})})]})]})}}}]);
//# sourceMappingURL=2367.a32d7bdf.chunk.js.map