import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NavComponent } from './component/nav/nav.component';
import { FootComponent } from './component/foot/foot.component';
import { MainComponent } from './component/page/main/main.component';
import { MusicComponent } from './component/music/music.component';
import { CoreModule } from './component/page/core.module';
import { ShareModule } from './component/page/share.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    MainComponent,
    MusicComponent
  ],
  imports: [
    CoreModule,
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
