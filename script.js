function loadPage(filePath) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar: ${filePath}`)
      }
      return response.text()
    })
    .then((html) => {
      const contentDiv = document.getElementById("content")
      contentDiv.innerHTML = html

      // Scroll suave para o topo
      contentDiv.scrollIntoView({ behavior: "smooth" })

      // Fechar menu mobile após carregar
      document.querySelector(".nav-links").classList.remove("active")
    })
    .catch((error) => {
      console.error("Erro ao carregar página:", error)
      document.getElementById("content").innerHTML =
        "<p style='color: red; text-align: center;'>Erro ao carregar a página. Tente novamente.</p>"
    })
}

function loadHome() {
  document.getElementById("content").innerHTML = ""
  document.querySelector(".nav-links").classList.remove("active")
}

// Menu Responsivo
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links")
  navLinks.classList.toggle("active")
}

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active")
  })
})

// Enviar Feedback
function submitFeedback(event) {
  event.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const category = document.getElementById("category").value
  const message = document.getElementById("message").value

  console.log("Feedback recebido")

  // Mostrar mensagem de sucesso
  const successMessage = document.getElementById("successMessage")
  if (successMessage) {
    successMessage.style.display = "block"

    // Limpar formulário
    document.getElementById("feedbackForm").reset()

    // Esconder mensagem após 3 segundos
    setTimeout(() => {
      successMessage.style.display = "none"
    }, 3000)
  }
}

function changeImage(button, direction) {
  const carousel = button.parentElement
  const images = carousel.getAttribute("data-images") ? JSON.parse(carousel.getAttribute("data-images")) : []
  const currentImg = carousel.querySelector(".carousel-image")
  let currentIndex = images.indexOf(currentImg.src)

  if (images.length > 0) {
    currentIndex = (currentIndex + direction + images.length) % images.length
    currentImg.src = images[currentIndex]
  }
}
