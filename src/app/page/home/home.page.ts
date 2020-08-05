import { SearchPage } from './../search/search.page';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private ion: IonhelperService) { }
  @Input() user: string;
  openCategoryDetails(){}
  doRefresh($event){  }
  openAccountOptions(){}
  ngOnInit() {  console.log(this.user) }
 categories = [
    {
      title: 'Edo state news',
      image: `assets/imgs/categories/edo.png`,
      id: [41, 53]
    },
    {
      title: 'business',
      image: `assets/mi's/categories/business.svg`,
      id: [44]
    },
    {
      title: 'science & tech.',
      image: `assets/imgs/categories/science.svg`,
      id: [55]
    },
    {
      title: 'sport',
      image: `assets/imgs/categories/sport.png`,
      id: [47]
    },
    {
      title: 'lifestyle',
      image: `assets/imgs/categories/lifestyle.svg`,
      id: [60, 116, 45, 43, 48]
    },
    {
      title: 'events',
      image: `assets/imgs/categories/events.svg`,
      id: [46]
    },
  ]
  goToSearch(){
    this.ion.ionModal(SearchPage, 'the us aspo')
  }
  posts = [{
    title:'orem ipsum dolor sit ame',
    modified:'120',
    image:'../../../assets/images/slider2.png',
    discription:'orem ipsum do numquam, excepturi, facere neq',
  }]

}
