function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    // Get
    this.getNome = function (){
        return this.nome
    }
    this.getNomeMaiusculo = function(){
        return this.nome.toUpperCase();
    }
    this.getNomeMinusculo = function(){
        return this.nome.toLowerCase();
    }

    this.getTelefoneCelular = function(){
        return this.telefoneCelular
    }

    this.getEmail = function(){
        return this.email
    }
    this.getEmailMaiusculo = function(){
        return this.email.toUpperCase();
    }
    this.getEmailMinusculo = function(){
        return this.email.toLowerCase();
    }

    this.getEndereco = function(){
        return this.endereco
    }

    // Set
    this.setNome = function(nome){
        this.nome = nome
    }
    this.setTelefoneCelular = function(telefoneCelular){
        this.telefoneCelular = telefoneCelular
    }
    this.setEmail = function(email){
        this.email = email
    }
    this.setEndereco = function(endereco){
        this.endereco = endereco
    }

    // Descrição formatada
    this.descricao = function(){
        return(`
            --------------------
            Informações do Cliente:
            ${this.getNome()}
            --------------------
            --------------------
            Telefone:
            DDD: ${this.getTelefoneCelular().getDdd()}
            Número: ${this.getTelefoneCelular().getNumero()}
            --------------------
            Endereço: 
            Rua: ${this.getEndereco().getRua()}
            Número: ${this.getEndereco().getNumero()}
            Cidade: ${this.getEndereco().getCidade()}
            Estado: ${this.getEndereco().getEstado()}
            --------------------`)
    }
}

function TelefoneCelular(ddd, numero){
    this.ddd = ddd
    this.numero = numero

    // Getters
    this.getDdd = function(){
        return this.ddd
    }
    this.getNumero = function(){
        return this.numero
    }

    // Setters
    this.setDdd = function(ddd){
        this.ddd = ddd
    }
    this.setNumero = function(numero){
        this.numero = numero
    }
}

