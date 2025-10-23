// === Boutons + et - ===
function setupQuantityButtons() {
  const addButtons = document.querySelectorAll('.fa-plus-circle');
  const minusButtons = document.querySelectorAll('.fa-minus-circle');

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Trouver la carte du produit correspondant
      const card = button.closest('.card');
      const quantity = card.querySelector('.quantity');

      let currentQuantity = parseInt(quantity.textContent);
      quantity.textContent = currentQuantity + 1;

      updateTotal();
    });
  });

  minusButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const quantity = card.querySelector('.quantity');

      let currentQuantity = parseInt(quantity.textContent);
      if (currentQuantity > 0) {
        quantity.textContent = currentQuantity - 1;
      }

      updateTotal();
    });
  });
}

// === Calcul du prix total ===
function updateTotal() {
  const unitPrices = document.querySelectorAll('.unit-price');
  const quantities = document.querySelectorAll('.quantity');
  const totalDisplay = document.querySelector('.total');

  let total = 0;
  unitPrices.forEach((price, i) => {
    const numericPrice = parseFloat(price.textContent);
    const qty = parseInt(quantities[i].textContent);
    total += numericPrice * qty;
  });

  totalDisplay.textContent = `${total} $`;
}

// === Suppression d’un produit ===
function setupTrashButtons() {
  const trashButtons = document.querySelectorAll('.fas.fa-trash-alt');

  trashButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.remove(); // Supprime la carte entière (y compris l’image)
      updateTotal();
    });
  });
}

// === Boutons "Like" (cœur) ===
function setupLikeButtons() {
  const likes = document.querySelectorAll('.fas.fa-heart');

  likes.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked'); // Ajoute/enlève la classe CSS
    });
  });
}

// === Initialisation de toutes les fonctions ===
function init() {
  setupQuantityButtons();
  setupTrashButtons();
  setupLikeButtons();
  updateTotal();
}

// === Lancer le script ===
init();
