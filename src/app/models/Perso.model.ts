export class Perso {
  historique: string;
  alignement: string;
  force: number;
  dex: number;
  constitution: number;
  intelligence: number;
  sagesse: number;
  charisme: number;
  inspiration: number;
  bonusMaitrise: number;
  constructor(public nom: string, public classe: string, public race: string, public level: number, public createdBy: string) {}
}
