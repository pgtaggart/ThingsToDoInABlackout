import React from 'react';
import Typist from 'react-typist';
import { motion } from 'framer-motion';

class TextLoader {

    loadText(name) {

        switch (name) {
            
            case 'About-Project' :
                return (
                    <p>During WW2 crime rose by a reported 57%. Fraud, gang culture, looting, and robbery impacted on people’s everyday life. 
                    Along with poverty, hunger, illness, and exceptional pressure – what was home really like during the war?
                    Behind closed doors, every house has a story. Dive into our digital art project, which interprets the stories and 
                    research we were given access to by individuals, the National Archives and The Imperial War Museum.
                    <br />
                    <br />
                    Things to do in a Blackout was a pre-pandemic idea. In early 2020, Bounce Theatre had engaged over 300 young people in Kingston to explore 
                    the rise in crime during WW2 and the contemporary parallels – petty crime, food poverty, and our relationship with Europe were some of 
                    the topics of conversation. All of the young people were to be invited to take over the National Archives in an evening of mixed art 
                    entertainment in May 2020.
                    <br />
                    <br /> 
                    By March 2020, we were in afterschool clubs, devising split scenes between a WW2 black market and the lack of toilet roll in Tesco. 
                    The project took a surreal new parallel. As we went into lockdown, we lost the chance to continue the work with those young people. 
                    Over the last year, we have selected elements of the research they were working on and captured some of their responses to turn all 
                    the ideas into a digital art piece. We established a digital writing project for young people and have woven their words into each room. 
                    Along with this, we have an open invitation to schools to create content for each room and see it uploaded onto the website until May 2021.
                    <br />
                    <br /> 
                    Our thanks go to The National Lottery Heritage Fund for awarding us a grant and their support in adapting to the impact of Covid.
                    <br />
                    <br />
                    Bounce Theatre &#8482;, Copyright &#169; 2021
                    <br />
                    <br />
                    <b>Acknowledgements</b>
                    <br />
                    Made possible thanks to The National Lottery Heritage Fund
                    <br />
                    <br />
                    <b>Heritage Partners</b> 
                    <br />
                    The National Archives and The Imperial War Museum
                    <br />
                    <br />
                    <b>Pre-Lockdown Collaborators</b>
                    <br />
                    Anstee Bridge, Chessington School, Coombe Boys School, The Kingston Academy, Kingston Keep 
                    <br />
                    <br />
                    <b>Credits</b>
                    <br />
                    Young Writers
                    <br />
                    <br />
                    <b>Script Writer</b>
                    <br />
                    Sharon Kanolik
                    <br />
                    <br />
                    <b>Artist Acknowledgements</b>
                    <br />
                    Street Scene by Eliza Willmott. <a href="https://elizawillmott.wixsite.com/portfolio/art-installation">Website</a> <a href="https://www.instagram.com/nellwillmott_art">@nellwillmott_art</a><br />
                    Room 1 by Charmaine Chaudry. <a href="http://www.charmainechaudrydesigns.com">Website</a> <a href="https://www.instagram.com/charmainechaudrydesigns">@charmainechaudrydesigns</a><br />
                    Room 2 by Erin Tsw. <a href="http://www.erintse.com">Website</a> <a href="https://www.instagram.com/wingmanerintse">@wingmanerintse</a> and <a href="https://www.instagram/mycareerisfine">@mycareerisfine</a><br />
                    Room 3 by Ruth Stewart. <a href="http://www.ruthdrawsthings.co.uk">Website</a> <a href="https://www.instagram.com/ruthdrawsthings">@ruthdrawsthings</a><br />
                    Room 4 by Eve Martin. <a href="http://www.evemartindesign.com">Website</a> <a href="https://www.instagram.com/eve_roisin">@eve_roisin</a><br />
                    Room 5 by Luke W. Robson. <a href="http://www.lukewrobson.com">Website</a><br />
                    Room 6 by Grace Evans. <a href="https://www.instagram.com/graces_starlight">@graces_starlight</a><br />
                    <br />
                    <b>Resource Contributors</b>
                    <br />
                    Katie Halliday Turner<br />
                    Stewart Melton<br />
                    Henry Mendoza<br /> 
                    <br />
                    <b>Project Management</b>
                    <br />
                    Louise Pendry and Lauren Purser</p>
                );

            case 'RoomOne-RationBook' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Mendoza's Ire</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Henry Mendoza</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <span className="TextTypeWriterTextCenter">
                            <br />
                            <p>Hear the sirens, hear the sirens,<br /> 
                            London Bridges, falling down?<br /> 
                            Round up all your kids for now,<br /> 
                            Because the war has come to town.<br /> 
                            A million and a half evacuated,<br /> 
                            Pregnant women, and infirm.<br /> 
                            This was just the 'Phoney War'<br /> 
                            Britain declares, then adjourns.<br /></p>
                            <p>Not a single shot is fired,<br /> 
                            For 8 months, while they build.<br /> 
                            Women and children to the country,<br /> 
                            You wouldn't say the kids were thrilled.<br /> 
                            Apart from any criminal kids,<br /> 
                            They're let out after six months!<br /> 
                            And prisoners with just three months left,<br /> 
                            Were let out early -<br /> 
                            Were we chumps?<br /> 
                            War and releasing prisoners,<br /> 
                            Asking for trouble, there's no doubt?<br /> 
                            With less to do, away from home,<br /> 
                            What'll they do,<br />  
                            In a Blackout?<br /> </p>
                            <p>Rationing of food supplies,<br />
                            Government orders, sorry guys,<br />
                            Gangsters sense opportunity,<br />
                            Get a black market on the rise,<br />
                            One egg a week, but no more!<br /> 
                            Ration books for merchandise,<br />
                            A family of three - but four eggs?!?<br />
                            Someone must be telling lies...<br /></p>
                            <p>Police and young men join the army,<br />
                            Less to keep the law enforced,<br />
                            Kids are running riot now,<br />
                            Fifty-two thousand, in the courts.<br />
                            But conflict wise, all is quiet,<br />
                            Maybe the Germans called it quits?<br />
                            Kids drift home, back to the cities,<br />
                            Just in time, for the Blitz.<br /></p>
                            <p>Blackout curtains, air raid wardens, gas masks,<br />
                            Brits'll be prepared!<br />
                            Evacuees back to the country,<br />
                            Maybe there, they'll be less scared,<br /></p>
                            <p>Lights are out, remove the targets, make the bombing that bit harder,<br />
                            But dark and bombs are ideal places,<br />
                            For any dodgy Business Starter,<br />
                            Pull together, by all means, stiff upper lip, we'll sort it out,<br />
                            But don't be surprised, through chance or hunger,<br />
                            What Things We'll Do, In a Blackout...</p></span>
                        </motion.div>
                    </div>);
            
            case 'RoomOne-GasMask' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>I smell gas</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Maia Wooten</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                            <p>Will we soon shove our mask,<br />                                                 
                            Like the poster from the past,<br />                                                 
                            Shove it down in the bin,<br />                                                          
                            Will the cries of ‘DON’T’ be drowned in the din?</p></span>
                        </motion.div>
                    </div>);
                    
