import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './component/page/main/main.component';
import { BlogComponent } from './component/page/blog/blog.component';
import { AlbumComponent } from './component/page/album/album.component';
import { MineComponent } from './component/page/mine/mine.component';

const routes: Routes = [{ path: '', redirectTo: '/main', pathMatch: 'full' },
{ path: 'main', component: MainComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'album', component: AlbumComponent },
{ path: 'aboutMe', component: MineComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
