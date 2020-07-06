import { ProfileService } from './../../shared/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsData: any;
  // data: any;

  constructor(
    private profile: ProfileService
  ) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills() {
    // this.profile.skills().subscribe(data => {
    //   this.skillsData = data.response;
    // });
    this.skillsData = this.profile.skills();
  }


}
