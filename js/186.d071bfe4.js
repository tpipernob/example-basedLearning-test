"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[186],{9878:(a,e,o)=>{o.d(e,{$_:()=>m,Em:()=>s,FX:()=>i,bN:()=>u,i3:()=>c,k6:()=>p,tb:()=>d,xr:()=>n});var r=o(737),t=o(546),l=o(8090);const i=async a=>{try{const e=r.j2.currentUser;if(!e)throw new Error("Usuário não autenticado.");const o={...a,userId:e.uid,lastUpdated:(new Date).toISOString(),ratings:[],aprovado:!1},l=await(0,t.gS)((0,t.rJ)(r.db,"exemplos"),o);return l.id}catch(e){throw console.error("Erro ao adicionar exemplo:",e),e}},s=async(a,e)=>{try{const o=r.j2.currentUser;if(!o)throw new Error("Usuário não autenticado.");const l=(0,t.H9)(r.db,"exemplos",a),i=await(0,t.x7)(l);if(!i.exists())throw new Error("Exemplo não encontrado.");const s=i.data(),n=(0,t.H9)(r.db,"users",o.uid),d=await(0,t.x7)(n),c=d.exists()?d.data().role:"user";if("admin"!==c&&o.uid!==s.userId)throw new Error("Você não tem permissão para editar este exemplo.");"admin"!==c&&(delete e.aprovado,delete e.link);const u={...e,lastUpdated:(new Date).toISOString()};await(0,t.mZ)(l,u)}catch(o){throw console.error("Erro ao atualizar exemplo:",o),o}},n=async a=>{try{const e=r.j2.currentUser;if(!e)throw new Error("Usuário não autenticado.");const o=(0,t.H9)(r.db,"exemplos",a),l=await(0,t.x7)(o);if(!l.exists())throw new Error("Exemplo não encontrado.");const i=l.data(),s=(0,t.H9)(r.db,"users",e.uid),n=await(0,t.x7)(s),d=n.exists()?n.data().role:"user";if("admin"!==d&&e.uid!==i.userId)throw new Error("Você não tem permissão para excluir este exemplo.");return await(0,t.kd)(o),!0}catch(e){throw console.error("Erro ao excluir exemplo:",e),e}},d=async()=>{try{const a=await(0,t.GG)((0,t.rJ)(r.db,"exemplos"));return a.docs.map((a=>({id:a.id,...a.data()})))}catch(a){throw console.error("Erro ao carregar exemplos:",a),a}},c=async a=>{try{const o=(0,t.H9)(r.db,"exemplos",a),l=await(0,t.x7)(o);if(!l.exists())return console.warn("Exemplo não encontrado:",a),null;const i={id:l.id,...l.data()};if(i.userId)try{const a=(0,t.H9)(r.db,"users",i.userId),e=await(0,t.x7)(a);e.exists()?i.userName=e.data().name||"Usuário desconhecido":i.userName="Usuário não encontrado"}catch(e){console.error("Erro ao carregar nome do usuário:",e),i.userName="Erro ao carregar nome"}else i.userName="Usuário desconhecido";return i}catch(e){throw console.error("Erro ao carregar exemplo:",e),e}},u=async(a,e)=>{try{const o=r.j2.currentUser;if(!o)throw new Error("Usuário não autenticado.");const i=(0,l.A)(),s={id:i,author:o.displayName||"Usuário Anônimo",rating:e.rating,comment:e.comment,date:(new Date).toISOString(),userId:o.uid},n=(0,t.H9)(r.db,"exemplos",a);return await(0,t.mZ)(n,{ratings:(0,t.hq)(s)}),s}catch(o){throw console.error("Erro ao salvar avaliação:",o),o}},m=async(a,e)=>{try{const o=r.j2.currentUser;if(!o)throw new Error("Usuário não autenticado.");const l=(0,t.H9)(r.db,"exemplos",a),i=await(0,t.x7)(l);if(!i.exists())throw new Error("Exemplo não encontrado.");const s=i.data(),n=s.ratings.map((a=>a.id===e.id?e:a));return await(0,t.mZ)(l,{ratings:n}),e}catch(o){throw console.error("Erro ao editar avaliação:",o),o}},p=async(a,e)=>{try{const o=(0,t.H9)(r.db,"exemplos",a),l=await(0,t.x7)(o);if(!l.exists())throw new Error("Exemplo não encontrado.");const i=l.data(),s=i.ratings.filter((a=>a.id!==e));return await(0,t.mZ)(o,{ratings:s}),s}catch(o){throw console.error("Erro ao remover avaliação:",o),o}}},737:(a,e,o)=>{o.d(e,{db:()=>d,j2:()=>c});var r=o(322),t=o(546),l=o(5956),i=o(1271);const s={apiKey:"AIzaSyDA7T1Fg6CSR1WJHpOeNdaRYuWKtyBA7GU",authDomain:"app-ebl.firebaseapp.com",projectId:"app-ebl",storageBucket:"app-ebl.appspot.com",messagingSenderId:"664304698050",appId:"1:664304698050:web:fd9d886cf317cca6d5f15b"},n=(0,r.Wp)(s),d=(0,t.aU)(n),c=(0,l.xI)(n);(0,l.hg)(c,(a=>{a?i.A.set("user",a):i.A.remove("user")}))},9186:(a,e,o)=>{o.r(e),o.d(e,{default:()=>O});var r=o(1758),t=o(8790);const l=(0,r.Lk)("div",{class:"text-h6 q-mb-md"},"Repositório de Exemplos",-1),i={class:"row q-col-gutter-md"},s={class:"col-12 col-md-4"},n={class:"col-12 col-md-4"},d={class:"col-12 col-md-4"},c={class:"text-h6"},u={class:"text-caption text-grey"},m={class:"text-caption text-primary"},p=(0,r.Lk)("strong",null,"Modelos:",-1),g={class:"row items-center"},v={class:"q-ml-sm text-weight-bold"},w={class:"q-ml-xs text-grey"},x={key:1,class:"q-mt-md text-center"},b=(0,r.Lk)("p",null,"Carregando exemplos...",-1),h={class:"q-mt-md row justify-center"};function f(a,e,o,f,E,y){const U=(0,r.g2)("q-select"),k=(0,r.g2)("q-rating"),D=(0,r.g2)("q-card-section"),A=(0,r.g2)("q-card"),M=(0,r.g2)("q-table"),q=(0,r.g2)("q-spinner"),V=(0,r.g2)("q-pagination"),I=(0,r.g2)("q-page");return(0,r.uX)(),(0,r.Wv)(I,{padding:""},{default:(0,r.k6)((()=>[(0,r.bF)(A,{class:"q-pa-md"},{default:(0,r.k6)((()=>[l,(0,r.Lk)("div",i,[(0,r.Lk)("div",s,[(0,r.bF)(U,{modelValue:f.filtroTipo,"onUpdate:modelValue":e[0]||(e[0]=a=>f.filtroTipo=a),options:f.tiposExemplo,label:"Filtrar por Tipo",multiple:"","use-chips":"",clearable:"",dense:"",outlined:""},null,8,["modelValue","options"])]),(0,r.Lk)("div",n,[(0,r.bF)(U,{modelValue:f.filtroModelo,"onUpdate:modelValue":e[1]||(e[1]=a=>f.filtroModelo=a),options:f.modelosUML,label:"Filtrar por Modelos UML",multiple:"","use-chips":"",clearable:"",dense:"",outlined:""},null,8,["modelValue","options"])]),(0,r.Lk)("div",d,[(0,r.bF)(U,{modelValue:f.criterioOrdenacao,"onUpdate:modelValue":[e[2]||(e[2]=a=>f.criterioOrdenacao=a),f.ordenarExemplos],options:f.opcoesOrdenacao,label:"Ordenar por",dense:"",outlined:""},null,8,["modelValue","options","onUpdate:modelValue"])])]),f.loading?((0,r.uX)(),(0,r.CE)("div",x,[(0,r.bF)(q,{size:"40px",color:"primary"}),b])):((0,r.uX)(),(0,r.Wv)(M,{key:0,rows:f.exemplosFiltrados,columns:f.colunas,"row-key":"id",pagination:f.paginacao,"onUpdate:pagination":e[3]||(e[3]=a=>f.paginacao=a),"rows-per-page-options":[5,10,20],grid:"","hide-bottom":""},{item:(0,r.k6)((a=>[(0,r.bF)(A,{class:"q-ma-sm q-pa-xs example-card cursor-pointer",onClick:e=>f.abrirDetalhes(a.row.id),flat:"",bordered:"",style:{width:"100%"}},{default:(0,r.k6)((()=>[(0,r.bF)(D,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",c,(0,t.v_)(a.row.titulo),1),(0,r.Lk)("div",u,(0,t.v_)(a.row.tipo),1),(0,r.Lk)("div",m,[p,(0,r.eW)(" "+(0,t.v_)(a.row.modelo.join(", ")),1)]),(0,r.Lk)("div",g,[(0,r.bF)(k,{modelValue:a.row.avaliacaoMedia,"onUpdate:modelValue":e=>a.row.avaliacaoMedia=e,size:"1.5em",color:"amber",readonly:""},null,8,["modelValue","onUpdate:modelValue"]),(0,r.Lk)("span",v,(0,t.v_)(a.row.avaliacaoMedia||"0.0"),1),(0,r.Lk)("span",w,"("+(0,t.v_)(a.row.totalAvaliacoes)+" avaliações)",1)])])),_:2},1024)])),_:2},1032,["onClick"])])),_:1},8,["rows","columns","pagination"])),(0,r.Lk)("div",h,[(0,r.bF)(V,{modelValue:f.paginacao.page,"onUpdate:modelValue":[e[4]||(e[4]=a=>f.paginacao.page=a),f.atualizarPagina],max:f.totalPaginas,"max-pages":5,"direction-links":"","boundary-links":""},null,8,["modelValue","max","onUpdate:modelValue"])])])),_:1})])),_:1})}o(4748);var E=o(8734),y=o(9878),U=o(4907),k=o(455);const D={setup(){const a=(0,U.A)(),e=(0,E.KR)([]),o=(0,E.KR)(!0),t=(0,E.KR)([]),l=(0,E.KR)([]),i=(0,E.KR)({page:1,rowsPerPage:5}),s=(0,E.KR)({label:"Data de Inclusão (Mais Recente)",value:"dataDesc"}),n=(0,k.rd)(),d=[{label:"Data de Inclusão (Mais Recente)",value:"dataDesc"},{label:"Data de Inclusão (Mais Antiga)",value:"dataAsc"},{label:"Avaliação (Maior para Menor)",value:"avaliacaoDesc"},{label:"Avaliação (Menor para Maior)",value:"avaliacaoAsc"}],c=[{name:"titulo",label:"Título",field:"titulo",align:"left",sortable:!0},{name:"tipo",label:"Tipo",field:"tipo",align:"left",sortable:!0},{name:"modelo",label:"Modelos UML",field:"modelo",align:"left",sortable:!1},{name:"avaliacaoMedia",label:"Avaliação",field:"avaliacaoMedia",align:"left",sortable:!0}],u=["Exemplo Correto","Exemplo Errôneo","Ambos"],m=["Diagrama de Classes","Diagrama de Objetos","Diagrama de Componentes","Diagrama de Pacotes","Diagrama de Estrutura Composta","Diagrama de Implantação (Deployment)","Diagrama de Caso de Uso","Diagrama de Sequência","Diagrama de Comunicação","Diagrama de Estados (State Machine)","Diagrama de Atividades","Diagrama de Interação Geral","Diagrama de Tempo"],p=async()=>{o.value=!0;try{const a=await(0,y.tb)();e.value=a.map((a=>({...a,avaliacaoMedia:b(a.ratings),totalAvaliacoes:a.ratings.length}))),x()}catch(r){console.error(r),e.value=[],a.notify({message:"Erro ao carregar exemplos.",color:"negative"})}finally{o.value=!1}},g=(0,r.EW)((()=>{let a=[...e.value];return t.value.length&&(a=a.filter((a=>t.value.includes(a.tipo)))),l.value.length&&(a=a.filter((a=>a.modelo.some((a=>l.value.includes(a)))))),a})),v=(0,r.EW)((()=>Math.ceil(g.value.length/i.value.rowsPerPage))),w=a=>{i.value.page=a},x=()=>{e.value.sort(((a,e)=>"avaliacaoDesc"===s.value.value?e.avaliacaoMedia-a.avaliacaoMedia:"avaliacaoAsc"===s.value.value?a.avaliacaoMedia-e.avaliacaoMedia:"dataDesc"===s.value.value?new Date(e.lastUpdated)-new Date(a.lastUpdated):"dataAsc"===s.value.value?new Date(a.lastUpdated)-new Date(e.lastUpdated):0))},b=a=>{if(!a||0===a.length)return 0;const e=a.reduce(((a,e)=>{const o=Number(e.rating)||0;return a+o}),0),o=e/a.length;return isNaN(o)?0:o.toFixed(1)},h=a=>{n.push({name:"exampleDetails",query:{id:a}})};return(0,r.sV)(p),{exemplosFiltrados:g,colunas:c,paginacao:i,totalPaginas:v,loading:o,filtroTipo:t,filtroModelo:l,tiposExemplo:u,modelosUML:m,criterioOrdenacao:s,atualizarPagina:w,ordenarExemplos:x,opcoesOrdenacao:d,abrirDetalhes:h}}};var A=o(2807),M=o(7716),q=o(3316),V=o(595),I=o(6653),L=o(4189),F=o(1816),C=o(564),S=o(4700),_=o(8582),j=o.n(_);const R=(0,A.A)(D,[["render",f]]),O=R;j()(D,"components",{QPage:M.A,QCard:q.A,QSelect:V.A,QTable:I.A,QCardSection:L.A,QRating:F.A,QSpinner:C.A,QPagination:S.A})}}]);