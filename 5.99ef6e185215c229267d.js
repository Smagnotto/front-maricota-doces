(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RAiK:function(e,t,n){"use strict";n.r(t),n.d(t,"EncomendasModule",(function(){return A}));var o=n("ofXK"),r=n("tyNb"),a=n("3Pt+"),l=n("fXoL"),i=n("7zfz"),c=n("tk/3"),d=n("z6cu"),s=n("un/a"),p=n("JIr8"),m=n("AytR");let u=(()=>{class e{constructor(e){this.http=e,this.httpOptions={headers:new c.d({"Content-Type":"application/json"})},this.url=m.a.baseUrl,this.path="v1/clientes"}getAllClientes(){return this.http.get(`${this.url}/${this.path}`).pipe(Object(s.a)(2),Object(p.a)(this.handleError))}getClienteById(e){return this.http.get(`${this.url}/${this.path}/${e}`).pipe(Object(s.a)(2),Object(p.a)(this.handleError))}getClienteByNome(e){return this.http.get(`${this.url}/${this.path}?nome=${e}`).pipe(Object(s.a)(2),Object(p.a)(this.handleError))}saveCliente(e){return this.http.post(`${this.url}/${this.path}`,JSON.stringify(e),this.httpOptions).pipe(Object(s.a)(2),Object(p.a)(this.handleError))}updateCliente(e){return this.http.put(`${this.url}/${this.path}/${e.id}`,JSON.stringify(e),this.httpOptions).pipe(Object(s.a)(1),Object(p.a)(this.handleError))}deleteCliente(e){return this.http.delete(`${this.url}/${this.path}/${e}`,this.httpOptions).pipe(Object(s.a)(1),Object(p.a)(this.handleError))}handleError(e){let t="";return t=e.error instanceof ErrorEvent?e.error.message:`C\xf3digo do erro: ${e.status}, menssagem: `+e.message,console.log(t),Object(d.a)(t)}}return e.\u0275fac=function(t){return new(t||e)(l.Ub(c.b))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("Nf9I"),g=n("QIUk"),h=n("V5BG"),f=n("eO1q"),C=n("Ji6n"),v=n("lUkA"),P=n("CwEU"),E=n("7kUa"),Q=n("Ks7X"),y=n("jIHw");function z(e,t){1&e&&(l.Qb(0,"small",34),l.zc(1,"Informe o nome do cliente."),l.Pb())}function N(e,t){1&e&&(l.Qb(0,"small",35),l.zc(1,"Informe a data da entrega"),l.Pb())}function I(e,t){1&e&&(l.Qb(0,"small",36),l.zc(1,"Informe o cep do cliente."),l.Pb())}function L(e,t){1&e&&(l.Qb(0,"small",37),l.zc(1,"Informe o logradouro do cliente."),l.Pb())}function j(e,t){1&e&&(l.Qb(0,"small",38),l.zc(1,"Informe o n\xfamero."),l.Pb())}function w(e,t){1&e&&(l.Qb(0,"small",38),l.zc(1,"N\xba deve ser maior que 0."),l.Pb())}let x=(()=>{class e{constructor(e,t,n,o){this.route=e,this.router=t,this.confirmationService=n,this.clienteService=o,this.formEncomenda=new a.d({idEncomenda:new a.b(""),idCliente:new a.b(""),autoCompleteNomeCliente:new a.b(""),nomeCliente:new a.b("",[a.p.required]),dataEntrega:new a.b("",[a.p.required]),pago:new a.b(!1),enderecoCliente:new a.d({logradouro:new a.b("",[a.p.required]),numero:new a.b(0,[a.p.required,a.p.min(1)]),complemento:new a.b(""),cep:new a.b("",[a.p.required])})}),this.filteredClients=[]}ngOnInit(){this.route.params.subscribe(e=>{})}filterClient(e){const{query:t}=e;this.clienteService.getClienteByNome(t).subscribe(e=>{this.filteredClients=e})}selecionaCliente(e){var t,n,o,r,a,l;null===(t=this.idCliente)||void 0===t||t.setValue(e.id),null===(n=this.nomeCliente)||void 0===n||n.setValue(e.nome),null===(o=this.logradouro)||void 0===o||o.setValue(e.endereco.logradouro),null===(r=this.cep)||void 0===r||r.setValue(e.endereco.cep),null===(a=this.numero)||void 0===a||a.setValue(e.endereco.numero),null===(l=this.complemento)||void 0===l||l.setValue(e.endereco.complemento)}cancel(){this.confirmationService.confirm({message:"Tem certeza que deseja sair? Os dados ser\xe3o perdidos!",accept:()=>{this.goBack()}})}onSubmit(e){console.log(e.value),e.valid&&this.goBack()}goBack(){this.router.navigate(["/encomendas"])}get idCliente(){return this.formEncomenda.get("idCliente")}get nomeCliente(){return this.formEncomenda.get("nomeCliente")}get dataEntrega(){return this.formEncomenda.get("dataEntrega")}get pago(){return this.formEncomenda.get("pago")}get logradouro(){var e;return null===(e=this.formEncomenda.get("enderecoCliente"))||void 0===e?void 0:e.get("logradouro")}get numero(){var e;return null===(e=this.formEncomenda.get("enderecoCliente"))||void 0===e?void 0:e.get("numero")}get complemento(){var e;return null===(e=this.formEncomenda.get("enderecoCliente"))||void 0===e?void 0:e.get("complemento")}get cep(){var e;return null===(e=this.formEncomenda.get("enderecoCliente"))||void 0===e?void 0:e.get("cep")}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(r.a),l.Kb(r.b),l.Kb(i.a),l.Kb(u))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-encomenda-info"]],decls:56,vars:16,consts:[["header","Confirma\xe7\xe3o","icon","pi pi-exclamation-triangle","acceptLabel","Sim","rejectLabel","N\xe3o","defaultFocus","N\xe3o","rejectButtonStyleClass","p-button-danger"],[3,"formGroup","ngSubmit"],["type","text","formControlName","idEncomenda","hidden",""],["type","text","formControlName","idCliente","hidden",""],[1,"p-col-12","p-md-12","p-d-flex","p-jc-center","p-jc-md-start","p-jc-lg-start","p-sm-end","p-md-start","p-xl-end"],[1,"p-grid","p-fluid"],[1,"p-col-12","p-md-4","p-lg-6"],[1,"p-float-label"],["type","text","formControlName","nomeCliente","hidden",""],["formControlName","autoCompleteNomeCliente","field","nome",3,"suggestions","minLength","completeMethod","onSelect"],["for","nome_cliente"],["id","nome_cliente-help","class","p-error",4,"ngIf"],[1,"p-col-12","p-md-4","p-lg-4"],["inputId","data_entrega","dateFormat","dd/mm/yy","formControlName","dataEntrega",3,"showIcon","showTime"],["for","data_entrega"],["id","data_entrega-help","class","p-error",4,"ngIf"],[1,"p-col-12","p-md-2","p-lg-2"],["name","ativo","label","Pago","formControlName","pago",3,"binary"],["formGroupName","enderecoCliente",1,"p-col-12","p-grid","p-fluid"],[1,"p-col-12","p-md-4","p-lg-2"],["id","cep_cliente","mask","99999-999","formControlName","cep"],["for","cep_cliente"],["id","cep_cliente-help","class","p-error",4,"ngIf"],["id","logradouro_cliente","type","text","pInputText","","formControlName","logradouro",3,"maxLength"],["for","logradouro_cliente"],["id","logradouro_cliente-help","class","p-error",4,"ngIf"],["mode","decimal","inputId","numero_cliente","formControlName","numero",3,"useGrouping"],["for","numero_cliente"],["id","numero_cliente-help","class","p-error",4,"ngIf"],["id","logradouro_cliente","type","text","pInputText","","formControlName","complemento",3,"maxLength"],[1,"p-col-12"],[1,"p-col-12","p-md-5","p-lg-4","p-d-flex"],["pButton","","pRipple","","type","button","label","Cancelar","icon","pi pi-times","iconPos","right",1,"p-button-raised","p-button-danger","p-m-2",3,"click"],["pButton","","pRipple","","type","button","type","submit","label","Salvar","icon","pi pi-check","iconPos","right",1,"p-button-raised","p-m-2",3,"disabled"],["id","nome_cliente-help",1,"p-error"],["id","data_entrega-help",1,"p-error"],["id","cep_cliente-help",1,"p-error"],["id","logradouro_cliente-help",1,"p-error"],["id","numero_cliente-help",1,"p-error"]],template:function(e,t){1&e&&(l.Lb(0,"p-confirmDialog",0),l.Qb(1,"form",1),l.Xb("ngSubmit",(function(){return t.onSubmit(t.formEncomenda)})),l.Lb(2,"input",2),l.Lb(3,"input",3),l.Qb(4,"p-card"),l.Qb(5,"div",4),l.Qb(6,"h5"),l.zc(7,"Cadastro de Encomendas"),l.Pb(),l.Pb(),l.Qb(8,"div",5),l.Qb(9,"div",6),l.Qb(10,"span",7),l.Lb(11,"input",8),l.Qb(12,"p-autoComplete",9),l.Xb("completeMethod",(function(e){return t.filterClient(e)}))("onSelect",(function(e){return t.selecionaCliente(e)})),l.Pb(),l.Qb(13,"label",10),l.zc(14,"Nome do cliente"),l.Pb(),l.Pb(),l.xc(15,z,2,0,"small",11),l.Pb(),l.Qb(16,"div",12),l.Qb(17,"span",7),l.Lb(18,"p-calendar",13),l.Qb(19,"label",14),l.zc(20,"Data Entrega"),l.Pb(),l.Pb(),l.xc(21,N,2,0,"small",15),l.Pb(),l.Qb(22,"div",16),l.Lb(23,"p-checkbox",17),l.Pb(),l.Qb(24,"p-divider"),l.Qb(25,"h5"),l.zc(26,"Endere\xe7o do Cliente"),l.Pb(),l.Pb(),l.Qb(27,"div",18),l.Qb(28,"div",19),l.Qb(29,"span",7),l.Lb(30,"p-inputMask",20),l.Qb(31,"label",21),l.zc(32,"CEP"),l.Pb(),l.Pb(),l.xc(33,I,2,0,"small",22),l.Pb(),l.Qb(34,"div",12),l.Qb(35,"span",7),l.Lb(36,"input",23),l.Qb(37,"label",24),l.zc(38,"Logradouro"),l.Pb(),l.Pb(),l.xc(39,L,2,0,"small",25),l.Pb(),l.Qb(40,"div",19),l.Qb(41,"span",7),l.Lb(42,"p-inputNumber",26),l.Qb(43,"label",27),l.zc(44,"N\xfamero"),l.Pb(),l.Pb(),l.xc(45,j,2,0,"small",28),l.xc(46,w,2,0,"small",28),l.Pb(),l.Qb(47,"div",12),l.Qb(48,"span",7),l.Lb(49,"input",29),l.Qb(50,"label",24),l.zc(51,"Complemento"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(52,"div",30),l.Qb(53,"div",31),l.Qb(54,"button",32),l.Xb("click",(function(){return t.cancel()})),l.Pb(),l.Lb(55,"button",33),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.zb(1),l.gc("formGroup",t.formEncomenda),l.zb(11),l.gc("suggestions",t.filteredClients)("minLength",1),l.zb(3),l.gc("ngIf",null==t.nomeCliente||null==t.nomeCliente.errors?null:t.nomeCliente.errors.required),l.zb(3),l.gc("showIcon",!0)("showTime",!0),l.zb(3),l.gc("ngIf",null==t.dataEntrega||null==t.dataEntrega.errors?null:t.dataEntrega.errors.required),l.zb(2),l.gc("binary",!0),l.zb(10),l.gc("ngIf",null==t.cep||null==t.cep.errors?null:t.cep.errors.required),l.zb(3),l.gc("maxLength",100),l.zb(3),l.gc("ngIf",null==t.logradouro||null==t.logradouro.errors?null:t.logradouro.errors.required),l.zb(3),l.gc("useGrouping",!1),l.zb(3),l.gc("ngIf",null==t.numero||null==t.numero.errors?null:t.numero.errors.required),l.zb(1),l.gc("ngIf",null==t.numero||null==t.numero.errors?null:t.numero.errors.min),l.zb(3),l.gc("maxLength",60),l.zb(6),l.gc("disabled",!t.formEncomenda.valid))},directives:[b.a,a.q,a.k,a.e,a.a,a.j,a.c,g.a,h.a,o.l,f.a,C.a,v.a,a.f,P.a,E.a,Q.a,y.b],styles:[""]}),e})();var O=n("dohy"),_=n("4m0p");const k=function(){return["/encomendas/cadastro"]},S=[{path:"",component:(()=>{class e{constructor(e){this.confirmationService=e,this.encomendas=[{nome_cliente:"Cliente Teste",entregue:!1,preco:198.08,data_encomenda:new Date(2021,2,27,17,30),pago:!0}],this.headers=[{fieldName:"entregue",labelColumn:"Entregue",sortableColumn:!1,typeColumn:O.a.Boolean,callback:e=>this.AlteraEntregaEncomenda(e)},{fieldName:"nome_cliente",labelColumn:"Nome Cliente",sortableColumn:!0,typeColumn:O.a.String},{fieldName:"preco",labelColumn:"Pre\xe7o",sortableColumn:!0,typeColumn:O.a.Currency},{fieldName:"data_encomenda",labelColumn:"Data Encomenda",sortableColumn:!0,typeColumn:O.a.Date},{fieldName:"pago",labelColumn:"Pago",sortableColumn:!0,typeColumn:O.a.Boolean,isDisabled:!0},{fieldName:"",labelColumn:"A\xe7\xf5es",sortableColumn:!1,typeColumn:O.a.ActionsButtons}],this.isLoading=!1}ngOnInit(){}AlteraEntregaEncomenda(e){console.log("Alterando entrega da encomenda -> "+JSON.stringify(e))}onEdit(e){}onDelete(e){this.confirmationService.confirm({message:"Deseja excluir a encomenda? Essa opera\xe7\xe3o n\xe3o pode ser desfeita",accept:()=>{}})}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(i.a))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-lista-encomendas"]],decls:10,vars:5,consts:[["header","Confirma\xe7\xe3o","icon","pi pi-exclamation-triangle","acceptLabel","Sim","rejectLabel","N\xe3o","defaultFocus","N\xe3o","rejectButtonStyleClass","p-button-danger"],[1,"p-grid"],[1,"p-col-12","p-md-12","p-d-flex","p-jc-center","p-jc-md-start","p-jc-lg-start","p-sm-end","p-md-start","p-xl-end"],[1,"p-col-12","p-d-flex","p-jc-end","p-sm-end","p-md-end","p-xl-end"],["pButton","","pRipple","","label","Adicionar","icon","pi pi-plus","routerLinkActive","router-link-exact-active",3,"routerLink"],[1,"p-col-12"],[3,"data","headers","isLoading","onEdit","onDelete"]],template:function(e,t){1&e&&(l.Lb(0,"p-confirmDialog",0),l.Qb(1,"p-card"),l.Qb(2,"div",1),l.Qb(3,"div",2),l.Qb(4,"h5"),l.zc(5,"Cadastro de Encomendas"),l.Pb(),l.Pb(),l.Qb(6,"div",3),l.Lb(7,"button",4),l.Pb(),l.Qb(8,"div",5),l.Qb(9,"app-table-responsive",6),l.Xb("onEdit",(function(e){return t.onEdit(e)}))("onDelete",(function(e){return t.onDelete(e)})),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.zb(7),l.gc("routerLink",l.hc(4,k)),l.zb(2),l.gc("data",t.encomendas)("headers",t.headers)("isLoading",t.isLoading))},directives:[b.a,g.a,y.b,r.d,r.c,_.a],styles:[""]}),e})()},{path:"cadastro",component:x},{path:"cadastro/:id",component:x}];let $=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[r.f.forChild(S)],r.f]}),e})();var q=n("ThbA"),B=n("Xt7b");let A=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},providers:[u],imports:[[o.b,$,o.b,q.a,a.n,a.g,B.a]]}),e})()}}]);