import React from 'react';
import {UserLayout} from "../../layout";
import {SignIn} from "../../components"

export const SignInPage: React.FC = (props) => {
  console.log(props);
  return (
      <UserLayout>
          <SignIn></SignIn>
      </UserLayout>
  )
}