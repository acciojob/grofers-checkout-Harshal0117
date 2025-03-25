document.addEventListener("DOMContentLoaded", function () {
  function calculateTotal() {
    let prices = document.querySelectorAll(".prices");
    let total = 0;
    
    prices.forEach(price => {
      total += parseFloat(price.textContent);
    });
    
    let table = document.querySelector("table");
    let totalRow = document.createElement("tr");
    let totalCell = document.createElement("td");
    
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: $${total.toFixed(2)}`;
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  }
  
  calculateTotal();
});

