import { Client } from "@gadget-client/mem-leak-test";

export const api = new Client({ environment: window.gadgetConfig.environment });
