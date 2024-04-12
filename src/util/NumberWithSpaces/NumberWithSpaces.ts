export const numberWithSpaces = (x: number, fullValue?: boolean) => {
  try {
    if (fullValue) {
      let parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    } else {
      const secondNumber = x.toString()[2] === "0" ? "" : x.toString()[2];
      const needDot = secondNumber ? "." : "";
      const thirdNumber = x.toString()[3] === "0" ? "" : x.toString()[3];
      const needDot3 = thirdNumber ? "." : "";
      if (x.toString().length > 12) {
        return "999B+";
      } else if (x.toString().length === 12) {
        return (
          x.toString()[0] +
          x.toString()[1] +
          x.toString()[2] +
          needDot3 +
          thirdNumber +
          "B"
        );
      } else if (x.toString().length === 11) {
        if (thirdNumber) {
          return (
            x.toString()[0] +
            x.toString()[1] +
            "." +
            x.toString()[2] +
            x.toString()[3] +
            "B"
          );
        } else {
          return (
            x.toString()[0] + x.toString()[1] + needDot + secondNumber + "B"
          );
        }
      } else if (x.toString().length === 10) {
        return x.toString()[0] + "." + x.toString()[1] + secondNumber + "B";
      } else if (x.toString().length === 9) {
        return (
          x.toString()[0] +
          x.toString()[1] +
          x.toString()[2] +
          needDot3 +
          thirdNumber +
          "M"
        );
      } else if (x.toString().length === 8) {
        if (thirdNumber) {
          return (
            x.toString()[0] +
            x.toString()[1] +
            "." +
            x.toString()[2] +
            x.toString()[3] +
            "M"
          );
        } else {
          return (
            x.toString()[0] + x.toString()[1] + needDot + secondNumber + "M"
          );
        }
      } else if (x.toString().length === 7) {
        return x.toString()[0] + "." + x.toString()[1] + secondNumber + "M";
      } else {
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
      }
    }
  } catch (e) {
    console.log(`[numberWithSpaces] error with ${e}`);

    return ""; // return empty string to avoid `undefined` error
  }
};
