function changeImage(button, direction) {
  const carousel = button.closest(".carousel")
  const imagesJson = carousel.getAttribute("data-images")
  const images = JSON.parse(imagesJson)
  const currentImg = carousel.querySelector(".carousel-image")

  let currentIndex = images.indexOf(currentImg.src)
  if (currentIndex === -1) currentIndex = 0

  currentIndex = (currentIndex + direction + images.length) % images.length
  currentImg.src = images[currentIndex]

  updateIndicators(carousel, currentIndex)
}

function goToImage(indicator, index) {
  const indicators = indicator.closest(".carousel-indicators")
  const carousel = indicators.closest(".carousel")
  const imagesJson = carousel.getAttribute("data-images")
  const images = JSON.parse(imagesJson)

  const currentImg = carousel.querySelector(".carousel-image")
  currentImg.src = images[index]

  updateIndicators(carousel, index)
}

function updateIndicators(carousel, activeIndex) {
  const indicators = carousel.querySelectorAll(".indicator")
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === activeIndex)
  })
}
