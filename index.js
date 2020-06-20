function missingWords(s, t) {
    let missing = []; //array que vai receber o resultado final
    let completed = s.split(' '); //uso do método split para fazer uma array de strings
    let answer = t.split(' ');
    
    for (let i = 0, x =0; i<completed.length; i ++){
        if (completed[i] !== answer[x]){
            missing.push(completed[i]);
        } //o método push coloca na variável missing os itens diferentes das variáveis answer e completed
        else {
            x++;
        }
        
        
    }
    return missing;
    

}
