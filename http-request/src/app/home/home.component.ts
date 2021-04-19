import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';
import {PostService} from './post.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient,
              private poststsService: PostService) {
  }

  ngOnInit(): void {
    this.errorSub = this.poststsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    // this.fetchPosts();
    this.poststsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }

  // onCreatePost(postData: { title: string; content: string }): void {
  //   // Send Http request
  //   // console.log(postData);
  //   // this.http.post<{name: string}>('https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json', postData)
  //   //   .subscribe(responseData => {
  //   //   console.log(responseData);
  //   // });
  // }
  onCreatePost(postData: Post): void {
    this.poststsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts(): void {
    // Send Http request
    // this.fetchPosts();
    this.poststsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts(): void {
    // Send Http request
    this.poststsService.deletePosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  // private fetchPosts(): void {
  //   // this.http
  //   //   .get<{ [key: string]: Post} >('https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json')
  //   //   .pipe(
  //   //     map((responseData: {[key: string]: Post}) => {
  //   //       const postArray: Post[] = [];
  //   //       for (const key in responseData) {
  //   //         if (responseData.hasOwnProperty(key)) {
  //   //           postArray.push({...responseData[key], id: key});
  //   //         }
  //   //       }
  //   //       return postArray;
  //   //     })
  //   //   )
  //   //   .subscribe(posts => {
  //   //     // console.log(posts[0]);
  //   //     this.isFetching = false;
  //   //     this.loadedPosts = posts;
  //   //   });
  // }


  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError(): void {
    this.error = null;
  }
}
