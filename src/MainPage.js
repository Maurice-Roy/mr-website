import React from 'react'

class MainPage extends React.Component {
  render (props) {
    return (
      <div className="Main-page">
        <div id="About-link" key="About-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}>
          <div>
            /////////////:::::::::::::::::::::::----------------------------------------------------------::::::<br/>
            //////////::::::::::::::::::::::-----------------------------------------------------------------:::<br/>
            ////////:::::::::::::::::::::-----------------------------------------------------------------------<br/>
            /////::::::::::::::::::::::-------------------------------------------------------------------------<br/>
            ///:::::::::::::::::::::-----------------------------..-......-..-----------------------------------<br/>
            /::::::::::::::::::::--------------------------............................-------------------------<br/>
            :::::::::::::::::::---------------------..-.---.................................--------------------<br/>
            :::::::::::::::::------------------..---/+osyyhhhhyyyyyso+/-........................----------------<br/>
            :::::::::::::::-------------------/+oshhddmmNNNNNNNNNNNNNNNmhs+:........................------------<br/>
            ::::::::::::::-----------------/syhhddddmmmmmNNNNNNNNNNNNNNNNNNNh+:-......................----------<br/>
            ::::::::::::---------------.-/syhdhddmmNNNNNNNNNNNNNNNNNNNmdmmmmNNmdhh+:-.....................------<br/>
            ::::::::::-----------------/shdhhddddddmmmNNNNNNNNNNNmmNmmmmdhhddmmmNNdyo+:.....................----<br/>
            :::::::::--------------.-/yddhdddhhhhhhdddmmmNNNNNNNNNNNmmmmddhddmNmmNNNddy:......................--<br/>
            :::::::---------------.-+hdddmmmdhysyyhdmmmNNNNNNNNNmmmmmmmmmmmmmmNNNNNNNNmh/.......................<br/>
            :::::----------------.-ohddmmmmdhyyhhhhdmmmNNNNNNNNNNNNmmmmdhhdmNNNNNNNNNNNNmo:.....................<br/>
            :::::--------------..-ohdmmmmddyyhhhhhhdmmNNNNNMMMNNNNmmmmmmdyydmmNNNMMNNNNNNmh-....................<br/>
            ::::-------------...-shdmmmmddhhyyysyyddmmNNNNNNNNNNNmddddmmmmmddmmmNNNMNNNNNNmo-...................<br/>
            :::-------------..../hdmmmmNdddhyssssyyhhhmmmNNNNNNmmmddddddhhyyyyhhdmNNNNNNNmmh/`..................<br/>
            ::-------------.....shmNNNNmdddhyhhyhhhhdmmNNNNNmdhysssooo+++++++++osydmNNNNmmmm-```................<br/>
            :-------------.....:dmNNNNNmmmmdhyssssyyddhhyso//:----------::://///+oyhmmmmmmdy.`````..............<br/>
            -------------......ymNNNNNNNmdhyyss+++/::--.....``...........---::::/+oyhmmmdds.````````............<br/>
            ------------......-hmNMNNNNmdhys/-..````````````````..........-----::/+shddddms``````````...........<br/>
            -----------.......-hNNNNNmdy/-.`````````````````````...........------:+syhhdddh-``````````..........<br/>
            ----------.........yNNmNh+-.`````````````````````````...............--/oyhddddd:```````````.........<br/>
            ---------..........sNmNh:..```````````````````````````...............--+yyhhdmm/````````````........<br/>
            --------...........+mmm/-..`````````````````````````````....------.....-+yhddmmo`````````````.......<br/>
            --------...........-dmd-....----......`````````````...--::///+oso/:--.--:yhddmdy`````````````.......<br/>
            ------..............+mm:..:+o++++osyhyo/:--.```..-:+osyhhyysssyyyso/::::+ssydmmh-.````````````......<br/>
            ------............`.-yd+-:/+/++/+oyhhhhso+:.`..--/+++syyysso++o+/+++/::::/yhyddy+//.```````````.....<br/>
            ------...........`---:ooo+//+oyhyyhmmmddyo/---:::/+ydddyddNhyyyo///++.---sdy//:--/so.```````````....<br/>
            -----............`/o-.so+/:oyddy/:ydhyshs+/:.`.://yddds/oyhs/+syo:::-...-sds.--.-:+y-```````````....<br/>
            -----............./:.`o:-/.:+oo++++ossys+::-```.-:shdhyo+++/:::/:---....-+h+:o:--:s+````````````....<br/>
            -----...........`./-``o-.-.`.-:-:://///:...````.-:/ooo+//:::-.....-.....-:s::sys+:o-`````````````...<br/>
            ----............``-.:+o-....``........```.````.-::///------..........--..-:.--ydh//```````````````..<br/>
            ----............``..++....``..``````````.``````.:::/+/-..--...``.........:.:+ohho/:```````````````..<br/>
            ----...........```..-:.`..``````````...-.``````.-::://:---..............-//ys+////````````````````..<br/>
            ---............````..``.-.`````````.....```````..-::///-...............-//----::-.````````````````..<br/>
            ----..........```````````.````````````````-...-:/+/:/oo/-.```..........:++:----.```````````````````.<br/>
            ---...........```````````-.``````````````-ss+++oshhsoo/:-............-:/o+:--.````````````````````..<br/>
            ----...........```````...--.````````````-/oo+ososhhhy+:-............--:/o/````````````````````````..<br/>
            ---............``````````.:-.``````.--:+ooo++yyosyhddhso//:--....---:-:/+-````````````````````````..<br/>
            --.............```````````:-..```.:++++//://////++oossyyyys+:-------://++-````````````````````````..<br/>
            ---............```````````-:--..`-:/o+++ssoo+++oosyssyyysyso+:--::-:::/++.```````````````````````...<br/>
            ---............````````````::--...-/+/:--..`....-:///+///++///::::::://+:````````````````````````...<br/>
            ---............````````````./:---..-.`````..-:::///::------:::::::///+o/-```````````````````````....<br/>
            ----............````````````.//----.``````.--/:///:::---...-::::::/+os+-:.``````````````````````....<br/>
            ----.............````````````./+:--.`````````.-:---.......-:/:::/+oss+:::-````````````````````......<br/>
            ----..............`````````````-++/:.`````````..........-://////oyso/::::/```````````````````.......<br/>
            -----.............```````````````-+s/...```......----::::+oooosyys+/:::::/:``````````````````.......<br/>
            ------..............``````````````./so/:-.--::---::/++oooosyyhyso+/:::::///:```````````````.........<br/>
            -------.............``````````````..:osso+++++++++sosyhhdhhhyssoo+//:::////+/.````````````..........<br/>
            --------..............`````````````..:/+syyhhhhyyyhhdmdddhhhyyso+////://///+++:.````````............<br/>
            ---------...............```````````...-://oshdddddddddddhhhyysso++////////++ooo+:.`````.............<br/>
            -----------..............-------...-...-://osssyyssssssyyyysssooo++//////+++oooooo/...-.............<br/>
            ------------.......-:+yhmNNNNNNNmmNy.....-:/+++///:::::::////////////////+/+++oooosssdmh+-..........<br/>
            --------------..-/sdNMMMMMMMMMMMMNNo-.`....-------------------::-::::::::::////++oydNMMMMNh+........<br/>
            --------------:smMMMMMMMMMMMMMMMMNm--.```...-----........-----------------:::/+ydNMMMMMMMMMMh/-.....<br/>
            ------------:sNMMMMMMMMMMMMMMMNMMNm:-.```...---....``...-------.---------:/shmNMMMMMMMMMMMMMMMmy:-..<br/>
            -----------/mMMMMMMMMMMMMMMMMNMMMNN:--.```......``````..-------------:/shmNMMMMMMMMMMMMMMMMMMMMMMdo:<br/>
            ----------oNMMMMMMMMMMMMMMMMMNMMMMNy.-.```....```````.........--:/oydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN<br/>
            :--------sNMMMMMMMMMMMMMMMMMMMMMMMMNy/-..`..`````````.....-/+shmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            ::------oMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmhysoo+///+++osyyhdNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            ::::---oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            :::::-+NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            :::::/NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            :::::mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            ::::yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            :::+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            :::mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
            ::+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM<br/>
          </div>
        </div>
        <div id="Apps-link" key="Apps-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
        <div id="Audio-link" key="Audio-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
        <div id="Design-link" key="Design-page" className="Main-page-block" onClick={(e) => this.props.changeDisplay(e)}></div>
      </div>
    )
  }
}

export default MainPage;
