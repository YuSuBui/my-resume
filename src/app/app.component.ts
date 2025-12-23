import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Accordion } from 'primeng/accordion';
import { IUser } from './models/user.model';
import { USER } from './data/user.data';
import { ICompany, IWorkingExperience } from './models/company.model';
import { PREVIOUS_COMPANY, WORKING_EXPERIENCE } from './data/company.data';
import { IPortfolio } from './models/portfolio.model';
import { PORTFOLIO } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'my-resume';
  @ViewChild('tab') tab!: Accordion;
  @ViewChildren('subTabs') subTabs!: QueryList<Accordion>;
  
  readonly user: IUser = USER;
  readonly company: ICompany[] = PREVIOUS_COMPANY;
  readonly experience: IWorkingExperience[] = WORKING_EXPERIENCE;
  readonly portfolio: IPortfolio[] = PORTFOLIO;

  get header(): string {
    return `${this.user.firstname} ${this.user.lastname}`;
  }

  get subHeader(): string {
    return `${this.user.position}`;
  }

  constructor() { }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.tab) {
        const activeIndex = this.tab.tabList?.length ?? 0;
        this.tab.activeIndex = this.generateSequence(activeIndex);
        this.tab.updateActiveIndex();
      }
      if (this.subTabs) {
        this.subTabs.forEach((sub: Accordion) => {
          const length = sub.tabList?.length ?? 0;
          sub.activeIndex = this.generateSequence(length);
          sub.updateActiveIndex();
        });
      }
    }, 100);
  }
  
  originalOrder = (): number => 0;

  trackByIndex = (i: number): string => `${i}`;

  go(url: string, blank = true) {
    window.open(url, '_blank');
  }

  dial(tel: string): void {
    const phone = tel.replace(/\s+/g, '');
    window.location.href = 'tel:' + phone;
  }

  send(email: string): void {
    window.location.href = `mailto:${email}`;
  }

  generateSequence(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
