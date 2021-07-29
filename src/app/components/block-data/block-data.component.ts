import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-data',
  templateUrl: './block-data.component.html',
  styleUrls: ['./block-data.component.scss']
})
export class BlockDataComponent implements OnInit {

  constructor() { }

  @Input() blockTitle?: string;
  @Input() blockText?: string;
  @Input() link?: string;
   

  ngOnInit(): void {
  }

}
