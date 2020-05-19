import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from 'Pages/HomePage/HomePage'
import Mediacenter from 'Pages/Mediacenter/Mediacenter'
import NewsArticle from 'Pages/NewsArticle/NewsArticle'

export const HOME_PAGE = '/'
export const MEDIA_CENTER = '/media'
export const MEDIA_ARTICLE = '/media/article'

// TODO apply async import of page components to split the initial chunk

class Routes extends PureComponent {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path={HOME_PAGE} component={HomePage} />
          <Route exact path={MEDIA_CENTER} component={Mediacenter} />
          <Route exact path={MEDIA_ARTICLE} component={NewsArticle} />
        </Switch>
      </main>
    )
  }
}

export default Routes
