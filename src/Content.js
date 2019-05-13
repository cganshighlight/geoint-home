import React from 'react';
import Card from './Card';
import Tabs from './TabsAssets/Tabs';
import ScrollApp from './ScrollTop';
import $ from 'jquery';
import ScrollToTop from './ScrollTop';



export class Content extends React.Component{

    render(){
        
        return(
            
            <section id="main-content">
               <Tabs />
               <ScrollToTop />
            </section>
        );
    }
}