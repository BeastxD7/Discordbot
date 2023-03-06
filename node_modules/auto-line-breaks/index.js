module.exports = function(text, lengthLine){
    var lines = []
    lines.push(text)
    var i = 0
    if (lengthLine <= 0) throw console.error('Length must NOT be lower than 1');
    while (text.length >= lengthLine * i+1) {
        if (lines[i].charAt(lengthLine-1) == ' '){
            lines.push(text.slice(lengthLine*i, lengthLine*i + lengthLine-1).trim())
        } else {
            if (lines[i].charAt(lengthLine) == ' '){
                lines.push(text.slice(lengthLine*i, lengthLine*i + lengthLine))
            } else {
                if (text.slice(lengthLine*i, lengthLine*i + lengthLine).length <= lengthLine){
                    lines.push(text.slice(lengthLine*i, lengthLine*i + lengthLine).trim())
                } else {
                    lines.push(text.slice(lengthLine*i, lengthLine*i + lengthLine).concat('-').trim())
                }
            }
        }
        i++
    }
    lines.shift()
    return lines.join('\n')
}