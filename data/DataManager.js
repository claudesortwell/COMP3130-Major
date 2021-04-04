import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "./Users";

export default class DataManager {
  static Instance = null;
  user = null;

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

    return this.Instance;
  }

  getUserData() {
    return this.user;
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
}
