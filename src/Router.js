import React from 'react';
import { Stack, Actions, Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
  <Router sceneStyle={{ backgroundColor: '#fff' }}>
    <Scene key="root" modal hide NavBar>
        <Scene key="auth" initial title="Namaste" >
          <Scene key="login" component={LoginForm} />
        </Scene>
        <Scene key="main">
          <Scene
            key="employeelist"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            initial
          />
        <Scene
          key="EmployeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key='employeeEdit'
          component={EmployeeEdit}
          title='Employee Edit'
        />
      </Scene>
    </Scene>
  </Router>
  );
};

export default RouterComponent;
