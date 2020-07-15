import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  isUppercase: boolean = true;

  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
