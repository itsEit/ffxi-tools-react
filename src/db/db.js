import Dexie from "dexie";

export const db = new Dexie("FFXI_Items");
db.version(1).stores({
  items: "_id, name",
});

db.on("ready", function () {
  return db.items.count(async function (count) {
    if (count > 0) return;

    const data = async () => {
      return (await fetch("data/FullItems.Json")).json();
    };

    const allItems = await data();
    const itemKeys = Object.keys(allItems);
    const finalItems = [];
    itemKeys.forEach((key) => {
      if (
        allItems[key].category === "Armor" ||
        allItems[key].category === "Weapon"
      ) {
        finalItems.push(allItems[key]);
      }
    });

    db.items.bulkAdd(finalItems);
  });
});

