
        // estado da minha aplicação
        let numero = 0

        // alteradores de estado da aplicação
        function aumentar() {
            numero++; // Uso de operador de incremento, mais conciso
            mostrarNaTela();
        }

        function diminuir() {
            numero--; // Uso de operador de decremento, mais conciso
            mostrarNaTela();
        }

        // jogar o estado de aplicação na tela
        function mostrarNaTela() {
            const p = document.querySelector("#resultado"); // Selecionando pelo ID

            // --- AQUI ESTÁ A LÓGICA DAS CORES ---
            if (numero > 0) {
                p.style.color = "gray"; // Cinza para números positivos
            } else if (numero < 0) {
                p.style.color = "red"; // Vermelho para números negativos
            } else {
                p.style.color = "white"; // Branco para o zero (ou a cor que preferir)
            }
            // --- FIM DA LÓGICA DAS CORES ---

            p.innerText = numero; // Atualiza o texto com o número
        }

        // iniciar o contador com a cor correta (caso o valor inicial seja diferente de 0)
        mostrarNaTela();

