class Cliente {
    #cpf
    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf() { return this.#cpf }

    nomeUpper() { return this.nome.toUpperCase() }
    nomeLower() { return this.nome.toLowerCase() }
}

class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    estadoUpper() { return this.estado.toUpperCase() }
    estadoLower() { return this.estado.toLowerCase() }

    cidadeUpper() { return this.cidade.toUpperCase() }
    cidadeLower() { return this.cidade.toLowerCase() }

    ruaUpper() { return this.rua.toUpperCase() }
    ruaLower() { return this.rua.toLowerCase() }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() { return this.#cnpj }

    razaoSocialUpper() { return this.razaoSocial.toUpperCase() }
    razaoSocialLower() { return this.razaoSocial.toLowerCase() }

    nomeFantasiaUpper() { return this.nomeFantasia.toUpperCase() }
    nomeFantasiaLower() { return this.nomeFantasia.toLowerCase() }

    detalhe() {
        console.log(`Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n-------------------`)

        this.clientes.forEach(c => {
            let telefones = ""
            c.telefones.forEach(t => telefones += `DDD: ${t.ddd}     Número: ${t.numero}\n`)

            console.log(`Nome: ${c.nome}
Estado: ${c.endereco.estado}     Cidade: ${c.endereco.cidade}     Rua: ${c.endereco.rua}
${telefones}`)
        })
    }
}

// Easter egg - 3
// "uma orquídea garça branca na língua das flores, simboliza a frase... “meus pensamentos irão te seguir em teus sonhos.” " 




const enderecoEmpresa = new Endereco("SP", "São Paulo", "Avenida dos Desenhos", 2001)

const telEmpresa1 = new Telefone("11", "3333-2001")
const telEmpresa2 = new Telefone("11", "3333-2002")

const empresa = new Empresa(
    "Cartoon Network Entretenimento Ltda",
    "Cartoon Network",
    "98.765.432/0001-11",
    enderecoEmpresa
)

empresa.telefones.add(telEmpresa1)
empresa.telefones.add(telEmpresa2)

const endDexter = new Endereco("SC", "Blumenau", "Rua do Laboratório Secreto", 1)
const dexter = new Cliente("Dexter McPherson", "111.222.333-44", endDexter)
dexter.telefones.add(new Telefone("47", "99111-0001"))
dexter.telefones.add(new Telefone("47", "99111-0002"))

const endJohnny = new Endereco("RJ", "Rio de Janeiro", "Avenida dos Músculos", 100)
const johnny = new Cliente("Johnny Bravo", "222.333.444-55", endJohnny)
johnny.telefones.add(new Telefone("21", "99222-0001"))
johnny.telefones.add(new Telefone("21", "99222-0002"))

const endVilma = new Endereco("SP", "Townsville", "Rua das Superpoderosas", 3)
const vilma = new Cliente("Vilma", "333.444.555-66", endVilma)
vilma.telefones.add(new Telefone("11", "99333-0001"))
vilma.telefones.add(new Telefone("11", "99333-0002"))

const endEd = new Endereco("MG", "Belo Horizonte", "Beco do Jawbreaker", 20)
const ed = new Cliente("Ed", "444.555.666-77", endEd)
ed.telefones.add(new Telefone("31", "99444-0001"))
ed.telefones.add(new Telefone("31", "99444-0002"))

const endBen = new Endereco("GO", "Goiânia", "Rua do Omnitrix", 10)
const ben = new Cliente("Ben Tennyson", "555.666.777-88", endBen)
ben.telefones.add(new Telefone("62", "99555-0001"))
ben.telefones.add(new Telefone("62", "99555-0002"))

empresa.clientes.add(dexter)
empresa.clientes.add(johnny)
empresa.clientes.add(vilma)
empresa.clientes.add(ed)
empresa.clientes.add(ben)


empresa.detalhe()
