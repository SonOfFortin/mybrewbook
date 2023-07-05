import { createSlice } from "@reduxjs/toolkit";

interface navState {
    showBurgerMenu: PayloadAction.Boolean;
    isNavbarVerticalCollapsed: Boolean;
}

const initialState: navState = {
    showBurgerMenu: false,
    isNavbarVerticalCollapsed: false
};

// on extrait les actions et le reducer
const navReduce = createSlice({
    // le nom du slice
    name: "navigation",
    // le state initial
    initialState,
    // reducers permet de définir les actions et le reducer
    reducers: {
        toggleBurgerMenu: state => {
            return !state.showBurgerMenu;
        },
        toggleNavbarVertical: (state, action) => {
            return !action.payload.isNavbarVerticalCollapsed;
        }
    }
});

const { actions, reducer } = navReduce;

// on export chaque action individuellement
export const { toggleBurgerMenu, toggleNavbarVertical } = actions;
// on export le reducer comme default export
export default reducer;
