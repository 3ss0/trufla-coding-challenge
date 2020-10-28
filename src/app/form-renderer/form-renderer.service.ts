import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormRendererService {

  formJson=new BehaviorSubject<string>('');
  constructor() { }
}
