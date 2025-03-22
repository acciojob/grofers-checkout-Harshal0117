const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all elements with class "price"
    const prices = document.querySelectorAll(".price");
    let total = 0;
    
    // Calculate the total sum
    prices.forEach(price => {
        total += parseFloat(price.textContent) || 0;
    });
    
    // Check if total row already exists, if so, remove it
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    
    // Create a new row for total price
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    totalRow.id = "totalRow";
    
    const totalCell = document.createElement("td");
    totalCell.colSpan = 2;
    totalCell.style.textAlign = "right";
    totalCell.textContent = `Total Price: Rs ${total}`;
    
    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