            case 'RoomOne-Window' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Memory</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Some Young Guy</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <br />
                            <span className="TextTypeWriterTextCenter"><p>
                            I was never allowed out in the dark. I didn’t want to go really because there was no…it was so, so dark. Pitch black. They took a lot of the road signs away. If the parachutists dropped, they didn’t know which way to go.<br /> 
                            Everything was blacked out. Some nights it was beautiful because of the stars!  We had blackouts on all the windows. Black cotton things that went to the other side of the curtains......like a blind, the other side. Every single window. We relied on candles in the house.<br /> 
                            There were no lights, The warden used to come round and bang on the windows if there were any lights. They used to shout, “put that light out!” Shining a light at night was a serious offence. But, it was terribly easy to break the blackout. Some people just forgot. They usually got a fine - quite a hefty one.<br />
                            </p></span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Diary' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Dear Diary</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Alex Mouette</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                            <p>It was about 5:00 PM on a bleak winter's evening. The lights were off and my whole family was scared. Even the dog made those whining noises. I was sitting next to the radio about the latest news about what is going on, whilst loud bangs were going off outside, like the world had turned upside-down and inside-out. Bombs were going off now and then nearby, whilst meanwhile I was contemplating my life and thinking that this may be my last night here. Bullets were going through the windows, and shatters of glass fell everywhere. I hugged my mum and dad with tears falling from my eyes. Everything stopped. It was silent. It was like I was deaf, and I couldn't hear a thing. My eyes closed slowly, and when I opened them again, it was a whole new day. The windows weren't broken like they had been, and the house looked completely different. My parents were in the kitchen making tea and they said: "You've been asleep for a long time, you missed lunch!" I realized that this was some sort of a nightmare, but I heard a faint bang in the distance. It was a vision of the future…</p>
                            </span>
                        </motion.div>
                    </div>);

                    case 'RoomOne-Suitcase' :
                        return (
                            <div className="TextModalConatiner">
                                <div className="TextModalHeader">
                                    <Typist cursor={{ show: false }} startDelay={1000}>
                                        <span className="TextTypeWriterHeading">
                                            <p>A Memory</p>
                                        </span>
                                        <Typist.Delay ms={1000} />
                                        <span className="TextTypeWriterSubHeading">
                                            <p>By Peter Greening</p>
                                        </span>
                                    </Typist>
                                </div>
                                <motion.div className="TextModalContent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{delay: 5, duration: 3}}>
                                    <br />
                                    <span className="TextTypeWriterTextCenter">
                                    <p>“Eventually I was evacuated. Evacuation was horrible. I was screaming. I didn’t want to go away. I was sent to Cardiff. It didn’t feel very safe as they bombed the docks on the first night I was there. I didn’t see it myself as I was on the outskirts, in a place called Ely, which is on the outskirts of Cardiff.<br />
                                    “The first family I stayed with was alright because he was a policeman. And then I had to move from there because his wife had a breakdown. I went to a place called Teapot Road, I can’t remember the names of the people, my time with that family was not really enjoyable.<br />
                                    “I was away from my parents for two years.”
                                    </p>
                                    </span>
                                </motion.div>
                            </div>);

            case 'RoomTwo-Newspaper' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Newspaper Cuttings</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Lauren Purser and Maia Wooton</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <br />
                                <p>Becoming heroes,<br />
                                Never really planned, y’know?<br />
                                Saving lives, for fun.</p>
                                <br />
                                <p>Horses panicking, flame dancing, Dead End Kids running, clothes flaming, running out the stables with terrified cries.<br /></p>
                                <br />
                                <p>Smoking lungs, ash face,<br />
                                Searing heat, but in we go!</p>
                            </span>
                        </motion.div>
                    </div>);
            
            case 'RoomTwo-Bedroll' :
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Memories</p>
                                </span>
                                <Typist.Delay ms={1000} />
                                <span className="TextTypeWriterSubHeading">
                                    <p>By Angela Web</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{delay: 5, duration: 3}}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <br />
                                <p>“Yes…the memories of the sirens. They used to frighten the life out of me. 
                                    They still give me shivers. They were night-time usually. In the daytime we sort of carried on as normal. 
                                    But we were always sort of aware, like…we used to queue up for meat at the butcher’s but we were always sort of aware that we knew where to run to if we had to go somewhere.”</p>
                            </span>
                        </motion.div>
                    </div>);

            default :
                return (<Typist className="TypeWriterTextHeader" cursor={{ hideWhenDone: true }} startDelay={300}>No Text defined for this modal</Typist>);
        }
    }
}

const textLoader = new TextLoader();

export default textLoader;