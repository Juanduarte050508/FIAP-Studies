"""
Exercicio 3
Como criar uma estrutura de condicao para trazer apenas valor de
total > 1000? Utilize a estrutura de repeticao e condicao.
"""

import pandas as pd
import matplotlib.pyplot as plt

# ---------- 1. Criar o DataFrame ----------
df = pd.DataFrame({
    "pedido":    [1001, 1002, 1003, 1004, 1005, 1006],
    "produto":   ["Notebook", "Mouse", "Monitor",
                  "Teclado", "Notebook", "Webcam"],
    "categoria": ["Informatica", "Acessorio",
                  "Informatica", "Acessorio",
                  "Informatica", "Acessorio"],
    "regiao":    ["SP", "RJ", "SP", "MG", "RJ", "SP"],
    "preco":     [4200.0, 89.9, 1350.0,
                  210.0, 3990.0, 149.9],
    "qtd":       [2, 10, 3, 5, 1, 4],
})

# Coluna "total" = preco * qtd
total = []
for i in range(len(df)):
    total.append(float(df["preco"][i] * df["qtd"][i]))
df["total"] = total

# ---------- 2. Repeticao + condicao: filtrar total > 1000 ----------
pedidos_acima = []
produtos_acima = []
totais_acima = []

for i in range(len(df)):
    if df["total"][i] > 1000:
        pedidos_acima.append(df["pedido"][i])
        produtos_acima.append(df["produto"][i])
        totais_acima.append(df["total"][i])

# Conferir o resultado da filtragem
print("Pedidos com total > 1000:")
for p, prod, t in zip(pedidos_acima, produtos_acima, totais_acima):
    print(f"  {p} - {prod} - R$ {t:.2f}")

# ---------- 3. Grafico com matplotlib ----------
plt.figure(figsize=(8, 5))
plt.bar(produtos_acima, totais_acima, color="steelblue")
plt.xlabel("Produto")
plt.ylabel("Total (R$)")
plt.title("Pedidos com total > R$ 1000")
plt.tight_layout()
plt.show()

#Ex.7 
filtro = df["Total"] > 1000
acima = df[filtro]
print (acima)