import { Injectable } from '@angular/core';

import {Gene} from './gene';
import {GENES} from './mock-genes';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  getGenes(): Gene{
    return GENES;
  }

  constructor() { }
}