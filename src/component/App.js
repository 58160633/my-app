import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: function() {
                let sum = 0;
                for(let i=0;i < this.array.length;i++){
                    if(this.array[i].status === true){
                        sum++;
                    } 
                }
                console.log(sum);
                return sum;
            },
            array: [
                // { id:0, name: "กินข้าว", status:true },

                // { id: 2, num: 2 },
                // { id: 3, num: 3 },



            ]
        };
    }
    onAdd = () => {
        this.setState({ i: this.state.i + 1 })

    }
    onMinus = () => {
        this.setState({ i: this.state.i - 1 });
    }

    insert = (e) => {
        let id = (this.state.array.length == 0) ?
            0: this.state.array[this.state.array.length - 1].id + 1;

        this.state.array.push({
            id: id,
            // id: this.state.array.length,
            name: e.target.Todolist.value,
            status: false
        });
        console.dir(this.state.success);
        e.target.Todolist.value = "";
        e.preventDefault();
        this.forceUpdate();
    }

    delete = (e) => {
        this.state.array.splice(e.target.value, e.target.value + 1);
        e.preventDefault();
        this.forceUpdate();
    }

    changeStatus = (e) => {
        let id = e.target.value;
        for(let i = 0; i < this.state.array.length; i++) {
            if(id == this.state.array[i].id) {
                this.state.array[i].status = !this.state.array[i].status;
            }
        }
        this.forceUpdate();
    }

    checkbox(value) {
        if (value.status) {
            return (
                <span>
                    <input onClick = {this.changeStatus} type="checkbox" value={value.id} checked></input>
                    <s>{value.name}</s>
                </span>
            );
        } else {
            return (
                <span>
                    <input onClick = {this.changeStatus} type="checkbox" value={value.id} ></input>
                    {value.name}
                </span>
            );
        }
    }

    render() {
        var list = this.state.array.map((value) => {
            return (
                <div key={value.id}>
                    {this.checkbox(value)}
                    <button onClick = {this.delete} value={value.id}>Delete</button>

               </div>


            );
        })
        return (

            <Fragment>
                <div />




                <div>

                    <h1>TodoList</h1>
                    <h2>Complete: {this.state.success()}/{this.state.array.length}</h2>
                    <form onSubmit={this.insert}>
                        <input type="text" name="Todolist"></input> &nbsp;
                        <input type="submit" value="Submit"/>
                    </form>
                    {/* <button onClick={this.onAdd}>ADD</button> */}

                    {/* <button onClick={this.onMinus}>Minus</button> */}

                    <div>
                        {list}
                    
                    
                    </div>





                </div>

            </Fragment>


        );
    }
}

export default App;