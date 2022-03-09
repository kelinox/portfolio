import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-chip',
  templateUrl: './img-chip.component.html',
  styleUrls: ['./img-chip.component.sass'],
})
export class ImgChipComponent implements OnInit {
  @Input() top: string = '';
  @Input() topSm: string = '';
  @Input() leftSm: string = '';
  @Input() left: string = '';
  @Input() imgUrl: string = '';

  constructor() {}

  ngOnInit(): void {}
}
