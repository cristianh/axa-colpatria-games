import{_ as V,r as i,o as w,c as x,z as E,j as B,d as r,e as s,v as C,n as A,g as f,l as p,f as v,F as I,s as N,u as T,i as R}from"./index.e59ab0d4.js";import{g as O}from"./index.a1b928dc.js";import{C as j}from"./Cronometro.502e62ef.js";import"./sounds.8f72fe8f.js";const z={class:"contenedor-principal flex-center-elements-row"},P=["id"],M=["src"],J={props:{id:Number,src:Array,correcto:Boolean,ocultarNavegacion:Boolean,finTime:Boolean},emits:["validarOpciones","guardarOrdenRespuesta"],setup(g,{emit:m}){const o=g,t=i(0);i(!1);const n=i(!1);w(()=>{});const l=i([]),c=i([{src:"./src/img/manos/pregunta.png",isVisible:!0,id:0},{src:"./src/img/manos/mano1.png",isVisible:!0,id:1},{src:"./src/img/manos/mano2.png",isVisible:!0,id:2},{src:"./src/img/manos/mano3.png",isVisible:!0,id:3},{src:"./src/img/manos/mano4.png",isVisible:!0,id:4},{src:"./src/img/manos/mano5.png",isVisible:!0,id:5}]),y=x({cursor:"default",zIndex:"9999",background:"#959595ee",padding:"5px",borderRadius:"100%",filter:"opacity(0.5)",pointerEvents:"all"}),a=x({cursor:"pointer",zIndex:"9999",filter:"grayscale(1)",background:"#959595ee",padding:"5px",borderRadius:"100%",pointerEvents:"all"}),S=x({width:"200px",display:"flex",flexDirection:"row",gridGap:"32px"}),_=x({boxShadow:"none",borderRadius:"12px",backgroundColor:"white"});E(()=>o.correcto,(d,u)=>{console.log("Watch props.selected function called with args:",d,u),d?_.backgroundColor="var(--border-error-mensaje)":_.backgroundColor="var(--border-success-mensaje)"});const b=B(()=>{let d=null;return o.finTime?d=c.value.slice(0,c.value.length):(d=c.value.slice(1,c.value.length).sort(()=>Math.random()-.5),l.value.push(d[0])),d}),h=()=>{t.value!=c.value.length-1&&n.value!=!0&&(n.value=!0,O.to(`.contenedor-imagenes-${o.id}`,{x:"+=-232px",onComplete:()=>{n.value=!1,t.value++,m("validarOpciones",{posicionSlider:o.id-1,actual:t,validacionArray:l}),e()}}))},k=()=>{t.value>0&&n.value!=!0&&(n.value=!0,O.to(`.contenedor-imagenes-${o.id}`,{x:"+=232px",ease:"Power.easeInOut",onComplete:()=>{n.value=!1,t.value--,m("validarOpciones",{posicionSlider:o.id-1,actual:t,validacionArray:l}),e()}}))},e=()=>{t.value==0?(document.querySelector(`.prev-${o.id}`).style.filter="opacity(1)",document.querySelector(`.next-${o.id}`).style.filter="opacity(0.5)"):t.value==c.value.length-1?(document.querySelector(`.prev-${o.id}`).style.filter="opacity(0.5)",document.querySelector(`.next-${o.id}`).style.filter="opacity(1)"):(document.querySelector(`.prev-${o.id}`).style.filter="none",document.querySelector(`.next-${o.id}`).style.filter="none",y.cursor="pointer",y.filter="opacity(1)",a.cursor="pointer",a.filter="opacity(1)")};return(d,u)=>(r(),s("div",z,[g.ocultarNavegacion?(r(),s("div",{key:0,class:C(`next-${o.id}`),style:A(f(y)),onClick:u[0]||(u[0]=$=>k())},"<<",6)):p("",!0),v("div",{class:C(`contenedor-imagenes-${o.id}`),style:A([f(S),f(_)])},[(r(!0),s(I,null,N(f(b),($,q)=>(r(),s("div",{class:"sliders-order",id:`sliders-order-${q}`,key:$},[v("img",{src:$.src,alt:"imagen"},null,8,M)],8,P))),128))],6),g.ocultarNavegacion?(r(),s("div",{key:1,class:C(`prev-${o.id}`),style:A(f(a)),onClick:u[1]||(u[1]=$=>h())},">>",6)):p("",!0)]))}};var F=V(J,[["__scopeId","data-v-a2ce5154"]]);const L={class:"contenedor-actividad gap-2"},W={key:0},D={key:0},G={key:1},U={class:"flex-center-elements-row gap-3"},H={class:"flex-center-elements-row gap-3"},K={key:1},Q={key:2},X={class:"auto flex-center-elements-row gap-2",style:{"text-align":"center"}},Y={setup(g){const m=T();i(4);const o=i(4),t=i(!1),n=i(!1),l=i(!1),c=i(!0),y=i(!1),a=x({posicionSlider:null,actual:null,respuesta:[],orderArray:[]}),S=()=>{l.value=!0,c.value=!0},_=e=>{a.posicionSlider=e.posicionSlider,a.actual=e.actual.value,a.respuesta=e.validacionArray.value,a.orderArray[e.posicionSlider]={slider:e.posicionSlider,posicion:a.actual,respuesta:a.respuesta[0].id},console.log(a.orderArray)},b=()=>{a.orderArray.forEach(e=>{console.log(e.posicion),console.log(e.respuesta),console.log(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion}`),e.posicion==e.respuesta?(y.value=!0,document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.boxShadow="-1px -1px 16px inset green",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.borderRadius="12px",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.backgroundColor="#4caf50"):(y.value=!1,document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.boxShadow="-1px -1px 16px inset red",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.borderRadius="12px",document.querySelector(`.contenedor-imagenes-${e.slider+1}  #sliders-order-${e.posicion} `).style.backgroundColor="#a93a3a")})},h=()=>{n.value=!0,t.value=!0,c.value=!1},k=()=>{m.push("/")};return(e,d)=>(r(),s("div",L,[n.value?(r(),s("div",W,[R(j,{segundos:15,onEndTime:S})])):p("",!0),v("div",null,[n.value?(r(),s("h1",G,"Ahora eres capaz de recordar la secuencia")):(r(),s("h1",D,"Memoriza las siguientes posiciones con tus manos, cuando ya estes listo da clic en continuar."))]),v("div",U,[v("div",H,[(r(!0),s(I,null,N(o.value,u=>(r(),s("div",{key:`_${u}`},[R(F,{finTime:t.value,ocultarNavegacion:!c.value,id:u,onValidarOpciones:_,comprobar:!1},null,8,["finTime","ocultarNavegacion","id"])]))),128))])]),n.value?p("",!0):(r(),s("div",K,[v("div",{class:"auto",style:{"text-align":"center"}},[v("button",{class:"btn-primary",onClick:h},"CONTINUAR")])])),l.value?(r(),s("div",Q,[v("div",X,[l.value?(r(),s("button",{key:0,class:"btn-primary",onClick:b},"COMPROBAR")):p("",!0),l.value?(r(),s("button",{key:1,class:"btn-primary",onClick:b},"REPETIR")):p("",!0),l.value?(r(),s("button",{key:2,class:"btn-primary",onClick:k},"VOLVER A EJERCICIOS")):p("",!0)])])):p("",!0)]))}};var Z=V(Y,[["__scopeId","data-v-6a62165e"]]);const ae={setup(g){return(m,o)=>(r(),s("div",null,[R(Z)]))}};export{ae as default};