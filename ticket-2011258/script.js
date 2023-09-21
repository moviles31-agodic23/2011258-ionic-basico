        const itemsList = document.getElementById("items");
        const ArticuloInput = document.getElementById("Articulo");
        const ValorInput = document.getElementById("Valor");
        const totalText = document.getElementById("total");
        let total = 0;

        function calcularTotal() {
            const name = ArticuloInput.value;
            const price = parseFloat(ValorInput.value);

            if (name && !isNaN(price)) {
                const item = document.createElement("li");
                item.className = "item";
                item.innerHTML = `<span>${name}</span><span>$${price.toFixed(2)}</span>`;
                itemsList.appendChild(item);

                total += price;
                totalText.textContent = `Total: $${total.toFixed(2)}`;

                ArticuloInput.value = "";
                ValorInput.value = "";
            }
        }


    



