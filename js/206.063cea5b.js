"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[206],{9878:(e,a,l)=>{l.d(a,{$_:()=>m,Em:()=>d,FX:()=>i,bN:()=>c,i3:()=>u,k6:()=>p,tb:()=>s,xr:()=>n});var o=l(737),t=l(546),r=l(8090);const i=async e=>{try{const a=o.j2.currentUser;if(!a)throw new Error("Usuário não autenticado.");const l={...e,userId:a.uid,lastUpdated:(new Date).toISOString(),ratings:[],aprovado:!1},r=await(0,t.gS)((0,t.rJ)(o.db,"exemplos"),l);return r.id}catch(a){throw console.error("Erro ao adicionar exemplo:",a),a}},d=async(e,a)=>{try{const l=o.j2.currentUser;if(!l)throw new Error("Usuário não autenticado.");const r=(0,t.H9)(o.db,"exemplos",e),i=await(0,t.x7)(r);if(!i.exists())throw new Error("Exemplo não encontrado.");const d=i.data(),n=(0,t.H9)(o.db,"users",l.uid),s=await(0,t.x7)(n),u=s.exists()?s.data().role:"user";if("admin"!==u&&l.uid!==d.userId)throw new Error("Você não tem permissão para editar este exemplo.");"admin"!==u&&(delete a.aprovado,delete a.link);const c={...a,lastUpdated:(new Date).toISOString()};await(0,t.mZ)(r,c)}catch(l){throw console.error("Erro ao atualizar exemplo:",l),l}},n=async e=>{try{const a=o.j2.currentUser;if(!a)throw new Error("Usuário não autenticado.");const l=(0,t.H9)(o.db,"exemplos",e),r=await(0,t.x7)(l);if(!r.exists())throw new Error("Exemplo não encontrado.");const i=r.data(),d=(0,t.H9)(o.db,"users",a.uid),n=await(0,t.x7)(d),s=n.exists()?n.data().role:"user";if("admin"!==s&&a.uid!==i.userId)throw new Error("Você não tem permissão para excluir este exemplo.");return await(0,t.kd)(l),!0}catch(a){throw console.error("Erro ao excluir exemplo:",a),a}},s=async()=>{try{const e=await(0,t.GG)((0,t.rJ)(o.db,"exemplos"));return e.docs.map((e=>({id:e.id,...e.data()})))}catch(e){throw console.error("Erro ao carregar exemplos:",e),e}},u=async e=>{try{const l=(0,t.H9)(o.db,"exemplos",e),r=await(0,t.x7)(l);if(!r.exists())return console.warn("Exemplo não encontrado:",e),null;const i={id:r.id,...r.data()};if(i.userId)try{const e=(0,t.H9)(o.db,"users",i.userId),a=await(0,t.x7)(e);a.exists()?i.userName=a.data().name||"Usuário desconhecido":i.userName="Usuário não encontrado"}catch(a){console.error("Erro ao carregar nome do usuário:",a),i.userName="Erro ao carregar nome"}else i.userName="Usuário desconhecido";return i}catch(a){throw console.error("Erro ao carregar exemplo:",a),a}},c=async(e,a)=>{try{const l=o.j2.currentUser;if(!l)throw new Error("Usuário não autenticado.");const i=(0,r.A)(),d={id:i,author:l.displayName||"Usuário Anônimo",rating:a.rating,comment:a.comment,date:(new Date).toISOString(),userId:l.uid},n=(0,t.H9)(o.db,"exemplos",e);return await(0,t.mZ)(n,{ratings:(0,t.hq)(d)}),d}catch(l){throw console.error("Erro ao salvar avaliação:",l),l}},m=async(e,a)=>{try{const l=o.j2.currentUser;if(!l)throw new Error("Usuário não autenticado.");const r=(0,t.H9)(o.db,"exemplos",e),i=await(0,t.x7)(r);if(!i.exists())throw new Error("Exemplo não encontrado.");const d=i.data(),n=d.ratings.map((e=>e.id===a.id?a:e));return await(0,t.mZ)(r,{ratings:n}),a}catch(l){throw console.error("Erro ao editar avaliação:",l),l}},p=async(e,a)=>{try{const l=(0,t.H9)(o.db,"exemplos",e),r=await(0,t.x7)(l);if(!r.exists())throw new Error("Exemplo não encontrado.");const i=r.data(),d=i.ratings.filter((e=>e.id!==a));return await(0,t.mZ)(l,{ratings:d}),d}catch(l){throw console.error("Erro ao remover avaliação:",l),l}}},737:(e,a,l)=>{l.d(a,{db:()=>s,j2:()=>u});var o=l(322),t=l(546),r=l(5956),i=l(1271);const d={apiKey:"AIzaSyDA7T1Fg6CSR1WJHpOeNdaRYuWKtyBA7GU",authDomain:"app-ebl.firebaseapp.com",projectId:"app-ebl",storageBucket:"app-ebl.appspot.com",messagingSenderId:"664304698050",appId:"1:664304698050:web:fd9d886cf317cca6d5f15b"},n=(0,o.Wp)(d),s=(0,t.aU)(n),u=(0,r.xI)(n);(0,r.hg)(u,(e=>{e?i.A.set("user",e):i.A.remove("user")}))},8206:(e,a,l)=>{l.r(a),l.d(a,{default:()=>xe});var o=l(1758),t=l(8790);const r={class:"column"},i={class:"text-h6"},d={class:"text-subtitle2 text-grey"},n={class:"row items-center q-mt-xs"},s={class:"q-ml-sm text-weight-bold"},u={class:"q-ml-xs text-grey"},c={class:"text-body1"},m=(0,o.Lk)("div",{class:"text-h6"},"Editar Exemplo",-1),p=(0,o.Lk)("div",{class:"text-h6"},"Confirmar Exclusão",-1),x=(0,o.Lk)("p",null,"Tem certeza de que deseja excluir este exemplo? Esta ação não pode ser desfeita.",-1),v=(0,o.Lk)("div",{class:"text-h6"},"Detalhes do Exemplo",-1),b=(0,o.eW)("Tipo do Exemplo"),g={class:"text-wrap break-all"},k=(0,o.eW)("Modelo(s)"),f={class:"text-wrap break-all"},w=(0,o.eW)("Incluído por"),E={class:"text-wrap break-all"},h=(0,o.eW)("Fonte"),y=["href"],F={key:1,class:"text-wrap break-all"},_=(0,o.eW)("Última Atualização"),V={class:"text-wrap break-all"},A={class:"row justify-between"},C=(0,o.Lk)("div",{class:"text-h6"},"Avaliações dos Professores",-1),U={key:1,class:"text-grey text-caption"},q=(0,o.Lk)("div",{class:"text-h6"},"Adicionar Avaliação",-1),D=(0,o.Lk)("div",{class:"text-h6"},"Editar Avaliação",-1),L=(0,o.Lk)("div",{class:"text-center text-grey"},"Ainda não há avaliações para este exemplo.",-1),R={class:"row items-center justify-between"},I={class:"text-weight-bold"},W={class:"text-grey text-caption"},j={class:"row"},Q=(0,o.Lk)("div",{class:"text-h6"},"Confirmar Exclusão",-1),S=(0,o.Lk)("p",null,"Tem certeza de que deseja excluir a avaliação? Esta ação não pode ser desfeita.",-1),K={class:"q-mt-sm"};function X(e,a,l,X,P,z){const H=(0,o.g2)("q-rating"),T=(0,o.g2)("q-card-section"),N=(0,o.g2)("q-separator"),M=(0,o.g2)("q-btn"),O=(0,o.g2)("q-card-actions"),B=(0,o.g2)("q-input"),G=(0,o.g2)("q-select"),Z=(0,o.g2)("q-card"),$=(0,o.g2)("q-dialog"),J=(0,o.g2)("q-item-section"),Y=(0,o.g2)("q-item"),ee=(0,o.g2)("q-list"),ae=(0,o.g2)("q-pagination"),le=(0,o.g2)("q-page"),oe=(0,o.gN)("close-popup");return(0,o.uX)(),(0,o.Wv)(le,{padding:""},{default:(0,o.k6)((()=>[(0,o.Lk)("div",r,[(0,o.bF)(Z,{class:"card-box q-mb-md",style:{"max-width":"900px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,(0,t.v_)(X.example?.titulo),1),(0,o.Lk)("div",d,(0,t.v_)(X.example?.tipo),1),(0,o.Lk)("div",n,[(0,o.bF)(H,{modelValue:X.averageRating,"onUpdate:modelValue":a[0]||(a[0]=e=>X.averageRating=e),size:"1.5em",color:"amber",readonly:""},null,8,["modelValue"]),(0,o.Lk)("span",s,(0,t.v_)(X.averageRating.toFixed(1)),1),(0,o.Lk)("span",u,"("+(0,t.v_)(X.totalReviews)+" avaliações)",1)])])),_:1}),(0,o.bF)(N),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.Lk)("p",c,(0,t.v_)(X.example?.descricao),1)])),_:1}),(0,o.bF)(N),(0,o.bF)(O,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bF)(M,{color:"primary",label:"Baixar Exemplo",icon:"cloud_download",href:X.example?.link,target:"_blank"},null,8,["href"]),X.usuarioAtual&&X.example?((0,o.uX)(),(0,o.CE)(o.FK,{key:0},["admin"===X.usuarioAtual.role||X.usuarioAtual.uid===X.example.userId?((0,o.uX)(),(0,o.Wv)(M,{key:0,color:"blue",icon:"edit",label:"Editar",onClick:X.abrirEdicaoExemplo},null,8,["onClick"])):(0,o.Q3)("",!0),"admin"===X.usuarioAtual.role?((0,o.uX)(),(0,o.Wv)(M,{key:1,color:"red",icon:"delete",label:"Excluir",onClick:X.confirmarExclusaoExemplo},null,8,["onClick"])):(0,o.Q3)("",!0)],64)):(0,o.Q3)("",!0)])),_:1}),(0,o.bF)($,{modelValue:X.editarDialogExemplo,"onUpdate:modelValue":a[7]||(a[7]=e=>X.editarDialogExemplo=e)},{default:(0,o.k6)((()=>[(0,o.bF)(Z,{class:"card-box",style:{"max-width":"600px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[m])),_:1}),(0,o.bF)(N),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(B,{modelValue:X.exemploEditando.titulo,"onUpdate:modelValue":a[1]||(a[1]=e=>X.exemploEditando.titulo=e),label:"Título",class:"q-mt-md"},null,8,["modelValue"]),(0,o.bF)(B,{modelValue:X.exemploEditando.descricao,"onUpdate:modelValue":a[2]||(a[2]=e=>X.exemploEditando.descricao=e),label:"Descrição",type:"textarea",class:"q-mt-md"},null,8,["modelValue"]),(0,o.bF)(B,{modelValue:X.exemploEditando.fonte,"onUpdate:modelValue":a[3]||(a[3]=e=>X.exemploEditando.fonte=e),label:"Fonte",class:"q-mt-md"},null,8,["modelValue"]),(0,o.bF)(B,{modelValue:X.exemploEditando.link,"onUpdate:modelValue":a[4]||(a[4]=e=>X.exemploEditando.link=e),label:"Link do Exemplo",class:"q-mt-md",disable:"admin"!==X.usuarioAtual?.role},null,8,["modelValue","disable"]),(0,o.bF)(G,{modelValue:X.exemploEditando.tipo,"onUpdate:modelValue":a[5]||(a[5]=e=>X.exemploEditando.tipo=e),label:"Tipo do Exemplo",options:X.tiposExemplo,class:"q-mt-md"},null,8,["modelValue","options"]),(0,o.bF)(G,{modelValue:X.exemploEditando.modelo,"onUpdate:modelValue":a[6]||(a[6]=e=>X.exemploEditando.modelo=e),label:"Modelo(s) UML",multiple:"",options:X.modelosUML,class:"q-mt-md"},null,8,["modelValue","options"])])),_:1}),(0,o.bF)(O,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(M,{flat:"",label:"Cancelar",color:"grey"},null,512),[[oe]]),(0,o.bF)(M,{color:"primary",label:"Salvar Alterações",onClick:X.salvarEdicaoExemplo},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)($,{modelValue:X.dialogoConfirmacaoExemplo,"onUpdate:modelValue":a[8]||(a[8]=e=>X.dialogoConfirmacaoExemplo=e)},{default:(0,o.k6)((()=>[(0,o.bF)(Z,{class:"q-pa-md",style:{"max-width":"400px"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[p,x])),_:1}),(0,o.bF)(O,{align:"right",class:"q-gutter-sm"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(M,{flat:"",label:"Cancelar",color:"grey"},null,512),[[oe]]),(0,o.bF)(M,{color:"negative",label:"Excluir",onClick:X.excluirExemploConfirmado},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,o.bF)(Z,{class:"card-box q-mb-md",style:{"max-width":"900px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[v])),_:1}),(0,o.bF)(N),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(ee,{dense:""},{default:(0,o.k6)((()=>[(0,o.bF)(Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(J,{class:"text-weight-bold"},{default:(0,o.k6)((()=>[b])),_:1}),(0,o.bF)(J,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",g,(0,t.v_)(X.example?.tipo),1)])),_:1})])),_:1}),(0,o.bF)(Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(J,{class:"text-weight-bold"},{default:(0,o.k6)((()=>[k])),_:1}),(0,o.bF)(J,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",f,(0,t.v_)(X.example?.modelo.join(", ")),1)])),_:1})])),_:1}),(0,o.bF)(Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(J,{class:"text-weight-bold"},{default:(0,o.k6)((()=>[w])),_:1}),(0,o.bF)(J,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",E,(0,t.v_)(X.example?.userName),1)])),_:1})])),_:1}),(0,o.bF)(Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(J,{class:"text-weight-bold"},{default:(0,o.k6)((()=>[h])),_:1}),(0,o.bF)(J,null,{default:(0,o.k6)((()=>[X.isValidUrl(X.example?.fonte)?((0,o.uX)(),(0,o.CE)("a",{key:0,href:X.example?.fonte,target:"_blank",class:"text-blue"},(0,t.v_)(X.example?.fonte),9,y)):((0,o.uX)(),(0,o.CE)("div",F,(0,t.v_)(X.example?.fonte),1))])),_:1})])),_:1}),(0,o.bF)(Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(J,{class:"text-weight-bold"},{default:(0,o.k6)((()=>[_])),_:1}),(0,o.bF)(J,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",V,(0,t.v_)(X.formatarData(X.example?.lastUpdated)),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.bF)(Z,{class:"card-box q-mb-md",style:{"max-width":"900px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",A,[C,X.jaAvaliou?((0,o.uX)(),(0,o.CE)("div",U,"Você já avaliou este exemplo.")):((0,o.uX)(),(0,o.Wv)(M,{key:0,color:"primary",label:"Adicionar Avaliação",icon:"add_comment",onClick:a[9]||(a[9]=e=>X.abrirDialogo())}))])])),_:1}),(0,o.bF)($,{modelValue:X.reviewDialog,"onUpdate:modelValue":a[12]||(a[12]=e=>X.reviewDialog=e)},{default:(0,o.k6)((()=>[(0,o.bF)(Z,{class:"card-box",style:{"max-width":"600px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[q])),_:1}),(0,o.bF)(N),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(H,{modelValue:X.newReview.rating,"onUpdate:modelValue":a[10]||(a[10]=e=>X.newReview.rating=e),size:"2em",color:"amber",class:"q-mt-md"},null,8,["modelValue"]),(0,o.bF)(B,{modelValue:X.newReview.comment,"onUpdate:modelValue":a[11]||(a[11]=e=>X.newReview.comment=e),label:"Comentário",type:"textarea",class:"q-mt-md"},null,8,["modelValue"])])),_:1}),(0,o.bF)(O,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(M,{flat:"",label:"Cancelar",color:"grey"},null,512),[[oe]]),(0,o.bF)(M,{color:"primary",label:"Enviar",onClick:X.enviarAvaliacao},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)($,{modelValue:X.editarDialog,"onUpdate:modelValue":a[15]||(a[15]=e=>X.editarDialog=e)},{default:(0,o.k6)((()=>[(0,o.bF)(Z,{class:"card-box",style:{"max-width":"600px",width:"100%"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[D])),_:1}),(0,o.bF)(N),(0,o.bF)(T,null,{default:(0,o.k6)((()=>[(0,o.bF)(H,{modelValue:X.reviewEditando.rating,"onUpdate:modelValue":a[13]||(a[13]=e=>X.reviewEditando.rating=e),size:"2em",color:"amber",class:"q-mt-md"},null,8,["modelValue"]),(0,o.bF)(B,{modelValue:X.reviewEditando.comment,"onUpdate:modelValue":a[14]||(a[14]=e=>X.reviewEditando.comment=e),label:"Comentário",type:"textarea",class:"q-mt-md"},null,8,["modelValue"])])),_:1}),(0,o.bF)(O,{align:"right"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(M,{flat:"",label:"Cancelar",color:"grey"},null,512),[[oe]]),(0,o.bF)(M,{color:"primary",label:"Salvar Alterações",onClick:X.salvarEdicao},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(N),0===X.reviews.length?((0,o.uX)(),(0,o.Wv)(T,{key:0},{default:(0,o.k6)((()=>[L])),_:1})):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(X.paginatedReviews,(e=>((0,o.uX)(),(0,o.Wv)(T,{key:e.id},{default:(0,o.k6)((()=>[(0,o.Lk)("div",R,[(0,o.Lk)("div",null,[(0,o.Lk)("div",I,(0,t.v_)(e.author),1),(0,o.Lk)("div",W,(0,t.v_)(X.formatarData(e.date)),1)]),(0,o.Lk)("div",j,[e.userId===X.auth.currentUser?.uid?((0,o.uX)(),(0,o.Wv)(M,{key:0,flat:"",dense:"",icon:"edit",color:"blue",onClick:a=>X.abrirEdicao(e)},null,8,["onClick"])):(0,o.Q3)("",!0),e.userId===X.auth.currentUser?.uid?((0,o.uX)(),(0,o.Wv)(M,{key:1,flat:"",dense:"",icon:"delete",color:"red",onClick:a=>X.confirmarExclusaoAvaliacao(e)},null,8,["onClick"])):(0,o.Q3)("",!0),(0,o.bF)($,{modelValue:X.dialogoConfirmacaoAvaliacao,"onUpdate:modelValue":a[16]||(a[16]=e=>X.dialogoConfirmacaoAvaliacao=e)},{default:(0,o.k6)((()=>[(0,o.bF)(Z,{class:"q-pa-md",style:{"max-width":"400px"}},{default:(0,o.k6)((()=>[(0,o.bF)(T,null,{default:(0,o.k6)((()=>[Q,S])),_:1}),(0,o.bF)(O,{align:"right",class:"q-gutter-sm"},{default:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(M,{flat:"",label:"Cancelar",color:"grey"},null,512),[[oe]]),(0,o.bF)(M,{color:"negative",label:"Excluir",onClick:X.excluirAvaliacaoConfirmada},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,o.bF)(H,{modelValue:e.rating,"onUpdate:modelValue":a=>e.rating=a,size:"1.2em",color:"amber",readonly:"",class:"q-mt-xs"},null,8,["modelValue","onUpdate:modelValue"]),(0,o.Lk)("p",K,(0,t.v_)(e.comment),1),e.id!==X.reviews.length?((0,o.uX)(),(0,o.Wv)(N,{key:0,class:"q-mt-md"})):(0,o.Q3)("",!0)])),_:2},1024)))),128)),(0,o.bF)(O,{align:"center"},{default:(0,o.k6)((()=>[(0,o.bF)(ae,{modelValue:X.currentPage,"onUpdate:modelValue":a[17]||(a[17]=e=>X.currentPage=e),max:X.totalPages,"direction-links":"",color:"primary"},null,8,["modelValue","max"])])),_:1})])),_:1})])])),_:1})}l(4748);var P=l(8734),z=l(455),H=l(9878),T=l(737),N=l(5956),M=l(546),O=l(4907);const B={setup(){const e=(0,z.lq)(),a=(0,z.rd)(),l=(0,O.A)(),t=(0,P.KR)(null),r=(0,P.KR)([]),i=(0,P.KR)(1),d=5,n=(0,P.KR)(!1),s=(0,P.KR)({author:"",rating:5,comment:""}),u=(0,P.KR)(!1),c=(0,P.KR)({}),m=(0,P.KR)(null),p=(0,P.KR)(!1),x=(0,P.KR)(null),v=(0,P.KR)(null),b=(0,P.KR)(!1),g=(0,P.KR)({}),k=(0,P.KR)(!1),f=["Exemplo Correto","Exemplo Errôneo","Ambos"],w=["Diagrama de Classes","Diagrama de Objetos","Diagrama de Componentes","Diagrama de Pacotes","Diagrama de Estrutura Composta","Diagrama de Implantação (Deployment)","Diagrama de Caso de Uso","Diagrama de Sequência","Diagrama de Comunicação","Diagrama de Estados (State Machine)","Diagrama de Atividades","Diagrama de Interação Geral (Interaction Overview)","Diagrama de Tempo (Timing Diagram)"],E=async()=>{const a=e.query.id;if(a)try{const e=await(0,H.i3)(a);e&&(t.value=e,r.value=e.ratings||[])}catch(l){console.error("Erro ao carregar exemplo:",l)}},h=(0,o.EW)((()=>Math.ceil(r.value.length/d))),y=(0,o.EW)((()=>{const e=(i.value-1)*d;return r.value.slice(e,e+d)})),F=(0,o.EW)((()=>r.value.length?r.value.reduce(((e,a)=>e+a.rating),0)/r.value.length:0)),_=e=>e?.startsWith("http://")||e?.startsWith("https://"),V=e=>e?new Date(e).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}):"Desconhecido",A=async()=>{if(s.value.comment)try{const e={rating:s.value.rating,comment:s.value.comment},a=await(0,H.bN)(t.value.id,e);r.value.unshift(a),s.value={rating:5,comment:""},n.value=!1}catch(e){console.error("Erro ao enviar avaliação:",e)}else alert("O comentário não pode estar vazio.")},C=async()=>{try{await(0,H.$_)(t.value.id,c.value);const e=r.value.findIndex((e=>e.userId===T.j2.currentUser?.uid));-1!==e&&(r.value[e]={...c.value}),u.value=!1}catch(e){console.error("Erro ao editar avaliação:",e)}},U=e=>{x.value=e,p.value=!0},q=async()=>{if(x.value){try{const e=await(0,H.k6)(t.value.id,x.value.id);r.value=e,l.notify({type:"positive",message:"Avaliação excluída com sucesso!"})}catch(e){console.error("Erro ao excluir avaliação:",e),l.notify({type:"negative",message:"Erro ao excluir avaliação. Tente novamente."})}p.value=!1}},D=()=>{n.value=!0},L=(0,o.EW)((()=>r.value.length)),R=e=>{c.value={...e},u.value=!0},I=(0,o.EW)((()=>!!m.value&&r.value.some((e=>e.userId===m.value.uid)))),W=()=>{g.value={...t.value},b.value=!0},j=async()=>{try{await(0,H.Em)(g.value.id,g.value),t.value={...g.value},b.value=!1,l.notify({type:"positive",message:"Exemplo atualizado com sucesso!"})}catch(e){console.error("Erro ao editar exemplo:",e)}},Q=()=>{k.value=!0},S=async()=>{try{await(0,H.xr)(t.value.id),l.notify({type:"positive",message:"Exemplo excluído com sucesso!"}),a.push({name:"repository"})}catch(e){console.error("Erro ao excluir exemplo:",e)}k.value=!1};return(0,o.sV)((()=>{(0,N.hg)(T.j2,(async e=>{if(e){const a=(0,M.H9)(T.db,"users",e.uid),l=await(0,M.x7)(a);l.exists()?m.value={uid:e.uid,role:l.data().role||"user"}:m.value={uid:e.uid,role:"user"},console.log(`Usuário autenticado: ${m.value.uid}, Role: ${m.value.role}`)}else m.value=null})),E()})),{example:t,reviews:r,currentPage:i,totalPages:h,paginatedReviews:y,averageRating:F,isValidUrl:_,formatarData:V,reviewDialog:n,enviarAvaliacao:A,abrirDialogo:D,newReview:s,totalReviews:L,abrirEdicao:R,salvarEdicao:C,auth:T.j2,editarDialog:u,reviewEditando:c,jaAvaliou:I,confirmarExclusaoAvaliacao:U,excluirAvaliacaoConfirmada:q,dialogoConfirmacaoAvaliacao:p,avaliacaoParaExcluir:x,indexAvaliacaoParaExcluir:v,usuarioAtual:m,editarDialogExemplo:b,exemploEditando:g,abrirEdicaoExemplo:W,salvarEdicaoExemplo:j,dialogoConfirmacaoExemplo:k,confirmarExclusaoExemplo:Q,excluirExemploConfirmado:S,tiposExemplo:f,modelosUML:w}}};var G=l(2807),Z=l(7716),$=l(3316),J=l(4189),Y=l(1816),ee=l(386),ae=l(2669),le=l(6384),oe=l(2156),te=l(9270),re=l(595),ie=l(3999),de=l(7743),ne=l(5173),se=l(4700),ue=l(8672),ce=l(8582),me=l.n(ce);const pe=(0,G.A)(B,[["render",X]]),xe=pe;me()(B,"components",{QPage:Z.A,QCard:$.A,QCardSection:J.A,QRating:Y.A,QSeparator:ee.A,QCardActions:ae.A,QBtn:le.A,QDialog:oe.A,QInput:te.A,QSelect:re.A,QList:ie.A,QItem:de.A,QItemSection:ne.A,QPagination:se.A}),me()(B,"directives",{ClosePopup:ue.A})}}]);