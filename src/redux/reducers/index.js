import { combineReducers } from "redux";
import search from "./search";
import wordsList from "./wordsList";

export default combineReducers({ search, wordsList });