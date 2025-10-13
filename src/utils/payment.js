// src/utils/payment.js
export function postToGate(gate, fields) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = gate;

  Object.entries(fields).forEach(([k, v]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = k;
    input.value = v ?? "";
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}
