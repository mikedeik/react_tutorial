import React, {Component} from 'react';

class DropList extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favorite category is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select Category:
                        <select value={this.state.value} onChange={this.handleChange}>
                            {this.props.categories.map(category => {
                                return <option key = {category.id} value={category.name}>{category.name}</option>
                            })
                            }
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default DropList;