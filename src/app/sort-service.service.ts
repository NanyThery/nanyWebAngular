import { Injectable } from '@angular/core';
import { Skill } from './shared/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class SortServiceService {
  constructor() {}

  sortSkills(skills: Skill[], order: 'score' | 'name' = 'name'): Skill[] {
    const unsorted = new Array(...skills);
    // sort by name

    if (order === 'score') {
      return unsorted.sort(function (a, b) {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0;
      });
    } else {
      return unsorted.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
  }
}
