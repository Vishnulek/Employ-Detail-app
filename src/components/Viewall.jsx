import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [employData, changeEmployData] = useState(
        [
            { "sl.No": 1, "name": "Lekshmi", "code": 9745, "salary": 10000, "age": 30 },
            { "sl.No": 2, "name": "Devi", "code": 2675, "salary": 19000, "age": 40 },
            { "sl.No": 3, "name": "Adarsh", "code": 7498, "salary": 20000, "age": 28 },
            { "sl.No": 4, "name": "Abijith", "code": 5477, "salary": 30000, "age": 35 },
            { "sl.No": 5, "name": "Sunoj", "code": 1706, "salary": 40000, "age": 33 },
            { "sl.No": 6, "name": "Hema", "code": 7920, "salary": 50000, "age": 38 },
            { "sl.No": 7, "name": "Devika", "code": 7948, "salary": 60000, "age": 40 },
            { "sl.No": 8, "name": "Govind", "code": 6071, "salary": 70000, "age": 39 },
            { "sl.No": 9, "name": "Akhilesh", "code": 8562, "salary": 80000, "age": 28 },
            { "sl.No": 10, "name": "Abinandu", "code": 7364, "salary": 90000, "age": 29 },
            { "sl.No": 11, "name": " Jayasree", "code": 3490, "salary": 21000, "age": 31 },
            { "sl.No": 12, "name": "Krishna", "code": 8213, "salary": 22000, "age": 32 },
            { "sl.No": 13, "name": "Ravi", "code": 8982, "salary": 23000, "age": 34 },
            { "sl.No": 14, "name": "Janaki", "code": 2102, "salary": 28000, "age": 30 },
            { "sl.No": 15, "name": "Parvathy", "code": 7745, "salary": 19000, "age": 33 }

        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Code</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Age</th>

                                </tr>
                            </thead>
                            <tbody>
{employData.map(
    (value,index)=>{
return                                 <tr>
<th scope="row">{value.sl.No}</th>
<td>{value.name}</td>
<td>{value.code}</td>
<td>{value.salary}</td>
<td>{value.age}</td>

</tr>
    }
)}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall
