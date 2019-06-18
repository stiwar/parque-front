import { MatPaginatorImpl } from './../_shared/mat-paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorIntl, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntl}
  ]
})
export class MaterialModule { }
