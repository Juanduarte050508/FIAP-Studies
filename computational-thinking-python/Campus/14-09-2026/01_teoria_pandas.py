"""Aula 6 - Estruturas de controle com Pandas (resumo direto ao ponto)."""

import pandas as pd
import numpy as np

vendas = pd.DataFrame({
    "pedido": [1001, 1002, 1003, 1004, 1005, 1006],
    "produto": ["Notebook", "Mouse", "Monitor", "Teclado", "Notebook", "Webcam"],
    "categoria": ["Informatica", "Acessorio", "Informatica", "Acessorio", "Informatica", "Acessorio"],
    "regiao": ["SP", "RJ", "SP", "MG", "RJ", "SP"],
    "preco": [4200.0, 89.9, 1350.0, 210.0, 3990.0, 149.9],
    "qtd": [2, 10, 3, 5, 1, 4],
})
vendas["total"] = vendas["preco"] * vendas["qtd"]  # Pandas opera na coluna inteira (vs. for linha a linha em Python puro)

# ---------- 1. CONDICAO ----------
# Comparação devolve uma Series de True/False (máscara), não um bool único.
mask = vendas["total"] > 1000
acima = vendas[mask]

# Combinar condições: & (and), | (or), ~ (not) -- SEMPRE com parênteses (não use and/or/not aqui)
grandes_sp = vendas[(vendas["total"] > 1000) & (vendas["regiao"] == "SP")]
vendas[vendas["regiao"].isin(["SP", "RJ"])]        # está na lista
vendas[vendas["preco"].between(100, 1500)]         # dentro do intervalo

# .loc: ler (linhas+colunas) e escrever (só nas linhas que batem a condição)
vendas.loc[vendas["total"] > 1000, ["produto", "total"]]
vendas.loc[vendas["total"] > 5000, "frete"] = 0.0
vendas.loc[vendas["total"] <= 5000, "frete"] = 49.90
# NUNCA: vendas[vendas['total']>5000]['frete']=0  -> chained assignment, pode não gravar

# np.where = if/else com 2 saídas
vendas["porte"] = np.where(vendas["total"] > 1000, "Grande", "Pequeno")

# np.select = if/elif/elif/else com N saídas
condicoes = [vendas["total"] >= 5000, vendas["total"] >= 1000, vendas["total"] >= 500]
respostas = ["Diamante", "Ouro", "Prata"]
vendas["faixa"] = np.select(condicoes, respostas, default="Bronze")

# ---------- 2. REPETICAO ----------
# 4 formas (da mais lenta pra mais rápida): iterrows > itertuples > apply > vetorizado
# ORDEM DE ESCOLHA: vetorização > apply > itertuples > iterrows

for indice, linha in vendas.iterrows():        # devolve (indice, Series) -- mais lento, tipos podem mudar (int vira float)
    pass
for linha in vendas.itertuples():              # devolve namedtuple -- mais rápido que iterrows
    pass

# Construir DataFrame com for: monte uma LISTA de dicts e crie o df 1x no final (nunca pd.concat dentro do for -> é O(n²))
dados_novos = [("Fone", 199.9, 3), ("Cadeira Gamer", 899.0, 1)]
linhas = [{"produto": p, "preco": pr, "qtd": q} for p, pr, q in dados_novos]
vendas_expandida = pd.concat([vendas, pd.DataFrame(linhas)], ignore_index=True)

# Cronômetro (1 milhão de linhas, mesma conta preco*qtd):
# iterrows 13,5s (5190x) | apply 3,71s (1425x) | itertuples 0,33s (127x) | vetorizado 0,0026s (ref.)
# import time; t0 = time.perf_counter(); ...; time.perf_counter()-t0

# apply: em Series recebe 1 valor; em DataFrame com axis=1 recebe a LINHA inteira
vendas["desconto"] = vendas["total"].apply(lambda x: x * 0.1 if x > 1000 else 0)
vendas["comissao"] = vendas.apply(
    lambda l: l["total"] * 0.05 if l["categoria"] == "Informatica" else l["total"] * 0.02, axis=1)
# use apply p/ regra com várias colunas/muitos ifs; prefira vetorização (np.where/select) p/ conta simples

# ---------- 3. CONDICAO DENTRO DE REPETICAO ----------
classes = []
for linha in vendas.itertuples():
    if linha.total >= 5000:
        classes.append("Diamante")
    elif linha.total >= 1000:
        classes.append("Ouro")
    else:
        classes.append("Prata")
vendas["classe"] = classes  # mesma regra também dá pra fazer com def+apply (nível 2) ou np.select (nível 3, mais rápido)

# for + groupby + if: laço percorre GRUPOS, não linhas
META = 5000
for regiao, grupo in vendas.groupby("regiao"):
    faturamento = grupo["total"].sum()
    status = "ACIMA DA META" if faturamento >= META else "abaixo da meta"
    print(f"{regiao}: R$ {faturamento:.2f} -> {status}")
vendas.groupby("regiao")["total"].sum()  # mesmo resumo, sem laço
vendas.groupby("categoria").agg(pedidos=("pedido", "count"), faturamento=("total", "sum"))

# ---------- 4. FUNCOES def + .pipe ----------
def classificar(total):
    """def nome(parametros): corpo com if/elif/else; return o que sai (None se faltar)."""
    if total >= 5000:
        return "Diamante"
    elif total >= 1000:
        return "Ouro"
    return "Prata"

vendas["classe2"] = vendas["total"].apply(classificar)  # função de 1 valor -> .apply na Series

def comissao(linha):
    taxa = 0.05 if linha["categoria"] == "Informatica" else 0.02
    return round(linha["total"] * taxa, 2)

vendas["comissao2"] = vendas.apply(comissao, axis=1)  # função de linha inteira -> .apply(axis=1)

# .pipe: encadeia funções que recebem/devolvem um DataFrame inteiro
def adicionar_total(df):
    df = df.copy()
    df["total"] = df["preco"] * df["qtd"]
    return df

def somente_acima(df, minimo=1000):
    return df[df["total"] >= minimo]

def ordenar(df):
    return df.sort_values("total", ascending=False)

resultado = vendas.pipe(adicionar_total).pipe(somente_acima, minimo=1000).pipe(ordenar)
print(resultado)
