import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsuarioService } from 'src/app/service/usuario.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading = false
  constructor(private fb: FormBuilder, private router: Router,
    private serviceUsuario: UsuarioService,
    private spinner: NgxSpinnerService) {
    this.form = this.fb.group(
      {
        usuario: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }
  hide = true;
  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.serviceUsuario.GetValidateUser(usuario, password).subscribe(x => {
      console.log(x, "validate");
      // this.spinner.hide();
      if (x != null) {
        if (x.idRol != null) {
          this.router.navigate(['dashboard']);
        }

      }
      else {
        this.alert("Usuario o password incorrectos!")
        this.form.reset();
      }
    });
    // this.spinner.hide();

  }

  ConsultaTime() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;


    }, 1500)
  }

  alert(message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'error',
      title: message
    })
  }
}
