import React from 'react'
import { 
    Redirect,
    Link
} from 'react-router-dom'



class PageNotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showRedirect: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showRedirect: true
            });
        }, 5000);
    }


    render () {
        return (
            <div>
                <h1>Sorry buckaroo.</h1>
                <Link to='/'>Click here to go home (or you will be re-directed home in 10 seconds)
                </Link>
                { this.state.showRedirect ? <Redirect to="/"/> : null }
            </div>
        );
        }
}



export default PageNotFound