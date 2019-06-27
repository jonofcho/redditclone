import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsContainerComponent } from './listings-container/listings-container.component';
import { ListingsListComponent } from './listings-list/listings-list.component';

const routes: Routes = [
    {
        path: ':filter',
        component: ListingsContainerComponent,
    },
    {
        path: 'r/:subreddit',
        component: ListingsContainerComponent,
    },
    {
        path: '',
        component: ListingsContainerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListingsRoutingModule { }