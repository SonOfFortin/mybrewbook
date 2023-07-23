import { createSlice } from "@reduxjs/toolkit";

interface notificationStateOpt {
    push:PayloadAction.Boolean,
    mail:PayloadAction.Boolean
}

interface notificationState {
    notify: PayloadAction.Boolean;
    notifyOpt: {
        time:PayloadAction.time,
        push:PayloadAction.Boolean,
        mail:PayloadAction.Boolean
    },
    notifyList: {
        global: notificationStateOpt,
        bottelDay: notificationStateOpt
    }
}

const initialStateOpt: notificationStateOpt = {
    push:false,
    mail:false
}

const initialState: notificationState = {
    notify: false,
    notifyOpt: {
        time:0,
        push:true,
        mail:true
    },
    notifyList: {
        global: initialStateOpt,
        bottelDay:initialStateOpt,
    }
};

// on extrait les actions et le reducer
const notificationReduce = createSlice({
    // le nom du slice
    name: "notification",
    // le state initial
    initialState,
    // reducers permet de définir les actions et le reducer
    reducers: {
        setNotify: state => {
            return {
                ...state, 
                notify: !state.notify
            };
        },
        setNotifyList: (state, action) => {
            let {configName, configNameList} = action.payload

            return {
                ...state, 
                notifyList:{
                    ...state.notifyList,
                    [configName]:{
                        ...state.notifyList[configName],
                        [configNameList] :!state.notifyList[configName][configNameList]
                    }
                }
            }
        },
        setNotifyOpt: (state, action) => {
            return {
                ...state,
                notifyOpt: {
                    ...state.notifyOpt, 
                    [action.payload] : !state.notifyOpt[action.payload]
                }
            }
        },
        setNotifyOptTime: (state, timeVal) =>{
            return (prevState => ({
                ...prevState, 
                notifyOpt:{
                    ...state.notifyOpt, 
                    time:timeVal
                }
            }))
        }
    }
});

const { actions, reducer } = notificationReduce;

// on export chaque action individuellement
export const { setNotify, setNotifyList, setNotifyOpt, setNotifyOptTime } = actions;
// on export le reducer comme default export
export default reducer;
