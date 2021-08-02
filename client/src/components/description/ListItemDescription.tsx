import React from 'react';
import { FaCalendar, FaSuitcase } from 'react-icons/fa';
import {MdSchool } from 'react-icons/md';


interface ListItemDescriptionProps{
startDate?: string;
endDate?: string;
companyName?:string;
skills?:string;
schoolName?:string;
}


export const ListItemDescription: React.FC<ListItemDescriptionProps> = ({startDate, endDate, companyName, skills, schoolName}) => {
let data

    if(schoolName){
        data = <div className="text-icon-center"><MdSchool/>{schoolName}</div>
    }else if (companyName){
        data = <div className="text-icon-center"><FaSuitcase/>{companyName}</div>   
    }else{
        data = ""
    }

        return (
            <>
            <div style={{display: 'flex',gap:'5%'}}>
            <div className="text-icon-center"><FaCalendar/> {startDate}</div>
{data}
            
            </div>
            <div>{skills}</div>
            </>
        );
};