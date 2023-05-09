import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-response',
  templateUrl: './new-response.component.html',
  styleUrls: ['./new-response.component.css']
})
export class NewResponseComponent {

  constructor(public dialogRef: MatDialogRef<NewResponseComponent>) {
  }

  cancelar() {
    this.dialogRef.close();
  }

  saveData(): void {
    // Campo para guardar info okey, primero configurar componente de peticion jajajajja
    this.dialogRef.close();
  }
}
