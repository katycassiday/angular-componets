import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { MultiStepComponent } from './forms/multi-step/multi-step.component';
import { UploadFormComponent } from './forms/upload-form/upload-form.component';

const appRoutes: Routes = [
  {path:'contact-form', component: ContactFormComponent},
  {path:'login-form', component: LoginFormComponent},
  {path:'multi-step', component: MultiStepComponent},
  {path:'upload-form', component: UploadFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
