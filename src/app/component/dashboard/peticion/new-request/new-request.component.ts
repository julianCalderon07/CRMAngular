import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent {
  //Variables
  prioridad = 'baja';

  constructor(public dialogRef: MatDialogRef<NewRequestComponent>) {
  }

  cancelar() {
    this.dialogRef.close();
  }

  saveData(): void {
    // Campo para guardar info okey Mao
    this.dialogRef.close();
  }
}
