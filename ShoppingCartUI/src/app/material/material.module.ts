import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule ,} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
const MaterialComponents:any[]=[
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule
];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
