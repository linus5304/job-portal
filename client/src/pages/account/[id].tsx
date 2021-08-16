import React from 'react';
import { CompanyAccount } from '../../components/account/CompanyAccount';
import { UserAccount } from '../../components/account/UserAccount';
import { useMeQuery } from './../../generated/graphql';
import { layout } from "../../utils/types";
import { MainLayout } from "../../components/layouts/MainLayout";
import { withApollo } from "../../utils/withApollo";




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
    return (
        <MainLayout>
    {displayData}
    </MainLayout>
    )
}
Account.value = "L2"

export default withApollo({ssr: false}) (Account)