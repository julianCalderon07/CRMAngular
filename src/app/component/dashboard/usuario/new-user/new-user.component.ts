import { NgModule, OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { rol } from 'src/app/Interfaces/rol';
import { tipoDocumento } from 'src/app/Interfaces/tipoDocumento';
import { usuario } from 'src/app/Interfaces/usuario';
import { RolService } from 'src/app/service/rol.service';
import { TipoDocumentoService } from 'src/app/service/tipo-documento.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent {
  rols: rol[] = [];
  tipoDocumentos: tipoDocumento[] = [];
  x!:string;
  y!:string;

  emailForm = new FormControl('', [Validators.required, Validators.email]);
  idForm = new FormControl('', [Validators.required]);
  nombreForm = new FormControl('', [Validators.required]);
  idRolForm = new FormControl('', [Validators.required]);
  estadoForm = new FormControl('', [Validators.required]);
  documentoForm = new FormControl('', [Validators.required]);
  idTipoDocumentoForm = new FormControl('', [Validators.required]);
  telefonoForm = new FormControl('', [Validators.required]);
  correoForm = new FormControl('', [Validators.required]);
  usuarioSystemForm = new FormControl('', [Validators.required]);
  contrasenaForm = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<NewUserComponent>,
    @Inject(MAT_DIALOG_DATA) public usuariomodel: usuario,
    private serviceRol: RolService,
    private serviceTipoDocumento: TipoDocumentoService,
    private serviceUsuario: UsuarioService,
    private spinner: NgxSpinnerService
  ) {
  }

  usuarioForm: FormGroup | undefined;

  async ngOnInit() {
    this.spinner.show();
    await this.cargarRols();
    await this.cargarTipoDocumento();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);

    this.usuariomodel = {
      contrasena: "",
      correo:"",
      documento:"",
      estado:true,
      id:0,
      idRol:0,
      idTipoDocumento:0,
      nombre:"",
      telefono:"",
      usuarioSystem:""
    };
  }

  async cargarRols() {
    this.serviceRol.getRol().subscribe(x => {
      this.rols = x;
    });
  }
  async cargarTipoDocumento() {
    this.serviceTipoDocumento.getTipoDocumento().subscribe(x => {
      this.tipoDocumentos = x;
    });
  }
  onNoClick(): void {
    this.usuariomodel.nombre = this.nombreForm?.value!;
    this.usuariomodel.estado = true!;
    this.usuariomodel.documento = this.documentoForm?.value!;
    this.usuariomodel.telefono = this.telefonoForm.value!;
    this.usuariomodel.correo = this.emailForm.value!;
    this.usuariomodel.usuarioSystem = this.usuarioSystemForm.value!;
    this.usuariomodel.contrasena = this.contrasenaForm.value!;
    this.usuariomodel.idRol= Number(this.idRolForm.value);
    this.usuariomodel.idTipoDocumento= Number(this.idTipoDocumentoForm.value);
    debugger;
    this.serviceUsuario.saveUser(this.usuariomodel).subscribe(x=>{
      console.log(x)
    });
    Swal.fire(
      'Se agrego correctamente!',
      '',
      'success'
    )
    this.dialogRef.close();
  }
}


