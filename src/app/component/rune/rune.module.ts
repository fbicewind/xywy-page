import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { RuneRoutingModule, routedComponents } from './rune-routing.module';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ImportComponent } from './import/import.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        RuneRoutingModule,
        NgZorroAntdModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        ...routedComponents,
        ListComponent,
        ImportComponent,
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class RuneModule { }