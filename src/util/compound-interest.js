export function calculateCompoundInterest({
  principal,
  rate,
  time,
}) {

  const annualData = [];
  let totalInt = 0;
  let yearlyPrincipal = principal;

  for (let i = 1; i <= time; i++) {

    const yearlyAmt = principal * (1 + parseFloat(rate / 100)) ** i;
    let t = totalInt;
    totalInt = yearlyAmt - principal;
    const yearlyInterest = totalInt - t;

    annualData.push({
      year: i,
      yearlyPrincipal: yearlyPrincipal.toFixed(2),
      yearlyInterest: yearlyInterest.toFixed(2),
      totalInt: totalInt.toFixed(2),
      yearlyAmt: yearlyAmt.toFixed(2),
    })

    yearlyPrincipal += yearlyInterest;
  }

  return annualData;
}