import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BlogRoutingModule, routedComponents } from './blog-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BlogRoutingModule,
        NgZorroAntdModule,
        CommonModule
    ],
    declarations: [
        ...routedComponents,
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class BlogModule { }