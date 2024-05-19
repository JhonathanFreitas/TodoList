let tasks = [];
    function addItem() {
        let taskText = document.getElementById('novoItem').value;
        if (taskText === '') {
            alert("Você deve escrever alguma coisa!");
            return;
        }

        const task = {
            text: taskText,
            completed: false
        };
        tasks.push(task);
        document.getElementById('novoItem').value = '';
        atualizarTasks();
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        atualizarTasks();
    }

    function removerItem(index) {
        tasks.splice(index, 1);
        atualizarTasks();
    }

    function editItem(index) {
        const newText = prompt("Edite sua tarefa:", tasks[index].text);
        if (newText !== null && newText.trim() !== '') {
            tasks[index].text = newText;
        }
        atualizarTasks();
    }

    function atualizarTasks() {
        let listarItens = document.getElementById('listaItem');
        listarItens.innerHTML = '';
        tasks.forEach((task, index) => {
            let li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" onchange="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button class="editar" onclick="editItem(${index})">✏️</button>
                <button class="excluir" onclick="removerItem(${index})">x</button>
            `;
            listarItens.appendChild(li);
        });
    }