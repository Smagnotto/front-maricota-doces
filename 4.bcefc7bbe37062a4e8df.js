(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{sxX6:function(t,o,e){"use strict";e.r(o),e.d(o,"ProdutosModule",function(){return K});var r=e("ofXK"),i=e("tyNb"),a=e("M9IT"),n=e("+0xr"),c=e("3Pt+"),s=e("0IaG"),u=e("fXoL"),d=e("kmnG"),l=e("qFsG"),b=e("d3UM"),m=e("bTqV"),p=e("FKr1");function h(t,o){1&t&&(u.Tb(0,"mat-error"),u.xc(1," Nome do produto \xe9"),u.Tb(2,"strong"),u.xc(3," obrigat\xf3rio"),u.Sb(),u.Sb())}function f(t,o){1&t&&(u.Tb(0,"mat-error"),u.xc(1," Pre\xe7o do produto \xe9"),u.Tb(2,"strong"),u.xc(3,"obrigat\xf3rio"),u.Sb(),u.Sb())}function g(t,o){if(1&t&&(u.Tb(0,"span",17),u.xc(1),u.Sb()),2&t){const t=u.ec();u.Cb(1),u.Ac(" (+",2===(null==t.materiaPrima.value?null:t.materiaPrima.value.length)?"outro":"outros"," ",t.materiaPrima.value.length-1,") ")}}function P(t,o){if(1&t&&(u.Tb(0,"mat-option",18),u.xc(1),u.Sb()),2&t){const t=o.$implicit;u.jc("value",t),u.Cb(1),u.yc(t)}}let v=(()=>{class t{constructor(t,o){this.dialogRef=t,this.data=o,this.produtosFormGroup=new c.f({idProduto:new c.d(""),nomeProduto:new c.d("",[c.r.required]),precoProduto:new c.d("",[c.r.required]),produtoParaVenda:new c.d(!1),materiaPrima:new c.d}),this.listaProdutos=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"]}ngOnInit(){var t,o,e,r;this.produtosFormGroup.reset(),null===(t=this.idProduto)||void 0===t||t.setValue(this.data.id),null===(o=this.nomeProduto)||void 0===o||o.setValue(this.data.nome),null===(e=this.precoProduto)||void 0===e||e.setValue(this.data.preco),null===(r=this.materiaPrima)||void 0===r||r.setValue(this.data.materia_prima)}get idProduto(){return this.produtosFormGroup.get("idProduto")}get nomeProduto(){return this.produtosFormGroup.get("nomeProduto")}get precoProduto(){return this.produtosFormGroup.get("precoProduto")}get materiaPrima(){return this.produtosFormGroup.get("materiaPrima")}saveProduto(){var t,o,e;let r={id:null===(t=this.idProduto)||void 0===t?void 0:t.value,nome:null===(o=this.nomeProduto)||void 0===o?void 0:o.value,ativo:!0,materia_prima:!0,preco:null===(e=this.precoProduto)||void 0===e?void 0:e.value};this.dialogRef.close(r)}}return t.\u0275fac=function(o){return new(o||t)(u.Nb(s.f),u.Nb(s.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-cadastro"]],decls:35,vars:8,consts:[[1,"form-container"],[3,"formGroup"],[1,"row"],[3,"hidden"],["matInput","","type","text","formControlName","idProduto"],["type","text","matInput","","formControlName","nomeProduto","required","","placeholder","Ex. Torta de lim\xe3o","maxlength","30"],["input",""],["align","end"],[4,"ngIf"],["matInput","","type","number","placeholder","10,00","required","","formControlName","precoProduto"],["matPrefix",""],["formControlName","materiaPrima","multiple",""],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions","","align","end"],["mat-button","","color","primary",3,"mat-dialog-close"],["mat-button","","cdkFocusInitial","","color","primary",3,"click"],[1,"example-additional-selection"],[3,"value"]],template:function(t,o){if(1&t&&(u.Tb(0,"div",0),u.Tb(1,"form",1),u.Tb(2,"div",2),u.Tb(3,"mat-form-field",3),u.Tb(4,"mat-label"),u.xc(5,"Id Produto"),u.Sb(),u.Ob(6,"input",4),u.Sb(),u.Tb(7,"mat-form-field"),u.Tb(8,"mat-label"),u.xc(9,"Nome do produto"),u.Sb(),u.Ob(10,"input",5,6),u.Tb(12,"mat-hint",7),u.xc(13),u.Sb(),u.wc(14,h,4,0,"mat-error",8),u.Sb(),u.Tb(15,"mat-form-field"),u.Tb(16,"mat-label"),u.xc(17,"Pre\xe7o"),u.Sb(),u.Ob(18,"input",9),u.Tb(19,"span",10),u.xc(20,"R$\xa0"),u.Sb(),u.wc(21,f,4,0,"mat-error",8),u.Sb(),u.Tb(22,"mat-form-field"),u.Tb(23,"mat-label"),u.xc(24,"Materia Prima"),u.Sb(),u.Tb(25,"mat-select",11),u.Tb(26,"mat-select-trigger"),u.xc(27),u.wc(28,g,2,2,"span",12),u.Sb(),u.wc(29,P,2,2,"mat-option",13),u.Sb(),u.Sb(),u.Sb(),u.Tb(30,"div",14),u.Tb(31,"button",15),u.xc(32,"Cancelar"),u.Sb(),u.Tb(33,"button",16),u.ac("click",function(){return o.saveProduto()}),u.xc(34,"Ok"),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&t){const t=u.oc(11);u.Cb(1),u.jc("formGroup",o.produtosFormGroup),u.Cb(12),u.zc("M\xe1x. 30 caracteres - ",(null==t.value?null:t.value.length)||0,"/30"),u.Cb(1),u.jc("ngIf",null==o.nomeProduto.errors?null:o.nomeProduto.errors.required),u.Cb(7),u.jc("ngIf",null==o.precoProduto.errors?null:o.precoProduto.errors.required),u.Cb(6),u.zc(" ",o.materiaPrima.value?o.materiaPrima.value[0]:""," "),u.Cb(1),u.jc("ngIf",(null==o.materiaPrima.value?null:o.materiaPrima.value.length)>1),u.Cb(1),u.jc("ngForOf",o.listaProdutos),u.Cb(2),u.jc("mat-dialog-close",void 0)}},directives:[c.s,c.m,c.g,d.c,d.g,l.b,c.c,c.l,c.e,c.q,c.h,d.f,r.k,c.o,d.h,b.a,b.c,r.j,s.c,m.a,s.d,d.b,p.m],styles:[".flex-container[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-wrap:wrap}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:65px}.extended-fab-button[_ngcontent-%COMP%]{width:unset;padding:0 26px;border-radius:29px}.extended-fab-button[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:10px}.extended-fab-button[_ngcontent-%COMP%] > .extended-fab-button__text[_ngcontent-%COMP%]{font-weight:300;letter-spacing:.1em;text-transform:uppercase}"]}),t})();var w=e("tk/3"),x=e("z6cu"),S=e("7o/Q");function T(t=-1){return o=>o.lift(new C(t,o))}class C{constructor(t,o){this.count=t,this.source=o}call(t,o){return o.subscribe(new O(t,this.count,this.source))}}class O extends S.a{constructor(t,o,e){super(t),this.count=o,this.source=e}error(t){if(!this.isStopped){const{source:o,count:e}=this;if(0===e)return super.error(t);e>-1&&(this.count=e-1),o.subscribe(this._unsubscribeAndRecycle())}}}var y=e("JIr8");let j=(()=>{class t{constructor(t){this.http=t,this.httpOptions={headers:new w.c({"Content-Type":"application/json"})},this.url="https://my-json-server.typicode.com/smagnotto/maricota-doces-fake/produtos"}getAllProdutos(){return this.http.get(this.url).pipe(T(2),Object(y.a)(this.handleError))}saveProduto(t){return this.http.post(this.url,JSON.stringify(t),this.httpOptions).pipe(T(2),Object(y.a)(this.handleError))}updateProduto(t){return this.http.put(`${this.url}/${t.id}`,JSON.stringify(t),this.httpOptions).pipe(T(2),Object(y.a)(this.handleError))}deleteProduto(t){return this.http.delete(`${this.url}/${t.id}`,this.httpOptions).pipe(T(2),Object(y.a)(this.handleError))}handleError(t){let o="";return o=t.error instanceof ErrorEvent?t.error.message:`C\xf3digo do erro: ${t.status}, menssagem: ${t.message}`,console.log(o),Object(x.a)(o)}}return t.\u0275fac=function(o){return new(o||t)(u.Xb(w.a))},t.\u0275prov=u.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=e("NFeN"),M=e("bSwM"),_=e("Qu3c");function I(t,o){1&t&&(u.Tb(0,"th",14),u.xc(1," Nome "),u.Sb())}function N(t,o){if(1&t&&(u.Tb(0,"td",15),u.xc(1),u.Sb()),2&t){const t=o.$implicit;u.Cb(1),u.zc(" ",t.nome," ")}}function F(t,o){1&t&&(u.Tb(0,"th",14),u.xc(1," Pre\xe7o "),u.Sb())}function R(t,o){if(1&t&&(u.Tb(0,"td",15),u.xc(1),u.Sb()),2&t){const t=o.$implicit;u.Cb(1),u.zc(" R$ ",t.preco," ")}}function $(t,o){1&t&&(u.Tb(0,"th",14),u.xc(1," Ativo "),u.Sb())}function E(t,o){if(1&t&&(u.Tb(0,"td",15),u.Ob(1,"mat-checkbox",16),u.Sb()),2&t){const t=o.$implicit;u.Cb(1),u.jc("checked",t.ativo)}}function D(t,o){1&t&&(u.Tb(0,"th",14),u.xc(1," Mat\xe9ria Prima "),u.Sb())}function G(t,o){if(1&t&&(u.Tb(0,"td",15),u.Ob(1,"mat-checkbox",16),u.Sb()),2&t){const t=o.$implicit;u.Cb(1),u.jc("checked",t.materia_prima)}}function q(t,o){1&t&&(u.Tb(0,"th",14),u.xc(1," A\xe7\xf5es "),u.Sb())}function A(t,o){if(1&t){const t=u.Ub();u.Tb(0,"td",15),u.Tb(1,"div",17),u.Tb(2,"div",18),u.Tb(3,"button",19),u.ac("click",function(){u.qc(t);const e=o.$implicit;return u.ec().edit(e)}),u.Tb(4,"mat-icon"),u.xc(5,"edit"),u.Sb(),u.Sb(),u.Sb(),u.Tb(6,"div",18),u.Tb(7,"button",20),u.ac("click",function(){u.qc(t);const e=o.$implicit;return u.ec().delete(e)}),u.Tb(8,"mat-icon"),u.xc(9,"delete"),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb()}}function z(t,o){1&t&&u.Ob(0,"tr",21)}function Q(t,o){1&t&&u.Ob(0,"tr",22)}const V=function(){return[5,10,20]},J=[{path:"",component:(()=>{class t{constructor(t,o){this.dialog=t,this.service=o,this.displayedColumns=["nome","preco","ativo","materia_prima","acoes"],this.dataSource=new n.k([])}ngOnInit(){this.getAllProdutos()}ngAfterViewInit(){this.dataSource.paginator=this.paginator}getAllProdutos(){this.service.getAllProdutos().subscribe(t=>{this.dataSource=new n.k(t)})}novoProduto(){this.createOrEditProduto({})}createOrEditProduto(t){this.dialog.open(v,{disableClose:!0,data:t}).afterClosed().subscribe(t=>{let o=t;void 0!==o&&(void 0!==o.id?this.updateProduto(o):this.saveProduto(o))})}saveProduto(t){this.service.saveProduto(t).subscribe(()=>{this.getAllProdutos()})}updateProduto(t){this.service.updateProduto(t).subscribe(()=>{this.getAllProdutos()})}edit(t){this.createOrEditProduto(t)}delete(t){this.service.deleteProduto(t).subscribe(()=>{})}}return t.\u0275fac=function(o){return new(o||t)(u.Nb(s.b),u.Nb(j))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-produtos"]],viewQuery:function(t,o){if(1&t&&u.Bc(a.a,1),2&t){let t;u.nc(t=u.bc())&&(o.paginator=t.first)}},decls:24,vars:5,consts:[["align","end",2,"margin-bottom","10px"],["mat-raised-button","","color","primary",3,"click"],[1,"mat-elevation-z8"],["mat-table","",2,"width","100%",3,"dataSource"],["matColumnDef","nome"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","preco"],["matColumnDef","ativo"],["matColumnDef","materia_prima"],["matColumnDef","acoes"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"example-margin",3,"checked"],[1,"flex-container"],[1,"button-container"],["mat-raised-button","","color","primary","matTooltip","Editar",3,"click"],["mat-raised-button","","color","warn","matTooltip","Deletar",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(u.Tb(0,"div",0),u.Tb(1,"button",1),u.ac("click",function(){return o.novoProduto()}),u.Tb(2,"mat-icon"),u.xc(3,"add"),u.Sb(),u.Sb(),u.Sb(),u.Tb(4,"div",2),u.Tb(5,"table",3),u.Rb(6,4),u.wc(7,I,2,0,"th",5),u.wc(8,N,2,1,"td",6),u.Qb(),u.Rb(9,7),u.wc(10,F,2,0,"th",5),u.wc(11,R,2,1,"td",6),u.Qb(),u.Rb(12,8),u.wc(13,$,2,0,"th",5),u.wc(14,E,2,1,"td",6),u.Qb(),u.Rb(15,9),u.wc(16,D,2,0,"th",5),u.wc(17,G,2,1,"td",6),u.Qb(),u.Rb(18,10),u.wc(19,q,2,0,"th",5),u.wc(20,A,10,0,"td",6),u.Qb(),u.wc(21,z,1,0,"tr",11),u.wc(22,Q,1,0,"tr",12),u.Sb(),u.Ob(23,"mat-paginator",13),u.Sb()),2&t&&(u.Cb(5),u.jc("dataSource",o.dataSource),u.Cb(16),u.jc("matHeaderRowDef",o.displayedColumns),u.Cb(1),u.jc("matRowDefColumns",o.displayedColumns),u.Cb(1),u.jc("pageSizeOptions",u.kc(4,V)))},directives:[m.a,k.a,n.j,n.c,n.e,n.b,n.g,n.i,a.a,n.d,n.a,M.a,_.a,n.f,n.h],styles:[".form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:0}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:65px}"]}),t})()}];let H=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(o){return new(o||t)},imports:[[i.e.forChild(J)],i.e]}),t})();var X=e("zXEv");let K=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(o){return new(o||t)},imports:[[r.c,H,X.a,c.p]]}),t})()}}]);