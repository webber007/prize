Number.prototype.toFixed = function( fractionDigits )  
{  
    return (parseInt(this * Math.pow( 10, fractionDigits  ) + 0.5)/Math.pow(10,fractionDigits)).toString();  
}  
