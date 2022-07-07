import React, {FC} from 'react';
import Layout from '../components/App/Layout'
import DemoForm from "../components/Bidgemmer/Homepage/DemoForm";


const GetStarted: FC = (props) => {
    return (
        <Layout cpath = {props.location.pathname}>
            <DemoForm/>
        </Layout>
    );
};

export default GetStarted;