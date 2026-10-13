"""
================================================================================
AULA 02 - Computational Thinking with Python
Tema: Dicionários - Entrada, Saída, Condição e Repetição
Prof. Dr. Francisco Elânio
================================================================================

RESUMO DA AULA
--------------

1. O QUE É UM DICIONÁRIO
   - Estrutura chave-valor: {chave: valor, chave: valor}
   - Mutável e, a partir do Python 3.7+, preserva a ordem de inserção.
   - Diferente das listas (índice numérico), dicionários usam chaves
     exclusivas para acessar os valores.
   - Uso: mapear um identificador único a uma informação
     (ex: nome -> idade, produto -> preço).

2. CRIANDO E ACESSANDO
   - Criação: {} ou dict(nome="Notebook", preco=3500)
   - Acesso: produto["nome"]  -> lança KeyError se a chave não existir
   - Acesso seguro: produto.get("marca", "não informado")
       -> retorna o valor padrão em vez de quebrar o programa

3. ENTRADA COM input()
   - input() sempre retorna string; usar int()/float() para converter.
   - Dicionário pode começar vazio e ser preenchido campo a campo:
       cliente = {}
       cliente["nome"] = input("Nome: ")
       cliente["idade"] = int(input("Idade: "))

4. SAÍDA COM print() e f-strings
   - print(f"Nome: {cliente['nome']}")
   - Dica: usar aspas diferentes dentro/fora da f-string.

5. MODIFICANDO DICIONÁRIOS
   - Atualizar/adicionar: cliente["idade"] = 31  ou cliente.update({...})
   - Remover: del cliente["nome"]
   - Remover e capturar valor: tel = cliente.pop("tel")
       -> pop() evita KeyError e devolve o valor removido

6. CONDICIONAL (if) COM DICIONÁRIOS
   - Verificar existência de chave: if "email" in produto: ...
   - Evita erro de KeyError ao tentar acessar chave inexistente.
   - Pode combinar com if/elif/else para regras de negócio.

7. MÉTODOS ESSENCIAIS
   - .keys()   -> todas as chaves
   - .values() -> todos os valores
   - .items()  -> pares (chave, valor) em tuplas
   - Base para os laços de repetição (for).

8. REPETIÇÃO COM for
   - for chave in dicionario:            -> itera pelas CHAVES (equivale a .keys())
   - for chave, valor in dic.items():    -> itera por pares chave/valor
   - Pode combinar for + if para filtrar/classificar itens durante a iteração.
   - for i, (nome, notas) in enumerate(alunos.items()): -> mais de 2 variáveis
   - Dicionário aninhado + for duplo:
       for nome, notas in alunos.items():
           for prova, valor in notas.items():
               ...

9. REPETIÇÃO COM while
   - Útil quando não se sabe quantas vezes o laço vai rodar
     (ex: repetir até o usuário digitar "sair").
   - while opcao not in menu: ... -> valida entradas até serem válidas.

10. COMPREENSÃO DE DICIONÁRIO (dict comprehension)
    - {x: x**2 for x in range(1, 6)}
    - Com filtro: {n: v for n, v in notas.items() if v >= 6}

11. RESUMO for x while
    - for: percorrer todos os itens de forma sequencial e direta.
      Cuidado: evitar alterar a estrutura/chaves durante o loop.
    - while: repetir até uma condição de parada ser atendida
      (menus, validações). Cuidado com loops infinitos.
================================================================================
"""


# ==============================================================================
# EXERCÍCIO 01 - Aluno: nome + 3 notas -> média -> Aprovado/Reprovado
# ==============================================================================

def exercicio_01():
    print("\n" + "=" * 60)
    print("EXERCÍCIO 01 - Média do aluno")
    print("=" * 60)

    aluno = {}
    aluno["nome"] = input("Nome do aluno: ")
    aluno["nota1"] = float(input("Nota 1: "))
    aluno["nota2"] = float(input("Nota 2: "))
    aluno["nota3"] = float(input("Nota 3: "))

    media = (aluno["nota1"] + aluno["nota2"] + aluno["nota3"]) / 3
    aluno["media"] = media

    if media >= 6:
        situacao = "Aprovado"
    else:
        situacao = "Reprovado"

    print(f"\n{aluno['nome']} - Média: {media:.2f} - Situação: {situacao}")


