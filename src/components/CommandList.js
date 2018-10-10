import React, {Component} from 'react';


class CommandList extends Component {
  constructor(props){
    super(props);
    this.state = {
      commands: []
    };
  }

  componentDidMount(){
    this.setState({
      commands: this.props.commands
    });
  }

  handleCommandClick(settings){
    const Word = window.Word;
    const Office = window.Office;
    let text = settings.text;
    let bold = settings.style.bold;
    let color = settings.style.color;
    let highlight = settings.style.highlight;
    let location = settings.style.location;
    Word.run( (context) => {
      const doc = context.document;
      let selection = doc.getSelection();
      selection.insertText(" ["+text+"]", location);
      context.load(selection, "font");
      return context.sync().then( () => {
        selection.font.color = color;
        selection.font.bold = bold; 
        if (highlight != ""){
          selection.font.highlightColor = highlight;
        }
        return context.sync()
        .catch((err) => {console.log("Font Error:",err);});
      })
    })
      .catch((err) => {console.log("Insert Error:",err);}); 
  }

  render() {
    let commands = this.state.commands.map(command => {
      return (
        <button key={command.id} 
          className="button button-command"
          onClick={() => this.handleCommandClick(command.settings)}
        >
          {command.title}
        </button>
      );
    });
    return (
      <div className="CommandList">
        {commands}
      </div>

    );
  }
}

export default CommandList;