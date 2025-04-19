window.addEventListener("load", async (event) => {
  const gallery = document.getElementById("gallery");

  console.log(gallery);
  await fetch("http://localhost:5678/api/works")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // the code below updates the gallery with the images from response
      gallery.innerHTML = data.map((work, index) => {
        return `
       <figure>
        <img class="gallery-image" alt="${work.title}" src=${work.imageUrl}/>
        <figcaption>${work.title}</figcaption>
       </figure>
       `;
      });
    });
  console.log("page is fully loaded");
});
// Wait for the page to load fully

// Handle login form submission
document.getElementById("loginForm")?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log("Login data:", data);

    try {
        const response = await fetch("http://localhost:5678/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Login request failed");

        const result = await response.json();
        console.log("Login response:", result);

        if (result.success) {
            window.location.href = "/admin";
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("An error occurred. Please try again.");
    }
});
const modal = document.getElementById("photoModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.onclick = () => { modal.style.display = "flex"; };
closeBtn.onclick = () => { modal.style.display = "none"; };
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

document.querySelector(".open-modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("show");
});
document.querySelector(".close-modal").addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("show");
});


