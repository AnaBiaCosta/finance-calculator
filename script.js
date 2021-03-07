const inputValue = document.querySelector("#input-value")
const inputDeadline = document.querySelector("#input-deadline")
const inputFees = document.querySelector("#input-fees")

let inputResultDeadline = document.querySelector("#input-result-deadline")
const inputResultFeesMonth = document.querySelector("#input-result-fees-month")
const inputResultFeesAccumulated = document.querySelector(
  "#input-result-fees-accumulated"
)

const calculateFinancing = () => {
  const value = inputValue.value
  const deadline = inputDeadline.value
  const fees = inputFees.value

  const resultDeadline = deadline * 12
  inputResultDeadline.value = resultDeadline
}

const button = document.querySelector("#submit-button")
button.addEventListener("click", calculateFinancing)
