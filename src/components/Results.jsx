import React from 'react'

export default function Results({ values }) {
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Principal Amount</th>
                    <th>Interest Earned (Yearly)</th>
                    <th>Interest Earned (Total)</th>
                    <th>Total Amount Earned</th>
                </tr>
            </thead>
            <tbody>
                {values.map((value, index) => (
                    <tr key={index}>
                        <td>{value.year}</td>
                        <td>${value.yearlyPrincipal}</td>
                        <td>${value.yearlyInterest}</td>
                        <td>${value.totalInt}</td>
                        <td>${value.yearlyAmt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
