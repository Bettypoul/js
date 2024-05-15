//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]

console.log('----district having Highest +ve case ');
a=covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(a[1]);

console.log('------district having Highest 1st dose vaccine');

b=covid_data.reduce((num1,num2)=>num1[5]>num2[5]?num1:num2)
console.log(b[1]);

console.log('---district having lowest death rate');
c=covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
console.log(c[1]);

console.log('------sort data with +ve case in descending order');
e=covid_data.sort((n1,n2)=>n2[2]-n1[2]).forEach(ele => {
    console.log(ele);
});
//console.log(e);

console.log('------is( there any )district with +ve cases > 15000');
f=covid_data.some(positive=>positive[2]>15000)
console.log(f?'yes':'no');

console.log('-----sort data with 1st dose vaccine ascending order');
g=covid_data.sort((n1,n2)=>n1[5]-n2[5]).forEach(ele=>console.log(ele))
// console.log(g);

console.log('--------Print Thrissur details**');
h=covid_data.map(ele=>ele)
console.log(h[6]);
//or
z=covid_data.filter(thr=>thr[1]=='Thrissur').forEach(thri=>console.log(thri))
//console.log(z);
//or
thri=covid_data.find(th=>th[1]=='Thrissur')
console.log(thri);


console.log('--------Print total number of positive cases');

i=covid_data.map(po=>po[2]).reduce((positive1,positive2)=>positive1+positive2)
console.log(i);


console.log('----Print total number of cured cases');
j=covid_data.map(cu=>cu[4]).reduce((cured1,cured2)=>cured1+cured2)
console.log(j);

console.log('-----Print curred cases in Idukki');
h=covid_data.filter(id=>id[1]=='Idukki').forEach(cured=>console.log(cured[4]))

