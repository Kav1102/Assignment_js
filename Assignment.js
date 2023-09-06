let technologies = [
{ language: "Python", framework: "django", version: "v1.2", year: 2013 },
{ language: "Java",framework: "Spring Boot",version: "v4.2",year: 2003 },
{ language: "Php", framework: "Laravel", version: "v6.2", year: 2005 },
{language: "JavaScript", framework: "Express Js", version: "v12.2",year: 2013},
{language: "TypeScript",framework: "Angular 9",version: "v10.2",year: 2013}
];

// q1 

let filtered= technologies.filter(t=>parseFloat(t.version.search(2))<=4.2);
console.log(filtered[0].language);
//q2
technologies.forEach(t=>{
    let words=t.framework.split("");
    words=words.map(w=>w.charAt(0).toUpperCase()+
    w.substring(0).toLowerCase());
    t.framework=words.join("");
});

//q3
let output=technologies.map((t,i)=>{
    return {
        id:i+1,
        title:`${t.framework} is ${t.language } framework invented in the year of ${t.year}`
    };
});
console.log (output);