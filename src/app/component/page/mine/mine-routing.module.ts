import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MineComponent } from './mine.component';

const routes: Routes = [{
    path: '',
    component: MineComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class MineRoutingModule {

}

export const routedComponents = [
    MineComponent
];
