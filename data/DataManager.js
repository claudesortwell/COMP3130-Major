import AsyncStorage from "@react-native-async-storage/async-storage";
import { Listings } from "./Listings";
import { Users } from "./Users";

export default class DataManager {
  static Instance = null;
  user = null;
  users = Users;
  listings = Listings;

  static async getInstance() {
    if (DataManager.Instance === null) {
      DataManager.Instance = new DataManager();
    }

    if (!this.Instance.user) {
      try {
        const value = await AsyncStorage.getItem("@user_id");
        if (value) {
          this.Instance.user = this.getUser("", Number(value));
        }
      } catch (e) {
        // error reading value
      }
    }

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

    try {
      const jsonValue = await AsyncStorage.getItem("@users");
      let value = null;
      jsonValue != null ? (value = JSON.parse(jsonValue)) : (value = null);
      if (value !== null) {
        this.Instance.users = value;
      }
    } catch (e) {
      // error reading value
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

    this.user = this.getUser(email, Number(id));
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
    this.setListings();
    return true;
  }

  addListing(data) {
    this.listings = [...this.listings, { ...data, id: this.listings[this.listings.length - 1].id + 1 }];
    this.setListings();
    return true;
  }

  async setListings() {
    await AsyncStorage.setItem("@listings", JSON.stringify(this.listings));
  }

  addUser(data) {
    this.users = [...this.users, { ...data, id: this.users[this.users.length - 1].id + 1 }];
    this.setUsers();
    return true;
  }

  async setUsers() {
    await AsyncStorage.setItem("@users", JSON.stringify(this.users));
  }

  validateUser({ email, password }) {
    return this.users.find((value) => value.email === email && value.password === password);
  }

  getUser(email, userID) {
    return this.users.find((value) => value.email === email || value.id === userID);
  }
}
