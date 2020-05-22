import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { MineRoutingModule, routedComponents } from './mine-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MineRoutingModule,
        NgZorroAntdModule,
        CommonModule
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class MineModule { }