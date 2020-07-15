import { Component } from '@angular/core';

@Component({
  selector: 'app-patches',
  templateUrl: './patches.page.html',
  styleUrls: ['./patches.page.scss']
})
export class PatchesPage {
  title: string = 'QUALITY CUSTOM EMBROIDERED PATCHES & FREE DESIGN';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/p6.jpg' },
    { image: 'assets/images/p5.jpg' },
    { image: 'assets/images/p4.jpg' },
    { image: 'assets/images/p3.jpg' },
    { image: 'assets/images/p2.jpg' },
    { image: 'assets/images/p1.jpg' }
  ];

  constructor() {}

  openChat(chat) {
    chat.intercom.show();
  }
}
