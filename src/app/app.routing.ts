import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from 'app/layout/layout.component';
import { ModuleWithProviders } from "@angular/core";

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
]

export const routings: ModuleWithProviders = RouterModule.forRoot(appRoutes);