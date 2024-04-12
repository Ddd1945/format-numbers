import { getSpaceSeparatedNumParams } from "../Interfaces/Interfaces";
import { insertIntoStr } from "../InsertIntoStr/InsertIntoStr";
import { removeLastCharacter } from "../RemoveLastCharacter/RemoveLastCharacter";

export const newFunc = (params: getSpaceSeparatedNumParams): string => {
  try {
    let xStr: string = params.x.toString();
    let xStrLen = xStr.length;
    let result: string = xStr;
    let floatPart: string = "";

    if (xStr.includes(".")) {
      let parts: string[] = xStr.split(".");

      floatPart = parts[1];

      xStrLen = parts[0].length;

      result = parts[0];
    }

    while (xStrLen > 3) {
      result = insertIntoStr({
        xStr: result,
        idx: xStrLen - 3,
        val: " ",
      });

      xStrLen -= 3;
    }

    if (floatPart != "") result += "." + floatPart;

    if (params.isFullValue) return result;
    else {
      let short_result: string[] = [];

      if (result.includes(".")) short_result = result.split(".");
      else short_result = result.split(" ");

      let partsLength: number = 0;

      short_result.map((part, idx) => {
        if (idx != 0) partsLength += part.length;
      });

      let shrinkedFormat: string = "";

      if (xStr.length > 12) return "999B+";
      else if (partsLength >= 3 && partsLength < 6) return result;
      else if (partsLength >= 6 && partsLength < 9) shrinkedFormat = "M";
      else if (partsLength >= 9 && partsLength < 12) shrinkedFormat = "B";
      else shrinkedFormat = "";

      if (short_result[1] !== undefined) {
        short_result[1] = removeLastCharacter(short_result[1]);

        if (
          short_result[1][short_result[1].length - 1] === "0" ||
          short_result[1][short_result[1].length - 1] === "2"
        )
          short_result[1] = removeLastCharacter(short_result[1]);

        return short_result[0] + "." + short_result[1] + shrinkedFormat;
      }

      return result;
    }
  } catch (e) {
    console.log("error occured: ", e);

    return "";
  }
};
