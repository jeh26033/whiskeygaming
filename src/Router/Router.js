import Leaderboard from '../leaderboard.js'
import * as routes from '../../routes.js'

render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path="/" render={() => (
            <Redirect to={routes.LATEST} />
          )}/>

    		<Route exact path={routes.LATEST} render={routeProps =>
              <App {...routeProps} state={this.state} recallScene={this.recallScene}/>
        	} />

    	<Route exact path={routes.LEADERBOARD} render={routeProps =>
              <Leeaderboard {...routeProps} state={this.state} recallScene={this.recallScene} />
            } />

        </main>
      </BrowserRouter>
    )
  }
}

export default Router