const square=(a)=>{
    return a*a;
}
const circle=(r)=>{
    return 3.14*r*r;
}
const triangle=(b,h)=>{
    return 1/2*b*h
}
const Rectangle=(l,w)=>{
    return l*w;
}
const Fahrenheit=(f)=>{
    return [(f-32)*5]/9
}
const Celsius=(c)=>{
    return (c*1.8)+32
}
module.exports={square,circle,triangle,Rectangle,Fahrenheit,Celsius}