import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  inputNome: string
  inputTelefone: string
  inputEmail: string
  inputPassword: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cadastrar() {
    console.log(this.inputNome, this.inputTelefone, this.inputEmail, this.inputPassword)
    this.navCtrl.setRoot("DashboardPage")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
