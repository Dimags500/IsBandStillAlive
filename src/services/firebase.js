import { StartFirebase } from "../config/firebase";
import { get, remove, set, ref, onValue, update } from "firebase/database";

const db = StartFirebase();

export async function getCategoryByName(category) {
  const dbref = ref(db, `/Music/${category}`);
  let records = [];

  try {
    onValue(dbref, (snapshot) => {
      console.log(snapshot);
      snapshot.forEach((item) => {
        // let key = item.key;
        let data = item.val();
        records.push({ data: data });
      });
    });

    return records;
  } catch (error) {
    console.log(error);
  }
}

export const createItemByName = (category, name, data) => {
  set(ref(db, `/Music/${category}/"${name} `), {
    name: data.name,
    years: data.years,
    id: data.id,
  })
    .then(() => {
      console.log("firebase all good ");
    })
    .catch((error) => console.log("firebase error" + error));
};

export const updateItemByName = (category, name, data) => {
  update(ref(db, `/Music/${category}/${name}`), {
    name: data.name,
    years: data.years,
    id: data.id,
  })
    .then(() => {
      console.log("firebase update good ");
    })
    .catch((error) => console.log("firebase error" + error));
};

export async function deleteItemByName(category, name, data) {
  try {
    remove(ref(db, `/Music/${category}/${name}`), {
      name: data.name,
      years: data.years,
      id: data.id,
    }).then(() => {
      console.log("firebase delete good ");
    });
  } catch (error) {
    console.log("firebase error" + error);
  }
}

export async function getItemByName(category, name) {
  const path = `/Music/${category}/${name}`;
  const dbref = ref(db, path);

  return get(dbref)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("no data found ");
      }
    })
    .catch((error) => console.log("firebase error" + error));
}
