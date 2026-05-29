import {
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

export const addCard = async (cardData) => {

  try {

    await addDoc(collection(db, "cards"), cardData);

    return true;

  } catch (error) {

    console.log(error);

    return false;

  }
};

export const getAllCards = async () => {

  try {

    const querySnapshot = await getDocs(collection(db, "cards"));

    const cards = [];

    querySnapshot.forEach((doc) => {

      cards.push({
        id: doc.id,
        ...doc.data(),
      });

    });

    return cards;

  } catch (error) {

    console.log(error);

    return [];

  }
};