import { Injectable } from '@angular/core';
import { Members } from './members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  async getMembers(): Promise<Members[]> {
    let response = await fetch('./assets/members.json');
    let members = await response.json();
    console.log(members);
    return members;
  }
}
