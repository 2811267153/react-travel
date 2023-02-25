import {useSelector as useReactSelector, TypedUseSelectorHook, useDispatch} from "react-redux";
import {AppDispatch, RootState} from "./store";

export const useSelector: TypedUseSelectorHook<RootState> = useReactSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()