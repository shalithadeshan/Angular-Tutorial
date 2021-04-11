import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // }); // given observable
    const  customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
       observer.next(count); // error an complete also has
       if (count === 5) {
         observer.complete();
       } // completion part
       if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        } // error part
       count ++;
      }, 1000);
    });



    this.firstObsSubscription = customIntervalObservable.pipe(filter( data => {
      return data > 0;
    }), map( data => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message); // handle error
    }, () => {
      console.log('completed!');
    }); // custom observable
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe(); // unsubscribe must
  }

}
