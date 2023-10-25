import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  title: string = 'mi nueva pagina!';

    hazmeClic(): void {
      alert("hiciste clic!");
    }

  }
