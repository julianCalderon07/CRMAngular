import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { peticion } from 'src/app/Interfaces/peticion';
import { NewRequestComponent } from './new-request/new-request.component';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css']
})
export class PeticionComponent {
  displayedColumns: string[] = ['idTipoPeticiones', 'tipoPeticion', 'Prioridad'];
  dataSource: peticion[] = [];

  constructor(public dialog: MatDialog,) {
  }

  openDialog(): void {
    this.dialog.open(NewRequestComponent, {});
  }
}
