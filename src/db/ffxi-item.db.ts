import Dexie from "dexie";

export class FFXI_ItemDb extends Dexie {
  FFXI_Item!: Dexie.Table<FFXI_Item>;

  constructor() {
    super("FFXI_Item");
    this.version(1).stores({
      FFXI_Item: "_id,name",
    });
  }
}

export interface FFXI_Item {
  _id: number;
  name: string;
  nameFull: string;
  category: string;
  level: number;
  desc: number;
  slotName: string;
  jobSlots: JobName[];
  stats: Stats;
}

type JobName =
  | "WAR"
  | "MNK"
  | "WHM"
  | "BLM"
  | "RDM"
  | "THF"
  | "PLD"
  | "DRK"
  | "BST"
  | "BRD"
  | "RNG"
  | "SAM"
  | "NIN"
  | "DRG"
  | "SMN"
  | "BLU"
  | "COR"
  | "PUP"
  | "DNC"
  | "SCH"
  | "GEO"
  | "RUN";

interface Stats {
  DEF: number;
  HP: number;
  MP: number;
  STR: number;
  DEX: number;
  VIT: number;
  AGI: number;
  INT: number;
  MND: number;
  CHR: number;
  MagicAcc: number;
  MagicDefBonus: number;
  MeleeAcc: number;
  MeleeAttack: number;
  GearHaste: number;
  mEva: number;
  Eva: number;
  DT: number;
}
