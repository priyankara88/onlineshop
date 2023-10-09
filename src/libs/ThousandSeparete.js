export const thousandSeparate = (value = 0) => {
  const iValue = value.toFixed(2);

  if (iValue.length <= 6) {
    console.log(iValue);
  } else if (iValue.length <= 9) {
    const iResult = iValue.length - 6;
    const sResult = iValue.slice(0, iResult);
    const iFinalResult = sResult + "," + iValue.slice(iResult);
    console.log(iFinalResult);
  } else {
    //initial separation
    const iResult = iValue.length - 6;
    const iNewResult = iValue.length - 9;
    const sResult = iValue.slice(0, iNewResult);
    //sdffdffdf
    console.log("iResult", iResult);
    console.log("iNewResult", iNewResult);
    const FinalREsult =
      sResult +
      "," +
      iValue.slice(iNewResult, iResult) +
      "," +
      iValue.slice(iResult);

    console.log("9 or More", FinalREsult);

    // const iFinalResult = sResult + "," + iValue.slice(iResult);
    // console.log("9 o more", iFinalResult.length);
    // //second separation

    // const iNewFinal = iValue.slice(0, iNewResult);
    // const iSecFinalResult = iNewFinal + "," + iValue.slice(iNewFinal);
  }
  return 0;
};
