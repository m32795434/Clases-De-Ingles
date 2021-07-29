import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-data-resources',
  templateUrl: './block-data-resources.component.html',
  styleUrls: ['./block-data-resources.component.scss']
})
export class BlockDataResourcesComponent implements OnInit {

  constructor() { }
  @Input() blockTitle?: string;
  @Input() blockText?: string;
  @Input() link?: string;
  
  ngOnInit(): void {
  }

}
