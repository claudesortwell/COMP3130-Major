import AsyncStorage from "@react-native-async-storage/async-storage";
import { Listings } from "./Listings";
import { getUser } from "./Users";

export default class DataManager {
  static Instance = null;
  user = null;
  listings = Listings;

  static async getInstance() {
    if (DataManager.Instance === null) {
      DataManager.Instance = new DataManager();
    }

    if (!this.Instance.user) {
      try {
        const value = await AsyncStorage.getItem("@user_id");
        if (value) {
          this.Instance.user = getUser("", Number(value));
        }
      } catch (e) {
        // error reading value
      }
    }

    if (!this.Instance.listings) {
      try {
        const jsonValue = await AsyncStorage.getItem("@listings");
        let value = null;
        jsonValue != null ? (value = JSON.parse(jsonValue)) : (value = null);
        if (value !== null) {
          this.Instance.listings = value;
        }
      } catch (e) {
        // error reading value
      }
    }

    return this.Instance;
  }

  getUserData() {
    return this.user;
  }

  async setListings(listings) {
    try {
      await AsyncStorage.setItem("@listings", id.toString());
    } catch (e) {
      // saving error
    }

    this.listings = JSON.stringify(listings);
  }

  async setUser(email, id) {
    try {
      await AsyncStorage.setItem("@user_id", id.toString());
    } catch (e) {
      // saving error
    }

    this.user = getUser(email, Number(id));
  }

  async logout() {
    this.user = null;
    await AsyncStorage.removeItem("@user_id");
    return true;
  }

  getListings(array) {
    if (this.listings) {
      return this.listings.filter(({ id }) => array.includes(id));
    } else {
      return [];
    }
  }

  getAListing(id) {
    return this.listings.find(function (obj) {
      return obj.id === id;
    });
  }

  deleteListing(id) {
    this.listings = this.listings.filter(function (obj) {
      return obj.id !== id;
    });

    return true;
  }
}
