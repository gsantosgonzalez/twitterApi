import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Dracula from 'graphdracula';

import { config } from 'src/env/development.env';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web';

  public userA = '';
  public userB = '';

  gettingFriends: Promise<any>;
  gettingFollowers: Promise<any>;

  friends = [];
  followers = [];
  tgfData: any;

  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    this.emptyResults();
  }

  get validateForm() {
    let isValid = false;

    if (this.userA && this.userB) {
      isValid = true;
    }

    return isValid;
  }

  getFollowers() {
    if (this.userA && this.userB) {
      this.emptyResults();

      this.gettingFollowers = this.http.get(
        config.base_url + '/commonFollowers?users=' + this.userA + ',' + this.userB
      )
      .toPromise()
      .then((response: any) => {
        this.followers = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  getFriends() {
    if (this.userA && this.userB) {
      this.emptyResults();

      this.gettingFriends = this.http.get(
        config.base_url + '/friends?users=' + this.userA + ',' + this.userB
      )
      .toPromise()
      .then((response: any) => {
        this.friends = response.data;

        this.getTGFData(this.userA, this.userB).then((response: any) => {
          this.tgfData = response.data;
          this.renderTGF(this.tgfData);
        });
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  getTGFData(userA: string, userB: string) {
    return this.http.get(
      config.base_url + '/tgf?users=' + userA + ',' + userB
    ).toPromise();
  }

  emptyResults() {
    this.followers = [];
    this.friends = [];
    this.tgfData = {};
  }

  renderTGF(relaciones) {
    const Graph = Dracula.Graph;
    const Renderer = Dracula.Renderer.Raphael;
    const Layout = Dracula.Layout.Spring;

    const graph = new Graph();

    relaciones.relaciones.forEach(rel => {
      graph.addEdge(relaciones[rel[0]], relaciones[rel[1]]);
    });

    const layout = new Layout(graph);
    const renderer = new Renderer('#graph', graph, 400, 300);
    renderer.draw();
  }
}
