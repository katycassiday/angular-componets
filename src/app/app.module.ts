import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { MultiStepComponent } from './forms/multi-step/multi-step.component';
import { UploadFormComponent } from './forms/upload-form/upload-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { Step1Component } from './forms/multi-step/step1/step1.component';
import { Step2Component } from './forms/multi-step/step2/step2.component';
import { Step3Component } from './forms/multi-step/step3/step3.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    LoginFormComponent,
    MultiStepComponent,
    UploadFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCardModule
    
    
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
