import { Component } from '@angular/core';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.page.html',
  styleUrls: ['./apparel.page.scss']
})
export class ApparelPage {
  title: string =
    'CUSTOM EMBROIDERY FOR SHIRTS, JACKETS, HATS, SCRUBS, BAGS, AND MORE';

  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;

  slides = [
    { image: 'assets/images/a6.jpg' },
    { image: 'assets/images/a5.jpg' },
    { image: 'assets/images/a4.jpg' },
    { image: 'assets/images/a3.jpg' },
    { image: 'assets/images/a2.jpg' },
    { image: 'assets/images/a1.jpg' }
  ];

  constructor() {}

  openChat(chat) {
    chat.intercom.show();
  }
}
