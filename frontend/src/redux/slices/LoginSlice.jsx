import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// make http request using redux thunk middleware
export const LoginThunk = createAsyncThunk('login', async (userCredObj, thunkApi) => {
  try {
    let res;
    switch (userCredObj.userType) {
      case 'student':
        res = await axios.post('http://localhost:4000/student-api/login', userCredObj);
        break;
      case 'user':
        res = await axios.post('http://localhost:4000/user-api/login', userCredObj);
        break;
      case 'admin':
        res = await axios.post('http://localhost:4000/admin-api/login', userCredObj);
        break;
      default:
        return thunkApi.rejectWithValue('Invalid user type');
    }

    if (res.data.message === 'Login success') {
      localStorage.setItem('token', res.data.token);
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.data.message);
    }
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export const LoginSlice = createSlice({
  name: "login-slice",
  initialState: {
    isPending: false,
    loginUserStatus: false,
    currentUser: {},
    userType: '',
    errorOccured: false,
    errMsg: ''
  },
  reducers: {
    resetState: (state, action) => {
      state.isPending = false;
      state.loginUserStatus = false;
      state.currentUser = {};
      state.userType = '';
      state.errorOccured = false;
      state.errMsg = '';
    }
  },
  extraReducers: builder => builder
    .addCase(LoginThunk.pending, (state, action) => {
      state.isPending = true;
    })
    .addCase(LoginThunk.fulfilled, (state, action) => {
      state.isPending = false;
      state.currentUser = action.payload.user;
      state.loginUserStatus = true;
      state.userType = action.payload.user.userType;
      state.errMsg = '';
      state.errorOccured = false;
    })
    .addCase(LoginThunk.rejected, (state, action) => {
      state.isPending = false;
      state.currentUser = {};
      state.loginUserStatus = false;
      state.userType = '';
      state.errMsg = action.payload;
      state.errorOccured = true;
    })
});

// export action creator functions
export const { resetState } = LoginSlice.actions;
// export root reducer of this slice
export default LoginSlice.reducer;
