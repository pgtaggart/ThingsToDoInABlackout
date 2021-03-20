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
                                <p>Dear Ma. Everything is fine here. I still haven’t heard from you. I’m worried, are you taking care of yourself? Did you find a job?
                                Christmas is coming and there’s excitement here, even with the war. I miss you; I’ll be thinking of you on Christmas day.
                                    Ma, I’m doing well, I think you’d be proud of me.</p>
                                <br />
                                <p>Annetta</p>
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
                                <p>I am no longer allowed out in the dark. I don’t want to go really because there are no lights…it is, so dark. Pitch black.
                                They took a lot of the road signs away. If the parachutists dropped, they wouldn’t know which way to go. Ma put blackouts on all the windows.
                                Every single window. We have to rely on candles in the house. The warden comes round and bangs on the windows if there is any light.
                                He shouts, “put that light out!” Shining a light at night is now a serious offence. It is terribly easy to break blackout. Some people just forgot.
                                    They get a fine - quite a hefty one!<br /><br />
                                    So, everything is just blacked out. Some nights it all seems so beautiful because of the stars!<br /><br />
                                    Yours Annetta </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Bed':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>My Room</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Psst. It’s Annetta here. This is my room. I’ve returned to London from being evacuated in the early part of the war.<br />
                                    It seems like just last week Ma and Pa were sitting, listening to the radio. And we heard Chamberlain, you know saying we was at war with Germany...  My father turned to my mother and said, ‘We’re going to war’..<br />
                                    I remember that tone in his voice, he is afraid, it was something that has frightened him, it was something to be wary of –  that we were going to have a war..<br />
                                    At the time, I decided I was just a kid, I didn’t want to worry about it. I did decide to keep a diary though, for however long the war lasts. I’m glad I have, as I never want to forget what is happening to us.
                                    You might find parts of my story scattered around. Ma saved the letters I sent her too. The two don’t always match, cause well, you don’t want to tell your parents everything and you don’t want them to worry … Evacuation, well, it stopped me being such a kid….<br />
                                    Anyways, ma is calling. Catch you later. </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Suitcase':
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
                                <p>So I was evacuated. Evacuation was horrible. I was screaming as the train pulled away. Mum was crying. I didn’t want to go away. I’ve been sent to Devon. It took a long time to get here by train.
                                My new family aren’t nice. They say I talk funny and I’m too skinny.  I don’t think they want me here any more. I’m hoping this war is over quickly and I can get back to my London home. I’ll figure it out. I have to.
                                We have the newspapers to hear the current goings on. We have the radio on all the time. And then, there’s Pathé News on at the cinema and things like that. They’ve got Pathé News. So we’ll go and see something like The Wizard of Oz
                                and they’d show the news so you’d get all the war updates and what was going on with all the propaganda and advice to keep everyone going. Keep us all on track for what is to come. At least...I did when I was in London. Out in the countryside,
                                    being evacuated, there’s no cinema here. I miss it dreadfully.</p>
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
                                <p>We have gas masks now, to save us if we were attacked … Although, we rarely wear them, even though you’re meant to. I’m meant to carry it wherever I go.
                                It’s kept in this cardboard box, with string to go around my neck. We rarely use them though, and it’s a good job too - horrible smell! Rubberised stinky smell.
                                Awful! You never get used to it. We do gas mask practice in school, probably, once a week. Got to practice getting it out the box and putting it on so it fits right and…you know,
                                    practising in case you’re being gassed. I hope it never comes to that.</p>
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
                                <p>Dear Ma, Spring has come, and everything is wonderful here. The countryside is blossoming, and the McBride’s have been so kind.People at school are very respectful now.
                                The sunsets in the countryside are like nothing else I’ve ever seen. The sky goes orange, and it pops down under the hill but then even afterwards, everything still glows.
                                Sometimes, now the weather’s getting better, I run through the fields. I think of all the streets in Stepney and remember how they connect together and where they lead to.
                                I can get lost here. (Beat) I’m sorry that it took me so long to reply to your letter. I’ve been busy, just like you. And thanks for the offer for me to come back home Ma.
                                    I think actually I'll stay here a bit longer. Seems like you can take care of yourself. Well, so can I...</p>
                                <br />
                                <p>Annetta</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-Bookcase':
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
                                <p>Dear Ma. I’m sorry it’s taken me so long to write. I’ve been thinking of you all the time. Is everything alright? I hope you’ve been sleeping better, and you’ve managed to get hold of some fruit and vegetables.
                                I’ve done what you asked me to do, and I’ve been a good girl. The journey here was fine, the train, seeing London disappear and the fields come up. I didn’t talk much to the others, I did what you said and kept my head down.
                                The farm is beautiful. Fields as far as you can see, all green and beige and bright yellow. Cows that stare at you when you walk by. Sometimes they follow me around. I’ve never seen so much space before.
                                There’s a tree at the top of the hill where I come to sit sometimes and be quiet. And think about you.</p>
                                <br />
                                <p>Annetta</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomOne-RationBook':
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
                                <p>You ain’t gonna believe this! It was in the papers today. They are rationing food! Bacon, butter, and sugar will be limited.
                                Every adult and every child gets a ration book each and there are ticket stubs in for your food.
                                    I love my bacon sandwiches so this is a right stitch up if you ask me!</p>
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
                                    A Story by Patsie Duggan</p>
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
                                Meet Patsie Duggan.<br />
                                Designed and delivered in the East End. Lion of the streets, crocodile of the docks, made of cotton and petrol, Stepney and Wapping, oil and sulphur.
                                Destined for greatness, soldier in the making, hero in waiting, weighed down by the potential of every invisible medal, by the ticking of the clock,
                                every minute, every month, until the hands chime one and eight. Winner of hearts, keeper of the peace, saviour of the streets, king of the underground.
                                Dockworker by day, valiant marshall by night. He sprints through the streets like a big cat, the others following in his trails, he knows each road like the back of his hand,
                                in an instant he’ll guide them all to safety, effortlessly.</p>
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
                                    A Story by Patsie Duggan</p>
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
                                Black and red and orange, heat fluttering in front of me. I turn onto my back. I’m alive, I can still move, the ground below is warm.
                                Maureen. Where is Maureen? The Pordes house is burning and parts of it are all over the street. My ears are ringing. I sit up and pull Maureen up beside me.
                                Something springs up from the corner of my eye. The boy...Shamus is running down the street. Straight to the burning house.
                                I get up and stagger after him, still dizzy. Ronnie and Bert are beside me, Maureen too. Shamus stands in front of the house.
                                What you doing boy? We need to get to the shelter. I give the front door a kick. Two more. It comes down. The smoke comes out and takes us in, elbows to mouths,
                                I claw through, find an arm, a woman, coughing and crying. Mrs Pordes. I push her to Ronnie and Bert. The smoke has got inside me and I can’t see shapes anymore.
                                Something meets my foot and I realise there’s someone on the floor, a body. I pick her up, she’s limp like a doll. Shamus pulls me out with her, outside the sirens
                                still roaring and the air is colder, my clothes are shaking and smoldering, like a moving ember. I’m walking with Annetta in my arms, I’m not sure where I’m going
                                or what I’m supposed to do but I can’t stop. Until. She opens her eyes and I think I might start crying, but that’s for girls so I don’t - I’m Patsie Duggan.
                                Rescuer of the vulnerable, leader of the next generation.</p>
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
                                    A Story by Patsie Duggan</p>
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
                                We tie ropes round bombs like presents, drop them like gifts into the Thames. Our clothes are in pieces, but we don’t care. I run at the door, three,
                                four times until my shoulder is numb and it flies open. Through the smoke I see the horses waiting, the panic in their eyes, pacing back and forth in their stalls.<br />
                                Horses panicking, flame dancing, Dead End Kids running, clothes flaming, running out the stables with terrified cries.<br />
                                I stroke one for a second, run my hands through its brown mane and stare deep into its eyes. It kicks me with its back legs and pegs it through the door with the others, running to freedom. The stable owner says,
                                “Can’t thank you enough boys, you saved thirty of my horses.”</p>
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
                                    A Story by Patsie Duggan</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Chapter Four<br /><br />
                                A week later the Shelter at Wapping gets hit. The roof sags and people are screaming and shouting. Shamus takes two mothers by the arms and leads them down the road,
                                not sure where his own Mum is, Ronnie carries a broad with a bun in the oven, Bert, a grandma fragile like china, Maureen’s leading 30 kids and me a small army of everyone else.
                                Bombs dropping in front, behind us, we get them to the station, one lot, then sprint back for another, and another, and another, a hundred souls then a hundred more. <br />
                                Afterwards we meet by the river and talk about the night. The water listens and the day comes in, solid and calming in the light. I sleep for an hour. Maybe two.
                                In my bed it catches up with me. Smoke and ash, broken buildings and faces. When your heart beats faster and your chest gets so tight that all you can do is run.
                                Moments replay in dreams and I live the night over and over again. But when I wake up, I’m still alive. Feel like I could live forever.</p>
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
                                <p>Ha. So you found me. I wondered if anyone would look. You know. The Blitz ended in May 1941. By then many people had lost their lives, their homes.
                                The Dead End Kids quietly faded. I got the letter from the army on my eighteenth birthday but by then it didn’t feel so important.
                                I served, did my time. After the war I watched the repair of all the streets we’d run down. New bricks, new doors, new windows.
                                I campaigned for The Dead End Kids to be recognised as heroes. Maybe if we’d been a bit cleaner, a bit richer, a bit softer round the edges, we would’ve been.
                                Bert, Ronnie, Shamus, Maureen. I wanted people to know who they were, what we did. So, I started writing our story. Have a look around. Have a read.
                                    Do us a favour, yeah? Spread the word. </p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Letter':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>17th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Borrowed: Photos<br />
                                I ain’t no saint, you’ve probably guessed that by now. But taking things from the dead. I’d never imagined that. We borrowed the Saint Christopher from the man in the Warehouse,
                                the night that Alfie first kissed me. The contents of a safe from a cafe in Bethnal Green that paid for our trip to the cinema. A watch from an old lady in Limehouse.
                                A wallet from a fella who didn’t make it in a factory in Poplar that brought us three packs of cigarettes. We smoked half a pack in a night watching warehouses.
                                I told Alfie my life story - it was scintillating. He told me his. It was brief. We talked about our plans for the future.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Scarf':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>17th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <div className="TextModalHeader">Welcome to our house</div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Mine and Alfie’s. We were married a year ago. Then we found this place to rent. In the midst of the war. My mother said I was mad. No one expects to have their marriage plans altered by a war do they.
                                We’ve a much bigger plan though.  She doesn’t know because she wouldn’t approve, but there we go. Although to be fair, I’m not sure I would’ve a few years ago. During the Blitz,
                                there was a lot of looting going on, the wardens and others were understandably more interested in getting people out where they could. They couldn’t keep control of the… So, because they were all derelict and open,
                                people could go in and…well… We heard there was some purloining of stuff from bombed out houses. Jewellery and things like that. So now, Shambles Lane is quite a thriving business. You can also get extra meat, eggs,
                                things like that. You had to pay them an exorbitant price. Just local villains trying to make money. If they caught these black marketeers they were chucked in prison. I’ve no doubt everybody hates them.
                                    They were not doing anything for the war effort. Never thought I’d be one of them, but there we go. We make it a point to remember each person. See for yourself, we take good care of the stuff we borrowed.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Trunk':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>17th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <div className="TextModalHeader">April 1941</div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Borrowed: China, boxes and gold rings.<br />
                                There were flames in a house on Smithy Street. We carry an old couple out, still in their dressing gowns, lungs full of smoke.  When the ambulance has taken them, we head back to our post. Alfie says “Thank God they’re alive.
                                Think they’ll be alright?” I tell him “Course they will. Strong as old boots them two. Like you and me.” Then he spots my pockets. China, boxes and gold rings, shiny even in the dark. He’s cross. I broke the deal. They ain’t dead you see.
                                Yet, I can’t help but think it’s the older generation’s fault we’re in this mess. All these wars and problems. Nothing to do with me, I’m just an innocent bystander.
                                We don’t live in a world that’s equal. You think those people in them fancy town houses in West London are three to a bed like me and my family? I’m not just a borrower, I’m an equaliser. We just need to do what we can to get through this.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Sandwiches':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>17th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <div className="TextModalHeader">1940</div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Borrowed: Nothing tonight<br />
                                Thing is, the government is properly concerned about looting. It has bought in the death penalty and life sentenced as a deterrent. Although they haven’t executed anyone yet. They mostly give fines.
                                Alife heard about a warden who was looking through a bomb-damaged home looking for survivors. He and his team came across a bottle of brandy, he decided to share it with his men to boost their spirits.
                                He was prosecuted for looting, which just seems ridiculous.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomThree-Shelf':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>17th April 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <div className="TextModalHeader">8th March 1941</div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Borrowed: Jewellery<br />
                                A well-known nightclub suffered a direct hit in the Blitz.
                                It’s often attended by celebrities, soldiers and the upper classes … People flocked to the scene.<br />
                                Some stole jewellery from dead bodies.
                                Even the churches and air raid shelters were looted.
                                Some felt they had to do it to save their families from starvation.
                                Stealing what they could. You could feel the hurry, You could feel the chaos
                                None of us knew if we would wake up the next morning.</p>
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
                                <p>Called up? Need an out?<br />
                                Everything at a good price,<br />
                                Here, Doctor’s orders.<br />
                                Living the high life,<br />
                                Benevolent Doc, or crook?<br />
                                Tricky path to walk.<br />
                                Human nature doesn't change. There is a great deal of bravery, strength and fortitude shown by so many people in London. I’m just afraid I’m no longer one of them. Our house was hit and I lost…<br />
                                In my grief, I walked into the underbelly of London at war. It has provided its own sort of comfort. One can make a tidy sum marking patients as unfit for military service. There’s no doubt about it, there is a financial reward to be had. Keeps me in scotch and cigarettes. Although I try to use it to help those in need.<br />
                                Keep Calm and Carry On.<br />
                                Not so easy. No one talks about the sight of the bodies recovered from the bombed premises. How it affects the mind. I did this job for many years before it became more extreme and overlaid with fear. Fear brings out the good and the bad in us – only we rarely admit the bad. Yet sometimes they sit together side by side. I document my cases, my dreams and the news in the hope that one day the impact on the mind might be better understood.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFour-Radio':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Hear the sirens, hear the sirens,<br />
                                London Bridges, falling down?<br />
                                Round up all your kids for now,<br />
                                Because the war has come to town.<br />
                                A million and a half evacuated,<br />
                                Pregnant women, and infirm.<br />
                                This was just the 'Phoney War'<br />
                                Britain declares, then adjourns.<br />
                                    <br />
                                Not a single shot is fired,<br />
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
                                In a Blackout?<br />
                                    <br />
                                Rationing of food supplies,<br />
                                Government orders, sorry guys,<br />
                                Gangsters sense opportunity,<br />
                                Get a black market on the rise,<br />
                                One egg a week, but no more!<br />
                                Ration books for merchandise,<br />
                                A family of three - but four eggs?!?<br />
                                Someone must be telling lies...<br />
                                    <br />
                                Police and young men join the army,<br />
                                Less to keep the law enforced,<br />
                                Kids are running riot now,<br />
                                Fifty-two thousand, in the courts.<br />
                                But conflict wise, all is quiet,<br />
                                Maybe the Germans called it quits?<br />
                                Kids drift home, back to the cities,<br />
                                Just in time, for the Blitz.<br />
                                    <br />
                                Blackout curtains, air raid wardens, gas masks,<br />
                                Brits'll be prepared!<br />
                                Evacuees back to the country,<br />
                                Maybe there, they'll be less scared,<br />
                                    <br />
                                Lights are out, remove the targets, make the bombing that bit harder,<br />
                                But dark and bombs are ideal places,<br />
                                For any dodgy Business Starter,<br />
                                Pull together, by all means, stiff upper lip, we'll sort it out,<br />
                                But don't be surprised, through chance or hunger,<br />
                                What Things We'll Do, In a Blackout.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFour-PatientChair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>CASE NOTES</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Patient 1<br />
                                Female – Pale looking, skinny<br />
                                Squeeze arms, poke chest, tap back, peer into eyes, check mouth and ears.<br />
                                Diagnosis: Malnutrition. Normal charge.<br />
                                    <br />
                                Patient 2<br />
                                Male<br />
                                Complains of an intense pain, which he can feel from hip down his leg. Holds his knee. Declares he can’t play cricket anymore.<br />
                                Diagnosis: An envelope of cash for a note confirming unfit for military service.<br />
                                    <br />
                                Patient 3 <br />
                                Male<br />
                                21<br />
                                Highlights his “pes planus,” said it has been like it since a child – the arch never developed.<br />
                                Diagnosis: Confirm flat feet. Write letter. No additional cash exchanged.<br />
                                    <br />
                                Patient 4<br />
                                Male<br />
                                38-year-old from Stepney complains of poor eye sight.Sin the colour of spam and hair like a domestic mop, clearly isn’t a day over 25.<br />
                                Diagnosis: An envelope of cash for a note confirming unfit for military service for the gentleman he is being paid to stand in for.<br />
                                    <br />
                                Patient 5<br />
                                Male<br />
                                18<br />
                                Pale, eyes deep wells, shadows circling beneath them. Feet are shuddering against the floor. Explains his father served in the Great War. He can’t speak out about what he experienced. Since the letter came, neither father or son are eating or sleeping.<br />
                                Diagnosis: I gift him a letter. No charge.<br />
                                    <br />
                                Patient 6<br />
                                6 yrs, female, poor condition. Pronounced stridor heard and having barking coughing fits.<br />
                                Diagnosis: Whooping cough. Normal charge.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFour-WheelChair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Dreams</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dream One<br />
                                For a second the world seems to stop as my gaze trailed from my patient and her mother to the child's drawing of Winston Churchill. Natalia made it for me as a thank you gift for when her illness improved, as I turn back to my patient and her mother,
                                they had vanished and in their place was Natalia, skin ripped and torn, and her mother who along with her father had died in a blackout raid in their country home, with her black silk dress and vibrant red heels both ripped to pieces and decaying.
                                I screamed. The moment I stopped screaming the young patient, I realised had jumped out of her chair and was attempting to hide behind her mother who was staring at me in shock. She hurried her out of my consulting room.
                                I shook my head, amazed. That had never happened to me before. Maybe I was stressed out from a long day of work. I promised myself a good long rest when I got home. But when I finally reached my fifth-floor flat,
                                I saw there was a ready-made sandwich on my dining room table. I didn't remember it being there when I left and know no one could have got in. Right? But I ignored it and laid down on my bed with white linen sheets.
                                Crisp and freshly laundered by my cleaner this morning. WAIT. I DON'T HAVE A CLEANER! I awake from a troubled sleep filled with childish dreams filled with ghost cleaners and zombie patients. Slipping out of bed I scramble for my clothes.
                                These are neatly folded. 'Honestly I need to investigate this ghost cleaner!' I say to myself as I slip on my black mackintosh. I stride down the stairs and down the street. When I finally reach the hospital I walk down the corridor to my office and sit down at my desk.
                                I look down at my desk. It is a beautiful dark oak. When I look up, I see that Nathan's wheelchair is sitting by my medicine cabinet and NATHAN, who has been in a wheelchair for five years, is walking down the corridor! I shout down the corridor.
                                He turns around to face me and I see that his face is as pale as snow. And his teeth are as sharp as knives. A scream escapes my lips. Nathan lunges at me with his teeth bared. I pass out.<br />
                                    <br />
                                Dream Two<br />
                                We are back in the orchard, Grace wearing her wedding dress again. We sit for a while, sharing the apple, bite by bite, the breeze on our skin.
                                What happened to the apples on the ground? The ones blown over by the hurricane? Grace reminds me they were swept up. I gave them away. She tells me its nearly time to go. I ask her not to leave.
                                She tells me there are so many things left to do. I don’t know how to do them without her. The trees in the orchard are blooming, full of apples, red, green, and yellow. Grace picks a green one and holds it in her palm. She puts her hand up to throw me the apple. In an instant, I awake at home, alone.
                                <br />
                                I lie on my back, rubbing my eyes. I look to the scars on the wall. Get up and grab my overcoat. I find myself back at the Kammerling house, knock on the door. Rebecca Kammerling shouts from inside, “It’s Christmas. What d’you want?”
                                “Apples”, I shout, “all of your apples. Whatever fruit you’ve got.”
                                I go to another house, and the basement of a pub, an alley, another house, and another, and another. The next night when I head to Bethnal Green station, my pockets are weighed down. I walk up and down the tracks and the platform, quietly laying apples at sleeping children’s feet.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Armchair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I hope we never have another war again.<br />
                                These aren’t memories. They burn into you.<br />
                                We got bombed out …I think six houses got completely destroyed, but the roof went off our house and when we went up out of the shelter in the morning to see what the damage was, there was a huge hole in the road,
                                all the sewerage was broken, electrics, gas, and when we went in the house – this is absolutely true – the milk had a carton top with a hole that you could put a straw in – that you could push the straw through like some of the cartons today –
                                and it was full of milk when we went to bed, well – when we went down to the shelter, but after the bomb we went in there, and all of out and it was full of soot. I saw it with my own eyes. When we went out into the garden, the house on the
                                other side of the road, right in front of us, it was no longer there. Just dust.<br />
                                It’s so devastating for everything. The horror of seeing the bombed-out places. People hurt and families broken up. It’s never really the same again after somehow. Relationships get completely broken down.
                                It’s a horrific thing man should want to do so much injury, both mentally and physically, to another human being, irrespective of colour, creed, or religion. And these traumas will stay with some people right through their lives.
                                Why can’t people just be sensible and talk things over? I think people are so power-crazy. Never satisfied with what they’ve got, are they? It’s just power, power.
                                It makes me sad that people are so naive about things. They just can’t live their lives…<br />
                                Power and money, it’s what ruins everything.
                                We have this Iovely world and we’re making a right hash of things. All for power and greed. For no other reason at all. When there’s so much we could be doing together and generally much, much happier with one another.
                                I hope to make it to the end of the war. Here, hiding at my grandmother’s house. I write stories and poems to pass the time away. It brings me a lot of comfort. I like to think about the different sides to each story</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Books':
                return (
                    <div className="TextModalConatiner">
                        <Typist cursor={{ show: false }} startDelay={1000}>
                            <span className="TextTypeWriterHeading">
                                <p>A Dream</p>
                            </span>
                        </Typist>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>It was about 5:00 PM on a bleak winter's evening. The lights were off and my whole family was scared. Even the dog made those whining noises. I was sitting next to the radio about the latest news about what is going on,
                                whilst loud bangs were going off outside, like the world had turned upside-down and inside-out. Bombs were going off now and then nearby, whilst meanwhile I was contemplating my life and thinking that this may be my last night here.
                                Bullets were going through the windows, and shatters of glass fell everywhere. I hugged my mum and dad with tears falling from my eyes. Everything stopped. It was silent. It was like I was deaf, and I couldn't hear a thing. My eyes closed slowly,
                                and when I opened them again, it was a whole new day. The windows weren't broken like they had been, and the house looked completely different. My parents were in the kitchen making tea and they said: "You've been asleep for a long time, you missed lunch!"
                                    I realized that this was some sort of a nightmare, but I heard a faint bang in the distance. It was a vision of the future…</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Table':
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
                                  And I didn’t know what,<br />
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
                                  “RUN, THE GERMANS ARE HERE!”<br />
                                  I picked up pace<br />
                                  Running as fast as I could<br />
                                  This really was not fun!<br />
                                  “COME HERE BOY!”<br />
                                  “WE'VE GOT HIM NOW!”<br />
                                  I missed my chance to run.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Fireplace':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>When will we see again?<br />
                                    A question on everybody's hearts.<br />
                                    When will the darkness go away?<br />
                                    Is what nobody ever asks.<br />
                                    When will the curtains swish aside, revealing squares of light?<br />
                                    When will no one have to worry about bombing in the night?<br />
                                    We walk past shut-up cinemas and we miss illumination.<br />
                                    But going out has long been but a hallucination.<br />
                                    When will we all see again?<br />
                                    And chase out all the dark?<br />
                                    When will we kiss and hug our friends, not afraid of a laugh?<br />
                                    The darkness hides inside our eyes, and the cold won't go away -<br />
                                    But we all know we'll wake again, and trudge through another day</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomFive-Bookcase':
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
                                    I have too much to do these days<br />
                                    But lateness is a crime now<br />
                                    Conscription awaits me<br />
                                    Terror. I feel it through my whole body.<br />
                                    Deep, scared breaths</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Door':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>London, 1940</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I’m eight years old and today my Papa went away. He was in the garden sanding a table when two policemen knocked on the door.<br />
                                I paint pictures of Papa in the few colours I have. Paint is my favourite now because I’m not allowed anything else. Papa has been gone for two months and we don’t know when he’ll be back.
                                The rules are that we try to still be cheerful because Papa is helping with the silly war, so I have taken it upon myself to sing as often as possible.
                                I am not sure if it is helping but I still carry on. Neville helps out too when he’s not out eating mice and meeting other neighbourhood cats.
                                Mama is the man of the house, except that she’s not a man, so she is actually the woman of the house, but she’s in charge. Walter is her deputy, I’m in charge of art.
                                And also singing. I just added that one. I don’t think they’ll mind.<br />
                                We’re going to sell all of the things we don’t need anymore.
                                Clothes, books. We go with Mama to Hatton Garden to sell her jewellery. I see a tear fall onto the counter in the shop when she parts with a broach from Grandma.
                                I still don’t really understand why we’re doing this but I hold Mama’s hand. She doesn’t speak much on the way home.<br />
                                We ask Mr Hart at the Butcher’s shop for bones for Neville.
                                And then we use the bones to make soup which Neville doesn’t eat because he doesn’t like soup, he prefers a tasty mouse or bird. Luckily, we don’t have to eat those jellied eels any more.<br />
                                I wake up in the morning, often Mama’s already in the kitchen. Sometimes I’m not even sure if she’s been to sleep and she doesn’t eat much these days. One day, our neighbour Dr. Sutton comes to visit,
                                he talks a bit like the King and gives me an apple to eat while I paint a picture in the kitchen.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-RationBook':
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
                                <p>The new rule is we do Art School every day. The Doctor’s friend with the funny moustache brings us paper, ink and rulers after dark and I draw for hours and hours.
                                    Walter takes a ruler and makes sure everything is straight. Mama says we’re helping more people to get clothes which I’m happy about.<br />
                                    I’m thirteen years old now, which makes me officially a teenager. Neville is six which is middle aged in cat years, Walter is 15, which makes him officially even more annoying.
                                    Art school is our official family business. Every morning we have breakfast together and then we get to work, Papa and Walter on goods and trading,
                                    Mama and I on making more ration books. We break for lunch and play with Neville. Papa says it’s “quality time”. The rules are. we’re still Jewish, and a bit German, and a bit English.
                                    We’re just us, people in the world.<br />
                                    One day, we hear an announcement on the radio.<br />
                                    The war is over.<br />
                                    I went outside a few nights later especially, because it had always been so dark. They said the lighting would be coming. So, I went out to wait for the streetlights to come back.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Scale':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Wednesday, 6th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,
                                Tomorrow’s the day. Tomorrow is the first ever time that I leave my family for another. Today, my mum kept me off from school to pack all the important items in my life.
                                To be perfectly honest, I don’t know why I needed the full day: I’ve packed many times. Unfortunately, I’ve been made to leave my favourite poster behind and some of my books.
                                I did manage to pack “Goodbye to Berlin” and “The Adventures of Sherlock Holmes” though so I’m super happy about that. My train ticket is currently sandwiched between the pages of my ration book. I
                                wonder what Devon will be like. This will be my third home. Gosh. I’ve moved a lot recently. Mother’s calling me for supper so signing off now.<br />
                                Yours,<br />
                                Baruch,<br />
                                P.S. Those books were nearly taken away from me in my first home. I’m so glad that they’re still with me.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Chair':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Hello. My name is Esther Yohanna Kammerling. I’m a Londoner. I live with my family in Stepney. I didn’t used to be a Londoner.
                                I grew up in Berlin. We moved here just before the war. Even after all these years, London still feels like a big place.
                                    I don’t know where I am going. Occasionally, I pang for life in Berlin and of course, Moritz, my cat. He never made it here.<br />
                                    My brother Walter complains about the food here. He is not a fan of rationing! Some people cheat it though and they steal ‘cause they can sell it on.
                                    They broke into our own kitchen once and stole our rations, eggs, and milk. They are the type of thing you can get money for – especially if you go down Shambles Lane.<br />
                                    I was surprised they stole from us though. We don’t have very much. One of my friends at school had an uncle who was caught scouting out the wealthy areas.
                                    He’d worked out which houses had wine in the store. They knew they could sell it on. See, I don’t think many of them are professional criminals though, they are just normal people, you know.
                                    Desperate to make ends meet. Everyone needs to eat.
                                    We are lucky that our family is now all here and safe. I draw pictures of Moritz after all these years. We sit together in the kitchen for art school.
                                    You will find my drawings and diaries around the room telling my story, along with my cousin - he went to Devon for part of the war.<br />
                                    Take care and I’ll see you soon,<br />
                                    Esther</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Chair2':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader"></div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>I’ve been hiding in this basement for several weeks<br />
                                    The grey walls and the cobwebs look so indecipherable<br />
                                    The wooden floor creaks if I sit down.<br />
                                    So, I sit on my trunk.<br />
                                    I look at the sack of potatoes in the corner<br />
                                    I guess the English like their potatoes<br />
                                    It’s quite different here to France<br />
                                    It always seems to rain<br />
                                    And it’s utterly freezing<br />
                                    I have to wrap up in my scarf to keep warm<br />
                                    And all I can do is listen to the radio<br />
                                    But there’s no sound<br />
                                    Just a voice<br />
                                    I think it’s a man<br />
                                    He’s shouting at something<br />
                                    Like it’s done someone wrong to him<br />
                                    And he wants to tell the world<br />
                                    What was it done to him?<br />
                                    Why is he saying…<br />
                                    I try not to think about it<br />
                                    Like mama used to say…<br />
                                    “Tsi nit trakhtn tsu fil”<br />
                                    It means, “Don’t think too much”<br />
                                    Mama always knew I thought too much<br />
                                    She was the best<br />
                                    She always knew what to say<br />
                                    Mainly in Yiddish<br />
                                    I stuck with English personally<br />
                                    It’s so much easier to say, “How are you?”, than, “Vas makhstu?”<br />
                                    Don’t you think?<br />
                                    I always wondered why Mama used Yiddish<br />
                                    Her parents didn’t speak Yiddish<br />
                                    I wonder…<br />
                                    I’m doing it again, aren’t I?<br /><br />
                                    I’m bored.<br />
                                    I think its potatoes for lunch again<br />
                                    Why do people eat so many?<br />
                                    Their all sticky and starchy<br />
                                    It’s gross<br /><br />
                                    I decide to flip through my passport<br />
                                    I see my name written in blue ink<br />
                                    Esher Mon Heldish<br />
                                    Born September 25, 1922<br />
                                    I hate my name<br />
                                    Baba and my brother used to say it was boyish<br />
                                    I carry on looking<br />
                                    The stamps feel like they’re flying off the page<br />
                                    The memories rush in and out of my head<br />
                                    Then, the blue sky of the Alps catches my eye<br />
                                    Baba and I are standing on a mountain<br />
                                    We used to love going hiking<br />
                                    Before the war started though<br />
                                    I close my eyes and try and get some sleep<br />
                                    “Open Up!” Went the hatch<br />
                                    I start to shake<br />
                                    Is this it? Is my time up?<br />
                                    The hatch starts to open slowly<br />
                                    I feel like my heart is about to explode with all the horror rushing through my blood<br />
                                    “Post!”, goes the open hatch<br />
                                    I realise on that second, life’s not over yet.<br />
                                    It’s James, the master of the house<br />
                                    I’m surprised I didn’t recognise him<br />
                                    He does this so much<br />
                                    And he has such a rich and oily voice, you could find him in a crowd of a million<br />
                                    He passes me a letter and a lidded crate<br />
                                    “It’s jus a lil’ some’ing”<br />
                                    I take the lid off the crate to see somewhat of a hamper<br />
                                    I place it on the table<br />
                                    I pull out a couple of things<br />
                                    Firstly, I get a Ham and Potato sandwich with a bottle of wine<br />
                                    Then, a lantern with some candle matches<br />
                                    And then lastly, I see a thin cashmere quilt<br />
                                    I say thank you and sit down<br />
                                    I wrap up in the quilt, have a sip of the wine and open the envelope<br /><br />
                                    My dearest Esh…<br /><br />
                                    I realise now who this is<br />
                                    It’s Robert.<br />
                                    We’ve been together for two years<br />
                                    I haven’t seen him for 15 months<br />
                                    I carry on reading…<br /><br />
                                    I can’t wait to see you again, and I miss your luxurious hair.<br /><br />
                                    He always talks about my hair like that, like he thinks it’s a person!<br />
                                    Me and the brigade are off to Paris, Germans they are up to no good, it shouldn’t be too much to take care of. Hitler isn’t strong enough to defeat me!<br />
                                    Love lots and lots, Robert<br /><br />
                                    I smile to myself in that moment<br />
                                    A little bit of happy is inside my heart<br />
                                    I decide to try and get some sleep, again!<br /><br />
                                    Boom! My eyes open in a flash<br />
                                    Boom! I hear screaming all around me<br />
                                    Gunshots are firing in every direction<br />
                                    And the floor is shaking like a maraca above me<br />
                                    “Where is she!”<br />
                                    I stop.<br />
                                    They’re looking for me<br />
                                    I slowly creep up to the hole in the hatch to see what’s happening<br />
                                    “I don’t know where she is!”<br />
                                    I see a man standing in front of James wearing a tea-coloured jacket and a red armband with a black and white symbol<br />
                                    “Where. Is. She?!” The man says again<br />
                                    I can see James is terrified from head to toe<br />
                                    “Like I said, I don’t know!”<br />
                                    The man’s face suddenly turns as red as his armband<br />
                                    He points his finger and then two men pull up beside him carrying a sniper rifle in each hand<br />
                                    “This is your last chance, man”<br />
                                    James’ face turns as white as paper<br />
                                    “I will never tell you, even if I did know!”<br />
                                    Bang!<br />
                                    James’ lifeless body drops to the floor<br />
                                    The man points again then seven men come rushing into the house, trampling on his body<br />
                                    “Find her. Now!”<br />
                                    I sit back down on the trunk with my hands over my face<br />
                                    The person who took me in when he had no reason to<br />
                                    The man who gave me food and water when times were bad for even the richest<br />
                                    He did everything to help me<br />
                                    And I all I could do was watch him die<br />
                                    Right in front of my eyes<br />
                                    And I did nothing<br />
                                    Just. Watch<br />
                                    I feel my body rocking forward and back<br />
                                    I can’t clear my mind<br />
                                    I look in a broken mirror on the wall<br />
                                    I have a plan<br />
                                    I grab my passport off a crate and place it under an empty sack of potatoes<br />
                                    I also place the picture of me and baba in the Alps loosely on the table.<br />
                                    And for the finishing touch, I leave out the letter Robert wrote me<br />
                                    I try to make it look like I am escaping back to France<br />
                                    I hide under a pile of cloaks in the corner and wait<br />
                                    About an hour later the hatch opens quickly, and I see a big man thump and down like an elephant<br />
                                    He sniffs around and notices the picture and the letter I left on the crate<br />
                                    He picks up his radio and speaks<br />
                                    “Sir, I’ve found a basement in the house, she’s been here, over”<br />
                                    He puts the radio back and leaves the basement<br />
                                    This is my moment<br />
                                    I rush to my passport and get the cashmere James gave me and climb out of the basement<br />
                                    I look around to see if anyone is there<br />
                                    No one<br />
                                    I slip out of the door of the house and try to look as normal as possible<br />
                                    I see lots of soldiers around the street<br />
                                    I keep my head down and walk a little faster<br />
                                    After about a five-minute walk<br />
                                    I look up to see a sign saying<br />
                                    ‘Liverpool Street Train Station’<br />
                                    I sigh in relief<br />
                                    I rush to the door but then two men stand in front of the door<br />
                                    “Where are you off to, woman?” One of them ask me<br />
                                    “I’m off to…<br />
                                    I peak through the door to see the map and I spot the farthest place they can go<br />
                                    “I’m off to Coventry”<br />
                                    “Any reason in particular?” Goes the other<br />
                                    “To visit my dear old grandmother, she’s really lonely right now. My grandad passed away a little ago you see.”<br />
                                    I try and put on a London accent, like the kind James used to have.<br />
                                    “We need to see your passport”<br />
                                    I freeze<br />
                                    “Umm, sorry, I haven’t brought my passport with me”<br />
                                    The two men look at each other suspiciously<br />
                                    “Ok, we’ll let you through”<br />
                                    I start to walk to into the station<br />
                                    But,<br />
                                    As I pass<br />
                                    I accidently bump into one of them and I drop my passport<br />
                                    The man picks it up and reads it<br />
                                    “Esher Mon Heldish… Wait, that’s a Jewish name!”<br />
                                    The two men grab me by both arms and carry me through the station<br />
                                    I shake with all my might<br />
                                    But there’s nothing I can do<br />
                                    They place me on a train with two carriages<br />
                                    As I step in the first carriage<br />
                                    I see about 10 people wearing yellow stars on their clothes<br />
                                    And 3 guards in the carriage with us<br />
                                    “Where are we going?” I ask one of the people on the train<br />
                                    “I don’t know, I was taken away from my mum.”<br />
                                    I look around the carriage to see two barred windows<br />
                                    Suddenly, the train starts moving<br />
                                    The trains very shaky and I see the loose wood on the walls moving up and down<br />
                                    I lean against the wall and close my eyes<br />
                                    Suddenly, the train screeched to a stop<br />
                                    The people on the train are huddling around the window<br />
                                    I ask<br />
                                    “Where have you stopped?”<br />
                                    “We are here”<br />
                                    “Where though?”<br />
                                    “To a place of death”<br />
                                    I take a step back and think<br />
                                    A place of death?<br />
                                    The guard lead us out of the train, and I see men with big dogs<br />
                                    Barbed wire and electric fences everywhere<br />
                                    We are led into a big area and the guards tell us men on the right and women and children on the left<br />
                                    There is an officer on a pedestal, and he points left and people go to the left<br />
                                    I am terrified<br />
                                    I move over to the right in an instant<br />
                                    I see many things someone shouldn’t see<br />
                                    Then, the officer looks at me<br />
                                    “You girl, over there!”<br />
                                    Everyone is looking around, but the man keeps his eyes on me<br />
                                    He points and two men push me out of the queue<br />
                                    “I want her!”<br />
                                    The men bring me up to where the officer was<br />
                                    They throw me on the floor and the officer looks down on me<br />
                                    “This is what happens to traitors!”<br />
                                    Suddenly, I feel something pierce through my skull<br />
                                    I can feel blood dripping down my face<br />
                                    My head falls to the ground and I look up at the officer<br />
                                    He steps down from his pedestal and kicks me in the head<br />
                                    My head flings like a spring<br />
                                    I feel my eyes close<br />
                                    The pain is indescribable<br />
                                    I try and get some sleep now<br />
                                    I slowly feel all my pain go away<br />
                                    “Wake up, wake up Esh!”<br />
                                    I slowly open my eyes<br />
                                    “Where am I?”<br />
                                    “You’re at home silly; it’s your birthday!”<br />
                                    I look around and to my surprise, I see a child’s bedroom<br />
                                    “What year is it?”<br />
                                    “1936 of course, you’ve turned twelve today!”<br />
                                    “You must have had a bad dream Esh, I’ll make you some tea!”<br />
                                    “Wait, so it was all a…”<br />
                                    “Oh no.”<br />
                                    The End, hopefully…</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Window':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Friday, 8th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                I have been at this new place for 2 days now and I already hate it. Devon, even though it is by the sea, is a truly terrible place;
                                nobody wants to hang out with the “new kid”. I hate being called that. New kid. All I’m called at the Darlingtons is “Boy”, “You” and “Kid”.
                                They had no spare rooms so have put me in their basement (which is also their air raid shelter). My first home was… I don’t want to talk about it.
                                My second home, glorious London, was much better. Devon is the lowest of the low! I wish something exciting would happen! I wish people would respect me!
                                Oh. My host is knocking on my door with my supper. Speak soon, dear Diary.<br />
                                Yours,<br />
                                Baruch</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Window2':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Saturday, 9th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                What news I have to tell you! Not only did something extraordinary happen to Mrs Darlington but I received a letter from Mother. Reading it brought back memories of my first home.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Photo':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Monday, 30th January 1933</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                The worst has happened. Mr Hitler has come to power. Me and my family are doomed. We will die unless we do something. My father has suggested running away whilst we can. Berlin will be a tougher place to live if we stay. I start packing tomorrow.<br />
                                Baruch<br /><br />
                                Back to present day me now, and Mrs Darlington’s issue. Someone has stolen her potato peeler! She doesn’t trust anyone except for me: I never leave the basement except to go to school. Baruch Holmes at your service.
                                I said thank you to her and came straight to you, dear Diary. This is the most exciting thing that has happened in my time here. Whenever something riveting comes up in the potato peeler case, I will spread the news with you dear Diary.<br />
                                Yours,<br />
                                Baruch</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Sink':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Monday, 18th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                I still have no friends at school; the teachers are helping me fit in though, which is super nice of them. Sadly, Lublin has fallen to Mr Hitler; I hate him.
                                He has an utterly ridiculous and evil belief to force my family and other families out of Berlin, my worst home yet. Life was normal until he showed up.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Cooker':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Saturday, 28th January 1933</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                My father fears the worst. The government has not been able to stop the Nazi party from gaining power; now, Mr Hitler will soon be named chancellor. It’s horrible! I don’t want President Hindenburg to appoint this horrible man.<br />
                                Baruch<br /><br />
                                I hope Germany lose the war; I know I shouldn’t say this about my home country but I do. Hitler deserves to die for what he’s done. In other news, I am close to solving the case of the missing potato peeler:
                                I have a hunch that Mr Darlington or his daughter, Dorothy, might be the culprit. I know for certain it’s one or maybe even both of them. Simon Darlington was asleep when it was stolen and Jim Darlington was out with his girlfriend, Patricia.
                                I should hopefully have the culprit nailed in the next couple of days so watch this space,<br />
                                Baruch</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Fridge':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Tuesday, 26th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                The past couple of days have been busy, busy, busy. The potato peeler case is still unsolved; there has been high drama.
                                I thought it was Mr Darlington but, turns out, he was actually out playing pool with his posh friends. I knew it must be Dorothy then, surely.
                                Low and behold, she was out as well. Someone has to be lying! But who?! Could it be Simon? Jim? Dorothy? Mr Darlington? Or is it Mrs Darlington?!
                                This is chaos! In other news, we’ve shot down a Luftwaffe! Well, not us specifically but Britain! We’ve done something good for once in this war.
                                Britain has been my home now for nearly 7 whole years! Seven! And I’m 12! I moved here when I was 5 years old. I can still remember that gruelling first day.</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Sugar':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Monday, 6th February 1933</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                We are safe. We are here. England. My new home. Where I belong. Berlin was never for me and my family. It is home to horrible people like Mr Hitler and all his stupid supporters.
                                He will be the downfall of Germany. Some people call Hitler a saviour for Germany. I call him a lunatic. He will get all the Germans killed one day but for now he remains,
                                with his silly small moustache and his stupid salute. What even is that? That is not a salute! I’m outraged that he is ruling my beloved Berlin.<br />
                                Baruch<br /><br />
                                Looking back at this, I realise he… is still an awful man and has a stupid moustache. His salute… why do I call it that?! His arm-raising is so idiotic. Mr Hitler is a really nasty piece of work!</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Cupboard':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Saturday, 30th September 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                I have fantastical news! The case of the missing potato peeler is officially closed. I now know who stole the potato peeler. The person who stole it was… a person who lied to me: they said when the peeler was stolen,
                                they were asleep but yet they were not! You see, Dorothy, Mr and Mrs Darlington’s daughter, has the bedroom next door to the culprit and says that when they go to bed, they blow out a candle and yet, when she went to bed on that fateful evening,
                                she saw a small speck of light coming from the peeler stealer’s room. I, of course, went to investigate their room whilst they were out buying Union Jacks and found two vital pieces of evidence that made me come to my conclusion.
                                My first piece of evidence was that I found no novels, or any type of book for that matter, in their room; my second was a notepad that they kept by their bed. It was open on a page, which I read, and found to my great horror that he had stolen the potato peeler.
                                But who is he, I assume you are wondering dear Diary. Well, it is none other than Simon Darlington, Mr and Mrs Darlington’s son. He, in that entry, said that he wanted to make a joke out of it and tell his friends. Simon thought it would be funny;
                                it was the complete opposite! Mrs Darlington, when I showed her the notepad, went wild with rage and demanded an answer from him when he came back from town. Simon, at first, refused to be any part of it and blamed it on me; he forgot that I only stay in the basement (apart from when I go to school, of course).
                                That forced him to confess! Mrs Darlington’s precious potato peeler has now been returned to its rightful owner and I have solved the potato peeler incident! Hurray for Baruch Holmes! Because I managed to find the person who stole her potato peeler, Mrs Darlington has now started calling me Baruch and not “You” or “Boy”.
                                I am thinking that life in Devon won’t be so bad after all, dear Diary.<br />
                                Baruch</p>
                            </span>
                        </motion.div>
                    </div>);

            case 'RoomSix-Letter':
                return (
                    <div className="TextModalConatiner">
                        <div className="TextModalHeader">
                            <Typist cursor={{ show: false }} startDelay={1000}>
                                <span className="TextTypeWriterHeading">
                                    <p>Monday, 23rd October 1939</p>
                                </span>
                            </Typist>
                        </div>
                        <motion.div className="TextModalContent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 3 }}>
                            <br />
                            <span className="TextTypeWriterTextCenter">
                                <p>Dear Diary,<br />
                                Well, I have officially gotten through my first half term of school in Devon! No school for another week now but to be perfectly honest, I am pretty miserable. You see, dear Diary, I have actually started making friends at school, who refuse to call me “new kid”.
                                One of them is also a refugee from London called Robert Taylor; he is a splendid boy, who is incredibly competitive when we do games. His twin sister, Betty Taylor, also goes to my school and is competitive as well. However, there is one boy who is my best friend in the entire world.
                                He also came here from Germany to escape Hitler. Now, dear Diary, I must point out that he is not a Jew like me. This boy is pure German but his family did not like the rules Mr Hitler was going to introduce and this boy is called Wolfgang Friedrich; his surname, in German, is composed of the German for peace and “rihhi”, which translates as prince.
                                One time, I went to his home and met his father, Manfred, his mother, Heidi, and his younger sister, Rita. They all seemed very nice people and they seemed to like me too. Overall, my first term in Devon has been terrific fun.<br/><br/>
                                Meanwhile, with the Darlingtons, it has also been splendid: after I solved the missing potato peeler case, Mrs Darlington, the following night, knocked on the basement door and asked if I would like to eat with them at the dinner table that night.
                                I finally enjoyed a meal with people again; even though it was not with my proper family, I am glad that it was not with total strangers. I still think about mother and father a lot; I occasionally write to them and they always write back. I miss them. I wish they could see me now: an amateur detective, a friend to some, a person who finally belongs in Devon.
                                The war still continues; I, still, believe that the United Kingdom will win the war. Mr Hitler has changed my homeland for the worst, not for the better. Thankfully, Wolfgang agrees with me. Oh, Mrs Darlington’s calling me for dinner.
                                Speak soon,<br />
                                Baruch Cronenburg </p>
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