import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputLogin: string
  inputPassword : string

  constructor(public navCtrl: NavController) {

  }

  login() {
    console.log(this.inputLogin , this.inputPassword)
    this.navCtrl.push("DashboardPage")
  }

  cadastro() {
    console.log(`cadastro`)
    this.navCtrl.push("CadastroPage")
  }

  esqueceuSenha() {
    console.log(`esqueceus`)
  }

}
