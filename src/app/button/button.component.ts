import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() variant?: string;
  constructor() {
  }

  ngOnInit(): void {
  }

  getVariant(variant) {
    return variant;
  }

}
