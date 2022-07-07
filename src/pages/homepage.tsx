import React, {FC} from 'react';
import Layout from '../components/App/Layout'
import DemoForm from "../components/Bidgemmer/Homepage/DemoForm";
import Funfacts from "../components/Bidgemmer/Homepage/Funfacts";
import HowItWork from "../components/Bidgemmer/Homepage/HowItWork";
import KeyFeatures from "../components/Bidgemmer/Homepage/KeyFeatures";
import MainBanner from '../components/Bidgemmer/Homepage/MainBanner';
import Services from "../components/Bidgemmer/Homepage/Services";
import WhitePaper from "../components/Bidgemmer/Homepage/WhitePaper";


const HomePage: FC = (props) => {
    console.log('props',props)
    return (
        <Layout cpath = {props.location.pathname}>            
            <MainBanner/>
            <HowItWork/>
            <Funfacts/>
            <KeyFeatures/>
            <WhitePaper/>
            <Services/>
            <DemoForm/>            
        </Layout>
    );
};

export default HomePage;