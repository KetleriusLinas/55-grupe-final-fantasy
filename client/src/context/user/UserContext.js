import { createContext } from "react";
import { initialUserContext } from "./initialUserContext.js";

export const UserContext = createContext(initialUserContext);