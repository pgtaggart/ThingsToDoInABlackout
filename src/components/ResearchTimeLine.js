import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import ChurchillSpeech from '../images/timeline/1940_ChurchillFirstSpeech.jpg';
import ClothesRationing from '../images/timeline/1941_ClothesRationing.jpg';
import Rationing  from '../images/timeline/1942_Rationing.jpg';
import SoapRationing  from '../images/timeline/1942_SoapRationing.jpg';
import BlackoutRelaxed from '../images/timeline/1944_BlackoutRelaxed.jpg';

const ResearchTimeLine = () => {

    const defaultTimelineBackground = 'rgb(140, 140, 140)';
    const defaultTextColor = '#fff';
    const defaultArrowStyle = '7px solid  rgb(140, 140, 140)';
    const defaultIconBackground = 'rgb(0, 0, 0)';
    const defaultIconForeground = '#fff';

    const commentTimelineBackground = 'rgb(130, 194, 117)';
    const commentTextColor = '#fff';
    const commentArrowStyle = '7px solid  rgb(130, 194, 117)';
    const commentIconBackground = 'rgb(130, 194, 117)';
    const commentIconForeground = '#fff';

    const fireTimelineBackground = 'rgb(255, 102, 102)';
    const fireTextColor = '#fff';
    const fireArrowStyle = '7px solid  rgb(255, 102, 102)';
    const fireIconBackground = 'rgb(255, 102, 102)';
    const fireIconForeground = '#fff';

    return (

        <>
        
        <div className="ResearchTimeLineHeader"><h1>LIFE ON THE HOMEFRONT</h1></div>
        <div className="ResearchTimeLineHeader"><h3>A snapshot into some of the crimes committed during WW2</h3></div>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1937"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-bullhorn'/>}>
                <h3 className="vertical-timeline-element-title">Air Raid Wardens’ Service</h3>
                <p>Set up in the anticipation of another war with widescale bombing campaigns. By the outbreak of WW2 there were over 1.5 million signed up to the ARP (Air Raid Precautions).</p>
                <p>Criminals would later on take advantage of the status of the Air Raid Precautions (ARP) service - many would sign up to the ARP to get the uniforms, in order to loot and steal more easily, 
                    under the cover of respectability provided by the uniform. Thieves would dress up in an ARP helmet and armband, and smash shop windows - if members of the public spotted them, 
                    they’d often help them load their car with the goods, assuming they were being removed for safekeeping!</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1938"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">The Schedule of Reserved Occupations</h3>
                <p>This exempts certain key skilled workers from conscription. The Schedule covers five million men in a vast range of jobs, including engineers, rail workers, dock workers, miners, 
                    farmers, agricultural workers, schoolteachers, and doctors - all of these would be vital to the war effort for obvious reasons. Rationing was instituted and Britons were later 
                    encouraged by the government to ‘Dig for Victory’ (i.e. grow your own). Before the war, Britain imported the majority of its food, and it was feared that a German blockade at 
                    sea would cause them to starve. If Britain was going to rely more on its own produce, it would need its farmers!</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="26th May 1939"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">The Military Training Act</h3>
                <p>The Military Training Act is passed in parliament which makes it compulsory for men aged between 20 and 22 to join the armed forces (excluding the aforementioned reserved occupations).</p>
                <p>During the war, it was possible doctors could be persuaded to forge medical exemptions for families who could afford to bribe them.<br /><br />
                <a href="https://issuu.com/bouncetheatre/docs/playscript_4_-_a_tonic" id="RadioPlay_4" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out more in our script 'A Tonic'</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="24th August 1939"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">The Emergency Powers (Defence) Act</h3>
                <p>The Emergency Powers (Defence) Act passes, giving the Government the power to create laws without going through Parliament, in the interest of the country's safety. New laws usually 
                   have to be voted on several times and at several stages by MPs in Parliament, and be scrutinised, debated and amended. The government likely felt that in such dangerous times they 
                   needed to be able to respond quickly regarding any national emergencies to defend the country, or instituting new laws to keep Britons safe, so having to go through weeks of work 
                   before new laws could be introduced could cost lives and valuable time.</p>
                   <p><a href="https://www.nationalarchives.gov.uk/education/resources/government-posters/" id="RadioPlay_4" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out more about how the government encouraged people to at home to help win the war.</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1st September 1939"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">Hitler invades Poland</h3>
                <p>On the same day, the evacuation of children, pregnant women and people with disabilities to ‘host areas’ begins. Approximately 1.5 million people move around the country in search 
                   of safety in the first wave of evacuation. In the Rhondda valley, 33,500 evacuees from London, Cardiff and Bristol found shelter in the homes of local people. The ‘Blackout’ officially begins.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Unfortunately, the blackouts were actually the perfect cover for crime.  From the petty to the more serious. The infamous “Blackout Ripper” murdered four women in a six-day-Blackout period. The Ripper was eventually caught. 
                    Gordon Cummings was an RAF serviceman with a clean record prior to this. Murderers also used the Blitz as great cover for hiding the bodies of their victims and staging the death as if they were caught in the blast.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="3rd September 1939"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">National Service (Armed Forces) Act</h3>
                <p>The National Service (Armed Forces) Act makes it compulsory for men aged between 18 and 41 to join the armed forces (again, excluding the aforementioned exempt workers). (BBC, 2019)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="3rd Sept 1939 – 10th May 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-hourglass'/>}>
                <h3 className="vertical-timeline-element-title">‘The Phoney War’</h3>
                <p>A period of eight months, in which very little of military importance takes place in Western Europe. Many evacuees drift home during this time, only to return to their host areas once the Blitz begins.</p>
                <p><a href="https://issuu.com/bouncetheatre/docs/playscript_1_-_big_smoke" id="RadioPlay_4" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out more in our script 'Big Smoke'</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="8th January 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-king'/>}>
                <h3 className="vertical-timeline-element-title">Food Rationing</h3>
                <p>Food Rationing was introduced in the UK. Limits were placed on how much meat, butter, cheese, sugar, and milk, amongst other items, any one person could have.
                    Introducing rationing created another opportunity for crime. As every person, man, woman, or child, received a ration book. Sometimes ration books were sent out twice by mistake to people and they were used, or people would use ration books belonging to people who had died. 
                    Sometimes ration coupons were stolen or reproduced en masse by organised criminals, or families might set up small printing operations in their homes to get by. Some turned to counterfeiting out of brazen opportunism, but others did so out of desperation.</p>
                    <p><a href="https://www.nationalarchives.gov.uk/education/resources/government-posters/" id="RadioPlay_4" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out more how the government used art for war messaging about rationing and other acts</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“They broke into the kitchen once. I was about…by this time I’d already gone into the RAF, but they broke into the kitchen and stole the rations, and eggs and milk – that kind of thing.”<br/><br />Harold, aged 95</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="10th May 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-king'/>}>
                <h3 className="vertical-timeline-element-title">Churchill becomes Prime Minister</h3>
                <p>Winston Churchill becomes Prime Minister, following Neville Chamberlain’s resignation. Churchill forms the Churchill War Ministry – a coalition of the Conservative, Labour, and Liberal Parties</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="13th May 1940 "
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Churchill's first speech as P.M.</h3>
                <p className="TimeLineImage"><img src={ChurchillSpeech} width="200" alt="Churchill's First Speech as Prime Minister"/></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“We used to hear about the black market. “Spivs”, we used to call them. Well, I didn’t use to call that that, but my gran did. She’d say “Oh, can’t get this stuff unless you go on the black market.” And it was quite a business actually. They could get you extra meat, extra eggs, things like that. For money. You had to pay them an exorbitant price. They were just local villans I suppose.” <br/> <br/>Peter, aged 85</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>The Black Market thrived during the war. With rationing impacting everyday life, anything could be traded at a price. It was commonplace to have a bit of dodgy dealing going on here and there.</p>
                <p><a href="https://issuu.com/bouncetheatre/docs/playscript_3_-_aida___alfie" id="RadioPlay_3" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out more in our script 'Aida and Alfie'</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: fireTimelineBackground, color: fireTextColor }}
                contentArrowStyle={{ borderRight: fireArrowStyle }}
                date="7th September - 2nd November 1940"
                iconStyle={{ background: fireIconBackground, color: fireIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">London is bombed in the Blitz</h3>
                <p>London is bombed in the Blitz every night during this period. 13,500 tons of high-explosive bombs dropped in 57 raids. Over 15,000 people are killed. 250,000 are made homeless. Important buildings such as St Paul's Cathedral, 
                    the House of Commons and Buckingham Palace are also bombed.</p>
                <p><a href="https://www.nationalarchives.gov.uk/education/resources/gordon-fords-story/" id="RadioPlay_4" target="_blank" rel="noopener noreferrer" style={{color: 'darkslateblue'}}>Find out what it was like to be an airman in WW2</a></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: fireTimelineBackground, color: fireTextColor }}
                contentArrowStyle={{ borderRight: fireArrowStyle }}
                date="14th November 1940"
                iconStyle={{ background: fireIconBackground, color: fireIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">Coventry bombed in the Blitz</h3>
                <p>Coventry bombed in the Blitz for the first time. In that one night, over 30,000 incendiary bombs were dropped, 554 people were killed, and 50,000 houses were destroyed. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“You saw planes fighting, and you saw these huge masses of planes coming over. I remember once we were on Canvey Island, there was this heavy drone, I think it was when they were going over to Coventry, 
                    or over that way. And there were masses and masses of planes, and we thought they were our lot. We thought they were going the wrong way and all of a sudden, you saw the swastikas because they were coming down quite low. Yes. 
                    I do remember that vividly. We were down in the shelter most of the time, but I did see a couple of planes having a scrap, because I remember seeing the flames going out…in the air.”<br /><br />Keith, aged 82</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: fireTimelineBackground, color: fireTextColor }}
                contentArrowStyle={{ borderRight: fireArrowStyle }}
                date="19th - 21st February 1941"
                iconStyle={{ background: fireIconBackground, color: fireIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">Swansea is hit by the Blitz</h3>
                <p>The port, docks, and nearby oil refinery are all targeted. 230 people are killed, 397 injured.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date="8th March 1941"
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Café de Paris, a well-known nightclub, often attended by celebrities, soldiers, and the upper classes, suffers a direct hit in the Blitz. Rescuers who attended the scene afterwards 
                    are shocked to find looters were among them, yanking brooches and rings from the bodies of the revellers.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>The Blitz was actually a great time for criminals. As previously mentioned, they would get creative and dress up as ARPs or wardens, to look part of the relief effort. However, 
                    they were able to scale up their operations and capitalise on the reduced strength of the police force – whose numbers were depleted during the war. 
                    The Blitz caused devastation but created an opportunity for looting on a mass scale.  From pinching rations from someone’s kitchen during an air raid (where residents would have been in the shelter), 
                    to hampering the rescue efforts of emergency services and stealing possessions directly from dead bodies in a bombsite; it was rife and by far the most common wartime crime during the Blitz. 
                    Looted goods would be traded on the black market to individuals and businesses in racketeering rings. The government were so worried about it they introduced the death penalty. 
                    However, it was never enforced, so the gains were worth the risks to those so inclined.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                    <p>“I do remember the guy that lived next door to my parents – he had a bit more money than most, and I suspect he was on some sort of game because he…we went in there at Christmas a few times and he had a bar, 
                        he had a little bar in his lounge. And he had little bottles of whiskey and rum and gin which weren’t on…top priority to the nation…in those days!”<br /><br />Bob, age 86</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: fireTimelineBackground, color: fireTextColor }}
                contentArrowStyle={{ borderRight: fireArrowStyle }}
                date="April - May 1941"
                iconStyle={{ background: fireIconBackground, color: fireIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">The Belfast Blitz</h3>
                <p>Four attacks in the period. On Easter Tuesday, approximately 900 people die, 1,500 are injured. Many houses are seriously damaged. 150,000 people made homeless.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="June 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Clothes rationing introduced in the UK</h3>
                <p className="TimeLineImage"><img src={ClothesRationing} width="200" alt="Clothes Rationing"/></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1st December 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-shopping-cart'/>}>
                <h3 className="vertical-timeline-element-title">Points based rationing introduced</h3>
                <p>“Points” rationing introduced for tinned goods, dried fruit, cereals, pulses, syrup, treacle, and biscuits.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="December 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">Women Conscripted</h3>
                <p>Women aged 19-30 are conscripted for war work, after labour shortages become apparent. Women are enlisted in the Women’s 
                    Auxiliary Air Force (WAAF), Auxiliary Territorial Service (ATS), and Women’s Royal Naval Service (WRENS).</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="7th February 1942 "
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">More Rationing</h3>
                <p className="TimeLineImage"><img src={Rationing} width="200" alt="Yet more rationing introduced"/></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="26th July 1942"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Soap Rationing Introduced</h3>
                <p className="TimeLineImage"><img src={SoapRationing} width="200" alt="Soap rationing introduced"/></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="November 1942"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-file'/>}>
                <h3 className="vertical-timeline-element-title">The Beveridge Report</h3>
                <p>The Beveridge Report, which would go on to form the basis of the 1945 Labour Party manifesto, is published arguing for a system of social insurance from ‘the cradle to the grave’. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date="1943"
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“By 1943, virtually every household item was either in short supply and had to be queued for, or was unobtainable.” (Charman, Imperial War Museum, Jan 2018)</p>
                <p>Although we often think of rationing in terms of food, like with the examples above, the black market also found its way into other areas of rationing. In 1943, five million clothing coupons were stolen in one go, and the government had to cancel the entire issue. The Board of Trade is forced to cancel the entire issue of five-coupon vouchers while reassuring the public that the number stolen represents less than 1% of all coupons in circulation (Roodhouse, 2013: 88)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="17th September 1944"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Blackout restrictions relaxed</h3>
                <p className="TimeLineImage"><img src={BlackoutRelaxed} width="200" alt="Blackout Restrictions eased"/></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>By 1945 more than 114,000 prosecutions for black market activities had taken place.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="7th May 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">Germany surrenders</h3>
                <p>The BBC announces the end of the War, VE Day declared as a national holiday the following day. People begin celebrating immediately in response.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="8th May 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-star'/>}>
                <h3 className="vertical-timeline-element-title">VE Day</h3>
                <p>VE Day (Victory in Europe Day). Churchill had gained assurances from the Ministry of Food that there were enough beer supplies in the capital and the 
                    Board of Trade announced that people could purchase red, white, and blue bunting without using ration coupons. Parades, thanksgiving services and 
                    street parties mark the occasion. (Imperial War Museum Staff, 2018)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="27th May 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-shopping-cart'/>}>
                <p>Barely three weeks after VE Day, cuts are made to the basic ration.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="12th July 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-user'/>}>
                <h3 className="vertical-timeline-element-title">Election Time</h3>
                <p>Labour win the General Election and Clement Atlee becomes the Prime Minister, leaving them power to implement post-war reform. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="24th October 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-star'/>}>
                <h3 className="vertical-timeline-element-title">The United Nations</h3>
                <p>The Charter of the United Nations is signed by the British Government – the charter aims to: 
                    “Save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind”. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“It’s a horrific thing that man should want to do so much injury, both mentally and physically, to another human being, irrespective of colour, creed, or religion.”<br/><br/>Keith, aged 83</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<i className='glyphicon glyphicon-asterisk'/>}/>
        </VerticalTimeline>

        </>
    )


}

export default ResearchTimeLine;