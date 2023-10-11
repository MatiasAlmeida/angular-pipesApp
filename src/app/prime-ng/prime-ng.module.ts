import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
// import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
// import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar'

@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    // SplitButtonModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
