import React from "react";
import PersonalAction from "../actions/personalAction";
import LeftHeader from "./employeeStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

const TableComponent = ({ columns = null, tData = null, headerLabel = "" }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getCaps = (head, field) => {
        if (head) {
            return head.toUpperCase();
        }
        return field.toUpperCase();
    }

    const selectedHandler = (event, row, index) => {
        //console.log(event.target);
        dispatch(PersonalAction(row));
        navigate("/personal");
    }

    return (
        <>
            <div className="headerClass">
                <LeftHeader>
                    <span>{headerLabel}</span>
                </LeftHeader>
            </div>
            <div className="mainContent">
                <table>
                    <thead style={{ backgroundColor: "#fff" }}>
                        <tr>
                            {columns && columns.map((head, index) => {
                                return (<th key={index}>{getCaps(head.header, head.field)}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tData && tData.map((row, index1) => {
                            return (<tr key={index1}>
                                {columns.map((col, index2) => {
                                    return (
                                        <td key={index2} onClick={(e) => selectedHandler(e, row, index1)}>{row[col.field]}</td>
                                    )
                                })}
                            </tr>)
                        })}
                    </tbody>
                </table>
                {tData ? null : <p> No data to display </p>}
            </div>
        </>
    )
}

export default TableComponent;