import { insertIntoStrParams } from "../Interfaces/Interfaces";

export const insertIntoStr = (params: insertIntoStrParams): string => {
  return (
    params.xStr.slice(0, params.idx) +
    params.val +
    params.xStr.slice(params.idx)
  );
};
