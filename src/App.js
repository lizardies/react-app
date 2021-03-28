import React, { Component } from "react";
import Player from "react-howler-player";
import NZJ from "./audioClips/NZJ.wav";
import RIA from "./audioClips/RIA.wav";
import ZMR from "./audioClips/ZMR.wav";
import BVL from "./audioClips/BVL.wav";
import TGN from "./audioClips/TGN.wav";

//in case loading audio takes long
function Loading() {
    return (
        <div>
            <h4>wait a second please</h4>
        </div>
    );
}

// audioClips with Label
const audioClips = [
  {sound: NZJ, label:'Niks Zonder Jou'},
  {sound: RIA, label:'Ria'},
  {sound: ZMR, label:'Zomerhit'},
  {sound: BVL, label:'Beinvloedbaar'},
  {sound: TGN, label:'Tegenkomer'},

]

// rew class
export default class App extends Component {
    state = {
        audio: null,
    };

    timeUpdate = (attrs) => {
        console.log(attrs);
    };


    change = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    onPlayerReady = (data) => {
        this.setState({ audio: data.audio });
    };

    //loops through all audio files and returns them in a list on page
    AllSoundFiles = () => {
      return audioClips.map((soundObj, index) => {
        return(
          <>
          <h2> {soundObj.label} </h2>
          <Player className="player"
          src={[
              soundObj.sound
          ]}
          speedPanel={"bottom"}
          onTimeUpdate={this.timeUpdate}
          onLoad={(data) => console.log(data)}
          profile="top_progress"
          />
          </>
        )
      })
    }

    //render the allsoundfiles function and show audio on app
    render() {
         return (
            <div>
                <h1>
                    Secret tracks
                </h1>
                <div className="playerlist">
                                   
                    {this.AllSoundFiles()}
                </div>

                
            </div>
        );
    }
}
