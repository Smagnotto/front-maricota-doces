(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Kbud:function(e,o,t){"use strict";t.r(o),t.d(o,"InsumoModule",(function(){return N}));var n=t("ofXK"),i=t("3Pt+"),r=t("ThbA"),s=t("tyNb"),a=t("fXoL"),l=t("7zfz"),c=t("e+EW"),u=t("Nf9I"),p=t("QIUk"),b=t("7kUa"),m=t("arFO"),d=t("Ks7X"),f=t("Ji6n"),v=t("jIHw");function h(e,o){1&e&&(a.Pb(0,"small",22),a.xc(1,"Informe o nome do produto."),a.Ob())}function g(e,o){1&e&&(a.Pb(0,"div",14),a.Pb(1,"small",22),a.xc(2,"Informe o pre\xe7o do produto."),a.Ob(),a.Ob())}function I(e,o){1&e&&(a.Pb(0,"div",14),a.Pb(1,"small",22),a.xc(2,"O pre\xe7o do produto deve ser maior que R$ 0,00."),a.Ob(),a.Ob())}let y=(()=>{class e{constructor(e,o,t,n){this.confirmationService=e,this.router=o,this.route=t,this.service=n,this.tiposInsumos=[{nome:"kg",codigo:"kg"},{nome:"g",codigo:"g"},{nome:"l",codigo:"l"},{nome:"ml",codigo:"ml"}],this.formInsumo=new i.d({id:new i.b(0),nome:new i.b("",[i.o.required]),preco:new i.b(0,[i.o.required,i.o.min(1)]),ativo:new i.b(!0)})}ngOnInit(){this.route.params.subscribe(e=>{let o=e.id;o?this.getInsumo(o):this.fillForm({ativo:!0,id:0,nome:"",preco:0})})}getInsumo(e){this.service.getInsumoById(e).subscribe(e=>{this.fillForm(e)})}fillForm(e){var o,t,n,i;null===(o=this.id)||void 0===o||o.setValue(e.id),null===(t=this.nome)||void 0===t||t.setValue(e.nome),null===(n=this.preco)||void 0===n||n.setValue(e.preco),null===(i=this.ativo)||void 0===i||i.setValue(e.ativo)}cancel(){this.confirmationService.confirm({message:"Tem certeza que deseja sair? Os dados ser\xe3o perdidos!",accept:()=>{this.goBack()}})}get nome(){return this.formInsumo.get("nome")}get preco(){return this.formInsumo.get("preco")}get ativo(){return this.formInsumo.get("ativo")}get id(){return this.formInsumo.get("id")}onSubmit(e){if(e.valid){let o,t=e.value;o=t.id?this.service.updateInsumo(t):this.service.saveInsumo(t),o.subscribe(e=>{console.log(e),this.goBack()})}}goBack(){this.router.navigate(["/insumos"])}}return e.\u0275fac=function(o){return new(o||e)(a.Jb(l.a),a.Jb(s.b),a.Jb(s.a),a.Jb(c.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-insumo-info"]],decls:32,vars:7,consts:[["header","Confirma\xe7\xe3o","icon","pi pi-exclamation-triangle","acceptLabel","Sim","rejectLabel","N\xe3o","defaultFocus","N\xe3o","rejectButtonStyleClass","p-button-danger"],[3,"formGroup","ngSubmit"],["type","text","formControlName","id","hidden",""],[1,"p-grid","p-fluid"],[1,"p-col-12","p-md-4"],[1,"p-float-label"],["id","nome_insumo","type","text","pInputText","","formControlName","nome"],["for","nome_insumo"],["id","nome_insumo-help","class","p-error",4,"ngIf"],[1,"p-col-12","p-md-2"],["inputId","tipoInsumo","placeholder","Tipo","optionLabel","nome",3,"options"],[1,"p-col-12","p-md-3"],["id","preco_insumo","mode","currency","currency","BRL","locale","pt-BR","formControlName","preco"],["for","preco_insumo"],[1,"p-col-12"],["id","preco_insumo-help"],["class","p-col-12 ",4,"ngIf"],["name","ativo","label","Ativo","formControlName","ativo",3,"binary"],[1,"p-col-12","p-md-5","p-lg-4"],[1,"p-col-12","p-d-flex"],["pButton","","pRipple","","type","button","label","Cancelar","icon","pi pi-times","iconPos","right",1,"p-button-raised","p-button-danger","p-m-2",3,"click"],["pButton","","pRipple","","type","button","type","submit","label","Salvar","icon","pi pi-check","iconPos","right",1,"p-button-raised","p-m-2",3,"disabled"],["id","nome_insumo-help",1,"p-error"]],template:function(e,o){1&e&&(a.Kb(0,"p-confirmDialog",0),a.Pb(1,"form",1),a.Wb("ngSubmit",(function(){return o.onSubmit(o.formInsumo)})),a.Kb(2,"input",2),a.Pb(3,"p-card"),a.Pb(4,"h5"),a.xc(5,"Cadastro de Insumo"),a.Ob(),a.Kb(6,"br"),a.Pb(7,"div",3),a.Pb(8,"div",4),a.Pb(9,"span",5),a.Kb(10,"input",6),a.Pb(11,"label",7),a.xc(12,"Nome do produto"),a.Ob(),a.Ob(),a.vc(13,h,2,0,"small",8),a.Ob(),a.Pb(14,"div",9),a.Kb(15,"p-dropdown",10),a.Ob(),a.Pb(16,"div",11),a.Pb(17,"span",5),a.Kb(18,"p-inputNumber",12),a.Pb(19,"label",13),a.xc(20,"Pre\xe7o"),a.Ob(),a.Ob(),a.Pb(21,"div",14),a.Pb(22,"small",15),a.xc(23,"Insira o valor referente a 1000g (1kg)."),a.Ob(),a.Ob(),a.vc(24,g,3,0,"div",16),a.vc(25,I,3,0,"div",16),a.Ob(),a.Pb(26,"div",9),a.Kb(27,"p-checkbox",17),a.Ob(),a.Pb(28,"div",18),a.Pb(29,"div",19),a.Pb(30,"button",20),a.Wb("click",(function(){return o.cancel()})),a.Ob(),a.Kb(31,"button",21),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&e&&(a.yb(1),a.ec("formGroup",o.formInsumo),a.yb(12),a.ec("ngIf",null==o.nome||null==o.nome.errors?null:o.nome.errors.required),a.yb(2),a.ec("options",o.tiposInsumos),a.yb(9),a.ec("ngIf",null==o.preco||null==o.preco.errors?null:o.preco.errors.required),a.yb(1),a.ec("ngIf",null==o.preco||null==o.preco.errors?null:o.preco.errors.min),a.yb(2),a.ec("binary",!0),a.yb(4),a.ec("disabled",!o.formInsumo.valid))},directives:[u.a,i.p,i.j,i.e,i.a,i.i,i.c,p.a,b.a,n.k,m.a,d.a,f.a,v.b],styles:[""]}),e})();var O=t("dohy"),P=t("4m0p");const C=function(){return["/insumos/cadastro"]},x=[{path:"",component:(()=>{class e{constructor(e,o,t,n){this.service=e,this.confirmationService=o,this.router=t,this.route=n,this.produtos=[],this.headers=[{fieldName:"nome",labelColumn:"Nome",sortableColumn:!0,typeColumn:O.a.String},{fieldName:"preco",labelColumn:"Pre\xe7o",sortableColumn:!0,typeColumn:O.a.Currency},{fieldName:"ativo",labelColumn:"Ativo",sortableColumn:!1,typeColumn:O.a.Boolean},{fieldName:"",labelColumn:"A\xe7\xf5es",sortableColumn:!1,typeColumn:O.a.ActionsButtons}],this.isLoading=!1}ngOnInit(){this.getAllInsumos()}getAllInsumos(){this.isLoading=!0,this.service.getAllInsumos().subscribe(e=>{this.produtos=e,this.isLoading=!1})}onEdit(e){this.router.navigate(["cadastro",e.id],{relativeTo:this.route})}onDelete(e){this.confirmationService.confirm({message:"Deseja excluir o insumo? Essa opera\xe7\xe3o n\xe3o pode ser desfeita",accept:()=>{this.service.deleteInsumo(e.id).subscribe(e=>{this.getAllInsumos()})}})}}return e.\u0275fac=function(o){return new(o||e)(a.Jb(c.a),a.Jb(l.a),a.Jb(s.b),a.Jb(s.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-lista-insumos"]],decls:10,vars:5,consts:[["header","Confirma\xe7\xe3o","icon","pi pi-exclamation-triangle","acceptLabel","Sim","rejectLabel","N\xe3o","defaultFocus","N\xe3o","rejectButtonStyleClass","p-button-danger"],[1,"p-grid"],[1,"p-col-12","p-d-flex","p-jc-start","p-sm-center","p-md-end","p-xl-end"],[1,"p-col-12","p-d-flex","p-jc-end","p-sm-end","p-md-end","p-xl-end"],["pButton","","pRipple","","label","Adicionar","icon","pi pi-plus","routerLinkActive","router-link-exact-active",3,"routerLink"],[1,"p-col-12"],[3,"data","headers","isLoading","onEdit","onDelete"]],template:function(e,o){1&e&&(a.Kb(0,"p-confirmDialog",0),a.Pb(1,"p-card"),a.Pb(2,"div",1),a.Pb(3,"div",2),a.Pb(4,"h5"),a.xc(5,"Cadastro de Insumos"),a.Ob(),a.Ob(),a.Pb(6,"div",3),a.Kb(7,"button",4),a.Ob(),a.Pb(8,"div",5),a.Pb(9,"app-table-responsive",6),a.Wb("onEdit",(function(e){return o.onEdit(e)}))("onDelete",(function(e){return o.onDelete(e)})),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&e&&(a.yb(7),a.ec("routerLink",a.fc(4,C)),a.yb(2),a.ec("data",o.produtos)("headers",o.headers)("isLoading",o.isLoading))},directives:[u.a,p.a,v.b,s.d,s.c,P.a],styles:[""]}),e})()},{path:"cadastro",component:y},{path:"cadastro/:id",component:y}];let k=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(o){return new(o||e)},imports:[[s.f.forChild(x)],s.f]}),e})();var w=t("Xt7b");let N=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(o){return new(o||e)},providers:[c.a],imports:[[n.b,k,r.a,i.m,i.f,w.a]]}),e})()}}]);