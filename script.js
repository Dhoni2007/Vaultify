const phoneNumber = "7980488919";
const waBaseUrl = "https://wa.me/";

const products = [
  { title: "132+ Crores Pan Verified Leads", price: 250, categories: ["digital-bundle"] },
  { title: "Ultimate Graphics Bundle", price: 250, categories: ["digital-bundle"] },
  { title: "500+ Ai Generated Reels", price: 250, categories: ["reels-bundle"] },
  { title: "Digital Growth Kit", price: 250, categories: ["digital-bundle"] },
  { title: "Premium YouTube Kit", price: 250, categories: ["youtube-smm"] },
  { title: "500+ Landing Page", price: 300, categories: ["digital-bundle"] },
  { title: "WhatsApp Automation Course+ Software", price: 200, categories: ["courses-bundle"] },
  { title: "Da Vinci Resolve", price: 299, categories: ["premium-softwares"] },
  { title: "Adobe All Softwares", price: 299, categories: ["premium-softwares"] },
  { title: "WhatsApp Bulk Sender Software", price: 1299, categories: ["premium-softwares"] },
  { title: "Capcut PC", price: 199, categories: ["premium-softwares"] },
  { title: "Leonardo AI", price: 2499, categories: ["premium-softwares"] },
  { title: "Filmora 14 Pro", price: 299, categories: ["premium-softwares"] },
  { title: "400+ Ai Reels", price: 149, categories: ["reels-bundle"] },
  { title: "1000+ Cartoon Reels", price: 149, categories: ["reels-bundle"] },
  { title: "1000+ Art & Crafts Reels", price: 149, categories: ["reels-bundle"] },
  { title: "300+ Baby Podcast (Hindi)", price: 149, categories: ["courses-bundle"] },
  { title: "Dhruv Rathee All Courses", price: 1499, categories: ["courses-bundle"] },
  { title: "Youtube Course By Ankur Wariku", price: 249, categories: ["courses-bundle"] },
  { title: "Bang On Network Marketing", price: 249, categories: ["courses-bundle"] },
  { title: "A Breakthrough Personality By BSR", price: 249, categories: ["courses-bundle"] },
  { title: "Udemy Pro Courses", price: 399, categories: ["courses-bundle"] },
  { title: "Digital Marketing Course", price: 299, categories: ["courses-bundle"] },
  { title: "Mind Reading Course", price: 999, categories: ["courses-bundle"] },
  { title: "Spoken English Course", price: 999, categories: ["courses-bundle"] },
  { title: "Basic Computer Course", price: 999, categories: ["courses-bundle"] },
  { title: "Excel Mastery Course", price: 499, categories: ["courses-bundle"] },
  { title: "Html Course", price: 199, categories: ["courses-bundle"] },
  { title: "Css Course", price: 199, categories: ["courses-bundle"] },
  { title: "JavaScript Course", price: 199, categories: ["courses-bundle"] },
  { title: "100 Followers", price: 23, categories: ["instagram-smm"] },
  { title: "1000 Followers", price: 200, categories: ["instagram-smm"] },
  { title: "Full Monetization + 1k Subscribers", price: 8000, categories: ["youtube-smm"] },
  { title: "10k Views", price: 10, categories: ["instagram-smm"] },
  { title: "10k Likes", price: 20, categories: ["instagram-smm"] }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("role", "listitem");

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement("p");
  price.className = "card-price";
  price.textContent = `₹${product.price}`;
  card.appendChild(price);

  const messageBtn = document.createElement("button");
  messageBtn.className = "btn-message";
  messageBtn.textContent = "Message Now For More Details";
  messageBtn.addEventListener("click", () => {
    const text = encodeURIComponent(
      `Hello, I am interested in ordering: ${product.title} (₹${product.price}). Please share the details.`
    );
    window.open(`${waBaseUrl}${phoneNumber}?text=${text}`, "_blank");
  });

  card.appendChild(messageBtn);
  return card;
}

function renderProducts(category) {
  productGrid.innerHTML = "";
  const filtered = category === "all"
    ? products
    : products.filter(p => p.categories.includes(category));

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="text-center text-lg text-gray-400 col-span-full">No products available.</p>`;
    return;
  }

  filtered.forEach(p => productGrid.appendChild(createProductCard(p)));
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.category);
  });
});

renderProducts("all");

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields before sending.");
    return;
  }

  const text = encodeURIComponent(
    `Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  );
  window.open(`${waBaseUrl}${phoneNumber}?text=${text}`, "_blank");
  e.target.reset();
});
