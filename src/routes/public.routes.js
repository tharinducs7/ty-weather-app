import { Route } from 'react-router-dom'
import React from 'react'
import PublicLayout from '../layouts/PublicLayout'

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <PublicLayout>
                    <Component {...props} />
                </PublicLayout>
            )}
        />
    )
}

export default PublicRoute