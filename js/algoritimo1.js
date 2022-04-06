var nome, n1, n2, n3, n4, media

nome = prompt("Informe o seu nome:")
n1 = Number.parseFloat(prompt("Informe a nota do primeiro bimestre:"))
n2 = Number.parseFloat(prompt("Informe a nota do segundo bimestre:"))
n3 = Number.parseFloat(prompt("Informe a nota do terceiro bimestre:"))
n4 = Number.parseFloat(prompt("Informe a nota do quarto bimestre:"))

media = (n1 + n2 + n3 + n4) / 4
if (media >= 0 && media <= 10) {
    if (media >= 7) {
        res = "Aprovado."
    } else {
        res = "Reprovado"
    }
    document.write(`Bem-vindo ${nome}, suas notas foram: 
<br> Nota 1: ${n1}
<br> Nota 2: ${n2}
<br> Nota 3: ${n3}
<br> Nota 4: ${n4}
<br> Sua média foi: ${media.toFixed(2)}
<br> Sua frequência foi: ${frequencia.toFixed(2)}
<br> Conclusão: ${res}`)

} else {
    res = "Insira notas apenas entre 0 e 10!!"
    document.write(res)
}