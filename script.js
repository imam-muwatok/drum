const drum = [
{
  keyCode: 81,
  keyTrigger: "Q",
  id: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  keyCode: 87,
  keyTrigger: "W",
  id: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  keyCode: 69,
  keyTrigger: "E",
  id: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  keyCode: 65,
  keyTrigger: "A",
  id: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  keyCode: 83,
  keyTrigger: "S",
  id: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  keyCode: 68,
  keyTrigger: "D",
  id: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  keyCode: 90,
  keyTrigger: "Z",
  id: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  keyCode: 88,
  keyTrigger: "X",
  id: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  keyCode: 67,
  keyTrigger: "C",
  id: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



const styleSpan = {
  padding: "10px",
  border: "solid 2px #4e4fff",
  background: "#9a9bff",
  "border-radius": "10px" };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      displayText: "",
      styleText: {} };

  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(e) {
    this.playSound(String.fromCharCode(e.keyCode));
  }

  playSound(e) {
    const sound = document.getElementById(e);
    const text = sound.innerHTML;
    sound.play();
    this.setState({
      displayText: text,
      styleText: styleSpan });

    console.log(text);
  }

  render() {
    const DrumPad = drum.map((x, i) => {
      return /*#__PURE__*/(
        React.createElement("div", {
          className: "drum-pad",
          onClick: this.playSound.bind(this, x.keyTrigger),
          id: x.id }, /*#__PURE__*/

        React.createElement("audio", { className: "clip", id: x.keyTrigger, src: x.url },
        x.id), /*#__PURE__*/

        React.createElement("p", null, x.keyTrigger)));


    });

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h2", null, "Drum Machine"), /*#__PURE__*/
      React.createElement("div", { className: "container" }, DrumPad), /*#__PURE__*/
      React.createElement("p", { id: "display" }, /*#__PURE__*/
      React.createElement("span", { style: this.state.styleText }, this.state.displayText))), /*#__PURE__*/


      React.createElement("p", { id: "foot" })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));