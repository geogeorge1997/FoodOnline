import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling'

@NgModule({
  exports: [
    MatTabsModule,
    MatCardModule,
    ScrollingModule
  ]
})
export class MaterialModule {}