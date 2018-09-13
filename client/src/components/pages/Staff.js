import React, { Component } from 'react';
import executive from '../../images/Board/executive.jpg';
import ceo from '../../images/Board/ceo.jpeg';
import graphics from '../../images/Board/graphics.jpg';

import "../css/Landing.css";

class Staff extends Component {
    render() {
        return (
            <div>
                <h1 className="display-3">Meet Our Executive Directors</h1>
                <hr />
                <div className="row align-items-start about">
                    <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
                        <img className="executive" src={executive} height="200px;" alt="" />
                    </div>
                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <h2 className="display-4">Sister Cheri Crockett</h2><h2 className="text-muted">Director of Outreach, San Joaquin County</h2>
                        <p className="lead">Resident of Stanislaus County, for
                          10 years. She is dedicated to reaching the Homeless in San
                          Joaquin County &amp; surrounding communities with Clothing,
                          Grooming Kits, Bottled Water, Condoms &amp; Candy. Also, she has
                          been a member of Ethnic Collectible Club, for 10 years, which
                          closed their doors after 25 years. Although things came to an
                          end, she continues her passion to spread &amp; share God's LOVE!!
                          She praises God for his abundance of Blessings, one of which
                          is Love Changing The World, Inc. She is glad to be a new
                          member of the organization because she can serve God and that
                          provides the ability to reach the broader population, of
                          people in need! To God we give ALL the Glory &amp; Praise, in
              Jesus name, Amen! </p>
                    </div>
                </div>
                <hr />
                <div className="row align-items-start about">
                    <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
                        <img className="executive" src={ceo} height="200px;" alt="" />
                    </div>
                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <h2 className="display-4">Michelle Karbo</h2><h2 className="text-muted">Director of Outreach, Santa Clara County</h2>
                        <p className="lead" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.In in dui vitae urna accumsan lobortis eu ac nulla.Maecenas eget porta ante, vel mollis justo.Morbi metus nulla, ullamcorper vitae semper a, fermentum non ante.Phasellus id tincidunt odio.Interdum et malesuada fames ac ante ipsum primis in faucibus.In dignissim nibh eget cursus iaculis.In lacinia purus nec magna cursus venenatis.Vestibulum pretium velit erat, sit amet ultricies ante mattis non.Cras in tempus lorem.Phasellus ac nisl at mauris interdum tempor ac quis est.Praesent vestibulum, urna nec gravida rhoncus, elit purus fermentum nibh, ac elementum leo tellus vel erat.Nunc cursus lacus a ante finibus sodales non vitae ipsum.Sed id erat id metus egestas varius. </p>
                    </div>
                </div>
                <hr />
                <div className="row align-items-start about">
                    <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
                        <img className="executive" src={graphics} height="200px;" alt="" />
                    </div>
                    <div className="col col-lg-8 col-md-12 col-sm-12">
                        <h2 className="display-4">Ms. Aleesa Evans</h2><h2 className="text-muted">Director of Graphic Design</h2>
                        <p className="lead">Sister Aleesa Evans, grew up in the city of Merced. She has always had a passion to help others, which is why she is pursuing the nursing field. She graduated from Merced Community College, May 22, 2015, with her Associates degree in both Health Sciences and Social and Behavioral Sciences. One of her dreams is to be a huge asset to all communities and to be able to make a true difference. Though she is 23 years young, she has a strong desire to be a positive impact on others, which is why she agreed to join the Love Changing The World Family. This organization has been an honest inspiration and she has found her drive by being creative and assisting her very own God Mother with graphic designs. She is motivated to allow God to use her creatively and spiritually to reach all hearts and mind with LOVE.</p>
                    </div>
                </div>
                {/* <div className="row">
                    <img className="executive col" src={executive} width="200px;" alt="executive" />
                    <img className="executive col" src={treasurer} width="200px;" alt="treasurer" />
                    <img className="executive col" src={graphics} width="200px;" alt="graphics" />
                    <img className="executive col" src={ceo} width="200px;" alt="founder" />
                </div>
                <hr />
                <h1 className="display-3">Meet Our Advisory Board</h1>

                <div className="row">
                    <img className="executive col" src={executive} width="200px;" alt="executive" />
                    <img className="executive col" src={treasurer} width="200px;" alt="treasurer" />
                    <img className="executive col" src={graphics} width="200px;" alt="graphcis" />
                    <img className="executive col" src={ceo} width="200px;" alt="founder" />
                </div> */}
            </div>
        );
    }
}

export default Staff;
