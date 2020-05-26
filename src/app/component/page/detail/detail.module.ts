import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DetailRoutingModule, routedComponents } from './detail-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        DetailRoutingModule,
        NgZorroAntdModule,
        CommonModule
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class DetailModule { }