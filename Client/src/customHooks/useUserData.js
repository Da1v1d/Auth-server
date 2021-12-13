import React , {useCallback, useEffect , useMemo} from "react";
import { useSelector } from "react-redux";
import { addAccount } from "../store/action";
import { useDispatch } from "react-redux";


export const useUserData = () => {
    return useSelector(state=>state.userReducer)
}