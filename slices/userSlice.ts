import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponseData } from "../types/user";

interface UserState {
  user: UserResponseData;
}

const initialState: UserState = {
  user: {
    id: "",
    name: "",
    email: "",
    username: "",
    profile_picture: "",
    bio: "",
    social_media: {
      twitter: "",
      linkedin: "",
      github: "",
      facebook: "",
      instagram: "",
      snapchat: "",
      youtube: "",
      pinterest: "",
      discord: "",
      website: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInStore(state, action: PayloadAction<UserResponseData>) {
      state.user = action.payload;
    },
  },
});

export const { setUserInStore } = userSlice.actions;
export default userSlice.reducer;
