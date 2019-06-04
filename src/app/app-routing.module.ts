import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sheet', loadChildren: './sheet/sheet.module#SheetPageModule' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarPageModule' },
  { path: 'checkbox', loadChildren: './checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'input', loadChildren: './input/input.module#InputPageModule' },
  { path: 'card', loadChildren: './card/card.module#CardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
