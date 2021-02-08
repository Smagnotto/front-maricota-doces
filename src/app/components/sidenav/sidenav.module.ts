import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { MatSidenavModule } from "@angular/material/sidenav";

import { RouterModule } from "@angular/router";
import { SidenavDirective } from "./sidenav.directive";
import { SidenavComponent } from "./sidenav.component";
import { MaterialUIModule } from "src/app/material-ui.module";

@NgModule({
  declarations: [SidenavDirective, SidenavComponent],
  imports: [CommonModule, RouterModule, LayoutModule, MatSidenavModule, MaterialUIModule],
  exports: [SidenavDirective, SidenavComponent]
})

export class SidenavModule {}