import {NavigateFunction, useNavigate} from "react-router-dom";

export interface RouteComponentProps {
    navigate: NavigateFunction;
}
export const withRouter = (Component: any) => {
    let Wrapper: (props: any) => JSX.Element;
    Wrapper = (props) => {
        const navigate = useNavigate()
        return <Component navigate={navigate} {...props}></Component>
    };
    return Wrapper
}