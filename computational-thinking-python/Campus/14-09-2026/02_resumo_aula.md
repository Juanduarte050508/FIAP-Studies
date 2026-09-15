# Aula 6 — Estruturas de controle com Pandas

Pandas roda `if`/`for`/`def` na **coluna inteira**, não linha a linha.

```python
vendas["total"] = vendas["preco"] * vendas["qtd"]   # 1 chamada, n linhas
```

## 1. Condição
- Comparação vira **Series de True/False** (máscara): `vendas[vendas["total"] > 1000]`
- Combine com `&` `|` `~` (não use `and/or/not`) e **sempre entre parênteses**
- `.isin([...])`, `.between(a, b)`
- `.loc[condição, "coluna"]` para ler ou escrever condicionalmente (nunca `df[cond]["col"] = x`)
- `np.where(cond, se_true, se_false)` → 2 saídas
- `np.select([conds], [valores], default=...)` → N saídas

## 2. Repetição
Ordem de preferência: **vetorização > apply > itertuples > iterrows**

| Forma | Retorna | Uso |
|---|---|---|
| `.iterrows()` | (índice, Series) | só para aprender |
| `.itertuples()` | namedtuple | quando o laço é inevitável |
| `.apply(f, axis=1)` | 1 linha por chamada | regra complexa |
| vetorizado | coluna inteira | sempre que possível |

- Nunca use `pd.concat` dentro de um `for` (é O(n²)); monte uma lista de dicts e crie o DataFrame uma vez
- Exemplo real: 1M linhas → iterrows 13,5s vs vetorizado 0,0026s (~5000x mais lento)
- `apply` em Series recebe 1 valor; `apply(axis=1)` recebe a linha inteira

## 3. Condição dentro de repetição
```python
for linha in vendas.itertuples():
    if linha.total >= 5000: ...
```
Mesma regra pode virar: `def` + `.apply()` (mais legível) ou `np.select` (mais rápido).

`for regiao, grupo in vendas.groupby("regiao")` percorre **grupos**, não linhas.

## 4. Funções `def` + `.pipe`
```python
def classificar(total):
    if total >= 5000: return "Diamante"
    elif total >= 1000: return "Ouro"
    return "Prata"

vendas["classe"] = vendas["total"].apply(classificar)      # 1 valor
vendas["comissao"] = vendas.apply(minha_func, axis=1)       # linha inteira
resultado = vendas.pipe(f1).pipe(f2, arg=x).pipe(f3)         # encadeia funções de DataFrame
```
