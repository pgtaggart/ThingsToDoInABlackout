import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const ResearchTimeLine = () => {

    const defaultTimelineBackground = 'rgb(140, 140, 140)';
    const defaultTextColor = '#fff';
    const defaultArrowStyle = '7px solid  rgb(140, 140, 140)';
    const defaultIconBackground = 'rgb(0, 0, 0)';
    const defaultIconForeground = '#fff';

    const commentTimelineBackground = 'rgba(130, 194, 117, 1)';
    const commentTextColor = '#fff';
    const commentArrowStyle = '7px solid  rgba(130, 194, 117, 1)';
    const commentIconBackground = 'rgba(130, 194, 117, 1)';
    const commentIconForeground = '#fff';

    return (

        <>
        
        <div className="ResearchTimeLineHeader"><h1>WW2 Timeline</h1></div>

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
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Criminals took advantage of the status of the Air Raid Precautions (ARP) service - many would sign up to the ARP to get the uniforms, in order to loot and steal more easily, under the cover 
                    of respectability conferred by the uniform. A standard plan for thieves was to dress up in an ARP helmet and armband, and smash shop windows - if members of the public spotted them, 
                    they’d often help them load their car with the goods, thinking they were being removed for safekeeping!</p>
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
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>As war began, any prisoner with less than three months left to serve was released.<br /> “The dapper gangster”, Billy Hill was one example and he immediately took advantage of “that big, wide, handsome and, oh, 
                    so profitable black market”. Early on, Hill’s gang staged a series of jewellery robberies; on one occasion they broke into Carringtons on Regent Street in London, making off with £6,000 worth of goods. 
                    Within weeks of rationing’s introduction, Hill was selling whiskey and sausage skins at £500 a barrel.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="10th May 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-king'/>}>
                <h3 className="vertical-timeline-element-title">Winston Churchill becomes Prime Minister</h3>
                <p>Winston Churchill becomes Prime Minister, following Neville Chamberlain’s resignation. Churchill forms the Churchill War Ministry – a coalition of the Conservative, Labour, and Liberal Parties</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="13th May 1940 "
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Churchill's first speech as Prime Minister</h3>
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>In 1940, one woman was caught using four ration books to get food for her family of three; her 15-year-old son had been sent a child’s book and an adult’s book; she’d used both for six months to get extra supplies.
                     She was fined £160 - £9,015.79 in today’s money! The woman claimed she thought the extra rations were because her son was a “big schoolboy”. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="26th May – 4th June 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">The Evacuation of Dunkirk</h3>
                <p>Northern France, code-named ‘Operation Dynamo’. British, French, and Belgian forces had become surrounded by German troops and were stranded in Dunkirk. Churchill described it as a “colossal military disaster”. 
                    A massive evacuation exercise was needed to rescue and return British troops. A wide variety of seacraft were requisitioned in the rescue, some being manned entirely by civilians due to a lack of personnel, 
                    and some were commandeered even without their owners’ knowledge. Churchill described the rescue as, “a miracle of deliverance”.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>A. W. Morgan told the BBC of how his family managed to get meat from a butcher in exchange for surplus eggs, while his mother exchanged his sweet coupons for sugar coupons with neighbours, so they’d have enough sugar to make jam. 
                    Former fireman Francis Goddard, meanwhile, recalled how his wife, who worked in a restaurant, would have access to steak, salmon, and other rationed food items. At the end of her shifts, she would wrap up a few items in tissue, 
                    and carry them home hidden in her knickers!</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="10th July – 31st October 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">The Battle of Britain</h3>
                <p>The Battle of Britain was an aerial bombardment of coastal strategic targets by Nazi Germany’s air force, the Luftwaffer.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="7th September - 2nd November 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">London is bombed in the Blitz</h3>
                <p>London is bombed in the Blitz every night during this period. 13,500 tons of high-explosive bombs dropped in 57 raids. Over 15,000 people are killed. 250,000 are made homeless. Important buildings such as St Paul's Cathedral, 
                    the House of Commons and Buckingham Palace are also bombed. The King and Queen often visited suffering areas.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: commentTimelineBackground, color: commentTextColor }}
                contentArrowStyle={{ borderRight: commentArrowStyle }}
                date=""
                iconStyle={{ background: commentIconBackground, color: commentIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>A gang led by one Wally Thompson, where they dressed up as ARP members and tried to steal a safe from a warehouse in the middle of an air raid. The Blitz was a golden period for criminals. “Air raids,” he remembered, “were the best ally London’s crooks ever had.”</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="19th September 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title"> Victory in Battle of Britain</h3>
                <p>Victory in Battle of Britain forced Hitler to postpone invasion plans.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="14th November 1940"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-warning'/>}>
                <h3 className="vertical-timeline-element-title">Coventry bombed in the Blitz</h3>
                <p>Coventry bombed in the Blitz for the first time. In that one night, over 30,000 incendiary bombs were dropped, 554 people were killed, and 50,000 houses were destroyed. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="January 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-eye-open'/>}>
                <p>A gardener is caught removing rings from four dead bodies in Kensington, West London.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="19th - 21st February 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">Swansea is hit by the Blitz</h3>
                <p>The port, docks, and nearby oil refinery are all targeted. 230 people are killed, 397 injured.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="8th March 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Café de Paris, a well-known nightclub, often attended by celebrities, soldiers, and the upper classes, suffers a direct hit in the Blitz. Rescuers who attended the scene afterwards 
                    are shocked to find looters were among them, yanking brooches and rings from the bodies of the revellers.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="April - May 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
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
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date=""
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>In 1941, several London hotels were fined for illegally buying over 150,000 eggs from a dealer in Folkestone. The hotels paid up to twice the controlled price for the eggs, claiming they were “desperate to feed the guests”. 
                    The dealer is sentenced to three months' hard labour.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="22 June 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">Hitler invades Russia</h3>
                <p>Hitler invades Russia in “Operation Barbarossa”.</p>
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
                date="7th December 1941"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">Pearl Harbor Attacked!</h3>
                <p>Pearl Harbor is attacked by the Japanese and the USA enters the war.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1942"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-fire'/>}>
                <h3 className="vertical-timeline-element-title">Cathedral Cities Targeted</h3>
                <p>British Cathedral Cities were strategically targeted in bombing raids by the Luftwaffe (German Air Force).</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1942"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-warning-sign'/>}>
                <h3 className="vertical-timeline-element-title">The Holocaust</h3>
                <p>The mass murder of Jewish people at Auschwitz by the Nazis begins.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="7th February 1942 "
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">More Rationing</h3>
                <p>Soap Rationing is introduced.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="26th July 1942"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">... And more Rationing!</h3>
                <p>Sweet Rationing is introduced</p>
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
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1943"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>“By 1943, virtually every household item was either in short supply and had to be queued for, or was unobtainable.” (Charman, Imperial War Museum, Jan 2018)</p>
                <p>Although we often think of rationing in terms of food, like with the examples above, the black market also found its way into other areas of rationing. In 1943, five million clothing coupons were stolen in one go, and the government had to cancel the entire issue. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="2nd February 1943"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">Surrender at Stalingrad</h3>
                <p>Surrender at Stalingrad marks Germany's first major defeat.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="1943"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-gbp'/>}>
                <p>19 men were accused in Manchester of having been selling forged clothing coupons. A printing press was seized in Salford that had been supplying high quality forged coupons.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="July 1943"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-gbp'/>}>
                <h3 className="vertical-timeline-element-title">An Unusual Auction</h3>
                <p>Actor Derrick de Marney auctions off a single banana (which had all but disappeared from wartime Britain at this point) which fetched for £5. (Charman, March 2018)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="September 1943"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Five million clothing coupons are stolen from a War Office depot in South West London. The Board of Trade is forced to cancel the entire issue of five-coupon vouchers while 
                    reassuring the public that the number stolen represents less than 1% of all coupons in circulation (Roodhouse, 2013: 88).</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="10th February 1944"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-gbp'/>}>
                <h3 className="vertical-timeline-element-title">P.A.Y.E</h3>
                <p>Pay As You Earn tax system introduced</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="10th March 1944"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-education'/>}>
                <h3 className="vertical-timeline-element-title">Women's Rights</h3>
                <p>Married women are allowed to teach for the first time.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="6th June 1944"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">“D-Day” Normandy Landings</h3>
                <p>The Normandy Landings, delayed from the 5th due to adverse weather, Codenamed Operation 'Overlord'. The Allied landings of over 156,000 US, Canadian, and British forces on the beaches of Normandy marked the start of a long and costly campaign to liberate north-west Europe from Nazi occupation.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="17th September 1944"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Blackout restrictions relaxed</h3>
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date=""
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Even celebrities became infamous for black marketeering; Ivor Novello, the Welsh composer and actor, was sentenced to a month in prison in 1944 for misuse of petrol coupons, offered to him by a fan. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="27th January 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-flag'/>}>
                <h3 className="vertical-timeline-element-title">Auschwitz is liberated by Soviet troops</h3>
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="30th April 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-warning'/>}>
                <h3 className="vertical-timeline-element-title">Hitler commits suicide in his Berlin bunker</h3>
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date=""
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
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
                date="15th August 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-star'/>}>
                <h3 className="vertical-timeline-element-title">VJ Day</h3>
                <p>Victory in Japan (VJ Day) is celebrated after Japan’s surrender.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="24th October 1945"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-'/>}>
                <h3 className="vertical-timeline-element-title">The United Nations</h3>
                <p>The Charter of the United Nations is signed by the British Government – the charter aims to: 
                    “Save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind”. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date=""
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-comment'/>}>
                <p>Despite the odd spell back in prison, by war’s end professional crook, Billy Hill, was a wealthy man, and came to be known as 
                    the boss of Britain’s underworld after the war. “They were roaring days. Money was easy, the villains were well loaded with dough, and we were all busy.”</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: defaultTimelineBackground, color: defaultTextColor }}
                contentArrowStyle={{ borderRight: defaultArrowStyle }}
                date="July 1946"
                iconStyle={{ background: defaultIconBackground, color: defaultIconForeground }}
                icon={<i className='glyphicon glyphicon-camera'/>}>
                <h3 className="vertical-timeline-element-title">Bread Rationed</h3>
                <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} icon={<i className='glyphicon glyphicon-asterisk'/>}/>
        </VerticalTimeline>

        </>
    )


}

export default ResearchTimeLine;