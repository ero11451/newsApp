import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../news.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  constructor(
    private postSrvc: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  posts$: Observable<any>;
  loadPost(post: any) {
    this.router.navigate(["/posts", post.id]);
  }
  ngOnInit() {
    this.posts$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) =>
          params.get("category")
            ? this.postSrvc.fetchPostsByCategory(params.get("category"))
            : this.postSrvc.fetchPosts()
      )
    );
  }

}
