fetch("https://randomuser.me/api/?results=5").then((data)=>{
    // console.log(data); json format
    return data.json(); // converted to object
}).then((objectData) => {
    console.log(objectData.results[0].name.first);
    let tableData = "";
    objectData.results.map((values)=>{ 
        tableData+=`<tr> 
        <td>${values.name.first}</td>
        <td>${values.location.city}</td>
        </tr>`;
    });
    document.getElementById("table_body").
    innerHTML=tableData;
})
