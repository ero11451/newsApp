import { SearchPage } from './../search/search.page';
import { IonhelperService } from 'src/app/helper/ionhelper.service';
import { Component, OnInit, Input } from '@angular/core';

import { NewsService } from "../../news.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { PopoverController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories$: Observable<any>;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(
    private popoverController: PopoverController,
    private ion: IonhelperService,
    private postSrvc: NewsService,
    private router: Router,
    private route: ActivatedRoute) { }
  posts$: Observable<any>;
  loadPost(post: any) {
    this.router.navigate(["/posts", post.id]);
  }
  @Input() user: string;
  openCategoryDetails(){}
  doRefresh($event){  }
  openAccountOptions(){}
  ngOnInit() {  
    this.categories$ = this.postSrvc.fetchPostCategories();
    this.posts$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          params.get("category")
            ? this.postSrvc.fetchPostsByCategory(params.get("category"))
            : this.postSrvc.fetchPosts()
      )
    );
   }
//  categories = [
//     {
//       title: 'Edo state news',
//       image: `assets/imgs/categories/edo.png`,
//       id: [41, 53]
//     },
//     {
//       title: 'business',
//       image: `assets/mi's/categories/business.svg`,
//       id: [44]
//     },
//     {
//       title: 'science & tech.',
//       image: `assets/imgs/categories/science.svg`,
//       id: [55]
//     },
//     {
//       title: 'sport',
//       image: `assets/imgs/categories/sport.png`,
//       id: [47]
//     },
//     {
//       title: 'lifestyle',
//       image: `assets/imgs/categories/lifestyle.svg`,
//       id: [60, 116, 45, 43, 48]
//     },
//     {
//       title: 'events',
//       image: `assets/imgs/categories/events.svg`,
//       id: [46]
//     },
//   ]
  goToSearch(){
    this.router.navigate(['/search', {  }]);
  }
  
  posts = [{
    title:'orem ipsum dolor sit ame',
    modified:'120',
    image:'../../../assets/images/slider2.png',
    discription:'orem ipsum do numquam, excepturi, facere neq',
  }]
 
  async menuOpen(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuPage,
      event: ev,
      cssClass: 'my-custom-class',
      translucent: false
    });
  
    await popover.present();
  }
}
