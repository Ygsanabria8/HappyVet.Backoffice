import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PrimaryButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PageNotFoundComponent,
    PrimaryButtonComponent
  ],
})
export class SharedModule { }
