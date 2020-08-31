import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
     private modalController: ModalController,
     public navCtrl: NavController, 
     public navParams: NavParams) { }
  @ViewChild('searchBar') searchBar: any;
  keyword: string;
  searching: any;
  posts: [];
  loading: boolean;
  ngOnInit() {
  }
  close(){
   this.modalController.dismiss()
  }
  ionViewDidLeave(){
    this.modalController.dismiss()
  }
  ionViewDidLoad() {
    setTimeout(() => {
      this.searchBar.setFocus()
    }, 600);
  }

  search() {
    this.loading = true;
    if (this.searching) {
      this.searching.unsubscribe()
    }
    if (this.keyword.trim().length > 2) {
      this.searching =   this.loading = false;
    } else {
      this.loading = false;
    }
  }
  openPost(post){
   console.log(post);
  }
}
