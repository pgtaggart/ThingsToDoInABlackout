import React from 'react';
import Typist from 'react-typist';
import { motion } from 'framer-motion';

class TextLoader {

    loadText(name) {

        switch (name) {

            case 'About-Project':
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

            case 'RoomOne-Diary':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Dear Diary</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <span className="TextTypeWriterTextCenter">
                                <br />
                                <p>I remember my ma and pa were sitting, listening to the radio, a battery-operated thing. And we heard Chamberlain, you know saying we was at war with Germany...
                                    Pa turned and said, ‘We’re going to war’. There was something in his voice, I think he was afraid… I however am a kid and am not going to worry about it much.</p>
                                <br />
                                <p>A.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Curtains':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Dear Diary</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I am no longer allowed out in the dark. I don’t want to go really because there are no lights…it
                                is, so dark. Pitch black. They took a lot of the road signs away. If the parachutists dropped, they
                                wouldn’t know which way to go. Everything is just blacked out. Some nights it all seems so
                                    beautiful because of the stars!</p>
                                <br />
                                <p> Ma put blackouts on all the windows. Every single window. We have to rely on candles in the
                                house. The warden comes round and bangs on the windows if there is any
                                light. He shouts, “put that light out!” Shining a light at night is now a serious offence. It is terribly
                                    easy to break blackout. Some people just forgot. They get a fine - quite a hefty one!</p>
                                <br />
                                <p>A.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Bed':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Dear Diary</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>It was about 5:00 PM on a bleak winter's evening. The lights were off and my whole family was scared. Even the dog made those whining noises.
                                I was sitting next to the radio about the latest news about what is going on, whilst loud bangs were going off outside, like the world had turned
                                upside-down and inside-out. Bombs were going off now and then nearby, whilst meanwhile I was contemplating my life and thinking that this may be my last night here.
                                Bullets were going through the windows, and shatters of glass fell everywhere. I hugged ma and pa with tears falling from my eyes. Everything stopped. It was silent.
                                It was like I was deaf, and I couldn't hear a thing. My eyes closed slowly, and when I opened them again, it was a whole new day.
                                The windows weren't broken like they had been, and the house looked completely different. My parents were in the kitchen making tea and they said:
                                "You've been asleep for a long time, you missed lunch!"
                                I realised that this was some sort of a nightmare, but I heard a faint bang in the distance. It was a vision of the future…?</p>
                                <br />
                                <p>Alex</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Suitcase':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>20th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Ma. I’m sorry it’s taken me so long to write. I’ve been thinking of you all the time. Is everything alright? I hope you’ve been sleeping better,
                                and you’ve managed to get hold of some fruit and vegetables. I’ve done what you asked me to do, and I’ve been a good girl. The journey here was fine,
                                the train, seeing London disappear and the fields come up. I didn’t talk much to the others, I did what you said and kept my head down.
                                The farm is beautiful. Fields as far as you can see, all green and beige and bright yellow. Cows that stare at you when you walk by. Sometimes they follow me around. I’ve never seen so much space before.
                                    There’s a tree at the top of the hill where I come to sit sometimes and be quiet. And think about you.</p>
                                <br />
                                <p>Annetta</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-GasMask':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>20th December 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Ma. Everything is fine here. I still haven’t heard from you. I’m worried, are you taking care of yourself? Did you find a job? Christmas is coming and there’s excitement here, even with the war.
                                   I miss you; I’ll be thinking of you on Christmas day. Ma, I’m doing well, I think you’d be proud of me.</p>
                                <br />
                                <p>Annetta</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Photo':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>20th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Ma, Spring has come, and everything is wonderful here. The countryside is blossoming, and the McBride’s have been so kind.<br />
                                    People at school are very respectful now. The sunsets in the countryside are like nothing else I’ve ever seen. The sky goes orange,
                                    and it pops down under the hill but then even afterwards, everything still glows. Sometimes, now the weather’s getting better, I run through the fields.
                                    I think of all the streets in Stepney and remember how they connect together and where they lead to. I can get lost here.
                                    (Beat) I’m sorry that it took me so long to reply to your letter. I’ve been busy, just like you. And thanks for the offer for me to come back home Ma.
                                    I think actually I'll stay here a bit longer. Seems like you can take care of yourself. Well, so can I...</p>
                                <br />
                                <p>Annetta</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomTwo-Diary':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>The Dead End Kids<br />
                                    A story by Patsy Duggan
                                    </p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Chapter One<br /><br />
                                Patsie Duggan. Designed and delivered in the East End. Lion of the streets, crocodile of the docks, made of cotton and petrol, Stepney and Wapping,
                                oil and sulphur. Destined for greatness, soldier in the making, hero in waiting, weighed down by the potential of every invisible medal, by the ticking
                                of the clock, every minute, every month, until the hands chime one and eight. Winner of hearts, keeper of the peace, saviour of the streets, king of
                                the underground. Dockworker by day, valiant marshall by night- He sprints through the streets like a big cat, the others following in his trails,
                                he knows each road like the back of his hand, in an instant he’ll guide them all to safety, effortlessly, this is all preparation for the moment of-
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomTwo-Window':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>The Dead End Kids<br />
                                    A story by Patsy Duggan
                                    </p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Chapter Two<br /><br />
                                Dust, all around us. A wooshing sound, swirling and carrying me, sirens still blaring in the background, glass flying and catching the light.
                                Black and red and orange, heat fluttering in front of me. I turn onto my back. I’m alive, I can still move, the ground below is warm. Maureen.
                                Where is Maureen? The Pordes house is burning and parts of it are all over the street. My ears are ringing. I sit up and pull Maureen up beside me.
                                Something springs up from the corner of my eye. The boy...Shamus is running down the street. Straight to the burning house. I get up and stagger after him,
                                still dizzy. Ronnie and Bert are beside me, Maureen too. Shamus stands in front of the house. What you doing boy? We need to get to the shelter.
                                I give the front door a kick. Two more. It comes down. The smoke comes out and takes us in, elbows to mouths, I claw through, find an arm, a woman,
                                coughing and crying. Mrs Pordes. I push her to Ronnie and Bert. The smoke has got inside me and I can’t see shapes anymore.
                                Something meets my foot and I realise there’s someone on the floor, a body. I pick her up, she’s limp like a doll. Shamus pulls me out with her,
                                outside the sirens still roaring and the air is colder, my clothes are shaking and smoldering, like a moving ember.
                                I’m walking with Annetta in my arms, I’m not sure where I’m going or what I’m supposed to do but I can’t stop. Until.
                                She opens her eyes and I think I might start crying, but that’s for girls so I don’t-
                                I’m Patsie Duggan. Rescuer of the vulnerable, leader of the next generation.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomTwo-Rope':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>The Dead End Kids<br />
                                    A story by Patsy Duggan
                                    </p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Chapter Three<br /><br />
                                I’m used to the heat now. The way the smoke claws your eyes when you first hit a room, Shamus climbing like a lizard up a wall, nothing ever frightens him.
                                We tie ropes round bombs like presents, drop them like gifts into the Thames. Our clothes are in pieces but we don’t care.
                                I run at the door, three, four times until my shoulder is numb and it flies open. Through the smoke I see the horses waiting,
                                the panic in their eyes, pacing back and forth in their pens. I stroke one for a second, run my hands through its brown mane and stare deep into its eyes.
                                It kicks me with its back legs and pegs it through the door with the others, running to freedom.
                                The stable owner says “Can’t thank you enough boys, you saved thirty of my horses.”</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomTwo-Bookcase':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>The Dead End Kids<br />
                                    A story by Patsy Duggan
                                    </p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Chapter 4<br /><br />
                                The Shelter at Wapping gets hit. The roof sags and people are screaming and shouting. Shamus takes two mothers by the arms and leads them down the road,
                                not sure where his own Mum is, Ronnie carries a broad with a bun in the oven, Bert, a Grandma fragile like China,
                                Maureen’s leading 30 kids and me a small army of everyone else. Bombs dropping in front, behind us, we get them to the station,
                                one lot, then sprint back for another, and another, and another, a hundred souls then a hundred more. </p>
                                <br />
                                <p>We’re our own gang. The Dead End Kids.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomTwo-Newspaper':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Newspaper Clippings</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Becoming heroes,<br />
                                Never really planned, y’know?<br />
                                Saving lives, for fun.
                                <br /><br />
                                    <i>Lauren Purser</i>
                                    <br /><br /><br />
                                Dead End Kids<br />
                                Horses panicking, flame dancing, Dead End Kids running, clothes flaming, running out the stables with terrified cries.
                                <br /><br />
                                    <i>Maia Wooton</i>
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Letter':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I ain’t no saint, you’ve probably guessed that by now. But taking things from the dead. I’d never imagined that.<br />
                                We borrowed The Saint Christopher from the man in the Warehouse, the night that Alfie first kissed me.
                                The contents of a safe from a cafe in Bethnal Green that paid for our trip to the cinema.
                                A watch from an old lady in Limehouse. A wallet from a fella who didn’t make it in a factory in Poplar that brought us three packs of cigarettes.<br />
                                Sometimes we borrow other things. Photos and trinkets. We make it a point to remember each person. To savour each cigarette, each collective breath.<br />
                                We don’t live in a world that’s equal. You think those people in them fancy town houses in West London are three to a bed like me and my family? I’m not just a borrower, I’m an equaliser. We just need to do what we can to get through this-</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFour-Chair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>For a second the world seems to stop as my gaze trailed from my patient and her mother to the child's drawing of Winston Churchill.
                                Natalia made it for me as a thank you gift for when her illness improved, as I turn back to my patient and her mother, they had
                                vanished and in their place was Natalia, skin ripped and torn, and her mother who along with her father had died in a blackout in their country home,
                                with her black silk dress and vibrant red heels both ripped to pieces and decaying. I screamed.
                                The moment I stopped screaming the young patient, I realised had jumped out of her chair and was attempting to hide behind her mother who was staring at me in shock.
                                She hurried her out of my consulting room. I shook my head, amazed. That had never happened to me before. Maybe I was stressed out from a long day of work.
                                I promised myself a good long rest when I got home. But when I finally reached my fifth-floor flat, I saw there was a ready-made sandwich on my dining room table.
                                I didn't remember it being there when I left and know no one could have got in. Right? But I ignored it and laid down on my bed with white linen sheets.
                                Crisp and freshly laundered by my cleaner this morning.
                            <br /><br />
                                    <b><u>WAIT. I DON'T HAVE A CLEANER!</u></b>
                            I awake from a troubled sleep filled with childish dreams filled with ghost cleaners and zombie patients.
                            Slipping out of bed I scramble for my clothes. These are neatly folded. 'Honestly I need to investigate this ghost cleaner!'
                            I say to myself as I slip on my black mackintosh. I stride down the stairs and down the street.
                            When I finally reach the hospital I walk down the corridor to my office and sit down at my desk.
                            <br /><br />
                            I look down at my desk. It is a beautiful dark oak. When I look up, I see that Nathan's wheelchair is sitting by my medicine cabinet and NATHAN,
                            who has been in a wheelchair for five years, is walking down the corridor! I shout down the corridor.
                            He turns around to face me and I see that his face is as pale as snow. And his teeth are as sharp as knives.
                            A scream escapes my lips. Nathan lunges at me with his teeth bared. I pass out.</p></span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo1':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Tight rationing for the war effort<br />
                                Breaking news reports with official sounding voices<br />
                                Conscientious objectors jailed<br />
                                Bombs destroying everything<br />
                                    <br />
                                Coombe Boys Workshop</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo2':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>You should be at war!<br />
                                I should turn you in, my boy,<br />
                                Before you go – tea.<br /><br />
                                Lauren Purser</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo3':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Late for one of my many jobs.<br />
                                I have too much to do these day<br />
                                But lateness is a crime now<br />
                                Conscription awaits me<br />
                                Terror. I feel it through my whole body.<br />
                                Deep, scared breaths.<br />
                                    <br />
                                Coombe Boys Workshop
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo4':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Look down and carry a torch!<br />
                                Is what they said to me,<br />
                                Something was coming,<br />
                                And I didnt know what,<br />
                                Was it tinier than a flea?<br />
                                Look out and be safe!<br />
                                My mother told me that night,<br />
                                What was this fearsome creature?<br />
                                It was giving people a fright.<br />
                                What did it mean?<br />
                                Was there something behind this<br />
                                Or was it some clever trick?<br />
                                Whatever it was,<br />
                                It was kind of scary<br />
                                And was definitely taking the mic!<br />
                                Eyes down, eyes peeled<br />
                                The streets were empty and black,<br />
                                But why was I the only out here?<br />
                                Not a sound, not even a tap.<br />
                                A large noise exploded the sky<br />
                                And millions or lights were flying!<br />
                                “BOMBS! BOMBS!” people shouted<br />
                                And many of the children were crying.<br />
                                “Run for shelter!”<br />
                                “Run and hide!”<br />
                                The noises were right in my ear!<br />
                                “Run my child!”<br />
                                “Go and hide!”<br />
                                “RUN THE GERMANS ARE HERE!”<br />
                                I picked up pace<br />
                                Running as fast as I could<br />
                                This really was not fun!<br />
                                “COME HERE BOY!”<br />
                                “WE'VE GOT HIM NOW!”<br />
                                I missed my chance to run<br />
                                    <br />
                                Luna Middleton
                            </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo5':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>“Coward!” “Deserter!”<br />
                                The horrors I’ve seen and done!<br />
                                Please! Hide me! Help me!<br />
                                    <br />
                                Lauren Purser
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Photo6':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>When will we see again? <br />
                                A question on everybody's hearts. <br />
                                When will the darkness go away? <br />
                                Is what nobody ever asks. <br />
                                When will the curtains swish aside, revealing squares of light? <br />
                                When will no one have to worry about bombing in the night? <br />
                                We walk past shut-up cinemas and we miss illumination. <br />
                                But going out has long been but a hallucination. <br />
                                When will we all see again? <br />
                                And chase out all the dark? <br />
                                When will we kiss and hug our friends, not afraid of a laugh? <br />
                                The darkness hides inside our eyes, and the cold won't go away - <br />
                                But we all know we'll wake again, and trudge through another day.<br /><br />
                                Adelka Devante</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Door':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, June, 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I’m eight years old and today my Papa went away. He was in the garden sanding a table when two policeman knocked on the door.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-RationBook':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, August, 1940 </p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I paint pictures of Papa in the few colours I have. Paint is my favourite now because I’m now allowed anything else. 
                                Papa has been gone for two months and we don’t know when he’ll be back. The rules are that we try to still be cheerful because Papa is helping with the silly war, 
                                so I have taken it upon myself to sing as often as possible. I am not sure if it is helping but I still carry on. Neville helps out too when he’s not out eating mice and meeting other neighbourhood cats. 
                                Mama is the man of the house, except that she’s not a man so she is actually the woman of the house, but she’s in charge. Walter is her deputy, I’m in charge of art. And also singing. I just added that one. I don’t think they’ll mind.
                                <br /> 
                                We’re going to sell all of the things we don’t need anymore. Clothes, books. We go with Mama to Hatton Garden to sell her jewellery. I see a tear fall onto the counter in the shop when she parts with a broach from Grandma. 
                                I still don’t really understand why we’re doing this but I hold Mama’s hand. She doesn’t speak much on the way home.
                                <br /> 
                                We ask Mr Hart at the Butchers shop for bones for Neville. And then we use the bones to make soup which Neville doesn’t eat because he doesn’t like soup, he prefers a tasty mouse or bird. Luckily we don’t have to eat those Jellied Eels any more.
                                <br />
                                I wake up in the morning, often Mama’s already in the kitchen. Sometimes I’m not even sure if she’s been to sleep and she doesn’t eat much these days. One day, our neighbour Dr Sutton comes to visit, he talks a bit like the King and gives me an apple to eat while I paint a picture in the kitchen. 
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Scale':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, September, 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>The new rule is we do Art School every day. The Doctor’s friend with the funny moustache brings us paper, ink and rulers after dark and I draw for hours and hours. 
                                Walter takes a ruler and makes sure everything is straight. 
                                Mama says we’re helping more people to get clothes which I’m happy about.
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Chair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, May, 1945</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I’m thirteen years old now, which makes me officially a teenager. Neville is six which is middle aged in cat years, Walter is 15, which makes him officially even more annoying. 
                                The rules are that art school is our official family business. Every morning we have breakfast together and then we get to work, Papa and Walter on goods and trading, 
                                Mama and I on making more ration books. We break for lunch and play with Neville. Papa says it’s- Quality time. The rules are. we’re still Jewish And a bit German. 
                                And a bit English. We’re just us, people in the world.<br />
                                One day, we hear an announcement on the radio.<br />
                                The war is over.
                                </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Window':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, May, 1945</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I went outside especially because it had always been so dark. They said the lighting would be coming. So I went out and saw the street lights come back.</p>
                            </span>
                        </motion.div>
                    </div>);

            default:
                return (<Typist className="TypeWriterTextHeader" cursor={{ hideWhenDone: true }} startDelay={300}>No Text defined for this modal</Typist>);
        }
    }
}

const textLoader = new TextLoader();

export default textLoader;