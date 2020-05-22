import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShareModule } from './share.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * 核心模块，只需要使用一次
 */
@NgModule({
    imports: [
        ShareModule,
        BrowserModule,
        NgZorroAntdModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    exports: [
        BrowserModule,
        NgZorroAntdModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    declarations: [

    ],
})
export class CoreModule {
    /**
     * 避免核心模块被多次加载
     * @param {CoreModule} parentModule
     */
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule had been loaded. Import it in AppModule Only');
        }
    }
}