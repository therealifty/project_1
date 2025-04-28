// document.addEventListener("DOMContentLoaded", () => {
//   // Form submission handling
//   const forms = document.querySelectorAll("form")
//   forms.forEach((form) => {
//     form.addEventListener("submit", (e) => {
//       e.preventDefault()
//       alert("Form submitted successfully!")
//     })
//   })

//   const searchInput = document.querySelector(".search-container input")
//   const searchButton = document.querySelector(".search-container button")

//   searchButton.addEventListener("click", () => {
//     performSearch()
//   })

//   searchInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//       performSearch()
//     }
//   })

//   function performSearch() {
//     const searchTerm = searchInput.value.trim().toLowerCase()
//     const items = document.querySelectorAll(".item")

//     items.forEach((item) => {
//       const itemName = item.querySelector("h3").textContent.toLowerCase()
//       if (itemName.includes(searchTerm)) {
//         item.style.display = "block"
//       } else {
//         item.style.display = "none"
//       }
//     })
//   }
// })

