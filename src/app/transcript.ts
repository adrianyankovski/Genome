import { Start } from "./start-stop";

export interface Transcript {
    
  transcript_id: string;
  strand: string;
  chrom: string;
  cds: Start[];
  utr3: Start[];
  utr5: Start[];
  exons: Start[];
  }