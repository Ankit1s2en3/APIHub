import React from 'react';
import { ApiHubAdmin, userProfiles } from 'layer7-apihub';
import { Admin, Resource } from 'react-admin';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

import LoginPage from './authentication';
import ResetPasswordPage from './authentication';
import NewPasswordPage from './authentication';
import AccountSetupPage from './authentication';
import SignUpPage from './authentication';

import  AuthenticatedLayout  from './layout/AuthenticatedLayout';
import  LandingPage  from './LandingPage';
import HomePage from './homepage/HomePage';
import { dataProvider } from './dataProvider';
import  apis  from './apis/apis';
import applications  from './applications';
import  documents  from './documentation';
import CustomApplications from './customApplications/customApplications';
import { theme } from './theme';
import swagger from './customApplications/swagger';
import  customApiList  from './customApplications/customApiList';
import fakeDataProvider from './fakeDataProvider';

const App = () => {
    const { PAGE_TITLE, APIHUB_URL, TENANT_NAME } = global.APIHUB_CONFIG;

    return (
        <>
            <Helmet>
                <title>{PAGE_TITLE}</title>
            </Helmet>
            <Admin
            // {/* <ApiHubAdmin
            //     url={APIHUB_URL} // Will be guessed by ApiHubAdmin if not defined
            //     tenantName={TENANT_NAME} // Will be guessed by ApiHubAdmin if not defined
            //     layout={AuthenticatedLayout}
            //     loginPage={LoginPage}
            //     resetPasswordPage={ResetPasswordPage}
            //     newPasswordPage={NewPasswordPage}
            //     accountSetupPage={AccountSetupPage}
            //     signUpPage={SignUpPage}*/
            // }
            theme={theme}
            layout={AuthenticatedLayout}
                customRoutes={[
                    <Route path="/dashboard" exact component={HomePage} />,
                    <Route path="/apps" exact component={CustomApplications} />,
                    <Route path="/swagger/:id" exact component={swagger} />,
                    <Route path="/dashboard" exact component={HomePage} />,
                    <Route path="/wiki" component={documents.list} />,
                ]}
                // dataProvider={dataProvider(APIHUB_URL, TENANT_NAME)}
                dataProvider={fakeDataProvider}
            > 
                <Resource name="apis"  list={customApiList} />
                <Resource name="applications" {...applications} />
                <Resource name="userProfiles" {...userProfiles} />
            {/* </ApiHubAdmin> */}
            </Admin>
        </>
    );
};

export default App;
