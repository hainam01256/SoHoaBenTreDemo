import { Component, OnInit } from '@angular/core';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ho-so',
  templateUrl: './ho-so.component.html',
  styleUrls: ['./ho-so.component.scss']
})
export class HoSoComponent implements OnInit {
  name: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
