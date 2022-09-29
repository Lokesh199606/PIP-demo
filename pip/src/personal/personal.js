import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainComponent from '../employees/employeeMainStyled';
import LeftHeader from '../employees/employeeStyled';
import "./personal.css";

const Personal = () => {
    const navigate = useNavigate();
    const selector = useSelector(state => state.personalData);
    const [formObj, setFormObj] = useState({ employeeId: '', employeeName: '', employeeAge: '', employeePlace: '' });

    useEffect(() => {
        setFormObj(selector);
    }, [selector]);

    const backHandler = () => {
        navigate("/employees");
    }

    return (
        <MainComponent>
            <div className="headerClass">
                <LeftHeader>
                    <span style={{float:"left"} }>Personal Information</span>
                    <button style={{width:'5rem', float:"right", marginTop:"-10px", marginRight:"1rem"}} onClick={backHandler}>Back</button>
                </LeftHeader>
            </div>
            <div className="mainContentDiv">
                <form className="formCss">
                    <label htmlFor="empId">Employee ID:</label><br />
                    <input type="text" id="empId" name="empId" value={formObj.employeeId} /><br />
                    <label htmlFor="empName">Employee Name:</label><br />
                    <input type="text" id="empName" name="empName" value={formObj.employeeName} /><br />
                    <label htmlFor="empAge">Employee Age:</label><br />
                    <input type="text" id="empAge" name="empAge" value={formObj.employeeAge} /><br />
                    <label htmlFor="empPlace">Employee Place:</label><br />
                    <input type="text" id="empPlace" name="empPlace" value={formObj.employeePlace} /><br />
                </form>
            </div>
        </MainComponent>
    )
}

export default Personal;