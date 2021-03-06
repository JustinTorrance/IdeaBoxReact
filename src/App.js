import React, { Component } from 'react';
import NewIdeaForm from './NewIdeaForm.js';
import IdeasContainer from './IdeasContainer.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }

  addIdea = (idea) => {
    const newIdea = { ...idea, id: Date.now() }
    const ideas = [...this.state.ideas, newIdea]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas})
  }


//passing addIdea function down to NewIdeaForm as a prop
//this gives our form access to the function
  render() {
    return (
      <div>
        <NewIdeaForm addIdea={this.addIdea} />
        <IdeasContainer ideas={this.state.ideas}
                        removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
