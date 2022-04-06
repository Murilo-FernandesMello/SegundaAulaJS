var nome, disciplina, nAulas, faltas, n1, n2, media, frequencia

window.alert("Escolha um deus e começe a rezar: Aprovado ou Reprovado?")
nome = prompt("Insira seu nome:")
disciplina = prompt("Insira a disciplina: ")
nAulas = prompt("Insira o número de horas: ")
faltas = prompt("Insira o número de faltas")
n1 = Number.parseFloat(prompt("Informe a primeira nota:"))
n2 = Number.parseFloat(prompt("Informe a segunda nota:"))
media = (n1 + n2) / 2
frequencia = (nAulas - faltas) / nAulas * 100

if (media >= 0 && media <= 10) {
    if (media >= 6 && frequencia >= 75) {
        res = "Aprovado."
    } else {
        res = "Reprovado"
    }

    document.write(`Aluno: ${nome}
<br> Disciplina: ${disciplina}
<br> Horas: ${nAulas}      
<br> Faltas: ${faltas} 
<br> Nota 1: ${n1}
<br> Nota 2: ${n2}
<br> Sua média foi: ${media.toFixed(2)}
<br> Sua frequencia foi: ${frequencia}
<br> Conclusão: ${res}`)

} else {
    res = "Insira notas apenas entre 0 e 10!!"
    document.write(res)
}