import * as React from 'react';
import {
    Route, Switch, RouteProps, Redirect,
} from 'react-router-dom';
const { lazy, Suspense } = React;
import Home from '@pages/Home';
import Product from '@pages/Product';
import NotFound from '@pages/NotFound';
import Loading from '@components/Loading';
import Nav from '@components/Nav';

interface YDProps extends RouteProps {
    auth?: boolean;
}
export const routes: YDProps[] = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/product',
        exact: true,
        component: Product,
    },
];

// 对状态属性进行监听
const Routes = () => (
    <Suspense fallback={<Loading />}>
        <Nav />
        <Switch>
            {/* <Redirect from="/" to="/home" /> */}
            {
                routes.map((r, index) => {
                    const { path, exact, component } = r;
                    const LazyCom = component;
                    return (
                        <Route
                            key={index}
                            path={path}
                            exact={exact}
                            render={(props) => (<LazyCom {...props} />)}  
                        />
                    );
                })
            }
            <Route component={NotFound} />
        </Switch>
    </Suspense>
);

export default Routes;