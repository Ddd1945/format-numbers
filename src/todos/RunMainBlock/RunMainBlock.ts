import { newFunc } from "../../util/GetSpaceSeparatedNum/GetSpaceSeparatedNum";
import { numberWithSpaces } from "../../util/NumberWithSpaces/NumberWithSpaces";

export const runMainBlock = () => {
  const tests = [
    123, 10001, 153056, 5132.51321, -1, -5561321313, 99999, 12345678,
    912321561321, 912301561321, 51231411.31313131, 0,
  ];

  tests.forEach((number, index) => {
    const old0 = number;

    const oldFull = numberWithSpaces(number, true);
    const oldShort = numberWithSpaces(number, false);

    const newFull = newFunc({ x: number, isFullValue: true });
    const newShort = newFunc({ x: number, isFullValue: false });

    const status = oldFull == newFull && oldShort == newShort;
    console.log(
      `#${index + 1}`,
      status ? "OK" : "FAILED",
      !status ? `${oldFull} == ${newFull} | ${oldShort} == ${newShort}` : ""
    );
  });
};
