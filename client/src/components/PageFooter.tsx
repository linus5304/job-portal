import React from "react";
import Link from 'next/link'
import {Divider} from 'antd'
import { FaKeycdn, FaFacebook, FaTwitter, FaGooglePlusG, FaLinkedin } from "react-icons/fa";


interface PageFooterProps {}

export const PageFooter: React.FC<PageFooterProps> = ({}) => {
  return (
    <div className="container">  
    <div className="page-footer">
      <div>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a href="#">Contact</a></li>
          <li><a >About</a></li>
          <li><a>Terms and condition</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a><h2>Employer</h2></a></li>
          <li><a>Post jobs</a></li>
          <li><a>search resume</a></li>
          <li><a>sign in</a></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a><h2>Job seeker</h2> </a></li>
          <li><a>Find job</a></li>
          <li><a>create resume</a></li>
          <li><a>Sign in</a></li>
        </ul>
      </div>
      <div>
      <ul>
          <li style={{alignItems:'center'}}><FaFacebook style={{fontSize:20, marginRight:3}}/><a>facebook</a></li>
          <li style={{alignItems:'center'}}><FaTwitter style={{fontSize:20, marginRight:3}}/><a>twitter</a></li>
          <li style={{alignItems:'center'}}><FaGooglePlusG style={{fontSize:20, marginRight:3}}/><a>Google Plus</a></li>
          <li style={{alignItems:'center'}}><FaLinkedin style={{fontSize:20, marginRight:3}}/><a> LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <Divider style={{background:'#f7f7f7'}}/>

    <div style={{alignItems: 'center', display: 'flex'}}>
            <FaKeycdn style={{fontSize: 35, fontWeight:'bold', color:"#f1ecf9"}}/>
            <div style={{fontSize: 16,  color:"#f1ecf9"}}><Link href="/">goJobs.com</Link></div>
          </div>
    </div>
  );
};
