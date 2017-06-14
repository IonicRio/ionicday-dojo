import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [ApiProvider]
})
export class DashboardPage {

  passes: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {

  }

  ionViewDidLoad() {
    this.passes = this.apiProvider.getPasses()
  }

}
