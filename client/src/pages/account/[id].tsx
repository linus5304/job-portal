import React from 'react';
import { CompanyAccount } from '../../components/account/CompanyAccount';
import { UserAccount } from '../../components/account/UserAccount';
import { useMeQuery } from './../../generated/graphql';
import { layout } from "../../utils/types";


interface AccountProps{

}


export const Account: React.FC<AccountProps> & layout = ({}) => {
    const {data} = useMeQuery()
    let displayData
    if(data?.me.user_type === "job seeker"){
        
          displayData =  <UserAccount/>
        
    }else if(data?.me.user_type === "company"){

        
            displayData = <CompanyAccount/>
                
    }
    return (<>{displayData}</>)
}
Account.value = "L2"

export default Account