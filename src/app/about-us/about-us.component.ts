import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  imageURLs: string[] = [
    '../../assets/images/aboutus7.jpeg',
    '../../assets/images/aboutus8.png',
    '../../assets/images/aboutuspic4.jpeg',
    '../../assets/images/aboutus9.jpeg'

  ];

  paraDetails = "Petrichor Technical Group, LLC (PTG) is a dynamic and innovative, full service Civil Engineering and Construction Management firm that was established in 2016. With a strong commitment to excellence and a focus on delivering high-quality services, PTG intends to be the trusted name for all your developmental needs. Specializing in civil engineering and construction management, PTG offers a wide range of services to meet the diverse needs of its clients. From feasibility to designing land development and infrastructure projects to managing the entire construction process, PTG ensures that every project is completed with utmost professionalism and precision. With a team of highly skilled engineers and construction experts, PTG is dedicated to providing cost-effective solutions that exceed client expectations.Whether it's a small-scale residential project, large-scale commercial development or large-scale land development, PTG is the go-to company for all civil engineering and construction management needs. PTG simplifies the process of land development with its extensive resources and experienced professional committed to realizing your dream."

  constructor() { }

  ngOnInit(): void {
  }
  onMouseOver(index:number){


  }
  onMouseOut(){

  }

}
