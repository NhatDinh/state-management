import useGlobalHook from "use-global-hook";
import React from "react";
import config from "./firebase/config";
import firebase from "firebase";
import { resolveCname } from "dns";

const initialState = {
  objects: {},
  cards: []
};

const actions = {
  addToCounter: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({ counter: newCounterValue });
  },

  getData: store => {
    //utils
    const sortByUID = list => {
      if (list) {
        let values = Object.values(list);
        let sorted = values.sort((a, b) => (a.uid < b.uid ? 1 : -1));
        return sorted;
      } else {
        return;
      }
    };
    let res, sorted;
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      var ref = firebase.database().ref("cards/");
      ref.on("value", snapshot => {
        res = snapshot.val();
        sorted = sortByUID(res);
        console.log("sorted ", sorted);
        store.setState({
          objects: res,
          cards: sorted
        });
      });
    } else {
      var ref = firebase.database().ref("cards/");
      ref.on("value", snapshot => {
        res = snapshot.val();
        sorted = sortByUID(res);
        console.log("sorted ", sorted);
        sorted = store.setState({
          objects: res,
          cards: sorted
        });
      });
    }
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);
export default useGlobal;
