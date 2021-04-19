import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, every, map, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string): void {
    const postData: Post = {title, content};
    this.http.post<{ name: string }>('https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      })
      .subscribe(responseData => {
          console.log(responseData);
        },
        error => {
          this.error.next(error.message);
        });
  }

  fetchPosts(): any {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>('https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello'}),
          // params: new HttpParams().set('print', 'pretty')
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({...responseData[key], id: key});
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
        // )
        // // .subscribe(posts => {
        //   // console.log(posts[0]);
        // }
      );
  }

  deletePosts(): any {
    return this.http.delete('https://angular-project-1540e-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
      ).pipe(tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // ...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
    })
    );
  }
}
