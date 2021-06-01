const express = require("express");
const app = express();
app.use(express.json());

// Permissões
var cors = require('cors');
app.use(cors());

// Porta que eu estou ouvindo
app.listen(process.env.PORT || 3000);

capitais = [{"Nome":"Rio Branco","Estado":"Acre", "Sigla":"AC"},
            {"Nome":"Maceió","Estado":"Alagoas", "Sigla":"AL"},
            {"Nome":"Macapá","Estado":"Amapá", "Sigla":"AP"},
            {"Nome":"Manaus","Estado":"Amazonas", "Sigla":"AM"},
            {"Nome":"Salvador","Estado":"Bahia", "Sigla":"BA"}];

app.get('/capitais',
    function(req, res){
        // res.send(capitais);
        res.send(capitais.filter(String));
    }
);

app.get('/capitais/:id',
    function(req, res){
        const id = req.params.id - 1;
        const capital = capitais[id];

        if (!capital){
            res.send("capital não encontrada");
        } else {
            res.send(capital);
        }
    }
)

app.post('/capitais', 
    (req, res) => {
        console.log(req.body.capital);
        const capital = req.body.capital;
        capitais.push(capital);
        res.send("criar uma capital.")
    }
);

app.put('/capitais/:id',
    (req, res) => {
        const id = req.params.id - 1;
        const capital = req.body.capital;
        capitais[id] = capital;        
        res.send("capital atualizada com sucesso.")
    }
)

app.delete('/capitais/:id', 
    (req, res) => {
        const id = req.params.id - 1;
        delete capitais[id];

        res.send("capital removida com sucesso");
    }
);