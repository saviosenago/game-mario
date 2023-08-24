document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const message = document.getElementById("message");

  submitButton.addEventListener("click", async function () {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
    });

    const result = await response.json();
    message.textContent = result.message;

    if (result.success) {
      setTimeout(function () {
        window.location.href = "paginainicial.html";
      }, 10000); // 10000 milissegundos = 10 segundos
    }
  });
});
