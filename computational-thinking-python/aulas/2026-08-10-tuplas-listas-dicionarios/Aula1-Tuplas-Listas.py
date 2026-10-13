"""
================================================================================
AULA 01 - Engenharia de Software / Computational Thinking with Python
Tema: Ementa, Tuplas e Listas
Prof. Dr. Francisco Elânio
================================================================================

RESUMO DA AULA
--------------

1. ESTRUTURAS DE DADOS (revisão)
   - Vetor (1D): elementos do mesmo tipo, acessados por índice.
       Ex: [1, 2, 3, 4, 5]
   - Matriz (2D): coleção de listas (linhas x colunas).
       Ex: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   - Estrutura tridimensional: lista de matrizes (camadas).
       Ex: [[[1,2,3],[4,5,6]], [[10,11,12],[13,14,15]]]

2. TUPLA (tuple)
   - Sequência IMUTÁVEL de comprimento fixo.
   - Definida entre parênteses: (1, 'dois', 3.0)
   - Elementos acessados por índice: tupla[0], tupla[1] ...
   - Se um elemento da tupla for mutável (ex: lista), esse elemento
     pode ser alterado "no local" (tupla[1].append(x)), mas não é
     possível trocar o objeto que ocupa aquele slot (tupla[2] = False
     lança TypeError).
   - Para "modificar" uma tupla: converte-se para list(), altera-se,
     e converte-se de volta com tuple().
   - Concatenação: (1,2) + (3,4) -> (1,2,3,4)
   - Repetição: ('foo','bar') * 2 -> ('foo','bar','foo','bar')
   - tuple('string') converte cada caractere em um elemento.
   - Método útil: .count(valor) e .index(valor)
   - Descompactação (unpacking): a, b, c = (1, 2, 3)
   - Troca de variáveis: a, b = b, a

3. LISTA (list)
   - Estrutura MUTÁVEL: elementos podem ser adicionados, removidos
     e alterados.
   - Definida entre colchetes: [1, 'dois', 3.0]
   - append(x): adiciona ao final
   - insert(i, x): insere na posição i
   - remove(x): remove a primeira ocorrência do valor x
   - extend(lista): concatena de forma mais eficiente que "+"
     (o "+" cria uma lista nova toda vez; extend() só acrescenta)
   - sort(): ordena a lista. Aceita key=funcao (ex: key=len)
   - list(gen): materializa um iterável/gerador (ex: range) em lista

4. LISTAS x TUPLAS

   | Listas                          | Tuplas                          |
   |----------------------------------|----------------------------------|
   | Mutável                          | Imutável                        |
   | Iteração mais lenta               | Iteração mais rápida            |
   | Consome mais memória              | Consome menos memória           |
   | Mais propensa a erros             | Operações mais seguras          |
   | Muitos métodos embutidos          | Poucos métodos embutidos        |
   | Boa p/ inserção/exclusão          | Boa p/ leitura (somente acesso) |

5. SLICE ("fatia") - seq[start:stop:step]
   - seq[1:5]  -> elementos do índice 1 até 4
   - seq[:5]   -> do início até o índice 4
   - seq[3:]   -> do índice 3 até o final
   - seq[-4:]  -> os 4 últimos elementos (índice negativo conta do fim)
   - seq[::2]  -> pula de 2 em 2
   - seq[::3]  -> pula de 3 em 3
================================================================================
"""


# ==============================================================================
# EXERCÍCIOS - TUPLAS
# ==============================================================================

