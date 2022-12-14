import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-job-find',
  templateUrl: './job-find.component.html',
  styleUrls: ['./job-find.component.scss']
})
export class JobFindComponent implements OnInit {

  jobs = new Array<any>();

  constructor(
    private readonly router: Router,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getRecentJob().subscribe(
      (response) => {
        this.jobs = response;
        // if (response.success == true) {
        //   this.jobs = response.jobDesc;
        // } else {
        //   this.jobs = [];
        // }
      },
      (error) => {

      }
    );
  }

  opened = false;

}
