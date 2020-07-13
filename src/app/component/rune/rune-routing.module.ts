import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportComponent } from './import/import.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
    path: '',
    children: [{
        path: 'import',
        component: ImportComponent
    }, {
        path: 'list',
        component: ListComponent
    }]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class RuneRoutingModule {

}

export const routedComponents = [
    ImportComponent,
    ListComponent
];
