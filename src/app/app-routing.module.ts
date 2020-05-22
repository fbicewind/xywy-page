import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/page/main/main.component';

const routes: Routes = [{ path: '', component: MainComponent },
{ path: 'index', component: MainComponent },
{ path: 'life', loadChildren: './component/page/blog/blog.module#BlogModule' },
{ path: 'technique', loadChildren: './component/page/blog/blog.module#BlogModule' },
{ path: 'me', loadChildren: './component/page/mine/mine.module#MineModule' },
{ path: '**', component: MainComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