# ==============================================================================
# EXERCÍCIO 02 - Conta: titular + saldo -> saque -> saldo insuficiente
# ==============================================================================

def exercicio_02():
    print("\n" + "=" * 60)
    print("EXERCÍCIO 02 - Saque em conta")
    print("=" * 60)

    conta = {"titular": "Ana Souza", "saldo": 1500.00}

    saque = float(input(
        f"\nSaldo atual de {conta['titular']}: R$ {conta['saldo']:.2f}\n"
        f"Valor do saque: "
    ))

    if saque > conta["saldo"]:
        print("Saldo insuficiente.")
    else:
        conta["saldo"] -= saque
        print(f"Saque realizado. Novo saldo: R$ {conta['saldo']:.2f}")


# ==============================================================================
# EXERCÍCIO 03 - Livro: paginas_lidas + total_paginas -> % lido -> classificação
# ==============================================================================

def exercicio_03():
    print("\n" + "=" * 60)
    print("EXERCÍCIO 03 - Progresso de leitura")
    print("=" * 60)

    livro = {"titulo": "Python Fluente", "paginas_lidas": 120, "total_paginas": 400}

    percentual = (livro["paginas_lidas"] / livro["total_paginas"]) * 100

    if percentual <= 30:
        classificacao = "Iniciando"
    elif percentual <= 70:
        classificacao = "Na metade"
    else:
        classificacao = "Quase terminando"

    print(f"\n{livro['titulo']}: {percentual:.1f}% lido - {classificacao}")


# ==============================================================================
# EXERCÍCIO 04 - Cliente: .get() para chave "desconto" com valor padrão
# ==============================================================================

def exercicio_04():
    print("\n" + "=" * 60)
    print("EXERCÍCIO 04 - Desconto do cliente")
    print("=" * 60)

    cliente = {"nome": "Carlos Lima", "compra": 250.00}

    desconto = cliente.get("desconto", 10)  # 10% padrão se não existir a chave
    valor_final = cliente["compra"] * (1 - desconto / 100)

    print(f"\n{cliente['nome']} - Desconto aplicado: {desconto}% "
          f"- Valor final: R$ {valor_final:.2f}")


# ==============================================================================
# MINI-PROJETO: Sistema de Estoque
# (Entrada com while + dicionário aninhado, condição, for + .items(), for duplo)
# ==============================================================================

def mini_projeto_estoque():
    print("\n" + "=" * 60)
    print("MINI-PROJETO - Sistema de Estoque")
    print("=" * 60)

    estoque = {}

    # PASSO 01 - Entrada: cadastra produtos até digitar 'sair'
    print("\nCadastro de produtos (digite 'sair' no nome para encerrar)")
    while True:
        nome = input("Nome do produto: ")
        if nome.lower() == "sair":
            break

        # PASSO 02 - Condição: verifica se o produto já existe no estoque
        if nome in estoque:
            print(f"O produto '{nome}' já está cadastrado. Atualizando dados.")

        preco = float(input(f"Preço de {nome}: "))
        qtd = int(input(f"Quantidade de {nome}: "))

        estoque[nome] = {"preco": preco, "qtd": qtd}

        if qtd < 5:
            print(f"Atenção: '{nome}' está com estoque baixo!")

    # PASSO 03 - Repetição For: relatório final usando .items()
    print("\n--- Relatório de Estoque ---")
    for produto, dados in estoque.items():
        marcador = " (estoque baixo)" if dados["qtd"] < 5 else ""
        print(f"{produto}: preço R$ {dados['preco']:.2f} | "
              f"quantidade: {dados['qtd']}{marcador}")

    # PASSO 04 - Loop Duplo: detalha preço, quantidade e valor total de cada item
    print("\n--- Detalhamento (for duplo) ---")
    for produto, dados in estoque.items():
        for campo, valor in dados.items():
            print(f"{produto} -> {campo}: {valor}")
        valor_total = dados["preco"] * dados["qtd"]
        print(f"{produto} -> valor_total: R$ {valor_total:.2f}\n")


if __name__ == "__main__":
    exercicio_01()
    exercicio_02()
    exercicio_03()
    exercicio_04()
    mini_projeto_estoque()