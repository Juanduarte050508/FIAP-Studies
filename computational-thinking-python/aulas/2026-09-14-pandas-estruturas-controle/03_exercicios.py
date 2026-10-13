"""5 exercicios da Aula 6. Resolva em '# SEU CODIGO'; gabarito comentado embaixo de cada um."""

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
vendas["total"] = vendas["preco"] * vendas["qtd"]

# EX1 - CONDICAO: a) informatica com qtd>1  b) coluna "canal" (np.where: qtd>=5 "Atacado" senao "Varejo")
# c) coluna "imposto" (np.select: 12% >=5000, 8% >=1000, senao 5%)  d) .loc: frete=0 se SP, senao 49.90
# SEU CODIGO


# GABARITO
# print(vendas[(vendas["categoria"]=="Informatica") & (vendas["qtd"]>1)])
# vendas["canal"] = np.where(vendas["qtd"]>=5, "Atacado", "Varejo")
# vendas["imposto"] = np.select([vendas["total"]>=5000, vendas["total"]>=1000], [0.12,0.08], default=0.05)
# vendas["frete"] = 49.90
# vendas.loc[vendas["regiao"]=="SP","frete"] = 0.0


# EX2 - REPETICAO: a) itertuples imprimindo "1001 - Notebook - R$ 8400.00"
# b) for + lista de 3 pedidos novos + pd.concat  c) faturamento total: for vs .sum()  d) cronometrar os dois
# SEU CODIGO


# GABARITO
# for l in vendas.itertuples(): print(f"{l.pedido} - {l.produto} - R$ {l.total:.2f}")
# novos = pd.DataFrame([{"produto":"Fone","preco":199.9,"qtd":3}])
# vendas_exp = pd.concat([vendas, novos], ignore_index=True)
# fat_for = 0
# for t in vendas["total"]: fat_for += t
# print(fat_for == vendas["total"].sum())
# import time
# t0=time.perf_counter(); [x for x in vendas["total"]]; t_for=time.perf_counter()-t0
# t0=time.perf_counter(); vendas["total"].sum(); t_vet=time.perf_counter()-t0


# EX3 - CONDICAO+REPETICAO: a) coluna "prioridade" (Alta: qtd>=5 e total>1000; Media: qtd>=5; senao Baixa)
# b) for+groupby("categoria") imprimindo contagem de pedidos por grupo  c) for+groupby("regiao"): "BATEU" se total>4000
# d) refazer (a) com np.select e comparar com .equals()
# SEU CODIGO


# GABARITO
# prio = []
# for l in vendas.itertuples():
#     if l.qtd>=5 and l.total>1000: prio.append("Alta")
#     elif l.qtd>=5: prio.append("Media")
#     else: prio.append("Baixa")
# vendas["prioridade"] = prio
# for cat, g in vendas.groupby("categoria"): print(cat, len(g))
# for reg, g in vendas.groupby("regiao"): print(reg, "BATEU" if g["total"].sum()>4000 else "NAO BATEU")
# prio2 = np.select([(vendas["qtd"]>=5)&(vendas["total"]>1000), vendas["qtd"]>=5], ["Alta","Media"], default="Baixa")
# print(vendas["prioridade"].equals(pd.Series(prio2)))


# EX4 - FUNCOES: a) def faixa_fidelidade(total) -> Diamante/Ouro/Prata, aplicar com .apply
# b) def taxa_frete(linha) -> 0.0 se SP senao 25.0, aplicar com .apply(axis=1)
# c) 3 funcoes de DataFrame (somar_total, filtrar_categoria, ordenar_por_total) encadeadas com .pipe
# SEU CODIGO


# GABARITO
# def faixa_fidelidade(total):
#     if total>=5000: return "Diamante"
#     elif total>=1000: return "Ouro"
#     return "Prata"
# vendas["fidelidade"] = vendas["total"].apply(faixa_fidelidade)
# def taxa_frete(l): return 0.0 if l["regiao"]=="SP" else 25.0
# vendas["taxa_frete"] = vendas.apply(taxa_frete, axis=1)
# def somar_total(df): df=df.copy(); df["total"]=df["preco"]*df["qtd"]; return df
# def filtrar_categoria(df,c): return df[df["categoria"]==c]
# def ordenar_por_total(df): return df.sort_values("total", ascending=False)
# print(vendas.pipe(somar_total).pipe(filtrar_categoria,c="Informatica").pipe(ordenar_por_total))


# EX5 - DESAFIO: a) coluna "premium" (Informatica e total>2000)  b) for+itertuples+if: comissao 8%/3%
# c) mesma conta com def+apply(axis=1)  d) comparar (b) e (c) com np.allclose  e) refazer 100% com np.where
# SEU CODIGO


# GABARITO
# vendas["premium"] = (vendas["categoria"]=="Informatica") & (vendas["total"]>2000)
# com_manual = []
# for l in vendas.itertuples():
#     com_manual.append(l.total*0.08 if l.premium else l.total*0.03)
# def calc_comissao(l): return l["total"]*0.08 if l["premium"] else l["total"]*0.03
# vendas["comissao_func"] = vendas.apply(calc_comissao, axis=1)
# print(np.allclose(com_manual, vendas["comissao_func"]))
# vendas["comissao_np"] = np.where(vendas["premium"], vendas["total"]*0.08, vendas["total"]*0.03)
# print(np.allclose(vendas["comissao_np"], vendas["comissao_func"]))
