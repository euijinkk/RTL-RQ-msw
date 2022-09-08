import { setupWorker } from "msw";
import { counterHandler } from "./handler";

export const worker = setupWorker(...counterHandler);
