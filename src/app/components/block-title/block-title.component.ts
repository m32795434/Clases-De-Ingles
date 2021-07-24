import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-title',
  templateUrl: './block-title.component.html',
  styleUrls: ['./block-title.component.scss']
})
export class BlockTitleComponent implements OnInit {

  constructor() { }
  @Input() title?: string;

  ngOnInit(): void {
  }

}
