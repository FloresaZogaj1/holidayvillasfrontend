export function postToGate(gate, fields) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = gate;
  form.target = "_self";
  form.acceptCharset = "UTF-8";
  form.style.display = "none";

  Object.entries(fields).forEach(([k, v]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = k;
    input.value = v == null ? "" : String(v);
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
}
