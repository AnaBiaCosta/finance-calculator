const inputTotalValue = document.querySelector("#input-total-value")
const inputDeadline = document.querySelector("#input-deadline")
const inputFees = document.querySelector("#input-fees")
const resultContainer = document.querySelector(".result-container")
const tableBody = document.querySelector(".table-body")

const inputResultDeadline = document.querySelector("#input-result-deadline")
const inputResultFeesMonth = document.querySelector("#input-result-fees-month")
const inputResultFeesAccumulated = document.querySelector(
  "#input-result-fees-accumulated"
)

const showValues = (values) => {
  resultContainer.style.display = "block"

  values.map(
    (value) =>
      (tableBody.innerHTML += `<tr>
      <td>${value.index}</td>
      <td>${value.amortization}</td>
      <td>${value.fees}</td>
      <td>${value.totalFees}</td>
    </tr>`)
  )
}

const calculateFinancing = () => {
  const totalValue = inputTotalValue.value
  const deadline = inputDeadline.value
  const feesYear = inputFees.value
  let acumulatedFees = 0
  let tableValues = []

  const resultDeadline = deadline * 12
  inputResultDeadline.value = resultDeadline

  const resultFeeMonth = Math.pow(1 + Number(feesYear), 1 / 12) - 1
  inputResultFeesMonth.value = resultFeeMonth

  const amortization = totalValue / resultDeadline

  for (let i = 0; i < resultDeadline + 1; i++) {
    let outstandingBalance = totalValue - i * amortization
    let fees = outstandingBalance * resultFeeMonth
    let totalFees = amortization + fees
    acumulatedFees += fees

    if (i < 5) {
      tableValues.push({
        index: i + 1,
        amortization: amortization.toFixed(2),
        fees: fees.toFixed(2),
        totalFees: totalFees.toFixed(2),
      })
    }
  }

  showValues(tableValues)

  inputResultFeesAccumulated.value = acumulatedFees
}

const button = document.querySelector("#submit-button")
button.addEventListener("click", calculateFinancing)
