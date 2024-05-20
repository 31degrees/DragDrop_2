import React, { Component } from "react";
import { LayoutChangeEvent } from "react-native";
export declare type Display = "row" | "collumn";
export declare type LayoutProps = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export interface ContainerState {
    layout: LayoutProps | null;
    mounted: boolean;
}
export interface ContainerProps {
    changed?: boolean | null;
    children?: React.ReactNode;
}
declare class Container<P extends ContainerProps, S extends ContainerState> extends Component<P, S> {
    ref: any;
    onLayoutCallback: () => void;
    UNSAFE_componentWillReceiveProps({ changed }: ContainerProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onSetLayout: (e: LayoutChangeEvent | null) => void;
    render(): JSX.Element;
}
export default Container;
