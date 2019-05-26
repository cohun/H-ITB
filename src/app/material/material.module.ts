import { NgModule } from '@angular/core';
import {MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatRadioModule,
        MatDividerModule,
        MatGridListModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule
      } from '@angular/material';

const MaterialComponenets = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatRadioModule,
  MatDividerModule,
  MatGridListModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule
];
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
