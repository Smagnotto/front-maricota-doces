(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zKAn:function(t,e,o){"use strict";o.r(e),o.d(e,"ProdutosModule",(function(){return B}));var a=o("ofXK"),n=o("3Pt+"),r=o("tyNb"),p=o("fXoL"),i=o("tk/3"),s=o("z6cu"),b=o("7o/Q");class d{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new l(t,this.count,this.source))}}class l extends b.a{constructor(t,e,o){super(t),this.count=e,this.source=o}error(t){if(!this.isStopped){const{source:e,count:o}=this;if(0===o)return super.error(t);o>-1&&(this.count=o-1),e.subscribe(this._unsubscribeAndRecycle())}}}var c=o("JIr8");let u=(()=>{class t{constructor(t){this.http=t,this.httpOptions={headers:new i.c({"Content-Type":"application/json"})},this.url="https://my-json-server.typicode.com/smagnotto/maricota-doces-fake/produtos"}getAllProdutos(){return this.http.get(this.url).pipe(function(t=-1){return e=>e.lift(new d(t,e))}(2),Object(c.a)(this.handleError))}handleError(t){let e="";return e=t.error instanceof ErrorEvent?t.error.message:`C\xf3digo do erro: ${t.status}, menssagem: `+t.message,console.log(e),Object(s.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(p.Tb(i.a))},t.\u0275prov=p.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=o("QIUk"),P=o("jIHw"),f=o("rEr+"),h=o("7zfz"),O=o("jeV5"),g=o("Ji6n");function v(t,e){1&t&&(p.Pb(0,"tr"),p.Pb(1,"th",7),p.xc(2,"Nome "),p.Kb(3,"p-sortIcon",8),p.Ob(),p.Pb(4,"th",9),p.xc(5,"Pre\xe7o "),p.Kb(6,"p-sortIcon",10),p.Ob(),p.Pb(7,"th"),p.xc(8,"Ativo"),p.Ob(),p.Pb(9,"th"),p.xc(10,"A\xe7\xf5es"),p.Ob(),p.Ob())}function y(t,e){1&t&&(p.Pb(0,"tr"),p.Pb(1,"td"),p.Kb(2,"p-skeleton"),p.Ob(),p.Pb(3,"td"),p.Kb(4,"p-skeleton"),p.Ob(),p.Pb(5,"td"),p.Kb(6,"p-skeleton",12),p.Ob(),p.Pb(7,"td"),p.Pb(8,"div",13),p.Kb(9,"p-skeleton",12),p.Kb(10,"p-skeleton",12),p.Ob(),p.Ob(),p.Ob())}function x(t,e){if(1&t){const t=p.Qb();p.Pb(0,"tr"),p.Pb(1,"td"),p.xc(2),p.Ob(),p.Pb(3,"td"),p.xc(4),p.Zb(5,"currency"),p.Ob(),p.Pb(6,"td"),p.Pb(7,"p-checkbox",14),p.Wb("ngModelChange",(function(e){return p.pc(t),p.Yb().$implicit.ativo=e})),p.Ob(),p.Ob(),p.Pb(8,"td"),p.Kb(9,"button",15),p.Kb(10,"button",16),p.Ob(),p.Ob()}if(2&t){const t=p.Yb().$implicit;p.yb(2),p.yc(t.nome),p.yb(2),p.yc(p.ac(5,6,t.preco,"BRL")),p.yb(3),p.ec("value",t.ativo)("ngModel",t.ativo)("binary",!0)("disabled",!0)}}function w(t,e){if(1&t&&(p.vc(0,y,11,0,"tr",11),p.vc(1,x,11,9,"tr",11)),2&t){const t=p.Yb();p.ec("ngIf",t.isLoading),p.yb(1),p.ec("ngIf",!t.isLoading)}}const C=function(){return[10,25,50]};let I=(()=>{class t{constructor(t){this.service=t,this.produtos=[{id:1,nome:"Bolo de Chocolate",preco:30.39,ativo:!0},{id:2,nome:"Red Velvet",preco:50.91,ativo:!0},{id:3,nome:"Brownie de Avel\xe3",preco:64.98,ativo:!1},{id:4,nome:"Chocolate",preco:16,ativo:!1}],this.isLoading=!1,this.cols=[]}ngOnInit(){this.getAllProdutos()}getAllProdutos(){this.isLoading=!0,setTimeout(()=>{this.service.getAllProdutos().subscribe(t=>{this.produtos=t,this.isLoading=!1})},5e3)}}return t.\u0275fac=function(e){return new(e||t)(p.Jb(u))},t.\u0275cmp=p.Db({type:t,selectors:[["app-lista-produtos"]],decls:8,vars:6,consts:[[1,"p-grid"],[1,"p-col-12","p-d-flex","p-jc-end","p-sm-end","p-md-end","p-xl-end"],["pButton","","pRipple","","label","Adicionar","icon","pi pi-plus"],[1,"p-col-12"],["currentPageReportTemplate","Mostrando {first} at\xe9 {last} de {totalRecords} produtos","styleClass","p-datatable-responsive-demo p-datatable-striped",3,"value","paginator","rows","showCurrentPageReport","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","nome"],["field","nome"],["pSortableColumn","preco"],["field","preco"],[4,"ngIf"],["size","2rem","styleClass","p-mr-2"],[1,"p-d-flex","p-ai-end"],["name","ativo",3,"value","ngModel","binary","disabled","ngModelChange"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-mr-2","p-button-sm"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-danger","p-button-sm"]],template:function(t,e){1&t&&(p.Pb(0,"p-card"),p.Pb(1,"div",0),p.Pb(2,"div",1),p.Kb(3,"button",2),p.Ob(),p.Pb(4,"div",3),p.Pb(5,"p-table",4),p.vc(6,v,11,0,"ng-template",5),p.vc(7,w,2,2,"ng-template",6),p.Ob(),p.Ob(),p.Ob(),p.Ob()),2&t&&(p.yb(5),p.ec("value",e.produtos)("paginator",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",p.fc(5,C)))},directives:[m.a,P.a,f.c,h.g,f.b,f.a,a.k,O.a,g.a,n.d,n.e],pipes:[a.c],styles:["[_nghost-%COMP%]     .p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width:40rem){[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tfoot>tr>td, [_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-thead>tr>th{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td{text-align:left;display:block;width:100%;float:left;clear:left;border:0}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td .p-column-title{padding:.4rem;min-width:30%;display:inline-block;margin:-.4em 1em -.4em -.4rem;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-responsive-demo .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}[_nghost-%COMP%]     .p-datatable-responsive-demo .p-paginator .p-paginator-current{text-align:left;width:100%;float:left;clear:left;border:0}}"]}),t})();var K=o("7kUa"),k=o("V5BG"),M=o("eO1q"),A=o("RGqm"),R=o("zFJ7");const T=[{path:"",component:I},{path:"cadastro",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=p.Db({type:t,selectors:[["app-produtos-info"]],decls:47,vars:0,consts:[[1,"p-fluid","p-formgrid","p-grid"],[1,"p-field","p-col-12","p-md-6"],[1,"p-float-label"],["type","text","id","nomeProduto","pInputText",""],["for","nomeProduto"],[1,"p-field","p-col-12","p-md-4"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],["type","text","id","preco","pInputText",""],["for","preco"],["inputId","autocomplete","field","name"],["for","autocomplete"],["inputId","calendar"],["for","calendar"],["inputId","chips"],["for","chips"],["for","inputmask"],[1,"pi","pi-user"],["type","text","id","inputgroup","pInputText",""],["for","inputgroup"],[1,"p-field","p-col-12"],["inputId","textarea","rows","3","cols","30","pInputTextarea",""],["for","textarea"]],template:function(t,e){1&t&&(p.Pb(0,"p-card"),p.Pb(1,"div",0),p.Pb(2,"div",1),p.Pb(3,"span",2),p.Kb(4,"input",3),p.Pb(5,"label",4),p.xc(6,"Nome Produto"),p.Ob(),p.Ob(),p.Ob(),p.Pb(7,"div",5),p.Pb(8,"div",6),p.Pb(9,"span",7),p.xc(10,"R$"),p.Ob(),p.Pb(11,"span",2),p.Kb(12,"input",8),p.Pb(13,"label",9),p.xc(14,"Pre\xe7o"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(15,"div",5),p.Pb(16,"span",2),p.Kb(17,"p-autoComplete",10),p.Pb(18,"label",11),p.xc(19,"AutoComplete"),p.Ob(),p.Ob(),p.Ob(),p.Pb(20,"div",5),p.Pb(21,"span",2),p.Kb(22,"p-calendar",12),p.Pb(23,"label",13),p.xc(24,"Calendar"),p.Ob(),p.Ob(),p.Ob(),p.Pb(25,"div",5),p.Pb(26,"span",2),p.Kb(27,"p-chips",14),p.Pb(28,"label",15),p.xc(29,"Chips"),p.Ob(),p.Ob(),p.Ob(),p.Pb(30,"div",5),p.Pb(31,"span",2),p.Pb(32,"label",16),p.xc(33,"InputMask"),p.Ob(),p.Ob(),p.Ob(),p.Pb(34,"div",5),p.Pb(35,"div",6),p.Pb(36,"span",7),p.Kb(37,"i",17),p.Ob(),p.Pb(38,"span",2),p.Kb(39,"input",18),p.Pb(40,"label",19),p.xc(41,"InputGroup"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Pb(42,"div",20),p.Pb(43,"span",2),p.Kb(44,"textarea",21),p.Pb(45,"label",22),p.xc(46,"Textarea"),p.Ob(),p.Ob(),p.Ob(),p.Ob(),p.Ob())},directives:[m.a,K.a,k.a,M.a,A.a,R.a],styles:[""]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(T)],r.e]}),t})();var _=o("ThbA");let B=(()=>{class t{}return t.\u0275mod=p.Hb({type:t}),t.\u0275inj=p.Gb({factory:function(e){return new(e||t)},providers:[u],imports:[[a.b,j,_.a,n.f,n.a]]}),t})()}}]);