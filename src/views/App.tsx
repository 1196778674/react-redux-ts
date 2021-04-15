import React, {FC} from 'react';
import Layout from "../layout/index";
import { Switch, Route, Redirect } from 'react-router-dom'

import notFound from './404'
import home from './home'
import wenzhang from './pages/wenzhang'

const APP: FC = () => {
  return (
    <Layout>
        <Switch>
          <Route path="/home" component={home}/>
          <Route path="/wenzhang" component={wenzhang}/>
          <Redirect to="/home"/>
          <Route path="*" component={notFound}/>
        </Switch>
    </Layout> 
  )
}

export default APP