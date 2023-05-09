import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { RolService } from 'src/app/service/rol.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { usuario } from 'src/app/Interfaces/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent {
  displayedColumns: string[] = ['id', 'nombre', 'idRol', 'documento', 'idTipoDocumento', 'telefono', 'correo', 'usuarioSystem', 'contrasena', 'estado', 'editar'];
  dataSource: usuario[] = [];

  constructor(public dialog: MatDialog,
    private serviceUsuario: UsuarioService) {

  }
  async ngOnInit() {
    await this.cargarUsuario();
  }
  async cargarUsuario() {
    this.serviceUsuario.GetUser().subscribe(result => {
      console.log(result);
      this.dataSource = result;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewUserComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      this.cargarUsuario();
    });
  }

}



