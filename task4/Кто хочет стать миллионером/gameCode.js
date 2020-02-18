var event, ok, mas=[], num=0;
var endgame=false;
alert("Добро пожаловать в игру Кто хочет стать миллионером!");
function game(obj,letter){
    if (endgame!=true){
        do {//Выводим второй вопрос
            ok = false;
            event = +prompt(obj[letter+"00"] + obj[letter+"1"]+obj[letter+"2"]+obj[letter+"3"]+obj[letter+"4"]+ '-1 - Выход из игры');
            if (event == -1) {
                endgame=true;
                break;
            }
            else {
                ok = isAnswer(obj[letter+"0"], event);
                mas.push(event);
                if(event==obj[letter+"correct"]){
                    alert("Ответ правильный! очков +10");
                    num+=10;       
                }
                else {alert('Ответ неверный! Правильный ответ: '+obj[letter+"correct"]); endgame=true;}
            }
        } while (!ok);
    }
}
game(question,"a");
game(question,"b");
game(question,"c");
game(question,"d");
if(num==40)
alert("Поздравлем, вы прошли игру! И набрали целых "+num+" очков!");
else
alert("Вы набрали: "+num+" очков!");
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;  
}

