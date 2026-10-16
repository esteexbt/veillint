// Illustrative benign example. A clean scan is not proof of privacy or security.
const amountLabel = formatCurrency(form.amount);
const theme = localStorage.getItem('theme') ?? 'dark';

function showConfirmation() {
  return { amountLabel, theme };
}
