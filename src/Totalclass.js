import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import React, { Component } from 'react';
import Totalpie from './Totalpie.js';
import Totalgraph from './totalgraph.js';

class Totalclass extends Component {

    render() {
        return (
            <div className='responsivecontainer'>

                {/* red bar */}
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                    </g>
                </svg>

                {/* page title, subtitle */}
                <h1></h1>
                <h3 style={{ marginBottom: 0 }}>Total Reported Cases</h3>
                <a><font size="2">Last updated Wednesday, September 23 at 5:15pm. </font></a>

                <center>

                    {/* show graphs */}
                    <Grid container>
                        <Grid item xs><Totalpie /></Grid>
                        {isMobile ? (<Totalgraph />) : (<Grid item xs={7}><Totalgraph /></Grid>)}
                    </Grid>

                    {/* show texts */}
                    <BrowserView>
                        <div className="adjustabletext">
                            <Grid container spacing={5}>

                                {/* left */}
                                <Grid item xs alignItems={"left"}>
                                    <h4>Notable Dates</h4>
                                    <font size="4"><p style={{ textAlign: "left" }}>
                                        <li>August 3: Campus doors opened<br /></li>
                                        <li>August 8: Dorms open for move-in<br /></li>
                                        <li>August 24: First day of MWF classes<br /></li>
                                        <li>August 25: First day of TR classes<br /></li>
                                        <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                        <li>September 4: Opening of on-campus testing center<br /></li>
                                        <li>September 5-7: Labor Day weekend<br /></li>
                                        <li>September 9: Census Date for Texas Tech<br /></li>
                                        <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                        <li>September 12: First football game, played at home</li>
                                        <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                    </p></font>
                                </Grid>

                                {/* right */}
                                <Grid item xs>
                                    <h4>How are projections made?</h4>
                                    <p>
                                        <font size="4">
                                            As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                            For example, to create Monday's projection, we take the Fri-Mon case growth from a week before, and the Fri-Mon case growth from two weeks before.
                                            We see if the growth rate has increased or decreased, and by how much.
                                            Projections assume that growth rate trend will continue.
                                            Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                        </font>
                                    </p>
                                    <h4>What is logarithmic scale?</h4>
                                    <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                                </Grid>

                            </Grid>
                        </div>
                    </BrowserView>

                    <MobileView>
                        <div className="adjustabletextmobile">

                            {/* top */}
                            <h4>How are projections made?</h4>
                            <p>
                                <font size="4">
                                    As of Sept 19, projections are now made comparing week-over-week and day-by-day case growth, using only data from the two most recent weeks.
                                    For example, to create Monday's projection, we take the Fri-Mon case growth from a week ago, and the Fri-Mon case growth from two weeks ago.
                                    We see if the growth rate has increased or decreased, and by how much.
                                    Projections assume that growth rate trend will continue.
                                    Projections <b>do not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.
                                </font>
                            </p>

                            {/* middle */}
                            <h4>What is logarithmic scale?</h4>
                            <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                            {/* bottom */}
                            <h4>Notable Dates</h4>
                            <font size="4"><p style={{ textAlign: "left" }}>
                                <li>August 3: Campus doors opened<br /></li>
                                <li>August 8: Dorms open for move-in<br /></li>
                                <li>August 24: First day of MWF classes<br /></li>
                                <li>August 25: First day of TR classes<br /></li>
                                <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                <li>September 4: Opening of on-campus testing center<br /></li>
                                <li>September 5-7: Labor Day weekend<br /></li>
                                <li>September 9: Census Date for Texas Tech<br /></li>
                                <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                <li>September 12: First football game, played at home</li>
                                <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                            </p></font>
                        </div>
                    </MobileView>

                </center>
            </div>
        )
    }
}

export default Totalclass;