def exercicios_tuplas():
    print("\n" + "=" * 60)
    print("EXERCÍCIOS - TUPLAS")
    print("=" * 60)

    # 1. Crie uma tupla chamada frutas com os seguintes elementos:
    #    'maçã', 'banana', 'laranja', 'uva'.
    frutas = ('maçã', 'banana', 'laranja', 'uva')
    print("\n1. Tupla frutas:", frutas)

    # 2. Acesse o segundo elemento da tupla frutas.
    segunda_fruta = frutas[1]
    print("2. Segundo elemento (índice 1):", segunda_fruta)

    # 3. Substitua o terceiro elemento da tupla frutas por 'manga' e
    #    armazene a tupla modificada em frutas_modificadas.
    frutas_modificadas = frutas[:2] + ('manga',) + frutas[3:]
    print("3. frutas_modificadas:", frutas_modificadas)

    # 4. Concatene frutas_modificadas com ('abacaxi', 'limão') e
    #    armazene em frutas_concatenadas.
    frutas_concatenadas = frutas_modificadas + ('abacaxi', 'limão')
    print("4. frutas_concatenadas:", frutas_concatenadas)

    # 5. Verifique se 'uva' está presente em frutas_concatenadas
    #    usando if/else.
    if 'uva' in frutas_concatenadas:
        print("5. A uva está presente na tupla.")
    else:
        print("5. A uva não está presente na tupla.")

    # 6. Descubra o índice do elemento 'banana' na tupla frutas_concatenadas.
    indice_banana = frutas_concatenadas.index('banana')
    print("6. Índice de 'banana':", indice_banana)

    # 7. Conte quantas vezes o elemento 'uva' aparece em frutas_concatenadas.
    contagem_uva = frutas_concatenadas.count('uva')
    print("7. Quantidade de 'uva':", contagem_uva)

    # 8. Crie uma tupla chamada numeros com os números de 1 a 5.
    numeros = (1, 2, 3, 4, 5)
    print("8. Tupla numeros:", numeros)

    # 9. Multiplique cada elemento de numeros por 2 e armazene em
    #    numeros_dobrados.
    numeros_dobrados = tuple(num * 2 for num in numeros)
    print("9. numeros_dobrados:", numeros_dobrados)

    # 10. Crie uma tupla vazia chamada vazia e verifique seu comprimento.
    vazia = ()
    print("10. Tupla vazia:", vazia, "| comprimento:", len(vazia))


# ==============================================================================
# EXERCÍCIOS - LISTAS
# ==============================================================================

def exercicios_listas():
    print("\n" + "=" * 60)
    print("EXERCÍCIOS - LISTAS")
    print("=" * 60)

    # 1. Crie uma lista com os números de 1 a 10 e imprima-a.
    lista = list(range(1, 11))
    print("\n1. Lista 1 a 10:", lista)

    # 2. Crie uma lista vazia e adicione os números pares de 1 a 10 a ela.
    pares = []
    for i in range(1, 11):
        if i % 2 == 0:
            pares.append(i)
    print("2. Números pares:", pares)

    # 3. Dada uma lista de números, encontre o maior elemento.
    numeros = [5, 12, 8, 3, 17, 10]
    maior = max(numeros)
    print("3. Lista:", numeros, "| Maior elemento:", maior)

    # 4. Dada uma lista de palavras, crie uma nova lista com todas
    #    as palavras em maiúsculas.
    palavras = ['python', 'é', 'incrível']
    maiusculas = [palavra.upper() for palavra in palavras]
    print("4. Palavras em maiúsculas:", maiusculas)

    # 5. Dada uma lista de números, calcule a soma de todos os elementos.
    numeros_soma = [2, 4, 6, 8, 10]
    soma = sum(numeros_soma)
    print("5. Lista:", numeros_soma, "| Soma:", soma)

    # 6. Dada uma lista de números, conte quantos números são maiores que 5.
    numeros_maiores = [3, 7, 10, 2, 8, 5]
    contagem = 0
    for num in numeros_maiores:
        if num > 5:
            contagem += 1
    print("6. Lista:", numeros_maiores, "| Quantidade > 5:", contagem)

    # 7. Dada uma lista de strings, ordene-a em ordem alfabética.
    palavras_ordenar = ['banana', 'maçã', 'abacaxi', 'laranja']
    palavras_ordenar.sort()
    print("7. Lista ordenada:", palavras_ordenar)

    # 8. Dada uma lista de números, remova os elementos repetidos.
    numeros_repetidos = [1, 2, 2, 3, 4, 4, 5]
    numeros_sem_repeticao = list(set(numeros_repetidos))
    print("8. Sem repetição (via set):", sorted(numeros_sem_repeticao))

    # 9. Dada uma lista de strings, encontre a palavra mais longa.
    palavras_longas = ['python', 'programação', 'linguagem', 'computador']
    mais_longa = max(palavras_longas, key=len)
    print("9. Palavra mais longa:", mais_longa)

    # 10. Dada uma lista de listas, concatene todas as sublistas em
    #     uma única lista.
    lista_de_listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    lista_concatenada = []
    for sublist in lista_de_listas:
        lista_concatenada.extend(sublist)
    print("10. Lista concatenada:", lista_concatenada)


if __name__ == "__main__":
    exercicios_tuplas()
    exercicios_listas()