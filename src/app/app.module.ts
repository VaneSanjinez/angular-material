import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdToolbarModule, MdIconModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule, MdCardModule} from '@angular/material';
import 'hammerjs';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MaterialModule,
    MdButtonModule, MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdIconModule,
    PetModule
  
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
