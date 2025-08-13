const nome = "Daniel"
let idade = 34
let cidade = "Fortaleza"
let profissao = "Engenheiro"
let anoAtual = 2025
let anoNascimento = anoAtual - idade
let salario = 6000
let bonus = 1000 
let mes = salario + bonus
let ano = mes * 12
let anoTotal = ano * 2


alert( ` ========= RELATÓRIO DO USUÁRIO =========
Nome: ${nome}
Idade: ${idade}
Ano de nascimento:${anoNascimento}
Cidade: ${cidade}
Profissão: ${profissao}

Salário base: U$${salario}
Bônus: U$${bonus}
Total mensal: U$${mes}
Total ano: U$${ano}
Total anual (salário dobrado): U$${anoTotal}
========================================= 
` )