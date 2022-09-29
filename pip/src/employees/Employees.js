import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./employees.css";
import TableComponent from './TableComponent';
import MainComponent from './employeeMainStyled';


const Employees = (props) => {

    const [empData, setEmpData] = useState([]);

    useEffect(() => {
        axios
            .get("/db/employees.json")
            .then((res) => {
                setEmpData(res.data);
            })
            .catch((err) => console.log(err));

        console.log(empData);

    }, []);

    return (
        <MainComponent>
            {
                empData && empData.length > 0 && empData.map((item, index) => {

                    return "EMPLOYEES LIST" === item.headerLabel.toUpperCase() ?
                        (
                            <div key={index}>
                                <TableComponent
                                    columns={item.headers}
                                    tData={item.empData}
                                    headerLabel={item.headerLabel} />
                            </div>
                        ) : null

                })
            }
        </MainComponent>
    )
}

export default Employees;