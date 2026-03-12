# RI3 — Orientação a Objetos com JavaScript

**Disciplina:** Análise e Desenvolvimento de Sistemas  
**Professor:** Gerson  
**Instituição:** FATEC São José dos Campos  

---

## 📋 Sobre a atividade

As RIs são atividades propostas pelo professor com o objetivo de colocar em prática os conceitos ensinados em aula. Esta atividade faz parte do módulo de **JavaScript com Orientação a Objetos**.

## 🧩 Desafio proposto

Recriar o sistema de cadastro da RI2 utilizando a **sintaxe moderna de classes do JavaScript (ES6+)**, com atributos privados, e expandir o modelo adicionando uma classe `Empresa` que agrupa clientes e telefones. O método `detalhe()` exibe no console todas as informações da empresa e de seus clientes cadastrados.

As classes desenvolvidas foram:

- **Telefone** — armazena DDD e número
- **Endereco** — armazena estado, cidade, rua e número
- **Cliente** — compõe `Endereco` e uma coleção de `Telefone`, com CPF protegido
- **Empresa** — compõe `Endereco`, uma coleção de `Cliente` e uma de `Telefone`, com CNPJ protegido

## 🔄 Evolução em relação à RI2

| Aspecto | RI2 | RI3 |
|---|---|---|
| Sintaxe | Funções construtoras | Classes ES6 (`class`) |
| Encapsulamento | Sem campos privados | Campos privados com `#` |
| Coleções | Arrays | `Set` |
| Escopo | Apenas cliente | Cliente + Empresa |

## 🧠 Conceitos praticados

- Sintaxe moderna de **classes ES6** em JavaScript
- **Campos privados** com `#` para encapsulamento real de CPF e CNPJ
- **Getters** para acesso controlado a atributos privados
- **Composição de objetos** entre as quatro classes
- Uso de **`Set`** para coleções sem duplicatas
- Método `detalhe()` para exibir os dados hierárquicos no console
- Iteração com `forEach` em coleções `Set`

## 🚀 Como executar
```bash
# Clone o repositório
git clone https://github.com/GuilhermeMRosa/RI3.git

# Acesse a pasta
cd RI3

# Execute no terminal (Node.js necessário)
node index.js
```

---

> Desenvolvido como parte das atividades avaliativas do curso de ADS — FATEC São José dos Campos.
