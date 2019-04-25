import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  public userA = 'gsantosg1982';
  public userB = 'feroliveram';

  gettingFriends: Promise<any>;
  gettingFollowers: Promise<any>;

  friends = [];
  followers = [];
  tgfData: any;

  constructor(private http: HttpClient) { }

  get validateForm() {
    let isValid = false;

    if (this.userA && this.userB) {
      isValid = true;
    }

    return isValid;
  }

  getFriends() {
    if (this.userA && this.userB) {
      this.emptyResults();

      this.gettingFriends = this.http.get(
        'https://us-central1-indigocodecamp.cloudfunctions.net/friends?usuarios=' + this.userA + ',' + this.userB
      )
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.friends = response;

        this.getTGFData(this.userA, this.userB).then(response => {
          this.tgfData = response;
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  getFollowers() {
    if (this.userA && this.userB) {
      this.emptyResults();

      this.gettingFollowers = this.http.get(
        'https://us-central1-indigocodecamp.cloudfunctions.net/commonFollowers?usuarios' + this.userA + ',' + this.userB
      )
      .toPromise()
      .then((response: any) => {
        console.log(response);
        this.followers = response;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  getTGFData(userA: string, userB: string) {
    return this.http.get(
      'https://us-central1-indigocodecamp.cloudfunctions.net/tgf?usuarios=' + userA + ',' + userB
    ).toPromise();
  }

  emptyResults() {
    this.followers = [];
    this.friends = [];
  }

}
