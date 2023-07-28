const caltemp=() => {
    const numberTemp = document.getElementById('temp').value; 
    
    const tempSelected = document.getElementById('temp_diff');
    
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value; 

    const celTofah = (cel) => {
        let fahrenheit =((cel*9/5)+32).toFixed(1);
        return fahrenheit;
    }

    const fahTocel = (fah) =>{
        let celsius=((fah-32)*5/9).toFixed(1);
        return celsius;
    } 
    let result; 

    if (valueTemp =='cel'){
          result=celTofah(numberTemp);
        document.getElementById('resultcontainer').innerHTML=`${result} &#176;Fahrenheit`;
    }else{
        result=fahTocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML= `${result} &#176;Celsius`;
    }
}