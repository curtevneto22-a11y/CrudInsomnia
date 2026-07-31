import express from "express";

const PORT = 3000;
const host = 'localhost';

const app = express();
app.use(express.json());

const users = [
    {
    id: 1, nome: 'Estefano',
    email: 'estefano@gmail.com', 
    sexo: 'Masculino', 
    telefone: '19912345678'
    },

    {
    id: 2, nome: 'Nelly', 
    email: 'nelly@gmail.com', 
    sexo: 'Feminino', 
    telefone: '19912345679'
    }

];

app.get('/users', (req, res) => {
    res.status(200).json({result: users});
})

app.post('/users', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const sexo = req.body.sexo;
    const telefone = req.body.telefone;

    const newUser = { 
       
        id: users.length + 1, 
        nome: nome, 
        email: email, 
        sexo: sexo, 
        telefone: telefone
    }

    users.push(newUser);
    res.status(201).json({result: "Certo!"});
})

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => {u.id == id});
        
    if(index === -1){
        res.status(400).json({result: "Usuario nao encontrado!"});
    }
    
    users.splice (index, 1)

    return res.status(200).json(users);
})

app.listen(PORT, host, () => {
    console.log("Servidor rodando na porta: " + PORT);
})