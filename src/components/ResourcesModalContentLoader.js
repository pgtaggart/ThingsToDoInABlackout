import React from 'react';
import { motion } from 'framer-motion';

import hfh1 from '../images/resources/HFH_1.jpg'
import hfh2 from '../images/resources/HFH_2.jpg'
import hfh3 from '../images/resources/HFH_3.jpg'
import hfh4 from '../images/resources/HFH_4.jpg'
import hfh5 from '../images/resources/HFH_5.jpg'
import hfh6 from '../images/resources/HFH_6.jpg'
import hfh7 from '../images/resources/HFH_7.jpg'
import hfh8 from '../images/resources/HFH_8.jpg'
import hfh9 from '../images/resources/HFH_9.jpg'
import scriptImage from '../images/resources/Scripts.jpg'


class ResourcesModalContentLoader {

    loadContent(type) {

        switch (type) {

            case 'Heritage-Magazine':

                return (

                    <div className="resourcesModalContent" >

                        <div className="resourcesModalContentSection">
                            <h3 className="resourcesHeader">Heritage From Home Magazine</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_1" id="HeritageMagazine_1" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 1" src={hfh1} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#1</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_2" id="HeritageMagazine_2" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 2" src={hfh2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#2</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_3" id="HeritageMagazine_3" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 3" src={hfh3} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#3</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_4" id="HeritageMagazine_4" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 4" src={hfh4} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#4</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_5" id="HeritageMagazine_5" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 5" src={hfh5} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#5</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_6" id="HeritageMagazine_6" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 6" src={hfh6} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#6</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_7" id="HeritageMagazine_7" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 7" src={hfh7} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#7</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_8" id="HeritageMagazine_8" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 8" src={hfh8} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#8</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/issue_9" id="HeritageMagazine_9" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Heritage from Home Issue 9" src={hfh9} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">#9</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>);

            case 'Radio-Plays':

                return (

                    <div className="resourcesModalContent" >
                        <div className="resourcesModalContentSection">
                            <h3 className="resourcesHeader">Things to do in a Blackout - The Radio Plays Scripts</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_1_-_big_smoke" id="RadioPlay_1" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Big Smoke" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">Big Smoke</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_2_-_the_dead_end_kids" id="RadioPlay_2" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="The Dead End Kids" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">The Dead End Kids</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_3_-_aida___alfie" id="RadioPlay_3" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Aida and Alfie" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">Aida and Alfie</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_4_-_a_tonic" id="RadioPlay_4" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="A Tonic" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">A Tonic</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_5_-_the_deserters" id="RadioPlay_5" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="The Deserters" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">The Deserters</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/playscript_6_-_the_rules" id="RadioPlay_6" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="The Rules" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">The Rules</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>);


            case 'Resource-Packs':

                return (

                    <div className="resourcesModalContent" >
                        <div className="resourcesModalContentSection">
                            <h3 className="resourcesHeader">Resource Packs</h3>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_1_-_1939" id="ResourcePack_1" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack One" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1939</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_2_-_1940" id="ResourcePack_2" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack Two" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1940</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_3_-_1941" id="ResourcePack_3" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack Three" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1941</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_4_-_1942" id="ResourcePack_4" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack Four" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1942</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_5_-_1943-44" id="ResourcePack_5" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack Five" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1943-44</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <a href="https://issuu.com/bouncetheatre/docs/resource_pack_6_-_1945" id="ResourcePack_6" target="_blank" rel="noopener noreferrer">
                                            <motion.img alt="Pack Six" src={scriptImage} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="HFH_Image" height='100px' width='150px' />
                                        </a>
                                        <h5 className="resourcesImageExplain">1945</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>);


            default:
                return (<div>No Content Defined</div>);

        }
    }
}

const resourcesModalContentLoader = new ResourcesModalContentLoader();

export default resourcesModalContentLoader;