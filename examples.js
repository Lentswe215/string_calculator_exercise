let prisonBreak = '//[2][3][5][doc]\nRKelly2Mosquitos3PresidentofNorthKorea5IrritatingPeople'
console.log('Prison break evidence and criminals:\n', prisonBreak)
let evidence = prisonBreak.match(/^\/\/.*\n/g)[0] 
console.log('\nthe evidence is:\n', evidence)
​
console.log('greedy lookbehind and lookahead of evidence between square brackets (evidence)', evidence.match(/(?<=\[).*(?=\])/g))
​
console.log('\nlazy lookbehind and lookahead of evidence between square brackets (evidence)', evidence.match(/(?<=\[).*?(?=\])/g))