import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state={
            newRecipe:{
                title: "",
                imageURL: "",
                ingredients: [],
                instructions: "",
            },
            list: []
        }
    }

    updateInput(key, value){
        //update react state
        this.setState({
            newRecipe: {...this.state.newRecipe, [key]: value}
        });
    }

    addRecipe(){
        //create recipe with unique id
        const newRecipeTitle={
            id: 1+ Math.random(),
            value: this.state.newRecipe.title
        };

        //copy of current list of recipes
        const list = [...this.state.list];

        //add new recipe to list
        list.push(newRecipeTitle);

        //update state with new list and reset newRecipe input
        this.setState({
            list,
            newRecipeTitle:""
        });
    }

    deleteTitle(id){
        //copy current list of recipes
        const list = [...this.state.list];
        
        //filter out recipe title being deleted
        const updatedList = list.filter(title => title.id !== id);

        this.setState({list: updatedList})
    }
    render() {
        console.log(<Form/>)
        return (
            <div className="Form">
                <div> New Recipe
                    <br/>
                    <input 
                    type="text"
                    placeholder="Type title here..."
                    value={this.state.newRecipe.title}
                    onChange={e => this.updateInput("title", e.target.value)}
                    />
                    <input type="text"
                    placeholder="Type image URL here..."
                    value={this.state.newRecipe.imageURL}
                    onChange={e => this.updateInput("imageURL", e.target.value)}
                    />
                    <button 
                    onClick={() => this.addRecipe()}
                    >
                        Add
                    </button>
                    <br/>
                    <ul>
                        {this.state.list.map((title, index) => {
                            return(
                                <li key={title.id}>
                                    {title.value}
                                    <button onClick={() => this.deleteTitle(title.id)}>X</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Form