(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8284)}])},8284:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var l=t(5893),a=t(8169),i=t(9335),s=t(7294);let n=void 0,o=async e=>{let r=await fetch("".concat(null!=n?n:window.location.origin).concat("/api/method/pasig_lgu_demo.pasig_lgu_demo.util.api",".save_application"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat("5e5b87b5b215e75:34fc0ef233b5d81")},body:JSON.stringify(e)});if(!r.ok)throw Error(409===r.status?"Duplicate Entry":"Response Error ".concat(r.status));let t=await r.json();return t},d=["NEW"];var m=t(1163),u=t(7536),c=t(6312),p=t(1604);let x=p.z.object({email:p.z.string({required_error:"This is Required"}).email("Should be a valid email"),first_name:p.z.string({required_error:"This is Required"}),last_name:p.z.string({required_error:"This is Required"}),type:p.z.enum(["NEW","RENEWAL"],{required_error:"This is Required"}),mobile:p.z.string({required_error:"This is Required"}).length(11,"Phone number should be 11 digits"),agree:p.z.boolean({required_error:"This is Required"}).refine(e=>!0===e,{message:"This is Required"})});var h=t(512),f=t(8388);let g=(0,s.forwardRef)((e,r)=>{let{options:t,error:a,required:i,label:s,...n}=e,o={input:"w-full bg-white my-1 rounded-[0.13rem] text-[1rem] leading-[1.5rem] placeholder:text-black/[0.25]",label:"text-start self-start text-[1rem] leading-[1.5rem] text-[#29344D] font-semibold",error:"text-[#F9433E] text-[0.75rem] leading-6 italic font-Poppins",required:"text-[#BABABA] italic font-normal text-[0.75rem] font-Poppins",radio:""};return(0,l.jsxs)("div",{className:"w-full px-2 py-1",children:[(0,l.jsxs)("label",{htmlFor:e.id,className:o.label,children:[s,i&&(0,l.jsx)("span",{className:o.required,children:"\xa0(Required)"})]}),t&&(0,l.jsx)("div",{className:"mt-2 flex flex-wrap gap-4",children:t.map(e=>(0,l.jsxs)("span",{className:"flex items-center gap-2",children:[(0,l.jsx)("input",{...n,ref:r,className:o.radio,value:e.value}),(0,l.jsx)("label",{className:"text-[0.875rem] leading-[1.375rem]",children:e.label})]},e.label))}),!t&&(0,l.jsx)("input",{className:function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,f.m6)((0,h.W)(r))}(o.input,{"border-[#F9433E]":!!a}),...n,ref:r}),a&&(0,l.jsx)("p",{className:o.error,children:a})]})});g.displayName="FormInput";var b=t(1664),v=t.n(b);let N={form:"py-[2rem] max-h-full flex flex-col rounded-[1.5rem] border-[0.13rem] border-[#838DAB] items-start overflow-y-auto px-[3.88rem] w-[27.9475rem] bg-[#F4F4F4] shadow-md",title:"text-start mb-2 text-[@29344D] text-[1.75rem] font-medium leading-[2rem]",error:"w-full text-center text-red-500 text-sm mt-4 font-medium",loading:"h-1 w-full bg-indigo-800 absolute top-0 left-0",button:"text-white text-[1rem] hover:bg-[#153FAB] w-full leading-[1.5rem] rounded-[0.13rem] bg-[#1890FF] w-full px-[0.4rem] py-[0.94rem] hover:bg-blue-800 transition-colors duration-100 shadow-md",link:"text-[0.875rem] leading-[1.375rem] text-[#0E82F0]",requiredError:"text-[#F9433E] text-[0.75rem] px-2 leading-6 italic font-Poppins"};var j=()=>{let{register:e,control:r,errors:t,submitHandler:a,loading:n,error:p}=function(){let[e,r]=(0,s.useState)(),[t,l]=(0,s.useState)(!1),a=(0,s.useRef)(null),i=(0,m.useRouter)(),{register:n,handleSubmit:p,control:h,formState:{errors:f}}=(0,u.cI)({resolver:(0,c.F)(x)}),g=p(async e=>{try{l(!0),r(void 0),await o(e),i.push("/success")}catch(e){if(e instanceof Error){r(e.message);return}r("Unknown error occurred!")}finally{l(!1)}}),b=(0,s.useCallback)(()=>{var e;null===(e=a.current)||void 0===e||e.reset(),r(void 0)},[]);return{resetHandler:b,submitHandler:g,formRef:a,loading:t,error:e,mockTypes:d,register:n,control:h,errors:f}}();return(0,l.jsxs)("form",{className:N.form,onSubmit:a,children:[(0,l.jsx)("h1",{className:N.title,children:"Pasig Student Scholarship Form"}),(0,l.jsx)(u.Qr,{name:"first_name",control:r,rules:{required:!0},render:e=>{var r;let{field:a}=e;return(0,l.jsx)(g,{label:"First Name",id:"first_name",type:"text",placeholder:"First Name",...a,required:!0,error:null===(r=t.first_name)||void 0===r?void 0:r.message})}}),(0,l.jsx)(u.Qr,{name:"last_name",control:r,rules:{required:!0},render:e=>{var r;let{field:a}=e;return(0,l.jsx)(g,{label:"Last Name",id:"last_name",type:"text",placeholder:"Last Name",...a,required:!0,error:null===(r=t.last_name)||void 0===r?void 0:r.message})}}),(0,l.jsx)(u.Qr,{name:"email",control:r,rules:{required:!0},render:e=>{var r;let{field:a}=e;return(0,l.jsx)(g,{label:"Email",id:"email",type:"text",placeholder:"person@email.com",...a,required:!0,error:null===(r=t.email)||void 0===r?void 0:r.message})}}),(0,l.jsx)(u.Qr,{name:"mobile",control:r,rules:{required:!0},render:e=>{var r;let{field:a}=e;return(0,l.jsx)(g,{label:"Mobile Number",id:"mobile",type:"tel",pattern:"[0-9]{4}[0-9]{3}[0-9]{4}",placeholder:"0917-000-0000",...a,required:!0,error:null===(r=t.mobile)||void 0===r?void 0:r.message})}}),(0,l.jsx)(u.Qr,{name:"type",control:r,rules:{required:!0},render:e=>{var r;let{field:a}=e;return(0,l.jsx)(g,{label:"Application Type",id:"type",type:"radio",options:[{label:"New",value:"NEW"},{label:"Renewal",value:"RENEWAL"}],...a,required:!0,error:null===(r=t.type)||void 0===r?void 0:r.message})}}),(0,l.jsxs)("div",{className:"flex items-center gap-5 px-2 pt-1",children:[(0,l.jsx)("input",{id:"agree",type:"checkbox",className:"h-5 w-5 rounded-[0.13rem]",...e("agree")}),(0,l.jsxs)("p",{className:"text-[0.875rem] leading-[1.375rem]",children:["I have read and agree on the"," ",(0,l.jsx)(v(),{href:"",className:N.link,children:"Terms and Conditions"})," ","and"," ",(0,l.jsx)(v(),{href:"",className:N.link,children:"Privacy Policy"}),"."]})]}),t.agree&&(0,l.jsx)("p",{className:N.requiredError,children:"This is Required"}),(0,l.jsx)("div",{className:"w-full px-2 pt-4",children:(0,l.jsx)("button",{className:N.button,type:"submit",children:"Send Application"})}),n&&(0,l.jsx)(i.Spinner,{className:"mt-4 self-center",color:"blue"}),p&&(0,l.jsxs)("p",{className:N.error,children:["⚠",p,"⚠"]})]})};function w(){return(0,l.jsx)("div",{className:"flex min-h-[calc(100vh-8.88rem)] w-full flex-col items-center bg-[length:contain,_37.6em_37.6rem] bg-mobile-position md:bg-[length:contain,_37.6em_37.6rem] md:bg-desktop-position",style:{backgroundImage:"url(".concat((0,a.i)("/images/Wave.svg"),"), url(").concat((0,a.i)("/images/Sun.svg"),")"),backgroundRepeat:"no-repeat, no-repeat"},children:(0,l.jsxs)("div",{className:"flex h-[calc(100vh-8.88rem)] w-full flex-col items-center justify-start gap-4 px-4 pb-8 md:flex-row md:items-start md:justify-around md:gap-0 md:pl-[9.06rem] md:pr-[9.5rem]",children:[(0,l.jsxs)("div",{className:"flex w-[34.1rem] flex-col justify-center gap-6 text-center md:h-[24rem] md:text-start",children:[(0,l.jsx)("h1",{className:"text-[3.5rem] font-bold leading-[3rem] text-[#29344D] md:text-[4.5rem] md:leading-[4rem]",children:"Unlocking Bright Futures:"}),(0,l.jsx)("h5",{className:"text-[1.875rem] font-medium leading-[2.5rem] text-[#838DAB]",children:"Empowering Pasig's Youth Through Education - Apply for our Student Scholarship Program Today!"})]}),(0,l.jsx)("div",{className:"h-full overflow-hidden rounded-[1.5rem]",children:(0,l.jsx)(j,{})})]})})}}},function(e){e.O(0,[449,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);