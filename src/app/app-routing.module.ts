import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ListingsContainerComponent } from './listings/listings-container/listings-container.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        // canLoad:[AuthGuard],
        loadChildren: './listings/listings.module#ListingsModule',
        data: { title: 'Reporting' },
      },
    ]
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
