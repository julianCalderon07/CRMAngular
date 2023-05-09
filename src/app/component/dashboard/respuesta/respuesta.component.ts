import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { respuesta } from 'src/app/Interfaces/respuesta';
import { NewResponseComponent } from './new-response/new-response.component';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent {
  displayedColumns: string[] = ['idTipoRespuesta', 'tipoRespuesta', 'descripción'];
  dataSource: respuesta[] = [];

  constructor(public dialog: MatDialog,) {
  }

  openDialog(): void {
    this.dialog.open(NewResponseComponent, {});
  }
}
