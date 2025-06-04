import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "./app";
import { SetUpUserRequestType } from "@/types/user";
import { GenericResponseMessage } from "@/types/response";

const functions = getFunctions(app, "asia-southeast1");

export const setUpUser = httpsCallable<
    SetUpUserRequestType,
    GenericResponseMessage
>(functions, "setUpUser");
