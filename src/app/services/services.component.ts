import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Sonoma Health Services  |  Services');
    this.meta.setTag('og:description', 'Sonoma Health Services, sonomahealthservices, sonoma health services, Sonoma Health, sonomahealth, sonoma health');
    this.meta.setTag('og:title', 'Sonoma Health, sonomahealth, sonoma health');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.sonomahealthservices.com/assets/images/newlogo.png');
  }

  ngOnInit() {
  }

}
