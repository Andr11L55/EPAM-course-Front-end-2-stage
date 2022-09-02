const reg = document.querySelector('#sort-parameter-region'),
    lan = document.querySelector('#sort-parameter-language'),
    sor = document.querySelector('#regions-list'),
    tab = document.querySelector('#countries-table'),
    selection = document.querySelector('#regions-list'),
    form = document.querySelector('#sort-parameters-query')
    arrow = document.querySelector('#arrow')
    arrow_updown = document.querySelector('#arrow_updown')
    no_items = document.querySelector('#no-items')
    


const settings = {
    searchType: '',
    searchQuery: '',
    sorting: {
        column: '',
        type: ''
    }
}


const clearSelect = () => {
    const selectItem = document.querySelectorAll('.select-item');
    selectItem.forEach(el => el.remove());
}

const deleteTableRows = () => {
    document.querySelectorAll('.table-row').forEach(el => el.remove());
}


const insertOptionsIntoList = (data) => {
    data.forEach(el => selection.
        insertAdjacentHTML('beforeend', `<option class="select-item  value="${el}">${el}</option>`));
    form.reset()
}


const checkReg = () => {
     no_items.innerHTML = `No items, please choose search query`
    clearSelect();
    sor.removeAttribute('disabled');
    deleteTableRows();
    if(reg.checked) {
        console.log('regcheck')
        settings.searchType = 'Region'
        insertOptionsIntoList(externalService.getRegionsList())
    } else if(lan.checked) {
        console.log('lancheck');
        settings.searchType = 'Language'
        insertOptionsIntoList(externalService.getLanguagesList())
    }
}




const getRegionsData = (name) => {
    console.log(name)
    return externalService.getCountryListByRegion(name).map(el => el)
}

const getLanguagesData = (name) => {
    console.log(name)
    return externalService.getCountryListByLanguage(name).map(el => el)
}



const insertData = (data) => {
    deleteTableRows();
    console.log(data);
    data.forEach(el => {
        tab.insertAdjacentHTML('beforeend',`
            <tr class="table-row">
                <td>${el.name} </td>
                <td>${el.capital}</td>
                <td>${el.region}</td>
                <td>${Object.values(el.languages).join(', ')}</td>
                <td>${el.area}</td>
                <td><img src="${el.flagURL}"/></td>
            </tr>
        `)
    })
}


/*
EVENT LISTENER FOR COUNTRY COLUMN
    settings.sorting.coluimn = country
*/



/*
EVENT LISTENER FOR AREA COLUMN
    settings.sorting.coluimn = area
*/



/*
EVENT LISTENER FOR TYPE

switch(setting.sorting.type){
    case 'up': setting.sorting.type = 'down'; break;
    case 'down': setting.sorting.type = 'none'; break;
    case 'none': setting.sorting.type = 'up'; break;
}
*/
const checkSelectedValue = (e) => {
  no_items.remove()
  console.log(no_items)
    let table = document.getElementById('countries-table')
           table.innerHTML =`<tr>
              <th>Country Name <button id="arrow" onclick="sortTables(0)">&#8595;</button>
              </th>
              <th>Capital</th>
              <th>World region</th>
              <th>Languages</th>
              <th>Area<button id="arrow_updown" onclick="sortNumbers()">&#8597;</button></th>
              <th>Flag</th>
            </tr>`
    let selectedData = settings.searchType ==='Region'?getRegionsData(e.target.value):getLanguagesData(e.target.value);
    insertData(sortTable(selectedData))
}

function sortTables(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('countries-table');
    switching = true;
    dir = 'asc'; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];
        if (dir === 'asc') {
            arrow = document.querySelector('#arrow').innerHTML=`&#8593;`
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir === 'desc') {
            arrow = document.querySelector('#arrow').innerHTML=`&#8595;`
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
        
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;

        }
      }
    }
  }

  function sortNumbers() {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0, four = 4;
    table = document.getElementById('countries-table');
    switching = true;
    dir = 'asc'; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < rows.length - 1; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[four];
        y = rows[i + 1].getElementsByTagName('TD')[four];
        if (dir === 'asc') {
          arrow_updown = document.querySelector('#arrow_updown').innerHTML=`&#8593;`
          if (+x.innerHTML.toLowerCase() > +y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir === 'desc') {
          arrow_updown = document.querySelector('#arrow_updown').innerHTML=`&#8595;`
          if (+x.innerHTML.toLowerCase() < +y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }

const sortTable = (data) => {
    /*

// switch(setting.sorting.type){
//     case 'up': //sort by up
//     case 'down':  //sort by down
//     case 'none':  //sort by none
// }
*/
    return data;
}