function Endereco(estado, cidade, rua, numero){
    this.estado = estado
    this.cidade = cidade
    this.rua = rua
    this.numero = numero

    // Getters
    this.getEstado = function(){
        return this.estado
    }
    this.getEstadoMaiusculo = function(){
        return this.estado.toUpperCase();
    }
    this.getEstadoMinusculo = function(){
        return this.estado.toLowerCase();
    }

    this.getCidade = function(){
        return this.cidade
    }
    this.getCidadeMaiusculo = function(){
        return this.cidade.toUpperCase();
    }
    this.getCidadeMinusculo = function(){
        return this.cidade.toLowerCase();
    }

    this.getRua = function(){
        return this.rua
    }
    this.getRuaMaiusculo = function(){
        return this.rua.toUpperCase();
    }
    this.getRuaMinusculo = function(){
        return this.rua.toLowerCase();
    }

    this.getNumero = function(){
        return this.numero
    }

    // Setters
    this.setEstado = function(estado){
        this.estado = estado
    }
    this.setCidade = function(cidade){
        this.cidade = cidade
    }
    this.setRua = function(rua){
        this.rua = rua
    }
    this.setNumero = function(numero){
        this.numero = numero
    }
}

    // Exemplos de clientes
    telefone1 = new TelefoneCelular('91', '9886047144')
    endereco1 = new Endereco('PA ', 'Belém', 'Av. Coqueiro', '42')
    cliente1 =  new Cliente('Gerson da Penha', telefone1, 'gerson.neto@email.com', endereco1)

    telefone2 = new TelefoneCelular('35', '973384077')
    endereco2 = new Endereco('MG', 'Pouso Alegre', 'São João', '283')
    cliente2 = new Cliente('Mateus Borner Matos', telefone2, 'mateus.matos@geradornv.com.br', endereco2)

    telefone3 = new TelefoneCelular('73', '975228686')
    endereco3 = new Endereco('BA', 'Salvador', 'Nordeste', '92')
    cliente3 =  new Cliente('Lina Diniz Salles', telefone3, 'lina.salles@geradornv.com.br', endereco3)

    telefone4 = new TelefoneCelular('85', '986253478')
    endereco4 = new Endereco('CE', 'Fortaleza', 'Antônio Bezerra', '983')
    cliente4 = new Cliente('Selma Ramos Meyer', telefone4, 'selma.meyer@geradornv.com.br', endereco4)

    telefone5 = new TelefoneCelular('63', '979575120')
    endereco5 = new Endereco('TO', 'Gurupi', 'Parque Industrial', '99')
    cliente5 = new Cliente('Jorge Alves Fontes', telefone5, 'jorge.fontes@geradornv.com.br', endereco5)

    telefone6 = new TelefoneCelular('11', '9824242554')
    endereco6 = new Endereco('SP ', 'São José dos Campos', 'Av. Python', '42')
    cliente6 =  new Cliente('Fernando Masanori', telefone6, 'masanori.fernando@email.com', endereco6)
    
    telefone7 = new TelefoneCelular('47', '988340445')
    endereco7 = new Endereco('SC ', 'Concórdia', 'São Cristóvão', '42')
    cliente7 =  new Cliente('Humberto Machado Carmanin', telefone7, 'humberto.carmanin@geradornv.com.br', endereco7)

    telefone8 = new TelefoneCelular('12', '9886047102')
    endereco8 = new Endereco('SP ', 'São José dos Campos', 'Av. Java', '33')
    cliente8 =  new Cliente('Giuliano Bertoti', telefone8, 'bertoti@email.com', endereco8)

    telefone9 = new TelefoneCelular('11', '975002140')
    endereco9 = new Endereco('SP', 'São José dos Campos', 'Av. Flask', '111')
    cliente9 = new Cliente('Jean Carlos', telefone9, 'carlos.jean@email.com', endereco9)

    telefone10 = new TelefoneCelular('79', '976111985')
    endereco10 = new Endereco('SE ', 'Itabaiana', 'Marianga', '90')
    cliente10 = new Cliente('Márcio Lacerda Queiroz', telefone10, 'marcio.queiroz@geradornv.com.br', endereco10)
    
    telefone11 = new TelefoneCelular('55', ' 991086131')
    endereco11 = new Endereco('RS ', 'Lajeado', 'Morro 25', '52')
    cliente11 =  new Cliente('Pablo Mendonça da Silva', telefone11, 'pablo.silva@geradornv.com.br', endereco11)

    telefone12 = new TelefoneCelular('61', ' 988124081')
    endereco12 = new Endereco('DF', 'Brasília', 'Setor Habitacional Taquari (Lago Norte)', '2')
    cliente12 = new Cliente('Kamila Sarmento Cunha', telefone12, 'kamila.cunha@geradornv.com.br', endereco12)

    telefone13 = new TelefoneCelular('14', '988524180')
    endereco13 = new Endereco('SP', 'Jacareí', 'Centro', '130')
    cliente13 =  new Cliente('Antônia Campelo Vieira', telefone13, 'antonia.vieira@geradornv.com.br', endereco13)

    telefone14 = new TelefoneCelular('85', '986253478')
    endereco14 = new Endereco('MG', 'Governador Valadares', 'Penha', '790')
    cliente14 = new Cliente('Bryan Assis Baptista', telefone14, 'bryan.baptista@geradornv.com.br', endereco14)

    telefone15 = new TelefoneCelular('79', '971823984')
    endereco15 = new Endereco('SE', 'Aracaju', 'Suíssa', '40')
    cliente15 = new Cliente('Flavia Figueiro Amorin', telefone15, 'flavia.amorin@geradornv.com.br', endereco15)


    clientes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente13, cliente14, cliente15]

    function ordenaClientes(clientes){
        clientes.sort(function (a, b) {
            return a.getNome().localeCompare(b.getNome()); 
        })
    }

    ordenaClientes(clientes)

    // \Ordena os clientes por ordem alfabética
    for(i = 0; i < clientes.length; i++){
        console.log(clientes[i].descricao())
    }