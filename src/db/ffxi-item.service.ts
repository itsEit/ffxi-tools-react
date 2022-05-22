import { FFXI_Item, FFXI_ItemDb } from "./ffxi-item.db";

export class FFXI_ItemService {
  private db: FFXI_ItemDb;

  constructor() {
    this.db = new FFXI_ItemDb();
  }

  async initProvider(): Promise<number> {
    const lastUpdate = localStorage.getItem("lastUpdate");
    console.log(Date.now());

    return Promise.resolve(1);
  }
}
