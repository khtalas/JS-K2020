/* global btn_1_1, btn_1_2, tablearea_1, btn_1_3, h_2, textarea, textdata, textAreaKeypresses, form_3 */

function app() {
    const title = 'Workshop 3: JavaScript Events';
    document.title = title;
    document.querySelector('header h1').innerHTML = title;

    btn_1_1.onclick = () => {
        const pvm = new Date();
        alert(`You clicked me! ${pvm.getDate()}.${pvm.getMonth() + 1}.${pvm.getFullYear()}`);
    };

    function showTable() {
        tablearea_1.innerHTML = `
<table class='w3-table w3-table-all'>
    <thead>
        <tr class='w3-red'>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>$320,800</td>
        </tr>
        <tr>
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>$170,750</td>
        </tr>
        <tr>
            <td>Ashton Cox</td>
            <td>Junior Technical Author</td>
            <td>$86,000</td>
        </tr>
        <tr>
            <td>Cedric Kelly</td>
            <td>Senior Javascript Developer</td>
            <td>$433,060</td>
        </tr>
        <tr>
            <td>Airi Satou</td>
            <td>Accountant</td>
            <td>$162,700</td>
        </tr>
    </tbody>
</table>
`;
    }

    btn_1_2.onclick = showTable;
    btn_1_3.onclick = () => {
        const persons = ["Nyssa P. Skinner", "593-4241 Lacus, St.", "Cape Verde",
            "Camilla F. Strickland", "391-2150 Ac Rd.", "Andorra",
            "Reagan U. Andrews", "P.O. Box 472, 2271 Mauris Ave", "Faroe Islands",
            "Kelsey D. Clark", "P.O. Box 866, 7793 Aliquet Ave", "Bulgaria"
        ];
        let tableHTML = `
<table class='w3-table w3-table-all'>
    <thead>
        <tr class='w3-red'>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
`;
        for (let i = 0; i < persons.length - 2; i += 3) {
            tableHTML += `
        <tr>
            <td>${persons[i]}</td>
            <td>${persons[i + 1]}</td>
            <td>${persons[i + 2]}</td>
        </tr>
`;
        }
        tableHTML += `
    </tbody>
</table>
`;
        tablearea_1.innerHTML = tableHTML;
    };

    h_2.onmouseover = () => console.log('Stepped over my a mouse!');
    h_2.onmouseleave = () => alert('Bye bye mouse!');

    textdata.onfocus = e => e.target.value = 'Please fill in the form with proper data.';
    let k = 0;
    textdata.onkeydown = () => {
        k++;
        textAreaKeypresses.innerHTML = k;
    };
    form_3.onsubmit = e => {
        e.preventDefault();
        if (textdata.value.trim().length > 0) {
            alert('There is data on the form');
        } else {
            alert('There is only whitespace on the form');
        }
    };
}

window.onload = app;