const load = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data => display(data));
  }
  load();
  const display = countries =>{
    const mydiv = document.getElementById('newAdd');
   countries.forEach(country=>{
     const div = document.createElement('div');
     div.classList.add('country')
    div.innerHTML=`
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountry('${country.name}')">Details</button>
    `
     mydiv.appendChild(div);
   })
  }
  const loadCountry = name =>{
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountry(data[0]));
  }
  const displayCountry = country =>{
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML=`
    <h2>${country.name}</h2>
    <p>${country.population}</p>
    <img width="300px" src="${country.flag}">
    `
  }
  