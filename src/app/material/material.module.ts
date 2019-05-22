import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule} from '@angular/material';

const MaterialComponenets = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
]
@NgModule({
  declarations: [],
  imports: [
    MaterialComponenets
  ],
  exports: [
    MaterialComponenets
  ]
})
export class MaterialModule { }
