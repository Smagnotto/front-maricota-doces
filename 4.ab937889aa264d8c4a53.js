(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{sxX6:function(o,a,t){"use strict";t.r(a),t.d(a,"ProdutosModule",function(){return N});var e=t("ofXK"),r=t("tyNb"),n=t("M9IT"),i=t("+0xr"),c=t("3Pt+"),m=t("fXoL"),l=t("0IaG"),u=t("kmnG"),b=t("qFsG"),p=t("d3UM"),d=t("bTqV"),s=t("NFeN"),f=t("FKr1");function v(o,a){1&o&&(m.Tb(0,"mat-error"),m.xc(1," Nome do produto \xe9"),m.Tb(2,"strong"),m.xc(3," obrigat\xf3rio"),m.Sb(),m.Sb())}function h(o,a){1&o&&(m.Tb(0,"mat-error"),m.xc(1," Pre\xe7o do produto \xe9"),m.Tb(2,"strong"),m.xc(3,"obrigat\xf3rio"),m.Sb(),m.Sb())}function w(o,a){if(1&o&&(m.Tb(0,"span",15),m.xc(1),m.Sb()),2&o){const o=m.ec();m.Cb(1),m.Ac(" (+",2===(null==o.materiaPrima.value?null:o.materiaPrima.value.length)?"outro":"outros"," ",o.materiaPrima.value.length-1,") ")}}function g(o,a){if(1&o&&(m.Tb(0,"mat-option",16),m.xc(1),m.Sb()),2&o){const o=a.$implicit;m.jc("value",o),m.Cb(1),m.yc(o)}}let S=(()=>{class o{constructor(o){this.dialogRef=o,this.produtosFormGroup=new c.f({nomeProduto:new c.d("",[c.q.required]),precoProduto:new c.d("",[c.q.required]),produtoParaVenda:new c.d(!1),materiaPrima:new c.d}),this.listaProdutos=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"]}ngOnInit(){this.produtosFormGroup.reset()}get nomeProduto(){return this.produtosFormGroup.get("nomeProduto")}get precoProduto(){return this.produtosFormGroup.get("precoProduto")}get materiaPrima(){return this.produtosFormGroup.get("materiaPrima")}closeModal(){this.dialogRef.close()}}return o.\u0275fac=function(a){return new(a||o)(m.Nb(l.c))},o.\u0275cmp=m.Hb({type:o,selectors:[["app-cadastro"]],decls:34,vars:7,consts:[[3,"formGroup"],[1,"row"],["type","text","matInput","","formControlName","nomeProduto","required","","placeholder","Ex. Torta de lim\xe3o","maxlength","30"],["input",""],["align","end"],[4,"ngIf"],["matInput","","type","number","placeholder","10,00","required",""],["matPrefix",""],["formControlName","materiaPrima","multiple",""],["class","example-additional-selection",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],[1,"flex-container"],[1,"button-container"],["mat-mini-fab","","color","warn",3,"click"],["mat-mini-fab","","color","primary"],[1,"example-additional-selection"],[3,"value"]],template:function(o,a){if(1&o&&(m.Tb(0,"form",0),m.Tb(1,"div",1),m.Tb(2,"mat-form-field"),m.Tb(3,"mat-label"),m.xc(4,"Nome do produto"),m.Sb(),m.Ob(5,"input",2,3),m.Tb(7,"mat-hint",4),m.xc(8),m.Sb(),m.wc(9,v,4,0,"mat-error",5),m.Sb(),m.Tb(10,"mat-form-field"),m.Tb(11,"mat-label"),m.xc(12,"Pre\xe7o"),m.Sb(),m.Ob(13,"input",6),m.Tb(14,"span",7),m.xc(15,"R$\xa0"),m.Sb(),m.wc(16,h,4,0,"mat-error",5),m.Sb(),m.Tb(17,"mat-form-field"),m.Tb(18,"mat-label"),m.xc(19,"Materia Prima"),m.Sb(),m.Tb(20,"mat-select",8),m.Tb(21,"mat-select-trigger"),m.xc(22),m.wc(23,w,2,2,"span",9),m.Sb(),m.wc(24,g,2,2,"mat-option",10),m.Sb(),m.Sb(),m.Sb(),m.Tb(25,"div",11),m.Tb(26,"div",12),m.Tb(27,"button",13),m.ac("click",function(){return a.closeModal()}),m.Tb(28,"mat-icon"),m.xc(29,"clear_outlined"),m.Sb(),m.Sb(),m.Sb(),m.Tb(30,"div",12),m.Tb(31,"button",14),m.Tb(32,"mat-icon"),m.xc(33,"done"),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&o){const o=m.oc(6);m.jc("formGroup",a.produtosFormGroup),m.Cb(8),m.zc("M\xe1x. 30 caracteres - ",(null==o.value?null:o.value.length)||0,"/30"),m.Cb(1),m.jc("ngIf",null==a.nomeProduto.errors?null:a.nomeProduto.errors.required),m.Cb(7),m.jc("ngIf",null==a.precoProduto.errors?null:a.precoProduto.errors.required),m.Cb(6),m.zc(" ",a.materiaPrima.value?a.materiaPrima.value[0]:""," "),m.Cb(1),m.jc("ngIf",(null==a.materiaPrima.value?null:a.materiaPrima.value.length)>1),m.Cb(1),m.jc("ngForOf",a.listaProdutos)}},directives:[c.r,c.m,c.g,u.c,u.g,b.b,c.c,c.l,c.e,c.p,c.h,u.f,e.k,u.h,p.a,p.c,e.j,d.a,s.a,u.b,f.m],styles:[".flex-container[_ngcontent-%COMP%]{margin-top:15px;display:flex;flex-wrap:wrap}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:65px}"]}),o})();var x=t("bSwM");function B(o,a){1&o&&(m.Tb(0,"th",12),m.xc(1," Nome "),m.Sb())}function T(o,a){if(1&o&&(m.Tb(0,"td",13),m.xc(1),m.Sb()),2&o){const o=a.$implicit;m.Cb(1),m.zc(" ",o.nome," ")}}function P(o,a){1&o&&(m.Tb(0,"th",12),m.xc(1," Pre\xe7o "),m.Sb())}function C(o,a){if(1&o&&(m.Tb(0,"td",13),m.xc(1),m.Sb()),2&o){const o=a.$implicit;m.Cb(1),m.zc(" R$ ",o.preco," ")}}function _(o,a){1&o&&(m.Tb(0,"th",12),m.xc(1," Ativo "),m.Sb())}function y(o,a){if(1&o&&(m.Tb(0,"td",13),m.Ob(1,"mat-checkbox",14),m.Sb()),2&o){const o=a.$implicit;m.Cb(1),m.jc("checked",o.ativo)}}function j(o,a){1&o&&(m.Tb(0,"th",12),m.xc(1," Mat\xe9ria Prima "),m.Sb())}function O(o,a){if(1&o&&(m.Tb(0,"td",13),m.Ob(1,"mat-checkbox",14),m.Sb()),2&o){const o=a.$implicit;m.Cb(1),m.jc("checked",o.materia_prima)}}function k(o,a){1&o&&m.Ob(0,"tr",15)}function F(o,a){1&o&&m.Ob(0,"tr",16)}const M=function(){return[5,10,20]};let R=(()=>{class o{constructor(o){this.dialog=o,this.displayedColumns=["nome","preco","ativo","materia_prima"],this.dataSource=new i.k(D)}ngOnInit(){}ngAfterViewInit(){this.dataSource.paginator=this.paginator}novoProduto(){this.dialog.open(S,{disableClose:!0}).afterClosed().subscribe(o=>{console.log(`Dialog result: ${o}`)})}}return o.\u0275fac=function(a){return new(a||o)(m.Nb(l.a))},o.\u0275cmp=m.Hb({type:o,selectors:[["app-produtos"]],viewQuery:function(o,a){if(1&o&&m.Bc(n.a,1),2&o){let o;m.nc(o=m.bc())&&(a.paginator=o.first)}},decls:20,vars:5,consts:[["mat-fab","","color","primary",3,"click"],[1,"mat-elevation-z8"],["mat-table","",2,"width","100%",3,"dataSource"],["matColumnDef","nome"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","preco"],["matColumnDef","ativo"],["matColumnDef","materia_prima"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"example-margin",3,"checked"],["mat-header-row",""],["mat-row",""]],template:function(o,a){1&o&&(m.Tb(0,"button",0),m.ac("click",function(){return a.novoProduto()}),m.Tb(1,"mat-icon"),m.xc(2,"add"),m.Sb(),m.Sb(),m.Tb(3,"div",1),m.Tb(4,"table",2),m.Rb(5,3),m.wc(6,B,2,0,"th",4),m.wc(7,T,2,1,"td",5),m.Qb(),m.Rb(8,6),m.wc(9,P,2,0,"th",4),m.wc(10,C,2,1,"td",5),m.Qb(),m.Rb(11,7),m.wc(12,_,2,0,"th",4),m.wc(13,y,2,1,"td",5),m.Qb(),m.Rb(14,8),m.wc(15,j,2,0,"th",4),m.wc(16,O,2,1,"td",5),m.Qb(),m.wc(17,k,1,0,"tr",9),m.wc(18,F,1,0,"tr",10),m.Sb(),m.Ob(19,"mat-paginator",11),m.Sb()),2&o&&(m.Cb(4),m.jc("dataSource",a.dataSource),m.Cb(13),m.jc("matHeaderRowDef",a.displayedColumns),m.Cb(1),m.jc("matRowDefColumns",a.displayedColumns),m.Cb(1),m.jc("pageSizeOptions",m.kc(4,M)))},directives:[d.a,s.a,i.j,i.c,i.e,i.b,i.g,i.i,n.a,i.d,i.a,x.a,i.f,i.h],styles:[".form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}"]}),o})();const D=[{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1},{nome:"Bolo de Banana",ativo:!0,preco:30.4,materia_prima:!1}],I=[{path:"",component:R}];let G=(()=>{class o{}return o.\u0275mod=m.Lb({type:o}),o.\u0275inj=m.Kb({factory:function(a){return new(a||o)},imports:[[r.c.forChild(I)],r.c]}),o})();var q=t("zXEv");let N=(()=>{class o{}return o.\u0275mod=m.Lb({type:o}),o.\u0275inj=m.Kb({factory:function(a){return new(a||o)},imports:[[e.c,G,q.a,c.o]]}),o})()}}]);