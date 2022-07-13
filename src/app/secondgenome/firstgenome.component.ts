import { Component, OnInit , ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Gene } from '../gene';
import {GeneService} from '../gene.service';

@Component({
  selector: 'app-firstgenome',
  templateUrl: './firstgenome.component.html',
  styleUrls: ['./firstgenome.component.css']
})
export class FirstgenomeComponent implements OnInit , AfterViewInit {

  constructor(private geneService: GeneService) { }

  gene!: Gene;

  getGene(): Gene{
    return this.gene = this.geneService.getGenes();
  }
  
  ngOnInit(): void {
    this.getGene();
  }


  @ViewChild('myCanvas')
  private myCanvas: ElementRef = {} as ElementRef;

  public context!: CanvasRenderingContext2D;


  ngAfterViewInit(): void {
    this.context = this.myCanvas.nativeElement.getContext('2d');
    this.draw();
  }

  private findBiggestNumber(): number{
    let biggestNumber:number = 0;
    for(var trans of this.gene.transcripts){
      if (trans.exons[trans.exons.length - 1].stop > biggestNumber){
        biggestNumber = trans.exons[trans.exons.length - 1].stop;
      };
    }
    return biggestNumber;
  }

  private draw() {
    let maxlenght: number = 800;
    let pxBetweenTrans: number = 30;
    let currPxBetweenTrans: number = 0;

    let startNum: number;
    let finishNum: number = this.findBiggestNumber();

    startNum = this.gene.transcripts[0].exons[0].start;
    let difference: number = finishNum - startNum;
    let coef: number = difference / maxlenght;

    console.log(finishNum);

   
   let currLenght:number = 0; 

    for(var trans of this.gene.transcripts){
      currPxBetweenTrans += pxBetweenTrans;
      currLenght = (trans.exons[trans.exons.length - 1].stop - startNum)/coef;
      
      
      for(var exon of trans.exons){
        this.context.fillRect(50 + (exon.start - startNum)/coef, currPxBetweenTrans -4, (exon.stop - exon.start)/coef, 10);
        
      }
      this.context.fillRect(50, currPxBetweenTrans, currLenght, 1);
      this.context.fillText("Stop: " + String(finishNum),50,currPxBetweenTrans + 15);
    }


  }

}