var equation = [];

function sumUp(eq){
  var answer = eval(eq.join(''));
  console.log(answer);
}

$(document).ready(


  $('span').on('click', function(){
    var retVal = $(this).text();
    console.log(retVal);
    if ( retVal === 'C'){
      equation = []
    } else if (retVal === '='){
      sumUp(equation);
    } else {
    equation.push(retVal);
    }
    console.log(equation);
  })
);
